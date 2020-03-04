budgetPercentage = 0;
var budget = 0;
var type = 'inc';
var incomeValue = 0;
var expensesValue = 0;
var addType = document.querySelector('.add-type');

function handleType(event) {
    type = event.target.value;
}
addType.addEventListener('change', handleType);

function calc() {
    if (type === 'inc') {
        var incValue = renderItem('.income-list', 'income-list-item');
        if (incValue) {
            incomeValue += incValue;
            renderValue('.budget-income-value', incomeValue)
        } else return;
    }
    else {
        var expValue = renderItem('.expenses-list', 'expenses-list-item');
        if (expValue) {
            expensesValue += expValue;
            renderValue('.budget-expenses-value', expensesValue)
        } else return;
    }
    budget = incomeValue - expensesValue;
    renderValue('.budget-value', budget)

    budgetPercentage = Math.round((expensesValue / incomeValue) * 100);
    var budgetPercent = document.querySelector('.budget-expenses-percentage');
    budgetPercent.innerText = budgetPercentage + '%';
}
function renderValue(selector, value) {
    var ValEl = document.querySelector(selector);
    ValEl.innerText = value;
}

function renderItem(selector, className) {
    var description = document.querySelector('.add-description');
    var addValueInput = document.querySelector('.add-value');
    var descriptionValue = description.value;
    var addValue = addValueInput.value;
    if (descriptionValue === '' || addValue === '') {
        return false;
    }
    var item = document.querySelector(selector);
    var list = document.createElement('div');
    list.classList.add(className);

    addValueInput.value = '';
    description.value = '';

    // list.innerText = descriptionValue + ' - - - - - ' + addValue;
    list.innerHTML = `<div class="left">${descriptionValue}</div>    <div class="right">${addValue}</div>`;
    item.appendChild(list);

    return parseInt(addValue);
}

var submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', calc);