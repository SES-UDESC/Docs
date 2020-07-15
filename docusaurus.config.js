module.exports = {
  title: 'Saúde SC Docs',
  tagline: 'The tagline of my site',
  url: 'https://ses-udesc.github.io', // Your website URL
  baseUrl: '/documentacao/',
  projectName: 'documentacao',
  organizationName: 'SES-UDESC',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Saúde SC Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          href: 'https://github.com/facebook/docusaurus', //Change to SES Repo
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: '',
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        }
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass'
  ]
};
