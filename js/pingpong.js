function Calculator(skinName) {
  this.skin = skinName;
}

// just a method of Calculator class
Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};
// 'exports' is provided by Node and lets us export things from one file and bring them into another.
// A module is a group of JavaScript functions and data that comprises some sort of functionality.
// calculatorModule just represents the Calculator class and the pingPong method
exports.calculatorModule = Calculator;
