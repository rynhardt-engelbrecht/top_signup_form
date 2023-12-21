document.addEventListener('DOMContentLoaded', function() {
  var inputFields = document.querySelectorAll('.input-flex input');

  inputFields.forEach(function(input) {
    input.addEventListener('blur', function() {
      if (input.value.trim() !== "") {
        input.classList.add('visited');
      } else {
        input.classList.remove('visited');
      }
    });
  });
});
