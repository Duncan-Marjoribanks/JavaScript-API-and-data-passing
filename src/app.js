const Cards = require('./models/cards.js');
const SelectView = require('./views/select.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');


const cardsContainer = document.querySelector('#container');
console.log(cardsContainer);
const selectView = new SelectView(cardsContainer);
selectView.initialize();



const cardsData = new Cards();
cardsData.getData();


});
