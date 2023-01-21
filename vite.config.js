import {defineConfig} from 'vite'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // AutoImport({
        //     resolvers: [ElementPlusResolver()],
        // }),
        // Components({
        //     resolvers: [ElementPlusResolver()],
        // }),
    ],
    base: './',
    alias: {
        path: "path-browserify",
    },
    server: {
        host: 'localhost',
        port: '8000'
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true
        }
    }
})