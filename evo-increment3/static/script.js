var x = 5
var y = 7
var z = x + y
console.log(z);
A = "Hello "
B = "world!"
var C = A + B
console.log(C);
function sumnPrint(x1, x2) {
    var sum = x1 + x2
    console.log(sum);
}
sumnPrint(x, y);
sumnPrint(A, B);
if (C.length > z) {
    console.log(C)
} else if (C.length < z) {
    console.log(z)
} else {
    console.log("good job!")
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana() {
//     for (let i = 0; i < L1.length; i++) {
//         if (L1[i] === "Banana") {
//             alert("Banana")
//         }
//     }
// }
// function findTheBanana(array) {
//     array.forEach(function(item) {
//         if (item === "Banana") {
//             alert("Banana found!");
//         }
//     });
// }
// findTheBanana(L1);
// findTheBanana(L2);
let now = new Date();
let hour = now.getHours();
function greeting(x) {
    let greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        if (x < 5 || x >= 20) {
            greetingElement.innerHTML = "Good night";
        } else if (x < 12) {
            greetingElement.innerHTML = "Good morning";
        } else if (x < 18) {
            greetingElement.innerHTML = "Good afternoon";
        } else {
            greetingElement.innerHTML = "Good evening";
        }
    }
}
greeting(hour);
function addYear() {
    let year = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = year;
}
addYear();