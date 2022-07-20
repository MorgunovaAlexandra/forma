const days=document.querySelector('#option__day')
const day=document.querySelector('#day')
console.log(days)
let dayArray=[]
for(let i=0;i<32;i++){
    console.log(i)
    dayArray.push(i)
    let options=document.createElement('option')
    days.append(options)
   
}
console.log(dayArray.join(" "))
day.addEventListener('click',()=>{
    days.innerHTML=`${dayArray.join(" ")}`
})
