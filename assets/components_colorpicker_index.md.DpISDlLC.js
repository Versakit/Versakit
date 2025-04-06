import{W as t}from"./chunks/theme.uDsgHOqn.js";import{_ as P,p as a,c as k,o as _,j as o,G as s,k as l,t as i,B as V,a as h,w as C}from"./chunks/framework.BrE8sLAv.js";import{Q as X}from"./chunks/index.CmMjEtxm.js";const w=`<template>
  <div class="color-picker-demo">
    <!-- 基础用法 -->
    <div class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-content">
        <VerColorPicker v-model:value="color1" />
        <div class="desc">
          <p class="title">基本颜色选择</p>
          <p class="value">选中值: {{ color1 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 显示透明度选择 -->
    <div class="demo-section">
      <h3>透明度选择</h3>
      <div class="demo-content">
        <VerColorPicker
          v-model:value="color2"
          :show-alpha="true"
          format="rgb"
        />
        <div class="desc">
          <p class="title">支持透明度调节</p>
          <p>格式: RGBA</p>
          <p class="value">选中值: {{ color2 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 不同格式 -->
    <div class="demo-section">
      <h3>颜色格式</h3>
      <div class="demo-content">
        <div class="format-group">
          <div class="format-item">
            <p>HEX 格式</p>
            <VerColorPicker v-model:value="color3hex" format="hex" />
            <p class="value">{{ color3hex }}</p>
          </div>
          <div class="format-item">
            <p>RGB 格式</p>
            <VerColorPicker v-model:value="color3rgb" format="rgb" />
            <p class="value">{{ color3rgb }}</p>
          </div>
          <div class="format-item">
            <p>HSL 格式</p>
            <VerColorPicker v-model:value="color3hsl" format="hsl" />
            <p class="value">{{ color3hsl }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 尺寸设置 -->
    <div class="demo-section">
      <h3>尺寸调整</h3>
      <div class="demo-content">
        <div class="size-group">
          <div class="size-item">
            <VerColorPicker v-model:value="color4" :size="16" />
            <span>小尺寸 (16px)</span>
          </div>
          <div class="size-item">
            <VerColorPicker v-model:value="color4" :size="24" />
            <span>中尺寸 (24px)</span>
          </div>
          <div class="size-item">
            <VerColorPicker v-model:value="color4" :size="36" />
            <span>大尺寸 (36px)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 自定义颜色 -->
    <div class="demo-section">
      <h3>自定义预设颜色</h3>
      <div class="demo-content">
        <VerColorPicker v-model:value="color5" :colors="customColors" />
        <div class="desc">
          <p class="title">自定义预设颜色面板</p>
          <p>可以传入自定义的颜色数组作为预设选项</p>
          <p class="value">选中值: {{ color5 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 添加/删除颜色 -->
    <div class="demo-section">
      <h3>添加删除颜色</h3>
      <div class="demo-content">
        <VerColorPicker
          v-model:value="color6"
          :add-color="true"
          :delete-color="true"
        />
        <div class="desc">
          <p class="title">允许添加/删除颜色</p>
          <p>支持添加自定义颜色到面板，也可删除已有颜色</p>
          <p class="value">选中值: {{ color6 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 格式选项 -->
    <div class="demo-section">
      <h3>格式选项</h3>
      <div class="demo-content">
        <VerColorPicker
          v-model:value="color7"
          :format-options="['rgb', 'hex', 'hsl']"
          @format-change="onFormatChange"
        />
        <div class="desc">
          <p class="title">格式切换</p>
          <p>允许在不同格式之间切换</p>
          <p>当前格式: {{ currentFormat }}</p>
          <p class="value">选中值: {{ color7 || '未选择' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VerColorPicker } from '@versakit/ui'

// 基础用法
const color1 = ref('#1e90ff')

// 透明度选择
const color2 = ref('rgba(46, 144, 255, 0.6)')

// 不同格式
const color3hex = ref('#1e90ff')
const color3rgb = ref('rgb(46, 144, 255)')
const color3hsl = ref('hsl(210, 100%, 59%)')

// 尺寸调整
const color4 = ref('#1e90ff')

// 自定义颜色
const color5 = ref('#1e90ff')
const customColors = [
  '#f44336', // 红色
  '#e91e63', // 粉红色
  '#9c27b0', // 紫色
  '#673ab7', // 深紫色
  '#3f51b5', // 靛蓝色
  '#2196f3', // 蓝色
  '#03a9f4', // 浅蓝色
  '#00bcd4', // 青色
  '#009688', // 蓝绿色
  '#4caf50', // 绿色
  '#8bc34a', // 浅绿色
  '#cddc39', // 酸橙色
  '#ffeb3b', // 黄色
  '#ffc107', // 琥珀色
  '#ff9800', // 橙色
  '#ff5722', // 深橙色
]

// 添加删除颜色
const color6 = ref('#1e90ff')

// 格式选项
const color7 = ref('#1e90ff')
const currentFormat = ref('hex')

const onFormatChange = (format) => {
  currentFormat.value = format
}
<\/script>

<style lang="scss" scoped>
.color-picker-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.demo-section {
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #ebeef5;

  h3 {
    margin: 0 0 16px 0;
    font-size: 16px;
    font-weight: 500;
    color: #303133;
  }
}

.demo-content {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.desc {
  flex: 1;
  font-size: 14px;
  color: #606266;
  line-height: 1.6;

  p {
    margin: 4px 0;
  }

  .title {
    font-weight: 500;
    color: #303133;
  }

  .value {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px dashed #e4e7ed;
    color: #409eff;
    font-family: monospace;
  }
}

.format-group,
.size-group {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
}

.format-item,
.size-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 120px;

  p {
    margin: 4px 0;
    font-size: 14px;
    color: #606266;
  }

  .value {
    color: #409eff;
    font-family: monospace;
    font-size: 12px;
  }
}

.size-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  span {
    margin-top: 8px;
    font-size: 12px;
    color: #606266;
  }
}
</style>
`,W={class:"color-picker-demo"},Z={class:"demo-section"},N={class:"demo-content"},U={class:"desc"},S={class:"value"},D={class:"demo-section"},F={class:"demo-content"},A={class:"desc"},Y={class:"value"},G={class:"demo-section"},H={class:"demo-content"},J={class:"format-group"},I={class:"format-item"},O={class:"value"},T={class:"format-item"},R={class:"value"},L={class:"format-item"},E={class:"value"},M={class:"demo-section"},j={class:"demo-content"},Q={class:"size-group"},$={class:"size-item"},q={class:"size-item"},K={class:"size-item"},nn={class:"demo-section"},on={class:"demo-content"},en={class:"desc"},sn={class:"value"},ln={class:"demo-section"},tn={class:"demo-content"},an={class:"desc"},rn={class:"value"},dn={class:"demo-section"},cn={class:"demo-content"},vn={class:"desc"},pn={class:"value"},un={__name:"base",setup(z){const v=a("#1e90ff"),r=a("rgba(46, 144, 255, 0.6)"),c=a("#1e90ff"),p=a("rgb(46, 144, 255)"),u=a("hsl(210, 100%, 59%)"),d=a("#1e90ff"),m=a("#1e90ff"),y=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722"],f=a("#1e90ff"),x=a("#1e90ff"),b=a("hex"),B=g=>{b.value=g};return(g,n)=>(_(),k("div",W,[o("div",Z,[n[12]||(n[12]=o("h3",null,"基础用法",-1)),o("div",N,[s(l(t),{value:v.value,"onUpdate:value":n[0]||(n[0]=e=>v.value=e)},null,8,["value"]),o("div",U,[n[11]||(n[11]=o("p",{class:"title"},"基本颜色选择",-1)),o("p",S,"选中值: "+i(v.value||"未选择"),1)])])]),o("div",D,[n[15]||(n[15]=o("h3",null,"透明度选择",-1)),o("div",F,[s(l(t),{value:r.value,"onUpdate:value":n[1]||(n[1]=e=>r.value=e),"show-alpha":!0,format:"rgb"},null,8,["value"]),o("div",A,[n[13]||(n[13]=o("p",{class:"title"},"支持透明度调节",-1)),n[14]||(n[14]=o("p",null,"格式: RGBA",-1)),o("p",Y,"选中值: "+i(r.value||"未选择"),1)])])]),o("div",G,[n[19]||(n[19]=o("h3",null,"颜色格式",-1)),o("div",H,[o("div",J,[o("div",I,[n[16]||(n[16]=o("p",null,"HEX 格式",-1)),s(l(t),{value:c.value,"onUpdate:value":n[2]||(n[2]=e=>c.value=e),format:"hex"},null,8,["value"]),o("p",O,i(c.value),1)]),o("div",T,[n[17]||(n[17]=o("p",null,"RGB 格式",-1)),s(l(t),{value:p.value,"onUpdate:value":n[3]||(n[3]=e=>p.value=e),format:"rgb"},null,8,["value"]),o("p",R,i(p.value),1)]),o("div",L,[n[18]||(n[18]=o("p",null,"HSL 格式",-1)),s(l(t),{value:u.value,"onUpdate:value":n[4]||(n[4]=e=>u.value=e),format:"hsl"},null,8,["value"]),o("p",E,i(u.value),1)])])])]),o("div",M,[n[23]||(n[23]=o("h3",null,"尺寸调整",-1)),o("div",j,[o("div",Q,[o("div",$,[s(l(t),{value:d.value,"onUpdate:value":n[5]||(n[5]=e=>d.value=e),size:16},null,8,["value"]),n[20]||(n[20]=o("span",null,"小尺寸 (16px)",-1))]),o("div",q,[s(l(t),{value:d.value,"onUpdate:value":n[6]||(n[6]=e=>d.value=e),size:24},null,8,["value"]),n[21]||(n[21]=o("span",null,"中尺寸 (24px)",-1))]),o("div",K,[s(l(t),{value:d.value,"onUpdate:value":n[7]||(n[7]=e=>d.value=e),size:36},null,8,["value"]),n[22]||(n[22]=o("span",null,"大尺寸 (36px)",-1))])])])]),o("div",nn,[n[26]||(n[26]=o("h3",null,"自定义预设颜色",-1)),o("div",on,[s(l(t),{value:m.value,"onUpdate:value":n[8]||(n[8]=e=>m.value=e),colors:y},null,8,["value"]),o("div",en,[n[24]||(n[24]=o("p",{class:"title"},"自定义预设颜色面板",-1)),n[25]||(n[25]=o("p",null,"可以传入自定义的颜色数组作为预设选项",-1)),o("p",sn,"选中值: "+i(m.value||"未选择"),1)])])]),o("div",ln,[n[29]||(n[29]=o("h3",null,"添加删除颜色",-1)),o("div",tn,[s(l(t),{value:f.value,"onUpdate:value":n[9]||(n[9]=e=>f.value=e),"add-color":!0,"delete-color":!0},null,8,["value"]),o("div",an,[n[27]||(n[27]=o("p",{class:"title"},"允许添加/删除颜色",-1)),n[28]||(n[28]=o("p",null,"支持添加自定义颜色到面板，也可删除已有颜色",-1)),o("p",rn,"选中值: "+i(f.value||"未选择"),1)])])]),o("div",dn,[n[32]||(n[32]=o("h3",null,"格式选项",-1)),o("div",cn,[s(l(t),{value:x.value,"onUpdate:value":n[10]||(n[10]=e=>x.value=e),"format-options":["rgb","hex","hsl"],onFormatChange:B},null,8,["value"]),o("div",vn,[n[30]||(n[30]=o("p",{class:"title"},"格式切换",-1)),n[31]||(n[31]=o("p",null,"允许在不同格式之间切换",-1)),o("p",null,"当前格式: "+i(b.value),1),o("p",pn,"选中值: "+i(x.value||"未选择"),1)])])])]))}},mn=P(un,[["__scopeId","data-v-65524ca1"]]),hn=JSON.parse('{"title":"Color Picker 取色器","description":"","frontmatter":{},"headers":[],"relativePath":"components/colorpicker/index.md","filePath":"components/colorpicker/index.md"}'),fn={name:"components/colorpicker/index.md"},Cn=Object.assign(fn,{setup(z){return(v,r)=>{const c=V("ClientOnly");return _(),k("div",null,[r[0]||(r[0]=o("h1",{id:"color-picker-取色器",tabindex:"-1"},[h("Color Picker 取色器 "),o("a",{class:"header-anchor",href:"#color-picker-取色器","aria-label":'Permalink to "Color Picker 取色器"'},"​")],-1)),r[1]||(r[1]=o("h2",{id:"基本使用",tabindex:"-1"},[h("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),s(c,null,{default:C(()=>[s(l(X),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(w)},{vue:C(()=>[s(mn)]),_:1},8,["vueCode"])]),_:1})])}}});export{hn as __pageData,Cn as default};
