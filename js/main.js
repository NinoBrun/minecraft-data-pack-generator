document.addEventListener('DOMContentLoaded', () => {
    // Startup
    populateVersionSelect();
    updateVersionCompatibilityText();
    populateFileStrucutre();
    // Active listeners (see updateInfo.js)
    addEventListeners();
});