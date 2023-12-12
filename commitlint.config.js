module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['[TASK-NUMBER]', 'feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test', 'build'],
    ],
  },
};
