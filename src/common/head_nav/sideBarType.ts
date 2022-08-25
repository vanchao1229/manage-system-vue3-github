export const sideBarType = (el: HTMLElement): void => {
  el.onclick = () => {
    const parent = el.parentElement!.children
    const color = el.getAttribute('data-class') as string

    const colors = [] as Array<string>

    for (let i = 0; i < parent.length; i++) {
      parent[i].classList.remove('active')
      colors.push(parent[i].getAttribute('data-class') as string)
    }

    if (!el.classList.contains('active')) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }

    const sidebar = document.querySelector('.sidenav') as HTMLElement

    for (let i = 0; i < colors.length; i++) {
      sidebar.classList.remove(colors[i])
    }

    sidebar.classList.add(color)
  }
}
