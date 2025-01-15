function toggleInfo(button) {
  const infoText = button.parentElement.nextElementSibling;
  infoText.style.display = (infoText.style.display === "none" || infoText.style.display === "") ? "block" : "none";
}

function toggleChildrenVisibility(parentIndex, isVisible) {
  fileStructureInfo.forEach((item, index) => {
    if (item.parentIndex === parentIndex) {
      const label = document.querySelectorAll('#file-structure label')[index];
      const infoText = document.querySelectorAll('#file-structure .info-text')[index];
      const checkbox = label.querySelector('input[type="checkbox"]');
      label.style.display = isVisible ? 'flex' : 'none';
      infoText.style.display = 'none';
      checkbox.checked = false;
      if (!isVisible) {
        toggleChildrenVisibility(index, false);
      }
    }
  });
}