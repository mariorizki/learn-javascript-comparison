// Using Conditionals
function comparison1(numberA, numberB) {
  if (numberA > numberB) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

comparison1(1, 2);

// Using Multiple Conditionals
function comparison2(numberA, numberB) {
  if (numberA > numberB) {
    return console.log('First number larger than second number');
  } else if (numberA < numberB) {
    return console.log('First number less than second number');
  } else {
    return console.log('First number has same number with second number');
  }
}

comparison2(2, 2);

// Using Tenary Operator
function comparison3(numberA, numberB) {
  return numberA > numberB ? console.log(true) : console.log(false);
}

comparison3(1, 2);

// Using Range & Logical Operators
function comparison4(score) {
  if (score >= 80) {
    return console.log('Great!');
  } else {
    return console.log('Not Bad!');
  }
}

comparison4(80);

function comparison5(name, age, gender) {
  if (age <= 20 && gender === 'female') {
    return console.log(`Hello ${name}, you got 20% discount!`);
  } else {
    return console.log(`Hello ${name}, you got no discount!`);
  }
}

comparison5('Maria', 19, 'female');
