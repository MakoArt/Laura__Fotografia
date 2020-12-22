const marco=document.querySelector('.main-main__article-galeria--marco')
const inicio=document.querySelector('#inicio')
const fotografia=document.querySelector('#fotografia')
const galeria=document.querySelector('#galeria')
const contacto=document.querySelector('#contacto')
const volverInicio=document.querySelector('.main-volver__inicio')
const volverFotografia=document.querySelector('.main-volver__fotografia')
const volverGaleria=document.querySelector('.main-volver__galeria')
const volverContacto=document.querySelector('.main-volver__contacto')


marco.setAttribute('id','item1')


window.addEventListener('click',mostrar)



function mostrar(e){
  e.preventDefault()



if(e.target.matches('.main-main__article-galeria--item1')){
   marco.setAttribute('id','item1')
}
if(e.target.matches('.main-main__article-galeria--item2')){
   marco.setAttribute('id','item2')
}
if(e.target.matches('.main-main__article-galeria--item3')){
   marco.setAttribute('id','item3')
}
if(e.target.matches('.main-main__article-galeria--item4')){
   marco.setAttribute('id','item4')
}
if(e.target.matches('.main-main__article-galeria--item5')){
   marco.setAttribute('id','item5')
}
if(e.target.matches('.main-main__article-galeria--item6')){
   marco.setAttribute('id','item6')
}
if(e.target.matches('.main-main__article-galeria--item7')){
   marco.setAttribute('id','item7')
}
if(e.target.matches('.main-main__article-galeria--item8')){
   marco.setAttribute('id','item8')
}
if(e.target.matches('.main-main__article-galeria--item9')){
   marco.setAttribute('id','item9')
}
if(e.target.matches('.main-main__article-galeria--item10')){
   marco.setAttribute('id','item10')
}
if(e.target.matches('.main-main__article-galeria--item11')){
   marco.setAttribute('id','item11')
}
if(e.target.matches('.main-main__article-galeria--item12')){
   marco.setAttribute('id','item12')
}
if(e.target.matches('.main-main__article-galeria--item13')){
   marco.setAttribute('id','item13')
}
if(e.target.matches('.main-main__article-galeria--item14')){
   marco.setAttribute('id','item14')
}
if(e.target.matches('.main-main__article-galeria--item15')){
   marco.setAttribute('id','item15')
}
if(e.target.matches('.main-main__article-galeria--item16')){
   marco.setAttribute('id','item16')
}
if(e.target.matches('.main-main__article-galeria--item17')){
   marco.setAttribute('id','item17')
}
if(e.target.matches('.main-main__article-galeria--item18')){
   marco.setAttribute('id','item18')
}
if(e.target.matches('.main-main__article-galeria--item19')){
   marco.setAttribute('id','item19')
}
if(e.target.matches('.main-main__article-galeria--item20')){
   marco.setAttribute('id','item20')
}
}


//ENLACES DE LA PÁGINA

inicio.addEventListener('click',()=>{
   window.location.assign('#main-main__article--inicio')
})
fotografia.addEventListener('click',()=>{
   window.location.assign('#main-main__article-fotografia--h2')
})
galeria.addEventListener('click',()=>{
   window.location.assign('#main-main__article--galeria')
})
contacto.addEventListener('click',()=>{
   window.location.assign('#main-main__article-contacto--mapa')
})
volverInicio.addEventListener('click',()=>{
    window.location='#principal'
})
volverFotografia.addEventListener('click',()=>{
    window.location='#principal'
})
volverGaleria.addEventListener('click',()=>{
    window.location='#principal'
})
volverContacto.addEventListener('click',()=>{
    window.location='#principal'
})


