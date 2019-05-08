var container = document.querySelector("#container");
var content = document.querySelector("#content");
var header = document.querySelector("header");
var heading = document.querySelector(".heading");
var input = document.querySelector("input");
var ul = document.querySelector("ul");


function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

}

function addListAfterKeyPress(event){
    if (inputLength() > 0 && event.keyCode === 13 ){
        createListElement();
    }
}

input.addEventListener("keypress",addListAfterKeyPress);