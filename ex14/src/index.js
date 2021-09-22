    // Only change code below this line
function myForLoop1() {
    for (var i = 0; i < 10; i++) {
        if (i%2 == 0) {
            if (i + 2 == 10) {
                evenNumbers += i;
            }
            else {
            evenNumbers += i + ", ";
        } 
    }
}
    return evenNumbers;

}
function myForLoop2() {
    for (var i = 8; i >= 0; i--) {
        if (i%2 == 0) {
            if (i == 0) {
                evenInverseNumbers += i;
            }
            else {
                evenInverseNumbers += i + ", ";
        }
    } 
}
    return evenInverseNumbers;
}
var evenNumbers = "";
var evenInverseNumbers = "";
console.log(myForLoop1());
console.log(myForLoop2());
    // Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};