let canvas = document.getElementById("paint");
let ctx = canvas.getContext("2d");
let drawing = false;
canvas.onmousedown = function() {
    drawing = true;
};

canvas.onmouseup = function() {
    drawing = false;
};
canvas.onmousemove = function(event) {
    if (drawing) {
        ctx.fillStyle = document.getElementById("color").value;
        let size = document.getElementById("size").value;
        ctx.beginPath();
        ctx.arc(
            event.offsetX,
            event.offsetY,
            size,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }
};
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}