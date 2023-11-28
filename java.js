        const body = document.querySelector("body");
        body.innerHTML += '<div id="crsr"></div>';
        let crsr = document.querySelector("#crsr");
        
        crsr.style.width = "30px";
        crsr.style.height = "30px";
        crsr.style.backgroundColor = "transparent";
        crsr.style.position = "fixed";
        crsr.style.pointerevents = "none";
        crsr.style.transform ="translate(-0%, -10%)";
        crsr.style.border = "2px solid #0ef";
        crsr.style.boxShadow = "0 0 7px #0ef"
        crsr.style.borderRadius = "50%";
        crsr.style.zIndex = "999";
        
        body.addEventListener("mousemove", function(e){
            crsr.style.top = e.y -25 + "px";
            crsr.style.left = e.x -25 + "px";
        });
