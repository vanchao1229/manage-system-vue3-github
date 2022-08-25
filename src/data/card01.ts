const data = [
  {
    title: 'Todday\'s Money',
    numberPre: '$',
    number: '53000',
    percent: '55',
    icon: 'ni-money-coins'
  },
  {
    title: 'Todday\'s Users',
    numberPre: '',
    number: '2000',
    percent: '3',
    icon: 'ni-world'
  },
  {
    title: 'New Clients',
    numberPre: '+',
    number: '3462',
    percent: '-2',
    icon: 'ni-paper-diploma'
  },
  {
    title: 'Sales',
    numberPre: '$',
    number: '103430',
    percent: '5',
    icon: 'ni-cart'
  }
]

export const card01 = (): Array<Record< string, string >> => {
  return data
}
