"use strict"
let citiesArray = [];
let restaurantsArray = [];
let modeOfTransportation = [];
let formOfEntertainment = [];


runProgram();



function pickRandomNumberBasedOnArraySize(arrayToFindRandomValue){
    let selectionFromArray;
    selectionFromArray = Math.floor(Math.random() * arrayToFindRandomValue.length);
    return selectionFromArray;
}

function pickRandomIndexFromArray(arrayPassedIn,randomIndexNumber){
    let randomSelection = arrayPassedIn[randomIndexNumber];
    return randomSelection;        
}

function runProgram(){
    let responseToContinue;
    while(!responseToContinue){
        
        citiesArray = ["Madison", "Port Washington", "Kenosha", "Green Bay", "Milwaukee"];
        let cityPicked = pickRandomIndexFromArray(citiesArray, pickRandomNumberBasedOnArraySize(citiesArray));
        restaurantsArray = ["Steak and Shake", "Five O Clock", "Chili's", "Public Market"];
        let restaurantPicked = pickRandomIndexFromArray(restaurantsArray, pickRandomNumberBasedOnArraySize(restaurantsArray));
        modeOfTransportation = ["Beat feet", "Scooter", "Car", "Hot Air Balloon"];
        let modeOfTransportationPicked = pickRandomIndexFromArray(modeOfTransportation, pickRandomNumberBasedOnArraySize(modeOfTransportation));
        formOfEntertainment = ["Movie", "Football Game", "Roller Blading", "Downtown Tour"];
        let entertainmentPicked = pickRandomIndexFromArray(formOfEntertainment, pickRandomNumberBasedOnArraySize(formOfEntertainment));
  
        let usersDayTrip = `Have fun going to ${cityPicked}, eating at ${restaurantPicked}, getting there by 
        ${modeOfTransportationPicked}, and being entertained by ${entertainmentPicked}`;
        console.log(usersDayTrip);
        let checkResponse = prompt("Would you like to select another day trip? Please type, yes or no");
        responseToContinue = checkResponse == "yes" ? null : true;
    }
}