window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop  > 90) {
    $('.headerbar').addClass('headerbar2');
    $('.search').addClass('search2');
    $(".menulink").addClass('menulink2');
   
  } 
  
  else {
    $('.headerbar').removeClass('headerbar2');
    $('.search').removeClass('search2');
    $(".menulink").removeClass('menulink2');
  }
}



$(window).scroll(function(){
    $(".search").css("opacity", 1 - $(window).scrollTop() / 90);
  });




  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }