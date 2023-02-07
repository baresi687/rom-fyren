import {resolve} from "path"

export default {
    root: resolve(__dirname, 'src'),
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, './src/index.html'),
                signUp: resolve(__dirname, './src/signup.html')
            }
        },
        outDir: '../dist'
    },
    envDir: '../'
}
