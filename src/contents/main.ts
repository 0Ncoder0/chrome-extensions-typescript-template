chrome.runtime.sendMessage("Hello from contents").then((response) => {
  console.log(response);
});
