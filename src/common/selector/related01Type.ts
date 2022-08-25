import Choices from 'choices.js/public/assets/scripts/choices.js'

interface IItemSingleBase {
  label: string,

  value: string & number,
}

export interface IItemSingle {

  label: string,

  value?: string & number,

  selected?: boolean,

  disabled?: boolean,

  customProperties?: Record<string, string & number>,

  choices: IItemSingleBase[]

}

export type TItemParent = IItemSingle[]

export type TItemChild = { [key: string]: IItemSingle[] }

export const createSelector = (
  mountedId: string,

  option?: Record<string, unknown>
): Choices => {
  const _el = document.querySelector(`#${mountedId}`) as HTMLSelectElement

  let _option = {}

  if (option) _option = option

  return new Choices(_el, _option)
}
