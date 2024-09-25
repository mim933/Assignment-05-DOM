document.getElementById('donate-button')
.addEventListener('click', function(){
    console.log('show donate button');
    showSectionById ('donation-container');
})

document.getElementById('show-history').addEventListener('click', function(){
    showSectionById('Transaction-section')
})


