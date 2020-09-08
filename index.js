// Your code here

function mapToNegativize(sourceArray) {
  let newArray = [];
  sourceArray.forEach(element => {
    let negNum = element * -1
    newArray.push(negNum)
  });
  return newArray;
}

function mapToNoChange(sourceArray){
  return sourceArray;
}

function mapToDouble(sourceArray){
  let newArray = [];
  sourceArray.forEach(element => {
    let dblNum = element * 2
    newArray.push(dblNum)
  });
  return newArray
}

function mapToSquare(sourceArray){
  let newArray = [];
  sourceArray.forEach(element => {
    let sqNum = element ** 2
    newArray.push(sqNum)
  });
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0){
  let currentVal = startingPoint;
  sourceArray.forEach(element => {
    currentVal += element
  });
  return currentVal;
}

function reduceToAllTrue(sourceArray){
  let newArray = [];
  sourceArray.forEach(element => {
    if (!!element === true){
      newArray.push(element)
    };
  });
  if (newArray.length === sourceArray.length){
    return true
  } else {
    return false
  }
}

function reduceToAnyTrue(sourceArray){
  let newArray = [];
  sourceArray.forEach(element => {
    if (!!element === false){
      newArray.push(element)
    };
  });
  if (newArray.length !== sourceArray.length){
    return true
  } else {
    return false
  }
}

