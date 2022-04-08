---
sidebar_position: 1
---

# Introducción

## Antecedentes

El Ministerio Público actualmente maneja múltiples sistemas,cada aplicación tiene una finalidad y uso distinto, en algún punto estas aplicaciones se comunican entre sí y además gestionan sus archivos de forma independiente conectando a servidores [NAS](https://www.xataka.com/basics/servidores-nas-que-como-funcionan-que-puedes-hacer-uno) del ministerio público.
![fiscalía](/img/intro/fisc1.jpg)

## Situación Problemática

Las aplicaciones que maneja el ministerio público están desarrolladas en distintos lenguajes de programación, y estas manejan su propio gestor de archivos, debido a esto cada aplicación actualmente se conecta de forma independiente  a los servidores NAS generando un tráfico de archivos por aplicación.
Como hay distintas conexiones al servidor de NAS, no existe un control estricto de los tipos de archivo que se almacenan pudiendo ser vulnerable en temas de seguridad.
No existe un registro o historial de los archivos que se almacenan en servidores NAS.

Varias aplicaciones están desarrolladas en un mismo lenguaje generalmente (javascript/typescript) usando nodejs en el servidor, como cada aplicación gestiona sus archivos de forma independiente el desarrollador duplica código por aplicación, para conectarse y  almacenar en la NAS

Si en un futuro el punto de conexión del servidor NAS es actualizado, esto dejará a las aplicaciones inutilizables hasta que estas no sean actualizadas lo que conlleva tiempo y costo, además de crear una dependencia de  desarrolladores por cada aplicación en otro caso se estaría limitando la escalabilidad de la NAS.

# Objetivos

### Objetivo general

Gestionar el manejo de archivos del servidor NAS a través de un único microservicio para gestionar el contenido y la coneccion a través de un único punto

### Objetivos específicos

* Centralizar la gestión y manejo de archivos 
* Mejorar la seguridad
* Establecer controles específicos para los archivos utilizados
* Mejorar el el tráfico de archivos
* Disminuir los tiempos de conexión a los servidores
* Realizar un seguimiento estricto al manejo de archivos
* Mejorar la escalabilidad