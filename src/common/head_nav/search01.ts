
const getEl = (): HTMLElement => {
  return document.querySelector('#search01') as HTMLElement
}

export const search01OnFocus = (): void => {
  const el = getEl()
  if (el?.parentElement?.classList?.contains('input-group')) {
    el.parentElement.classList.add('focused')
  }
}

export const search01OnFocusOut = (): void => {
  const el = getEl()
  if (el?.parentElement?.classList?.contains('input-group')) {
    el.parentElement.classList.remove('focused')
  }
}
