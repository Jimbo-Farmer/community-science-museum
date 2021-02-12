var expand = document.querySelector(".expand");
var expandable = document.querySelectorAll(".expandable");
var arrow = document.querySelector(".up");

expand.addEventListener("click", togglexpand)
function togglexpand(){
    for (var i = 0; i < expandable.length; i++){
        expandable[i].classList.toggle("hidden")
    }
    arrow.classList.toggle("down")
}

