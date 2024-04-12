import { defineConfig, optimizeDeps } from "vite";
import react from "@vitejs/plugin-react";
// import reactRefresh from "@vitejs/plugin-react-refresh";
// import mdx from "./plugins/vite-mdx";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  return {
    plugins: [
      // mdx({
      //   framework: "react",
      // }),
      // reactRefresh({
      //   include: /\.(mdx|jsx|tsx)/,
      // }),
      react(),
      mdx.default({
        mdxOptions: {
          remarkPlugins: [],
          // rehypePlugins: [],
        },
        // providerImportSource: "@mdx-js/react",
      }),
    ],
    optimizeDeps: {
      // 手动加载esmodule模块
      // exclude: ['lodash-es'], 如果开启，本地会有很多文件加载，影响开发体验
      include: ["react/jsx-runtime"],
      exclude: [],
    },
    build: {
      manifest: true,
    },
    resolve: {
      alias: {
        "@": "/src",
        "@src": "/src",
      },
    },
  };
});
