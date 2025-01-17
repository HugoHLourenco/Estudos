document.getElementById("changeColor").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "changeColor" });
});
