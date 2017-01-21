function Tree (width, height, src, posX, posY) {
  this.width = width;
  this.height = height;
  this.x = posX;
  this.y = posY;
  this.image = new Image();              //Attribute
  this.image.src = src;
  this.mybottom = this.y + (this.height);
  this.getMyBottom =function() {
    return this.mybottom;
    }

  this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);

    }

}
