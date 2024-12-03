const text = "javascript is fun";
console.log(text.split('').reduce((count, char) => 
  'aeiouAEIOU'.includes(char) ? count + 1 : count, 0));