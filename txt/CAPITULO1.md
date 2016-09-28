* [¿Qué es?]
~~~
  GitBook es una herramiento para crear documentación de proyectos y libros técnicos
  ~~~
* [¿Cómo se utiliza?]
  ~~~
  Se trabaja, utilizando Markdown y Github.
  ~~~
* [Como desplegar un libro]
~~~
  PASO 0: Hay que tener instalado node.js
  PASO 1: Crear con el comando mkdir un directorio gitbook donde trabajar:
     $ mkdir /PATH/TO/gitbook
     $ cd /PATH/TO/gitbook
   PASO 2: Ahora se necesita crear el package.json
    $ npm init
   No se necesita responder a las preguntas que el comando anterior pregunte, solo precionar enter. La información necesitar se inyectara en el archivo package.json mediante el siguiente comando:
    $ npm install -g gitbook-cli --save
    PASO 3: Iniciar GitBook
      $ gitbook init
    PASO 4: Ficheros en el directorio de tu gitbook.
    Se encontraran ficheros como README.md y SUMMARY.md.Abre README.md y encontraras una introduccion para tu libro.
    PASO 5: Crear capitulos
    Para crear capitulos, simplemente crea un nuevo fichero con la extension md.Por ejemplo : chapter1.md y pon algún contenido.

    Paso 5: Fichero SUMMARY.md
    En el fichero SUMMARY.md añadieremos el indice de nuestro libro y los enlaces a los capitulos.

    NOTA:
    GitBook permite probar el libro antes de empujarlo a la web con el comando:
      $ gitbook serve


   ~~~
