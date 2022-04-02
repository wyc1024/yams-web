import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default {
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                '@vueuse/core',
            ],
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core',
        ],
    }
}