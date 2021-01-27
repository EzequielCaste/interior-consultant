const menuBurger = document.querySelector('.fa-bars')
const menu = document.querySelector('.menu')
const menuCross = document.querySelector('.fa-times')

menuBurger.addEventListener('click', () => {
  menu.classList.toggle('show')
  menuCross.classList.toggle('show')
  menuCross.setAttribute('style', 'z-index: 2')
})

menuCross.addEventListener('click', () => {
  menu.classList.toggle('show')
  menuCross.classList.toggle('show')
  menuCross.setAttribute('style', 'z-index: 0')
})