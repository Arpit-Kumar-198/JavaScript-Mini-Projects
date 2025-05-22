const passwordBox = document.getElementById('password');
        const length = 12;
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnoprstuvwxyz";
        const numbers = "1234567890";
        const symbols = "@#$%^&*()'~{}[]|/-+=!";
        const generate = document.querySelector('.container button');
        function createPassword(){
            let password = "";
            while(length>password.length){
                password += upperCase[Math.floor(Math.random()*26)];
                password += lowerCase[Math.floor(Math.random()*26)];
                password += numbers[Math.floor(Math.random()*10)];
                password += symbols[Math.floor(Math.random()*symbols.length)];
            }
            passwordBox.value = password;
        }
        function copyPassword(){
            passwordBox.select();
            document.execCommand('copy');
            alert("Password copied");
        }