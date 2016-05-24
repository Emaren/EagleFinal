$(document).ready(function() {

  $('.mainContent-container video').on('click', function() {
      console.log("Hi");
    });

  $("#fire").click(function(){
    $("#thermal").fadeOut(1000);
    $("#co").fadeOut(1000);
  });

$('#fire').click(function(){this.paused?this.play():this.pause();});



});
