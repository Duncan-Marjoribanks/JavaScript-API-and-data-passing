const DataSorter = require('../helpers/data_sorter');
const PubSub = require('../helpers/pub_sub.js');
const CardView = require('./card_view.js');

const SelectView = function(element) {
  this.element = element;
}

const dataSorter = new DataSorter();

SelectView.prototype.initialize = function () {
  console.log(this.element);
  PubSub.subscribe('Cards:Data-ready', (event) => {
    console.log(event);
    const cardData = event.detail.data;
    console.log(cardData);

    this.populate(dataSorter.sortByFaction(cardData, "criminal"));
  })
};


SelectView.prototype.populate = function (data) {
  for (card of data) {
    const cardView = new CardView(card);
    const cardElement = cardView.initialize()
    this.element.appendChild(cardElement);
  }
};




module.exports = SelectView;
