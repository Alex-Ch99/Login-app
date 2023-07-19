import "./icon.css";

import PropTypes from "prop-types";

function Icon(props) {
  return (
    <div className="icon">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
