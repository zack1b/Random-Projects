const settingsButton = document.getElementById("settings-btn");
const settingMenu = document.getElementById("settings-menu");
const closeSettingsButton = document.getElementById("close-menu");

settingsButton.addEventListener("click", openSettings);
closeSettingsButton.addEventListener("click", closeSettings);

function openSettings() {
  settingMenu.style.display = "flex";
}

function closeSettings() {
  settingMenu.style.display = "none";
}
