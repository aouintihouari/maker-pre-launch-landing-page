const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = input.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    input.style.borderColor = "red";
    errorMessage.style.visibility = "visible";
  } else {
    input.style.borderColor = "";
    errorMessage.style.visibility = "hidden";
  }
});
