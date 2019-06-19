console.log("pyzy");

window.onload = getMylocation;

function getMylocation() {
    

    
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(displayLocation);
    }
    
    else {
        
        alert ("Osz kórwa ale nie wypał, twoja przeglądarka nie ma wsparcia do geolokalizacji.");
    }

}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude= position.coords.longitude;
    
    document.getElementById("loc").innerHTML = "Szerokość: " + latitude + "</br>" + "Długość: " +longitude;
    
    console.log(latitude);
}