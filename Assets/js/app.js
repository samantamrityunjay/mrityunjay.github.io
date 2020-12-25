const navSlide=() =>{
    const burger=document.querySelector('.burger');
    const nav =document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        
    }); 
    // navLinks.forEach((link,index)=>{
    //     link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 +3} s`;
    //     console.log(index/7 );

    // });

    
}
navSlide();

var counter=1;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>2){
        counter=1;
    }
},5000);