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
            // For each combination, push the elements from both arrays to arr2
            arr2.push(arr[i], arr1[j]);
        }
    }
    
    // Return the array containing all the Cartesian product pairs
    return arr2;
}


function powerSet(S) {
    // Initialize an empty array to store all subsets
    let power_set = [];
    
    // Get the number of elements in S
    let n = S.length;
    
    // Calculate the total number of subsets (2^n)
    let total_subsets = Math.pow(2, n);
    
    // Iterate through each possible subset
    for (let i = 0; i < total_subsets; i++) {
        let subset = [];
        
        // Check each bit in the integer i
        for (let j = 0; j < n; j++) {
            // If the j-th bit of i is set (i.e., 1), include S[j] in the subset
            if ((i & (1 << j)) !== 0) {
                subset.push(S[j]);
            }
        }
        
        // Add the generated subset to the power set
        power_set.push(subset);
    }
    
    // Return the complete power set
    return power_set;
}

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

