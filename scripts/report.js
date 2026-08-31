import pets from "../data.json";

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.";
}

let lines = pets.map(summarize);
let report = lines.join("\n");

console.log(report);

let weights = pets.map(function (pet) {
  return pet.max_weight;
});

let totalWeight = 0;

weights.forEach(function (weight) {
  totalWeight = totalWeight + weight;
});

console.log(totalWeight);
console.log(pets[1].ratings.playfulness);
console.log(pets[1].ratings);

let playful = pets.filter(function (pet) {
  return pet.playfulness > 3;
});

let playfulLines = playful.map(summarize);

console.log(playfulLines.join("\n"));
console.log(pets.length);