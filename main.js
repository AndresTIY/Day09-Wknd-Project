
var inputAll = document.getElementsByClassName('num');
var operator = document.getElementsByClassName('operator');
var display = document.querySelector('#result');
var displayContent = display;
var clear = document.getElementById('clear');
var run = document.getElementById('equals');
var decimal = document.getElementById('decimal');
var flip = document.getElementById('pos-neg');
var operatorSel = '';
var memory = '';
var memory2 = '';
var selectedNum = '';
var selectedNum2 = '';

clear.addEventListener('click', function click(){
  display.textContent = '';
  memory = '';
  memory2 = '';
  selectedNum = '';
  selectedNum2 = '';
  operatorSel = '';
})

flip.addEventListener('click', function flip(){
  if (memory.length > 0) {
    memory = Number(memory) - Number(memory) * 2;
    memory = String(memory);
    display.textContent = memory;
  }
})




decimal.addEventListener('click', function addDecimal(){
  if (operatorSel.length === 1) {
    selectedNum2 = decimal.value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2;
  } else if (operatorSel === '') {
    selectedNum = decimal.value;
    memory = memory + selectedNum;
    display.textContent = memory;
  }
})




run.addEventListener('click', function operation(){
  if (operatorSel === "+"){
    display.textContent = Number(memory) + Number(memory2);
    memory = '';
    memory2 = '';
    selectedNum = '';
    selectedNum2 = '';
    operatorSel = '';
  } else if (operatorSel === "-"){
    display.textContent = Number(memory) - Number(memory2);
    memory = '';
    memory2 = '';
    selectedNum = '';
    selectedNum2 = '';
    operatorSel = '';
  } else if (operatorSel === "/"){
    display.textContent = Number(memory) / Number(memory2);
    memory = '';
    memory2 = '';
    selectedNum = '';
    selectedNum2 = '';
    operatorSel = '';
  } else if (operatorSel === "X"){
    display.textContent = Number(memory) * Number(memory2);
    memory = '';
    memory2 = '';
    selectedNum = '';
    selectedNum2 = '';
    operatorSel = '';
  }
});




operator[0].addEventListener('click', function click (){
  operatorSel = "+";
  display.textContent = operatorSel;
});
operator[1].addEventListener('click', function click (){
  operatorSel = '-';
  display.textContent = operatorSel;
});
operator[2].addEventListener('click', function click (){
  operatorSel = "/"
  display.textContent = operatorSel;
});
operator[3].addEventListener('click', function click (){
  operatorSel = "X";
  display.textContent = operatorSel;
});



















inputAll[0].addEventListener('click', function click(){
  if (operatorSel.length === 1) {
    selectedNum2 = inputAll[0].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2
  }
  else if (operatorSel === '') {
  selectedNum = inputAll[0].value;
  memory = memory + selectedNum;
  display.textContent = memory;
  }
});
inputAll[1].addEventListener('click', function click(){
  if (operatorSel.length === 1) {
    selectedNum2 = inputAll[1].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2
  }
  else if (operatorSel === '') {
  selectedNum = inputAll[1].value;
  memory = memory + selectedNum;
  display.textContent = memory;
  }
});
inputAll[2].addEventListener('click', function click(){
  if (operatorSel.length === 1) {
    selectedNum2 = inputAll[2].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2
  }
  else if (operatorSel === '') {
  selectedNum = inputAll[2].value;
  memory = memory + selectedNum;
  display.textContent = memory;
  }
});
inputAll[3].addEventListener('click', function click(){
  if (operatorSel.length === 1) {
    selectedNum2 = inputAll[3].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2
  }
  else if (operatorSel === '') {
  selectedNum = inputAll[3].value;
  memory = memory + selectedNum;
  display.textContent = memory;
  }
});
inputAll[4].addEventListener('click', function click(){
  if (operatorSel.length === 1) {
    selectedNum2 = inputAll[4].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2
  }
  else if (operatorSel === '') {
  selectedNum = inputAll[4].value;
  memory = memory + selectedNum;
  display.textContent = memory;
  }
});
inputAll[5].addEventListener('click', function click(){
  if (operatorSel.length === 1) {
    selectedNum2 = inputAll[5].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2
  }
  else if (operatorSel === '') {
  selectedNum = inputAll[5].value;
  memory = memory + selectedNum;
  display.textContent = memory;
  }
});
inputAll[6].addEventListener('click', function click(){
  if (operatorSel.length === 1) {
    selectedNum2 = inputAll[6].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2
  }
  else if (operatorSel === '') {
  selectedNum = inputAll[6].value;
  memory = memory + selectedNum;
  display.textContent = memory;
  }
});
inputAll[7].addEventListener('click', function click(){
  if (operatorSel.length === 1) {
    selectedNum2 = inputAll[7].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2
  }
  else if (operatorSel === '') {
  selectedNum = inputAll[7].value;
  memory = memory + selectedNum;
  display.textContent = memory;
  }
});
inputAll[8].addEventListener('click', function click(){
  if (operatorSel.length === 1) {
    selectedNum2 = inputAll[8].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2
  }
  else if (operatorSel === '') {
  selectedNum = inputAll[8].value;
  memory = memory + selectedNum;
  display.textContent = memory;
  }
});
inputAll[9].addEventListener('click', function click(){
  if (operatorSel.length === 1) {
    selectedNum2 = inputAll[9].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = memory2
  }
  else if (operatorSel === '') {
  selectedNum = inputAll[9].value;
  memory = memory + selectedNum;
  display.textContent = memory;
  }
});
