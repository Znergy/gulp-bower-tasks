// this allows us to get access to the Calculator class and it's methods
// basically packages in Android or import in Java..
// we declare a new instance of the Calculator class and are able to reference it below
var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  console.log('Running browserify again to see what happens!');
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});
