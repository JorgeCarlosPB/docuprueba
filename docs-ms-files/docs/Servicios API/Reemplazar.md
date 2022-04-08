---
sidebar_position: 8
---

# Reemplazar (/v1/replace/file/base64)
Este servicio permite reemplazar unarchivo y actualizar su registro por otro nuevo base64 y retorna los nuevos datos de la db. 

## Tipos de datos (Schema)
Para este servicio son requeridos datos de entrada,es necesario especificar los siguientes datos:
:::info Información importante
Cabe mencionar que se puede usar o el *id* o el *pathname* para hacer referencia al archivo a mover, no es necesario especificar los dos.
::: 

* **id :**   Es el código único que tiene el archivo que se quiere reemplazar.
   - ***tipo***: `string`
   - ***obligatorio***: sí
   <!-- - ***longitud***: 255 -->
   - ***longitud minima***: 1
   - ***puede ir vacio***: no

* **pathName :** indica la ruta del directorio donde está almacenado el archivo juntamente con el nombre del archivo a ser reemplazado.
   - ***tipo***: `string`
   - ***obligatorio***: no
   <!-- - ***longitud***: 255 -->
   - ***longitud minima***: 3
   - ***puede ir vacio***: no
   - ***extensión obligatoria***: sí

* **appName :**  indica el nombre de la aplicación quien esta realizando la peticion.
   - ***tipo***: `string`
   - ***obligatorio***: si
   <!-- - ***longitud***: 255 -->
   - ***longitud minima***: 1
   - ***puede ir vacio***: no

* **base64 :** tipo `string`, indica el contenido del archivo formateado en base64 que se desea como reemplazo a cambio del archivo anteriormente señalado
   - ***tipo***: `string`
   - ***obligatorio***: si
   - ***longitud minima***: 1
   - ***puede ir vacio***: no

## Ruta de petición
Para probar este servicio, puede realizar una petición **POST** con cualquier *cliente http, https* hacia a la **IP:PUERTO** del servidor seguido de la ruta  ( **/v1/replace/file/base64** ) a travez de cualquier cliente como *axios, curl, postman, etc*.

En este caso nuevo servidor esta montado de forma local en la dirección **127.0.0.1** y el puerto **3001**, la ruta a realizar la petición sería:
```bash
http://127.0.0.1:3001/v1/replace/file/base64
```

**Ejemplo de entrada en formado json**
```json
{
  "id": "6238bd7838510623aaa2c94f",
  "pathName": "1/prueba1/1647885687988_l110lak5.pdf",
  "appName": "string",
  "base64": "JVBERi0xLjcNCiW1tbW1DQoxIDAgb2JqDQo8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFIvTGFuZyhlcy1CTykgL1N0cnVjdFRyZWVSb290IDEwIDAgUi9NYXJrSW5mbzw8L01hcmtlZCB0cnVlPj4vTWV0YWRhdGEgMjAgMCBSL1ZpZXdlclByZWZlcmVuY2VzIDIxIDAgUj4
  ...
  ...
  ...
  +DQpzdGFydHhyZWYNCjM3NDgxDQolJUVPRg0KeHJlZg0KMCAwDQp0cmFpbGVyDQo8PC9TaXplIDIzL1Jvb3QgMSAwIFIvSW5mbyA5IDAgUi9JRFs8QkY5NDIyQTgyODE3NDk0RkI0OTFEMUJGN0FGMDlBMkM+PEJGOTQyMkE4MjgxNzQ5NEZCNDkxRDFCRjdBRjA5QTJDPl0gL1ByZXYgMzc0ODEvWFJlZlN0bSAzNzE5NT4+DQpzdGFydHhyZWYNCjM4MDk3DQolJUVPRg=="
}
```
:::note Información
No se muestra todo el contenido de **base64** porque es demasiado extenso.
:::

## Ejemplo de petición GET con cliente curl
```bash
curl -X 'POST' \
  'http://127.0.0.1:3001/v1/replace/file/base64' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "6238bd7838510623aaa2c94f",
  "pathName": "1/prueba1/1647885687988_l110lak5.pdf",
  "appName": "string",
  "base64": "JVBERi0xLjcNCiW1tbW1DQoxIDAgb2JqDQo8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFIvTGFuZyhlcy1CTykgL1N0cnVjdFRyZWVSb290IDEwIDAgUi9NYXJrSW5mbzw8L01hcmtlZCB0cnVlPj4vTWV0YWRhdGEgMjAgMCBSL1ZpZXdlclByZWZlcmVuY2VzIDIxIDAgUj4
  ...
  ...
  ...
  +DQpzdGFydHhyZWYNCjM3NDgxDQolJUVPRg0KeHJlZg0KMCAwDQp0cmFpbGVyDQo8PC9TaXplIDIzL1Jvb3QgMSAwIFIvSW5mbyA5IDAgUi9JRFs8QkY5NDIyQTgyODE3NDk0RkI0OTFEMUJGN0FGMDlBMkM+PEJGOTQyMkE4MjgxNzQ5NEZCNDkxRDFCRjdBRjA5QTJDPl0gL1ByZXYgMzc0ODEvWFJlZlN0bSAzNzE5NT4+DQpzdGFydHhyZWYNCjM4MDk3DQolJUVPRg=="
}'
```

## Datos de respuesta
Una vez realizada la petición http, obtenemos la respuesta por parte del servidor.
```json
{
  "error": false,
  "message": "El archivo fue actualizado",
  "response": {
    "id": "6238bd7838510623aaa2c94f",
    "originalName": "document.pdf",
    "fileName": "1647885687988_l110lak5.pdf",
    "size": 38275,
    "extension": "pdf",
    "mimeType": "application/pdf",
    "pathName": "1\\prueba1\\1647885687988_l110lak5.pdf",
    "fullPath": "D:\\9no SEMESTRE\\SHC 170 Práctica laboral\\ms-admin-files\\uploads\\1\\prueba1\\1647885687988_l110lak5.pdf",
    "sha256": "22ebc4089ec47a109c1de18a6f8077e60ef7ac268f175015189d6594121e25ed"
  },
  "status": 201
}
```

**Cuerpo de respuesta (Response Body) :** Este apartado es la parte más importante, en donde tenemos información correspondiente al servicio, en este caso se puede visualizar los siguientes campos:
  * **error :** tipo `boleano`, indica que no hubo error `false`, si existe error devuelve `true`
  * **message :** tipo `string`, indica el mensaje de respuesta por la peticion realizado
  * **response :**tipo `any`, este contenido puede o no contener datos, tambien puede ser `null`, `{ }`; es el contenido de la petición dentro del cuerpo de respuesta, en este caso devuelte lo siguiente:
    - **id**: id del registro almacenado en la db referente al archivo reemplazado 
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

### base64
- **base64 debe estar codificado en base64**, este error surge cuando el archivo en formato base64 introducido no está correctamente  codificado en base64.