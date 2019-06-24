
window.onload = init;
function init() {

var images = document.getElementsByTagName("img");
 for (var i = 0; i < images.length; i++) {
 images[i].onclick = akcja;
 } 

   
    
function akcja(eventObj) {
 var image = eventObj.target;

 var name = image.id;
 name =  name + ".jpg";
 image.src = name;



}
    

var tlo = document.getElementById("myCanvas");
    tlo.onclick = akcja1;

var canvas = document.getElementById("myCanvas");
var ctx1 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.arc(140, 530, 40, 0, 8 * Math.PI);
ctx1.stroke();   
    
   
   
    
function akcja1(eventObj) {
     
var x = eventObj.clientX;
var y = eventObj.clientY;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(950 + (x * 0.03), 850 + (y * 0.03));
ctx.quadraticCurveTo((x*1.6), y , 400, -100);
ctx.stroke();   
    
  
  var canvas = document.getElementById("myCanvas");
var ctx1 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.arc(120 + (x/50), 520 + (y/50), 80, 0, 8 * Math.PI);
ctx1.stroke();     
    
  
    
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(x, y);
ctx.lineTo(200, y * 0.9);
    ctx.lineTo(-50, 500);
ctx.stroke(); 
    
    

    
    
     
 var canvas = document.getElementById("myCanvas");
var ctx1 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.arc(x, y, 10 + (x/10) , (x/100) / (Math.PI)  , (y/80) / Math.PI);
ctx1.stroke();
 


    
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(1000 + y, 1000 + x);
ctx.lineTo(x, y);
ctx.stroke();

 
   
    
   var canvas = document.getElementById("myCanvas");
var ctx1 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.arc(140, 530, 40, 0, 8 * Math.PI);
ctx1.stroke(); 
    
var canvas = document.getElementById("myCanvas");
var ctx1 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.arc(240, 30 + (eventObj.clientX), 300, 7, 8 * Math.PI);
ctx1.arc(eventObj.clientX, eventObj.clientY, eventObj.clientX, 0, eventObj.clientX * Math.PI)
ctx1.stroke();     
    
    
var canvas = document.getElementById("myCanvas");
var ctx1 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.arc(eventObj.clientX, eventObj.clientY, 40, 0, 3 * Math.PI)
ctx1.stroke();     
ctx1.stroke();      





} 
}