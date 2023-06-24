import './formLogin.css';
import { useNavigate } from 'react-router-dom';
const FormLogin = () => {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <div className="boxForm">
      <form onSubmit={handleSubmit}>
        <div className="boxInput">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" />
        </div>
        <div className="boxInput">
          <label htmlFor="pass">Contraseña:</label>
          <input type="text" id="pass" />
        </div>
        <button className="btnForm">Ingresar</button>
      </form>
    </div>
  );
};
export default FormLogin;
