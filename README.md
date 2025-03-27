## SUMMARY

Generate the file structure for Minecraft data packs. Allows you to choose each item in the structure individually and generate a downloadable ZIP file.

## WEBSITE

https://ninobrun.github.io/minecraft-data-pack-generator/

## TODO

1. 1.1.3 - Select all files toggle
2. 1.1.3 - Open all info toggle
3. 1.1.4 - Version histroy and displayed version number (and Minecraft version number)
4. 1.1.4 - Different "Optional" design with a * system

## VERSIONS

1. 1.0.0 - Launch
2. 1.0.1 - FAQ
3. 1.1.1 - 1.21.5 support
4. 1.1.2 - Tags subfolder support + title and footer updates

## VERSIONING RULES

**X**.X.X - Major site update,
X.**X**.X - Version support for Minecraft game update,
X.X.**X** - Minor site update.

A version number in any place will never decrease.
For example: you cannot go from 1.1.2 to 1.2.2 or 1.1.3, but never back to 1.2.0. Version 1.1.10 comes after 1.1.9. Version 1.10.0 comes after 1.9.0.

## PROJECT STRUCTRE

```
minecraft-datapack-filestructure-generator
├── index.html
├── styles.css
└── js
    ├── main.js               # Event listeners to initialize the page
    ├── fileStructure.js      # Creates the ZIP file based on user selections
    ├── listFiles.js          # File structure information as objects in an array
    ├── listVersions.js       # Version structure information as objects in an array
    ├── toggleInfo.js         # Toggle info by hiding and displaying elements
    ├── populateLists.js      # File structure and versions list generation
    ├── validateInfo.js       # Checks for valid names
    └── updateInfo.js         # Updates folder information in real-time based on pack naming
```

## FEATURES

- **Downloadable Folder Structure**: The files you select are packaged into a ZIP and downloadable. This ZIP can be placed into a world's data pack folder directly.
- **Written pack.png and pack.mcmeta files**: The pack.mcmeta file is completed upon download.
- **Dynamic File Structure**: The file structure is dynamically generated based on the array in `listFiles.js`. Simply add a new object to expand the list. Each object has customability options to hide and display elements or behavior related to its checkbox and info button.
- **Version Compatibility**: The version compatibility information is dynamically generated based on the array in `listVersions.js`. Simply add a new object to expand the list. The highest number index is labeled as "current".
- **Info Toggle**: Each item in the file structure has an info button that toggles the display of additional information. Child folders are only shown if the parent folder is selected.
- **Validation**: The data pack name input field only allows compatible characters. A warning blurb appears if invalid characters are entered.
- **FAQ Sections**: Clickable FAQ sections that expand to show more information.

## DEPENDENCIES

This project uses the following libraries referenced in `index.html`:

- [JSZip](https://stuk.github.io/jszip/) for generating zip files.
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/) for saving files on the client side.

## CONTRIBUTING

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. When contributing, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.
