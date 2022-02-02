var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var player = new Player(650,540);
var gameLoop;

var keyUp;
var keyDown;
var keyLeft;
var keyRight;

var walls = [];

window.onload = function() {
  inputs();

  gameLoop = setInterval(move, 1000/60);

  walls.push(new arena(0, 650, 1300, 600, 1));
  walls.push(new arena(0, 0, 1300, 2, 1));
  walls.push(new arena(0, 0, 2, 600, 1));
  walls.push(new arena(650, 0, 2, 600, 1));
}

function move() {



  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < walls.length; i++) {
    walls[i].draw();

  }
}

function inputs() {
  document.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      keyUp = true;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      keyLeft = true;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      keyDown = true;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      keyRight = true;
    }
  });
  document.addEventListener("keyup", function(event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      keyUp = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      keyLeft = false;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      keyDown = false;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      keyRight = false;
    }
  });
}

function checkIntersection(r1, r2) {
  if (r1.x >= r2.x + r2.width) {
    return false;
  } else if (r1.x + r1.width <= r2.x) {
    return false;
  } else if (r1.y >= r2.y +r2.height) {
    return false;
  } else if (r1.y + r1.height <= r2.y) {
    return false;
  } else {
    return true;
  }
}
