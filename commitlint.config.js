module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['[TASK-NUMBER]', 'feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test', 'build'],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-case': [0],
    'subject-empty': [0],
    'header-max-length': [0],
  },
};
