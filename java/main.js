// function sayhello(userName , age){
//   if(age <=18){
//     console.log("app not satiable User");
//   }
//   else{
//     console.log(`Hello ${userName} is age ${age}`);
//   } 
// }
// sayhello("osama" , 38);
// sayhello("ahmed ", 24);
// sayhello("wael ", 18);
// function month( start , end , excute){
//   for(let i = start; i <=end ; i++){
//     if(i === excute){
//       continue;
//     }
//     console.log(`${i}`);

//   }
// }
// month(1990 , 2022 , 1998);
// function calc( num1 ,num2){
//   return num1 + num2;
// }
// let result = calc(10 , 20);
// console.log(result +100);
// function range(start , end ){
//   for(let i = start ; i <= end ; i++){
  
//     console.log(`${i}`); 
//     if(i === 15){
//       return `Interruptting`;
//     }
  
//   }
// }
// range(10 , 30);
// function sayhello(userName="ادخل بيانات العميل " , Age ="ادخل عمر العميل يكون "){
// //   if(Age===undefined){
// //     Age= "ادخل بيانات العمر";
// //   }
// // userName = userName||"ادخل بيانات العميل";
//   console.log(` hello ${userName} is age ${Age}`); 
// }
// sayhello("ahmed");
// sayhello("", 23);
// // sayhello();
// function sum(...number){
  
//   let result = 0;
//   for(let i = 0 ;i < number.length ; i++){
//     result+=number[i];
//   } 
//   return `Final is Result ${result}`;
// }
// console.log (sum(10 , 20 , 30 ,40 , 50, 50));
// function showinfo(us ="un", ag="un" , rt=0, show ,...sk){
//   document.write(`<div>`);
//   document.write(`<p> UserName Is ${us}</p>`);
//   document.write(`<p>Age Is ${ag}</p>`);
//   document.write(`<p>rate with:${rt}</p>`);
//   if(show==="yes"){
//       if( sk.length > 0){
//         document.write(`<p>${sk.join(" | ")} </p>`);
//       }
//       else{
//         document.write(`hidden skills`);
//       }
//   }
//   else{
//     document.write(`<p> skill is hidden</p>`);
//   }
//   document.write(`</div>`);

// }
// showinfo("ahmed",10, 50 ,"no" ,"html","css");
// function sayhello(theName ,theGender){
//   if(theGender==="Male"){
//     console.log(`Hello M.R ${theName}`);
    
//   }
//   else if(theGender==="Female"){
//     console.log(`Hello Miss ${theName}`);}
  
//   else{
//     console.log(`Hello ${theName} `);
//   }

// }
// sayhello("Ahmed" , "Male");
// sayhello("Menna" ,"Female");
// sayhello("Osama");



// function showDetails(a="uk" , b="uk" , c="uk"){
//   let info=[a , b , c ];
//   let sentence;
//   for(let i = 0 ; i< info.length;i++){
//   typeof info[i]=== "string"? a=info[i]:
//   typeof info[i]=== "number"? b=info[i]:
//   typeof info[i]=== "boolean"?c=info[i]:
//   "incorrect data type"  
// }
// c==true? sentence="we are avialbele": sentence="we are not avialable";
// console.log(`Hello is ${a}, My Age Is ${b} ,${sentence}.`);
// }
// showDetails("ahmed",25 ,true);
// showDetails("mohamed",false , 35);
// showDetails(25, "ahmed" ,true);
// showDetails(false, 25 , "ahmed");
// function myOperators(firstNum="first not found" , secondNum="seconde not found" ,opertator){
//   if(opertator==="add"){
//     let result = firstNum + secondNum ;
//     console.log(result);
//   }else if(opertator==="subtract"){
//     let result= firstNum - secondNum;
//     console.log(result);
//   }else if(opertator==="mulitply"){
//     let result =firstNum * secondNum;
//     console.log(result);
//   }else{
//     console.log(firstNum + secondNum);
//   }
// }
// myOperators(20 , 30);
// myOperators(20 , 30 ,"add" );
// myOperators(20 , 30 ,"subtract" );
// myOperators(20 , 30 ,"mulitply");
// function getAge(theAge){
// if(theAge > 10 && theAge < 100){
//     let month = theAge * 12;
// let weeks = theAge * 52 ;
// let days =theAge * 365;
// console.log(`${month} => per Month `);
// console.log(`${weeks} => per Weeks `);
// console.log(`${days} => per Days`)
// }else{
//     console.log("Age out of Range");
// }
// }
// // getAge(38);
// function checkstatus(a , b , c){
//     let info =[a , b ,c];
//     let sentence;
//     for(let i = 0 ; i< info.length; i++){
//         typeof info[i]==="string"? a = info[i]:
//         typeof info[i]==="number"? b = info[i]:
//         typeof info[i]==="boolean" ?c=info[i]:
//         "incorrect data"

//     }
//     c==true? sentence="we are avliable work":sentence="we are not avaialble work";
//     console.log(`this is name ${a} , this is age${b} , ${sentence}`);
// }
// checkstatus("ahmed ", 12 ,true);
// checkstatus(12 , "ahmed" ,false);
// // checkstatus(false , "ahmed" ,25);
// function multi(...number){

//     let result=1;
//     for(let i = 0; i< number.length; i++){
//         if(typeof number[i]==="number")
        
//             result*=Number.parseInt(number[i]) ;
    
//         }
//         console.log(result);   
// }
// multi(10 , 30);
// multi(20 ,40 ,"ahmed");
// multi("ahmed" ,20 ,30);
// let calc= function (num1 , num2){
//     return num1 +num2;
// }
// console.log(calc(10 , 20));

// document.getElementById("show").onclick= sayhello;
// function sayhello(){
//     console.log("hello ahmed");
// }
// setTimeout(function() {
//    console.log("Good") 
// }, 2000);
// function sayHello(fName ,lName){
//     let message="Hello";
//     function calc(){
//         message = `${message} ${fName} ${lName}`;
//     }
//     calc();
//     return message;

// }
// console.log(sayHello("osama" , "mohamed"));
// function sayHello(fName ,lName){
//     let message="Hello";
//     function calc(){
//         return `${message} ${fName} ${lName}`;
//     }
    
//     return calc();

// }
// console.log(sayHello("osama" , "mohamed"));
// function sayHello(fName ,lName){
//     let message="Hello";
//     function calc(){
//         function fullName(){
//             return `${fName} , ${lName}`;
//         }
//         return  `${message} , ${fullName()} `;
//     }
//     return calc();
// }
// console.log(sayHello("osama" , "mohamed"));
// // console.log(sayHello("ahmed" , "reda"));
// function calc(num1 , num2){
//     return num1 + num2;
// }
// console.log(calc(10,20));

// let calc =(num1 , num2)=> num1 + num2;
// console.log(calc(10,20));
// let calc=num1=>num1;
// console.log(calc(10));
// let calc=(num1 ,num2 ,num3)=>num1+num2+num3;
// console.log(calc(10 , 20 , 30));
// let a=10;
// var b =15;
// console.log(`Globel element ${a}`);
// console.log(`Globel element ${b}`);
// function num(){
//     var a=500;
//     var b=350;
//     console.log(`Local element ${a}`);
//     console.log(`Local element ${b}`);
// }
// num();
// let names=function(...name){
//     return `string [${name.join("] , [")}] =>Done!`;
// }
// console.log(names("Osama","Ahmed" ,"Ibrahim","Ali","Mohamed"));
// let names=(...name)=>`string [${name.join("],[")}] =>Done!`;
// console.log(names("Osama","Ahmed" ,"Ibrahim","Ali","Mohamed"));
// let myNumber = [20 , 50 , 10 , 60];
// let calc=(one , two , ...nums)=> one+ two + Number(nums)
// console.log(calc(10 , 20 ,50));
// let myNumber = [20 , 50 , 10 , 60];
// let calc=function(one , two , ...nums){

