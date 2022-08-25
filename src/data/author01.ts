interface IAuth01DataSingle {
  avatar: string,
  uname: string,
  email: string,
  titleId: string,
  partId: string,
  status: number,
  registime: string
}

export type TAuth01DataSingle = IAuth01DataSingle

export type TAuth01Data = IAuth01DataSingle[]

const data = [
  {
    avatar: '/assets/img/team-2.jpg',
    uname: 'John Michael',
    email: 'john@demo01.com',
    titleId: '1101',
    partId: '1100',
    status: 11,
    registime: '23/04/18'
  },
  {
    avatar: '/assets/img/team-3.jpg',
    uname: 'Alexa Liras',
    email: 'alexa@demo01.com',
    titleId: '1202',
    partId: '1200',
    status: 12,
    registime: '11/01/19'
  },
  {
    avatar: '/assets/img/team-4.jpg',
    uname: 'Laurent Perrier',
    email: 'laurent@demo01.com',
    titleId: '1303',
    partId: '1300',
    status: 11,
    registime: '19/09/17'
  },
  {
    avatar: '/assets/img/team-2.jpg',
    uname: 'Michael Levi',
    email: 'michael@demo01.com',
    titleId: '1201',
    partId: '1200',
    status: 11,
    registime: '24/12/08'
  },
  {
    avatar: '/assets/img/team-3.jpg',
    uname: 'Richard Gran',
    email: 'richard@demo01.com',
    titleId: '1302',
    partId: '1300',
    status: 12,
    registime: '04/10/21'
  },
  {
    avatar: '/assets/img/team-1.jpg',
    uname: 'Pluto Harden',
    email: 'pluto@demo01.com',
    titleId: '1302',
    partId: '1300',
    status: 11,
    registime: '24/12/08'
  },
  {
    avatar: '/assets/img/team-2.jpg',
    uname: 'Antony Tika',
    email: 'antony@demo01.com',
    titleId: '1302',
    partId: '1300',
    status: 11,
    registime: '04/10/21'
  },
  {
    avatar: '/assets/img/team-1.jpg',
    uname: 'Tim Snak',
    email: 'tim@demo01.com',
    titleId: '1302',
    partId: '1300',
    status: 12,
    registime: '24/12/08'
  },
  {
    avatar: '/assets/img/team-2.jpg',
    uname: 'Oshima Mika',
    email: 'oshima@demo01.com',
    titleId: '1302',
    partId: '1300',
    status: 11,
    registime: '04/10/21'
  },
  {
    avatar: '/assets/img/team-4.jpg',
    uname: 'Miriam Eric',
    email: 'miriam@demo01.com',
    titleId: '1203',
    partId: '1200',
    status: 12,
    registime: '14/09/20'
  }
]

export const auth01Data = (): TAuth01Data => {
  return data
}
