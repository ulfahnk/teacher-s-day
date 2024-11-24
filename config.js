// Function to check for new messages
function checkForNewMessages() {
    // Simulate fetching messages from a server
    fetch('/api/messages') // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {
            const messageBoard = document.getElementById('messageBoard');
            messageBoard.innerHTML = ''; // Clear existing messages
            data.messages.forEach(message => {
                const newMessage = document.createElement('p');
                newMessage.textContent = message;
                messageBoard.appendChild(newMessage);
            });
        })
        .catch(error => console.error('Error fetching messages:', error));
}

// Set an interval to check for new messages every 5 seconds
setInterval(checkForNewMessages, 5000);