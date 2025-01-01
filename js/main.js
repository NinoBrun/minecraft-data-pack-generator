document.addEventListener('DOMContentLoaded', () => {
    populateVersionSelect();
    updateCompatibilityText();
    generateFileStructureHTML();

    const datapackNameInput = document.getElementById('datapack-name');
    datapackNameInput.addEventListener('input', validateDataPackName);
    datapackNameInput.addEventListener('input', updateDataPackName);
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