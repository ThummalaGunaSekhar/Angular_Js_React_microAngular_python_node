let rTarr = [[1,2,3],[10,5,7],[1,6,9]];

let r2D = rTarr.toReversed().map( r => r.toReversed());
console.log(r2D);


let r2DD = function(r) {
    let rd = []; 
    for (let i = r.length - 1; i >= 0; i--) {
        let rdS = [];
        for (let j = r[i].length - 1; j >= 0; j--) {
            rdS.push(r[i][j]);
        }
        rd.push(rdS);
    }
    console.log(rd);
    return rd;
};
r2DD(rTarr)