function addEventListeners() {
  const datapackNameInput = document.getElementById('datapack-name');
  const datapackDescriptionInput = document.getElementById('datapack-description');
  const versionSelect = document.getElementById('version-select');
  
  datapackNameInput.addEventListener('input', validateDataPackName);
  datapackNameInput.addEventListener('input', updateDataPackName);
  datapackDescriptionInput.addEventListener('input', validateDataPackDescription);
  datapackDescriptionInput.addEventListener('input', updatePackMcmeta);
  versionSelect.addEventListener('change', updatePackMcmeta);
}

function updateVersionCompatibilityText() {
  const versionSelect = document.getElementById('version-select');
  const compatibilityText = document.getElementById('compatibility-text');
  versionSelect.addEventListener('change', () => {
    const selectedVersion = versionSelect.value;
    const versionInfo = versionData.find(v => v.value === selectedVersion);
    compatibilityText.innerHTML = `➡️ Datapack version <b class="yellow-text">${selectedVersion}</b> is compatible with Minecraft version <b class="yellow-text">${versionInfo.compatibility}</b>`;
  });
}

function updateDataPackName() {
  const dataPackName = document.getElementById('datapack-name').value || "Enter datapack name";
  const dataPackNamespace = document.getElementById('datapack-name').value || "namespace";
  fileStructureInfo[0].title = dataPackName;
  fileStructureInfo[4].title = dataPackNamespace;
  populateFileStrucutre();
}

function updatePackMcmeta() {
  const description = document.getElementById('datapack-description').value || "The default data for Minecraft";
  const packFormat = document.getElementById('version-select').value || "61";
  fileStructureInfo[1].info = `{ "pack": { "description": "${description}", "pack_format": ${packFormat} } }`;
  populateFileStrucutre();
}