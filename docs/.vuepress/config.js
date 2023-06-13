module.exports = {
    title: 'notes',
    description: '前端知识笔记',
    theme: 'reco',
    logo: "/logo.jpg",
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    //指定首页文件路径
    home: '/',
    themeConfig: {
        subSidebar: 'auto',
        sidebarDepth: 3
    },
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '个人链接',
                items: [{
                        text: 'Github',
                        link: 'https://github.com/ZHL960663295'
                    },
                    {
                        text: '掘金',
                        link: 'https://juejin.cn/user/4204959635367640/posts'
                    }
                ]
            }
        ],
        sidebar: [{
                title: 'Welcome To Paradise',
                path: '/',
                collapsable: false, // 不折叠
                children: [{
                    title: "概述",
                    path: "/"
                }]

            }, {
                title: 'git series',
                path: '/git/GitCreate',
                collapsable: false, // 不折叠
                children: [{
                    title: "git远程分支添加、关联等操作",
                    path: "/git/GitCreate"
                }]
            },
            {
                title: 'npm series',
                path: '/npm/note',
                collapsable: false, // 不折叠
                children: [{
                    title: "npm相关操作",
                    path: "/npm/note"
                }]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [{
                        title: "条件类型",
                        path: "/handbook/ConditionalTypes"
                    },
                    {
                        title: "泛型",
                        path: "/handbook/Generics"
                    }
                ],
            },
            // {
            //     title: "遇到的问题",
            //     path: '/questions/VueQuestion',
            //     collapsable: false, // 不折叠
            //     children: [{
            //         title: "自定义指令问题",
            //         path: "/questions/VueQuestion"
            //     }
            // ],
            // }
        ]
    },
    plugins: [
        ["vuepress-plugin-juejin-style-copy", {
          copyText: "复制代码",
          tip: {
              content: "复制成功"
          }
       }]
    ]
};

