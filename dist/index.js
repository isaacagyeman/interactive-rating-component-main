var rateButtons = document.getElementsByClassName('btn-rate')

let rateNumber
for(var i = 0; i < rateButtons.length; i++){
    rateButtons[i].addEventListener('click',()=>{
        // rateButtons[i].style.background = 'hsl( hsl(217, 12%, 63%))'
        rateButtons[i].style.display = 'none'
        rateNumber = rateButtons[i].innerHTML
        console.log(rateNumber)
    })
}