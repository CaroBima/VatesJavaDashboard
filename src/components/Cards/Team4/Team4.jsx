import { useEffect, useState } from 'react';

export const Team4 = () => {
  const [respuesta, setRespuesa] = useState(undefined);
  useEffect(() => {
    const llamada = async () => {
      let response = await fetch('http://localhost:8080/api/greeting');
      let data = await response.text();
      setRespuesa(data);
    };
    llamada();
  }, []);

  return (
    <div className="card">
      <h1>Team4</h1>
      <p>{respuesta}</p>
    </div>
  );
};
