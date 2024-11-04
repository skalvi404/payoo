// console.log('button added');

// from submit reloading the page

// step-1 event handeler
// document.getElementById('btn-id')
// .addEventListener('click',function(event){
//     // step-2 event realoding behavior
//     event.preventDefault();//Vejal to beginner;
//     console.log('login button clicked');

// // step-3 get the phone number
// const phonenumber=document.getElementById('phone-id').value;
// console.log(phonenumber);

// const pinnumber=document.getElementById('pin-id').value;
// console.log(pinnumber);

// if (phonenumber=='5' & pinnumber='1234'){
//     console.log('you are login');
// }
// else{
//     alert('wrong phone number')
// }
    


// })


document.getElementById('btn-id')
.addEventListener('click',function(event){
    event.preventDefault();
const phoneNumber=document.getElementById('phone-id').value;
console.log(phoneNumber);
const pinNumber=document.getElementById('pin-id').value;
console.log('pinNumber');

if(phoneNumber =='5' && pinNumber=='1234'){
    console.log('You are log in')
    window.location.href='/js/home.html'
}
else{
   alert('passwrod wrong')
    
}

})