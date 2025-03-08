import html from '@rollup/plugin-html';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    html({
      inject: {
        // Inject the bundled JS file into the HTML
        inject: '<script src="/dist/bundle.js"></script>',
      },
    }),
  ],
};
