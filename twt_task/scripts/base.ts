var myCards = document.getElementById('container');
var resultsArray: any[] = [];
var counter = 0;
var text = document.getElementById('text');
var seconds = 0; 
var tens = 0; 
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Interval: number ;
var images = 
[
  '1', 
  '2', 
  '3', 
  '4', 
  '5'
];

var clone = images.slice(0); // duplicate array
var cards:any = images.concat(clone); // merge to arrays 

// Shufffel function
function shuffle(o: string[]){
  for(var j: number, x: any, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  return o;
}
shuffle(cards);

for (var i = 0; i < cards.length; i++) {
  cards = document.createElement('div');
  cards.dataset.item = cards[i];
  cards.dataset.view = "card";
  myCards.appendChild(cards);
     
  cards.onclick = function () {
   
    if (this.className != 'flipped' && this.className != 'correct'){
        this.className = 'flipped';
        var result = this.dataset.item;
        resultsArray.push(result);
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
  
    if (resultsArray.length > 1) {

      if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter ++;
        win();
        resultsArray = [];
      } else {
        check("reverse");
        resultsArray = [];
      }
      
    }
    
  }
   
};


var check = function(className: string) {
  
  var x = document.getElementsByClassName("flipped");
  setTimeout(function() {

    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }
     
  },500);
   
}

var win = function () {

  if(counter === 5) {
    clearInterval(Interval);
    text.innerHTML = "Your time was " + seconds + ":" + tens;
  } 
  
}
    
function startTimer () {
  tens++; 
    
  if(tens < 9){
    appendTens.innerHTML = "0" + tens;
  }
    
  if (tens > 9){
    appendTens.innerHTML = "0" + tens;
      
  } 
    
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
    
  if (seconds > 9){
    appendSeconds.innerHTML = "0" + seconds;
  }
  
}