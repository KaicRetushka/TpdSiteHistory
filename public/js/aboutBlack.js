
if(localStorage.getItem("time") != "night"){
    window.location.href = "about.html";
}

const infoIzmena = document.getElementById("infoIzmena");
const threePalki = document.getElementById("threePalki");
const oknoVaezd = document.getElementById("oknoVaezd");
const outButOknoVaezdAPAll = document.querySelectorAll("#outButOknoVaezd a p");
const salkaOkno2 = document.getElementById("salkaOkno2");
const NoOknoVaezdBut = document.getElementById("NoOknoVaezdBut");
const greyOkno = document.getElementById("greyOkno");
const DayOrNight = document.getElementById("DayOrNight");
const circle = document.getElementById("circle");
const body = document.querySelector("body");
const header = document.querySelector("header");
const headerA = document.querySelector("header a");
const headerAH1 = document.querySelector("header a h1");
const palkaAll = document.querySelectorAll(".palka");
const footer = document.querySelector("footer");
const photoElka = document.getElementById("photoElka");
const photoVlad = document.getElementById("photoVlad");
const zagolovok = document.getElementById("zagolovok");
const photoAll = document.querySelectorAll(".photo");
const labelTextAll = document.querySelectorAll(".labelText");

let chetPhoto = 1;
localStorage.setItem("location", `${window.location.href}`);



function makeNight(){
    localStorage.setItem("time", "night");
    DayOrNight.style.border = "5px solid #6A5ACD";
    DayOrNight.style.backgroundColor = "#272727";
    circle.style.backgroundColor = "#8D8D8D";
    circle.style.left = "72px";
    body.style.backgroundColor = "#272727";
    header.style.backgroundColor ="#1A1A1A";
    headerAH1.style.color = "#6A5ACD";
    textFooter.style.color = "#1A1A1A";
    oknoVaezd.style.backgroundColor = "#1A1A1A";
    for(let i = 0; i < outButOknoVaezdAPAll.length; ++i){
        outButOknoVaezdAPAll[i].style.color = "#6A5ACD";
    }
    for(let i = 0; i < palkaAll.length; ++i){
        palkaAll[i].style.backgroundColor = "#6A5ACD";
    }
    zagolovok.style.color = "#6A5ACD";
    for(let i = 0; i < photoAll.length; ++i){
        photoAll[i].style.border = "5px solid #6A5ACD";
        labelTextAll[i].style.color = "#6A5ACD";
    }
    footer.style.backgroundColor = "#6A5ACD";
    headerA.href = "homeBlack.html";
    salkaOkno2.href = "aboutBlack.html";
    localStorage.setItem("location", `aboutBlack.html`);
    document.querySelector("[href='test.html']").href = "testBlack.html";
}

function makeDay(){
    localStorage.setItem("time", "day");
    DayOrNight.style.border = "5px solid #05386b";
    DayOrNight.style.backgroundColor = "#42AAFF"
    circle.style.backgroundColor = "yellow";
    circle.style.left = "18px";
    body.style.backgroundColor = "#edf5e1";
    header.style.backgroundColor = "#5cdb95";
    headerAH1.style.color = "#05386b";
    textFooter.style.color = "#edf5e1";
    oknoVaezd.style.backgroundColor = "#5cdb95";
    for(let i = 0; i < outButOknoVaezdAPAll.length; ++i){
        outButOknoVaezdAPAll[i].style.color = "#05386b";
    }
    for(let i = 0; i < palkaAll.length; ++i){
        palkaAll[i].style.backgroundColor = "#05386b";
    }
    zagolovok.style.color = "#05386b";
    for(let i = 0; i < photoAll.length; ++i){
        photoAll[i].style.border = "5px solid #05386b";
        labelTextAll[i].style.color = "#05386b";
    }
    footer.style.backgroundColor = "#05386b";
    headerA.href = "../home.html";
    salkaOkno2.href = "about.html";
    localStorage.setItem("location", `about.html`);
    document.querySelector("[href='testBlack.html']").href = "test.html";
}

DayOrNight.addEventListener("click", ()=>{
    console.log(localStorage.getItem("time"));
    if(localStorage.getItem("time") == undefined || localStorage.getItem("time") == "day"){
        makeNight();
        console.log("Стала ночь");
    }
    else if(localStorage.getItem("time") == "night"){
        makeDay();
    }
});

threePalki.addEventListener("click", function (){
    oknoVaezd.style.left = "75%";
    greyOkno.style.right = "0%";
});

NoOknoVaezdBut.addEventListener("click", function(){
    oknoVaezd.style.left = "100%"
    greyOkno.style.right = "100%";
});

greyOkno.addEventListener("click", ()=>{
    oknoVaezd.style.left = "100%"
    greyOkno.style.right = "100%";
});

setInterval(()=>{
    if(chetPhoto == 1){
        photoElka.src = "../public/img/Elka2.png";
        photoVlad.src = "../public/img/vlad2.jpg";
        chetPhoto = 2;
    }
    else if(chetPhoto == 2){
        photoElka.src = "../public/img/Elka3.png";
        photoVlad.src = "../public/img/vlad3.jpg";
        chetPhoto = 3;
    }
    else if(chetPhoto == 3){
        photoElka.src = "../public/img/Elka1.png";
        photoVlad.src = "../public/img/vlad1.jpg";
        chetPhoto = 1;
    }
}, 3000);