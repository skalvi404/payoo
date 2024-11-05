// // cashout from

// document.getElementById('show-cash-out')
// .addEventListener('click',function(event){
//     event.preventDefault()
//     console.log('cashout button click');

//     // show cash out button clicked
//     document.getElementById('cash-out-from').classList.remove('hidden');

//     //hide the add money from
//     document.getElementById('add-money-form').classList.add('hidden');
// })

// //show add money form and hide the cashout from

// document.getElementById('show-add-money')
// .addEventListener('click',function(){
//     console.log("Add Money button click");

//     document.getElementById('add-money-form').classList.remove('hidden');
//     document.getElementById('cash-out-from').classList.add('hidden');

// })


// ---------------------------New Code with function start---------------------------

document.getElementById('show-add-money')
    .addEventListener('click', function () {
        showAndHideButton('add-money-form')
    })
document.getElementById('show-cash-out')
    .addEventListener('click', function () {
        showAndHideButton('cash-out-from')
    })
document.getElementById('show-bank')
    .addEventListener('click', function () {
        showAndHideButton('Bank-Form')
    })
document.getElementById('show-transection')
    .addEventListener('click', function () {
        showAndHideButton('Transeciton-Form')
    })