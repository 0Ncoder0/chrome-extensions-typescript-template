chrome.runtime.onMessage.addListener((message, sender, sendResponse: Function) => {
  console.log(message);
  sendResponse(`Hello from service worker : ${message}`);
  return true;
});
