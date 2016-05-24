$(document).ready(function() {

  $('.mainContent-container video').on('click', function() {
      console.log("Hi");
    });

  $("#fire").click(function(){
    $("#thermal").fadeOut(1000);
    $("#co").fadeOut(1000);
  });
$(".fire-img-title").click(function(){
  $(".thermal-img-title").fadeOut(1000)
  $(".thermal-white").fadeOut(1000)
  $(".thermal-box").fadeOut(1000)
  $(".thermal-img").fadeOut(1000)
  $(".thermal-vid").fadeOut(1000)
  $(".play-thermal").fadeOut(1000)
  $(".corrosion-img-title").fadeOut(1000)
  $(".corrosion-white").fadeOut(1000)
  $(".corrosion-box").fadeOut(1000)
  $(".corrosion-img").fadeOut(1000)
  $(".corrosion-vid").fadeOut(1000)
  $(".play-corrosion").fadeOut(1000)
  $(".fire-img-title").animate({
    left: "-=515px"
  }, 1000 );
  $(".fire-white").animate({
    left: "-=515px"
  }, 1000 );
  $(".fire-box").animate({
    left: "-=515px"
  }, 1000 );
  $(".fire-img").animate({
    left: "-=515px"
  }, 1000 );
  $(".fire-vid").animate({
    left: "-=515px"
  }, 1000 );
  $(".play-fire").animate({
    left: "-=515px"
  }, 1000 );
  $(".intro").hide('scale', 400);
  $(".footer-container").hide('scale', 500);
  $(".thermal-parallax").show('scale', 1000);
});



});
