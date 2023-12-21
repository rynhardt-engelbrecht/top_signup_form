document.addEventListener('DOMContentLoaded', function() {
  const inputFields = document.querySelectorAll('.input-flex input');

  inputFields.forEach(function(input) {
    input.addEventListener('blur', function() {
      if (input.value.trim() !== "") {
        input.classList.add('visited');
      } else {
        input.classList.remove('visited');
      }
    });
  });

  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('password-confirm');
  const passwordInfo = document.querySelector('.password-info')
  const spanMessage = document.querySelector('span.non-match');

  function validatePasswordMatch() {
    var isValid = passwordInput.value === confirmPasswordInput.value;

    if (isValid) {
      spanMessage.classList.remove('visible');
    } else {
      spanMessage.classList.add('visible');
    }
  }

  function validatePassword(passwordField) {
    const regex = /^(?=.*\d)(?=.*[A-Z]).{7,}$/;

    const isPasswordValid = regex.test(passwordField.value);
    const isPasswordEmpty = passwordField.value.trim() === "";

    if (!isPasswordValid && !isPasswordEmpty) {
      passwordField.classList.add('invalid');
      passwordInfo.classList.add('invalid');
    } else {
      passwordField.classList.remove('invalid');
      passwordInfo.classList.remove('invalid');
    }
  }

  passwordInput.addEventListener('input', function() {
    validatePassword(passwordInput);
    validatePasswordMatch();
  });

  confirmPasswordInput.addEventListener('input', function() {
    validatePassword(confirmPasswordInput);
    validatePasswordMatch();
  });
});
