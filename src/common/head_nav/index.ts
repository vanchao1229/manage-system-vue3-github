import { fixedPlugin } from './fixedPlugin'
import { sideBarType } from './sideBarType'
import { sidenavTypeOnResize } from './sidenavTypeOnResize'
import { search01OnFocus, search01OnFocusOut } from './search01'

export const navbarBlurOnScroll = (id:string): void => {
  const navbar = document.getElementById(id)
  const navbarScrollActive = navbar ? navbar.getAttribute('navbar-scroll') : false
  const scrollDistance = 5
  const classes = ['position-sticky', 'blur', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky']
  const toggleClasses = ['shadow-none']

  if (navbarScrollActive === 'true') {
    window.onscroll = debounce(function () {
      if (window.scrollY > scrollDistance) {
        blurNavbar()
      } else {
        transparentNavbar()
      }
    }, 10)
  } else {
    window.onscroll = debounce(function () {
      transparentNavbar()
    }, 10)
  }

  function blurNavbar (): void {
    navbar!.classList.add(...classes)
    navbar!.classList.remove(...toggleClasses)

    toggleNavLinksColor('blur')
  }

  function transparentNavbar (): void {
    if (navbar) {
      navbar.classList.remove(...classes)
      navbar.classList.add(...toggleClasses)

      toggleNavLinksColor('transparent')
    }
  }

  function toggleNavLinksColor (type: string): void {
    const navLinks = document.querySelectorAll('.navbar-main .nav-link')
    const navLinksToggler = document.querySelectorAll('.navbar-main .sidenav-toggler-line')

    if (type === 'blur') {
      navLinks.forEach(element => {
        element.classList.remove('text-body')
      })

      navLinksToggler.forEach(element => {
        element.classList.add('bg-dark')
      })
    } else if (type === 'transparent') {
      navLinks.forEach(element => {
        element.classList.add('text-body')
      })

      navLinksToggler.forEach(element => {
        element.classList.remove('bg-dark')
      })
    }
  }
}

export const navbarFixed = function (): void {
  const el = document.getElementById('navbarFixed') as HTMLElement
  el.onclick = () => {
    const classes = ['position-sticky', 'blur', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky']
    const navbar = document.getElementById('navbarBlur')

    if (!el.getAttribute('checked')) {
      navbar!.classList.add(...classes)
      navbar!.setAttribute('navbar-scroll', 'true')
      navbarBlurOnScroll('navbarBlur')
      el.setAttribute('checked', 'true')
    } else {
      navbar!.classList.remove(...classes)
      navbar!.setAttribute('navbar-scroll', 'false')
      navbarBlurOnScroll('navbarBlur')
      el.removeAttribute('checked')
    }
  }
}

const debounce = <F extends ((...args: any) => any)>(func: F, waitFor: number) => {
  const timeout = 0

  const debounced = (...args: any) => {
    clearTimeout(timeout)
    setTimeout(() => func(...args), waitFor)
  }

  return debounced as (...args: Parameters<F>) => ReturnType<F>
}

export {

  fixedPlugin,

  sideBarType,

  sidenavTypeOnResize,

  search01OnFocus,

  search01OnFocusOut

}
