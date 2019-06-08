var box = document.getElementById("display"); //for js/html communication
var operators = ["+", "-", "*", "/"]; //for checking if an operator was used
var memory = ""; //initializes memory

function operate(x) {
  memory += box.value; //add current display to memory
  if(operators.indexOf(memory.substr(memory.length-1, 1)) > -1) //check if variable is 
        {memory = memory.substr(0, memory.length-1); // if so, remove last char in memory (prev operator)
         box.value = x; //and set display equal to current operator
  }else{box.value = x} //if prev char is not an operator, set display to current operator
};

function toScreen(x) {
  
  //if AC button used, clear memory and display
  if(x === "AC") {
      box.value = "0"
      memory = "";
    
  //if C button used, delete last character in display  
  }else if(x === "C") { 
      if(box.value.length === 1){box.value = "0"}
      else{box.value = box.value.substr(0, box.value.length - 1)}
    
  //if 0 button used and display is also 0, display is still 0
  //if display is not also 0, append 0 to display
  }else if(x==="0") {
      if(box.value === "0"){box.value = "0";}
       else(box.value+=x)  
    
  //if decimal button is used, and there is already a decimal onscreen,
  //leave display as-is
  //if there is a 0 onscreen, make display "0."
  //if none of the above are true, append a decimal to display
  }else if(x === '.') {
      if (box.value.indexOf('.') > -1){box.value = box.value}
      else if(box.value === "0"){box.value = "0."}        
      else{box.value += "."}
            
 }else if(operators.indexOf(box.value) > -1) //if current display is an operator, add it to memory and replace with current input
      {memory = memory + box.value;
      box.value = x
       
 //if current value of display is 0, change value to input (rather than appending it)
 }else if(box.value === "0"){box.value = x     
 
//otherwise, just add input to display                             
 }else{box.value += x}
    }

function calculate(){
  memory = memory + box.value;
  box.value = eval(memory);
  memory = ""
}
