$(document).on('mouseleave', leaveFromTop);
  function leaveFromTop(e){
    if( e.clientY < 0 )
      $('#overlay').fadeIn(400, function(){ 
        $('#modal_form').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
      });
    $('#modal_close, #overlay').click( function(){
      $('#modal_form').animate({opacity: 0, top: '45%'}, 200,
      function(){ // пoсле aнимaции
      $(this).css('display', 'none'); // делaем ему display: none;
      $('#overlay').fadeOut(400); // скрывaем пoдлoжку
      });
    });
  }

  
      
   