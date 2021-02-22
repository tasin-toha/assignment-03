// https://github.com/tasin-toha/assignment-03

function kilometerToMeter(kilometer) {
  return kilometer * 1000;
}

function budgetCalculator(clock, phone, laptop) {
  if (clock >= 0 && phone >= 0 && laptop >= 0) {
    return clock * 50 + phone * 100 + laptop * 500;
  } else {
    return "Negative quantities are not accepted.";
  }
}

function hotelCost(day) {
  var taka = 0;
  if (day >= 0 && day <= 10) {
    taka = day * 100;
  } else if (day >= 11 && day <= 20) {
    taka = 1000 + (day - 10) * 80;
  } else if (day >= 21) {
    taka = 1800 + (day - 20) * 50;
  } else {
    taka = "Negative Days are invalid.";
  }
  return taka;
}

function megaFriend(friends) {
  var biggestName = friends[0];
  for (var i = 1; i < friends.length; i++) {
    if (biggestName.length < friends[i].length) {
      biggestName = friends[i];
    }
  }
  return biggestName;
}
