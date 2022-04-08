---
sidebar_position: 10
---

# Tipos de datos (schemas)
En este apartado se muestran los diferentes esquemas que se necesitan para los difentes servicios junto con los tipos de datos necesarios para ejecutarlos, sus restricciones y pequeñas descripciones para las variables que se utilizan.
Estos esquemas se encuentran en el mismo nivel que los servicios.

## Verificar servicio (/GET) InputFileDto

```bash
{
    appName*	cadena
                longitud_mínima: 1
                origen nombre_aplicación, ejemplo: jl1, jl2

    nas*	cadena
            longitud_mínima: 1
            default: 1
            carpeta nas para guardar el archivo en el servidor

    path*	cadena
            ejemplo: home/user/documents
            ubicación de ruta para guardar archivos en el servidor

    file*	cadena($binary)

    withDateSubFolder	booleano
                        por_defecto: false
                        generar subcarpeta con datos actuales, carpeta de ejemplo 2022/01/01
}
```

## Escritura (/write) InputBase64Dto
```bash
{
    appName*	cadena
                longitud_mínima: 1
                origen nombre_aplicación, ejemplo: jl1, jl2

    nas*	cadena
            longitud_mínima: 1
            por_defecto: 1
            carpeta nas para guardar el archivo en el servidor

    path*	cadena
            ejemplo: home/user/documents
            ubicación de ruta para guardar archivos en el servidor

    fileName*	cadena
                ejemplo: document.pdf
                fileName es el nombre del archivo cuando se guarda

    base64*	cadena
            longitud_mínima: 3
            texto base 64 sin MIMEtype (Extensiones de correcto de internet multipropósito), enviar solo texto después;

    withDateSubFolder	booleano
                        por_defecto: false
                        generar subcarpeta con datos actuales, carpeta de ejemplo 2022/01/01
}
```

## Lectura (/read) InputFilePathDto
```bash
{
    id	cadena
        ejemplo: 6233e35a495cffa3ffb4a5d4
        DB _id una fila, enviar id solo si existe por búsqueda

    pathName	cadena
                ejemplo: 1/test/folder/1647567706883_l0vr9urn.jpg
                ubicación de la ruta para el archivo de búsqueda en el servidor
}
```

## Verificar si existe (/verify/exist) InputPathNameDto
```bash
{
    pathName	cadena
                ejemplo: 1/test/folder/1647567706883_l0vr9urn.jpg
                ubicación de la ruta para el archivo de búsqueda en el servidor
}
```

## Reubicar (/relocate) InputRelocateFilesDto
```bash
{
    id	cadena
        ejemplo: 6233e35a495cffa3ffb4a5d4
        DB _id una fila, enviar id solo si existe por búsqueda

    pathName	cadena
                ejemplo: 1/test/folder/1647567706883_l0vr9urn.jpg
                ubicación de la ruta para el archivo de búsqueda en el servidor

    newPathName*	cadena
                    ejemplo: 2/folder
                    nueva ubicación de la ruta para mover el archivo

    replaceIfExists	booleano
                    por_defecto: false
                    si existe un archivo en newPathName, con esta opción fuerce el reemplazo del archivo
}
```

# Reemplazar (/replace) InputFileReplaceDto

```bash 
{
    id	cadena
        ejemplo: 6233e35a495cffa3ffb4a5d4
        DB _id una fila, enviar id solo si existe por búsqueda

    pathName	cadena
                ejemplo: 1/test/folder/1647567706883_l0vr9urn.jpg
                ubicación de la ruta para el archivo de búsqueda en el servidor

    appName*	cadena
                longitud_mínima: 1
                origen nombre_aplicación, ejemplo: jl1, jl2

    base64*	cadena
            longitud_mínima: 3
            texto base 64 sin MIMEtype (Extensiones de correcto de internet multipropósito), enviar solo texto después;
}
```