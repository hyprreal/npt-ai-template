export function formatDate(date: string) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return formatter.format(new Date(date))
}

export function formatTelephoneNumber(phoneNumber: string) {
  const cleanedNumber = phoneNumber.replace(/\D/g, '')

  const countryCode = cleanedNumber.slice(0, 3)
  const areaCode = cleanedNumber.slice(0, 3)
  const prefix = cleanedNumber.slice(3, 6)
  const lineNumber = cleanedNumber.slice(6, 10)

  return `+(${areaCode}) ${prefix}-${lineNumber}`
}
