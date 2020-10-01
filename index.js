

const mapToNegativize = (sourceArray) => {
  return sourceArray.map( num => num * -1 )
};


const mapToNoChange = (sourceArray) => {
  return sourceArray.map( el => el )
}


function mapToDouble(sourceArray){
  return sourceArray.map( num => num * 2 )
}


function mapToSquare(sourceArray){
  return sourceArray.map( num => num ** 2 )
}



const reduceToTotal = (sourceArray, startingPoint=0 ) => {
  return sourceArray.reduce((total, source) => total + source , startingPoint)
}


function reduceToAllTrue(sourceArray){
  return sourceArray.reduce((booleanTotal, truthySource) => {
    if (truthySource === false) return false;
    return true;
  })
}


function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce((boolean, source)=>{
    if (source === true) return true;
    return false;
  })
}
