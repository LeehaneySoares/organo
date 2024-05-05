import container from '../container'
import arrowLeft from './assets/arrowLeft.svg'
import arrowRight from './assets/arrowRight.svg'

const Metro = (metro) => (
  <container.Div className='metro'>
    <div className='metro__inner' style={{ width: metro.maxWidth, transform: `translateX(-${metro.offSetPercentage}%)` }}>
      {metro.props.children}
    </div>
    <button type='button' className='metro__arrowLeft' onClick={() => metro.moveLeft()}>
      <img src={arrowLeft} alt='arrow left' />
    </button>
    <button type='button' className='metro__arrowRight' onClick={() => metro.moveRight()}>
      <img src={arrowRight} alt='arrow right' />
    </button>
  </container.Div>
)

export default Metro