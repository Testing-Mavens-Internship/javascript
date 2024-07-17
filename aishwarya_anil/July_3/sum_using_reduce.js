//calculate the sum of an array of funny numbers (eg: multiply each number by 3 befroe summing)
//op :45


const  numbers =[1,2,3,4,5]; 



console.log(numbers.map(items => items *3 ).reduce((sum,n1) => sum + n1));
initialValue=0
console.log(numbers.reduce((sum,n1) => sum + (n1*3),initialValue));// if we did'nt give initial value



