
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
    array = [element, ...array]
    return(array)
}

addElementToBeginningOfArray(chocolateBars,'foo')


function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element)
    return(array)
}

function addElementToEndOfArray(array, element){
  array = [...array, element]
  return(array)
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return(array)
}

// function accessElementInArray(array, index) {
//   choice = array[index]
//   console.log(choice[2])
// }

function accessElementInArray(array, index) {
  return array[index]
}

accessElementInArray(chocolateBars,2)

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return(array)
}

function removeElementFromBeginningOfArray(array) {
   array.slice(1)
   array = array.slice(1)
   return(array)
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return(array)
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1)
  array = array.slice(0, array.length -1)
  return(array)
}
