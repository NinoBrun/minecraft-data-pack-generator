const fileStructureInfo = [
  { title: "<data pack name>", fileType: "folder",
    fileLevel: 0, parentIndex: null,
    showItem: true, showCheckbox: false, showInfo: false, showInfoButton: false,
    info: "HIDDEN" },
    { title: "pack.mcmeta", fileType: "file",
      fileLevel: 1, parentIndex: 0,
      showItem: true, showCheckbox: false, showInfo: true, showInfoButton: false,
      info: `{ "pack": { "description": { "translate": "dataPack.vanilla.description" }, "pack_format": 80 } }` },
    { title: "pack.png", fileType: "file",
      fileLevel: 1, parentIndex: 0,
      showItem: true, showCheckbox: false, showInfo: false, showInfoButton: true,
      info: "The picture that displays next to the data pack." },
    { title: "data", fileType: "folder",
      fileLevel: 1, parentIndex: 0,
      showItem: true, showCheckbox: true, showInfo: false, showInfoButton: false,
      info: "HIDDEN" },
      { title: "<namespace>", fileType: "folder",
        fileLevel: 2, parentIndex: 3,
        showItem: false, showCheckbox: true, showInfo: false, showInfoButton: false,
        info: "HIDDEN" },
        { title: "function", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Files, allowing players to run lists of commands." },
        { title: "structure", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Stores a saved structure of blocks and entities." },
        { title: "tags", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "A collections of things, also called registry tags, allow players to group different game elements together." },
          { title: "function", fileType: "folder",
            fileLevel: 4, parentIndex: 7,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Tags of functions." },
          { title: "<registry name>", fileType: "folder",
            fileLevel: 4, parentIndex: 7,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Tags can be defined for any registry." },
        { title: "advancement", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Definitions of advancements." },
        { title: "banner_pattern", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Textures and names to use for banner patterns." },
        { title: "cat_variant", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Textures and spawn conditions of cat variants." },
        { title: "chat_type", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Formatting of chat messages." },
        { title: "chicken_variant", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Textures and spawn conditions of chicken variants." },          
        { title: "cow_variant", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Textures and spawn conditions of cow variants." },
        { title: "damage_type", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Controls damage attributes and death messages used when an entity dies." },
        { title: "dialog", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Definitions of dialogs." },          
        { title: "dimension", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Biome layout and terrain of dimensions." },
        { title: "dimension_type", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Defines properties of a dimension such as world height build limits, the ambient light, and more." },
        { title: "enchantment", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Enchantment effects, supported items, level cost, etc." },
        { title: "enchantment_provider", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Used to source one or more enchantments for use in scenarios such as mobs spawning with enchanted equipment." },
        { title: "frog_variant", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Textures and spawn conditions of frog variants." },
        { title: "instrument", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Instruments for goat horns." },
        { title: "item_modifier", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Loot functions used to modify items that can apply modifications to item stacks, such as adjusting the stack size or adding enchantments." },
        { title: "jukebox_song", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Jukebox song definitions." },
        { title: "loot_table", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Loot from mobs, blocks, chests, etc." },
        { title: "painting_variant", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Size and texture of paintings." },
        { title: "pig_variant", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Textures and spawn conditions of pig variants." },
        { title: "predicate", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Standalone files that contain one or more predicates which are invoked to check conditions within the world." },
        { title: "recipe", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Recipes for crafting, smelting, etc." },
        { title: "test_environment", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "A way to group up GameTests and give them the right preconditions to run." },
        { title: "test_instance", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "A test that can be run by the GameTest framework." },
        { title: "trial_spawner", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Configuration of trial spawners." },   
        { title: "trim_material", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Colors, ingredients, and name of materials for trimming." },
        { title: "trim_pattern", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Textures and name of patterns for trimming." },
        { title: "wolf_sound_variant", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Sound variants of wolfs." },
        { title: "wolf_variant", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
          info: "Textures and biomes of wolf variants." },
        { title: "worldgen", fileType: "folder",
          fileLevel: 3, parentIndex: 4,
          showItem: false, showCheckbox: true, showInfo: false, showInfoButton: false,
          info: "HIDDEN" },
          { title: "biome", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Biome generation options, effects, etc." },
          { title: "configured_carver", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Carver cave definitions used to add caves and canyons." },
          { title: "configured_feature", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "The configuration of a feature type that can be used to define features that are placed in a world." },
          { title: "density_function", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Make up mathematical expressions to obtain a number from a position, referenced from the noise router in noise settings." },
          { title: "noise", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "A technical file that can be referenced by a density function and surface rule to set the size and amplitudes of a noise." },
          { title: "noise_settings", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "For generating the shape of the terrain and noise caves, and what blocks the terrain is generated with." },
          { title: "placed_feature", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Determines where a configured feature should be placed using placement modifiers within a chunk. They can be referenced in biomes." },
          { title: "processor_list", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Used to transform blocks in a structure template during generation." },
          { title: "structure", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "A large decoration, defined by structure generation and allowed biomes, usually made up of multiple pieces that are fit together." },
          { title: "structure_set", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Used to determine the position and distribution of structures during world generation." },
          { title: "template_pool", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "A group of jigsaw structure pieces for use in jigsaw structures. It can be a structure template, a placed feature, or a combination of other pieces." },
          { title: "world_preset", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "When creating a new world, this can be chosen as a world type to determine which dimensions the world has." },
          { title: "flat_level_generator_preset", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Used to add a new superflat worldtype preset." },
          { title: "multi_noise_biome_source_parameter_list", fileType: "folder",
            fileLevel: 4, parentIndex: 38,
            showItem: false, showCheckbox: true, showInfo: false, showInfoButton: true,
            info: "Used to avoid changing world preset files when adding new biomes." }
];