const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-cancel');
const confirmButton = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = ()=>{
    reasonInput.value="";
    amountInput.value = "";
}

confirmButton.addEventListener('click',()=>{
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason.trim().length<=0 || enteredAmount <=0 || enteredAmount.trim().length<=0){
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid inputs';
        alert.message = 'Please enter a valid reason and amount!';
        alert.buttons = ['Okay'];
        document.body.appendChild(alert);
        return alert.present();   
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ' : $'+enteredAmount;

    expensesList.appendChild(newItem);
    totalExpenses+= +enteredAmount;

    totalExpensesOutput.textContent = '$'+totalExpenses
    clear();
});

cancelButton.addEventListener('click',clear)
