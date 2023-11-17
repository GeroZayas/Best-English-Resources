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

// __________________________________________________________
// __________________________________________________________
// Show the BUTTON when the collapsibles are open if not hide it
// __________________________________________________________
// __________________________________________________________
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

// __________________________________________________________
// HERE WE ARE ADDING TAILWIND CLASSES TO EACH OL ELEMENT
// __________________________________________________________

function addClassesToSelector(selector, classes) {
  document.querySelectorAll(selector).forEach((element) => {
    classes.forEach((cls) => element.classList.add(cls));
  });
}

function fetchAndDisplayCsvData(csvFilePath, targetElementId) {
  fetch(csvFilePath)
    .then((response) => response.text())
    .then((data) => {
      const rows = data.split("\n");
      // const headers = rows[0].split(",");
      const targetElement = document.getElementById(targetElementId);
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
        targetElement.appendChild(li);
      }
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // Fetch and display data for each category
  fetchAndDisplayCsvData("/data/teachers.csv", "teachers");
  fetchAndDisplayCsvData("/data/speaking.csv", "speaking");
  fetchAndDisplayCsvData("/data/listening.csv", "listening");
  fetchAndDisplayCsvData("/data/reading.csv", "reading");
  fetchAndDisplayCsvData("/data/writing.csv", "writing");
  fetchAndDisplayCsvData("/data/pronunciation.csv", "pronunciation");
  fetchAndDisplayCsvData("/data/phrasal_verbs.csv", "phrasal-verbs");
  fetchAndDisplayCsvData("/data/collocations.csv", "collocations");
  fetchAndDisplayCsvData("/data/vocab.csv", "vocab");
  fetchAndDisplayCsvData("/data/grammar.csv", "grammar");
  fetchAndDisplayCsvData("/data/fce.csv", "fce");
  fetchAndDisplayCsvData("/data/cae.csv", "cae");

  // Add Tailwind classes to elements
  addClassesToSelector("ol", ["list-decimal", "pl-8", "pt-4"]);
  addClassesToSelector("summary", ["text-base", "sm:text-lg", "md:text-xl"]);
});
