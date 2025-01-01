const fileStructureInfo = [
  { title: "Enter datapack name", fileType: "folder", showCheckbox: false, showInfo: false, showInfoButton: false, fileLevel: 0,
    info: "TODO" },
  { title: "pack.mcmeta", fileType: "file", showCheckbox: false, showInfo: true, showInfoButton: false, fileLevel: 1,
    info: `{ "pack": { "description": "The default data for Minecraft", "pack_format": 61 } }` },
  { title: "pack.png", fileType: "file", showCheckbox: false, showInfo: false, showInfoButton: false, fileLevel: 1,
    info: "TODO" },
  { title: "data", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 1,
    info: "TODO" },
  { title: "namespace", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 2,
    info: "TODO" },
  { title: "function", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "structure", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "tags", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "advancement", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "banner_pattern", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "chat_type", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "damage_type", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "dimension", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "dimension_type", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "enchantment", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "enchantment_provider", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "instrument", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "item_modifier", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "jukebox_song", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "loot_table", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "painting_variant", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "predicate", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "recipe", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "trim_material", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "trim_pattern", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "wolf_variant", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "worldgen", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 3,
    info: "TODO" },
  { title: "biome", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "configured_carver", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "configured_feature", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "density_function", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "noise", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "noise_settings", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "placed_feature", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "processor_list", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "structure", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "structure_set", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "template_pool", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "world_preset", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "flat_level_generator_preset", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" },
  { title: "multi_noise_biome_source_parameter_list", fileType: "folder", showCheckbox: true, showInfo: false, showInfoButton: true, fileLevel: 4,
    info: "TODO" }
];

function populateFileStrucutre() {
  const fileStructureDiv = document.getElementById('file-structure');
  fileStructureDiv.innerHTML = ''; // Clear existing content
  fileStructureInfo.forEach(item => {
      const label = document.createElement('label');
      if (item.showCheckbox) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          label.appendChild(checkbox);
      }
      if (item.fileType === "folder") {
        label.appendChild(document.createTextNode("📁 "));
      } else if (item.fileType === "file") {
          label.appendChild(document.createTextNode("📄 "));
      }
      label.appendChild(document.createTextNode(` ${item.title} `));
      if (item.showInfoButton) {
          const infoButton = document.createElement('button');
          infoButton.className = 'info-btn';
          infoButton.textContent = 'i';
          infoButton.onclick = () => toggleInfo(infoButton);
          label.appendChild(infoButton);
      }
      const infoText = document.createElement('div');
      infoText.className = 'info-text';
      infoText.textContent = item.info;
      if (item.showInfo) {
          infoText.style.display = 'block';
      }
      fileStructureDiv.appendChild(label);
      fileStructureDiv.appendChild(infoText);
  });
}