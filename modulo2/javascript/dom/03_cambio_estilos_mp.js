const mensaje = document.getElementById('mensaje');
mensaje.textContent="Mensaje Actualizado";
mensaje.style.color = "yellow"

const link = document.getElementById('link');
link.setAttribute('href', 'https://pam.quito.gob.ec/mdmq_web_suim/');
link.classList.add('boton');