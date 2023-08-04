function sendMessage() {
    var messageInput = document.getElementById('message');
    var message = messageInput.value.trim();

    if (message !== '') {
        var chatMessages = document.getElementById('chat-messages');
        var messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        // Clear the input field after sending
        messageInput.value = '';

        // Scroll to the bottom to show the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
