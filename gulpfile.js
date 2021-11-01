const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!
   
    
      * Genjiru S Uchiwa (Aristide Hervé Mbassi)
      
      ========================================================
      
      
      */`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--
      /*!
      
     Genjiru S Uchiwa (Aristide Hervé Mbassi)
      
      
      =========================================================
      
      
      */
      -->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

      * Genjiru S Uchiwa (Aristide Hervé Mbassi)
      
      ========================================================      
      */`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});