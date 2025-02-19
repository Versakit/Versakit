import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    // 启用类似 jest 的全局测试 API
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      // 指定覆盖率统计范围
      include: ['packages/versakit-ui/**/*.{js,ts,vue}'],
      // 排除不需要统计的文件
      exclude: ['packages/**/dist/**', 'packages/**/node_modules/**'],
    },
    environment: 'jsdom',
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
