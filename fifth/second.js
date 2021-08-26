var myHorribleGlobalVar = 20;

function addTwoNumbers(first, second){
    var abc123 = first + second;
    {
        var thisShouldBeGlobal = 30;
        let thisShouldBeLocal = 50;
    }
    console.log(thisShouldBeGlobal);
    // console.log(thisShouldBeLocal);
    console.log(myHorribleGlobalVar);
    return abc123
}
const age = 30;

console.log(age);
var total = addTwoNumbers(25, 40);
document.getElementById('total').innerText = total;


function isEven(number) {
    if(number % 2 === 0){
        return 'YES!!!!'
    }else {
        return 'No'
    }
}

let even = isEven(57);

console.log(even);