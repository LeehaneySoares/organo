const hasCollaborator = (target, evaluate) => (
  target.some(team => team.job === evaluate.id)
)

export default hasCollaborator
