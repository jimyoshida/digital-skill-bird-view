// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// Google Analytics measurement ID. Only the GitHub Pages deploy sets this, so
// the private GitLab Pages deploy and local builds emit no tracking tag.
const gtagId = process.env.GTAG_ID;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DX Skill Landscape & Timeline',
  tagline: 'A comprehensive skill reference for the age of AI-driven development',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here.
  // Overridable per-deploy via SITE_URL (e.g. GitLab Pages sets $CI_PAGES_URL).
  url: process.env.SITE_URL || 'https://jimyoshida.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served.
  // GitHub Pages serves this project under '/<projectName>/'; GitLab Pages
  // serves it at the domain root, so the GitLab pipeline sets BASE_URL='/'.
  baseUrl: process.env.BASE_URL || '/dx-devops-landscape/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jimyoshida', // Usually your GitHub org/user name.
  projectName: 'dx-devops-landscape', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs/', // Serve the docs at the site's root
        },
        blog: {
          routeBasePath: 'blog/',
          blogTitle: 'Updates',
          blogDescription:
            'Release notes for the skill landscape, the timelines, and the site itself',
          blogSidebarTitle: 'Recent updates',
          blogSidebarCount: 10,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'DX Skill Landscape & Timeline updates',
            copyright: 'This material is licensed under the CC-BY-SA-4.0.',
          },
        },
        ...(gtagId ? {gtag: {trackingID: gtagId, anonymizeIP: true}} : {}),
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/future-dx.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Future DX Logo',
          src: 'img/logo-future-dx.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/jimyoshida/dx-devops-landscape',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'References',
            items: [
              {
                label: 'Level Up Coding',
                href: 'https://levelup.gitconnected.com/',
              },
              {
                label: 'ITNEXT',
                href: 'https://itnext.io/',
              },
              {
                label: 'FAUN',
                href: 'https://faun.pub/',
              },
              {
                label: 'Thoughtworks Technology Radar',
                href: 'https://www.thoughtworks.com/radar',
              },
              {
                label: 'Developer Roadmaps',
                href: 'https://roadmap.sh',
              },
              {
                label: 'Golang Weekly',
                href: 'https://golangweekly.com/',
              },
              {
                label: 'Ruby Weekly',
                href: 'https://rubyweekly.com/',
              },
              {
                label: 'Postgres Weekly',
                href: 'https://postgresweekly.com/',
              },
              {
                label: 'Tony Lixu on Medium',
                href: 'https://medium.com/@tonylixu',
              },
            ],
          },
          {
            title: 'Community',
            items: [/*
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            */],
          },
          {
            title: 'More',
            items: [/*
              {
                label: 'GitLab',
                href: 'https://gitlab.com/jimyoshida/dx-devops-landscape',
              },
            */],
          },
        ],
        copyright: `This material is licensed under the CC-BY-SA-4.0. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
