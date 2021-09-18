let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.topSites.get((arr) => {
    chrome.storage.sync.set({ arr });
    console.log(arr);
});