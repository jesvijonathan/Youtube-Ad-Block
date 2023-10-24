// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.disableExtension) {
    // Disable your extension's functionality here
    // You may want to set a flag or update settings to disable features
  }
});
