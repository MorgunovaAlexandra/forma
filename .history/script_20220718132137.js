const year=document.querySelector('#year')
const day=document.querySelector('#day')
let options
let dayArray=[]
for(let i=1;i<32;i++){
 options=document.createElement('option')
 day.appendChild(options);
 options.innerHTML=`${i}`
}
for