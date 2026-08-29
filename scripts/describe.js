import pets from "../data.json";
console.log("Hello World");

function saylength(size) {
    console.log("This cat measures " + size + ".");
}

function describe(pet) {
    console.log(pet.name + " comes from " + pet.origin + ".");
}

saylength("12 to 16 inches");
saylength("15 to 20 inches");
saylength("30 to 40 inches");

describe(pets[0]);
describe(pets[1]);
describe(pets[2]);

function sayOrigin(origin) {
    console.log("This cat comes from " + origin + ".");
}

sayOrigin("Ethiopia");
sayOrigin("Thailand");
sayOrigin("United States");

function greet(name, breed) {
    console.log("Welcome " + name + ", you have a " + breed + ".");
}

greet("Matthew", "Siamese");
greet("Robert", "Maine Coon");
greet("Abyssinian", "Matthew");