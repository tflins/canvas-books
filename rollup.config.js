import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const config = {
  input: './src/main.js',

  output: [
    {
      format: 'cjs',
      file: 'lib/bundle.cjs.js',
      sourcemap: true
    }
  ],

  plugins: [
    serve({
      open: true,
      openPage: '/public/index.html',
      port: 3000,
      contentBase: ''
    }),
    livereload()
  ]
}

export default config
