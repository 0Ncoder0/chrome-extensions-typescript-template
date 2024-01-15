chrome.runtime.sendMessage("Hello from popup").then((response) => {
  document.body.innerText = response;
});
