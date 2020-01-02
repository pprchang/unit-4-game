$(document).ready(function() {
  //variables
  var win = 0;
  var losses = 0;
  var counter = 0;
  //generate random target number...number is between 19 thru 120
  var targetNumber = Math.floor(Math.random() * 102 + 19);

  //display
  $('#number-to-guess').text(targetNumber);
  $('#wins-text').text(win);
  $('#losses-text').text(losses);

  //generate random number for each crystal....number is between 1 thru 12
  var crystalOne = Math.floor(Math.random() * 12 + 1);
  console.log(crystalOne);

  var crystalTwo = Math.floor(Math.random() * 12 + 1);
  console.log(crystalTwo);

  var crystalThree = Math.floor(Math.random() * 12 + 1);
  console.log(crystalThree);

  var crystalFour = Math.floor(Math.random() * 12 + 1);
  console.log(crystalFour);
});
