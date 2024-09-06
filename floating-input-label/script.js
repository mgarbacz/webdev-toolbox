const inputs = document.querySelectorAll('input, select, textarea');

inputs.forEach(input => {
  input.addEventListener(
    'invalid',
    event => {
      input.classList.add('form-control-error');
    },
    false
  );
  input.addEventListener(
    'input',
    event => {
      if (input.validity.valid) {
        input.classList.remove('form-control-error');
      }
    },
    false
  );
  input.addEventListener('blur', function() {
    input.checkValidity();
  });
});

