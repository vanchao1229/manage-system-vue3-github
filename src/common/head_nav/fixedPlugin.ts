// Fixed Plugin

export const fixedPlugin = () => {
  if (document.querySelector('.fixed-plugin')) {
    const fixedPlugin = document.querySelector('.fixed-plugin') as HTMLElement | null
    const fixedPluginButton = document.querySelector('.fixed-plugin-button') as HTMLElement | null
    const fixedPluginButtonNav = document.querySelector('.fixed-plugin-button-nav') as HTMLElement | null
    const fixedPluginCard = document.querySelector('.fixed-plugin .card') as HTMLElement | null
    const fixedPluginCloseButton = document.querySelectorAll<HTMLElement>('.fixed-plugin-close-button')
    const navbar = document.getElementById('navbarBlur')
    const buttonNavbarFixed = document.getElementById('navbarFixed')
    const body = document.querySelector('body') as HTMLElement

    if (fixedPluginButton) {
      fixedPluginButton.onclick = () => {
        if (!fixedPlugin?.classList.contains('show')) {
          const _ = fixedPlugin?.classList.add('show')
        } else {
          const _ = fixedPlugin?.classList.remove('show')
        }
      }
    }

    if (fixedPluginButtonNav) {
      fixedPluginButtonNav.onclick = () => {
        if (!fixedPlugin?.classList.contains('show')) {
          const _ = fixedPlugin?.classList.add('show')
        } else {
          const _ = fixedPlugin?.classList.remove('show')
        }
      }
    }

    fixedPluginCloseButton.forEach((el: HTMLElement) => {
      el.onclick = () => {
        const _ = fixedPlugin?.classList.remove('show')
      }
    })

    body.onclick = (e) => {
      const _target = e.target as HTMLElement
      if (_target !== fixedPluginButton && _target !== fixedPluginButtonNav && _target.closest('.fixed-plugin .card') !== fixedPluginCard) {
        const _ = fixedPlugin?.classList.remove('show')
      }
    }

    if (navbar) {
      if (navbar.getAttribute('navbar-scroll') === 'true') {
        const _ = buttonNavbarFixed?.setAttribute('checked', 'true')
      }
    }
  }
}
