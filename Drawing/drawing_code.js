var c = document.getElementById("id-canvas");
var lienzo = c.getContext("2d");

var x;
var y;
var color_lapiz = "black";
var line_width = 3;
var stop = new Boolean(false);


var eraser = document.getElementById("id-eraser");
var black = document.getElementById("id-black");
var violet = document.getElementById("id-violet");
var red = document.getElementById("id-red");
var green = document.getElementById("id-green");
var yellow = document.getElementById("id-yellow");

bordes();
c.addEventListener("mousedown", pressingMouse);
c.addEventListener("mouseup", stopPressingMouse);
black.addEventListener("click", click_black);
red.addEventListener("click", click_red);
green.addEventListener("click", click_green);
yellow.addEventListener("click", click_yellow);
violet.addEventListener("click", click_violet);
eraser.addEventListener("click", click_eraser)

function bordes()
{
    alto = c.height;
    ancho = c.width;
    
    lienzo.fillStyle = "white";
    lienzo.fillRect(0,0,ancho, alto);
    
    
    dibujarLinea("black", 0, 0, ancho, 0,);
    dibujarLinea("black", 0, 0, 0, alto);
    dibujarLinea("black", 0, alto, ancho, alto);
    dibujarLinea("black", ancho, 0, ancho, alto);
   
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = line_width;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function pressingMouse(event_pressing)
{
    stop = false;
    
    x = event_pressing.layerX;
    y = event_pressing.layerY;

    c.addEventListener("mousemove", mouseMoving);
}

function stopPressingMouse()
{
    stop = true;
}

function mouseMoving(event_moving)
{
    if(stop == false)
    {
    dibujarLinea(color_lapiz, x, y, event_moving.layerX, event_moving.layerY);
    }
    x = event_moving.layerX;
    y = event_moving.layerY;
}

function click_black()
{
    line_width = 3;
    black.width = 55;
    red.width = 50;
    violet.width = 50;
    yellow.width = 50;
    green.width = 50; 
    eraser.width = 24;
    color_lapiz = "black";
}
function click_red()
{
    line_width = 3;
    red.width = 55;
    black.width = 50;
    violet.width = 50;
    yellow.width = 50;
    green.width = 50;
    eraser.width = 24;
    color_lapiz = "red";
}
function click_yellow()
{
    line_width = 3;
    yellow.width = 55;
    red.width = 50;
    violet.width = 50;
    black.width = 50;
    green.width = 50;
    eraser.width = 24;
    color_lapiz = "yellow";
}
function click_green()
{
    line_width = 3;
    green.width = 55;
    red.width = 50;
    violet.width = 50;
    yellow.width = 50;
    black.width = 50;
    eraser.width = 24;
    color_lapiz = "green";
}
function click_violet()
{   
    line_width = 3;
    violet.width = 55;
    red.width = 50;
    black.width = 50;
    yellow.width = 50;
    green.width = 50;
    eraser.width = 24;
    color_lapiz = "violet";
}

function click_eraser()
{
    eraser.width = 26,4;
    line_width = 8;
    color_lapiz = "white";
    violet.width = 50;
    red.width = 50;
    black.width = 50;
    yellow.width = 50;
    green.width = 50;
}