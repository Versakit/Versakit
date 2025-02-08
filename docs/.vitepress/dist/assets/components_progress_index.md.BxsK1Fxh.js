import { F as s, p as V } from './chunks/theme.CWxU7uh8.js'
import {
  d as m,
  p as U,
  o as p,
  c as J,
  G as e,
  k as r,
  j as l,
  _ as T,
  w as a,
  a as i,
  B as y,
} from './chunks/framework.Z42t_U4q.js'
import { Q as d } from './chunks/index.DEUECMle.js'
const C = `<template>\r
  <div>\r
    <VerProgress :animation="true" :percent />\r
\r
    <div>\r
      <VerProgress :animation="true" type="circle" :percent />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerProgress } from '@versakit/ui'\r
\r
const percent = ref(0)\r
\r
setInterval(() => {\r
  percent.value = percent.value >= 100 ? 0 : percent.value + 10\r
}, 1000)\r
<\/script>\r
`,
  g = m({
    __name: 'animation',
    setup(u) {
      const n = U(0)
      return (
        setInterval(() => {
          n.value = n.value >= 100 ? 0 : n.value + 10
        }, 1e3),
        (t, o) => (
          p(),
          J('div', null, [
            e(r(s), { animation: !0, percent: n.value }, null, 8, ['percent']),
            l('div', null, [
              e(
                r(s),
                { animation: !0, type: 'circle', percent: n.value },
                null,
                8,
                ['percent'],
              ),
            ]),
          ])
        )
      )
    },
  }),
  f = `<template>\r
  <div>\r
    <VerProgress type="circle" :percent />\r
    <VerProgress type="circle" :percent status="success" />\r
    <VerProgress type="circle" :percent status="error" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerProgress } from '@versakit/ui'\r
\r
const percent = ref(75)\r
<\/script>\r
\r
<style scoped>\r
.progress {\r
  margin: 20px;\r
}\r
</style>\r
`,
  B = m({
    __name: 'circle',
    setup(u) {
      const n = U(75)
      return (t, o) => (
        p(),
        J('div', null, [
          e(r(s), { type: 'circle', percent: n.value }, null, 8, ['percent']),
          e(
            r(s),
            { type: 'circle', percent: n.value, status: 'success' },
            null,
            8,
            ['percent'],
          ),
          e(
            r(s),
            { type: 'circle', percent: n.value, status: 'error' },
            null,
            8,
            ['percent'],
          ),
        ])
      )
    },
  }),
  h = T(B, [['__scopeId', 'data-v-6da9d0bd']]),
  S = `<template>\r
  <div>\r
    <VerProgress :percent />\r
    <VerProgress :percent status="success" />\r
    <VerProgress :percent status="error" />\r
\r
    <div\r
      style="\r
        display: flex;\r
        justify-content: center;\r
        align-items: center;\r
        flex-direction: column;\r
      "\r
    >\r
      <VerProgress :percent="value" />\r
      <div style="display: flex; justify-content: space-around">\r
        <VerButton @click="value++" type="success">+</VerButton>\r
        <VerButton @click="value--" type="error">-</VerButton>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerProgress, VerButton } from '@versakit/ui'\r
\r
const percent = ref(75)\r
const value = ref(0)\r
<\/script>\r
\r
<style scoped>\r
.progress {\r
  margin: 20px;\r
}\r
</style>\r
`,
  b = {
    style: {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'flex-direction': 'column',
    },
  },
  F = { style: { display: 'flex', 'justify-content': 'space-around' } },
  N = m({
    __name: 'base',
    setup(u) {
      const n = U(75),
        t = U(0)
      return (o, c) => (
        p(),
        J('div', null, [
          e(r(s), { percent: n.value }, null, 8, ['percent']),
          e(r(s), { percent: n.value, status: 'success' }, null, 8, [
            'percent',
          ]),
          e(r(s), { percent: n.value, status: 'error' }, null, 8, ['percent']),
          l('div', b, [
            e(r(s), { percent: t.value }, null, 8, ['percent']),
            l('div', F, [
              e(
                r(V),
                { onClick: c[0] || (c[0] = (v) => t.value++), type: 'success' },
                { default: a(() => c[2] || (c[2] = [i('+')])), _: 1 },
              ),
              e(
                r(V),
                { onClick: c[1] || (c[1] = (v) => t.value--), type: 'error' },
                { default: a(() => c[3] || (c[3] = [i('-')])), _: 1 },
              ),
            ]),
          ]),
        ])
      )
    },
  }),
  x = T(N, [['__scopeId', 'data-v-cf2d8b16']]),
  k = JSON.parse(
    '{"title":"Progress 进度条","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress/index.md","filePath":"components/progress/index.md"}',
  ),
  O = { name: 'components/progress/index.md' },
  L = Object.assign(O, {
    setup(u) {
      return (n, t) => {
        const o = y('ClientOnly')
        return (
          p(),
          J('div', null, [
            t[0] ||
              (t[0] = l(
                'h1',
                { id: 'progress-进度条', tabindex: '-1' },
                [
                  i('Progress 进度条 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#progress-进度条',
                      'aria-label': 'Permalink to "Progress 进度条"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[1] ||
              (t[1] = l(
                'p',
                null,
                '用于展示操作进度，告知用户当前状态和预期。',
                -1,
              )),
            t[2] ||
              (t[2] = l(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  i('基本使用 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基本使用',
                      'aria-label': 'Permalink to "基本使用"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(o, null, {
              default: a(() => [
                e(
                  r(d),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    theme: '',
                    lightTheme: '',
                    darkTheme: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: r(S),
                  },
                  { vue: a(() => [e(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[3] ||
              (t[3] = l(
                'h2',
                { id: '环形进度条', tabindex: '-1' },
                [
                  i('环形进度条 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#环形进度条',
                      'aria-label': 'Permalink to "环形进度条"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(o, null, {
              default: a(() => [
                e(
                  r(d),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    theme: '',
                    lightTheme: '',
                    darkTheme: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: r(f),
                  },
                  { vue: a(() => [e(h)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[4] ||
              (t[4] = l(
                'h2',
                { id: '动画', tabindex: '-1' },
                [
                  i('动画 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#动画',
                      'aria-label': 'Permalink to "动画"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(o, null, {
              default: a(() => [
                e(
                  r(d),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    theme: '',
                    lightTheme: '',
                    darkTheme: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: r(C),
                  },
                  { vue: a(() => [e(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
          ])
        )
      }
    },
  })
export { k as __pageData, L as default }
