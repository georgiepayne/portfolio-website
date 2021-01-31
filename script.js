
const open = document.getElementById('open-menu')
const close = document.getElementById('close-menu')
const menu = document.getElementById('menu')

open.addEventListener('click', function() {

  open.style.display = 'none'
  menu.style.animation = 'menu-open 0.25s linear forwards'
  close.style.display = 'inline-block'
  menu.style.display = 'inline-block';

})

close.addEventListener('click', function() {

  close.style.display = 'none'
  menu.style.animation = 'menu-close 0.25s linear forwards'
  open.style.display = 'inline-block'
})