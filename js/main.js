function addEventListeners() {
  const datapackNameInput = document.getElementById('datapack-name');
  const datapackDescriptionInput = document.getElementById('datapack-description');
  const versionSelect = document.getElementById('version-select');
  
  datapackNameInput.addEventListener('input', validateDataPackName);
  datapackNameInput.addEventListener('input', updateDataPackName);
  datapackDescriptionInput.addEventListener('input', validateDataPackDescription);
  datapackDescriptionInput.addEventListener('input', updatePackMcmeta);
  versionSelect.addEventListener('change', updatePackMcmeta);
  versionSelect.addEventListener('change', updateVersionCompatibilityText);
}

document.addEventListener('DOMContentLoaded', () => {
    populateVersionSelect();
    populateFileStructure();
    addEventListeners();
});