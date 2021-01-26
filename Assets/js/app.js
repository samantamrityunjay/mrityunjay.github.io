
var counter=1;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>2){
        counter=1;
    }
},5000);

const body = document.querySelector("body");
const navbar = document.querySelector(".topnav");
const menu = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const links = document.querySelectorAll(".nav-links li")
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledscroll");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledscroll")
}
for(var i = 0; i < links.length; i++){
    links[i].onclick = ()=>{
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledscroll")
    }

}


// window.onscroll = ()=>{
//     this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
// }
