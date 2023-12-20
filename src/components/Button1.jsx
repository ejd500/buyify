import "../styles/buttons.css"

const Button1 = ({text, color, backgroundColor}) => {
  return (
    <button style={{backgroundColor: backgroundColor, color: color}} className="btn1">
        {text}
    </button>
  )
}

export default Button1