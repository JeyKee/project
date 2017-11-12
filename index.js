
function start(){

var min =0;
var max =100;
var yourNum = undefined;

var random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random);



while (yourNum != random) {
    yourNum = prompt('Enter your number', '');
    while(yourNum == ''){
        alert('Only numbers are allowed');
        continue;
    }


    if (yourNum == null) {
        break;
    } else {

        if (yourNum > max) {
            alert('Your number should be less than ' + max);
            continue;
        }

        if (yourNum < min) {
            alert('Your number should be less than ' + min);
            continue;
        }
    }
 

    if (yourNum > random) {
        alert("Your is bigger");
    } else if (yourNum < random) {
        alert('Your is smaller');
    } else if(yourNum==random) {
        alert('You are right!');
    }
}
}