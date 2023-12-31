---
layout: documentation
permalink: /pages/compartir/ipt # the documentation layout requires you to fill the permalink for it to be highlighted in the side navigation
title: Herramienta Integrada de Publicación de Datos
description: |
sideNavigation: sidenav.compartir
toc: true
mobileToc: true
---
# Herramienta Integrada de Publicación de Datos

![Gestión de recursos](/pages/compartir/img/ipt-home.jpeg "Gestión de recursos")

La herramienta integrada para la publicación de datos -comúnmente conocido como IPT- es un software gratuito de código abierto desarrollado por GBIF y utilizado por organizaciones de todo el mundo para crear y gestionar repositorios para compartir conjuntos de datos sobre biodiversidad.

En nodo ecuatoriano de GBIF mantiene una [instalación del IPT registrada en la Red Global de GBIF](https://www.gbif.org/installation/9df8109c-684d-416b-819b-7bc09adc500b){:target="_blank"}, el cual esta registrado como un [repositorio FAIR](https://www.go-fair.org/fair-principles/){:target="_blank"} tanto en [fairsharing.org](https://doi.org/10.25504/FAIRsharing.53342f){:target="_blank"} como en [re3data](http://doi.org/10.17616/R31NJNFS){:target="_blank"}.

Para la publicación de datos se deberá crear un recurso en el IPT de pruebas y una vez que este este validado (publicado sin errores) solicitar al administrador del Nodo que cargue el conjunto de datos en el IPT de producción.

## Uso del IPT

### Ingreso al sistema

El Administrador del Nodo le proporcionará credenciales con los permisos correspondientes para:

- Crear recursos en el IPT
- Publicar recurso en el IPT
- Registrar Recurso en la versión de pruebas de GBIF

Para ingresar al sistema debe hacer clic en `Iniciar Sesión` en la parte superior derecha de la página web. En dónde deberá colocar las credenciales otorgadas por el Administrador del Nodo.

### Creación de un recurso nuevo

![Gestión de recursos](/pages/compartir/img/ipt-recursos.jpeg "Gestión de recursos")

Una vez dentro del sistema puede dar clic en `Gestión de recursos` en dónde se listarán los recursos que tiene disponibles para editar y también podrá crear un nuevo recurso dando clic en `Crear nuevo`.

Para crear un nuevo recurso deberá llenar los campos que aparecen en la pantalla, considerando lo siguiente:

- **Nombre Corto**: Corresponde a un código para el recurso y es el que se visualizará en el url del recurso, se recomienda que para autorizaciones (Recolección y Contratos Marco) se coloque el código de la misma.
- **Tipo**: Este campo no es obligatorio[^1], sin embargo corresponde al tipo de recurso que se creará.
- **Importar desde archivo**: Esta opción permite generar un recurso usando uno previamente exportado desde otra instalación para lo cual se deberá contar con un archivo DwC empaquetado en formato zip.

![Crear un nuevo recurso](/pages/compartir/img/ipt-nuevo-1.jpeg "Crear un nuevo recurso")

Cuando se haya completado los datos correspondientes puede dar clic en `Crear` en la parte superior y con esto se generará un nuevo recurso, el cual podrá ser editado.

### Importación y mapeo de archivos


[^1]: En la versión actual no es obligatorio, sin embargo esto cambiará a partir de la versión 3.x.x de la herramienta.