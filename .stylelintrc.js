module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
        ],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
    'alpha-value-notation': null,
    'at-rule-empty-line-before': null,
    'at-rule-no-deprecated': null,
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'keyframes-name-pattern': null,
    'length-zero-no-unit': null,
    'media-feature-name-no-vendor-prefix': null,
    'media-feature-range-notation': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'rule-empty-line-before': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': null,
    'shorthand-property-no-redundant-values': null,
    'value-keyword-case': null,
  },
};
