function toggleInfo(button) {
    const infoText = button.parentElement.nextElementSibling;
    if (infoText.style.display === "none" || infoText.style.display === "") {
        infoText.style.display = "block";
    } else {
        infoText.style.display = "none";
    }
}