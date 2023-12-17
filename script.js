document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  var emailInput = document.getElementById("email");
  var validationMessage = document.getElementById("email-validation-message");

  form.addEventListener("submit", function (event) {
    if (!emailInput.validity.valid) {
      validationMessage.style.visibility = "visible"; // Show the message
      event.preventDefault();
    } else {
      validationMessage.style.visibility = "hidden"; // Hide the message
    }
  });

  emailInput.addEventListener("input", function () {
    validationMessage.style.visibility = "hidden"; // Hide the message on input
  });
});
