document.getElementById("irofb5").addEventListener("click", function() {
    const webhookURL = "https://discord.com/api/webhooks/1330153787788361739/t-XAdD4S2W9JM7QLmLZ_LDBGjmyFS1heGCs6HA3zlSWljkwE8tE4eZ5k6mEhCRZWvtK6";
    const userInput = document.getElementById("SendText").value; // Capture user input from the text input field
    const messageContent = {
        content: `${userInput} Test` // Append "Test" to the user input
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageContent)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Message sent successfully:", data);
    })
    .catch(error => {
        console.error("Error sending message:", error);
    });
});
