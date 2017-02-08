function Abgas(width, height,src, x, y) {

    var myGraph = new Graph(width,height, src, x, y);   ///prueba Graph
    this.speedX = 0;
    this.speedY = 0;
    this.maxx=1000;
    this.gravity = 0;
    this.gravitySpeed = 0;

    /*this.width = width;    //////DEstapar para prueba sin Graph
    this.height = height;
    this.image = new Image();
    this.image.src = src;
    this.x = x;
    this.y = y;*/

    //this.update = function() {
    //  console.log("update Abgas");
    //    ctx = myGameArea.context;
    //    return ctx.drawImage(myGraph.getMyImage(),myGraph.getPosX(),myGraph.getPosY(),myGraph.getWidth(),myGraph.getHeight());
    //}

    this.newPos = function() {
      console.log("newpos Abgas");
      this.gravitySpeed += this.gravity;
      if(myGraph.getPosX()<=this.maxx){
        //myGraph.x+= this.speedX + this.gravitySpeed;
      myGraph.setPosX(this.speedX + this.gravitySpeed);
      }
    }

    this.getMyImage =function() {
      return myGraph.getMyImage();  //Prueba Graph
      //return this.image;
    }
    this.getPosX =function() {
      return myGraph.getPosX();
    }
    this.getPosY =function() {
      return myGraph.getPosY();
    }
    this.getWidth =function() {
      return myGraph.getWidth();
    }
    this.getHeight =function() {
      return myGraph.getHeight();
    }
}
