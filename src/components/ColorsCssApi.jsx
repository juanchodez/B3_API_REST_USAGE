import { useEffect } from 'react'
import { useState } from 'react'

export const ColorsCssApi = () => {
    const [colors, setColors] = useState([]);

    const [error, setError] = useState(null);

    const fetchData = async () => {
        try{
            const response = await fetch('https://api.sampleapis.com/csscolornames/colors');
            const data = await response.json();

            setColors(data);

        } catch (error) {

            console.log('Error al realizar la solicitud', error);
            setError('Error al realizar la solicitud');
        }
    };

    useEffect (() => {
        fetchData();
    },[]);
  
    if(error){
        return (
            <div className='alert alert-danger text-center' role='alert'>
                {error}
            </div>
        );
    }
  
    return (
    <div className='container mt-5'>
        <h2 className='text-center text-white mb-4'>Paleta de colores</h2>
        <div className='row'>
            {colors.map((color,index)=>(
            <div className='col-md-4 mb-4' style= {{display: index < 20 ? "" : "none"}} key={index}>
                <div style={{backgroundColor: color.hex} }>
                    <h1>Color: {color.name}</h1>
                </div>

            </div>
            ))}
        </div>
      
    </div>
  )
}


