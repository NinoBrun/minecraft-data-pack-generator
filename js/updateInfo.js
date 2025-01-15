function getInputValue(elementId, defaultValue) {
  return document.getElementById(elementId).value || defaultValue;
}

function updateVersionCompatibilityText() {
  const selectedVersion = document.getElementById('version-select').value;
  const compatibilityText = document.getElementById('compatibility-text');
  const versionInfo = versionData.find(v => v.value === selectedVersion);
  compatibilityText.innerHTML = `➡️ Datapack version <b class="yellow-text">${selectedVersion}</b> is compatible with Minecraft version <b class="yellow-text">${versionInfo.compatibility}</b>`;
}

function updateDataPackName() {
  const dataPackName = getInputValue('datapack-name', "Enter datapack name");
  const dataPackNamespace = getInputValue('datapack-name', "namespace");
  fileStructureInfo[0].title = dataPackName;
  fileStructureInfo[4].title = dataPackNamespace;
  populateFileStructure();
}

function updatePackMcmeta() {
  const description = getInputValue('datapack-description', "The default data for Minecraft");
  const packFormat = getInputValue('version-select', "61");
  fileStructureInfo[1].info = `{ "pack": { "description": "${description}", "pack_format": ${packFormat} } }`;
  populateFileStructure();
}