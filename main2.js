
//loop throu print one by 1
const array=[1,2,3,4,5]


 for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 5 === 0 && element % 3 === 0) {
        console.log(" FizzBuzz.");
    } else {
        if (element % 5 === 0) {
            console.log(" Buzz.");
        } else {
            if (element % 3 === 0) {
                console.log(" Fizz.");
            } else {
                console.log(element);
            }
        }
    }


}

console.log(typeof([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))



for (let number = 0; number <= 30; number++) {
    if (number % 5 === 0 && number % 3 === 0) {
        console.log(" FizzBuzz.");
    } else {
        if (number % 5 === 0) {
            console.log(" Buzz.");
        } else {
            if (number % 3 === 0) {
                console.log(" Fizz.");
            } else {
                console.log(number);
            }
        }
    }


}

