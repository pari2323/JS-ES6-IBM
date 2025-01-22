var globalVar = "global variable"   ;
let globalLet = " global let";
const globalConst = " global const";

{
    var blockVar =" block variable";
    let blockLet = " block Let";
    const blockCosnt = " block const";//Block Scope
    console.log(blockVar);
    console.log(blockLet);

}

console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
console.log(blockVar);
console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    return console.log(functionVar);
}
show();
    
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
