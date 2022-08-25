
export const showTipModal01 = (): void => {
  const modal = document.getElementById('tipModal01') as HTMLElement
  modal.style.display = 'block'
}

export const hideTipModal01 = (): void => {
  const modal = document.getElementById('tipModal01') as HTMLElement
  modal.style.display = 'none'
}

export const closeTipModal01 = (): void => {
  const modal = document.getElementById('tipModal01') as HTMLElement
  const span = document.getElementsByClassName('close')[0] as HTMLElement
  span.onclick = () => {
    modal.style.display = 'none'
  }
}
