"use strict"

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
   let randomDayTrip = randomDayTrip();

}

function randomDayTrip{
    let responseToContinue;
    let randomDayTripArray;
    while(!responseToContinue){
        
        let citiesArray = ["Madison", "Port Washington", "Kenosha", "Green Bay", "Milwaukee"];
        let cityPicked = pickRandomIndexFromArray(citiesArray, pickRandomNumberBasedOnArraySize(citiesArray));
        let restaurantsArray = ["Steak and Shake", "Five O Clock", "Chili's", "Public Market"];
        let restaurantPicked = pickRandomIndexFromArray(restaurantsArray, pickRandomNumberBasedOnArraySize(restaurantsArray));
        let modeOfTransportation = ["Beat feet", "Scooter", "Car", "Hot Air Balloon"];
        let modeOfTransportationPicked = pickRandomIndexFromArray(modeOfTransportation, pickRandomNumberBasedOnArraySize(modeOfTransportation));
        let formOfEntertainment = ["Movie", "Football Game", "Roller Blading", "Downtown Tour"];
        let entertainmentPicked = pickRandomIndexFromArray(formOfEntertainment, pickRandomNumberBasedOnArraySize(formOfEntertainment));
  
       
        randomDayTripArray = [cityPicked, restaurantPicked,modeOfTransportationPicked,entertainmentPicked];
        let checkResponse = prompt("Would you like to select another random day trip? Please type, yes or no");
        if(checkResponse !== "yes"){
            let askAboutCustomTrip = prompt(`Would you like to keep some parts of this trip and change some others?`);
            if(askAboutCustomTrip === "yes"){
                return customTrip(randomDayTripArray, citiesArray, restaurantsArray, modeOfTransportation, formOfEntertainment));
            }
        }
        responseToContinue = checkResponse == "yes" ? null : true;
        
        

    }
}
function displayTrip(selectedTripArray){
    let usersDayTrip = `Have fun going to ${cityPicked}, eating at ${restaurantPicked}, getting there by 
    ${modeOfTransportationPicked}, and being entertained by ${entertainmentPicked}`;
    alert(usersDayTrip);

}
function displayCustomTrip(selectedTripArray){
    let askToModifyTrip = prompt("Would you like to keep some parts of this trip and change some others?")
    if(askToModifyTrip === "yes"){
        return customTrip(randomDayTripArray, citiesArray, restaurantsArray, modeOfTransportation, formOfEntertainment)
    } 

}

function customTrip(randomUserArray, citiesArray, restaurantsArray, transportationArray, entertainmentArray){
    let valueToChange;
    alert("What would you like to change about the random trip generated for you?");
    while(valueToChange !== ("1" || "2" || "3" || "4")){
        valueToChange = prompt(`Would you like to change 1:${randomUserArray[0]}, 2:${randomUserArray[1]}, 3:${randomUserArray[2]},
        or 4:${randomUserArray[3]}`)
    }
    switch(valueToChange){
        case "1":
            randomUserArray[0] = pickRandomIndexFromArray(citiesArray, pickRandomNumberBasedOnArraySize(citiesArray));
            break;
        case "2":
            randomUserArray[1] = pickRandomIndexFromArray(restaurantsArray, pickRandomNumberBasedOnArraySize(restaurantsArray));
            break;
        case "3":
            randomUserArray[2] = pickRandomIndexFromArray(transportationArray, pickRandomNumberBasedOnArraySize(transportationArray));
            break;
        case "4":
            randomUserArray[3] = pickRandomIndexFromArray(entertainmentArray, pickRandomNumberBasedOnArraySize(entertainmentArray));
            break;
    }

    displayTrip(randomUserArray);
}