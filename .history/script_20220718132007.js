const days=document.querySelector('#option__day')
const day=document.querySelector('#day')
let options
let dayArray=[]
for(let i=1;i<32;i++){
 options=document.createElement('option')
 day.appendChild(options);
 options.innerHTML=`${i}`
}