// return one+ two + Number(nums);
// }
// console.log(calc(10 ,myNumber[0],myNumber[1]));


// let itsMe = itsMe =>`Iam A Normal Function`;
//   console.log(itsMe()); 

// let urlCreate = (protocol, web, tld)=>`${protocol}://www.${web}.${tld}`;  
//   console.log(urlCreate("https", "elzero", "org"));
// function specialDate(...num){
//     return function(){
//         for(let i =0 ;i<num.length ; i++){
//         return typeof num[i]==="number"? result* = num[i]
//     }
//     }

// // }
// let data=(p1)=>{
//     return(p2)=>{
//         return(p3)=>{
//             return `${p1} ,${p2} ,${p3}`;
//         }
//     }
// }
// let date =data("bt")("sh")("bm");
// console.log(date);

// let dat =(x , y) => x*y;
// console.log(dat(10 ,20));
// let num =[ 1 , 2 , 3 , 4 , 5];
// let newArray=[];
// for(let i= 0 ; i<num.length ; i++){
//     newArray.push(num[i]+num[i]);
// }
// console.log(newArray);
// let number = num.map(function(element,index,arr){    
//     return element +element;
// },10)
// console.log(number);
// let number = num.map((element,index,arr)=> element +element);
// console.log(number);
// function addition(ele){
//     return ele * ele
// }
// let number =num.map(addition);
// console.log(number);
// let swapping ="ELzero";
// let sw=swapping.split("").map(function(ele){
//     return ele === ele.toUpperCase()? ele.toLowerCase():ele.toUpperCase();

// }).join("");
// console.log(sw);
// let swapping ="ELzero";
// let sw=swapping.split("").map((ele)=>ele === ele.toUpperCase()? ele.toLowerCase():ele.toUpperCase()).join("");
// console.log(sw);
// let number=[1, 2 , -3 , -4 ,5];
// let num = number.map(function(ele)
// {
//     return -ele;
// })
// // console.log(num);
// let number=[1, 2 , -3 , -4 ,5];
// let num = number.map((ele)=>-ele);
// console.log(num);
// let group = "elz4875r45o";
// let gr=group.split("").map(function(ele)
// {
//     return isNaN(parseInt(ele))? ele :"";

// }).join("")
// console.log(gr);
// let group = "elz48e75r45o";
// let gr=group.split("").map((ele)=>isNaN(parseInt(ele))? ele :"").join("")
// console.log(gr);
// let mix ="A138S2zx";
// let number = mix .split("").filter(function(ele){
   
//     return !isNaN(parseInt(ele));
//  }).map(function(ele){
//      return ele * ele;
//  }).join(" ");
// console.log(number);
// let string="i love foood playing with name"
// let name = string.split(" ").filter(function(ele){
//     return ele.length >4 ;
// }).join(" ")
// console.log(name);
// let number=[10 , 20 , 30 , 50];
// let num=number.reduce(function(acc , current ,index , arr){

//     return acc + current;
// })
// console.log(num);
// let bigChar=["ahmed" , "redssjhy","love you with","hamhg","shgg"]
// let Char=bigChar.reduce((acc,current)=>{acc.length < current.length? current:acc;})
// console.log(Char);
// let Name =["E" ,"L","@","E", "@","Z","R" ,"@","@","O"]
// let fi=Name.filter(function(ele){
//     return ! ele.startsWith("@");
// }).reduce(function(acc ,current){
//     return `${acc}${current}`;
// })
// // console.log(fi);
// let name =document.querySelectorAll("ul li");
// let a =document.querySelectorAll(".content div")
// name.forEach(function(ele){
//     ele.onclick=function(){
//         name.forEach(function(ele){

//             ele.classList.remove("active");
//         }),
//             this.classList.add("active");
        
