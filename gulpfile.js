/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
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
