const donateButton = document.getElementById('donate-1-btn');
donateButton.addEventListener('click', function(){
    const inputField =   document.getElementById('input-1-field');
    console.log(inputField.value);
   const balance = document.getElementById('balance');
   balance.innerHTML= inputField.value;
    const mainBalance = document.getElementById('main-balance');
    const subtractBalance=parseFloat(mainBalance.innerHTML) - parseFloat(inputField.value);
    mainBalance.innerHTML = subtractBalance;
    console.log(subtractBalance)
     const history = document.getElementById('history');
     history.innerText=`${balance.innerText} Taka is Donated for famine-2024 at Feni,Bangladesh ${mainBalance.innerText}`
     const currentDate = new Date();
     const time= document.getElementById('history-time');
     time.innerText=currentDate;

     console.log(mainBalance.innerText, '=')
    if(!isNaN (inputField.value)){
       alert('Thanks for donating humanity')
    
    }else{
        alert('invalid amount')
    }
   
})

const donateButton = document.getElementById('donate-1-btn');
donateButton.addEventListener('click', function(){
    const inputField =   document.getElementById('input-1-field');
    console.log(inputField.value);
   const balance = document.getElementById('balance');
   balance.innerHTML= inputField.value;
    const mainBalance = document.getElementById('main-balance');
    const subtractBalance=parseFloat(mainBalance.innerHTML) - parseFloat(inputField.value);
    mainBalance.innerHTML = subtractBalance;
    console.log(subtractBalance)
     const history = document.getElementById('history');
     history.innerText=`${balance.innerText} Taka is Donated for famine-2024 at Feni,Bangladesh ${mainBalance.innerText}`
     const currentDate = new Date();
     const time= document.getElementById('history-time');
     time.innerText=currentDate;

     console.log(mainBalance.innerText, '=')
    if(!isNaN (inputField.value)){
       alert('Thanks for donating humanity')
    
    }else{
        alert('invalid amount')
    }
   
})

