function generateFileStructure() {
    const fileStructure = [];
    fileStructureInfo.forEach(item => {
        if (item.showCheckbox) {
            document.querySelectorAll('#file-structure input[type="checkbox"]').forEach(checkbox => {
                if (checkbox.checked && checkbox.parentElement.textContent.trim().includes(item.title)) {
                    fileStructure.push(checkbox.parentElement.textContent.trim());
                }
            });
        } else {
            fileStructure.push(item.title);
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