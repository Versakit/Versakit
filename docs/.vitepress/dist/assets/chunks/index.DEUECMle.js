import {
  d as Ut,
  h as ot,
  p as ut,
  q as pt,
  x as Wi,
  v as Ki,
  c as X,
  j as z,
  r as Le,
  e as nt,
  n as tt,
  k as Z,
  t as It,
  F as en,
  C as nn,
  b as wt,
  w as gt,
  G as at,
  a as Hn,
  o as W,
  aq as Hi,
  L as sn,
  P as Lt,
  at as Gi,
  N as Vi,
  T as Xi,
} from './framework.Z42t_U4q.js'
const bt = (t, e) => {
    const i = t.__vccOpts || t
    for (const [n, a] of e) i[n] = a
    return i
  },
  Zi = {},
  Qi = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-code',
  }
function qi(t, e) {
  return (
    W(),
    X(
      'svg',
      Qi,
      e[0] ||
        (e[0] = [
          z('polyline', { points: '16 18 22 12 16 6' }, null, -1),
          z('polyline', { points: '8 6 2 12 8 18' }, null, -1),
        ]),
    )
  )
}
const Ji = bt(Zi, [['render', qi]]),
  Yi = {},
  ts = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-code-xml',
  }
function es(t, e) {
  return (
    W(),
    X(
      'svg',
      ts,
      e[0] ||
        (e[0] = [
          z('path', { d: 'm18 16 4-4-4-4' }, null, -1),
          z('path', { d: 'm6 8-4 4 4 4' }, null, -1),
          z('path', { d: 'm14.5 4-5 16' }, null, -1),
        ]),
    )
  )
}
const ns = bt(Yi, [['render', es]]),
  is = {},
  ss = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-copy',
  }
