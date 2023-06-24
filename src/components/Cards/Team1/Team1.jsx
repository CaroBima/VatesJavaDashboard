import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

export const Team1 = () => { //SelectComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/programas')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  //Mostrando el nombre en un select
/*  return (
    <div className="card">
      <h1>Team1</h1>
    <select>
      {data.map((item, index) => (
        <option key={index} value={item.nombre}>
          {item.nombre}
        </option>
      ))}
    </select>
    </div>
  );*/
  
  const [selectedItem, setSelectedItem] = useState(null);

  const handleChange = (event) => {
    const selectedItemValue = event.target.value;
    const selectedItem = data.find((item) => item.nombre === selectedItemValue);
    setSelectedItem(selectedItem);
  };

  return (
    <div className="card">
      <h1>Cultura</h1>
      <br />
      <select onChange={handleChange}>
        {data.map((item, index) => (
          <option key={index} value={item.nombre}>
            {item.nombre}
          </option>
        ))}
      </select>
      {selectedItem && (
        <div>
          <br />
          <p><strong>Nombre: </strong>{selectedItem.nombre}</p>
          <p><strong>Link: </strong><a href='{selectedItem.link}'>{selectedItem.link}</a></p>
          <p><strong>Descripción: </strong>{ReactHtmlParser(selectedItem.descripcion)}</p>
          <p><strong>Depende de: </strong>{selectedItem.depende_de}</p>
        </div>
      )}
    </div>
  );
}



/*
export const Team1 = () => {
  const [respuesta, setRespuesa] = useState(undefined);
  useEffect(() => {
    const llamada = async () => {
      let response = await fetch('http://localhost:8081/api/programas');
      let data = await response.text();
      setRespuesa(data);
    };
    llamada();
  }, []); 

  

  return (
    <div className="card">
      <h1>Team1</h1>
      
      <p>{respuesta}</p>
    </div>
  );

};
*/
