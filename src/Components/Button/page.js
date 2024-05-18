const Button = (props) => {
  return (
      <button
          id={props.id}
          className={props.className}
          disabled={props.disabled}
          onClick={props.clickHandler}
          type={props.type}
          autoFocus={props.autofocus}
          value={props.buttonText}
          name={props.name ? props.name : 'cta button'}
      >
         <span>{props.buttonText}</span>
      </button>
  )
}

export default Button