function rs(t, e) {
  return (
    W(),
    X(
      'svg',
      ss,
      e[0] ||
        (e[0] = [
          z(
            'rect',
            { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2' },
            null,
            -1,
          ),
          z(
            'path',
            { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' },
            null,
            -1,
          ),
        ]),
    )
  )
}
const as = bt(is, [['render', rs]]),
  os = {},
  _s = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '16',
    height: '16',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-arrow-up-from-line',
  }
function ls(t, e) {
  return (
    W(),
    X(
      'svg',
      _s,
      e[0] ||
        (e[0] = [
          z('path', { d: 'm18 9-6-6-6 6' }, null, -1),
          z('path', { d: 'M12 3v14' }, null, -1),
          z('path', { d: 'M5 21h14' }, null, -1),
        ]),
    )
  )
}
const us = bt(os, [['render', ls]])
function cs(t) {
  return t === 'vue'
    ? '/src/Demo.vue'
    : t === 'react'
      ? '/src/Demo.tsx'
      : 'index.html'
}
var F = ((t) => ((t.VUE = 'vue'), (t.REACT = 'react'), (t.HTML = 'html'), t))(
    F || {},
  ),
  dt = ((t) => (
    (t.STACKBLITZ = 'stackblitz'), (t.CODESANDBOX = 'codesandbox'), t
  ))(dt || {})
const Gn = 'vitepress-demo',
  Vn = 'This is a demo from vitepress-demo-plugin'
var se = {},
  Xn = { exports: {} }
;(function (t) {
  var e = (function () {
    var i = String.fromCharCode,
      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
      o = {}
    function u(l, c) {
      if (!o[l]) {
        o[l] = {}
        for (var d = 0; d < l.length; d++) o[l][l.charAt(d)] = d
      }
      return o[l][c]
    }
    var s = {
      compressToBase64: function (l) {
        if (l == null) return ''
        var c = s._compress(l, 6, function (d) {
          return n.charAt(d)
        })
        switch (c.length % 4) {
          default:
          case 0:
            return c
          case 1:
            return c + '==='
          case 2:
            return c + '=='
          case 3:
            return c + '='
        }
      },
      decompressFromBase64: function (l) {
        return l == null
          ? ''
          : l == ''
            ? null
            : s._decompress(l.length, 32, function (c) {
                return u(n, l.charAt(c))
              })
      },
      compressToUTF16: function (l) {
        return l == null
          ? ''
          : s._compress(l, 15, function (c) {
              return i(c + 32)
            }) + ' '
      },
      decompressFromUTF16: function (l) {
        return l == null
          ? ''
          : l == ''
            ? null
            : s._decompress(l.length, 16384, function (c) {
                return l.charCodeAt(c) - 32
              })
      },
      compressToUint8Array: function (l) {
        for (
          var c = s.compress(l),
            d = new Uint8Array(c.length * 2),
            g = 0,
            y = c.length;
          g < y;
          g++
        ) {
          var T = c.charCodeAt(g)
          ;(d[g * 2] = T >>> 8), (d[g * 2 + 1] = T % 256)
        }
        return d
      },
      decompressFromUint8Array: function (l) {
        if (l == null) return s.decompress(l)
        for (var c = new Array(l.length / 2), d = 0, g = c.length; d < g; d++)
          c[d] = l[d * 2] * 256 + l[d * 2 + 1]
        var y = []
        return (
          c.forEach(function (T) {
            y.push(i(T))
          }),
          s.decompress(y.join(''))
        )
      },
      compressToEncodedURIComponent: function (l) {
        return l == null
          ? ''
          : s._compress(l, 6, function (c) {
              return a.charAt(c)
            })
      },
      decompressFromEncodedURIComponent: function (l) {
        return l == null
          ? ''
          : l == ''
            ? null
            : ((l = l.replace(/ /g, '+')),
              s._decompress(l.length, 32, function (c) {
                return u(a, l.charAt(c))
              }))
      },
      compress: function (l) {
        return s._compress(l, 16, function (c) {
          return i(c)
        })
      },
      _compress: function (l, c, d) {
        if (l == null) return ''
        var g,
          y,
          T = {},
          j = {},
          M = '',
          f = '',
          _ = '',
          b = 2,
          S = 3,
          x = 2,
          A = [],
          p = 0,
          v = 0,
          h
        for (h = 0; h < l.length; h += 1)
          if (
            ((M = l.charAt(h)),
            Object.prototype.hasOwnProperty.call(T, M) ||
              ((T[M] = S++), (j[M] = !0)),
            (f = _ + M),
            Object.prototype.hasOwnProperty.call(T, f))
          )
            _ = f
          else {
            if (Object.prototype.hasOwnProperty.call(j, _)) {
              if (_.charCodeAt(0) < 256) {
                for (g = 0; g < x; g++)
                  (p = p << 1),
                    v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++
                for (y = _.charCodeAt(0), g = 0; g < 8; g++)
                  (p = (p << 1) | (y & 1)),
                    v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++,
                    (y = y >> 1)
              } else {
                for (y = 1, g = 0; g < x; g++)
                  (p = (p << 1) | y),
                    v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++,
                    (y = 0)
                for (y = _.charCodeAt(0), g = 0; g < 16; g++)
                  (p = (p << 1) | (y & 1)),
                    v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++,
                    (y = y >> 1)
              }
              b--, b == 0 && ((b = Math.pow(2, x)), x++), delete j[_]
            } else
              for (y = T[_], g = 0; g < x; g++)
                (p = (p << 1) | (y & 1)),
                  v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++,
                  (y = y >> 1)
            b--,
              b == 0 && ((b = Math.pow(2, x)), x++),
              (T[f] = S++),
              (_ = String(M))
          }
        if (_ !== '') {
          if (Object.prototype.hasOwnProperty.call(j, _)) {
            if (_.charCodeAt(0) < 256) {
              for (g = 0; g < x; g++)
                (p = p << 1),
                  v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++
              for (y = _.charCodeAt(0), g = 0; g < 8; g++)
                (p = (p << 1) | (y & 1)),
                  v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++,
                  (y = y >> 1)
            } else {
              for (y = 1, g = 0; g < x; g++)
                (p = (p << 1) | y),
                  v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++,
                  (y = 0)
              for (y = _.charCodeAt(0), g = 0; g < 16; g++)
                (p = (p << 1) | (y & 1)),
                  v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++,
                  (y = y >> 1)
            }
            b--, b == 0 && ((b = Math.pow(2, x)), x++), delete j[_]
          } else
            for (y = T[_], g = 0; g < x; g++)
              (p = (p << 1) | (y & 1)),
                v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++,
                (y = y >> 1)
          b--, b == 0 && ((b = Math.pow(2, x)), x++)
        }
        for (y = 2, g = 0; g < x; g++)
          (p = (p << 1) | (y & 1)),
            v == c - 1 ? ((v = 0), A.push(d(p)), (p = 0)) : v++,
            (y = y >> 1)
        for (;;)
          if (((p = p << 1), v == c - 1)) {
            A.push(d(p))
            break
          } else v++
        return A.join('')
      },
      decompress: function (l) {
        return l == null
          ? ''
          : l == ''
            ? null
            : s._decompress(l.length, 32768, function (c) {
                return l.charCodeAt(c)
              })
      },
      _decompress: function (l, c, d) {
        var g = [],
          y = 4,
          T = 4,
          j = 3,
          M = '',
          f = [],
          _,
          b,
          S,
          x,
          A,
          p,
          v,
          h = { val: d(0), position: c, index: 1 }
        for (_ = 0; _ < 3; _ += 1) g[_] = _
        for (S = 0, A = Math.pow(2, 2), p = 1; p != A; )
          (x = h.val & h.position),
            (h.position >>= 1),
            h.position == 0 && ((h.position = c), (h.val = d(h.index++))),
            (S |= (x > 0 ? 1 : 0) * p),
            (p <<= 1)
        switch (S) {
          case 0:
            for (S = 0, A = Math.pow(2, 8), p = 1; p != A; )
              (x = h.val & h.position),
                (h.position >>= 1),
                h.position == 0 && ((h.position = c), (h.val = d(h.index++))),
                (S |= (x > 0 ? 1 : 0) * p),
                (p <<= 1)
            v = i(S)
            break
          case 1:
            for (S = 0, A = Math.pow(2, 16), p = 1; p != A; )
              (x = h.val & h.position),
                (h.position >>= 1),
                h.position == 0 && ((h.position = c), (h.val = d(h.index++))),
                (S |= (x > 0 ? 1 : 0) * p),
                (p <<= 1)
            v = i(S)
            break
          case 2:
            return ''
        }
        for (g[3] = v, b = v, f.push(v); ; ) {
          if (h.index > l) return ''
          for (S = 0, A = Math.pow(2, j), p = 1; p != A; )
            (x = h.val & h.position),
              (h.position >>= 1),
              h.position == 0 && ((h.position = c), (h.val = d(h.index++))),
              (S |= (x > 0 ? 1 : 0) * p),
              (p <<= 1)
          switch ((v = S)) {
            case 0:
              for (S = 0, A = Math.pow(2, 8), p = 1; p != A; )
                (x = h.val & h.position),
                  (h.position >>= 1),
                  h.position == 0 && ((h.position = c), (h.val = d(h.index++))),
                  (S |= (x > 0 ? 1 : 0) * p),
                  (p <<= 1)
              ;(g[T++] = i(S)), (v = T - 1), y--
              break
            case 1:
              for (S = 0, A = Math.pow(2, 16), p = 1; p != A; )
                (x = h.val & h.position),
                  (h.position >>= 1),
                  h.position == 0 && ((h.position = c), (h.val = d(h.index++))),
                  (S |= (x > 0 ? 1 : 0) * p),
                  (p <<= 1)
              ;(g[T++] = i(S)), (v = T - 1), y--
              break
            case 2:
              return f.join('')
          }
          if ((y == 0 && ((y = Math.pow(2, j)), j++), g[v])) M = g[v]
          else if (v === T) M = b + b.charAt(0)
          else return null
          f.push(M),
            (g[T++] = b + M.charAt(0)),
            y--,
            (b = M),
            y == 0 && ((y = Math.pow(2, j)), j++)
        }
      },
    }
    return s
  })()
  t != null
    ? (t.exports = e)
    : typeof angular < 'u' &&
      angular != null &&
      angular.module('LZString', []).factory('LZString', function () {
        return e
      })
})(Xn)
Object.defineProperty(se, '__esModule', { value: !0 })
se.getParameters = void 0
var ps = Xn.exports
function hs(t) {
  return ps
    .compressToBase64(t)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}
function ds(t) {
  return hs(JSON.stringify(t))
}
se.getParameters = ds
var re = void 0,
  fs = se
re = fs.getParameters
var Zn = { exports: {} },
  jt = {},
  Wt = { exports: {} },
  fe = {},
  ge = {},
  rn
function Ie() {
  if (rn) return ge
  rn = 1
  function t(n) {
    ;(this.__parent = n),
      (this.__character_count = 0),
      (this.__indent_count = -1),
      (this.__alignment_count = 0),
      (this.__wrap_point_index = 0),
      (this.__wrap_point_character_count = 0),
      (this.__wrap_point_indent_count = -1),
      (this.__wrap_point_alignment_count = 0),
      (this.__items = [])
  }
  ;(t.prototype.clone_empty = function () {
    var n = new t(this.__parent)
    return n.set_indent(this.__indent_count, this.__alignment_count), n
  }),
    (t.prototype.item = function (n) {
      return n < 0 ? this.__items[this.__items.length + n] : this.__items[n]
    }),
    (t.prototype.has_match = function (n) {
      for (var a = this.__items.length - 1; a >= 0; a--)
        if (this.__items[a].match(n)) return !0
      return !1
    }),
    (t.prototype.set_indent = function (n, a) {
      this.is_empty() &&
        ((this.__indent_count = n || 0),
        (this.__alignment_count = a || 0),
        (this.__character_count = this.__parent.get_indent_size(
          this.__indent_count,
          this.__alignment_count,
        )))
    }),
    (t.prototype._set_wrap_point = function () {
      this.__parent.wrap_line_length &&
        ((this.__wrap_point_index = this.__items.length),
        (this.__wrap_point_character_count = this.__character_count),
        (this.__wrap_point_indent_count =
          this.__parent.next_line.__indent_count),
        (this.__wrap_point_alignment_count =
          this.__parent.next_line.__alignment_count))
    }),
    (t.prototype._should_wrap = function () {
      return (
        this.__wrap_point_index &&
        this.__character_count > this.__parent.wrap_line_length &&
        this.__wrap_point_character_count >
          this.__parent.next_line.__character_count
      )
    }),
    (t.prototype._allow_wrap = function () {
      if (this._should_wrap()) {
        this.__parent.add_new_line()
        var n = this.__parent.current_line
        return (
          n.set_indent(
            this.__wrap_point_indent_count,
            this.__wrap_point_alignment_count,
          ),
          (n.__items = this.__items.slice(this.__wrap_point_index)),
          (this.__items = this.__items.slice(0, this.__wrap_point_index)),
          (n.__character_count +=
            this.__character_count - this.__wrap_point_character_count),
          (this.__character_count = this.__wrap_point_character_count),
          n.__items[0] === ' ' &&
            (n.__items.splice(0, 1), (n.__character_count -= 1)),
          !0
        )
      }
      return !1
    }),
    (t.prototype.is_empty = function () {
      return this.__items.length === 0
    }),
    (t.prototype.last = function () {
      return this.is_empty() ? null : this.__items[this.__items.length - 1]
    }),
    (t.prototype.push = function (n) {
      this.__items.push(n)
      var a = n.lastIndexOf(`
`)
      a !== -1
        ? (this.__character_count = n.length - a)
        : (this.__character_count += n.length)
    }),
    (t.prototype.pop = function () {
      var n = null
      return (
        this.is_empty() ||
          ((n = this.__items.pop()), (this.__character_count -= n.length)),
        n
      )
    }),
    (t.prototype._remove_indent = function () {
      this.__indent_count > 0 &&
        ((this.__indent_count -= 1),
        (this.__character_count -= this.__parent.indent_size))
    }),
    (t.prototype._remove_wrap_indent = function () {
      this.__wrap_point_indent_count > 0 &&
        (this.__wrap_point_indent_count -= 1)
    }),
    (t.prototype.trim = function () {
      for (; this.last() === ' '; )
        this.__items.pop(), (this.__character_count -= 1)
    }),
    (t.prototype.toString = function () {
      var n = ''
      return (
        this.is_empty()
          ? this.__parent.indent_empty_lines &&
            (n = this.__parent.get_indent_string(this.__indent_count))
          : ((n = this.__parent.get_indent_string(
              this.__indent_count,
              this.__alignment_count,
            )),
            (n += this.__items.join(''))),
        n
      )
    })
  function e(n, a) {
    ;(this.__cache = ['']),
      (this.__indent_size = n.indent_size),
      (this.__indent_string = n.indent_char),
      n.indent_with_tabs ||
        (this.__indent_string = new Array(n.indent_size + 1).join(
          n.indent_char,
        )),
      (a = a || ''),
      n.indent_level > 0 &&
        (a = new Array(n.indent_level + 1).join(this.__indent_string)),
      (this.__base_string = a),
      (this.__base_string_length = a.length)
  }
  ;(e.prototype.get_indent_size = function (n, a) {
    var o = this.__base_string_length
    return (
      (a = a || 0), n < 0 && (o = 0), (o += n * this.__indent_size), (o += a), o
    )
  }),
    (e.prototype.get_indent_string = function (n, a) {
      var o = this.__base_string
      return (
        (a = a || 0),
        n < 0 && ((n = 0), (o = '')),
        (a += n * this.__indent_size),
        this.__ensure_cache(a),
        (o += this.__cache[a]),
        o
      )
    }),
    (e.prototype.__ensure_cache = function (n) {
      for (; n >= this.__cache.length; ) this.__add_column()
    }),
    (e.prototype.__add_column = function () {
      var n = this.__cache.length,
        a = 0,
        o = ''
      this.__indent_size &&
        n >= this.__indent_size &&
        ((a = Math.floor(n / this.__indent_size)),
        (n -= a * this.__indent_size),
        (o = new Array(a + 1).join(this.__indent_string))),
        n && (o += new Array(n + 1).join(' ')),
        this.__cache.push(o)
    })
  function i(n, a) {
    ;(this.__indent_cache = new e(n, a)),
      (this.raw = !1),
      (this._end_with_newline = n.end_with_newline),
      (this.indent_size = n.indent_size),
      (this.wrap_line_length = n.wrap_line_length),
      (this.indent_empty_lines = n.indent_empty_lines),
      (this.__lines = []),
      (this.previous_line = null),
      (this.current_line = null),
      (this.next_line = new t(this)),
      (this.space_before_token = !1),
      (this.non_breaking_space = !1),
      (this.previous_token_wrapped = !1),
      this.__add_outputline()
  }
  return (
    (i.prototype.__add_outputline = function () {
      ;(this.previous_line = this.current_line),
        (this.current_line = this.next_line.clone_empty()),
        this.__lines.push(this.current_line)
    }),
    (i.prototype.get_line_number = function () {
      return this.__lines.length
    }),
    (i.prototype.get_indent_string = function (n, a) {
      return this.__indent_cache.get_indent_string(n, a)
    }),
    (i.prototype.get_indent_size = function (n, a) {
      return this.__indent_cache.get_indent_size(n, a)
    }),
    (i.prototype.is_empty = function () {
      return !this.previous_line && this.current_line.is_empty()
    }),
    (i.prototype.add_new_line = function (n) {
      return this.is_empty() || (!n && this.just_added_newline())
        ? !1
        : (this.raw || this.__add_outputline(), !0)
    }),
    (i.prototype.get_code = function (n) {
      this.trim(!0)
      var a = this.current_line.pop()
      a &&
        (a[a.length - 1] ===
          `
` && (a = a.replace(/\n+$/g, '')),
        this.current_line.push(a)),
        this._end_with_newline && this.__add_outputline()
      var o = this.__lines.join(`
`)
      return (
        n !==
          `
` && (o = o.replace(/[\n]/g, n)),
        o
      )
    }),
    (i.prototype.set_wrap_point = function () {
      this.current_line._set_wrap_point()
    }),
    (i.prototype.set_indent = function (n, a) {
      return (
        (n = n || 0),
        (a = a || 0),
        this.next_line.set_indent(n, a),
        this.__lines.length > 1
          ? (this.current_line.set_indent(n, a), !0)
          : (this.current_line.set_indent(), !1)
      )
    }),
    (i.prototype.add_raw_token = function (n) {
      for (var a = 0; a < n.newlines; a++) this.__add_outputline()
      this.current_line.set_indent(-1),
        this.current_line.push(n.whitespace_before),
        this.current_line.push(n.text),
        (this.space_before_token = !1),
        (this.non_breaking_space = !1),
        (this.previous_token_wrapped = !1)
    }),
    (i.prototype.add_token = function (n) {
      this.__add_space_before_token(),
        this.current_line.push(n),
        (this.space_before_token = !1),
        (this.non_breaking_space = !1),
        (this.previous_token_wrapped = this.current_line._allow_wrap())
    }),
    (i.prototype.__add_space_before_token = function () {
      this.space_before_token &&
        !this.just_added_newline() &&
        (this.non_breaking_space || this.set_wrap_point(),
        this.current_line.push(' '))
    }),
    (i.prototype.remove_indent = function (n) {
      for (var a = this.__lines.length; n < a; )
        this.__lines[n]._remove_indent(), n++
      this.current_line._remove_wrap_indent()
    }),
    (i.prototype.trim = function (n) {
      for (
        n = n === void 0 ? !1 : n, this.current_line.trim();
        n && this.__lines.length > 1 && this.current_line.is_empty();

      )
        this.__lines.pop(),
          (this.current_line = this.__lines[this.__lines.length - 1]),
          this.current_line.trim()
      this.previous_line =
        this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null
    }),
    (i.prototype.just_added_newline = function () {
      return this.current_line.is_empty()
    }),
    (i.prototype.just_added_blankline = function () {
      return (
        this.is_empty() ||
        (this.current_line.is_empty() && this.previous_line.is_empty())
      )
    }),
    (i.prototype.ensure_empty_line_above = function (n, a) {
      for (var o = this.__lines.length - 2; o >= 0; ) {
        var u = this.__lines[o]
        if (u.is_empty()) break
        if (u.item(0).indexOf(n) !== 0 && u.item(-1) !== a) {
          this.__lines.splice(o + 1, 0, new t(this)),
            (this.previous_line = this.__lines[this.__lines.length - 2])
          break
        }
        o--
      }
    }),
    (ge.Output = i),
    ge
  )
}
var me = {},
  an
function Qn() {
  if (an) return me
  an = 1
  function t(e, i, n, a) {
    ;(this.type = e),
      (this.text = i),
      (this.comments_before = null),
      (this.newlines = n || 0),
      (this.whitespace_before = a || ''),
      (this.parent = null),
      (this.next = null),
      (this.previous = null),
      (this.opened = null),
      (this.closed = null),
      (this.directives = null)
  }
  return (me.Token = t), me
}
var on = {},
  _n
function qn() {
  return (
    _n ||
      ((_n = 1),
      (function (t) {
        var e = '\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a',
          i = '\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a',
          n =
            '\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc',
          a =
            '\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f',
          o = '\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}',
          u = '(?:' + o + '|[' + e + n + '])',
          s = '(?:' + o + '|[' + i + n + a + '])*'
        ;(t.identifier = new RegExp(u + s, 'g')),
          (t.identifierStart = new RegExp(u)),
          (t.identifierMatch = new RegExp(
            '(?:' + o + '|[' + i + n + a + '])+',
          )),
          (t.newline = /[\n\r\u2028\u2029]/),
          (t.lineBreak = new RegExp(
            `\r
|` + t.newline.source,
          )),
          (t.allLineBreaks = new RegExp(t.lineBreak.source, 'g'))
      })(on)),
    on
  )
}
var be = {},
  Mt = {},
  ln
function De() {
  if (ln) return Mt
  ln = 1
  function t(n, a) {
    ;(this.raw_options = e(n, a)),
      (this.disabled = this._get_boolean('disabled')),
      (this.eol = this._get_characters('eol', 'auto')),
      (this.end_with_newline = this._get_boolean('end_with_newline')),
      (this.indent_size = this._get_number('indent_size', 4)),
      (this.indent_char = this._get_characters('indent_char', ' ')),
      (this.indent_level = this._get_number('indent_level')),
      (this.preserve_newlines = this._get_boolean('preserve_newlines', !0)),
      (this.max_preserve_newlines = this._get_number(
        'max_preserve_newlines',
        32786,
      )),
      this.preserve_newlines || (this.max_preserve_newlines = 0),
      (this.indent_with_tabs = this._get_boolean(
        'indent_with_tabs',
        this.indent_char === '	',
      )),
      this.indent_with_tabs &&
        ((this.indent_char = '	'),
        this.indent_size === 1 && (this.indent_size = 4)),
      (this.wrap_line_length = this._get_number(
        'wrap_line_length',
        this._get_number('max_char'),
      )),
      (this.indent_empty_lines = this._get_boolean('indent_empty_lines')),
      (this.templating = this._get_selection_list(
        'templating',
        [
          'auto',
          'none',
          'angular',
          'django',
          'erb',
          'handlebars',
          'php',
          'smarty',
        ],
        ['auto'],
      ))
  }
  ;(t.prototype._get_array = function (n, a) {
    var o = this.raw_options[n],
      u = a || []
    return (
      typeof o == 'object'
        ? o !== null && typeof o.concat == 'function' && (u = o.concat())
        : typeof o == 'string' && (u = o.split(/[^a-zA-Z0-9_\/\-]+/)),
      u
    )
  }),
    (t.prototype._get_boolean = function (n, a) {
      var o = this.raw_options[n],
        u = o === void 0 ? !!a : !!o
      return u
    }),
    (t.prototype._get_characters = function (n, a) {
      var o = this.raw_options[n],
        u = a || ''
      return (
        typeof o == 'string' &&
          (u = o
            .replace(/\\r/, '\r')
            .replace(
              /\\n/,
              `
`,
            )
            .replace(/\\t/, '	')),
        u
      )
    }),
    (t.prototype._get_number = function (n, a) {
      var o = this.raw_options[n]
      ;(a = parseInt(a, 10)), isNaN(a) && (a = 0)
      var u = parseInt(o, 10)
      return isNaN(u) && (u = a), u
    }),
    (t.prototype._get_selection = function (n, a, o) {
      var u = this._get_selection_list(n, a, o)
      if (u.length !== 1)
        throw new Error(
          "Invalid Option Value: The option '" +
            n +
            `' can only be one of the following values:
` +
            a +
            `
You passed in: '` +
            this.raw_options[n] +
            "'",
        )
      return u[0]
    }),
    (t.prototype._get_selection_list = function (n, a, o) {
      if (!a || a.length === 0)
        throw new Error('Selection list cannot be empty.')
      if (((o = o || [a[0]]), !this._is_valid_selection(o, a)))
        throw new Error('Invalid Default Value!')
      var u = this._get_array(n, o)
      if (!this._is_valid_selection(u, a))
        throw new Error(
          "Invalid Option Value: The option '" +
            n +
            `' can contain only the following values:
` +
            a +
            `
You passed in: '` +
            this.raw_options[n] +
            "'",
        )
      return u
    }),
    (t.prototype._is_valid_selection = function (n, a) {
      return (
        n.length &&
        a.length &&
        !n.some(function (o) {
          return a.indexOf(o) === -1
        })
      )
    })
  function e(n, a) {
    var o = {}
    n = i(n)
    var u
    for (u in n) u !== a && (o[u] = n[u])
    if (a && n[a]) for (u in n[a]) o[u] = n[a][u]
    return o
  }
  function i(n) {
    var a = {},
      o
    for (o in n) {
      var u = o.replace(/-/g, '_')
      a[u] = n[o]
    }
    return a
  }
  return (Mt.Options = t), (Mt.normalizeOpts = i), (Mt.mergeOpts = e), Mt
}
var un
function Jn() {
  if (un) return be
  un = 1
  var t = De().Options,
    e = ['before-newline', 'after-newline', 'preserve-newline']
  function i(n) {
    t.call(this, n, 'js')
    var a = this.raw_options.brace_style || null
    a === 'expand-strict'
      ? (this.raw_options.brace_style = 'expand')
      : a === 'collapse-preserve-inline'
        ? (this.raw_options.brace_style = 'collapse,preserve-inline')
        : this.raw_options.braces_on_own_line !== void 0 &&
          (this.raw_options.brace_style = this.raw_options.braces_on_own_line
            ? 'expand'
            : 'collapse')
    var o = this._get_selection_list('brace_style', [
      'collapse',
      'expand',
      'end-expand',
      'none',
      'preserve-inline',
    ])
    ;(this.brace_preserve_inline = !1), (this.brace_style = 'collapse')
    for (var u = 0; u < o.length; u++)
      o[u] === 'preserve-inline'
        ? (this.brace_preserve_inline = !0)
        : (this.brace_style = o[u])
    ;(this.unindent_chained_methods = this._get_boolean(
      'unindent_chained_methods',
    )),
      (this.break_chained_methods = this._get_boolean('break_chained_methods')),
      (this.space_in_paren = this._get_boolean('space_in_paren')),
      (this.space_in_empty_paren = this._get_boolean('space_in_empty_paren')),
      (this.jslint_happy = this._get_boolean('jslint_happy')),
      (this.space_after_anon_function = this._get_boolean(
        'space_after_anon_function',
      )),
      (this.space_after_named_function = this._get_boolean(
        'space_after_named_function',
      )),
      (this.keep_array_indentation = this._get_boolean(
        'keep_array_indentation',
      )),
      (this.space_before_conditional = this._get_boolean(
        'space_before_conditional',
        !0,
      )),
      (this.unescape_strings = this._get_boolean('unescape_strings')),
      (this.e4x = this._get_boolean('e4x')),
      (this.comma_first = this._get_boolean('comma_first')),
      (this.operator_position = this._get_selection('operator_position', e)),
      (this.test_output_raw = this._get_boolean('test_output_raw')),
      this.jslint_happy && (this.space_after_anon_function = !0)
  }
  return (i.prototype = new t()), (be.Options = i), be
}
var Tt = {},
  ye = {},
  cn
function Be() {
  if (cn) return ye
  cn = 1
  var t = RegExp.prototype.hasOwnProperty('sticky')
  function e(i) {
    ;(this.__input = i || ''),
      (this.__input_length = this.__input.length),
      (this.__position = 0)
  }
  return (
    (e.prototype.restart = function () {
      this.__position = 0
    }),
    (e.prototype.back = function () {
      this.__position > 0 && (this.__position -= 1)
    }),
    (e.prototype.hasNext = function () {
      return this.__position < this.__input_length
    }),
    (e.prototype.next = function () {
      var i = null
      return (
        this.hasNext() &&
          ((i = this.__input.charAt(this.__position)), (this.__position += 1)),
        i
      )
    }),
    (e.prototype.peek = function (i) {
      var n = null
      return (
        (i = i || 0),
        (i += this.__position),
        i >= 0 && i < this.__input_length && (n = this.__input.charAt(i)),
        n
      )
    }),
    (e.prototype.__match = function (i, n) {
      i.lastIndex = n
      var a = i.exec(this.__input)
      return a && !(t && i.sticky) && a.index !== n && (a = null), a
    }),
    (e.prototype.test = function (i, n) {
      return (
        (n = n || 0),
        (n += this.__position),
        n >= 0 && n < this.__input_length ? !!this.__match(i, n) : !1
      )
    }),
    (e.prototype.testChar = function (i, n) {
      var a = this.peek(n)
      return (i.lastIndex = 0), a !== null && i.test(a)
    }),
    (e.prototype.match = function (i) {
      var n = this.__match(i, this.__position)
      return n ? (this.__position += n[0].length) : (n = null), n
    }),
    (e.prototype.read = function (i, n, a) {
      var o = '',
        u
      return (
        i && ((u = this.match(i)), u && (o += u[0])),
        n && (u || !i) && (o += this.readUntil(n, a)),
        o
      )
    }),
    (e.prototype.readUntil = function (i, n) {
      var a = '',
        o = this.__position
      i.lastIndex = this.__position
      var u = i.exec(this.__input)
      return (
        u
          ? ((o = u.index), n && (o += u[0].length))
          : (o = this.__input_length),
        (a = this.__input.substring(this.__position, o)),
        (this.__position = o),
        a
      )
    }),
    (e.prototype.readUntilAfter = function (i) {
      return this.readUntil(i, !0)
    }),
    (e.prototype.get_regexp = function (i, n) {
      var a = null,
        o = 'g'
      return (
        n && t && (o = 'y'),
        typeof i == 'string' && i !== ''
          ? (a = new RegExp(i, o))
          : i && (a = new RegExp(i.source, o)),
        a
      )
    }),
    (e.prototype.get_literal_regexp = function (i) {
      return RegExp(i.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
    }),
    (e.prototype.peekUntilAfter = function (i) {
      var n = this.__position,
        a = this.readUntilAfter(i)
      return (this.__position = n), a
    }),
    (e.prototype.lookBack = function (i) {
      var n = this.__position - 1
      return (
        n >= i.length &&
        this.__input.substring(n - i.length, n).toLowerCase() === i
      )
    }),
    (ye.InputScanner = e),
    ye
  )
}
var Kt = {},
  ve = {},
  pn
function gs() {
  if (pn) return ve
  pn = 1
  function t(e) {
    ;(this.__tokens = []),
      (this.__tokens_length = this.__tokens.length),
      (this.__position = 0),
      (this.__parent_token = e)
  }
  return (
    (t.prototype.restart = function () {
      this.__position = 0
    }),
    (t.prototype.isEmpty = function () {
      return this.__tokens_length === 0
    }),
    (t.prototype.hasNext = function () {
      return this.__position < this.__tokens_length
    }),
    (t.prototype.next = function () {
      var e = null
      return (
        this.hasNext() &&
          ((e = this.__tokens[this.__position]), (this.__position += 1)),
        e
      )
    }),
    (t.prototype.peek = function (e) {
      var i = null
      return (
        (e = e || 0),
        (e += this.__position),
        e >= 0 && e < this.__tokens_length && (i = this.__tokens[e]),
        i
      )
    }),
    (t.prototype.add = function (e) {
      this.__parent_token && (e.parent = this.__parent_token),
        this.__tokens.push(e),
        (this.__tokens_length += 1)
    }),
    (ve.TokenStream = t),
    ve
  )
}
var ke = {},
  we = {},
  hn
function ae() {
  if (hn) return we
  hn = 1
  function t(e, i) {
    ;(this._input = e),
      (this._starting_pattern = null),
      (this._match_pattern = null),
      (this._until_pattern = null),
      (this._until_after = !1),
      i &&
        ((this._starting_pattern = this._input.get_regexp(
          i._starting_pattern,
          !0,
        )),
        (this._match_pattern = this._input.get_regexp(i._match_pattern, !0)),
        (this._until_pattern = this._input.get_regexp(i._until_pattern)),
        (this._until_after = i._until_after))
  }
  return (
    (t.prototype.read = function () {
      var e = this._input.read(this._starting_pattern)
      return (
        (!this._starting_pattern || e) &&
          (e += this._input.read(
            this._match_pattern,
            this._until_pattern,
            this._until_after,
          )),
        e
      )
    }),
    (t.prototype.read_match = function () {
      return this._input.match(this._match_pattern)
    }),
    (t.prototype.until_after = function (e) {
      var i = this._create()
      return (
        (i._until_after = !0),
        (i._until_pattern = this._input.get_regexp(e)),
        i._update(),
        i
      )
    }),
    (t.prototype.until = function (e) {
      var i = this._create()
      return (
        (i._until_after = !1),
        (i._until_pattern = this._input.get_regexp(e)),
        i._update(),
        i
      )
    }),
    (t.prototype.starting_with = function (e) {
      var i = this._create()
      return (
        (i._starting_pattern = this._input.get_regexp(e, !0)), i._update(), i
      )
    }),
    (t.prototype.matching = function (e) {
      var i = this._create()
      return (i._match_pattern = this._input.get_regexp(e, !0)), i._update(), i
    }),
    (t.prototype._create = function () {
      return new t(this._input, this)
    }),
    (t.prototype._update = function () {}),
    (we.Pattern = t),
    we
  )
}
var dn
function ms() {
  if (dn) return ke
  dn = 1
  var t = ae().Pattern
  function e(i, n) {
    t.call(this, i, n),
      n
        ? (this._line_regexp = this._input.get_regexp(n._line_regexp))
        : this.__set_whitespace_patterns('', ''),
      (this.newline_count = 0),
      (this.whitespace_before_token = '')
  }
  return (
    (e.prototype = new t()),
    (e.prototype.__set_whitespace_patterns = function (i, n) {
      ;(i += '\\t '),
        (n += '\\n\\r'),
        (this._match_pattern = this._input.get_regexp('[' + i + n + ']+', !0)),
        (this._newline_regexp = this._input.get_regexp('\\r\\n|[' + n + ']'))
    }),
    (e.prototype.read = function () {
      ;(this.newline_count = 0), (this.whitespace_before_token = '')
      var i = this._input.read(this._match_pattern)
      if (i === ' ') this.whitespace_before_token = ' '
      else if (i) {
        var n = this.__split(this._newline_regexp, i)
        ;(this.newline_count = n.length - 1),
          (this.whitespace_before_token = n[this.newline_count])
      }
      return i
    }),
    (e.prototype.matching = function (i, n) {
      var a = this._create()
      return a.__set_whitespace_patterns(i, n), a._update(), a
    }),
    (e.prototype._create = function () {
      return new e(this._input, this)
    }),
    (e.prototype.__split = function (i, n) {
      i.lastIndex = 0
      for (var a = 0, o = [], u = i.exec(n); u; )
        o.push(n.substring(a, u.index)),
          (a = u.index + u[0].length),
          (u = i.exec(n))
      return a < n.length ? o.push(n.substring(a, n.length)) : o.push(''), o
    }),
    (ke.WhitespacePattern = e),
    ke
  )
}
var fn
function ee() {
  if (fn) return Kt
  fn = 1
  var t = Be().InputScanner,
    e = Qn().Token,
    i = gs().TokenStream,
    n = ms().WhitespacePattern,
    a = { START: 'TK_START', RAW: 'TK_RAW', EOF: 'TK_EOF' },
    o = function (u, s) {
      ;(this._input = new t(u)),
        (this._options = s || {}),
        (this.__tokens = null),
        (this._patterns = {}),
        (this._patterns.whitespace = new n(this._input))
    }
  return (
    (o.prototype.tokenize = function () {
      this._input.restart(), (this.__tokens = new i()), this._reset()
      for (
        var u, s = new e(a.START, ''), l = null, c = [], d = new i();
        s.type !== a.EOF;

      ) {
        for (u = this._get_next_token(s, l); this._is_comment(u); )
          d.add(u), (u = this._get_next_token(s, l))
        d.isEmpty() || ((u.comments_before = d), (d = new i())),
          (u.parent = l),
          this._is_opening(u)
            ? (c.push(l), (l = u))
            : l &&
              this._is_closing(u, l) &&
              ((u.opened = l), (l.closed = u), (l = c.pop()), (u.parent = l)),
          (u.previous = s),
          (s.next = u),
          this.__tokens.add(u),
          (s = u)
      }
      return this.__tokens
    }),
    (o.prototype._is_first_token = function () {
      return this.__tokens.isEmpty()
    }),
    (o.prototype._reset = function () {}),
    (o.prototype._get_next_token = function (u, s) {
      this._readWhitespace()
      var l = this._input.read(/.+/g)
      return l ? this._create_token(a.RAW, l) : this._create_token(a.EOF, '')
    }),
    (o.prototype._is_comment = function (u) {
      return !1
    }),
    (o.prototype._is_opening = function (u) {
      return !1
    }),
    (o.prototype._is_closing = function (u, s) {
      return !1
    }),
    (o.prototype._create_token = function (u, s) {
      var l = new e(
        u,
        s,
        this._patterns.whitespace.newline_count,
        this._patterns.whitespace.whitespace_before_token,
      )
      return l
    }),
    (o.prototype._readWhitespace = function () {
      return this._patterns.whitespace.read()
    }),
    (Kt.Tokenizer = o),
    (Kt.TOKEN = a),
    Kt
  )
}
var xe = {},
  gn
function Pe() {
  if (gn) return xe
  gn = 1
  function t(e, i) {
    ;(e = typeof e == 'string' ? e : e.source),
      (i = typeof i == 'string' ? i : i.source),
      (this.__directives_block_pattern = new RegExp(
        e + / beautify( \w+[:]\w+)+ /.source + i,
        'g',
      )),
      (this.__directive_pattern = / (\w+)[:](\w+)/g),
      (this.__directives_end_ignore_pattern = new RegExp(
        e + /\sbeautify\signore:end\s/.source + i,
        'g',
      ))
  }
  return (
    (t.prototype.get_directives = function (e) {
      if (!e.match(this.__directives_block_pattern)) return null
      var i = {}
      this.__directive_pattern.lastIndex = 0
      for (var n = this.__directive_pattern.exec(e); n; )
        (i[n[1]] = n[2]), (n = this.__directive_pattern.exec(e))
      return i
    }),
    (t.prototype.readIgnored = function (e) {
      return e.readUntilAfter(this.__directives_end_ignore_pattern)
    }),
    (xe.Directives = t),
    xe
  )
}
var Ee = {},
  mn
function Yn() {
  if (mn) return Ee
  mn = 1
  var t = ae().Pattern,
    e = {
      django: !1,
      erb: !1,
      handlebars: !1,
      php: !1,
      smarty: !1,
      angular: !1,
    }
  function i(n, a) {
    t.call(this, n, a),
      (this.__template_pattern = null),
      (this._disabled = Object.assign({}, e)),
      (this._excluded = Object.assign({}, e)),
      a &&
        ((this.__template_pattern = this._input.get_regexp(
          a.__template_pattern,
        )),
        (this._excluded = Object.assign(this._excluded, a._excluded)),
        (this._disabled = Object.assign(this._disabled, a._disabled)))
    var o = new t(n)
    this.__patterns = {
      handlebars_comment: o.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: o.starting_with(/{{{/).until_after(/}}}/),
      handlebars: o.starting_with(/{{/).until_after(/}}/),
      php: o.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: o.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      django: o.starting_with(/{%/).until_after(/%}/),
      django_value: o.starting_with(/{{/).until_after(/}}/),
      django_comment: o.starting_with(/{#/).until_after(/#}/),
      smarty: o.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: o.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: o.starting_with(/{literal}/).until_after(/{\/literal}/),
    }
  }
  return (
    (i.prototype = new t()),
    (i.prototype._create = function () {
      return new i(this._input, this)
    }),
    (i.prototype._update = function () {
      this.__set_templated_pattern()
    }),
    (i.prototype.disable = function (n) {
      var a = this._create()
      return (a._disabled[n] = !0), a._update(), a
    }),
    (i.prototype.read_options = function (n) {
      var a = this._create()
      for (var o in e) a._disabled[o] = n.templating.indexOf(o) === -1
      return a._update(), a
    }),
    (i.prototype.exclude = function (n) {
      var a = this._create()
      return (a._excluded[n] = !0), a._update(), a
    }),
    (i.prototype.read = function () {
      var n = ''
      this._match_pattern
        ? (n = this._input.read(this._starting_pattern))
        : (n = this._input.read(
            this._starting_pattern,
            this.__template_pattern,
          ))
      for (var a = this._read_template(); a; )
        this._match_pattern
          ? (a += this._input.read(this._match_pattern))
          : (a += this._input.readUntil(this.__template_pattern)),
          (n += a),
          (a = this._read_template())
      return (
        this._until_after &&
          (n += this._input.readUntilAfter(this._until_pattern)),
        n
      )
    }),
    (i.prototype.__set_templated_pattern = function () {
      var n = []
      this._disabled.php ||
        n.push(this.__patterns.php._starting_pattern.source),
        this._disabled.handlebars ||
          n.push(this.__patterns.handlebars._starting_pattern.source),
        this._disabled.erb ||
          n.push(this.__patterns.erb._starting_pattern.source),
        this._disabled.django ||
          (n.push(this.__patterns.django._starting_pattern.source),
          n.push(this.__patterns.django_value._starting_pattern.source),
          n.push(this.__patterns.django_comment._starting_pattern.source)),
        this._disabled.smarty ||
          n.push(this.__patterns.smarty._starting_pattern.source),
        this._until_pattern && n.push(this._until_pattern.source),
        (this.__template_pattern = this._input.get_regexp(
          '(?:' + n.join('|') + ')',
        ))
    }),
    (i.prototype._read_template = function () {
      var n = '',
        a = this._input.peek()
      if (a === '<') {
        var o = this._input.peek(1)
        !this._disabled.php &&
          !this._excluded.php &&
          o === '?' &&
          (n = n || this.__patterns.php.read()),
          !this._disabled.erb &&
            !this._excluded.erb &&
            o === '%' &&
            (n = n || this.__patterns.erb.read())
      } else
        a === '{' &&
          (!this._disabled.handlebars &&
            !this._excluded.handlebars &&
            ((n = n || this.__patterns.handlebars_comment.read()),
            (n = n || this.__patterns.handlebars_unescaped.read()),
            (n = n || this.__patterns.handlebars.read())),
          this._disabled.django ||
            (!this._excluded.django &&
              !this._excluded.handlebars &&
              (n = n || this.__patterns.django_value.read()),
            this._excluded.django ||
              ((n = n || this.__patterns.django_comment.read()),
              (n = n || this.__patterns.django.read()))),
          this._disabled.smarty ||
            (this._disabled.django &&
              this._disabled.handlebars &&
              ((n = n || this.__patterns.smarty_comment.read()),
              (n = n || this.__patterns.smarty_literal.read()),
              (n = n || this.__patterns.smarty.read()))))
      return n
    }),
    (Ee.TemplatablePattern = i),
    Ee
  )
}
var bn
function Ht() {
  if (bn) return Tt
  bn = 1
  var t = Be().InputScanner,
    e = ee().Tokenizer,
    i = ee().TOKEN,
    n = Pe().Directives,
    a = qn(),
    o = ae().Pattern,
    u = Yn().TemplatablePattern
  function s(p, v) {
    return v.indexOf(p) !== -1
  }
  var l = {
      START_EXPR: 'TK_START_EXPR',
      END_EXPR: 'TK_END_EXPR',
      START_BLOCK: 'TK_START_BLOCK',
      END_BLOCK: 'TK_END_BLOCK',
      WORD: 'TK_WORD',
      RESERVED: 'TK_RESERVED',
      SEMICOLON: 'TK_SEMICOLON',
      STRING: 'TK_STRING',
      EQUALS: 'TK_EQUALS',
      OPERATOR: 'TK_OPERATOR',
      COMMA: 'TK_COMMA',
      BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
      COMMENT: 'TK_COMMENT',
      DOT: 'TK_DOT',
      UNKNOWN: 'TK_UNKNOWN',
      START: i.START,
      RAW: i.RAW,
      EOF: i.EOF,
    },
    c = new n(/\/\*/, /\*\//),
    d =
      /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/,
    g = /[0-9]/,
    y = /[^\d\.]/,
    T =
      '>>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *'.split(
        ' ',
      ),
    j =
      '>>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |'
  ;(j = j.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&')),
    (j = '\\?\\.(?!\\d) ' + j),
    (j = j.replace(/ /g, '|'))
  var M = new RegExp(j),
    f =
      'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(
        ',',
      ),
    _ = f.concat([
      'do',
      'in',
      'of',
      'else',
      'get',
      'set',
      'new',
      'catch',
      'finally',
      'typeof',
      'yield',
      'async',
      'await',
      'from',
      'as',
      'class',
      'extends',
    ]),
    b = new RegExp('^(?:' + _.join('|') + ')$'),
    S,
    x = function (p, v) {
      e.call(this, p, v),
        (this._patterns.whitespace = this._patterns.whitespace.matching(
          /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
          /\u2028\u2029/.source,
        ))
      var h = new o(this._input),
        O = new u(this._input).read_options(this._options)
      this.__patterns = {
        template: O,
        identifier: O.starting_with(a.identifier).matching(a.identifierMatch),
        number: h.matching(d),
        punct: h.matching(M),
        comment: h.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
        block_comment: h.starting_with(/\/\*/).until_after(/\*\//),
        html_comment_start: h.matching(/<!--/),
        html_comment_end: h.matching(/-->/),
        include: h.starting_with(/#include/).until_after(a.lineBreak),
        shebang: h.starting_with(/#!/).until_after(a.lineBreak),
        xml: h.matching(
          /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/,
        ),
        single_quote: O.until(/['\\\n\r\u2028\u2029]/),
        double_quote: O.until(/["\\\n\r\u2028\u2029]/),
        template_text: O.until(/[`\\$]/),
        template_expression: O.until(/[`}\\]/),
      }
    }
  ;(x.prototype = new e()),
    (x.prototype._is_comment = function (p) {
      return (
        p.type === l.COMMENT ||
        p.type === l.BLOCK_COMMENT ||
        p.type === l.UNKNOWN
      )
    }),
    (x.prototype._is_opening = function (p) {
      return p.type === l.START_BLOCK || p.type === l.START_EXPR
    }),
    (x.prototype._is_closing = function (p, v) {
      return (
        (p.type === l.END_BLOCK || p.type === l.END_EXPR) &&
        v &&
        ((p.text === ']' && v.text === '[') ||
          (p.text === ')' && v.text === '(') ||
          (p.text === '}' && v.text === '{'))
      )
    }),
    (x.prototype._reset = function () {
      S = !1
    }),
    (x.prototype._get_next_token = function (p, v) {
      var h = null
      this._readWhitespace()
      var O = this._input.peek()
      return O === null
        ? this._create_token(l.EOF, '')
        : ((h = h || this._read_non_javascript(O)),
          (h = h || this._read_string(O)),
          (h = h || this._read_pair(O, this._input.peek(1))),
          (h = h || this._read_word(p)),
          (h = h || this._read_singles(O)),
          (h = h || this._read_comment(O)),
          (h = h || this._read_regexp(O, p)),
          (h = h || this._read_xml(O, p)),
          (h = h || this._read_punctuation()),
          (h = h || this._create_token(l.UNKNOWN, this._input.next())),
          h)
    }),
    (x.prototype._read_word = function (p) {
      var v
      if (((v = this.__patterns.identifier.read()), v !== ''))
        return (
          (v = v.replace(
            a.allLineBreaks,
            `
`,
          )),
          !(
            p.type === l.DOT ||
            (p.type === l.RESERVED && (p.text === 'set' || p.text === 'get'))
          ) && b.test(v)
            ? (v === 'in' || v === 'of') &&
              (p.type === l.WORD || p.type === l.STRING)
              ? this._create_token(l.OPERATOR, v)
              : this._create_token(l.RESERVED, v)
            : this._create_token(l.WORD, v)
        )
      if (((v = this.__patterns.number.read()), v !== ''))
        return this._create_token(l.WORD, v)
    }),
    (x.prototype._read_singles = function (p) {
      var v = null
      return (
        p === '(' || p === '['
          ? (v = this._create_token(l.START_EXPR, p))
          : p === ')' || p === ']'
            ? (v = this._create_token(l.END_EXPR, p))
            : p === '{'
              ? (v = this._create_token(l.START_BLOCK, p))
              : p === '}'
                ? (v = this._create_token(l.END_BLOCK, p))
                : p === ';'
                  ? (v = this._create_token(l.SEMICOLON, p))
                  : p === '.' && y.test(this._input.peek(1))
                    ? (v = this._create_token(l.DOT, p))
                    : p === ',' && (v = this._create_token(l.COMMA, p)),
        v && this._input.next(),
        v
      )
    }),
    (x.prototype._read_pair = function (p, v) {
      var h = null
      return (
        p === '#' &&
          v === '{' &&
          (h = this._create_token(l.START_BLOCK, p + v)),
        h && (this._input.next(), this._input.next()),
        h
      )
    }),
    (x.prototype._read_punctuation = function () {
      var p = this.__patterns.punct.read()
      if (p !== '')
        return p === '='
          ? this._create_token(l.EQUALS, p)
          : p === '?.'
            ? this._create_token(l.DOT, p)
            : this._create_token(l.OPERATOR, p)
    }),
    (x.prototype._read_non_javascript = function (p) {
      var v = ''
      if (p === '#') {
        if (this._is_first_token() && ((v = this.__patterns.shebang.read()), v))
          return this._create_token(
            l.UNKNOWN,
            v.trim() +
              `
`,
          )
        if (((v = this.__patterns.include.read()), v))
          return this._create_token(
            l.UNKNOWN,
            v.trim() +
              `
`,
          )
        p = this._input.next()
        var h = '#'
        if (this._input.hasNext() && this._input.testChar(g)) {
          do (p = this._input.next()), (h += p)
          while (this._input.hasNext() && p !== '#' && p !== '=')
          return (
            p === '#' ||
              (this._input.peek() === '[' && this._input.peek(1) === ']'
                ? ((h += '[]'), this._input.next(), this._input.next())
                : this._input.peek() === '{' &&
                  this._input.peek(1) === '}' &&
                  ((h += '{}'), this._input.next(), this._input.next())),
            this._create_token(l.WORD, h)
          )
        }
        this._input.back()
      } else if (p === '<' && this._is_first_token()) {
        if (((v = this.__patterns.html_comment_start.read()), v)) {
          for (; this._input.hasNext() && !this._input.testChar(a.newline); )
            v += this._input.next()
          return (S = !0), this._create_token(l.COMMENT, v)
        }
      } else if (
        S &&
        p === '-' &&
        ((v = this.__patterns.html_comment_end.read()), v)
      )
        return (S = !1), this._create_token(l.COMMENT, v)
      return null
    }),
    (x.prototype._read_comment = function (p) {
      var v = null
      if (p === '/') {
        var h = ''
        if (this._input.peek(1) === '*') {
          h = this.__patterns.block_comment.read()
          var O = c.get_directives(h)
          O && O.ignore === 'start' && (h += c.readIgnored(this._input)),
            (h = h.replace(
              a.allLineBreaks,
              `
`,
            )),
            (v = this._create_token(l.BLOCK_COMMENT, h)),
            (v.directives = O)
        } else
          this._input.peek(1) === '/' &&
            ((h = this.__patterns.comment.read()),
            (v = this._create_token(l.COMMENT, h)))
      }
      return v
    }),
    (x.prototype._read_string = function (p) {
      if (p === '`' || p === "'" || p === '"') {
        var v = this._input.next()
        return (
          (this.has_char_escapes = !1),
          p === '`'
            ? (v += this._read_string_recursive('`', !0, '${'))
            : (v += this._read_string_recursive(p)),
          this.has_char_escapes && this._options.unescape_strings && (v = A(v)),
          this._input.peek() === p && (v += this._input.next()),
          (v = v.replace(
            a.allLineBreaks,
            `
`,
          )),
          this._create_token(l.STRING, v)
        )
      }
      return null
    }),
    (x.prototype._allow_regexp_or_xml = function (p) {
      return (
        (p.type === l.RESERVED &&
          s(p.text, [
            'return',
            'case',
            'throw',
            'else',
            'do',
            'typeof',
            'yield',
          ])) ||
        (p.type === l.END_EXPR &&
          p.text === ')' &&
          p.opened.previous.type === l.RESERVED &&
          s(p.opened.previous.text, ['if', 'while', 'for'])) ||
        s(p.type, [
          l.COMMENT,
          l.START_EXPR,
          l.START_BLOCK,
          l.START,
          l.END_BLOCK,
          l.OPERATOR,
          l.EQUALS,
          l.EOF,
          l.SEMICOLON,
          l.COMMA,
        ])
      )
    }),
    (x.prototype._read_regexp = function (p, v) {
      if (p === '/' && this._allow_regexp_or_xml(v)) {
        for (
          var h = this._input.next(), O = !1, r = !1;
          this._input.hasNext() &&
          (O || r || this._input.peek() !== p) &&
          !this._input.testChar(a.newline);

        )
          (h += this._input.peek()),
            O
              ? (O = !1)
              : ((O = this._input.peek() === '\\'),
                this._input.peek() === '['
                  ? (r = !0)
                  : this._input.peek() === ']' && (r = !1)),
            this._input.next()
        return (
          this._input.peek() === p &&
            ((h += this._input.next()), (h += this._input.read(a.identifier))),
          this._create_token(l.STRING, h)
        )
      }
      return null
    }),
    (x.prototype._read_xml = function (p, v) {
      if (this._options.e4x && p === '<' && this._allow_regexp_or_xml(v)) {
        var h = '',
          O = this.__patterns.xml.read_match()
        if (O) {
          for (
            var r = O[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}'),
              w = r.indexOf('{') === 0,
              k = 0;
            O;

          ) {
            var L = !!O[1],
              I = O[2],
              $ = !!O[O.length - 1] || I.slice(0, 8) === '![CDATA['
            if (
              (!$ &&
                (I === r ||
                  (w && I.replace(/^{\s+/, '{').replace(/\s+}$/, '}'))) &&
                (L ? --k : ++k),
              (h += O[0]),
              k <= 0)
            )
              break
            O = this.__patterns.xml.read_match()
          }
          return (
            O || (h += this._input.match(/[\s\S]*/g)[0]),
            (h = h.replace(
              a.allLineBreaks,
              `
`,
            )),
            this._create_token(l.STRING, h)
          )
        }
      }
      return null
    })
  function A(p) {
    for (var v = '', h = 0, O = new t(p), r = null; O.hasNext(); )
      if (
        ((r = O.match(/([\s]|[^\\]|\\\\)+/g)),
        r && (v += r[0]),
        O.peek() === '\\')
      ) {
        if ((O.next(), O.peek() === 'x')) r = O.match(/x([0-9A-Fa-f]{2})/g)
        else if (O.peek() === 'u')
          (r = O.match(/u([0-9A-Fa-f]{4})/g)),
            r || (r = O.match(/u\{([0-9A-Fa-f]+)\}/g))
        else {
          ;(v += '\\'), O.hasNext() && (v += O.next())
          continue
        }
        if (
          !r ||
          ((h = parseInt(r[1], 16)),
          h > 126 && h <= 255 && r[0].indexOf('x') === 0)
        )
          return p
        ;(h >= 0 && h < 32) || h > 1114111
          ? (v += '\\' + r[0])
          : h === 34 || h === 39 || h === 92
            ? (v += '\\' + String.fromCharCode(h))
            : (v += String.fromCharCode(h))
      }
    return v
  }
  return (
    (x.prototype._read_string_recursive = function (p, v, h) {
      var O, r
      p === "'"
        ? (r = this.__patterns.single_quote)
        : p === '"'
          ? (r = this.__patterns.double_quote)
          : p === '`'
            ? (r = this.__patterns.template_text)
            : p === '}' && (r = this.__patterns.template_expression)
      for (var w = r.read(), k = ''; this._input.hasNext(); ) {
        if (((k = this._input.next()), k === p || (!v && a.newline.test(k)))) {
          this._input.back()
          break
        } else
          k === '\\' && this._input.hasNext()
            ? ((O = this._input.peek()),
              O === 'x' || O === 'u'
                ? (this.has_char_escapes = !0)
                : O === '\r' &&
                  this._input.peek(1) ===
                    `
` &&
                  this._input.next(),
              (k += this._input.next()))
            : h &&
              (h === '${' &&
                k === '$' &&
                this._input.peek() === '{' &&
                (k += this._input.next()),
              h === k &&
                (p === '`'
                  ? (k += this._read_string_recursive('}', v, '`'))
                  : (k += this._read_string_recursive('`', v, '${')),
                this._input.hasNext() && (k += this._input.next())))
        ;(k += r.read()), (w += k)
      }
      return w
    }),
    (Tt.Tokenizer = x),
    (Tt.TOKEN = l),
    (Tt.positionable_operators = T.slice()),
    (Tt.line_starters = f.slice()),
    Tt
  )
}
var yn
function bs() {
  if (yn) return fe
  yn = 1
  var t = Ie().Output,
    e = Qn().Token,
    i = qn(),
    n = Jn().Options,
    a = Ht().Tokenizer,
    o = Ht().line_starters,
    u = Ht().positionable_operators,
    s = Ht().TOKEN
  function l(r, w) {
    return w.indexOf(r) !== -1
  }
  function c(r) {
    return r.replace(/^\s+/g, '')
  }
  function d(r) {
    for (var w = {}, k = 0; k < r.length; k++) w[r[k].replace(/-/g, '_')] = r[k]
    return w
  }
  function g(r, w) {
    return r && r.type === s.RESERVED && r.text === w
  }
  function y(r, w) {
    return r && r.type === s.RESERVED && l(r.text, w)
  }
  var T = [
      'case',
      'return',
      'do',
      'if',
      'throw',
      'else',
      'await',
      'break',
      'continue',
      'async',
    ],
    j = ['before-newline', 'after-newline', 'preserve-newline'],
    M = d(j),
    f = [M.before_newline, M.preserve_newline],
    _ = {
      BlockStatement: 'BlockStatement',
      Statement: 'Statement',
      ObjectLiteral: 'ObjectLiteral',
      ArrayLiteral: 'ArrayLiteral',
      ForInitializer: 'ForInitializer',
      Conditional: 'Conditional',
      Expression: 'Expression',
    }
  function b(r, w) {
    w.multiline_frame ||
      w.mode === _.ForInitializer ||
      w.mode === _.Conditional ||
      r.remove_indent(w.start_line_index)
  }
  function S(r) {
    r = r.replace(
      i.allLineBreaks,
      `
`,
    )
    for (
      var w = [],
        k = r.indexOf(`
`);
      k !== -1;

    )
      w.push(r.substring(0, k)),
        (r = r.substring(k + 1)),
        (k = r.indexOf(`
`))
    return r.length && w.push(r), w
  }
  function x(r) {
    return r === _.ArrayLiteral
  }
  function A(r) {
    return l(r, [_.Expression, _.ForInitializer, _.Conditional])
  }
  function p(r, w) {
    for (var k = 0; k < r.length; k++) {
      var L = r[k].trim()
      if (L.charAt(0) !== w) return !1
    }
    return !0
  }
  function v(r, w) {
    for (var k = 0, L = r.length, I; k < L; k++)
      if (((I = r[k]), I && I.indexOf(w) !== 0)) return !1
    return !0
  }
  function h(r, w) {
    ;(w = w || {}),
      (this._source_text = r || ''),
      (this._output = null),
      (this._tokens = null),
      (this._last_last_text = null),
      (this._flags = null),
      (this._previous_flags = null),
      (this._flag_store = null),
      (this._options = new n(w))
  }
  ;(h.prototype.create_flags = function (r, w) {
    var k = 0
    r &&
      ((k = r.indentation_level),
      !this._output.just_added_newline() &&
        r.line_indent_level > k &&
        (k = r.line_indent_level))
    var L = {
      mode: w,
      parent: r,
      last_token: r ? r.last_token : new e(s.START_BLOCK, ''),
      last_word: r ? r.last_word : '',
      declaration_statement: !1,
      declaration_assignment: !1,
      multiline_frame: !1,
      inline_frame: !1,
      if_block: !1,
      else_block: !1,
      class_start_block: !1,
      do_block: !1,
      do_while: !1,
      import_block: !1,
      in_case_statement: !1,
      in_case: !1,
      case_body: !1,
      case_block: !1,
      indentation_level: k,
      alignment: 0,
      line_indent_level: r ? r.line_indent_level : k,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0,
    }
    return L
  }),
    (h.prototype._reset = function (r) {
      var w = r.match(/^[\t ]*/)[0]
      ;(this._last_last_text = ''),
        (this._output = new t(this._options, w)),
        (this._output.raw = this._options.test_output_raw),
        (this._flag_store = []),
        this.set_mode(_.BlockStatement)
      var k = new a(r, this._options)
      return (this._tokens = k.tokenize()), r
    }),
    (h.prototype.beautify = function () {
      if (this._options.disabled) return this._source_text
      var r,
        w = this._reset(this._source_text),
        k = this._options.eol
      this._options.eol === 'auto' &&
        ((k = `
`),
        w && i.lineBreak.test(w || '') && (k = w.match(i.lineBreak)[0]))
      for (var L = this._tokens.next(); L; )
        this.handle_token(L),
          (this._last_last_text = this._flags.last_token.text),
          (this._flags.last_token = L),
          (L = this._tokens.next())
      return (r = this._output.get_code(k)), r
    }),
    (h.prototype.handle_token = function (r, w) {
      r.type === s.START_EXPR
        ? this.handle_start_expr(r)
        : r.type === s.END_EXPR
          ? this.handle_end_expr(r)
          : r.type === s.START_BLOCK
            ? this.handle_start_block(r)
            : r.type === s.END_BLOCK
              ? this.handle_end_block(r)
              : r.type === s.WORD
                ? this.handle_word(r)
                : r.type === s.RESERVED
                  ? this.handle_word(r)
                  : r.type === s.SEMICOLON
                    ? this.handle_semicolon(r)
                    : r.type === s.STRING
                      ? this.handle_string(r)
                      : r.type === s.EQUALS
                        ? this.handle_equals(r)
                        : r.type === s.OPERATOR
                          ? this.handle_operator(r)
                          : r.type === s.COMMA
                            ? this.handle_comma(r)
                            : r.type === s.BLOCK_COMMENT
                              ? this.handle_block_comment(r, w)
                              : r.type === s.COMMENT
                                ? this.handle_comment(r, w)
                                : r.type === s.DOT
                                  ? this.handle_dot(r)
                                  : r.type === s.EOF
                                    ? this.handle_eof(r)
                                    : r.type === s.UNKNOWN
                                      ? this.handle_unknown(r, w)
                                      : this.handle_unknown(r, w)
    }),
    (h.prototype.handle_whitespace_and_comments = function (r, w) {
      var k = r.newlines,
        L = this._options.keep_array_indentation && x(this._flags.mode)
      if (r.comments_before)
        for (var I = r.comments_before.next(); I; )
          this.handle_whitespace_and_comments(I, w),
            this.handle_token(I, w),
            (I = r.comments_before.next())
      if (L) for (var $ = 0; $ < k; $ += 1) this.print_newline($ > 0, w)
      else if (
        (this._options.max_preserve_newlines &&
          k > this._options.max_preserve_newlines &&
          (k = this._options.max_preserve_newlines),
        this._options.preserve_newlines && k > 1)
      ) {
        this.print_newline(!1, w)
        for (var K = 1; K < k; K += 1) this.print_newline(!0, w)
      }
    })
  var O = ['async', 'break', 'continue', 'return', 'throw', 'yield']
  return (
    (h.prototype.allow_wrap_or_preserved_newline = function (r, w) {
      if (((w = w === void 0 ? !1 : w), !this._output.just_added_newline())) {
        var k = (this._options.preserve_newlines && r.newlines) || w,
          L = l(this._flags.last_token.text, u) || l(r.text, u)
        if (L) {
          var I =
            (l(this._flags.last_token.text, u) &&
              l(this._options.operator_position, f)) ||
            l(r.text, u)
          k = k && I
        }
        if (k) this.print_newline(!1, !0)
        else if (this._options.wrap_line_length) {
          if (y(this._flags.last_token, O)) return
          this._output.set_wrap_point()
        }
      }
    }),
    (h.prototype.print_newline = function (r, w) {
      if (
        !w &&
        this._flags.last_token.text !== ';' &&
        this._flags.last_token.text !== ',' &&
        this._flags.last_token.text !== '=' &&
        (this._flags.last_token.type !== s.OPERATOR ||
          this._flags.last_token.text === '--' ||
          this._flags.last_token.text === '++')
      )
        for (
          var k = this._tokens.peek();
          this._flags.mode === _.Statement &&
          !(this._flags.if_block && g(k, 'else')) &&
          !this._flags.do_block;

        )
          this.restore_mode()
      this._output.add_new_line(r) && (this._flags.multiline_frame = !0)
    }),
    (h.prototype.print_token_line_indentation = function (r) {
      this._output.just_added_newline() &&
        (this._options.keep_array_indentation &&
        r.newlines &&
        (r.text === '[' || x(this._flags.mode))
          ? (this._output.current_line.set_indent(-1),
            this._output.current_line.push(r.whitespace_before),
            (this._output.space_before_token = !1))
          : this._output.set_indent(
              this._flags.indentation_level,
              this._flags.alignment,
            ) &&
            (this._flags.line_indent_level = this._flags.indentation_level))
    }),
    (h.prototype.print_token = function (r) {
      if (this._output.raw) {
        this._output.add_raw_token(r)
        return
      }
      if (
        this._options.comma_first &&
        r.previous &&
        r.previous.type === s.COMMA &&
        this._output.just_added_newline() &&
        this._output.previous_line.last() === ','
      ) {
        var w = this._output.previous_line.pop()
        this._output.previous_line.is_empty() &&
          (this._output.previous_line.push(w),
          this._output.trim(!0),
          this._output.current_line.pop(),
          this._output.trim()),
          this.print_token_line_indentation(r),
          this._output.add_token(','),
          (this._output.space_before_token = !0)
      }
      this.print_token_line_indentation(r),
        (this._output.non_breaking_space = !0),
        this._output.add_token(r.text),
        this._output.previous_token_wrapped &&
          (this._flags.multiline_frame = !0)
    }),
    (h.prototype.indent = function () {
      ;(this._flags.indentation_level += 1),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        )
    }),
    (h.prototype.deindent = function () {
      this._flags.indentation_level > 0 &&
        (!this._flags.parent ||
          this._flags.indentation_level >
            this._flags.parent.indentation_level) &&
        ((this._flags.indentation_level -= 1),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        ))
    }),
    (h.prototype.set_mode = function (r) {
      this._flags
        ? (this._flag_store.push(this._flags),
          (this._previous_flags = this._flags))
        : (this._previous_flags = this.create_flags(null, r)),
        (this._flags = this.create_flags(this._previous_flags, r)),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        )
    }),
    (h.prototype.restore_mode = function () {
      this._flag_store.length > 0 &&
        ((this._previous_flags = this._flags),
        (this._flags = this._flag_store.pop()),
        this._previous_flags.mode === _.Statement &&
          b(this._output, this._previous_flags),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        ))
    }),
    (h.prototype.start_of_object_property = function () {
      return (
        this._flags.parent.mode === _.ObjectLiteral &&
        this._flags.mode === _.Statement &&
        ((this._flags.last_token.text === ':' &&
          this._flags.ternary_depth === 0) ||
          y(this._flags.last_token, ['get', 'set']))
      )
    }),
    (h.prototype.start_of_statement = function (r) {
      var w = !1
      return (
        (w =
          w ||
          (y(this._flags.last_token, ['var', 'let', 'const']) &&
            r.type === s.WORD)),
        (w = w || g(this._flags.last_token, 'do')),
        (w =
          w ||
          (!(
            this._flags.parent.mode === _.ObjectLiteral &&
            this._flags.mode === _.Statement
          ) &&
            y(this._flags.last_token, O) &&
            !r.newlines)),
        (w =
          w ||
          (g(this._flags.last_token, 'else') &&
            !(g(r, 'if') && !r.comments_before))),
        (w =
          w ||
          (this._flags.last_token.type === s.END_EXPR &&
            (this._previous_flags.mode === _.ForInitializer ||
              this._previous_flags.mode === _.Conditional))),
        (w =
          w ||
          (this._flags.last_token.type === s.WORD &&
            this._flags.mode === _.BlockStatement &&
            !this._flags.in_case &&
            !(r.text === '--' || r.text === '++') &&
            this._last_last_text !== 'function' &&
            r.type !== s.WORD &&
            r.type !== s.RESERVED)),
        (w =
          w ||
          (this._flags.mode === _.ObjectLiteral &&
            ((this._flags.last_token.text === ':' &&
              this._flags.ternary_depth === 0) ||
              y(this._flags.last_token, ['get', 'set'])))),
        w
          ? (this.set_mode(_.Statement),
            this.indent(),
            this.handle_whitespace_and_comments(r, !0),
            this.start_of_object_property() ||
              this.allow_wrap_or_preserved_newline(
                r,
                y(r, ['do', 'for', 'if', 'while']),
              ),
            !0)
          : !1
      )
    }),
    (h.prototype.handle_start_expr = function (r) {
      this.start_of_statement(r) || this.handle_whitespace_and_comments(r)
      var w = _.Expression
      if (r.text === '[') {
        if (
          this._flags.last_token.type === s.WORD ||
          this._flags.last_token.text === ')'
        ) {
          y(this._flags.last_token, o) &&
            (this._output.space_before_token = !0),
            this.print_token(r),
            this.set_mode(w),
            this.indent(),
            this._options.space_in_paren &&
              (this._output.space_before_token = !0)
          return
        }
        ;(w = _.ArrayLiteral),
          x(this._flags.mode) &&
            (this._flags.last_token.text === '[' ||
              (this._flags.last_token.text === ',' &&
                (this._last_last_text === ']' ||
                  this._last_last_text === '}'))) &&
            (this._options.keep_array_indentation || this.print_newline()),
          l(this._flags.last_token.type, [
            s.START_EXPR,
            s.END_EXPR,
            s.WORD,
            s.OPERATOR,
            s.DOT,
          ]) || (this._output.space_before_token = !0)
      } else {
        if (this._flags.last_token.type === s.RESERVED)
          this._flags.last_token.text === 'for'
            ? ((this._output.space_before_token =
                this._options.space_before_conditional),
              (w = _.ForInitializer))
            : l(this._flags.last_token.text, ['if', 'while', 'switch'])
              ? ((this._output.space_before_token =
                  this._options.space_before_conditional),
                (w = _.Conditional))
              : l(this._flags.last_word, ['await', 'async'])
                ? (this._output.space_before_token = !0)
                : this._flags.last_token.text === 'import' &&
                    r.whitespace_before === ''
                  ? (this._output.space_before_token = !1)
                  : (l(this._flags.last_token.text, o) ||
                      this._flags.last_token.text === 'catch') &&
                    (this._output.space_before_token = !0)
        else if (
          this._flags.last_token.type === s.EQUALS ||
          this._flags.last_token.type === s.OPERATOR
        )
          this.start_of_object_property() ||
            this.allow_wrap_or_preserved_newline(r)
        else if (this._flags.last_token.type === s.WORD) {
          this._output.space_before_token = !1
          var k = this._tokens.peek(-3)
          if (this._options.space_after_named_function && k) {
            var L = this._tokens.peek(-4)
            y(k, ['async', 'function']) ||
            (k.text === '*' && y(L, ['async', 'function']))
              ? (this._output.space_before_token = !0)
              : this._flags.mode === _.ObjectLiteral
                ? (k.text === '{' ||
                    k.text === ',' ||
                    (k.text === '*' && (L.text === '{' || L.text === ','))) &&
                  (this._output.space_before_token = !0)
                : this._flags.parent &&
                  this._flags.parent.class_start_block &&
                  (this._output.space_before_token = !0)
          }
        } else this.allow_wrap_or_preserved_newline(r)
        ;((this._flags.last_token.type === s.RESERVED &&
          (this._flags.last_word === 'function' ||
            this._flags.last_word === 'typeof')) ||
          (this._flags.last_token.text === '*' &&
            (l(this._last_last_text, ['function', 'yield']) ||
              (this._flags.mode === _.ObjectLiteral &&
                l(this._last_last_text, ['{', ',']))))) &&
          (this._output.space_before_token =
            this._options.space_after_anon_function)
      }
      this._flags.last_token.text === ';' ||
      this._flags.last_token.type === s.START_BLOCK
        ? this.print_newline()
        : (this._flags.last_token.type === s.END_EXPR ||
            this._flags.last_token.type === s.START_EXPR ||
            this._flags.last_token.type === s.END_BLOCK ||
            this._flags.last_token.text === '.' ||
            this._flags.last_token.type === s.COMMA) &&
          this.allow_wrap_or_preserved_newline(r, r.newlines),
        this.print_token(r),
        this.set_mode(w),
        this._options.space_in_paren && (this._output.space_before_token = !0),
        this.indent()
    }),
    (h.prototype.handle_end_expr = function (r) {
      for (; this._flags.mode === _.Statement; ) this.restore_mode()
      this.handle_whitespace_and_comments(r),
        this._flags.multiline_frame &&
          this.allow_wrap_or_preserved_newline(
            r,
            r.text === ']' &&
              x(this._flags.mode) &&
              !this._options.keep_array_indentation,
          ),
        this._options.space_in_paren &&
          (this._flags.last_token.type === s.START_EXPR &&
          !this._options.space_in_empty_paren
            ? (this._output.trim(), (this._output.space_before_token = !1))
            : (this._output.space_before_token = !0)),
        this.deindent(),
        this.print_token(r),
        this.restore_mode(),
        b(this._output, this._previous_flags),
        this._flags.do_while &&
          this._previous_flags.mode === _.Conditional &&
          ((this._previous_flags.mode = _.Expression),
          (this._flags.do_block = !1),
          (this._flags.do_while = !1))
    }),
    (h.prototype.handle_start_block = function (r) {
      this.handle_whitespace_and_comments(r)
      var w = this._tokens.peek(),
        k = this._tokens.peek(1)
      this._flags.last_word === 'switch' &&
      this._flags.last_token.type === s.END_EXPR
        ? (this.set_mode(_.BlockStatement),
          (this._flags.in_case_statement = !0))
        : this._flags.case_body
          ? this.set_mode(_.BlockStatement)
          : k &&
              ((l(k.text, [':', ',']) &&
                l(w.type, [s.STRING, s.WORD, s.RESERVED])) ||
                (l(w.text, ['get', 'set', '...']) &&
                  l(k.type, [s.WORD, s.RESERVED])))
            ? l(this._last_last_text, ['class', 'interface']) &&
              !l(k.text, [':', ','])
              ? this.set_mode(_.BlockStatement)
              : this.set_mode(_.ObjectLiteral)
            : this._flags.last_token.type === s.OPERATOR &&
                this._flags.last_token.text === '=>'
              ? this.set_mode(_.BlockStatement)
              : l(this._flags.last_token.type, [
                    s.EQUALS,
                    s.START_EXPR,
                    s.COMMA,
                    s.OPERATOR,
                  ]) ||
                  y(this._flags.last_token, [
                    'return',
                    'throw',
                    'import',
                    'default',
                  ])
                ? this.set_mode(_.ObjectLiteral)
                : this.set_mode(_.BlockStatement),
        this._flags.last_token &&
          y(this._flags.last_token.previous, ['class', 'extends']) &&
          (this._flags.class_start_block = !0)
      var L = !w.comments_before && w.text === '}',
        I =
          L &&
          this._flags.last_word === 'function' &&
          this._flags.last_token.type === s.END_EXPR
      if (this._options.brace_preserve_inline) {
        var $ = 0,
          K = null
        this._flags.inline_frame = !0
        do
          if ((($ += 1), (K = this._tokens.peek($ - 1)), K.newlines)) {
            this._flags.inline_frame = !1
            break
          }
        while (K.type !== s.EOF && !(K.type === s.END_BLOCK && K.opened === r))
      }
      ;(this._options.brace_style === 'expand' ||
        (this._options.brace_style === 'none' && r.newlines)) &&
      !this._flags.inline_frame
        ? this._flags.last_token.type !== s.OPERATOR &&
          (I ||
            this._flags.last_token.type === s.EQUALS ||
            (y(this._flags.last_token, T) &&
              this._flags.last_token.text !== 'else'))
          ? (this._output.space_before_token = !0)
          : this.print_newline(!1, !0)
        : (x(this._previous_flags.mode) &&
            (this._flags.last_token.type === s.START_EXPR ||
              this._flags.last_token.type === s.COMMA) &&
            ((this._flags.last_token.type === s.COMMA ||
              this._options.space_in_paren) &&
              (this._output.space_before_token = !0),
            (this._flags.last_token.type === s.COMMA ||
              (this._flags.last_token.type === s.START_EXPR &&
                this._flags.inline_frame)) &&
              (this.allow_wrap_or_preserved_newline(r),
              (this._previous_flags.multiline_frame =
                this._previous_flags.multiline_frame ||
                this._flags.multiline_frame),
              (this._flags.multiline_frame = !1))),
          this._flags.last_token.type !== s.OPERATOR &&
            this._flags.last_token.type !== s.START_EXPR &&
            (l(this._flags.last_token.type, [s.START_BLOCK, s.SEMICOLON]) &&
            !this._flags.inline_frame
              ? this.print_newline()
              : (this._output.space_before_token = !0))),
        this.print_token(r),
        this.indent(),
        !L &&
          !(this._options.brace_preserve_inline && this._flags.inline_frame) &&
          this.print_newline()
    }),
    (h.prototype.handle_end_block = function (r) {
      for (
        this.handle_whitespace_and_comments(r);
        this._flags.mode === _.Statement;

      )
        this.restore_mode()
      var w = this._flags.last_token.type === s.START_BLOCK
      this._flags.inline_frame && !w
        ? (this._output.space_before_token = !0)
        : this._options.brace_style === 'expand'
          ? w || this.print_newline()
          : w ||
            (x(this._flags.mode) && this._options.keep_array_indentation
              ? ((this._options.keep_array_indentation = !1),
                this.print_newline(),
                (this._options.keep_array_indentation = !0))
              : this.print_newline()),
        this.restore_mode(),
        this.print_token(r)
    }),
    (h.prototype.handle_word = function (r) {
      if (r.type === s.RESERVED) {
        if (l(r.text, ['set', 'get']) && this._flags.mode !== _.ObjectLiteral)
          r.type = s.WORD
        else if (r.text === 'import' && l(this._tokens.peek().text, ['(', '.']))
          r.type = s.WORD
        else if (l(r.text, ['as', 'from']) && !this._flags.import_block)
          r.type = s.WORD
        else if (this._flags.mode === _.ObjectLiteral) {
          var w = this._tokens.peek()
          w.text === ':' && (r.type = s.WORD)
        }
      }
      if (
        (this.start_of_statement(r)
          ? y(this._flags.last_token, ['var', 'let', 'const']) &&
            r.type === s.WORD &&
            (this._flags.declaration_statement = !0)
          : r.newlines &&
              !A(this._flags.mode) &&
              (this._flags.last_token.type !== s.OPERATOR ||
                this._flags.last_token.text === '--' ||
                this._flags.last_token.text === '++') &&
              this._flags.last_token.type !== s.EQUALS &&
              (this._options.preserve_newlines ||
                !y(this._flags.last_token, [
                  'var',
                  'let',
                  'const',
                  'set',
                  'get',
                ]))
            ? (this.handle_whitespace_and_comments(r), this.print_newline())
            : this.handle_whitespace_and_comments(r),
        this._flags.do_block && !this._flags.do_while)
      )
        if (g(r, 'while')) {
          ;(this._output.space_before_token = !0),
            this.print_token(r),
            (this._output.space_before_token = !0),
            (this._flags.do_while = !0)
          return
        } else this.print_newline(), (this._flags.do_block = !1)
      if (this._flags.if_block)
        if (!this._flags.else_block && g(r, 'else')) this._flags.else_block = !0
        else {
          for (; this._flags.mode === _.Statement; ) this.restore_mode()
          ;(this._flags.if_block = !1), (this._flags.else_block = !1)
        }
      if (this._flags.in_case_statement && y(r, ['case', 'default'])) {
        this.print_newline(),
          !this._flags.case_block &&
            (this._flags.case_body || this._options.jslint_happy) &&
            this.deindent(),
          (this._flags.case_body = !1),
          this.print_token(r),
          (this._flags.in_case = !0)
        return
      }
      if (
        ((this._flags.last_token.type === s.COMMA ||
          this._flags.last_token.type === s.START_EXPR ||
          this._flags.last_token.type === s.EQUALS ||
          this._flags.last_token.type === s.OPERATOR) &&
          !this.start_of_object_property() &&
          !(
            l(this._flags.last_token.text, ['+', '-']) &&
            this._last_last_text === ':' &&
            this._flags.parent.mode === _.ObjectLiteral
          ) &&
          this.allow_wrap_or_preserved_newline(r),
        g(r, 'function'))
      ) {
        ;(l(this._flags.last_token.text, ['}', ';']) ||
          (this._output.just_added_newline() &&
            !(
              l(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) ||
              this._flags.last_token.type === s.OPERATOR
            ))) &&
          !this._output.just_added_blankline() &&
          !r.comments_before &&
          (this.print_newline(), this.print_newline(!0)),
          this._flags.last_token.type === s.RESERVED ||
          this._flags.last_token.type === s.WORD
            ? y(this._flags.last_token, ['get', 'set', 'new', 'export']) ||
              y(this._flags.last_token, O)
              ? (this._output.space_before_token = !0)
              : g(this._flags.last_token, 'default') &&
                  this._last_last_text === 'export'
                ? (this._output.space_before_token = !0)
                : this._flags.last_token.text === 'declare'
                  ? (this._output.space_before_token = !0)
                  : this.print_newline()
            : this._flags.last_token.type === s.OPERATOR ||
                this._flags.last_token.text === '='
              ? (this._output.space_before_token = !0)
              : (!this._flags.multiline_frame &&
                  (A(this._flags.mode) || x(this._flags.mode))) ||
                this.print_newline(),
          this.print_token(r),
          (this._flags.last_word = r.text)
        return
      }
      var k = 'NONE'
      if (
        (this._flags.last_token.type === s.END_BLOCK
          ? this._previous_flags.inline_frame
            ? (k = 'SPACE')
            : y(r, ['else', 'catch', 'finally', 'from'])
              ? this._options.brace_style === 'expand' ||
                this._options.brace_style === 'end-expand' ||
                (this._options.brace_style === 'none' && r.newlines)
                ? (k = 'NEWLINE')
                : ((k = 'SPACE'), (this._output.space_before_token = !0))
              : (k = 'NEWLINE')
          : this._flags.last_token.type === s.SEMICOLON &&
              this._flags.mode === _.BlockStatement
            ? (k = 'NEWLINE')
            : this._flags.last_token.type === s.SEMICOLON && A(this._flags.mode)
              ? (k = 'SPACE')
              : this._flags.last_token.type === s.STRING
                ? (k = 'NEWLINE')
                : this._flags.last_token.type === s.RESERVED ||
                    this._flags.last_token.type === s.WORD ||
                    (this._flags.last_token.text === '*' &&
                      (l(this._last_last_text, ['function', 'yield']) ||
                        (this._flags.mode === _.ObjectLiteral &&
                          l(this._last_last_text, ['{', ',']))))
                  ? (k = 'SPACE')
                  : this._flags.last_token.type === s.START_BLOCK
                    ? this._flags.inline_frame
                      ? (k = 'SPACE')
                      : (k = 'NEWLINE')
                    : this._flags.last_token.type === s.END_EXPR &&
                      ((this._output.space_before_token = !0), (k = 'NEWLINE')),
        y(r, o) &&
          this._flags.last_token.text !== ')' &&
          (this._flags.inline_frame ||
          this._flags.last_token.text === 'else' ||
          this._flags.last_token.text === 'export'
            ? (k = 'SPACE')
            : (k = 'NEWLINE')),
        y(r, ['else', 'catch', 'finally']))
      )
        if (
          (!(
            this._flags.last_token.type === s.END_BLOCK &&
            this._previous_flags.mode === _.BlockStatement
          ) ||
            this._options.brace_style === 'expand' ||
            this._options.brace_style === 'end-expand' ||
            (this._options.brace_style === 'none' && r.newlines)) &&
          !this._flags.inline_frame
        )
          this.print_newline()
        else {
          this._output.trim(!0)
          var L = this._output.current_line
          L.last() !== '}' && this.print_newline(),
            (this._output.space_before_token = !0)
        }
      else
        k === 'NEWLINE'
          ? y(this._flags.last_token, T)
            ? (this._output.space_before_token = !0)
            : this._flags.last_token.text === 'declare' &&
                y(r, ['var', 'let', 'const'])
              ? (this._output.space_before_token = !0)
              : this._flags.last_token.type !== s.END_EXPR
                ? (this._flags.last_token.type !== s.START_EXPR ||
                    !y(r, ['var', 'let', 'const'])) &&
                  this._flags.last_token.text !== ':' &&
                  (g(r, 'if') && g(r.previous, 'else')
                    ? (this._output.space_before_token = !0)
                    : this.print_newline())
                : y(r, o) &&
                  this._flags.last_token.text !== ')' &&
                  this.print_newline()
          : this._flags.multiline_frame &&
              x(this._flags.mode) &&
              this._flags.last_token.text === ',' &&
              this._last_last_text === '}'
            ? this.print_newline()
            : k === 'SPACE' && (this._output.space_before_token = !0)
      r.previous &&
        (r.previous.type === s.WORD || r.previous.type === s.RESERVED) &&
        (this._output.space_before_token = !0),
        this.print_token(r),
        (this._flags.last_word = r.text),
        r.type === s.RESERVED &&
          (r.text === 'do'
            ? (this._flags.do_block = !0)
            : r.text === 'if'
              ? (this._flags.if_block = !0)
              : r.text === 'import'
                ? (this._flags.import_block = !0)
                : this._flags.import_block &&
                  g(r, 'from') &&
                  (this._flags.import_block = !1))
    }),
    (h.prototype.handle_semicolon = function (r) {
      this.start_of_statement(r)
        ? (this._output.space_before_token = !1)
        : this.handle_whitespace_and_comments(r)
      for (
        var w = this._tokens.peek();
        this._flags.mode === _.Statement &&
        !(this._flags.if_block && g(w, 'else')) &&
        !this._flags.do_block;

      )
        this.restore_mode()
      this._flags.import_block && (this._flags.import_block = !1),
        this.print_token(r)
    }),
    (h.prototype.handle_string = function (r) {
      ;(r.text.startsWith('`') &&
        r.newlines === 0 &&
        r.whitespace_before === '' &&
        (r.previous.text === ')' || this._flags.last_token.type === s.WORD)) ||
        (this.start_of_statement(r)
          ? (this._output.space_before_token = !0)
          : (this.handle_whitespace_and_comments(r),
            this._flags.last_token.type === s.RESERVED ||
            this._flags.last_token.type === s.WORD ||
            this._flags.inline_frame
              ? (this._output.space_before_token = !0)
              : this._flags.last_token.type === s.COMMA ||
                  this._flags.last_token.type === s.START_EXPR ||
                  this._flags.last_token.type === s.EQUALS ||
                  this._flags.last_token.type === s.OPERATOR
                ? this.start_of_object_property() ||
                  this.allow_wrap_or_preserved_newline(r)
                : r.text.startsWith('`') &&
                    this._flags.last_token.type === s.END_EXPR &&
                    (r.previous.text === ']' || r.previous.text === ')') &&
                    r.newlines === 0
                  ? (this._output.space_before_token = !0)
                  : this.print_newline())),
        this.print_token(r)
    }),
    (h.prototype.handle_equals = function (r) {
      this.start_of_statement(r) || this.handle_whitespace_and_comments(r),
        this._flags.declaration_statement &&
          (this._flags.declaration_assignment = !0),
        (this._output.space_before_token = !0),
        this.print_token(r),
        (this._output.space_before_token = !0)
    }),
    (h.prototype.handle_comma = function (r) {
      this.handle_whitespace_and_comments(r, !0),
        this.print_token(r),
        (this._output.space_before_token = !0),
        this._flags.declaration_statement
          ? (A(this._flags.parent.mode) &&
              (this._flags.declaration_assignment = !1),
            this._flags.declaration_assignment
              ? ((this._flags.declaration_assignment = !1),
                this.print_newline(!1, !0))
              : this._options.comma_first &&
                this.allow_wrap_or_preserved_newline(r))
          : this._flags.mode === _.ObjectLiteral ||
              (this._flags.mode === _.Statement &&
                this._flags.parent.mode === _.ObjectLiteral)
            ? (this._flags.mode === _.Statement && this.restore_mode(),
              this._flags.inline_frame || this.print_newline())
            : this._options.comma_first &&
              this.allow_wrap_or_preserved_newline(r)
    }),
    (h.prototype.handle_operator = function (r) {
      var w =
          r.text === '*' &&
          (y(this._flags.last_token, ['function', 'yield']) ||
            l(this._flags.last_token.type, [
              s.START_BLOCK,
              s.COMMA,
              s.END_BLOCK,
              s.SEMICOLON,
            ])),
        k =
          l(r.text, ['-', '+']) &&
          (l(this._flags.last_token.type, [
            s.START_BLOCK,
            s.START_EXPR,
            s.EQUALS,
            s.OPERATOR,
          ]) ||
            l(this._flags.last_token.text, o) ||
            this._flags.last_token.text === ',')
      if (!this.start_of_statement(r)) {
        var L = !w
        this.handle_whitespace_and_comments(r, L)
      }
      if (r.text === '*' && this._flags.last_token.type === s.DOT) {
        this.print_token(r)
        return
      }
      if (r.text === '::') {
        this.print_token(r)
        return
      }
      if (l(r.text, ['-', '+']) && this.start_of_object_property()) {
        this.print_token(r)
        return
      }
      if (
        (this._flags.last_token.type === s.OPERATOR &&
          l(this._options.operator_position, f) &&
          this.allow_wrap_or_preserved_newline(r),
        r.text === ':' && this._flags.in_case)
      ) {
        this.print_token(r),
          (this._flags.in_case = !1),
          (this._flags.case_body = !0),
          this._tokens.peek().type !== s.START_BLOCK
            ? (this.indent(),
              this.print_newline(),
              (this._flags.case_block = !1))
            : ((this._flags.case_block = !0),
              (this._output.space_before_token = !0))
        return
      }
      var I = !0,
        $ = !0,
        K = !1
      if (
        (r.text === ':'
          ? this._flags.ternary_depth === 0
            ? (I = !1)
            : ((this._flags.ternary_depth -= 1), (K = !0))
          : r.text === '?' && (this._flags.ternary_depth += 1),
        !k && !w && this._options.preserve_newlines && l(r.text, u))
      ) {
        var m = r.text === ':',
          E = m && K,
          N = m && !K
        switch (this._options.operator_position) {
          case M.before_newline:
            ;(this._output.space_before_token = !N),
              this.print_token(r),
              (!m || E) && this.allow_wrap_or_preserved_newline(r),
              (this._output.space_before_token = !0)
            return
          case M.after_newline:
            ;(this._output.space_before_token = !0),
              !m || E
                ? this._tokens.peek().newlines
                  ? this.print_newline(!1, !0)
                  : this.allow_wrap_or_preserved_newline(r)
                : (this._output.space_before_token = !1),
              this.print_token(r),
              (this._output.space_before_token = !0)
            return
          case M.preserve_newline:
            N || this.allow_wrap_or_preserved_newline(r),
              (I = !(this._output.just_added_newline() || N)),
              (this._output.space_before_token = I),
              this.print_token(r),
              (this._output.space_before_token = !0)
            return
        }
      }
      if (w) {
        this.allow_wrap_or_preserved_newline(r), (I = !1)
        var D = this._tokens.peek()
        $ = D && l(D.type, [s.WORD, s.RESERVED])
      } else if (r.text === '...')
        this.allow_wrap_or_preserved_newline(r),
          (I = this._flags.last_token.type === s.START_BLOCK),
          ($ = !1)
      else if (l(r.text, ['--', '++', '!', '~']) || k) {
        if (
          ((this._flags.last_token.type === s.COMMA ||
            this._flags.last_token.type === s.START_EXPR) &&
            this.allow_wrap_or_preserved_newline(r),
          (I = !1),
          ($ = !1),
          r.newlines && (r.text === '--' || r.text === '++' || r.text === '~'))
        ) {
          var U = y(this._flags.last_token, T) && r.newlines
          U &&
            (this._previous_flags.if_block ||
              this._previous_flags.else_block) &&
            this.restore_mode(),
            this.print_newline(U, !0)
        }
        this._flags.last_token.text === ';' && A(this._flags.mode) && (I = !0),
          this._flags.last_token.type === s.RESERVED
            ? (I = !0)
            : this._flags.last_token.type === s.END_EXPR
              ? (I = !(
                  this._flags.last_token.text === ']' &&
                  (r.text === '--' || r.text === '++')
                ))
              : this._flags.last_token.type === s.OPERATOR &&
                ((I =
                  l(r.text, ['--', '-', '++', '+']) &&
                  l(this._flags.last_token.text, ['--', '-', '++', '+'])),
                l(r.text, ['+', '-']) &&
                  l(this._flags.last_token.text, ['--', '++']) &&
                  ($ = !0)),
          ((this._flags.mode === _.BlockStatement &&
            !this._flags.inline_frame) ||
            this._flags.mode === _.Statement) &&
            (this._flags.last_token.text === '{' ||
              this._flags.last_token.text === ';') &&
            this.print_newline()
      }
      ;(this._output.space_before_token = this._output.space_before_token || I),
        this.print_token(r),
        (this._output.space_before_token = $)
    }),
    (h.prototype.handle_block_comment = function (r, w) {
      if (this._output.raw) {
        this._output.add_raw_token(r),
          r.directives &&
            r.directives.preserve === 'end' &&
            (this._output.raw = this._options.test_output_raw)
        return
      }
      if (r.directives) {
        this.print_newline(!1, w),
          this.print_token(r),
          r.directives.preserve === 'start' && (this._output.raw = !0),
          this.print_newline(!1, !0)
        return
      }
      if (!i.newline.test(r.text) && !r.newlines) {
        ;(this._output.space_before_token = !0),
          this.print_token(r),
          (this._output.space_before_token = !0)
        return
      } else this.print_block_commment(r, w)
    }),
    (h.prototype.print_block_commment = function (r, w) {
      var k = S(r.text),
        L,
        I = !1,
        $ = !1,
        K = r.whitespace_before,
        m = K.length
      if (
        (this.print_newline(!1, w),
        this.print_token_line_indentation(r),
        this._output.add_token(k[0]),
        this.print_newline(!1, w),
        k.length > 1)
      ) {
        for (
          k = k.slice(1),
            I = p(k, '*'),
            $ = v(k, K),
            I && (this._flags.alignment = 1),
            L = 0;
          L < k.length;
          L++
        )
          I
            ? (this.print_token_line_indentation(r),
              this._output.add_token(c(k[L])))
            : $ && k[L]
              ? (this.print_token_line_indentation(r),
                this._output.add_token(k[L].substring(m)))
              : (this._output.current_line.set_indent(-1),
                this._output.add_token(k[L])),
            this.print_newline(!1, w)
        this._flags.alignment = 0
      }
    }),
    (h.prototype.handle_comment = function (r, w) {
      r.newlines ? this.print_newline(!1, w) : this._output.trim(!0),
        (this._output.space_before_token = !0),
        this.print_token(r),
        this.print_newline(!1, w)
    }),
    (h.prototype.handle_dot = function (r) {
      this.start_of_statement(r) || this.handle_whitespace_and_comments(r, !0),
        this._flags.last_token.text.match('^[0-9]+$') &&
          (this._output.space_before_token = !0),
        y(this._flags.last_token, T)
          ? (this._output.space_before_token = !1)
          : this.allow_wrap_or_preserved_newline(
              r,
              this._flags.last_token.text === ')' &&
                this._options.break_chained_methods,
            ),
        this._options.unindent_chained_methods &&
          this._output.just_added_newline() &&
          this.deindent(),
        this.print_token(r)
    }),
    (h.prototype.handle_unknown = function (r, w) {
      this.print_token(r),
        r.text[r.text.length - 1] ===
          `
` && this.print_newline(!1, w)
    }),
    (h.prototype.handle_eof = function (r) {
      for (; this._flags.mode === _.Statement; ) this.restore_mode()
      this.handle_whitespace_and_comments(r)
    }),
    (fe.Beautifier = h),
    fe
  )
}
var vn
function ys() {
  if (vn) return Wt.exports
  vn = 1
  var t = bs().Beautifier,
    e = Jn().Options
  function i(n, a) {
    var o = new t(n, a)
    return o.beautify()
  }
  return (
    (Wt.exports = i),
    (Wt.exports.defaultOptions = function () {
      return new e()
    }),
    Wt.exports
  )
}
var Gt = { exports: {} },
  Oe = {},
  Ae = {},
  kn
function ti() {
  if (kn) return Ae
  kn = 1
  var t = De().Options
  function e(i) {
    t.call(this, i, 'css'),
      (this.selector_separator_newline = this._get_boolean(
        'selector_separator_newline',
        !0,
      )),
      (this.newline_between_rules = this._get_boolean(
        'newline_between_rules',
        !0,
      ))
    var n = this._get_boolean('space_around_selector_separator')
    this.space_around_combinator =
      this._get_boolean('space_around_combinator') || n
    var a = this._get_selection_list('brace_style', [
      'collapse',
      'expand',
      'end-expand',
      'none',
      'preserve-inline',
    ])
    this.brace_style = 'collapse'
    for (var o = 0; o < a.length; o++)
      a[o] !== 'expand'
        ? (this.brace_style = 'collapse')
        : (this.brace_style = a[o])
  }
  return (e.prototype = new t()), (Ae.Options = e), Ae
}
var wn
function vs() {
  if (wn) return Oe
  wn = 1
  var t = ti().Options,
    e = Ie().Output,
    i = Be().InputScanner,
    n = Pe().Directives,
    a = new n(/\/\*/, /\*\//),
    o = /\r\n|[\r\n]/,
    u = /\r\n|[\r\n]/g,
    s = /\s/,
    l = /(?:\s|\n)+/g,
    c = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
    d = /\/\/(?:[^\n\r\u2028\u2029]*)/g
  function g(y, T) {
    ;(this._source_text = y || ''),
      (this._options = new t(T)),
      (this._ch = null),
      (this._input = null),
      (this.NESTED_AT_RULE = {
        page: !0,
        'font-face': !0,
        keyframes: !0,
        media: !0,
        supports: !0,
        document: !0,
      }),
      (this.CONDITIONAL_GROUP_RULE = { media: !0, supports: !0, document: !0 }),
      (this.NON_SEMICOLON_NEWLINE_PROPERTY = [
        'grid-template-areas',
        'grid-template',
      ])
  }
  return (
    (g.prototype.eatString = function (y) {
      var T = ''
      for (this._ch = this._input.next(); this._ch; ) {
        if (((T += this._ch), this._ch === '\\')) T += this._input.next()
        else if (
          y.indexOf(this._ch) !== -1 ||
          this._ch ===
            `
`
        )
          break
        this._ch = this._input.next()
      }
      return T
    }),
    (g.prototype.eatWhitespace = function (y) {
      for (
        var T = s.test(this._input.peek()), j = 0;
        s.test(this._input.peek());

      )
        (this._ch = this._input.next()),
          y &&
            this._ch ===
              `
` &&
            (j === 0 || j < this._options.max_preserve_newlines) &&
            (j++, this._output.add_new_line(!0))
      return T
    }),
    (g.prototype.foundNestedPseudoClass = function () {
      for (var y = 0, T = 1, j = this._input.peek(T); j; ) {
        if (j === '{') return !0
        if (j === '(') y += 1
        else if (j === ')') {
          if (y === 0) return !1
          y -= 1
        } else if (j === ';' || j === '}') return !1
        T++, (j = this._input.peek(T))
      }
      return !1
    }),
    (g.prototype.print_string = function (y) {
      this._output.set_indent(this._indentLevel),
        (this._output.non_breaking_space = !0),
        this._output.add_token(y)
    }),
    (g.prototype.preserveSingleSpace = function (y) {
      y && (this._output.space_before_token = !0)
    }),
    (g.prototype.indent = function () {
      this._indentLevel++
    }),
    (g.prototype.outdent = function () {
      this._indentLevel > 0 && this._indentLevel--
    }),
    (g.prototype.beautify = function () {
      if (this._options.disabled) return this._source_text
      var y = this._source_text,
        T = this._options.eol
      T === 'auto' &&
        ((T = `
`),
        y && o.test(y || '') && (T = y.match(o)[0])),
        (y = y.replace(
          u,
          `
`,
        ))
      var j = y.match(/^[\t ]*/)[0]
      ;(this._output = new e(this._options, j)),
        (this._input = new i(y)),
        (this._indentLevel = 0),
        (this._nestedLevel = 0),
        (this._ch = null)
      for (
        var M = 0,
          f = !1,
          _ = !1,
          b = !1,
          S = !1,
          x = !1,
          A = this._ch,
          p = !1,
          v,
          h,
          O;
        (v = this._input.read(l)),
          (h = v !== ''),
          (O = A),
          (this._ch = this._input.next()),
          this._ch === '\\' &&
            this._input.hasNext() &&
            (this._ch += this._input.next()),
          (A = this._ch),
          this._ch;

      )
        if (this._ch === '/' && this._input.peek() === '*') {
          this._output.add_new_line(), this._input.back()
          var r = this._input.read(c),
            w = a.get_directives(r)
          w && w.ignore === 'start' && (r += a.readIgnored(this._input)),
            this.print_string(r),
            this.eatWhitespace(!0),
            this._output.add_new_line()
        } else if (this._ch === '/' && this._input.peek() === '/')
          (this._output.space_before_token = !0),
            this._input.back(),
            this.print_string(this._input.read(d)),
            this.eatWhitespace(!0)
        else if (this._ch === '$') {
          this.preserveSingleSpace(h), this.print_string(this._ch)
          var k = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g)
          k.match(/[ :]$/) &&
            ((k = this.eatString(': ').replace(/\s+$/, '')),
            this.print_string(k),
            (this._output.space_before_token = !0)),
            M === 0 && k.indexOf(':') !== -1 && ((_ = !0), this.indent())
        } else if (this._ch === '@')
          if ((this.preserveSingleSpace(h), this._input.peek() === '{'))
            this.print_string(this._ch + this.eatString('}'))
          else {
            this.print_string(this._ch)
            var L = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g)
            L.match(/[ :]$/) &&
              ((L = this.eatString(': ').replace(/\s+$/, '')),
              this.print_string(L),
              (this._output.space_before_token = !0)),
              M === 0 && L.indexOf(':') !== -1
                ? ((_ = !0), this.indent())
                : L in this.NESTED_AT_RULE
                  ? ((this._nestedLevel += 1),
                    L in this.CONDITIONAL_GROUP_RULE && (b = !0))
                  : M === 0 && !_ && (S = !0)
          }
        else if (this._ch === '#' && this._input.peek() === '{')
          this.preserveSingleSpace(h),
            this.print_string(this._ch + this.eatString('}'))
        else if (this._ch === '{')
          _ && ((_ = !1), this.outdent()),
            (S = !1),
            b
              ? ((b = !1), (f = this._indentLevel >= this._nestedLevel))
              : (f = this._indentLevel >= this._nestedLevel - 1),
            this._options.newline_between_rules &&
              f &&
              this._output.previous_line &&
              this._output.previous_line.item(-1) !== '{' &&
              this._output.ensure_empty_line_above('/', ','),
            (this._output.space_before_token = !0),
            this._options.brace_style === 'expand'
              ? (this._output.add_new_line(),
                this.print_string(this._ch),
                this.indent(),
                this._output.set_indent(this._indentLevel))
              : (O === '('
                  ? (this._output.space_before_token = !1)
                  : O !== ',' && this.indent(),
                this.print_string(this._ch)),
            this.eatWhitespace(!0),
            this._output.add_new_line()
        else if (this._ch === '}')
          this.outdent(),
            this._output.add_new_line(),
            O === '{' && this._output.trim(!0),
            _ && (this.outdent(), (_ = !1)),
            this.print_string(this._ch),
            (f = !1),
            this._nestedLevel && this._nestedLevel--,
            this.eatWhitespace(!0),
            this._output.add_new_line(),
            this._options.newline_between_rules &&
              !this._output.just_added_blankline() &&
              this._input.peek() !== '}' &&
              this._output.add_new_line(!0),
            this._input.peek() === ')' &&
              (this._output.trim(!0),
              this._options.brace_style === 'expand' &&
                this._output.add_new_line(!0))
        else if (this._ch === ':') {
          for (var I = 0; I < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; I++)
            if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[I])) {
              p = !0
              break
            }
          ;(f || b) &&
          !(this._input.lookBack('&') || this.foundNestedPseudoClass()) &&
          !this._input.lookBack('(') &&
          !S &&
          M === 0
            ? (this.print_string(':'),
              _ ||
                ((_ = !0),
                (this._output.space_before_token = !0),
                this.eatWhitespace(!0),
                this.indent()))
            : (this._input.lookBack(' ') &&
                (this._output.space_before_token = !0),
              this._input.peek() === ':'
                ? ((this._ch = this._input.next()), this.print_string('::'))
                : this.print_string(':'))
        } else if (this._ch === '"' || this._ch === "'") {
          var $ = O === '"' || O === "'"
          this.preserveSingleSpace($ || h),
            this.print_string(this._ch + this.eatString(this._ch)),
            this.eatWhitespace(!0)
        } else if (this._ch === ';')
          (p = !1),
            M === 0
              ? (_ && (this.outdent(), (_ = !1)),
                (S = !1),
                this.print_string(this._ch),
                this.eatWhitespace(!0),
                this._input.peek() !== '/' && this._output.add_new_line())
              : (this.print_string(this._ch),
                this.eatWhitespace(!0),
                (this._output.space_before_token = !0))
        else if (this._ch === '(')
          if (this._input.lookBack('url'))
            this.print_string(this._ch),
              this.eatWhitespace(),
              M++,
              this.indent(),
              (this._ch = this._input.next()),
              this._ch === ')' || this._ch === '"' || this._ch === "'"
                ? this._input.back()
                : this._ch &&
                  (this.print_string(this._ch + this.eatString(')')),
                  M && (M--, this.outdent()))
          else {
            var K = !1
            this._input.lookBack('with') && (K = !0),
              this.preserveSingleSpace(h || K),
              this.print_string(this._ch),
              _ && O === '$' && this._options.selector_separator_newline
                ? (this._output.add_new_line(), (x = !0))
                : (this.eatWhitespace(), M++, this.indent())
          }
        else if (this._ch === ')')
          M && (M--, this.outdent()),
            x &&
              this._input.peek() === ';' &&
              this._options.selector_separator_newline &&
              ((x = !1), this.outdent(), this._output.add_new_line()),
            this.print_string(this._ch)
        else if (this._ch === ',')
          this.print_string(this._ch),
            this.eatWhitespace(!0),
            this._options.selector_separator_newline &&
            (!_ || x) &&
            M === 0 &&
            !S
              ? this._output.add_new_line()
              : (this._output.space_before_token = !0)
        else if (
          (this._ch === '>' || this._ch === '+' || this._ch === '~') &&
          !_ &&
          M === 0
        )
          this._options.space_around_combinator
            ? ((this._output.space_before_token = !0),
              this.print_string(this._ch),
              (this._output.space_before_token = !0))
            : (this.print_string(this._ch),
              this.eatWhitespace(),
              this._ch && s.test(this._ch) && (this._ch = ''))
        else if (this._ch === ']') this.print_string(this._ch)
        else if (this._ch === '[')
          this.preserveSingleSpace(h), this.print_string(this._ch)
        else if (this._ch === '=')
          this.eatWhitespace(),
            this.print_string('='),
            s.test(this._ch) && (this._ch = '')
        else if (this._ch === '!' && !this._input.lookBack('\\'))
          (this._output.space_before_token = !0), this.print_string(this._ch)
        else {
          var m = O === '"' || O === "'"
          this.preserveSingleSpace(m || h),
            this.print_string(this._ch),
            !this._output.just_added_newline() &&
              this._input.peek() ===
                `
` &&
              p &&
              this._output.add_new_line()
        }
      var E = this._output.get_code(T)
      return E
    }),
    (Oe.Beautifier = g),
    Oe
  )
}
var xn
function ks() {
  if (xn) return Gt.exports
  xn = 1
  var t = vs().Beautifier,
    e = ti().Options
  function i(n, a) {
    var o = new t(n, a)
    return o.beautify()
  }
  return (
    (Gt.exports = i),
    (Gt.exports.defaultOptions = function () {
      return new e()
    }),
    Gt.exports
  )
}
var Vt = { exports: {} },
  Te = {},
  Se = {},
  En
function ei() {
  if (En) return Se
  En = 1
  var t = De().Options
  function e(i) {
    t.call(this, i, 'html'),
      this.templating.length === 1 &&
        this.templating[0] === 'auto' &&
        (this.templating = ['django', 'erb', 'handlebars', 'php']),
      (this.indent_inner_html = this._get_boolean('indent_inner_html')),
      (this.indent_body_inner_html = this._get_boolean(
        'indent_body_inner_html',
        !0,
      )),
      (this.indent_head_inner_html = this._get_boolean(
        'indent_head_inner_html',
        !0,
      )),
      (this.indent_handlebars = this._get_boolean('indent_handlebars', !0)),
      (this.wrap_attributes = this._get_selection('wrap_attributes', [
        'auto',
        'force',
        'force-aligned',
        'force-expand-multiline',
        'aligned-multiple',
        'preserve',
        'preserve-aligned',
      ])),
      (this.wrap_attributes_min_attrs = this._get_number(
        'wrap_attributes_min_attrs',
        2,
      )),
      (this.wrap_attributes_indent_size = this._get_number(
        'wrap_attributes_indent_size',
        this.indent_size,
      )),
      (this.extra_liners = this._get_array('extra_liners', [
        'head',
        'body',
        '/html',
      ])),
      (this.inline = this._get_array('inline', [
        'a',
        'abbr',
        'area',
        'audio',
        'b',
        'bdi',
        'bdo',
        'br',
        'button',
        'canvas',
        'cite',
        'code',
        'data',
        'datalist',
        'del',
        'dfn',
        'em',
        'embed',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'map',
        'mark',
        'math',
        'meter',
        'noscript',
        'object',
        'output',
        'progress',
        'q',
        'ruby',
        's',
        'samp',
        'select',
        'small',
        'span',
        'strong',
        'sub',
        'sup',
        'svg',
        'template',
        'textarea',
        'time',
        'u',
        'var',
        'video',
        'wbr',
        'text',
        'acronym',
        'big',
        'strike',
        'tt',
      ])),
      (this.inline_custom_elements = this._get_boolean(
        'inline_custom_elements',
        !0,
      )),
      (this.void_elements = this._get_array('void_elements', [
        'area',
        'base',
        'br',
        'col',
        'embed',
        'hr',
        'img',
        'input',
        'keygen',
        'link',
        'menuitem',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
        '!doctype',
        '?xml',
        'basefont',
        'isindex',
      ])),
      (this.unformatted = this._get_array('unformatted', [])),
      (this.content_unformatted = this._get_array('content_unformatted', [
        'pre',
        'textarea',
      ])),
      (this.unformatted_content_delimiter = this._get_characters(
        'unformatted_content_delimiter',
      )),
      (this.indent_scripts = this._get_selection('indent_scripts', [
        'normal',
        'keep',
        'separate',
      ]))
  }
  return (e.prototype = new t()), (Se.Options = e), Se
}
var Xt = {},
  On
function An() {
  if (On) return Xt
  On = 1
  var t = ee().Tokenizer,
    e = ee().TOKEN,
    i = Pe().Directives,
    n = Yn().TemplatablePattern,
    a = ae().Pattern,
    o = {
      TAG_OPEN: 'TK_TAG_OPEN',
      TAG_CLOSE: 'TK_TAG_CLOSE',
      CONTROL_FLOW_OPEN: 'TK_CONTROL_FLOW_OPEN',
      CONTROL_FLOW_CLOSE: 'TK_CONTROL_FLOW_CLOSE',
      ATTRIBUTE: 'TK_ATTRIBUTE',
      EQUALS: 'TK_EQUALS',
      VALUE: 'TK_VALUE',
      COMMENT: 'TK_COMMENT',
      TEXT: 'TK_TEXT',
      UNKNOWN: 'TK_UNKNOWN',
      START: e.START,
      RAW: e.RAW,
      EOF: e.EOF,
    },
    u = new i(/<\!--/, /-->/),
    s = function (l, c) {
      t.call(this, l, c), (this._current_tag_name = '')
      var d = new n(this._input).read_options(this._options),
        g = new a(this._input)
      if (
        ((this.__patterns = {
          word: d.until(/[\n\r\t <]/),
          word_control_flow_close_excluded: d.until(/[\n\r\t <}]/),
          single_quote: d.until_after(/'/),
          double_quote: d.until_after(/"/),
          attribute: d.until(/[\n\r\t =>]|\/>/),
          element_name: d.until(/[\n\r\t >\/]/),
          angular_control_flow_start: g.matching(/\@[a-zA-Z]+[^({]*[({]/),
          handlebars_comment: g.starting_with(/{{!--/).until_after(/--}}/),
          handlebars: g.starting_with(/{{/).until_after(/}}/),
          handlebars_open: g.until(/[\n\r\t }]/),
          handlebars_raw_close: g.until(/}}/),
          comment: g.starting_with(/<!--/).until_after(/-->/),
          cdata: g.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
          conditional_comment: g.starting_with(/<!\[/).until_after(/]>/),
          processing: g.starting_with(/<\?/).until_after(/\?>/),
        }),
        this._options.indent_handlebars &&
          ((this.__patterns.word = this.__patterns.word.exclude('handlebars')),
          (this.__patterns.word_control_flow_close_excluded =
            this.__patterns.word_control_flow_close_excluded.exclude(
              'handlebars',
            ))),
        (this._unformatted_content_delimiter = null),
        this._options.unformatted_content_delimiter)
      ) {
        var y = this._input.get_literal_regexp(
          this._options.unformatted_content_delimiter,
        )
        this.__patterns.unformatted_content_delimiter = g
          .matching(y)
          .until_after(y)
      }
    }
  return (
    (s.prototype = new t()),
    (s.prototype._is_comment = function (l) {
      return !1
    }),
    (s.prototype._is_opening = function (l) {
      return l.type === o.TAG_OPEN || l.type === o.CONTROL_FLOW_OPEN
    }),
    (s.prototype._is_closing = function (l, c) {
      return (
        (l.type === o.TAG_CLOSE &&
          c &&
          (((l.text === '>' || l.text === '/>') && c.text[0] === '<') ||
            (l.text === '}}' && c.text[0] === '{' && c.text[1] === '{'))) ||
        (l.type === o.CONTROL_FLOW_CLOSE &&
          l.text === '}' &&
          c.text.endsWith('{'))
      )
    }),
    (s.prototype._reset = function () {
      this._current_tag_name = ''
    }),
    (s.prototype._get_next_token = function (l, c) {
      var d = null
      this._readWhitespace()
      var g = this._input.peek()
      return g === null
        ? this._create_token(o.EOF, '')
        : ((d = d || this._read_open_handlebars(g, c)),
          (d = d || this._read_attribute(g, l, c)),
          (d = d || this._read_close(g, c)),
          (d = d || this._read_control_flows(g, c)),
          (d = d || this._read_raw_content(g, l, c)),
          (d = d || this._read_content_word(g, c)),
          (d = d || this._read_comment_or_cdata(g)),
          (d = d || this._read_processing(g)),
          (d = d || this._read_open(g, c)),
          (d = d || this._create_token(o.UNKNOWN, this._input.next())),
          d)
    }),
    (s.prototype._read_comment_or_cdata = function (l) {
      var c = null,
        d = null,
        g = null
      if (l === '<') {
        var y = this._input.peek(1)
        y === '!' &&
          ((d = this.__patterns.comment.read()),
          d
            ? ((g = u.get_directives(d)),
              g && g.ignore === 'start' && (d += u.readIgnored(this._input)))
            : (d = this.__patterns.cdata.read())),
          d && ((c = this._create_token(o.COMMENT, d)), (c.directives = g))
      }
      return c
    }),
    (s.prototype._read_processing = function (l) {
      var c = null,
        d = null,
        g = null
      if (l === '<') {
        var y = this._input.peek(1)
        ;(y === '!' || y === '?') &&
          ((d = this.__patterns.conditional_comment.read()),
          (d = d || this.__patterns.processing.read())),
          d && ((c = this._create_token(o.COMMENT, d)), (c.directives = g))
      }
      return c
    }),
    (s.prototype._read_open = function (l, c) {
      var d = null,
        g = null
      return (
        (!c || c.type === o.CONTROL_FLOW_OPEN) &&
          l === '<' &&
          ((d = this._input.next()),
          this._input.peek() === '/' && (d += this._input.next()),
          (d += this.__patterns.element_name.read()),
          (g = this._create_token(o.TAG_OPEN, d))),
        g
      )
    }),
    (s.prototype._read_open_handlebars = function (l, c) {
      var d = null,
        g = null
      return (
        (!c || c.type === o.CONTROL_FLOW_OPEN) &&
          this._options.indent_handlebars &&
          l === '{' &&
          this._input.peek(1) === '{' &&
          (this._input.peek(2) === '!'
            ? ((d = this.__patterns.handlebars_comment.read()),
              (d = d || this.__patterns.handlebars.read()),
              (g = this._create_token(o.COMMENT, d)))
            : ((d = this.__patterns.handlebars_open.read()),
              (g = this._create_token(o.TAG_OPEN, d)))),
        g
      )
    }),
    (s.prototype._read_control_flows = function (l, c) {
      var d = '',
        g = null
      if (
        !this._options.templating.includes('angular') ||
        !this._options.indent_handlebars
      )
        return g
      if (l === '@') {
        if (((d = this.__patterns.angular_control_flow_start.read()), d === ''))
          return g
        for (
          var y = d.endsWith('(') ? 1 : 0, T = 0;
          !(d.endsWith('{') && y === T);

        ) {
          var j = this._input.next()
          if (j === null) break
          j === '(' ? y++ : j === ')' && T++, (d += j)
        }
        g = this._create_token(o.CONTROL_FLOW_OPEN, d)
      } else
        l === '}' &&
          c &&
          c.type === o.CONTROL_FLOW_OPEN &&
          ((d = this._input.next()),
          (g = this._create_token(o.CONTROL_FLOW_CLOSE, d)))
      return g
    }),
    (s.prototype._read_close = function (l, c) {
      var d = null,
        g = null
      return (
        c &&
          c.type === o.TAG_OPEN &&
          (c.text[0] === '<' &&
          (l === '>' || (l === '/' && this._input.peek(1) === '>'))
            ? ((d = this._input.next()),
              l === '/' && (d += this._input.next()),
              (g = this._create_token(o.TAG_CLOSE, d)))
            : c.text[0] === '{' &&
              l === '}' &&
              this._input.peek(1) === '}' &&
              (this._input.next(),
              this._input.next(),
              (g = this._create_token(o.TAG_CLOSE, '}}')))),
        g
      )
    }),
    (s.prototype._read_attribute = function (l, c, d) {
      var g = null,
        y = ''
      if (d && d.text[0] === '<')
        if (l === '=') g = this._create_token(o.EQUALS, this._input.next())
        else if (l === '"' || l === "'") {
          var T = this._input.next()
          l === '"'
            ? (T += this.__patterns.double_quote.read())
            : (T += this.__patterns.single_quote.read()),
            (g = this._create_token(o.VALUE, T))
        } else
          (y = this.__patterns.attribute.read()),
            y &&
              (c.type === o.EQUALS
                ? (g = this._create_token(o.VALUE, y))
                : (g = this._create_token(o.ATTRIBUTE, y)))
      return g
    }),
    (s.prototype._is_content_unformatted = function (l) {
      return (
        this._options.void_elements.indexOf(l) === -1 &&
        (this._options.content_unformatted.indexOf(l) !== -1 ||
          this._options.unformatted.indexOf(l) !== -1)
      )
    }),
    (s.prototype._read_raw_content = function (l, c, d) {
      var g = ''
      if (d && d.text[0] === '{')
        g = this.__patterns.handlebars_raw_close.read()
      else if (
        c.type === o.TAG_CLOSE &&
        c.opened.text[0] === '<' &&
        c.text[0] !== '/'
      ) {
        var y = c.opened.text.substr(1).toLowerCase()
        if (y === 'script' || y === 'style') {
          var T = this._read_comment_or_cdata(l)
          if (T) return (T.type = o.TEXT), T
          g = this._input.readUntil(
            new RegExp('</' + y + '[\\n\\r\\t ]*?>', 'ig'),
          )
        } else
          this._is_content_unformatted(y) &&
            (g = this._input.readUntil(
              new RegExp('</' + y + '[\\n\\r\\t ]*?>', 'ig'),
            ))
      }
      return g ? this._create_token(o.TEXT, g) : null
    }),
    (s.prototype._read_content_word = function (l, c) {
      var d = ''
      if (
        (this._options.unformatted_content_delimiter &&
          l === this._options.unformatted_content_delimiter[0] &&
          (d = this.__patterns.unformatted_content_delimiter.read()),
        d ||
          (d =
            c && c.type === o.CONTROL_FLOW_OPEN
              ? this.__patterns.word_control_flow_close_excluded.read()
              : this.__patterns.word.read()),
        d)
      )
        return this._create_token(o.TEXT, d)
    }),
    (Xt.Tokenizer = s),
    (Xt.TOKEN = o),
    Xt
  )
}
var Tn
function ws() {
  if (Tn) return Te
  Tn = 1
  var t = ei().Options,
    e = Ie().Output,
    i = An().Tokenizer,
    n = An().TOKEN,
    a = /\r\n|[\r\n]/,
    o = /\r\n|[\r\n]/g,
    u = function (f, _) {
      ;(this.indent_level = 0),
        (this.alignment_size = 0),
        (this.max_preserve_newlines = f.max_preserve_newlines),
        (this.preserve_newlines = f.preserve_newlines),
        (this._output = new e(f, _))
    }
  ;(u.prototype.current_line_has_match = function (f) {
    return this._output.current_line.has_match(f)
  }),
    (u.prototype.set_space_before_token = function (f, _) {
      ;(this._output.space_before_token = f),
        (this._output.non_breaking_space = _)
    }),
    (u.prototype.set_wrap_point = function () {
      this._output.set_indent(this.indent_level, this.alignment_size),
        this._output.set_wrap_point()
    }),
    (u.prototype.add_raw_token = function (f) {
      this._output.add_raw_token(f)
    }),
    (u.prototype.print_preserved_newlines = function (f) {
      var _ = 0
      f.type !== n.TEXT &&
        f.previous.type !== n.TEXT &&
        (_ = f.newlines ? 1 : 0),
        this.preserve_newlines &&
          (_ =
            f.newlines < this.max_preserve_newlines + 1
              ? f.newlines
              : this.max_preserve_newlines + 1)
      for (var b = 0; b < _; b++) this.print_newline(b > 0)
      return _ !== 0
    }),
    (u.prototype.traverse_whitespace = function (f) {
      return f.whitespace_before || f.newlines
        ? (this.print_preserved_newlines(f) ||
            (this._output.space_before_token = !0),
          !0)
        : !1
    }),
    (u.prototype.previous_token_wrapped = function () {
      return this._output.previous_token_wrapped
    }),
    (u.prototype.print_newline = function (f) {
      this._output.add_new_line(f)
    }),
    (u.prototype.print_token = function (f) {
      f.text &&
        (this._output.set_indent(this.indent_level, this.alignment_size),
        this._output.add_token(f.text))
    }),
    (u.prototype.indent = function () {
      this.indent_level++
    }),
    (u.prototype.deindent = function () {
      this.indent_level > 0 &&
        (this.indent_level--,
        this._output.set_indent(this.indent_level, this.alignment_size))
    }),
    (u.prototype.get_full_indent = function (f) {
      return (
        (f = this.indent_level + (f || 0)),
        f < 1 ? '' : this._output.get_indent_string(f)
      )
    })
  var s = function (f) {
      for (var _ = null, b = f.next; b.type !== n.EOF && f.closed !== b; ) {
        if (b.type === n.ATTRIBUTE && b.text === 'type') {
          b.next &&
            b.next.type === n.EQUALS &&
            b.next.next &&
            b.next.next.type === n.VALUE &&
            (_ = b.next.next.text)
          break
        }
        b = b.next
      }
      return _
    },
    l = function (f, _) {
      var b = null,
        S = null
      return _.closed
        ? (f === 'script'
            ? (b = 'text/javascript')
            : f === 'style' && (b = 'text/css'),
          (b = s(_) || b),
          b.search('text/css') > -1
            ? (S = 'css')
            : b.search(
                  /module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/,
                ) > -1
              ? (S = 'javascript')
              : b.search(/(text|application|dojo)\/(x-)?(html)/) > -1
                ? (S = 'html')
                : b.search(/test\/null/) > -1 && (S = 'null'),
          S)
        : null
    }
  function c(f, _) {
    return _.indexOf(f) !== -1
  }
  function d(f, _, b) {
    ;(this.parent = f || null),
      (this.tag = _ ? _.tag_name : ''),
      (this.indent_level = b || 0),
      (this.parser_token = _ || null)
  }
  function g(f) {
    ;(this._printer = f), (this._current_frame = null)
  }
  ;(g.prototype.get_parser_token = function () {
    return this._current_frame ? this._current_frame.parser_token : null
  }),
    (g.prototype.record_tag = function (f) {
      var _ = new d(this._current_frame, f, this._printer.indent_level)
      this._current_frame = _
    }),
    (g.prototype._try_pop_frame = function (f) {
      var _ = null
      return (
        f &&
          ((_ = f.parser_token),
          (this._printer.indent_level = f.indent_level),
          (this._current_frame = f.parent)),
        _
      )
    }),
    (g.prototype._get_frame = function (f, _) {
      for (var b = this._current_frame; b && f.indexOf(b.tag) === -1; ) {
        if (_ && _.indexOf(b.tag) !== -1) {
          b = null
          break
        }
        b = b.parent
      }
      return b
    }),
    (g.prototype.try_pop = function (f, _) {
      var b = this._get_frame([f], _)
      return this._try_pop_frame(b)
    }),
    (g.prototype.indent_to_tag = function (f) {
      var _ = this._get_frame(f)
      _ && (this._printer.indent_level = _.indent_level)
    })
  function y(f, _, b, S) {
    ;(this._source_text = f || ''),
      (_ = _ || {}),
      (this._js_beautify = b),
      (this._css_beautify = S),
      (this._tag_stack = null)
    var x = new t(_, 'html')
    ;(this._options = x),
      (this._is_wrap_attributes_force =
        this._options.wrap_attributes.substr(0, 5) === 'force'),
      (this._is_wrap_attributes_force_expand_multiline =
        this._options.wrap_attributes === 'force-expand-multiline'),
      (this._is_wrap_attributes_force_aligned =
        this._options.wrap_attributes === 'force-aligned'),
      (this._is_wrap_attributes_aligned_multiple =
        this._options.wrap_attributes === 'aligned-multiple'),
      (this._is_wrap_attributes_preserve =
        this._options.wrap_attributes.substr(0, 8) === 'preserve'),
      (this._is_wrap_attributes_preserve_aligned =
        this._options.wrap_attributes === 'preserve-aligned')
  }
  ;(y.prototype.beautify = function () {
    if (this._options.disabled) return this._source_text
    var f = this._source_text,
      _ = this._options.eol
    this._options.eol === 'auto' &&
      ((_ = `
`),
      f && a.test(f) && (_ = f.match(a)[0])),
      (f = f.replace(
        o,
        `
`,
      ))
    var b = f.match(/^[\t ]*/)[0],
      S = { text: '', type: '' },
      x = new T(),
      A = new u(this._options, b),
      p = new i(f, this._options).tokenize()
    this._tag_stack = new g(A)
    for (var v = null, h = p.next(); h.type !== n.EOF; )
      h.type === n.TAG_OPEN || h.type === n.COMMENT
        ? ((v = this._handle_tag_open(A, h, x, S, p)), (x = v))
        : h.type === n.ATTRIBUTE ||
            h.type === n.EQUALS ||
            h.type === n.VALUE ||
            (h.type === n.TEXT && !x.tag_complete)
          ? (v = this._handle_inside_tag(A, h, x, S))
          : h.type === n.TAG_CLOSE
            ? (v = this._handle_tag_close(A, h, x))
            : h.type === n.TEXT
              ? (v = this._handle_text(A, h, x))
              : h.type === n.CONTROL_FLOW_OPEN
                ? (v = this._handle_control_flow_open(A, h))
                : h.type === n.CONTROL_FLOW_CLOSE
                  ? (v = this._handle_control_flow_close(A, h))
                  : A.add_raw_token(h),
        (S = v),
        (h = p.next())
    var O = A._output.get_code(_)
    return O
  }),
    (y.prototype._handle_control_flow_open = function (f, _) {
      var b = { text: _.text, type: _.type }
      return (
        f.set_space_before_token(_.newlines || _.whitespace_before !== '', !0),
        _.newlines
          ? f.print_preserved_newlines(_)
          : f.set_space_before_token(
              _.newlines || _.whitespace_before !== '',
              !0,
            ),
        f.print_token(_),
        f.indent(),
        b
      )
    }),
    (y.prototype._handle_control_flow_close = function (f, _) {
      var b = { text: _.text, type: _.type }
      return (
        f.deindent(),
        _.newlines
          ? f.print_preserved_newlines(_)
          : f.set_space_before_token(
              _.newlines || _.whitespace_before !== '',
              !0,
            ),
        f.print_token(_),
        b
      )
    }),
    (y.prototype._handle_tag_close = function (f, _, b) {
      var S = { text: _.text, type: _.type }
      return (
        (f.alignment_size = 0),
        (b.tag_complete = !0),
        f.set_space_before_token(_.newlines || _.whitespace_before !== '', !0),
        b.is_unformatted
          ? f.add_raw_token(_)
          : (b.tag_start_char === '<' &&
              (f.set_space_before_token(_.text[0] === '/', !0),
              this._is_wrap_attributes_force_expand_multiline &&
                b.has_wrapped_attrs &&
                f.print_newline(!1)),
            f.print_token(_)),
        b.indent_content &&
          !(b.is_unformatted || b.is_content_unformatted) &&
          (f.indent(), (b.indent_content = !1)),
        !b.is_inline_element &&
          !(b.is_unformatted || b.is_content_unformatted) &&
          f.set_wrap_point(),
        S
      )
    }),
    (y.prototype._handle_inside_tag = function (f, _, b, S) {
      var x = b.has_wrapped_attrs,
        A = { text: _.text, type: _.type }
      return (
        f.set_space_before_token(_.newlines || _.whitespace_before !== '', !0),
        b.is_unformatted
          ? f.add_raw_token(_)
          : b.tag_start_char === '{' && _.type === n.TEXT
            ? f.print_preserved_newlines(_)
              ? ((_.newlines = 0), f.add_raw_token(_))
              : f.print_token(_)
            : (_.type === n.ATTRIBUTE
                ? f.set_space_before_token(!0)
                : (_.type === n.EQUALS ||
                    (_.type === n.VALUE && _.previous.type === n.EQUALS)) &&
                  f.set_space_before_token(!1),
              _.type === n.ATTRIBUTE &&
                b.tag_start_char === '<' &&
                ((this._is_wrap_attributes_preserve ||
                  this._is_wrap_attributes_preserve_aligned) &&
                  (f.traverse_whitespace(_), (x = x || _.newlines !== 0)),
                this._is_wrap_attributes_force &&
                  b.attr_count >= this._options.wrap_attributes_min_attrs &&
                  (S.type !== n.TAG_OPEN ||
                    this._is_wrap_attributes_force_expand_multiline) &&
                  (f.print_newline(!1), (x = !0))),
              f.print_token(_),
              (x = x || f.previous_token_wrapped()),
              (b.has_wrapped_attrs = x)),
        A
      )
    }),
    (y.prototype._handle_text = function (f, _, b) {
      var S = { text: _.text, type: 'TK_CONTENT' }
      return (
        b.custom_beautifier_name
          ? this._print_custom_beatifier_text(f, _, b)
          : b.is_unformatted || b.is_content_unformatted
            ? f.add_raw_token(_)
            : (f.traverse_whitespace(_), f.print_token(_)),
        S
      )
    }),
    (y.prototype._print_custom_beatifier_text = function (f, _, b) {
      var S = this
      if (_.text !== '') {
        var x = _.text,
          A,
          p = 1,
          v = '',
          h = ''
        b.custom_beautifier_name === 'javascript' &&
        typeof this._js_beautify == 'function'
          ? (A = this._js_beautify)
          : b.custom_beautifier_name === 'css' &&
              typeof this._css_beautify == 'function'
            ? (A = this._css_beautify)
            : b.custom_beautifier_name === 'html' &&
              (A = function (I, $) {
                var K = new y(I, $, S._js_beautify, S._css_beautify)
                return K.beautify()
              }),
          this._options.indent_scripts === 'keep'
            ? (p = 0)
            : this._options.indent_scripts === 'separate' &&
              (p = -f.indent_level)
        var O = f.get_full_indent(p)
        if (
          ((x = x.replace(/\n[ \t]*$/, '')),
          b.custom_beautifier_name !== 'html' &&
            x[0] === '<' &&
            x.match(/^(<!--|<!\[CDATA\[)/))
        ) {
          var r =
            /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(
              x,
            )
          if (!r) {
            f.add_raw_token(_)
            return
          }
          ;(v =
            O +
            r[1] +
            `
`),
            (x = r[4]),
            r[5] && (h = O + r[5]),
            (x = x.replace(/\n[ \t]*$/, '')),
            (r[2] ||
              r[3].indexOf(`
`) !== -1) &&
              ((r = r[3].match(/[ \t]+$/)), r && (_.whitespace_before = r[0]))
        }
        if (x)
          if (A) {
            var w = function () {
              this.eol = `
`
            }
            w.prototype = this._options.raw_options
            var k = new w()
            x = A(O + x, k)
          } else {
            var L = _.whitespace_before
            L &&
              (x = x.replace(
                new RegExp(
                  `
(` +
                    L +
                    ')?',
                  'g',
                ),
                `
`,
              )),
              (x =
                O +
                x.replace(
                  /\n/g,
                  `
` + O,
                ))
          }
        v &&
          (x
            ? (x =
                v +
                x +
                `
` +
                h)
            : (x = v + h)),
          f.print_newline(!1),
          x &&
            ((_.text = x),
            (_.whitespace_before = ''),
            (_.newlines = 0),
            f.add_raw_token(_),
            f.print_newline(!0))
      }
    }),
    (y.prototype._handle_tag_open = function (f, _, b, S, x) {
      var A = this._get_tag_open_token(_)
      if (
        ((b.is_unformatted || b.is_content_unformatted) &&
        !b.is_empty_element &&
        _.type === n.TAG_OPEN &&
        !A.is_start_tag
          ? (f.add_raw_token(_),
            (A.start_tag_token = this._tag_stack.try_pop(A.tag_name)))
          : (f.traverse_whitespace(_),
            this._set_tag_position(f, _, A, b, S),
            A.is_inline_element || f.set_wrap_point(),
            f.print_token(_)),
        A.is_start_tag && this._is_wrap_attributes_force)
      ) {
        var p = 0,
          v
        do
          (v = x.peek(p)),
            v.type === n.ATTRIBUTE && (A.attr_count += 1),
            (p += 1)
        while (v.type !== n.EOF && v.type !== n.TAG_CLOSE)
      }
      return (
        (this._is_wrap_attributes_force_aligned ||
          this._is_wrap_attributes_aligned_multiple ||
          this._is_wrap_attributes_preserve_aligned) &&
          (A.alignment_size = _.text.length + 1),
        !A.tag_complete &&
          !A.is_unformatted &&
          (f.alignment_size = A.alignment_size),
        A
      )
    })
  var T = function (f, _) {
    if (
      ((this.parent = f || null),
      (this.text = ''),
      (this.type = 'TK_TAG_OPEN'),
      (this.tag_name = ''),
      (this.is_inline_element = !1),
      (this.is_unformatted = !1),
      (this.is_content_unformatted = !1),
      (this.is_empty_element = !1),
      (this.is_start_tag = !1),
      (this.is_end_tag = !1),
      (this.indent_content = !1),
      (this.multiline_content = !1),
      (this.custom_beautifier_name = null),
      (this.start_tag_token = null),
      (this.attr_count = 0),
      (this.has_wrapped_attrs = !1),
      (this.alignment_size = 0),
      (this.tag_complete = !1),
      (this.tag_start_char = ''),
      (this.tag_check = ''),
      !_)
    )
      this.tag_complete = !0
    else {
      var b
      ;(this.tag_start_char = _.text[0]),
        (this.text = _.text),
        this.tag_start_char === '<'
          ? ((b = _.text.match(/^<([^\s>]*)/)),
            (this.tag_check = b ? b[1] : ''))
          : ((b = _.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/)),
            (this.tag_check = b ? b[1] : ''),
            (_.text.startsWith('{{#>') || _.text.startsWith('{{~#>')) &&
              this.tag_check[0] === '>' &&
              (this.tag_check === '>' && _.next !== null
                ? (this.tag_check = _.next.text.split(' ')[0])
                : (this.tag_check = _.text.split('>')[1]))),
        (this.tag_check = this.tag_check.toLowerCase()),
        _.type === n.COMMENT && (this.tag_complete = !0),
        (this.is_start_tag = this.tag_check.charAt(0) !== '/'),
        (this.tag_name = this.is_start_tag
          ? this.tag_check
          : this.tag_check.substr(1)),
        (this.is_end_tag =
          !this.is_start_tag || (_.closed && _.closed.text === '/>'))
      var S = 2
      this.tag_start_char === '{' &&
        this.text.length >= 3 &&
        this.text.charAt(2) === '~' &&
        (S = 3),
        (this.is_end_tag =
          this.is_end_tag ||
          (this.tag_start_char === '{' &&
            (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(S)))))
    }
  }
  ;(y.prototype._get_tag_open_token = function (f) {
    var _ = new T(this._tag_stack.get_parser_token(), f)
    return (
      (_.alignment_size = this._options.wrap_attributes_indent_size),
      (_.is_end_tag =
        _.is_end_tag || c(_.tag_check, this._options.void_elements)),
      (_.is_empty_element = _.tag_complete || (_.is_start_tag && _.is_end_tag)),
      (_.is_unformatted =
        !_.tag_complete && c(_.tag_check, this._options.unformatted)),
      (_.is_content_unformatted =
        !_.is_empty_element &&
        c(_.tag_check, this._options.content_unformatted)),
      (_.is_inline_element =
        c(_.tag_name, this._options.inline) ||
        (this._options.inline_custom_elements && _.tag_name.includes('-')) ||
        _.tag_start_char === '{'),
      _
    )
  }),
    (y.prototype._set_tag_position = function (f, _, b, S, x) {
      if (
        (b.is_empty_element ||
          (b.is_end_tag
            ? (b.start_tag_token = this._tag_stack.try_pop(b.tag_name))
            : (this._do_optional_end_element(b) &&
                (b.is_inline_element || f.print_newline(!1)),
              this._tag_stack.record_tag(b),
              (b.tag_name === 'script' || b.tag_name === 'style') &&
                !(b.is_unformatted || b.is_content_unformatted) &&
                (b.custom_beautifier_name = l(b.tag_check, _)))),
        c(b.tag_check, this._options.extra_liners) &&
          (f.print_newline(!1),
          f._output.just_added_blankline() || f.print_newline(!0)),
        b.is_empty_element)
      ) {
        if (b.tag_start_char === '{' && b.tag_check === 'else') {
          this._tag_stack.indent_to_tag(['if', 'unless', 'each']),
            (b.indent_content = !0)
          var A = f.current_line_has_match(/{{#if/)
          A || f.print_newline(!1)
        }
        ;(b.tag_name === '!--' &&
          x.type === n.TAG_CLOSE &&
          S.is_end_tag &&
          b.text.indexOf(`
`) === -1) ||
          (b.is_inline_element || b.is_unformatted || f.print_newline(!1),
          this._calcluate_parent_multiline(f, b))
      } else if (b.is_end_tag) {
        var p = !1
        ;(p = b.start_tag_token && b.start_tag_token.multiline_content),
          (p =
            p ||
            (!b.is_inline_element &&
              !(S.is_inline_element || S.is_unformatted) &&
              !(x.type === n.TAG_CLOSE && b.start_tag_token === S) &&
              x.type !== 'TK_CONTENT')),
          (b.is_content_unformatted || b.is_unformatted) && (p = !1),
          p && f.print_newline(!1)
      } else
        (b.indent_content = !b.custom_beautifier_name),
          b.tag_start_char === '<' &&
            (b.tag_name === 'html'
              ? (b.indent_content = this._options.indent_inner_html)
              : b.tag_name === 'head'
                ? (b.indent_content = this._options.indent_head_inner_html)
                : b.tag_name === 'body' &&
                  (b.indent_content = this._options.indent_body_inner_html)),
          !(b.is_inline_element || b.is_unformatted) &&
            (x.type !== 'TK_CONTENT' || b.is_content_unformatted) &&
            f.print_newline(!1),
          this._calcluate_parent_multiline(f, b)
    }),
    (y.prototype._calcluate_parent_multiline = function (f, _) {
      _.parent &&
        f._output.just_added_newline() &&
        !(
          (_.is_inline_element || _.is_unformatted) &&
          _.parent.is_inline_element
        ) &&
        (_.parent.multiline_content = !0)
    })
  var j = [
      'address',
      'article',
      'aside',
      'blockquote',
      'details',
      'div',
      'dl',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'header',
      'hr',
      'main',
      'menu',
      'nav',
      'ol',
      'p',
      'pre',
      'section',
      'table',
      'ul',
    ],
    M = ['a', 'audio', 'del', 'ins', 'map', 'noscript', 'video']
  return (
    (y.prototype._do_optional_end_element = function (f) {
      var _ = null
      if (!(f.is_empty_element || !f.is_start_tag || !f.parent)) {
        if (f.tag_name === 'body') _ = _ || this._tag_stack.try_pop('head')
        else if (f.tag_name === 'li')
          _ = _ || this._tag_stack.try_pop('li', ['ol', 'ul', 'menu'])
        else if (f.tag_name === 'dd' || f.tag_name === 'dt')
          (_ = _ || this._tag_stack.try_pop('dt', ['dl'])),
            (_ = _ || this._tag_stack.try_pop('dd', ['dl']))
        else if (f.parent.tag_name === 'p' && j.indexOf(f.tag_name) !== -1) {
          var b = f.parent.parent
          ;(!b || M.indexOf(b.tag_name) === -1) &&
            (_ = _ || this._tag_stack.try_pop('p'))
        } else
          f.tag_name === 'rp' || f.tag_name === 'rt'
            ? ((_ = _ || this._tag_stack.try_pop('rt', ['ruby', 'rtc'])),
              (_ = _ || this._tag_stack.try_pop('rp', ['ruby', 'rtc'])))
            : f.tag_name === 'optgroup'
              ? (_ = _ || this._tag_stack.try_pop('optgroup', ['select']))
              : f.tag_name === 'option'
                ? (_ =
                    _ ||
                    this._tag_stack.try_pop('option', [
                      'select',
                      'datalist',
                      'optgroup',
                    ]))
                : f.tag_name === 'colgroup'
                  ? (_ = _ || this._tag_stack.try_pop('caption', ['table']))
                  : f.tag_name === 'thead'
                    ? ((_ = _ || this._tag_stack.try_pop('caption', ['table'])),
                      (_ = _ || this._tag_stack.try_pop('colgroup', ['table'])))
                    : f.tag_name === 'tbody' || f.tag_name === 'tfoot'
                      ? ((_ =
                          _ || this._tag_stack.try_pop('caption', ['table'])),
                        (_ =
                          _ || this._tag_stack.try_pop('colgroup', ['table'])),
                        (_ = _ || this._tag_stack.try_pop('thead', ['table'])),
                        (_ = _ || this._tag_stack.try_pop('tbody', ['table'])))
                      : f.tag_name === 'tr'
                        ? ((_ =
                            _ || this._tag_stack.try_pop('caption', ['table'])),
                          (_ =
                            _ ||
                            this._tag_stack.try_pop('colgroup', ['table'])),
                          (_ =
                            _ ||
                            this._tag_stack.try_pop('tr', [
                              'table',
                              'thead',
                              'tbody',
                              'tfoot',
                            ])))
                        : (f.tag_name === 'th' || f.tag_name === 'td') &&
                          ((_ =
                            _ ||
                            this._tag_stack.try_pop('td', [
                              'table',
                              'thead',
                              'tbody',
                              'tfoot',
                              'tr',
                            ])),
                          (_ =
                            _ ||
                            this._tag_stack.try_pop('th', [
                              'table',
                              'thead',
                              'tbody',
                              'tfoot',
                              'tr',
                            ])))
        return (f.parent = this._tag_stack.get_parser_token()), _
      }
    }),
    (Te.Beautifier = y),
    Te
  )
}
var Sn
function xs() {
  if (Sn) return Vt.exports
  Sn = 1
  var t = ws().Beautifier,
    e = ei().Options
  function i(n, a, o, u) {
    var s = new t(n, a, o, u)
    return s.beautify()
  }
  return (
    (Vt.exports = i),
    (Vt.exports.defaultOptions = function () {
      return new e()
    }),
    Vt.exports
  )
}
var Rn
function Es() {
  if (Rn) return jt
  Rn = 1
  var t = ys(),
    e = ks(),
    i = xs()
  function n(a, o, u, s) {
    return (u = u || t), (s = s || e), i(a, o, u, s)
  }
  return (
    (n.defaultOptions = i.defaultOptions),
    (jt.js = t),
    (jt.css = e),
    (jt.html = n),
    jt
  )
}
;(function (t) {
  function e(i, n, a) {
    var o = function (u, s) {
      return i.js_beautify(u, s)
    }
    return (
      (o.js = i.js_beautify),
      (o.css = n.css_beautify),
      (o.html = a.html_beautify),
      (o.js_beautify = i.js_beautify),
      (o.css_beautify = n.css_beautify),
      (o.html_beautify = a.html_beautify),
      o
    )
  }
  ;(function (i) {
    var n = Es()
    ;(n.js_beautify = n.js),
      (n.css_beautify = n.css),
      (n.html_beautify = n.html),
      (i.exports = e(n, n, n))
  })(t)
})(Zn)
/*!
 * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */ var Nn,
  Os = function (t) {
    return typeof t == 'string' && As().test(t)
  }
function As() {
  return (
    Nn ||
    (Nn = new RegExp(`^[\\s	
\v\f\r   ᠎             　\u2028\u2029\uFEFF"]+$`))
  )
}
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */ var Ts = function (t) {
    return (
      typeof t < 'u' &&
      t !== null &&
      (typeof t == 'object' || typeof t == 'function')
    )
  },
  Cn = Ts,
  ni = function (t) {
    Cn(t) || (t = {})
    for (var e = arguments.length, i = 1; i < e; i++) {
      var n = arguments[i]
      Cn(n) && Ss(t, n)
    }
    return t
  }
function Ss(t, e) {
  for (var i in e) Rs(e, i) && (t[i] = e[i])
}
function Rs(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e)
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var Ns = function (t) {
  return t != null && (ii(t) || Cs(t) || !!t._isBuffer)
}
function ii(t) {
  return (
    !!t.constructor &&
    typeof t.constructor.isBuffer == 'function' &&
    t.constructor.isBuffer(t)
  )
}
function Cs(t) {
  return (
    typeof t.readFloatLE == 'function' &&
    typeof t.slice == 'function' &&
    ii(t.slice(0, 0))
  )
}
var Ls = Ns,
  js = Object.prototype.toString,
  Ms = function (t) {
    if (typeof t > 'u') return 'undefined'
    if (t === null) return 'null'
    if (t === !0 || t === !1 || t instanceof Boolean) return 'boolean'
    if (typeof t == 'string' || t instanceof String) return 'string'
    if (typeof t == 'number' || t instanceof Number) return 'number'
    if (typeof t == 'function' || t instanceof Function) return 'function'
    if (typeof Array.isArray < 'u' && Array.isArray(t)) return 'array'
    if (t instanceof RegExp) return 'regexp'
    if (t instanceof Date) return 'date'
    var e = js.call(t)
    return e === '[object RegExp]'
      ? 'regexp'
      : e === '[object Date]'
        ? 'date'
        : e === '[object Arguments]'
          ? 'arguments'
          : e === '[object Error]'
            ? 'error'
            : Ls(t)
              ? 'buffer'
              : e === '[object Set]'
                ? 'set'
                : e === '[object WeakSet]'
                  ? 'weakset'
                  : e === '[object Map]'
                    ? 'map'
                    : e === '[object WeakMap]'
                      ? 'weakmap'
                      : e === '[object Symbol]'
                        ? 'symbol'
                        : e === '[object Int8Array]'
                          ? 'int8array'
                          : e === '[object Uint8Array]'
                            ? 'uint8array'
                            : e === '[object Uint8ClampedArray]'
                              ? 'uint8clampedarray'
                              : e === '[object Int16Array]'
                                ? 'int16array'
                                : e === '[object Uint16Array]'
                                  ? 'uint16array'
                                  : e === '[object Int32Array]'
                                    ? 'int32array'
                                    : e === '[object Uint32Array]'
                                      ? 'uint32array'
                                      : e === '[object Float32Array]'
                                        ? 'float32array'
                                        : e === '[object Float64Array]'
                                          ? 'float64array'
                                          : 'object'
  }
/*!
 * condense-newlines <https://github.com/jonschlinkert/condense-newlines>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */ var Is = Os,
  Ds = ni,
  Bs = Ms,
  Ps = function (t, e) {
    var i = Ds({}, e),
      n =
        i.sep ||
        `

`,
      a = i.min,
      o
    return (
      typeof a == 'number' &&
        a !== 2 &&
        (o = new RegExp('(\\r\\n|\\n|\\u2424) {' + a + ',}')),
      typeof o > 'u' && (o = i.regex || /(\r\n|\n|\u2424){2,}/g),
      i.keepWhitespace !== !0 &&
        (t = t
          .split(
            `
`,
          )
          .map(function (u) {
            return Is(u) ? u.trim() : u
          }).join(`
`)),
      (t = Us(t, i)),
      t.replace(o, n)
    )
  }
function Us(t, e) {
  var i = e.trailingNewline
  if (i === !1) return t
  switch (Bs(i)) {
    case 'string':
      t = t.replace(/\s+$/, e.trailingNewline)
      break
    case 'function':
      t = e.trailingNewline(t)
      break
    case 'undefined':
    case 'boolean':
    default: {
      t = t.replace(
        /\s+$/,
        `
`,
      )
      break
    }
  }
  return t
}
/*!
 * pretty <https://github.com/jonschlinkert/pretty>
 *
 * Copyright (c) 2013-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var $s = Zn.exports,
  zs = Ps,
  Fs = ni,
  Ws = {
    unformatted: ['code', 'pre', 'em', 'strong', 'span'],
    indent_inner_html: !0,
    indent_char: ' ',
    indent_size: 2,
    sep: `
`,
  },
  Ks = function (t, e) {
    var i = Fs({}, Ws, e)
    return (
      (t = $s.html(t, i)),
      i.ocd === !0 ? (i.newlines && (i.sep = i.newlines), Hs(t, i)) : t
    )
  }
function Hs(t, e) {
  return zs(t, e)
    .replace(/^\s+/g, '')
    .replace(
      /\s+$/g,
      `
`,
    )
    .replace(
      /(\s*<!--)/g,
      `
$1`,
    )
    .replace(/>(\s*)(?=<!--\s*\/)/g, '> ')
}
function Ct(t) {
  let { code: e, src: i } = t || {}
  e || (e = '<div id="app"></div>'),
    i &&
      (e += `
<script type="module" src="${i}"><\/script>`)
  const n = new DOMParser().parseFromString(e, 'text/html')
  return Ks(
    `<!DOCTYPE html>
${n.documentElement.outerHTML}`,
    { ocd: !0 },
  )
}
function oe(t) {
  const e = {}
  return (
    t === F.REACT && (e.jsx = 'react'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'es5',
          lib: ['dom', 'dom.iterable', 'esnext'],
          allowJs: !0,
          skipLibCheck: !0,
          esModuleInterop: !0,
          allowImportingTsExtensions: !0,
          allowSyntheticDefaultImports: !0,
          strict: !0,
          forceConsistentCasingInFileNames: !0,
          module: 'esnext',
          moduleResolution: 'node',
          resolveJsonModule: !0,
          isolatedModules: !0,
          noEmit: !0,
          ...e,
        },
        include: ['src'],
      },
      null,
      2,
    )
  )
}
const si = () =>
    JSON.stringify(
      { installDependencies: !1, startCommand: 'npm install && npm run dev' },
      null,
      2,
    ),
  Gs = `import { createApp } from "vue";
import Demo from "./Demo.vue";

const app = createApp(Demo);
app.mount("#app");
`,
  Vs = `import React from "react";
import { createRoot } from "react-dom/client";
import Demo from "./Demo.tsx";

const root = createRoot(document.querySelector("#app"));
root.render(<Demo />);
`
function _e(t) {
  return t === F.VUE ? Gs : t === F.REACT ? Vs : ''
}
const Xs = `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [vue(), vueJsx()],
});
`,
  Zs = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
});
`
function ri(t) {
  return t === F.VUE ? Xs : t === F.REACT ? Zs : ''
}
const Qs = () => ({
    copyContent: ut(''),
    clickCopy: async (t) => {
      await navigator.clipboard.writeText(t)
    },
  }),
  qs = () => {
    const t = ut(!0)
    return {
      isCodeFold: t,
      setCodeFold: (e) => {
        t.value = e
      },
    }
  }
function Js(t) {
  return [
    ...(t.match(/from '([^']+)'(;)?(\r)?\n/g) || []),
    ...(t.match(/from "([^"]+)"(;)?(\r)?\n/g) || []),
  ]
    .map((e) => {
      let i = ''
      return (
        e.includes("'")
          ? (i = e.split("'")[1])
          : e.includes('"') && (i = e.split('"')[1]),
        i.includes('/') &&
          (i.startsWith('@')
            ? (i = i.split('/')[0] + '/' + i.split('/')[1])
            : (i = i.split('/')[0])),
        i
      )
    })
    .filter((e) => e !== '')
    .reduce((e, i) => ((e[i] = 'latest'), e), {})
}
function ai(t) {
  return (
    t instanceof Map
      ? (t.clear =
          t.delete =
          t.set =
            function () {
              throw new Error('map is read-only')
            })
      : t instanceof Set &&
        (t.add =
          t.clear =
          t.delete =
            function () {
              throw new Error('set is read-only')
            }),
    Object.freeze(t),
    Object.getOwnPropertyNames(t).forEach((e) => {
      const i = t[e],
        n = typeof i
      ;(n === 'object' || n === 'function') && !Object.isFrozen(i) && ai(i)
    }),
    t
  )
}
class Ln {
  constructor(e) {
    e.data === void 0 && (e.data = {}),
      (this.data = e.data),
      (this.isMatchIgnored = !1)
  }
  ignoreMatch() {
    this.isMatchIgnored = !0
  }
}
function oi(t) {
  return t
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}
function mt(t, ...e) {
  const i = Object.create(null)
  for (const n in t) i[n] = t[n]
  return (
    e.forEach(function (n) {
      for (const a in n) i[a] = n[a]
    }),
    i
  )
}
const Ys = '</span>',
  jn = (t) => !!t.scope,
  tr = (t, { prefix: e }) => {
    if (t.startsWith('language:')) return t.replace('language:', 'language-')
    if (t.includes('.')) {
      const i = t.split('.')
      return [
        `${e}${i.shift()}`,
        ...i.map((n, a) => `${n}${'_'.repeat(a + 1)}`),
      ].join(' ')
    }
    return `${e}${t}`
  }
class er {
  constructor(e, i) {
    ;(this.buffer = ''), (this.classPrefix = i.classPrefix), e.walk(this)
  }
  addText(e) {
    this.buffer += oi(e)
  }
  openNode(e) {
    if (!jn(e)) return
    const i = tr(e.scope, { prefix: this.classPrefix })
    this.span(i)
  }
  closeNode(e) {
    !jn(e) || (this.buffer += Ys)
  }
  value() {
    return this.buffer
  }
  span(e) {
    this.buffer += `<span class="${e}">`
  }
}
const Mn = (t = {}) => {
  const e = { children: [] }
  return Object.assign(e, t), e
}
class Ue {
  constructor() {
    ;(this.rootNode = Mn()), (this.stack = [this.rootNode])
  }
  get top() {
    return this.stack[this.stack.length - 1]
  }
  get root() {
    return this.rootNode
  }
  add(e) {
    this.top.children.push(e)
  }
  openNode(e) {
    const i = Mn({ scope: e })
    this.add(i), this.stack.push(i)
  }
  closeNode() {
    if (this.stack.length > 1) return this.stack.pop()
  }
  closeAllNodes() {
    for (; this.closeNode(); );
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4)
  }
  walk(e) {
    return this.constructor._walk(e, this.rootNode)
  }
  static _walk(e, i) {
    return (
      typeof i == 'string'
        ? e.addText(i)
        : i.children &&
          (e.openNode(i),
          i.children.forEach((n) => this._walk(e, n)),
          e.closeNode(i)),
      e
    )
  }
  static _collapse(e) {
    typeof e != 'string' &&
      (!e.children ||
        (e.children.every((i) => typeof i == 'string')
          ? (e.children = [e.children.join('')])
          : e.children.forEach((i) => {
              Ue._collapse(i)
            })))
  }
}
class nr extends Ue {
  constructor(e) {
    super(), (this.options = e)
  }
  addText(e) {
    e !== '' && this.add(e)
  }
  startScope(e) {
    this.openNode(e)
  }
  endScope() {
    this.closeNode()
  }
  __addSublanguage(e, i) {
    const n = e.root
    i && (n.scope = `language:${i}`), this.add(n)
  }
  toHTML() {
    return new er(this, this.options).value()
  }
  finalize() {
    return this.closeAllNodes(), !0
  }
}
function Bt(t) {
  return t ? (typeof t == 'string' ? t : t.source) : null
}
function _i(t) {
  return Ot('(?=', t, ')')
}
function ir(t) {
  return Ot('(?:', t, ')*')
}
function sr(t) {
  return Ot('(?:', t, ')?')
}
function Ot(...t) {
  return t.map((e) => Bt(e)).join('')
}
function rr(t) {
  const e = t[t.length - 1]
  return typeof e == 'object' && e.constructor === Object
    ? (t.splice(t.length - 1, 1), e)
    : {}
}
function $e(...t) {
  return '(' + (rr(t).capture ? '' : '?:') + t.map((e) => Bt(e)).join('|') + ')'
}
function li(t) {
  return new RegExp(t.toString() + '|').exec('').length - 1
}
function ar(t, e) {
  const i = t && t.exec(e)
  return i && i.index === 0
}
const or = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
function ze(t, { joinWith: e }) {
  let i = 0
  return t
    .map((n) => {
      i += 1
      const a = i
      let o = Bt(n),
        u = ''
      for (; o.length > 0; ) {
        const s = or.exec(o)
        if (!s) {
          u += o
          break
        }
        ;(u += o.substring(0, s.index)),
          (o = o.substring(s.index + s[0].length)),
          s[0][0] === '\\' && s[1]
            ? (u += '\\' + String(Number(s[1]) + a))
            : ((u += s[0]), s[0] === '(' && i++)
      }
      return u
    })
    .map((n) => `(${n})`)
    .join(e)
}
const _r = /\b\B/,
  ui = '[a-zA-Z]\\w*',
  Fe = '[a-zA-Z_]\\w*',
  ci = '\\b\\d+(\\.\\d+)?',
  pi = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
  hi = '\\b(0b[01]+)',
  lr =
    '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
  ur = (t = {}) => {
    const e = /^#![ ]*\//
    return (
      t.binary && (t.begin = Ot(e, /.*\b/, t.binary, /\b.*/)),
      mt(
        {
          scope: 'meta',
          begin: e,
          end: /$/,
          relevance: 0,
          'on:begin': (i, n) => {
            i.index !== 0 && n.ignoreMatch()
          },
        },
        t,
      )
    )
  },
  Pt = { begin: '\\\\[\\s\\S]', relevance: 0 },
  cr = {
    scope: 'string',
    begin: "'",
    end: "'",
    illegal: '\\n',
    contains: [Pt],
  },
  pr = {
    scope: 'string',
    begin: '"',
    end: '"',
    illegal: '\\n',
    contains: [Pt],
  },
  hr = {
    begin:
      /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
  },
  le = function (t, e, i = {}) {
    const n = mt({ scope: 'comment', begin: t, end: e, contains: [] }, i)
    n.contains.push({
      scope: 'doctag',
      begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0,
    })
    const a = $e(
      'I',
      'a',
      'is',
      'so',
      'us',
      'to',
      'at',
      'if',
      'in',
      'it',
      'on',
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      /[A-Za-z]+[-][a-z]+/,
      /[A-Za-z][a-z]{2,}/,
    )
    return (
      n.contains.push({
        begin: Ot(/[ ]+/, '(', a, /[.]?[:]?([.][ ]|[ ])/, '){3}'),
      }),
      n
    )
  },
  dr = le('//', '$'),
  fr = le('/\\*', '\\*/'),
  gr = le('#', '$'),
  mr = { scope: 'number', begin: ci, relevance: 0 },
  br = { scope: 'number', begin: pi, relevance: 0 },
  yr = { scope: 'number', begin: hi, relevance: 0 },
  vr = {
    scope: 'regexp',
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [Pt, { begin: /\[/, end: /\]/, relevance: 0, contains: [Pt] }],
  },
  kr = { scope: 'title', begin: ui, relevance: 0 },
  wr = { scope: 'title', begin: Fe, relevance: 0 },
  xr = { begin: '\\.\\s*' + Fe, relevance: 0 },
  Er = function (t) {
    return Object.assign(t, {
      'on:begin': (e, i) => {
        i.data._beginMatch = e[1]
      },
      'on:end': (e, i) => {
        i.data._beginMatch !== e[1] && i.ignoreMatch()
      },
    })
  }
var Zt = Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: cr,
  BACKSLASH_ESCAPE: Pt,
  BINARY_NUMBER_MODE: yr,
  BINARY_NUMBER_RE: hi,
  COMMENT: le,
  C_BLOCK_COMMENT_MODE: fr,
  C_LINE_COMMENT_MODE: dr,
  C_NUMBER_MODE: br,
  C_NUMBER_RE: pi,
  END_SAME_AS_BEGIN: Er,
  HASH_COMMENT_MODE: gr,
  IDENT_RE: ui,
  MATCH_NOTHING_RE: _r,
  METHOD_GUARD: xr,
  NUMBER_MODE: mr,
  NUMBER_RE: ci,
  PHRASAL_WORDS_MODE: hr,
  QUOTE_STRING_MODE: pr,
  REGEXP_MODE: vr,
  RE_STARTERS_RE: lr,
  SHEBANG: ur,
  TITLE_MODE: kr,
  UNDERSCORE_IDENT_RE: Fe,
  UNDERSCORE_TITLE_MODE: wr,
})
function Or(t, e) {
  t.input[t.index - 1] === '.' && e.ignoreMatch()
}
function Ar(t, e) {
  t.className !== void 0 && ((t.scope = t.className), delete t.className)
}
function Tr(t, e) {
  !e ||
    !t.beginKeywords ||
    ((t.begin =
      '\\b(' + t.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
    (t.__beforeBegin = Or),
    (t.keywords = t.keywords || t.beginKeywords),
    delete t.beginKeywords,
    t.relevance === void 0 && (t.relevance = 0))
}
function Sr(t, e) {
  !Array.isArray(t.illegal) || (t.illegal = $e(...t.illegal))
}
function Rr(t, e) {
  if (t.match) {
    if (t.begin || t.end)
      throw new Error('begin & end are not supported with match')
    ;(t.begin = t.match), delete t.match
  }
}
function Nr(t, e) {
  t.relevance === void 0 && (t.relevance = 1)
}
const Cr = (t, e) => {
    if (!t.beforeMatch) return
    if (t.starts) throw new Error('beforeMatch cannot be used with starts')
    const i = Object.assign({}, t)
    Object.keys(t).forEach((n) => {
      delete t[n]
    }),
      (t.keywords = i.keywords),
      (t.begin = Ot(i.beforeMatch, _i(i.begin))),
      (t.starts = {
        relevance: 0,
        contains: [Object.assign(i, { endsParent: !0 })],
      }),
      (t.relevance = 0),
      delete i.beforeMatch
  },
  Lr = [
    'of',
    'and',
    'for',
    'in',
    'not',
    'or',
    'if',
    'then',
    'parent',
    'list',
    'value',
  ],
  jr = 'keyword'
function di(t, e, i = jr) {
  const n = Object.create(null)
  return (
    typeof t == 'string'
      ? a(i, t.split(' '))
      : Array.isArray(t)
        ? a(i, t)
        : Object.keys(t).forEach(function (o) {
            Object.assign(n, di(t[o], e, o))
          }),
    n
  )
  function a(o, u) {
    e && (u = u.map((s) => s.toLowerCase())),
      u.forEach(function (s) {
        const l = s.split('|')
        n[l[0]] = [o, Mr(l[0], l[1])]
      })
  }
}
function Mr(t, e) {
  return e ? Number(e) : Ir(t) ? 0 : 1
}
function Ir(t) {
  return Lr.includes(t.toLowerCase())
}
const In = {},
  Et = (t) => {
    console.error(t)
  },
  Dn = (t, ...e) => {
    console.log(`WARN: ${t}`, ...e)
  },
  St = (t, e) => {
    In[`${t}/${e}`] ||
      (console.log(`Deprecated as of ${t}. ${e}`), (In[`${t}/${e}`] = !0))
  },
  ne = new Error()
function fi(t, e, { key: i }) {
  let n = 0
  const a = t[i],
    o = {},
    u = {}
  for (let s = 1; s <= e.length; s++)
    (u[s + n] = a[s]), (o[s + n] = !0), (n += li(e[s - 1]))
  ;(t[i] = u), (t[i]._emit = o), (t[i]._multi = !0)
}
function Dr(t) {
  if (Array.isArray(t.begin)) {
    if (t.skip || t.excludeBegin || t.returnBegin)
      throw (
        (Et(
          'skip, excludeBegin, returnBegin not compatible with beginScope: {}',
        ),
        ne)
      )
    if (typeof t.beginScope != 'object' || t.beginScope === null)
      throw (Et('beginScope must be object'), ne)
    fi(t, t.begin, { key: 'beginScope' }),
      (t.begin = ze(t.begin, { joinWith: '' }))
  }
}
function Br(t) {
  if (Array.isArray(t.end)) {
    if (t.skip || t.excludeEnd || t.returnEnd)
      throw (
        (Et('skip, excludeEnd, returnEnd not compatible with endScope: {}'), ne)
      )
    if (typeof t.endScope != 'object' || t.endScope === null)
      throw (Et('endScope must be object'), ne)
    fi(t, t.end, { key: 'endScope' }), (t.end = ze(t.end, { joinWith: '' }))
  }
}
function Pr(t) {
  t.scope &&
    typeof t.scope == 'object' &&
    t.scope !== null &&
    ((t.beginScope = t.scope), delete t.scope)
}
function Ur(t) {
  Pr(t),
    typeof t.beginScope == 'string' && (t.beginScope = { _wrap: t.beginScope }),
    typeof t.endScope == 'string' && (t.endScope = { _wrap: t.endScope }),
    Dr(t),
    Br(t)
}
function $r(t) {
  function e(u, s) {
    return new RegExp(
      Bt(u),
      'm' +
        (t.case_insensitive ? 'i' : '') +
        (t.unicodeRegex ? 'u' : '') +
        (s ? 'g' : ''),
    )
  }
  class i {
    constructor() {
      ;(this.matchIndexes = {}),
        (this.regexes = []),
        (this.matchAt = 1),
        (this.position = 0)
    }
    addRule(s, l) {
      ;(l.position = this.position++),
        (this.matchIndexes[this.matchAt] = l),
        this.regexes.push([l, s]),
        (this.matchAt += li(s) + 1)
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null)
      const s = this.regexes.map((l) => l[1])
      ;(this.matcherRe = e(ze(s, { joinWith: '|' }), !0)), (this.lastIndex = 0)
    }
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex
      const l = this.matcherRe.exec(s)
      if (!l) return null
      const c = l.findIndex((g, y) => y > 0 && g !== void 0),
        d = this.matchIndexes[c]
      return l.splice(0, c), Object.assign(l, d)
    }
  }
  class n {
    constructor() {
      ;(this.rules = []),
        (this.multiRegexes = []),
        (this.count = 0),
        (this.lastIndex = 0),
        (this.regexIndex = 0)
    }
    getMatcher(s) {
      if (this.multiRegexes[s]) return this.multiRegexes[s]
      const l = new i()
      return (
        this.rules.slice(s).forEach(([c, d]) => l.addRule(c, d)),
        l.compile(),
        (this.multiRegexes[s] = l),
        l
      )
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0
    }
    considerAll() {
      this.regexIndex = 0
    }
    addRule(s, l) {
      this.rules.push([s, l]), l.type === 'begin' && this.count++
    }
    exec(s) {
      const l = this.getMatcher(this.regexIndex)
      l.lastIndex = this.lastIndex
      let c = l.exec(s)
      if (
        this.resumingScanAtSamePosition() &&
        !(c && c.index === this.lastIndex)
      ) {
        const d = this.getMatcher(0)
        ;(d.lastIndex = this.lastIndex + 1), (c = d.exec(s))
      }
      return (
        c &&
          ((this.regexIndex += c.position + 1),
          this.regexIndex === this.count && this.considerAll()),
        c
      )
    }
  }
  function a(u) {
    const s = new n()
    return (
      u.contains.forEach((l) => s.addRule(l.begin, { rule: l, type: 'begin' })),
      u.terminatorEnd && s.addRule(u.terminatorEnd, { type: 'end' }),
      u.illegal && s.addRule(u.illegal, { type: 'illegal' }),
      s
    )
  }
  function o(u, s) {
    const l = u
    if (u.isCompiled) return l
    ;[Ar, Rr, Ur, Cr].forEach((d) => d(u, s)),
      t.compilerExtensions.forEach((d) => d(u, s)),
      (u.__beforeBegin = null),
      [Tr, Sr, Nr].forEach((d) => d(u, s)),
      (u.isCompiled = !0)
    let c = null
    return (
      typeof u.keywords == 'object' &&
        u.keywords.$pattern &&
        ((u.keywords = Object.assign({}, u.keywords)),
        (c = u.keywords.$pattern),
        delete u.keywords.$pattern),
      (c = c || /\w+/),
      u.keywords && (u.keywords = di(u.keywords, t.case_insensitive)),
      (l.keywordPatternRe = e(c, !0)),
      s &&
        (u.begin || (u.begin = /\B|\b/),
        (l.beginRe = e(l.begin)),
        !u.end && !u.endsWithParent && (u.end = /\B|\b/),
        u.end && (l.endRe = e(l.end)),
        (l.terminatorEnd = Bt(l.end) || ''),
        u.endsWithParent &&
          s.terminatorEnd &&
          (l.terminatorEnd += (u.end ? '|' : '') + s.terminatorEnd)),
      u.illegal && (l.illegalRe = e(u.illegal)),
      u.contains || (u.contains = []),
      (u.contains = [].concat(
        ...u.contains.map(function (d) {
          return zr(d === 'self' ? u : d)
        }),
      )),
      u.contains.forEach(function (d) {
        o(d, l)
      }),
      u.starts && o(u.starts, s),
      (l.matcher = a(l)),
      l
    )
  }
  if (
    (t.compilerExtensions || (t.compilerExtensions = []),
    t.contains && t.contains.includes('self'))
  )
    throw new Error(
      'ERR: contains `self` is not supported at the top-level of a language.  See documentation.',
    )
  return (t.classNameAliases = mt(t.classNameAliases || {})), o(t)
}
function gi(t) {
  return t ? t.endsWithParent || gi(t.starts) : !1
}
function zr(t) {
  return (
    t.variants &&
      !t.cachedVariants &&
      (t.cachedVariants = t.variants.map(function (e) {
        return mt(t, { variants: null }, e)
      })),
    t.cachedVariants
      ? t.cachedVariants
      : gi(t)
        ? mt(t, { starts: t.starts ? mt(t.starts) : null })
        : Object.isFrozen(t)
          ? mt(t)
          : t
  )
}
var Fr = '11.10.0'
class Wr extends Error {
  constructor(e, i) {
    super(e), (this.name = 'HTMLInjectionError'), (this.html = i)
  }
}
const Re = oi,
  Bn = mt,
  Pn = Symbol('nomatch'),
  Kr = 7,
  mi = function (t) {
    const e = Object.create(null),
      i = Object.create(null),
      n = []
    let a = !0
    const o =
        "Could not find the language '{}', did you forget to load/include a language module?",
      u = { disableAutodetect: !0, name: 'Plain text', contains: [] }
    let s = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: 'hljs-',
      cssSelector: 'pre code',
      languages: null,
      __emitter: nr,
    }
    function l(m) {
      return s.noHighlightRe.test(m)
    }
    function c(m) {
      let E = m.className + ' '
      E += m.parentNode ? m.parentNode.className : ''
      const N = s.languageDetectRe.exec(E)
      if (N) {
        const D = O(N[1])
        return (
          D ||
            (Dn(o.replace('{}', N[1])),
            Dn('Falling back to no-highlight mode for this block.', m)),
          D ? N[1] : 'no-highlight'
        )
      }
      return E.split(/\s+/).find((D) => l(D) || O(D))
    }
    function d(m, E, N) {
      let D = '',
        U = ''
      typeof E == 'object'
        ? ((D = m), (N = E.ignoreIllegals), (U = E.language))
        : (St('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'),
          St(
            '10.7.0',
            `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`,
          ),
          (U = m),
          (D = E)),
        N === void 0 && (N = !0)
      const V = { code: D, language: U }
      $('before:highlight', V)
      const it = V.result ? V.result : g(V.language, V.code, N)
      return (it.code = V.code), $('after:highlight', it), it
    }
    function g(m, E, N, D) {
      const U = Object.create(null)
      function V(R, C) {
        return R.keywords[C]
      }
      function it() {
        if (!B.keywords) {
          q.addText(G)
          return
        }
        let R = 0
        B.keywordPatternRe.lastIndex = 0
        let C = B.keywordPatternRe.exec(G),
          P = ''
        for (; C; ) {
          P += G.substring(R, C.index)
          const H = st.case_insensitive ? C[0].toLowerCase() : C[0],
            Y = V(B, H)
          if (Y) {
            const [ct, zi] = Y
            if (
              (q.addText(P),
              (P = ''),
              (U[H] = (U[H] || 0) + 1),
              U[H] <= Kr && (Ft += zi),
              ct.startsWith('_'))
            )
              P += C[0]
            else {
              const Fi = st.classNameAliases[ct] || ct
              J(C[0], Fi)
            }
          } else P += C[0]
          ;(R = B.keywordPatternRe.lastIndex), (C = B.keywordPatternRe.exec(G))
        }
        ;(P += G.substring(R)), q.addText(P)
      }
      function At() {
        if (G === '') return
        let R = null
        if (typeof B.subLanguage == 'string') {
          if (!e[B.subLanguage]) {
            q.addText(G)
            return
          }
          ;(R = g(B.subLanguage, G, !0, tn[B.subLanguage])),
            (tn[B.subLanguage] = R._top)
        } else R = T(G, B.subLanguage.length ? B.subLanguage : null)
        B.relevance > 0 && (Ft += R.relevance),
          q.__addSublanguage(R._emitter, R.language)
      }
      function et() {
        B.subLanguage != null ? At() : it(), (G = '')
      }
      function J(R, C) {
        R !== '' && (q.startScope(C), q.addText(R), q.endScope())
      }
      function Qe(R, C) {
        let P = 1
        const H = C.length - 1
        for (; P <= H; ) {
          if (!R._emit[P]) {
            P++
            continue
          }
          const Y = st.classNameAliases[R[P]] || R[P],
            ct = C[P]
          Y ? J(ct, Y) : ((G = ct), it(), (G = '')), P++
        }
      }
      function qe(R, C) {
        return (
          R.scope &&
            typeof R.scope == 'string' &&
            q.openNode(st.classNameAliases[R.scope] || R.scope),
          R.beginScope &&
            (R.beginScope._wrap
              ? (J(
                  G,
                  st.classNameAliases[R.beginScope._wrap] || R.beginScope._wrap,
                ),
                (G = ''))
              : R.beginScope._multi && (Qe(R.beginScope, C), (G = ''))),
          (B = Object.create(R, { parent: { value: B } })),
          B
        )
      }
      function Je(R, C, P) {
        let H = ar(R.endRe, P)
        if (H) {
          if (R['on:end']) {
            const Y = new Ln(R)
            R['on:end'](C, Y), Y.isMatchIgnored && (H = !1)
          }
          if (H) {
            for (; R.endsParent && R.parent; ) R = R.parent
            return R
          }
        }
        if (R.endsWithParent) return Je(R.parent, C, P)
      }
      function Di(R) {
        return B.matcher.regexIndex === 0 ? ((G += R[0]), 1) : ((de = !0), 0)
      }
      function Bi(R) {
        const C = R[0],
          P = R.rule,
          H = new Ln(P),
          Y = [P.__beforeBegin, P['on:begin']]
        for (const ct of Y) if (ct && (ct(R, H), H.isMatchIgnored)) return Di(C)
        return (
          P.skip
            ? (G += C)
            : (P.excludeBegin && (G += C),
              et(),
              !P.returnBegin && !P.excludeBegin && (G = C)),
          qe(P, R),
          P.returnBegin ? 0 : C.length
        )
      }
      function Pi(R) {
        const C = R[0],
          P = E.substring(R.index),
          H = Je(B, R, P)
        if (!H) return Pn
        const Y = B
        B.endScope && B.endScope._wrap
          ? (et(), J(C, B.endScope._wrap))
          : B.endScope && B.endScope._multi
            ? (et(), Qe(B.endScope, R))
            : Y.skip
              ? (G += C)
              : (Y.returnEnd || Y.excludeEnd || (G += C),
                et(),
                Y.excludeEnd && (G = C))
        do
          B.scope && q.closeNode(),
            !B.skip && !B.subLanguage && (Ft += B.relevance),
            (B = B.parent)
        while (B !== H.parent)
        return H.starts && qe(H.starts, R), Y.returnEnd ? 0 : C.length
      }
      function Ui() {
        const R = []
        for (let C = B; C !== st; C = C.parent) C.scope && R.unshift(C.scope)
        R.forEach((C) => q.openNode(C))
      }
      let zt = {}
      function Ye(R, C) {
        const P = C && C[0]
        if (((G += R), P == null)) return et(), 0
        if (
          zt.type === 'begin' &&
          C.type === 'end' &&
          zt.index === C.index &&
          P === ''
        ) {
          if (((G += E.slice(C.index, C.index + 1)), !a)) {
            const H = new Error(`0 width match regex (${m})`)
            throw ((H.languageName = m), (H.badRule = zt.rule), H)
          }
          return 1
        }
        if (((zt = C), C.type === 'begin')) return Bi(C)
        if (C.type === 'illegal' && !N) {
          const H = new Error(
            'Illegal lexeme "' +
              P +
              '" for mode "' +
              (B.scope || '<unnamed>') +
              '"',
          )
          throw ((H.mode = B), H)
        } else if (C.type === 'end') {
          const H = Pi(C)
          if (H !== Pn) return H
        }
        if (C.type === 'illegal' && P === '') return 1
        if (he > 1e5 && he > C.index * 3)
          throw new Error(
            'potential infinite loop, way more iterations than matches',
          )
        return (G += P), P.length
      }
      const st = O(m)
      if (!st)
        throw (
          (Et(o.replace('{}', m)), new Error('Unknown language: "' + m + '"'))
        )
      const $i = $r(st)
      let pe = '',
        B = D || $i
      const tn = {},
        q = new s.__emitter(s)
      Ui()
      let G = '',
        Ft = 0,
        yt = 0,
        he = 0,
        de = !1
      try {
        if (st.__emitTokens) st.__emitTokens(E, q)
        else {
          for (B.matcher.considerAll(); ; ) {
            he++,
              de ? (de = !1) : B.matcher.considerAll(),
              (B.matcher.lastIndex = yt)
            const R = B.matcher.exec(E)
            if (!R) break
            const C = E.substring(yt, R.index),
              P = Ye(C, R)
            yt = R.index + P
          }
          Ye(E.substring(yt))
        }
        return (
          q.finalize(),
          (pe = q.toHTML()),
          {
            language: m,
            value: pe,
            relevance: Ft,
            illegal: !1,
            _emitter: q,
            _top: B,
          }
        )
      } catch (R) {
        if (R.message && R.message.includes('Illegal'))
          return {
            language: m,
            value: Re(E),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: R.message,
              index: yt,
              context: E.slice(yt - 100, yt + 100),
              mode: R.mode,
              resultSoFar: pe,
            },
            _emitter: q,
          }
        if (a)
          return {
            language: m,
            value: Re(E),
            illegal: !1,
            relevance: 0,
            errorRaised: R,
            _emitter: q,
            _top: B,
          }
        throw R
      }
    }
    function y(m) {
      const E = {
        value: Re(m),
        illegal: !1,
        relevance: 0,
        _top: u,
        _emitter: new s.__emitter(s),
      }
      return E._emitter.addText(m), E
    }
    function T(m, E) {
      E = E || s.languages || Object.keys(e)
      const N = y(m),
        D = E.filter(O)
          .filter(w)
          .map((et) => g(et, m, !1))
      D.unshift(N)
      const U = D.sort((et, J) => {
          if (et.relevance !== J.relevance) return J.relevance - et.relevance
          if (et.language && J.language) {
            if (O(et.language).supersetOf === J.language) return 1
            if (O(J.language).supersetOf === et.language) return -1
          }
          return 0
        }),
        [V, it] = U,
        At = V
      return (At.secondBest = it), At
    }
    function j(m, E, N) {
      const D = (E && i[E]) || N
      m.classList.add('hljs'), m.classList.add(`language-${D}`)
    }
    function M(m) {
      let E = null
      const N = c(m)
      if (l(N)) return
      if (
        ($('before:highlightElement', { el: m, language: N }),
        m.dataset.highlighted)
      ) {
        console.log(
          'Element previously highlighted. To highlight again, first unset `dataset.highlighted`.',
          m,
        )
        return
      }
      if (
        m.children.length > 0 &&
        (s.ignoreUnescapedHTML ||
          (console.warn(
            'One of your code blocks includes unescaped HTML. This is a potentially serious security risk.',
          ),
          console.warn(
            'https://github.com/highlightjs/highlight.js/wiki/security',
          ),
          console.warn('The element with unescaped HTML:'),
          console.warn(m)),
        s.throwUnescapedHTML)
      )
        throw new Wr(
          'One of your code blocks includes unescaped HTML.',
          m.innerHTML,
        )
      E = m
      const D = E.textContent,
        U = N ? d(D, { language: N, ignoreIllegals: !0 }) : T(D)
      ;(m.innerHTML = U.value),
        (m.dataset.highlighted = 'yes'),
        j(m, N, U.language),
        (m.result = {
          language: U.language,
          re: U.relevance,
          relevance: U.relevance,
        }),
        U.secondBest &&
          (m.secondBest = {
            language: U.secondBest.language,
            relevance: U.secondBest.relevance,
          }),
        $('after:highlightElement', { el: m, result: U, text: D })
    }
    function f(m) {
      s = Bn(s, m)
    }
    const _ = () => {
      x(),
        St('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.')
    }
    function b() {
      x(),
        St(
          '10.6.0',
          'initHighlightingOnLoad() deprecated.  Use highlightAll() now.',
        )
    }
    let S = !1
    function x() {
      if (document.readyState === 'loading') {
        S = !0
        return
      }
      document.querySelectorAll(s.cssSelector).forEach(M)
    }
    function A() {
      S && x()
    }
    typeof window < 'u' &&
      window.addEventListener &&
      window.addEventListener('DOMContentLoaded', A, !1)
    function p(m, E) {
      let N = null
      try {
        N = E(t)
      } catch (D) {
        if (
          (Et(
            "Language definition for '{}' could not be registered.".replace(
              '{}',
              m,
            ),
          ),
          a)
        )
          Et(D)
        else throw D
        N = u
      }
      N.name || (N.name = m),
        (e[m] = N),
        (N.rawDefinition = E.bind(null, t)),
        N.aliases && r(N.aliases, { languageName: m })
    }
    function v(m) {
      delete e[m]
      for (const E of Object.keys(i)) i[E] === m && delete i[E]
    }
    function h() {
      return Object.keys(e)
    }
    function O(m) {
      return (m = (m || '').toLowerCase()), e[m] || e[i[m]]
    }
    function r(m, { languageName: E }) {
      typeof m == 'string' && (m = [m]),
        m.forEach((N) => {
          i[N.toLowerCase()] = E
        })
    }
    function w(m) {
      const E = O(m)
      return E && !E.disableAutodetect
    }
    function k(m) {
      m['before:highlightBlock'] &&
        !m['before:highlightElement'] &&
        (m['before:highlightElement'] = (E) => {
          m['before:highlightBlock'](Object.assign({ block: E.el }, E))
        }),
        m['after:highlightBlock'] &&
          !m['after:highlightElement'] &&
          (m['after:highlightElement'] = (E) => {
            m['after:highlightBlock'](Object.assign({ block: E.el }, E))
          })
    }
    function L(m) {
      k(m), n.push(m)
    }
    function I(m) {
      const E = n.indexOf(m)
      E !== -1 && n.splice(E, 1)
    }
    function $(m, E) {
      const N = m
      n.forEach(function (D) {
        D[N] && D[N](E)
      })
    }
    function K(m) {
      return (
        St('10.7.0', 'highlightBlock will be removed entirely in v12.0'),
        St('10.7.0', 'Please use highlightElement now.'),
        M(m)
      )
    }
    Object.assign(t, {
      highlight: d,
      highlightAuto: T,
      highlightAll: x,
      highlightElement: M,
      highlightBlock: K,
      configure: f,
      initHighlighting: _,
      initHighlightingOnLoad: b,
      registerLanguage: p,
      unregisterLanguage: v,
      listLanguages: h,
      getLanguage: O,
      registerAliases: r,
      autoDetection: w,
      inherit: Bn,
      addPlugin: L,
      removePlugin: I,
    }),
      (t.debugMode = function () {
        a = !1
      }),
      (t.safeMode = function () {
        a = !0
      }),
      (t.versionString = Fr),
      (t.regex = {
        concat: Ot,
        lookahead: _i,
        either: $e,
        optional: sr,
        anyNumberOfTimes: ir,
      })
    for (const m in Zt) typeof Zt[m] == 'object' && ai(Zt[m])
    return Object.assign(t, Zt), t
  },
  Nt = mi({})
