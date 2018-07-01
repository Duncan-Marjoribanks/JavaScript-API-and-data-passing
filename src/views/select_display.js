const PubSub = require('../helpers/pub_sub.js');

const SelectDisplay = function (element) {
  this.element = element;
}

SelectDisplay.prototype.initialize = function () {
  console.log(this.element);
  PubSub.subscribe('Select:Selected-card', (event) => {
    this.element.appendChild(event.detail);
  })

};



module.exports = SelectDisplay;
