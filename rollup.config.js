import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
import { optimizeLodashImports } from '@optimize-lodash/rollup-plugin';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './out-tsc/app.js',
  output: {
      dir: 'dist',
  },
  plugins: [optimizeLodashImports()],
});