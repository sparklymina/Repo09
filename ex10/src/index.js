// Only change code below this line
function logicalOrder(num){
if (num >= 100) {
    return "Greater than or equal to 100";
} else if (num >= 50) {
    return "Less than 100";
} else {
    return "Less than 50"
}
}
console.log(logicalOrder(28));
console.log(logicalOrder(60));
console.log(logicalOrder(110));
// Only change code above this line
module.exports = logicalOrder;