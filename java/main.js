
let shopMenu = document.querySelector("#shop");
let menu = document.querySelector(".listMenu");
let barMenu =document.querySelector(".bars");
let navMenu=document.querySelector(".list");
let listMenu=document.querySelector(".listMenu");
let searchIcons=document.querySelector("#search");

// change color on click color
let header=document.querySelector("#color");
let arrlogo=document.querySelectorAll(".arrlogo");
let varialeH =document.querySelector("#variable");
let varialeT =document.querySelector("#variableTwo");
let lineWord=document.querySelector("#back")
// function hover shop nav
{shopMenu.onmousemove=()=>menu.style.display="block" ;
shopMenu.onmouseout =()=> menu.style.display="none";}
//function hover bars menu
{
barMenu.addEventListener("mousemove",()=>navMenu.style.display="flex",navMenu.style.transition="0.7s")
barMenu.onmouseenter=()=>navMenu.style.display="none";
}
// function changecolor onclick changecolor
{let color=["#363940" ,"#ee82ee"];
let i=0;

header.addEventListener("click",function(){
header.style.color= color[i];
header.style.transition="0.4s";
lineWord.style.color =color[i];
lineWord.style.transition="0.4s";
arrlogo.forEach(function(ele){
ele.style.color=color[i];
ele.style.transition="0.4s";
});
varialeH.style.color=color[i];
varialeH.style.transition="0.4s";
varialeT.style.color=color[i]
varialeT.style.transition=".4s";
i++;
if(i > color.length){
i=0;
}
})}

// function control charchater
{let counter =1;
function controlChar(){
  let title="Best Service Of Online Flowers Delivery In Egypt ";
  back.innerText = title.slice(0 ,counter);
  counter++;
  if(title.length < counter){
    counter=1;
  }
}
setInterval(controlChar,300)}
