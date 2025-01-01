document.addEventListener('DOMContentLoaded', () => {
    populateVersionSelect();
    updateCompatibilityText();
    generateFileStructureHTML();

    const datapackNameInput = document.getElementById('datapack-name');
    const datapackDescriptionInput = document.getElementById('datapack-description');
    const versionSelect = document.getElementById('version-select');

    datapackNameInput.addEventListener('input', validateDataPackName);
    datapackNameInput.addEventListener('input', updateDataPackName);
    datapackDescriptionInput.addEventListener('input', validateDataPackDescription);
    datapackDescriptionInput.addEventListener('input', updatePackMcmeta);
    versionSelect.addEventListener('change', updatePackMcmeta);
});

function validateDataPackName() {
    const datapackNameInput = document.getElementById('datapack-name');
    const warningBlurb = document.getElementById('name-warning');
    const originalValue = datapackNameInput.value;
    datapackNameInput.value = originalValue.replace(/[^a-zA-Z0-9-_]/g, '');

    if (originalValue !== datapackNameInput.value) {
        warningBlurb.style.display = 'block';
    } else {
        warningBlurb.style.display = 'none';
    }
}

function validateDataPackDescription() {
    const datapackDescriptionInput = document.getElementById('datapack-description');
    const warningBlurb = document.getElementById('description-warning');
    const originalValue = datapackDescriptionInput.value;
    datapackDescriptionInput.value = originalValue.replace(/["\\]/g, '');

    if (originalValue !== datapackDescriptionInput.value) {
        warningBlurb.style.display = 'block';
    } else {
        warningBlurb.style.display = 'none';
    }
}

function updatePackMcmeta() {
    const description = document.getElementById('datapack-description').value || "The default data for Minecraft";
    const packFormat = document.getElementById('version-select').value || "61";
    fileStructureInfo[1].info = `{ "pack": { "description": "${description}", "pack_format": ${packFormat} } }`;
    generateFileStructureHTML();
}