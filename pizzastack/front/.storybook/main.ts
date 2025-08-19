const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import type { StorybookConfig } from '@storybook/react-webpack5';


const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx)",
    "../src/**/*.story.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      if (!config.resolve.plugins) {
        config.resolve.plugins = [];
      }
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    }
    return config;
  },
  // "staticDirs": [
  //   "..\\public"
  // ]
  staticDirs: [
    "../public"
  ]
};
export default config;