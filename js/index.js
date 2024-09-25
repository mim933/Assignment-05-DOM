const donateButton = document.getElementById('donate-1-btn');
donateButton.addEventListener('click', function () {
    const inputField = document.getElementById('input-1-field');
    console.log(inputField.value);
    const balance = document.getElementById('balance');
    
    const mainBalance = document.getElementById('main-balance');
    if (!isNaN(inputField.value)) {
        alert('Thanks for donating humanity')
       
    } else {
        alert('invalid amount')
        return ;
    }
    balance.innerHTML = inputField.value;
    const subtractBalance = parseFloat(mainBalance.innerHTML) - parseFloat(inputField.value);
    mainBalance.innerHTML = subtractBalance;
    console.log(subtractBalance)
    const history = document.getElementById('history');
    history.innerText = `${balance.innerText} Taka is Donated for famine-2024 at Feni,Bangladesh ${mainBalance.innerText}`
    const currentDate = new Date();
    const time = document.getElementById('history-time');
    time.innerText = currentDate;
   
})


const relief = document.getElementById('donate-2-btn');
relief.addEventListener('click', function() {
    console.log('added', relief);
    const inputField = document.getElementById('input-2-field');
    const inputValue = parseFloat(inputField.value); // Parse the value to a number
    console.log(inputValue);
    const balance2 = document.getElementById('balance2');
    const mainBalance = document.getElementById('main-balance');
    if (!isNaN(inputValue) && inputValue > 0) {
        alert('Thanks for donating to humanity');
    } else {
        alert('Invalid amount');
        return;
    }
    
    balance2.innerHTML = inputValue;
    const subtractBalance = parseFloat(mainBalance.innerHTML) - inputValue;
    mainBalance.innerHTML = subtractBalance;
    
    console.log(subtractBalance);
    const history = document.getElementById('history');
    history.innerText = `${balance2.innerText} Taka is Donated for Flood in Feni,Bangladesh ${mainBalance.innerText}`
    const currentDate = new Date();
    const time = document.getElementById('history-time');
    time.innerText = currentDate;

   
});

   

const Aid = document.getElementById('donate-3-btn');
Aid.addEventListener('click', function() {
    console.log('added', Aid)
    const inputField = document.getElementById('input-3-field');
    console.log(inputField.value);
    const balance3 = document.getElementById('balance3');
    const mainBalance = document.getElementById('main-balance');
    if (!isNaN(inputField.value)) {
        alert('Thanks for donating humanity')

    } else {
        alert('invalid amount');
        return;
    }
    balance3.innerHTML = inputField.value;
    const subtractBalance = parseFloat(mainBalance.innerHTML) - parseFloat(inputField.value);
    mainBalance.innerHTML = subtractBalance;
    console.log(subtractBalance)
    const history = document.getElementById('history');
    history.innerText = `${balance3.innerText} Taka is Donated for Aid for Injured in Quota Movement,Bangladesh ${mainBalance.innerText}`
    const currentDate = new Date();
    const time = document.getElementById('history-time');
    time.innerText = currentDate;

    console.log(mainBalance.innerText, '=')
   
});
