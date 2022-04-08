---
sidebar_position: 6
---

# Verificar si existe (/v1/verify/exists/file)
Este servicio nos permite verificar si existe algún archivo en una localización dentro el servidor indicando la ruta junto con nombre del mismo.  

## Tipos de datos (schema)
Para ejecutar este servicio solo nos solicita un dato.
* **pathName :** indica la ruta del directorio donde está almacenado el archivo juntamente con el nombre del archivo.
   - ***tipo***: `string`
   - ***obligatorio***: sí
   <!-- - ***longitud***: 255 -->
   - ***longitud minima***: 3
   - ***puede ir vacio***: no
   - ***extensión obligatoria***: sí

## Ruta de petición
Para probar este servicio, puede realizar una petición **POST** con cualquier *cliente http, https* hacia a la **IP:PUERTO** del servidor seguido de la ruta  ( **/v1/verify/exists/file** ) a travez de cualquier cliente como *axios, curl, postman, etc*.

En este caso nuevo servidor esta montado de forma local en la dirección **127.0.0.1** y el puerto **3001**, la ruta a realizar la petición sería:
```bash
http://127.0.0.1:3001/v1/verify/exists/file
```

**Ejemplo de entrada en formado json**
```json
{
  "pathName": "1/prueba1/1647885687988_l110lak5.pdf"
}
```

## Ejemplo de petición GET con cliente curl
```bash
$ curl -X 'POST' \
  'http://127.0.0.1:3001/v1/verify/exists/file' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "pathName": "1/prueba1/1647885687988_l110lak5.pdf"
}'
```

## Datos de respuesta
Una vez realizada la petición http, obtenemos la respuesta por parte del servidor.
```json
{
  "error": false,
  "message": "El archivo existe",
  "response": {
    "exists": true
  },
  "status": 200
}
```

**Cuerpo de respuesta (Response Body) :** Este apartado es la parte más importante, en donde tenemos información correspondiente al servicio, en este caso se puede visualizar los siguientes campos:
  * **error :** tipo `boleano`, indica que no hubo error `false`, si existe error devuelve `true`
  * **message :** tipo `string`, indica el mensaje de respuesta por la peticion realizado
  * **response :** tipo `any`, este contenido puede o no contener datos, tambien puede ser `null`, `{ }`; es el contenido de la petición dentro del cuerpo de respuesta, en este caso esta vacío:  
  * **status :** tipo `number`, indica el [estado de la respuesta](https://developer.mozilla.org/es/docs/Web/HTTP/Status) de respuesta.

## Excepciones de la petición
A continuación se muestran algunas de las posibles excepciones o errores que nos pueden aparecer al momento de ejecutar el servicio. En este servicio como solo se hace uso de una variable que es el *pathName* solo pueden surgir las siguientes excepciones:

- **El directorio *directorio* no existe en NAS server**, esto nos aparece cuando la ruta está mal indicada, es decir que no existe la ruta *path* dentro del servidor

- **PathName no contiene una extensión**, surge cuando no se añade la extensión dentro del nombre del archivo

- **PathName debe ser mayor o igual a 3 y menor o igual a 255 carateres**, suele ocurrir cuando no se cumplen los límites de carácteres, en este caso cuando el *pathname* ingresado es menor a 3 o mayor a 255.