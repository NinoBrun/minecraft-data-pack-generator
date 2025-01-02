# Minecraft Datapack Filestructure Generator

This project helps generate the file structure for Minecraft datapacks. It allows you to check and uncheck each item in the structure individually and generate a downloadable zip file of the selected structure.

## Project Structure

```
minecraft-datapack-filestructure-generator
├── index.html       # Main HTML document
├── styles.css   # Styles for the webpage
├── js
│   ├── main.js      # JavaScript for interactivity
│   ├── fileStructure.js # JavaScript for file structure generation
│   ├── listFiles.js # JavaScript for file structure information
│   ├── listVersions.js  # JavaScript for version compatibility
│   ├── toggleInfo.js    # JavaScript for toggling info text
│   ├── listFilesObject.js # JavaScript for file structure object
│   ├── listVersionsObject.js # JavaScript for version compatibility object
│   ├── populateLists.js # JavaScript for populating lists
│   ├── validateInfo.js # JavaScript for validating input fields
│   └── updateInfo.js # JavaScript for updating info fields
├── media
│   └── mc.webp
└── README.md        # Project documentation
```

## Getting Started

To use the generator, follow these steps:

1. Clone the repository or download the project files.
2. Open the `index.html` file in your web browser.
3. You should see the webpage with the Minecraft datapack folder structure.
4. Check or uncheck the items you want in your datapack.
5. Click the generate button to download the file structure as a zip file.

## Features

- **Dynamic File Structure**: The file structure is dynamically generated based on the `fileStructureInfo` array in `listFilesObject.js`.
- **Version Compatibility**: The version compatibility information is dynamically generated based on the `packVersionData` array in `listVersionsObject.js`.
- **Info Toggle**: Each item in the file structure has an info button that toggles the display of additional information.
- **Validation**: The datapack name input field only allows characters compatible with folder naming in Windows and disallows spaces. A warning blurb appears if invalid characters are entered.

## Customization

### Styles

Feel free to modify the `styles.css` file to change the appearance of the webpage.

### JavaScript

You can update the JavaScript files to add new features and interactivity. Here are some key files:

- `listFilesObject.js`: Contains the file structure information. You can add or modify the items in the `fileStructureInfo` array.
- `listVersionsObject.js`: Contains the version compatibility information. You can add or modify the items in the `packVersionData` array.
- `toggleInfo.js`: Contains the function to toggle the display of the info text.
- `main.js`: Initializes the page by populating the version select dropdown, updating the compatibility text, and generating the file structure HTML.
- `populateLists.js`: Contains functions to populate the version select dropdown and file structure.
- `validateInfo.js`: Contains functions to validate the input fields.
- `updateInfo.js`: Contains functions to update the info fields.

## License

This project is open-source and available for anyone to use and modify.

## Resources

1. [Minecraft Wiki - Data pack Folder structure](https://minecraft.wiki/w/Data_pack#Folder_structure)