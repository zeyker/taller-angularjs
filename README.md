Plantilla Angular
=================

Plantilla para aplicación single page para ramo de Taller de Base de Datos.
Incluye manejo de dependencias por [Bower](http://bower.io/), preprocesador de hojas de estilo con [SASS](http://sass-lang.com/) y automatización de tareas con [Gulp Js](http://gulpjs.com/)

Requerimientos
--------------

* Node JS y NPM [descarga](https://nodejs.org/en/download/) o por [gestor de paquetes](https://nodejs.org/en/download/package-manager/)
* Gulp `$ npm install --global gulp`

Instalación
-----------

Una vez clonada la carpeta:
* Descargar dependencias de Node: `$ npm install`
* Descargar dependencias de Bower: `$ gulp bower`
* Enlazar dependencias Bower a index.html: `$ gulp wiredep`
* Iniciar servidor de desarrollo: `$ gulp serve`
* Generar versión de producción: `$ gulp build`

Agregar librerías de Front-end
---------------------------------
Usar la sintaxis `$ bower install --save-dev [librería]`. Luego inyectar la dependencia en la aplicación con `$ gulp wiredep`.

=======
# taller_angular
>>>>>>> bbff7e8467ce3ef14098db30f1d79e41b123e8ef
