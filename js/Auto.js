function Auto (width, height, src, x, y, p,color, cc, abgas) {
  this.image = new Image();              //Attribute
  this.image.src = src;
  this.plakette = new Image();
  this.plakette.src = p;
  this.abgas = new Image();
  this.abgas.src = abgas;
  this.color= color;
  this.correctcolor = cc;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.maxx=1000;
  this.x = x;
  this.y = y;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.myleft = this.x;
  this.myright = this.x + (this.width);
  this.mytop = this.y;
  this.mybottom = this.y + (this.height);
  //this.addEventListener('click', mouseClicked, false);     // addEventListener on auto

  this.getMyRight =function() {
    return this.myright;
  }
  this.getMyLeft =function() {
    return this.myleft;
  }
  this.getMyTop =function() {
    return this.mytop;
  }
  this.getMyBottom =function() {
    return this.mybottom;
  }
  this.getPosX = function () {
    return this.x;
  }
  this.getPosY = function () {
    return this.y;
  }

  this.update = function() {
  ctx = myGameArea.context;
  ctx.drawImage(this.image,this.x,this.y,this.width, this.height);
  ctx.drawImage(this.plakette,this.x,this.y,60, 60);
  ctx.drawImage(this.abgas,this.x-50,this.y+70,50,25);

  /*if(this.abgas.src == "img/abgas2.png") {
    ctx.drawImage(this.abgas,this.x-50,this.y+70,50,25);
  } else if(this.abgas.src == "img/abgas3.png") {
  ctx.drawImage(this.abgas,this.x-50,this.y+70,70, 45);
  } else if(this.abgas.src == "img/abgas4.png") {
  ctx.drawImage(this.abgas,this.x-50,this.y+70,90, 55);
}*/

}

  this.newPos = function() {
      this.gravitySpeed += this.gravity;
      if(this.x<=this.maxx){
        this.x += this.speedX + this.gravitySpeed;
      }
      this.y += this.speedY ;
  }

  this.getColor = function() {
    return this.color;
  }

  this.setColor = function(farbe) {
    this.color=farbe;
  }

  this.correctColor = function() {
    if (this.getColor()== cc){
      return 1;
    }else {
      return 0;
    }
  }

  this.setImage = function(select) {
    switch(select){
      case 1:
        this.plakette.src= "img/plakette4.png";
        break;
      case 2:
        this.plakette.src= "img/plakette3.png";
        break;
      case 3:
        this.plakette.src= "img/plakette2.png";
    }
  }
}
