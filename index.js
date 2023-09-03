document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const tableContainer = document.getElementById("tableContainer");
  const saveButton = document.getElementById("saveButton");

  saveButton.addEventListener("click", function () {
    const formData = new FormData(registrationForm);
    let allFieldsFilled = true;

    for (const pair of formData.entries()) {
      if (pair[1] === "") {
        allFieldsFilled = false;
        alert(`Поле "${pair[0]}" не може бути порожнім.`);
        break;
      }
    }

    if (allFieldsFilled) {
      const table = document.createElement("table");
      const tbody = document.createElement("tbody");

      for (const pair of formData.entries()) {
        const row = document.createElement("tr");
        const keyCell = document.createElement("td");
        const valueCell = document.createElement("td");

        keyCell.textContent = pair[0];
        valueCell.textContent = pair[1];

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
      }

      table.appendChild(tbody);
      tableContainer.innerHTML = "";
      tableContainer.appendChild(table);

      registrationForm.style.display = "none";
    }
  });
});
