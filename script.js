document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const buttonInput = document.getElementById("buttonInput");
    const chatbox = document.getElementById("chatbox");

    buttonInput.addEventListener("click", function() {
        let userText = textInput.value;
        if (userText) {
            let newUserText = document.createElement("p");
            newUserText.classList.add("userText");
            newUserText.innerHTML = "<span>" + userText + "</span>";
            chatbox.appendChild(newUserText);

            let botResponse = getBotResponse(userText);
            let newBotText = document.createElement("p");
            newBotText.classList.add("botText");
            newBotText.innerHTML = "<span>" + botResponse + "</span>";
            chatbox.appendChild(newBotText);

            textInput.value = "";
        }
    });

    function getBotResponse(userInput) {
        userInput = userInput.toLowerCase();
        if (userInput.includes("hello")) {
            return "Hi there! What do you want to learn today?";
        } else if (userInput.includes("hi")) {
            return "Hello there! What do you want to learn today?";
        } else if (userInput.includes("how are you")) {
            return "I am doing well, thank you!";
        } else if (userInput.includes("what is your name")) {
            return "You can call me ATB. TL Arra created me to help trainees like you.";
        } else {
            return "I'm not sure how to answer that. I'm still not perfect. But you can always ask your teammates for help.";
        }
    }
});
