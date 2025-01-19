chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "changeColor") {
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            func: () => {
                // Gera uma cor aleatória
                const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                document.body.style.backgroundColor = randomColor;
            }
        });
    }



});

