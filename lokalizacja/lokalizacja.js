var ourCoords = {
 latitude: 50.288962,
 longitude: 18.659609
};

window.onload = getMylocation;

function getMylocation() {
    

    
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    }
    
    else {
        
        alert ("Osz kórwa ale nie wypał, twoja przeglądarka nie ma wsparcia do geolokalizacji.");
    };

};

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude= position.coords.longitude;
    
    document.getElementById("loc").innerHTML = "Szerokość: " + latitude + "</br>" + "Długość: " +longitude;
    
    var km = computeDistance( position.coords, ourCoords);
    document.getElementById("distance").innerHTML = km;
}

function displayError(error) {
    var errorTypes = {
        0: "Nieznany błąd",
        1: "Zabroniony dostęp",
        2: "Położenie niedostępne",
        3: "Zbyt długi czas oczekiwania"
    };
    
    var errorMessage = errorTypes[error.code];
    
    console.log(error);
    
    if (error.code == 0 || error.code ==2) {
        errorMessage = errorMessage + " " + error.message;
    }
    
    document.getElementById("loc").innerHTML = errorMessage;
};



function computeDistance(startCoords, destCoords){
    
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);
    
    var Radius = 6371;
    
    
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;
    
    
    return distance
}

function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI) / 180;
    return radians;
}
 
