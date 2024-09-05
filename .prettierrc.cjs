module.exports = {
  tabWidth: 2,
  semi: false,
  tailwindConfig: './tailwind.config.ts',
  importOrder: [
    '^@/translations/(.*)$',
    '^@/assets/(.*)$',
    '^@/lib/(.*)$',
    '^@/store/(.*)$',
    '^@/hooks/(.*)$',
    '^@/screens/(.*)$',
    '^@/components/(.*)$',
    '^@/components/ui/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    'prettier-plugin-tailwindcss',
  ],
};
