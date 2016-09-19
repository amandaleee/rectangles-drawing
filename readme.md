### Assumptions/limitations
* This is only for contemporary browsers [this is a complicated app that involves a lot of things I've never used before and I don't have the resources to do extensive testing on legacy versions before the due date]

### Todo

* make the canvas element vertically centered - flexbox to the rescue
* pageX and pageY values are the distance from the top of the window, not the top of the element. write the function to subtract margins/padding from the values. This might be useful: http://stackoverflow.com/questions/14651306/get-mouse-position-within-div
* mobile/tablet views
* actual styling
* canvas fallback styling ["your browser is not supported"]
* QA/mobile testing if there's time
* user model/login
* save drawing/urls/share drawing
* delete drawing
* see all my drawings
* change the color of the box, the size, the rotation [?]


### Done


### Resources I used

* https://dev.opera.com/articles/html5-canvas-painting/ Canvas tutorial [this isn't as helpful as i hoped]
*  context.rect(180, 0, 200, 100); is the format for a rect element http://www.html5canvastutorials.com/tutorials/html5-canvas-rectangles/ - that is 
* http://www.sparknotes.com/math/algebra1/graphingequations/section4.rhtml - checking my math around slope, probably not using this anymore but i might come back to it for a refactor
* http://jsfiddle.net/HBZBQ/ a fiddle that tracks mouse position, not sure if this works in all browsers.
* docs on event.which https://api.jquery.com/event.which/ because it's kinda dangerous to just copy stuff from fiddles (as above) and then assume it's going to work.
* http://stackoverflow.com/questions/14651306/get-mouse-position-within-div offset relative to canvas, not to full document 
* canvas drawing app tutorial - http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/ - i probably have to redraw() at some point, idk

### notes/pseudocode
* we could refactor this using the slope to maybe get rid of some of the if/else 
  ..* find the slope of this line = rise over run. (change in the y value)/(change in the x value)
  ..* var slope =  (mouseupY - mousedownY) / (mouseupX - mousedownX);

* set innerhmtl of the one you're viewing to the one you saved. for each saved one. 

add fb/google oath last. 
save these innerhtml in cookies if they're allowed to be that big; otehrwise, use localstorage. 
name the saved layout - return to the saved layout. 
this is going to be in a cookie - if it can manage that html, cool, then there are 
key/value pair - key is name, value is the innerhtml

sessionStorage.setItem("key", "value");

var layouts = JSON.parse(localStorage.getItem('layouts'));
localStorage.setItem("layouts",JSON.stringify([]));
//the 
localStorage.get

store array, pull array. 

layouts.push({'My cool layout': document.querySelector('theelement').innerHTML});
// put the new layout into the array as an object w key value pair. 
localStorage.setItem("layouts", JSOT.stringify(layouts));
var layouts = var layouts = JSON.parse(localStorage.getItem('layouts'));

click on a name, search for the name in the localstorage array, load it.

document.querySelector("#canvas").innerHTML = layouts[0]; //

socket.io/node - broadcast/emit
emit - type of message, 







