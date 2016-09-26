### Assumptions/limitations
* This is only for contemporary browsers [this is a complicated app that involves a lot of things I've never used before and I don't have the resources to do extensive testing on legacy versions before the due date]


# Featureset TODO: 
­* Log in with Google
­* Log in with Facebook
* Return to a saved layout
* Delete a saved layout from the set of saved layouts
* The layouts should be stored per­-user & should persist though a page refresh.

# Featureset DONE: 
* Name a saved layout //this is actually "name a layout before you save it"; you'll be able to load a layout and then save it under a different name after i get "return to a layout" working. 
* Add a new rectangle to the area (.add-rect click event)
* Resize a rectangle using direct mouse manipulations - .resizable() method
* Move a rectangle using direct mouse manipulations - draggable() method
* Clear the area (.clear click event)
* Remove a rectangle (.remove click event)
* Change the color of a rectangle (the whole spectrum.js package()
* Save the current area layout (the position, size, and color of each rectangle in the area)

### misc todo/known bugs
* iterate on $(".rectangle").draggable().resizable(); and make it target ONLY the rect that was just added, not all of them - this could be a memory suck if not
* some weird behavior - sometimes the rectangles move other rectangles out of the way; also if you delete some, the others will move around. 
* if the user clicks "save" more than once, it'll save duplicates of the layouts. 
* iterate on the spectrum input - it's weird until you click on it. 
* actual styling, including responsiveness. 
* QA/mobile testing if there's time
* z-index issues - not sure i can do anythng about that
* related to z-index: if you add several rectangles in a row without moving them, you won't see them all because they'll be layered on top of one another at top: 0/left:0.




### Done


### Resources I used
* https://forum.jquery.com/topic/can-the-same-element-have-draggable-and-click-event - draggable and click events don't seem to work together, i was checking to see if this had ever happened to anyone else.
* http://jsfiddle.net/bgrins/ctkY3/ - a fiddle showing me how to use the colorpicker.
* http://www.lugolabs.com/articles/71-how-to-use-a-color-picker-in-javascript more colorpicker resources
* https://bgrins.github.io/spectrum/#events-change actual Spectrum documentation.
* https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/ - localstorage info
* http://stackoverflow.com/questions/29986657/global-variable-usage-on-page-reload more localstorage info
* http://stackoverflow.com/questions/5410820/how-can-i-show-all-the-localstorage-saved-variables wtf is in localstorage right now anyway - this is really useful



### Resources I looked at but didn't use [when i was going the Canvas direction]

* https://dev.opera.com/articles/html5-canvas-painting/ Canvas tutorial [this isn't as helpful as i hoped]
*  context.rect(180, 0, 200, 100); is the format for a rect element http://www.html5canvastutorials.com/tutorials/html5-canvas-rectangles/ - that is 
* http://www.sparknotes.com/math/algebra1/graphingequations/section4.rhtml - checking my math around slope, probably not using this anymore but i might come back to it for a refactor
* http://jsfiddle.net/HBZBQ/ a fiddle that tracks mouse position, not sure if this works in all browsers.
* docs on event.which https://api.jquery.com/event.which/ because it's kinda dangerous to just copy stuff from fiddles (as above) and then assume it's going to work.
* http://stackoverflow.com/questions/14651306/get-mouse-position-within-div offset relative to canvas, not to full document 
* canvas drawing app tutorial - http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/ - i probably have to redraw() at some point, idk



* if(localStorage && localStorage.getItem('favoriteflavor')){
      alert("favorite flavor exists");
    } else {
      alert("nope");
    };
      localStorage.setItem('favoriteflavor','vanilla');


The first time I loaded the page with the above in app.js, it alerted "nope" because it hadn't been set yet. then it alerted "favorite flavor exists" because it was set after the alert. when i commented out the setItem, it still alerted "favorite flavor exists". cool stuff. 