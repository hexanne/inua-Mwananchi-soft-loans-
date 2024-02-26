function apply() {
location.replace("wait.html");
};
function wai() {
setTimeout(function(){
location.replace("loans2.html");
},3000);
};
function nex() {
let a = document.forms["myForm"]["fname"].value;
if (a == "") {
document.getElementById("err1").innerHTML= "You have not entered your first name!";
document.getElementById("err1").style.color = "red";
document.getElementById("ffff").style.color = "red";
document.getElementById("err1").style.float ="left";
return false;
}else{
let b = document.forms["myForm"]["lname"].value;
if (b == "") {
document.getElementById("err2").innerHTML= "You have not entered your last name!";
document.getElementById("err2").style.color = "red";
document.getElementById("llll").style.color = "red";
document.getElementById("err2").style.float ="left";
return false;
}else{
let c = document.forms["myForm"]["idd"].value;
if (c == "") {
document.getElementById("err3").innerHTML= "Hey " +a+", You have not entered your  ID number!";
document.getElementById("err3").style.color = "red";
document.getElementById("iddd").style.color = "red";
document.getElementById("err3").style.float ="left";
return false;
}else{
let d = document.forms["myForm"]["num"].value;
if (d == "") {
document.getElementById("err4").innerHTML= "You have not entered your phone number!";
document.getElementById("err4").style.color = "red";
document.getElementById("numm").style.color = "red";
document.getElementById("err4").style.float ="left";
return false;
}else{
let e = document.forms["myForm"]["amnt"].value;
if (e == "") {
document.getElementById("err5").innerHTML= "Hey " +a+", You have not entered your  ID number!";
document.getElementById("err5").style.color = "red";
document.getElementById("ammm").style.color = "red";
document.getElementById("err5").style.float ="left";
return false;
}else{
let f = document.forms["myForm"]["dur"].value;
if (f == "") {
document.getElementById("err6").innerHTML= "You have not entered your phone number!";
document.getElementById("err6").style.color = "red";
document.getElementById("durr").style.color = "red";
document.getElementById("err6").style.float ="left";
return false;
}else{
let h = document.forms["myForm"]["trn"].value;
if (h == "") {
document.getElementById("err8").innerHTML= "You have not entered your transaction fee!";
document.getElementById("err8").style.color = "red";
document.getElementById("tran").style.color = "red";
document.getElementById("err8").style.float ="left";
return false;
}else{
document.getElementById("fname1").innerHTML= a;
document.getElementById("lname1").innerHTML= b;
document.getElementById("idd1").innerHTML = c;
document.getElementById("num1").innerHTML = d;
document.getElementById("amnt1").innerHTML = "Kshs " + e;
document.getElementById("trn1").innerHTML = "Kshs " + h;
document.getElementById("dur1").innerHTML = f + " Months";
let itt = e/f;
document.getElementById("inst").innerHTML = "Kshs " + Math.round(itt) + " Per month";
document.getElementById("ios").style.display ="none";
document.getElementById("steen").style.display ="block";
let x = Math.floor((Math.random() * 1000000) + 1);
document.getElementById("reg").innerHTML = x;
};};};};};};};};
function show() {
var g = document.getElementById("amnt").value;
switch(g){
case "5,000" :
ammmnt.innerHTML = "Kshs 150";
break;
case "10,000" :
ammmnt.innerHTML = "Kshs 200";
break;
case "15,000" :
ammmnt.innerHTML = "Kshs 250";
break;
case "20,000" :
ammmnt.innerHTML = "Kshs 300";
break;
case "25,000" :
ammmnt.innerHTML = "Kshs 350";
break;
case "30,000" :
ammmnt.innerHTML = "Kshs 400";
break;
case "35,000" :
ammmnt.innerHTML = "Kshs 450";
break;
case "40,000" :
ammmnt.innerHTML = "Kshs 500 ";
break;
case "45,000" :
ammmnt.innerHTML = "Kshs 550";
break;
case "50,000" :
ammmnt.innerHTML = "Kshs 600";
break;
case "55,000" :
ammmnt.innerHTML = "Kshs 650";
break;
case "60,000" :
ammmnt.innerHTML = "Kshs 700";
break;
case "65,000" :
ammmnt.innerHTML = "Kshs 750";
break;
case "70,000" :
ammmnt.innerHTML = "Kshs 800";
break;
case "80,000" :
ammmnt.innerHTML = "Kshs 850";
break;
case "90,000" :
ammmnt.innerHTML = "Kshs 900";
break;
case "100,000" :
ammmnt.innerHTML = "Kshs 950";
break;
case "150,000" :
ammmnt.innerHTML = "Kshs 1,000";
break;
case "200,000" :
ammmnt.innerHTML = "Kshs 1,100";
break;
case "250,000" :
ammmnt.innerHTML = "Kshs 1,200";
break;
case "300,000" :
ammmnt.innerHTML = "Kshs 1,300";
break;
case "350,000" :
ammmnt.innerHTML = "Kshs 1,400";
break;
case "400,000" :
ammmnt.innerHTML = "Kshs 1,500";
break;
case "450,000" :
ammmnt.innerHTML = "Kshs 1,600";
break;
case "500,000" :
ammmnt.innerHTML = "Kshs 1,700";
break;
};
simm.style.display ="none";
simp.style.display = "block";
};
function nextt2() {
location.replace("loans4.html");
};
function next2() {
var checkbox = document.getElementById("reqq");
if(checkbox.checked != true ){
document.getElementById("reqq1").innerHTML = "you must agree to the requirements above by clicking the checkbox" ;
return false;
}else{
location.replace("loans3.html");
return true;
}
};
function back(){
simm.style.display ="block";
simp.style.display = "none";
};
function back2(){
location.replace("loans2.html");
};
function back3(){
location.replace("loans.html");
};
function back4() {
document.getElementById("ios").style.display ="block";
document.getElementById("steen").style.display ="none";
};
function back5() {
location.replace("loans3.html");
}