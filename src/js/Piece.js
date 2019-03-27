class Piece{
    constructor(canvas){
       this.py = 0
       this.px = 50
       this.vy = 1
       this.size = 20
       this.screenHeight = canvas.height
       this.screenWidth = canvas.width
       this.px = constrain(this.px, 0, (canvas.width - this.size))
       console.log(this.px)
       this.py = constrain(this.py, 0, (canvas.height - this.size))
    }

    show(){
        fill(255)
        rect(this.px, this.py, this.size, this.size)
    }

    update(){
        this.py = constrain(this.py + this.vy, 0, (canvas.height - this.size))
    }

    move(coord){
        this.px = constrain(this.px + (this.size * coord), 0, (canvas.width - this.size))
    }
}