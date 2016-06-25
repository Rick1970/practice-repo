// business logic
var myFunction = function () {
  // this is the work that the function performs comes in from ()above.
};
// example =
var add = function (number1, number2){
  return number1 + number2;
};
// use add keyword to call the function
// input #s that come from input come in as string; convert to number with
// .parseInt(); string ---> #
// .toString(); # ---> string

// practice use of function by taking code out of comments
//
// var number1 = parseInt(prompt("Enter a number"));
// var number2 = parseInt(prompt("Enter another number"))
// alert (add(number1, number2));
var newInput = ""










// user interface
$(document).ready(function(){
  // this loads the page before scripts run
  $("form#get-info").submit(function(event) {
    // this links the form input to the submit button
    newInput = $("input#input1").val();
        // this collects the input and adds the value to the variable
  $("#output").empty().append(newInput);
  // this will append the id indicated in the html to display

    event.preventDefault();




  });
});
