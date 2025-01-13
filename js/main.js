document.addEventListener('DOMContentLoaded', () => {
    // Startup
    populateVersionSelect();
    updateVersionCompatibilityText();
    populateFileStructure();
    // Active listeners (see updateInfo.js)
    addEventListeners();
});