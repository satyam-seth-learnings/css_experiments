function appendMessage(message, type) {
    const messageElement = document.createElement('p');
    messageElement.innerText = message;
    messageElement.classList.add(`${type === 'sent' ? 'sent' : 'received'}-message`);

    const charLimit = 100; // if message length is grater than charLimit then show read more button

    if (message.length > charLimit) {
        const readMoreBtn = document.createElement('span');
        readMoreBtn.innerText = 'read more';
        readMoreBtn.classList.add('read-more-btn');

        const dots = document.createElement('span');
        dots.innerText = '... ';

        const hiddenText = document.createElement('span');
        hiddenText.classList.add('hidden');
        hiddenText.innerText = message.slice(charLimit, -1);

        // read more button click handler
        readMoreBtn.addEventListener('click', () => {
            readMoreBtn.remove();
            dots.remove();
            hiddenText.classList.remove('hidden');
        });

        messageElement.innerText = message.slice(0, charLimit);
        messageElement.appendChild(dots);
        messageElement.appendChild(readMoreBtn);
        messageElement.appendChild(hiddenText);
    } else {
        messageElement.innerHTML = message;
    }

    document.querySelector('.chat-container').appendChild(messageElement);
}

function handleSubmit() {
    console.log('submit');

    const input = document.querySelector('.message-input');
    const message = input.innerText.trim();
    appendMessage(message, 'sent');
    input.innerText = '';

    setTimeout(() => {
        appendMessage(message, 'received');
    }, 1500);
}

function disableSendButton() {
    const sendButton = document.querySelector('.send-button');
    sendButton.classList.remove('active-button');
    sendButton.disabled = true;
}

function activateSendButton() {
    const sendButton = document.querySelector('.send-button');
    sendButton.classList.add('active-button');
    sendButton.disabled = false;
}

window.onload = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.innerText.trim() !== '') {
            handleSubmit();
            disableSendButton();
        }
    });

    // Add EventListener on input to Activate send button when user typing message
    document.querySelector('.message-input').addEventListener('input', (e) => {
        if (e.target.innerText.trim() === '') {
            disableSendButton();
        } else {
            activateSendButton();
        }
    });

    document.querySelector('.message-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (e.target.innerText.trim() !== '') {
                handleSubmit();
                disableSendButton();
            }
        }
    });
};