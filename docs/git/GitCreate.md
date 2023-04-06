---
title: git添加远程分支、关联远程仓库等操作
author: 一点
date: '2023-04-06'
---
- 查看是否存在已经添加的远程分支:
``` js
git remote -v
```
- 删除已添加的远程分支：
```js
git remote rm origin 
```
- 添加远程分支
``` js
git remote add origin git@github.com:ZHL960663295/ZHL960663295.github.io.git
```
- 本地分支关联远程分支
``` js
git branch --set-upstream-to=origin/远程分支名称 本地分支名称
```
