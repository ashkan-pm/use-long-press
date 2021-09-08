const { build } = require('estrella');

build({
  entry: './src/main.ts',
  outfile: './build/main.js',
  bundle: true,
  minify: true
});
