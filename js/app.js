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

var firstAndPike = {
  location: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCustomerPurchase: 6.3,
  cookiesEachHour: [],
  randomAmountOfCustomers: randomCookiesEachHour
};

var seaTac = {
  location: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCustomerPurchase: 1.2,
  cookiesEachHour: [],
  randomAmountOfCustomers: randomCookiesEachHour
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCustomerPurchase: 3.7,
  cookiesEachHour: [],
  randomAmountOfCustomers: randomCookiesEachHour
};

var capHill = {
  location: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCustomerPurchase: 2.3,
  cookiesEachHour: [],
  randomAmountOfCustomers: randomCookiesEachHour
};

var alki = {
  location: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCustomerPurchase: 4.6,
  cookiesEachHour: [],
  randomAmountOfCustomers: randomCookiesEachHour
};


firstAndPike.randomAmountOfCustomers();
var firstAndPikeDailyCookies = 0;
for(var i = 0; i < 16; i++){
  var firstAndPikeli = document.createElement('li');
  if(i < 15){
    firstAndPikeDailyCookies += firstAndPike.cookiesEachHour[i];
  }
  if (i === 15){
    var text = 'Total: ' + firstAndPikeDailyCookies;
    firstAndPikeli.innerText = text;
    document.getElementById('firstandpikesales').appendChild(firstAndPikeli);
  } else if(i < 6){
    firstAndPikeli.textContent = (i + 6) + 'am: ' + firstAndPike.cookiesEachHour[i] + ' cookies';
    document.getElementById('firstandpikesales').appendChild(firstAndPikeli);
  } else if (i - 6 === 0){
    firstAndPikeli.textContent = '12pm: ' + firstAndPike.cookiesEachHour[i] + ' cookies';
    document.getElementById('firstandpikesales').appendChild(firstAndPikeli);
  } else {
    firstAndPikeli.textContent = (i - 6) + 'pm: ' + firstAndPike.cookiesEachHour[i] + ' cookies';
    document.getElementById('firstandpikesales').appendChild(firstAndPikeli);
  }
}

seaTac.randomAmountOfCustomers();
var seaTacDailyCookies = 0;
for(var i = 0; i < 16; i++){
  var seaTacli = document.createElement('li');
  if(i < 15){
    seaTacDailyCookies += seaTac.cookiesEachHour[i];
  }
  if (i === 15){
    seaTacli.textContent = 'Total: ' + seaTacDailyCookies;
    document.getElementById('seatacsales').appendChild(seaTacli);
  } else if(i < 6){
    seaTacli.textContent = (i + 6) + 'am: ' + seaTac.cookiesEachHour[i] + ' cookies';
    document.getElementById('seatacsales').appendChild(seaTacli);
  } else if (i - 6 === 0){
    seaTacli.textContent = '12pm: ' + seaTac.cookiesEachHour[i] + ' cookies';
    document.getElementById('seatacsales').appendChild(seaTacli);
  } else {
    seaTacli.textContent = (i - 6) + 'pm: ' + seaTac.cookiesEachHour[i] + ' cookies';
    document.getElementById('seatacsales').appendChild(seaTacli);
  }
}

seattleCenter.randomAmountOfCustomers();
var centerDailyCookies = 0;
for(var i = 0; i < 16; i++){
  var seattleCenterli = document.createElement('li');
  if(i < 15){
    centerDailyCookies += seattleCenter.cookiesEachHour[i];
  }
  if(i === 15){
    seattleCenterli.textContent = 'Total: ' + centerDailyCookies;
    document.getElementById('centersales').appendChild(seattleCenterli);
  } else if(i < 6){
    console.log('i in this loop is' + i)
    seattleCenterli.textContent = (i + 6) + 'am: ' + seattleCenter.cookiesEachHour[i] + ' cookies';
    document.getElementById('centersales').appendChild(seattleCenterli);
  } else if (i - 6 === 0){
    seattleCenterli.textContent = '12pm: ' + seattleCenter.cookiesEachHour[i] + ' cookies';
    document.getElementById('centersales').appendChild(seattleCenterli);
  } else {
    seattleCenterli.textContent = (i - 6) + 'pm: ' + seattleCenter.cookiesEachHour[i] + ' cookies';
    document.getElementById('centersales').appendChild(seattleCenterli);
  }
}

capHill.randomAmountOfCustomers();
var hillDailyCookies = 0;
for(var i = 0; i < 16; i++){
  var capHillli = document.createElement('li');
  console.log(i)
  if(i < 15){
    hillDailyCookies += capHill.cookiesEachHour[i];
  }
  if(i === 15){
    capHillli.textContent = 'Total: ' + hillDailyCookies;
    document.getElementById('hillsales').appendChild(capHillli);
  } else if(i < 6){
    capHillli.textContent = (i + 6) + 'am: ' + capHill.cookiesEachHour[i] + ' cookies';
    document.getElementById('hillsales').appendChild(capHillli);
  } else if (i - 6 === 0){
    capHillli.textContent = '12pm: ' + capHill.cookiesEachHour[i] + ' cookies';
    document.getElementById('hillsales').appendChild(capHillli);
  } else {
    capHillli.textContent = (i - 6) + 'pm: ' + capHill.cookiesEachHour[i] + ' cookies';
    document.getElementById('hillsales').appendChild(capHillli);
  }
}

alki.randomAmountOfCustomers();
var alkiDailyCookies = 0;
for(var i = 0; i < 16; i++){
  var alkiLi = document.createElement('li');
  if (i < 15){
    alkiDailyCookies += alki.cookiesEachHour[i];
  }
  if(i === 15){
    alkiLi.textContent = 'Total: ' + alkiDailyCookies;
    document.getElementById('alkisales').appendChild(alkiLi);
  } else if(i < 6){
    alkiLi.textContent = (i + 6) + 'am: ' + alki.cookiesEachHour[i] + ' cookies';
    document.getElementById('alkisales').appendChild(alkiLi);
  } else if (i - 6 === 0){
    alkiLi.textContent = '12pm: ' + alki.cookiesEachHour[i] + ' cookies';
    document.getElementById('alkisales').appendChild(alkiLi);
  } else {
    alkiLi.textContent = (i - 6) + 'pm: ' + alki.cookiesEachHour[i] + ' cookies';
    document.getElementById('alkisales').appendChild(alkiLi);
  }
}