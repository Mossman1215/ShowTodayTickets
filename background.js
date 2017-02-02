browser.contextMenus.create({
  id: "hide-today",
  title: "hide today"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "hide-today") {
    browser.tabs.executeScript({
      file: "show-only-today.js"
    });
  }
});