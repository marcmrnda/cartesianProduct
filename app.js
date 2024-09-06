const inputEl = document.getElementById('input');
const input1El = document.getElementById('input1');
const calcuBTN = document.getElementById('calcu');
const answerEl = document.getElementById('answer');

let firstArr = [];
let secondArr = [];
let finalArr = [];


function CartesianPrint(arr, arr1) {
    // Initialize an empty array to store the formatted Cartesian product pairs
    let arr2 = [];

    // Outer loop: Iterate through each element of the first array
    for (let i = 0; i < arr.length; i++) {
        // Inner loop: Iterate through each element of the second array
        for (let j = 0; j < arr1.length; j++) {
            // For each combination, push a formatted string with curly brackets
            arr2.push(`{${arr[i]}, ${arr1[j]}}`);
        }
    }

    // Return the array containing all the formatted Cartesian product pairs
    return arr2.join(", "); // Joining them as a string, separated by commas
}

// Example usage:
let array1 = [1, 2];
let array2 = ['a', 'b'];
console.log(CartesianPrint(array1, array2));



calcuBTN.addEventListener('click', function(){
    let arrayValues = inputEl.value
    let arrayValues1 = input1El.value;
    let splittedValues = arrayValues.split(',');
    let splittedValues1 = arrayValues1.split(',')
    for(let i = 0; i<splittedValues.length; i++) {
        firstArr.push(splittedValues[i])
       }

       for(let i = 0; i<splittedValues1.length; i++) {
        secondArr.push(splittedValues1[i])
       }


    finalArr.push(CartesianPrint(firstArr,secondArr))

    const result = [];

    for (let i = 0; i < finalArr.length; i += 2) {
  result.push([finalArr[i], finalArr[i += 1]]);
}

console.log(result)

 
    answerEl.textContent =  `{${result}}`;
})

