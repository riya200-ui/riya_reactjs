
// Task 1:Declare an array of fruits (["apple", "banana", "cherry"]). Use JavaScript to:Add a fruit to the end of the array.Remove the first fruit from the array.Log the modified array to the console.

let fruits=["apple", "banana", "cherry"];
fruits.push("orange");//add end of the array
fruits.shift();//remove first fruit
console.log(fruits);

// Task 2: Write a program to find the sum of all elements in an array of numbers.
let num=[1,2,3,4,5,6,7,8,9,10]
let sum=0;
for(let i=0;i<num.length;i++){
    sum+=num[i];//1+2+3+4+5+6+7+8+9+10
}
console.log(sum)