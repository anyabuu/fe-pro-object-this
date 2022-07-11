export const hotel = {
    quantityOfPlaces: 30,
    priceByPlace: 20,
    bankAccount: 0,
    guests: {},
    getLength() {
        return (Object.keys(this.guests)).length
    },
    getActualFreePlace() {
        return this.quantityOfPlaces - this.getLength()
    },

    checkInGuest(firstName, lastName, money) {

        let newGuest = {
                    firstName,
                    lastName,
                    money
        }

        if (this.getActualFreePlace() <= 0){
            return 'Sorry, we have not free spaces'
        } else if (newGuest.money < this.priceByPlace) {
            return 'Sorry, you have not enough money'
        } else {
            newGuest.money = money - hotel.priceByPlace
            this.bankAccount =  this.bankAccount + this.priceByPlace;

            let newGuestId = Object.keys(this.guests).length + 1

            this.guests = Object.assign(this.guests, {[newGuestId]:newGuest})

        }

    }


};

