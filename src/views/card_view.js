const CardView = function (object) {
this.card = object;
}

CardView.prototype.initialize = function () {

  const cardElement = document.createElement('ul');

  const cardName = document.createElement('li');
  cardName.textContent = this.card.title;
  cardElement.appendChild(cardName);

  const cardType = document.createElement('li');
  cardType.textContent = this.card.type_code;
  cardElement.appendChild(cardType);

  const cardFaction = document.createElement('li');
  cardFaction.textContent = this.card.faction_code;
  cardElement.appendChild(cardFaction);

  const cardPack = document.createElement('li');
  cardPack.textContent = this.card.text;
  cardElement.appendChild(cardPack);

  const cardImage = document.createElement('img');
  cardImage.src = `https://netrunnerdb.com/card_image/${this.card.code}.png`;
  cardElement.appendChild(cardImage);

  console.log(cardElement);

  return cardElement;
};



module.exports = CardView;
