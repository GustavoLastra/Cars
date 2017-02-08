function Tree ( width,height,src,x,y){
    var myGraph = new Graph(width,height, src, x, y);
                 //Attribute
    this.mybottom = myGraph.getPosY() + (myGraph.getHeight());
    this.getMyBottom =function() {
      return this.mybottom;
      }

    this.update = function() {
        myGraph.update();
    }


}
