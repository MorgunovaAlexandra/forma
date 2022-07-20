

email.addEventListener('click',()=>{
    if(email.matches(':valid') ){
        imgVector.style.opacity=1
        email.style.backgroundColor='white'
        email.style.color='#111111';
        email.style.borderBottomColor='#F2F2F2';
      
    }
    else{
        imgVector.style.opacity=0
        email.style.borderBottomColor='red';
        email.style.color='red';
       
    }
})