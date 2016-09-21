$(document).ready(function(){

  // a reusable rectangle class to append
  // var count = 1 - for iterating
  var rect = "<div class=\"rectangle\">"
    + "<div class=\"remove\">X</div>"
    + "</div>"
    
  

  $(".add-rect").click(function(){
    $(".canvas").append(rect); //append it
    $(".rectangle").draggable().resizable();//make it draggable and resizeable
  });

  $(".clear").click(function(){
    $(".rectangle").remove(); //removes all
  });

});
