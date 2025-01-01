function generateFileStructureHTML() {
  const fileStructureDiv = document.getElementById('file-structure');
  fileStructureDiv.innerHTML = ''; // Clear existing content
  fileStructureInfo.forEach(item => {
      const label = document.createElement('label');
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

function updateDataPackName() {
  const dataPackName = document.getElementById('datapack-name').value || "Enter datapack name";
  fileStructureInfo[0].title = dataPackName;
  fileStructureInfo[4].title = dataPackName;
  generateFileStructureHTML();
}