	$(document).ready(function(){

			// Custom method to validate username
			$.validator.addMethod("usernameRegex", function(value, element) {
				return this.optional(element) ||  /^(([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}\s{1}[а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25})|([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}))$/i.test(value); 
			}, "Имя должно содержать более двух символов без каких-либо специальных символов и пробелов");
			$.validator.addMethod("lastusernameRegex", function(value, element) {
				return this.optional(element) || /^(([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}\s{1}[а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25})|([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}))$/i.test(value);
			}, "Фамилия должно содержать более двух символов без каких-либо специальных символов и пробелов");
			$.validator.addMethod("passwordRegex", function(value, element) {
				return this.optional(element) || /^(([a-z0-9]*\d+[a-z]+[a-z0-9]*)|([a-z0-9]*[a-z]+\d+[a-z0-9]*))$/i.test(value);
			}, "Пароль должно содержать буквы и цифры");
			$.validator.addMethod("phoneccRegex", function(value, element) {
				return this.optional(element) || /^[0-9+]*$/.test(value);
			}, "Код должен быть действительным");

			$.validator.addMethod("username2Regex", function(value, element) {
				return this.optional(element) || /^(([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}\s{1}[а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25})|([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}))$/i.test(value);
			}, "Имя должно содержать более двух символов без каких-либо специальных символов и пробелов");
			$.validator.addMethod("lastusername2Regex", function(value, element) {
				return this.optional(element) || /^(([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}\s{1}[а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25})|([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}))$/i.test(value);
			}, "Фамилия должно содержать более двух символов без каких-либо специальных символов и пробелов");
			$.validator.addMethod("password2Regex", function(value, element) {
				return this.optional(element) || /^(([a-z0-9]*\d+[a-z]+[a-z0-9]*)|([a-z0-9]*[a-z]+\d+[a-z0-9]*))$/i.test(value);
			}, "Пароль должно содержать буквы и цифры");
			$.validator.addMethod("phonecc2Regex", function(value, element) {
				return this.optional(element) || /^[0-9+]*$/.test(value);
			}, "Код должен быть действительным");

			$(".next").click(function(){
				var form = $("#myform");
		        //show the next fieldset
		        form.validate({
		        	errorElement: 'span',
		        	errorClass: 'help-block',
		        	highlight: function(element, errorClass, validClass) {
		        		$(element).closest('.form-group').addClass("error");
		        	},
		        	unhighlight: function(element, errorClass, validClass) {
		        		$(element).closest('.form-group').removeClass("error");
		        	},
		        	rules: {
		        		username: {
		        			required: true,
		        			usernameRegex: true,
		        			minlength: 3,
		        		},
		        		lastusername:{
		        			required: true,
		        			lastusernameRegex: true,
		        			minlength: 3,
		        		},
		        		password : {
		        			required: true,
		        			passwordRegex: true,
		        			minlength: 6,
		        			maxlength: 12,
		        		},
		        		email: {
		        			required: true,
		        			email: true,

		        		},
		        		phone:{
		        			required: true,
		        			number: true,
		        			minlength: 6,
		        			maxlength: 25,
		        		},
		        		phonecc:{
				            required: true,
				            maxlength: 5,
				            phonecc2Regex: true,
				        },

		        		

		        	},
		        	messages: {
		        		username: {
		        			required: "Поле имя обязательно для заполнения",
		        			minlength: "Поле имя обязательно для заполнения",
            				maxlength: "Введите действительное имя",
		        		},
		        		lastusername:{
		        			required: "Поле фамилия обязательно для заполнения",
		        			minlength: "Поле фамилия обязательно для заполнения",
            				maxlength: "Введите действительную фамилию",
		        		},
		        		password : {
		        			required: "Поле пароль обязательно для заполнения",
		        			minlength: "Поле пароль должно быть не менее 6 символов",
            				maxlength: "Поле пароль должно быть не более 12 символов",
		        		},
		        		email: {
		        			required: "Поле email обязательно для заполнения",
            				email: "Поле email должно быть действительным электронным адресом",
		        		},
		        		phone:{
		        			required: "Поле телефон обязательно для заполнения",
				            number: "Поле телефон должно быть числом",
				            minlength: "Поле телефон должно быть не менее 6 символов",
				            maxlength: "Введите действительный телефон",
		        		}

		        	}
		        });
		        if (form.valid() === true){
		        	var first_name = $('#username');
		
		        	if ($('#account_information').is(":visible")){
		        		current_fs = $('#account_information');
		        		next_fs = $('#security');
		        	}else if($('#security').is(":visible")){
		        		current_fs = $('#security');
		        		next_fs = $('#personal_phone');
		        	}
		        	next_fs.show(); 
		        	current_fs.hide();
		        }
			});
			$(".next2").click(function(){
				
				var secform = $("#secform");
		        secform.validate({
		        	errorElement: 'span',
		        	errorClass: 'help-block',
		        	highlight: function(element, errorClass, validClass) {
		        		$(element).closest('.form-group').addClass("error");
		        	},
		        	unhighlight: function(element, errorClass, validClass) {
		        		$(element).closest('.form-group').removeClass("error");
		        	},
		        	rules: {
		        		username2: {
		        			required: true,
		        			usernameRegex: true,
		        			minlength: 3,
		        		},
		        		lastusername2:{
		        			required: true,
		        			lastusernameRegex: true,
		        			minlength: 3,
		        		},
		        		password2: {
		        			required: true,
		        			passwordRegex: true,
		        			minlength: 6,
		        			maxlength: 12,
		        		},
		        		email2: {
		        			required: true,
		        			email: true,

		        		},
		        		phone2:{
		        			required: true,
		        			number: true,
		        			minlength: 6,
		        			maxlength: 25,
		        		},
		        		phonecc2:{
				            required: true,
				            maxlength: 5,
				            phonecc2Regex: true,
				        },

		        		

		        	},
		        	messages: {
		        		username2: {
		        			required: "Поле имя обязательно для заполнения",
		        			minlength: "Поле имя обязательно для заполнения",
            				maxlength: "Введите действительное имя",
		        		},
		        		lastusername2:{
		        			required: "Поле фамилия обязательно для заполнения",
		        			minlength: "Поле фамилия обязательно для заполнения",
            				maxlength: "Введите действительную фамилию",
            				
		        		},
		        		password2 : {
		        			required: "Поле пароль обязательно для заполнения",
            				minlength: "Поле пароль должно быть не менее 6 символов",
           	 				maxlength: "Поле пароль должно быть не более 12 символов",
		        		},
		        		email2: {
		        			required: "Поле email обязательно для заполнения",
		        			email: "Поле email должно быть действительным электронным адресом",
		        		},
		        		phone2:{
		        			required: "Поле телефон обязательно для заполнения",
				            number: "Поле телефон должно быть числом",
				            minlength: "Поле телефон должно быть не менее 6 символов",
				            maxlength: "Введите действительный телефон",
		        		}

		        	}
		        });
		        if (secform.valid() === true){
		        	if ($('#account').is(":visible")){
		        		current_fs = $('#account');
		        		next_fs = $('#security2');
		        	}else if($('#security2').is(":visible")){
		        		current_fs = $('#security2');
		        		next_fs = $('#personal_phone2');
		        	}

		        	next_fs.show(); 
		        	current_fs.hide();
		        }
			});

			
			
	});