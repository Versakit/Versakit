import{d as u,p as s,c as i,o as c,j as n,G as a,k as r,t as v,_ as b,B as f,a5 as _,a as l,a6 as h,w as d}from"./chunks/framework.B3Jz-8p0.js";import{d as x}from"./chunks/theme.DKFx6c4r.js";import{d as k,f as D}from"./chunks/index.BbNYUtVF.js";const g=`<script setup lang="ts">
import { ref } from 'vue'
import { VerDataPicker } from '@versakit/ui'

const selectedDate = ref<Date | null>(null)
<\/script>

<template>
  <div class="container">
    <div class="example-box">
      <VerDataPicker v-model="selectedDate" placeholder="选择日期" />
      <div>Selected date: {{ selectedDate }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
}

.example-box {
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
}

.controls {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
`,y={class:"container"},B={class:"example-box"},C=u({__name:"base",setup(p){const t=s(null);return(m,e)=>(c(),i("div",y,[n("div",B,[a(r(x),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),placeholder:"选择日期"},null,8,["modelValue"]),n("div",null,"Selected date: "+v(t.value),1)])]))}}),W=b(C,[["__scopeId","data-v-e73f7fa2"]]),G=JSON.parse('{"title":"Date Picker 日期选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/datepicker/index.md","filePath":"components/datepicker/index.md"}'),Z={name:"components/datepicker/index.md"},P=Object.assign(Z,{setup(p){const t=s(!0);return(m,e)=>{const o=f("ClientOnly");return c(),i("div",null,[e[1]||(e[1]=n("h1",{id:"date-picker-日期选择器",tabindex:"-1"},[l("Date Picker 日期选择器 "),n("a",{class:"header-anchor",href:"#date-picker-日期选择器","aria-label":'Permalink to "Date Picker 日期选择器"'},"​")],-1)),e[2]||(e[2]=n("h2",{id:"基本用法",tabindex:"-1"},[l("基本用法 "),n("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),_(a(r(k),null,null,512),[[h,t.value]]),a(o,null,{default:d(()=>[a(r(D),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:r(g)},{vue:d(()=>[a(W)]),_:1},8,["vueCode"])]),_:1})])}}});export{G as __pageData,P as default};
