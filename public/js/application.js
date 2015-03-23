var randomGrid = function(){
  return Math.floor((Math.random() * 4));
};

var randomTile = function() {
  return (Math.floor(Math.random() * 2) + 1) * 2;
};

var Tile = function(x,y) {
  this.x = x;
  this.y = y;

  var id = function() {
    return "#" + this.x + this.y;
  };

  var getValue = function() {
    return ($(this.id()).text());
  };

  var numberInTile = function() {
    return this.getValue() !== "";
  };

  var setValue = function(value) {
    $(this.id()).text(value);
  };

  this.id = id;
  this.getValue = getValue;
  this.numberInTile = numberInTile;
  this.setValue = setValue;
};

var seedTwoTiles = function() {
  addNewTile();
  addNewTile();
};

var addNewTile = function() {
  var tile = new Tile(randomGrid(), randomGrid());
  while (tile.numberInTile() === true) {
    tile.x = randomGrid();
    tile.y = randomGrid();
  }
  tile.setValue(randomTile);
};


var checkSameTiles = function (tile, nextTile) {
  return tile.getValue() === nextTile.getValue();
};

var mergeTiles = function(tile, nextTile) {
  nextTile.setValue(Number(tile.getValue())*2);
  tile.setValue("");
};

var validNextTile = function(tile, x_diff, y_diff) {
  return (tile.x + x_diff) >= 0 && (tile.x + x_diff) <= 3 && (tile.y + y_diff) >= 0 && (tile.y + y_diff) <= 3;
};

var moveLeft = function(x_diff, y_diff){
  var counter = 0;
  for(var i = 0; i <= 3; i++){
    for(var j = 0; j <= 3; j++){
      var tile = new Tile(i, j);
      if(validNextTile(tile, x_diff, y_diff)){
        if(tile.getValue() !== ""){
          var nextTile = new Tile(i + x_diff, j + y_diff);
          if(nextTile.getValue() === ""){
            nextTile.setValue(tile.getValue());
            tile.setValue("");
            tile = nextTile;
            nextTile = new Tile(tile.x + x_diff, tile.y + y_diff);

            while(validNextTile(tile, x_diff, y_diff) && nextTile.getValue() === ""){
            nextTile.setValue(tile.getValue());
            tile.setValue("");
            tile = nextTile;
            nextTile = new Tile(tile.x + x_diff, tile.y + y_diff);
            }
            counter += 1;
          }
          if(checkSameTiles(tile, nextTile)){

            mergeTiles(tile, nextTile);
            counter +=1;
          }
        }
      }
    }
  }
  return counter;
};

var moveUp = function(x_diff, y_diff){
  var counter = 0;
  for(var i = 0; i <= 3; i++){
    for(var j = 3; j >= 0; j--){
      var tile = new Tile(i, j);
      if(validNextTile(tile, x_diff, y_diff)){
        if(tile.getValue() !== ""){
          var nextTile = new Tile(i + x_diff, j + y_diff);
          if(nextTile.getValue() === ""){
            nextTile.setValue(tile.getValue());
            tile.setValue("");
            tile = nextTile;
            nextTile = new Tile(tile.x + x_diff, tile.y + y_diff);

            while(validNextTile(tile, x_diff, y_diff) && nextTile.getValue() === ""){
            nextTile.setValue(tile.getValue());
            tile.setValue("");
            tile = nextTile;
            nextTile = new Tile(tile.x + x_diff, tile.y + y_diff);
            }
            counter += 1;
          }
          if(checkSameTiles(tile, nextTile)){

            mergeTiles(tile, nextTile);
            counter +=1;
          }
        }
      }
    }
  }
  return counter;
};

var moveCounterDirection = function(x_diff, y_diff){
  var counter = 0;
  for(var i = 3; i >= 0; i--){
    for(var j = 3; j >= 0; j--){
      var tile = new Tile(i, j);
      if(validNextTile(tile, x_diff, y_diff)){
        if(tile.getValue() !== ""){
          var nextTile = new Tile(i + x_diff, j + y_diff);
          if(nextTile.getValue() === ""){
            nextTile.setValue(tile.getValue());
            tile.setValue("");
            tile = nextTile;
            nextTile = new Tile(tile.x + x_diff, tile.y + y_diff);

            while(validNextTile(tile, x_diff, y_diff) && nextTile.getValue() === ""){
            nextTile.setValue(tile.getValue());
            tile.setValue("");
            tile = nextTile;
            nextTile = new Tile(tile.x + x_diff, tile.y + y_diff);
            }
            counter += 1;
          }
          if(checkSameTiles(tile, nextTile)){

            mergeTiles(tile, nextTile);
            counter +=1;
          }
        }
      }
    }
  }
  return counter;
};

var moveRightOrDown = function(x_diff, y_diff) {
  return moveCounterDirection(x_diff, y_diff);
};

var checkGameOver = function() {
  for(var i = 0; i <= 3; i++){
    for(var j = 0; j <= 3; j++){
      if ($("#" + i + j).text() === ""){
        return false;
      }
    }
  }
  return true;
};


var showGameOver = function() {
  n = 0;
  for(var i = 0; i <= 3; i++){
    for(var j = 0; j <= 3; j++){
      $("#" + i + j).text("    GAMEOVER    ".split('')[n]);
      n += 1;
    }
  }
};

var gameWin = false;
var gameOver = false;

var checkGameWin = function() {
  for(var i = 0; i <= 3; i++){
    for(var j = 0; j <= 3; j++){
      if ($("#" + i + j).text() === "2048"){
        gameWin = true;
        return true;
      }
    }
  }
};


var showGameWin = function() {
  n = 0;
  for(var i = 0; i <= 3; i++){
    for(var j = 0; j <= 3; j++){
      $("#" + i + j).text("    YOU  WIN    ".split('')[n]);
      n += 1;
    }
  }
};

var showGameResult = function() {
  if (checkGameWin() === true) {
    showGameWin();
  } else if (checkGameOver() === true) {
      showGameOver();
  }
};

var respondToInput = function() {
  $(document).keyup(function(e) {
    console.log(gameWin);
    if (gameWin === false && gameOver === false) {
      switch(e.which) {
        case 37:
          var moved = moveLeft(0, -1);
          break;
        case 38:
          var moved = moveUp(-1, 0);
          break;
        case 39:
          var moved = moveRightOrDown(0, 1);
          break;
        case 40:
          var moved = moveRightOrDown(1, 0);
          break;

        default:return;
        }

        if (moved !== 0) {
          addNewTile();
        }

        showGameResult();
      }
  });
};


$(document).ready(function() {
  seedTwoTiles();
  respondToInput();
});