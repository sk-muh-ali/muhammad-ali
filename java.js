const body = document.querySelector("body");
body.innerHTML += '<div id="crsr"></div>';
let crsr = document.querySelector("#crsr");

crsr.style.width = "30px";
crsr.style.height = "30px";
crsr.style.backgroundColor = "transparent";
crsr.style.position = "fixed";
crsr.style.pointerevents = "none";
crsr.style.transform ="translate(-30%, -10%)";
crsr.style.border = "2px solid red";
crsr.style.borderRadius = "50%";
crsr.style.zIndex = "99";

body.addEventListener("mousemove", function(e){
    crsr.style.top = e.y -25 + "px";
    crsr.style.left = e.x -25 + "px";
});
