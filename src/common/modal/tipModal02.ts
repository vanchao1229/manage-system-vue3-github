import { Modal } from 'bootstrap'

const getModal02El = (): HTMLElement => {
  return document.getElementById('tipModal02') as HTMLElement
}

const getModal02 = (): Modal => {
  const modal = new Modal(getModal02El(), {
    keyboard: false
  })
  return modal as Modal
}

export const showModal02 = (msg: string, autoClose: boolean): void => {
  const body = document.querySelector('#tipModal02 .modal-body') as HTMLElement
  const el = getModal02El()
  const modal = getModal02()
  el.addEventListener('hidden.bs.modal', () => {
    const body = document.querySelector('#tipModal02 .modal-body') as HTMLElement
    body.innerText = ''
  })
  if (msg) {
    body.innerText = `${msg}`
  }
  modal.show()
  if (autoClose) {
    el.addEventListener('shown.bs.modal', () => {
      setTimeout(() => {
        hideModal02(modal)
      }, 3000)
    })
  }
}

export const hideModal02 = (modal: Modal): void => {
  // console.log('close modal')
  modal.hide()
}
