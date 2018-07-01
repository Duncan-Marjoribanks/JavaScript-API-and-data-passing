const DataSorter = require('../helpers/data_sorter');
const PubSub = require('../helpers/pub_sub.js');
const CardView = require('./card_view.js');

const ListView = function(element) {
  this.element = element;
}

// if this file were to be used, it would be implemented in a situation where I had the time to
// get menu's populating further menus working

ListView.prototype.initialize = function () {
  // console.log(this.element);
  PubSub.subscribe('Cards:Data-ready', (event) => {
    console.log(event);
    const cardData = event.detail.data;
    console.log(cardData);

    const dataSorter = new DataSorter();
    const criminalCards = dataSorter.sortByFaction(cardData, "criminal");
    const criminalPrograms = dataSorter.sortByType(criminalCards, "program");
    const criminalProgramsCost2 = dataSorter.sortByCost(criminalPrograms, "3");
    this.populate(criminalProgramsCost2);

  })
};

ListView.prototype.populate = function (data) {
  for (card of data) {
    const cardView = new CardView(card);
    const cardElement = cardView.initialize()
    this.element.appendChild(cardElement);
  }
};

module.exports = ListView;
