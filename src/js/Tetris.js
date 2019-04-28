let scale = 30
let squareNum = 5
let grid = []

let squares = []

let xP = 0
let yP = 0

let x = 15
let y = 0

function setup(){
    let canvas = createCanvas(scale*squareNum, scale*squareNum)
    document.querySelector('main').appendChild(canvas.elt)

    newBoard()
    setInterval(function(){console.log('a'); falling()}, 1000)
}

function draw(){
    x = constrain(x, 0, squareNum-1)

    squares[y][x] = 1

    background(0)
    checkGrid()
}


function checkCollision(){
    if(y >= squareNum){
      y = 0
      checkTetris()
    }
    else if (squares[y][x] == 1){
      y = 0
      checkTetris()
      // console.log('a');
    }
    else{
      squares[yP][xP] = 0
    }

}

function checkGrid(){
    for (i in squares){
        for(j in squares[i]){
            if(squares[i][j] == 1){
                fill(255, 50, 100)
                noStroke()
                rect(scale*j,scale*i,scale,scale)
            }
        }
    }
}

function checkTetris(){

  for(i=0; i<squareNum; i++){
      full = true

      for(j=0; j<squareNum; j++){
          if (squares[i][j] == 0 ){
              full = false
          }
      }

      if (full == true){
          tetris(i)
      }
  }

}

function newBoard(){
    squares = []

    for (i=0; i<squareNum; i++){
      group = []

      for(j=0; j<squareNum; j++){
        group.push(0)
      }

      squares.push(group)
    }
}

function falling(){

  previousPosition()
  y ++
  checkCollision()
}

function previousPosition(){
  xP = x
  yP = y
}

function tetris(line){

    for(i=line; i>0; i--){
        squares[i] = squares[i-1]
    }
    squares[0] = [0,0,0,0,0]
}

// actually I cant avoid creating a new piece when hitting any random key
window.addEventListener("keydown", ev=>{

    previousPosition()

    if (ev.code == "ArrowRight" && squares[y][x+1] == 0) x ++
    if (ev.code == "ArrowLeft"  && squares[y][x-1] == 0)  x --
    if (ev.code == "ArrowDown")  y ++

    checkCollision()
})
