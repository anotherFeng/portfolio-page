$(document).ready(function(){
  $('#slides').superslides({
    animation: 'fade',
    play: 3000,
    pagination: false,
  });

  let typed = new Typed('.typed', {
    strings: ["Software Engineer", "Web Developer", "IT Consultant"],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true,
    startDelay: 1000,
    showCursor: true
  })

  var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop:true,
      nav:true,
      margin:10,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
      }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
        owl.trigger('next.owl');
      } else {
        owl.trigger('prev.owl');
      }
      e.preventDefault();
    });
});