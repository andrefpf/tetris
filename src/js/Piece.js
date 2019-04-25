class Piece{
    constructor(canvas, posx){
      this.size = 20
      this.py = 0
      this.px = canvas.width/2
      this.vy = this.size
      this.screenHeight = canvas.height
      this.screenWidth = canvas.width
      this.px = constrain(this.px, 0, (canvas.width - this.size))
      this.py = constrain(this.py, 0, (canvas.height - this.size))
      frameRate(7)
    }

    show(){
        fill(255)
        rect(this.px, this.py, this.size, this.size)
    }

    update(){

        if(this.py > canvas.height - 2*this.size){
          newPiece()
        }
        else if (piece.length > 1 && this.py > piece[0].py -2*this.size && this.px == piece[0].px){
          newPiece()
        }
        else {
          this.py += this.vy
        }

        //this.py = constrain(this.py + this.vy, 0, (canvas.height - this.size))
    }

    move(coord){
        this.px = constrain(this.px + (this.size * coord), 0, (canvas.width - this.size))
        if(coord == 0)frameRate(15)
    }
}
