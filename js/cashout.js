// document.getElementById('btn-cashout-money')
//     .addEventListener('click', function (event) {
//         event.preventDefault()
//         const inputCashout = document.getElementById('cashout-money-input-id').value;
//         console.log(inputCashout);
//         const inputPin = document.getElementById('cashout-input-pin-id').value;
//         console.log(inputPin);

//         if (inputPin == '1234') {
//             console.log('Your Cash Out is successfull');


//             const availableBalance = document.getElementById('account-balance').innerText
//             console.log(availableBalance);


//             const inputCashoutNumber = parseFloat(inputCashout)
//             const availableBalanceNumber = parseFloat(availableBalance)
//             const newbalance = availableBalanceNumber - inputCashoutNumber;
//             console.log(newbalance);

//             document.getElementById('account-balance').innerText = newbalance;

//         }
//         else {
//             console.log('OPS!Invalid Password');

//         }

//     })



// --------------------------------------new style start----------------------------------

document.getElementById('btn-cashout-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        cashoutAmmount = getinputFieldValuByID('cashout-money-input-id');
        pinNumber = getinputFieldValuByID('cashout-input-pin-id');
        console.log(cashoutAmmount, pinNumber);

        if (pinNumber == 1234) {
            const balance = getTextFieldValuByID('account-balance')
            const newbalance = balance - cashoutAmmount;
            console.log(newbalance);

            document.getElementById('account-balance').innerText = newbalance;
        }


        else {
            alert('Ops! Please Input Valid Password')
        }
    })