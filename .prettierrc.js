module.exports = {
  printWidth: 80,
  tabWidth: 4,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  semi: false,
  trailingComma: 'es5',
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: false,
  jsxSingleQuote: true,
  quoteProps: 'preserve',
  arrowParens: 'avoid',
  overrides: [
    {
      'files': ['*.md'],
      'options': {
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
}
