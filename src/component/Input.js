const Input = (props) => {
  return (
    <input
    type={props.type}
    name={props.name}
    onChange={props.changeHandler}
    />
  )
}

export default Input
