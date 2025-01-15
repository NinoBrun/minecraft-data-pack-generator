function getInputValue(elementId, defaultValue) {
  return document.getElementById(elementId).value || defaultValue;
}

function updateFileStructureLabel(label, index, value) {
  const fileTypeIcon = fileStructureInfo[index].fileType === 'folder' ? '📁 ' : '📄 ';
  label.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = ` ${fileTypeIcon} ${value} `;
    }
  });
}

function updateFileStructureItem(index, value, property) {
  const fileStructureDiv = document.getElementById('file-structure');
  const label = fileStructureDiv.querySelectorAll('label')[index];
  const infoText = fileStructureDiv.querySelectorAll('.info-text')[index];
  fileStructureInfo[index][property] = value;
  if (property === 'title') {
    updateFileStructureLabel(label, index, value);
  } else if (property === 'info') {
    infoText.textContent = value;
  }
}

function updateVersionCompatibilityText() {
  const selectedVersion = getInputValue('version-select', '');
  const compatibilityText = document.getElementById('compatibility-text');
  const versionInfo = versionData.find(v => v.value === selectedVersion);
  compatibilityText.innerHTML = `➡️ Datapack version <b class="yellow-text">${selectedVersion}</b> is compatible with Minecraft version <b class="yellow-text">${versionInfo.compatibility}</b>`;
}

function updateDataPackName() {
  const dataPackName = getInputValue('datapack-name', "Enter datapack name");
  const dataPackNamespace = getInputValue('datapack-name', "namespace");
  updateFileStructureItem(0, dataPackName, 'title');
  updateFileStructureItem(4, dataPackNamespace, 'title');
}

function updatePackMcmeta() {
  const description = getInputValue('datapack-description', "The default data for Minecraft");
  const packFormat = getInputValue('version-select', "61");
  updateFileStructureItem(1, `{ "pack": { "description": "${description}", "pack_format": ${packFormat} } }`, 'info');
}