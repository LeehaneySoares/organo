export default function Option (props) {
  return (
    <option key={props.value} value={props.value}>{props.option}</option>
  )
}