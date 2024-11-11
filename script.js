/// /////////////////////////////////
// Configurations
/// /////////////////////////////////
const game = document.getElementById('game')
game.style.width = '600px'
game.style.height = '400px'

const ship = document.getElementById('ship')
ship.style.width = '20px'

const tickDurationMilliseconds = 50
let score = 0

let tickInterval

/// /////////////////////////////////
// Main
/// /////////////////////////////////
for (let i = 0; i < 10; i++) {
  createStar()
}

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
function startGame () {
  tickInterval = window.setInterval(tick, tickDurationMilliseconds)
  document.getElementById('gameOver').style.display = 'none'
  score = 0
}

function stopGame () {
  window.clearInterval(tickInterval)
}

function updateHighscore () {
  const name = document.getElementById('name').value
  const highscore = document.getElementById('highscore')

  const li = document.createElement('li')
  li.innerText = name + ' - ' + score
  highscore.appendChild(li)
}

function tick () {
  const stars = document.getElementsByClassName('star')

  for (const star of stars) {
    moveStarDown(star)
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

function moveStarDown (star, speed = 10) {
  star.style.top = parseInt(star.style.top) + speed + 'px'

  if (isStarOutOfScreen(star)) {
    if (checkCollision(star)) {
      gameOver()
    }
    star.remove()
    createStar(10, 20)
  }
}

function isStarOutOfScreen (star) {
  if (parseInt(star.style.top) > parseInt(game.style.height)) {
    score++
    document.getElementById('score').innerText = score
    return true
  }

  return false
}

function moveSpaceShip (distance) {
  const y = parseInt(ship.style.left.replace('px', ''))
  ship.style.left = y + distance + 'px'
}

function checkCollision (star) {
  const starX = parseInt(star.style.left.replace('px', ''))
  const shipX = parseInt(ship.style.left.replace('px', ''))
  const shipWidth = parseInt(ship.style.width.replace('px', ''))

  if (starX >= shipX && starX < shipX + shipWidth) {
    return true
  }
  return false
}

function gameOver () {
  window.clearInterval(tickInterval)
  const gameover = document.getElementById('gameOver')
  gameover.style.display = 'flex'
}
