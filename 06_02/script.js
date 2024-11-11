const ship = document.getElementById('ship')

window.onkeydown = function (event) {
  if (event.key === 'ArrowLeft') {
    moveSpaceShip(-10)
  }
  if (event.key === 'ArrowRight') {
    moveSpaceShip(10)
  }
}

function moveSpaceShip (distance) {
  const y = parseInt(ship.style.left.replace('px', ''))
  ship.style.left = y + distance + 'px'
}

const x = Math.random() * 600
const y = Math.random() * 400
const star = document.createElement('div')
star.className = 'star'
star.id = 'star1'
star.style.left = x + 'px'
star.style.top = y + 'px'

game.appendChild(star)
