export const sidenavTypeOnResize = (): void => {
  const elements = document.querySelectorAll<HTMLElement>('.sideNavTypeAction01')
  if (window.innerWidth < 1200) {
    elements.forEach(
      (el: HTMLElement) => el.classList.add('disabled')
    )
  } else {
    elements.forEach(
      (el: HTMLElement) => el.classList.remove('disabled')
    )
  }
}
