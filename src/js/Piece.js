class Piece{
    constructor(x,y){
        this.xP = 0
        this.yP = 0

        this.x = x
        this.y = y

        this.falling = function(){
            // this.previousPosition()
            // this.checkCollision()
            // this.y ++
            move(0, 1)

        }

        this.checkCollision = function(){
            if(this.y+1 >= squareNum){

                squares[this.y][this.x] = 1
                this.y = y
                checkTetris()
            }
            else if (squares[this.y+1][this.x] == 1){

                squares[this.y][this.x] = 1
                this.y = y
                checkTetris()
                // console.log('a');
            }
            else{
                squares[this.yP][this.xP] = 0

            }
        }

        this.restart = function(){

          // squares[this.y][this.xP] = 0

          squares[this.y][this.x] = 1

          this.x = x
          this.y = y

        }

        this.collide = function(x,y){
            if(this.y + y >= squareNum){return 2*y}

            else if(this.x + x >= squareNum){return 1}
            else if(this.x + x < 0){return 1}

            else if(squares[this.y + y][this.x + x] == 1){return y*2 + x}

            else{return 0}

            if(squares[this.y + y][this.x] == 1){return 3}
        }

        this.previousPosition = function(){
            this.xP = this.x
            this.yP = this.y
        }
    }

}
