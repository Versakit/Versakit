import{d as C,p as d,c,o as h,G as l,k as a,B as V,j as r,a5 as b,a as p,a6 as g,w as v}from"./chunks/framework.DgG_RYdR.js";import{T as u}from"./chunks/theme.BN5ATFS7.js";import{d as _,f as x}from"./chunks/index.CrgVH6Ra.js";const B=`<script setup lang="ts">
import { VerSlider } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(0)
const value2 = ref(20)
const value3 = ref(50)

const handleChange = (val: number) => {
  console.log('Changed:', val)
}
<\/script>

<template>
  <div>
    <VerSlider v-model="value" />

    <VerSlider
      v-model="value2"
      :min="0"
      :max="200"
      :step="5"
      @change="handleChange"
    />

    <VerSlider v-model="value3" disabled @change="handleChange" />
  </div>
</template>
`,k=C({__name:"base",setup(f){const t=d(0),i=d(20),e=d(50),s=m=>{console.log("Changed:",m)};return(m,n)=>(h(),c("div",null,[l(a(u),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o)},null,8,["modelValue"]),l(a(u),{modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=o=>i.value=o),min:0,max:200,step:5,onChange:s},null,8,["modelValue"]),l(a(u),{modelValue:e.value,"onUpdate:modelValue":n[2]||(n[2]=o=>e.value=o),disabled:"",onChange:s},null,8,["modelValue"])]))}}),W=JSON.parse('{"title":"Slider 滑块","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider/index.md","filePath":"components/slider/index.md"}'),S={name:"components/slider/index.md"},T=Object.assign(S,{setup(f){const t=d(!0);return(i,e)=>{const s=V("ClientOnly");return h(),c("div",null,[e[1]||(e[1]=r("h1",{id:"slider-滑块",tabindex:"-1"},[p("Slider 滑块 "),r("a",{class:"header-anchor",href:"#slider-滑块","aria-label":'Permalink to "Slider 滑块"'},"​")],-1)),e[2]||(e[2]=r("h2",{id:"基本用法",tabindex:"-1"},[p("基本用法 "),r("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),b(l(a(_),null,null,512),[[g,t.value]]),l(s,null,{default:v(()=>[l(a(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:a(B)},{vue:v(()=>[l(k)]),_:1},8,["vueCode"])]),_:1})])}}});export{W as __pageData,T as default};
