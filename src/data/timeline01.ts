interface ITimeline01DataSingle {
  time: string,
  descript: string,
  iconName: string,
  iconColor: string
}

interface ITimeline01 {
  data: ITimeline01DataSingle[],
  other: {
    percent: number
  }
}

export type TTimeline01Data = ITimeline01DataSingle[]

type TTimeline01 = ITimeline01

const _data = {
  data: [
    {
      time: '22 DEC 7:20 PM',
      descript: '$2400, Design changes',
      iconName: 'ni-bell-55',
      iconColor: 'text-success'
    },
    {
      time: '21 DEC 11 PM',
      descript: 'New order #1832412',
      iconName: 'ni-html5',
      iconColor: 'text-danger'
    },
    {
      time: '21 DEC 9:34 PM',
      descript: 'Server payments for April',
      iconName: 'ni-cart',
      iconColor: 'text-info'
    },
    {
      time: ' 20 DEC 2:20 AM',
      descript: 'New card added for order #4395133',
      iconName: 'ni-credit-card',
      iconColor: 'text-warning'
    },
    {
      time: '18 DEC 4:54 AM',
      descript: 'Unlock packages for development',
      iconName: 'ni-key-25',
      iconColor: 'text-primary'
    },
    {
      time: '17 DEC',
      descript: 'New order #9583120',
      iconName: 'ni-money-coins',
      iconColor: 'text-dark'
    }
  ],
  other: {
    percent: 24
  }
}

export const timeline01 = (): TTimeline01 => {
  return _data
}
