// const names = ["Alice", "Bob", "Charlie"];
// const ol = document.getElementById("friendsList");

// for (let i = 0; i < names.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = names[i];
//   ol.appendChild(li);
// }

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

      a.href = cols[0];
      a.textContent = cols[1];
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];

      li.appendChild(a);
      li.appendChild(p);
      olTeachers.appendChild(li);
    }
  });

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

      a.href = cols[0];
      a.textContent = cols[1];
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      p.textContent = cols[2];

      li.appendChild(a);
      li.appendChild(p);
      olTeachers.appendChild(li);
    }
  });
