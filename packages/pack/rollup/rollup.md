# Rollup

rollup.config.js

```bash
rollup -i index.js --file dist.js --format --format cjs
rollup -i index.js -i a.js --dir dist --format cjs
# umd 兼容模式
rollup -i index.js --format es

rollup --config rollup.config.js --envrionment NODE_ENV:production
```

```js
export default {
    input: 'index.js',
    output: {
        file: 'index.umd.js',
        format: 'umd',
        name: 'Index'
    }
},

export default [
    {
        input: 'index.js',
        output: {
            file: 'index.umd.js',
            format: 'umd',
            name: 'Index'
        }
    },
    {
        input: 'index.js',
        output: {
            file: 'index.es.js',
            format: 'es',
            name: 'Index'
        }
    }
]

```
