const mobnav = document.getElementById('mobnav')
const btnMenu = document.getElementById('btn__menu')
const btnClose = document.getElementById('btn__close')

function toggleMenu() {
  const isMenuVisible = mobnav.style.display === 'block'

  mobnav.style.display = isMenuVisible ? 'none' : 'block'
  btnMenu.style.display = isMenuVisible ? 'block' : 'none'
  btnClose.style.display = isMenuVisible ? 'none' : 'block'
}

btnMenu.addEventListener('click', toggleMenu)
btnClose.addEventListener('click', toggleMenu)
