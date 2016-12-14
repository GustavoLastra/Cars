function Auto (width, height, src, x, y,a) {
  var hola;
  this.image = new Image();              //Attribute
  this.image.src = src;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.gravity = 0;
  this.gravitySpeed = 0;

  this.update = function() {
  ctx = myGameArea.context;
  ctx.drawImage(this.image,this.x,this.y,this.width, this.height);

  }
  this.newPos = function() {
      this.gravitySpeed += this.gravity;
      this.x += this.speedX + this.gravitySpeed;
      this.y += this.speedY ;
      this.hitBottom();
  }
  this.hitBottom = function() {
      var rockbottom = myGameArea.canvas.height - this.height;
      if (this.y > rockbottom) {
          this.y = rockbottom;
          this.gravitySpeed = 0;
      }
  }
  this.crashWith = function(otherobj) {
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
      return crash;
  }
}
