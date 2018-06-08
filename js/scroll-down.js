$(document).ready(function() {
    $(".down").on('click', function() {
         $('html, body').animate({
             scrollTop: $(".up").offset().top
         }, 1500);
    });
    // $(".scroll-down").on('click', function() {
    //      $('html, body').animate({
    //          scrollTop: $(".finish-section").offset().top
    //      }, 1500);
    // });

    $('.scroll-down').click(function(){
        console.log("hi");
        $('.popup-2').toggle('slow');
        if ($(".popup-2").css("display","block")){
            $('#overlay').fadeIn(400, function(){ 
                $('.popup-2').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
            });  
        }
        $('#modal_close, #overlay').click( function(){
          $('.popup-2').animate({opacity: 0, top: '45%'}, 200,
            function(){ // пoсле aнимaции
              $(this).css('display', 'none'); // делaем ему display: none;
              $('#overlay').fadeOut(400); // скрывaем пoдлoжку
            });
        });
    });

    $('.navbar-nav a').click(function(){
        $('.navbar-collapse').collapse('hide');
    });
    
});