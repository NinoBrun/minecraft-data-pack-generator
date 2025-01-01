function populateVersionSelect() {
  const versionSelect = document.getElementById('version-select');
  versionData.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.text;
    versionSelect.appendChild(opt);
  });
}

function updateCompatibilityText() {
  const versionSelect = document.getElementById('version-select');
  const compatibilityText = document.getElementById('compatibility-text');
  const defaultVersion = versionSelect.options[versionSelect.selectedIndex].value;
  const versionInfo = versionData.find(v => v.value === defaultVersion);
  compatibilityText.innerHTML = `➡️ Datapack version <b class="yellow-text">${defaultVersion}</b> is compatible with Minecraft version <b class="yellow-text">${versionInfo.compatibility}</b>`;

  versionSelect.addEventListener('change', () => {
    const selectedVersion = versionSelect.value;
    const versionInfo = versionData.find(v => v.value === selectedVersion);
    compatibilityText.innerHTML = `➡️ Datapack version <b class="yellow-text">${selectedVersion}</b> is compatible with Minecraft version <b class="yellow-text">${versionInfo.compatibility}</b>`;
  });
}