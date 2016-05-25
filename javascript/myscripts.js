$(document).ready(function() {

  $('.mainContent-container video').on('click', function() {
      console.log("Hi");
    });

  $("#fire").click(function(){
    $("#thermal").fadeOut(1000);
    $("#co").fadeOut(1000);
  });

$('#fire').click(function(){this.paused?this.play():this.pause();});





$.fn.animateRotate = function(angle,prevAngle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(e, arguments);
        };

        $({deg: prevAngle}).animate({deg: angle}, args);
    });
};
var angle = 0;
var prevAngle = 0;

$(".phone").mouseenter(function(e) {
    prevAngle = angle
    angle -= 100;
    $(this).animateRotate(angle, prevAngle, 250);
    e.preventDefault();
    $(this).animate({
      left: "800px",
      opacity: 1
    }, {
      duration: 300,
      queue: false
    });
    $(".phone-number").fadeIn(1000);
    // $(".phone-number").show("slide", 400);
});
$(".phone").mouseleave(function(e) {
  prevAngle = angle
  angle += 100;
  $(this).animateRotate(angle, prevAngle, 350);
  e.preventDefault();
  $(this).animate({
    left: "905px",
    opacity: 1
    }, {
      duration: 300,
      queue: false
    });
    $(".phone-number").hide("slide", "easeInQuart", 300);
  });
  });






$('.supertherm-tds').click(function(){
  // $('#supertherm-tds-pdf').fadeIn(1000);
  $('#supertherm-tds-pdf').show();
});


$('.hello').click(function(){
  alert("Hi");
});












// $.fn.animateRotate = function(angle,prevAngle, duration, easing, complete) {
//     var args = $.speed(duration, easing, complete);
//     var step = args.step;
//     return this.each(function(i, e) {
//         args.complete = $.proxy(args.complete, e);
//         args.step = function(now) {
//             $.style(e, 'transform', 'rotate(' + now + 'deg)');
//             if (step) return step.apply(e, arguments);
//         };
//
//         $({deg: prevAngle}).animate({deg: angle}, args);
//     });
// };
// var angle = 0;
// var prevAngle = 0;
//
// $(".phone").mouseenter(function(e) {
//     prevAngle = angle
//     angle -= 100;
//     $(this).animateRotate(angle, prevAngle, 250).delay(2000);
//     e.preventDefault();
//     $(this).animate({
//       left: "800px",
//       opacity: 1
//     }, {
//       duration: 300,
//       queue: false
//     });
//     $(".phone-number").fadeIn(1000);
//     // $(".phone-number").show("slide", 400);
// });
// $(".phone").mouseleave(function(e) {
//   prevAngle = angle
//   angle += 100;
//   $(this).animateRotate(angle, prevAngle, 350).delay(2000);
//   e.preventDefault();
//   $(this).animate({
//     left: "905px",
//     opacity: 1
//     }, {
//       duration: 300,
//       queue: false
//     });
//     $(".phone-number").hide("slide", "easeInQuart", 300);
//   });
//
// });
