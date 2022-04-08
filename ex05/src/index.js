var myPetsArray = [
  {
    animalType: "Dog",
    name: "Pujdo",
  },
  {
    animalType: "Cat",
    name: "Maca",
  },
  {
    animalType: "Bird",
    name: "Tweety",
  },
];

function myPetsFunction(pets) {
  return pets.name;
}

console.log(myPetsFunction(myPetsArray[0]));
console.log(myPetsFunction(myPetsArray[1]));
console.log(myPetsFunction(myPetsArray[2]));
module.exports = myPetsFunction;
module.exports = myPetsArray;
