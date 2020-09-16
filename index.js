// Your code here
function mapToNegativize(sourceArray) {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i] * -1)
    }
    return result
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i] * 2)
    }
    return result
}

function mapToSquare(sourceArray) {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i] * sourceArray[i])
    }
    return result
}

function reduceToTotal(sourceArray, startingPoint) {
    let result = startingPoint || 0
    for (let i = 0; i < sourceArray.length; i++) {
        result += sourceArray[i]
    }
    return result
}

function reduceToAllTrue(sourceArray) {
    let result = true
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!!sourceArray[i]) {
            result = false
        }
    }
    return result
}

function reduceToAnyTrue(sourceArray) {
    let result = false
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i]) {
            result = true
        }
    }
    return result
}