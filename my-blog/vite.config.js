import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})

// This configuration file sets up a Vite project with React and Tailwind CSS.
// It imports the necessary plugins and exports a configuration object.
// The `defineConfig` function is used to define the Vite configuration.
// The `react` plugin enables React support, while the `tailwindcss` plugin integrates
// Tailwind CSS for styling. The configuration is exported as the default export of the module.