const ship = document.getElementById('ship')
let y = 0

window.onkeydown = function () {
  y = y + 10
  ship.style.left = y + 'px'
}
