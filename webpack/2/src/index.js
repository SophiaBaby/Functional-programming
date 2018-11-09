// 没有使用react 依然会被打包
import React from 'react'
const a = () => import(/* webpackChunkName: "a" */ './a')
const b = () => import(/* webpackChunkName: "b" */ './b')
// const c = () => import(/* webpackChunkName: "c" */ './c')
import './index.css'

console.log('index2')
a().then((e) => {
  e.default()
})

b().then((e) => {
  e.default()
})

c().then((e) => {
  e.default()
})