//       a.forEach(function(ele){
//           ele.style.display="none";
//       });
//     };
// });
// let string ="1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";
// let fi=string.split(",").filter((ele)=>isNaN(ele)).map((ele)=>!ele.startsWith("_")? ele:"").reduce((acc , current)=>`${acc} ${current}`).slice(true , -true);
// console.log(fi);
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let Name =mix.map(function(ele){
//     return isNaN(parseInt(ele))? ele :"";

// }).reduce(function(acc ,current){
//     return acc + current;
// })
// console.log(Name);
// let myString = "EElllzzzzzzzeroo";
// let string=myString.split("").filter(function(ele,index){
//     return ele !== myString[index+1];
// }).reduce(function(acc ,current){
//     return`${acc}${current}`;
// })
// // console.log(string);
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let my =myArray.reduce((element,current)=>(element + current).split("")).filter((ele)=>ele!==",").reduce((acc, car)=> acc + car);console.log(my);
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let my =numsAndStrings.filter((ele)=>parseInt(ele)).map((ele)=> -ele);console.log(my);
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let my =nums.reduce((acc ,current)=>current % 2 ===0? acc * current:acc + current);console.log(my);


// let myVar="Support";
// let User={
// theName: "Osama",
// theAge: 38 ,
// "contry":"egypt",
// Support:"Technology",
// sayHello:function(){
//     return`Hello`;
// }
// };
// console.log(`${User.sayHello()} My Name ${User.theName} Is Age ${User.theAge} ${User["contry"]} ${User["theName"]} ${User[myVar]}`);
// let User={
//     thisName:"Ahmed",
//     thisAge:24,
//     avialble: false,
//     address:{
//         ksa:"madena",
//         egypt:{
//             one:"cairo",
//             two:"Mansoura",
//         },
//     },
//     checkAv:function(){
//         if(User["avialble"]===true){
//             return`free with work`;

//         }
//         else{
//             return`Not free Work`;
//         }
//     }
// }
// console.log(`${User.thisName} ${User.thisAge} ${User.checkAv()} ${User.address.ksa} ${User["address"]["egypt"]["one"]}`);
// let user =new Object({
// theAge:25});
// console.log(user.theAge)
// console.log(user.theAge);
// user.theAge=26,
// user["theNAme"]="osama",
// console.log(user.theAge);
// console.log(user.theNAme);
// let user={
//     age:25,
//     dabuleAge:function(){
//         return this.age * 2;
//     },

// };
// console.log(user);
// console.log(user.age);
// console.log(user.dabuleAge());
// let obj = Object.create(user);
// obj.age=50;
// console.log(obj)
// console.log(obj.age);
// console.log(obj.dabuleAge());
// let a =Object.create(user);
// a.age = 30;
// console.log(a);
// console.log(a.age);
// console.log(a.dabuleAge());
// let member={
//     theName:"Elzero",
//     theAge: 38,
//     theCountry:"Egypt",
//     fullDetails:function(){
//         return`My Name Is${member.theName}, My Age Is ${member.theAge},I Live In ${member.theCountry}`;
//     },
// };
// console.log(member.theName);
// console.log(member.theAge);
// console.log(member.theCountry);
// console.log(member.fullDetails());
// let objectOethodOne={
//     property:"Method one",
// }
// console.log(`"${objectOethodOne.property}"`);
// let objMethodTwo = Object({
//     property:"Method two",
// });
// console.log(`"${objMethodTwo.property}"`);
// let objMethodThree = Object .create({
//     property:"Method three",
// });
// console.log(`"${objMethodThree.property}"`);
// let objMethodFour = Object .assign({
//     property:"Method Four",
// })
// console.log(`"${objMethodFour.property}"`);
// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };
// let finalObject = Object.assign({a},threeNums , twoNums);


// console.log(finalObject);
// let myFavGames = {
//     "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//     },
//     "Titan Quest": {
//       publisher: "THQ",
//       bestThree: {
//         one: "Immortal Throne",
//         two: "Ragnarök",
//         three: "Atlantis",
//       },
//       price: 50,
//     },
//     YS: {
//       publisher: "Falcom",
//       bestThree: {
//         one: "Oath in Felghana",
//         two: "Ark Of Napishtim",
//         three: "origin",
//       },
//       price: 40,
//     },
//   };
  
//   // Code One => How To Get Object Length ?
//   let objectLength = Object.keys(myFavGames).length
  
//   for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//     console.log(`The Publisher Is ???????`);
//     console.log(`The Price Is ???????`);
  
//     // Check If Nested Object Has Property (bestThree)
//     if (???????) {
//       console.log("- Game Has Releases");
//       console.log(`First => ???????`);
//       console.log(`Second => ???????`);
//       console.log(`Third => ???????`);
//     }
//     console.log("#".repeat(20));
  // }


// console.log(Number.MAX_SAFE_INTEGER.toString().length);
// function increment(){
//   let x,y,z;
//   x=5;
//   y=x++;
//   z=--y; 
//   return `my is${y}`;
// }
// console.log(increment());
// let doc=document.getElementsByClassName(".content");
// let m =document.querySelector(".content");
// let s =document.querySelectorAll("span");
// let w =document.getElementById("ahmed")
// console.log(document.links[1]);
// let myElement =document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);
// myElement.innerHTML="text from <span>Main js</span> fils";
// myElement.textContent="text from <span>Main js</span> fils";
// document.images[0].src="www.google.com";
// document.images[0].alt="ahmed";
// document.images[0].title="this";
// document.images[0].className="img";
// document.images[0].id="a";
// let mylink=document.querySelector(".link") 
// console.log(mylink.getAttribute("class"));
// console.log(mylink.getAttribute("href"));
// mylink.setAttribute("href" ,"www.twitter.com");
// mylink.setAttribute("title","twiter");
// mylink.setAttribute("class","twiter");
// mylink.setAttribute("id","twiter");
// console.log(mylink.getAttribute("href"));
// console.log(mylink.getAttribute("class"));
// let links=document.querySelector(".link");
// console.log(links.getAttribute("class"));
// console.log(links.getAttribute("href"));
// links.setAttribute("href","www.twiter.com");
// links.setAttribute("class","medoo");
// links.setAttribute("id","memo");
// console.log(links.getAttribute("href"));
// console.log(links.getAttribute("class"));
// console.log(links.getAttribute("id"));
// console.log(document.getElementsByTagName("p")[0].attributes);
// // let mpy=document.getElementsByTagName("p")[0];
// if(mpy.hasAttribute("data-src")){
// if(mpy.getAttribute("data-src")===""){
//   mpy.removeAttribute("data-src");
// }else{
//   mpy.setAttribute("data-src","new value");
// }
// }else{
//   console.log("not found");
// }
//   if(mpy.hasAttributes()){
//     console.log("has attr")
//   }
//   if(document.querySelector("div").hasAttributes()){
//     console.log("found");
//   }else{
//     console.log("not Found");
//   }
// console.log(document.getElementsByTagName("p")[0].attributes);
// let myp= document.getElementsByTagName("p")[0];
// if(myp.hasAttribute("data-src")){
// if(myp.getAttribute("data-src")===""){
//   myp.removeAttribute("data-src");
// }
// else{
//   myp.setAttribute("data-src","new value");
// }
// }
// else{
//   console.log("not found")
// }
// console.log(document.getElementsByTagName("p")[0].attributes);
// let myp=document.getElementsByTagName("p")[0];

// if(myp.hasAttribute("data-src")){
// if(myp.getAttribute("data-src")===""){
//   myp.removeAttribute("data-src");

// }else{
//   myp.setAttribute("data-src","new value");
// }
// }else{
// console.log(`not Found`);
// }
// if(myp.hasAttributes()){
//   console.log(`Found`);
// }else{
//   console.log(`Not Found`);
// }
// if(document.getElementsByTagName("div")[0].hasAttributes()){

// console.log(`has Attribute`);

// }else{
//   console.log(`Not Has Attribute`)
// }
// for(let i=0; i<10;i++){
// let mainElement=document.createElement("div");
// let mainHeading=document.createElement("p");
// let mainTile=document.createElement("h2");
// let headindText = document.createTextNode(`Title Product => ${[i]}`);
// let mainTileTT = document.createTextNode("Description");
// mainHeading.appendChild(headindText);
// mainElement.appendChild(mainHeading);
// mainTile.appendChild(mainTileTT);
// mainElement.appendChild(mainTile);
// console.log(mainElement);
// document.body.appendChild(mainElement)[i]};
// let myMainDiv = document.createElement("div");
// let myMainh1 = document.createElement("h2");
// let myMainp  = document.createElement("p");

// let hReading = document.createTextNode("Ahmd Rda ");
// let pReading = document.createTextNode("Front End Developer");
// myMainDiv.className="product";
// myMainh1.appendChild(hReading);
// myMainDiv.appendChild(myMainh1);
// myMainp.appendChild(pReading);
// myMainDiv.appendChild(myMainp); 
// document.body.appendChild(myMainDiv);
// let m =document.querySelector("[name = 'user']");
// let w =document.querySelector("[name = 'age']");
// document.forms[0].onsubmit=function(a){
//   let uservalid=false;
//   let agevalid=false;
//   if(m.value !== "" && m.value.length <=10){
//     uservalid=true;
//   }
//   if(w.value!==""){
//     agevalid=true;
//   }
//   if(uservalid===false || agevalid===false){
//     a.preventDefault();
//   }
// };
// for(let i = 0 ;i <= 10 ;i++){
// let img = document.getElementsByTagName("div")[i];
//  document.images[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//  document.images[i].alt="Elzero logo";
// };
// let myInput= document.forms[0].dollar
// let mainDiv =document.querySelector(".result");

//   myInput.addEventListener("input" ,()=>{
// let result=0;
// myInput.value===""? result: result=myInput.value

// mainDiv.innerHTML=`${result}  USD Doller = ${(result*15.6).toFixed(2)} Egyption Pounds`  
// });
// let mainDiv=document.querySelector(".one");
// let maDiv =document.querySelector(".two");

// let titleOne=maDiv.title;
// let contentone=maDiv.textContent;
// let titletwo=mainDiv.title;
// let contentTwo=mainDiv.textContent;
// mainDiv.title=titleOne;
// maDiv.title=titletwo;
// mainDiv.textContent=contentone;
// maDiv.textContent=`${contentTwo}${maDiv.attributes.length}`;
// console.log(mainDiv);
// console.log(maDiv);

// let oneMainDiv=document.querySelector(".one");
// let twoMainDiv=document.querySelector(".two");
// let titleOne=twoMainDiv.title;
// let contentOne=twoMainDiv.textContent;
// let titleTwo=oneMainDiv.title;
// let contentTwo=oneMainDiv.textContent;
// oneMainDiv.title=titleOne;
// twoMainDiv.title=titleTwo;
// oneMainDiv.textContent=contentOne;
// twoMainDiv.textContent=`${contentTwo} => ${twoMainDiv.attributes.length}`;
// console.log(oneMainDiv);
// console.log(twoMainDiv);

// for(let i=0; i < document.images.length ;i++){
// if(document.images[i].alt===""){
//   document.images[i].alt="Elzero New";
// }
// else{
//   document.images[i].alt="Old";
// }
// }
//let m =document.querySelector("[name = 'user']");
// let w =document.querySelector("[name = 'age']");
// document.forms[0].onsubmit=function(a){
//   let uservalid=false;
//   let agevalid=false;
//   if(m.value !== "" && m.value.length <=10){
//     uservalid=true;
//   }
//   if(w.value!==""){
//     agevalid=true;
//   }
//   if(uservalid===false || agevalid===false){
//     a.preventDefault();
//   }
// };
// let myInput=document.querySelector("[name='elements']");
// let myMainInput=document.querySelector("[name='texts']");
// let myMain=document.querySelector("[name='create']");

// document.forms[0].onsubmit=function(a){
  
// if(myInput.value===10 && myMainInput.value==="Hello"){
//   let mainDivContainer=document.createElement("div");
//   let mainDiv=document.createElement("div");
//   let mDiv=document.createTextNode("Hello");
//   mainDiv.appendChild(mDiv);
//   mainDivContainer.appendChild(mainDiv);
//   document.body.appendChild(mainDivContainer);
//   console.log(mainDivContainer);
// }}
// let two=document.querySelector(".two");
// let one=document.querySelector(".one");
// window.onload=function(){
//   two.focus();
// }
// one.onblur=function(){
//   document.links[0].click();
// } 
// let element =document.getElementById("show");
// console.log(element.classList);
// console.log(element.classList.contains("osama"));
// console.log(element.classList.contains("one"));
// console.log(element.classList.length);
//  element.onclick=function(){
//   element.classList.add("ahmed","a");
// }
// element.onblur=function(){
//   element.classList.remove("ahmed","a","one");
// }
// element.onclick=function(){
//   element.classList.toggle("osama")
// }
// console.log(element.classList);
// let element = document.getElementById("con");
// element.style.color="red";
// element.style.fontSize="2rem";
// element.style.cssText=`
// background-color:blue;
// color:white;
// font-size:2rem;
// padding:20px;
// margin:10px;
// width:600px;
// `
// element.onclick=function(){
//   element.style.removeProperty("color","font-size","width");
//   element.style.setProperty("color","red");
//   element.style.setProperty("font-size","3rem");
//   element.style.setProperty("width","600px");

// }
// let create = document.querySelector(".content");
// console.log(create.parentElement);
// create.previousElementSibling.style.color="red";
// create.nextElementSibling.style.color="red";

// let myP=document.querySelector("p");
// myP.onclick=function(){
//   console.log("Hello function click");
  
// }
// function one(){
//   console.log("Hello Function click 1");
// }
// function Two(){
//   console.log("Hello Function click 1");
// }
// myP.addEventListener("click",function(){
// console.log("Hello Function Click 2 ");

// })
// myP.addEventListener("click",one);
// myP.addEventListener("click",Two);
// let myP=document.querySelector("p");

// myP.onclick=function(){
// let newP=myP.cloneNode(true);
// newP.className="clone"
// document.body.appendChild(newP);
// }
// let cloned =document.querySelector(".clone");
// // cloned.onclick=function(){
// //   console.log(" i am cloned")
// // }
// document.addEventListener("click",function(e){
// if(e.target.className==="clone"){
//   console.log("I am cloned");
// }
// })

// let conatainer =document.createElement("div");
// document.body.appendChild(conatainer);
// conatainer.style.textAlign="center";
// conatainer.style.backgroundColor="rgb(236 ,236 ,236)";
// // Built element 
// let myHeader=document.createElement("header");
// let myDivHeadder=document.createElement("div");
// let myLogo=document.createElement("h3");
// let myMenu= document.createElement("ul");
// let myMenuLi =document.createElement("li");
// let myMenuLi1 =document.createElement("li");
// let myMenuLi2 =document.createElement("li");
// let myMenuLi3 =document.createElement("li");
// // Element Header
// let myL=document.createTextNode("Logo");
// let myLi =document.createTextNode("Home");
// let myli1=document.createTextNode("About");
// let myli2 =document.createTextNode("Servies");
// let myli3 =document.createTextNode("content");
// //logo
// myLogo.appendChild(myL);
// //menu li element
// myMenuLi.appendChild(myLi);
// myMenuLi1.appendChild(myli1);
// myMenuLi2.appendChild(myli2);
// myMenuLi3.appendChild(myli3);
// myMenu.appendChild(myMenuLi);
// myMenu.appendChild(myMenuLi1);
// myMenu.appendChild(myMenuLi2);
// myMenu.appendChild(myMenuLi3);
// //element div
// myDivHeadder.appendChild(myLogo);
// myDivHeadder.appendChild(myMenu);
// //element header
// myHeader.appendChild(myDivHeadder);
// // css element
// myHeader.style.cssText=`
// background-color:white;
// `
// myLogo.style.color="rgb(35 , 169 ,110)";
// myLogo.style.marginLeft="25px";
// myLogo.style.fontWeight="bold";
// myLogo.style.textAlign="center";

// myDivHeadder.style.cssText=`
// display:flex;
// justify-content:space-between;

// `
// myMenu.style.cssText=`
// display:flex;
// justify-content:space-between;
// margin-right:12px;
// text-align:center;
// color:#555;
// font-size:20px;
// `

// myMenuLi.style.cssText=`
// margin-right:10px;
// list-style:none;

// `

// myMenuLi1.style.cssText=`
// margin-right:10px;
// list-style:none;
// `

// myMenuLi2.style.cssText=`
// margin-right:10px;
// list-style:none;
// `

// myMenuLi3.style.cssText=`
// margin-right:10px;
// list-style:none;
// `
// //css Elemen
// conatainer.appendChild(myHeader);

// document.body.appendChild(conatainer);

// function element(){

//   let myDiv =document.createElement("div");
//   let myH =document.createElement("h2");
//   let myP=document.createElement("P");

//   let mainH=document.createTextNode(`${i+1}`);
//   let mainP=document.createTextNode("product");

//   myH.appendChild(mainH);
//   myP.appendChild(mainP);
//   myDiv.appendChild(myH);
//   myDiv.appendChild(myP);
// conatainer.appendChild(myDiv);
// myDiv.style.width="420px";
// myDiv.style.height="82px";
// myDiv.style.display="inline-block";
// myDiv.style.margin="10px";
// myDiv.style.textAlign="center";
// myDiv.style.backgroundColor="white";
// myP.style.color="#999";
// myP.style.marginTop="-15px";

// }
// let i=0;
// for( ;i<15 ;i++){

//   element();
// }
// // Bulit Footer
// let myFooter=document.createElement("footer");
// let myText =document.createElement("p");
// let Test=document.createTextNode("Copy right 2022 ");
// myText.appendChild(Test);
// myFooter.appendChild(myText);
// conatainer.appendChild(myFooter);
// myFooter.style.backgroundColor="rgb(35 , 169 ,110)";
// myFooter.style.padding="4px";
// myFooter.style.color="white";
// myFooter.style.fontSize="18px";

// let myLink=document.links
// window.onload=function(){
// for(let i=0 ; i < 4;i++){

// if(myLink[i].classList.contains===("open") && myLink[i].textContent==="Elzero"){
//   myLink[i].click();
// }
// }
// }

// let car={
//   car1:"BMW",
//   color:"white",
//   price:"5000000cc",
//   model:2020,
//   hello:function(){
//     return`Hello`;
//   }
// }

// console.log(`${car.hello()} ${car.car1} ${car.color} ${car.price} ${car.model}`);

// let myLink =document.links
// window.onload=function(){
// for(let i=0 ; i<5 ;i++){
//   if(myLink[i].className==="open" && myLink[i].textContent==="Elzero"){
//     myLink[i].click();
//   }
// }
// }
// let myP = document.querySelector("p");
// let myDiv = document.querySelector("div");
// myP.remove();
// // intial html
//  let divFirst= document.createElement("div");
//  let divSecond= document.createElement("div");
//  let contentDiv = document.createTextNode("Start");
//  let contentDivSec = document.createTextNode("End");
 
 
//  divFirst.appendChild(contentDiv);
//  divSecond.appendChild(contentDivSec);
 
 
//  document.body.appendChild(divFirst);
//  document.body.appendChild(divSecond);
//  myDiv.before(divFirst);
//  myDiv.after(divSecond);

//  divFirst.classList="First";
//  divFirst.setAttribute("title","start Element");
//  divFirst.setAttribute("data-value","Start");
//  divSecond.classList="End";
//  divSecond.setAttribute("title","End element");
//  divSecond.setAttribute("data-value","End");
// let myP = document.getElementsByTagName("p")[0].remove()
// let myDiv =document.querySelector(".our-element");
// let myStartDiv = myDiv.cloneNode();
// myStartDiv.classList="start";
// myStartDiv.title="Start Element";
// myStartDiv.textContent="Start";
// myStartDiv.setAttribute("data-value","Start");
// let myEndDiv = myStartDiv.cloneNode();
// myDiv.classList="End";
// myDiv.title="End element";
// myEndDiv.textContent="End";
// myEndDiv.setAttribute("data-value","End");
// myDiv.before(myStartDiv);
// myDiv.after(myEndDiv);
// let myDiv=document.querySelector("div");
// console.log(myDiv.childNodes[4]);
// console.log(myDiv.lastChild);

// let myConfirm = confirm("Are you sure Delete");
// if(myConfirm===true){
//   console.log("Product Delete");
// }else{
//   console.log("Product Not Delete");
// }
// let pro =prompt("This is day","write day 3 charcter");
// if(pro.length===5){
//   console.log("aviable");
// }else{
//   console.log("not aviable");
// }

// let counter=setTimeout(function(age=20){
//   if(age===20){
//     console.log("Lazy");
//   }else{
//     console.log("Not Lazy");
//   }
// },2000);
// let btn =document.querySelector("button")
// btn.onclick=function(){
  
//   clearTimeout(counter);
// } 
// setInterval(function(){
// console.log("This is Ahmed");
// },1000);
// let div =document.querySelector("div");
// function count(){
// div.innerHTML -= 1;
// if(div.innerHTML==="0"){
//   clearInterval(counter);
//   let btn =document.querySelector("button")
//   btn.style.background="red";
//   btn.style.color="white";
//   // document.body.style.background="blue";
//   setTimeout(function(){
//     console.log("this is Lazy");
//   },3000);
  
// }
// }
// let counter = setInterval(count ,1000);
// setInterval(div ,1000);
// let btn =document.querySelector("button");
// window.onscroll=function(){
//   if(window.scrollY >= 600){
//     btn.style.display="block";
//   }else{
//     btn.style.display="none";
//   }
// }
// btn.onclick=function(){
//   window.scrollTo({
//     left:0,
//     top:0,
//     behavior:"smooth",
//    })
// }
// let myProm =prompt("print Number for Two");
////////////////////////navbar//////////////////////////////////////////////
// let myP=document.querySelector(".container");
// let btn = document.querySelector(".btn1");
// let btnClose=document.querySelector(".btn2");
// btn.classList.add("hide");
// btnClose.onclick=function(){
  
//   myP.classList.add("hide"),
//   btnClose.classList.add("hide"),
//   btn.classList.remove("hide");

// }
// btn.onclick=function(){
  
//   myP.classList.remove("hide"),
//   btnClose.classList.remove("hide"),
//   btn.classList.add("hide");

// }
// let myMessage=prompt("print From Number - TO");
// let result =myMessage.split("-")
// let start;
// let end;
// if(+result[0] < +result[1]){
// for(let i=result[0]; i <=result[1];i++){
// console.log(i);
// }

// }
// function myPopUp(){
// let container=document.createElement("div");
// let myDiv = document.createElement("div");
// let myButton = document.createElement("button");

// let divContent =document.createTextNode(" Welcome To Elzero Web School");
// let buttonContetn = document.createTextNode("X");
// myDiv.appendChild(divContent);
// myButton.appendChild(buttonContetn);
// container.appendChild(myDiv);
// container.appendChild(myButton);
// document.body.appendChild(container);
// container.style.cssText=`
// width:250px;
// height:100px;
// background-color:#999;
// position:fixed;
// top:40%;
// left:40%;
// color:white;
// `
// myDiv.style.cssText=`
// position:fixed;
// top:40%;
// left:40%;
// `
// myButton.style.cssText=`
// border-radius:50%;
// position:absolute;
// top:-15px;
// right:-15px;
// color:black;
// background-color:red;
// `
// myButton.onclick=function(){
//   container.style.display="none"
// }
// } 

// setTimeout(myPopUp ,4000);
// let div =document.querySelector("div")
// function count(){
//   div.innerHTML-=1;
//   if(div.innerHTML==="4"){
//     window.open("https://elzero.org/" ,"_blank","width:400 ,height:400")
//   }else if(div.innerHTML==="0"){
//     clearInterval(counter);
//   }
// }
// let counter=setInterval(count ,1000);
// window.localStorage.setItem("color","#f015");
// window.localStorage.fontSize="bold";
// window.localStorage["fontWeight"]="20px";
// document.body.style.backgroundColor=window.localStorage.color;

// console.log(window.localStorage.getItem("color"));
// console.
// log(window.localStorage.color);
// console.log(window.localStorage["color"]);
// let lis =document.querySelectorAll("ul li");
// let myDiv =document.querySelector(".cont");
// if(window.localStorage.getItem("color")){
//   myDiv.style.backgroundColor= window.localStorage.getItem("color");

// }
// else{
//   console.log("no")
// }


// lis.forEach((li)=>{
//   li.addEventListener("click",(e)=>{
//     lis.forEach((li)=>{
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");

//     window.localStorage.setItem("color",e.currentTarget.dataset.color);
//     //change color div 
//     myDiv.style.backgroundColor= e.currentTarget.dataset.color;
//   });
// }) 
// let inp =document.querySelector(".inp");
// inp.onblur=function(){
//   window.localStorage.setItem("input-name",`${this.value}`);
//   window.localStorage.clear();
// }
//  let myFrinds =["ahmed","Osama" ,"ali","elsayed",["ebrahi","sameh",["nermain","aliaa"]]];
//  let [ , , , ,[y , ,[ ,z]]]=myFrinds;
// // let[ , , , ,[A ,B] ]= myFrinds;
//  console.log(y);
//  console.log(z);
///////////////////////// SWAPPING
// let book ="video";
// let video ="book";
// //  let stash = book;
// //  book=video;
// //  video=stash;
// // Desturecture 
// [book ,video]=[video ,book];
//  console.log(video);
//  console.log(book)
// //////////////////////////////////////object Desturcture and function Destructure
// let User ={
//   TheName: "Ahmed",
//   theAge:25,
//   theTitle:"FrontEnd",
//   theCOuntry:"Egypt",
//   skill:{
//     html:70,
//     css:80,
//   }
// }
// showDetails(User)
// // function showDetails(obj){
// // console.log(`This my Name ${User.TheName}`);
// // console.log(`This is Age ${User.theAge}`);
// // console.log(`This is css propertity skillls ${User.skill.css}`);
// // }
// function showDetails({theName :N , theAge:A ,theCOuntry:CO,skill : {css:C}}= User){
//   console.log(`This my Name ${N}`);
//   console.log(`This is Age ${A}`);
//   console.log(`This is css propertity skillls ${C}`);
//   console.log(`This is The Country '${CO}'`)
//   }
////////////////////////////////////////mixed content Desturcture
// let user={
//   theName:"Ahmed",
//   theAge:"24",
//   skills:["html" ,"Css" ,"JavaScript"],
//   theCountry:{
//     egypt:"Mansoura",
//     Ksa:"Rayd",
//   }

// }
// showDetails(user);
// function showDetails({theName:N ,theAge:A ,skills:[one ,,three],theCountry:{egypt:E} }= user){

//   console.log(`this  is MY Name :${N}`);
//   console.log(`This is My Age ${A}`);
//   console.log(`This is my skills Properity ${one}  ,${three}`);
//   console.log(`this is my Country ${E}`)
// }
// let chosen =2;
// let myFriends=[
//   {title:"Osama" , age:39 ,available:false ,skills:["Html","Css"]},
//   {title:"Ahmed" , age:25 ,available:false ,skills:["python","DJango"]},
//   {title:"Sayed" , age:39 ,available:true ,skills:["php","larva"]},
// ];

// let[one ,two ,three]=myFriends;
// let {title:T , age :A ,available:Av ,skills:[H ,]}= one;
// let {title , age , available,skills:[P,]}= two;
// let {title:t , age :G ,available:v ,skills:[PH ,]}= three;

// if(chosen=== 1 ){

//   console.log(`My names is Osmam :${T}`);
//   console.log(`My Age is :${A}`);
//   console.log(`My Available is :${Av===true? "Avaliable":"Not Avaliable"}`);
//   console.log(`My skills is :${H}`);

// }else if(chosen=== 2){

//   console.log(`My names is Osmam :${title}`);
//   console.log(`My Age is :${age}`);
//   console.log(`My Available is :${available===true? "Avaliable":"Not Avaliable"}`);
//   console.log(`My skills is :${P}`);

// }
// else if(chosen===3){
  
//   console.log(`My names is Osmam :${t}`);
//   console.log(`My Age is :${G}`);
//   console.log(`My Available is :${v===true? "Avaliable":"Not Avaliable"}`);
//   console.log(`My skills is :${PH}`);
// }
// else{
//   console.log("Error message");
// }
// let myNumbers = [1, 2, 3, 4, 5];

// let [a , , , ,e]=myNumbers;
// console.log(a*e);
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// let [a , b ,c ,[d , e ,[f ,g]]]=mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let [c , , ,]=arr1;
// let [ , , ,]=arr2;
// let [ , a , b ,]=arr3;
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// const member = {
//   age: 30,
//   working: true,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };
// const {age:A ,working:W,country:Co ,hobbies:[ one , ,three]}=member;
// console.log(`My Age Is ${A} And Iam ${W===true ? "avialble" : "Not"} Working`);
// console.log(`I Live in ${Co}`);
// console.log(`My Hobbies: ${one} And ${three}`);
// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };
// const {title:t,
//   developer:d ,
    
//     releases:{"Oath In Felghana": [u, j],
//     "Ark Of Napishtim":{
//       US:u_price,
//       JAP:j_price,
//           },
//      Origin:or,
//     },
//     o=Object.keys(game.releases)[0],
//     ar=Object.keys(game.releases)[1],
//   }=game

// console.log(`My Favourite Games Style Is ${t} Style`);
// console.log(`And I Love ${d} Games`);


// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);

// console.log(`Although I Love ${ar}`);

// console.log(`${ar} Price in USA Is ${u_price}`);
// console.log(`${ar} Price in USA Is ${j_price}`);
// console.log(`Origin Price Is ${or}`);
// let chosen =2;
// let myFriends=[
//   {title:"Osama" , age:39 ,available:false ,skills:["Html","Css"]},
//   {title:"Ahmed" , age:25 ,available:false ,skills:["python","DJango"]},
//   {title:"Sayed" , age:39 ,available:true ,skills:["php","larva"]},
// ];

// let[one ,two ,three]=myFriends;
// let {title:T , age :A ,available:Av ,skills:[H ,]}= one;
// let {title , age , available,skills:[P,]}= two;
// let {title:t , age :G ,available:v ,skills:[PH ,]}= three;

// if(chosen=== 1 ){

//   console.log(`My names is Osmam :${T}`);
//   console.log(`My Age is :${A}`);
//   console.log(`My Available is :${Av===true? "Avaliable":"Not Avaliable"}`);
//   console.log(`My skills is :${H}`);

// }else if(chosen=== 2){

//   console.log(`My names is Osmam :${title}`);
//   console.log(`My Age is :${age}`);
//   console.log(`My Available is :${available===true? "Avaliable":"Not Avaliable"}`);
//   console.log(`My skills is :${P}`);

// }
// else if(chosen===3){
  
//   console.log(`My names is Osmam :${t}`);
//   console.log(`My Age is :${G}`);
//   console.log(`My Available is :${v===true? "Avaliable":"Not Avaliable"}`);
//   console.log(`My skills is :${PH}`);
// }
// else{
//   console.log("Error message");
// // }
// let newData =[1 , 1 , 1 , 2 , 3 ,"A"];
// // let myUiquData = new Set(newData);
// // let myUiquData =new Set().add(1).add(1).add(1).add(2).add(3);
// let myUiquData =new Set(); 
// myUiquData.add(1).add(1).add(1)
//  myUiquData.add(2).add(3).add("A");
//  console.log(`Is Set A is : ${myUiquData.has("a".toUpperCase())}`)
//  myUiquData.delete(3);
//  myUiquData.clear();
// console.log(newData);
// console.log(myUiquData);
// console.log(myUiquData.size);
// let myMap= new Map([
// [10 ,"number"],
// ["name" ,"string"],
// [false,"boolean"],
// [true ,"boolean"],

// ]);

// // myMap.set(10, "Number");
// // myMap.set("name", "string");
// // myMap.set(false, "Boolean");
// // myMap.set(true, "Boolean");
// myMap.delete(true);
// console.log(myMap.has("name"))
// console.log(myMap)
// let myArray =[10,20,30,40,50,"A","B"];
// let myCheck = myArray.some(function(e){
//   return e>40;
// });
// console.log(myCheck);
// let myNumber = 6;
// let myArray = [1,2,3,4,5,6,7,8,9,10];
// // let myCheck=myArray.some(function(ele){
// //  console.log(ele); 
// //   return ele > this;
// // },myNumber);
// // console.log(myCheck);

// let obj={
//   min:10,
//   max:20,
// }
// let Check=myArray.some(function(el){

//   return el> obj.min||el<=obj.max;
// })
// console.log(Check);
// let locations ={
//   20:"place 1",
//   30:"place 2",
//   10:"place 3",
//   40:"place 4",
// }
// let mainLocation = 15;
// let myArray = Object.keys(locations);
// console.log(myArray);
// let myMapArray= myArray.map(function(e){
//   return +e ;
// });
// console.log(myMapArray);
// let check=myMapArray.every(function(e){
// return e > this
// },mainLocation);
// console.log(check);
// let arr =[10 , 20 , 30 , 40 ,50];
// console.log(...arr);
// let arr=["osama"];
// // console.log(...arr);
// let arr1 =[1 ,2,3,4,5,6];
// let arr2=[10,20,30,40,50];
// let con=[...arr1 ,...arr2];
// console.log(con);
// console.log([...arr1,...arr2]);
// let arr1 =["ahmed","osama","mahmoud"];
// let arr2=["sayed","ali"];
// let arr3 =["ahs","hanaa"]; 
// arr1.push(...arr2 ,...arr3)
// console.log(arr1);
// let myNumber=[10 ,20 ,30 ,40 ,50,60];
// console.log(Math.min(...myNumber));
// let obj1={
//   a:1,
//   b:2,
// }
// let obj2={
//   c:3,
//   d:4,
// }
// console.log({...obj1,...obj2 });
// let n1 =[10 ,30 ,10 ,20];
// let n2 =[30 ,20 ,10];
//  console.log(Math.max(...n1)*[...n1,...n2].length);

// console.log(Math.min(...n1)*new Set([...n1 ,...n2]).size*[...n1 ,...n2].length)

// console.log([...n2].length*Math.min(...n1)*[...n1 ,...n2].length)

// let setOfNumber = new Set([10]);
// setOfNumber.add(20).add(setOfNumber.size)
// console.log(setOfNumber);
//  console.log([...setOfNumber][2]);

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log(new Set([...myFriends].sort()));
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };
// myInfo =new Map()
// .set(Object.keys(myInfo)[0],myInfo.username)
// .set(Object.keys(myInfo)[1],myInfo.role)
// .set(Object.keys(myInfo)[2],myInfo.country)
// console.log(myInfo)
// console.log(myInfo.size);
// console.log(myInfo.has("role"));
// let theNumber = 100020003000;
// console.log(+[...(theNumber.toString())].sort().join(""));
// let theName = "Elzero";
// let theArr =Array.from(theName);
// console.log(theArr);
// let copyChar =chars.copyWithin(-3 , 2 )&&chars.copyWithin(3,0,2);
// console.log(copyChar)
// let result=0;
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars1 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars2 = ["Z", "Y", "A", "D", "E", 10, 1];

// let copy =function(arr){
//   arr.sort().forEach(function(e){
//     if(typeof(e)==="number"){
//      result++; 
//     }
//   arr.copyWithin(0 ,result ,result*2);
//   })
//   return arr;
// }
// console.log(copy(chars));
// console.log(copy(chars1))
// console.log(copy(chars2))
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// let allNum =[...numsOne ,...numsTwo];
// console.log(allNum);
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(Math.max(...n1)*[...n1,...n2].length);
// console.log(Math.min(...n2)*([...n2]).length*[...n1,...n2].length)


// let myString ="i love Elzero web school i elzero web page ";
// let reg =/elzero/ig;
// console.log(myString.match(reg))
// let info ="org info code come com";
// let reg =/code|org|info/i;
// console.log(info.match(reg));
// let myArray="1@2#345%678&&910";
// let reg =/[0-9]/g;
// console.log(myArray.match(reg))
// let my ="os1 os2os@edu os100s@gamil os8os@yahoo";
// let reg =/os[0-9]os@(yahoo|edu|gamil)/ig
// console.log(my.match(reg))
// let myString="AaBbcdefG123!234%^&*";
// // let reg =/[a-z]/g
// // let reg=/[^a-z]/g
// // let reg=/[0-9]/g
// let reg =/[a-zA-Z0-9]/g
// console.log(myString.match(reg))
// let email="o@@@g...com o@g.com o@g.net o@y.com o-g.com o@s.org 1@1.com"
// let reg=/\w@\w.(com|org)/g;
// console.log(email.match(reg))
// let mails="o@nn.sa osama@gmail.com elzero@gmail.net osamama@mail.ru";
// let nums="0110 10 150 05120 0560 350 00";
// let reg = /\w*@\w+.(com|net)/ig;
// let numsreg=/0\d*0/ig;
// let url ="https://google.com http://www.website.net web.com";
// let urlreg=/https?:\/\/(www.)?\w+.\w+/ig;
// console.log(mails.match(reg));
// console.log(nums.match(numsreg))
// console.log(url.match(urlreg));
// let serials ="s100s s3000s s500000s s950000s";
// console.log(serials.match(/s\d{3}s/ig))
// console.log(serials.match(/s\d{4,5}s/ig));
// console.log(serials.match(/s\d{4,}s/ig));
// let myString ="we love programing";
// let names ="1osamaz 2ahmedz 3mohammed 4mostafaz 5gamalz";
// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(names));
// console.log(/^\d/ig.test(names));
// console.log(names.match(/\d\w{5}(?=z)/ig));
// console.log(names.match(/\d\w{8}(?!z)/ig));
// let names="we love programing and @ because @ is amazing"
// let re=/@/ig;
// console.log(names.replace("@" ,"java script"));
// console.log(names.replaceAll("@","java script"));
// console.log(names.replace(re ,"java script"));
// document.getElementById("fo").onsubmit=function(){
// let valueInput=document.getElementById("show").value;
// let re =/\(\d{5}\)\s\d{3}-\d{4}/ig;
// let test =re.test(valueInput);

// if(test === false){
//   return false;
// }
// return true;
// }
// let url1="elzero.org";
// let url2 ="http://elzero.org";
// let url3="https://www.elzero.org";
// let url4="https://www.elzero.org:8000/article.php?id=100cat=topic";
// let reg=/(https?)?:?(\/\/)?(www.)?\w+.org:?(\d*\d)?\/?(\w+)?.?(\w+)?(\W)?(\w+)?(\W)?(\d{3}\w+)?(\W)?(\w+)?/ig;
// console.log(url1.match(reg));
// console.log(url2.match(reg));
// console.log(url3.match(reg));
// console.log(url4.match(reg));
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let reg=/(\w+|:)+/ig;
// console.log(ip.match(reg));
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let spereg =/Os\d{0,3}?o/ig;
// console.log(specialNames.match(spereg));
// ['Os10O', 'OsO', 'Os100O']
// let phone = "+(995)-123 (4567)";
// let phonereg=/\W\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
// console.log(phone.match(phonereg));




// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
//? zero or one anthing
//\w
//+ one or more

// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";
// let re=/\d{2}(\W-?)\s?\d{2}(\W-?)\s?\d{2,}/ig;

// console.log(date1.match(re)); 
// console.log(date2.match(re)); 
// console.log(date3.match(re)); 
// console.log(date4.match(re));
// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// let re=/(https?)?:?\/\/?(www.)?\w+.\w+:?(\d\d{2}\d)?(\/)?\w+?.?(\w+)?\W?\w?(\w+)?\W?(\w+)?\W(\d{3,})?\W?(\w+)?\W?(\w+)?/ig;
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
// let link="https://www.facebook.com/memories/?source=notification&notif_id=1646748962748290&notif_t=onthisday&ref=notif"
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// let re =/(https?)?:?(\/\/)?(www.)?(\w+)?\W?(com|org)?\W?(\w+)?\W\W?(\w+)?\W?(\w+)?\W?(\w+)?\W?\d{1,}\W?(\w+)?\W?(\w+)?\W?(\w+)?\W?(\w+)?/ig
// document.write(link.match(re));
// console.log(url5.match(re)); 
// let d="-100",
// e="20",
// f=30,
// g=true;
// // console.log((-e + f)*++g *-d);
// console.log(++e*++g + ++f + -d);
// console.log((Number.MAX_SAFE_INTEGER).toString().length);
// let a=1_00,
// b=2_00.5,
// c=1e2,
// d=2.4;
// console.log(Math.trunc(Math.min(a , b , c ,d)));
// console.log(Math.pow(a,Math.trunc(d)));
// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(Math.trunc(d));
// console.log(Number.parseInt(d));
// console.log(Number.parseFloat(Math.trunc(b) / Math.ceil(d)).toString())
// console.log(Math.ceil(Math.trunc(b) / Math.ceil(d)));
// let a ="Elzero Web School";
// console.log(a.charAt(2).toUpperCase()+a.slice(3,7));
// console.log(a.slice(-4,-3).toUpperCase().repeat(8));
// console.log(a.split(" ", 1));
// console.log(`${a.substr(0 ,6)}${a.substr(10)}`);
// // console.log(`${a.slice(0,2).toLowerCase()}${a.slice(2).toUpperCase()}`)
// let a=9;
// a < 10?console.log(10)
// :a>=10&&a<=40?console.log("10 To 40")
// :a>40?console.log(">40"):console.log("unknown");

// let st ="Elzero Web School"
// if(typeof(st) ===typeof("34")){
//   console.log("Good")
// }
// if(st.charAt(7)==="W"){
//   console.log("Good");
// }
// if(st.startsWith()!=="String"){
//   console.log("Good");
// }
//   if(typeof(st.length) ==="number"){
//     console.log("Good");
//   }
//   if(st.slice(0,6).repeat(2)==="ElzeroElzero"){
//     console.log("Good")
//   }
//   console.log(st.slice(0,6).repeat(2));
// let job ="it";
// let salary =0;
// switch(job){
// case "manager":
//   console.log(`salary is ${8000}`)
//   break;
//   case "it":
//     case "support":
//       console.log(`salary is ${6000}`)
//       break;
//       case "developer":
//         case "designer":
//           console.log(`salary is${7000}`)
//           break;
//           default:
//             console.log(`salary is${4000}`)
  
// }
// let zero=0;
// let counter=3;
// let my =["ahmed","mazero","elham","osama","gamal"]
// console.log(my.slice(zero,++counter).reverse());
// console.log(my.slice(++zero,--counter).sort());
// my.unshift("Elzero");
// console.log(my[--zero]);
// console.log(my.shift().slice(++counter,--zero)+my[--counter].slice(++zero,++zero).toUpperCase())


// let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"];
// let myEmployees=["Amgad","Sameh","Ameer","Omar","Othman","Amany","Samia"]
// let work=0;
// let leter=0;
// let i=0;

// document.write(`<div> We Have x Admins</div>`);
// for( ;i<myAdmins.length;i++ ){
//   if(myAdmins[i]==="Stop"){
//     break;
//   }
//   document.write(`<div>The Admin For Team ${i} is ${myAdmins[i]}<div/>`);
//   leter=myAdmins[i][0];
  
//   for(let j=0;j<myEmployees.length;j++){
//   myEmployees[j].startsWith(leter)?
//   document.write(`<p>${myEmployees[j]} </p>`) : j = j;
//   }
// }
// function showDetails(name ,age ,status){
//   let info=[name ,age ,status];
//   let set;
//  for(let i=0;i<info.length;i++){
//  typeof info[i]==="string"?name=info[i]:
//  typeof info[i]==="number"?age=info[i]:
//  typeof info[i]==="boolean"?status=info[i]:
//  "corret data"

// }
// status===true? set="status avialble":set="status not aviable"
// console.log(`my name is ${name} my age is ${age} my statuis is ${set}`)
// }
// showDetails(18,true,"ahmed");
// showDetails(false,18,"ahmed");
// let names =(...name)=>`String [${name.join("],[")}] => Done`
// console.log(names("osama","mohamed","ali","ibrahim"))
// let number =[20,50,10,60];
// let calc=(one ,two , ...num)=> one +two + Number(num);
// console.log(calc(10,20 ,50))
// let swCase="ssssssejYfyrYUTuytiPUTFjD";
// let sw=swCase.split("").map(function(ele){
// return ele===ele.toUpperCase()?ele.toLowerCase():ele.toUpperCase();
// }).join("")
// console.log(sw)
// let invertNumber=[1,-2,10,-20,30,4];
// let convert =invertNumber.map(function(ele){
//   return -ele;
// })
// console.log(convert)
// let char="Elz123er4o";
// let filt=char.split("").map(function(ele){
//   return isNaN(parseInt(ele))? ele:"";
// }).join("")
// console.log(filt)
// let mix ="A13BS2X"
// let char=mix.split("").filter(function(ele){
//   return !isNaN(parseInt(ele));
// })
// let element=char.map(function(el){
//   return el*el;
// }).join("")
// console.log(element)
// let myString="1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";
// let soution=myString.split(",").map(function(ele){
//   return isNaN(parseInt(ele))?ele:"";
// }).filter(function(ele){
//   return !ele.startsWith("_");
// }).reduce(function(acc ,current){
//   return`${acc}${current}`;
// }).slice(true , -true)
// console.log(soution)
//create elemet


// let conatainer= document.createElement("conatiner");
// document.body.appendChild(conatainer)
// for(let i=0 ;i<100 ; i++){

// let mainDiv= document.createElement("div")
// let mainHeading =document.createElement("h2")
// let mainPara=document.createElement("p")


// let headingCont=document.createTextNode(`Title Product ${[i+1]}`)
// let paraConr =document.createTextNode(`This Is Product ${i+1}`)

// mainHeading.appendChild(headingCont);
// mainPara.appendChild(paraConr);

// mainDiv.appendChild(mainHeading);
// mainDiv.appendChild(mainPara);
// conatainer.appendChild(mainDiv);

// document.body.appendChild(conatainer);

// mainDiv.style.display="inline-block";
// mainDiv.style.margin="10px";
// mainDiv.style.width="300px";

// }
// let btn =document.querySelector("button");
// window.onscroll=function(){
//   if(window.scrollY >= 600){
//     btn.style.display="block";
//   }else{
//     btn.style.display="none";
//   }
// }
// btn.onclick=function(){
//   window.scrollTo({
//     left:0,
//     top:0,
//     behavior:"smooth",
//   })
// }
// let video ="video";
// let book ="book";
// [video,book]=[book,video];
// console.log(video);
// console.log(book);
// let User={
//   theName:"osama",
//   theAge:38,
//   theTitle:"Developer",
//   theContury:"Egypt",
// }
// let {theName,theAge,theTitle,theContury}= User;
// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theContury)
// let  chosen = 1 ;
// let myFriends=[
//   {title:"osama" , age:39 , avialable:true,skill:["html","css"]},
//   {title:"Ahmed" , age:25 , avialable:false,skill:["python","django"]},
//   {title:"Sayed" , age:33 , avialable:true,skill:["php","laravel"]},
// ];
// let[one ,two ,there]=myFriends;
// let{title ,age,avialable,skill:[html,css]}=one;
// let{title:t ,age:A,avialable:AV,skill:[H,Cs]}=two;
// let{title:T ,age:AG,avialable:Av,skill:[ph,la]}=there;

// if(chosen===1){
//   console.log(`${title}`);
//   console.log(age);
//   console.log(avialable);
//   console.log(html ,css);
// }else if(chosen===2){
//   console.log(`${t}`);
//   console.log(A);
//   console.log(AV);
//   console.log(H ,Cs);
// }else if(chosen===3){
//   console.log(`${T}`);
//   console.log(AG);
//   console.log(Av);
//   console.log(ph ,la);
// }else{
//   console.log("Correct Data chosen")
// }
// let random =Math.round(Math.random()*100);
// console.log(random)
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