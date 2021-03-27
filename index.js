'use strict';

const todayDate = dayjs();
console.log(`Dnesni datum : ${todayDate}`);
const dayOfTheWeek = todayDate.day();
const dayOfTheMonth = todayDate.date();
console.log(`Den : ${dayOfTheMonth} ${dayOfTheWeek}`);

const msgElm = document.querySelector('#msg');

if (dayOfTheWeek === 5 && dayOfTheMonth === 13) {
  console.log(`Dnes je patek trinacteho`);
  msgElm.textContent = 'Dnes je patek trinacteho';
} else {
  console.log(`Dnes neni patek trinacteho`);
  msgElm.textContent = 'Dnes neni patek trinacteho';
}
