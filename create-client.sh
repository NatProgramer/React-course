#!/bin/zsh

if [ "$#" -ne 1 ]; then
  echo "Se requieren el argumento, PROJECT_NAME."
  echo "Uso: $0 project"
  exit 1  # Salir del programa con un código de error
fi

PROJECT_NAME=$1
template=react-ts

# Create the Vite-based React project with TypeScript
pnpm create vite@latest $PROJECT_NAME --template $template

# Navigate to the project directory
cd $PROJECT_NAME

# Install project dependencies
pnpm install

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
  pnpm install eslint eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh

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
      'react/react-in-jsx-scope': 'off'
    }
  }
EOF

else 
  npx eslint --init
fi

# Start the development server
pnpm run dev
