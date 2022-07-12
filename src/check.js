import { hotel } from './index.js';

hotel.checkInGuest('Mijku', 'Muk', 40);

console.log(hotel.getLength());
console.log(hotel.bankAccount);

console.log(hotel.guests);
//количество гостей
console.log(hotel.getLength());
//количество свободных мест
console.log(hotel.getActualFreePlace());
//заселяем гостей

console.log(hotel);
