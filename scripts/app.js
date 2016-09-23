$(document).ready(function(){

  // a reusable rectangle class to append
  // var count = 1 - for iterating
  var rect = "<div class=\"rectangle\">"
    + "<div class=\"remove\">X</div>"
    + "<input type=\"text\" class=\"colorpicker\"/>"
    + "</div>";
    
  

  $(".add-rect").click(function(){
    $(".canvas").append(rect); //append it
    $(".rectangle").draggable().resizable();//make it draggable and resizeable
    $(".rectangle").on('click', '.remove', function () {//remove just the one
      $(this).parent(".rectangle").remove(); 
    });
    $(".rectangle").on('click', '.colorpicker', function () {//change the color
      $(".colorpicker").spectrum({
        color: "#ECC",
        showInput: true,
        preferredFormat: "hex",
        change: function(color) {
          $(this).parent(".rectangle").css("background", color);
        }
      });
    });
  });


  $(".clear").click(function(){
    $(".rectangle").remove(); //removes all
  });

 
 




});

