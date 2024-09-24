const donateButton = document.getElementById('donate-1-btn');
donateButton.addEventListener('click', function () {
    const inputField = document.getElementById('input-1-field');
    console.log(inputField.value);
    const balance = document.getElementById('balance');
    balance.innerHTML = inputField.value;
    const mainBalance = document.getElementById('main-balance');
    const subtractBalance = parseFloat(mainBalance.innerHTML) - parseFloat(inputField.value);
    mainBalance.innerHTML = subtractBalance;
    console.log(subtractBalance)
    const history = document.getElementById('history');
    history.innerText = `${balance.innerText} Taka is Donated for famine-2024 at Feni,Bangladesh ${mainBalance.innerText}`
    const currentDate = new Date();
    const time = document.getElementById('history-time');
    time.innerText = currentDate;

    console.log(mainBalance.innerText, '=')

    if (!isNaN(inputField.value)) {
        alert('Thanks for donating humanity')

    } else {
        alert('invalid amount')
    }

})

const relief = document.getElementById('donate-2-btn');
relief.addEventListener('click', function() {
    console.log('added', relief)
    const inputField = document.getElementById('input-2-field');
    console.log(inputField.value);
    const balance2 = document.getElementById('balance2');
    balance2.innerHTML = inputField.value;
    const mainBalance = document.getElementById('main-balance');
    const subtractBalance = parseFloat(mainBalance.innerHTML) - parseFloat(inputField.value);
    mainBalance.innerHTML = subtractBalance;
    console.log(subtractBalance)
    const history = document.getElementById('history');
    history.innerText = `${balance2.innerText} Taka is Donated for Flood in Feni,Bangladesh ${mainBalance.innerText}`
    const currentDate = new Date();
    const time = document.getElementById('history-time');
    time.innerText = currentDate;

    console.log(mainBalance.innerText, '=')
    if (!isNaN(inputField.value)) {
        alert('Thanks for donating humanity')

    } else {
        alert('invalid amount')
    }

})

const Aid = document.getElementById('donate-3-btn');
Aid.addEventListener('click', function() {
    console.log('added', Aid)
    const inputField = document.getElementById('input-3-field');
    console.log(inputField.value);
    const balance3 = document.getElementById('balance3');
    balance3.innerHTML = inputField.value;
    const mainBalance = document.getElementById('main-balance');
    const subtractBalance = parseFloat(mainBalance.innerHTML) - parseFloat(inputField.value);
    mainBalance.innerHTML = subtractBalance;
    console.log(subtractBalance)
    const history = document.getElementById('history');
    history.innerText = `${balance3.innerText} Taka is Donated for Aid for Injured in Quota Movement,Bangladesh ${mainBalance.innerText}`
    const currentDate = new Date();
    const time = document.getElementById('history-time');
    time.innerText = currentDate;

    console.log(mainBalance.innerText, '=')
    if (!isNaN(inputField.value)) {
        alert('Thanks for donating humanity')

    } else {
        alert('invalid amount')
    }

})

