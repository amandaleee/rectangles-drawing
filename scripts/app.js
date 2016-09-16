$(document).ready(function(){
  // var 
  // $("canvas").on("mousemove", function(e) {
  //   var rectangleArray = [];
  //   if (e.which == 1) {
  //     $(".xy").text("X: " + e.pageX + " Y: " + e.pageY);
  //   //TODO: add each of these to a hash
  //   //push the hash to rectangleArray
  //     console.log(e.pageX + ", " + e.pageY);
  //   }
  //   //TODO: after mouseup, delete everything from rectangleArray except the first and last elements. 
  // });
  $("canvas").on("mousedown", function(e) {
    $(".xydown").text("X: " + e.pageX + " Y: " + e.pageY);
  });
  $("canvas").on("mouseup", function(e) {
    $(".xyup").text("X: " + e.pageX + " Y: " + e.pageY);
  });
});
