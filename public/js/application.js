var randomGrid = function(){
  return Math.floor((Math.random() * 16) + 1);
};


var randomTile = function() {
  return(Math.floor(Math.random() * 2) + 1) * 2;
};


var Tile = function() {
  this.gridId = "#" + randomGrid();
  $(gridId).empty().append(randomTile());
};

// function newTile() {
//   $(gridId).empty().append(randomTile());
//   checkEmpty(gridId);
// }

console.log(randomGrid());

function firstTwoNumbers() {
  newTile();
  newTile();

}


function checkEmpty(Id) {
  if($(Id).text() !== "") {
    moveTiles(Id);
  }
  else {
    alert("empty");
  }
}

function moveLeft(Id) {
  $(Id).insertBefore($(Id).prev());
}

function checkSameTile(Id) {

}

var tile = new Tile();

checkEmpty(tile.gridId);



function moveTiles(gridId) {
  $(document).keyup(function(e) {
    switch(e.which) {
      case 37:
        if ((gridId !== "#1") || (gridId !== "#5") || (gridId !== "#9") || (gridId !== "#13")) {
          moveLeft(Id);
          // checkSameTile();
        }
        break;

      case 38:
        break;

      case 39: // right
        break;

      case 40: // down
        break;

      default: return; // exit this handler for other keys
    }
    newTile();
    e.preventDefault();
  });
}

moveTiles(tile.gridId);

$(document).ready(function() {
  firstTwoNumbers();
  moveTiles();


  $(document).keydown(function(e) {
    console.log(e.which);
    // switch(e.which) {

    //   case 37:
    //     alert("Left");

    //   case 38: // up
    //     break;

    //   case 39: // right
    //     break;

    //   case 40: // down
    //     break;

    //   default: return; // exit this handler for other keys
    // }
    e.preventDefault(); // prevent the default action (scroll / move caret)
    });

  });


// var A = function(){
//   varToBePassed = "something";
//    B(varToBePassed);
// };

// var B = function(passedVar){
//    console.log(passedVar);
// };

// A();