
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

function getAllNamesShorterThan(arrayOfNames, smallerThanLength){
    const returnNames = [];
    arrayOfNames.forEach((name) => {
        if (name.length < smallerThanLength){
            returnNames.push(name);
        }
    })
    return returnNames;
}

function makeLabel(info){
    const {
        greeting, 
        givenName, 
        familyName, 
    } = info;

    const {
        streetNumber,
        streetName,
        city,
        state,
        zip
    } = info["home address"];
    return `${greeting} ${givenName} ${familyName}\n${streetNumber} ${streetName}\n${city}, ${state} ${zip}`
}
