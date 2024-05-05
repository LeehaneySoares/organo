import './style.css'

const altImage = 'bannerPrincipal'

function Banner () {
  return (
    <header className='banner'>
      <picture className='banner__picture'>
        <source srcSet='./images/banner.webp' alt={altImage} type='image/webp' />
        <source srcSet='./images/banner.jpg' alt={altImage} type='image/jpg' />
        <img src='./images/banner.jpg' alt={altImage} type='image/jpg' />
      </picture>
    </header>
  )
}

export default Banner