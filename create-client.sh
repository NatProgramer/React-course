#!/bin/zsh

if [ "$#" -ne 1 ]; then
  echo "Se requieren el argumento, PROJECT_NAME."
  echo "Uso: $0 project"
  exit 1  # Salir del programa con un código de error
fi

PROJECT_NAME=$1
template=react-ts

# Create the Vite-based React project with TypeScript
pnpm create vite@latest $PROJECT_NAME --template $template > /dev/null

# Navigate to the project directory
cd $PROJECT_NAME

# Install project dependencies
pnpm install > /dev/null

cd ./src
cat > App.tsx <<EOF 
export default function App() {
  return (
    <>
    </>
  )
}
EOF
rm ./App.css
cd ..

# Config linter
if [ "$template" = "react-ts" ]; then
  pnpm install eslint eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh > /dev/null

  cat > .eslintrc.cjs <<EOF
  module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'standard-with-typescript',
      'plugin:react/recommended'
    ],
    overrides: [
      {
        env: {
          node: true
        },
        files: [
          '.eslintrc.{js,cjs}'
        ],
        parserOptions: {
          sourceType: 'script'
        }
      }
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
      ignorePatterns: ['.eslintrc.js']

    },
    plugins: [
      'react'
    ],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/method-signature-style': 'off'
    }
  }
EOF

else 
  npx eslint --init
fi

echo -n "you wanna use tailwind? (y/n): "
read -r useTailwind

if [ "$useTailwind" = "y" ] || [ "$useTailwind" = "yes" ]; then
pnpm install -D tailwindcss postcss autoprefixer > /dev/null
pnpx tailwindcss init -p

cat > tailwind.config.js <<EOF 
  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  } 
EOF

cat > ./src/index.css <<EOF
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

echo "Tailwind configuration finished, starting developmend server"

else 
  echo "No tailwind configuration started..."
fi

# Start the development server
pnpm run dev
