'use strict';
console.log('js is linked');

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


function addInfo(store, htmlid){
  var dailyCookies = 0;
  for(var i = 0; i < 16; i++){
    var tableData = document.createElement('td');
    if(i === 0) {
      tableData.textContent = store.location;
      document.getElementById(htmlid).appendChild(tableData);
    }
    if(i < 15){
      tableData = document.createElement('td');
      dailyCookies += store.cookiesEachHour[i];
      document.getElementById(htmlid).appendChild(tableData);
      tableData.textContent = store.cookiesEachHour[i];
    }
    if (i >= 15){
      tableData.textContent = dailyCookies;
      document.getElementById(htmlid).appendChild(tableData);
    }
  }
}


firstAndPike.randomAmountOfCustomers();
addInfo(firstAndPike, 'firstandpikesales');
seaTac.randomAmountOfCustomers();
addInfo(seaTac, 'seatacsales');
seattleCenter.randomAmountOfCustomers();
addInfo(seattleCenter, 'centersales');
capHill.randomAmountOfCustomers();
addInfo(capHill, 'hillsales');
alki.randomAmountOfCustomers();
addInfo(alki, 'alkisales');