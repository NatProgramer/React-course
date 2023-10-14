#!/bin/zsh

PROJECT_NAME=$1
template=$2

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

# Start the development server
pnpm run dev
