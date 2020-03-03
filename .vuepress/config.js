// .vuepress/config.js
base: /RaspberryPi/
module.exports = {
  title: '树莓派中文文档',
  description: '树莓派中文文档，Rasperry pi文档, 树莓派资料，树莓派新手教程，树莓派使用',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/start/' },
      { text: '基础知识', link: '/basis/' },
      { text: '高手进阶', link: '/advanced/' },
      { text: '科技爱好者博客', link: 'http://www.lxx1.com' },
    ],

     sidebar: {
      '/start/': [
        '',
        'start',  /* /foo/one.html */
        'raspberry_pi_version'   /* /foo/two.html */
      ],
    '/basis/': [
      '',
      'commmand',
      'power',
      'raspi',
      'sudo',
      'network',
      'wifi',
      'HDMI_config',
      'led_blink_warnings',
      'cron',
      'frequency-management',
      'warning-icons',
      'raspberry_music',
      'raspberry_wordpress',
      'raspberry_pi_version',
      ],
    '/advanced/': [
      '',
      'service',
      'info_python',
      ],
    },
    sidebarDepth: 2 ,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    displayAllHeaders: true, // 默认值：false
    
  }
}

