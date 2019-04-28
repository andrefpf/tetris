class Piece{
    constructor(x,y){
        this.xP = 0
        this.yP = 0

        this.x = x
        this.y = y

        this.falling = function(){
            this.previousPosition()
            this.y ++
            this.checkCollision()
        }

        this.checkCollision = function(){
            if(this.y >= squareNum){
                this.y = 0
                checkTetris()
            }
            else if (squares[this.y][this.x] == 1){
                this.y = 0
                checkTetris()
                // console.log('a');
            }
            else{
                squares[this.yP][this.xP] = 0
            }
        }

        this.previousPosition = function(){
            this.xP = this.x
            this.yP = this.y
        }
    }

}
