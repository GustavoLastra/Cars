function Score(width, height, color, x, y) {
    this.tempScore=0;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.update = function() {
        ctx = myGameArea.context;
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
    }

}
