import gulpSpritesmith from 'gulp.spritesmith'
import gulp from 'gulp'

gulp.task('sprite', function () {
  const spriteData = gulp.src('./src/assets/img/*.png').pipe(
    gulpSpritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
      padding: 5
    })
  )

  return spriteData.pipe(gulp.dest('./src/assets/images'))
})
