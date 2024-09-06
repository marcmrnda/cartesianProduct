const inputEl = document.getElementById('input');
const input1El = document.getElementById('input1');
const calcuBTN = document.getElementById('calcu');
const answerEl = document.getElementById('answer');

let firstArr = [];
let secondArr = [];
let finalArr = [];

function CartesianPrint(arr, arr1) {
    // Initialize an empty array to store the Cartesian product pairs
    let arr2 = [];
    
    // Outer loop: Iterate through each element of the first array
    for(let i = 0; i < arr.length; i++) {
        // Inner loop: Iterate through each element of the second array
        for(let j = 0; j < arr1.length; j++) {
            // For each combination, format the pair as [arr[i], arr1[j]] and push to arr2
            arr2.push(`[${arr[i]}, ${arr1[j]}]`);
        }
    }
    
    // Return the array containing all the Cartesian product pairs
    return arr2;
}

calcuBTN.addEventListener('click', function(){
    // Get values from inputs
    let arrayValues = inputEl.value;
    let arrayValues1 = input1El.value;

    // Split input values into arrays
    let splittedValues = arrayValues.split(',').map(value => value.trim());
    let splittedValues1 = arrayValues1.split(',').map(value => value.trim());

    // Populate the first and second arrays
    firstArr = splittedValues;
    secondArr = splittedValues1;

    // Calculate the Cartesian product and store it in finalArr
    finalArr = CartesianPrint(firstArr, secondArr);

    // Format the final result as a string
    const result = finalArr.join(', ');

    // Display the result
    answerEl.textContent = result;
});
