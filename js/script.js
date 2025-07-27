function getMoveName(argMoveId){
  console.log('Funkcja getMoveName została wywołana z argumentem:', argMoveId);
  if(argMoveId == 1){
    return 'kamień';
  }
  else if(argMoveId == 2){
    return "papier"
  }
  else if(argMoveId == 3){
    return "nożyce"
  }
  else
    {
    printMessage('hej popraw wpisz 1,2 lub 3 a nie ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove){
printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } 
  else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  } 
  else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Tym razem przegrywasz :(');
  } 
  else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  } 
  else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Tym razem przegrywasz :(');
  } 
  else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } 
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Tym razem przegrywasz :(');
  } 
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } 
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  } 
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let ComputerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + ComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let PlayerMove = getMoveName (playerInput);

printMessage('Twój ruch to: ' + PlayerMove);


let result = displayResult(ComputerMove, PlayerMove);
console.log('Kto wygrał: ' + result);


  