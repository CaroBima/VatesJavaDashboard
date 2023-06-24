//import { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  /*   let [persona, setPersona] = useState(undefined);
  useEffect(() => {
    const myFetch = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      console.log(data);
      setPersona(data[0]);
    };
    myFetch();
  }, []);
  console.log(persona); */

  return (
    <header>
      <div className="navigation">
        <ul>
          <li className="li-name">
            Hola
            <img className="miImagen" src={'/public/avatar.avif'}></img>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
