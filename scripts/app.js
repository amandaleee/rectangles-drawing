$(document).ready(function(){

  // a reusable rectangle class to append
  // var count = 1 - for iterating


   
  if(localStorage && localStorage.getItem("drawings")){
    console.log(JSON.parse(localStorage.getItem("drawings")));
    // add drawings to list.
  } else {
    alert("drawings do not exist");
    // localStorage.setItem("drawings", JSON.stringify([])); 
  };

  var rect = "<div class=\"rectangle\">"
    + "<div class=\"remove\">X</div>"
    + "<input type=\"text\" class=\"colorpicker\"/>"
    + "</div>";
    
  $(".colorpicker").spectrum({
    showInput: true //otherwise the input won't show until it's clicked. 
  });

  $(".add-rect").click(function(){
    $(".canvas").append(rect); //append it
    $(".rectangle").draggable().resizable();//make it draggable and resizeable
    $(".rectangle").on("click", ".remove", function () {//remove just the one
      $(this).parent(".rectangle").remove(); 
    });
    $(".rectangle").on("click", ".colorpicker", function () {//change the color
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

  var drawings = []; //set the drawings array
  var drawingcount = 0; //set the drawings count - i'm not sure if i'm going to use this
  

  $(".save").click(function(){
    drawingcount++;
    var drawingname = ($(".drawing-name").val());//save the name
    var drawingval = $(".canvas").html(); //save the drawing
    drawings.push({name: drawingname, markup: drawingval, number: drawingcount });
    var drawingnameAppend = "<li class=\"" 
    + drawingname 
    + "\">" + drawingname + "</li>";
    $(".drawing-list").append(drawingnameAppend); //add this to the list
  });

  

  





});

