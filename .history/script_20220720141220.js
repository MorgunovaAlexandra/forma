const year=document.querySelector('.year')
const day=document.querySelector('.day')
const email=document.querySelector('#email')
const imgVector=document.querySelector('.img__done');
const confirmPassword=document.querySelector('#confirmPassword');
const submit=document.querySelector('#submit');
const password=document.querySelector('#password')
let options

for(let i=1;i<32;i++){
 options=document.createElement('option')
 day.appendChild(options);
 options.innerHTML=`${i}`
if(options.value==21){

}
 
 
}
for(let i=2022;i>1960;i--){
    options=document.createElement('option')
    year.appendChild(options);
    options.innerHTML=`${i}`
}


submit.addEventListener('click',()=>{
    if(confirmPassword.matches(':valid')&&password.matches(':valid')){
        confirmPassword.style.borderBottomColor='#F2F2F2';
        password.style.borderBottomColor='#F2F2F2';
    }
    else{
        confirmPassword.style.borderBottomColor='red';
        password.style.borderBottomColor='red';
        alert('введите корректный пароль')
    }
    if(password.value!==confirmPassword.value){
        alert('пароли не совпадают')
    }
})