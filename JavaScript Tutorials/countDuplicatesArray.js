let cArr = [1, 2, 2, 3, 5, 2, 4, 5, 4, 5, 6, 7, 7, 8, 8];

///    for loop will save and shown values and duplicate values
let cda = function (a, e) {
    let c = {};
    for (let i of a) {
        c[i] = (c[i] || 0) + 1;
    }
    console.log(c + " -- " + c[2]);
   
 ///
    let cc = {}
    a.map((k) => {
        cc[k] = (cc[k] || 0) + 1;
    } )
    console.log(JSON.stringify(cc) +  " -- "+ cc[3]);
///
    let ccc = {}
    a.forEach((k) => {
        ccc[k] = (ccc[k] || 0) + 1;
    } )  ;
    console.log(ccc, '---', ccc[7]);

}
cda(cArr);