
function sumArray(addArrayNumbers){
    var storeAddedNumbers = 0;
    for (arrayIndex = 0; arrayIndex < addArrayNumbers.length; arrayIndex++){
        storeAddedNumbers += addArrayNumbers[arrayIndex];
    };
    return storeAddedNumbers;
};

function fitWithinVal(numberList, numToAddTo){
    let addNumber = 0;
    let returnArray = [];
    numberList.forEach((number) => {
        if (addNumber + number <= numToAddTo){
            returnArray.push(number);
            addNumber += number;
        }})
    return returnArray;
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
