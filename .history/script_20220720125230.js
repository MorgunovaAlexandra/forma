const year=document.querySelector('.year')
const day=document.querySelector('.day')
const email=document.querySelector('#email')
const imgVector=document.querySelector('.img__done');
const confirmPassword=document.querySelector('#confirmPassword');

let options
console.log(confirmPassword.length)
for(let i=1;i<32;i++){
 options=document.createElement('option')
 day.appendChild(options);
 options.innerHTML=`${i}`
}
for(let i=2022;i>1960;i--){
    options=document.createElement('option')
    year.appendChild(options);
    options.innerHTML=`${i}`
}
document.addEventListener('click',()=>{
    console.log(confirmPassword.value.length==0)
  
    if(email.matches(':valid') && confirmPassword.matches(':valid')&& confirmPassword.value.length==0){
        imgVector.style.opacity=1
        email.style.backgroundColor='white'
        email.style.color='#111111';
        email.style.borderBottomColor='#F2F2F2';
        confirmPassword.style.borderBottomColor='#F2F2F2';
    }
    else{
        imgVector.style.opacity=0
        email.style.borderBottomColor='red';
        email.style.color='red';
        confirmPassword.style.borderBottomColor='red';
    }
})

