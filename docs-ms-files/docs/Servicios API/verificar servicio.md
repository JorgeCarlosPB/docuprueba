---
sidebar_position: 2
---

# Verificar servicio (GET/)
Este servicio viene por defecto con la aplicación por lo tanto no es necesario añadir parámetros.  
Al ejecutarlo, como resultado nos muestra un mensaje con el siguiente contenido **Bienvenido al Servicio de Almacenamiento de Archivos, Basado en Principios REST, Copyright © Ministerio Público 2022**,  también nos indica la versión actual en la que se encuentra la aplicación

## Tipos de datos (Schema)
Este servicio no necesita parámetros por lo tanto se puede ejecutar directamente Este apartado nos ayuda a verificar el servicio, es decir si la aplicación se encuentra en correcto funcionamiento

## Ruta de petición
Para verificar este servicio, puede realizar una petición **GET** con cualquier *cliente http, https* hacia a la **IP:PUERTO** del servidor seguido de la ruta  ( **/** ) a travez de cualquier cliente como *axios, curl, postman, etc*.

En este caso nuevo servidor esta montado de forma local en la dirección **127.0.0.1** y el puerto **3001**, la ruta a realizar la petición sería:
```bash
http://127.0.0.1:3001/
```

**Ejemplo de petición GET con cliente curl**
```bash
$ curl -X 'GET' \
  'http://127.0.0.1:3001/' \
  -H 'accept: application/json'
```

## Datos de Respuesta
Una vez realizada la petición http, obtenemos la respuesta por parte del servidor con 2 apartados:

**1.- Cabecera de respuesta (Response headers) :** Cada petición retorna este apartado, puede ser utilizado para casos que convenga necesario, sin embargo nose considera importante y no sera tomando en cuenta en los demas servicios posteriores. 
```bash
 access-control-allow-origin: *  
 content-length: 221  
 content-type: application/json; 
 charset=utf-8  
 date: Fri,01 Apr 2022 03:51:36 GMT  
 etag: W/"dd-j+loz4SV1u0TazeUO3rvI+Bv5Ww"  
 x-powered-by: Express 
```
**2.- Cuerpo de respuesta (Response Body) :** Este apartado es la más importante, en donde tenemos informacion correspondiente al servicio, en este caso se puede visualizar los siguientes campos:
```bash
{
  "error": false,
  "message": "Bienvenido al Servicio de Almacenamiento de Archivos, Basado en Principios REST, Copyright © Ministerio Público 2022",
  "response": {
    "author": "Ministerio Público",
    "version": "1.2.1"
  },
  "status": 200
}
```
  * **error :** tipo `boleano`, indica que no ubo error `false`, si existe error devuelve `true`
  * **message :** tipo `string`, indica el mensaje de respuesta por la peticion realizado
  * **response :** tipo `any`, este contenido puede o no contener datos, tambien puede ser `null`, `{ }`; es el contenido de la petición dentro del cuerpo de respuesta, en este caso devuelte el `author` y la `version` del servicio
  * **status :** tipo `number`, indica el [estado de la respuesta](https://developer.mozilla.org/es/docs/Web/HTTP/Status) de respuesta.



## Exceptiones de la petición
Para este servicio la única excepción sera cuando no exista respuesta, esto indicará que todo el micro-servicio no esta en funcionamiento.

<!-- 
## Cliente Swagger
el servicio
En este caso nuevo servidor esta montado de forma local en la dirección **127.0.0.1** y el puerto **3001**, la ruta a realizar la petición sería:
```bash
http://127.0.0.1:3001/
```
## Ejemplos capturas usando el cliente Swagger
Lo primero que nos aparece cuando desplegamos el apartado de GET/ es lo siguiente:
![imagen de get](/img/servicios/get1.png)
En la parte resaltada donde dice **Try it out** podemos probar el servicio   
Ejecutamos con el botón **Execute**
![imagen de get](/img/servicios/get2.png)

Como se puede observar lo que nos devuelve es un mensaje de bienvenida, indicando que la aplicación y el servicio está funcionando de manera correcta
![imagen de get](/img/servicios/get3.png) -->