/* ============================================
   1. Бургер-меню
   Источник: itcodik.com, «Как сделать бургер-меню на HTML, CSS и JavaScript»
   https://itcodik.com/article/burger-menyu-html-css-javascript
   ============================================ 
*/

var burger = document.getElementById("burger");
var menu = document.getElementById("menu");

if (burger && menu) {
  burger.onclick = function () {
    menu.classList.toggle("open");
  };
}


/* ============================================
   2. Проверка формы обратной связи (contacts.html)
   Источник: studfile.net, «Валидация формы обратной связи»
   https://studfile.net/preview/21773148/page:9/
   ============================================ 
*/

var form = document.getElementById("feedbackForm");
var result = document.getElementById("formResult");

if (form && result) {
  form.onsubmit = function (event) {
    event.preventDefault();

    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var message = document.getElementById("message");

    var ok = true;

    name.classList.remove("error");
    phone.classList.remove("error");
    message.classList.remove("error");

    if (name.value.trim() === "") {
      name.classList.add("error");
      ok = false;
    }
    if (phone.value.trim() === "") {
      phone.classList.add("error");
      ok = false;
    }
    if (message.value.trim() === "") {
      message.classList.add("error");
      ok = false;
    }

    if (ok === false) {
      result.textContent = "Пожалуйста, заполните выделенные поля.";
      result.className = "result bad";
    } else {
      result.textContent = "Спасибо! Форма заполнена верно.";
      result.className = "result ok";
      form.reset();
    }
  };
}

/* ============================================
   3. Проверка формы регистрации (registration.html)
   ============================================ 
*/

var regForm = document.getElementById("registrationForm");
var regResult = document.getElementById("registrationResult");

if (regForm && regResult) {
  regForm.onsubmit = function (event) {
    event.preventDefault();

    var login = document.getElementById("login");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var ok = true;

    login.classList.remove("error");
    email.classList.remove("error");
    password.classList.remove("error");

    /* Логин не пустой */
    if (login.value.trim() === "") {
      login.classList.add("error");
      ok = false;
    }

    /* Email не пустой и содержит @ и точку */
    if (email.value.trim() === "" ||
        email.value.indexOf("@") === -1 ||
        email.value.indexOf(".") === -1) {
      email.classList.add("error");
      ok = false;
    }

    /* Пароль минимум 6 символов */
    if (password.value.length < 6) {
      password.classList.add("error");
      ok = false;
    }

    if (ok === false) {
      regResult.textContent = "Проверьте выделенные поля. Пароль не короче 6 символов.";
      regResult.className = "result bad";
    } else {
      regResult.textContent = "Регистрация прошла успешно. Это демонстрационная форма.";
      regResult.className = "result ok";
      regForm.reset();
    }
  };
}


/* ============================================
   4. Проверка формы оплаты (payment.html)
   ============================================ */

var payForm = document.getElementById("paymentForm");
var payResult = document.getElementById("paymentResult");

if (payForm && payResult) {
  payForm.onsubmit = function (event) {
    event.preventDefault();

    var card = document.getElementById("card");
    var date = document.getElementById("date");
    var cvv = document.getElementById("cvv");

    var ok = true;

    card.classList.remove("error");
    date.classList.remove("error");
    cvv.classList.remove("error");

    /* Номер карты — 16 цифр (без пробелов) */
    var cardDigits = card.value.replace(/\s/g, "");
    if (cardDigits.length !== 16 || isNaN(cardDigits)) {
      card.classList.add("error");
      ok = false;
    }

    /* Срок действия — формат ММ/ГГ (5 символов, есть слэш) */
    if (date.value.indexOf("/") === -1 || date.value.length !== 5) {
      date.classList.add("error");
      ok = false;
    }

    /* CVV — 3 цифры */
    if (cvv.value.length !== 3 || isNaN(cvv.value)) {
      cvv.classList.add("error");
      ok = false;
    }

    if (ok === false) {
      payResult.textContent = "Проверьте выделенные поля. Карта — 16 цифр, срок — ММ/ГГ, CVV — 3 цифры.";
      payResult.className = "result bad";
    } else {
      payResult.textContent = "Данные приняты. Это демонстрационная форма, оплата не производится.";
      payResult.className = "result ok";
      payForm.reset();
    }
  };
}