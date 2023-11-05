const Inputbox = document.getElementById("inputbox");
const Listcontainer = document.getElementById("listcontainer");
function addtask(){
    if(Inputbox.value===''){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=Inputbox.value;
        Listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    Inputbox.value="";
    savedata();
}

Listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
}, false)

function savedata(){
    localStorage.setItem("data",Listcontainer.innerHTML);
}

function showTask(){
    Listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();