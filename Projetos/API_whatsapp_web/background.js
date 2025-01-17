chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendToRMKT") {
        const { message } = request;
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            func: sendToRMKTContacts,
            args: [message],
        });
    }
});

function sendToRMKTContacts(message) {
    // Obter contatos da etiqueta "RMKT"
    const tags = document.querySelectorAll("._2ad8G"); // Ajuste o seletor conforme o DOM do WhatsApp Web
    const rmktTag = Array.from(tags).find(tag => tag.textContent === "RMKT");

    if (!rmktTag) {
        alert("No RMKT tag found!");
        return;
    }

    // Clicar na etiqueta "RMKT" para listar os contatos
    rmktTag.click();

    setTimeout(() => {
        const contacts = document.querySelectorAll("._21S-L"); // Ajuste o seletor conforme o DOM do WhatsApp Web
        if (contacts.length === 0) {
            alert("No contacts found under RMKT!");
            return;
        }

        contacts.forEach((contact, index) => {
            setTimeout(() => {
                contact.click();

                setTimeout(() => {
                    const chatInput = document.querySelector("div[contenteditable='true']");
                    if (chatInput) {
                        chatInput.textContent = message;
                        chatInput.dispatchEvent(new InputEvent("input", { bubbles: true }));
                        const sendButton = document.querySelector("button[type='button']");
                        if (sendButton) sendButton.click();
                    }
                }, 1000); // Espera para evitar problemas de carregamento do chat
            }, index * 2000); // Delay entre mensagens
        });
    }, 1000);
}
