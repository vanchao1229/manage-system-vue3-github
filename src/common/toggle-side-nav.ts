function toggleSideNav (): void {
  const iconSidenav = document.getElementById('iconSidenav')
  const sidenav = document.getElementById('sidenav-main')
  const body = document.getElementsByTagName('body')[0]
  const className = 'g-sidenav-pinned'

  if (body.classList.contains(className)) {
    body.classList.remove(className)
    if (sidenav != null) {
      setTimeout(function () {
        sidenav.classList.remove('bg-white')
      }, 100)
      sidenav.classList.remove('bg-transparent')
    }
  } else {
    body.classList.add(className)
    if (sidenav != null) {
      sidenav.classList.add('bg-white')
      sidenav.classList.remove('bg-transparent')
    }
    if (iconSidenav != null) {
      iconSidenav.classList.remove('d-none')
    }
  }
}

export { toggleSideNav }
