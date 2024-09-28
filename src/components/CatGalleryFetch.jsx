import { useEffect } from 'react'
import { useState } from 'react'

export const CatGalleryFetch = () => {
  
    const [cats, setCats] = useState([]);

    const [error, setError] = useState(null);
 
    const fetchData = async () => {

        try{
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
            const data = await response.json();

            setCats(data);

        } catch (error) {

            console.log('Error al realizar la solicitud', error);
            setError('Error al realizar la solicitud');
        }

    };

    useEffect(() => {
        fetchData();
    },[]);

    if(error) {
        return(
            <div className='alert alert-danger text-center' role='alert'>
                {error}
            </div>
        );
    }

    return (
    <div className='container mt-5'>
        <h2 className='text-center text-white mb-4'>Galeria de gatos con fetch</h2>
        <div className='row overflow-auto vh-80' style= {{maxHeight: '80vh', overflowY: 'scroll'}}>
            
                {cats.map((cat,index) =>( 
                    <div className='col-md-4 mb-4' key={index}>
                        <div className='card h-100 d-flex flex-column'>
                            <img src={cat.url} alt="cat image" className='card-img-top img-fluid object-fit-cover' />
                        
                        <div className='card-body'>
                            <h5 className='card-title'>Gatito {index +1}</h5>
                            <p className='card-text'>Un lindo gato de muestra</p>
                        </div>
                        </div>
                    </div>
                )
                )}
            
        </div>
    </div>
  )
}
