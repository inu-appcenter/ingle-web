module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended", 
    "plugin:react/recommended", 
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", //prettier와 충돌하는 eslint 규칙을 비활성화. --> 스타일을 pretiier가 처리하도록
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["prettier", "react", "@typescript-eslint"],
  rules: {
    // 프로젝트에 따라 규칙을 자유롭게 추가/수정 가능
    curly: "error", // 중괄호를 생략하지 못하도록.
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
