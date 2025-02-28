export function convertDate(date: string) {
  const dateParts = date.split('-')
  const year = parseInt(dateParts[0], 10)
  const month = parseInt(dateParts[1], 10) - 1
  const day = parseInt(dateParts[2], 10)
  return new Date(year, month, day, 0, 0, 0)
}

export function convertBackDate(date: string) {
  const year = new Date(date).getFullYear()
  const month = String(new Date(date).getMonth() + 1).padStart(2, '0')
  const day = String(new Date(date).getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
