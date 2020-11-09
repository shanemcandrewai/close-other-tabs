function clickFolder() {
  function removeInactiveTabs(tabs) {
    for (let tab of tabs) {
      if (!tab.active) { browser.tabs.remove(tab.id); }
    }
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }
   
  let querying = browser.tabs.query({currentWindow: true});
  querying.then(removeInactiveTabs, onError);
}

browser.browserAction.onClicked.addListener(clickFolder);
