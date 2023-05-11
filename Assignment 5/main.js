
// -------Question 2 --------
let string = "Bano Qabil"
function stringreverse(string){
    return string.split("").reverse().join("")
}
console.log(stringreverse(string))

// -------Question 4 --------

function filterString(value){
    return value.length>3;
}
let string1=["hey","hello","hey","howdy"].filter(filterString);
console.log(string1)

// -------Question 5 --------

function filterEven(value) {
  return value % 2 == 0;
}
 
let filtered = [11, 98, 31, 23, 944,244,166].filter(filterEven);
console.log(filtered);

// -------Question 9 --------

function str(array){
    let Newarray =[]
    for(let i=0;i<array.length;i++){
        const l = array[i].length
        Newarray.push(l);
    }
    return Newarray;
}
console.log(str(["hey","hello","hey"]))


// -------Question 1 --------

function findPair(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [numbers[i], numbers[j]];
        }
      }
    }
    return null;
  }
  console.log(findPair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));