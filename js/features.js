document.getElementById('donate-button')
.addEventListener('click', function(){
    console.log('show donate button');
    showSectionById('donation-field');
})

document.getElementById('show-history').addEventListener('click', function(){
    showSectionById('Transaction-section')
})