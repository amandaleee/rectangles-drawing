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
    $(".colorpicker").spectrum({ //makes the colorpicker function or real
        preferredFormat: "hex", //hex, not rgb/hsb/string - this might not be necessary
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
    var drawingnameClass = drawingname.replace(/\s+/g, ''); //squashes the spaces to use as a class name below
    var drawingval = $(".canvas").html(); //save the drawing
    //save to local storage here as well. 
    drawings.push({name: drawingname, markup: drawingval, class: drawingnameClass });
    console.log(drawings);
    // localStorage.setItem(drawings, JSON.stringify([]));// this isn't right - coming back to this
    var drawingnameAppend = "<p class=\"" 
    + drawingnameClass //add the class
    + " saved-drawing\">" + drawingname 
    + "<span class=\"remove-drawing\">(remove)</span>" //remove-drawing element for removing it.
    + "</p>"; //add the name

    $(".drawing-list").append(drawingnameAppend); //add paragraph with the drawing name to the div

    $(".saved-drawing").click(function(){
      var classSearch = $(this).attr("class").split(' ')[0]; //get all the class attrs from .saved-drawing that te user clicked on, and set classSearch as = to the first. 

       //find that value as "class" from the array of drawings;
        // use the jquery grep method
      // 
      //render that  as innerhtml in the .canvas
    }); 
    $(".remove-drawing").click(function(){
      $(this).parent(".saved-drawing").remove(); //remove the drawing
      //need to delete it from localstorage as well. 
    });
  });

});