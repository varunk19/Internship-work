console.log("Callback demo script is loaded");
function add(a,b) {
    console.log(`${a}+${b}:`);
    return a+b;
}
function sub(a,b) {
    console.log(`${a}-${b}:`);
    return a-b;
}
function mul(a,b) {
    console.log(`${a}*${b}:`);
    return a*b;
}
function div(a,b) {
    console.log(`${a}/${b}`);
    return a/b;
}
function calc(a,b,callback) {
    return callback(a,b);
}
console.log(calc(20,10,add));
console.log(calc(20,10,sub));
console.log(calc(20,10,mul));
console.log(calc(20,10,div));