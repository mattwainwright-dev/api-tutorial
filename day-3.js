let button = document.getElementById("describe-button");
let output = document.getElementById("output");

function showPet(pet) {
    output.textContent = pet.name + " comes from " + pet.origin + ".";
}

button.addEventListener("click", function () {
    showPet(pets[0]);
});