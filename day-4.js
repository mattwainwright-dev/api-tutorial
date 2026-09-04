let count = 0;

let button = document.getElementById("summarize-button");
let output = document.getElementById("output");

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.";
}

button.addEventListener("click", function () {
  output.textContent = summarize(pets[count]);
  count = count + 1;

  if (count === pets.length) {
    count = 0;
  }
});