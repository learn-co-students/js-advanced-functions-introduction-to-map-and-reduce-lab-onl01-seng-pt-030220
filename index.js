// Your code here
function mapToNegativize(sourceArray){
    let newArr = [];
    sourceArray.forEach(ele => {
        let neg = ele * -1;
        newArr.push(neg);
    })
    return newArr;
}

function mapToNoChange(sourceArray){
    return sourceArray;
}

function mapToDouble(sourceArray){
    let newArr = [];
    sourceArray.forEach(ele => {
        let double = ele * 2;
        newArr.push(double);
    })
    return newArr;
}

function mapToSquare(sourceArray){
    let newArr = [];
    sourceArray.forEach(ele => {
        let square = ele * ele;
        newArr.push(square);
    })

    return newArr;
}

function reduceToTotal(sourceArray, startPoint=0){
    let current = startPoint;
    sourceArray.forEach(ele =>{
        current += ele;
    })
    return current;
}

function reduceToAllTrue(sourceArray){
    let newArr = [];
    sourceArray.forEach(ele =>{
        if (!!ele === true){
            newArr.push(ele)
        }
    })
    if (newArr.length === sourceArray.length){
        return true 
    } else {
        return false
    }

}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === true)
        return true;
    } 
        return false
}