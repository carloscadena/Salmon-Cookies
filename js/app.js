'use strict';

function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function randomCookiesEachHour(){
  for(var i = 6; i < 21; i++){
    var customersThisHour = getRandomNum(this.minCustomers, this.maxCustomers);
    var cookiesSold = parseInt(customersThisHour * this.avgCustomerPurchase);
    this.cookiesEachHour.push(cookiesSold);
  }
  return this.cookiesEachHour;
}

function Store(location, minCustomers, maxCustomers, avgCustomerPurchase, cookiesEachHour = []){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCustomerPurchase = avgCustomerPurchase;
  this.cookiesEachHour = cookiesEachHour;
}
Store.prototype.randomAmountOfCustomers = randomCookiesEachHour;

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function addInfo(store){
  var newRow = document.createElement('tr');
  document.getElementById('cookietable').appendChild(newRow);
  var dailyCookies = 0;
  for(var i = 0; i < 16; i++){
    var tableData = document.createElement('td');
    if(i === 0) {
      tableData.textContent = store.location;
      newRow.appendChild(tableData);
    }
    if(i < 15){
      hourlyTotals[i] += store.cookiesEachHour[i];
      tableData = document.createElement('td');
      dailyCookies += store.cookiesEachHour[i];
      tableData.textContent = store.cookiesEachHour[i];
      newRow.appendChild(tableData);
    }
    if (i >= 15){
      tableData.textContent = dailyCookies;
      newRow.appendChild(tableData);
    }
  }
}

firstAndPike.randomAmountOfCustomers();
seaTac.randomAmountOfCustomers();
seattleCenter.randomAmountOfCustomers();
capHill.randomAmountOfCustomers();
alki.randomAmountOfCustomers();
addInfo(firstAndPike);
addInfo(seaTac);
addInfo(seattleCenter);
addInfo(capHill);
addInfo(alki);

function calcHourlyTotals(){
  document.getElementById('cookietable').deleteTFoot();
  var newTfoot = document.createElement('tfoot');
  document.getElementById('cookietable').appendChild(newTfoot);
  for(var i = 0; i < 16; i++){
    var tableData = document.createElement('td');
    if(i === 0) {
      tableData.textContent = 'Total';
      newTfoot.appendChild(tableData);
    }
    if(i < 15){
      tableData = document.createElement('td');
      tableData.textContent = hourlyTotals[i];
      newTfoot.appendChild(tableData);
    }
    if (i >= 15){
      tableData.textContent = hourlyTotals.reduce((a, b) => a + b, 0);
      newTfoot.appendChild(tableData);
    }
  }

}
calcHourlyTotals();

var formElement = document.getElementById('newstoreform');
formElement.addEventListener('submit', function(event){
  event.preventDefault();
  var newStore = new Store(event.target.store.value, parseInt(event.target.mincustomers.value), parseInt(event.target.maxcustomers.value), parseFloat(event.target.avgpurchase.value));
  newStore.randomAmountOfCustomers();
  addInfo(newStore);
  calcHourlyTotals();
  document.getElementById('newstoreform').reset();
});
