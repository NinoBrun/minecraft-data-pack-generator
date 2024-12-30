const fileStructureInfo = [
  { title: "data pack name", info: "TODO" },
  { title: "pack.mcmeta", info: "TODO" },
  { title: "pack.png", info: "TODO" },
  { title: "data", info: "TODO" },
  { title: "namespace", info: "TODO" },
  { title: "function", info: "TODO" },
  { title: "structure", info: "TODO" },
  { title: "tags", info: "TODO" },
  { title: "advancement", info: "TODO" },
  { title: "banner_pattern", info: "TODO" },
  { title: "chat_type", info: "TODO" },
  { title: "damage_type", info: "TODO" },
  { title: "dimension", info: "TODO" },
  { title: "dimension_type", info: "TODO" },
  { title: "enchantment", info: "TODO" },
  { title: "enchantment_provider", info: "TODO" },
  { title: "instrument", info: "TODO" },
  { title: "item_modifier", info: "TODO" },
  { title: "jukebox_song", info: "TODO" },
  { title: "loot_table", info: "TODO" },
  { title: "painting_variant", info: "TODO" },
  { title: "predicate", info: "TODO" },
  { title: "recipe", info: "TODO" },
  { title: "trim_material", info: "TODO" },
  { title: "trim_pattern", info: "TODO" },
  { title: "wolf_variant", info: "TODO" },
  { title: "worldgen", info: "TODO" },
  { title: "biome", info: "TODO" },
  { title: "configured_carver", info: "TODO" },
  { title: "configured_feature", info: "TODO" },
  { title: "density_function", info: "TODO" },
  { title: "noise", info: "TODO" },
  { title: "noise_settings", info: "TODO" },
  { title: "placed_feature", info: "TODO" },
  { title: "processor_list", info: "TODO" },
  { title: "structure", info: "TODO" },
  { title: "structure_set", info: "TODO" },
  { title: "template_pool", info: "TODO" },
  { title: "world_preset", info: "TODO" },
  { title: "flat_level_generator_preset", info: "TODO" },
  { title: "multi_noise_biome_source_parameter_list", info: "TODO" }
];

function generateFileStructureHTML() {
  const fileStructureDiv = document.getElementById('file-structure');
  fileStructureInfo.forEach(item => {
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(` ${item.title} `));
      const infoButton = document.createElement('button');
      infoButton.className = 'info-btn';
      infoButton.textContent = 'i';
      infoButton.onclick = () => toggleInfo(infoButton);
      label.appendChild(infoButton);
      const infoText = document.createElement('div');
      infoText.className = 'info-text';
      infoText.textContent = item.info;
      fileStructureDiv.appendChild(label);
      fileStructureDiv.appendChild(infoText);
      fileStructureDiv.appendChild(document.createElement('br'));
  });
}