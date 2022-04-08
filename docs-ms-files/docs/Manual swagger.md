---
sidebar_position: 5
---

# Manual Swagger 
Swagger es un conjunto de herramientas de software de código abierto para diseñar, construir, documentar, y utilizar servicios web RESTful.
Esta herramienta es utilizada en esta aplicación **MS-files** para el manejo de una interfaz de usuario más navegable e intuitivo de los diferentes tipos de servicios.

## Introducción
Para hacer el manejo de Swagger se debe hacer lo siguiente:
- Primero ejecutamos la aplicación
- Luego en la URL añadimos **/api**

ejemplo, si la url al principio era: http://127.0.0.1:3001/, ahora quedará así: http://127.0.0.1:3001/api/

A continuación se muestra lo primero que podemos visualizar cuando hacemos uso de swagger
![swagger1](/img/swagger/swagger0.png)
Como se puede apreciar tenemos dos apartados principales:
- **default**
- **Schemas**  

Cuando desplegamos la parte que dice **default** nos muestra todos los servicios disponibles que tiene la aplicación:
- **Verificar servicio (/GET)**
- **Escritura (/v1/write)**
- **Lectura (/v1/read)**
- **Eliminar (/v1/delete)**
- **Verificar si existe (/v1/verify/exists/file)**
- **Reubicar (/v1/relocate/file)**
- **Reemplazar (/v1/replace/file/base64)**

En la parte inferior se puede apreciar un apartado llamado **Schemas** donde están indicados diferentes tipo de esquemas que nos señalan algunas propiedades y restricciones de los diferentes datos de entrada que utilizarán en los servicios previamente mencionados, los esquemas disponibles son:
- **InputFileDto**
- **InputBase64Dto**
- **InputFilePathDto**
- **InputPathNameDto**
- **InputRelocateFilesDto**
- **InputFileReplaceDto**  

## Manejo de servicios

A continuación se muestra una guía básica para manejar la parte más importante que son los servicios.
Haremos la prueba con el servicio de Escritura (/Write) ya que es uno de los servicios más completos y el resto de servicios se manejan de igual manera:  
Lo primero que podremos ver al desplegar un servicio es lo siguiente:
![swagger2](/img/swagger/swagger2.png)
Cada uno de los servicios tiene una interfaz muy similar con tres apartados:  
**Parameters**, está parte viene por defecto con swagger indicando que no existen parametros, sin embargo, no se debe tomar en cuenta.  
**Request body**, aquí se muestra un ejemplo de los valores o datos que se deben añadir para ejecutar dicho servicio.  
**Responses**, aquí se mostrarán las respuestas que nos dará el servidor cada vez que ejecutemos el servicio.  
:::info Aún no se ejecutó
Lo que se muestra en la imagen aún no es un servicio en ejecución, solo es una muestra que nos da swagger
:::

## Prueba y Ejecución
Para probar un servicio debemos oprimir el botón en la parte superior derecha que dice **Try it out** en la imagen anterior está resaltado.
Una vez presionado el botón debería mostrarse lo siguiente:
![swagger3](/img/swagger/swagger3.png)
Ahora el servicio sí se está corriendo, también podemos observar que el recuadro de **Request body** ahora se puede editar.
Lo siguiente que debemos hacer es añadir los valores que se nos solicita para el manejo de cada servicio, en este caso nos solicita 6 datos.
A continuación se muestra un ejemplo de datos ingresados:
![swagger4](/img/servicios/write2.png)
Posterior a ello podemos ejecutar el servicio presionando en el botón azul que dice **Execute**
Finalmente se nos muestra un apartado denominado **Curl** y las respuestas que obtenemos por parte del servidor.
La parte de respuestas (RESPONSE) se divide en 2:
- **Response body**, es la parte más importante donde nos muestra los resultados de la ejecución
- **Response headers**, nos muestra los datos de cabecera
Aquí un ejemplo:
![swagger5](/img/servicios/write3.png)

Esta fue una guía básica del manejo de Swagger, solo se utilizó un servicio porque el resto de servicios se manejan de igual manera.



