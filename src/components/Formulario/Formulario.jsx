import "./formulario.css";

import Input from "../Input/Input";
import Separador from "../Separador/Separador";
import Icon from "../Icon/Icon";

function Formulario() {
  return (
    <form className="formulario">
      <h2 className="formulario-title">Log in</h2>
      <div className="formulario-inputs">
        <Input type="email" placeholder="Email" mb={true} />
        <Input type="password" placeholder="Password" />
      </div>

      <div className="formulario-remember">
        <Input type="checkbox" />
        <span>Remember me</span>
      </div>

      <div className="formulario-button">
        <button>Login</button>
      </div>

      <span className="formulario-forgot">Forgot password?</span>

      <Separador />

      <div className="formulario-redes">
        <Icon src="/instagram.svg" alt="instagram icon" />
        <Icon src="/facebook.svg" alt="facebook icon" />
      </div>
    </form>
  );
}

export default Formulario;
