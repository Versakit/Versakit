import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'
import cssnano from 'cssnano'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    dts({ tsconfigPath: '../../tsconfig.build.json' }),
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), './icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
        }),
        postCssPxToRem({
          rootValue: 16,
          propList: ['*'],
        }),
        cssnano({
          preset: 'default',
        }),
      ],
    },
  },
  // 打包配置
  build: {
    sourcemap: false,
    rollupOptions: {
      external: ['vue', '@vueuse/core'],
      output: [
        {
          exports: 'named',
          globals: {
            vue: 'Vue',
            '@vueuse/core': 'VueUse',
          },
          preserveModules: false,
        },
        {
          format: 'umd',
          dir: 'dist/umd',
          entryFileNames: '[name].umd.js',
          name: 'index',
        },
        {
          format: 'esm',
          dir: 'dist/esm',
          entryFileNames: '[name].esm.js',
        },
      ],
    },
    lib: {
      entry: 'index.ts',
      formats: ['es', 'umd'],
      name: 'versakit-ui',
    },
    terserOptions: {
      compress: {
        // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        keep_infinity: true,
        // 生产环境去除 console
        drop_console: true,
        // 生产环境去除 debugger
        drop_debugger: true,
      },
      format: {
        comments: false, // 删除注释
      },
    },
  },
})
