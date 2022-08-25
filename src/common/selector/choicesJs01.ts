import Choices from 'choices.js/public/assets/scripts/choices.js'

interface IChoice {
  label: string,
  value: string
}

export type TChoice01 = IChoice[]

const mountedId = 'choicesJs01'

export const choicesJs01 = (): Choices => {
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

export const getChoicesJs01Value = (): string => {
  return document.querySelector(`#${mountedId} option`)?.getAttribute('value') as string
}
