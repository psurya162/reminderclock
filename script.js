function clock(){
    let date= new Date();
    let hours =date.getHours();
    let minutes =date.getMinutes();
    let seconds =date.getSeconds();
    

    if (hours>=12){
        hours=hours-12
    }
    console.log(hours,minutes,seconds);


    let hrss=document.getElementById("hourss");
    hrss.innerText = hours;
    let mins=document.getElementById("minute");
    mins.innerText=minutes;
    let sec=document.getElementById("second");
    sec.innerText=seconds;

  

}
setInterval(()=>{

    clock()
},1000)

let date =new Date();
let hours=date.getHours();

if(hours>=12){
    let ampm=document.getElementById("AM_BOX");
    ampm.innerText="PM";
}
else{
    let ampm=document.getElementById("AM_BOX");
    ampm.innerText="AM";
}



const greeting =document.getElementById("greeting")
// console.log(greeting,"greet");
if(hours>=0 && hours<11){
    greeting.innerHTML="GOOD MORNING"
}
if(hours>=12 && hours<16){
    greeting.innerHTML="GOOD AFTERNOON !"
}
if(hours>=16 && hours<20){
    greeting.innerHTML="GOOD EVENING !"
}
if(hours>=20 && hours<=23){
    greeting.innerHTML="GOOD NIGHT !"
}


btn.addEventListener('mouseenter', () => {
    btn.textContent = 'PARTY TIME';
});

btn.addEventListener('mouseleave', () => {
    btn.textContent = 'SET TIME';
});


// btn.addEventListener("mouseover", function(){
//     console.log("mouse hover");
//     this.innerText = "Party time"
// })
// btn.addEventListener("mouseout", function(){
//     this.innerText = "Set Alarm"
// })



btn.addEventListener("click",function(){
    const date = new Date();
    const hours = date.getHours();

    const wakeup = document.getElementById("wake_up")
    const lunch = document.getElementById("Lunch_time")
    const nap = document.getElementById("NAP_TIME")
    const goodnight = document.getElementById("night_time")
    
    if(parseInt(wakeup.value)===hours){
        document.getElementById("greeting2").innerHTML="GRAB SOME BREAKFAST"
        document.getElementById("image_change").src="./Component 30 – 1.png"
        

        
        
    }
    else if(parseInt(lunch.value)===hours){
        document.getElementById("greeting2").innerHTML="GRAB SOME LUNCH"
        document.getElementById("image_change").src="./lucnch.svg" 
    }
    else if(parseInt(nap.value)===hours){
        document.getElementById("greeting2").innerHTML="STOP YAWING ,GET SOME TEA ITS JUST EVENING"
        document.getElementById("image_change").src="./evening.png" 
    }
    else if(parseInt(goodnight.value)===hours){
        document.getElementById("greeting2").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById("image_change").src="./night.svg" 
    }
    
    const timing = document.getElementsByClassName('timing_Sett')
    timing[0].innerText=wakeup.options[wakeup.selectedIndex].text;
    timing[1].innerText=lunch.options[lunch.selectedIndex].text;
    timing[2].innerText=nap.options[nap.selectedIndex].text;
    timing[3].innerText=goodnight.options[goodnight.selectedIndex].text;
    
    
})
