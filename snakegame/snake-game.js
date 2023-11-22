const canvas = document.querySelector('#canvas');

const context = canvas.getContext('2d');

let grid = 20;
let count = 0;
let score = 0;
let max = 0;

const snake = {
  x: 200,
  y: 200,

  dx: grid,
  dy: 0,

  maxCells: 1,

  cells: [],
}

const food = {
  x: 400,
  y: 400,
}

const stone = {
  x: 40,
  y: 40,
  tosh: []
}



function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function loop() {
  requestAnimationFrame(loop);
  if (++count < 4) { //1
    return;
  }

  count = 0
  context.clearRect(0,0, canvas.clientWidth, canvas.clientWidth); // canvasni tozalaydi

  snake.x += snake.dx; // 160 + 16
  snake.y += snake.dy; // 0 + 0

  if (snake.x < 0) { // 160dan boshqa qiymat < 0
    snake.x = canvas.clientWidth - grid; //160qiymat tenglanadi = 400 - 16 == 384
  }else if (snake.x >= canvas.clientWidth) {
    snake.x = 0
  }

  if (snake.y < 0) {
    snake.y = canvas.clientHeight - grid;
  }else if (snake.y >= canvas.clientHeight) {
    snake.y = 0
  }

  snake.cells.unshift({x: snake.x, y: snake.y}); // x:160 y: 0

  if (snake.cells.length > snake.maxCells) { // 2 > 1
    snake.cells.pop();
  }

  context.fillStyle = 'yellow';
  context.fillRect(food.x,food.y, grid-1,grid-1);
  

  // for (let i = 0;i < 100;i+20) {
  //   stone.tosh.unshift({x: stone.x, y: stone.y + i})
  //   stone.tosh.unshift({x: stone.x + 400,y: stone.y + i})
  // }

  context.fillStyle = '#fff'
  context.fillRect(stone.x,stone.y,grid ,grid );
  context.fillRect(stone.x,stone.y+20,grid ,grid );
  context.fillRect(stone.x,stone.y+40,grid ,grid );
  context.fillRect(stone.x,stone.y+60,grid ,grid );
  context.fillRect(stone.x,stone.y+80,grid ,grid );

  context.fillStyle = '#fff'

  context.fillRect(stone.x+400,stone.y,grid ,grid );
  context.fillRect(stone.x+400,stone.y+20,grid ,grid );
  context.fillRect(stone.x+400,stone.y+40,grid ,grid );
  context.fillRect(stone.x+400,stone.y+60,grid ,grid );
  context.fillRect(stone.x+400,stone.y+80,grid ,grid );

  context.fillStyle = '#fff'

  context.fillRect(stone.x+400,stone.y+400,grid ,grid );
  context.fillRect(stone.x+400,stone.y+380,grid ,grid );
  context.fillRect(stone.x+400,stone.y+360,grid ,grid );
  context.fillRect(stone.x+400,stone.y+340,grid ,grid );
  context.fillRect(stone.x+400,stone.y+320,grid ,grid );

  context.fillStyle = '#fff'

  context.fillRect(stone.x,stone.y + 400 ,grid ,grid );
  context.fillRect(stone.x,stone.y+380,grid ,grid );
  context.fillRect(stone.x,stone.y+360,grid ,grid );
  context.fillRect(stone.x,stone.y+340,grid ,grid );
  context.fillRect(stone.x,stone.y+320,grid ,grid );

  // for(let i = 0;i<100;i+20) {
  //   stone.tosh.unshift({x: stone.x,y: stone.y + i})
  // }

  context.fillStyle = 'green'

  
  snake.cells.forEach(function (cell,index) {
    context.fillRect(cell.x,cell.y,grid-1,grid-1) // 160,0 15,15
    if(cell.x === food.x && cell.y === food.y) { // 160 = 160 0=0
      snake.maxCells++;

      score += 1

      document.querySelector('span').innerHTML = score;

      food.x = getRandomInt(0,25) * grid;
      food.y = getRandomInt(0,25) * grid;

      if ((food.x === stone.x && food.y === stone.y) || (food.x === stone.x && food.y === stone.y+20) || (food.x === stone.x && food.y === stone.y+40) || (food.x === stone.x && food.y === stone.y+60) || (food.x === stone.x && food.y === stone.y+80) || (food.x === stone.x+400 && food.y === stone.y) || (food.x === stone.x+400 && food.y === stone.y+20) || (food.x === stone.x+400 && food.y === stone.y+40) || (food.x === stone.x+400 && food.y === stone.y+60) || (food.x === stone.x+400 && food.y === stone.y+80) || (food.x === stone.x+400 && food.y === stone.y+400) || (food.x === stone.x+400 && food.y === stone.y+380) || (food.x === stone.x+400 && food.y === stone.y+360) || (food.x === stone.x+400 && food.y === stone.y+340) || (food.x === stone.x+400 && food.y === stone.y+320) || (food.x === stone.x && food.y === stone.y+400) || (food.x === stone.x && food.y === stone.y+380) || (food.x === stone.x && food.y === stone.y+360) || (food.x === stone.x && food.y === stone.y+340) || (food.x === stone.x && food.y === stone.y+320)) {
        food.x = getRandomInt(0,25) * grid;
        food.y = getRandomInt(0,25) * grid;
      }
    }

    for(let i = ++index; i < snake.cells.length; i++){
      if ((cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) || (snake.cells[i].x === stone.x && snake.cells[i].y === stone.y) || (snake.cells[i].x === stone.x && snake.cells[i].y === stone.y + 20) || (snake.cells[i].x === stone.x && snake.cells[i].y === stone.y+40) || (snake.cells[i].x === stone.x && snake.cells[i].y === stone.y+60) || (snake.cells[i].x === stone.x && snake.cells[i].y === stone.y+80) || (snake.cells[i].x === stone.x+400 && snake.cells[i].y === stone.y) || (snake.cells[i].x === stone.x+400 && snake.cells[i].y === stone.y+20) || (snake.cells[i].x === stone.x+400 && snake.cells[i].y === stone.y+40) || (snake.cells[i].x === stone.x+400 && snake.cells[i].y === stone.y+60) || (snake.cells[i].x === stone.x+400 && snake.cells[i].y === stone.y+80) || (snake.cells[i].x === stone.x && snake.cells[i].y === stone.y+400) || (snake.cells[i].x === stone.x && snake.cells[i].y === stone.y+380) || (snake.cells[i].x === stone.x && snake.cells[i].y === stone.y+360) || (snake.cells[i].x === stone.x && snake.cells[i].y === stone.y+340) || (snake.cells[i].x === stone.x && snake.cells[i].y === stone.y+320) || (snake.cells[i].x === stone.x +400 && snake.cells[i].y === stone.y+400) || (snake.cells[i].x === stone.x + 400 && snake.cells[i].y === stone.y+380) || (snake.cells[i].x === stone.x + 400 && snake.cells[i].y === stone.y+360) || (snake.cells[i].x === stone.x+400 && snake.cells[i].y === stone.y+340) || (snake.cells[i].x === stone.x+400 && snake.cells[i].y === stone.y+320)) {
        if (score > max) {
          max = score;
        }
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 1

        snake.dx = grid
        snake.dy = 0;
        score = 0;
        food.x = getRandomInt(0,25) * grid;
        food.y = getRandomInt(0,25) * grid;

        if ((food.x === stone.x && food.y === stone.y) || (food.x === stone.x && food.y === stone.y+20) || (food.x === stone.x && food.y === stone.y+40) || (food.x === stone.x && food.y === stone.y+60) || (food.x === stone.x && food.y === stone.y+80) || (food.x === stone.x+400 && food.y === stone.y) || (food.x === stone.x+400 && food.y === stone.y+20) || (food.x === stone.x+400 && food.y === stone.y+40) || (food.x === stone.x+400 && food.y === stone.y+60) || (food.x === stone.x+400 && food.y === stone.y+80) || (food.x === stone.x+400 && food.y === stone.y+400) || (food.x === stone.x+400 && food.y === stone.y+380) || (food.x === stone.x+400 && food.y === stone.y+360) || (food.x === stone.x+400 && food.y === stone.y+340) || (food.x === stone.x+400 && food.y === stone.y+320) || (food.x === stone.x && food.y === stone.y+400) || (food.x === stone.x && food.y === stone.y+380) || (food.x === stone.x && food.y === stone.y+360) || (food.x === stone.x && food.y === stone.y+340) || (food.x === stone.x && food.y === stone.y+320)) {
          food.x = getRandomInt(0,25) * grid;
          food.y = getRandomInt(0,25) * grid;
        }

        document.querySelector('span').innerHTML = max
      }
    }
  })
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0
  }else if (e.keyCode === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }else if (e.keyCode === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  else if (e.keyCode === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
})

requestAnimationFrame(loop)



