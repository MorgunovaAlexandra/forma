const year=document.querySelector('.year')
const day=document.querySelector('#day')
const email=document.querySelector('#email')
const imgVector=document.querySelector('.img__done')
let options

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
    if(email.matches(':valid')){
        console.log(email.matches(':valid'))
    }
})

console.log(email.matches(':valid'))