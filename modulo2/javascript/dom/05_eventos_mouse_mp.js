
const caja=document.getElementById('caja')

caja.addEventListener('mouseover',()=>{
    caja.style.background ='purple';
});
caja.addEventListener('mouseout',()=>{
    caja.style.background ='yellow';
});
caja.addEventListener('click',()=>{
    alert('Click al boton');
});

const areaTouch=document.getElementById('areaTouch')
caja.addEventListener('touchstart',()=>{
    caja.style.background ='red';
});
caja.addEventListener('touchend',()=>{
    caja.style.background ='orange';
});
caja.addEventListener('click',()=>{
    alert('Click al boton con Area Touch');
});
