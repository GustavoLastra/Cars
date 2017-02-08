function Plakatte(width, height,src, x, y) {

    var myGraph = new Graph(width,height, src, x, y);   ///prueba Graph
    this.speedX = 0;
    this.speedY = 0;
    this.maxx=1000;
    this.gravity = 0;
    this.gravitySpeed = 0;


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
    this.setMyImage =function(img) {
      myGraph.setMyImage(img);
       //Prueba Graph
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
