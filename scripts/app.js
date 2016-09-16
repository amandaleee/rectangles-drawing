$(document).ready(function(){
  var mousedownX; 
  var mousedownY;
  var mouseupX;
  var mouseupY;
  var leftoffset;
  var topoffset; 
  var width; 
  var height; 
  $("canvas").on("mousedown", function(e) {
    $(".xydown").text("X: " + e.pageX + " Y: " + e.pageY);
      var mousedownX = e.pageX;
      var mousedownY = e.pageY;
      console.log("first corner is " + mousedownX + ", " + mousedownY);
  });
  $("canvas").on("mouseup", function(e) {
    $(".xyup").text("X: " + e.pageX + " Y: " + e.pageY);
    var mouseupX = e.pageX;
    var mouseupY = e.pageY;
    console.log("next corner is " + mouseupX + ", " + mouseupY);
  });
  if (mousedownX === mouseupX) { //vertical line
    // topoffset = Y point, either mousedown or mouseup, that's closest to the top of the browser --> the least of the Y values.
    leftoffset = mousedownX;
    width =  1;
    if (mousedownY > mouseupY) { //the user dragged upward
      topoffset = mouseupY;
      height = mousedownY - mouseupY;
    } else if (mousedownY < mouseupY) { //the user dragged downward 
      topoffset = mousedownY;
      height = mouseupY - mousedownY;
    }
  } else if (mousedownY === mouseupY){ //horizontal line 
    // the leftoffset = X point, either mousedown or mouseup, that's closest to the left of the browser --> the least of the X values 
    topoffset = mousedownY;
    height = 1;
    if (mousedownX > mouseupX) { //the user dragged left
      leftoffset = mouseupX;
      width = mousedownX - mouseupX;
    } else if (mousedownX < mouseupX) { //the user dragged right
      leftoffset = mousedownX;
      width = mouseupX - mousedownX;
    }
  } else if (mousedownX < mouseupX) {
    if (mousedownY < mouseupY) {//the user dragged diagonal down right
      topoffset = mousedownY; 
      leftoffset = mousedownX;
      height = mouseupY - mouseupY; 
      width = mouseupX - mousedownX;
    } else if (mousedownY > mouseupY) {//the user dragged diagonal up right
      topoffset = mouseupY;
      leftoffset = mousedownX;
      height = mousedownY - mouseupY;
      width = mouseupX - mousedownX;
    }
  } else if (mousedownX > mouseupX) {
    if (mousedownY > mouseupY) { //the user dragged diagonal up left
      topoffset = mouseupY; 
      leftoffset = mouseupX;
      height = mousedownY - mouseupY;
      width = mousedownX - mouseupY;
    } else if (mousedownY < mouseupX) { //the user dragged diagonal down left
      topoffset = mousedownY;
      leftoffset = mouseupX;
      height = mouseupY - mousedownY;
      width = mousedownX - mouseupX;
    }
  }


  var canvas = document.querySelector(canvas);
  console.log(canvas);
  // var context = canvas.getContext('2d');
  // context.beginPath();
  // context.rect(leftoffset, topoffset, width, height);
  // context.fill();
});
