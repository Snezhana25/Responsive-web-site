 // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  
  var modalImg = document.getElementById("img01");
  
  var img = document.getElementsByClassName('myImg');
  for(i = 0; i < img.length; i++){
    img[i].addEventListener("click", function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        
    });
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
      modal.style.display = "none";
  }

  $(document).ready(function(){
    // $('.spoil').hide();
    // $('.spoiler-title').click(function(){
    //     $(this).next().toggle()});
    $('.spoiler-body').hide();
      $('.spoiler-title').click(function(){
          $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
          if($(this).hasClass('opened')) {
              $(this).html('Скрыть всех');
          }
          else {
              $(this).html('Смотреть всех');
          }
      });
  });