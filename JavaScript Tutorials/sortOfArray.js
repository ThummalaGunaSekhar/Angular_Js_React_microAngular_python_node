
let arr = [10,40,39,29,40,1,32,5,9,0,5];

let sortArray = function(ar){

    // 
    let s = ar.toSorted( (a,b) => a-b ) ;
    console.log(  `sorted the array using array.toSorted method -- ${s}`);



    //

    for (let i = 0; i < ar.length; i++) {
        for ( j = 0; j < ar.length - i - 1; j++) { 
            if (ar[j] > ar[j + 1])   {
                let temp = ar[j];
                ar[j] = ar[j + 1];
                ar[ j + 1] = temp;    
            }  
        }  
    }    
    console.log("Sorted :", ar );  

}
sortArray(arr);