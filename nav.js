var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
if(window.innerWidth <= 600){
    nav.style.display = "none"
}else{
    nav.style.display = "flex";
}
menu.addEventListener('click',(event) =>{
    event.stopPropagation();
    menu.classList.toggle("change")
    if (nav.style.display === "none"){
        if(menu.classList.contains("change")){
            nav.style.display = "flex";
        }
    }else{
        if(menu.classList.contains("change")){
            nav.style.display = "flex"
        }else{
            nav.style.display = "none"
        }
        
    }
});

window.addEventListener('resize',()=>{
    if(window.innerWidth > 600){
        nav.style.display = "flex";
    }else{
        nav.style.display = "none";
    }
});

document.addEventListener("scroll", (event) => {
   
    if(window.innerWidth < 600){
        menu.classList.remove("change");
        nav.style.display = "none";
    }
});

document.body.addEventListener("click", (event) => {
    if(window.innerWidth < 600){
        menu.classList.remove("change");
        nav.style.display = "none";
        }
});