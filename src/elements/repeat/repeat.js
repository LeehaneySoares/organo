function Repeat ({ iterator, component }) {
  return iterator?.map((item, index) => component(item, index))
}

export default Repeat