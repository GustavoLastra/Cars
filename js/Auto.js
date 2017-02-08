function Auto (width, height, src, x, y, p,color, cc, abgas) {
  console.log("inicializo auto!!");

  var myGraph = new Graph(width,height, src, x, y);
  /*this.abgas = new Image();
  this.abgas.src = abgas;*/

  /*var abgasw = 50;
  var abgash = 25;
  var abgasx = myGraph.getPosX();
  var abgasy = myGraph.getPosY();
  console.log("efsfr",abgasx);
  console.log(abgasy);
  */
  //this.plakette = new Image(); //GRaph
  //this.plakette.src = p;
  this.color= color;
  this.correctcolor = cc;
  this.speedX = 0;
  this.speedY = 0;
  this.maxx=1000;
  this.gravity = 0;
  this.gravitySpeed = 0;
  var myGraph = new Graph(width,height, src, x, y);
  var abgasw = 50;       /*  */
  var abgash = 25;
  var abgasx = myGraph.getPosX();
  var abgasy = myGraph.getPosY();
  var myAbgas = new Abgas(abgasw, abgash,abgas,abgasx,abgasy);
  var myPlak = new Plakatte(abgasx, abgasy,p,60,60);

  //this.addEventListener('click', mouseClicked, false);     // addEventListener on auto

  this.getMyRight =function() {
    return myGraph.getMyRight();
  }
  this.getMyLeft =function() {
    return myGraph.getMyLeft();
  }
  this.getMyTop =function() {
    return myGraph.getMyTop();
  }
  this.getMyBottom =function() {
    return myGraph.getMyBottom();
  }
  this.getPosX = function () {
    return myGraph.getPosX();
  }
  this.getPosY = function () {
    return myGraph.getPosY();
  }

  this.update = function() {
  ctx = myGameArea.context;
  ctx.drawImage(myGraph.getMyImage(),myGraph.getPosX(),myGraph.getPosY(),myGraph.getWidth(), myGraph.getHeight());
  //ctx.drawImage(this.plakette,myGraph.getPosX(),myGraph.getPosY(),60, 60);
  //ctx.drawImage(myAbgas.getMyImage(),myAbgas.getPosX(),myAbgas.getPosY(),myAbgas.getWidth(), myAbgas.getHeight());

  //myAbgas.update();
  //ctx.drawImage(this.abgas,myGraph.getPosX()-50,myGraph.getPosY()+70,50,25);
  ctx.drawImage(myPlak.getMyImage(),myGraph.getPosX(),myGraph.getPosY(),60, 60);
  ctx.drawImage(myAbgas.getMyImage(),myGraph.getPosX()-50,myGraph.getPosY()+70,50,25);

}
  this.newPos = function() {
      //myAbgas.newPos();
      this.gravitySpeed += this.gravity;
      if(myGraph.getPosX()<=this.maxx){
        //myGraph.x+= this.speedX + this.gravitySpeed;
        myGraph.setPosX(this.speedX + this.gravitySpeed);

      }
      //myGraph.y += this.speedY ;
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
        myPlak.setMyImage("img/plakette4.png")
        //this.plakette.src= "img/plakette4.png";
        break;
      case 2:
        //this.plakette.src= "img/plakette3.png";
        myPlak.setMyImage("img/plakette3.png")
        break;
      case 3:
        //this.plakette.src= "img/plakette2.png";
        myPlak.setMyImage("img/plakette2.png")
    }
  }
}
