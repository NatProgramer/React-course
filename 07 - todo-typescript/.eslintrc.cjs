module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "standard-with-typescript",
      "plugin:react/recommended"
  ],
  "overrides": [
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "project": './tsconfig.json'
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "react/react-in-jsx-scope": 'off',
    "@typescript-eslint/explicit-function-return-type": 'off'
  }
}


        // {
        //     "env": {
        //         "node": true
        //     },
        //     "files": [
        //         ".eslintrc.{js,cjs}"
        //     ],
        //     "parserOptions": {
        //         "sourceType": "script"
        //     }
        // }