Nt.newInstance = () => mi({})
var Hr = Nt
Nt.HighlightJS = Nt
Nt.default = Nt
const $t = Hr,
  ie = '[A-Za-z$_][0-9A-Za-z$_]*',
  bi = [
    'as',
    'in',
    'of',
    'if',
    'for',
    'while',
    'finally',
    'var',
    'new',
    'function',
    'do',
    'return',
    'void',
    'else',
    'break',
    'catch',
    'instanceof',
    'with',
    'throw',
    'case',
    'default',
    'try',
    'switch',
    'continue',
    'typeof',
    'delete',
    'let',
    'yield',
    'const',
    'class',
    'debugger',
    'async',
    'await',
    'static',
    'import',
    'from',
    'export',
    'extends',
  ],
  yi = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
  vi = [
    'Object',
    'Function',
    'Boolean',
    'Symbol',
    'Math',
    'Date',
    'Number',
    'BigInt',
    'String',
    'RegExp',
    'Array',
    'Float32Array',
    'Float64Array',
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Int32Array',
    'Uint16Array',
    'Uint32Array',
    'BigInt64Array',
    'BigUint64Array',
    'Set',
    'Map',
    'WeakSet',
    'WeakMap',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'Atomics',
    'DataView',
    'JSON',
    'Promise',
    'Generator',
    'GeneratorFunction',
    'AsyncFunction',
    'Reflect',
    'Proxy',
    'Intl',
    'WebAssembly',
  ],
  ki = [
    'Error',
    'EvalError',
    'InternalError',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
  ],
  wi = [
    'setInterval',
    'setTimeout',
    'clearInterval',
    'clearTimeout',
    'require',
    'exports',
    'eval',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'escape',
    'unescape',
  ],
  xi = [
    'arguments',
    'this',
    'super',
    'console',
    'window',
    'document',
    'localStorage',
    'sessionStorage',
    'module',
    'global',
  ],
  Ei = [].concat(wi, vi, ki)
