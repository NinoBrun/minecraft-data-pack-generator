function getPath(index) {
  const path = [];
  let currentIndex = index;
  while (currentIndex !== 0) {
    path.unshift(fileStructureInfo[currentIndex].title);
    currentIndex = fileStructureInfo[currentIndex].parentIndex;
  }
  return path.join('/');
}

function generateDatapack() {
  const zip = new JSZip();
  const datapackName = document.getElementById('datapack-name').value || 'yourDatapack';
  const rootFolder = zip.folder(datapackName);
  const packPngFile = document.getElementById('datapack-photo').files[0];

  fileStructureInfo.forEach((item, index) => {
    const label = document.querySelectorAll('#file-structure label')[index];
    const checkbox = label.querySelector('input[type="checkbox"]');
    if ((checkbox && checkbox.checked) || !item.showCheckbox) {
      const path = getPath(index);
      if (item.fileType === 'folder') {
        rootFolder.folder(path);
      } else if (item.fileType === 'file') {
        if (item.title === 'pack.png' && packPngFile) {
          rootFolder.file(path, packPngFile);
        } else if (item.title === 'pack.mcmeta') {
          rootFolder.file(path, item.info || '');
        } else if (item.title !== 'pack.png') {
          rootFolder.file(path, item.info || '');
        }
      }
    }
  });

  zip.generateAsync({ type: 'blob' }).then(content => {
    saveAs(content, `${datapackName}.zip`);
  });
}