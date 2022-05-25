import "./ButtonMenhir.css";

const ButtonMenhir = ({ handleClick }) => {
  return (
    <div className="container">
      <button onClick={handleClick} className="button button--menhir">
        <span>Visit</span>
      </button>
    </div>
  );
};

export default ButtonMenhir;