function Gr(t) {
  const e = t.regex,
    i = (m, { after: E }) => {
      const N = '</' + m[0].slice(1)
      return m.input.indexOf(N, E) !== -1
    },
    n = ie,
    a = { begin: '<>', end: '</>' },
    o = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    u = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (m, E) => {
        const N = m[0].length + m.index,
          D = m.input[N]
        if (D === '<' || D === ',') {
          E.ignoreMatch()
          return
        }
        D === '>' && (i(m, { after: N }) || E.ignoreMatch())
        let U
        const V = m.input.substring(N)
        if ((U = V.match(/^\s*=/))) {
          E.ignoreMatch()
          return
        }
        if ((U = V.match(/^\s+extends\s+/)) && U.index === 0) {
          E.ignoreMatch()
          return
        }
      },
    },
    s = {
      $pattern: ie,
      keyword: bi,
      literal: yi,
      built_in: Ei,
      'variable.language': xi,
    },
    l = '[0-9](_?[0-9])*',
    c = `\\.(${l})`,
    d = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
    g = {
      className: 'number',
      variants: [
        { begin: `(\\b(${d})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b` },
        { begin: `\\b(${d})\\b((${c})\\b|\\.)?|(${c})\\b` },
        { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
        { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
        { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
        { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
        { begin: '\\b0[0-7]+n?\\b' },
      ],
      relevance: 0,
    },
    y = {
      className: 'subst',
      begin: '\\$\\{',
      end: '\\}',
      keywords: s,
      contains: [],
    },
    T = {
      begin: '.?html`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'xml',
      },
    },
    j = {
      begin: '.?css`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'css',
      },
    },
    M = {
      begin: '.?gql`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'graphql',
      },
    },
    f = {
      className: 'string',
      begin: '`',
      end: '`',
      contains: [t.BACKSLASH_ESCAPE, y],
    },
    _ = {
      className: 'comment',
      variants: [
        t.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
          relevance: 0,
          contains: [
            {
              begin: '(?=@[A-Za-z]+)',
              relevance: 0,
              contains: [
                { className: 'doctag', begin: '@[A-Za-z]+' },
                {
                  className: 'type',
                  begin: '\\{',
                  end: '\\}',
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: 'variable',
                  begin: n + '(?=\\s*(-)|$)',
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        t.C_BLOCK_COMMENT_MODE,
        t.C_LINE_COMMENT_MODE,
      ],
    },
    b = [
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      T,
      j,
      M,
      f,
      { match: /\$\d+/ },
      g,
    ]
  y.contains = b.concat({
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: ['self'].concat(b),
  })
  const S = [].concat(_, y.contains),
    x = S.concat([
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: s,
        contains: ['self'].concat(S),
      },
    ]),
    A = {
      className: 'params',
      begin: /(\s*)\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: s,
      contains: x,
    },
    p = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            n,
            /\s+/,
            /extends/,
            /\s+/,
            e.concat(n, '(', e.concat(/\./, n), ')*'),
          ],
          scope: {
            1: 'keyword',
            3: 'title.class',
            5: 'keyword',
            7: 'title.class.inherited',
          },
        },
        {
          match: [/class/, /\s+/, n],
          scope: { 1: 'keyword', 3: 'title.class' },
        },
      ],
    },
    v = {
      relevance: 0,
      match: e.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: 'title.class',
      keywords: { _: [...vi, ...ki] },
    },
    h = {
      label: 'use_strict',
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    O = {
      variants: [
        { match: [/function/, /\s+/, n, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: 'keyword', 3: 'title.function' },
      label: 'func.def',
      contains: [A],
      illegal: /%/,
    },
    r = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: 'variable.constant',
    }
  function w(m) {
    return e.concat('(?!', m.join('|'), ')')
  }
  const k = {
      match: e.concat(
        /\b/,
        w([...wi, 'super', 'import'].map((m) => `${m}\\s*\\(`)),
        n,
        e.lookahead(/\s*\(/),
      ),
      className: 'title.function',
      relevance: 0,
    },
    L = {
      begin: e.concat(/\./, e.lookahead(e.concat(n, /(?![0-9A-Za-z$_(])/))),
      end: n,
      excludeBegin: !0,
      keywords: 'prototype',
      className: 'property',
      relevance: 0,
    },
    I = {
      match: [/get|set/, /\s+/, n, /(?=\()/],
      className: { 1: 'keyword', 3: 'title.function' },
      contains: [{ begin: /\(\)/ }, A],
    },
    $ =
      '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
      t.UNDERSCORE_IDENT_RE +
      ')\\s*=>',
    K = {
      match: [
        /const|var|let/,
        /\s+/,
        n,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        e.lookahead($),
      ],
      keywords: 'async',
      className: { 1: 'keyword', 3: 'title.function' },
      contains: [A],
    }
  return {
    name: 'JavaScript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: s,
    exports: { PARAMS_CONTAINS: x, CLASS_REFERENCE: v },
    illegal: /#(?![$_A-z])/,
    contains: [
      t.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
      h,
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      T,
      j,
      M,
      f,
      _,
      { match: /\$\d+/ },
      g,
      v,
      { className: 'attr', begin: n + e.lookahead(':'), relevance: 0 },
      K,
      {
        begin: '(' + t.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        relevance: 0,
        contains: [
          _,
          t.REGEXP_MODE,
          {
            className: 'function',
            begin: $,
            returnBegin: !0,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  { begin: t.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: x,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: a.begin, end: a.end },
              { match: o },
              { begin: u.begin, 'on:begin': u.isTrulyOpeningTag, end: u.end },
            ],
            subLanguage: 'xml',
            contains: [
              { begin: u.begin, end: u.end, skip: !0, contains: ['self'] },
            ],
          },
        ],
      },
      O,
      { beginKeywords: 'while if switch catch for' },
      {
        begin:
          '\\b(?!function)' +
          t.UNDERSCORE_IDENT_RE +
          '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
        returnBegin: !0,
        label: 'func.def',
        contains: [
          A,
          t.inherit(t.TITLE_MODE, { begin: n, className: 'title.function' }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      L,
      { match: '\\$' + n, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: 'title.function' },
        contains: [A],
      },
      k,
      r,
      p,
      I,
      { match: /\$[(.]/ },
    ],
  }
}
function Vr(t) {
  const e = Gr(t),
    i = ie,
    n = [
      'any',
      'void',
      'number',
      'boolean',
      'string',
      'object',
      'never',
      'symbol',
      'bigint',
      'unknown',
    ],
    a = {
      begin: [/namespace/, /\s+/, t.IDENT_RE],
      beginScope: { 1: 'keyword', 3: 'title.class' },
    },
    o = {
      beginKeywords: 'interface',
      end: /\{/,
      excludeEnd: !0,
      keywords: { keyword: 'interface extends', built_in: n },
      contains: [e.exports.CLASS_REFERENCE],
    },
    u = { className: 'meta', relevance: 10, begin: /^\s*['"]use strict['"]/ },
    s = [
      'type',
      'interface',
      'public',
      'private',
      'protected',
      'implements',
      'declare',
      'abstract',
      'readonly',
      'enum',
      'override',
      'satisfies',
    ],
    l = {
      $pattern: ie,
      keyword: bi.concat(s),
      literal: yi,
      built_in: Ei.concat(n),
      'variable.language': xi,
    },
    c = { className: 'meta', begin: '@' + i },
    d = (T, j, M) => {
      const f = T.contains.findIndex((_) => _.label === j)
      if (f === -1) throw new Error('can not find mode to replace')
      T.contains.splice(f, 1, M)
    }
  Object.assign(e.keywords, l), e.exports.PARAMS_CONTAINS.push(c)
  const g = e.contains.find((T) => T.className === 'attr')
  e.exports.PARAMS_CONTAINS.push([e.exports.CLASS_REFERENCE, g]),
    (e.contains = e.contains.concat([c, a, o])),
    d(e, 'shebang', t.SHEBANG()),
    d(e, 'use_strict', u)
  const y = e.contains.find((T) => T.label === 'func.def')
  return (
    (y.relevance = 0),
    Object.assign(e, {
      name: 'TypeScript',
      aliases: ['ts', 'tsx', 'mts', 'cts'],
    }),
    e
  )
}
const Un = '[A-Za-z$_][0-9A-Za-z$_]*',
  Xr = [
    'as',
    'in',
    'of',
    'if',
    'for',
    'while',
    'finally',
    'var',
    'new',
    'function',
    'do',
    'return',
    'void',
    'else',
    'break',
    'catch',
    'instanceof',
    'with',
    'throw',
    'case',
    'default',
    'try',
    'switch',
    'continue',
    'typeof',
    'delete',
    'let',
    'yield',
    'const',
    'class',
    'debugger',
    'async',
    'await',
    'static',
    'import',
    'from',
    'export',
    'extends',
  ],
  Zr = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
  Oi = [
    'Object',
    'Function',
    'Boolean',
    'Symbol',
    'Math',
    'Date',
    'Number',
    'BigInt',
    'String',
    'RegExp',
    'Array',
    'Float32Array',
    'Float64Array',
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Int32Array',
    'Uint16Array',
    'Uint32Array',
    'BigInt64Array',
    'BigUint64Array',
    'Set',
    'Map',
    'WeakSet',
    'WeakMap',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'Atomics',
    'DataView',
    'JSON',
    'Promise',
    'Generator',
    'GeneratorFunction',
    'AsyncFunction',
    'Reflect',
    'Proxy',
    'Intl',
    'WebAssembly',
  ],
  Ai = [
    'Error',
    'EvalError',
    'InternalError',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
  ],
  Ti = [
    'setInterval',
    'setTimeout',
    'clearInterval',
    'clearTimeout',
    'require',
    'exports',
    'eval',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'escape',
    'unescape',
  ],
  Qr = [
    'arguments',
    'this',
    'super',
    'console',
    'window',
    'document',
    'localStorage',
    'sessionStorage',
    'module',
    'global',
  ],
  qr = [].concat(Ti, Oi, Ai)
function Jr(t) {
  const e = t.regex,
    i = (m, { after: E }) => {
      const N = '</' + m[0].slice(1)
      return m.input.indexOf(N, E) !== -1
    },
    n = Un,
    a = { begin: '<>', end: '</>' },
    o = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    u = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (m, E) => {
        const N = m[0].length + m.index,
          D = m.input[N]
        if (D === '<' || D === ',') {
          E.ignoreMatch()
          return
        }
        D === '>' && (i(m, { after: N }) || E.ignoreMatch())
        let U
        const V = m.input.substring(N)
        if ((U = V.match(/^\s*=/))) {
          E.ignoreMatch()
          return
        }
        if ((U = V.match(/^\s+extends\s+/)) && U.index === 0) {
          E.ignoreMatch()
          return
        }
      },
    },
    s = {
      $pattern: Un,
      keyword: Xr,
      literal: Zr,
      built_in: qr,
      'variable.language': Qr,
    },
    l = '[0-9](_?[0-9])*',
    c = `\\.(${l})`,
    d = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
    g = {
      className: 'number',
      variants: [
        { begin: `(\\b(${d})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b` },
        { begin: `\\b(${d})\\b((${c})\\b|\\.)?|(${c})\\b` },
        { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
        { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
        { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
        { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
        { begin: '\\b0[0-7]+n?\\b' },
      ],
      relevance: 0,
    },
    y = {
      className: 'subst',
      begin: '\\$\\{',
      end: '\\}',
      keywords: s,
      contains: [],
    },
    T = {
      begin: '.?html`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'xml',
      },
    },
    j = {
      begin: '.?css`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'css',
      },
    },
    M = {
      begin: '.?gql`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'graphql',
      },
    },
    f = {
      className: 'string',
      begin: '`',
      end: '`',
      contains: [t.BACKSLASH_ESCAPE, y],
    },
    _ = {
      className: 'comment',
      variants: [
        t.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
          relevance: 0,
          contains: [
            {
              begin: '(?=@[A-Za-z]+)',
              relevance: 0,
              contains: [
                { className: 'doctag', begin: '@[A-Za-z]+' },
                {
                  className: 'type',
                  begin: '\\{',
                  end: '\\}',
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: 'variable',
                  begin: n + '(?=\\s*(-)|$)',
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        t.C_BLOCK_COMMENT_MODE,
        t.C_LINE_COMMENT_MODE,
      ],
    },
    b = [
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      T,
      j,
      M,
      f,
      { match: /\$\d+/ },
      g,
    ]
  y.contains = b.concat({
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: ['self'].concat(b),
  })
  const S = [].concat(_, y.contains),
    x = S.concat([
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: s,
        contains: ['self'].concat(S),
      },
    ]),
    A = {
      className: 'params',
      begin: /(\s*)\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: s,
      contains: x,
    },
    p = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            n,
            /\s+/,
            /extends/,
            /\s+/,
            e.concat(n, '(', e.concat(/\./, n), ')*'),
          ],
          scope: {
            1: 'keyword',
            3: 'title.class',
            5: 'keyword',
            7: 'title.class.inherited',
          },
        },
        {
          match: [/class/, /\s+/, n],
          scope: { 1: 'keyword', 3: 'title.class' },
        },
      ],
    },
    v = {
      relevance: 0,
      match: e.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: 'title.class',
      keywords: { _: [...Oi, ...Ai] },
    },
    h = {
      label: 'use_strict',
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    O = {
      variants: [
        { match: [/function/, /\s+/, n, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: 'keyword', 3: 'title.function' },
      label: 'func.def',
      contains: [A],
      illegal: /%/,
    },
    r = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: 'variable.constant',
    }
  function w(m) {
    return e.concat('(?!', m.join('|'), ')')
  }
  const k = {
      match: e.concat(
        /\b/,
        w([...Ti, 'super', 'import'].map((m) => `${m}\\s*\\(`)),
        n,
        e.lookahead(/\s*\(/),
      ),
      className: 'title.function',
      relevance: 0,
    },
    L = {
      begin: e.concat(/\./, e.lookahead(e.concat(n, /(?![0-9A-Za-z$_(])/))),
      end: n,
      excludeBegin: !0,
      keywords: 'prototype',
      className: 'property',
      relevance: 0,
    },
    I = {
      match: [/get|set/, /\s+/, n, /(?=\()/],
      className: { 1: 'keyword', 3: 'title.function' },
      contains: [{ begin: /\(\)/ }, A],
    },
    $ =
      '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
      t.UNDERSCORE_IDENT_RE +
      ')\\s*=>',
    K = {
      match: [
        /const|var|let/,
        /\s+/,
        n,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        e.lookahead($),
      ],
      keywords: 'async',
      className: { 1: 'keyword', 3: 'title.function' },
      contains: [A],
    }
  return {
    name: 'JavaScript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: s,
    exports: { PARAMS_CONTAINS: x, CLASS_REFERENCE: v },
    illegal: /#(?![$_A-z])/,
    contains: [
      t.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
      h,
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      T,
      j,
      M,
      f,
      _,
      { match: /\$\d+/ },
      g,
      v,
      { className: 'attr', begin: n + e.lookahead(':'), relevance: 0 },
      K,
      {
        begin: '(' + t.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        relevance: 0,
        contains: [
          _,
          t.REGEXP_MODE,
          {
            className: 'function',
            begin: $,
            returnBegin: !0,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  { begin: t.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: x,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: a.begin, end: a.end },
              { match: o },
              { begin: u.begin, 'on:begin': u.isTrulyOpeningTag, end: u.end },
            ],
            subLanguage: 'xml',
            contains: [
              { begin: u.begin, end: u.end, skip: !0, contains: ['self'] },
            ],
          },
        ],
      },
      O,
      { beginKeywords: 'while if switch catch for' },
      {
        begin:
          '\\b(?!function)' +
          t.UNDERSCORE_IDENT_RE +
          '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
        returnBegin: !0,
        label: 'func.def',
        contains: [
          A,
          t.inherit(t.TITLE_MODE, { begin: n, className: 'title.function' }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      L,
      { match: '\\$' + n, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: 'title.function' },
        contains: [A],
      },
      k,
      r,
      p,
      I,
      { match: /\$[(.]/ },
    ],
  }
}
const Yr = (t) => ({
    IMPORTANT: { scope: 'meta', begin: '!important' },
    BLOCK_COMMENT: t.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: 'number',
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
    },
    FUNCTION_DISPATCH: { className: 'built_in', begin: /[\w-]+(?=\()/ },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: 'selector-attr',
      begin: /\[/,
      end: /\]/,
      illegal: '$',
      contains: [t.APOS_STRING_MODE, t.QUOTE_STRING_MODE],
    },
    CSS_NUMBER_MODE: {
      scope: 'number',
      begin:
        t.NUMBER_RE +
        '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
      relevance: 0,
    },
    CSS_VARIABLE: { className: 'attr', begin: /--[A-Za-z_][A-Za-z0-9_-]*/ },
  }),
  ta = [
    'a',
    'abbr',
    'address',
    'article',
    'aside',
    'audio',
    'b',
    'blockquote',
    'body',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'dd',
    'del',
    'details',
    'dfn',
    'div',
    'dl',
    'dt',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'main',
    'mark',
    'menu',
    'nav',
    'object',
    'ol',
    'optgroup',
    'option',
    'p',
    'picture',
    'q',
    'quote',
    'samp',
    'section',
    'select',
    'source',
    'span',
    'strong',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'ul',
    'var',
    'video',
  ],
  ea = [
    'defs',
    'g',
    'marker',
    'mask',
    'pattern',
    'svg',
    'switch',
    'symbol',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feFlood',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMorphology',
    'feOffset',
    'feSpecularLighting',
    'feTile',
    'feTurbulence',
    'linearGradient',
    'radialGradient',
    'stop',
    'circle',
    'ellipse',
    'image',
    'line',
    'path',
    'polygon',
    'polyline',
    'rect',
    'text',
    'use',
    'textPath',
    'tspan',
    'foreignObject',
    'clipPath',
  ],
  na = [...ta, ...ea],
  ia = [
    'any-hover',
    'any-pointer',
    'aspect-ratio',
    'color',
    'color-gamut',
    'color-index',
    'device-aspect-ratio',
    'device-height',
    'device-width',
    'display-mode',
    'forced-colors',
    'grid',
    'height',
    'hover',
    'inverted-colors',
    'monochrome',
    'orientation',
    'overflow-block',
    'overflow-inline',
    'pointer',
    'prefers-color-scheme',
    'prefers-contrast',
    'prefers-reduced-motion',
    'prefers-reduced-transparency',
    'resolution',
    'scan',
    'scripting',
    'update',
    'width',
    'min-width',
    'max-width',
    'min-height',
    'max-height',
  ]
    .sort()
    .reverse(),
  sa = [
    'active',
    'any-link',
    'blank',
    'checked',
    'current',
    'default',
    'defined',
    'dir',
    'disabled',
    'drop',
    'empty',
    'enabled',
    'first',
    'first-child',
    'first-of-type',
    'fullscreen',
    'future',
    'focus',
    'focus-visible',
    'focus-within',
    'has',
    'host',
    'host-context',
    'hover',
    'indeterminate',
    'in-range',
    'invalid',
    'is',
    'lang',
    'last-child',
    'last-of-type',
    'left',
    'link',
    'local-link',
    'not',
    'nth-child',
    'nth-col',
    'nth-last-child',
    'nth-last-col',
    'nth-last-of-type',
    'nth-of-type',
    'only-child',
    'only-of-type',
    'optional',
    'out-of-range',
    'past',
    'placeholder-shown',
    'read-only',
    'read-write',
    'required',
    'right',
    'root',
    'scope',
    'target',
    'target-within',
    'user-invalid',
    'valid',
    'visited',
    'where',
  ]
    .sort()
    .reverse(),
  ra = [
    'after',
    'backdrop',
    'before',
    'cue',
    'cue-region',
    'first-letter',
    'first-line',
    'grammar-error',
    'marker',
    'part',
    'placeholder',
    'selection',
    'slotted',
    'spelling-error',
  ]
    .sort()
    .reverse(),
  aa = [
    'accent-color',
    'align-content',
    'align-items',
    'align-self',
    'alignment-baseline',
    'all',
    'animation',
    'animation-delay',
    'animation-direction',
    'animation-duration',
    'animation-fill-mode',
    'animation-iteration-count',
    'animation-name',
    'animation-play-state',
    'animation-timing-function',
    'appearance',
    'backface-visibility',
    'background',
    'background-attachment',
    'background-blend-mode',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',
    'background-position',
    'background-repeat',
    'background-size',
    'baseline-shift',
    'block-size',
    'border',
    'border-block',
    'border-block-color',
    'border-block-end',
    'border-block-end-color',
    'border-block-end-style',
    'border-block-end-width',
    'border-block-start',
    'border-block-start-color',
    'border-block-start-style',
    'border-block-start-width',
    'border-block-style',
    'border-block-width',
    'border-bottom',
    'border-bottom-color',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'border-bottom-style',
    'border-bottom-width',
    'border-collapse',
    'border-color',
    'border-image',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',
    'border-image-source',
    'border-image-width',
    'border-inline',
    'border-inline-color',
    'border-inline-end',
    'border-inline-end-color',
    'border-inline-end-style',
    'border-inline-end-width',
    'border-inline-start',
    'border-inline-start-color',
    'border-inline-start-style',
    'border-inline-start-width',
    'border-inline-style',
    'border-inline-width',
    'border-left',
    'border-left-color',
    'border-left-style',
    'border-left-width',
    'border-radius',
    'border-right',
    'border-end-end-radius',
    'border-end-start-radius',
    'border-right-color',
    'border-right-style',
    'border-right-width',
    'border-spacing',
    'border-start-end-radius',
    'border-start-start-radius',
    'border-style',
    'border-top',
    'border-top-color',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-top-style',
    'border-top-width',
    'border-width',
    'bottom',
    'box-decoration-break',
    'box-shadow',
    'box-sizing',
    'break-after',
    'break-before',
    'break-inside',
    'cx',
    'cy',
    'caption-side',
    'caret-color',
    'clear',
    'clip',
    'clip-path',
    'clip-rule',
    'color',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'color-scheme',
    'column-count',
    'column-fill',
    'column-gap',
    'column-rule',
    'column-rule-color',
    'column-rule-style',
    'column-rule-width',
    'column-span',
    'column-width',
    'columns',
    'contain',
    'content',
    'content-visibility',
    'counter-increment',
    'counter-reset',
    'cue',
    'cue-after',
    'cue-before',
    'cursor',
    'direction',
    'display',
    'dominant-baseline',
    'empty-cells',
    'enable-background',
    'fill',
    'fill-opacity',
    'fill-rule',
    'filter',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'float',
    'flow',
    'flood-color',
    'flood-opacity',
    'font',
    'font-display',
    'font-family',
    'font-feature-settings',
    'font-kerning',
    'font-language-override',
    'font-size',
    'font-size-adjust',
    'font-smoothing',
    'font-stretch',
    'font-style',
    'font-synthesis',
    'font-variant',
    'font-variant-caps',
    'font-variant-east-asian',
    'font-variant-ligatures',
    'font-variant-numeric',
    'font-variant-position',
    'font-variation-settings',
    'font-weight',
    'gap',
    'glyph-orientation-horizontal',
    'glyph-orientation-vertical',
    'grid',
    'grid-area',
    'grid-auto-columns',
    'grid-auto-flow',
    'grid-auto-rows',
    'grid-column',
    'grid-column-end',
    'grid-column-start',
    'grid-gap',
    'grid-row',
    'grid-row-end',
    'grid-row-start',
    'grid-template',
    'grid-template-areas',
    'grid-template-columns',
    'grid-template-rows',
    'hanging-punctuation',
    'height',
    'hyphens',
    'icon',
    'image-orientation',
    'image-rendering',
    'image-resolution',
    'ime-mode',
    'inline-size',
    'inset',
    'inset-block',
    'inset-block-end',
    'inset-block-start',
    'inset-inline',
    'inset-inline-end',
    'inset-inline-start',
    'isolation',
    'kerning',
    'justify-content',
    'justify-items',
    'justify-self',
    'left',
    'letter-spacing',
    'lighting-color',
    'line-break',
    'line-height',
    'list-style',
    'list-style-image',
    'list-style-position',
    'list-style-type',
    'marker',
    'marker-end',
    'marker-mid',
    'marker-start',
    'mask',
    'margin',
    'margin-block',
    'margin-block-end',
    'margin-block-start',
    'margin-bottom',
    'margin-inline',
    'margin-inline-end',
    'margin-inline-start',
    'margin-left',
    'margin-right',
    'margin-top',
    'marks',
    'mask',
    'mask-border',
    'mask-border-mode',
    'mask-border-outset',
    'mask-border-repeat',
    'mask-border-slice',
    'mask-border-source',
    'mask-border-width',
    'mask-clip',
    'mask-composite',
    'mask-image',
    'mask-mode',
    'mask-origin',
    'mask-position',
    'mask-repeat',
    'mask-size',
    'mask-type',
    'max-block-size',
    'max-height',
    'max-inline-size',
    'max-width',
    'min-block-size',
    'min-height',
    'min-inline-size',
    'min-width',
    'mix-blend-mode',
    'nav-down',
    'nav-index',
    'nav-left',
    'nav-right',
    'nav-up',
    'none',
    'normal',
    'object-fit',
    'object-position',
    'opacity',
    'order',
    'orphans',
    'outline',
    'outline-color',
    'outline-offset',
    'outline-style',
    'outline-width',
    'overflow',
    'overflow-wrap',
    'overflow-x',
    'overflow-y',
    'padding',
    'padding-block',
    'padding-block-end',
    'padding-block-start',
    'padding-bottom',
    'padding-inline',
    'padding-inline-end',
    'padding-inline-start',
    'padding-left',
    'padding-right',
    'padding-top',
    'page-break-after',
    'page-break-before',
    'page-break-inside',
    'pause',
    'pause-after',
    'pause-before',
    'perspective',
    'perspective-origin',
    'pointer-events',
    'position',
    'quotes',
    'r',
    'resize',
    'rest',
    'rest-after',
    'rest-before',
    'right',
    'rotate',
    'row-gap',
    'scale',
    'scroll-margin',
    'scroll-margin-block',
    'scroll-margin-block-end',
    'scroll-margin-block-start',
    'scroll-margin-bottom',
    'scroll-margin-inline',
    'scroll-margin-inline-end',
    'scroll-margin-inline-start',
    'scroll-margin-left',
    'scroll-margin-right',
    'scroll-margin-top',
    'scroll-padding',
    'scroll-padding-block',
    'scroll-padding-block-end',
    'scroll-padding-block-start',
    'scroll-padding-bottom',
    'scroll-padding-inline',
    'scroll-padding-inline-end',
    'scroll-padding-inline-start',
    'scroll-padding-left',
    'scroll-padding-right',
    'scroll-padding-top',
    'scroll-snap-align',
    'scroll-snap-stop',
    'scroll-snap-type',
    'scrollbar-color',
    'scrollbar-gutter',
    'scrollbar-width',
    'shape-image-threshold',
    'shape-margin',
    'shape-outside',
    'shape-rendering',
    'stop-color',
    'stop-opacity',
    'stroke',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
    'speak',
    'speak-as',
    'src',
    'tab-size',
    'table-layout',
    'text-anchor',
    'text-align',
    'text-align-all',
    'text-align-last',
    'text-combine-upright',
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-skip-ink',
    'text-decoration-style',
    'text-decoration-thickness',
    'text-emphasis',
    'text-emphasis-color',
    'text-emphasis-position',
    'text-emphasis-style',
    'text-indent',
    'text-justify',
    'text-orientation',
    'text-overflow',
    'text-rendering',
    'text-shadow',
    'text-transform',
    'text-underline-offset',
    'text-underline-position',
    'top',
    'transform',
    'transform-box',
    'transform-origin',
    'transform-style',
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function',
    'translate',
    'unicode-bidi',
    'vector-effect',
    'vertical-align',
    'visibility',
    'voice-balance',
    'voice-duration',
    'voice-family',
    'voice-pitch',
    'voice-range',
    'voice-rate',
    'voice-stress',
    'voice-volume',
    'white-space',
    'widows',
    'width',
    'will-change',
    'word-break',
    'word-spacing',
    'word-wrap',
    'writing-mode',
    'x',
    'y',
    'z-index',
  ]
    .sort()
    .reverse()
function oa(t) {
  const e = t.regex,
    i = Yr(t),
    n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
    a = 'and or not only',
    o = /@-?\w[\w]*(-\w+)*/,
    u = '[a-zA-Z-][a-zA-Z0-9_-]*',
    s = [t.APOS_STRING_MODE, t.QUOTE_STRING_MODE]
  return {
    name: 'CSS',
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: 'from to' },
    classNameAliases: { keyframePosition: 'selector-tag' },
    contains: [
      i.BLOCK_COMMENT,
      n,
      i.CSS_NUMBER_MODE,
      { className: 'selector-id', begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
      { className: 'selector-class', begin: '\\.' + u, relevance: 0 },
      i.ATTRIBUTE_SELECTOR_MODE,
      {
        className: 'selector-pseudo',
        variants: [
          { begin: ':(' + sa.join('|') + ')' },
          { begin: ':(:)?(' + ra.join('|') + ')' },
        ],
      },
      i.CSS_VARIABLE,
      { className: 'attribute', begin: '\\b(' + aa.join('|') + ')\\b' },
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          i.BLOCK_COMMENT,
          i.HEXCOLOR,
          i.IMPORTANT,
          i.CSS_NUMBER_MODE,
          ...s,
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            keywords: { built_in: 'url data-uri' },
            contains: [
              ...s,
              {
                className: 'string',
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0,
              },
            ],
          },
          i.FUNCTION_DISPATCH,
        ],
      },
      {
        begin: e.lookahead(/@/),
        end: '[{;]',
        relevance: 0,
        illegal: /:/,
        contains: [
          { className: 'keyword', begin: o },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: a,
              attribute: ia.join(' '),
            },
            contains: [
              { begin: /[a-z-]+(?=:)/, className: 'attribute' },
              ...s,
              i.CSS_NUMBER_MODE,
            ],
          },
        ],
      },
      { className: 'selector-tag', begin: '\\b(' + na.join('|') + ')\\b' },
    ],
  }
}
function _a(t) {
  const e = t.regex,
    i = e.concat(
      /[\p{L}_]/u,
      e.optional(/[\p{L}0-9_.-]*:/u),
      /[\p{L}0-9_.-]*/u,
    ),
    n = /[\p{L}0-9._:-]+/u,
    a = { className: 'symbol', begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
    o = {
      begin: /\s/,
      contains: [
        { className: 'keyword', begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ },
      ],
    },
    u = t.inherit(o, { begin: /\(/, end: /\)/ }),
    s = t.inherit(t.APOS_STRING_MODE, { className: 'string' }),
    l = t.inherit(t.QUOTE_STRING_MODE, { className: 'string' }),
    c = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        { className: 'attr', begin: n, relevance: 0 },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: 'string',
              endsParent: !0,
              variants: [
                { begin: /"/, end: /"/, contains: [a] },
                { begin: /'/, end: /'/, contains: [a] },
                { begin: /[^\s"'=<>`]+/ },
              ],
            },
          ],
        },
      ],
    }
  return {
    name: 'HTML, XML',
    aliases: [
      'html',
      'xhtml',
      'rss',
      'atom',
      'xjb',
      'xsd',
      'xsl',
      'plist',
      'wsf',
      'svg',
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: 'meta',
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          o,
          l,
          s,
          u,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: 'meta',
                begin: /<![a-z]/,
                end: />/,
                contains: [o, u, l, s],
              },
            ],
          },
        ],
      },
      t.COMMENT(/<!--/, /-->/, { relevance: 10 }),
      { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
      a,
      {
        className: 'meta',
        end: /\?>/,
        variants: [
          { begin: /<\?xml/, relevance: 10, contains: [l] },
          { begin: /<\?[a-z][a-z0-9]+/ },
        ],
      },
      {
        className: 'tag',
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: 'style' },
        contains: [c],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: ['css', 'xml'],
        },
      },
      {
        className: 'tag',
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: 'script' },
        contains: [c],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: ['javascript', 'handlebars', 'xml'],
        },
      },
      { className: 'tag', begin: /<>|<\/>/ },
      {
        className: 'tag',
        begin: e.concat(
          /</,
          e.lookahead(e.concat(i, e.either(/\/>/, />/, /\s/))),
        ),
        end: /\/?>/,
        contains: [{ className: 'name', begin: i, relevance: 0, starts: c }],
      },
      {
        className: 'tag',
        begin: e.concat(/<\//, e.lookahead(e.concat(i, />/))),
        contains: [
          { className: 'name', begin: i, relevance: 0 },
          { begin: />/, relevance: 0, endsParent: !0 },
        ],
      },
    ],
  }
}
$t.registerLanguage('typescript', Vr)
$t.registerLanguage('javascript', Jr)
$t.registerLanguage('xml', _a)
$t.registerLanguage('css', oa)
const $n = (t) => $t.highlightAuto(t).value,
  Qt = 'vitepress-demo-plugin',
  qt = (t, e, i, n) => {
    let a = e === '' ? `${t}` : `${t}-${e}`
    return i && (a += `__${i}`), n && (a += `--${n}`), a
  },
  We = (t = '') => ({
    b: () => qt(Qt, t),
    e: (e = '') => qt(Qt, t, e),
    m: (e = '') => qt(Qt, t, '', e),
    bem: (e, i, n) => qt(Qt, e, i, n),
  }),
  la = ({ code: t, styles: e, links: i }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    ${e}
    ${i}
    <style>
      body {
        min-height: 0;
      }
    </style>
  </head>
  <body>
    ${t}
  </body>
</html>
  `,
  ua = (t, e) => {
    const i = { dependencies: {}, devDependencies: { typescript: 'latest' } }
    return (
      t === F.VUE
        ? ((i.dependencies.vue = 'latest'),
          e === dt.STACKBLITZ
            ? ((i.devDependencies.vite = 'latest'),
              (i.devDependencies['@vitejs/plugin-vue'] = 'latest'),
              (i.devDependencies['@vitejs/plugin-vue-jsx'] = 'latest'))
            : e === dt.CODESANDBOX &&
              (i.devDependencies['@vue/cli-plugin-babel'] = 'latest'))
        : t === F.REACT &&
          ((i.dependencies.react = 'latest'),
          (i.dependencies['react-dom'] = 'latest'),
          (i.dependencies['@emotion/react'] = 'latest'),
          (i.dependencies['@emotion/styled'] = 'latest'),
          (i.devDependencies['@types/react'] = 'latest'),
          (i.devDependencies['@types/react-dom'] = 'latest'),
          e === dt.STACKBLITZ &&
            ((i.devDependencies.vite = 'latest'),
            (i.devDependencies['@vitejs/plugin-react'] = 'latest'))),
      i
    )
  }
function ue(t) {
  const { type: e, platform: i, code: n, title: a, description: o } = t,
    u =
      i === dt.STACKBLITZ
        ? {
            scripts: {
              dev: 'vite',
              build: 'vite build',
              serve: 'vite preview',
            },
          }
        : {},
    { dependencies: s, devDependencies: l } = ua(e, i),
    c = {
      name: a,
      description: o,
      version: '0.0.0',
      private: !0,
      ...u,
      dependencies: { ...Js(n), ...s },
      devDependencies: { ...l },
    }
  return JSON.stringify(c, null, 2)
}
function ca(t) {
  const { code: e } = t
  return re({
    files: {
      'package.json': {
        content: ue({ type: F.VUE, platform: dt.CODESANDBOX, code: e }),
      },
      'tsconfig.json': { content: oe(F.VUE) },
      'index.html': { content: Ct() },
      'src/main.ts': { content: _e(F.VUE) },
      'src/Demo.vue': { content: e },
      ...t.customFiles,
    },
  })
}
function pa(t) {
  const { code: e } = t
  return re({
    files: {
      'package.json': {
        content: ue({ type: F.REACT, platform: dt.CODESANDBOX, code: e }),
      },
      'tsconfig.json': { content: oe(F.REACT) },
      'index.html': { content: Ct() },
      'src/main.tsx': { content: _e(F.REACT) },
      'src/Demo.tsx': { content: e },
      ...t.customFiles,
    },
  })
}
function ha(t) {
  const { code: e } = t
  return re({
    files: { 'index.html': { content: Ct({ code: e }) }, ...t.customFiles },
    template: 'static',
  })
}
function da(t) {
  var e, i, n
  const a =
      (e = (t.templates || []).find((s) => s.scope === 'global')) == null
        ? void 0
        : e.files,
    o =
      (i = (t.templates || []).find((s) => s.scope === t.type)) == null
        ? void 0
        : i.files,
    u =
      (n = (t.templates || []).find((s) => s.scope === t.scope)) == null
        ? void 0
        : n.files
  t.customFiles = { ...a, ...o, ...u }
  for (let s in t.customFiles)
    t.customFiles[s] = { content: t.customFiles[s] || '' }
  if (t.type === F.VUE) return ca(t)
  if (t.type === F.REACT) return pa(t)
  if (t.type === F.HTML) return ha(t)
}
const fa = {
    action: 'https://codesandbox.io/api/v1/sandboxes/define',
    method: 'post',
    target: '_blank',
    style: { display: 'flex' },
  },
  ga = ['value'],
  ma = ['value'],
  ba = Ut({
    __name: 'codesandbox',
    props: {
      code: {},
      type: {},
      title: {},
      description: {},
      scope: {},
      templates: {},
    },
    setup(t) {
      const e = t,
        i = ot(() =>
          da({
            code: e.code,
            type: e.type,
            title: e.title || Gn,
            description: e.description || Vn,
            scope: e.scope,
            templates: e.templates,
          }),
        ),
        n = ot(() => cs(e.type))
      return (a, o) => (
        W(),
        X('form', fa, [
          z(
            'input',
            { style: { display: 'none' }, name: 'parameters', value: i.value },
            null,
            8,
            ga,
          ),
          o[0] ||
            (o[0] = z(
              'input',
              { style: { display: 'none' }, name: 'embed', value: 1 },
              null,
              -1,
            )),
          z(
            'input',
            {
              style: { display: 'none' },
              name: 'query',
              value: `module=${n.value}`,
            },
            null,
            8,
            ma,
          ),
          o[1] ||
            (o[1] = Hi(
              '<button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg></button>',
              1,
            )),
        ])
      )
    },
  }),
  ya = 500,
  va = 20,
  ka = 300,
  wa = 'https://stackblitz.com',
  zn = [
    'angular-cli',
    'create-react-app',
    'html',
    'javascript',
    'node',
    'polymer',
    'typescript',
    'vue',
  ],
  xa = ['project', 'search', 'ports', 'settings'],
  Ea = ['light', 'dark'],
  Oa = ['editor', 'preview'],
  Fn = {
    clickToLoad: (t) => vt('ctl', t),
    devToolsHeight: (t) => Wn('devtoolsheight', t),
    forceEmbedLayout: (t) => vt('embed', t),
    hideDevTools: (t) => vt('hidedevtools', t),
    hideExplorer: (t) => vt('hideExplorer', t),
    hideNavigation: (t) => vt('hideNavigation', t),
    openFile: (t) => Jt('file', t),
    showSidebar: (t) => Aa('showSidebar', t),
    sidebarView: (t) => Ne('sidebarView', t, xa),
    startScript: (t) => Jt('startScript', t),
    terminalHeight: (t) => Wn('terminalHeight', t),
    theme: (t) => Ne('theme', t, Ea),
    view: (t) => Ne('view', t, Oa),
    zenMode: (t) => vt('zenMode', t),
    organization: (t) =>
      `${Jt('orgName', t == null ? void 0 : t.name)}&${Jt('orgProvider', t == null ? void 0 : t.provider)}`,
    crossOriginIsolated: (t) => vt('corp', t),
  }
function Si(t = {}) {
  const e = Object.entries(t)
    .map(([i, n]) => (n != null && Fn.hasOwnProperty(i) ? Fn[i](n) : ''))
    .filter(Boolean)
  return e.length ? `?${e.join('&')}` : ''
}
function vt(t, e) {
  return e === !0 ? `${t}=1` : ''
}
function Aa(t, e) {
  return typeof e == 'boolean' ? `${t}=${e ? '1' : '0'}` : ''
}
function Wn(t, e) {
  if (typeof e == 'number' && !Number.isNaN(e)) {
    const i = Math.min(100, Math.max(0, e))
    return `${t}=${encodeURIComponent(Math.round(i))}`
  }
  return ''
}
function Ne(t, e = '', i = []) {
  return i.includes(e) ? `${t}=${encodeURIComponent(e)}` : ''
}
function Jt(t, e) {
  return (Array.isArray(e) ? e : [e])
    .filter((i) => typeof i == 'string' && i.trim() !== '')
    .map((i) => `${t}=${encodeURIComponent(i)}`)
    .join('&')
}
function Ri() {
  return (
    Math.random().toString(36).slice(2, 6) +
    Math.random().toString(36).slice(2, 6)
  )
}
function Ke(t, e) {
  return `${Ni(e)}${t}${Si(e)}`
}
function He(t, e) {
  const i = { forceEmbedLayout: !0 }
  return (
    e && typeof e == 'object' && Object.assign(i, e), `${Ni(i)}${t}${Si(i)}`
  )
}
function Ni(t = {}) {
  return (typeof t.origin == 'string' ? t.origin : wa).replace(/\/$/, '')
}
function Ge(t, e, i) {
  if (!e || !t || !t.parentNode) throw new Error('Invalid Element')
  t.id && (e.id = t.id),
    t.className && (e.className = t.className),
    Ta(e, i),
    Sa(t, e, i),
    t.replaceWith(e)
}
function Ve(t) {
  if (typeof t == 'string') {
    const e = document.getElementById(t)
    if (!e) throw new Error(`Could not find element with id '${t}'`)
    return e
  } else if (t instanceof HTMLElement) return t
  throw new Error(`Invalid element: ${t}`)
}
function Xe(t) {
  return t && t.newWindow === !1 ? '_self' : '_blank'
}
function Ta(t, e = {}) {
  const i = Object.hasOwnProperty.call(e, 'height') ? `${e.height}` : `${ka}`,
    n = Object.hasOwnProperty.call(e, 'width') ? `${e.width}` : void 0
  t.setAttribute('height', i),
    n ? t.setAttribute('width', n) : t.setAttribute('style', 'width:100%;')
}
function Sa(t, e, i = {}) {
  var n, a, o
  const u =
    (o =
      (a = (n = t.allow) == null ? void 0 : n.split(';')) == null
        ? void 0
        : a.map((s) => s.trim())) != null
      ? o
      : []
  i.crossOriginIsolated &&
    !u.includes('cross-origin-isolated') &&
    u.push('cross-origin-isolated'),
    u.length > 0 && (e.allow = u.join('; '))
}
class Ra {
  constructor(e) {
    ;(this.pending = {}),
      (this.port = e),
      (this.port.onmessage = this.messageListener.bind(this))
  }
  request({ type: e, payload: i }) {
    return new Promise((n, a) => {
      const o = Ri()
      ;(this.pending[o] = { resolve: n, reject: a }),
        this.port.postMessage({ type: e, payload: { ...i, __reqid: o } })
    })
  }
  messageListener(e) {
    var i
    if (typeof ((i = e.data.payload) == null ? void 0 : i.__reqid) != 'string')
      return
    const { type: n, payload: a } = e.data,
      { __reqid: o, __success: u, __error: s } = a
    this.pending[o] &&
      (u
        ? this.pending[o].resolve(this.cleanResult(a))
        : this.pending[o].reject(s ? `${n}: ${s}` : n),
      delete this.pending[o])
  }
  cleanResult(e) {
    const i = { ...e }
    return (
      delete i.__reqid,
      delete i.__success,
      delete i.__error,
      Object.keys(i).length ? i : null
    )
  }
}
class Na {
  constructor(e, i) {
    ;(this.editor = {
      openFile: (n) =>
        this._rdc.request({ type: 'SDK_OPEN_FILE', payload: { path: n } }),
      setCurrentFile: (n) =>
        this._rdc.request({
          type: 'SDK_SET_CURRENT_FILE',
          payload: { path: n },
        }),
      setTheme: (n) =>
        this._rdc.request({ type: 'SDK_SET_UI_THEME', payload: { theme: n } }),
      setView: (n) =>
        this._rdc.request({ type: 'SDK_SET_UI_VIEW', payload: { view: n } }),
      showSidebar: (n = !0) =>
        this._rdc.request({
          type: 'SDK_TOGGLE_SIDEBAR',
          payload: { visible: n },
        }),
    }),
      (this.preview = {
        origin: '',
        getUrl: () =>
          this._rdc
            .request({ type: 'SDK_GET_PREVIEW_URL', payload: {} })
            .then((n) => {
              var a
              return (a = n == null ? void 0 : n.url) != null ? a : null
            }),
        setUrl: (n = '/') => {
          if (typeof n != 'string' || !n.startsWith('/'))
            throw new Error(
              `Invalid argument: expected a path starting with '/', got '${n}'`,
            )
          return this._rdc.request({
            type: 'SDK_SET_PREVIEW_URL',
            payload: { path: n },
          })
        },
      }),
      (this._rdc = new Ra(e)),
      Object.defineProperty(this.preview, 'origin', {
        value: typeof i.previewOrigin == 'string' ? i.previewOrigin : null,
        writable: !1,
      })
  }
  applyFsDiff(e) {
    const i = (n) => n !== null && typeof n == 'object'
    if (!i(e) || !i(e.create))
      throw new Error(
        'Invalid diff object: expected diff.create to be an object.',
      )
    if (!Array.isArray(e.destroy))
      throw new Error(
        'Invalid diff object: expected diff.destroy to be an array.',
      )
    return this._rdc.request({ type: 'SDK_APPLY_FS_DIFF', payload: e })
  }
  getDependencies() {
    return this._rdc.request({ type: 'SDK_GET_DEPS_SNAPSHOT', payload: {} })
  }
  getFsSnapshot() {
    return this._rdc.request({ type: 'SDK_GET_FS_SNAPSHOT', payload: {} })
  }
}
const Yt = []
class Ca {
  constructor(e) {
    ;(this.id = Ri()),
      (this.element = e),
      (this.pending = new Promise((i, n) => {
        const a = ({ data: c, ports: d }) => {
            ;(c == null ? void 0 : c.action) === 'SDK_INIT_SUCCESS' &&
              c.id === this.id &&
              ((this.vm = new Na(d[0], c.payload)), i(this.vm), u())
          },
          o = () => {
            var c
            ;(c = this.element.contentWindow) == null ||
              c.postMessage({ action: 'SDK_INIT', id: this.id }, '*')
          }
        function u() {
          window.clearInterval(l), window.removeEventListener('message', a)
        }
        window.addEventListener('message', a), o()
        let s = 0
        const l = window.setInterval(() => {
          if (this.vm) {
            u()
            return
          }
          if (s >= va) {
            u(),
              n(
                'Timeout: Unable to establish a connection with the StackBlitz VM',
              ),
              Yt.forEach((c, d) => {
                c.id === this.id && Yt.splice(d, 1)
              })
            return
          }
          s++, o()
        }, ya)
      })),
      Yt.push(this)
  }
}
const La = (t) => {
  var e
  const i = t instanceof Element ? 'element' : 'id'
  return (e = Yt.find((n) => n[i] === t)) != null ? e : null
}
function ja(t, e) {
  const i = document.createElement('input')
  return (i.type = 'hidden'), (i.name = t), (i.value = e), i
}
function Ma(t) {
  return t.replace(/\[/g, '%5B').replace(/\]/g, '%5D')
}
function Ci({
  template: t,
  title: e,
  description: i,
  dependencies: n,
  files: a,
  settings: o,
}) {
  if (!zn.includes(t)) {
    const c = zn.map((d) => `'${d}'`).join(', ')
    console.warn(`Unsupported project.template: must be one of ${c}`)
  }
  const u = [],
    s = (c, d, g = '') => {
      u.push(ja(c, typeof d == 'string' ? d : g))
    }
  s('project[title]', e),
    typeof i == 'string' && i.length > 0 && s('project[description]', i),
    s('project[template]', t, 'javascript'),
    n &&
      (t === 'node'
        ? console.warn(
            "Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template.",
          )
        : s('project[dependencies]', JSON.stringify(n))),
    o && s('project[settings]', JSON.stringify(o)),
    Object.entries(a).forEach(([c, d]) => {
      s(`project[files][${Ma(c)}]`, d)
    })
  const l = document.createElement('form')
  return (
    (l.method = 'POST'),
    l.setAttribute('style', 'display:none!important;'),
    l.append(...u),
    l
  )
}
function Ia(t, e) {
  const i = Ci(t)
  return (
    (i.action = He('/run', e)),
    (i.id = 'sb_run'),
    `<!doctype html>
<html>
<head><title></title></head>
<body>
  ${i.outerHTML}
  <script>document.getElementById('${i.id}').submit();<\/script>
</body>
</html>`
  )
}
function Da(t, e) {
  const i = Ci(t)
  ;(i.action = Ke('/run', e)),
    (i.target = Xe(e)),
    document.body.appendChild(i),
    i.submit(),
    document.body.removeChild(i)
}
function ce(t) {
  var e
  return t != null && t.contentWindow
    ? ((e = La(t)) != null ? e : new Ca(t)).pending
    : Promise.reject('Provided element is not an iframe.')
}
function Ba(t, e) {
  Da(t, e)
}
function Pa(t, e) {
  const i = Ke(`/edit/${t}`, e),
    n = Xe(e)
  window.open(i, n)
}
function Ua(t, e) {
  const i = Ke(`/github/${t}`, e),
    n = Xe(e)
  window.open(i, n)
}
function $a(t, e, i) {
  var n
  const a = Ve(t),
    o = Ia(e, i),
    u = document.createElement('iframe')
  return Ge(a, u, i), (n = u.contentDocument) == null || n.write(o), ce(u)
}
function za(t, e, i) {
  const n = Ve(t),
    a = document.createElement('iframe')
  return (a.src = He(`/edit/${e}`, i)), Ge(n, a, i), ce(a)
}
function Fa(t, e, i) {
  const n = Ve(t),
    a = document.createElement('iframe')
  return (a.src = He(`/github/${e}`, i)), Ge(n, a, i), ce(a)
}
const Ze = {
    connect: ce,
    embedGithubProject: Fa,
    embedProject: $a,
    embedProjectId: za,
    openGithubProject: Ua,
    openProject: Ba,
    openProjectId: Pa,
  },
  Wa = (t) => {
    const { code: e, title: i, description: n } = t
    Ze.openProject(
      {
        title: i,
        description: n,
        template: 'html',
        files: { 'index.html': Ct({ code: e }), ...t.customFiles },
      },
      { openFile: 'index.html' },
    )
  },
  Ka = (t) => {
    const { code: e, title: i, description: n } = t
    Ze.openProject(
      {
        title: i,
        description: n,
        template: 'node',
        files: {
          'src/Demo.tsx': e,
          'src/main.tsx': _e(F.REACT),
          'index.html': Ct({ src: '/src/main.tsx' }),
          'package.json': ue({
            type: F.REACT,
            platform: dt.STACKBLITZ,
            code: e,
          }),
          'vite.config.js': ri(F.REACT),
          '.stackblitzrc': si(),
          'tsconfig.json': oe(F.REACT),
          ...t.customFiles,
        },
      },
      { openFile: 'src/Demo.tsx' },
    )
  },
  Ha = (t) => {
    const { code: e, title: i, description: n } = t
    Ze.openProject(
      {
        title: i,
        description: n,
        template: 'node',
        files: {
          'src/Demo.vue': e,
          'src/main.ts': _e(F.VUE),
          'index.html': Ct({ src: '/src/main.ts' }),
          'package.json': ue({ type: F.VUE, platform: dt.STACKBLITZ, code: e }),
          'vite.config.js': ri(F.VUE),
          '.stackblitzrc': si(),
          'tsconfig.json': oe(F.VUE),
          ...t.customFiles,
        },
      },
      { openFile: 'src/Demo.vue' },
    )
  }
function Ga(t) {
  var e, i, n
  const a =
      (e = (t.templates || []).find((s) => s.scope === 'global')) == null
        ? void 0
        : e.files,
    o =
      (i = (t.templates || []).find((s) => s.scope === t.type)) == null
        ? void 0
        : i.files,
    u =
      (n = (t.templates || []).find((s) => s.scope === t.scope)) == null
        ? void 0
        : n.files
  if (((t.customFiles = { ...a, ...o, ...u }), t.type === F.VUE)) return Ha(t)
  if (t.type === F.REACT) return Ka(t)
  if (t.type === F.HTML) return Wa(t)
}
const Va = Ut({
    __name: 'stackblitz',
    props: {
      code: {},
      type: {},
      title: {},
      description: {},
      templates: {},
      scope: {},
    },
    setup(t) {
      const e = t
      function i() {
        Ga({
          code: e.code,
          type: e.type,
          title: e.title || Gn,
          description: e.description || Vn,
          templates: e.templates || [],
          scope: e.scope,
        })
      }
      return (n, a) => (
        W(),
        X(
          'svg',
          {
            onClick: i,
            viewBox: '64 64 896 896',
            focusable: 'false',
            'data-icon': 'thunderbolt',
            width: '20px',
            height: '20px',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          a[0] ||
            (a[0] = [
              z(
                'path',
                {
                  d: 'M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z',
                },
                null,
                -1,
              ),
            ]),
        )
      )
    },
  }),
  Xa = {},
  Za = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '20',
    height: '20',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-github',
  }
function Qa(t, e) {
  return (
    W(),
    X(
      'svg',
      Za,
      e[0] ||
        (e[0] = [
          z(
            'path',
            {
              d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
            },
            null,
            -1,
          ),
          z('path', { d: 'M9 18c-4.51 2-5-2-7-2' }, null, -1),
        ]),
    )
  )
}
const qa = bt(Xa, [['render', Qa]]),
  Ja = {},
  Ya = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '20',
    height: '20',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-gitlab',
  }
function to(t, e) {
  return (
    W(),
    X(
      'svg',
      Ya,
      e[0] ||
        (e[0] = [
          z(
            'path',
            {
              d: 'm22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const eo = bt(Ja, [['render', to]]),
  no = {},
  io = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    fill: 'none',
    version: '1.1',
    width: '18',
    height: '18',
    viewBox: '0 0 24 24',
  }
function so(t, e) {
  return (
    W(),
    X(
      'svg',
      io,
      e[0] ||
        (e[0] = [
          z(
            'defs',
            null,
            [
              z('clipPath', { id: 'master_svg0_27_0291' }, [
                z('rect', {
                  x: '0',
                  y: '0',
                  width: '24',
                  height: '24',
                  rx: '0',
                }),
              ]),
            ],
            -1,
          ),
          z(
            'g',
            { 'clip-path': 'url(#master_svg0_27_0291)' },
            [
              z('g', null, [
                z('path', {
                  d: 'M4.707482,11.29327L4.707107,11.29289Q4.566455,11.152239999999999,4.382683,11.07612Q4.198912,11,4,11Q3.801088,11,3.617317,11.07612Q3.433545,11.152239999999999,3.292893,11.29289Q3.152241,11.43355,3.07612,11.61732Q3,11.80109,3,12Q3,12.02403,3.001154,12.04804Q3.010111,12.23427,3.085581,12.40477Q3.161051,12.57527,3.292893,12.70711L3.293268,12.70748L8.29289,17.7071Q8.36254,17.776699999999998,8.44443,17.8315Q8.52632,17.886200000000002,8.61732,17.9239Q8.70831,17.9616,8.80491,17.980800000000002Q8.90151,18,9,18Q9.09849,18,9.19509,17.980800000000002Q9.29169,17.9616,9.38268,17.9239Q9.47368,17.886200000000002,9.55557,17.8315Q9.63746,17.776699999999998,9.70711,17.7071L20.7071,6.707107Q20.8478,6.566454,20.9239,6.382683Q21,6.198912,21,6Q21,5.801088,20.9239,5.617317Q20.8478,5.433546,20.7071,5.292894Q20.5665,5.152241,20.3827,5.076121Q20.1989,5,20,5Q19.9741,5,19.9483,5.001339Q19.762999999999998,5.010937,19.5935,5.086334Q19.4241,5.16173,19.2929,5.292893L19.2925,5.293268L9,15.58579L4.707482,11.29327Z',
                  'fill-rule': 'evenodd',
                  fill: 'currentColor',
                  'fill-opacity': '0.8500000238418579',
                }),
              ]),
            ],
            -1,
          ),
        ]),
    )
  )
}
const ro = bt(no, [['render', so]]),
  ao = { style: { color: 'var(--vp-c-text-1)' } },
  oo = 3e3,
  _o = Ut({
    __name: 'message',
    props: { content: { default: '复制成功！' }, close: {} },
    setup(t, { expose: e }) {
      const i = We(),
        n = t,
        a = ut(!1),
        o = (c) => {
          a.value = c
        },
        u = ut(-9999),
        s = (c) => {
          u.value = c
        }
      pt(a, (c) => {
        c === !0 &&
          setTimeout(() => {
            a.value = !1
          }, oo)
      })
      const l = () => {
        n.close()
      }
      return (
        e({ setVisible: o, setTopHeight: s }),
        (c, d) => (
          W(),
          wt(
            Xi,
            { name: 'slide-fade', onAfterLeave: l },
            {
              default: gt(() => [
                a.value
                  ? (W(),
                    X(
                      'div',
                      {
                        key: 0,
                        class: tt([Z(i).bem('message-notice', 'container')]),
                        style: Vi({ top: u.value + 'px' }),
                      },
                      [at(ro), z('span', ao, It(c.content), 1)],
                      6,
                    ))
                  : nt('', !0),
              ]),
              _: 1,
            },
          )
        )
      )
    },
  }),
  Ce = [],
  lo = {
    open: () => {
      const t = document.createElement('div'),
        e = Gi(_o, {
          content: '已将代码复制至剪切板！',
          close: () => {
            document.body.removeChild(t), Ce.pop(), e.unmount()
          },
        }),
        i = e.mount(t)
      document.body.appendChild(t)
      const n = Ce.length,
        a = n === 0 ? 10 : (n + 1) * 10 + n * 42
      i.setTopHeight(a), i.setVisible(!0), Ce.push(i)
    },
  },
  uo = Ut({
    __name: 'index',
    props: { content: {} },
    setup(t) {
      const e = We(),
        i = t
      return (n, a) => (
        W(),
        X(
          'div',
          { class: tt([Z(e).bem('tooltip', 'wrapper')]) },
          [
            z(
              'div',
              { class: tt([Z(e).bem('tooltip', 'content')]) },
              [Le(n.$slots, 'content', {}, () => [Hn(It(i.content), 1)], !0)],
              2,
            ),
            Le(n.$slots, 'default', {}, void 0, !0),
          ],
          2,
        )
      )
    },
  }),
  kt = bt(uo, [['__scopeId', 'data-v-6bd5801c']]),
  co = { style: { 'flex-shrink': '0' } },
  po = ['innerHTML'],
  ho = ['onClick'],
  fo = ['onClick'],
  go = { class: 'language-html' },
  mo = ['innerHTML'],
  Oo = Ut({
    __name: 'index',
    props: {
      title: { default: '默认标题' },
      description: { default: '描述内容' },
      reactComponent: {},
      vueCode: {},
      reactCode: {},
      htmlCode: {},
      order: { default: 'vue,react,html' },
      visible: { type: Boolean, default: !0 },
      select: { default: F.VUE },
      github: { default: '' },
      gitlab: { default: '' },
      reactCreateElement: {},
      reactCreateRoot: {},
      stackblitz: {},
      codesandbox: {},
      codeplayer: {},
      scope: {},
      files: {},
      lightTheme: {},
      darkTheme: {},
      theme: {},
    },
    setup(t) {
      const e = t,
        i = ot(() => JSON.parse(decodeURIComponent(e.stackblitz || '{}'))),
        n = ot(() => JSON.parse(decodeURIComponent(e.codesandbox || '{}')))
      ot(() => JSON.parse(decodeURIComponent(e.codeplayer || '{}')))
      const a = ut(''),
        o = ot(() => {
          var m
          const E = JSON.parse(decodeURIComponent(e.files || '{}'))[c.value]
          return (
            E &&
              !E[a.value] &&
              (a.value = ((m = Object.keys(E)) == null ? void 0 : m[0]) || ''),
            E
          )
        }),
        u = ot(() => e.order.split(',').map((m) => m.trim())),
        s = sn('coot-code-type', {}),
        l = sn('set-coot-code-type', (m) => {}),
        c = ut(F.VUE)
      function d(m) {
        ;(c.value = m),
          typeof l == 'function' && l(m),
          Lt(() => {
            k.value &&
              !y.value &&
              (k.value.style.height = L.value.scrollHeight + 'px')
          })
      }
      const g = We(),
        { isCodeFold: y, setCodeFold: T } = qs(),
        { clickCopy: j } = Qs(),
        M = ot(() => e[`${c.value}Code`]),
        f = ot(() =>
          o.value && o.value[a.value] ? $n(o.value[a.value]) : $n(M.value),
        ),
        _ = ot(() =>
          [F.VUE, F.REACT, F.HTML]
            .filter((m) => e[`${m}Code`])
            .sort((m, E) => u.value.indexOf(m) - u.value.indexOf(E)),
        )
      pt(
        () => (s == null ? void 0 : s.value),
        (m) => {
          m && e[`${m}Code`] && (c.value = m)
        },
        { immediate: !0 },
      )
      const b = () => {
          window.open(e.github, '_blank')
        },
        S = () => {
          window.open(e.gitlab, '_blank')
        }
      pt(
        () => c.value,
        (m) => {
          !m || (m === 'html' ? v() : m === 'react' && r())
        },
        { immediate: !0 },
      )
      const x = () => {
          j(M.value || ''), lo.open()
        },
        A = ut()
      let p
      function v() {
        Lt(() => {
          if (!A.value) return
          const m = A.value.querySelector('iframe'),
            E = m.contentDocument || m.contentWindow.document
          E.open()
          const N = document.head.querySelectorAll('style'),
            D = document.head.querySelectorAll('link[as="style"]'),
            U = document.head.querySelectorAll('link[as="font"]'),
            V = Array.from(N).map(
              (J) => `<style replace="true">${J.innerText}</style>`,
            ).join(`
`),
            it = Array.from(D).map((J) => J.outerHTML).join(`
`),
            At = Array.from(U).map((J) => J.outerHTML).join(`
`)
          E.write(
            la({
              code: e.htmlCode || '',
              styles: V,
              links:
                it +
                `
` +
                At,
            }),
          ),
            E.close()
          const et = (p = function () {
            requestAnimationFrame(() => {
              ;(m.style.height = E.body.scrollHeight + 'px'),
                E.documentElement &&
                  (E.documentElement.className =
                    document.documentElement.className),
                et === p && p()
            })
          })
          p()
        })
      }
      pt(
        () => e.htmlCode,
        (m) => {
          m && v()
        },
        { immediate: !0 },
      )
      const h = ut()
      let O = null
      function r() {
        Lt(() => {
          e.reactComponent &&
            c.value === 'react' &&
            e.reactCode &&
            (O || (O = e.reactCreateRoot(h.value)),
            O.render(e.reactCreateElement(e.reactComponent, {}, null)))
        })
      }
      Wi(() => {
        O && (O.unmount(), (O = null))
      }),
        pt(
          () => [h.value, e.reactComponent],
          (m) => {
            h.value ? r() : O && (O.unmount(), (O = null))
          },
          { immediate: !0, deep: !0 },
        ),
        pt(
          () => e.reactCode,
          (m) => {
            m && O && O.render(e.reactCreateElement(e.reactComponent, {}, null))
          },
          { immediate: !0, deep: !0 },
        ),
        pt(
          () => e.select,
          (m) => {
            m && e[`${m}Code`] && (c.value = m)
          },
          { immediate: !0 },
        ),
        pt(
          () => _.value,
          () => {
            e[`${c.value}Code`] || (c.value = _.value[0])
          },
          { immediate: !0, deep: !0 },
        )
      function w(m) {
        ;(a.value = m),
          k.value && (k.value.style.height = 'auto'),
          Lt(() => {
            k.value.style.height = L.value.scrollHeight + 'px'
          })
      }
      const k = ut(),
        L = ut()
      pt(
        () => y.value,
        (m) => {
          Lt(() => {
            k.value &&
              (m
                ? (k.value.style.height = 0)
                : (k.value.style.height = L.value.scrollHeight + 'px'))
          })
        },
      )
      function I(m) {
        const E = document.querySelector(
          'link[data-vitepress-demo-plugin-theme]',
        )
        E && E.remove()
        const N = e.lightTheme || e.theme || 'vs',
          D = e.darkTheme || e.theme || 'vs2015',
          U = m === 'light' ? N : D,
          V = document.createElement('link')
        ;(V.href = `https://cdn.jsdelivr.net/npm/highlight.js/styles/${U}.css`),
          (V.rel = 'stylesheet'),
          (V.type = 'text/css'),
          (V.dataset.vitepressDemoPluginTheme = m),
          document.head.appendChild(V)
      }
      function $() {
        const m = document.documentElement,
          E = new MutationObserver((D) => {
            for (const U of D)
              U.type === 'attributes' &&
                U.attributeName === 'class' &&
                (m.classList.contains('dark') ? I('dark') : I('light'))
          }),
          N = { attributes: !0 }
        E.observe(m, N)
      }
      function K() {
        document.documentElement.classList.contains('dark')
          ? I('dark')
          : I('light')
      }
      return (
        Ki(() => {
          K(), $()
        }),
        (m, E) => (
          W(),
          X(
            'div',
            { class: tt([Z(g).e('container')]) },
            [
              z(
                'section',
                { class: tt([Z(g).bem('preview'), 'vp-raw']) },
                [
                  c.value === 'vue'
                    ? Le(m.$slots, 'vue', { key: 0 })
                    : c.value === 'html'
                      ? (W(),
                        X(
                          'div',
                          { key: 1, ref_key: 'htmlContainerRef', ref: A },
                          E[3] ||
                            (E[3] = [
                              z(
                                'iframe',
                                {
                                  style: {
                                    width: '100%',
                                    height: 'auto',
                                    border: 'none',
                                  },
                                },
                                null,
                                -1,
                              ),
                            ]),
                          512,
                        ))
                      : c.value === 'react'
                        ? (W(),
                          X(
                            'div',
                            { key: 2, ref_key: 'reactContainerRef', ref: h },
                            null,
                            512,
                          ))
                        : nt('', !0),
                ],
                2,
              ),
              z(
                'section',
                { class: tt([Z(g).bem('description')]) },
                [
                  m.title
                    ? (W(),
                      X(
                        'div',
                        {
                          key: 0,
                          class: tt([Z(g).bem('description', 'title')]),
                        },
                        [z('div', co, It(m.title), 1)],
                        2,
                      ))
                    : nt('', !0),
                  m.description
                    ? (W(),
                      X(
                        'div',
                        {
                          key: 1,
                          class: tt([Z(g).bem('description', 'content')]),
                          innerHTML: m.description,
                        },
                        null,
                        10,
                        po,
                      ))
                    : nt('', !0),
                  e.description || (!e.title && !e.description)
                    ? (W(),
                      X(
                        'div',
                        {
                          key: 2,
                          class: tt([Z(g).bem('description', 'split-line')]),
                        },
                        null,
                        2,
                      ))
                    : nt('', !0),
                  _.value.length > 1 && m.visible
                    ? (W(),
                      X(
                        'div',
                        { key: 3, class: tt([Z(g).bem('lang-tabs')]) },
                        [
                          (W(!0),
                          X(
                            en,
                            null,
                            nn(
                              _.value,
                              (N) => (
                                W(),
                                X(
                                  'div',
                                  {
                                    key: N,
                                    class: tt([
                                      Z(g).bem('tab'),
                                      c.value === N && Z(g).bem('active-tab'),
                                    ]),
                                    onClick: (D) => (d == null ? void 0 : d(N)),
                                  },
                                  It(N),
                                  11,
                                  ho,
                                )
                              ),
                            ),
                            128,
                          )),
                        ],
                        2,
                      ))
                    : nt('', !0),
                  z(
                    'div',
                    { class: tt([Z(g).bem('description', 'handle-btn')]) },
                    [
                      i.value.show
                        ? (W(),
                          wt(
                            kt,
                            { key: 0, content: '在 stackblitz 中打开' },
                            {
                              default: gt(() => [
                                at(
                                  Va,
                                  {
                                    code: M.value,
                                    type: c.value,
                                    scope: m.scope || '',
                                    templates: i.value.templates || [],
                                  },
                                  null,
                                  8,
                                  ['code', 'type', 'scope', 'templates'],
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : nt('', !0),
                      n.value.show
                        ? (W(),
                          wt(
                            kt,
                            { key: 1, content: '在 codesandbox 中打开' },
                            {
                              default: gt(() => [
                                at(
                                  ba,
                                  {
                                    code: M.value,
                                    type: c.value,
                                    scope: m.scope || '',
                                    templates: n.value.templates || [],
                                  },
                                  null,
                                  8,
                                  ['code', 'type', 'scope', 'templates'],
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : nt('', !0),
                      m.github
                        ? (W(),
                          wt(
                            kt,
                            { key: 2, content: '在 github 中打开' },
                            {
                              default: gt(() => [at(qa, { onClick: b })]),
                              _: 1,
                            },
                          ))
                        : nt('', !0),
                      m.gitlab
                        ? (W(),
                          wt(
                            kt,
                            { key: 3, content: '在 gitlab 中打开' },
                            {
                              default: gt(() => [at(eo, { onClick: S })]),
                              _: 1,
                            },
                          ))
                        : nt('', !0),
                      Z(y)
                        ? (W(),
                          wt(
                            kt,
                            { key: 5, content: '展开代码' },
                            {
                              default: gt(() => [
                                at(Ji, {
                                  onClick: E[1] || (E[1] = (N) => Z(T)(!1)),
                                }),
                              ]),
                              _: 1,
                            },
                          ))
                        : (W(),
                          wt(
                            kt,
                            { key: 4, content: '收起代码' },
                            {
                              default: gt(() => [
                                at(ns, {
                                  onClick: E[0] || (E[0] = (N) => Z(T)(!0)),
                                }),
                              ]),
                              _: 1,
                            },
                          )),
                      at(
                        kt,
                        { content: '复制代码' },
                        { default: gt(() => [at(as, { onClick: x })]), _: 1 },
                      ),
                    ],
                    2,
                  ),
                ],
                2,
              ),
              z(
                'section',
                {
                  class: tt([Z(g).bem('source')]),
                  ref_key: 'sourceRef',
                  ref: k,
                },
                [
                  z(
                    'div',
                    { ref_key: 'sourceContentRef', ref: L },
                    [
                      Object.keys(o.value).length
                        ? (W(),
                          X(
                            'div',
                            { key: 0, class: tt([Z(g).bem('file-tabs')]) },
                            [
                              (W(!0),
                              X(
                                en,
                                null,
                                nn(
                                  Object.keys(o.value),
                                  (N) => (
                                    W(),
                                    X(
                                      'div',
                                      {
                                        key: N,
                                        class: tt([
                                          Z(g).bem('tab'),
                                          a.value === N &&
                                            Z(g).bem('active-tab'),
                                        ]),
                                        onClick: (D) => w(N),
                                      },
                                      It(N),
                                      11,
                                      fo,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ],
                            2,
                          ))
                        : nt('', !0),
                      z('pre', go, [
                        z('code', { innerHTML: f.value }, null, 8, mo),
                      ]),
                    ],
                    512,
                  ),
                ],
                2,
              ),
              Z(y)
                ? nt('', !0)
                : (W(),
                  X(
                    'div',
                    {
                      key: 0,
                      class: tt(Z(g).bem('fold')),
                      onClick: E[2] || (E[2] = (N) => Z(T)(!0)),
                    },
                    [at(us), E[4] || (E[4] = Hn('收起代码 '))],
                    2,
                  )),
            ],
            2,
          )
        )
      )
    },
  })
function bo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t
}
var Li = { exports: {} },
  Q = (Li.exports = {}),
  _t,
  lt
function je() {
  throw new Error('setTimeout has not been defined')
}
function Me() {
  throw new Error('clearTimeout has not been defined')
}
;(function () {
  try {
    typeof setTimeout == 'function' ? (_t = setTimeout) : (_t = je)
  } catch {
    _t = je
  }
  try {
    typeof clearTimeout == 'function' ? (lt = clearTimeout) : (lt = Me)
  } catch {
    lt = Me
  }
})()
function ji(t) {
  if (_t === setTimeout) return setTimeout(t, 0)
  if ((_t === je || !_t) && setTimeout)
    return (_t = setTimeout), setTimeout(t, 0)
  try {
    return _t(t, 0)
  } catch {
    try {
      return _t.call(null, t, 0)
    } catch {
      return _t.call(this, t, 0)
    }
  }
}
function yo(t) {
  if (lt === clearTimeout) return clearTimeout(t)
  if ((lt === Me || !lt) && clearTimeout)
    return (lt = clearTimeout), clearTimeout(t)
  try {
    return lt(t)
  } catch {
    try {
      return lt.call(null, t)
    } catch {
      return lt.call(this, t)
    }
  }
}
var ht = [],
  Rt = !1,
  xt,
  te = -1
function vo() {
  !Rt ||
    !xt ||
    ((Rt = !1), xt.length ? (ht = xt.concat(ht)) : (te = -1), ht.length && Mi())
}
function Mi() {
  if (!Rt) {
    var t = ji(vo)
    Rt = !0
    for (var e = ht.length; e; ) {
      for (xt = ht, ht = []; ++te < e; ) xt && xt[te].run()
      ;(te = -1), (e = ht.length)
    }
    ;(xt = null), (Rt = !1), yo(t)
  }
}
Q.nextTick = function (t) {
  var e = new Array(arguments.length - 1)
  if (arguments.length > 1)
    for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i]
  ht.push(new Ii(t, e)), ht.length === 1 && !Rt && ji(Mi)
}
function Ii(t, e) {
  ;(this.fun = t), (this.array = e)
}
Ii.prototype.run = function () {
  this.fun.apply(null, this.array)
}
Q.title = 'browser'
Q.browser = !0
Q.env = {}
Q.argv = []
Q.version = ''
Q.versions = {}
function ft() {}
Q.on = ft
Q.addListener = ft
Q.once = ft
Q.off = ft
Q.removeListener = ft
Q.removeAllListeners = ft
Q.emit = ft
Q.prependListener = ft
Q.prependOnceListener = ft
Q.listeners = function (t) {
  return []
}
Q.binding = function (t) {
  throw new Error('process.binding is not supported')
}
Q.cwd = function () {
  return '/'
}
Q.chdir = function (t) {
  throw new Error('process.chdir is not supported')
}
Q.umask = function () {
  return 0
}
var ko = Li.exports
const wo = bo(ko)
function rt(t) {
  if (typeof t != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(t))
}
function Kn(t, e) {
  for (var i = '', n = 0, a = -1, o = 0, u, s = 0; s <= t.length; ++s) {
    if (s < t.length) u = t.charCodeAt(s)
    else {
      if (u === 47) break
      u = 47
    }
    if (u === 47) {
      if (!(a === s - 1 || o === 1))
        if (a !== s - 1 && o === 2) {
          if (
            i.length < 2 ||
            n !== 2 ||
            i.charCodeAt(i.length - 1) !== 46 ||
            i.charCodeAt(i.length - 2) !== 46
          ) {
            if (i.length > 2) {
              var l = i.lastIndexOf('/')
              if (l !== i.length - 1) {
                l === -1
                  ? ((i = ''), (n = 0))
                  : ((i = i.slice(0, l)),
                    (n = i.length - 1 - i.lastIndexOf('/'))),
                  (a = s),
                  (o = 0)
                continue
              }
            } else if (i.length === 2 || i.length === 1) {
              ;(i = ''), (n = 0), (a = s), (o = 0)
              continue
            }
          }
          e && (i.length > 0 ? (i += '/..') : (i = '..'), (n = 2))
        } else
          i.length > 0
            ? (i += '/' + t.slice(a + 1, s))
            : (i = t.slice(a + 1, s)),
            (n = s - a - 1)
      ;(a = s), (o = 0)
    } else u === 46 && o !== -1 ? ++o : (o = -1)
  }
  return i
}
function xo(t, e) {
  var i = e.dir || e.root,
    n = e.base || (e.name || '') + (e.ext || '')
  return i ? (i === e.root ? i + n : i + t + n) : n
}
var Dt = {
  resolve: function () {
    for (var t = '', e = !1, i, n = arguments.length - 1; n >= -1 && !e; n--) {
      var a
      n >= 0 ? (a = arguments[n]) : (i === void 0 && (i = wo.cwd()), (a = i)),
        rt(a),
        a.length !== 0 && ((t = a + '/' + t), (e = a.charCodeAt(0) === 47))
    }
    return (
      (t = Kn(t, !e)),
      e ? (t.length > 0 ? '/' + t : '/') : t.length > 0 ? t : '.'
    )
  },
  normalize: function (t) {
    if ((rt(t), t.length === 0)) return '.'
    var e = t.charCodeAt(0) === 47,
      i = t.charCodeAt(t.length - 1) === 47
    return (
      (t = Kn(t, !e)),
      t.length === 0 && !e && (t = '.'),
      t.length > 0 && i && (t += '/'),
      e ? '/' + t : t
    )
  },
  isAbsolute: function (t) {
    return rt(t), t.length > 0 && t.charCodeAt(0) === 47
  },
  join: function () {
    if (arguments.length === 0) return '.'
    for (var t, e = 0; e < arguments.length; ++e) {
      var i = arguments[e]
      rt(i), i.length > 0 && (t === void 0 ? (t = i) : (t += '/' + i))
    }
    return t === void 0 ? '.' : Dt.normalize(t)
  },
  relative: function (t, e) {
    if (
      (rt(t),
      rt(e),
      t === e || ((t = Dt.resolve(t)), (e = Dt.resolve(e)), t === e))
    )
      return ''
    for (var i = 1; i < t.length && t.charCodeAt(i) === 47; ++i);
    for (
      var n = t.length, a = n - i, o = 1;
      o < e.length && e.charCodeAt(o) === 47;
      ++o
    );
    for (
      var u = e.length, s = u - o, l = a < s ? a : s, c = -1, d = 0;
      d <= l;
      ++d
    ) {
      if (d === l) {
        if (s > l) {
          if (e.charCodeAt(o + d) === 47) return e.slice(o + d + 1)
          if (d === 0) return e.slice(o + d)
        } else
          a > l && (t.charCodeAt(i + d) === 47 ? (c = d) : d === 0 && (c = 0))
        break
      }
      var g = t.charCodeAt(i + d),
        y = e.charCodeAt(o + d)
      if (g !== y) break
      g === 47 && (c = d)
    }
    var T = ''
    for (d = i + c + 1; d <= n; ++d)
      (d === n || t.charCodeAt(d) === 47) &&
        (T.length === 0 ? (T += '..') : (T += '/..'))
    return T.length > 0
      ? T + e.slice(o + c)
      : ((o += c), e.charCodeAt(o) === 47 && ++o, e.slice(o))
  },
  _makeLong: function (t) {
    return t
  },
  dirname: function (t) {
    if ((rt(t), t.length === 0)) return '.'
    for (
      var e = t.charCodeAt(0), i = e === 47, n = -1, a = !0, o = t.length - 1;
      o >= 1;
      --o
    )
      if (((e = t.charCodeAt(o)), e === 47)) {
        if (!a) {
          n = o
          break
        }
      } else a = !1
    return n === -1 ? (i ? '/' : '.') : i && n === 1 ? '//' : t.slice(0, n)
  },
  basename: function (t, e) {
    if (e !== void 0 && typeof e != 'string')
      throw new TypeError('"ext" argument must be a string')
    rt(t)
    var i = 0,
      n = -1,
      a = !0,
      o
    if (e !== void 0 && e.length > 0 && e.length <= t.length) {
      if (e.length === t.length && e === t) return ''
      var u = e.length - 1,
        s = -1
      for (o = t.length - 1; o >= 0; --o) {
        var l = t.charCodeAt(o)
        if (l === 47) {
          if (!a) {
            i = o + 1
            break
          }
        } else
          s === -1 && ((a = !1), (s = o + 1)),
            u >= 0 &&
              (l === e.charCodeAt(u)
                ? --u === -1 && (n = o)
                : ((u = -1), (n = s)))
      }
      return i === n ? (n = s) : n === -1 && (n = t.length), t.slice(i, n)
    } else {
      for (o = t.length - 1; o >= 0; --o)
        if (t.charCodeAt(o) === 47) {
          if (!a) {
            i = o + 1
            break
          }
        } else n === -1 && ((a = !1), (n = o + 1))
      return n === -1 ? '' : t.slice(i, n)
    }
  },
  extname: function (t) {
    rt(t)
    for (
      var e = -1, i = 0, n = -1, a = !0, o = 0, u = t.length - 1;
      u >= 0;
      --u
    ) {
      var s = t.charCodeAt(u)
      if (s === 47) {
        if (!a) {
          i = u + 1
          break
        }
        continue
      }
      n === -1 && ((a = !1), (n = u + 1)),
        s === 46
          ? e === -1
            ? (e = u)
            : o !== 1 && (o = 1)
          : e !== -1 && (o = -1)
    }
    return e === -1 ||
      n === -1 ||
      o === 0 ||
      (o === 1 && e === n - 1 && e === i + 1)
      ? ''
      : t.slice(e, n)
  },
  format: function (t) {
    if (t === null || typeof t != 'object')
      throw new TypeError(
        'The "pathObject" argument must be of type Object. Received type ' +
          typeof t,
      )
    return xo('/', t)
  },
  parse: function (t) {
    rt(t)
    var e = { root: '', dir: '', base: '', ext: '', name: '' }
    if (t.length === 0) return e
    var i = t.charCodeAt(0),
      n = i === 47,
      a
    n ? ((e.root = '/'), (a = 1)) : (a = 0)
    for (
      var o = -1, u = 0, s = -1, l = !0, c = t.length - 1, d = 0;
      c >= a;
      --c
    ) {
      if (((i = t.charCodeAt(c)), i === 47)) {
        if (!l) {
          u = c + 1
          break
        }
        continue
      }
      s === -1 && ((l = !1), (s = c + 1)),
        i === 46
          ? o === -1
            ? (o = c)
            : d !== 1 && (d = 1)
          : o !== -1 && (d = -1)
    }
    return (
      o === -1 || s === -1 || d === 0 || (d === 1 && o === s - 1 && o === u + 1)
        ? s !== -1 &&
          (u === 0 && n
            ? (e.base = e.name = t.slice(1, s))
            : (e.base = e.name = t.slice(u, s)))
        : (u === 0 && n
            ? ((e.name = t.slice(1, o)), (e.base = t.slice(1, s)))
            : ((e.name = t.slice(u, o)), (e.base = t.slice(u, s))),
          (e.ext = t.slice(o, s))),
      u > 0 ? (e.dir = t.slice(0, u - 1)) : n && (e.dir = '/'),
      e
    )
  },
  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null,
}
Dt.posix = Dt
export { Oo as Q }
