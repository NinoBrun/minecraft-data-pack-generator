/**
 * Populates version select dropdown with listVersions.js versionData[].
 */
function populateVersionSelect() {
  const versionSelect = document.getElementById('version-select');
  // Find highest version number from versionData[]
  const highestVersion = Math.max(...versionData.map(v => parseInt(v.value)));

  versionData.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    // Mark highest version as current
    opt.textContent = option.value === highestVersion.toString() ? `${option.value} (current)` : option.value;
    // Add option to list
    versionSelect.appendChild(opt);
  });
  updateVersionCompatibilityText();
}

/**
 * Creates label element for a file or folder.
 * @param {Object} item - Item to create a label for
 * @param {number} index - Index of the item in the list
 * @returns {HTMLElement} Created label element
 */
function createLabel(item, index) {
  const label = document.createElement('label');
  // Set padding based on file level
  label.style.paddingLeft = `${item.fileLevel * 24}px`;

  if (item.showCheckbox) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // Add change event listener to toggle visibility of children
    checkbox.addEventListener('change', () => toggleChildrenVisibility(index, checkbox.checked));
    // Add checkbox to label
    label.appendChild(checkbox);
  }

  // Determine icon based on file type
  const icon = item.fileType === "folder" ? "📁 " : "📄 ";
  // Append icon and title to label
  label.appendChild(document.createTextNode(icon + ` ${item.title} `));

  if (item.showInfoButton) {
    const infoButton = document.createElement('button');
    infoButton.className = 'info-btn';
    infoButton.textContent = 'i';
    // Add click event listener to toggle info display
    infoButton.onclick = () => toggleInfo(infoButton);
    // Add info button to label
    label.appendChild(infoButton);
  }
  return label;
}

/**
 * Creates div element for displaying additional info about an item.
 * @param {Object} item - Item to create info text for
 * @param {string} paddingLeft - Left padding to apply to the info text
 * @returns {HTMLElement} Created info text div
 */
function createInfoText(item, paddingLeft) {
  const infoText = document.createElement('div');
  infoText.className = 'info-text';
  infoText.style.marginLeft = paddingLeft;
  infoText.textContent = item.info;

  if (item.showInfo) {
    infoText.style.display = 'block';
  }
  return infoText;
}

/**
 * Populates the file structure display with listFiles.js fileStructureInfo[].
 */
function populateFileStructure() {
  const fileStructureDiv = document.getElementById('file-structure');
  // Clear any existing content
  fileStructureDiv.innerHTML = '';
  
  fileStructureInfo.forEach((item, index) => {
    // Create label for item
    const label = createLabel(item, index);
    // Create info text for item
    const infoText = createInfoText(item, label.style.paddingLeft);
    // Append label to file structure div
    fileStructureDiv.appendChild(label);
    // Append info text to file structure div
    fileStructureDiv.appendChild(infoText);
    if (!item.showItem) {
      label.style.display = 'none';
      infoText.style.display = 'none';
    }
  });
}