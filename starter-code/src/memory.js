var MemoryGame = function (cards) {
  this.cards = this.shuffleCard(cards);
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed =0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  for(var i = cardsArr.length - 1; i > 0; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = cardsArr[i];
    cardsArr[i] = cardsArr[r];
    cardsArr[r] = tmp;
  }
  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  }
  else return false;
}

MemoryGame.prototype.finished = function () {
  return this.pairsGuessed > 0 && this.pairsGuessed === this.cards.length / 2;
};
