const ship = document.getElementById('ship')

window.onkeydown = function (event) {
  if (event.key === 'ArrowLeft') {
    const y = parseInt(ship.style.left.replace('px', ''))
    ship.style.left = y - 10 + 'px'
  }
  if (event.key === 'ArrowRight') {
    const y = parseInt(ship.style.left.replace('px', ''))
    ship.style.left = y + 10 + 'px'
  }
}
