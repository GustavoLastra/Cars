<script>
function Auto(width, height, src, posX, posY, image) {

    this.image = new Image();              //Attribute
    this.image.src = src;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = posX;
    this.y = posY;
    this.gravity = 0;
    this.gravitySpeed = 0;

    this.update = function() {                       //Methode
    ctx = myGameArea.context;
    ctx.drawImage(this.image,this.posX,this.posY,this.width, this.height);

    }
    this.newPos = function() {                      //Methode
        this.gravitySpeed += this.gravity;
        this.x += this.speedX + this.gravitySpeed;
        this.y += this.speedY ;
        this.hitBottom();
    }
    this.hitBottom = function() {                  //Methode
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.crashWith = function(otherobj) {         //Methode 
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        //return crash;
    }
}

</script>
