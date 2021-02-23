var nameExpense = document.getElementById("name-expense");
var expense = document.getElementById("expense");
var expenseTable = document.getElementById("expense-table");
var submitButton = document.getElementById("submit");

function addExpense() {
    var row = expenseTable.insertRow(1);
    row.setAttribute("class", "row");

    var cell1 = row.insertCell(0);
    cell1.setAttribute("class", "cell");
    cell1.innerHTML = nameExpense.value;

    var cell2 = row.insertCell(1);
    cell2.setAttribute("class", "cell");
    cell2.innerHTML = expense.value;

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.innerHTML = "Delete";
    row.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteExpense);
}

function deleteExpense() {
  var index;
  for (var i = 0; i < expenseTable.rows.length; i++) {
    expenseTable.rows[i].onclick = function () {
      index = this.rowIndex;
      expenseTable.deleteRow(index);
    };
  }
}

submitButton.addEventListener("click", addExpense);
