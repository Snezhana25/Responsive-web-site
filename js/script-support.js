$(document).ready(function (){
	  $('.wrapper-support').click(function(){
      $('.navbar-collapse').collapse('hide');
      $('.live-chat').toggle('slow');
      	if ($(".live-chat").css("display","block")){
            return false;
      	}
  	});
  	$('.chat-close').on('click', function(e) {
		    e.preventDefault();
	      $('.live-chat').fadeOut(300);
	   });
});

$(document).ready(function() {
    var maxchars = 250;
    $('#text').keyup(function () {
      var tlength = $(this).val().length;
        $(this).val($(this).val().substring(0, maxchars));
          remain = maxchars - parseInt(tlength);
        $('#remain').text(remain);
    });
    
    $( "#btn-support" ).on( "click",function (){
        var field = $("#text").val().replace(/\s+/g,'');
        console.log(field);
        var length = field.length;
        var usernamecheck = /^(?=.+[а-яА-ЯёЁa-zA-Z])/;
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if($('#email-sup').val() != '') {
            console.log('blur');
            if(pattern.test($('#email-sup').val())){
                $('#email-sup').css({'border' : '1px solid #569b44'});
                $('#valid').remove();
            } else {
                $('#email-sup').css({'border' : '1px solid #ff0000'});
                $('#valid').css( "color", "red" ).text('Адрес электронной почты должен быть действительным');
                return false;
            }
        } else {
            $('#email-sup').css({'border' : '1px solid #ff0000'});
            $('#valid').css( "color", "red" ).text('Поле электронной почты не должно быть пустым');
            return false;
        }
        if(!$.trim(field).match(usernamecheck) || length < 5 ){
            $( '#text' ).css( "border", "3px solid red" );
            $('#message').css( "color", "red" ).text("Вы должны ввести минимум 5 букв");
            return false;
        }else{
          $( '#text' ).css( "border", "3px solid blue" );
            $('#message').remove();
            $('.live-chat').fadeOut(300);
            $('.card').slideToggle( 400 );
        }

    });
});