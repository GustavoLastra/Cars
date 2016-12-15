var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 960;
        this.canvas.height = 701;
        this.canvas.addEventListener('mousemove', mouseMoved, false);           //eventlistenercanvas
        this.canvas.addEventListener('click', mouseClicked, false);             //eventlistenercanvas
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);

      },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
