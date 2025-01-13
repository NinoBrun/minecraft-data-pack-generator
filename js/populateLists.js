function populateVersionSelect() {
  const versionSelect = document.getElementById('version-select');
  const highestVersion = Math.max(...versionData.map(v => parseInt(v.value)));
  versionData.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.value === highestVersion.toString() ? `${option.value} (current)` : option.value;
    versionSelect.appendChild(opt);
  });
  const compatibilityText = document.getElementById('compatibility-text');
  const defaultVersion = versionSelect.options[versionSelect.selectedIndex].value;
  const versionInfo = versionData.find(v => v.value === defaultVersion);
  compatibilityText.innerHTML = `➡️ Datapack version <b class="yellow-text">${defaultVersion}</b> is compatible with Minecraft version <b class="yellow-text">${versionInfo.compatibility}</b>`;
}

function populateFileStructure() {
  const fileStructureDiv = document.getElementById('file-structure');
  fileStructureDiv.innerHTML = ''; // Clear existing content
  fileStructureInfo.forEach(item => {
      const label = document.createElement('label');
      label.style.paddingLeft = `${item.fileLevel * 27}px`;
      if (item.showCheckbox) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          label.appendChild(checkbox);
      }
      if (item.fileType === "folder") {
        label.appendChild(document.createTextNode("📁 "));
      } else if (item.fileType === "file") {
          label.appendChild(document.createTextNode("📄 "));
      }
      label.appendChild(document.createTextNode(` ${item.title} `));
      if (item.showInfoButton) {
          const infoButton = document.createElement('button');
          infoButton.className = 'info-btn';
          infoButton.textContent = 'i';
          infoButton.onclick = () => toggleInfo(infoButton);
          label.appendChild(infoButton);
      }
      const infoText = document.createElement('div');
      infoText.className = 'info-text';
      infoText.textContent = item.info;
      if (item.showInfo) {
          infoText.style.display = 'block';
      }
      fileStructureDiv.appendChild(label);
      fileStructureDiv.appendChild(infoText);
  });
}