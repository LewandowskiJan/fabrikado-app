module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@angular-eslint/eslint-plugin",
    "@typescript-eslint",
    "simple-import-sort",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/no-inferrable-types": [
      "off",
      {
        ignoreParameters: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": ["off"],
  },
  overrides: [
    {
      files: ["src/**/*.ts"],
      parserOptions: {
        project: ["./tsconfig.app.json"],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "comma-spacing": "error",
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^@angular*"],
              ["^rxjs*"],
              ["^ngx*"],
              ["^@*"],
              ["^@src*"],
              ["^@domain"],
              ["^\\."],
              ["^"],
            ],
          },
        ],
      },
    },
    {
      files: ["api/src/**/*.ts"],
      parserOptions: {
        project: ["./api/tsconfig.json"],
        createDefaultProgram: true,
      },
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^@*"],
              ["^@src*"],
              ["^@domain"],
              ["^@game"],
              ["^\\."],
              ["^"],
            ],
          },
        ],
      },
    },
    {
      files: ["src/**/*.component.html"],
      parser: "@angular-eslint/template-parser",
      parserOptions: {
        project: ["./tsconfig.app.json"],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
      rules: {
        "@angular-eslint/template/accessibility-alt-text": "error",
        "@angular-eslint/template/accessibility-elements-content": "error",
        "@angular-eslint/template/accessibility-label-for": "error",
        "@angular-eslint/template/no-positive-tabindex": "error",
        "@angular-eslint/template/accessibility-table-scope": "error",
        "@angular-eslint/template/accessibility-valid-aria": "error",
        "@angular-eslint/template/click-events-have-key-events": "error",
        "@angular-eslint/template/mouse-events-have-key-events": "error",
        "@angular-eslint/template/no-autofocus": "error",
        "@angular-eslint/template/no-distracting-elements": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/no-throw-literal": "off",
        strict: "off",
        "import/first": "off",
        "lines-around-directive": "off",
      },
      plugins: ["@angular-eslint/template"],
    },
    {
      files: ["src/**/*.ts", "api/**/*.ts"],
      rules: {
        quotes: ["error", "single"],
        "@typescript-eslint/typedef": [
          "error",
          {
            arrayDestructuring: true,
            arrowCallSignature: true,
            arrowParameter: true,
            callSignature: true,
            memberVariableDeclaration: true,
            parameter: true,
            propertyDeclaration: true,
            objectDestructuring: true,
            variableDeclaration: true,
            variableDeclarationIgnoreFunction: true,
          },
        ],
        "max-len": ["error", { code: 160 }],
      },
    },
  ],
};