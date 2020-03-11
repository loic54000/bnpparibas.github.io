$(document).ready(function(){ WindowWidth = $(window).width(); 
    if (WindowWidth < 992){
        $('#section-1').load('carousel.html #section-1-carousel-reponsive');
    } 
    
    else {
        $('#section-1').load('carousel.html .conteneur-slide');
    }
}); 


$(window).resize(function (){ WindowWidth = $(window).width(); 
    if (WindowWidth < 992){ 
        $('#section-1').load('carousel.html #section-1-carousel-reponsive');
    } 
        
    else {     
        $('#section-1').load('carousel.html .conteneur-slide');
    }
});

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });
