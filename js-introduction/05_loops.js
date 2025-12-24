// Task 1: Write a JavaScript program using a for loop to print numbers from 1 to 10. 

for(let i=1;i<=10;i++){
    console.log(i)
}
// Task 2: Create a JavaScript program that uses a while loop to sum all even numbers between 1 and 20.
let sum=0;
let i=2;
while(i<=20){
    sum+=i;//2+4+6+8+10+12+14+16+18+20
    i+=2;//4,6,8,10,12,14,16,18,20
}
console.log("sum of even numers:",sum);
