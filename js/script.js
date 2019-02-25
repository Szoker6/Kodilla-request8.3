'use strict';


var output = document.getElementById('output');
var outputinfo = document.getElementById('outputinfo');
var buttonC = document.getElementById('buttonC');
var buttonF = document.getElementById('buttonF');

output.innerHTML = 'Wcisnij guzik jeśli chcesz zamieić stopnie' + '<br><br>'; 

buttonC.addEventListener('click', function() {	  
    var degreesC = window.prompt('Prosze podać stopnie celcjusza');
    var valueC = parseFloat(degreesC);
    var degreesF = convertCelsiusToFeranheit(degreesC);

    if (!isNaN(valueC)) {
            output.innerHTML = 'Stopnie Celsjusza: ' + degreesC + '&#x2103 ' + '<br>' + 'Stopnie Fahrenheita: ' + degreesF + '&#x2109' + '<br>'; 
    } else if (isNaN(valueC)) {
            output.innerHTML = 'Nie wpisałeś cyfry';
    } else {
        output.innerHTML = 'Nic nie wpisałeś';
    }  
    changeStateOfWater(valueC);
    stateOfDressToTemperature(valueC);
});

buttonF.addEventListener('click', function() {	   
    var degreesF = window.prompt('Prosze podać stopnie Fahrenheita');
    var valueF = parseFloat(degreesF);
    var degreesC = convertFeranheitToCelsius(degreesF);
    
    if (!isNaN(valueF)) {
            output.innerHTML = 'Stopnie Fahrenheita: ' + degreesF + '&#x2109 ' + '<br>' + 'Stopnie Celsjusza: ' + degreesC + '&#x2103' + '<br>'; 
    } else if (isNaN(valueF)) {
            output.innerHTML = 'Nie wpisałeś cyfry';
    } else {
        output.innerHTML = 'Nic nie wpisałeś';
    }  
    var celcius = convertFeranheitToCelsius(valueF);
    changeStateOfWater(celcius); 
    var dress = convertFeranheitToCelsius(valueF);
    stateOfDressToTemperature(dress);   
});

function convertFeranheitToCelsius(degreesF) {
    return (degreesF -32) / 1.8;  
};

function convertCelsiusToFeranheit(degreesC) {
    return degreesC * 1.8 + 32;  
};

function changeStateOfWater(valueC) {
    var outputinfo = document.getElementById('outputinfo');
    if(valueC === 0) {
        outputinfo.innerHTML = 'To jest temperatura zamarzania';
    } else if (valueC === 100) {
        outputinfo.innerHTML = 'To jest temperatura wrzenia';
    } else if (valueC < 0) {
        outputinfo.innerHTML = 'Woda zmieniła się w lód';
    } else if (valueC > 100) {
        outputinfo.innerHTML = 'Woda zmieniła się w parę';
    } else {
        outputinfo.innerHTML = '';
    } 
};

function stateOfDressToTemperature(valueC) {
    var outputinfo2 = document.getElementById('outputinfo2');
    if (valueC <= 0 ) {
        outputinfo2.innerHTML = 'Należy ubrać cieplutkie ubranie';
    } else if (valueC >= 20 && valueC < 40) {
        outputinfo2.innerHTML = 'Można spokojnie ubrać krótkie spodenki';
    } else if (valueC <= 10) {
        outputinfo2.innerHTML = 'Należy ubrać kurtkę i czapkę';
    } else {
        outputinfo2.innerHTML = '';
    }
};
    