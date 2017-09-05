function Simon(optionArray,problemArray, playerArray){
  this.optionArray = optionArray;
  this.problemArray = problemArray;
  this.playerArray = playerArray;
}

Simon.prototype.getRandomColor = function(optionArray) {
  var color = optionArray[Math.floor(Math.random()*optionArray.length)];
  return color;
}

Simon.prototype.createProblemArray = function(optionArray,problemArray) {
  var color = this.getRandomColor(optionArray);
  this.problemArray.push(color);
  return this.problemArray;
}

Simon.prototype.loopProblemArray = function(problemArray) {
  var x = document.getElementById('x');
  var i = 0;
      x.innerHTML = problemArray[i];
      if (++i < problemArray.length) {
          setTimeout(loop, 3000);  // call myself in 3 seconds time if required
      }
}

Simon.prototype.addToPlayerArray = function(playerArray,colorChoice) {
  playerArray.push(colorChoice)
  debugger;
  return playerArray;
}


// exports.simonModule = Simon;
