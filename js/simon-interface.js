// var Simon = require('./../js/simon.js').simonModule;



$(document).ready(function() {
  $('#newGame').click(function(event) {
    event.preventDefault();
    var optionArray = ["red","yellow","green","blue"];
    var problemArray = [];
    var playerArray = [];
    var simpleSimon = new Simon(optionArray,problemArray,playerArray);
    debugger;



    // $('#generateColor').click(function(event) {
    //   event.preventDefault();
      simpleSimon.createProblemArray(optionArray,problemArray);
      simpleSimon.loopProblemArray(problemArray);

      $('#pickGreen').click(function(event) {
        var colorChoice = "green";
        simpleSimon.addToPlayerArray(playerArray, colorChoice);
        var problemArray = simon.problemArray
        debugger;
      });
      $('#pickRed').click(function(event) {
        var colorChoice = "red";
        simpleSimon.addToPlayerArray(playerArray, colorChoice);
        var problemArray = simon.problemArray
        debugger;
      });
      $('#pickYellow').click(function(event) {
        var colorChoice = "yellow";
        simpleSimon.addToPlayerArray(playerArray, colorChoice);
        var problemArray = simon.problemArray
        debugger;
      });
      $('#pickBlue').click(function(event) {
        var colorChoice = "blue";
        simpleSimon.addToPlayerArray(playerArray, colorChoice);
        var problemArray = simon.problemArray
        debugger;
      });


  });
});
