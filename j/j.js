$(function () {


    $(".hsx-menuMain").hsMenu({
        breakpoint: 992,
    });

    hsxTabby($(".hsx-tabby1"));

    hsxTabby($(".hsx-md-multimedia"));

    $(".hsx-ticker .hsx-in").slick({
        vertical:true,
        arrows: true,
        prevArrow: $(".hsx-ticker .hsx-prev"),
        nextArrow: $(".hsx-ticker .hsx-next"),
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,        
    });
    $(".hsx-md-topNews .hsx-sliderMain").slick({
        rtl:true,
        arrows: true,
        prevArrow: $(".hsx-md-topNews .hsx-prev"),
        nextArrow: $(".hsx-md-topNews .hsx-next"),
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,        
    });

    //thumbs.slick({
    //    rtl: true,
    //    arrows: true,
    //    prevArrow: $(".hs-prev", thumbs.parent()),
    //    nextArrow: $(".hs-next", thumbs.parent()),
    //    dots: false,
    //    infinite: false,
    //    speed: 300,
    //    slidesToShow: 6,
    //    slidesToScroll: 1,
    //    asNavFor: '#slidermain1',
    //    focusOnSelect: true,
    //    autoplay: false,
    //    autoplaySpeed: 4000,        
    //});

});