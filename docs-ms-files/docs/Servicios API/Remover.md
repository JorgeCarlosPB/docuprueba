---
sidebar_position: 5
---

# Eliminar (/v1/delete)
Este servicio permite remover, borra, o eliminar algún archivo en el servidor enviando la ruta del archivo.  

## Tipos de datos (schema)
Para ejecutar este servicio nos solicita dos datos, sin embargo cabe que es **obligatorio una** de las variables mensionadas abajo


* **id :**  Es el código único que tiene cada archivo es su identificador y está almacenado en la db.
   - ***tipo***: `string`
   - ***obligatorio***: no
   <!-- - ***longitud***: 255 -->
   - ***longitud minima***: 3
   - ***puede ir vacio***: no


* **pathName :** indica la ruta del directorio donde está almacenado el archivo juntamente con el nombre del archivo.
   - ***tipo***: `string`
   - ***obligatorio***: no
   <!-- - ***longitud***: 255 -->
   - ***longitud minima***: 3
   - ***puede ir vacio***: no
   - ***debe existir***: sí
   - ***extensión obligatoria***: sí

## Ruta de petición
Para probar este servicio, puede realizar una petición **POST** con cualquier *cliente http, https* hacia a la **IP:PUERTO** del servidor seguido de la ruta  ( **/v1/delete** ) a travez de cualquier cliente como *axios, curl, postman, etc*.

En este caso nuestro servidor esta montado de forma local en la dirección **127.0.0.1** y el puerto **3001**, la ruta a realizar la petición sería:
```bash
http://127.0.0.1:3001/v1/delete
```

**Ejemplo de entrada en formado json**
```json
{
  "id": "6233e35a495cffa3ffb4a5d4",
  "pathName": "1/prueba1/1647958411483_l127w0d7.jpg"
}
```

## Ejemplo de petición GET con cliente curl
```bash
$ curl -X 'POST' \
  'http://127.0.0.1:3001/v1/read/base64' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "6233e35a495cffa3ffb4a5d4",
  "pathName": "1/prueba1/1647885052036_l1107nyz.pdf"
}'
```

## Datos de respuesta
Una vez realizada la petición http, obtenemos la respuesta por parte del servidor.

**Cuerpo de respuesta (Response Body) :** Este apartado es la parte más importante, en donde tenemos información correspondiente al servicio, en este caso se puede visualizar los siguientes campos:
  * **error :** tipo `boleano`, indica que no hubo error `false`, si existe error devuelve `true`
  * **message :** tipo `string`, indica el mensaje de respuesta por la peticion realizado
  * **response :** tipo `any`, este contenido puede o no contener datos, tambien puede ser `null`, `{ }`; es el contenido de la petición dentro del cuerpo de respuesta, en este caso esta vacío:  
  * **status :** tipo `number`, indica el [estado de la respuesta](https://developer.mozilla.org/es/docs/Web/HTTP/Status) de respuesta.


```json
{
  "error": false,
  "message": "Se elimino el archivo.",
  "response": {},
  "status": 200
}
```

## Excepciones de la petición
A continuación se muestran algunas de las posibles excepciones o errores que nos pueden aparecer al momento de ejecutar el servicio. Como ya se vio, para ejecutar este servicio podemos hacer uso de dos variables, mencionando nuevamente que solo es necesario una si se desea.

### id
- **El archivo no fue encontrado**, puede darse cuando el id introducido no pertenece a ningún archivo, es decir que el archivo no existe  
- **Es requerido un id o pathname**, surge cuando ambas variables tanto, el *pathname* y el *id* se dejan vacíos  
- **El archivo *nombre.extensión* fue removido el *fecha eliminación***, puede darse cuando el archivo ya fue eliminado previamente, sin emargo, sí exisitía en el servidor.

### pathname
- **El archivo *nombre.extensión* no existe en el directorio *nombre_directorio***, este error se presenta cuando la ruta *path* es corerecta y sí existe, sin embargo, no existe un archivo con el nombre indicado *name*  
- **Error for read file in 1**, puede darse cuando no se coloca el nombre del archivo y solo se deja la ruta de este