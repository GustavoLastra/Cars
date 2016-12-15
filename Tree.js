function Tree (width, height, src, posX, posY) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = posX;
  this.y = posY;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.image = new Image();              //Attribute
  this.image.src = src;

    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);

    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX + this.gravitySpeed;
        this.y += this.speedY ;
    }
}
