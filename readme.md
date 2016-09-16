### Assumptions


### Todo

* make the canvas element vertically centered
* mobile/tablet views
* actual styling
* canvas fallback styling
* QA/mobile testing
* user model/login
* save drawing/urls/share drawing
* delete drawing
* see all my drawings
* change the color of the box, the size, the rotation [?]

### Done


### Resources I used

* https://dev.opera.com/articles/html5-canvas-painting/ Canvas tutorial
*  context.rect(180, 0, 200, 100); is the format for a rect element http://www.html5canvastutorials.com/tutorials/html5-canvas-rectangles/ - that is (rightoffset, topoffset, width, height)
* http://www.sparknotes.com/math/algebra1/graphingequations/section4.rhtml - checking my math around slope
* http://jsfiddle.net/HBZBQ/ a fiddle that tracks mouse position, not sure if this works in all browsers.

### notes/pseudocode

if page is in drawing mode

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
//write test cases lol

  if slope > 0 
  if slope < 0



