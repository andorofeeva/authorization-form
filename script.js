//Кнопка отправки
const submit = document.getElementById("submit");


//Обработка клика кнопки
submit.addEventListener("click", (e) => {
    e.preventDefault();
    
    checkInputs();
   });


//Валидация полей
function checkInputs() {
    
    //Поля логина, пароля и телефона
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phone = document.getElementById("phone");

    //Убираем пустоту
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const phoneValue = phone.value.trim();

    //Добавляем условия для логина
    if (emailValue === "") {
        setErrorFor(email, "Обязательно для запонения");
    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Некорректный email");
    } else {
        setErrorFor(email, "");
    }
    

    // Добавляем условия для номер телефона
    if (phoneValue === ""){
        setErrorFor(phone, "Обязательно для заполнения");
    } else if (!validPhone(phoneValue)){
        setErrorFor(phone,"Некорректный номер");
    } else {
        setErrorFor(phone,"");
    }

    //Добавляем условия для пароля и текст ошибки
    if (passwordValue === ""){
        setErrorFor(password, "Обязательно для заполнения");
        return;
    } else if (!isPasswordNumbers(passwordValue)){
        setErrorFor(password, "Пароль должен содержать числа");
        return;
    } else if (!isPasswordLowerCase(passwordValue)){
        setErrorFor(password, "Пароль должен содержать символы нижнего регистра");
        return;
    } else if (!isPasswordUpperCase(passwordValue)){
        setErrorFor(password, "Пароль должен содержать символы верхнего регистра");
        return;
    } else if (!isPasswordSymbol(passwordValue)){
        setErrorFor(password, "Пароль должен содежать специальные символы");
        return;
    } else if (!isPasswordSum(passwordValue)){
        setErrorFor(password, "Пароль должен содержать более 6 символов");
        return;
    } else {
        setErrorFor(password, "");
    }

    
}

//Валидация емайл
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//Валидация пароля
//Содержит хотя бы одно число
function isPasswordNumbers(password) {
    return /(?=.*[0-9])/.test(password);
}
//Нижний регистр
function isPasswordLowerCase(password) {
    return /(?=.*[a-z])/.test(password);
}
//Верхний регистр
function isPasswordUpperCase(password) {
    return /(?=.*[A-Z])/.test(password);
}
//Специальные символы
function isPasswordSymbol(password) {
    return /(?=.*[!@#$%^&*])/.test(password);
}
//Не менее 6 символов
function isPasswordSum(password) {
    return password.length >= 6;
}

//Валидация номера телефона
function validPhone(myPhone) {
var re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
//var myPhone = document.getElementById('phone').value;
var valid = re.test(myPhone) && myPhone.replace('+', '').trim().length === 11;
return valid

}

//Сообщение об ошибке
function setErrorFor(input, message) {
    const groupControl = input.parentElement;
    const small = groupControl.querySelector("small");
    small.innerText = message;

    groupControl.className = "group error";
}