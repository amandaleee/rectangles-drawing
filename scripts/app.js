$(document).ready(function(){


  if(localStorage && localStorage.getItem("drawings")){
    // console.log(JSON.parse(localStorage.getItem("drawings")));
    // add drawings to list.
  } else {
    // alert("drawings do not exist");
    // localStorage.setItem("drawings", JSON.stringify([])); 
  };

  //reusable variable for the rectangle
  var rect = "<div class=\"rectangle\">"
    + "<div class=\"remove\">X</div>"
    + "<input type=\"text\" class=\"colorpicker\"/>"
    + "</div>";

  // this makes the colorpicker display correctly when the rectangle loads, 
  // instead of just looking like an input box
  $(".colorpicker").spectrum();

  //adding a rectangle
  $(".add-rect").click(function(){
    $(".canvas").append(rect); //appends it
    $(".rectangle").draggable().resizable();//makes it draggable and resizeable
    $(".rectangle").on("click", ".remove", function () {//removes just the one
      $(this).parent(".rectangle").remove(); 
    });
    $(".colorpicker").spectrum({ //makes the colorpicker function or real
        color: "#ECC",//initial color
        preferredFormat: "hex", //hex, not rgb/hsb/string
        change: function(color) { //set new background color when user changes the picker values
          $(this).parent(".rectangle").css("background", color);
        }
    });
  });
  $(".clear").click(function(){
    $(".rectangle").remove(); //removes all rectangles
  });

  var drawings = []; //set the drawings array

  $(".save").click(function(){
    var drawingname = ($(".drawing-name").val());//save the name, without spaces
    var drawingnameClass = drawingname.replace(/\s+/g, ''); //squashes the spaces to use as a class name below - not sure this is the right direction to go. 
    var drawingval = $(".canvas").html(); //save the drawing
    drawings.push({name: drawingname, markup: drawingval, class: drawingnameClass });
    var drawingnameAppend = "<p class=\"" 
    + drawingnameClass //add the class
    + " saved-drawing\">" + drawingname + "<span class=\"remove-drawing\">(remove)</span>"
    + "</p>"; //add the name
    $(".drawing-list").append(drawingnameAppend); //add this to the div
    $(".saved-drawing").click(function(){
      var classlist = $(this).attr("class").split(' ');
      //find the class  on this element that's not .saved-drawing;
      //find that value as from the array of drawings;
      //render that  as innerhtml in the .canvas
    }); 
    $(".remove-drawing").click(function(){
      $(this).parent(".saved-drawing").remove(); //remove the drawing
    });
  });
 

});