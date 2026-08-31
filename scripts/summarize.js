import pets from "../data.json";

function summarize(pet) {
    return pet.name + " comes from " + pet.origin + ".";
}

function weightLine(pet) {
  let line = pet.name + " weighs up to ";
  line = line + pet.max_weight + " pounds.";
  return line;
}

function playScore(pet) {
  return pet.playfulness * 2;
}

function scoreLine(score) {
  return "Play score: " + score + " out of 10.";
}

let first = summarize(pets[0]);
let second = weightLine(pets[1]);
let third = scoreLine(playScore(pets[2]));

function playfulVerdict(pet) {
  if (pet.playfulness >= 4) {
    return "very playful";
  } else {
    return "calm";
  }
}

function compare(petA, petB) {
  if (petA.max_weight > petB.max_weight) {
    return petA.name + " and " + petB.name + ": " + petA.name + " is the heavier one.";
  } else {
    return petA.name + " and " + petB.name + ": " + petB.name + " is the heavier one.";
  }
}

console.log(compare(pets[0], pets[2]));
console.log(compare(pets[2], pets[0]));

console.log(playfulVerdict(pets[0]), playfulVerdict(pets[3]));

console.log(first);
console.log(second);
console.log(third);