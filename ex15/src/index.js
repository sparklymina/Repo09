    // Only change code below this line
function myDoWhile() {
    do {
        if (i == 9) {
            myNumbers += i;
            i++;
        } 
        else {myNumbers += i + ", ";
            i++;
        }
    }
 while (i<10);
 return myNumbers;
}
var i = 0;
var myNumbers = ""
console.log(myDoWhile());
    // Only change code above this line
module.exports = myDoWhile;