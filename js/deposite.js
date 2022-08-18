// Get the button With Event Handler
document.getElementById('btn-deposite').addEventListener('click',function(){

    // Get the deposite field 
    const depositField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // Set Deposit Total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // Calculate Deposit Total  
    const currentDeposittTotal = previousDepositTotal + newDepositeAmount;

    depositTotalElement.innerText = currentDeposittTotal;

    // Get valance Total 
    const balanceTotalElement = document.getElementById('balance-total'); 
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Calculate balance Total 
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;

    balanceTotalElement.innerText = newBalanceTotal;

    depositField.value = '';

})