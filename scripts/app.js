$(document).ready(function(){
  $("canvas").on("mousedown", function(e) {
    $(".xydown").text("X: " + e.pageX + " Y: " + e.pageY);
  });
  $("canvas").on("mouseup", function(e) {
    $(".xyup").text("X: " + e.pageX + " Y: " + e.pageY);
  });
});
