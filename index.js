// Write a short program that console log each number from 1 to 100 on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

let counter = 1;

while (counter < 101) {
  let output = "";

  if (counter % 3 === 0) {
    output += "Fizz";
  }
  if (counter % 5 === 0) {
    output += "Buzz";
  }

  console.log(output);
  counter += 1;
}