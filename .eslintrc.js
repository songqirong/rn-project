module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    indent: [
      2,
      2,
      {
        // 缩进
        FunctionDeclaration: {
          body: 1,
          parameters: 2,
        },
        SwitchCase: 1,
      },
    ],
    'eol-last': [1, 'always'], // 要求或禁止文件末尾存在空行
    'func-call-spacing': [2, 'never'], // 要求或禁止在函数标识符和其调用之间有空格
    eqeqeq: [2, 'smart'], // 强制使用三等，除了对比null/undefined  --CUSTOM
    'no-extra-parens': 0, // 禁止不必要的括号 (as any写法会被误判)
    'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
    'key-spacing': [2, { afterColon: true }], // object的key的“:”之后至少有一个空格
    'space-infix-ops': 2, // 要求中缀操作符周围有空格
    'comma-spacing': [2, { after: true }], // 强制在逗号前后使用一致的空格
    'no-trailing-spaces': 2, // 禁用行尾空格
    'space-before-function-paren': [2, 'never'], // 要求或禁止函数圆括号之前有一个空格
    'no-multi-spaces': 2, // 禁止使用多个空格
    'object-curly-spacing': [2, 'always'], // 对象大括号旁必须有空格
    '@typescript-eslint/type-annotation-spacing': [
      2,
      {
        // 声明类型时必须无空格
        overrides: {
          colon: {
            before: false,
            after: true,
          },
          arrow: {
            before: true,
            after: true,
          },
        },
      },
    ],
    // ============符号相关=============
    'comma-style': [2, 'last'], // 逗号规则
    'comma-dangle': [
      2,
      {
        // 行末尾必须有逗号
        functions: 'always-multiline',
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      },
    ],
    'semi-style': [2, 'last'], // 强制分号的位置
    semi: [2, 'always'], // 语句必须分号结尾
    quotes: [2, 'single'], // 字符串必须使用单引号
    // ============箭头函数相关=============
    // 'arrow-parens': 2, // 要求箭头函数的参数使用圆括号
    'no-confusing-arrow': [2, { allowParens: true }], // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'arrow-spacing': [2, { before: true, after: true }],
    'arrow-body-style': [2, 'as-needed'], // 要求箭头函数体使用大括号
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-undef': 0,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
};
