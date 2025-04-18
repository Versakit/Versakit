import{d as p,p as v,az as b,c as i,o as a,j as n,a5 as l,a as d,_ as f,B as _,G as o,ad as h,k as r,w as m}from"./chunks/framework.Dr5ddTBW.js";import{d as g,f as x}from"./chunks/index.Cy4GuBY3.js";const C=`<script setup lang="ts">
import { ref } from 'vue'

const numbers = ref({
  small: 100,
  medium: 1000,
  large: 10000,
  huge: 100000,
})
<\/script>

<template>
  <div class="increase-demo">
    <h3>数字增长动画</h3>
    <div class="demo-content">
      <div class="demo-item">
        <div class="label">小数值</div>
        <div class="number" v-increase="numbers.small">0</div>
      </div>
      <div class="demo-item">
        <div class="label">中数值</div>
        <div class="number" v-increase="numbers.medium">0</div>
      </div>
      <div class="demo-item">
        <div class="label">大数值</div>
        <div class="number" v-increase="numbers.large">0</div>
      </div>
      <div class="demo-item">
        <div class="label">超大数值</div>
        <div class="number" v-increase="numbers.huge">0</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.increase-demo {
  padding: 20px;

  h3 {
    margin-bottom: 20px;
    color: #333;
  }
}

.demo-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.demo-item {
  padding: 20px;
  background: #f5f7fa;
  border-radius: 8px;
  text-align: center;

  .label {
    margin-bottom: 10px;
    color: #666;
    font-size: 14px;
  }

  .number {
    font-size: 24px;
    font-weight: bold;
    color: #409eff;
  }
}
</style>
`,W={class:"increase-demo"},Z={class:"demo-content"},y={class:"demo-item"},B={class:"number"},X={class:"demo-item"},k={class:"number"},z={class:"demo-item"},D={class:"number"},w={class:"demo-item"},A={class:"number"},V=p({__name:"index",setup(c){const s=v({small:100,medium:1e3,large:1e4,huge:1e5});return(u,e)=>{const t=b("increase");return a(),i("div",W,[e[8]||(e[8]=n("h3",null,"数字增长动画",-1)),n("div",Z,[n("div",y,[e[1]||(e[1]=n("div",{class:"label"},"小数值",-1)),l((a(),i("div",B,e[0]||(e[0]=[d("0")]))),[[t,s.value.small]])]),n("div",X,[e[3]||(e[3]=n("div",{class:"label"},"中数值",-1)),l((a(),i("div",k,e[2]||(e[2]=[d("0")]))),[[t,s.value.medium]])]),n("div",z,[e[5]||(e[5]=n("div",{class:"label"},"大数值",-1)),l((a(),i("div",D,e[4]||(e[4]=[d("0")]))),[[t,s.value.large]])]),n("div",w,[e[7]||(e[7]=n("div",{class:"label"},"超大数值",-1)),l((a(),i("div",A,e[6]||(e[6]=[d("0")]))),[[t,s.value.huge]])])])])}}}),j=f(V,[["__scopeId","data-v-6f854f1f"]]),E=JSON.parse('{"title":"数字动画","description":"","frontmatter":{},"headers":[],"relativePath":"directives/increase/index.md","filePath":"directives/increase/index.md"}'),N={name:"directives/increase/index.md"},G=Object.assign(N,{setup(c){const s=v(!0);return(u,e)=>{const t=_("ClientOnly");return a(),i("div",null,[e[1]||(e[1]=n("h1",{id:"数字动画",tabindex:"-1"},[d("数字动画 "),n("a",{class:"header-anchor",href:"#数字动画","aria-label":'Permalink to "数字动画"'},"​")],-1)),e[2]||(e[2]=n("h2",{id:"基本使用",tabindex:"-1"},[d("基本使用 "),n("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),l(o(r(g),null,null,512),[[h,s.value]]),o(t,null,{default:m(()=>[o(r(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:r(C)},{vue:m(()=>[o(j)]),_:1},8,["vueCode"])]),_:1})])}}});export{E as __pageData,G as default};
