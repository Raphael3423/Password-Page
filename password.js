let formEl = document.querySelector("form")
let loginBtn = document.querySelector(".login")
const countDown = ()=>{
    const countDate = new Date('oct 20, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    const second = 1000;
    const minute = second*60;
    const hour = minute * 60;
    const day = hour * 24;
    const textDay = Math.floor(gap/day)
    const textHour = Math.floor((gap%day)/hour);
    const textMinute = Math.floor((gap%hour)/minute);
    const textSecond = Math.floor((gap%minute)/second);
    const minuteDisplay = document.getElementById('minute').textContent=textMinute;
    const secondDisplay = document.getElementById('seconds').textContent = textSecond;
    const hourDisplay = document.getElementById('hour').textContent= textHour;
    const dayDisplay = document.getElementById('day').textContent = textDay;
    loginBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        formEl.style.display ="block"
        })   

}
function display(){
    setInterval(countDown, 1000);
    login()
  
}
display()
     



    
