canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color= "blue";
radio= "8";
ancho_de_linea="1";
mouseEvent=""

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e)
{
    color = document.getElementById("color").value;
    ancho_de_linea = document.getElementById("ancho_de_linea").value;
    radio = document.getElementById("radio").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientX - canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = ancho_de_linea;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radio ,0 ,2 * Math.PI);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
function borrar() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}