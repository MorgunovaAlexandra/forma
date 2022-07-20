const year=document.querySelector('.year');
const day=document.querySelector('.day');

let options

for(let i=1;i<32;i++){
 options=document.createElement('option');
 day.appendChild(options);
 options.innerHTML=`${i}`
}
for(let i=1995;i<2023;i++){
    options=document.createElement('option');
    year.appendChild(options);
    options.innerHTML=`${i}`;
}