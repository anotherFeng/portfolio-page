$(document).ready(function(){
  $('#slides').superslides({
    animation: 'fade',
    play: 3000,
    pagination: false,
  });
  $(".owl-prev").removeAttr("style");

  let typed = new Typed('.typed', {
    strings: ["Software Engineer", "Web Developer", "IT Consultant"],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true,
    startDelay: 1000,
    showCursor: true
  })

  const owlOne = $('#owl-html-css');
  const owlTwo = $('#owl-front-end');
  const owlThree = $('#owl-back-end');
  const owlFour = $('#owl-data-base')

  owlOne.owlCarousel({
    navigation : false,
    loop:true,
    nav:true,
    margin:10,
    responsive:{
      0:{
          items:3
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
  owlOne.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owlOne.trigger('next.owl');
    } else {
      owlOne.trigger('prev.owl');
    }
    e.preventDefault();
  });

  owlTwo.owlCarousel({
    navigation : false,
    loop:true,
    nav:true,
    margin:10,
    responsive:{
      0:{
          items:3
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
  owlTwo.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owlTwo.trigger('next.owl');
    } else {
      owlTwo.trigger('prev.owl');
    }
    e.preventDefault();
  });

  owlThree.owlCarousel({
    navigation : false,
    loop:true,
    nav:true,
    margin:10,
    responsive:{
      0:{
          items:3
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
  owlThree.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owlThree.trigger('next.owl');
    } else {
      owlThree.trigger('prev.owl');
    }
    e.preventDefault();
  });

  owlFour.owlCarousel({
    nav : false,
    loop:true,
    nav:true,
    margin:10,
    responsive:{
      0:{
          items:3
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
  owlFour.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owlFour.trigger('next.owl');
    } else {
      owlFour.trigger('prev.owl');
    }
    e.preventDefault();
  });

  const statsTopOffset = $(".statsSection").offset().top;
  let countupFinished = false;
  $(window).scroll(function(){
    if(!countupFinished && window.pageYOffset > statsTopOffset - $(window).height() +200){
      $(".counter").each(function(){
        let element = $(this);
        let endVal = parseInt(element.text());
        element.countup(endVal);
      })
      countupFinished = true;
    }
  })

  $("[data-fancybox").fancybox();

  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }

  })

});