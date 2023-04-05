var rateButtons = document.getElementsByClassName('btn-rate')
var submitButton = document.querySelector('.btnSubmit')
var rateSelected = document.querySelector('#numSelected')


let rateNumber=0;


rateButtons[0].addEventListener('click',()=>{
    rateNumber = rateButtons[0].innerHTML
    rateButtons[0].style.background = 'hsl(217,12%,63%)'
    rateButtons[0].style.color = 'hsl(0, 0%, 100%)'
});

rateButtons[1].addEventListener('click',()=>{
    rateNumber = rateButtons[1].innerHTML
    rateButtons[1].style.background = 'hsl(217,12%,63%)'
    rateButtons[1].style.color = 'hsl(0, 0%, 100%)'
});

rateButtons[2].addEventListener('click',()=>{
rateNumber = rateButtons[2].innerHTML
rateButtons[2].style.background = 'hsl(217,12%,63%)'
rateButtons[2].style.color = 'hsl(0, 0%, 100%)'
});

rateButtons[3].addEventListener('click',()=>{
    rateNumber = rateButtons[3].innerHTML
    rateButtons[3].style.background = 'hsl(217,12%,63%)'
    rateButtons[3].style.color = 'hsl(0, 0%, 100%)'
});

rateButtons[4].addEventListener('click',()=>{
    rateNumber = rateButtons[4].innerHTML
    rateButtons[4].style.background = 'hsl(217,12%,63%)'
    rateButtons[4].style.color = 'hsl(0, 0%, 100%)'
});

// switch(rateNumber){
//     case 1:
//         rateButtons[0].style.background  = 'hsl(0,0%,100%)';
//         rateNumber = rateButtons[0].innerHTML;
//         rateButtons[1].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[2].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[3].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[4].style.background  = 'hsl(217,12%,63%)';
//     case 2:
//         rateButtons[0].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[1].style.background  = 'hsl(0,0%,100%)';
//         rateNumber= rateButtons[1].innerHTML;
//         rateButtons[2].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[3].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[4].style.background  = 'hsl(217,12%,63%)';
//     case 3:
//         rateButtons[0].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[1].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[2].style.background  = 'hsl(0,0%,100%)';
//         rateNumber = rateButtons[2].innerHTML;
//         rateButtons[3].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[4].style.background  = 'hsl(217,12%,63%)';
//     case 4:
//         rateButtons[0].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[1].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[2].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[3].style.background  = 'hsl(0,0%,100%)';
//         rateNumber = rateButtons[3].innerHTML;
//         rateButtons[4].style.background  = 'hsl(217,12%,63%)';
//     case 5:
//         rateButtons[0].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[1].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[2].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[3].style.background  = 'hsl(217,12%,63%)';
//         rateButtons[4].style.background  = 'hsl(0,0%,100%)';
//         rateNumber=rateButtons[4].innerHTML;
// }
submitButton.addEventListener('click',()=>{
    if(rateNumber != 0){
    document.querySelector('.cardRate').style.display = 'none'
    document.querySelector('.cardThanks').style.display = 'block'
    rateSelected.innerHTML = 'You selected '+ rateNumber +' out of 5'
    // alert("The value you selected is "+ rateNumber);
    }
})


