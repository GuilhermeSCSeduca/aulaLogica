canvas.onmousemove = function (e) {
    var col = e.pageX; // - this.offsetLeft;
    var lin = e.pageY; // - this.offsetTop;
    movimentaNaveMouse(col - 80, lin);
}
canvas.onmousedown = function (e) {
    var col = e.pageX; // - this.offsetLeft;
    disparaTiro(col, 700-160);
}
