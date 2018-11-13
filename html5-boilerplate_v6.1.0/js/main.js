window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop  > 90) {
    $(".menulink").addClass('menulink2');
    $('.headerbar').addClass('headerbar2');
    $('.search').addClass('search2');

  } 
  
  else {
    $(".menulink").removeClass('menulink2');
    $('.search').removeClass('search2');
    $('.headerbar').removeClass('headerbar2');

    

  }
}



$(window).scroll(function(){
    $(".search").css("opacity", 1 - $(window).scrollTop() / 90);
  });




