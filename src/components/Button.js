import "../App.css";

const Button = ({ text, setDisplay, display, equation, setEquation }) => {
    const handleClick = () => {

    }

    return (
        <button className="button"
            onClick={handleClick}
        >
            {text}
        </button>
    );
}

export default Button;