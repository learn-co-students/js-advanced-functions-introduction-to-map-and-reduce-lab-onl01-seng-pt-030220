//map docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
function mapToNegativize(sourceArray){
    let map1 = sourceArray.map(x => x * -1);
    return map1
}
function mapToNoChange(sourceArray){
    let map1 = sourceArray.map(x => x);
    return map1
}
function mapToDouble(sourceArray){
    let map1 = sourceArray.map(x => x * 2);
    return map1
}
function mapToSquare(sourceArray){
    let map1 = sourceArray.map(x => x ** 2);
    return map1
}


// reduce docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
      total = total + sourceArray[i]
    }
    return total
}
function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
      }
      return true

}
function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
      }
      return false

}