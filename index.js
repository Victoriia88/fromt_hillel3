class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(person) {
    this.residents.push(person);
  }
}

class Building {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("Cannot add more apartments. Maximum capacity reached.");
    }
  }
}

// Демонстрація
const person1 = new Person("Igor", "male");
const person2 = new Person("Alla", "female");

const apartment1 = new Apartment();
apartment1.addResident(person1);

const apartment2 = new Apartment();
apartment2.addResident(person2);

const building = new Building(2);
building.addApartment(apartment1);
building.addApartment(apartment2);
