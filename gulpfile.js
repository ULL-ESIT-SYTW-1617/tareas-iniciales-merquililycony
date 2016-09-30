/*
* Dependencias
*/
var gulp = require('gulp'),
  shell = require('gulp-shell');

/*
* Configuración de la tarea 'generar'
*/
gulp.task('generar_gitbook', function () {
  gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});

gulp.task('desplegar_gitbook', function (){
  gulp.src('').pipe(shell(["./scripts/deploy-gitbook"]));

});
