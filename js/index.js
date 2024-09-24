const donateButton = document.getElementById('donate-1-btn');
donateButton.addEventListener('click', function(){
    const inputField =   document.getElementById('input-1-field');
    console.log(inputField.value);
    document.getElementById('balance').innerHTML= inputField.value;
    const mainBalance = document.getElementById('main-balance');
    const subtractBalance=parseFloat(mainBalance.innerHTML) - parseFloat(inputField.value);
    mainBalance.innerHTML = subtractBalance;
    console.log(subtractBalance)
     const p = document.createElement('p');
     p.innerText=`${balance}Taka is Donated for famine-2024 at Feni,Bangladesh ${mainBalance}`
     console.log(p);

     document.getElementById('transaction-container').appendChild(p);

    if(mainBalance === Number){
       alert('thanks')
       window.location.href ='./Blog.html';
    }else{
        alert('invalid amount')
    }
   
})
