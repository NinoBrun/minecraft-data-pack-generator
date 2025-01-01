function validateDataPackName() {
  const datapackNameInput = document.getElementById('datapack-name');
  const warningBlurb = document.getElementById('name-warning');
  const originalValue = datapackNameInput.value;
  datapackNameInput.value = originalValue.replace(/[^a-zA-Z0-9-_]/g, '');
  if (originalValue !== datapackNameInput.value) {
      warningBlurb.style.display = 'block';
  } else {
      warningBlurb.style.display = 'none';
  }
}

function validateDataPackDescription() {
  const datapackDescriptionInput = document.getElementById('datapack-description');
  const warningBlurb = document.getElementById('description-warning');
  const originalValue = datapackDescriptionInput.value;
  datapackDescriptionInput.value = originalValue.replace(/["\\]/g, '');
  if (originalValue !== datapackDescriptionInput.value) {
      warningBlurb.style.display = 'block';
  } else {
      warningBlurb.style.display = 'none';
  }
}