module.exports = {
  "parser": "@typescript-eslint/parser",
  "ignorePatterns": [".eslintrc.js"],
  "parserOptions": {
    "createDefaultProgram": true,
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "prefer-arrow",
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "root": true,
  "env": {
    "node": true,
    "jest": true
  },
  "rules": {
    "array-element-newline": ["error", {
      "ArrayExpression": "consistent",
      "ArrayPattern": { "minItems": 3 },
    }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-mixed-operators": "error",
    "eqeqeq": ["error"],
    "prefer-template": "error",
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "camelcase": ["error", { "allow": ["en_", "pl_", "hu_"] }],
    "no-underscore-dangle": "error",
    "one-var": ["error", "never"],
    "no-unused-expressions": "off",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "comma",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "generic"
      }
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "Object": {
            "message": "Avoid using the `Object` type. Did you mean `object`?"
          },
          "Function": {
            "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
          },
          "Boolean": {
            "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
          },
          "Number": {
            "message": "Avoid using the `Number` type. Did you mean `number`?"
          },
          "String": {
            "message": "Avoid using the `String` type. Did you mean `string`?"
          },
          "Symbol": {
            "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
          }
        }
      }
    ],
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-member-accessibility": ["off", {
      "accessibility": "explicit"
    }],
    "@typescript-eslint/indent": [
      "error",
      4,
      {
        "ArrayExpression": "first",
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "ignoredNodes": [
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
        ],
        "SwitchCase": 1
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/triple-slash-reference": ["error", {
      "path": "always",
      "types": "prefer-import",
      "lib": "always"
    }],
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "arrow-parens": ["error", "as-needed"],
    "brace-style": ["error", "1tbs"],
    "comma-dangle": "off",
    "complexity": "off",
    "constructor-super": "error",
    "curly": "error",
    "default-case": "error",
    "dot-notation": "error",
    "guard-for-in": "error",
    "id-match": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-internal-modules": "off",
    "import/order": "off",
    "max-classes-per-file": ["error", 1],
    "max-len": "off",
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty": "off",
    "no-eval": "error",
    "eol-last": ["error", "always"],
    "no-extra-bind": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-magic-numbers": "off",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-null/no-null": "off",
    "no-redeclare": "error",
    "no-return-await": "error",
    "no-sequences": "error",
    "no-shadow": ["off", {
      "hoist": "all"
    }],
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unsafe-finally": "error",
    "no-unused-vars": "off",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow/prefer-arrow-functions": ["warn", {
      "disallowPrototype": true,
      "singleReturnOnly": false,
      "classPropertiesAllowed": false
    }],
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "quote-props": ["error", "as-needed"],
    "radix": "error",
    "space-in-parens": ["error", "never"],
    "spaced-comment": ["error", "always", {
      "markers": [
        "/"
      ]
    }],
    "use-isnan": "error",
    "valid-typeof": "off"
  }
}
