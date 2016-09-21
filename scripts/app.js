$(document).ready(function(){

  // a reusable rectangle class to append
  // var count = 1 - for iterating
  var rect = "<div class=\"rectangle\"></div>";
  

  $(".add-rect").click(function(){
    // append it
    $(".canvas").append(rect);
    //make it draggable - iterate on this and make it target ONLY the rect that i just added, not all of them. 
    $(".rectangle").draggable();
  });
});
