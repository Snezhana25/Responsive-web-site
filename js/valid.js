$.validator.addMethod("regx", function(value, element, regexpr) {
    return regexpr.test(value);
}, "Имя должно содержать более двух символов без каких-либо специальных символов и пробелов");

$.validator.addMethod("regx_first_name", function(value, element, regexpr) {
    return regexpr.test(value);
}, "Имя должно содержать более двух символов без каких-либо специальных символов и пробелов");

$.validator.addMethod("regx_last_name", function(value, element, regexpr) {
    return regexpr.test(value);
}, "Имя должно быть длиннее 2 символов без каких-либо специальных символов или пробелов");

$.validator.addMethod("regx_phonecc", function(value, element, regexpr) {
    return regexpr.test(value);
}, "Код должен быть действительным");


$("#bigForm1").validate({

    rules:{

        first_name:{
            required: true,
            regx_first_name: /^(([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}\s{1}[а-яА-ЯёЁa-zA-Z]{0,25})|([а-яА-ЯёЁa-zA-Z]{0,25}))$/,
            minlength: 2,
            maxlength: 64
        },

        last_name:{
            required: true,
            regx_last_name: /^[а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]+$/,
            minlength: 2,
            maxlength: 64

        },

        email:{
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
            regx_phonecc: /^[0-9+]*$/,
        },

        password:{
            required: true,
            regx: /^\w*(?=\w*\d)(?=\w*[a-zA-z])\w*$/m,
            minlength: 6,
            maxlength: 12,
        }
    },

    messages:{

        first_name:{
            required: "Поле имя обязательно для заполнения",
            minlength: "Поле имя обязательно для заполнения",
            maxlength: "Введите действительное имя",
        },

        last_name:{
            required: "Поле фамилия обязательно для заполнения",
            minlength: "Поле фамилия обязательно для заполнения",
            maxlength: "Введите действительную фамилию",
        },

        email:{
            required: "Поле email обязательно для заполнения",
            email: "Поле email должно быть действительным электронным адресом",
        },

        phone:{
            required: "Поле телефон обязательно для заполнения",
            number: "Поле телефон должно быть числом",
            minlength: "Поле телефон должно быть не менее 6 символов",
            maxlength: "Введите действительный телефон",
        },

        password:{
            required: "Поле пароль обязательно для заполнения",
            minlength: "Поле пароль должно быть не менее 6 символов",
            maxlength: "Поле пароль должно быть не более 12 символов",
        },

        phonecc:{
            required: "Поле обязательно для заполнения",
        },
    }

});

