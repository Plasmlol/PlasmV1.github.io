document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.getElementById("game-container");
    const loadGameButton = document.getElementById("load-game-button");
    const loadAnotherGameButton = document.getElementById("load-another-game-button");

    // Function to load a game into the container
    function loadGame(gameName) {
        fetch(`${gameName}.html`)
            .then(response => response.text())
            .then(content => {
                gameContainer.innerHTML = content;
            })
            .catch(error => {
                console.error(`Failed to load the game: ${error}`);
            });
    }

    // Load the default game when the page loads
    loadGame("default-game");

    // Event listeners for loading different games
    loadGameButton.addEventListener("click", () => {
        loadGame("game1");
    });

    loadAnotherGameButton.addEventListener("click", () => {
        loadGame("game2");
    });
});