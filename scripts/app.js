$(document).ready(function(){

  //reusable variable for the rectangle
  var rect = '<div class="rectangle">'
    + '<div class="remove">X</div>'
    + '<input type="text" class="colorpicker"/>'
    + '</div>';

  // this makes the colorpicker display correctly when the rectangle loads, 
  // instead of just looking like an input box
  $(".colorpicker").spectrum();

  //adding a rectangle
  $(".add-rect").click(function(){
    $(".canvas").append(rect); //appends the rectangle
    $(".rectangle").draggable().resizable();//makes it draggable and resizeable
    $(".rectangle").on("click", ".remove", function () {//removes just the one
      $(this).parent(".rectangle").remove(); 
    });
    $(".colorpicker").spectrum({ //makes the colorpicker function for real
        preferredFormat: "hex", //hex, not rgb/hsb/string
        change: function(color) { //set new background color when user changes the picker values
          $(this).parent(".rectangle").css("background", color);
        }
    });
  });
  $(".clear").click(function(){
    $(".rectangle").remove(); //removes all rectangles
  });

  var drawings = []; //set the drawings array for storing saved drawings.

  $(".save").click(function(){
    var drawingname = ($(".drawing-name").val());//save the name 
    var drawingnameClass = drawingname.replace(/\s+/g, ''); //squashes the spaces to use as a class name below
    var drawingval = $(".canvas").html(); //save the drawing
    drawings.push({name: drawingname, markup: drawingval, class: drawingnameClass });

    var drawingnameAppend = '<p class="' 
    + drawingnameClass //add the class
    + ' saved-drawing">' + drawingname 
    + ' <span class="remove-drawing">(remove)</span>' //remove-drawing element for removing it.
    + '</p>'; //add the name

    $(".drawing-list").append(drawingnameAppend); //add paragraph with the drawing name to the div
  });

  $('.drawing-list').on('click', '.saved-drawing', function(){
    var classSearch = $(this).attr("class").split(' ')[0]; //get the class attrs from .saved-drawing that user clicked on; classSearch is the first
      for (var i=0; i < drawings.length; i++) { //iterate over the array
        if (drawings[i].class === classSearch) { //if classSearch = the class of this object
          getSavedDrawing = drawings[i].markup; //get that object's markup...
          $('.canvas').html(getSavedDrawing);// and then apply it to the .canvas element. 
        }
      }
    }); 
    $(".remove-drawing").click(function(){
      $(this).parent(".saved-drawing").remove(); //remove the drawing
    });

});