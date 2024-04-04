//funcao para definir a escolha do computador
function resultadoComputador(){

const escolha = [ 'pedra', 'papel' , 'tesoura'];

const escolhaComputador = Math.floor(Math.random() * escolha.length); // seleciona o valor aleatorio da const escolha

console.log(escolha[escolhaComputador]); //imprime o valor aleatorio escolhido
return escolha[escolhaComputador];
} 


function jogada(selecaoJogador, selecaoComputador) {
   //converter para minuscula para não dar errado na entrada de dados
   selecaoJogador = selecaoJogador.toLowerCase(); 
    
  
if (
    (selecaoJogador ==='pedra' && selecaoComputador.toLowerCase()=== 'tesoura') ||
    (selecaoJogador ==='papel' && selecaoComputador.toLowerCase()=== 'pedra') ||
    (selecaoJogador ==='tesoura' && selecaoComputador.toLowerCase()=== 'papel')
){
    return ` Você ganhou ${selecaoJogador} bate ${selecaoComputador} `;
} else if (selecaoJogador === selecaoComputador.toLowerCase()) //olhar se deu empate
{
    return "É um empate";
 }
// se não é empate e o jogador não ganhou ele perdeu
else {
    return `Você perde ${selecaoComputador} bate ${selecaoJogador} `;
}

}
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const selecaoJogador = prompt('Escolha: Pedra, Papel, ou Tesoura');
      const selecaoComputador = resultadoComputador();
  
      const result = jogada(selecaoJogador, selecaoComputador);
      console.log(`rodada ${i + 1}: ${result}`);
  
      if (result === `Você ganhou ${selecaoJogador} bate ${selecaoComputador} `) {
        playerScore++;
      } else if (result === `Você perde ${selecaoComputador} bate ${selecaoJogador} `) {
        computerScore++;
      }
    }
  
    // Determine the winner of the game
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (playerScore < computerScore) {
      console.log('You lose the game!');
    } else {
      console.log('It\'s a tie game!');
    }
  
}
  // Start the game
  playGame();
