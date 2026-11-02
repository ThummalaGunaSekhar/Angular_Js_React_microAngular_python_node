let fArr = [1, 2, [3, 4,[4,3], 5, [0, 9, 8]]]
////
console.log(fArr.flat(Infinity).sort());
/////
let ff = function (f) {
    let fla = [];
    f.map((v) => {
        if (Array.isArray(v)) {
            fla = fla.concat(ff(v));
        } else {
            fla.push(v);
        }
    });
    return fla.sort()
}
console.log(ff(fArr));