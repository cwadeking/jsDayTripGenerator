"use strict"

let citiesArray = ["Madison", "Port Washington", "Kenosha", "Green Bay", "Milwaukee"];
let restaurantsArray = ["Steak and Shake", "Five O Clock", "Chili's", "Public Market"];
let modeOfTransportation = ["Beat feet", "Scooter", "Car", "Hot Air Balloon"];
let formOfEntertainment = ["Movie", "Football Game", "Roller Blading", "Downtown Tour"];

function pickRandomValueInArray(arrayToFindRandomValue){
    let selectionFromArray;
    selectionFromArray = Math.floor(arrayToFindRandomValue.length) + 1;
    return selectionFromArray;
}