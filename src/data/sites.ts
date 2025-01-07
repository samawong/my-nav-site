// src/data/sites.ts
export function getHolidays() {
    return [
      { name: "春节", date: "2025-01-29", daysLeft: 22 },
      { name: "清明节", date: "2025-04-04", daysLeft: 87 },
      // ...
    ];
  }
  
  export function getSites() {
    return {
      quickTools: [
        { name: "Beautiful window", url: "...", icon: "..." },
        // ...
      ],
      categories: {
        开发工具: [
          { name: "GitHub", desc: "...", url: "...", icon: "..." },
          // ...
        ],
        // ...
      }
    };
  }

export const siteData = {
  "实用工具":{
    "dev-tools": [
    {
      name: "GitHub",
      desc: "全球最大的代码托管平台，支持Git版本控制",
      icon: "https://github.githubassets.com/favicons/favicon.svg",
      url: "https://github.com"
    },
    {
      name: "VS Code",
      desc: "微软开源的强大代码编辑器，支持丰富的插件扩展",
      icon: "https://code.visualstudio.com/favicon.ico",
      url: "https://code.visualstudio.com/"
    },
    {
      name: "CodeSandbox",
      desc: "在线代码编辑器，快速创建和分享Web项目",
      icon: "https://codesandbox.io/favicon.ico",
      url: "https://codesandbox.io/"
    },
    {
      name: "Stack Overflow",
      desc: "程序员问答社区，解决开发中遇到的问题",
      icon: "https://stackoverflow.com/favicon.ico",
      url: "https://stackoverflow.com/"
    },
    {
      name: "DevDocs",
      desc: "一站式开发文档聚合平台，快速查询各种API",
      icon: "https://devdocs.io/favicon.ico",
      url: "https://devdocs.io/"
    },
    {
      name: "CodePen",
      desc: "在线前端代码编辑和分享平台",
      icon: "https://cpwebassets.codepen.io/assets/favicon/favicon.ico",
      url: "https://codepen.io/"
    }
  ],
  "optimization": [
    {
      name: "Netlify",
      desc: "现代网站托管和自动化部署平台",
      icon: "https://www.netlify.com/favicon.ico",
      url: "https://www.netlify.com/"
    },
    {
      name: "Vercel",
      desc: "面向前端开发者的云平台，专注静态站点和JAMstack",
      icon: "https://assets.vercel.com/image/upload/favicon/favicon.ico",
      url: "https://vercel.com/"
    },
    {
      name: "GTmetrix",
      desc: "网站性能分析工具，提供优化建议",
      icon: "https://gtmetrix.com/favicon.ico",
      url: "https://gtmetrix.com/"
    },
    {
      name: "TinyPNG",
      desc: "智能图片压缩工具，优化网站加载速度",
      icon: "https://tinypng.com/favicon.ico",
      url: "https://tinypng.com/"
    },
    {
      name: "WebPageTest",
      desc: "专业的网站性能测试工具，支持多地区测试",
      icon: "https://www.webpagetest.org/favicon.ico",
      url: "https://www.webpagetest.org/"
    },
    {
      name: "Cloudflare",
      desc: "CDN和安全服务提供商，提升网站访问速度",
      icon: "https://cloudflare.com/favicon.ico",
      url: "https://www.cloudflare.com/"
    }
  ],
  "gui-tools": [
    {
      name: "Postman",
      desc: "功能强大的API测试工具，支持团队协作",
      icon: "https://www.postman.com/favicon.ico",
      url: "https://www.postman.com/"
    },
    {
      name: "Sourcetree",
      desc: "图形化Git客户端，简化版本控制操作",
      icon: "https://www.sourcetreeapp.com/favicon.ico",
      url: "https://www.sourcetreeapp.com/"
    },
    {
      name: "MongoDB Compass",
      desc: "MongoDB可视化管理工具，简化数据库操作",
      icon: "https://mongodb-js.github.io/compass/favicon.ico",
      url: "https://www.mongodb.com/products/compass"
    },
    {
      name: "Docker Desktop",
      desc: "Docker容器管理工具，支持可视化操作",
      icon: "https://www.docker.com/favicon.ico",
      url: "https://www.docker.com/products/docker-desktop/"
    }
  ]
},
  "优质网站":{
    "常用网站":[
      {
        name: "Github",
        desc: "全球最大的代码托管平台",
        icon: "https://github.githubassets.com/favicons/favicon.svg",
        url: "https://github.com/"
      },
      {
        name: "Gitee",
        desc: "中国最大的代码托管平台",
        icon: "https://gitee.com/favicon.ico",
      }
    ],
    "学习网站":[
      {
        name: "菜鸟教程",
        desc: "菜鸟教程",
        icon: "https://www.runoob.com/favicon.ico",
        url: "https://www.runoob.com/"
      },
      {
        name: "菜鸟教程",
        desc: "菜鸟教程",
        icon: "https://www.runoob.com/favicon.ico",
      }
    ]
  }
  };