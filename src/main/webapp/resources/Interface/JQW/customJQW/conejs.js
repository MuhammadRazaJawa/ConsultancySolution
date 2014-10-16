
        $(document).ready(function () {
            $("#register").jqxExpander({ toggleMode: 'none', width: '300px', showArrow: false });
            $('#sendButton').jqxButton({ width: 60, height: 25 });
            $('#acceptInput').jqxCheckBox({ width: 130 });
            $('#sendButton').on('click', function () {
                $('#testForm').jqxValidator('validate');
            });
            $("#ssnInput").jqxMaskedInput({ mask: '###-##-####', width: 150, height: 22  });
            $("#phoneInput").jqxMaskedInput({ mask: '(###)###-####', width: 150, height: 22  });
            $("#zipInput").jqxMaskedInput({ mask: '#####-####', width: 150, height: 22  });
            $('.text-input').jqxInput({  });
            $('#birthInput').jqxDateTimeInput({ width: 150, height: 22, value: new Date(2014, 4, 1) });
            // initialize validator.
            $('#testForm').jqxValidator({
                rules: [
                       { input: '#userInput', message: 'Username is required!', action: 'keyup, blur', rule: 'required' },
                       { input: '#userInput', message: 'Your username must be between 3 and 12 characters!', action: 'keyup, blur', rule: 'length=3,12' },
                       { input: '#realNameInput', message: 'Real Name is required!', action: 'keyup, blur', rule: 'required' },
                       { input: '#realNameInput', message: 'Your real name must contain only letters!', action: 'keyup', rule: 'notNumber' },
                       { input: '#realNameInput', message: 'Your real name must be between 3 and 12 characters!', action: 'keyup', rule: 'length=3,12' },
                       {
                           input: '#birthInput', message: 'Your birth date must be between 1/1/1900 and 1/1/2014.', action: 'valuechanged', rule: function (input, commit) {
                               var date = $('#birthInput').jqxDateTimeInput('value');
                               var result = date.getFullYear() >= 1900 && date.getFullYear() <= 2014;
                               // call commit with false, when you are doing server validation and you want to display a validation error on this field. 
                               return result;
                           }
                       },
                       { input: '#passwordInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
                       { input: '#passwordInput', message: 'Your password must be between 4 and 12 characters!', action: 'keyup, blur', rule: 'length=4,12' },
                       { input: '#passwordConfirmInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
                       {
                           input: '#passwordConfirmInput', message: 'Passwords doesn\'t match!', action: 'keyup, focus', rule: function (input, commit) {
                               // call commit with false, when you are doing server validation and you want to display a validation error on this field. 
                               if (input.val() === $('#passwordInput').val()) {
                                   return true;
                               }
                               return false;
                           }
                       },
                       { input: '#emailInput', message: 'E-mail is required!', action: 'keyup, blur', rule: 'required' },
                       { input: '#emailInput', message: 'Invalid e-mail!', action: 'keyup', rule: 'email' },
                       { input: '#ssnInput', message: 'Invalid SSN!', action: 'valuechanged, blur', rule: 'ssn' },
                       { input: '#phoneInput', message: 'Invalid phone number!', action: 'valuechanged, blur', rule: 'phone' },
                       { input: '#zipInput', message: 'Invalid zip code!', action: 'valuechanged, blur', rule: 'zipCode' },
                       { input: '#acceptInput', message: 'You have to accept the terms', action: 'change', rule: 'required', position: 'right:0,0' }]
            });
        });
  