var nameExpense = document.getElementById('name-expense')
var expense = document.getElementById ('expense')
var expenseTable = document.getElementById ('expense-table')
var submitButton = document.getElementById ('submit')
var userBudget = document.getElementById('user-budget')
var InsertBInput = document.getElementById ('insert-budget')
var InsertBudgetButton = document.getElementById ('insertB')
var clearAll = document.getElementById('clear-all')

function Hide (){
    nameExpense.style.display = "none"
    expense.style.display = "none"
    submitButton.style.display = "none"
}

Hide()

function InsertBudget (){
     var budgetValue = InsertBInput.value
     if(budgetValue == "" || isNaN(budgetValue)){
         alert("Please enter the numerical value")
     }
     else{
        userBudget.innerHTML = budgetValue
        document.body.removeChild(InsertBInput)
        document.body.removeChild (InsertBudgetButton)
        nameExpense.style.display = "block"
        expense.style.display = "block"
        submitButton.style.display = "block"
}
     }
     

InsertBudgetButton.addEventListener('click', InsertBudget)

function addExpense() {
 if (nameExpense.value == "" || expense.value == ""){
     alert ("Fields can't be empty")
 }
 else if (isNaN(expense.value)){
    alert("Please enter the numerical value of the expense")
    }
else{
    var row = expenseTable.insertRow(1)
    row.setAttribute('class','row')
    
    var cell1 = row.insertCell(0);
    cell1.setAttribute('class', 'cell')
    cell1.innerHTML = nameExpense.value

    var cell2 = row.insertCell(1);
    cell2.setAttribute('class', 'cell')
    cell2.innerHTML = expense.value;
    
    
    userBudget.innerHTML = parseInt(userBudget.innerHTML) - parseInt(expense.value)
    }
    
}

submitButton.addEventListener ('click', addExpense)

