module.exports = {
  usernamual: [
    {
      产品描述: [
        '产品描述/简介',
        '产品描述/基本概念',
        '产品描述/应用场景',
        '产品描述/技术白皮书',
        '产品描述/产品定价',
        '产品描述/爱速搭与amis'
      ],
      组织管理: [
        '组织管理/工作台管理',
        '组织管理/基本信息管理',
        '组织管理/角色管理',
        '组织管理/应用管理',
        '组织管理/组织架构及成员管理'
      ],
      数据模型: [
        {
          外部数据源接入: [
            '数据模型/外部数据源接入/数据源编辑',
            '数据模型/外部数据源接入/外部数据源接入',
            '数据模型/外部数据源接入/外部数据源使用',
            '数据模型/外部数据源接入/外部数据源IP白名单'
          ]
        },
        '数据模型/模型基本设置',
        '数据模型/模型其他设置',
        '数据模型/模型数据管理',
        '数据模型/模型字段配置'
      ],
      页面设计: [
        '页面设计/页面管理',
        '页面设计/页面类型说明',
        {
          普通页面设计: [
            '页面设计/普通页面设计/普通页面说明',
            '页面设计/普通页面设计/页面搭建流程',
            '页面设计/普通页面设计/组件说明',
            '页面设计/普通页面设计/编辑器说明',
            '页面设计/普通页面设计/模型组件',
            '页面设计/普通页面设计/自定义组件',
            '页面设计/普通页面设计/Angular组件',
            '页面设计/普通页面设计/页面外部嵌入',
            '页面设计/普通页面设计/本地开发接入说明'
          ]
        },
        {
          模型页面设计: []
        }
      ],
      API对接: [
        'API对接/基础',
        'API对接/本地开发调试',
        'API对接/API中心',
        'API对接/API编排'
      ],
      BPM流程: [
        'BPM流程/基础',
        'BPM流程/流程设计',
        'BPM流程/流程运行',
        'BPM流程/流程示例'
      ],
      小程序: ['小程序/小程序开发实践', '小程序/发布小程序'],
      应用管理: [
        '应用管理/应用设置',
        '应用管理/应用权限设置'
        // '发布管理'
      ],
      对象存储: ['对象存储/对象存储管理']
    },
    '应用发布'
  ],

  privateImage: [
    '私有部署/私有部署安装',
    '私有部署/更新记录',
    '私有部署/运维及故障处理',
    {
      type: 'category',
      label: '私有部署独有功能',
      collapsed: false,
      items: [
        '私有部署/自定义登录方式',
        '私有部署/接入统计',
        '私有部署/接管发布环境权限',
        '私有部署/邮件API',
        '私有部署/平台间应用同步'
        // '私有部署/自定义后端插件'
      ]
    }
  ],

  tutorial: [
    '快速入门/使用流程',
    '快速入门/创建应用',
    '快速入门/连接数据源',
    '快速入门/创建数据模型',
    '快速入门/页面设计',
    '快速入门/发布应用',
    '快速入门/权限管理'
  ],

  openAPI: ['OpenAPI/介绍', 'OpenAPI/组织', 'OpenAPI/应用', 'OpenAPI/数据模型']
};
