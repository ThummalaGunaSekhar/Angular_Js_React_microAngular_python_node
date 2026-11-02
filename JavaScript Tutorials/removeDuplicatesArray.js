let rarr = [1, 0,6,2,3,3,1, 2, 3, 5, 3, 1, 2, 7, 5, 3, 5, 9, 8];

   // sort and remove a formal javascript way
let rmD1 = function(a){
    let srm1 = [];
    // Remove duplicates
    for(let i of a){
        if(!srm1.includes(i)){
            srm1.push(i);
        }
    }
    console.log( ' remove Duplicate --  ', srm1);
    
  // Bubble sort  for 
    for (let i = 0; i < srm1.length; i++) {
        for (let j = 0; j < srm1.length - i - 1; j++) { 
            if (srm1[j] > srm1[j + 1]) {
                let temp = srm1[j];
                srm1[j] = srm1[j + 1];
                srm1[j + 1] = temp;
            }
        }
    }
    console.log(srm1); // Final sorted unique array
}
rmD1(rarr);

//    Set method

console.log(`using set method ==> ${[...new Set(rarr)]}`)

// using   filter

let rmd = rarr.filter( ( un, ar ) => { 
    let on = rarr.indexOf(un) === ar;
    return on
 }  )
console.log(rmd);