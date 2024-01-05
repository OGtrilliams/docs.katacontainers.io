
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
    component: ComponentCreator('/docs','9b5'),
    routes: [
      {
        path: '/docs/API Reference/hooks-handling',
        component: ComponentCreator('/docs/API Reference/hooks-handling','bc4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/background',
        component: ComponentCreator('/docs/Architecture/background','854'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/guest-assets',
        component: ComponentCreator('/docs/Architecture/guest-assets','b56'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/history',
        component: ComponentCreator('/docs/Architecture/history','8c8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/kata-3.0-arch',
        component: ComponentCreator('/docs/Architecture/kata-3.0-arch','14b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/kubernetes',
        component: ComponentCreator('/docs/Architecture/kubernetes','09c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Architecture/README',
        component: ComponentCreator('/docs/Architecture/README','315'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/CODE_OF_CONDUCT',
        component: ComponentCreator('/docs/CODE_OF_CONDUCT','fe8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/CONTRIBUTING',
        component: ComponentCreator('/docs/CONTRIBUTING','03b'),
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
        path: '/docs/design/vcpu-threads-pinning',
        component: ComponentCreator('/docs/design/vcpu-threads-pinning','407'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Developer-Guide',
        component: ComponentCreator('/docs/Developer-Guide','fdb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Glossary',
        component: ComponentCreator('/docs/Glossary','845'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/hypervisors',
        component: ComponentCreator('/docs/hypervisors','9f4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/example-command',
        component: ComponentCreator('/docs/install/example-command','d70'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/kata-deploy',
        component: ComponentCreator('/docs/install/kata-deploy','62e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/quickstart',
        component: ComponentCreator('/docs/install/quickstart','758'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/README',
        component: ComponentCreator('/docs/install/README','1b4'),
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
        path: '/docs/networking/agent-systemd-cgroup',
        component: ComponentCreator('/docs/networking/agent-systemd-cgroup','3dc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/networking/end-to-end-flow',
        component: ComponentCreator('/docs/networking/end-to-end-flow','f3a'),
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
        path: '/docs/networking/networking',
        component: ComponentCreator('/docs/networking/networking','68f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/proposals/README',
        component: ComponentCreator('/docs/proposals/README','d19'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/proposals/tracing-proposals',
        component: ComponentCreator('/docs/proposals/tracing-proposals','805'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/README',
        component: ComponentCreator('/docs/README','32f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Release-Process',
        component: ComponentCreator('/docs/Release-Process','498'),
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
        path: '/docs/Stable-Branch-Strategy',
        component: ComponentCreator('/docs/Stable-Branch-Strategy','42d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Storage/direct-blk-device-assignment',
        component: ComponentCreator('/docs/Storage/direct-blk-device-assignment','d56'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Storage/storage',
        component: ComponentCreator('/docs/Storage/storage','a5d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/agent-ctl/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/agent-ctl/README','fb0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/csi-kata-directvolume/docs/deploy-csi-kata-directvol',
        component: ComponentCreator('/docs/tools/packaging/src/tools/csi-kata-directvolume/docs/deploy-csi-kata-directvol','280'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/csi-kata-directvolume/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/csi-kata-directvolume/README','bd5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/kata-ctl/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/kata-ctl/README','3f2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/kata-ctl/src/log_parser/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/kata-ctl/src/log_parser/README','b0e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/README','4c2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/github.com/BurntSushi/toml/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/github.com/BurntSushi/toml/README','a92'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/github.com/cpuguy83/go-md2man/v2/LICENSE',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/github.com/cpuguy83/go-md2man/v2/LICENSE','ef5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/github.com/go-logfmt/logfmt/CHANGELOG',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/github.com/go-logfmt/logfmt/CHANGELOG','212'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/github.com/go-logfmt/logfmt/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/github.com/go-logfmt/logfmt/README','0fe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/github.com/russross/blackfriday/v2/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/github.com/russross/blackfriday/v2/README','d0f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/github.com/shurcooL/sanitized_anchor_name/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/github.com/shurcooL/sanitized_anchor_name/README','0e8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/github.com/sirupsen/logrus/CHANGELOG',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/github.com/sirupsen/logrus/CHANGELOG','a5c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/github.com/sirupsen/logrus/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/github.com/sirupsen/logrus/README','730'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/github.com/urfave/cli/CODE_OF_CONDUCT',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/github.com/urfave/cli/CODE_OF_CONDUCT','b10'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/github.com/urfave/cli/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/github.com/urfave/cli/README','c12'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/golang.org/x/sys/unix/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/golang.org/x/sys/unix/README','20b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/gopkg.in/yaml.v2/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/gopkg.in/yaml.v2/README','e19'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/log-parser/vendor/gopkg.in/yaml.v3/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/log-parser/vendor/gopkg.in/yaml.v3/README','5e1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/runk/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/runk/README','7a1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tools/packaging/src/tools/trace-forwarder/README',
        component: ComponentCreator('/docs/tools/packaging/src/tools/trace-forwarder/README','ead'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Virtualization/kata-vra',
        component: ComponentCreator('/docs/Virtualization/kata-vra','0b6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Virtualization/virtualization',
        component: ComponentCreator('/docs/Virtualization/virtualization','d3f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Virtualization/VSocks',
        component: ComponentCreator('/docs/Virtualization/VSocks','576'),
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
