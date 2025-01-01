const versionData = [
  { value: "61", compatibility: "1.21.4" },
  { value: "57", compatibility: "1.21.2 & 1.21.3" },
  { value: "48", compatibility: "1.21 & 1.21.1" },
  { value: "41", compatibility: "1.20.5 & 1.20.6" },
  { value: "26", compatibility: "1.20.3 & 1.20.4" },
  { value: "18", compatibility: "1.20.2" },
  { value: "15", compatibility: "1.20 & 1.20.1" },
  { value: "12", compatibility: "1.19.4" },
  { value: "10", compatibility: "1.19, 1.19.1, 1.19.2 & 1.19.3" },
  { value: "9", compatibility: "1.18.2" },
  { value: "8", compatibility: "1.18 & 1.18.1" },
  { value: "7", compatibility: "1.17 & 1.17.1" },
  { value: "6", compatibility: "1.16.2, 1.16.3, 1.16.4 & 1.16.5" },
  { value: "5", compatibility: "1.15, 1.15.1, 1.15.2, 1.16 & 1.16.1" },
  { value: "4", compatibility: "1.13, 1.13.1, 1.13.2, 1.14, 1.14.1, 1.14.2, 1.14.3 & 1.14.4" }
];

function populateVersionSelect() {
  const versionSelect = document.getElementById('version-select');
  const highestVersion = Math.max(...versionData.map(v => parseInt(v.value)));
  versionData.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.value === highestVersion.toString() ? `${option.value} (current)` : option.value;
    versionSelect.appendChild(opt);
  });
}