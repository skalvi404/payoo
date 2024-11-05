function getinputFieldValuByID(id) {
    const inputvalue = document.getElementById(id).value;
    const inputvalueNumber = parseFloat(inputvalue);
    return inputvalueNumber;
}


function getTextFieldValuByID(id) {
    const textinputvalue = document.getElementById(id).innerText;
    const textinputvalueNumber = parseFloat(textinputvalue);
    return textinputvalueNumber;
}


function showAndHideButton(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('Bank-Form').classList.add('hidden');
    document.getElementById('Transeciton-Form').classList.add('hidden');

    // Show The Section with the provide id as parameter

    document.getElementById(id).classList.remove('hidden');
}
