var rateButtons = document.querySelectorAll('.btn-rate')
var submitButton = document.querySelector('.btnSubmit')
var rateSelected = document.querySelector('#numSelected')
var activeLink = document.querySelector('.active');

let rateNumber=0;

rateButtons.forEach((btn) =>{
    btn.addEventListener("click",(e)=>{
        rateButtons.forEach(f => f.classList.remove('active'));
        e.target.classList.toggle("active");
        rateNumber = Number(btn.innerHTML);
    });
});

submitButton.addEventListener('click',()=>{
    if(rateNumber != 0){
    document.querySelector('.cardRate').style.display = 'none'
    document.querySelector('.cardThanks').style.display = 'block'
    rateSelected.innerHTML = 'You selected '+ rateNumber +' out of 5'
    }
})


