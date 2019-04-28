let scale = 50
let squareNum = 6
let grid = []

let squares = []
let piece = []

function setup(){
    let canvas = createCanvas(scale*squareNum, scale*squareNum)
    document.querySelector('main').appendChild(canvas.elt)

    piece.push(new Piece(3,0))
    // piece.push(new Piece(4,0))

    newBoard()

    setInterval(function(){

        for(p=0; p<piece.length; p++){

          piece[0].falling()

        }

    }, 1000)
}

function draw(){

    for(p=0; p<piece.length; p++){

        piece[p].x = constrain(piece[p].x, 0, squareNum-1)
        piece[p].y = constrain(piece[p].y, 0, squareNum-1)

        squares[piece[p].y][piece[p].x] = 1

    }

    background(0)
    checkGrid()
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

function tetris(line){

    for(i=line; i>0; i--){
        squares[i] = squares[i-1]
    }
    squares[0] = [0,0,0,0,0]
}

window.addEventListener("keydown", ev=>{
    for(p=0; p<piece.length; p++){
        piece[p].previousPosition()
        if (ev.code == "ArrowRight" && squares[piece[p].y][piece[0].x+1] == 0) {piece[p].x ++; piece[p].checkCollision()}
        if (ev.code == "ArrowLeft"  && squares[piece[p].y][piece[0].x-1] == 0) {piece[p].x --; piece[p].checkCollision()}
        if (ev.code == "ArrowDown") {piece[p].y ++; piece[p].checkCollision()}
    }
})
