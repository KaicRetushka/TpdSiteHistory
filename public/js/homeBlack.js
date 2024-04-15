if(localStorage.getItem("time") != "night"){
    window.location.href = "../home.html";
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
const zag = document.getElementById("zag");
const zagH1 = document.querySelector("#zag h1");
const zagP = document.querySelector("#zag p");
const textArtAll = document.querySelectorAll(".textArt");
const textFooter = document.getElementById("textFooter");
const h1ArtAll = document.querySelectorAll(".h1Art");
const imgArt = document.querySelectorAll(".imgArt");
const palkaAll = document.querySelectorAll(".palka");
const butArtPAll = document.querySelectorAll(".butArt p");
const butArt1 = document.getElementById("butArt1");
const butArt2 = document.getElementById("butArt2");
const butArt3 = document.getElementById("butArt3");
const footer = document.querySelector("footer");
localStorage.setItem("location", `${window.location.href}`);

function makeNight(){
    localStorage.setItem("time", "night");
    DayOrNight.style.border = "5px solid #6A5ACD";//
    DayOrNight.style.backgroundColor = "#272727";//
    circle.style.backgroundColor = "#8D8D8D";//
    circle.style.left = "72px";//
    body.style.backgroundColor = "#272727";//
    header.style.backgroundColor ="#1A1A1A";//
    headerAH1.style.color = "#6A5ACD";//
    zag.style.backgroundColor = "#1A1A1A";//
    for(let i = 0; i < textArtAll.length; ++i){
        textArtAll[i].style.color = "whitesmoke";//
    }
    textFooter.style.color = "#1A1A1A";//
    oknoVaezd.style.backgroundColor = "#1A1A1A";//
    for(let i = 0; i < outButOknoVaezdAPAll.length; ++i){
        outButOknoVaezdAPAll[i].style.color = "#6A5ACD";//
    }
    for(let i = 0; i < h1ArtAll.length; ++i){
        h1ArtAll[i].style.color = "#6A5ACD";//
    }
    for(let i = 0; i < imgArt.length; ++i){
        imgArt[i].style.border = "5px solid #6A5ACD";//
    }
    for(let i = 0; i < palkaAll.length; ++i){
        palkaAll[i].style.backgroundColor = "#6A5ACD";
    }
    zagH1.style.color = "#6A5ACD";//
    zagP.style.color = "#6A5ACD";//
    for(let i = 0; i < butArtPAll.length; ++i){
        butArtPAll[i].style.border = "5px solid #6A5ACD";
        butArtPAll[i].style.color = "#6A5ACD";
    }
    footer.style.backgroundColor = "#6A5ACD";
    headerA.href = "homeBlack.html";
    salkaOkno2.href = "aboutBlack.html";
    butArt1.href = "firstSiteBlack.html";
    butArt2.href = "evoluSiteBlack.html";
    butArt3.href = "allsiteBlack.html";
    butArt4.href = "partsSiteBlack.html";
    localStorage.setItem("location", `homeBlack.html`);
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
    zag.style.backgroundColor = "#5cdb95";
    for(let i = 0; i < textArtAll.length; ++i){
        textArtAll[i].style.color = "black";
    }
    textFooter.style.color = "#edf5e1";
    oknoVaezd.style.backgroundColor = "#5cdb95";
    for(let i = 0; i < outButOknoVaezdAPAll.length; ++i){
        outButOknoVaezdAPAll[i].style.color = "#05386b";
    }
    for(let i = 0; i < h1ArtAll.length; ++i){
        h1ArtAll[i].style.color = "#05386b";
    }
    for(let i = 0; i < imgArt.length; ++i){
        imgArt[i].style.border = "5px solid #05386b";
    }
    for(let i = 0; i < palkaAll.length; ++i){
        palkaAll[i].style.backgroundColor = "#05386b";
    }
    zagH1.style.color = "#05386b";
    zagP.style.color = "#05386b";
    for(let i = 0; i < butArtPAll.length; ++i){
        butArtPAll[i].style.border = "5px solid #379683";
        butArtPAll[i].style.color = "#379683";
    }
    footer.style.backgroundColor = "#05386b";
    headerA.href = "../home.html";
    salkaOkno2.href = "about.html";
    butArt1.href = "firstSite.html";
    butArt2.href = "evoluSite.html";
    butArt3.href = "allsite.html";
    butArt4.href = "partsSite.html";
    localStorage.setItem("location", `../home.html`);
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
