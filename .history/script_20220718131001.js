const days=document.querySelector('#option__day')
const day=document.querySelector('#day')
console.log(days)
let dayArray=[]
for(let i=0;i<32;i++){
    console.log(i)
    dayArray.push(i)
    document.createElement()
   
}
console.log(dayArray.join(" "))
day.addEventListener('click',()=>{
    days.innerHTML=`${dayArray.join(" ")}`
})
