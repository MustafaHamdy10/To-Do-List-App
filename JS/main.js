
// Initialization of Variables .

let inputBox=document.getElementById("input-box");
let listContainer=document.getElementById("list-container");

// Make a function to add tasks .

function addTask(){

    if(inputBox.value ===" "){

        alert("You have to write something !");

    }else{

        let li=document.createElement("li");

        li.innerHTML=inputBox.value;

        listContainer.appendChild(li);

        // We have to add a delete button to the list items

        let span =document.createElement("span");

        span.innerHTML="\u00d7";

        li.appendChild(span);
    }
    
    // After adding a task, clear the input field

    inputBox.value="";

// Calling the saveData function after any changes (adding or remove data)

    saveData();

}

// Add a JavaScript onclick function .

listContainer.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");

        saveData();

    }else if(e.target.tagName === "SPAN"){

        e.target.parentElement.remove();

        saveData();

    }
} , false);

// Create a function to store the data .
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}

// Crate a function to show tasks .
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();
