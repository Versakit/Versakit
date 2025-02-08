import { f as J, Q as m } from './chunks/theme.CWxU7uh8.js'
import {
  d as p,
  o as a,
  b as T,
  w as r,
  G as t,
  a as n,
  k as s,
  _ as b,
  c as k,
  j as e,
  B as o,
} from './chunks/framework.Z42t_U4q.js'
import { Q as u } from './chunks/index.DEUECMle.js'
const f = `<template>\r
  <ver-row>\r
    <ver-link class="mx4" disabled>default</ver-link>\r
    <ver-link class="mx4" disabled type="primary">primary</ver-link>\r
    <ver-link class="mx4" disabled type="success">success</ver-link>\r
    <ver-link class="mx4" disabled type="info">info</ver-link>\r
    <ver-link class="mx4" disabled type="warning">warning</ver-link>\r
    <ver-link class="mx4" disabled type="error">danger</ver-link>\r
  </ver-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerLink } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.mx4 {\r
  margin: 0px 8px;\r
}\r
</style>\r
`,
  g = p({
    __name: 'disable',
    setup(U) {
      return (i, l) => (
        a(),
        T(s(m), null, {
          default: r(() => [
            t(
              s(J),
              { class: 'mx4', disabled: '' },
              { default: r(() => l[0] || (l[0] = [n('default')])), _: 1 },
            ),
            t(
              s(J),
              { class: 'mx4', disabled: '', type: 'primary' },
              { default: r(() => l[1] || (l[1] = [n('primary')])), _: 1 },
            ),
            t(
              s(J),
              { class: 'mx4', disabled: '', type: 'success' },
              { default: r(() => l[2] || (l[2] = [n('success')])), _: 1 },
            ),
            t(
              s(J),
              { class: 'mx4', disabled: '', type: 'info' },
              { default: r(() => l[3] || (l[3] = [n('info')])), _: 1 },
            ),
            t(
              s(J),
              { class: 'mx4', disabled: '', type: 'warning' },
              { default: r(() => l[4] || (l[4] = [n('warning')])), _: 1 },
            ),
            t(
              s(J),
              { class: 'mx4', disabled: '', type: 'error' },
              { default: r(() => l[5] || (l[5] = [n('danger')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  w = b(g, [['__scopeId', 'data-v-b178debd']]),
  c = `<script setup lang="ts">\r
import { VerRow, VerLink } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <ver-link class="mx4" href="https://www.baidu.com/index.html">\r
      default\r
    </ver-link>\r
    <ver-link class="mx4" type="primary">primary</ver-link>\r
    <ver-link class="mx4" type="success">success</ver-link>\r
    <ver-link class="mx4" type="info">info</ver-link>\r
    <ver-link class="mx4" type="warn">warning</ver-link>\r
    <ver-link class="mx4" type="error">danger</ver-link>\r
  </ver-row>\r
</template>\r
\r
<style scoped>\r
.mx4 {\r
  margin: 0px 8px;\r
}\r
</style>\r
`,
  v = p({
    __name: 'base',
    setup(U) {
      return (i, l) => (
        a(),
        T(s(m), null, {
          default: r(() => [
            t(
              s(J),
              { class: 'mx4', href: 'https://www.baidu.com/index.html' },
              { default: r(() => l[0] || (l[0] = [n(' default ')])), _: 1 },
            ),
            t(
              s(J),
              { class: 'mx4', type: 'primary' },
              { default: r(() => l[1] || (l[1] = [n('primary')])), _: 1 },
            ),
            t(
              s(J),
              { class: 'mx4', type: 'success' },
              { default: r(() => l[2] || (l[2] = [n('success')])), _: 1 },
            ),
            t(
              s(J),
              { class: 'mx4', type: 'info' },
              { default: r(() => l[3] || (l[3] = [n('info')])), _: 1 },
            ),
            t(
              s(J),
              { class: 'mx4', type: 'warn' },
              { default: r(() => l[4] || (l[4] = [n('warning')])), _: 1 },
            ),
            t(
              s(J),
              { class: 'mx4', type: 'error' },
              { default: r(() => l[5] || (l[5] = [n('danger')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  y = b(v, [['__scopeId', 'data-v-09e900cc']]),
  B = { tabindex: '0' },
  C = JSON.parse(
    '{"title":"Link 链接","description":"","frontmatter":{},"headers":[],"relativePath":"components/link/index.md","filePath":"components/link/index.md"}',
  ),
  D = { name: 'components/link/index.md' },
  L = Object.assign(D, {
    setup(U) {
      return (i, l) => {
        const d = o('ClientOnly'),
          x = o('Tool')
        return (
          a(),
          k('div', null, [
            l[7] ||
              (l[7] = e(
                'h1',
                { id: 'link-链接', tabindex: '-1' },
                [
                  n('Link 链接 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#link-链接',
                      'aria-label': 'Permalink to "Link 链接"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[8] ||
              (l[8] = e(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  n('基础使用 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基础使用',
                      'aria-label': 'Permalink to "基础使用"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[9] ||
              (l[9] = e(
                'p',
                null,
                [
                  n('我们提供了连接的一些基本样式，可以通过 '),
                  e('code', null, 'type'),
                  n(' 来设置连接的基础样式。'),
                ],
                -1,
              )),
            t(d, null, {
              default: r(() => [
                t(
                  s(u),
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
                    vueCode: s(c),
                  },
                  { vue: r(() => [t(y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[10] ||
              (l[10] = e(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  n('禁用状态 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#禁用状态',
                      'aria-label': 'Permalink to "禁用状态"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[11] ||
              (l[11] = e(
                'p',
                null,
                [
                  n('为链接添加 '),
                  e('code', null, 'disabled'),
                  n(' 属性，让文字链接处于不可用状态。'),
                ],
                -1,
              )),
            t(d, null, {
              default: r(() => [
                t(
                  s(u),
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
                    vueCode: s(f),
                  },
                  { vue: r(() => [t(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[12] ||
              (l[12] = e(
                'h2',
                { id: 'link-api', tabindex: '-1' },
                [
                  n('Link API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#link-api',
                      'aria-label': 'Permalink to "Link API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', B, [
              l[6] ||
                (l[6] = e(
                  'thead',
                  null,
                  [
                    e('tr', null, [
                      e('th', null, '属性'),
                      e('th', null, '说明'),
                      e('th', null, '类型'),
                      e('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              e('tbody', null, [
                e('tr', null, [
                  l[1] || (l[1] = e('td', null, [e('code', null, 'type')], -1)),
                  l[2] || (l[2] = e('td', null, '链接的类型', -1)),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'enum', -1)),
                    t(x, { value: 'primary,success,default' }),
                  ]),
                  l[3] || (l[3] = e('td', null, 'default', -1)),
                ]),
                l[4] ||
                  (l[4] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'disabled')]),
                      e(
                        'td',
                        null,
                        '控制链接是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现',
                      ),
                      e('td', null, [e('code', null, 'boolean')]),
                      e('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[5] ||
                  (l[5] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'href')]),
                      e('td', null, '链接的路径'),
                      e('td', null, [e('code', null, 'string')]),
                      e('td', null, '-'),
                    ],
                    -1,
                  )),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { C as __pageData, L as default }
