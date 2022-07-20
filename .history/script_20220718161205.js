const year=document.querySelector('.year')
const day=document.querySelector('#day')
const email=document.querySelector('')
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