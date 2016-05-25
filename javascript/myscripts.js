$(document).ready(function() {

  $('.mainContent-container video').on('click', function() {
      console.log("Hi");
    });

  // $("#fire").click(function(){
  //   $("#thermal").fadeOut();
  //   $("#co").fadeOut();
  //   $("#fire").animate({
  //     right: "100%"
  //   }, 1000 );
  // });

  $(".carousel.leftCar").click(function(){
    $(".fireCol").fadeOut();
    $(".coCol").fadeOut();
    $(".thermalCol").animate({
      left: "34%",
    }, 2000, function()
          {
              $(".carousel.leftCar").css({'display': 'none'}, 3000);
              $(".imageTitle").css({'display': 'none'}, 3000);
              $("#thermal").css({'display': 'block'}, 3000);
          });
          $(".intro").hide(400);
          $(".footerContent").hide(100);
          $(".spi-certified").hide(100);
          $(".chat").hide(100);
  });

  $('#thermal').click(function(){
    this.paused?this.play():this.pause();
  });

  $(".carousel.rightCar").click(function(){
    $(".thermalCol").fadeOut(2000);
    $(".coCol").fadeOut(2000);
    $(".fireCol").animate({
        right: "34%"
    }, 2000, function()
          {
              $(".carousel.rightCar").css({'display': 'none'}, 3000);
              $(".imageTitle").css({'display': 'none'}, 3000);
              $("#fire").css({'display': 'block'}, 3000);
          });
          $(".intro").hide(400);
          $(".footerContent").hide(100);
          $(".spi-certified").hide(100);
          $(".chat").hide(100);
  });
  $('#fire').click(function(){
    this.paused?this.play():this.pause();
  });

  $(".carousel.middleCar").click(function(){
    $(".thermalCol").fadeOut(2000);
    $(".fireCol").fadeOut(2000);
    // $(".coCol").fadeOut(3000);
    $(".coCol").animate({
        right: ""
    }, 2000, function()
          {
              $(".carousel.middleCar").css({'display': 'none'}, 3000);
              $(".imageTitle").css({'display': 'none'}, 3000);
              $("#co").css({'display': 'block'}, 3000);
          });
          $(".intro").hide(400);
          $(".footerContent").hide(100);
          $(".spi-certified").hide(100);
          $(".chat").hide(100);
  });
  $('#co').click(function(){
    this.paused?this.play():this.pause();
  });

});

$('.carousel').carousel({
    interval: 1000
});
