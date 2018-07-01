const DataSorter = require('../helpers/data_sorter');
const PubSub = require('../helpers/pub_sub.js');
const CardView = require('./card_view.js');

const SelectView = function(element) {
  this.element = element;
}

SelectView.prototype.initialize = function () {
  // console.log(this.element);
  PubSub.subscribe('Cards:Data-ready', (event) => {
    // console.log(event);
    const cardData = event.detail.data;
    // console.log(cardData);
    this.createCardsMenu(cardData);
    this.element.addEventListener('change', (evt) => {
      const selectedCardIndex = evt.target.value;
      const selectedCard = cardData[selectedCardIndex];
      // console.log(selectedCard);
      const cardDisplay = new CardView(selectedCard);
      const cardElement = cardDisplay.initialize()
      // console.log(cardElement);
      PubSub.publish('Select:Selected-card', cardElement);
    });
  })
};

SelectView.prototype.createCardsMenu = function (data) {
  const menu = document.createElement('select')
  data.forEach((item, index) => {
    const option = document.createElement('option');
    option.textContent = item.title;
    option.value = index;
    this.element.appendChild(option);
  });
};


module.exports = SelectView;
