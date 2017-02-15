//Problem: No user interaction causes no change to application
//Solution: When user interacts causes change appropriatly
var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
//When clicking on control list items
  $(".controls").on("click", "li", function() {
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select Clicked Element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
  });
//When new color color is pressed
$("#revealColorSelect").click(function() {
  //Show color select or hide 
  changeColor();
  $("#colorSelect").toggle("slow");

});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);

//When add color is pressed
$("#addNewColor").click(function() {
  //Append the controls to the colors ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color") );
  $(".controls ul").append($newColor); 
  //Select the new color
  $newColor.click();

});

//On mouse events on the canvas
  var lastEvent;
  var $canvas = $("canvas");
  var mousedown = false;
  $canvas.mousedown( function (e) {
    lastEvent = e;
    mousedown = true;
  }).mousemove(function(e){

    //Draw lines    
    if(mousedown) {

    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
    }

  }).mouseup( function() {
    mousedown = false;
  }).mouseleave(function() {
    $canvas.mouseup();  
  });

