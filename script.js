document.addEventListener("DOMContentLoaded", function () {
    const phrases = document.querySelectorAll(".phrase");
    const response = document.getElementById("response");
    const buttonsContainer = document.querySelector(".buttons");
    let currentPhraseIndex = 0;

    // Function to display the next phrase
    function displayNextPhrase() {
        if (currentPhraseIndex < phrases.length) {
            phrases[currentPhraseIndex].style.display = "block";
            currentPhraseIndex++;

            setTimeout(displayNextPhrase, 3000); // 3-second delay between phrases
        } else {
            // All phrases displayed, show the buttons
            buttonsContainer.style.display = "block";
        }
    }

    // Add event listeners to the buttons
    document.getElementById("yesButton").addEventListener("click", function () {
        response.textContent = "I will see you Saturday, Princess";
        buttonsContainer.style.display = "none"; // Hide the buttons
    });

    document.getElementById("noButton").addEventListener("click", function () {
        response.textContent = "Try Again";
        buttonsContainer.style.display = "none"; // Hide the buttons
    });

    // Hide the buttons initially
    buttonsContainer.style.display = "none";

    displayNextPhrase(); // Start displaying phrases
});
