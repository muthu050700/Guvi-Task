//1) Class - Movie

class MovieRating {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    if (rating === undefined) {
      this.rating = "PG";
    } else {
      this.rating = rating;
    }
  }
  getPG() {
    console.log([this.title, this.studio, this.rating]);
    console.log(
      `The Movie name is ${this.title} the studio for the movie is ${this.studio},and the give rating is ${this.rating}.`
    );
  }
}

const movieRating = new MovieRating(
  "Casino Royale",
  "Eon Productions",
  "PG­13"
);
movieRating.getPG();

//2) Circle

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
    this.PI = 3.14;
  }
  getRadius() {
    console.log(`The radius of the Circle is ${this.radius}`);
  }
  setRadius() {
    console.log(`The double of the circle is ${this.radius * 2}`);
  }
  getColor() {
    console.log(`The color of the circle is ${this.color}`);
  }
  setColor() {
    console.log(`The circle color should be in ${this.color}`);
  }
  toString() {
    console.log(
      `The radius of the circle is ${this.radius * 2} and the color is ${
        this.color
      }.`
    );
  }
  getArea() {
    console.log(`The area of the circle is ${this.PI * this.radius * 2}`);
  }
  getCircumference() {
    console.log(
      `The circumference of the circle is ${2 * this.PI * this.radius * 2}`
    );
  }
}
const circle = new Circle(1.0, "red");
circle.getRadius();
circle.setRadius();
circle.getColor();
circle.setColor();
circle.toString();
circle.getArea();
circle.getCircumference();

//3)Write a “person” class to hold all the details.
class Person {
  constructor(name, age, DOB, Address, place, country, state, qualification) {
    this.name = name;
    this.age = age;
    this.DOB = DOB;
    this.Address = Address;
    this.country = country;
    this.state = state;
    this.place = place;
    this.qualification = qualification;
  }
  getData() {
    console.log(`
       Name    : ${this.name}
       DOB     : ${this.DOB}
       Age     : ${this.age}
       Address : ${this.Address}
       Place   : ${this.place}
       country : ${this.country}
       state   : ${this.state}
       qualification : ${this.qualification}
       `);
  }
}

class AdditionalInformOfPerson extends Person {
  constructor(
    name,
    age,
    DOB,
    Address,
    place,
    country,
    state,
    qualification,
    CollageName,
    CollageGrade,
    CurrentStatus
  ) {
    super(name, age, DOB, Address, place, country, state, qualification);
    this.CollageName = CollageName;
    this.CollageGrade = CollageGrade;
    this.CurrentStatus = CurrentStatus;
  }
  getDataAdd() {
    console.log(`
       Name    : ${this.name}
       DOB     : ${this.DOB}
       Age     : ${this.age}
       Address : ${this.Address}
       Place   : ${this.place}
       country : ${this.country}
       state   : ${this.state}
       qualification : ${this.qualification}
       collageName : ${this.CollageName}
       collageGrade : ${this.CollageGrade}
       currentStatus : ${this.CurrentStatus}      `);
  }
}
const person = new AdditionalInformOfPerson(
  "MuthuKumaran",
  "05/07/2000",
  23,
  "No 3 Rajaeshwari Nagar Putlur",
  "Thiruvallur",
  "India",
  "TamilNadu",
  "B.E.",
  "Rajalakchmi Institute Of Tech",
  "7.9",
  "Working"
);
console.log(person);
person.getDataAdd();

//4) Uber Price
class CustomerInform {
  constructor(
    NameOfTheCustomer,
    TotalMembers,
    PickUpLocation,
    DropLocation,
    BookingMobileNo
  ) {
    this.NameOfTheCustomer = NameOfTheCustomer;
    this.TotalMembers = TotalMembers;
    this.PickUpLocation = PickUpLocation;
    this.DropLocation = DropLocation;
    this.BookingMobileNo = BookingMobileNo;
  }
  getDetailsFromCustomer() {
    console.log(`
    The Name of the Customer is ${this.NameOfTheCustomer}.
    The Total Members going to Travel ${this.TotalMembers}.
    The Pickup point is ${this.PickUpLocation}.
    The Drop Location is ${this.DropLocation}.
    The Mobile Number of customer is ${this.BookingMobileNo}.`);
  }
}

class UberPrice extends CustomerInform {
  constructor(
    NameOfTheCustomer,
    TotalMembers,
    PickUpLocation,
    DropLocation,
    BookingMobileNo,
    TotalKiloMeter,
    KiloMeterPerHour,
    totalAmount
  ) {
    super(
      NameOfTheCustomer,
      TotalMembers,
      PickUpLocation,
      DropLocation,
      BookingMobileNo
    );
    this.TotalKiloMeter = 60;
    this.KiloMeterPerHour = 60;
    this.totalAmount = this.TotalKiloMeter * this.KiloMeterPerHour;
  }
  getPriceDetails() {
    console.log(` 
    The Total kilometer is ${this.TotalKiloMeter}
    The rate per Kilometer is ${this.KiloMeterPerHour}
    The Total Amount is ${this.totalAmount}`);
  }
}
const customerInform = new UberPrice(
  "MuthuKumaran",
  4,
  "Thiruvallur",
  "Siruseri",
  "1234567891"
);
customerInform.getDetailsFromCustomer();
customerInform.getPriceDetails();
