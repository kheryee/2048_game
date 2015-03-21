function randomGrid(){   
  var gridNumber = Math.floor((Math.random() * 16) + 1);
  setInterval(randomGrid, 1000);
  firstMove(gridNumber); 
  }


function firstMove(x) {
  $(document).keydown(function(e) {
    if ((e.which == 37 )|| (e.which == 38 )|| (e.which == 39 )|| (e.which == 40 )) {
      alert(x);
      $(this).off(e);
    }

    e.preventDefault();
  });   
}

$(document).ready(function() {
  randomGrid();
  
//   $(document).keydown(function(e) {
//     switch(e.which) {
//       case 37:
//         alert("Left");

//       case 38: // up
//         break;

//       case 39: // right
//         break;

//       case 40: // down
//         break;

//       default: return; // exit this handler for other keys
//     }
//     e.preventDefault(); // prevent the default action (scroll / move caret)
//     });   
  
//    $(document).keydown(function(e) {
//     switch(e.which) {
//       case 37:
//         alert("Left");

//       case 38: // up
//         break;

//       case 39: // right
//         break;

//       case 40: // down
//         break;

//       default: return; // exit this handler for other keys
//     }
//     e.preventDefault(); // prevent the default action (scroll / move caret)
//     });   
  });