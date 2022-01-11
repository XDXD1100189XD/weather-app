import React, { useState, useEffect } from 'react'
import './tempApp.css'

function TempApp() {
    const [city, setCity] = useState(null);
    const [input, setInput] = useState('');

   useEffect(() => {
       const fetchApi = async () => {
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=ea0ee8ee3043bf82a4fa2bc14c92568a`;
            const response = await fetch(url);
           // console.log(response);
            const resJson = await response.json();

            console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    },[input])
    return (
     <>
            <div className="box">
                
            <div className="inputData">
                   < input type="text" className="inputValue"
                    value={input} onChange={(e) => setInput(e.target.value)}
                        />
            </div>
            
                {!city ? (<p> Not found </p>) :
                    (<>
                        <div className="info">
                        <h2 className="location">
                                <i className="fas fa-street-view animate__animated animate__shakeX"></i>{input}
                        </h2>
                            <h1 className="temp ">{city.temp}' C</h1>
                        <h3 className="tempmin_max">Min: {city.temp_min}' C | Max: {city.temp_max}' C</h3>
                        </div>
                        

                     </>)
                    }

        </div>
     </>


    );
}

export default TempApp;
