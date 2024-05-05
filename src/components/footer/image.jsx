const Image = (props) =>
  <li className='footer__image' key={props.text}>
    <img src={props.src} alt={props.text} />
  </li>

export default Image