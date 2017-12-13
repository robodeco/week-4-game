var computerNumberValue;
var jewelValue1;
var jewelValue2;
var jewelValue3;
var jewelValue4;
var userInputTotal = 0;
var userWins = 0;
var userLosses = 0;

// 1) upon document ready, load up function that starts game and displays value to be matched by user
// 2) the value to win the game is pulled out randomly from a function
$(document).ready(function play() {
computerNumberValue = Math.floor(Math.random() * 120) + 19;

$("#computerNumber").html(computerNumberValue);
$("#displayWins").html(userWins);
$("#displayLosses").html(userLosses);

console.log(computerNumberValue);
});

// 3) a random value is assigned to four divs, each div containing a picture of a jewel
$(document).ready(function runValue() {

// note: go back and find out hot to make this so that each variable is never assigned the same value as another. see below for commented out tries. overall this statistically doesnt happen often though.
jewelValue1 = Math.floor(Math.random() * 12) +1;
jewelValue2 = Math.floor(Math.random() * 12) +1;
jewelValue3 = Math.floor(Math.random() * 12) +1;
jewelValue4 = Math.floor(Math.random() * 12) +1;


console.log(jewelValue1);
console.log(jewelValue2);
console.log(jewelValue3);
console.log(jewelValue4);

});

// 4) when a jewel is clicked, it adds its random number to an empty variable
// 5) if the empty variable equals or goes over the random value pulled above, the game resets
// 6) if the user's number equals the computer's, they win. if it goes over, they lose. each is logged accordingly.


function addJewelValue1() {
  //on click, the user adds the value of this jewel to the overall value
  userInputTotal = userInputTotal + jewelValue1
  console.log(userInputTotal);
  //the computer writes it to the web page
  $("#userInputFromCrystals").html(userInputTotal)
  //if the user hits the number exactly, they win and the win counter goes up. the game then resets, with all of the jewel values being randomized again, the user input returning to 0, and the computer's generated number being changed
  if (userInputTotal === computerNumberValue) {
    userWins++;
    $("#displayWins").html(userWins);

    jewelValue1 = Math.floor(Math.random() * 12) +1;
    jewelValue2 = Math.floor(Math.random() * 12) +1;
    jewelValue3 = Math.floor(Math.random() * 12) +1;
    jewelValue4 = Math.floor(Math.random() * 12) +1;

    userInputTotal = 0;
    $("#userInputFromCrystals").html(userInputTotal)
    computerNumberValue = Math.floor(Math.random() * 120) + 19;
    $("#computerNumber").html(computerNumberValue);
  }
  //if the user goes over the number they lose and the lose counter goes up. the game then resets, with all of the jewel values being randomized again, the user input returning to 0, and the computer's generated number being changed
  if (userInputTotal > computerNumberValue) {
    userLosses++;
    $("#displayLosses").html(userLosses);

    jewelValue1 = Math.floor(Math.random() * 12) +1;
    jewelValue2 = Math.floor(Math.random() * 12) +1;
    jewelValue3 = Math.floor(Math.random() * 12) +1;
    jewelValue4 = Math.floor(Math.random() * 12) +1;

    userInputTotal = 0;
    $("#userInputFromCrystals").html(userInputTotal)

    computerNumberValue = Math.floor(Math.random() * 120) + 19;

    $("#computerNumber").html(computerNumberValue);
  }

//below is the same function repeated for each crystal. I feel like I'm missing a much easier way to do this, as I think this is pretty blatantly breaking the DRY rule. But given how much trouble the hangman game gave me and seeing that the game is working perfectly I've opted not to mess with it!

};

function addJewelValue2() {
  userInputTotal = userInputTotal + jewelValue2
  console.log(userInputTotal);
  $("#userInputFromCrystals").html(userInputTotal)

  if (userInputTotal === computerNumberValue) {
    userWins++;
    $("#displayWins").html(userWins);

    jewelValue1 = Math.floor(Math.random() * 12) +1;
    jewelValue2 = Math.floor(Math.random() * 12) +1;
    jewelValue3 = Math.floor(Math.random() * 12) +1;
    jewelValue4 = Math.floor(Math.random() * 12) +1;

    userInputTotal = 0;
    $("#userInputFromCrystals").html(userInputTotal)

    computerNumberValue = Math.floor(Math.random() * 120) + 19;
    $("#computerNumber").html(computerNumberValue);
  }

  if (userInputTotal > computerNumberValue) {
    userLosses++;
    $("#displayLosses").html(userLosses);

    jewelValue1 = Math.floor(Math.random() * 12) +1;
    jewelValue2 = Math.floor(Math.random() * 12) +1;
    jewelValue3 = Math.floor(Math.random() * 12) +1;
    jewelValue4 = Math.floor(Math.random() * 12) +1;

    userInputTotal = 0;
    $("#userInputFromCrystals").html(userInputTotal)

    computerNumberValue = Math.floor(Math.random() * 120) + 19;

    $("#computerNumber").html(computerNumberValue);
  }


};

