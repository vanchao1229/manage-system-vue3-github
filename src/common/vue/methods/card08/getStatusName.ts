export type TGetStatusName = (arg01: number) => string

export const getStatusName = (status: number): string => {
  const statusList = {
    11: 'online',
    12: 'offline'
  }
  return !statusList[status] ? 'unknown' : statusList[status]
}
