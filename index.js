

// wenn die buttons mit dieser Funktion (0-9,+,-,*,/,)per Maus angeklickt werden:
function clickButton(buttonValue) {
    let textBox = document.getElementById("input-box"); //textfeld ansprechen
    previousInput = textBox.value; //bisherigen input in Variable tun
    textBox.value = previousInput.concat(buttonValue); //button-value an den String anhängen
}

// klicken des "=" buttons
function clickIsEqual(){
    let input = document.getElementById("input-box"); // auf Textfeld zugreifen
    let lastChar = input.value[input.value.length-1]; // letzen char des Textfeldes in Variable
    if (lastChar.search(/[0-9]/) < 0){ //falls der letze char keine Zahl ist,
          //wird nichts gemacht
    }
    else{
        let calculation = input.value; //ansonsten wird der Text aus dem Feld ausgelesen
        let result = eval(calculation); // und per eval funktion ausgerechnet
        input.value = result;// neuer value des Textfeldes ist das Ergebnis
    }
}

// wenn c angeklickt wird
function clickClear(){
    let textBox =document.getElementById("input-box");
    textBox.value = ""; // Value des Textfeldes = leer
}

// passiert onKeyUp bei jedem schreiben ins Textfeld
function useKeyboard(){
    let inputBox = document.getElementById("input-box");
    let lastChar = inputBox.value[inputBox.value.length-1]; 
    console.log(lastChar);

    if (lastChar.search(/[0-9]/) < 0 && lastChar.search(/[+|-|*|/|C|c|=]/) < 0) {
        inputBox.value = inputBox.value.substring(0,inputBox.value.length-1);
        // alles, was nich 0-9 oder +-*/Cc= ist, wird per substring (0-vorletzer char)gelöscht.
    }
    if (lastChar === '='){
        // falls am Schluss des Textfeldes = steht, wird der letzte char (das =) aus dem Textfeld
        //gelöscht und als neuen value ins Textfeld gespeichert
        // dann wird die onClick Funktion des = buttons aufgerufen.
        inputBox.value = inputBox.value.substring (0,inputBox.value.length-1);
        let isEqualButton = document.getElementById("=");
        isEqualButton.click(); 
    }
    if(lastChar === "C" || lastChar === "c"){
        // falls am Schluss des Textfeldes c oder C steht, wird die 
        // onClick Funktion des c buttons aufgerufen. 
        let cButton = document.getElementById("c");
        cButton.click();
    }
}
 
// klick auf Backspace-Button
function clickBackspace(){
    let inputBox = document.getElementById("input-box");
    // wieder wird aufs Textfeld zugegriffen und der letze char gelöscht.
    let result = inputBox.value.substring (0,inputBox.value.length-1);
    // das Ergebnis daraus als neuer value in die Textbox.
    inputBox.value = result;
    inputBox.focus();
    
}

// damit die Standardfunktion des Textfeldes beim enter drücken nicht aufgerufen wird.
calculator.addEventListener("submit", function (ev) {
	// prevent form submission and page reload
	ev.preventDefault();
	ev.stopPropagation();
    return false;
});

// hier wird definiert, was passieren soll, wenn enter gedrückt wird.
document.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
    let IsEqualButton = document.getElementById("=");
    IsEqualButton.click();
  }
});




    
 








