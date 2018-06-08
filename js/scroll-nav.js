    $(document).ready(function () {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
                // $('.navbar-light .navbar-nav .nav-link').css( "color", "black" );
                // $('.btn-outline-light').addClass('refresh');
                $( ".navbar-light .navbar-nav .nav-link" ).hover(
                  function() {
                    $( this ).addClass( "active-hover" );
                  }, function() {
                    $( this ).removeClass( "active-hover" );
                  }
                );
            } else {
                  $('.scrolling-navbar').removeClass('top-nav-collapse');
                  $('.navbar-light .navbar-nav .nav-link').css( "color", "#fff" );
                // });
            }
        });

        var sections = $('section'), nav = $('nav'), nav_height = nav.outerHeight();

        $(window).on('scroll', function () {
          var cur_pos = $(this).scrollTop();
          
          sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            
            if (cur_pos >= top && cur_pos <= bottom) {
              nav.find('a').removeClass('active');
              sections.removeClass('active');
              
              $(this).addClass('active');
              nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
          });
        });

        nav.find('a').on('click', function () {
          var $el = $(this)
            , id = $el.attr('href');
          
          $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
          }, 500);
          
          return false;
        });
        
        
    });
