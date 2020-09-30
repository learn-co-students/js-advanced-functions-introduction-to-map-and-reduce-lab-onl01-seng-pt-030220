// Your code here
// const numbers = [1, 2, 3, -9]
// function mapToNegativize(number) {
//     let newNumbers = []

//     return(newNumbers.push(number * -1));
// }

function mapToNegativize(sourceArray){
    let map1 = sourceArray.map(x => x * -1);
    return map1
}
function mapToNoChange(sourceArray){
    return sourceArray
}
function mapToDouble(sourceArray){
    let map1 = sourceArray.map(x => x * 2);
    return map1
}
function mapToSquare(sourceArray){
    let map1 = sourceArray.map(x => x ** 2);
    return map1
}


function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint;
    for(let i = 0; i < sourceArray.length; i++){
        total = total + sourceArray[i];
    }
    return total 
}
function reduceToAllTrue(sourceArray){
    for(let i=0; i < sourceArray.length; i++){
        if (!sourceArray[i]){
            return false
        }
    }
    return true
}
function reduceToAnyTrue(sourceArray){
    for(let i=0; i < sourceArray.length; i++){
        if (sourceArray[i]){
            return true
        }
    }
    return false
}