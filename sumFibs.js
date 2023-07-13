function sumFibs(num) {
    if(num==0){
      return 0;
    }
    if(num==1) return 1;

    let finNum= sumFibs(num-1)+sumFibs(num-2);
   console.log(finNum)
 }
 
let result = sumFibs(10);
console.log(result);