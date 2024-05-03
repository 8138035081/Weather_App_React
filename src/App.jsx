import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const ar=[
    {weather:"few clouds",image:"/public/few.gif"},
    {weather:"scattered clouds",image:"/public/sct.gif"},
    {weather:"broken clouds",image:"/public/broken.gif"},
    {weather:"overcast clouds",image:"/public/cl.gif"},
    {weather:"mist",image:"/public/mist.jpg"},
    {weather:"overcast clouds",image:"/public/cl.gif"},

  ]

  const [data, setData] = useState('');
  const [weather, setWeather] = useState({});


  async function getWeather() {
    if (data.length !== 0) {
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=44806c261cb5611c7d181a490b8a7b1e`);
        setWeather(res.data);
      } catch (error) {
        alert('Error fetching weather data');
      }
    } else {
      alert('Empty location');
    }
  }

  async function defaultCity() {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kochi&appid=44806c261cb5611c7d181a490b8a7b1e`);
    setWeather(res.data);
  }

  useEffect(() => {
    defaultCity();
  }, []);

  return (
    <>
      <section className="vh-100" style={{ backgroundImage: `url(${weather.main && ar.find(item => item.weather === weather.weather[0].description)?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-8 col-xl-6 ">
              <h3 className="mb-4 pb-2 fw-bold color-dark text-uppercase" align="center" style={{ fontSize: '2.2rem', fontFamily: 'Arial, sans-serif', letterSpacing: '1px' }}>Weather Forecast</h3>
              <div className="input-group rounded mb-3">
                <input type="search" className="form-control rounded outline-dark" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{ borderRadius: '10px' }} onChange={(e) => setData(e.target.value)} />
                <button className="btn btn-dark rounded-end" onClick={getWeather} type="button">
                  Search
                </button>
              </div>
              
              {weather.main && (
                <>
                
                  <h4 className="mb-0">{weather.name}, {weather.sys.country}</h4>
                  <p className="display-2 my-3" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>{(weather.main.temp - 273.15).toFixed(2)}°C</p>
                  <p className="mb-2">Feels Like: <strong>{(weather.main.feels_like - 273.15).toFixed(2)} °C</strong></p>
                  <h5 style={{ fontStyle: 'italic', color: '#555' }}>{weather.weather[0].description}</h5>
                  <h5>Humidity: {weather.main.humidity}</h5>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {

//   const ar=[
//     {weather:"few clouds",image:"/public/few.gif"},
//     {weather:"scattered clouds",image:"/public/sct-clouds.jpg"},
//     {weather:"broken clouds",image:"/public/br-clouds.jpg"},
//     {weather:"overcast clouds",image:"/public/cl.gif"},
//   ]

//   const [data, setData] = useState('');
//   const [weather, setWeather] = useState({});


//   async function getWeather() {
//     if (data.length !== 0) {
//       try {
//         const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=44806c261cb5611c7d181a490b8a7b1e`);
//         setWeather(res.data);
//       } catch (error) {
//         alert('Error fetching weather data');
//       }
//     } else {
//       alert('Empty location');
//     }
//   }

//   async function defaultCity() {
//     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kochi&appid=44806c261cb5611c7d181a490b8a7b1e`);
//     setWeather(res.data);
//   }

//   useEffect(() => {
//     defaultCity();
//   }, []);

//   return (
//     <>
//       <section className="vh-100" style={{ backgroundImage: `url(${weather.main && ar.find(item => item.weather === weather.weather[0].description)?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-md-10 col-lg-8 col-xl-6 ">
//               <h3 className="mb-4 pb-2 fw-bold color-dark text-uppercase" align="center" style={{ fontSize: '2.2rem', fontFamily: 'Arial, sans-serif', letterSpacing: '1px' }}>Weather Forecast</h3>
//               <div className="input-group rounded mb-3">
//                 <input type="search" className="form-control rounded outline-dark" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{ borderRadius: '10px' }} onChange={(e) => setData(e.target.value)} />
//                 <button className="btn btn-dark rounded-end" onClick={getWeather} type="button">
//                   Search
//                 </button>
//               </div>
              
//               {weather.main && (
//                 <>
//                   <h4 className="mb-0">{weather.name}, {weather.sys.country}</h4>
//                   <p className="display-2 my-3" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>{(weather.main.temp - 273.15).toFixed(2)}°C</p>
//                   <p className="mb-2">Feels Like: <strong>{(weather.main.feels_like - 273.15).toFixed(2)} °C</strong></p>
//                   <h5 style={{ fontStyle: 'italic', color: '#555' }}>{weather.weather[0].description}</h5>
//                   <h5>Humidity: {weather.main.humidity}</h5>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default App;
