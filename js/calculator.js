 $(document).ready(function () {
  	$(".btn-res").on("click",function(){
	    var argument = $('input[name="argument"]').val().replace(/\s+/g,'');
	    var length = argument.length;
	    var checkingRegExp = /^\d+(?:[\.,]\d+)?$/g;

	    var  result;
	    var multiplier = 3;
	    result = argument * multiplier;
	   	var res1 = parseFloat(result);
	   	var res = Math.round(res1);

	   	if(!$.trim(argument).match(checkingRegExp) || length > 6 ){
	   		var res = "Введите не больше 5 чисел или числа с плавающей точкой";
	   		var error = res;
	   	}else{
		    console.log(res);
		    if (!isFinite(res)){
		      if(isNaN(res)){ // If result is not a number;
		        res = "Введите только числа ";
		        var error = res;
		      } else { // If result is infinity
		        res = "ой...";
		        var error = res;
		      }
		    }
		    
		}

	    $('.result').text(res + " $");
	    $('.result').text(error);
	    
	    


  	});
});