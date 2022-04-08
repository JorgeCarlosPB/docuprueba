# Notas de lanzamiento

## Version 1.0.0:

En esta primera version se tenían las siguientes funciones:
* Servicio para verificar el estado de microservicios
    api/
* Servicio para el almacenamiento de archivo
api/v1/write/base64
* Servicio para la lectura de archivo
* api/v1/read/base64
* Servicio para remover un archivo
api/v1/delete

![imagen](/img/v1.0.0.png)

## Version 1.0.1:

En esta versión se logró añadir lo siguiente:
* generación de excepción 404 en caso de no encontrar archivo en el servidor
* generación de excepción 404 en caso de que el archivo existe pero tenga registro de eliminado
* adición de contador con registro en la base de datos al visualizar un archivo existente
* Adición del parámetro opcional Id para la lectura o eliminación de archivos, ahora se puede buscar un archivo a través de pathName o id, ambos son opcionales, pero uno de los dos parámetros se debe enviar al servidor para ser procesado.

## Version 1.1.1:

En esta versión ya se añaden las siguientes funciones:
* adición de servicio para verificar la existencia de archivo en el servidor NAS
* adición de servicio para mover o relocalizar un archivo existente  a otro directorio en el servidor NAS
* Actualización de readme

![imagen](/img/v1.1.0.png)

## Version 1.2.0:

Se logra adicionar un servicio:
* adición de servicio para reemplazar un  archivo existe por otro nuevo en el servidor NAS, para casos donde un archivo sea firmado digitalmente

![imagen](/img/1.2.0.png)

## Version 1.2.1:
 - soporte para archivos .txt
 - soporte para archivos .csv
 - soporte para archivos .svg

