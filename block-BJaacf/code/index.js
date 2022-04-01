// 1. Create an array named numbers and store 5 number values in it
let numbers=[];
for(let i=1; i <= 5; i++)
{
    numbers.push(i);
}

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let j=0; j < numbers.length; j++)
{
    sum += numbers[j];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()

let average =0;
average = sum/5;
console.log(average);

// 4. Find the highest number in the array and print it to the console using console.log()

let highest =0;

for(let i=0; i<numbers.length; i++)
{
    if (numbers[i] < numbers[i+1])
    {
        highest = numbers[i+1];   
    }
}
 console.log(highest)



// 5. Find the lowest number in the array and print it to the console using console.log()
let minimum = numbers[0];

for(let i=0; i<numbers.length; i++)
{
    if (minimum > numbers[i])
    {
        minimum = numbers[i];   
    }
}
 console.log(minimum)

// 6. Find the even numbers in the array and print them to the console using console.log()
for(let i =0; i<numbers.length;i++)
{
    if (numbers[i]%2 == 0)
    {
        console.log(numbers[i]);
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let i =0; i<numbers.length;i++)
{
    if (numbers[i]%2 != 0)
    {
        console.log(numbers[i]);
    }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(let i =0; i<numbers.length;i++)
{
    if (numbers[i]%5 == 0)
    {
        console.log(numbers[i]);
    }
}
// 9. Log all the element of the array one by one

for(let i =0; i<numbers.length;i++)
{
    
        console.log(numbers[i]);
}
// 10. Find all the number in the array that is divisible by 3
for(let i =0; i<numbers.length;i++)
{
    if (numbers[i]%3 == 0)
    {
        console.log(numbers[i]);
    }
}