$("#bigForm2").validate({

    rules:{

        first_name:{
            required: true,
            regx_first_name: /^(([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}\s{1}[а-яА-ЯёЁa-zA-Z]{0,25})|([а-яА-ЯёЁa-zA-Z]{0,25}))$/,
            minlength: 2,
            maxlength: 64
        },

        last_name2:{
            required: true,
            regx_last_name: /^[а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]+$/,
            minlength: 2,
            maxlength: 64

        },

        email:{
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
            regx_phonecc: /^[0-9+]*$/,
        },

        password:{
            required: true,
            regx: /^\w*(?=\w*\d)(?=\w*[a-zA-z])\w*$/m,
            minlength: 6,
            maxlength: 12,
        }
    },

    messages:{

       first_name:{
            required: "Поле имя обязательно для заполнения",
            minlength: "Поле имя обязательно для заполнения",
            maxlength: "Введите действительное имя",
        },

        last_name2:{
            required: "Поле фамилия обязательно для заполнения",
            minlength: "Поле фамилия обязательно для заполнения",
            maxlength: "Введите действительную фамилию",
        },

        email:{
            required: "Поле email обязательно для заполнения",
            email: "Поле email должно быть действительным электронным адресом",
        },

        phone:{
            required: "Поле телефон обязательно для заполнения",
            number: "Поле телефон должно быть числом",
            minlength: "Поле телефон должно быть не менее 6 символов",
            maxlength: "Введите действительный телефон",
        },

        password:{
            required: "Поле пароль обязательно для заполнения",
            minlength: "Поле пароль должно быть не менее 6 символов",
            maxlength: "Поле пароль должно быть не более 12 символов",
        },

        phonecc:{
            required: "Поле обязательно для заполнения",
        },
    }

});
$("#bigForm3").validate({

    rules:{

            first_name:{
            required: true,
            regx_first_name: /^(([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}\s{1}[а-яА-ЯёЁa-zA-Z]{0,25})|([а-яА-ЯёЁa-zA-Z]{0,25}))$/,
            minlength: 2,
            maxlength: 64
        },

        last_name:{
            required: true,
            regx_last_name: /^[а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]+$/,
            minlength: 2,
            maxlength: 64

        },

        email:{
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
            regx_phonecc: /^[0-9+]*$/,
        },

        password:{
            required: true,
            regx: /^\w*(?=\w*\d)(?=\w*[a-zA-z])\w*$/m,
            minlength: 6,
            maxlength: 12,
        }
    },

    messages:{

        first_name:{
            required: "Поле имя обязательно для заполнения",
            minlength: "Поле имя обязательно для заполнения",
            maxlength: "Введите действительное имя",
        },

        last_name:{
            required: "Поле фамилия обязательно для заполнения",
            minlength: "Поле фамилия обязательно для заполнения",
            maxlength: "Введите действительную фамилию",
        },

        email:{
            required: "Поле email обязательно для заполнения",
            email: "Поле email должно быть действительным электронным адресом",
        },

        phone:{
            required: "Поле телефон обязательно для заполнения",
            number: "Поле телефон должно быть числом",
            minlength: "Поле телефон должно быть не менее 6 символов",
            maxlength: "Введите действительный телефон",
        },

        password:{
            required: "Поле пароль обязательно для заполнения",
            minlength: "Поле пароль должно быть не менее 6 символов",
            maxlength: "Поле пароль должно быть не более 12 символов",
        },

        phonecc:{
            required: "Поле обязательно для заполнения",
        },
    }

});
$("#bigForm4").validate({

    rules:{

            first_name:{
            required: true,
            regx_first_name: /^(([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}\s{1}[а-яА-ЯёЁa-zA-Z]{0,25})|([а-яА-ЯёЁa-zA-Z]{0,25}))$/,
            minlength: 2,
            maxlength: 64
        },

        last_name:{
            required: true,
            regx_last_name: /^[а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]+$/,
            minlength: 2,
            maxlength: 64

        },

        email:{
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
            regx_phonecc: /^[0-9+]*$/,
        },

        password:{
            required: true,
            regx: /^\w*(?=\w*\d)(?=\w*[a-zA-z])\w*$/m,
            minlength: 6,
            maxlength: 12,
        }
    },

    messages:{

        first_name:{
            required: "Поле имя обязательно для заполнения",
            minlength: "Поле имя обязательно для заполнения",
            maxlength: "Введите действительное имя",
        },

        last_name:{
            required: "Поле фамилия обязательно для заполнения",
            minlength: "Поле фамилия обязательно для заполнения",
            maxlength: "Введите действительную фамилию",
        },

        email:{
            required: "Поле email обязательно для заполнения",
            email: "Поле email должно быть действительным электронным адресом",
        },

        phone:{
            required: "Поле телефон обязательно для заполнения",
            number: "Поле телефон должно быть числом",
            minlength: "Поле телефон должно быть не менее 6 символов",
            maxlength: "Введите действительный телефон",
        },

        password:{
            required: "Поле пароль обязательно для заполнения",
            minlength: "Поле пароль должно быть не менее 6 символов",
            maxlength: "Поле пароль должно быть не более 12 символов",
        },

        phonecc:{
            required: "Поле обязательно для заполнения",
        },
    }

});