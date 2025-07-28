

    function getMoveName(argMoveId){
      console.log('Funkcja getMoveName została wywołana z argumentem:', argMoveId);
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
      else
        {
          console.log ('nieprawidłowy ruch:', argMoveId)
        printMessage('hej popraw wpisz 1,2 lub 3 a nie ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    function displayResult(argComputerMove, argPlayerMove){
    console.log('Funkcja displayResult został wywołana z argumentami:', {komputer: argComputerMove, gracz: argPlayerMove});


    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        return 'wygrywasz!';
      } 
      else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
        return 'remis!';
      } 
      else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Tym razem przegrywasz :(');
        return 'przegrywasz!';
      } 
      else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
        return 'remis!';
      } 
      else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Tym razem przegrywasz :(');
        return 'przegrywasz!';
      } 
      else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
        return 'wygrywasz!';
      } 
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Tym razem przegrywasz :(');
        return 'przegrywasz!';
      } 
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
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

function playGame (playerInput)  {

    console.log('Start gry Kamień, Papier, Nożyce');

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba dla komputera to: ' + randomNumber);

    let ComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + ComputerMove);
    console.log ('ruch komputera to:', ComputerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz kliknął: ' + playerInput);

    let PlayerMove = getMoveName (playerInput);
    console.log ('ruch gracza to:', PlayerMove);

    printMessage('Twój ruch to: ' + PlayerMove)

    let result = displayResult(ComputerMove, PlayerMove);
    console.log('Kto wygrał: ' + result);
}
    let rockButton = document.getElementById('play-rock');
    let paperButton = document.getElementById('play-paper');
    let scissorsButton = document.getElementById('play-scissors');


    rockButton.addEventListener('click', function() {playGame(1);
    });
    paperButton.addEventListener('click', function() {playGame(2);
    });
    scissorsButton.addEventListener('click', function() {playGame(3)
    });
