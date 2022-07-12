export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {},
  getLength() {
    return Object.keys(this.guests).length;
  },
  getActualFreePlace() {
    return this.quantityOfPlaces - this.getLength();
  },

  checkInGuest(firstName, lastName, money) {
    function Guest(firstName, lastName, money) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.money = money - hotel.priceByPlace;
    }

    if (money < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    } else if (this.getActualFreePlace() <= 0) {
      return 'Sorry, we have not free spaces';
    }

    this.bankAccount = this.bankAccount + this.priceByPlace;
    return (this.guests[this.getLength()] = new Guest(
      firstName,
      lastName,
      money
    ));
  },
};
