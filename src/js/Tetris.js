let piece 

function setup(){
    let canvas = createCanvas(400,400)
    piece = new Piece(canvas)
    document.querySelector('main').appendChild(canvas.elt)
}

function draw(){
    background(0)
    piece.update()
    piece.show()
}

window.addEventListener("keydown", ev=>{ if (ev.code == "ArrowRight") piece.move(1)})
window.addEventListener("keydown", ev=>{ if (ev.code == "ArrowLeft") piece.move(-1)})