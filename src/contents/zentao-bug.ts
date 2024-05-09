(async function () {
  console.log("zentao-bug.js script running...");

  const main = () => {
    // YYYY/MM/DD
    const timeFormat = (date: Date) => {
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      return `${year}/${month}/${day}`;
    };

    const toast = (msg: string) => {
      const toast = document.createElement("div");
      toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 999999;
        transition: all 0.3s;
      `;
      toast.innerText = msg;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 2000);
    };

    const addButtonAfter = (target: string, text: string, onClick: Function) => {
      // 获取iframe的DOM
      const dom = Array.from(document.querySelectorAll("iframe")).find((e) => e.contentDocument.location.href === location.href)!.contentDocument as Document;

      // 获取工具栏
      const toolbar = dom.querySelector(".main-actions .btn-toolbar");

      // 获取target按钮
      const cancelBtn = Array.from(toolbar.querySelectorAll("a")).find((e) => e.innerText.includes(target));

      // 克隆target按钮作为发布按钮
      const releaseBtn = cancelBtn.cloneNode(true) as HTMLElement;
      // 将发布按钮插入到取target钮前面
      cancelBtn.insertAdjacentElement("beforebegin", releaseBtn);

      // 修改发布按钮的属性和事件
      releaseBtn.removeAttribute("href");
      releaseBtn.querySelector("span").innerText = text;
      releaseBtn.removeChild(releaseBtn.querySelector("i") as HTMLElement);
      releaseBtn.addEventListener("click", onClick as never);
    };

    const copyBranchName = async () => {
      const name = chrome.storage.sync.get("name").then((res) => res.name || "name");
      const bug = "bug-" + location.href.match(/bug-view-(\d+)/)![1];
      const date = timeFormat(new Date());
      const branch = `${name}/${date}/${bug}/`;
      await navigator.clipboard.writeText(branch);
      toast("分支名已复制到粘贴板: " + branch);

      let maps: string[][] = await chrome.storage.sync.get("maps").then((res) => res.maps || []);
      maps = [...maps, [bug, document.title]].filter((e, i, arr) => arr.findIndex((a) => a[0] === e[0]) === i).splice(10, maps.length - 10);
      chrome.storage.sync.set({ maps });
    };
    addButtonAfter("解决", "分支名", copyBranchName);
  };

  let url = "";
  const isSameUrl = () => url === location.href;
  const isTargeUrl = () => location.href.includes("bug-view-");
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  while (true) {
    const doIt = !isSameUrl() && isTargeUrl();
    url = location.href;
    if (doIt) main();
    await sleep(500);
  }
})();
