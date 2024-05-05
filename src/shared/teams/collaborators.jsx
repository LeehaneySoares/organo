import { Card, container, Metro, title } from '../../components'

const Collaborators = (teams) =>
  (props, index) => (
    <section key={index} className='teams' style={{ backgroundColor: props.colors.secondary }}>
      <container.Hgroup className='teams__title'>
        <title.H2 className='teams__h2'>
          {props.name}
          <span className='teams__titleBar' style={{ backgroundColor: props.colors.primary }}/>
        </title.H2>
      </container.Hgroup>
      <Metro className='teams__metro'>
        {teams.map((team, index) => (team.job === props.id) && Card(props)(team, index))}
      </Metro>
    </section>
  )

export default Collaborators