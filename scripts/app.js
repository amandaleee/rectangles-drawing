$(document).ready(function(){
  $("canvas").on("mousemove", function(e) {
    console.log("moving");
      if (e.which == 1) {
          $(".xy").text("X: " + e.pageX + " Y: " + e.pageY);
      }
  });
});
