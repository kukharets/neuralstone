module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  globals: {
    "JSX": true,
  },
  extends: [
    "airbnb",
    "jest-enzyme",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "./config.json",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "react-hooks",
    "prettier",
    "import",
    "sort-keys-fix"
  ],
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "consistent-return": "off",
    "no-promise-executor-return": "off",
    "no-param-reassign": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "@typescript-eslint/no-var-requires": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "import/no-unresolved": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-fragments": "off",
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "react/state-in-constructor": ["error", "never"],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/no-unused-prop-types": "off",
    "arrow-parens": ["error", "as-needed"],
    "max-len": ["error", 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "react/forbid-prop-types": "off",
    "no-unused-expressions": [
      "error",
      {
        allowTernary: true,
      },
    ],
    "react/prop-types": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true }],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false, classes: true, variables: true, typedefs: true,
      },
    ],
    "react/destructuring-assignment": [
      "error",
      "always",
      {
      "ignoreClassFields": true
      }
    ],
    "react/button-has-type": [0],
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-array-index-key": "off",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "unknown", "parent", "sibling", "index", "object", "type"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always",
        "pathGroups": [
          {
            "pattern": "{mock,modules}/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "{locale,media,styles}/**",
            "group": "internal",
            "position": "after"
          }
        ]
      }
    ],
    "sort-keys-fix/sort-keys-fix": "warn",
    "import/prefer-default-export": "off",
    "react/jsx-sort-props": ["error", {
      "callbacksLast": true,
      "shorthandFirst": true,
      "multiline": "last",
      "noSortAlphabetically": false,
      "reservedFirst": true,
    }],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
    },
  },
  "ignorePatterns": [
    ".husky",
    ".eslintrc.js",
    ".prettierrc.js",
    "/.git",
    "/.vscode",
    "/experience",
    "/**/__snapshots__",
    "/**/node_modules",
  ]
};
