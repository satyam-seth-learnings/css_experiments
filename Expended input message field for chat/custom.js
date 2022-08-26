window.onload = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit');
        const input = document.querySelector('.message-input');
        const message = input.innerText;
        input.innerText = '';

        const messageElement = document.createElement('p');
        messageElement.innerText = message;
        messageElement.classList.add('sent-message');
        document.querySelector('.chat-container').appendChild(messageElement);

        setTimeout(() => {
            const messageElement = document.createElement('p');
            messageElement.innerText = message;
            messageElement.classList.add('received-message');
            document.querySelector('.chat-container').appendChild(messageElement);
        }, 1500);
    });
};