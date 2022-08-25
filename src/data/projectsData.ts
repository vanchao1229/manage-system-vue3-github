import axios from 'axios'
import { API_LIST } from '@/api'

interface IProjectsDataSingle {
  budget: string,
  company: {
    alt: string,
    avatar: string,
    title: string
  },
  members: Array<{
    avatar: string,
    alt: string
  }>,
  process: string
}

// export interface IProjectsData extends Array<IProjectsDataSingle>{}

export type TProjectsData = IProjectsDataSingle[]

export const getProjectsData = (that: Record<string, unknown>): void => {
  axios.post(
    API_LIST.data_01,
    {},
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
    const _data = res.data
    if (_data.code === 3200) {
      that.cardData01 = _data.data
      return false
    }
  })
}
