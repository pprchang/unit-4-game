$(document).ready(function() {
  //variables
  var win = 0;
  var losses = 0;
  var total = 0;

  //generate random target number...number is between 19 thru 120
  var targetNumber = Math.floor(Math.random() * 102 + 19);

  //generate random number for each crystal....number is between 1 thru 12
  var crystalOne = Math.floor(Math.random() * 12 + 1);
  console.log(crystalOne);

  var crystalTwo = Math.floor(Math.random() * 12 + 1);
  console.log(crystalTwo);

  var crystalThree = Math.floor(Math.random() * 12 + 1);
  console.log(crystalThree);

  var crystalFour = Math.floor(Math.random() * 12 + 1);
  console.log(crystalFour);

  //display
  $('#wins-text').text(win);
  $('#losses-text').text(losses);
  $('#targetNumber').text(targetNumber);
  $('#total').text(total);

  //reset function
  function reset() {
    var targetNumber = Math.floor(Math.random() * 102 + 19);

    var crystalOne = Math.floor(Math.random() * 12 + 1);
    console.log(crystalOne);

    var crystalTwo = Math.floor(Math.random() * 12 + 1);
    console.log(crystalTwo);

    var crystalThree = Math.floor(Math.random() * 12 + 1);
    console.log(crystalThree);

    var crystalFour = Math.floor(Math.random() * 12 + 1);
    console.log(crystalFour);

    total = 0;

    $('#total').text(total);

    $('#targetNumber').text(targetNumber);
  }

  //increment win and display it
  function winner() {
    win++;
    $('#wins-text').text(win);
    reset();
  }

  //increment losses and display it
  function losser() {
    losses++;
    $('#losses-text').text(losses);
    reset();
  }

  //on click event for crystal
  $('#cryOne').on('click', function() {
    total = total + crystalOne;
    $('#total').text(total);

    if (total === targetNumber) {
      winner();
    } else if (total > targetNumber) {
      losser();
    } else {
      console.log();
    }
  });

  $('#cryTwo').on('click', function() {
    total = total + crystalTwo;
    $('#total').text(total);

    if (total == targetNumber) {
      winner();
    } else if (total > targetNumber) {
      losser();
    } else {
      console.log();
    }
  });

  $('#cryThree').on('click', function() {
    total = total + crystalThree;
    $('#total').text(total);

    if (total == targetNumber) {
      winner();
    } else if (total > targetNumber) {
      losser();
    } else {
      console.log();
    }
  });

  $('#cryFour').on('click', function() {
    total = total + crystalFour;
    $('#total').text(total);

    if (total == targetNumber) {
      winner();
    } else if (total > targetNumber) {
      losser();
    } else {
      console.log();
    }
  });
});
