import PropTypes from "prop-types";
import "./input.css";

function Input(props) {
  return (
    <div className="input">
      <input
        className={props.mb ? "input-field mb-2" : "input-field"}
        type={props.type || "text"}
        placeholder={props.placeholder}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  mb: PropTypes.bool,
};

export default Input;
