module.exports = {
  parser: "@typescript-eslint/parser", // 指定ESLint解析器
  parserOptions: {
    sourceType: "module", // 允许使用导入,
    jsx: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // 使用@ typescript-eslint / eslint-plugin中的推荐规则
    "prettier/@typescript-eslint", // 使用eslint-config-prettier禁用一些与Prettier冲突的ESLint规则
    "plugin:prettier/recommended", // 启用eslint-plugin-prettier和eslint-config-prettier，使编辑器显示错误提示，确保这项是扩展数组中的最后一个配置
  ],
  rules: {
    // 放置ESLint规则的位置。可用于覆盖从扩展配置中指定的规则
    // 例如 "@typescript-eslint/explicit-function-return-type": "off",
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-unused-vars": [2, { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": "off", // 不用写函数返回的类型
  },
};
