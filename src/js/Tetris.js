let scale = 20
let squareNum = 30
let grid = []

let squares = []

let xP = 0
let yP = 0

let x = 15
let y = 0

function setup(){
    let canvas = createCanvas(scale*squareNum, scale*squareNum)
    document.querySelector('main').appendChild(canvas.elt)
    // frameRate(5)
    reset()
}

function draw(){
    x = constrain(x, 0, squareNum-1)

    squares[x][y] = 1

    background(0)
    checkGrid()
    console.log(x, ' ', y);
}

function checkCollision(){
    if(y >= squareNum){
      y = 0
    }
    else if (squares[x][y] == 1){
      y = 0
      console.log('a');
    }
    else{
      squares[xP][yP] = 0
    }

}

function checkGrid(){
    for (i in squares){
        for(j in squares[i]){
            if(squares[i][j] == 1){
                fill(255, 50, 100)
                noStroke()
                rect(scale*i,scale*j,scale,scale)
            }
        }
    }
}

function reset(){
    squares = []

    for (i=0; i<squareNum; i++){
      group = []

      for(j=0; j<squareNum; j++){
        group.push(0)
      }

      squares.push(group)
    }
}

window.addEventListener("keydown", ev=>{
    xP = x
    yP = y


    if (ev.code == "ArrowRight") x += 1
    if (ev.code == "ArrowLeft")  x -= 1
    if (ev.code == "ArrowDown") y += 1
    if (ev.code == "ArrowUp")  y -= 1

    checkCollision()
})
