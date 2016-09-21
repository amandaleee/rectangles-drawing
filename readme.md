### Assumptions/limitations
* This is only for contemporary browsers [this is a complicated app that involves a lot of things I've never used before and I don't have the resources to do extensive testing on legacy versions before the due date]



# Featureset TODO: 

­* Log in with Google
­* Log in with Facebook
* Add a new rectangle to the area
* Remove a rectangle
* Resize a rectangle using direct mouse manipulations
* Move a rectangle using direct mouse manipulations
* Change the color of a rectangle
* Clear the area
* Save the current area layout (the position, size, and color of each rectangle in the area)
* Name a saved layout
* Return to a saved layout
* Delete a saved layout from the set of saved layouts
* The layouts should be stored per­-user & should persist though a page refresh.

# Featureset DONE: 
* 

### misc todo

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






### Resources I looked at but didn't use

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




