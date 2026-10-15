
const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const topperInfo = document.getElementById("topperInfo");
const studentCount = document.getElementById("studentCount");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get student details
    const rollNo = document.getElementById("rollNo").value.trim();
    const name = document.getElementById("name").value.trim();
    const studentClass = document.getElementById("studentClass").value.trim();

    const english = document.getElementById("english").valueAsNumber;
    const maths = document.getElementById("maths").valueAsNumber;
    const science = document.getElementById("science").valueAsNumber;

    // Validate marks
    const marks = [english, maths, science];

    if (marks.some(mark =>
        !Number.isInteger(mark) || mark < 0 || mark > 100
    )) {
        alert("Please enter whole-number marks between 0 and 100.");
        return;
    }

    // Calculate total and percentage
    const total = english + maths + science;
    const percentage = (total / 300) * 100;

    // Clear the previous student's result
    table.replaceChildren();

    // Create a new table row
    const row = document.createElement("tr");

    const details = [
        rollNo,
        name,
        studentClass,
        english,
        maths,
        science,
        total,
        percentage.toFixed(2) + "%"
    ];

    // Display student details and calculated marks
    details.forEach(function (value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    // Add the row to the table
    const actionCell = document.createElement("td");
    actionCell.textContent = "-";
    row.appendChild(actionCell);

    table.appendChild(row);

    // Display result
    studentCount.textContent = "Showing result for 1 student";

    topperInfo.textContent =
        "Student: " + name +
        " | Total Marks: " + total + "/300" +
        " | Percentage: " + percentage.toFixed(2) + "%";

    // Clear form after calculation
    form.reset();
});
