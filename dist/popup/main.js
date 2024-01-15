chrome.runtime.sendMessage("Hello from popup").then(function (response) {
    document.body.innerText = response;
});
