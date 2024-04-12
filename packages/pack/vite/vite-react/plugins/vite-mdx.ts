import { Plugin } from "vite";
import { createCompiler } from "@mdx-js/mdx";
import { createFilter, FilterPattern } from "@rollup/pluginutils";

const vue3DefaultRenderer = `
import {mdx} from 'vite-mdx/vue3'
`;

const vue3DefaultPargma = `
/** @jsx mdx */
`;

const reactDefaultRenderer = `
import React from 'react'
import { mdx } from '@mdx-js/react'
`;

const reactDefaultPargma = `
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
`;

interface Options {
  include?: FilterPattern;
  exclude?: FilterPattern;
  framework?: "vue3" | "react";
  renderer?: string;
  pargma?: string;
}

const defaultOptions: Options = {
  framework: "vue3",
};

const frameworkRendererPargmaMap = {
  vue3: {
    renderer: vue3DefaultPargma,
    pargma: vue3DefaultPargma,
  },
  react: {
    renderer: reactDefaultRenderer,
    pargma: reactDefaultPargma,
  },
};

export default (options: Options = defaultOptions): Plugin => {
  const framework = options.framework || "vue3";
  return {
    name: "vite-mdx",
    enforce: framework === "react" ? "pre" : undefined,
    config() {
      return {
        esbuild: {
          include: /\.(jsx|tsx|ts|mdx)/,
          loader: "jsx",
        },
      };
    },
    transform(code, id, ssr) {
      const { include = /\.mdx$/, exclude } = options;
      const filter = createFilter(include, exclude);

      const framework = options.framework || "react";
      const { renderer, pargma } = frameworkRendererPargmaMap[framework];

      if (filter(id)) {
        const compiler = createCompiler();
        const result = compiler.processSync(code);
        return {
          code: `${renderer}${pargma}${result.contents}`,
        };
      }
    },
  };
};
