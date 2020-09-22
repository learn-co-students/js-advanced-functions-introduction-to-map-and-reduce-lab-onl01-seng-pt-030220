// Your code here
//sorry ! , I didn't read the curriculum for this lab,i just used test questions, and i was passing all of them in using map and reduce
// , after I reviewed this lab, I realized that and did this lab  again using map-like and reduce-like
function mapToNegativize(sourceArray) {

  //  return sourceArray.map(el =>
    //    el * -1
  //  )
  let newArray=[]
  sourceArray.forEach (el =>

    newArray.push(el * -1)
  )
return newArray
}


function mapToNoChange(sourceArray) {

    let newArray=[]
    sourceArray.forEach (el =>

      newArray.push(el)
    )
  return newArray
}

function mapToDouble(sourceArray) {

    //return sourceArray.map(el => el * 2)
    let newArray=[]
    sourceArray.forEach (el =>
      newArray.push(el * 2)
    )
  return newArray

}

function mapToSquare(sourceArray) {

    //return sourceArray.map(element => element * element)

    let newArray=[]
    sourceArray.forEach (el =>
      newArray.push(el * el)
    )
  return newArray
}


function reduceToTotal(sourceArray, startingPoint) {
    //return sourceArray.reduce(function(total, element) { return element + total }, startingPoint)

let total
 if (startingPoint) {

  total=startingPoint
   for(let i=0 ;i< sourceArray.length;i++)
   {
     total +=sourceArray[i]
   }

 }
 else
 {

  total=0
   for(let i=0 ;i< sourceArray.length;i++)
   {
     total +=sourceArray[i]
   }
 }
 return total

}


function reduceToAllTrue(sourceArray) {
    //let truethy = true
  ///  sourceArray.reduce(function(total, element) {
    //    if (element === false) {
      //      truethy = false
    //    }
  //  })

    //if (truethy === true) {
    //    return true

//    } else {

  //      return false
  //  }

    for(let i=0 ;i< sourceArray.length;i++)
    {
          if (sourceArray[i] === false ){
            return false
          }

    }
    return true


}

function reduceToAnyTrue(sourceArray) {
  //  let result = false
  //  result = sourceArray.reduce(function(total, element) {
    //    if (element === true) {
      //      return true
      //  }
  //  })
  //  return result === true ? true : false

  for(let i=0 ; i < sourceArray.length ; i++)
  {
      if (sourceArray[i] === true ){
          return true
      }

  }
  return false


}
