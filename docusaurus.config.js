const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Kata Containers | docs',
  tagline: 'docs.katacontainers.io',
  url: 'https://docs.katacontainers.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kata-containers', // Usually your GitHub org/user name.
  projectName: 'kata-containers', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kata-containers/kata-containers',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://katacontainers.io/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Kata Containers Documentation',
        logo: {
          alt: 'Kata Containers',
          src: 'https://katacontainers.io/img/android-chrome-192x192.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/kata-containers/kata-containers',
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
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Code of Conduct',
                href: 'docs/CODE_OF_CONDUCT',
              },
              {
                label: 'Contributor Guide',
                href: 'docs/CONTRIBUTING',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/katacontainers',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                to: 'https://github.com/kata-containers',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/katacontainers',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kata Containers. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
