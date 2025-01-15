function validateInput(inputId, warningId, regex) {
  const inputElement = document.getElementById(inputId);
  const warningBlurb = document.getElementById(warningId);
  const originalValue = inputElement.value;
  inputElement.value = originalValue.replace(regex, '');
  warningBlurb.style.display = originalValue !== inputElement.value ? 'block' : 'none';
}

function validateDataPackName() {
  validateInput('datapack-name', 'name-warning', /[^a-zA-Z0-9-_]/g);
}

function validateDataPackDescription() {
  validateInput('datapack-description', 'description-warning', /["\\]/g);
}