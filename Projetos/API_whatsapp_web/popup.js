document.getElementById("start").addEventListener("click", () => {
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
        alert("Please enter a message!");
        return;
    }
    chrome.runtime.sendMessage({ action: "sendToRMKT", message });
    console.log("Message sent to background.js:", message);
});
