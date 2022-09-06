const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(forSum) {
	let sum = 0;
  for (i in forSum) {
    sum += forSum[i];
  };
  return sum;
};

const multiply = function(forProduct) {
  let product = forProduct[0] * forProduct[1];
  if (forProduct.length > 2) {
    for (i of Array(forProduct.length - 2).keys()) {
      product = product * forProduct[i+2];
    };
  };
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0 || a === 1) {
    return 1;
  } else {
    let answer = 1;
    for (i of Array(a).keys()) {
      answer = answer * (i+1);
    };
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
