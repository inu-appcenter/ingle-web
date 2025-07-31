module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',  
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', //prettier와 충돌하는 eslint 규칙을 비활성화. --> 스타일을 pretiier가 처리하도록
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'curly': ['error'], // 중괄호를 생략하지 못하도록.
    'react/jsx-sort-props': [ //props 설정 (필수 - 선택 - 콜백 순)
      'warn',
      {
        callbacksLast: true, // 콜백(props)이 뒤로
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: true, // props 순서를 알파벳순이 아닌 팀 규칙에 따르도록
        reservedFirst: true,
      },
    ],
    eqeqeq: ['error', 'always'], // 항상 ===, !== 사용 강제
    'no-var': 'error',  // var 금지
    'prefer-const': [   // const 우선 사용
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true
      }
    ],
    // 개발 시에만 console 허용
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    // key에 index 사용 제한
    'react/no-array-index-key': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
