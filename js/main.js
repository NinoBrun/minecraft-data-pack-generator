document.addEventListener('DOMContentLoaded', () => {
    const versionSelect = document.getElementById('version-select');
    const compatibilityText = document.getElementById('compatibility-text');

    function updateCompatibilityText() {
        const defaultVersion = versionSelect.options[versionSelect.selectedIndex].value;
        compatibilityText.innerHTML = `➡️ Version <b class="yellow-text">${defaultVersion}</b> is compatible with Minecraft version <b class="yellow-text">${versionCompatibility[defaultVersion]}</b>`;

        versionSelect.addEventListener('change', () => {
            const selectedVersion = versionSelect.value;
            const minecraftVersion = versionCompatibility[selectedVersion];
            compatibilityText.innerHTML = `➡️ Version <b class="yellow-text">${selectedVersion}</b> is compatible with Minecraft version <b class="yellow-text">${minecraftVersion}</b>`;
        });
    }

    updateCompatibilityText();
});

function toggleInfo(button) {
    const infoText = button.nextElementSibling;
    if (infoText.style.display === "none" || infoText.style.display === "") {
        infoText.style.display = "block";
    } else {
        infoText.style.display = "none";
    }
}