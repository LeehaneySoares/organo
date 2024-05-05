import { container, text } from '../../components'
import { Repeat } from '../../elements'
import logo from './assets/logo.png'
import Image from './image'
import schema from './schema'

const Footer = () => (
  <footer className='footer'>
    <container.Section className='footer__container'>
      <ul className='footer__socialMedia'>
        <Repeat iterator={schema.images} component={Image} />
      </ul>
      <figure className='footer__logo'>
        <img src={logo} alt={schema.altLogo} />
      </figure>
      <div className='footer__author'>
        <text.Strong>{schema.authorText}</text.Strong>
      </div>
    </container.Section>
  </footer>
)

export default Footer