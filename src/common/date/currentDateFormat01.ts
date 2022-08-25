export const currentDateFormat01 = (): string => {
  const time = new Date()
  const date = time.getDate().toString().padStart(2, '0')
  const month = (time.getMonth() + 1).toString().padStart(2, '0')
  const year = time.getFullYear().toString().slice(-2)
  return `${date}/${month}/${year}`
}
