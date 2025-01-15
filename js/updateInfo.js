/**
 * Gets value of an input element by its ID.
 * @param {string} elementId - ID of the input element
 * @param {string} defaultValue - Default value to return if the input is empty
 * @returns {string} Value of the input element or the default value
 */
function getInputValue(elementId, defaultValue) {
  return document.getElementById(elementId).value || defaultValue;
}

/**
 * Updates label of a file structure item with a new value.
 * @param {HTMLElement} label - Label element to update
 * @param {number} index - Index of the item in the file structure
 * @param {string} value - New value to set for the label
 */
function updateFileStructureLabel(label, index, value) {
  const fileTypeIcon = fileStructureInfo[index].fileType === 'folder' ? '📁 ' : '📄 ';

  label.childNodes.forEach(node => {
    // Check if node is a text node
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = ` ${fileTypeIcon} ${value} `;
    }
  });
}

/**
 * Updates property of a file structure item with a new value.
 * @param {number} index - Index of the item in the file structure
 * @param {string} value - New value to set for the property
 * @param {string} property - Property to update
 */
function updateFileStructureItem(index, value, property) {
  const fileStructureDiv = document.getElementById('file-structure');
  // Get the label element for the item
  const label = fileStructureDiv.querySelectorAll('label')[index];
  // Get the info text element for the item
  const infoText = fileStructureDiv.querySelectorAll('.info-text')[index];
  // Update the property of the item in the file structure info
  fileStructureInfo[index][property] = value;

  if (property === 'title') {
    updateFileStructureLabel(label, index, value);
  } else if (property === 'info') {
    infoText.textContent = value;
  }
}

/**
 * Updates version compatibility text based on the selected version.
 */
function updateVersionCompatibilityText() {
  const selectedVersion = getInputValue('version-select', '');
  const compatibilityText = document.getElementById('compatibility-text');
  // Find version info for the selected version
  const versionInfo = versionData.find(v => v.value === selectedVersion);
  compatibilityText.innerHTML = `➡️ Data pack version <b class="yellow-text">${selectedVersion}</b> is compatible with Minecraft version <b class="yellow-text">${versionInfo.compatibility}</b>`;
}

/**
 * Updates data pack name and namespace in the file structure.
 */
function updateDataPackName() {
  const dataPackName = getInputValue('datapack-name', "Enter data pack name");
  const dataPackNamespace = getInputValue('datapack-name', "namespace");

  updateFileStructureItem(0, dataPackName, 'title');
  updateFileStructureItem(4, dataPackNamespace, 'title');
}

/**
 * Updates the pack.mcmeta file content in the file structure.
 */
function updatePackMcmeta() {
  const description = getInputValue('datapack-description', "The default data for Minecraft");
  const packFormat = getInputValue('version-select', "61");
  
  updateFileStructureItem(1, `{ "pack": { "description": "${description}", "pack_format": ${packFormat} } }`, 'info');
}