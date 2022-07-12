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
  paidPerPlace() {
    this.bankAccount += this.priceByPlace;
  },

  checkInGuest(firstName, lastName, money) {
    function Guest(firstName, lastName, money) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.money = money - hotel.priceByPlace;
      console.log(firstName)
    }

    if (money < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    } else if (this.getActualFreePlace() <= 0) {
      return 'Sorry, we have not free spaces';
    }

    this.paidPerPlace();

    return (this.guests[this.getLength()] = new Guest(
      firstName,
      lastName,
      money
    ));
  },
};
