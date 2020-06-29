//GIT se utiliza de manera LOCAL
// git init --> es una sola vez dentro de la carpeta 
//git add . ---> guardamos todos los archivos en la cual isimos cambios otra dorma de hacer es ---> git add nombre.js
//git commit -m "aca escribimos la explicacion"  ---> este es para agregar una explicacion de lo que guardamo

//git status ----> es para saber el estado del archivo. SI APARECE LA LETRA EN ROJA QUIERE DECIR QUE EL ARCHIVO NO ESTA EN SEGUIMIENTO
//git config user.name //este es para saber que email esta registrado en el repositorio actualmente, si lo quiero cambiar pongo git config user.name NOMBRE
// DE FORMA GLOBAL ES  git config user.name Ivan --global
//git config --global --list //para saber todos lo datos
//ls -a //muestra las carpetas ocultas


//git log --->aca aparece las ultimas modificacion aparece el mail la hora y que es lo que iso, osea un historial de las ultimas modificacion
//(HEAD -> master) --> esta es la ultima parte que se modifico ASI ES COMO APARECE EN LA TERMINAL OSEA QUE LA PRIMER MODIFICACION VA APARECER EN LO ULTIMO EN LA TERMINAL

//====================================================
//CONFIGURAMOS NUESTRO NOMBRE DE USUARIO
//git config user.name "Nombre de Usuario de GIT"
//git config user.email email@gmail.com
//ESTO LO VA HACER SEGUIDO EN CASO DE QUE EN LA COMPUTADORA  ESTEN MAS DE 2 PERSONA PERO SI ES UNA SOLO HACE FALTA UNA VEZ LOGUEARSE
//====================================================

//GITHUB se utiliza de manera REMOTA
//sube tambien la linea temporal de git, osea sube todo lo que isimos como por ejemplo los comentario que se pusimos con git commit -m
//antes de hacer esto es ir a github --> iniciar sesion -->  Repositorio --> New -->Nombre del Repositorio -
//  -> Dejo esto en publico --> Create repository -->  me queda un enlace(HTTPS) esta lo voy a copiar en la consola
//ahora en la consola

// git remote add origin enlace(HTTPS)
//git remote -v  //para saber si esta conectado a un repositorio remoto
// git push origin master   --> esto es lo que me va llevar de forma local a la nube
//por hay nos dice que metamos el correo y contraseña de github
