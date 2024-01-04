
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/intro/',
    component: ComponentCreator('/docs/intro/','a2d'),
    exact: true
  },
  {
    path: '/docs/intro/__docusaurus/debug',
    component: ComponentCreator('/docs/intro/__docusaurus/debug','ea9'),
    exact: true
  },
  {
    path: '/docs/intro/__docusaurus/debug/config',
    component: ComponentCreator('/docs/intro/__docusaurus/debug/config','bed'),
    exact: true
  },
  {
    path: '/docs/intro/__docusaurus/debug/content',
    component: ComponentCreator('/docs/intro/__docusaurus/debug/content','453'),
    exact: true
  },
  {
    path: '/docs/intro/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/intro/__docusaurus/debug/globalData','6c4'),
    exact: true
  },
  {
    path: '/docs/intro/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/intro/__docusaurus/debug/metadata','0e3'),
    exact: true
  },
  {
    path: '/docs/intro/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/intro/__docusaurus/debug/registry','459'),
    exact: true
  },
  {
    path: '/docs/intro/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/intro/__docusaurus/debug/routes','e29'),
    exact: true
  },
  {
    path: '/docs/intro/blog',
    component: ComponentCreator('/docs/intro/blog','cf8'),
    exact: true
  },
  {
    path: '/docs/intro/blog/archive',
    component: ComponentCreator('/docs/intro/blog/archive','06a'),
    exact: true
  },
  {
    path: '/docs/intro/blog/first-blog-post',
    component: ComponentCreator('/docs/intro/blog/first-blog-post','464'),
    exact: true
  },
  {
    path: '/docs/intro/blog/long-blog-post',
    component: ComponentCreator('/docs/intro/blog/long-blog-post','776'),
    exact: true
  },
  {
    path: '/docs/intro/blog/mdx-blog-post',
    component: ComponentCreator('/docs/intro/blog/mdx-blog-post','827'),
    exact: true
  },
  {
    path: '/docs/intro/blog/tags',
    component: ComponentCreator('/docs/intro/blog/tags','3f2'),
    exact: true
  },
  {
    path: '/docs/intro/blog/tags/docusaurus',
    component: ComponentCreator('/docs/intro/blog/tags/docusaurus','15d'),
    exact: true
  },
  {
    path: '/docs/intro/blog/tags/facebook',
    component: ComponentCreator('/docs/intro/blog/tags/facebook','29b'),
    exact: true
  },
  {
    path: '/docs/intro/blog/tags/hello',
    component: ComponentCreator('/docs/intro/blog/tags/hello','383'),
    exact: true
  },
  {
    path: '/docs/intro/blog/tags/hola',
    component: ComponentCreator('/docs/intro/blog/tags/hola','f10'),
    exact: true
  },
  {
    path: '/docs/intro/blog/welcome',
    component: ComponentCreator('/docs/intro/blog/welcome','76d'),
    exact: true
  },
  {
    path: '/docs/intro/docs/tags',
    component: ComponentCreator('/docs/intro/docs/tags','98e'),
    exact: true
  },
  {
    path: '/docs/intro/markdown-page',
    component: ComponentCreator('/docs/intro/markdown-page','02e'),
    exact: true
  },
  {
    path: '/docs/intro/docs',
    component: ComponentCreator('/docs/intro/docs','212'),
    routes: [
      {
        path: '/docs/intro/docs/API Reference/hooks-handling',
        component: ComponentCreator('/docs/intro/docs/API Reference/hooks-handling','d24'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Architecture/background',
        component: ComponentCreator('/docs/intro/docs/Architecture/background','d4c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Architecture/guest-assets',
        component: ComponentCreator('/docs/intro/docs/Architecture/guest-assets','10a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Architecture/history',
        component: ComponentCreator('/docs/intro/docs/Architecture/history','6a4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Architecture/kata-3.0-arch',
        component: ComponentCreator('/docs/intro/docs/Architecture/kata-3.0-arch','e93'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Architecture/kubernetes',
        component: ComponentCreator('/docs/intro/docs/Architecture/kubernetes','b7d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Architecture/README',
        component: ComponentCreator('/docs/intro/docs/Architecture/README','1b5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/design/kata-2-0-metrics',
        component: ComponentCreator('/docs/intro/docs/design/kata-2-0-metrics','f90'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/design/kata-api-design',
        component: ComponentCreator('/docs/intro/docs/design/kata-api-design','443'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/design/kata-design-requirements',
        component: ComponentCreator('/docs/intro/docs/design/kata-design-requirements','e9d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/design/kata-nydus-design',
        component: ComponentCreator('/docs/intro/docs/design/kata-nydus-design','047'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/design/vcpu-threads-pinning',
        component: ComponentCreator('/docs/intro/docs/design/vcpu-threads-pinning','cd5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Developer-Guide',
        component: ComponentCreator('/docs/intro/docs/Developer-Guide','900'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/install/example-command',
        component: ComponentCreator('/docs/intro/docs/install/example-command','118'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/install/kata-deploy',
        component: ComponentCreator('/docs/intro/docs/install/kata-deploy','dff'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/install/quickstart',
        component: ComponentCreator('/docs/intro/docs/install/quickstart','e23'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/install/README',
        component: ComponentCreator('/docs/intro/docs/install/README','735'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/intro',
        component: ComponentCreator('/docs/intro/docs/intro','877'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/networking/agent-systemd-cgroup',
        component: ComponentCreator('/docs/intro/docs/networking/agent-systemd-cgroup','297'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/networking/end-to-end-flow',
        component: ComponentCreator('/docs/intro/docs/networking/end-to-end-flow','f9d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/networking/host-cgroups',
        component: ComponentCreator('/docs/intro/docs/networking/host-cgroups','8c6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/networking/networking',
        component: ComponentCreator('/docs/intro/docs/networking/networking','c07'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/proposals/README',
        component: ComponentCreator('/docs/intro/docs/proposals/README','bf2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/proposals/tracing-proposals',
        component: ComponentCreator('/docs/intro/docs/proposals/tracing-proposals','195'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/requirements',
        component: ComponentCreator('/docs/intro/docs/requirements','983'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Runtimes/vcpu-handling-runtime-go',
        component: ComponentCreator('/docs/intro/docs/Runtimes/vcpu-handling-runtime-go','87e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Runtimes/vcpu-handling-runtime-rs',
        component: ComponentCreator('/docs/intro/docs/Runtimes/vcpu-handling-runtime-rs','559'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Storage/direct-blk-device-assignment',
        component: ComponentCreator('/docs/intro/docs/Storage/direct-blk-device-assignment','556'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Storage/storage',
        component: ComponentCreator('/docs/intro/docs/Storage/storage','d99'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/agent-ctl/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/agent-ctl/README','c2e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/csi-kata-directvolume/docs/deploy-csi-kata-directvol',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/csi-kata-directvolume/docs/deploy-csi-kata-directvol','548'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/csi-kata-directvolume/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/csi-kata-directvolume/README','590'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/kata-ctl/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/kata-ctl/README','f83'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/kata-ctl/src/log_parser/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/kata-ctl/src/log_parser/README','bb2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/README','8d1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/BurntSushi/toml/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/BurntSushi/toml/README','f3f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/cpuguy83/go-md2man/v2/LICENSE',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/cpuguy83/go-md2man/v2/LICENSE','8e9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/go-logfmt/logfmt/CHANGELOG',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/go-logfmt/logfmt/CHANGELOG','2fb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/go-logfmt/logfmt/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/go-logfmt/logfmt/README','431'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/russross/blackfriday/v2/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/russross/blackfriday/v2/README','311'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/shurcooL/sanitized_anchor_name/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/shurcooL/sanitized_anchor_name/README','ad8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/sirupsen/logrus/CHANGELOG',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/sirupsen/logrus/CHANGELOG','984'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/sirupsen/logrus/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/sirupsen/logrus/README','334'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/urfave/cli/CODE_OF_CONDUCT',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/urfave/cli/CODE_OF_CONDUCT','297'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/urfave/cli/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/github.com/urfave/cli/README','bfc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/golang.org/x/sys/unix/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/golang.org/x/sys/unix/README','3d1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/gopkg.in/yaml.v2/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/gopkg.in/yaml.v2/README','6c3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/gopkg.in/yaml.v3/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/log-parser/vendor/gopkg.in/yaml.v3/README','bdf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/runk/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/runk/README','a03'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/src/tools/trace-forwarder/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/src/tools/trace-forwarder/README','90b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Virtualization/kata-vra',
        component: ComponentCreator('/docs/intro/docs/Virtualization/kata-vra','8f0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Virtualization/virtualization',
        component: ComponentCreator('/docs/intro/docs/Virtualization/virtualization','d3d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/Virtualization/VSocks',
        component: ComponentCreator('/docs/intro/docs/Virtualization/VSocks','d6d'),
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
