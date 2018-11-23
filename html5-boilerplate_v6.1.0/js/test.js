(function ($) {
	"use strict";
    
    $( document ).on( "mousemove", function( event ) {
        $(".circle" ).animate({
            top: event.pageY-($(".circle").height()/2),
            left: event.pageX-($(".circle").width()/2)
        }, 0, "linear");
    });
    
})(jQuery)

var main = document.querySelector("circle");

main.addEventListener("mousemove", function (e) {
  var xVal = e.clientX / main.clientWidth;
  var yVal = e.clientY / main.clientHeight;
  
  main.style.setProperty("--mouse-x", xVal);
  main.style.setProperty("--mouse-y", yVal);
});
