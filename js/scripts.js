document.addEventListener('DOMContentLoaded', () => {
    // Function to generate the file structure
    function generateFileStructure() {
        const fileStructure = [];
        document.querySelectorAll('#file-structure input[type="checkbox"]').forEach(checkbox => {
            if (checkbox.checked) {
                fileStructure.push(checkbox.parentElement.textContent.trim());
            }
        });
        return fileStructure;
    }

    // Function to download the zip file
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

    // Event listener for the generate button
    document.getElementById('generate-button').addEventListener('click', () => {
        const fileStructure = generateFileStructure();
        downloadZip(fileStructure);
    });
});