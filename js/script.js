
{
  let playerScore = 0;
  let computerScore = 0;

  const getMoveName = function(argMoveId){
    console.log ('Funkcja getMoveName została wywołana z argumentem:', argMoveId);
    if(argMoveId == 1){
      console.log ('Rozpoznano ruch: kamień')
      return 'kamień';
    }
    else if(argMoveId == 2){
      console.log ('Rozpoznano ruch: papier')
      return "papier"
    }
    else if(argMoveId == 3){
      console.log ('Rozpoznano ruch: nożyce')
      return "nożyce"
    }
    else{
      console.log ('nieprawidłowy ruch:', argMoveId)
      printMessage('hej popraw wpisz 1,2 lub 3 a nie ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

    const displayResult = function (argComputerMove, argPlayerMove){
      console.log('Funkcja displayResult został wywołana z argumentami:', {
        komputer: argComputerMove,
         gracz: argPlayerMove
      });

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        playerScore++
        return 'wygrywasz!';
      } 
      else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
        return 'remis!';
      } 
      else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Tym razem przegrywasz :(');
        computerScore++
        return 'przegrywasz!';
      } 
      else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
        return 'remis!';
      } 
      else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Tym razem przegrywasz :(');
        computerScore++
        return 'przegrywasz!';
      } 
      else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
        playerScore++
        return 'wygrywasz!';
      } 
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Tym razem przegrywasz :(');
        computerScore++
        return 'przegrywasz!';
      } 
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
        playerScore++
        return 'wygrywasz!';
      } 
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
        return 'remis!';
      } 
      else {
        console.log('Nieprawidłowa kombinacja ruchów lub nieznany ruch');
        return 'nieznany wynik';
      }
    }

    const displayScore = function (){
      const cPlayerScore = document.getElementById('player-score');
      cPlayerScore.textContent='Gracz  '+ playerScore;
      const cComputerScore = document.getElementById('computer-score');
      cComputerScore.textContent='Komputer  '+ computerScore;
    }

    const playGame = function (playerInput) {
      clearMessages();
      
      const randomNumber = Math.floor(Math.random() * 3 + 1);
      console.log('Wylosowana liczba dla komputera to: ' + randomNumber);

      const computerMove = getMoveName(randomNumber);
      printMessage('Mój ruch to: ' + computerMove);
      console.log ('ruch komputera to:', computerMove);

      console.log('Gracz wybrał: ' + playerInput);

      const playerMove = getMoveName(playerInput);
      printMessage('Twój ruch to: ' + playerMove);

      const result = displayResult(computerMove, playerMove);
      console.log('Kto wygrał: ' + result);

      displayScore()
    }

    const rockButton = document.getElementById('play-rock');
    rockButton.addEventListener('click', function() {
      playGame(1);
    });

    const paperButton = document.getElementById('play-paper');
    paperButton.addEventListener('click', function() {
      playGame(2);
    });

    const scissorsButton = document.getElementById('play-scissors');
    scissorsButton.addEventListener('click', function() {
      playGame(3)
    });
}


