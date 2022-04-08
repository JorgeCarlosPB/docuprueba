---
sidebar_position: 3
---

# Escritura (/v1/write)
Este servicio permite recibir y generar archivos en el servidor a partir de [base64](https://marquesfernandes.com/es/tecnologia-es/que-y-base64-para-que-serve-y-como-funciona/), es decir que se usa para subir archivos y guardarlos en el servidor.  

## Tipos de datos (Schema)
Para este servicio son requeridos datos de entrada,es necesario especificar los siguientes datos ya que cada uno es de cierto tipo

* **appName :**  indica el nombre de la aplicación quien esta realizando la peticion.
   - ***tipo***: `string`
   - ***obligatorio***: si
   <!-- - ***longitud***: 255 -->
   - ***longitud minima***: 1
   - ***puede ir vacio***: no


* **nas :** indica la `carpeta` NAS que sé tomará en cuenta, el nombre de esta carperta debe estar creado/montado en el servidor
   - ***tipo***: `string`
   - ***obligatorio***: si
   <!-- - ***longitud***: 255 -->
   - ***longitud minima***: 1
   - ***puede ir vacio***: no
   - ***debe estar montado/creado la carpeta***

* **path :**
  tipo `string`, indica la ruta del directorio donde será almacenado este archivo, en caso de no existe se creara recursivamente.
   - ***tipo***: `string`
   - ***obligatorio***: si
   - ***longitud minima***: 1
   - ***longitud máxima***: 255
   - ***puede ir vacio***: no

* **fileName :** tipo `string`, indica el nombre del archivo, este nombre debe contener la extesión del tipo de archivo, ejemplo `archivo.pdf, musica.mp3` 
   - ***tipo***: `string`
   - ***obligatorio***: si
   - ***longitud minima***: 3
   - ***puede ir vacio***: no
   - ***la extesion del archivo debe estar permido en el servidor***
* **base64 :** tipo `string`, indica el contenido del archivo formateado en base64
   - ***tipo***: `string`
   - ***obligatorio***: si
   - ***longitud minima***: 1
   - ***puede ir vacio***: no

* **withDateSubFolder :** tipo `boolean`, si `true` entonces indica que se creara una subcarpeta con la fecha actual dentro de **path**, ejemplo  /2022/03/05
   - ***tipo***: `boolean`
   - ***obligatorio***: no


<!-- **AppName** = nombre de la aplicación  
**nas** = la carpeta donde se almacenará o subirá el archivo  
**path** = este apartado es importante colocarlo de manera correcta indicando la dirección de los folders el path o ruta se indica a partir de la primera carpeta dentro de uploads que para caso de ejemplo se colocó "1" y si se quiere dentro de otras carpetas dentro de esta.   
**fileName** = indica el nombre del archivo.  
**base64** = aquí debe ir todo lo que respecta al archivo en formato base64.  
**withDateSubfolder** = este apartado solo admite los valores de false y true para añadir una fecha en subfolder.  -->

## Ruta de petición
Para probar este servicio, puede realizar una petición **POST** con cualquier *cliente http, https* hacia a la **IP:PUERTO** del servidor seguido de la ruta  ( **/v1/write/base64** ) a travez de cualquier cliente como *axios, curl, postman, etc*.

En este caso nuevo servidor esta montado de forma local en la dirección **127.0.0.1** y el puerto **3001**, la ruta a realizar la petición sería:
```bash
http://127.0.0.1:3001/v1/write/base64
```

**Ejemplo de entrada en formado json**
```json
{
  "appName": "string",
  "nas": "1",
  "path": "prueba1",
  "fileName": "prueba1.txt",
  "base64": "RXN0ZSBlcyB1biBhcmNoaXZvIGRlIHBydWViYQ==",
  "withDateSubFolder": false
}
```
## Ejemplo de petición GET con cliente curl
```bash
$ curl -X 'POST' \
  'http://127.0.0.1:3001/v1/write/base64' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "appName": "string",
  "nas": "1",
  "path": "prueba1",
  "fileName": "prueba1.txt",
  "base64": "RXN0ZSBlcyB1biBhcmNoaXZvIGRlIHBydWViYQ==",
  "withDateSubFolder": false
}'
```

## Datos de Respuesta
Una vez realizada la petición http, obtenemos la respuesta por parte del servidor.
```json
{
  "error": false,
  "message": "El archivo se guardó correctamente",
  "response": {
    "originalName": "prueba1.txt",
    "fileName": "1648817370737_l1gfahkh.txt",
    "size": 28,
    "extension": "txt",
    "mimeType": "text/plain",
    "pathName": "1\\prueba1\\1648817370737_l1gfahkh.txt",
    "fullPath": "D:\\9no SEMESTRE\\SHC 170 Práctica laboral\\ms-admin-files\\uploads\\1\\prueba1\\1648817370737_l1gfahkh.txt",
    "sha256": "3d340e2e2325be6c29b73e708f78d893378ecabee1a328d6a560d67bb97a3c8b",
    "id": "6246f4da45fec309d2faffcb"
  },
  "status": 201
}
```

**Cuerpo de respuesta (Response Body) :** Este apartado es la parte más importante, en donde tenemos información correspondiente al servicio, en este caso se puede visualizar los siguientes campos:
  * **error :** tipo `boleano`, indica que no hubo error `false`, si existe error devuelve `true`
  * **message :** tipo `string`, indica el mensaje de respuesta por la peticion realizado
  * **response :** tipo `any`, este contenido puede o no contener datos, tambien puede ser `null`, `{ }`; es el contenido de la petición dentro del cuerpo de respuesta, en este caso devuelte lo siguiente:

    - **originalName**: nombre original del archivo
    - **fileName**: nombre modificado y unico del archivo en el servidor
    - **size**:  peso del archivo
    - **extension**: extesion del archivo
    - **mimeType**: tipo del archivo
    - **pathName**: directorio del archivo donde fue almacenado
    - **fullPath**: directorio completo del archivo donde fue almacenado
    - **sha256**: codigo sha256 del archivo
    - **id**: id del registro almacenado en la db referente a este archivo 
    
  * **status :** tipo `number`, indica el [estado de la respuesta](https://developer.mozilla.org/es/docs/Web/HTTP/Status) de respuesta.



## Excepciones de la petición

<!-- ## Ejemplos texto formato json
A continuación se mostrará una prueba de cómo introducir los datos

Como se puede apreciar en path se indica que hay una carpeta "prueba1" dentro de la carpeta "1"

```
En la última parte nos indica que el archivo se guardó de manera exitosa, para comprobarlo se puede verificar la base de datos en mongodb y también el mismo documento dentro de la carpeta mencionada en path.
También podemos observar mucho otros detalles, resaltando la parte más importante que es el id. Este id se genera automáticamente para cada archivo 
## Ejemplos capturas
Como primera pantalla nos muestra lo siguiente:
![write1](/img/servicios/write1.png)      

Luego de pulsar el botón **Try it out** debemos ingresar los datos solicitados, aquí hay una prueba de ello:    
![write1](/img/servicios/write2.png)         

Finalmente ejecutamos el servicio y nos muestra las siguientes respuestas por parte del servidor  
![write1](/img/servicios/write3.png)
 -->
A continuación se muestran algunas de las posibles excepciones o errores que nos pueden aparecer al momento de ejecutar el servicio
### Genéricos
Para cada una de las variables se pueden presentar dos errores comúnes:
- ***variable* debe ser texto**, esto sucede cuando no se coloca el nombre de nas dentro de comillas, indicando que debe ser de tipo `string`
- ***variable* muy corto, debe ser mayor a 1 carateres**, aparece cuando el nombre es menor a *numero_mínimo* de caracteres
Ejemplo:
```json
{
  "error": true,
  "message": "Error de Validación",
  "response": [
    {
      "appName": [
        "appName debe ser texto",
        "appName muy corto, debe ser mayor a 1 caracteres"
      ]
    }
  ],
  "status": 406
}
```
También se pueden presentar otros tipos de excepciones cuando se cambia la estructura de los datos, algunos ejemplos son:
- Borrar alguna coma entre variables
- Borrar una variable
- Dejar en blanco el valor de una variable 

### nas
Podemos tener la siguiente excepción:  
- **No existe el directorio NAS *nombre* en el server**, Este error o excepción aparece cuando el nombre del directorio NAS es incorrecto y no existe, recordemos que se sugirió nombrarlo **1** por defecto.

Ejemplo:  
```json
{
  "error": true,
  "message": "Error de Validación",
  "response": [
    {
      "nas": [
        "No existe el directorio NAS 0 en el server"
      ]
    }
  ],
  "status": 406
}
```

### base64
Podemos tener la siguiente excepción:  
- **base64 debe estar codificado en base64**, este error surge cuando el archivo en formato base64 introducida no está correctamente  codificado en base64.
Ejemplo:  
```json
{
  "error": true,
  "message": "Error de Validación",
  "response": [
    {
      "base64": [
        "base64 debe estar codificado en base64"
      ]
    }
  ],
  "status": 406
}
```
