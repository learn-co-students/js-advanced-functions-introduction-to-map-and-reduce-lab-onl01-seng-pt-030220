// map-like methods
function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.forEach(item => {
        let i = item * -1
        newArray.push(i)
    });
    return newArray;
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    let newArray = []
    sourceArray.forEach(item => {
        let i = item * 2
        newArray.push(i)
    });
    return newArray;
}

function mapToSquare(sourceArray) {
    let newArray = []
    sourceArray.forEach(item => {
        let i = item ** 2
        newArray.push(i)
    });
    return newArray;
}

//reduce-like methods

function reduceToTotal(sourceArray, startingPoint=0) {
    let currentTotal = startingPoint;
    sourceArray.forEach(item => {
        currentTotal += item
    });
    return currentTotal
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false 
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false;
}
