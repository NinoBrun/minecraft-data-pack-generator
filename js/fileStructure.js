/**
 * Gets path of a file or folder item based on its index in the file structure.
 * @param {number} index - Index of the item in the file structure
 * @returns {string} Path of the item
 */
function getPath(index) {
  const path = [];
  let currentIndex = index;
  
  while (currentIndex !== 0) {
    // Add title of the current item to the beginning of the path array
    path.unshift(fileStructureInfo[currentIndex].title);
    // Move to the parent item
    currentIndex = fileStructureInfo[currentIndex].parentIndex;
  }
  // Join path segments with '/' and return the result
  return path.join('/');
}

/**
 * Generates datapack zip file based on the file structure and user inputs.
 */
function generateDatapack() {
  const zip = new JSZip();
  const datapackName = document.getElementById('datapack-name').value || 'yourDatapack';
  // Create root folder in the zip file
  const rootFolder = zip.folder(datapackName);
  // Get pack.png file from the input or use an empty string
  const packPngFile = document.getElementById('datapack-photo').files[0] || '';

  fileStructureInfo.forEach((item, index) => {
    // Get label element for the item
    const label = document.querySelectorAll('#file-structure label')[index];
    // Get checkbox input within the label
    const checkbox = label.querySelector('input[type="checkbox"]');
    const isChecked = checkbox && checkbox.checked;
    const shouldInclude = isChecked || !item.showCheckbox;

    if (shouldInclude) {
      // Get path of the item
      const path = getPath(index);
      if (item.fileType === 'folder') {
        // Create folder in the zip file
        rootFolder.folder(path);
      } else if (item.fileType === 'file') {
        const fileContent = item.title == 'pack.png' ? packPngFile : item.info;
        if(fileContent) {
          // Create a file in the zip file
          rootFolder.file(path, fileContent);
        }
      }
    }
  });

  zip.generateAsync({ type: 'blob' }).then(content => {
    // Generate the zip file and trigger a download
    saveAs(content, `${datapackName}.zip`);
  });
}