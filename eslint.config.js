import js from '@eslint/js'
import tsEslintBase from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import tsEslint from '@typescript-eslint/eslint-plugin'
import preferArrow from 'eslint-plugin-prefer-arrow'
import nestedIf from 'eslint-plugin-nested-if'
import functional from 'eslint-plugin-functional'
import noElse from 'eslint-plugin-no-else'
import imports from 'eslint-plugin-import'
import stylisticTs from '@stylistic/eslint-plugin-ts'

export default [
  js.configs.recommended,
  ...tsEslintBase.config(
    ...tsEslintBase.configs.recommendedTypeChecked,
  ),
  {
    ignores: ["*.test.*"],
    rules: {
      "functional/immutable-data": "off",
      "functional/no-let": "off",
    },
  },
  {
    ignores: ['.eslintrc.js ', 'node_modules', '@typescript-eslint/parser'],
    languageOptions: {
      globals: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      'no-else': noElse,
    },
    rules: {
      'array-callback-return': 'error',
      'getter-return': 'warn',
      'no-setter-return': 'warn',
      'no-const-assign': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-import-assign': 'error',
      'no-self-assign': 'error',
      'no-unexpected-multiline': 'warn',
      'no-unreachable': 'warn',
      'default-case-last': 'warn',
      'default-param-last': 'warn',
      'max-depth': ['error', 3],
      'no-alert': 'warn',
      'no-continue': 'error',
      'no-delete-var': 'error',
      'no-empty-function': ['warn', {
        allow: ['constructors'],
      }],
      'no-extra-boolean-cast': 'warn',
      'no-extra-label': 'error',
      'no-implicit-coercion': 'error',
      'no-implied-eval': 'error',
      'no-lone-blocks': 'error',
      'no-multi-assign': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-restricted-globals': [
        'error',
        'while', 'do', 'for', 'else', 'continue', 'with', 'let', 'var',
      ],
      'no-unneeded-ternary': 'warn',
      'no-useless-catch': 'warn',
      'no-useless-concat': 'warn',
      'no-useless-return': 'warn',
      'no-useless-escape': 'warn',
      'no-useless-rename': 'warn',
      'no-with': 'error',
      'prefer-rest-params': 'warn',
      'require-await': 'warn',
      'yoda': 'error',
      'eqeqeq': 'error',
      'prefer-template': 'error',
      'no-underscore-dangle': 'warn',
      'no-unused-expressions': 'off',
      'camelcase': 'warn',
      'arrow-body-style': ['error', 'as-needed'],
      'constructor-super': 'error',
      'curly': 'error',
      'default-case': 'error',
      'dot-notation': 'error',
      'guard-for-in': 'error',
      'id-match': 'error',
      'max-classes-per-file': ['error', 1],
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-console': 'warn',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'warn',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-fallthrough': 'error',
      'no-invalid-this': 'error',
      'no-irregular-whitespace': 'error',
      'no-magic-numbers': 'off',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-redeclare': 'error',
      'no-return-await': 'error',
      'no-sequences': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-undef-init': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-vars': 'off',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'radix': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'max-lines': ['error', {
        'max': 500,
        'skipBlankLines': true,
        'skipComments': true,
      }],
      'no-else-return': ['error', { allowElseIf: false }],
      'newline-before-return': 'error',
    },
  },
  {
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': [
        'error',
        {
          'default': 'generic',
        },
      ],
      '@typescript-eslint/typedef': ['error'],
      '@typescript-eslint/await-thenable': 'error',
      "@typescript-eslint/no-wrapper-object-types": "error",
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: "^_",
        },
      ],
      '@typescript-eslint/member-delimiter-style': [
        'off',
        {
          'multiline': {
            'delimiter': 'comma',
            'requireLast': false,
          },
        },
      ],
      '@typescript-eslint/class-name-casing': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/explicit-member-accessibility': ['off', {
        'accessibility': 'explicit',
      }],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',
      '@typescript-eslint/triple-slash-reference': ['error', {
        'path': 'always',
        'types': 'prefer-import',
        'lib': 'always',
      }],
      '@typescript-eslint/unified-signatures': 'error',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableBoolean: true,
          allowNullableEnum: true,
          allowNullableObject: true,
        },
      ],
      "@typescript-eslint/restrict-template-expressions": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-restricted-types": "error"
    },
  },
  {
    plugins: {
      'import': imports,
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'import/no-internal-modules': 'off'
    },
  },
  {
    plugins: {
      'prefer-arrow': preferArrow,
    },
    rules: {
      'prefer-arrow/prefer-arrow-functions': ['warn', {
        'disallowPrototype': true,
        'singleReturnOnly': false,
        'classPropertiesAllowed': false
      }],
    },
  },
  {
    plugins: {
      'nested-if': nestedIf,
    },
    rules: {
      'nested-if/nested-if-statements': 'error',
    },
  },
  {
    plugins: {
      functional,
    },
    rules: {
      'functional/no-let': 'error',
      'functional/functional-parameters': ['warn', {
        enforceParameterCount: false,
      }],
      'functional/immutable-data': ['error', {
        ignoreImmediateMutation: true,
        ignoreAccessorPattern: '**.current',
      }],
      'functional/no-loop-statements': 'error',
      'functional/prefer-tacit': 'warn',
    },
  },
  {
    plugins: {
      '@stylistic/ts': stylisticTs,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      '@stylistic/ts/comma-dangle': ["error", "always-multiline"],
      '@stylistic/ts/semi': ["error", "never"],
    },
  },
  {
    files: ['*/scripts/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    rules: {
      camelcase: [
        'error',
        {
          allow: ['match_phrase_prefix', 'match_bool_prefix', 'dis_max'],
        },
      ],
      'no-underscore-dangle': [
        'error',
        {
          allow: ['_source'],
        },
      ],
      '@typescript-eslint/member-ordering': 'off',
    },
  },
]
