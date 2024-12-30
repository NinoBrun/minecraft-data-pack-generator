function generateFileStructureHTML() {
    const fileStructureDiv = document.getElementById('file-structure');
    fileStructureInfo.forEach(item => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${item.title} `));
        const infoButton = document.createElement('button');
        infoButton.className = 'info-btn';
        infoButton.textContent = 'i';
        infoButton.onclick = () => toggleInfo(infoButton);
        label.appendChild(infoButton);
        const infoText = document.createElement('div');
        infoText.className = 'info-text';
        infoText.textContent = item.info;
        fileStructureDiv.appendChild(label);
        fileStructureDiv.appendChild(infoText);
        fileStructureDiv.appendChild(document.createElement('br'));
    });
}

function generateFileStructure() {
    const fileStructure = [];
    document.querySelectorAll('#file-structure input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            fileStructure.push(checkbox.parentElement.textContent.trim());
        }
    });
    return fileStructure;
}

function downloadZip(fileStructure) {
    const zip = new JSZip();
    fileStructure.forEach(path => {
        if (path.endsWith('/')) {
            zip.folder(path);
        } else {
            zip.file(path, ""); // Empty file
        }
    });
    zip.generateAsync({ type: "blob" }).then(content => {
        saveAs(content, "datapack.zip");
    });
}

function generateDatapack() {
    const fileStructure = generateFileStructure();
    downloadZip(fileStructure);
}