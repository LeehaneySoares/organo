import React, { Fragment, useState } from 'react'
import { Banner, container, Footer, Form, title } from './components'
import { Repeat } from './elements'
import schema from './shared/schema'
import teamList from './shared/teamList'
import Teams from './shared/teams'

function App () {
  const [teams, setTeams] = useState([])

  return (
    <Fragment>
      <Banner />
      <container.Section className='organo'>
        <Form onInsertTeam={(data) => setTeams([...teams, data])} />
      </container.Section>
      <container.Section className='organo__containerOrganization'>
        <title.H1 className='organo__myOrganization'>{schema.myOrganizationTitle}</title.H1>
      </container.Section>
      <Repeat iterator={teamList} component={Teams(teams)} />
      <Footer />
    </Fragment>
  )
}

export default App
