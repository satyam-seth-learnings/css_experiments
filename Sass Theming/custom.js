const modeBtn=document.getElementById("mode-btn");

modeBtn.addEventListener("click", event=>{
    document.body.classList.toggle("theme-light");
    document.body.classList.toggle("theme-dark");
})