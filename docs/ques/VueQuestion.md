---
title: vue开发过程中遇到的问题
author: 一点
date: '2023-06-19'
---
- vue中自定义指令和v-if一起使用造成的渲染错乱问题

> 问题描述：页面中有多个元素，使用了自定义指令的元素上面的元素使用了v-if会导致触发两次自定义事件

> 解决办法：1.v-if换成v-show 2.自定义组件中增加判断（我这里是自定义组件中删除某个元素，可以在删除前判断这个元素是否存在，如果不判断就可能误删掉上面的元素 ）