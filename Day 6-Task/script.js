let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
console.log(xhr);
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);

  console.log(
    `-----------------COUNTRIES FROM ASIA CONTINENT-----------------`
  );
  // a)Get all the countries from Asia continent /region using Filter function
  data.filter(function (value, index) {
    if (value.continents[0] === "Asia") {
      console.log(
        `Form index ${index}, This are all the countries from "${value.continents}" continent ${value.name.common} and this is the region "${value.region}".`
      );
    }
  });

  console.log(`-----------------POPULATION LESS THAN 2 LAKHS-----------------`);
  // b) Get all the countries with a population of less than 2 lakhs using Filter function

  data.filter(function (value, index) {
    if (value.population < 200000) {
      console.log(
        `From index ${index}, The given countries are less than 2 lakhs population countries "${value.name.common}" and the population is ${value.population}.`
      );
    }
  });

  console.log(`-----------------name,capital,flag-----------------`);
  // C) Print the following details name, capital, flag, using forEach function
  data.forEach((value) => {
    // console.log(value.name);
    // console.log(value.flag);
    // console.log(value.capital);
    console.log(value.name);
    console.log(`
    The flag is ${value.flag}
    The capital is ${value.capital}
    `);
  });

  console.log(`-----------------TOTAL POPULATION-----------------`);
  // D) Print the total population of countries using reduce function
  let total = data.reduce(function (accValue, value) {
    let totalPopulation = accValue + value.population;
    return totalPopulation;
  }, 0);
  console.log(`The total population is ${total}`);

  //OUTPUT FOR TOTAL POPULATION

  //  The total population is 7777721563.

  console.log(`----------------COUNTRY THAT USES US DOLLERS------------------`);
  // Print the country that uses US dollars as currency.
  data.filter(function (value, index, accValue) {
    if (accValue[index].currencies.USD !== undefined) {
      if (accValue[index].currencies.USD.name === "United States dollar") {
        console.log(
          `This is the country that uses the US Dollers "${value.name.common}"`
        );
      }
    }
  });

  //output

  //   This is the country that uses the US Dollers "American Samoa"
  // script.js:66 This is the country that uses the US Dollers "Turks and Caicos Islands"
  // script.js:66 This is the country that uses the US Dollers "British Indian Ocean Territory"
  // script.js:66 This is the country that uses the US Dollers "United States Minor Outlying Islands"
  // script.js:66 This is the country that uses the US Dollers "United States Virgin Islands"
  // script.js:66 This is the country that uses the US Dollers "Caribbean Netherlands"
  // script.js:66 This is the country that uses the US Dollers "Panama"
  // script.js:66 This is the country that uses the US Dollers "Palau"
};
