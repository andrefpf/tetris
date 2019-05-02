let scale = 50
let squareNum = 6
let grid = []

let squares = []
let piece = []

function setup(){
    let canvas = createCanvas(scale*squareNum, scale*squareNum)
    document.querySelector('main').appendChild(canvas.elt)

    piece.push(new Piece(2,1))
    piece.push(new Piece(3,1))
    piece.push(new Piece(3,0))
    piece.push(new Piece(4,1))

    newBoard()

    setInterval(function fallling() {move(0,1)}, 1000)
}

function draw(){

    for(p=0; p<piece.length; p++){

        // piece[p].x = constrain(piece[p].x, 0, squareNum-1)
        // piece[p].y = constrain(piece[p].y, 0, squareNum-1)

        squares[piece[p].y][piece[p].x] = 2

    }

    background(0)
    checkGrid()
}

function checkGrid(){
    for (i in squares){
        for(j in squares[i]){
            if(squares[i][j] != 0){
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
    squares[0] = [0]
}

function move(mx, my){

    possibleMove = true
    restart = false

    for(p=0; p<piece.length; p++){
        // console.log(piece[p].collide(mx,my));
        if(piece[p].collide(mx, my) >= 2){restart = true}
        if(piece[p].collide(mx, my) != 0){possibleMove = false}
        piece[p].previousPosition()

    }

    if(possibleMove){
        for(p=0; p<piece.length; p++){
            piece[p].x += mx
            piece[p].y += my

            squares[piece[p].yP][piece[p].xP] = 0
        }
    }

    if(restart){
        for(p=0; p<piece.length; p++){
            piece[p].restart()
        }
        checkTetris()
    }

}

// function rotate(){
//
//     for(p=0; p<piece.length; p++){
//
//         piece[p].x
//
//     }
//
// }

window.addEventListener("keydown", ev=>{

        if (ev.code == "ArrowRight") {move( 1, 0)}
        if (ev.code == "ArrowLeft" ) {move(-1, 0)}
        if (ev.code == "ArrowDown" ) {move( 0, 1)}
})
