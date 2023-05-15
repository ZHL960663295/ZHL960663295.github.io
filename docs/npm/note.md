---
title: git添加远程分支、关联远程仓库等操作
author: 一点
date: '2023-05-15'
---
- npm查看目前源以及全局切换源
``` js
npm get registry
npm config set registry http://www.npmjs.org
npm config set registry http://registry.npm.taobao.org/
```

- 本次install使用淘宝镜像
``` js
npm install --registry https://registry.npm.taobao.org
```