function addJewelValue3() {
  userInputTotal = userInputTotal + jewelValue3
  console.log(userInputTotal);
  $("#userInputFromCrystals").html(userInputTotal)

  if (userInputTotal === computerNumberValue) {
    userWins++;
    $("#displayWins").html(userWins);

    jewelValue1 = Math.floor(Math.random() * 12) +1;
    jewelValue2 = Math.floor(Math.random() * 12) +1;
    jewelValue3 = Math.floor(Math.random() * 12) +1;
    jewelValue4 = Math.floor(Math.random() * 12) +1;

    userInputTotal = 0;
    $("#userInputFromCrystals").html(userInputTotal)

    computerNumberValue = Math.floor(Math.random() * 120) + 19;
    $("#computerNumber").html(computerNumberValue);
  }

  if (userInputTotal > computerNumberValue) {
    userLosses++;
    $("#displayLosses").html(userLosses);

    jewelValue1 = Math.floor(Math.random() * 12) +1;
    jewelValue2 = Math.floor(Math.random() * 12) +1;
    jewelValue3 = Math.floor(Math.random() * 12) +1;
    jewelValue4 = Math.floor(Math.random() * 12) +1;

    userInputTotal = 0;
    $("#userInputFromCrystals").html(userInputTotal)

    computerNumberValue = Math.floor(Math.random() * 120) + 19;

    $("#computerNumber").html(computerNumberValue);
  }


};

function addJewelValue4() {
  userInputTotal = userInputTotal + jewelValue4
  console.log(userInputTotal);
  $("#userInputFromCrystals").html(userInputTotal)

  if (userInputTotal === computerNumberValue) {
    userWins++;
    $("#displayWins").html(userWins);

    jewelValue1 = Math.floor(Math.random() * 12) +1;
    jewelValue2 = Math.floor(Math.random() * 12) +1;
    jewelValue3 = Math.floor(Math.random() * 12) +1;
    jewelValue4 = Math.floor(Math.random() * 12) +1;

    userInputTotal = 0;
    $("#userInputFromCrystals").html(userInputTotal)

    computerNumberValue = Math.floor(Math.random() * 120) + 19;
    $("#computerNumber").html(computerNumberValue);
  }

  if (userInputTotal > computerNumberValue) {
    userLosses++;
    $("#displayLosses").html(userLosses);

    jewelValue1 = Math.floor(Math.random() * 12) +1;
    jewelValue2 = Math.floor(Math.random() * 12) +1;
    jewelValue3 = Math.floor(Math.random() * 12) +1;
    jewelValue4 = Math.floor(Math.random() * 12) +1;

    userInputTotal = 0;
    $("#userInputFromCrystals").html(userInputTotal)

    computerNumberValue = Math.floor(Math.random() * 120) + 19;

    $("#computerNumber").html(computerNumberValue);
  }


};


//extra junk from failed tries below


// if the value equals another value already generated,  make a different random number
// if (jewelValue1 === jewelValue2 || jewelValue1 ===jewelValue3 || jewelValue1 === jewelValue4) {
//   jewelValue1 = Math.floor(Math.random() *12) +1;
// }
//
// if (jewelValue2 === jewelValue1 || jewelValue2 === jewelValue3 || jewelValue2 === jewelValue4) {
//   jewelValue2 = Math.floor(Math.random() *12) +1;
// }
//
// if (jewelValue3 === jewelValue1 || jewelValue3 === jewelValue2 || jewelValue3 === jewelValue4) {
//   jewelValue3 = Math.floor(Math.random() *12) +1;
// }
//
// if (jewelValue4 === jewelValue1 || jewelValue4 === jewelValue2 || jewelValue4 === jewelValue3) {
//   jewelValue3 = Math.floor(Math.random() *12) +1;
// }


// do {
//     jewelValue1 = Math.floor(Math.random() * 12) +1;
// } while(jewelValue1 === jewelValue2 || jewelValue1 === jewelValue3 || jewelValue1 === jewelValue4);
//
// // run this loop until numberTwo is different than numberThree and numberOne
// do {
//     jewelValue2 = Math.floor(Math.random() * 12) +1;
// } while(jewelValue2 === jewelValue3 || jewelValue2 === jewelValue4);
//
// do {
//     jewelValue2 = Math.floor(Math.random() * 12) +1;
// } while(jewelValue3 === jewelValue4);
