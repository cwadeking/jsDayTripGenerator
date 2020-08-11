"use strict"

let citiesArray = ["Madison", "Port Washington", "Kenosha", "Green Bay", "Milwaukee"];
let restaurantsArray = ["Steak and Shake", "Five O Clock", "Chili's", "Public Market"];
let modeOfTransportation = ["Beat feet", "Scooter", "Car", "Hot Air Balloon"];
let formOfEntertainment = ["Movie", "Football Game", "Roller Blading", "Downtown Tour"];

function pickRandomNumberBasedOnArraySize(arrayToFindRandomValue){
    let selectionFromArray;
    selectionFromArray = Math.floor(arrayToFindRandomValue.length) + 1;
    return selectionFromArray;
}

function pickRandomIndexFromArray(arrayPassedIn,randomIndexNumber){
    let randomSelection = arrayPassedIn[randomIndexNumber];
    return randomSelection;        
}

function runProgram(){
    let responseTocontinue;
    while(!responseToContinue){
        let cityNumber = pickRandomNumberBasedOnArraySize(citiesArray);
        let cityPicked = pickRandomIndexFromArray(citiesArray, cityNumber);
        let restaurantNumber = pickRandomIndexFromArray(restaurantArray);
        let restaurantPicked = pickRandomIndexFromArray(restaurant, restaurantNumber);
        let modeOfTransportationNumber = pickRandomIndexFromArray(modeOfTransportation);
        let modeOfTransportationPicked = pickRandomIndexFromArray(modeOfTransportation, modeOfTransportationNumber);
        let entertainmentNumber = pickRandomIndexFromArray(formOfEntertainment);
        let entertainmentPicked = pickRandomIndexFromArray(formOfEntertainment, entertainmentNumber);
        let checkResponse = prompt("Would you like to select another day trip?")
        let responseToContinue = c
    }
}