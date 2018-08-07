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


firstAndPike.randomAmountOfCustomers();
var firstAndPikeDailyCookies = 0;
for(var i = 0; i < 16; i++){
  var firstAndPiketd = document.createElement('td');
  if(i < 15){
    firstAndPikeDailyCookies += firstAndPike.cookiesEachHour[i];
  }
  if (i === 15){
    var text = 'Total: ' + firstAndPikeDailyCookies;
    firstAndPiketd.innerText = text;
    document.getElementById('firstandpikesales').appendChild(firstAndPiketd);
  } else if(i < 6){
    firstAndPiketd.textContent = (i + 6) + 'am: ' + firstAndPike.cookiesEachHour[i] + ' cookies';
    document.getElementById('firstandpikesales').appendChild(firstAndPiketd);
  } else if (i - 6 === 0){
    firstAndPiketd.textContent = '12pm: ' + firstAndPike.cookiesEachHour[i] + ' cookies';
    document.getElementById('firstandpikesales').appendChild(firstAndPiketd);
  } else {
    firstAndPiketd.textContent = (i - 6) + 'pm: ' + firstAndPike.cookiesEachHour[i] + ' cookies';
    document.getElementById('firstandpikesales').appendChild(firstAndPiketd);
  }
}

seaTac.randomAmountOfCustomers();
var seaTacDailyCookies = 0;
for(i = 0; i < 16; i++){
  var seaTactd = document.createElement('td');
  if(i < 15){
    seaTacDailyCookies += seaTac.cookiesEachHour[i];
  }
  if (i === 15){
    seaTactd.textContent = 'Total: ' + seaTacDailyCookies;
    document.getElementById('seatacsales').appendChild(seaTactd);
  } else if(i < 6){
    seaTactd.textContent = (i + 6) + 'am: ' + seaTac.cookiesEachHour[i] + ' cookies';
    document.getElementById('seatacsales').appendChild(seaTactd);
  } else if (i - 6 === 0){
    seaTactd.textContent = '12pm: ' + seaTac.cookiesEachHour[i] + ' cookies';
    document.getElementById('seatacsales').appendChild(seaTactd);
  } else {
    seaTactd.textContent = (i - 6) + 'pm: ' + seaTac.cookiesEachHour[i] + ' cookies';
    document.getElementById('seatacsales').appendChild(seaTactd);
  }
}

seattleCenter.randomAmountOfCustomers();
var centerDailyCookies = 0;
for(i = 0; i < 16; i++){
  var seattleCentertd = document.createElement('td');
  if(i < 15){
    centerDailyCookies += seattleCenter.cookiesEachHour[i];
  }
  if(i === 15){
    seattleCentertd.textContent = 'Total: ' + centerDailyCookies;
    document.getElementById('centersales').appendChild(seattleCentertd);
  } else if(i < 6){
    seattleCentertd.textContent = (i + 6) + 'am: ' + seattleCenter.cookiesEachHour[i] + ' cookies';
    document.getElementById('centersales').appendChild(seattleCentertd);
  } else if (i - 6 === 0){
    seattleCentertd.textContent = '12pm: ' + seattleCenter.cookiesEachHour[i] + ' cookies';
    document.getElementById('centersales').appendChild(seattleCentertd);
  } else {
    seattleCentertd.textContent = (i - 6) + 'pm: ' + seattleCenter.cookiesEachHour[i] + ' cookies';
    document.getElementById('centersales').appendChild(seattleCentertd);
  }
}

capHill.randomAmountOfCustomers();
var hillDailyCookies = 0;
for(i = 0; i < 16; i++){
  var capHilltd = document.createElement('td');
  if(i < 15){
    hillDailyCookies += capHill.cookiesEachHour[i];
  }
  if(i === 15){
    capHilltd.textContent = 'Total: ' + hillDailyCookies;
    document.getElementById('hillsales').appendChild(capHilltd);
  } else if(i < 6){
    capHilltd.textContent = (i + 6) + 'am: ' + capHill.cookiesEachHour[i] + ' cookies';
    document.getElementById('hillsales').appendChild(capHilltd);
  } else if (i - 6 === 0){
    capHilltd.textContent = '12pm: ' + capHill.cookiesEachHour[i] + ' cookies';
    document.getElementById('hillsales').appendChild(capHilltd);
  } else {
    capHilltd.textContent = (i - 6) + 'pm: ' + capHill.cookiesEachHour[i] + ' cookies';
    document.getElementById('hillsales').appendChild(capHilltd);
  }
}

alki.randomAmountOfCustomers();
var alkiDailyCookies = 0;
for(i = 0; i < 16; i++){
  var alkiTd = document.createElement('td');
  if (i < 15){
    alkiDailyCookies += alki.cookiesEachHour[i];
  }
  if(i === 15){
    alkiTd.textContent = 'Total: ' + alkiDailyCookies;
    document.getElementById('alkisales').appendChild(alkiTd);
  } else if(i < 6){
    alkiTd.textContent = (i + 6) + 'am: ' + alki.cookiesEachHour[i] + ' cookies';
    document.getElementById('alkisales').appendChild(alkiTd);
  } else if (i - 6 === 0){
    alkiTd.textContent = '12pm: ' + alki.cookiesEachHour[i] + ' cookies';
    document.getElementById('alkisales').appendChild(alkiTd);
  } else {
    alkiTd.textContent = (i - 6) + 'pm: ' + alki.cookiesEachHour[i] + ' cookies';
    document.getElementById('alkisales').appendChild(alkiTd);
  }
}