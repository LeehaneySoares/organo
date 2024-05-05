function converter (form, target) {
  const data = Object.fromEntries(new FormData(form))

  return {
      ...data,
      job: target.selectedTime
  }
}

export default converter