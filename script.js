/// /////////////////////////////////
// Configurations
/// /////////////////////////////////
const game = document.getElementById('game')
game.style.width = '600px'
game.style.height = '400px'

const ship = document.getElementById('ship')
ship.style.width = '20px'

const tickDurationMilliseconds = 50

/// /////////////////////////////////
// Main
/// /////////////////////////////////
for (let i = 0; i < 10; i++) {
  createStar()
}

const ticks = window.setInterval(tick, tickDurationMilliseconds)
window.onkeydown = function (event) {
  if (event.key === 'ArrowLeft') {
    moveSpaceShip(-10)
  }
  if (event.key === 'ArrowRight') {
    moveSpaceShip(10)
  }
}

/// /////////////////////////////////
// Functions
/// /////////////////////////////////
function tick () {
  const stars = document.getElementsByClassName('star')

  for (const star of stars) {
    starFalls(star)
  }
}

function createStar () {
  const x = Math.random() * 600
  const y = Math.random() * -200
  const star = document.createElement('div')
  star.className = 'star'
  star.id = 'star' + Math.random()
  star.style.left = x + 'px'
  star.style.top = y + 'px'

  game.appendChild(star)
}

function starFalls (star, speed = 10) {
  star.style.top = parseInt(star.style.top) + speed + 'px'

  if (isStarOutOfScreen(star)) {
    if (isHit(star)) {
      gameOver()
    }
    star.remove()
    createStar(10, 20)
  }
}

function isStarOutOfScreen (star) {
  return parseInt(star.style.top) > parseInt(game.style.height)
}

function moveSpaceShip (distance) {
  const y = parseInt(ship.style.left.replace('px', ''))
  ship.style.left = y + distance + 'px'
}

function isHit (star) {
  const starX = parseInt(star.style.left.replace('px', ''))
  const shipX = parseInt(ship.style.left.replace('px', ''))
  const shipWidth = parseInt(ship.style.width.replace('px', ''))

  if (starX >= shipX && starX < shipX + shipWidth) {
    return true
  }
  return false
}

function gameOver () {
  window.clearInterval(ticks)
  alert('Game Over')
  window.location.reload()
}
