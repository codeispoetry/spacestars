const ship = document.getElementById('ship')

window.onkeydown = function (event) {
  if (event.key === 'ArrowLeft') {
    moveSpaceShip(-10)
  }
  if (event.key === 'ArrowRight') {
    moveSpaceShip(10)
  }
}

for (let i = 0; i < 10; i++) {
  createStar()
}

window.setInterval(tick, 100)
function tick () {
  const stars = document.getElementsByClassName('star')

  for (const star of stars) {
    star.style.top = parseInt(star.style.top.replace('px', '')) + 10 + 'px'
  }
}

function moveSpaceShip (distance) {
  const y = parseInt(ship.style.left.replace('px', ''))
  ship.style.left = y + distance + 'px'
}

function createStar () {
  const x = Math.random() * 600
  const y = Math.random() * 200
  const star = document.createElement('div')
  star.className = 'star'
  star.id = 'star' + Math.random()
  star.style.left = x + 'px'
  star.style.top = y + 'px'

  game.appendChild(star)
}
