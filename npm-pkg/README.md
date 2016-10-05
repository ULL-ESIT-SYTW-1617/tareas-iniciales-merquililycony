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
