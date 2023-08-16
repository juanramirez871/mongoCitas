# Taller de mongodb Citas

## Instalaccion

#### Importante: Necesitas tener instalado nodejs de una version superior a la 18 y un cliente http como postman, insomia, thunder client, etc... para poder realizar pruebas de los enpoints (opcional cliente http). Si no sabes como se instalan se dejan los siguientes videos como guia

* nodejs instalacion: https://www.youtube.com/watch?v=czFj5zoI5uc
* phpmyadmin instalacion: https://www.youtube.com/watch?v=pku0dhDgjbU
* Thunder client: https://youtu.be/TSg_27sZMOY

* Descarga o clone el repositorio ```https://github.com/juanramirez871/MongoAlquiler.git```

* Dentro de la carpeta que se te creara entra y habra una terminal y ejecuta ```npm install```

* Crea un nuevo archivo llamado ```.env``` y copia todo lo que esta en el archivo ```.env.example``` y ajusta las variables de entorno segun tus datos. Ejemplo
```javascript
  URI_MONGODB=
```

* Encontraras un archivo llamado db.mongodb.js en la carpeta scripts, ejecutalo de forma ordenada de arriba hacia abajo

* Abra otra terminal y ejecuta ```npm run dev```

* Felicitaciones ya configurastes e instalastes el proyecto, ahora vamos a ver como funciona

## Endpoints


#### Importante: la base principal de la url siempre sera ```http://localhost:3000/``` si cambiastes el puerto en las variables de entorno tambien lo debes cambiar en la url principal. Despues de ese "/" ultimo iran los enpoints

### enpoints

* ```generate/token/``` metodo ```GET``` Te genera un token valido por 24 horas, ingresalo en la cabecera Authorization para poder acceder a los demas enpoints


* ```users/``` metodo ```GET``` Te dara la informacion de los pacientes


* ```doctors/``` metodo ```GET``` Te dara la informacion de los doctores


* ```quotes/next/:id``` metodo ```GET``` Te dara la informacion de siguiente cita con el id que le des de un paciente


* ```users/doctor/:id``` metodo ```GET``` Te dara la informacion de los pacientes de un doctor


* ```quotes/date``` metodo ```GET``` Te dara la informacion de los te dara las citas de una fecha


* ```consultingRoom/``` metodo ```GET``` Te dara la informacion de los consultorios de cada doctor


* ```quites/specify``` metodo ```GET``` Te dara la informacion las citas en especifico


* ```user/``` metodo ```POST``` podras agregar un nuevo usuario

## Autor

* Juan Diego Ramirez Mogotocoro
* Campus