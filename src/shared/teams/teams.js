import Collaborators from './collaborators' 
import hasCollaborator from './hasCollaborator'

const Teams = (teams) =>
  (props, index) =>
    hasCollaborator(teams, props) && Collaborators(teams)(props, index)

export default Teams