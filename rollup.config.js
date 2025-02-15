import fs from 'fs';
import path from 'path';
import json from '@rollup/plugin-json';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const isDev = process.env.NODE_ENV !== 'production';

// 公共插件配置
const plugins = [
  vue({
    css: true,
    compileTemplate: true
  }),
  json(),
  nodeResolve(),
  postcss({
    inject: true,
    extract: true
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env']
  })
];

// 如果不是开发环境，开启压缩
if (!isDev) {
  plugins.push(terser());
}

// packages 文件夹路径
const root = path.resolve(__dirname, 'packages');

export default fs.readdirSync(root)
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  .map(item => {
    const pkg = require(path.resolve(root, item, 'package.json'));
    return {
      input: path.resolve(root, item, 'index.js'),
      output: [
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.main),
          format: 'cjs'
        },
        {
          exports: 'auto',
          file: path.join(root, item, pkg.module),
          format: 'es'
        },
        {
          name: 'MyLibrary', // 这里是你的库的全局变量名
          file: path.join(root, item, pkg.browser),
          format: 'iife'
        }
      ],
      plugins: plugins
    };
  });