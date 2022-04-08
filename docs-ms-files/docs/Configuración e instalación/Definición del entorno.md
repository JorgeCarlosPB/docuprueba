---
sidebar_position: 3
---

# Definición del entorno
:::info Importante
- Sin la correcta configuración del entorno, la aplicación no podrá ejecutarse  
- Todas las variables son importantes
:::

Dentro de la carpeta ms-files que se creó anteriormente es necesario crear un archivo con la extensión '.env'
En este archivo se definirán las variables y el entorno con el que trabajará el sistema.

A continuación se mostrará un ejemplo de las variables necesarias:

```bash
NODE_ENV='development'

# puerto APP_URL
PORT=3000
APP_URL=http://172.27.39.12:${PORT}

# límite para subir archivos
APP_FILE_MAX_SIZE='100mb'

# Descripción de la aplicación
APP_NAME='ms-service uploads files'
APP_VERSION='1.0.0'
APP_DESCRIPTION='ms-service uploads files'

# URI(Identificador uniforme de recursos) de la base de datos para la conexión
MONGO_URI='mongodb://username:password@localhost:port/dbname?ssl=false'

# Carpeta NAS en el proyecto raíz (obligatorio)
NAS_FOLDER_DEFAULT='1'
NAS_ROOT_FOLDER_NAME='uploads'

# formatos de archivos permitidos
# https://www.npmjs.com/package/file-type#supported-file-types
FILE_FORMAT_ALLOWED='doc|docx|pdf|txt|png|jpg|jpeg|gif'

# cors permitidos que se usan en producción
NODE_CORS="https://correspondencia-test.fiscalia.gob.bo, https://correspondencia.fiscalia.gob.bo, http://localhost:3000"

```

### Revisión de cada una de las variables variables
#### NODE_ENV
Es el ambiente de node, se recomienda dejarlo con el valor de **development**

#### PORT and URL
*PORT*, es el puerto que usa la aplicación, por defecto es el puerto 3000    
*La URL*, es la dirección URL, también conocida como Localizador Uniforme de Recursos

#### APP_FILE_MAX_SIZE
Esta variable solo indica el tamaño máximo que puede tener un archivo en Megas (mb)

#### Descripcicón de la aplicación
*APP_NAME*, hace referencia al nombre que tendrá nuestra aplicación  
*APP_VERSION*, nos indica la versión de la aplicación  
*APP_DESCRIPTION*, solo es una pequeña descripción de la aplicación  

#### MONGO_URI
Esta variable es muy importante pues aquí debemos obtener la URI(identificador uniforme de recursos) de la base de datos que creamos en MongoDB
Aquí se muestra un ejemplo:
```bash
MONGO_URI='mongodb://file:agPcsk83HQsfpkdj@mongodb-test01.fiscalia.gob.bo:27017/ms-file?ssl=false'
```

#### CARPETAS NAS
*NAS_FOLDER_DEFAULT*, señala el folder NAS por defecto, se recomendó utilizar el nombre '1', sin embargo, esto se puede modificar a comodidad  
*NAS_ROOT_FOLDER_NAME*, Esta variable nos solicita la carpeta NAS raíz que por defecto se recomendó utilizar el nombre 'uploads' en configuraciones anteriores, esto de igual manera de puede modificar a comodidad

#### FILE_FORMAT_ALLOWED
En esta variable se pueden señalar todos los tipos de archivos (extensiones) que puede manejar el sistema, separados por una barra como se muestra en el ejemplo

#### NODE_CORS
En esta variable se señalan los [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS) 'Cross-origin resource sharing' o también conocido como 'intercambio de recursos de origen cruzado' que están permitidos cuando la aplicación se utiliza en producción
