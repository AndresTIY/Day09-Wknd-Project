
var inputAll = document.getElementsByClassName('num');
var operator = document.getElementsByClassName('operator');
var display = document.querySelector('#result');
var displayContent = display;
var clear = document.getElementById('clear');
var run = document.getElementById('equals');
var operatorSel = '';

var first;
var second;
var numberSaved;
var number;
var memory = '';
var memory2 = '';
var selectedNum = '';
var selectedNum2 = '';

clear.addEventListener('click', function click(){
  display.textContent = '';
  memory = '';
  number = ''
})

// run.addEventListener('click', function operation(){
//   if (operatorSel === "+"){
//     var answer = Number(memory) + Number(memory)
//   }
// })

operator[0].addEventListener('click', function click (){
  operatorSel = "+";
  display.textContent = operatorSel;
});

operator[1].addEventListener('click', function click (){
  memory = memory + '-';
  operatorSel = '-';
  display.textContent = memory;
});
operator[2].addEventListener('click', function click (){
  memory = memory + '/';
  operatorSel = "/"
  display.textContent = memory;
});
operator[3].addEventListener('click', function click (){
  memory = memory + 'X';
  operatorSel = "X";
  display.textContent = memory;
});



















inputAll[0].addEventListener('click', function click(){

  if (operatorSel === "+"){
    selectedNum2 = inputAll[0].value;
    memory2 = memory2 + selectedNum2;
    display.textContent = '';
    display.textContent = memory2
  }

  else if (operatorSel === '') {


  selectedNum = inputAll[0].value;
  memory = memory + selectedNum;
  display.textContent = memory;

}
})








inputAll[1].addEventListener('click', function click(){
  selectedNum = inputAll[1].value;
  memory = memory + selectedNum;
  display.textContent = memory;
})
inputAll[2].addEventListener('click', function click(){
  selectedNum = inputAll[2].value;
  memory = memory + selectedNum;
  display.textContent = memory;
})
inputAll[3].addEventListener('click', function click(){
  selectedNum = inputAll[3].value;
  memory = memory + selectedNum;
  display.textContent = memory;
})
inputAll[4].addEventListener('click', function click(){
  selectedNum = inputAll[4].value;
  memory = memory + selectedNum;
  display.textContent = memory;
})
inputAll[5].addEventListener('click', function click(){
  selectedNum = inputAll[5].value;
  memory = memory + selectedNum;
  display.textContent = memory;
})
inputAll[6].addEventListener('click', function click(){
  selectedNum = inputAll[6].value;
  memory = memory + selectedNum;
  display.textContent = memory;
})
inputAll[7].addEventListener('click', function click(){
  selectedNum = inputAll[7].value;
  memory = memory + selectedNum;
  display.textContent = memory;
})
inputAll[8].addEventListener('click', function click(){
  selectedNum = inputAll[8].value;
  memory = memory + selectedNum;
  display.textContent = memory;
})
inputAll[9].addEventListener('click', function click(){
  selectedNum = inputAll[9].value;
  memory = memory + selectedNum;
  display.textContent = memory;
})
