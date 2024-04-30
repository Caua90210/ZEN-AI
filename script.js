const consultarGemini = (question) => {
    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A';
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle;

    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    };

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        const respostaTextIa = data.candidates[0].content.parts[0].text;
        appendMessage('AI', respostaTextIa); // Adicionando a resposta como mensagem
    })
    .catch(error => console.error('Error: ', error ));
}

const appendMessage = (sender, message) => {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('flex', 'mb-2', 'items-end');

    const messageContent = document.createElement('div');
    messageContent.classList.add('max-w-md', 'px-4', 'py-2', 'rounded-lg', 'shadow', 'bg-blue-100');

    if (sender === 'user') {
        messageContent.classList.add('bg-green-100', 'ml-auto');
    }

    messageContent.textContent = message;
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);

    // Role automaticamente para baixo
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

const sendBtn = document.getElementById('send-btn');
sendBtn.addEventListener('click', () => {
    const question = document.getElementById('user-input').value;
    appendMessage('user', question); // Adicionando a mensagem do usuário
    consultarGemini(question);
});
