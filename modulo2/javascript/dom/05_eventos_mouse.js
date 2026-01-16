
const caja=document.getElementById('caja')

caja.addEventListener('mouseover',()=>{
    caja.style.background ='red';
});
caja.addEventListener('mouseout',()=>{
    caja.style.background ='yellow';
});
caja.addEventListener('click',()=>{
    alert('Click');
});

const areaTouch=document.getElementById('areaTouch')
caja.addEventListener('touchstart',()=>{
    caja.style.background ='red';
});
caja.addEventListener('touchend',()=>{
    caja.style.background ='green';
});
caja.addEventListener('click',()=>{
    alert('Click Area Touch');
});
