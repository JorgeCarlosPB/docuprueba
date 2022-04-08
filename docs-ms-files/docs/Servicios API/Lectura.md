---
sidebar_position: 4
---

# Lectura (/v1/read)
Este servicio se usa para leer archivos que están dentro del servidor, como resultado tenemos base64

## Tipos de datos (schema)
Para ejecutar este servicio nos solicita dos datos, sin embargo cabe recalcar que es **obligatorio una** de las variables mensionadas abajo


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
Para probar este servicio, puede realizar una petición **POST** con cualquier *cliente http, https* hacia a la **IP:PUERTO** del servidor seguido de la ruta  ( **/v1/read/base64** ) a travez de cualquier cliente como *axios, curl, postman, etc*.

En este caso nuestro servidor esta montado de forma local en la dirección **127.0.0.1** y el puerto **3001**, la ruta a realizar la petición sería:
```bash
http://127.0.0.1:3001/v1/read/base64
```

**Ejemplo de entrada en formado json**
```json
{
  "id": "6233e35a495cffa3ffb4a5d4",
  "pathName": "1/prueba1/1647885052036_l1107nyz.pdf"
}
```
## Ejemplo de petición GET con cliente curl
```bash
$ curl -X 'DELETE' \
  'http://127.0.0.1:3001/v1/delete' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "6233e35a495cffa3ffb4a5d4",
  "pathName": "1/prueba1/1647958411483_l127w0d7.jpg"
}'
```

## Datos de respuesta
Una vez realizada la petición http, obtenemos la respuesta por parte del servidor.

```json
  {
    "error": false,
    "message": "El archivo fue encontrado",
    "response": {
      "id": "6246f4da45fec309d2faffcb",
      "originalName": "prueba1.txt",
      "fileName": "1648817370737_l1gfahkh.txt",
      "size": 28,
      "extension": "txt",
      "mimeType": "text/plain",
      "pathName": "1\\prueba1\\1648817370737_l1gfahkh.txt",
      "fullPath": "D:\\9no SEMESTRE\\SHC 170 Práctica laboral\\ms-admin-files\\uploads\\1\\prueba1\\1648817370737_l1gfahkh.txt",
      "sha256": "3d340e2e2325be6c29b73e708f78d893378ecabee1a328d6a560d67bb97a3c8b",
      "base64": "RXN0ZSBlcyB1biBhcmNoaXZvIGRlIHBydWViYQ=="
    },
    "status": 200
  }
```

**Cuerpo de respuesta (Response Body) :** Este apartado es la parte más importante, en donde tenemos información correspondiente al servicio, en este caso se puede visualizar los siguientes campos:
  * **error :** tipo `boleano`, indica que no hubo error `false`, si existe error devuelve `true`
  * **message :** tipo `string`, indica el mensaje de respuesta por la peticion realizado
  * **response :** tipo `any`, este contenido puede o no contener datos, tambien puede ser `null`, `{ }`; es el contenido de la petición dentro del cuerpo de respuesta, en este caso devuelte lo siguiente:
    - **id**: id único del archivo que se encuentra en la db
    - **originalName**: nombre original del archivo
    - **fileName**: nombre modificado y unico del archivo en el servidor
    - **size**:  peso del archivo
    - **extension**: extesion del archivo
    - **mimeType**: tipo del archivo
    - **pathName**: directorio del archivo donde está almacenado
    - **fullPath**: directorio completo del archivo donde está almacenado
    - **sha256**: codigo sha256 del archivo
    - **base64**: Archivo en formato de base 64
    
  * **status :** tipo `number`, indica el [estado de la respuesta](https://developer.mozilla.org/es/docs/Web/HTTP/Status) de respuesta.

## Excepciones de la petición

<!--
Aquí podemos observar que nos devuelve datos relevantes de la operación y si se observa bien, el texto base64 es el mismo que el que introducimos al ejecutar el servicio de escritura /WRITE

## Ejemplos capturas
A continuación se muestra algunas imágenes de cómo se ejecuta este archivo:
![write1](/img/servicios/read1.png)   

Luego de pulsar el botón de **Try it out** nos pedirá los datos a ingresar
![write1](/img/servicios/read2.png)   

Finalmente nos muesta las respuestas por parte del servidor de la siguiente manera:
![write1](/img/servicios/read3.png)  
-->

A continuación se muestran algunas de las posibles excepciones o errores que nos pueden aparecer al momento de ejecutar el servicio
### id
Para la variable *id* se pueden presentar las siguientes excecpciones o errores:
- **id no puede estar vacío**, esto se da cuando el valor de la variable id se deja vacía  
- **id debe ser mayor o iguala a 3 y menor o igual a 255 caracteres**, surge cuando el número de caracteres es menor 3 o mayor a 255  
- **el archivo no fue encontrado**, esta excepción puede surgir cuando el id introducido es incorrecto y por lo tanto no logra encontrar el archivo  
- **Unexpectd token } in JSONat position 22**, esto puede darse cuando por ejemplo se quita la variable *pathname* y se deja una coma después de 'id'  

### pathName
Para la variable *pathname* se pueden presentar las siguientes excecpciones o errores:
- **El directorio */directorio/* no existe en NAS server**, esto aparece cuando se ingresa un nombre de ruta que no existe o está escrito incorrectamente
- **El archivo *archivo.extensión*, no existe en el directorio */directorio/***, esta excepción nos indica que el directorio o *path* sí existe, sin embargo, no existe un archivo con el nombre que se indica dentro de esa ruta  (error 404)
- **pathName debe ser mayor o igual a 3 y menor o igual a 255 caracteres**, surge cuando se introduce un nombre de ruta o *pathname* menor a 3 caracteres o mayor a 255, si aparece este error seguramente está mal escrito el pathname
- **pathName no contiene una extension**, este error es muy común pues ocurrre cuando no se menciona la extensión del archivo que se está queriendo leer. (error 406)

Ejemplo:  
```json
{
  "error": true,
  "message": "El archivo holapruena1.txt no existe en el directorio  1/prueba1",
  "response": {},
  "status": 404
}
```