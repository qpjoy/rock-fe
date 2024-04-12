```json
"dev": "vite",
"build": "npm run build:client && npm run build:server",
"build:client": "vite build --outDir dist/client",
"build:server": "vite build --outDir dist/server --ssr src/server-entry.jsx",
"serve": "vite preview",
"start": "NODE_ENV=development node server.js"
```
