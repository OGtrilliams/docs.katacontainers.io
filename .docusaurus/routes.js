
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
    component: ComponentCreator('/docs/intro/docs','0fb'),
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
        path: '/docs/intro/docs/inotify',
        component: ComponentCreator('/docs/intro/docs/inotify','655'),
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
        path: '/docs/intro/docs/tools/osbuilder/dockerfiles/QAT/README',
        component: ComponentCreator('/docs/intro/docs/tools/osbuilder/dockerfiles/QAT/README','b8f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/osbuilder/image-builder/README',
        component: ComponentCreator('/docs/intro/docs/tools/osbuilder/image-builder/README','e8e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/osbuilder/initrd-builder/README',
        component: ComponentCreator('/docs/intro/docs/tools/osbuilder/initrd-builder/README','963'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/osbuilder/README',
        component: ComponentCreator('/docs/intro/docs/tools/osbuilder/README','de5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/osbuilder/rootfs-builder/README',
        component: ComponentCreator('/docs/intro/docs/tools/osbuilder/rootfs-builder/README','16d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/osbuilder/tests/README',
        component: ComponentCreator('/docs/intro/docs/tools/osbuilder/tests/README','818'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/kata-debug/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/kata-debug/README','ab4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/kata-deploy/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/kata-deploy/README','662'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/kernel/configs/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/kernel/configs/README','c5c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/kernel/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/kernel/README','e15'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/qemu/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/qemu/README','fac'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/README','c9a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/release/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/release/README','acf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/scripts/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/scripts/README','a0f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/docs/tools/packaging/static-build/README',
        component: ComponentCreator('/docs/intro/docs/tools/packaging/static-build/README','cbf'),
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
