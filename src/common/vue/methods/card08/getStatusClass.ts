export type TGetStatusClass = ((arg01: number) => string)

export const getStatusClass = (status: number): string => {
  const baseClass = 'badge badge-sm'
  let _class = 'bg-gradient-success'
  if (status === 11) {
    _class = 'bg-gradient-success'
  }
  if (status === 12) {
    _class = 'bg-gradient-secondary'
  }
  return `${baseClass} ${_class}`
}
