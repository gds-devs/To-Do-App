const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask(){

    if(inputBox.value === ''){
        alert( "Enter Some Data");
    }else{
        let li = document.createElement("LI");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    inputBox.value = "";
    saveTask();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        saveTask();
    }    
});

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); 