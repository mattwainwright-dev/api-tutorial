function summarize(pet) {
  return pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.";
}

let reportButton = document.getElementById("report-button");
let report = document.getElementById("report");

reportButton.addEventListener("click", function () {
  let lines = pets.map(summarize);
  let fullReport = lines.join("\n");
  report.textContent = fullReport;
});