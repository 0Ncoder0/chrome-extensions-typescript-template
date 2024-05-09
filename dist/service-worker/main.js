chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);
    sendResponse("Hello from service worker : ".concat(message));
    return true;
});
