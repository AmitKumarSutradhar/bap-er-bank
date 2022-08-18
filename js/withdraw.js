document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawTotalAmounString = withdrawField.value;
    const newWithdrawTotalAmout = parseFloat(withdrawTotalAmounString);

    withdrawField.value = '';

    if(isNaN(newWithdrawTotalAmout)){
        alert('Enter a valid Number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    const previousBalanceTotalElemnet = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceTotalElemnet.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawTotalAmout > previousBalanceTotal) {
        alert("Baap er bank a eto taka nai....");
        return;
    }

    const  currentWithdraw = newWithdrawTotalAmout + previousWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdraw;


    const currentBalanceTotal = previousBalanceTotal - newWithdrawTotalAmout;

    previousBalanceTotalElemnet.innerText = currentBalanceTotal;

    // console.log("Withdraw Clicked")
})