var arrayNumber = [1, 2, 3, 4 , 5, 6, 8, 9];
var arrayLetters = ["a", "b", "c", "e", "f", "g"];


var randomArray = randomize_list(arrayNumber);
var randomLetterArray = randomize_list(arrayLetters);

function randomize_list(passArray){
    var arrayIndex = passArray.length;
    var tempStorage = 0;
    var randomIndex = 0; 
    while (0 !== arrayIndex) {
        randomIndex = Math.floor(Math.random() * arrayIndex);
        arrayIndex -= 1; 
        tempStorage = passArray[arrayIndex];
        passArray[arrayIndex] = passArray[randomIndex];
        passArray[randomIndex] = tempStorage;
    }; 
    return passArray;
}; 

console.log("Random Array is: ", randomArray);
console.log("Random Letters Array: ", randomLetterArray);