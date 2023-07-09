let gameState = [];
let Player1;
let Player2;
let gameStarted = false;
let gameHasReset = false;
let turnLabel = document.getElementById("turnLabel");
let playerTurn;
let gameTiles = document.getElementsByClassName("gameSpot");
let startGameButton = document.getElementById("gameStart");

function startGame() {
    if(!gameStarted){
        //setting players names
        Player1 = document.getElementById("player1").value;
        Player2 = document.getElementById("player2").value;
        //checking if player names match
        if(Player1 == Player2){
            console.log("Player names must be different!");
            return;
        }

        turnLabel.textContent = Player1 + "'s Turn";
        playerTurn = Player1;

        for(let i = 0; i < gameTiles.length; i++){
            gameTiles[i].textContent = "";
            gameTiles[i].style.backgroundColor = "white";
            if(!gameHasReset){
                gameTiles[i].addEventListener("click", () =>{
                    addLetter(gameTiles[i]);
                })
            }
            gameState.push(gameTiles[i]);
        }
        gameStarted = true;
    }
}

function addLetter(tile) {
    //checking if spot already has a letter in it
    if(tile.textContent != ""){
        console.log("Spot already taken!");
        return;
    }

    if(gameStarted == false){
        console.log("game has not started!");
        return;
    }
    //checking for who's turn it is
    if(playerTurn == Player1){
        //adding players letter to tile
        tile.textContent = "X";
        //adding letter to gameState
        for(let i = 0; i < gameState.length; i++){
            if(gameState[i] == tile){
                gameState[i].textContent = tile.textContent;
            }
        }
        //changing turn to ther player's turn
        playerTurn = Player2;
        turnLabel.textContent = Player2 + "'s Turn";
    }
    else if(playerTurn == Player2){
        //adding players letter to tile
        tile.textContent = "O";
        //adding letter to gameState
        for(let i = 0; i < gameState.length; i++){
            if(gameState[i] == tile){
                gameState[i].textContent = tile.textContent;
            }
        }
        //changing turn to ther player's turn
        playerTurn = Player1;
        turnLabel.textContent = Player1 + "'s Turn";
    }
    checkGameOver();
}

function checkGameOver(){
    
    let winner = checkWins();
    //check for a player win
    if(winner == "X" || winner == "O"){
        gameIsOver(winner);
        return;
    }

    //checking for draw
    for(let i = 0; i < gameState.length; i++){
        if(gameState[i].textContent == ""){
            //found open tile
            return;
        }
    }
    gameIsOver(null);
}

function checkWins(){
    if(gameTiles[0].textContent == gameTiles[1].textContent && gameTiles[1].textContent == gameTiles[2].textContent){
        if(gameTiles[0].textContent != ""){
            gameTiles[0].style.backgroundColor = "green";
            gameTiles[1].style.backgroundColor = "green";
            gameTiles[2].style.backgroundColor = "green";
            return gameTiles[0].textContent;
        }
    }
    else if(gameTiles[3].textContent == gameTiles[4].textContent && gameTiles[4].textContent == gameTiles[5].textContent){
        if(gameTiles[3].textContent != ""){
            gameTiles[3].style.backgroundColor = "green";
            gameTiles[4].style.backgroundColor = "green";
            gameTiles[5].style.backgroundColor = "green";
            return gameTiles[3].textContent;
        }
    }
    else if(gameTiles[6].textContent == gameTiles[7].textContent && gameTiles[7].textContent == gameTiles[8].textContent){
        if(gameTiles[6].textContent != ""){
            gameTiles[6].style.backgroundColor = "green";
            gameTiles[7].style.backgroundColor = "green";
            gameTiles[8].style.backgroundColor = "green";
            return gameTiles[6].textContent;
        }
    }
    else if(gameTiles[0].textContent == gameTiles[3].textContent && gameTiles[3].textContent == gameTiles[6].textContent){
        if(gameTiles[0].textContent != ""){
            gameTiles[0].style.backgroundColor = "green";
            gameTiles[3].style.backgroundColor = "green";
            gameTiles[6].style.backgroundColor = "green";
            return gameTiles[0].textContent;
        }
    }
    else if(gameTiles[1].textContent == gameTiles[4].textContent && gameTiles[4].textContent == gameTiles[7].textContent){
        if(gameTiles[1].textContent != ""){
            gameTiles[1].style.backgroundColor = "green";
            gameTiles[4].style.backgroundColor = "green";
            gameTiles[7].style.backgroundColor = "green";
            return gameTiles[1].textContent;
        }
    }
    else if(gameTiles[2].textContent == gameTiles[5].textContent && gameTiles[5].textContent == gameTiles[8].textContent){
        if(gameTiles[2].textContent != ""){
            gameTiles[2].style.backgroundColor = "green";
            gameTiles[5].style.backgroundColor = "green";
            gameTiles[8].style.backgroundColor = "green";
            return gameTiles[2].textContent;
        }
    }
    else if(gameTiles[0].textContent == gameTiles[4].textContent && gameTiles[4].textContent == gameTiles[8].textContent){
        if(gameTiles[0].textContent != ""){
            gameTiles[0].style.backgroundColor = "green";
            gameTiles[4].style.backgroundColor = "green";
            gameTiles[8].style.backgroundColor = "green";
            return gameTiles[0].textContent;
        }
    }
    else if(gameTiles[2].textContent == gameTiles[4].textContent && gameTiles[4].textContent == gameTiles[6].textContent){
        if(gameTiles[2].textContent != ""){
            gameTiles[2].style.backgroundColor = "green";
            gameTiles[4].style.backgroundColor = "green";
            gameTiles[6].style.backgroundColor = "green";
            return gameTiles[2].textContent;
        }
    }
    return "No winners yet";
}

function gameIsOver(winner){
    if(winner == "X"){
        turnLabel.textContent = Player1 + " Wins!";
    }
    else if(winner == "O"){
        turnLabel.textContent = Player2 + " Wins!";
    }
    else{
        turnLabel.textContent = "Draw!";
    }
    gameStarted = false;
    gameHasReset = true;
    startGameButton.textContent = "Restart";
}
startGameButton.addEventListener("click", startGame);




