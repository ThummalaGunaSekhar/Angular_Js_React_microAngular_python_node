let arr = [1, 2, 3, 4, 5, 30, 1,3,4];

let sumArr = function(arr) {
    let s = 0 ;
    let reduceSum = 0 ;
    let forLopp = 0 ;
    let forOfLoop = 0 ;


    // map method using

    arr.map(  (x) => { s += x; } );
    console.log(`first method ${s}`) ; 



    // reduce method Using ....
    
    reduceSum = arr.reduce( (a,b) => a+b, 0   )
    console.log(`second method reduce ${reduceSum}`);



    // for loop Using 

    for(let i = 0 ; i < arr.length ; i++){
        forLopp += arr[i];
    }
    console.log( `third method using for loop ${forLopp} `);



    // for Of loop 

    for(let i of arr){
        forOfLoop += i ;
    }
    console.log(`fourth method  ${forOfLoop}` )


}
sumArr(arr);
