'use strict';


var numberOfDegrees = document.getElementById('numberOfDegrees');
var waterCondition = document.getElementById('waterCondition');
var wayOfDress = document.getElementById('wayOfDress');
var buttonCelc = document.getElementById('buttonCelc');
var buttonFahr = document.getElementById('buttonFahr');

numberOfDegrees.innerHTML = 'Wcisnij guzik jeśli chcesz zamieić stopnie' + '<br><br>'; 

buttonCelc.addEventListener('click', function() {	  
    var degreesC = window.prompt('Prosze podać stopnie celcjusza');
    var valueC = parseFloat(degreesC);
    var degreesF = convertCelsiusToFeranheit(degreesC);

    if (!isNaN(valueC)) {
        numberOfDegrees.innerHTML = 'Stopnie Celsjusza: ' + degreesC + '&#x2103 ' + '<br>' + 'Stopnie Fahrenheita: ' + degreesF + '&#x2109' + '<br>'; 
    } else if (isNaN(valueC)) {
        numberOfDegrees.innerHTML = 'Nie wpisałeś cyfry';
    } else {
        numberOfDegrees.innerHTML = 'Nic nie wpisałeś';
    }  
    changeStateOfWater(valueC);
    stateOfDressToTemperature(valueC);
});

buttonFahr.addEventListener('click', function() {	   
    var degreesF = window.prompt('Prosze podać stopnie Fahrenheita');
    var valueF = parseFloat(degreesF);
    var degreesC = convertFeranheitToCelsius(degreesF);
    
    if (!isNaN(valueF)) {
        numberOfDegrees.innerHTML = 'Stopnie Fahrenheita: ' + degreesF + '&#x2109 ' + '<br>' + 'Stopnie Celsjusza: ' + degreesC + '&#x2103' + '<br>'; 
    } else if (isNaN(valueF)) {
        numberOfDegrees.innerHTML = 'Nie wpisałeś cyfry';
    } else {
        numberOfDegrees.innerHTML = 'Nic nie wpisałeś';
    }  
    var celcius = convertFeranheitToCelsius(valueF);
    changeStateOfWater(celcius); 
 
    stateOfDressToTemperature(celcius);   
});

function convertFeranheitToCelsius(degreesF) {
    return (degreesF -32) / 1.8;  
};

function convertCelsiusToFeranheit(degreesC) {
    return degreesC * 1.8 + 32;  
};

function changeStateOfWater(valueC) {
    if(valueC === 0) {
        waterCondition.innerHTML = 'To jest temperatura zamarzania';
    } else if (valueC === 100) {
        waterCondition.innerHTML = 'To jest temperatura wrzenia';
    } else if (valueC < 0) {
        waterCondition.innerHTML = 'Woda zmieniła się w lód';
    } else if (valueC > 100) {
        waterCondition.innerHTML = 'Woda zmieniła się w parę';
    } else {
        waterCondition.innerHTML = '';
    } 
};

function stateOfDressToTemperature(valueC) {  
    if (valueC <= 0 ) {
        wayOfDress.innerHTML = 'Należy ubrać cieplutkie ubranie';
    } else if (valueC >= 20 && valueC < 40) {
        wayOfDress.innerHTML = 'Można spokojnie ubrać krótkie spodenki';
    } else if (valueC <= 10) {
        wayOfDress.innerHTML = 'Należy ubrać kurtkę i czapkę';
    } else {
        wayOfDress.innerHTML = '';
    }
};
    