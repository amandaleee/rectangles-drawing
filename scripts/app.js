$(document).ready(function(){
  var mousedownX; 
  var mousedownY;
  var mouseupX;
  var mouseupY;
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

});
