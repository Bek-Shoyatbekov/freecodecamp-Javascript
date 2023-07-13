function frankenSplice(arr1, arr2, n) {
   let arr = arr2.slice();

   arr.splice(n, 0, ...arr1)

   return arr;
}

frankenSplice([1, 2], ["a", "b"], 1)

// console.log(re);