// let inputTotal;
// inputTotal = "";

function setCaret(){
    let textBox = document.getElementById("input-box");
    textBox.focus();
}

function clickButton(buttonValue) {
    
    let textBox = document.getElementById("input-box");
    bisherigerInput = textBox.value;
    textBox.value = bisherigerInput.concat(buttonValue); //etwas an einen String anhängen
    textBox.focus();
}


function clickIsEqual(){
    let input = document.getElementById("input-box");
    let calculation = input.value;
    console.log(calculation);
    let result = eval(calculation);
    console.log(result);
    input.value = result;
    input.focus();
}

function clickClear(){
    
    let textBox =document.getElementById("input-box");
    textBox.value = "";
    textBox.focus();
}

  

function useKeyboard(){

    let inputBox = document.getElementById("input-box");
    let lastChar = inputBox.value[inputBox.value.length-1]; 
    console.log(lastChar);

    if (lastChar.search(/[0-9]/) < 0 && lastChar.search(/[+|-|*|/|C|c|=]/) < 0) {
        inputBox.value = inputBox.value.substring(0,inputBox.value.length-1);
    }
    if (lastChar === '='){
        let result = eval(inputBox.value.substring (0,inputBox.value.length-1));
        console.log(result);
        inputBox.value = result;
    }
    if(lastChar === "C" || lastChar === "c"){
        let cButton = document.getElementById("c");
        cButton.click();
    }
}


calculator.addEventListener("submit", function (ev) {
	// prevent form submission and page reload
	ev.preventDefault();
	ev.stopPropagation();
    return false;
});

document.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
    let IsEqualButton = document.getElementById("=");
    IsEqualButton.click();
  }
});




    
 








