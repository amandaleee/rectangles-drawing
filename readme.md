* Application URL: http://www.amandalee.me/rectangles/



# Featureset that I did complete:  
* Name a saved layout //this is actually "name a layout before you save it"; you'll be able to load a layout and then save it under a different name after i get "return to a layout" working. 
* Add a new rectangle to the area (.add-rect click event)
* Resize a rectangle using direct mouse manipulations - .resizable() method
* Move a rectangle using direct mouse manipulations - draggable() method
* Clear the area (.clear click event)
* Remove a rectangle (.remove click event)
* Change the color of a rectangle (the whole spectrum.js package()
* Save the current area layout (the position, size, and color of each rectangle in the area)
* Delete a saved layout from the set of saved layouts (.remove-drawing click event)
* Return to a saved layout [click on the layout's name in the list below the canvas].

# Featureset that I couldn't complete: 
­* Log in with Google
­* Log in with Facebook
* The layouts should be stored per­-user & should persist though a page refresh. - If I'd not been sick, I would have investigated how to use localStorage for this, adding it to localStorage within the save function and deleting it within the remove-drawing function. 

### Assumptions/limitations/testing details
* I tested this on Chrome, Firefox and Safari - normally I'd test on IE as well but I don't have a Windows machine or a testing utility [eg Browserstack] right now. I also looked at it on my Nexus 6. 

### Known bugs, miscellaneous todos, and ideas for improvements: 
* I need to iterate on $(".rectangle").draggable().resizable(). Right now it's targeting ALL .rectangle elements, not just the one that's just been added; this could be causing speed/memory issues. 
* The for loop in the click event on .drawing-list may not be the most efficient way to do that if we have a lot of drawings saved - I know some devs use the filter() method for this. 
* The positioning of the rectangles [either absolute or relative] causes some weird behavior either way. If they're position: relative, sometimes the rectangles move other rectangles out of the way as you drag them; also if the user deletes some, the others will move around. If they're position: absolute, the user can add several in a row without moving them and not really see how many they added because they'd all be layered on top of one another at top:0/left: 0. 
* If the user clicks "save" more than once, the app can save duplicates of the layouts. Also, if the user clicks "Save" without any rectangles, it saves an object with blank innerhtml. This could cause an issue with retrieving the correct drawing. We should impelement a check for this. 
* It's impossible for the user to control the z-index of the rectangles right now - this would be something I'd improve on in a future iteration. 
* I only saw this a couple times but sometimes if I saved a bunch of layouts consecutively, I saw some of the rectangles have two color pickers. 
* I would love to come back to the colorpicker and have it live in the menu, rather than attaching it to each rectangle. It doesn't look great like this, and particularly on mobile it's not user-friendly - we essentially have three manipulable elements within each rectangle, which on a mobile screen is pretty crowded. This would require quite a bit more testing, though. 
* I was able to satisfy the requirement of returning to a saved layout, and renaming it [if only by a technicality - "renaming" is actually just saving another object with the same innerHTML but a different name]. However, if you go back to the saved layout, you're no longer able to edit it in the canvas. I don't fully understand the logic of this behavior but I can look into it more. 


### Resources I used
* https://forum.jquery.com/topic/can-the-same-element-have-draggable-and-click-event - draggable and click events don't seem to work together, i was checking to see if this had ever happened to anyone else.
* http://jsfiddle.net/bgrins/ctkY3/ - a fiddle showing me how to use the colorpicker.
* http://www.lugolabs.com/articles/71-how-to-use-a-color-picker-in-javascript more colorpicker resources
* https://bgrins.github.io/spectrum/#events-change actual Spectrum documentation.

* find an object by property http://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects [i've never done this before outside of class exercises]

* https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/ - localstorage info
* http://stackoverflow.com/questions/29986657/global-variable-usage-on-page-reload more localstorage info
* http://stackoverflow.com/questions/5410820/how-can-i-show-all-the-localstorage-saved-variables what is in localstorage right now anyway - this is really useful

* http://api.jquery.com/on/ - for delegated events. The click() method only works on elements that exist on the page when it's attached, so on() gives us a way to target them as they're added later 