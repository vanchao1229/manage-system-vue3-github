import Choices from 'choices.js/public/assets/scripts/choices.js'

interface IChoice {
  label: string,
  value: string
}

export type TChoice02 = IChoice[]

const mountedId = 'choicesJs02'

export const choicesJs02 = (): Choices => {
  const _el = document.querySelector(`#${mountedId}`) as HTMLSelectElement

  const _option = {
    removeItemButton: true,
    maxItemCount: 10,
    duplicateItemsAllowed: true
    // choices: optionChoice
  }

  const _choice = new Choices(_el, _option)

  return _choice
}

export const getChoicesJs02Value = (): string => {
  return document.querySelector(`#${mountedId} option`)?.getAttribute('value') as string
}

export const removeChoicesJs02Option = (): void => {
  const _ = document.querySelector(`#${mountedId} option`)?.remove()
}
