/**
 * Toggles display of info text associated with a button.
 * @param {HTMLElement} button - Button that was clicked to toggle info
 */
function toggleInfo(button) {
  const infoText = button.parentElement.nextElementSibling;
  // Toggles display property
  infoText.style.display = (infoText.style.display === "none" || infoText.style.display === "") ? "block" : "none";
}

/**
 * Toggles visibility of child elements based on the visibility of the parent.
 * @param {number} parentIndex - Index of the parent item
 * @param {boolean} isVisible - Whether the children should be visible or not
 */
function toggleChildrenVisibility(parentIndex, isVisible) {
  fileStructureInfo.forEach((item, index) => {
    // Check if current item is a child of the parent
    if (item.parentIndex === parentIndex) {
      // Get label element for the item
      const label = document.querySelectorAll('#file-structure label')[index];
      // Get info text element for the item
      const infoText = document.querySelectorAll('#file-structure .info-text')[index];
      // Get checkbox input within the label
      const checkbox = label.querySelector('input[type="checkbox"]');
      label.style.display = isVisible ? 'flex' : 'none';
      infoText.style.display = 'none';
      checkbox.checked = false;
      
      if (!isVisible) {
        // Recursively hide children if the parent is hidden
        toggleChildrenVisibility(index, false);
      }
    }
  });
}

/**
 * Toggles visibility of the FAQ description.
 * @param {HTMLElement} element - FAQ title element
 */
function toggleFaq(element) {
  const description = element.nextElementSibling;
  const arrow = element.querySelector('.dropdown-arrow');
  const isVisible = description.style.display === 'block';
  // Toggle display
  description.style.display = isVisible ? 'none' : 'block';
  arrow.textContent = isVisible ? '▼' : '▲';
}