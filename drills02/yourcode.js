
const testNumbers = [
   4,
   6,
   3,
   6,
   1,
   8,
   4,
   3,
   3,
   4,
   5,
   6,
   6,
   7
 ]

function countOccurences(words, countWord){
   let counter = 0;
   words.map((word) => {
      word === countWord ? counter++ : counter
   })
   return counter;
}

function wordLengths(words){
   const wordLength = []; 
   words.map((word) => {
      const count = word.length;
      wordLength.push(count);
   })
   return wordLength;
}

function getMinMaxMean(numbersList){
   let min = numbersList[0];
   let max = numbersList[0];
   let mean =0;

   numbersList.map((number => {
      min >= number ? min = number : min;
      max <= number ? max = number : max;
      mean += number;
   }))

   return ({
      min: min,
      max: max,
      mean: mean/numbersList.length
   })
}

function findMode(numbers){
   const numCount = {};
   let findMax = 0;
   numbers.forEach((number) => {
      if (!numCount[number]){
         numCount[number] = 0
      }
      numCount[number]++
   })
   Object.getOwnPropertyNames(numCount).forEach(key => {
      if (numCount[key] > findMax){
         findMax = numCount[key]
      } 
   })
   let returnKey = Object.keys(numCount).find(key => numCount[key] === findMax)
   return parseInt(returnKey)
}

