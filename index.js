// Your code here
function mapToNegativize(arr){
    const newArr = []
    for(const element of arr){
        newArr.push(element * -1)
    }
    return newArr
}

function mapToNoChange(arr){
    const newArr = []
    for(const element of arr){
        newArr.push(element)
    }
    return newArr
}

function mapToDouble(arr){
    const newArr = []
    for(const element of arr){
        newArr.push(element * 2)
    }
    return newArr
}

function mapToSquare(arr){
    const newArr = []
    for(const element of arr){
        newArr.push(element ** 2)
    }
    return newArr
}

function reduceToTotal(arr, start = 0){
    let total = start
    for(const element of arr){
        total += element
    }
    return total
}

function reduceToAllTrue(arr){
    for(const element of arr){
        if (!element) return false
    }
    return true
}

function reduceToAnyTrue(arr){
    for(const element of arr){
        if (element) return true
    }
    return false
}