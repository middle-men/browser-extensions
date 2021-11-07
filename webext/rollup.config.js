import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        },
      );

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default [
  {
    input: 'src/popup.ts',
    output: {
      sourcemap: !production,
      format: 'iife',
      name: 'omniboard_web_extension',
      file: 'public/build/popup_bundle.js',
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess({
          preserve: ['module'],
          sourceMap: !production,
        }),
        compilerOptions: {
          // enable run-time checks when not in production
          dev: !production,
        },
      }),
      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration -
      // consult the documentation for details:
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      typescript({
        sourceMap: !production,
        inlineSources: !production,
      }),

      // In dev mode, call `npm run start` once
      // the bundle has been generated
      !production && serve(),

      // Watch the `public` directory and refresh the
      // browser on changes when not in production
      !production && livereload('public'),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),
      postcss({
        extract: true,
        minimize: true,
        use: [
          [
            'sass',
            {
              includePaths: ['./src/theme', './node_modules'],
            },
          ],
        ],
      }),
    ],
    watch: {
      clearScreen: false,
    },
  },
  {
    input: 'src/options.ts',
    output: {
      sourcemap: !production,
      format: 'iife',
      name: 'omniboard_web_extension',
      file: 'public/build/options_bundle.js',
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess({
          preserve: ['module'],
          sourceMap: !production,
        }),
        compilerOptions: {
          // enable run-time checks when not in production
          dev: !production,
        },
      }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration -
      // consult the documentation for details:
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      typescript({
        sourceMap: !production,
        inlineSources: !production,
      }),

      // In dev mode, call `npm run start` once
      // the bundle has been generated
      !production && serve(),

      // Watch the `public` directory and refresh the
      // browser on changes when not in production
      !production && livereload('public'),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),
      postcss({
        extract: true,
        minimize: true,
        use: [
          [
            'sass',
            {
              includePaths: ['./src/theme', './node_modules'],
            },
          ],
        ],
      }),
    ],
    watch: {
      clearScreen: false,
    },
  },
  {
    input: 'src/background.ts',
    output: {
      sourcemap: true,
      format: 'iife',
      file: 'public/build/background.js',
    },
    plugins: [resolve(), commonjs()],
    watch: {
      clearScreen: false,
    },
  },
  {
    input: 'src/content.ts',
    output: {
      sourcemap: true,
      format: 'iife',
      file: 'public/build/content.js',
    },
    plugins: [resolve(), commonjs()],
    watch: {
      clearScreen: false,
    },
  },
];
