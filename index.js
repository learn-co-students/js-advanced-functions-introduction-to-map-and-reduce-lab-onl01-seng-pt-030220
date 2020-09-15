const mapToNegativize = (sourceArray) => sourceArray.map(n => n *-1) 

const mapToNoChange = (sourceArray) => sourceArray.map(n => n) 

const mapToDouble = (sourceArray) => sourceArray.map(n => n *2) 

const mapToSquare = (sourceArray) => sourceArray.map(n => n*n)

const reduceToTotal = (sourceArray, startingPoint = 0) => {
  return sourceArray.reduce((acc, n) =>  (acc +n ) , startingPoint)
}
const reduceToAllTrue = (sourceArray) => {
  return sourceArray.reduce((acc, n) => !!n)
}
const reduceToAnyTrue = (sourceArray) => {
  return sourceArray.reduce((acc, n) => !!n)
}

