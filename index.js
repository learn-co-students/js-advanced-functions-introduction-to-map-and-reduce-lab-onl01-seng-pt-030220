// Your code here
const mapToNegativize = (array) => {
    const negNum = [];
    for(let i=0; i<array.length; i++){
        negNum.push(array[i] * -1);
    }    
    return negNum;
}
const mapToNoChange = function(array) {
    const num = array;
    return num;
}
const mapToDouble = function(array) {
    const dubNum = [];
    for(let i=0; i<array.length; i++){
        dubNum.push(array[i] * 2);
    }
    return dubNum;
}
const mapToSquare = function(array) {
    const sqNum = [];
    for(let i=0; i<array.length; i++){
        sqNum.push(array[i] ** 2);
    }
    return sqNum;
}


const reduceToTotal = function(array, start = 0) {
    let total = start;
    for(let i=0; i<array.length; i++){
        total += array[i];
    }
    return total;
}
const reduceToAllTrue = function(array) {
    for(let i=0; i<array.length; i++){
        if (!array[i]) {return false};
    }   
    return true; 
}
const reduceToAnyTrue = function(array) {
    for(let i=0; i<array.length; i++){
        if (array[i]) {return true};
    }
    return false;
}