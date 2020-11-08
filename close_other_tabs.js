browser.commands.onCommand.addListener((command) => {
  browser.tabs.remove([1, 2]);
});
