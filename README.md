# Minecraft Datapack Filestructure Generator

This project helps generate the file structure for Minecraft datapacks. It allows you to check and uncheck each item in the structure individually and generate a downloadable zip file of the selected structure.

## Project Structure

```
minecraft-datapack-filestructure-generator
├── index.html       # Main HTML document
├── css
│   └── styles.css   # Styles for the webpage
├── js
│   ├── main.js      # JavaScript for interactivity
│   ├── fileStructure.js # JavaScript for file structure generation
│   ├── listFiles.js # JavaScript for file structure information
│   ├── listVersions.js  # JavaScript for version compatibility
│   └── toggleInfo.js    # JavaScript for toggling info text
└── README.md        # Project documentation
```

## Getting Started

To use the generator, follow these steps:

1. Clone the repository or download the project files.
2. Open the `index.html` file in your web browser.
3. You should see the webpage with the Minecraft datapack folder structure.
4. Check or uncheck the items you want in your datapack.
5. Click the generate button to download the file structure as a zip file.

## Customization

### Styles

Feel free to modify the `styles.css` file to change the appearance of the webpage.

### JavaScript

You can update the JavaScript files to add new features and interactivity. Here are some key files:

- `listFiles.js`: Contains the file structure information. You can add or modify the items in the `fileStructureInfo` array.
- `listVersions.js`: Contains the version compatibility information. You can add or modify the items in the `versionData` array.
- `toggleInfo.js`: Contains the function to toggle the display of the info text.
- `main.js`: Initializes the page by populating the version select dropdown, updating the compatibility text, and generating the file structure HTML.

## License

This project is open-source and available for anyone to use and modify.

## Resources

1. [Minecraft Wiki - Data pack Folder structure](https://minecraft.wiki/w/Data_pack#Folder_structure)