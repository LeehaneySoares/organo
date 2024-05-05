const Card = (props) =>
  (person, index) =>
  <div className='card' key={index}>
    <div className='card__header' style={{ backgroundColor: props.colors.primary}} />
    <figure className='card__figure'>
      <img src={person.image} className='card__image' alt={person.name} />
      <figcaption className='card__caption'>
        <strong className='card__personName'>{person.name}</strong>
        <p className='card__personRole'>{person.office}</p>
      </figcaption>
    </figure>
  </div>

export default Card