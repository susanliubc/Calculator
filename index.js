const projectName='Calculator';

const button = document.querySelectorAll('.input');
let output = document.querySelector('#display');

for(let i=0; i< button.length; i++) {
  if(button[i].innerHTML === 'C') {
    button[i].addEventListener('click', function() {
      output.innerHTML = '';
    })
  } 
  
  else if (button[i].innerHTML === '=') {
    if(output.innerHTML != '') {
      button[i].addEventListener('click', calculate());
    } else {
      output.innerHTML = '';
    }
  } 
  else if (button[i].innerHTML === '=') {
		if (output.innerHTML != '') {
			button[i].addEventListener('click', calculate());
		} else {
			output.innerHTML = '';
		}
	} 
  else {
    button[i].addEventListener('click', addInput(i));
  }
}
function addInput(i) { 
  return function() {
    
    if (output.innerHTML === '0' && button[i].innerHTML !== '.') {
      output.innerHTML = '0';  
    } else if(/^\d+\.\d+/.test(output.innerHTML) && button[i].innerHTML === '.') {
      output.innerHTML = output.innerHTML;
    } else if(/\d+|^\d+\.\d+/.test(output.innerHTML) && output.innerHTML.length === 14) {
      output.innerHTML = output.innerHTML; 
    } else if(/[\+\-\*\/]/.test(output.innerHTML.slice(output.innerHTML.length-1)) && (button[i].innerHTML === '+' || button[i].innerHTML === '-')) {
      output.innerHTML = output.innerHTML.replace(output.innerHTML.slice(output.innerHTML.length-1), button[i].innerHTML); 
    } else if(/[\+\-\*\/]/.test(output.innerHTML.slice(output.innerHTML.length-1)) && button[i].innerHTML === 'x') {
      output.innerHTML = output.innerHTML.replace(output.innerHTML.slice(output.innerHTML.length-1), '*'); 
    } else if(/[\+\-\*\/]/.test(output.innerHTML.slice(output.innerHTML.length-1)) && (button[i].innerHTML === '\u00f7' || button[i].innerHTML === '&divide')) {
      output.innerHTML = output.innerHTML.replace(output.innerHTML.slice(output.innerHTML.length-1), '/');
    } else if(button[i].innerHTML ==='\u00f7'  ||  button[i].innerHTML === '&divide') {
      output.innerHTML += '/';
    } else if(button[i].innerHTML === 'x') {
      output.innerHTML += '*'; 
    } else {
      output.innerHTML += button[i].innerHTML;
    }
  }
}

function calculate() { 
  return function() {
    if(output.innerHTML.includes('.')) {
      output.innerHTML = eval(output.innerHTML).toFixed(6);
    } else  {
      output.innerHTML = eval(output.innerHTML);
    }
  }
} 
