import { moduleTools, defineConfig } from '@modern-js/module-tools';
import { storybookPlugin } from '@modern-js/plugin-storybook';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

export default defineConfig({
  plugins: [moduleTools(), storybookPlugin(), tailwindcssPlugin()],
  buildPreset: 'npm-library',
});
