/**
 * Validate input value against a regex pattern. Display a warning if invalid characters are found.
 * @param {string} inputId - ID of input element to validate
 * @param {string} warningId - ID of warning element to display
 * @param {RegExp} regex - Regex pattern to remove invalid characters
 */
function validateInput(inputId, warningId, regex) {
  const inputElement = document.getElementById(inputId);
  const warningBlurb = document.getElementById(warningId);
  const originalValue = inputElement.value;
  
  // Remove invalid characters based on the regex
  inputElement.value = originalValue.replace(regex, '');
  // Display the warning if a character is replaced
  warningBlurb.style.display = originalValue !== inputElement.value ? 'block' : 'none';
}

/**
 * Validate data pack name to ensure it contains only alphanumeric characters, hyphens, and underscores.
 */
function validateDataPackName() {
  validateInput('datapack-name', 'name-warning', /[^a-zA-Z0-9-_]/g);
}

/**
 * Validate data pack description to ensure it does not contain double quotes and backslashes.
 */
function validateDataPackDescription() {
  validateInput('datapack-description', 'description-warning', /["\\]/g);
}