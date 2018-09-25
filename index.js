var sass = require('node-sass')

var result = sass.render({file: 'sample.sass'}, function(err, result) {
  if (err) {
    console.log("error", err)
  }
  if (result) {
    console.log("Ok", result.css.toString())
  }
})
