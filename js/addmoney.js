// document.getElementById('btn-add-money')
//     .addEventListener('click', function (event) {
//         event.preventDefault()
//         // Add Input Money

//         const addInputMoney = document.getElementById('add-money-input-id').value;
//         console.log(addInputMoney);

//         // ADD PIN


//         const pinInput = document.getElementById('input-pin-id').value;
//         console.log(pinInput);

//         if (pinInput == '123') {
//             console.log('ADD MONEY SUCCESSFULL');


//             const accountBalance = document.getElementById('account-balance').innerText;
//             console.log(accountBalance);

//             const accountBalanceNumer = parseFloat(accountBalance)
//             const addMoneyNumber = parseFloat(addInputMoney)
//             const newbalance = accountBalanceNumer + addMoneyNumber;
//             console.log(newbalance);

//             document.getElementById('account-balance').innerText = newbalance

//         }






//         else {
//             console.log('OPS!WRONG PASSWORD');

//         }




//     })



// ---------------New code style-----------------------------------


document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const AddMoney = getinputFieldValuByID('add-money-input-id');
        const pinNumber = getinputFieldValuByID('input-pin-id');
        console.log(AddMoney, pinNumber);


        if (pinNumber == 123) {
            console.log('Money is added successfully');
            const balance = getTextFieldValuByID('account-balance')
            const newbalance = balance + AddMoney;
            console.log(newbalance);

            document.getElementById('account-balance').innerText = newbalance;

        }

        else {
            alert('Your Password is Wrong')
        }

    })