if(localStorage.getItem("time") == "night"){
    window.location.href = "testBlack.html";
}

const body = document.querySelector("body");
const poleTest = document.getElementById("poleTest");
const zagolovok = document.getElementById("zagolovok");
const bAll = document.querySelectorAll("b");
const sendTestBut = document.getElementById("sendTestBut");
const homeButEnd = document.getElementById("homeButEnd");
const returnBut = document.getElementById("returnBut");
const poleEnd = document.getElementById("poleEnd");
const outEnd = document.getElementById("outEnd");
localStorage.setItem("location", `${window.location.href}`);
const taimer = document.getElementById("taimer");
let count = 0;
let go = true;
let zatTime = "";

setInterval(()=>{
    if(go){
        count += 1;
        if(String(Math.trunc(count / 3600)).length < 2){
            zatTime += `0${Math.trunc(count / 3600)}`;
        }
        else{
            zatTime += Math.trunc(count / 3600);
        }
        count -= 3600 * Math.trunc(count / 3600);
        zatTime += ":"
        if(String(Math.trunc(count / 60)).length < 2){
            zatTime += `0${Math.trunc(count / 60)}`;
        }
        else{
            zatTime += Math.trunc(count / 60);
        }
        count -=  60 * Math.trunc(count / 3600);
        zatTime += ":";
        if(String(count % 60).length < 2){
            zatTime += `0${count % 60}`;
        }
        else{
            zatTime += count % 60;
        }
        taimer.innerHTML = zatTime;
        zatTime = "";
    }
}, 1000);

sendTestBut.addEventListener("click", ()=>{
    go = false;
    let kolvo = 0;
    if(document.getElementById("oneOne").checked){
        kolvo += 1;
    }
    if(document.getElementById("threeTwo").checked){
        ++kolvo;
    }
    if(document.getElementById("oneThree").checked){
        ++kolvo
    }
    if(document.getElementById("oneFour").checked && document.getElementById("threeFour").checked && document.getElementById("fourFour").checked){
        ++kolvo;
    }
    if(document.getElementById("threeFive").checked){
        ++kolvo;
    }
    if(document.getElementById("twoSix").checked){
        ++kolvo;
    }
    if(document.getElementById("oneSeven").checked){
        ++kolvo;
    }
    if(document.getElementById("fourEight").checked){
        ++kolvo;
    }
    poleEnd.style.left = "0%";
    outEnd.innerHTML = `У вас ${kolvo} из 8`;
    body.style.overflow = "hidden";
});
