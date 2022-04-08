---
sidebar_position: 2
---

# Instalación

### Clonación del repositorio
El primer paso para la instalación es clonar el repositorio en una carpeta local

```bash  
$    git clone https://git.fiscalia.gob.bo/wilver.vargas/ms-admin-files.git ms-files
```

### Instalación de la aplicación

Porterior a haber clonado el repositior debemos ingresar en la carpeta que se acaba de crear llamada 'ms-files'

```bash
$    cd ms-files
```

Se prosigue a instalar
```bash
$    npm install
```

### Instalación de gluster-fs
:::caution Advertencia
Esta parte es opcional cuando se usa y monta una carpeta NAS
:::

Los pasos para instalar gluster-fs en una distribución debian son los siguientes:
```bash
$ sudo apt-get update

# busque la versión de glusterfs en el repositorio de debian
$ sudo apt list glusterfs\*

# seleccione una versión e instálela con
$ sudo apt install glusterfs-client

# cree una carpeta montando gluster remoto en localhost
$ sudo mkdir /mnt/testvol01

# Monte gluster-fs
$ sudo mount -t glusterfs glusterfs-test01.fiscalia.gob.bo:/testvol01 /mnt/testvol01


# actualice fstab por montaje automático cuando inicie la PC:
# abra el documento
$ sudo vim /etc/fstab

# añada la siguiente línea
glusterfs-test01.fiscalia.gob.bo:/testvol01 /mnt/testvol01 glusterfs defaults,\_netdev 0 0
```
Ejemplo del archivo fstab
![ejmplo fstab](/img/configuracion/fstab.png)

### Creación de una carpeta y enlace simbólico por aplicación
Es necesario definir o crear una carpeta dentro de la carpeta ms-admin-files con un nombre, este nombre será utilizado en configuraciones posteriores
Se recomienda que la carpeta a crear se llame "uploads"
```bash
$ mkdir uploads
```
A continuación se monta el folder NAS en /mnt/
```bash
$ sudo mount -t glusterfs glusterfs-test01.fiscalia.gob.bo:/testvol01 /mnt/testvol01
```
Finalmente se debe crear un enlace simbólico desde NAS "1" en "cargas" que se creó anteriormente
```bash
$ ln -s /mnt/testvol01/testCorrespondence/uploads/1 uploads/
```

 




