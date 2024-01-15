chrome.runtime.sendMessage("Hello from contents").then(function (response) {
    console.log(response);
});
