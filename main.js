var mouseEvent="";
var color="";
var radius="";
var line_width="";

console.log("before creating canvas")
var canvas = document.getElementById("myCanvas");
console.log(canvas)
ctx = canvas.getContext("2d");


canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mousemove", my_mousemove);



function my_mousedown(e){
    console.log("mouse is down")
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    line_width = document.getElementById("line_width").value;

    

    mouseEvent= "mouseDown";
}

function my_mouseup(e){

}


function my_mousemove(e){
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    console.log(current_position_of_mouse_X)
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_X + "y =" + current_position_of_mouse_Y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(current_position_of_mouse_X, current_position_of_mouse_Y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}