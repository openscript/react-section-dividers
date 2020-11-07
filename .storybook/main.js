module.exports = {
  stories: [
    '../stories/start.stories.mdx',
    '../stories/**/*.stories.@([tj]sx|mdx)'
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    }
  ]
};
