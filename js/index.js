const donateButton = document.getElementById('donate-1-btn');
donateButton.addEventListener('click', function(){
    const inputField =   document.getElementById('input-1-field');
    console.log(inputField.value);
    document.getElementById('balance').innerHTML= inputField.value;
    const mainBalance = document.getElementById('main-balance');
    const subtractBalance=parseFloat(mainBalance.innerHTML) - parseFloat(inputField.value);
    mainBalance.innerHTML = subtractBalance;
    console.log(subtractBalance)
    if(mainBalance === Number){
       alert('thanks')
    }else{
        alert('invalid amount')
    }
   
})
