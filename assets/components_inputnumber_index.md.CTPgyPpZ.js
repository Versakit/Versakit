import{m as s}from"./chunks/theme.C6BEB8ch.js";import{d as v,p as i,c as b,o as h,F as x,j as e,G as n,k as r,t as u,_ as f,B as _,at as V,a as m,w as p}from"./chunks/framework.CYu56ZLI.js";import{Q as y}from"./chunks/index.B77M7Ljq.js";const N=`<script setup lang="ts">
import { ref } from 'vue'
import { VerInputNumber } from '@versakit/ui'

const numberValue = ref(1)
const decimalValue = ref(0.5)
<\/script>

<template>
  <div class="example-box">
    <h3>整数输入示例</h3>
    <VerInputNumber v-model="numberValue" :min="0" :max="10" :step="1" />
    <div>当前值: {{ numberValue }}</div>
  </div>

  <div class="example-box">
    <h3>小数输入示例</h3>
    <VerInputNumber
      v-model="decimalValue"
      :min="0"
      :max="1"
      :step="0.1"
      :precision="1"
    />
    <div>当前值: {{ decimalValue }}</div>
  </div>
</template>

<style scoped>
.example-box {
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
}
</style>
`,X={class:"example-box"},C={class:"example-box"},W=v({__name:"base",setup(c){const a=i(1),t=i(.5);return(o,d)=>(h(),b(x,null,[e("div",X,[d[2]||(d[2]=e("h3",null,"整数输入示例",-1)),n(r(s),{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=l=>a.value=l),min:0,max:10,step:1},null,8,["modelValue"]),e("div",null,"当前值: "+u(a.value),1)]),e("div",C,[d[3]||(d[3]=e("h3",null,"小数输入示例",-1)),n(r(s),{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=l=>t.value=l),min:0,max:1,step:.1,precision:1},null,8,["modelValue"]),e("div",null,"当前值: "+u(t.value),1)])],64))}}),B=f(W,[["__scopeId","data-v-68273570"]]),T=JSON.parse('{"title":"InputNumber 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/inputnumber/index.md","filePath":"components/inputnumber/index.md"}'),I={name:"components/inputnumber/index.md"},D=Object.assign(I,{setup(c){return(a,t)=>{const o=_("ClientOnly");return h(),b("div",null,[t[0]||(t[0]=e("h1",{id:"inputnumber-数字输入框",tabindex:"-1"},[m("InputNumber 数字输入框 "),e("a",{class:"header-anchor",href:"#inputnumber-数字输入框","aria-label":'Permalink to "InputNumber 数字输入框"'},"​")],-1)),t[1]||(t[1]=e("p",null,"仅允许输入标准的数字值，可定义范围",-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[m("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),n(o,null,{default:p(()=>[n(r(y),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(N)},{vue:p(()=>[n(B)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=V('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定值</td><td>number</td><td>-</td></tr><tr><td>min</td><td>最小值</td><td>number</td><td>-Infinity</td></tr><tr><td>max</td><td>最大值</td><td>number</td><td>Infinity</td></tr><tr><td>step</td><td>步长</td><td>number</td><td>1</td></tr><tr><td>precision</td><td>精度，小数位数</td><td>number</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr><tr><td>controls</td><td>是否显示控制按钮</td><td>boolean</td><td>true</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>-</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值被改变时触发</td><td>(value: number)</td></tr></tbody></table>',4))])}}});export{T as __pageData,D as default};
