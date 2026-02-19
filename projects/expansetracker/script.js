// ===============================
// SELECT ELEMENTS
// ===============================
const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

// ===============================
// LOAD EXPENSES ON PAGE LOAD
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  loadExpenses();
});

// ===============================
// FORM SUBMIT
// ===============================
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("expense-name").value.trim();
  const amount = document.getElementById("expense-amount").value.trim();

  if (name === "" || amount === "") return;

  const expense = {
    id: Date.now(),
    name: name,
    amount: parseFloat(amount)
  };

  saveExpense(expense);
  renderExpense(expense);
  updateTotal();

  form.reset();
});

// ===============================
// SAVE TO LOCAL STORAGE
// ===============================
function saveExpense(expense) {
  const expenses = getExpenses();//function 
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// ===============================
// GET FROM LOCAL STORAGE
// ===============================
function getExpenses() {
  return JSON.parse(localStorage.getItem("expenses")) || [];
}

// ===============================
// LOAD ALL EXPENSES
// ===============================
function loadExpenses() {
  const expenses = getExpenses();

  expenseList.innerHTML = "";

  expenses.forEach(expense => {
    renderExpense(expense);
  });

  updateTotal();
}

// ===============================
// RENDER SINGLE EXPENSE
// ===============================
function renderExpense(expense) {
  const li = document.createElement("li");

  li.innerHTML = `
    ${expense.name} - $${expense.amount.toFixed(2)}
    <button data-id="${expense.id}" class="delete-btn">
      Delete
    </button>
  `;

  expenseList.appendChild(li);
}

// ===============================
// DELETE EXPENSE (EVENT DELEGATION)
// ===============================
expenseList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {

    const id = Number(e.target.dataset.id);

    let expenses = getExpenses();

    expenses = expenses.filter(exp => exp.id !== id);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    loadExpenses(); // re-render everything
  }
});

// ===============================
// UPDATE TOTAL
// ===============================
function updateTotal() {
  const expenses = getExpenses();

  const total = expenses.reduce((sum, exp) => {
    return sum + exp.amount;
  }, 0);

  totalAmount.textContent = total.toFixed(2);
}
