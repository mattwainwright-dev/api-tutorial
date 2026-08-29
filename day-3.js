let button = document.getElementById("describe-button");
let output = document.getElementById("output");
let secondButton = document.getElementById("describe-second-button");

function showPet(pet) {
    output.textContent = pet.name + " comes from " + pet.origin + ".";
}

button.addEventListener("click", function () {
    showPet(pets[0]);
});

secondButton.addEventListener("click", function() {
    showPet(pets[1]);
});