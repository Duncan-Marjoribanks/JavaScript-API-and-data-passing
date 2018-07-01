const Cards = require('./models/cards.js');
const SelectView = require('./views/select.js');
const ListView = require('./views/list_view.js');
const SelectDisplay = require('./views/select_display.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');


const menuContainer = document.querySelector('#container');
const cardsContainer = document.createElement('select');
const cardDisplay = document.createElement('div');
menuContainer.appendChild(cardsContainer);
menuContainer.appendChild(cardDisplay);
console.log(cardsContainer);
const selectView = new SelectView(cardsContainer);
selectView.initialize();

const selectDisplay = new SelectDisplay(cardDisplay);
selectDisplay.initialize();

// this will be used in the listView if I get menus working
// const listView = new ListView(menuContainer);
// listView.initialize();


const cardsData = new Cards();
cardsData.getData();

});
