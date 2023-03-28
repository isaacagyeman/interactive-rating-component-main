var rateButtons = document.getElementsByClassName('btn-rate')
var submitButton = document.querySelector('.btnSubmit')
var rateSelected = document.querySelector('#numSelected')



let rateNumber=0;

rateButtons[1].addEventListener('click',()=>{
rateNumber = rateButtons[1].innerHTML
rateButtons[1].style.background = 'hsl(217,12%,63%)'
rateButtons[1].style.color = 'hsl(0, 0%, 100%)'
})

submitButton.addEventListener('click',()=>{
    if(rateNumber != 0){
    document.querySelector('.cardRate').style.display = 'none'
    document.querySelector('.cardThanks').style.display = 'block'
    rateSelected.innerHTML = 'You selected '+ rateNumber +' out of 5'
    }
})


