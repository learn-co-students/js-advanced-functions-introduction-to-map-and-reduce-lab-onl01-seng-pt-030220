// Your code here
function mapToNegativize(array){ 
    let i = 0; 
    let newArray = []; 
    while (i < array.length) {
        newArray.push(array[i] * -1)
        i++; 
    }
    return newArray; 
}

function mapToNoChange(array){
    return array 
}

function mapToDouble(array){
    let i = 0; 
    let newArray = []; 
    while (i < array.length) {
        newArray.push(array[i] * 2); 
        i++; 
    }
    return newArray
}

function mapToSquare(array){
    let i = 0; 
    let newArray = []; 
    while (i < array.length) {
        newArray.push(array[i] * array[i]); 
        i++; 
    }
    return newArray 
}

function reduceToTotal(array, start=0){
    let accumulator = 0; 
    let i =0; 
    if (start) {
        accumulator = start
    }
    while (i < array.length) {
        accumulator += array[i]
        i++; 
    }
    return accumulator
}

function reduceToAllTrue(array){
    for (let i = 0; i < array.length; i++ ) {
        if (!array[i]) return false 
      }
      return true 
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) { 
      if (array[i]) return true 
    }
    return false 
  }