/**
 * Event listeners.
 */
function addEventListeners() {
  const datapackNameInput = document.getElementById('datapack-name');
  const datapackDescriptionInput = document.getElementById('datapack-description');
  const versionSelect = document.getElementById('version-select');
  
  // Validate & update name
  datapackNameInput.addEventListener('input', validateDataPackName);
  datapackNameInput.addEventListener('input', updateDataPackName);
  // Validate & update description
  datapackDescriptionInput.addEventListener('input', validateDataPackDescription);
  datapackDescriptionInput.addEventListener('input', updatePackMcmeta);
  // Update pack.mcmeta info & version compatibility text upon version selection
  versionSelect.addEventListener('change', updatePackMcmeta);
  versionSelect.addEventListener('change', updateVersionCompatibilityText);
}

/**
 * Execute on initial load.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Populate initial content
  populateVersionSelect();
  populateFileStructure();

  addEventListeners();
});