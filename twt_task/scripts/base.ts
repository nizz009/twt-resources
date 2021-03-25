class game {
 myCards = document.getElementById('container');
 resultsArray = [];
 counter = 0;
 text = document.getElementById('text');
 seconds = 0; 
 tens = 0; 
 appendTens = document.getElementById("tens");
 appendSeconds = document.getElementById("seconds");
 Interval: number ;
 images = 
 [
  '1', 
  '2', 
  '3', 
  '4', 
  '5'
 ];

  clone = g.images.slice(0); // duplicate array
  cards = g.images.concat(g.clone); // merge to arrays 

  // Shufffel function
  shuffle(o: string[]){
  for(var j: number, x: any, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  return o;
  }

  startTimer () {
    this.tens++; 
      
    if(g.tens < 9){
      this.appendTens.innerHTML = "0" + this.tens;
    }
      
    if (g.tens > 9){
      this.appendTens.innerHTML = "0" + this.tens;
        
    } 
      
    if (this.tens > 99) {
      this.seconds++;
      this.appendSeconds.innerHTML = "0" + this.seconds;
      this.tens = 0;
      this.appendTens.innerHTML = "0" + 0;
    }
      
    if (this.seconds > 9){
      this.appendSeconds.innerHTML = "0" +this.seconds;
    }
    
  }
   
}
let g=new game;
g.shuffle(g.cards);

for (var i = 0; i < g.cards.length; i++) {
  var card= document.createElement('div');
  card.dataset.item = g.cards[i];
  card.dataset.view = "card";
  g.myCards.appendChild(card);
     
  card.onclick = function () {
   
    if (this.className!= 'flipped' && this.className!= 'correct'){
        this.className = 'flipped';
        var result = this.dataset.item;
        g.resultsArray.push(result);
        clearInterval(g.Interval);
        g.Interval = setInterval(g.startTimer, 10);
    }
  
    if (g.resultsArray.length > 1) {

      if (g.resultsArray[0] === g.resultsArray[1]) {
        check("correct");
        g.counter ++;
        win();
        g.resultsArray = [];
      } else {
        check("reverse");
        g.resultsArray = [];
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

  if(g.counter === 5) {
    clearInterval(g.Interval);
    g.text.innerHTML = "Your time was " + g.seconds + ":" + g.tens;
  } 
  
}
