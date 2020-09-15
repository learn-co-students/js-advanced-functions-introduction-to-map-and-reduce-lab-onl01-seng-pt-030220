// Your code here
function mapToNegativize(sourceArray) {

    return sourceArray.map(el =>
        el * -1
    )

}


function mapToNoChange(sourceArray) {

    return sourceArray.map(el => el)
}

function mapToDouble(sourceArray) {


    return sourceArray.map(el => el * 2)
}

function mapToSquare(sourceArray) {


    return sourceArray.map(element => element * element)
}


function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce(function(total, element) { return element + total }, startingPoint)

}


function reduceToAllTrue(sourceArray) {
    let truethy = true
    sourceArray.reduce(function(total, element) {
        if (element === false) {
            truethy = false
        }
    })

    if (truethy === true) {
        return true

    } else {

        return false
    }


}

function reduceToAnyTrue(sourceArray) {
    let result = false
    result = sourceArray.reduce(function(total, element) {
        if (element === true) {
            return true
        }

    })
    return result === true ? true : false
}