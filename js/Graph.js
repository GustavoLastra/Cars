function Graph (width, height,src, x, y) {
  this.width = width;
  this.height = height;

  this.image = new Image();
  this.image.src = src;

  this.x = x;
  this.y = y;
  this.getPosX =function() {
    return this.x;
  }
  this.getPosY =function() {
    return this.y;
  }
  this.getWidth =function() {
    return this.width;
  }
  this.getHeight =function() {
    return this.height;
  }
  this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);

  }
}
