document.addEventListener('DOMContentLoaded', () => {
    const versionCompatibility = {
        61: "1.21.4",
        57: "1.21.2 & 1.21.3",
        48: "1.21 & 1.21.1",
        41: "1.20.5 & 1.20.6",
        26: "1.20.3 & 1.20.4",
        18: "1.20.2",
        15: "1.20 & 1.20.1",
        12: "1.19.4",
        10: "1.19, 1.19.1, 1.19.2 & 1.19.3",
        9: "1.18.2",
        8: "1.18 & 1.18.1",
        7: "1.17 & 1.17.1",
        6: "1.16.2, 1.16.3, 1.16.4 & 1.16.5",
        5: "1.15, 1.15.1, 1.15.2, 1.16 & 1.16.1",
        4: "1.13, 1.13.1, 1.13.2, 1.14, 1.14.1, 1.14.2, 1.14.3 & 1.14.4"
    };

    const versionSelect = document.getElementById('version-select');
    const compatibilityText = document.getElementById('compatibility-text');

    function updateCompatibilityText() {
        const defaultVersion = versionSelect.options[versionSelect.selectedIndex].value;
        compatibilityText.innerHTML = `➡️ Version <b>${defaultVersion}</b> is compatible with Minecraft version <b>${versionCompatibility[defaultVersion]}</b>`;

        versionSelect.addEventListener('change', () => {
            const selectedVersion = versionSelect.value;
            const minecraftVersion = versionCompatibility[selectedVersion];
            compatibilityText.innerHTML = `➡️ Version <b>${selectedVersion}</b> is compatible with Minecraft version <b>${minecraftVersion}</b>`;
        });
    }

    updateCompatibilityText();

    document.getElementById('generate-button').addEventListener('click', () => {
        const fileStructure = generateFileStructure();
        downloadZip(fileStructure);
    });
});