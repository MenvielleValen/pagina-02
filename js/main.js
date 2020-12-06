const galeriaParte2= document.querySelector(".parte2");
const buttonMore= document.querySelector(".more");
const button=document.querySelector(".but-more");


const imagenes=document.querySelectorAll('.img-galeria');
const imagenesLight=document.querySelector('.agregar-imagen');
const contenedorLight=document.querySelector('.imagen-light');


const instagram= document.querySelector(".instagram");
const facebook= document.querySelector(".facebook");
const wsp= document.querySelector(".wsp");

const harmburger=document.querySelector(".hamburger");
const menu=document.querySelector(".menu-nav");




harmburger.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})

window.addEventListener('click',(e)=>{
    if(menu.classList.contains('spread')&& e.target!=menu && e.target!=harmburger){
        menu.classList.toggle("spread");
    }
})


instagram.addEventListener('click',()=>{
       window.open("http://instagram.com"); 
} )
facebook.addEventListener('click',()=>{
    window.open("http://facebook.com"); 
} )
wsp.addEventListener('click',()=>{
    window.open("https://api.whatsapp.com/send?phone=2216685701"); 
} )



buttonMore.addEventListener('click',()=>{
        galeriaParte2.classList.toggle("mostrarParte2");
});


imagenes.forEach(imagen=>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target!=imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        harmburger.style.opacity=1;

    }
})

const aparecerImagen=(imagen)=>{
    imagenesLight.src=imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    harmburger.style.opacity=0;
}



