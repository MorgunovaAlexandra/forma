const password=document.querySelector('#password');
const confirmPassword=document.querySelector('#confirmPassword');

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