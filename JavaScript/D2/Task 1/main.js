var counterError = 0;
var input = document.getElementById('input');
var num = Math.floor(Math.random() * 50) + 1;

alert('plz chose number form 1 to 50');


function check() {
    counterError++;

    if(parseInt(input.value) == num) {
        alert('this is right number and number of Mistake is :' + (counterError - 1));
    }
    else {
        alert('this number not correct chose anthor number');
    }

    
}