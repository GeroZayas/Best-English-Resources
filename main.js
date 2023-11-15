// const names = ["Alice", "Bob", "Charlie"];
// const ol = document.getElementById("friendsList");

// for (let i = 0; i < names.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = names[i];
//   ol.appendChild(li);
// }

document.addEventListener("DOMContentLoaded", function () {
  const collapseAllButton = document.getElementById("collapse-all-button");
  const detailsContainer = document.getElementById("details-container");
  const detailsElements = detailsContainer.getElementsByTagName("details");

  collapseAllButton.addEventListener("click", function () {
    for (const detailsElement of detailsElements) {
      detailsElement.open = false;
    }
  });
});

// /////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////
// Show the BUTTON when the collapsibles are open if not hide it
// /////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const buttonContainer = document.getElementById("collapse-all-button");
  const detailsElements = document.querySelectorAll("details");

  // sourcery skip: avoid-function-declarations-in-blocks
  function toggleCollapseButtonVisibility() {
    const isAnyDetailsOpen = Array.from(detailsElements).some(
      (detailsElement) => detailsElement.open
    );

    if (isAnyDetailsOpen) {
      buttonContainer.classList.remove("hidden");
    } else {
      buttonContainer.classList.add("hidden");
    }
  }

  buttonContainer.addEventListener("click", function () {
    for (const detailsElement of detailsElements) {
      detailsElement.open = false;
    }
  });

  // Initially, check for visibility
  toggleCollapseButtonVisibility();

  // Listen for changes in details elements
  detailsElements.forEach((detailsElement) => {
    detailsElement.addEventListener("toggle", toggleCollapseButtonVisibility);
  });
});
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////
// HERE WE ARE ADDING TAILWIND CLASSES TO EACH OL ELEMENT
// //////////////////////////////////////////////////////////////////////////

// Select all <ol> elements
var orderedLists = document.querySelectorAll("ol");

// Add a class to each <ol> element
orderedLists.forEach(function (ol) {
  ol.classList.add("list-decimal");
  ol.classList.add("pl-8");
  ol.classList.add("pt-4");
});
// //////////////////////////////////////////////////////////////////////////
// END OF ADDING TAILWIND CLASSES TO EACH OL ELEMENT
// //////////////////////////////////////////////////////////////////////////

// TEACHERS DATA
const olTeachers = document.getElementById("teachers");

fetch("/data/teachers.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(",");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const p = document.createElement("p");
      const ranking = document.createElement("p");

      a.href = cols[0];
      a.innerHTML = "<b class='links'>" + cols[1] + "</b>";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];
      ranking.textContent = cols[3];

      li.appendChild(a);
      li.appendChild(p);
      li.appendChild(ranking);
      olTeachers.appendChild(li);
    }
  });

// SPEAKING DATA

const olSpeaking = document.getElementById("speaking");

fetch("/data/speaking.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(",");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const p = document.createElement("p");
      const ranking = document.createElement("p");

      a.href = cols[0];
      a.innerHTML = "<b class='links'>" + cols[1] + "</b>";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];
      ranking.textContent = cols[3];

      li.appendChild(a);
      li.appendChild(p);
      li.appendChild(ranking);
      olSpeaking.appendChild(li);
    }
  });

// LISTENING DATA

const olListening = document.getElementById("listening");

fetch("/data/listening.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(",");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const p = document.createElement("p");
      const ranking = document.createElement("p");

      a.href = cols[0];
      a.innerHTML = "<b class='links'>" + cols[1] + "</b>";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];
      ranking.textContent = cols[3];

      li.appendChild(a);
      li.appendChild(p);
      li.appendChild(ranking);
      olListening.appendChild(li);
    }
  });

// READING DATA

const olReading = document.getElementById("reading");

fetch("/data/reading.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(",");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const p = document.createElement("p");
      const ranking = document.createElement("p");

      a.href = cols[0];
      a.innerHTML = "<b class='links'>" + cols[1] + "</b>";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];
      ranking.textContent = cols[3];

      li.appendChild(a);
      li.appendChild(p);
      li.appendChild(ranking);
      olReading.appendChild(li);
    }
  });

// WRITING DATA

const olWriting = document.getElementById("writing");

fetch("/data/writing.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(",");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const p = document.createElement("p");
      const ranking = document.createElement("p");

      a.href = cols[0];
      a.innerHTML = "<b class='links'>" + cols[1] + "</b>";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];
      ranking.textContent = cols[3];

      li.appendChild(a);
      li.appendChild(p);
      li.appendChild(ranking);
      olWriting.appendChild(li);
    }
  });

// PRONUNCIATION DATA

const olPronunciation = document.getElementById("pronunciation");

fetch("/data/pronunciation.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(",");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const p = document.createElement("p");
      const ranking = document.createElement("p");

      a.href = cols[0];
      a.innerHTML = "<b class='links'>" + cols[1] + "</b>";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];
      ranking.textContent = cols[3];

      li.appendChild(a);
      li.appendChild(p);
      li.appendChild(ranking);
      olPronunciation.appendChild(li);
    }
  });

// Phrasal Verbs DATA

const olPhrasalVerbs = document.getElementById("phrasal-verbs");

fetch("/data/phrasal_verbs.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(",");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const p = document.createElement("p");
      const ranking = document.createElement("p");

      a.href = cols[0];
      a.innerHTML = "<b class='links'>" + cols[1] + "</b>";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];
      ranking.textContent = cols[3];

      li.appendChild(a);
      li.appendChild(p);
      li.appendChild(ranking);
      olPhrasalVerbs.appendChild(li);
    }
  });

// Phrasal Verbs DATA

const olCollocations = document.getElementById("collocations");

fetch("/data/collocations.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(",");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const p = document.createElement("p");
      const ranking = document.createElement("p");

      a.href = cols[0];
      a.innerHTML = "<b class='links'>" + cols[1] + "</b>";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];
      ranking.textContent = cols[3];

      li.appendChild(a);
      li.appendChild(p);
      li.appendChild(ranking);
      olCollocations.appendChild(li);
    }
  });

// VOCAB DATA

const olVocab = document.getElementById("vocab");

fetch("/data/vocab.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(",");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const p = document.createElement("p");
      const ranking = document.createElement("p");

      a.href = cols[0];
      a.innerHTML = "<b class='links'>" + cols[1] + "</b>";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];
      ranking.textContent = cols[3];

      li.appendChild(a);
      li.appendChild(p);
      li.appendChild(ranking);
      olVocab.appendChild(li);
    }
  });
