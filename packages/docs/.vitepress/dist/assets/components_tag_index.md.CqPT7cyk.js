import { M as n } from './chunks/theme.C9zyzoQC.js'
import {
  d as u,
  a as l,
  b as g,
  e as d,
  x as t,
  p as a,
  z as o,
  u as r,
  F as m,
  _ as y,
  a9 as s,
  V as f,
} from './chunks/framework.Ch9zL8Hq.js'
import { R as V } from './chunks/index.DbkfPGQe.js'
const c = `<template>\r
  <div class="my">\r
    <VerTag>Tag 1</VerTag>\r
    <VerTag type="success">Tag 2</VerTag>\r
    <VerTag type="info">Tag 3</VerTag>\r
    <VerTag type="warning">Tag 4</VerTag>\r
    <VerTag type="error">Tag 5</VerTag>\r
  </div>\r
\r
  <div class="my">\r
    <VerTag plain>Tag 1</VerTag>\r
    <VerTag plain type="success">Tag 2</VerTag>\r
    <VerTag plain type="info">Tag 3</VerTag>\r
    <VerTag plain type="warning">Tag 4</VerTag>\r
    <VerTag plain type="error">Tag 5</VerTag>\r
  </div>\r
\r
  <div class="my">\r
    <VerTag round>Tag 1</VerTag>\r
    <VerTag round type="success">Tag 2</VerTag>\r
    <VerTag round type="info">Tag 3</VerTag>\r
    <VerTag round type="warning">Tag 4</VerTag>\r
    <VerTag round type="error">Tag 5</VerTag>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerTag } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.my {\r
  margin: 1rem 0;\r
}\r
\r
.ver-tag + .ver-tag {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  b = { class: 'my' },
  v = { class: 'my' },
  x = { class: 'my' },
  _ = u({
    __name: 'base',
    setup(i) {
      return (p, e) => (
        l(),
        g(
          m,
          null,
          [
            d('div', b, [
              t(r(n), null, {
                default: a(() => e[0] || (e[0] = [o('Tag 1')])),
                _: 1,
              }),
              t(
                r(n),
                { type: 'success' },
                { default: a(() => e[1] || (e[1] = [o('Tag 2')])), _: 1 },
              ),
              t(
                r(n),
                { type: 'info' },
                { default: a(() => e[2] || (e[2] = [o('Tag 3')])), _: 1 },
              ),
              t(
                r(n),
                { type: 'warning' },
                { default: a(() => e[3] || (e[3] = [o('Tag 4')])), _: 1 },
              ),
              t(
                r(n),
                { type: 'error' },
                { default: a(() => e[4] || (e[4] = [o('Tag 5')])), _: 1 },
              ),
            ]),
            d('div', v, [
              t(
                r(n),
                { plain: '' },
                { default: a(() => e[5] || (e[5] = [o('Tag 1')])), _: 1 },
              ),
              t(
                r(n),
                { plain: '', type: 'success' },
                { default: a(() => e[6] || (e[6] = [o('Tag 2')])), _: 1 },
              ),
              t(
                r(n),
                { plain: '', type: 'info' },
                { default: a(() => e[7] || (e[7] = [o('Tag 3')])), _: 1 },
              ),
              t(
                r(n),
                { plain: '', type: 'warning' },
                { default: a(() => e[8] || (e[8] = [o('Tag 4')])), _: 1 },
              ),
              t(
                r(n),
                { plain: '', type: 'error' },
                { default: a(() => e[9] || (e[9] = [o('Tag 5')])), _: 1 },
              ),
            ]),
            d('div', x, [
              t(
                r(n),
                { round: '' },
                { default: a(() => e[10] || (e[10] = [o('Tag 1')])), _: 1 },
              ),
              t(
                r(n),
                { round: '', type: 'success' },
                { default: a(() => e[11] || (e[11] = [o('Tag 2')])), _: 1 },
              ),
              t(
                r(n),
                { round: '', type: 'info' },
                { default: a(() => e[12] || (e[12] = [o('Tag 3')])), _: 1 },
              ),
              t(
                r(n),
                { round: '', type: 'warning' },
                { default: a(() => e[13] || (e[13] = [o('Tag 4')])), _: 1 },
              ),
              t(
                r(n),
                { round: '', type: 'error' },
                { default: a(() => e[14] || (e[14] = [o('Tag 5')])), _: 1 },
              ),
            ]),
          ],
          64,
        )
      )
    },
  }),
  h = y(_, [['__scopeId', 'data-v-0b036e03']]),
  B = JSON.parse(
    '{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag/index.md","filePath":"components/tag/index.md"}',
  ),
  F = { name: 'components/tag/index.md' },
  C = Object.assign(F, {
    setup(i) {
      return (p, e) => {
        const T = f('ClientOnly')
        return (
          l(),
          g('div', null, [
            e[0] ||
              (e[0] = s(
                '<h1 id="tag-标签" tabindex="-1">Tag 标签 <a class="header-anchor" href="#tag-标签" aria-label="Permalink to &quot;Tag 标签&quot;">​</a></h1><p>用于标记和选择。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>由<code>type</code>属性来选择 tag 类型。也能通过 <code>plain</code> 让 tag 的背景变得半透明，可以通过 <code>color</code> 属性自定义颜色。</p>',
                4,
              )),
            t(T, null, {
              default: a(() => [
                t(
                  r(V),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: r(c),
                  },
                  { vue: a(() => [t(h)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[1] ||
              (e[1] = s(
                '<h2 id="tag-api" tabindex="-1">Tag API <a class="header-anchor" href="#tag-api" aria-label="Permalink to &quot;Tag API&quot;">​</a></h2><h3 id="tag-属性" tabindex="-1">Tag 属性 <a class="header-anchor" href="#tag-属性" aria-label="Permalink to &quot;Tag 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>Tag 的类型</td><td><code>enum</code>&lt;Tool value=&quot;primary,success,info,warning,danger,&quot;</td><td>primary</td></tr><tr><td><code>plain</code></td><td>背景是否半透明</td><td><code>boolean</code></td><td>false</td></tr><tr><td><code>round</code></td><td>Tag 是否为圆角</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { B as __pageData, C as default }
