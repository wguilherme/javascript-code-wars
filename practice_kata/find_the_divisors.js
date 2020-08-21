   function divisors(i) {
      arr = [];
      // loop number above 2 with iteration
      for (var x=2; x<i; x++){  
      // if modulus equals zero, push the number   
      if((i % x) === 0){ arr.push(x); }
      }
      // get prime number
      if(arr.length === 0) { 
         return `${x} is prime` 
      } else {
         return arr;
      }                  
   };