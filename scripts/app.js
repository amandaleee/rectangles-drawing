$(document).ready(function(){
  var rect = "<div class=\"rectangle\"></div>";
  $(".add-rect").click(function(){
    // console.log("clicked btn");
    $(".canvas").append(rect);
  });
});
