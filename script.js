document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const buttonInput = document.getElementById("buttonInput");
    const chatbox = document.getElementById("chatbox");

    buttonInput.addEventListener("click", function() {
        let userText = textInput.value.trim();
        if (userText) {
            let newUserText = document.createElement("p");
            newUserText.classList.add("userText");
            newUserText.innerHTML = `<span>${userText}</span>`;
            chatbox.appendChild(newUserText);

            let botResponse = getBotResponse(userText);
            let newBotText = document.createElement("p");
            newBotText.classList.add("botText");
            newBotText.innerHTML = `<span>${botResponse}</span>`;
            chatbox.appendChild(newBotText);

            textInput.value = "";
        }
    });

    function getBotResponse(userInput) {
        userInput = userInput.toLowerCase();
        if (userInput.includes("hello")) {
            return "Hi there! What do you want to learn today?";
        } else if (userInput.includes("bye")) {
            return "Goodbye! Come back soon.";
        } else if (userInput.includes("how are you")) {
            return "I am doing well, thank you!";
        } else if (userInput.includes("what are you")) {
            return "I am a trainee helper, ATB. ATB  is short for Avocado Trainer Bot.";
        } else if (userInput.includes("what is your name")) {
            return "You can call me ATB. TL Arra created me to help trainees like you.";
        } else if (userInput.includes("what is kriss ai")) {
            return "Kriss AI is an AI-powered chatbot that lives on clinic websites. It talks to website visitors, answers dental-related questions, and helps guide them toward booking an appointment — 24/7.";
        } else if (userInput.includes("what does kriss means")) {
            return "KRISS stands for Knowledge Research Intelligent Search System";
        } else if (userInput.includes("what can kriss ai not do")) {
            return "Kriss AI does not automate booking, do follow up and scan your cavities.";
        } else if (userInput.includes("who is the person behind kriss ai")) {
            return "The founder of Kriss AI is Timothy Ngo, a venture capitalist who's great at identifying and supporting high-potential tech startups. He is also the co-founder of Iozera, a consultancy specializing in designing AI infrastructure for businesses.";
        } else if (userInput.includes("when was kriss ai founded")) {
            return "Kriss AI started back in 2021, in Houston, United States, and ventured into the Philippines in 2023.";
        } else if (userInput.includes("why was Kriss AI built")) {
            return "Kriss.ai envisions a future where healthcare is more accessible, precise, and proactive. Through our AI-driven solutions, we aim to revolutionize the health sector, enhancing patient outcomes and fostering medical advancements. We strive for a health care ecosystem where the quality of patient care is elevated.
";
        } else if (userInput.includes("how does kriss ai works")) {
            return "Kriss AI is installed directly on dental websites. It is trained on real dental conversations and terminologies, and it can answer patient inquiries, insurance coverage, ADA codes, billing questions, and even emotional responses like fear of dentists.";
        } else if (userInput.includes("key features")) {
            return "Kriss AI can give human-like responses. Help front desk staff with repetitive admin tasks while it saves time and boosts revenue by turning website visits into patient bookings.";
        } else if (userInput.includes("why is kriss ai special")) {
            return "Kriss AI is conversational, company-specific, and industry-specific.";
        } else if (userInput.includes("kriss ai top competitor")) {
            return "Check out the website of Kriss AI competitors for comparison. smartbot360.com and chatbot.com";
        } else if (userInput.includes("how are you")) {
            return "I am doing well, thank you!";
        } else {
            return "I'm not sure how to answer that. I'm still not perfect. But you can always ask your teammates for help.";
        }
    }
});
