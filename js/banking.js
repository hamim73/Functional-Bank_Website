// input field function
function inputField(asd){
    const inputValue = document.getElementById(asd);
    const inputValueText = inputValue.value;
    const inputValueNum = parseFloat(inputValueText);

    // clear inout field
    inputValue.value = "";

    // return value
    return inputValueNum;
}

// total amount
function total(id, newValue){
    const balance = document.getElementById(id);
    const balanceText = balance.innerText;
    const balanceNum = parseFloat(balanceText);
    const newBalance = balanceNum + newValue;
    balance.innerText = newBalance;
}

// get current main balance
function checkMainBalance(id){
    const mainBalance = document.getElementById(id);
    const mainBalanceText = mainBalance.innerText;
    const mainBalanceNum = parseFloat(mainBalanceText);
    return mainBalanceNum;
}

// main Balance
function mainBalance(id, amount, action){
    const balance = document.getElementById(id);
    const balanceText = balance.innerText;
    const balanceNum = parseFloat(balanceText);
    if(action == 'd'){
        balance.innerText = balanceNum + amount;
    }
    else{
        if(balanceNum < amount){
            alert("Insufficient Balance");
        }
        else{
            balance.innerText = balanceNum - amount;
        }
    }
}

// Diposit
document.getElementById('diposit-btn').addEventListener('click', function(){
    // // get deposit amount

    // get Deposit value
    const depositAmount = inputField('diposit-amount');
    if(depositAmount > 0){
    // update Deposit value

    total('deposit-balance', depositAmount)

    // update Main Balance

    mainBalance('main-blance', depositAmount, 'd');
    }
    else{
        alert("Wrong Input!");
    }
})

// Withdraw section
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // get current main balance
    const currentMainBalance = checkMainBalance('main-blance');

    // get withdraw
    const withdrawAmount = inputField('withdraw-amount');

    // update Withdraw
    if(withdrawAmount > 0 && withdrawAmount < currentMainBalance){
    total('withdraw-balance', withdrawAmount)

    // update main balance

    mainBalance('main-blance', withdrawAmount, 'w');
    }
    else{
        alert("Wrong Input!");
    }
})