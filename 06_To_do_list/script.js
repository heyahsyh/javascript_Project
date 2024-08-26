const inputBox = document.getElementById("input-box");
const lisContainer = document.getElementById("list-container");


function addtask(){
    if(inputBox.value === ""){
        alert("You must Write Something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        lisContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

lisContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()

    }
}, false)

function saveData(){
    localStorage.setItem("data", lisContainer.innerHTML)

}
function ShowTask(){
    lisContainer.innerHTML = localStorage.getItem("data")
}

ShowTask();