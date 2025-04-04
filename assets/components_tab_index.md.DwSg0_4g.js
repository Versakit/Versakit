import{d as f,p as i,b as h,o as b,w as n,G as a,k as l,j as t,B as _,c as y,a5 as p,at as B,a as d,a6 as v}from"./chunks/framework.DgG_RYdR.js";import{_ as r,a0 as V}from"./chunks/theme.BN5ATFS7.js";import{d as T,f as c}from"./chunks/index.CrgVH6Ra.js";const C=`<script setup lang="ts">
import { ref } from 'vue'
import { VerTab, VerTabItem } from '@versakit/ui'

const activeTab = ref('1')
<\/script>

<template>
  <VerTab v-model="activeTab" type="card">
    <VerTabItem label="标签1" name="1">
      <div class="content">标签1的内容</div>
    </VerTabItem>
    <VerTabItem label="标签2" name="2">
      <div class="content">标签2的内容</div>
    </VerTabItem>
    <VerTabItem label="标签3" name="3">
      <div class="content">标签3的内容</div>
    </VerTabItem>
  </VerTab>
</template>

<style scoped></style>
`,I=f({__name:"card",setup(u){const s=i("1");return(m,e)=>(b(),h(l(V),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value=o),type:"card"},{default:n(()=>[a(l(r),{label:"标签1",name:"1"},{default:n(()=>e[1]||(e[1]=[t("div",{class:"content"},"标签1的内容",-1)])),_:1}),a(l(r),{label:"标签2",name:"2"},{default:n(()=>e[2]||(e[2]=[t("div",{class:"content"},"标签2的内容",-1)])),_:1}),a(l(r),{label:"标签3",name:"3"},{default:n(()=>e[3]||(e[3]=[t("div",{class:"content"},"标签3的内容",-1)])),_:1})]),_:1},8,["modelValue"]))}}),k=`<script setup lang="ts">
import { ref } from 'vue'
import { VerTab, VerTabItem } from '@versakit/ui'

const activeTab = ref('1')
<\/script>

<template>
  <VerTab v-model="activeTab">
    <VerTabItem label="标签1" name="1">
      <div class="content">标签1的内容</div>
    </VerTabItem>
    <VerTabItem label="标签2" name="2">
      <div class="content">标签2的内容</div>
    </VerTabItem>
    <VerTabItem label="标签3" name="3">
      <div class="content">标签3的内容</div>
    </VerTabItem>
  </VerTab>
</template>

<style scoped></style>
`,x=f({__name:"base",setup(u){const s=i("1");return(m,e)=>(b(),h(l(V),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value=o)},{default:n(()=>[a(l(r),{label:"标签1",name:"1"},{default:n(()=>e[1]||(e[1]=[t("div",{class:"content"},"标签1的内容",-1)])),_:1}),a(l(r),{label:"标签2",name:"2"},{default:n(()=>e[2]||(e[2]=[t("div",{class:"content"},"标签2的内容",-1)])),_:1}),a(l(r),{label:"标签3",name:"3"},{default:n(()=>e[3]||(e[3]=[t("div",{class:"content"},"标签3的内容",-1)])),_:1})]),_:1},8,["modelValue"]))}}),P=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tab/index.md","filePath":"components/tab/index.md"}'),A={name:"components/tab/index.md"},g=Object.assign(A,{setup(u){const s=i(!0);return(m,e)=>{const o=_("ClientOnly");return b(),y("div",null,[e[2]||(e[2]=t("h1",{id:"tabs-标签页",tabindex:"-1"},[d("Tabs 标签页 "),t("a",{class:"header-anchor",href:"#tabs-标签页","aria-label":'Permalink to "Tabs 标签页"'},"​")],-1)),e[3]||(e[3]=t("p",null,"分隔内容上有关联但属于不同类别的数据集合。",-1)),e[4]||(e[4]=t("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[5]||(e[5]=t("p",null,[d("Tabs 组件提供了选项卡功能，通过 "),t("code",null,"tabList"),d(" 绑定当前激活的 "),t("code",null,"Tab"),d(" 名称。")],-1)),p(a(l(T),null,null,512),[[v,s.value]]),a(o,null,{default:n(()=>[a(l(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:l(k)},{vue:n(()=>[a(x)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=t("h2",{id:"卡片",tabindex:"-1"},[d("卡片 "),t("a",{class:"header-anchor",href:"#卡片","aria-label":'Permalink to "卡片"'},"​")],-1)),e[7]||(e[7]=t("p",null,[d("Tabs 组件提供了选项卡功能，通过 "),t("code",null,"tabList"),d(" 绑定当前激活的 "),t("code",null,"Tab"),d(" 名称。")],-1)),p(a(l(T),null,null,512),[[v,s.value]]),a(o,null,{default:n(()=>[a(l(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{s.value=!1}),vueCode:l(C)},{vue:n(()=>[a(I)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=B('<h2 id="tabs-api" tabindex="-1">Tabs API <a class="header-anchor" href="#tabs-api" aria-label="Permalink to &quot;Tabs API&quot;">​</a></h2><h3 id="tabs-属性" tabindex="-1">Tabs 属性 <a class="header-anchor" href="#tabs-属性" aria-label="Permalink to &quot;Tabs 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>tabList</code></td><td>Tabs 中绑定的数据</td><td><code>array</code></td><td>-</td></tr></tbody></table><h3 id="tabs-插槽" tabindex="-1">Tabs 插槽 <a class="header-anchor" href="#tabs-插槽" aria-label="Permalink to &quot;Tabs 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>自定义</td><td>为 Tab 的唯一名称</td></tr></tbody></table>',5))])}}});export{P as __pageData,g as default};
