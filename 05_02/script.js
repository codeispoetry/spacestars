const ship = document.getElementById('ship')

window.onkeydown = function () {
  const y = parseInt(ship.style.left.replace('px', ''))
  ship.style.left = y + 10 + 'px'
}
