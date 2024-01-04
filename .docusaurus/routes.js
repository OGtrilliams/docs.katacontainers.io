
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','970'),
    routes: [
      {
        path: '/docs/architecture-overview/background',
        component: ComponentCreator('/docs/architecture-overview/background','9b4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/architecture-overview/example-command',
        component: ComponentCreator('/docs/architecture-overview/example-command','6ff'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/architecture-overview/guest-assets',
        component: ComponentCreator('/docs/architecture-overview/guest-assets','893'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/architecture-overview/history',
        component: ComponentCreator('/docs/architecture-overview/history','465'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/architecture-overview/kata-3.0-arch',
        component: ComponentCreator('/docs/architecture-overview/kata-3.0-arch','b3f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/architecture-overview/kubernetes',
        component: ComponentCreator('/docs/architecture-overview/kubernetes','1bd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/architecture-overview/networking',
        component: ComponentCreator('/docs/architecture-overview/networking','12c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/architecture-overview/README',
        component: ComponentCreator('/docs/architecture-overview/README','5b2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/architecture-overview/storage',
        component: ComponentCreator('/docs/architecture-overview/storage','c2e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/design/kata-2-0-metrics',
        component: ComponentCreator('/docs/design/kata-2-0-metrics','715'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/design/kata-api-design',
        component: ComponentCreator('/docs/design/kata-api-design','a57'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/design/kata-design-requirements',
        component: ComponentCreator('/docs/design/kata-design-requirements','1c1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/design/kata-nydus-design',
        component: ComponentCreator('/docs/design/kata-nydus-design','f0a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Installation/quickstart',
        component: ComponentCreator('/docs/Installation/quickstart','4fc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/networking/host-cgroups',
        component: ComponentCreator('/docs/networking/host-cgroups','6ff'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/requirements',
        component: ComponentCreator('/docs/requirements','0bd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Runtimes/vcpu-handling-runtime-go',
        component: ComponentCreator('/docs/Runtimes/vcpu-handling-runtime-go','56b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Runtimes/vcpu-handling-runtime-rs',
        component: ComponentCreator('/docs/Runtimes/vcpu-handling-runtime-rs','b8f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/vcpu-threads-pinning',
        component: ComponentCreator('/docs/vcpu-threads-pinning','5a8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
