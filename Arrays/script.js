// what is arrays in javascript
// In JavaScript, an array is a special type of object used to store multiple values in a single variable. It’s like a list that can hold numbers, strings, objects, or even other arrays.

let names = ["Ali", "Faarah", "Nuuh" ];
console.log(names[0]);
console.log(names[1]);
console.log(names[2])

// I want to change faarah to khaalid, how to change
names[1] = "khaalid";
console.log(names[1])

// Adding and removing elements 
  // push = adds to the ends
      names.push('siciid');
      console.log(names);

  //  unshift = adds to start
      names.unshift("nasro");
      
  //  pop = removes from ends
      names.pop('siciid');
      
  //  shift = removes from start
      names.shift("nasro");    