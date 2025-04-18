import{d as c,p,b as D,o as V,w as a,G as l,k as o,a as i,j as d,_ as h,c as k,B as y,a5 as f,aw as C,ad as v}from"./chunks/framework.Dr5ddTBW.js";import{k as s,o as m,Y as W,J as K}from"./chunks/theme.1WR6ZKfk.js";import{d as g,f as B}from"./chunks/index.Cy4GuBY3.js";const Z=`<template>
  <VKRow>
    <VKButton @click="dialogVisible = true">点击打开对话框</VKButton>

    <VKDialog v-model="dialogVisible" closeIcon="ep:close">
      <template #title>
        <div class="title">
          <h4>This is a custom header!</h4>
        </div>
      </template>
    </VKDialog>
  </VKRow>
</template>

<script lang="ts" setup>
import { VKRow, VKButton, VKDialog } from '@versakit/ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
<\/script>
`,x=c({__name:"header",setup(b){const n=p(!1);return(r,t)=>(V(),D(o(W),null,{default:a(()=>[l(o(s),{onClick:t[0]||(t[0]=e=>n.value=!0)},{default:a(()=>t[2]||(t[2]=[i("点击打开对话框")])),_:1}),l(o(m),{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e),closeIcon:"ep:close"},{title:a(()=>t[3]||(t[3]=[d("div",{class:"title"},[d("h4",null,"This is a custom header!")],-1)])),_:1},8,["modelValue"])]),_:1}))}}),w=`<template>
  <VKRow>
    <VKButton @click="dialogVisible = true">点击打开对话框</VKButton>
    <VKButton @click="dialogFromVisible = true">点击打开对话框</VKButton>
    <!-- 普通 -->
    <VKDialog v-model="dialogVisible" title="测试">
      <p>这是一个信息</p>
    </VKDialog>
    <!-- 表单 -->
    <VKDialog v-model="dialogFromVisible" title="表单" closeIcon="ep:close">
      <div>
        <VKInput />
      </div>
      <template #footer>
        <VKButton>取消</VKButton>
        <VKButton type="primary" @click="dialogFromVisible = false">
          确定
        </VKButton>
      </template>
    </VKDialog>
  </VKRow>
</template>

<script lang="ts" setup>
import { VKRow, VKButton, VKDialog, VKInput } from '@versakit/ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
const dialogFromVisible = ref(false)
<\/script>

<style scoped>
.t-dialog_footer .t-btn {
  margin-right: 20px;
}

.t-btn + .t-btn {
  margin: 0px 10px;
}
</style>
`,A=c({__name:"content",setup(b){const n=p(!1),r=p(!1);return(t,e)=>(V(),D(o(W),null,{default:a(()=>[l(o(s),{onClick:e[0]||(e[0]=u=>n.value=!0)},{default:a(()=>e[5]||(e[5]=[i("点击打开对话框")])),_:1}),l(o(s),{onClick:e[1]||(e[1]=u=>r.value=!0)},{default:a(()=>e[6]||(e[6]=[i("点击打开对话框")])),_:1}),l(o(m),{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=u=>n.value=u),title:"测试"},{default:a(()=>e[7]||(e[7]=[d("p",null,"这是一个信息",-1)])),_:1},8,["modelValue"]),l(o(m),{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=u=>r.value=u),title:"表单",closeIcon:"ep:close"},{footer:a(()=>[l(o(s),null,{default:a(()=>e[8]||(e[8]=[i("取消")])),_:1}),l(o(s),{type:"primary",onClick:e[3]||(e[3]=u=>r.value=!1)},{default:a(()=>e[9]||(e[9]=[i(" 确定 ")])),_:1})]),default:a(()=>[d("div",null,[l(o(K))])]),_:1},8,["modelValue"])]),_:1}))}}),G=h(A,[["__scopeId","data-v-06eca9bf"]]),T=`<template>
  <div>
    <VKButton @click="dialogVisible = true">点击打开对话框</VKButton>

    <VKDialog v-model="dialogVisible" closeIcon="ep:close">
      <span>这是一段信息</span>
      <template #footer>
        <VKButton>取消</VKButton>
        <VKButton type="primary" @click="dialogVisible = false">确定</VKButton>
      </template>
    </VKDialog>
  </div>
</template>

<script lang="ts" setup>
import { VKButton, VKDialog } from '@versakit/ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
<\/script>

<style scoped>
.ver-dialog_footer .ver-btn {
  margin-right: 20px;
}
</style>
`,Y=c({__name:"base",setup(b){const n=p(!1);return(r,t)=>(V(),k("div",null,[l(o(s),{onClick:t[0]||(t[0]=e=>n.value=!0)},{default:a(()=>t[3]||(t[3]=[i("点击打开对话框")])),_:1}),l(o(m),{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=e=>n.value=e),closeIcon:"ep:close"},{footer:a(()=>[l(o(s),null,{default:a(()=>t[4]||(t[4]=[i("取消")])),_:1}),l(o(s),{type:"primary",onClick:t[1]||(t[1]=e=>n.value=!1)},{default:a(()=>t[5]||(t[5]=[i("确定")])),_:1})]),default:a(()=>[t[6]||(t[6]=d("span",null,"这是一段信息",-1))]),_:1},8,["modelValue"])]))}}),_=h(Y,[["__scopeId","data-v-56358250"]]),q=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}'),z={name:"components/dialog/index.md"},J=Object.assign(z,{setup(b){const n=p(!0);return(r,t)=>{const e=y("ClientOnly");return V(),k("div",null,[t[3]||(t[3]=d("h1",{id:"dialog-对话框",tabindex:"-1"},[i("Dialog 对话框 "),d("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),t[4]||(t[4]=d("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t[5]||(t[5]=d("p",null,[i("在保留当前页面状态的情况下，告知用户并承载相关操作。 绑定 "),d("code",null,"v-model"),i(" 到一个 "),d("code",null,"Boolean"),i(" 类型的变量。")],-1)),f(l(o(g),null,null,512),[[v,n.value]]),l(e,null,{default:a(()=>[l(o(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:o(T)},{vue:a(()=>[l(_)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=d("h2",{id:"自定义内容",tabindex:"-1"},[i("自定义内容 "),d("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),t[7]||(t[7]=d("p",null,"对话框的内容可以是任何东西。",-1)),f(l(o(g),null,null,512),[[v,n.value]]),l(e,null,{default:a(()=>[l(o(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{n.value=!1}),vueCode:o(w)},{vue:a(()=>[l(G)]),_:1},8,["vueCode"])]),_:1}),t[8]||(t[8]=d("h2",{id:"自定义标题",tabindex:"-1"},[i("自定义标题 "),d("a",{class:"header-anchor",href:"#自定义标题","aria-label":'Permalink to "自定义标题"'},"​")],-1)),t[9]||(t[9]=d("p",null,[i("可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 "),d("code",null,"title"),i(" 属性来指定哪些元素应该读取为对话框标题。")],-1)),f(l(o(g),null,null,512),[[v,n.value]]),l(e,null,{default:a(()=>[l(o(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{n.value=!1}),vueCode:o(Z)},{vue:a(()=>[l(x)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=C('<h2 id="dialog-api" tabindex="-1">Dialog API <a class="header-anchor" href="#dialog-api" aria-label="Permalink to &quot;Dialog API&quot;">​</a></h2><h3 id="dialog-属性" tabindex="-1">Dialog 属性 <a class="header-anchor" href="#dialog-属性" aria-label="Permalink to &quot;Dialog 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>width</code></td><td>dialog 的宽度</td><td><code>string</code></td><td>30%</td></tr><tr><td><code>top</code></td><td>距顶部距离</td><td><code>string</code></td><td>15vh</td></tr></tbody></table><h3 id="dialog-插槽" tabindex="-1">Dialog 插槽 <a class="header-anchor" href="#dialog-插槽" aria-label="Permalink to &quot;Dialog 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>title</code></td><td>dialog 的标题部分</td></tr><tr><td><code>footer</code></td><td>dialog 的 <code>footer</code> 部分</td></tr></tbody></table>',5))])}}});export{q as __pageData,J as default};
