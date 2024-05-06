const inputBox = document.getElementById("input-box");
const inputEmail = document.getElementById("input-email");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value == ''){
        alert("Ingrese una actividad");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let delito = document.createElement("delito");
        delito.innerHTML = inputEmail.value;
        listContainer.appendChild(delito);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    inputEmail.value = "";
}



listContainer.addEventListener("click", function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);