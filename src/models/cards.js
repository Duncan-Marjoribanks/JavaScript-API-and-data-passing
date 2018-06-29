const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Cards = function () {
this.data = [];
}

Cards.prototype.getData = function (url) {
  const requestHelper = new RequestHelper('https://netrunnerdb.com/api/2.0/public/cards')

requestHelper.get((data) => {
  PubSub.publish('Cards:Data-ready', data);
  console.log(data);
});
};

module.exports = Cards;
