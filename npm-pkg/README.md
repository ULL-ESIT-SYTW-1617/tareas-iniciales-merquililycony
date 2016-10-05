# Guía para la práctica 2
* [enlace](https://medium.com/@peraferrer/como-crear-un-m%C3%B3dulo-npm-6baef161a96#.o9hgi9mj1)
*En la carpeta npm-pkg se desarrollara el pquete*

**bin**:
* carpeta que contiene los archivos que exponen las funciones que podremos ejecutar desde la línea de comandos del cliente NPM. Para nuestro ejemplo no lo vamos a utilizar.
**lib**:
* carpeta con los archivos que dan vida a nuestro módulo.
**test**:
* carpeta que contiene todos los test unitarios que consideremos necesarios para nuestro módulo. Si bien no son obligatorios, es una buena práctica incluirlos. Para nuestro ejemplo no lo vamos a utilizar.
**.npmignore**:
* archivo en donde se especifica todo lo que sebe ser ignorado por NPM a la hora de que alguien intente instalar nuestro módulo.
**package.json**:
* archivo necesario para NPM, debido a que proporciona información de nuestro módulo, como nombre, versión, script principal, dependencias, etc.

## Agregar las dependencias que necesitamos
~~~
  npm install underscore --save
~~~


## En el fichero package.js

**main**:
* en el cual especificamos el path de nuestro script raíz del módulo, para nosotros ./lib/npm-pkg este será el archivo que crearemos a continuación y contendrá la lógica de la búsqueda fuzzy.

## En el fichero node-npm-pkg.js

*En este fichero se escribe el código del modulo, exponiendo los metodos necesarios.*

## Pruebas

*Las pruebas se pueden hacer dentro del mismo proyecto del modulo, creando un archivo : index.js en la carpeta raiz "npm-pkg".*

## Publicaciónn del módulo

*Para poder publicar un módulo en NPM, será necesario contar con un usuario en:*
* [npm]( https://www.npmjs.com) *una vez que lo han creado, por única vez debemos ir a la línea de comandos y ejecutar:*
~~~
  npm adduser
~~~
*Esto les va a pedir que ingrese su usuario y clave de NPM.
Ahora solo queda pararnos en la raíz de nuestro módulo y desde la línea de comandos ejecutar:*
~~~
  npm publish
~~~
*Si todo va bien, tendrán un mensaje indicando que su módulo se ha publicado.*
