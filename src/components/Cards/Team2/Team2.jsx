import { useState, useEffect } from 'react';

export const Team2 = () => {
  const [respuesta, setRespuesta] = useState(null);
  const [ciudad, setCiudad] = useState('Córdoba');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/clima?ciudad=${ciudad}`);
        const data = await response.json();
        setRespuesta(data);
      } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
      }
    };

    fetchData();
  }, []);

  const handleCiudadChange = (event) => {
    setCiudad(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8081/api/clima?ciudad=${ciudad}`);
      const data = await response.json();
      setRespuesta(data);
    } catch (error) {
      console.error('Error al obtener los datos del clima:', error);
    }
  };

  return (
    <div className="card">
      <h1>Clima</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="ciudadInput">Ciudad:</label>
        <input type="text" id="ciudadInput" value={ciudad} onChange={handleCiudadChange} />
        <button type="submit">Obtener Clima</button>
      </form>
      <br />
      {respuesta ? (
        <>
          <p><strong>Ciudad: </strong>{respuesta.name}</p>
          <p><strong>Provincia: </strong>{respuesta.region}</p>
          <p><strong>País: </strong>{respuesta.country}</p>
          <p><strong>Temperatura: </strong>{respuesta.tempC}°C</p>
          <p><strong>Sensación térmica: </strong>{respuesta.feelsliceC}</p>
          <p><strong>Humedad: </strong>{respuesta.humidity} %</p>
          <p><strong>Viento: </strong>{respuesta.windKph} km/h</p>
          <p><strong>Última actualización: </strong>{respuesta.lastUpdated}</p>
        </>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
};
