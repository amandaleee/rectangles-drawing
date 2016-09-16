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
*  context.rect(180, 0, 200, 100); is the format for a rect element http://www.html5canvastutorials.com/tutorials/html5-canvas-rectangles/ - that is (rightoffset, topoffset, width, height)
* http://www.sparknotes.com/math/algebra1/graphingequations/section4.rhtml - checking my math around slope, probably not using this anymore but i might come back to it for a refactor
* http://jsfiddle.net/HBZBQ/ a fiddle that tracks mouse position, not sure if this works in all browsers.
* docs on event.which https://api.jquery.com/event.which/ because it's kinda dangerous to just copy stuff from fiddles (as above) and then assume it's going to work.
* http://stackoverflow.com/questions/14651306/get-mouse-position-within-div offset relative to canvas, not to full document 

### notes/pseudocode

  <!-- on mousedown, record the XY value of the mouse  -->
  var mousedownX;
  var mousedownY;
  <!-- on mouseup, record the XY value of the mouse  -->
  var mouseupX;
  var mouseupY;
  find the slope of this line = rise over run. (change in the y value)/(change in the x value)
  var slope =  (mouseupY - mousedownY) / (mouseupX - mousedownX);
  <!--vertical lines-->
  if mousedownX === mouseupX
    if mousedownY === mouseupY
      this is just a dot, we render nothing
    if mousedownY > mouseupY

    if mousedownY < mouseupY
  <!--horizontal lines-->
  if mousedownY === mouseupY
    if mousedownX === mouseupX
      this is just a dot, render nothing
    if mousedownX > mouseupX
    if mousedownX < mouseupX
  if mousedownX > mouseupX [the user has dragged to the left]
    if mousedownY > mouseupY [and downward]
    if mousedownY < mouseupY [and upward]
  if mousedownX < mouseupX [the user has dragged to the right]
    if mousedownY > mouseupY [and downward]
    if mousedownY < mouseupY [and upward]

// we need a case for if people just click. that's not going to create a rectangle, executive decision here. 
//i need to flip these based on how canvas actually works
//write test cases lol - maybe i should use something like lodash/underscore to generate random numbers here

  if slope > 0 
  if slope < 0



