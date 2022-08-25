import { Modal } from 'bootstrap'

const _id = 'form01Modal'

export const getForm01ModalEl = (): HTMLElement => {
  return document.getElementById(_id) as HTMLElement
}

const getForm01Modal = (): Modal => {
  const modal = new Modal(getForm01ModalEl(), {
    keyboard: false
  })
  return modal as Modal
}

export const showForm01Modal = (): void => {
  // console.log('showForm01Modal')
  const modal = getForm01Modal()
  modal.show()
}

export const hideForm01Modal = (): void => {
  // console.log('close Form01Modal')
  const modal = Modal.getInstance(getForm01ModalEl()) as Modal
  // console.log(modal)
  modal.hide()
}
