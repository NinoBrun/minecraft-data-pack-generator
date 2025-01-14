function toggleInfo(button) {
    const infoText = button.parentElement.nextElementSibling;
    if (infoText.style.display === "none" || infoText.style.display === "") {
        infoText.style.display = "block";
    } else {
        infoText.style.display = "none";
    }
}

function toggleChildrenVisibility(parentIndex, isVisible) {
  fileStructureInfo.forEach((item, index) => {
    if (item.parentIndex === parentIndex) {
      const label = document.querySelectorAll('#file-structure label')[index];
      label.style.display = isVisible ? 'flex' : 'none';
      const checkbox = label.querySelector('input[type="checkbox"]');
      checkbox.checked = !isVisible;
      checkbox.checked = false;
      const infoText = document.querySelectorAll('#file-structure .info-text')[index];
      infoText.style.display = 'none';
      if (!isVisible) {
        toggleChildrenVisibility(index, false);
      }
    }
  });
}