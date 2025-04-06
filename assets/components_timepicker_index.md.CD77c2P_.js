import{aa as a}from"./chunks/theme.uDsgHOqn.js";import{d as k,p as r,c as _,o as w,j as e,G as l,k as s,t as m,_ as b,B as S,a as x,w as g}from"./chunks/framework.BrE8sLAv.js";import{Q as T}from"./chunks/index.CmMjEtxm.js";const D=`<template>
  <div class="time-picker-demo">
    <div class="demo-section">
      <h3>基础用法</h3>
      <div class="flex-row">
        <VerTimePicker v-model="time1" placeholder="请选择时间" />
        <div class="value-display">选中的值: {{ formattedTime(time1) }}</div>
      </div>
    </div>

    <div class="demo-section">
      <h3>隐藏秒选择</h3>
      <div class="flex-row">
        <VerTimePicker
          v-model="time2"
          placeholder="请选择时间"
          :hideSeconds="true"
        />
        <div class="value-display">
          选中的值: {{ formattedTime(time2, true) }}
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>12小时制</h3>
      <div class="flex-row">
        <VerTimePicker
          v-model="time3"
          placeholder="请选择时间"
          :use12Hours="true"
        />
        <div class="value-display">
          选中的值:
          {{
            formattedTime(time3) +
            (time3 ? (time3.getHours() >= 12 ? ' PM' : ' AM') : '')
          }}
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>步长设置</h3>
      <div class="flex-row">
        <VerTimePicker
          v-model="time4"
          placeholder="请选择时间"
          :hourStep="2"
          :minuteStep="15"
          :secondStep="30"
        />
        <div class="value-display">
          <p>小时步长：2，分钟步长：15，秒步长：30</p>
          <p>选中的值: {{ formattedTime(time4) }}</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>禁用状态</h3>
      <div class="flex-row">
        <VerTimePicker v-model="time5" placeholder="禁用状态" disabled />
        <div class="value-display">选中的值: {{ formattedTime(time5) }}</div>
      </div>
    </div>

    <div class="demo-section">
      <h3>不可清除</h3>
      <div class="flex-row">
        <VerTimePicker
          v-model="time6"
          placeholder="不可清除"
          :clearable="false"
        />
        <div class="value-display">选中的值: {{ formattedTime(time6) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerTimePicker } from '@versakit/ui'

// 基础用法
const time1 = ref(new Date())

// 隐藏秒选择
const time2 = ref(new Date())

// 12小时制
const time3 = ref(new Date())

// 步长设置
const time4 = ref(new Date())

// 禁用状态
const time5 = ref(new Date())

// 不可清除
const time6 = ref(new Date())

// 格式化时间显示
const formattedTime = (date: Date | null, hideSeconds = false) => {
  if (!date) return '无'

  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  const second = String(date.getSeconds()).padStart(2, '0')

  return hideSeconds ? \`\${hour}:\${minute}\` : \`\${hour}:\${minute}:\${second}\`
}
<\/script>

<style scoped>
.time-picker-demo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background-color: #ffffff;
}

.flex-row {
  display: flex;
  align-items: center;
  gap: 24px;
}

.value-display {
  margin-top: 8px;
  color: #606266;
  font-size: 14px;
}

h3 {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.size-label {
  font-size: 14px;
  color: #606266;
}

/* 深色系主题样式 (仅作示例) */
:deep([class*='ver-']) {
  --ver-primary-500: #409eff;
}
</style>
`,P={class:"time-picker-demo"},B={class:"demo-section"},C={class:"flex-row"},W={class:"value-display"},z={class:"demo-section"},$={class:"flex-row"},X={class:"value-display"},Z={class:"demo-section"},G={class:"flex-row"},U={class:"value-display"},A={class:"demo-section"},H={class:"flex-row"},M={class:"value-display"},N={class:"demo-section"},J={class:"flex-row"},Y={class:"value-display"},L={class:"demo-section"},O={class:"flex-row"},E={class:"value-display"},I=k({__name:"base",setup(y){const u=r(new Date),i=r(new Date),o=r(new Date),p=r(new Date),v=r(new Date),f=r(new Date),d=(c,n=!1)=>{if(!c)return"无";const t=String(c.getHours()).padStart(2,"0"),h=String(c.getMinutes()).padStart(2,"0"),V=String(c.getSeconds()).padStart(2,"0");return n?`${t}:${h}`:`${t}:${h}:${V}`};return(c,n)=>(w(),_("div",P,[e("div",B,[n[6]||(n[6]=e("h3",null,"基础用法",-1)),e("div",C,[l(s(a),{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=t=>u.value=t),placeholder:"请选择时间"},null,8,["modelValue"]),e("div",W,"选中的值: "+m(d(u.value)),1)])]),e("div",z,[n[7]||(n[7]=e("h3",null,"隐藏秒选择",-1)),e("div",$,[l(s(a),{modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=t=>i.value=t),placeholder:"请选择时间",hideSeconds:!0},null,8,["modelValue"]),e("div",X," 选中的值: "+m(d(i.value,!0)),1)])]),e("div",Z,[n[8]||(n[8]=e("h3",null,"12小时制",-1)),e("div",G,[l(s(a),{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=t=>o.value=t),placeholder:"请选择时间",use12Hours:!0},null,8,["modelValue"]),e("div",U," 选中的值: "+m(d(o.value)+(o.value?o.value.getHours()>=12?" PM":" AM":"")),1)])]),e("div",A,[n[10]||(n[10]=e("h3",null,"步长设置",-1)),e("div",H,[l(s(a),{modelValue:p.value,"onUpdate:modelValue":n[3]||(n[3]=t=>p.value=t),placeholder:"请选择时间",hourStep:2,minuteStep:15,secondStep:30},null,8,["modelValue"]),e("div",M,[n[9]||(n[9]=e("p",null,"小时步长：2，分钟步长：15，秒步长：30",-1)),e("p",null,"选中的值: "+m(d(p.value)),1)])])]),e("div",N,[n[11]||(n[11]=e("h3",null,"禁用状态",-1)),e("div",J,[l(s(a),{modelValue:v.value,"onUpdate:modelValue":n[4]||(n[4]=t=>v.value=t),placeholder:"禁用状态",disabled:""},null,8,["modelValue"]),e("div",Y,"选中的值: "+m(d(v.value)),1)])]),e("div",L,[n[12]||(n[12]=e("h3",null,"不可清除",-1)),e("div",O,[l(s(a),{modelValue:f.value,"onUpdate:modelValue":n[5]||(n[5]=t=>f.value=t),placeholder:"不可清除",clearable:!1},null,8,["modelValue"]),e("div",E,"选中的值: "+m(d(f.value)),1)])])]))}}),j=b(I,[["__scopeId","data-v-b011b7d3"]]),R=JSON.parse('{"title":"Time Picker 时间选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/timepicker/index.md","filePath":"components/timepicker/index.md"}'),q={name:"components/timepicker/index.md"},ee=Object.assign(q,{setup(y){return(u,i)=>{const o=S("ClientOnly");return w(),_("div",null,[i[0]||(i[0]=e("h1",{id:"time-picker-时间选择器",tabindex:"-1"},[x("Time Picker 时间选择器 "),e("a",{class:"header-anchor",href:"#time-picker-时间选择器","aria-label":'Permalink to "Time Picker 时间选择器"'},"​")],-1)),i[1]||(i[1]=e("h2",{id:"基本使用",tabindex:"-1"},[x("基本使用 "),e("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),l(o,null,{default:g(()=>[l(s(T),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(D)},{vue:g(()=>[l(j)]),_:1},8,["vueCode"])]),_:1})])}}});export{R as __pageData,ee as default};
