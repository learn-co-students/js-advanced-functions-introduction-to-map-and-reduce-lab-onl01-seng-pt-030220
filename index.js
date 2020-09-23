// Your code here


function mapToNegativize(sourceArray) {
    const newArray = sourceArray.map( a  => {
     if (a >= 0 ){
         a = ~a + 1
        return a 
        }
        if ( 0 >= a ){
            a = ~a + 1
            return a  
        }
    })
return newArray
}; 


function mapToNoChange(sourceArray){
    console.log(sourceArray)
    const newArray = sourceArray.map(name => {
         return name
    })
    return newArray
}

function mapToDouble(sourceArray){
const newArray = sourceArray.map(number => {
    const newNumber= number * 2
    return newNumber
})
return newArray
}


function mapToSquare(sourceArray){
    const newArray = sourceArray.map(number => {
        const newNumber= number * number
        return newNumber
    })
    return newArray
    }
    

    function reduceToTotal(sourceArray, startingPoint = 0) {
        const sum = sourceArray.reduce((total, amount) => total + amount)
        const newTotal = sum + startingPoint
        return newTotal
    }

    function reduceToAllTrue(sourceArray){
    const meowtth = sourceArray.every(value => value? true:false)
    return meowtth
    }

    function reduceToAnyTrue(sourceArray){
    const meowth = sourceArray.includes(true)
    return meowth
    } 
