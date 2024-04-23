const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', async () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        appendMessage('user', userMessage);
        const aiResponse = await getAIResponse(userMessage);
        appendMessage('ai', aiResponse);
        userInput.value = '';
    }
});

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('flex', 'mb-2', 'justify-end', 'items-end');

    const messageContent = document.createElement('div');
    messageContent.classList.add('max-w-md', 'px-4', 'py-2', 'rounded-lg', 'shadow', 'bg-blue-100');

    if (sender === 'user') {
        messageContent.classList.add('bg-green-100', 'ml-auto');
    }

    messageContent.textContent = message;
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
}

async function getAIResponse(message) {
  
    return "Resposta da OpenAI: " + message.toUpperCase();
}
