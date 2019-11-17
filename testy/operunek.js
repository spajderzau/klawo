
window.onload = init;
function init(){
  
console.log("zadanka w3resource")  ;
    
 /*   
    
    
    
    
    function zad1 () {
        var x = new Date();
        var dniTygodnia = ["Poniedziałek", "Wtorek", "Środa", "czwartek", "piątek", "sobota", "Niedziela"];
        console.log("Dzisiaj jest: " + dniTygodnia[x.getDay() - 1]);
        console.log(x.getHours() +":" + x.getMinutes())
    };
    
    
    zad1();
//////////////////////////////////////////////////////////////////////////    
    function zad6 (year) {
        if (year%4){
            console.log("niet");
            }
        else if (year%100){
            console.log("niet");
            }
        else if (year%400) {
            console.log("niet");
            }
        else {
            console.log("przestepny")
        }
    }
    
    zad6(1900);
    
    
/////////////////////////////////////////////////////////////////////////
    
    
    
    function zad7 (){
        for (var year = 2019; year <= 2050; year++){
            x = new Date(year,0,1);
            if (x.getDay() == 1){
            console.log(year)
            }
        }
    }
    
    zad7();
    
    
    
    /////////////////////////////////////////////////////////////////////
    
    
    
    
    function zad8 (){
        var x = prompt("podej numer", 1 );
        var y = (Math.round(Math.random()*10));
        if (x == y) {
            console.log("wygrana");
            }
            else {
                console.log("próbuj dalej");
                console.log(y);
                
            }
    }
    

    
    ////////////////////////////////////////////////////////////////////////////
    
    
    
    
    
    function zad15 (){
        var x = prompt('podaj liczbe');
        if (x < 13) {
            console.log(13-x)
        }
        else {
            console.log((x-13)*2)
        }
        }
    
    
    zad15();
    ///////////////////////////////////////////////////////////////
        
    function zad16 (fI, sI) {
        var x = fI + sI;
        if (fI == sI) {
            console.log(x*3)
        }
        else console.log(x)
    }
    
    zad16(2,4);
    
    ////////////////////////////////////////////////////////////////
    
    
    
    function zad17(x) {
        if (Math.abs(19-x) < 19) {
            console.log(Math.abs(19-x))
        }
        else console.log(Math.abs(19 - x) * 3)
    }
    
    zad17(-3)
    
    
    
    
    ////////////////////////////////////////////////////////////////
    
    
    
    function zad18 (x,y) {
        if (x + y == 50 || x == 50 || y == 50) 
           
    }
    
    console.log(zad18 (22,50));
    
    
    
    
    
    function zad21(txt1) {
        if (txt1 === null || txt1 === undefined || txt1.substring(0, 2) === 'Py'){
           return txt1; 
        }
        return 'Py' + txt1
    }
    
    console.log(zad21("Pyton"))
    
    "rgb(" + x + "," + y + "," + x/y + ",)";
     ////////////////////////////////////////////////////////////////
    
   */ 
   
     function zad1 () {
        var x = new Date();
        var dniTygodnia = ["Niedziela", "Wtorek", "Środa", "czwartek", "piątek", "sobota", "Poniedziałek"];
        
        document.getElementById("zdanie-1").innerHTML = "Dzisiaj jest: " + dniTygodnia[x.getDay() ] + "</br>" + x.getHours() +":" + x.getMinutes() + ":" + x.getSeconds();
        
    };
    
    function akcja(){
        
        var x = event.screenX;
        document.getElementById("zdanie-x").innerHTML = ("Pozycja kursora X: " + x);
        var y = event.screenY;
        document.getElementById("zdanie-y").innerHTML = ("Pozycja kursora Y: " + y);;
        document.getElementById("zdanie-a").style.left = -x/100 + "px";
        document.getElementById("zdanie-a").style.top = -y/100 + "px";
        
        document.body.style.backgroundColor = 
            ("rgb(" + (140 +(x/100)) + "," + (190 + (y/100)) + "," + 250 + ")");
        
        
        
        
        
    };
    
    
   setInterval(zad1,1);
    document.body.onmousemove = akcja;
    
    
    
    
    
    
    
    
    





}

    
