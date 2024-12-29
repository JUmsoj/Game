const grid = document.getElementById("Hello");
const code_history = document.getElementById("code-history");
const code3 = document.getElementById("other")
const enter = document.getElementById("enter")
const clear = document.getElementById("clear")
let trys = 0;
const avaliable_ints = "0123456789"
let actual_code = ""
let code = ""
let step = -1
let sto = false
randomize(5)
function Enter_Code() {
  trys++
  
  if(code===actual_code) {
    alert("You won!");
    code = ""
    return
  }
  
    
    
  Log_Code();
 
  if(trys > 4 && code != actual_code) {
    for(let i = 0; i < actual_code.length; i++) {
      code3.removeChild(code3.firstChild);
    }
    alert("Wrong, Try Again")
    sto = true
    setTimeout(function() {
    location.reload()
    }, 2000);
    return
  }
    for(let i = 0; i < actual_code.length; i++) {
      code3.removeChild(code3.firstChild);
    }
    
    code = ""
    return
  
  
}
function create_element(tag, parent, content) {
    const thing = document.createElement(tag);
    thing.textContent = content;
    parent.appendChild(thing);
    return thing;
}   
function randomize(size) {
    for(let i = 0; i < size; i++) {
        actual_code += avaliable_ints[Math.floor(Math.random() * avaliable_ints.length)];
    }
   
    code_history.style.gridTemplateColumns = `repeat(${actual_code.length}, auto)`;
}

function Log_Code() {
    for(let i = 0; i < code.length; i++) {
      const code2=code_history.appendChild(document.createElement("div"));
      code2.textContent = code[i];
      code2.style.backgroundColor = actual_code[i] === code[i] ? "green" : "red";
      if(code2.style.backgroundColor === "red" && actual_code.includes(code[i])) {
        code2.style.backgroundColor = "yellow";
      }
    }
}
for(let i = 0; i < 10; i++) {
   const x = create_element("div", grid, i);
   x.addEventListener("click",function() {
      if(code.length < actual_code.length) {
      const space = code3.appendChild(document.createElement("div"))
      space.innerHTML = i
      code+=i;
      }
      
     
      
      
   })
   enter.addEventListener("click",function() {
    if(code.length == actual_code.length && !sto) {
      Enter_Code() 
    }
   })
   clear.addEventListener("click",function() {
    code = ""
    for(let i = 0; i < code3.childElementCount;i++) {
      code3.removeChild(code3.firstElementChild)
    }
   })
   x.addEventListener("mouseover", function(event) {
    x.style.backgroundColor = "gray"
   })
   x.addEventListener("mouseout",function(event) {
    x.style.backgroundColor = "white"
   })
   enter.addEventListener("mouseover", function(event) {
    enter.style.backgroundColor = "white"
   })
   enter.addEventListener("mouseout",function(event) {
    enter.style.backgroundColor = "green"
   })
   clear.addEventListener("mouseover", function(event) {
    clear.style.backgroundColor = "white"
   })
   clear.addEventListener("mouseout",function(event) {
    clear.style.backgroundColor = "red"
   })
}

