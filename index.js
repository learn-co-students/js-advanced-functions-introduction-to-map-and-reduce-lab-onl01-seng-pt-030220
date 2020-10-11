// Your code here
function mapToNegativize(sourceArray) {
  let newArray = []
  for (const element of sourceArray) {
    newArray.push(element*-1);
  } return newArray
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  let newArray = []
  for (const element of sourceArray) {
    newArray.push(element*2);
  } return newArray
}

function mapToSquare(sourceArray) {
  let newArray = []
  for (const element of sourceArray) {
    newArray.push(element**2);
  } return newArray
}

function reduceToTotal(sourceArray, startingPoint=0){
   let total = startingPoint
   for (let i = 0; i < sourceArray.length; i++) {
     total += sourceArray[i]
   } return total
}


function reduceToAllTrue(sourceArray) {
  for (const element of sourceArray) {
    if (!element) {
      return false
    }
  } return true
  }



function reduceToAnyTrue(sourceArray) {
  for (const element of sourceArray) {
        if (!!element) {
            return true;
        }
    } return false;

}
