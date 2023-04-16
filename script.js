//Write a function that takes in a string and returns it when reversed
//let food = “eating”

let food = "eating"
let x = food.split("").reverse().join("")
console.log(x)


//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23

function divideArray(num){
    if(num.length<=1){
        return num
    }
    let middle = Math.floor(num.length/2)
    let left = num.slice(0,middle)
    let right = num.slice(middle)
    console.log(left)
    console.log(right)
    return sortedArray(divideArray(left),divideArray(right))
}

function sortedArray(left,right){
    emptyArray = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }
    }
    console.log(emptyArray)
    return [...emptyArray,...left,...right]
}

function binary(num,target){
    let left = 0
    let right = num.length-1
    while(left<=right){
        let middle = Math.floor((left+right)/2)
        if(num[middle]===target){
            return middle
        }
        else if(num[middle]>target){
            right = middle-1
        }
        else{
            left = middle+1
        }
    }
    return null
}
let num = [2,8,0,23,5,45,76];
target = 23;

let y =divideArray(num,target)
let z = binary(divideArray,num)
console.log(binary(num,target))
console.log(divideArray(num))



//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

for (let year = 2000; year <= 2023; year++) {
  
    // check if the year is a leap year
    if ((year % 4 == 0)) {
      console.log(year + " is a leap year");
    } 
    else {
      console.log(year + " is not a leap year");
    }
    
  }

  //Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for(let numbers = 0; numbers<=100; numbers++){
    if((numbers%3==0)){
        console.log(numbers+"Fizz")
    }
    else if((numbers%5==0)){
        console.log( numbers+"Buzz")
    }
    else if(numbers%3==0 &&numbers%5==0){
        console.log(numbers+"FizzBuzz")
    }
}

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]

let numArray = [12,8,45,75,23,64,73]
let n = numArray.map(function(item){
   return item*4
})
console.log(n)


//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

let nums =["10","24","45","56","67"]
let r = nums.join()
console.log([r]) 




  