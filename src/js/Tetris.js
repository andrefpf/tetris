let scale = 60
let squareNum = 5
let grid = []

let squares = []

x = 3
y = 1

function setup(){
    let canvas = createCanvas(scale*squareNum, scale*squareNum)
    document.querySelector('main').appendChild(canvas.elt)

    reset()
    squares[x][y] = 1
}

function draw(){
    background(0)
    
    checkGrid()

}

function checkGrid(){
    for (i in squares){
      for(j=0; j<squareNum; j++){
        if(squares[i][j] == 1){
          console.log('a');
          fill(255)
          rect(20,10,20,20)
        }

      }
    }
}

function reset(){
    squares = []

    for (i=0; i<squareNum; i++){
      y = []

      for(j=0; j<squareNum; j++){
        y.push(0)
      }

      squares.push(y)
    }
}


window.addEventListener("keydown", ev=>{ if (ev.code == "ArrowRight") piece[piece.length -1].move(1)})
window.addEventListener("keydown", ev=>{ if (ev.code == "ArrowLeft") piece[piece.length -1].move(-1)})
window.addEventListener("keydown", ev=>{ if (ev.code == "ArrowDown") piece[piece.length -1].move(0)})
