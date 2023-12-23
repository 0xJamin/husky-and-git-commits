module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['project-task']],
    'scope-case': [2, 'always', 'kebab-case'],
    'scope-empty': [2, 'always'],
  },
};
