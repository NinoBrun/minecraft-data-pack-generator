function populateVersionSelect() {
  const versionSelect = document.getElementById('version-select');
  const highestVersion = Math.max(...versionData.map(v => parseInt(v.value)));
  versionData.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.value === highestVersion.toString() ? `${option.value} (current)` : option.value;
    versionSelect.appendChild(opt);
  });
  updateVersionCompatibilityText();
}

function populateFileStructure() {
  const fileStructureDiv = document.getElementById('file-structure');
  fileStructureDiv.innerHTML = ''; // Clear existing content
  fileStructureInfo.forEach((item, index) => {
    const label = document.createElement('label');
    label.style.paddingLeft = `${item.fileLevel * 24}px`;
    if (item.showCheckbox) {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => toggleChildrenVisibility(index, checkbox.checked));
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
    infoText.style.marginLeft = label.style.paddingLeft;
    infoText.textContent = item.info;
    if (item.showInfo) {
      infoText.style.display = 'block';
    }
    fileStructureDiv.appendChild(label);
    fileStructureDiv.appendChild(infoText);
    if (!item.showItem) {
      label.style.display = 'none';
      infoText.style.display = 'none';
    }
  });
}