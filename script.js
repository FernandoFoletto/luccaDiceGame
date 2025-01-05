var player1Name;
var player2Name;

var loserName = "lucca";
var maxLoserPoints = 2

var comecarBtn = document.querySelector("#comecarBtn");

comecarBtn.addEventListener("click", function() {
    // Salva os valores dos campos de entrada nas variáveis
    player1Name = document.querySelector("#nomeJogador1").value;
    player2Name = document.querySelector("#nomeJogador2").value;

    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);
});

var player1Name = localStorage.getItem("player1Name");
var player2Name = localStorage.getItem("player2Name");

document.querySelector(".player1NameGame").innerHTML= "Player 1 <br> <strong>"+ player1Name+ "</strong>";
document.querySelector(".player2NameGame").innerHTML= "Player 2 <br> <strong>"+ player2Name+ "</strong>";

// inicio do jogo

function playGame(){

    // Randomizar os pontos do jogador 1
    if (loserName === player1Name.toLowerCase()){
        var randomNumber1 = Math.floor(Math.random() * maxLoserPoints) + 1;
    } else{
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    }
    
    document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1 +".png") //Altera a imagem do dado 1

    // Randomizar os pontos do jogador 1
    if (loserName === player2Name.toLowerCase()){
        var randomNumber2 = Math.floor(Math.random() * maxLoserPoints) + 1;
    } else{
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    }

    document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2 +".png") //Altera a imagem do dado 2


    // Definir mensagem do vencedor

    if (randomNumber1 > randomNumber2){
        document.querySelector(".winnerMessage").innerHTML = "🚩" + player1Name +" 1 Wins!";
    } else if (randomNumber2 > randomNumber1){
        document.querySelector(".winnerMessage").innerHTML = player2Name + " Wins! 🚩";
    } else {
        document.querySelector(".winnerMessage").innerHTML = "Draw!";
      }
}


