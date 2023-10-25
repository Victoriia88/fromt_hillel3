document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const tableContainer = document.getElementById("tableContainer");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    let allFieldsFilled = true;
    let dateOfBirthValid = true;

    for (const pair of formData.entries()) {
      if (pair[1] === "") {
        allFieldsFilled = false;
        alert(`Поле "${pair[0]}" не може бути порожнім.`);
        break;
      }
    }

    if (allFieldsFilled) {
      const dateOfBirth = formData.get("Дата народження");
      if (!isValidDate(dateOfBirth)) {
        dateOfBirthValid = false;
        alert("Некоректна дата народження. Введіть дату у форматі dd/mm/yyyy.");
      }

      const languages = formData.getAll("Іноземна мова");
      if (languages.length === 0) {
        alert("Ви повинні вибрати хоча б одну іноземну мову.");
        return;
      }

      if (dateOfBirthValid) {
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
    }
  });

  function isValidDate(dateString) {
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!dateRegex.test(dateString)) return false;

    const [day, month, year] = dateString.split("/").map(Number);
    const maxDay = new Date(year, month, 0).getDate();

    if (month < 1 || month > 12) return false;
    if (day < 1 || day > maxDay) return false;

    return true;
  }
});
