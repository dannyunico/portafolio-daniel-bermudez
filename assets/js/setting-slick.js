$('.main-bannerAbout__slider').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  autoplaySpeed: 3000,
  arrows: true,
  fade: true,
  cssEase: "linear",
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows:true,
      autoplay:false,
    }
  }
  ]
});



$('.main-bestVendido__slider').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  centerMode:true,
  centerPadding:'120px',
  responsive: [{
    breakpoint: 2000,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows:false,
      centerMode: true,
      centerPadding: '0',
    }
  }
  ]
});



$('.main-retail__slider').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  centerMode:true,
  centerPadding:'120px',
  responsive: [
  {
    breakpoint: 2000,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows:false,
      centerMode: true,
      centerPadding: '25px',
    }
  }
  ]
});


$('.main-gallery__slider').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  centerMode:true,
  centerPadding:'120px',
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows:false,
      centerMode: true,
      centerPadding: '25px',
    }
  }
  ]
});


$('.main-upcomingTraining__slider').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  centerMode:true,
  centerPadding:'120px',
  responsive: [{
    breakpoint: 2000,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows:false,
      centerMode: true,
      centerPadding: '25px',
    }
  }
  ]
});



$('.slider-listProducts__content').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  centerMode:false,
  centerPadding:'100px',
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll:1 ,
      arrows: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows: true,
      centerMode: false,
      centerPadding: '25px',
    }
  }
  ]
});



$('.slider-productSolutions__content').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  centerMode:false,
  centerPadding:'100px',
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll:1 ,
      dots: true,
      autoplay: true,
      autoplay: true,
      autoplaySpeed: 5000,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      centerMode: false,
      centerPadding: '25px',
    }
  }
  ]
});