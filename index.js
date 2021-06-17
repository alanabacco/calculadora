let clearButton = document.querySelector('.clear');
let backspaceButton = document.querySelector('.backspace');
let calculateButton = document.querySelector('.calculate');

let display = document.querySelector('.display');
let value = '';

clearButton.addEventListener('click', function () {
  value = '';
  display.innerHTML = '';
});

function insert(x) {
  if(value.length < 12){
    value = value + x;
  };
  display.innerHTML = value;
};

backspaceButton.addEventListener('click', function() {
  let result = display.innerHTML.slice(0, -1);
  display.innerHTML = result;
  value = result;
});

calculateButton.addEventListener('click', function() {
  if(value.length == 0) {
    value = '';
  } else {
    let result = eval(value);
    display.innerHTML = result;
    value = result.toString();
  }
});

function message() {
  alert("YOU'RE DOING GREAT!");
}
