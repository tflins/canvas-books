import livereload from 'rollup-plugin-livereload'

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
    livereload({
      open: true,
      openPage: '/public/index.html',
      port: 3000,
      contentBase: ''
    })
  ]
}

export default config
