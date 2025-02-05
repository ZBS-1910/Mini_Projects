var yesBtn=document.getElementById('yes');
var noBtn=document.getElementById('no');

yesBtn.addEventListener('click',onsubmit)
noBtn.addEventListener('click',onsubmit)

noBtn.addEventListener('mouseover',function(){
    noBtn.innerHTML='YES 😁';
    yesBtn.innerHTML='NO 🥲';
})

yesBtn.addEventListener('mouseover',function(){
    noBtn.innerHTML='NO 🥲';
    yesBtn.innerHTML='YES 😁';
})
function onsubmit(){
    window.alert("Congratulation you got a date with me");
}