(async function () {
  console.log("github.js script running...");

  const main = async () => {
    while (true) {
      if (document.querySelector("#pull_request_body")) break;
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    const task = location.href.match(/task-(\d+)/)?.[1];
    const bug = location.href.match(/bug-(\d+)/)?.[1];
    if (!task && !bug) return;

    const key = task ? `task-${task}` : `bug-${bug}`;
    const maps: string[][] = await chrome.storage.sync.get("maps").then((res) => res.maps || []);

    const body = document.querySelector("#pull_request_body") as HTMLTextAreaElement;
    body.value = task ? `https://zentao.qbitnetwork.com/zentao/task-view-${task}.html` : `https://zentao.qbitnetwork.com/zentao/bug-view-${bug}.html`;

    const title = document.querySelector("#pull_request_title") as HTMLInputElement;
    title.value = maps.find((e) => e[0] === key)?.[1] || title.value;
  };

  let url = "";
  const isSameUrl = () => url === location.href;
  const isTargeUrl = () => location.href.includes("compare");
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  while (true) {
    const doIt = !isSameUrl() && isTargeUrl();
    url = location.href;
    if (doIt) main();
    await sleep(500);
  }
})();
