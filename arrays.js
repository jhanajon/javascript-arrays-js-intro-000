//var cities = ["New York", "San Francisco"]
// we can assign it to the existing `cities` variable
// cities = ["Philadelphia", ...cities]

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
    // chocolateBars.unshift('foo')

    array = [element, ...array]
    // chocolateBars = `[$bars', ...$bars]`
    return(array)
}
//non destructive version
//

//     return(chocolateBars)
