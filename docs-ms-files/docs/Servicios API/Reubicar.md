---
sidebar_position: 7
---

# Reubicar (/v1/relocate/file)
Este servicio permite mover la ubicación de un archivo utilizando el id del archivo o su nombre de ruta. 

## Tipos de datos (Schema)
Para este servicio son requeridos datos de entrada,es necesario especificar los siguientes datos ya que cada uno es de cierto tipo.
:::info Información importante
Cabe mencionar que se puede usar o el *id* o el *pathname* para hacer referencia al archivo a mover, no es necesario especificar los dos.
::: 

* **id :**   Es el código único que tiene cada archivo es su identificador y está almacenado en la db.
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
   - ***extensión obligatoria***: sí

* **newPathName :** indica la nueva ruta donde deseamos mover el archivo.
   - ***tipo***: `string`
   - ***obligatorio***: sí
   <!-- - ***longitud***: 255 -->
   - ***longitud minima***: 3
   - ***puede ir vacio***: no

* **replaceIfExists :** de tipo boleano, true si se gusta reemplazar si ya existe un archivo con este nombre; false en caso de que no se desee reemplazar en caso de existir un archivo con este nombre.
   - ***tipo***: `boolean`, 
   - ***obligatorio***: no
   <!-- - ***longitud***: 255 -->

## Ruta de petición
Para probar este servicio, puede realizar una petición **POST** con cualquier *cliente http, https* hacia a la **IP:PUERTO** del servidor seguido de la ruta  ( **/v1/relocate/file** ) a travez de cualquier cliente como *axios, curl, postman, etc*.

En este caso nuevo servidor esta montado de forma local en la dirección **127.0.0.1** y el puerto **3001**, la ruta a realizar la petición sería:
```bash
http://127.0.0.1:3001/v1/relocate/file
```

**Ejemplo de entrada en formado json**
```json
{
  "id": "6233e35a495cffa3ffb4a5d4",
  "pathName": "1/prueba1/1647885052036_l1107nyz.pdf",
  "newPathName": "2/prueba2",
  "replaceIfExists": false
}
```

## Ejemplo de petición GET con cliente curl
```bash
curl -X 'POST' \
  'http://127.0.0.1:3001/v1/relocate/file' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "6233e35a495cffa3ffb4a5d4",
  "pathName": "1/prueba1/1647885052036_l1107nyz.pdf",
  "newPathName": "2/prueba2",
  "replaceIfExists": false
}'
```


## Datos de respuesta
Una vez realizada la petición http, obtenemos la respuesta por parte del servidor.
```json
{
  "error": false,
  "message": "Archivo relocalizado correctamente",
  "response": {
    "id": "624a8996daa754499bb5ed66",
    "originalName": "1647885052036_l1107nyz.pdf",
    "fileName": "1647885052036_l1107nyz.pdf",
    "size": 916638,
    "extension": "pdf",
    "mimeType": "application/pdf",
    "pathName": "2\\prueba2\\1647885052036_l1107nyz.pdf",
    "fullPath": "D:\\9no SEMESTRE\\SHC 170 Práctica laboral\\ms-admin-files\\uploads\\2\\prueba2\\1647885052036_l1107nyz.pdf",
    "sha256": "180258ec53250fe9145ff9e3fa10b1075b685eb5f88e416a0539b13cb4b85aa4"
  },
  "status": 200
}
```

**Cuerpo de respuesta (Response Body) :** Este apartado es la parte más importante, en donde tenemos información correspondiente al servicio, en este caso se puede visualizar los siguientes campos:
  * **error :** tipo `boleano`, indica que no hubo error `false`, si existe error devuelve `true`
  * **message :** tipo `string`, indica el mensaje de respuesta por la peticion realizado
  * **response :**tipo `any`, este contenido puede o no contener datos, tambien puede ser `null`, `{ }`; es el contenido de la petición dentro del cuerpo de respuesta, en este caso devuelte lo siguiente:
    - **id**: id del registro almacenado en la db referente a este archivo 
    - **originalName**: nombre original del archivo
    - **fileName**: nombre modificado y unico del archivo en el servidor
    - **size**:  peso del archivo
    - **extension**: extesion del archivo
    - **mimeType**: tipo del archivo
    - **pathName**: directorio del archivo donde fue almacenado
    - **fullPath**: directorio completo del archivo donde fue almacenado
    - **sha256**: codigo sha256 del archivo
     
  * **status :** tipo `number`, indica el [estado de la respuesta](https://developer.mozilla.org/es/docs/Web/HTTP/Status) de respuesta.

## Excepciones de la petición
A continuación se muestran algunas de las posibles excepciones o errores que nos pueden aparecer al momento de ejecutar el servicio.


### Genéricos
- ***variable* debe ser mayor o igual a *lim_inferior* y menor o igual *lim_superior* caracteres**, esta excepción aparece cuando no se respetan los rangos limites de caracteres en las variables
- **Unexpected string in JSON at position #**, es tipo de error surge cuando se cambia la estructura de los datos de entrada, por ejemplo cuando se quitan comas, se añaden corchetes o llaves, etc.
- ***variable* debe ser texto**, esto sucede cuando no se coloca el nombre de nas dentro de comillas, indicando que debe ser de tipo `string`


### id
- **id no puede estar vacío**, se da cuando se deja en blanco el valor del id
- **el archivo no fue encontrado**, puede ocurrir cuando se quita el *pathname* y solo se usa el *id*, sin embargo, este id es incorrecto y no existe algún archivo con dicho id

### pathName
- **El directorio *path* no existe en NAS server**, esto nos aparece cuando la ruta está mal indicada, es decir que no existe la ruta *path* dentro del servidor
- **PathName no contiene una extensión**, surge cuando no se añade la extensión dentro del nombre del archivo
- **El archivo *nombre.extensión* no existe en el directorio *path***, surge cuando el directorio es correcto, sin embargo no existe el archivo mencionado

### newPathName
- **newPathName no puede estar vacío**, sucede cuando se deja en blanco el valor de la nueva ruta
