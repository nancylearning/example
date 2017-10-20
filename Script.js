var gameOver = false;
var turnNumber = 0;

var gameBoard = document.getElementById('gameBoard');
var startOverButton = document.getElementById('startOver');
addEvent(gameBoard, 'click', gameBoardClicked);
