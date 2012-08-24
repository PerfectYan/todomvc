/*! jQuery v1.7.2 jquery.com | jquery.org/license */

//     Underscore.js 1.3.3
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

// Backbone.Marionette, v0.9.11
// Copyright (c)2012 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
// http://github.com/derickbailey/backbone.marionette

/**
 * Adapted from the official plugin text.js
 *
 * Uses UnderscoreJS micro-templates : http://documentcloud.github.com/underscore/#template
 * @author Julien Cabanès <julien@zeeagency.com>
 * @version 0.2
 * 
 * @license RequireJS text 0.24.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

(function(e, t) {
    function n(e) {
        return H.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
    }
    function r(e) {
        if (!vn[e]) {
            var t = _.body, n = H("<" + e + ">").appendTo(t), r = n.css("display");
            n.remove();
            if (r === "none" || r === "") {
                mn || (mn = _.createElement("iframe"), mn.frameBorder = mn.width = mn.height = 0), t.appendChild(mn);
                if (!gn || !mn.createElement) gn = (mn.contentWindow || mn.contentDocument).document, gn.write((H.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), gn.close();
                n = gn.createElement(e), gn.body.appendChild(n), r = H.css(n, "display"), t.removeChild(mn);
            }
            vn[e] = r;
        }
        return vn[e];
    }
    function i(e, t) {
        var n = {};
        return H.each(En.concat.apply([], En.slice(0, t)), function() {
            n[this] = e;
        }), n;
    }
    function s() {
        
Sn = t;
    }
    function o() {
        return setTimeout(s, 0), Sn = H.now();
    }
    function u() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function a() {
        try {
            return new e.XMLHttpRequest;
        } catch (t) {}
    }
    function f(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r = e.dataTypes, i = {}, s, o, u = r.length, a, f = r[0], l, c, h, p, d;
        for (s = 1; s < u; s++) {
            if (s === 1) for (o in e.converters) typeof o == "string" && (i[o.toLowerCase()] = e.converters[o]);
            l = f, f = r[s];
            if (f === "*") f = l; else if (l !== "*" && l !== f) {
                c = l + " " + f, h = i[c] || i["* " + f];
                if (!h) {
                    d = t;
                    for (p in i) {
                        a = p.split(" ");
                        if (a[0] === l || a[0] === "*") {
                            d = i
[a[1] + " " + f];
                            if (d) {
                                p = i[p], p === !0 ? h = d : d === !0 && (h = p);
                                break;
                            }
                        }
                    }
                }
                !h && !d && H.error("No conversion from " + c.replace(" ", " to ")), h !== !0 && (n = h ? h(n) : d(p(n)));
            }
        }
        return n;
    }
    function l(e, n, r) {
        var i = e.contents, s = e.dataTypes, o = e.responseFields, u, a, f, l;
        for (a in o) a in r && (n[o[a]] = r[a]);
        while (s[0] === "*") s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
        if (u) for (a in i) if (i[a] && i[a].test(u)) {
            s.unshift(a);
            break;
        }
        if (s[0] in r) f = s[0]; else {
            for (a in r) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    f = a;
                    break;
                
}
                l || (l = a);
            }
            f = f || l;
        }
        if (f) return f !== s[0] && s.unshift(f), r[f];
    }
    function c(e, t, n, r) {
        if (H.isArray(t)) H.each(t, function(t, i) {
            n || Ut.test(e) ? r(e, i) : c(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r);
        }); else if (!n && H.type(t) === "object") for (var i in t) c(e + "[" + i + "]", t[i], n, r); else r(e, t);
    }
    function h(e, n) {
        var r, i, s = H.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && H.extend(!0, e, i);
    }
    function p(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u = e[s], a = 0, f = u ? u.length : 0, l = e === rn, c;
        for (; a < f && (l || !c); a++) c = u[a](n, r, i), typeof c == "string" && (!l || o[c] ? c = t : (n.dataTypes.unshift(c), c = p(e, n, r, i, c, o)));
        return (l || !c) && !o["*"] && (c = 
p(e, n, r, i, "*", o)), c;
    }
    function d(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            if (H.isFunction(n)) {
                var r = t.toLowerCase().split(Zt), i = 0, s = r.length, o, u, a;
                for (; i < s; i++) o = r[i], a = /^\+/.test(o), a && (o = o.substr(1) || "*"), u = e[o] = e[o] || [], u[a ? "unshift" : "push"](n);
            }
        };
    }
    function v(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight, i = t === "width" ? 1 : 0, s = 4;
        if (r > 0) {
            if (n !== "border") for (; i < s; i += 2) n || (r -= parseFloat(H.css(e, "padding" + jt[i])) || 0), n === "margin" ? r += parseFloat(H.css(e, n + jt[i])) || 0 : r -= parseFloat(H.css(e, "border" + jt[i] + "Width")) || 0;
            return r + "px";
        }
        r = Ft(e, t);
        if (r < 0 || r == null) r = e.style[t];
        if (Dt.test(r)) return r;
        r = parseFloat(r) || 0;
        if (n) 
for (; i < s; i += 2) r += parseFloat(H.css(e, "padding" + jt[i])) || 0, n !== "padding" && (r += parseFloat(H.css(e, "border" + jt[i] + "Width")) || 0), n === "margin" && (r += parseFloat(H.css(e, n + jt[i])) || 0);
        return r + "px";
    }
    function m(e) {
        var t = _.createElement("div");
        return Lt.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild;
    }
    function g(e) {
        var t = (e.nodeName || "").toLowerCase();
        t === "input" ? y(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && H.grep(e.getElementsByTagName("input"), y);
    }
    function y(e) {
        if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked;
    }
    function b(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : [];
    }
    function w(e, t) {
        var n;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes
(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? t.outerHTML = e.outerHTML : n !== "input" || e.type !== "checkbox" && e.type !== "radio" ? n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(H.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"));
    }
    function E(e, t) {
        if (t.nodeType === 1 && !!H.hasData(e)) {
            var n, r, i, s = H._data(e), o = H._data(t, s), u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u) for (r = 0, i = u[n].length; r < i; r++) H.event.add(t, n, u[n][r]);
            }
            o.data && (o.data = H.extend({}, o.data));
        }
    }
    function S(e, t) 
{
        return H.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function x(e) {
        var t = dt.split("|"), n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n;
    }
    function T(e, t, n) {
        t = t || 0;
        if (H.isFunction(t)) return H.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n;
        });
        if (t.nodeType) return H.grep(e, function(e, r) {
            return e === t === n;
        });
        if (typeof t == "string") {
            var r = H.grep(e, function(e) {
                return e.nodeType === 1;
            });
            if (lt.test(t)) return H.filter(t, r, !n);
            t = H.filter(t, r);
        }
        return H.grep(e, function(e, r) {
            return H.inArray(e, t) >= 0 === n;
        });
    }
    function N(e) {
        return !e || !e.
parentNode || e.parentNode.nodeType === 11;
    }
    function C() {
        return !0;
    }
    function k() {
        return !1;
    }
    function L(e, t, n) {
        var r = t + "defer", i = t + "queue", s = t + "mark", o = H._data(e, r);
        o && (n === "queue" || !H._data(e, i)) && (n === "mark" || !H._data(e, s)) && setTimeout(function() {
            !H._data(e, i) && !H._data(e, s) && (H.removeData(e, r, !0), o.fire());
        }, 0);
    }
    function A(e) {
        for (var t in e) {
            if (t === "data" && H.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1;
        }
        return !0;
    }
    function O(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(I, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : H.isNumeric(r) ? +r : F.test(r) ? 
H.parseJSON(r) : r;
                } catch (s) {}
                H.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function M(e) {
        var t = B[e] = {}, n, r;
        e = e.split(/\s+/);
        for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
        return t;
    }
    var _ = e.document, D = e.navigator, P = e.location, H = function() {
        function n() {
            if (!r.isReady) {
                try {
                    _.documentElement.doScroll("left");
                } catch (e) {
                    setTimeout(n, 1);
                    return;
                }
                r.ready();
            }
        }
        var r = function(e, t) {
            return new r.fn.init(e, t, o);
        }, i = e.jQuery, s = e.$, o, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, a = /\S/, f = /^\s+/, l = /\s+$/, c = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, h = /^[\],:{}\s]*$/, p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
, v = /(?:^|:|,)(?:\s*\[)+/g, m = /(webkit)[ \/]([\w.]+)/, g = /(opera)(?:.*version)?[ \/]([\w.]+)/, y = /(msie) ([\w.]+)/, b = /(mozilla)(?:.*? rv:([\w.]+))?/, w = /-([a-z]|[0-9])/ig, E = /^-ms-/, S = function(e, t) {
            return (t + "").toUpperCase();
        }, x = D.userAgent, T, N, C, k = Object.prototype.toString, L = Object.prototype.hasOwnProperty, A = Array.prototype.push, O = Array.prototype.slice, M = String.prototype.trim, P = Array.prototype.indexOf, H = {};
        return r.fn = r.prototype = {
            constructor: r,
            init: function(e, n, i) {
                var s, o, a, f;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                if (e === "body" && !n && _.body) return this.context = _, this[0] = _.body, this.selector = e, this.length = 1, this;
                if (typeof e == "string") {
                    e.charAt(0) !== "<" || e.charAt(e.length - 1) !== ">" || 
e.length < 3 ? s = u.exec(e) : s = [ null, e, null ];
                    if (s && (s[1] || !n)) {
                        if (s[1]) return n = n instanceof r ? n[0] : n, f = n ? n.ownerDocument || n : _, a = c.exec(e), a ? r.isPlainObject(n) ? (e = [ _.createElement(a[1]) ], r.fn.attr.call(e, n, !0)) : e = [ f.createElement(a[1]) ] : (a = r.buildFragment([ s[1] ], [ f ]), e = (a.cacheable ? r.clone(a.fragment) : a.fragment).childNodes), r.merge(this, e);
                        o = _.getElementById(s[2]);
                        if (o && o.parentNode) {
                            if (o.id !== s[2]) return i.find(e);
                            this.length = 1, this[0] = o;
                        }
                        return this.context = _, this.selector = e, this;
                    }
                    return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                }
                return r.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = 
e.selector, this.context = e.context), r.makeArray(e, this));
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function() {
                return this.length;
            },
            toArray: function() {
                return O.call(this, 0);
            },
            get: function(e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
            },
            pushStack: function(e, t, n) {
                var i = this.constructor();
                return r.isArray(e) ? A.apply(i, e) : r.merge(i, e), i.prevObject = this, i.context = this.context, t === "find" ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i;
            },
            each: function(e, t) {
                return r.each(this, e, t);
            },
            ready: function(e) {
                return r.bindReady(), N.add(e), this
;
            },
            eq: function(e) {
                return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1);
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            slice: function() {
                return this.pushStack(O.apply(this, arguments), "slice", O.call(arguments).join(","));
            },
            map: function(e) {
                return this.pushStack(r.map(this, function(t, n) {
                    return e.call(t, n, t);
                }));
            },
            end: function() {
                return this.prevObject || this.constructor(null);
            },
            push: A,
            sort: [].sort,
            splice: [].splice
        }, r.fn.init.prototype = r.fn, r.extend = r.fn.extend = function() {
            var e, n, i, s, o, u, a = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
            typeof 
a == "boolean" && (c = a, a = arguments[1] || {}, f = 2), typeof a != "object" && !r.isFunction(a) && (a = {}), l === f && (a = this, --f);
            for (; f < l; f++) if ((e = arguments[f]) != null) for (n in e) {
                i = a[n], s = e[n];
                if (a === s) continue;
                c && s && (r.isPlainObject(s) || (o = r.isArray(s))) ? (o ? (o = !1, u = i && r.isArray(i) ? i : []) : u = i && r.isPlainObject(i) ? i : {}, a[n] = r.extend(c, u, s)) : s !== t && (a[n] = s);
            }
            return a;
        }, r.extend({
            noConflict: function(t) {
                return e.$ === r && (e.$ = s), t && e.jQuery === r && (e.jQuery = i), r;
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? r.readyWait++ : r.ready(!0);
            },
            ready: function(e) {
                if (e === !0 && !--r.readyWait || e !== !0 && !r.isReady) {
                    if (!_.body) return setTimeout
(r.ready, 1);
                    r.isReady = !0;
                    if (e !== !0 && --r.readyWait > 0) return;
                    N.fireWith(_, [ r ]), r.fn.trigger && r(_).trigger("ready").off("ready");
                }
            },
            bindReady: function() {
                if (!N) {
                    N = r.Callbacks("once memory");
                    if (_.readyState === "complete") return setTimeout(r.ready, 1);
                    if (_.addEventListener) _.addEventListener("DOMContentLoaded", C, !1), e.addEventListener("load", r.ready, !1); else if (_.attachEvent) {
                        _.attachEvent("onreadystatechange", C), e.attachEvent("onload", r.ready);
                        var t = !1;
                        try {
                            t = e.frameElement == null;
                        } catch (i) {}
                        _.documentElement.doScroll && t && n();
                    }
                }
            },
            isFunction: function(
e) {
                return r.type(e) === "function";
            },
            isArray: Array.isArray || function(e) {
                return r.type(e) === "array";
            },
            isWindow: function(e) {
                return e != null && e == e.window;
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            },
            type: function(e) {
                return e == null ? String(e) : H[k.call(e)] || "object";
            },
            isPlainObject: function(e) {
                if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e)) return !1;
                try {
                    if (e.constructor && !L.call(e, "constructor") && !L.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (n) {
                    return !1;
                }
                var i;
                for (i in e) ;
                return i === t || L.call(e, i);
            },
            
isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0;
            },
            error: function(e) {
                throw new Error(e);
            },
            parseJSON: function(t) {
                if (typeof t != "string" || !t) return null;
                t = r.trim(t);
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                if (h.test(t.replace(p, "@").replace(d, "]").replace(v, ""))) return (new Function("return " + t))();
                r.error("Invalid JSON: " + t);
            },
            parseXML: function(n) {
                if (typeof n != "string" || !n) return null;
                var i, s;
                try {
                    e.DOMParser ? (s = new DOMParser, i = s.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n));
                } catch (o) {
                    i = t;
                }
                return (!i || !i.
documentElement || i.getElementsByTagName("parsererror").length) && r.error("Invalid XML: " + n), i;
            },
            noop: function() {},
            globalEval: function(t) {
                t && a.test(t) && (e.execScript || function(t) {
                    e.eval.call(e, t);
                })(t);
            },
            camelCase: function(e) {
                return e.replace(E, "ms-").replace(w, S);
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
            },
            each: function(e, n, i) {
                var s, o = 0, u = e.length, a = u === t || r.isFunction(e);
                if (i) {
                    if (a) {
                        for (s in e) if (n.apply(e[s], i) === !1) break;
                    } else for (; o < u; ) if (n.apply(e[o++], i) === !1) break;
                } else if (a) {
                    for (s in e) if (n.call(e[s], s, e[s]) === !1) break;
                
} else for (; o < u; ) if (n.call(e[o], o, e[o++]) === !1) break;
                return e;
            },
            trim: M ? function(e) {
                return e == null ? "" : M.call(e);
            } : function(e) {
                return e == null ? "" : (e + "").replace(f, "").replace(l, "");
            },
            makeArray: function(e, t) {
                var n = t || [];
                if (e != null) {
                    var i = r.type(e);
                    e.length == null || i === "string" || i === "function" || i === "regexp" || r.isWindow(e) ? A.call(n, e) : r.merge(n, e);
                }
                return n;
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (P) return P.call(t, e, n);
                    r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                    for (; n < r; n++) if (n in t && t[n] === e) return n;
                }
                return -1
;
            },
            merge: function(e, n) {
                var r = e.length, i = 0;
                if (typeof n.length == "number") for (var s = n.length; i < s; i++) e[r++] = n[i]; else while (n[i] !== t) e[r++] = n[i++];
                return e.length = r, e;
            },
            grep: function(e, t, n) {
                var r = [], i;
                n = !!n;
                for (var s = 0, o = e.length; s < o; s++) i = !!t(e[s], s), n !== i && r.push(e[s]);
                return r;
            },
            map: function(e, n, i) {
                var s, o, u = [], a = 0, f = e.length, l = e instanceof r || f !== t && typeof f == "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || r.isArray(e));
                if (l) for (; a < f; a++) s = n(e[a], a, i), s != null && (u[u.length] = s); else for (o in e) s = n(e[o], o, i), s != null && (u[u.length] = s);
                return u.concat.apply([], u);
            },
            guid: 1,
            proxy: function(
e, n) {
                if (typeof n == "string") {
                    var i = e[n];
                    n = e, e = i;
                }
                if (!r.isFunction(e)) return t;
                var s = O.call(arguments, 2), o = function() {
                    return e.apply(n, s.concat(O.call(arguments)));
                };
                return o.guid = e.guid = e.guid || o.guid || r.guid++, o;
            },
            access: function(e, n, i, s, o, u, a) {
                var f, l = i == null, c = 0, h = e.length;
                if (i && typeof i == "object") {
                    for (c in i) r.access(e, n, c, i[c], 1, u, s);
                    o = 1;
                } else if (s !== t) {
                    f = a === t && r.isFunction(s), l && (f ? (f = n, n = function(e, t, n) {
                        return f.call(r(e), n);
                    }) : (n.call(e, s), n = null));
                    if (n) for (; c < h; c++) n(e[c], i, f ? s.call(e[c], c, n(e[c], i)) : 
s, a);
                    o = 1;
                }
                return o ? e : l ? n.call(e) : h ? n(e[0], i) : u;
            },
            now: function() {
                return (new Date).getTime();
            },
            uaMatch: function(e) {
                e = e.toLowerCase();
                var t = m.exec(e) || g.exec(e) || y.exec(e) || e.indexOf("compatible") < 0 && b.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                };
            },
            sub: function() {
                function e(t, n) {
                    return new e.fn.init(t, n);
                }
                r.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
                    return i && i instanceof r && !(i instanceof e) && (i = e(i)), r.fn.init.call(this, n, i, t);
                }, e.fn.init.prototype = e.fn;
                
var t = e(_);
                return e;
            },
            browser: {}
        }), r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            H["[object " + t + "]"] = t.toLowerCase();
        }), T = r.uaMatch(x), T.browser && (r.browser[T.browser] = !0, r.browser.version = T.version), r.browser.webkit && (r.browser.safari = !0), a.test("\u00a0") && (f = /^[\s\xA0]+/, l = /[\s\xA0]+$/), o = r(_), _.addEventListener ? C = function() {
            _.removeEventListener("DOMContentLoaded", C, !1), r.ready();
        } : _.attachEvent && (C = function() {
            _.readyState === "complete" && (_.detachEvent("onreadystatechange", C), r.ready());
        }), r;
    }(), B = {};
    H.Callbacks = function(e) {
        e = e ? B[e] || M(e) : {};
        var n = [], r = [], i, s, o, u, a, f, l = function(t) {
            var r, i, s, o, u;
            for (r = 0, i = t.length; r < i; r++) s = t[r], o = H.type(s), o === "array" ? l(s) : 
o === "function" && (!e.unique || !h.has(s)) && n.push(s);
        }, c = function(t, l) {
            l = l || [], i = !e.memory || [ t, l ], s = !0, o = !0, f = u || 0, u = 0, a = n.length;
            for (; n && f < a; f++) if (n[f].apply(t, l) === !1 && e.stopOnFalse) {
                i = !0;
                break;
            }
            o = !1, n && (e.once ? i === !0 ? h.disable() : n = [] : r && r.length && (i = r.shift(), h.fireWith(i[0], i[1])));
        }, h = {
            add: function() {
                if (n) {
                    var e = n.length;
                    l(arguments), o ? a = n.length : i && i !== !0 && (u = e, c(i[0], i[1]));
                }
                return this;
            },
            remove: function() {
                if (n) {
                    var t = arguments, r = 0, i = t.length;
                    for (; r < i; r++) for (var s = 0; s < n.length; s++) if (t[r] === n[s]) {
                        o && s <= a && (a--, s <= f && f--
), n.splice(s--, 1);
                        if (e.unique) break;
                    }
                }
                return this;
            },
            has: function(e) {
                if (n) {
                    var t = 0, r = n.length;
                    for (; t < r; t++) if (e === n[t]) return !0;
                }
                return !1;
            },
            empty: function() {
                return n = [], this;
            },
            disable: function() {
                return n = r = i = t, this;
            },
            disabled: function() {
                return !n;
            },
            lock: function() {
                return r = t, (!i || i === !0) && h.disable(), this;
            },
            locked: function() {
                return !r;
            },
            fireWith: function(t, n) {
                return r && (o ? e.once || r.push([ t, n ]) : (!e.once || !i) && c(t, n)), this;
            },
            fire: function() 
{
                return h.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!s;
            }
        };
        return h;
    };
    var j = [].slice;
    H.extend({
        Deferred: function(e) {
            var t = H.Callbacks("once memory"), n = H.Callbacks("once memory"), r = H.Callbacks("memory"), i = "pending", s = {
                resolve: t,
                reject: n,
                notify: r
            }, o = {
                done: t.add,
                fail: n.add,
                progress: r.add,
                state: function() {
                    return i;
                },
                isResolved: t.fired,
                isRejected: n.fired,
                then: function(e, t, n) {
                    return u.done(e).fail(t).progress(n), this;
                },
                always: function() {
                    return u.done.apply(u, arguments).fail.apply(u, arguments), this;
                },
                
pipe: function(e, t, n) {
                    return H.Deferred(function(r) {
                        H.each({
                            done: [ e, "resolve" ],
                            fail: [ t, "reject" ],
                            progress: [ n, "notify" ]
                        }, function(e, t) {
                            var n = t[0], i = t[1], s;
                            H.isFunction(n) ? u[e](function() {
                                s = n.apply(this, arguments), s && H.isFunction(s.promise) ? s.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === u ? r : this, [ s ]);
                            }) : u[e](r[i]);
                        });
                    }).promise();
                },
                promise: function(e) {
                    if (e == null) e = o; else for (var t in o) e[t] = o[t];
                    return e;
                }
            }, u = o.promise({}), a;
            for (a in s) u[a] = s[a].fire, u[a + "With"
] = s[a].fireWith;
            return u.done(function() {
                i = "resolved";
            }, n.disable, r.lock).fail(function() {
                i = "rejected";
            }, t.disable, r.lock), e && e.call(u, u), u;
        },
        when: function(e) {
            function t(e) {
                return function(t) {
                    o[e] = arguments.length > 1 ? j.call(arguments, 0) : t, f.notifyWith(l, o);
                };
            }
            function n(e) {
                return function(t) {
                    r[e] = arguments.length > 1 ? j.call(arguments, 0) : t, --u || f.resolveWith(f, r);
                };
            }
            var r = j.call(arguments, 0), i = 0, s = r.length, o = Array(s), u = s, a = s, f = s <= 1 && e && H.isFunction(e.promise) ? e : H.Deferred(), l = f.promise();
            if (s > 1) {
                for (; i < s; i++) r[i] && r[i].promise && H.isFunction(r[i].promise) ? r[i].promise().then(n(i), f.reject, t(i)) : --u;
                
u || f.resolveWith(f, r);
            } else f !== e && f.resolveWith(f, s ? [ e ] : []);
            return l;
        }
    }), H.support = function() {
        var t, n, r, i, s, o, u, a, f, l, c, h, p = _.createElement("div"), d = _.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !n.length || !r) return {};
        i = _.createElement("select"), s = i.appendChild(_.createElement("option")), o = p.getElementsByTagName("input")[0], t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.55/.
test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: o.value === "on",
            optSelected: s.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!_.createElement("form").enctype,
            html5Clone: _.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, H.boxModel = t.boxModel = _.compatMode === "CSS1Compat", o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete p.test;
        } catch (v) {
            t.deleteExpando = !1;
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick"
, function() {
            t.noCloneEvent = !1;
        }), p.cloneNode(!0).fireEvent("onclick")), o = _.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), p.appendChild(o), u = _.createDocumentFragment(), u.appendChild(p.lastChild), t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = o.checked, u.removeChild(o), u.appendChild(p);
        if (p.attachEvent) for (c in {
            submit: 1,
            change: 1,
            focusin: 1
        }) l = "on" + c, h = l in p, h || (p.setAttribute(l, "return;"), h = typeof p[l] == "function"), t[c + "Bubbles"] = h;
        return u.removeChild(p), u = i = s = p = o = null, H(function() {
            var n, r, i, s, o, u, f, l, c, d, v, m, g, y = _.getElementsByTagName("body")[0];
            !y || (l = 1, g = "padding:0;margin:0;border:", v = "position:absolute;top:0;left:0;width:1px;height:1px;"
, m = g + "0;visibility:hidden;", c = "style='" + v + g + "5px solid #000;", d = "<div " + c + "display:block;'><div style='" + g + "0;display:block;overflow:hidden;'></div></div>" + "<table " + c + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", n = _.createElement("div"), n.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + l + "px", y.insertBefore(n, y.firstChild), p = _.createElement("div"), n.appendChild(p), p.innerHTML = "<table><tr><td style='" + g + "0;display:none'></td><td>t</td></tr></table>", a = p.getElementsByTagName("td"), h = a[0].offsetHeight === 0, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = h && a[0].offsetHeight === 0, e.getComputedStyle && (p.innerHTML = "", f = _.createElement("div"), f.style.width = "0", f.style.marginRight = "0", p.style.width = "2px", p.appendChild(f), t.reliableMarginRight = (parseInt((e.getComputedStyle(f, null) || {
                marginRight: 0
            }).marginRight
, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = v + m, p.innerHTML = d, r = p.firstChild, i = r.firstChild, o = r.nextSibling.firstChild.firstChild, u = {
                doesNotAddBorder: i.offsetTop !== 5,
                doesAddBorderForTableAndCells: o.offsetTop === 5
            }, i.style.position = "fixed", i.style.top = "20px", u.fixedPosition = i.offsetTop === 20 || i.offsetTop === 15, i.style.position = i.style.top = "", r.style.overflow = "hidden", r.style.position = "relative", u.subtractsBorderForOverflowNotVisible = i.offsetTop === -5, u.doesNotIncludeMarginInBodyOffset = y.offsetTop !== l, e.getComputedStyle && 
(p.style.marginTop = "1%", t.pixelMargin = (e.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof n.style.zoom != "undefined" && (n.style.zoom = 1), y.removeChild(n), f = p = n = null, H.extend(t, u));
        }), t;
    }();
    var F = /^(?:\{.*\}|\[.*\])$/, I = /([A-Z])/g;
    H.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (H.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? H.cache[e[H.expando]] : e[H.expando], !!e && !A(e);
        },
        data: function(e, n, r, i) {
            if (!!H.acceptData(e)) {
                var s, o, u, a = H.expando, f = typeof n == "string", l = e.nodeType, c = l ? H.cache : e, h = l ? e[a] : e[a] && a, p = n === "events";
                if ((!h || !c[h] || !p && !i && !
c[h].data) && f && r === t) return;
                h || (l ? e[a] = h = ++H.uuid : h = a), c[h] || (c[h] = {}, l || (c[h].toJSON = H.noop));
                if (typeof n == "object" || typeof n == "function") i ? c[h] = H.extend(c[h], n) : c[h].data = H.extend(c[h].data, n);
                return s = o = c[h], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[H.camelCase(n)] = r), p && !o[n] ? s.events : (f ? (u = o[n], u == null && (u = o[H.camelCase(n)])) : u = o, u);
            }
        },
        removeData: function(e, t, n) {
            if (!!H.acceptData(e)) {
                var r, i, s, o = H.expando, u = e.nodeType, a = u ? H.cache : e, f = u ? e[o] : o;
                if (!a[f]) return;
                if (t) {
                    r = n ? a[f] : a[f].data;
                    if (r) {
                        H.isArray(t) || (t in r ? t = [ t ] : (t = H.camelCase(t), t in r ? t = [ t ] : t = t.split(" ")));
                        for (i = 0, s = t.length; i < s; 
i++) delete r[t[i]];
                        if (!(n ? A : H.isEmptyObject)(r)) return;
                    }
                }
                if (!n) {
                    delete a[f].data;
                    if (!A(a[f])) return;
                }
                H.support.deleteExpando || !a.setInterval ? delete a[f] : a[f] = null, u && (H.support.deleteExpando ? delete e[o] : e.removeAttribute ? e.removeAttribute(o) : e[o] = null);
            }
        },
        _data: function(e, t, n) {
            return H.data(e, t, n, !0);
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = H.noData[e.nodeName.toLowerCase()];
                if (t) return t !== !0 && e.getAttribute("classid") === t;
            }
            return !0;
        }
    }), H.fn.extend({
        data: function(e, n) {
            var r, i, s, o, u, a = this[0], f = 0, l = null;
            if (e === t) {
                if (this.length) {
                    l = H.
data(a);
                    if (a.nodeType === 1 && !H._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") === 0 && (o = H.camelCase(o.substring(5)), O(a, o, l[o]));
                        H._data(a, "parsedAttrs", !0);
                    }
                }
                return l;
            }
            return typeof e == "object" ? this.each(function() {
                H.data(this, e);
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", H.access(this, function(n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [ r[0] ]), l === t && a && (l = H.data(a, e), l = O(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function() {
                    var t = H(this);
                    t.triggerHandler("setData" + i, r), H.data(this, e, n), t.triggerHandler("changeData" + i, r);
                
});
            }, null, n, arguments.length > 1, null, !1));
        },
        removeData: function(e) {
            return this.each(function() {
                H.removeData(this, e);
            });
        }
    }), H.extend({
        _mark: function(e, t) {
            e && (t = (t || "fx") + "mark", H._data(e, t, (H._data(e, t) || 0) + 1));
        },
        _unmark: function(e, t, n) {
            e !== !0 && (n = t, t = e, e = !1);
            if (t) {
                n = n || "fx";
                var r = n + "mark", i = e ? 0 : (H._data(t, r) || 1) - 1;
                i ? H._data(t, r, i) : (H.removeData(t, r, !0), L(t, n, "mark"));
            }
        },
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = H._data(e, t), n && (!r || H.isArray(n) ? r = H._data(e, t, H.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = H.queue(e, t), r = 
n.shift(), i = {};
            r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), H._data(e, t + ".run", i), r.call(e, function() {
                H.dequeue(e, t);
            }, i)), n.length || (H.removeData(e, t + "queue " + t + ".run", !0), L(e, t, "queue"));
        }
    }), H.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? H.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = H.queue(this, e, n);
                e === "fx" && t[0] !== "inprogress" && H.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                H.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = H.fx ? H.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                
n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            function r() {
                --u || i.resolveWith(s, [ s ]);
            }
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            var i = H.Deferred(), s = this, o = s.length, u = 1, a = e + "defer", f = e + "queue", l = e + "mark", c;
            while (o--) if (c = H.data(s[o], a, t, !0) || (H.data(s[o], f, t, !0) || H.data(s[o], l, t, !0)) && H.data(s[o], a, H.Callbacks("once memory"), !0)) u++, c.add(r);
            return r(), i.promise(n);
        }
    });
    var q = /[\n\t\r]/g, R = /\s+/, U = /\r/g, z = /^(?:button|input)$/i, W = /^(?:button|input|object|select|textarea)$/i, X = /^a(?:rea)?$/i, V = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
, $ = H.support.getSetAttribute, J, K, Q;
    H.fn.extend({
        attr: function(e, t) {
            return H.access(this, H.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                H.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return H.access(this, H.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = H.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {}
            });
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (H.isFunction(e)) return this.each(function(t) {
                H(this).addClass(e.call(this, t, this.className));
            });
            if (e && typeof e == "string") {
                t = e.split(R);
                for (n = 0, r = this.length; n < r; 
n++) {
                    i = this[n];
                    if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e; else {
                        s = " " + i.className + " ";
                        for (o = 0, u = t.length; o < u; o++) ~s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
                        i.className = H.trim(s);
                    }
                }
            }
            return this;
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (H.isFunction(e)) return this.each(function(t) {
                H(this).removeClass(e.call(this, t, this.className));
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(R);
                for (r = 0, i = this.length; r < i; r++) {
                    s = this[r];
                    if (s.nodeType === 1 && s.className) if (e) {
                        o = (" " + s.className + " ").replace(q, " ");
                        
for (u = 0, a = n.length; u < a; u++) o = o.replace(" " + n[u] + " ", " ");
                        s.className = H.trim(o);
                    } else s.className = "";
                }
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, r = typeof t == "boolean";
            return H.isFunction(e) ? this.each(function(n) {
                H(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0, o = H(this), u = t, a = e.split(R);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i);
                } else if (n === "undefined" || n === "boolean") this.className && H._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : H._data(this, "__className__") || "";
            });
        },
        hasClass: function(e) {
            
var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) > -1) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!!arguments.length) return i = H.isFunction(e), this.each(function(r) {
                var s = H(this), o;
                if (this.nodeType === 1) {
                    i ? o = e.call(this, r, s.val()) : o = e, o == null ? o = "" : typeof o == "number" ? o += "" : H.isArray(o) && (o = H.map(o, function(e) {
                        return e == null ? "" : e + "";
                    })), n = H.valHooks[this.type] || H.valHooks[this.nodeName.toLowerCase()];
                    if (!n || !("set" in n) || n.set(this, o, "value") === t) this.value = o;
                }
            });
            if (s) return n = H.valHooks[s.type] || H.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = 
n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(U, "") : r == null ? "" : r);
        }
    }), H.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i, s = e.selectedIndex, o = [], u = e.options, a = e.type === "select-one";
                    if (s < 0) return null;
                    n = a ? s : 0, r = a ? s + 1 : u.length;
                    for (; n < r; n++) {
                        i = u[n];
                        if (i.selected && (H.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !H.nodeName(i.parentNode, "optgroup"))) {
                            t = H(i).val();
                            if (a) return t;
                            
o.push(t);
                        }
                    }
                    return a && !o.length && u.length ? H(u[s]).val() : o;
                },
                set: function(e, t) {
                    var n = H.makeArray(t);
                    return H(e).find("option").each(function() {
                        this.selected = H.inArray(H(this).val(), n) >= 0;
                    }), n.length || (e.selectedIndex = -1), n;
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!!e && a !== 3 && a !== 8 && a !== 2) {
                if (i && n in H.attrFn) return H(e)[n](r);
                if (typeof e.getAttribute == "undefined") return H.prop(e, n, r);
                u = a !== 1 || !H.isXMLDoc
(e), u && (n = n.toLowerCase(), o = H.attrHooks[n] || (V.test(n) ? K : J));
                if (r !== t) {
                    if (r === null) {
                        H.removeAttr(e, n);
                        return;
                    }
                    return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r);
                }
                return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s);
            }
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o, u = 0;
            if (t && e.nodeType === 1) {
                r = t.toLowerCase().split(R), s = r.length;
                for (; u < s; u++) i = r[u], i && (n = H.propFix[i] || i, o = V.test(i), o || H.attr(e, i, ""), e.removeAttribute($ ? i : n), o && n in e && (e[n] = !1));
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (
z.test(e.nodeName) && e.parentNode) H.error("type property can't be changed"); else if (!H.support.radioValue && t === "radio" && H.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return J && H.nodeName(e, "button") ? J.get(e, t) : t in e ? e.value : null;
                },
                set: function(e, t, n) {
                    if (J && H.nodeName(e, "button")) return J.set(e, t, n);
                    e.value = t;
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            
colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!!e && u !== 3 && u !== 8 && u !== 2) return o = u !== 1 || !H.isXMLDoc(e), o && (n = H.propFix[n] || n, s = H.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : W.test(e.nodeName) || X.test(e.nodeName) && e.href ? 0 : t;
                }
            }
        }
    }), H.attrHooks.tabindex = H.propHooks.tabIndex, K = {
        get: function(e, n) {
            var r, i = H.prop(e, n);
            return i === !0 || typeof i != "boolean" && 
(r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t;
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? H.removeAttr(e, n) : (r = H.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n;
        }
    }, $ || (Q = {
        name: !0,
        id: !0,
        coords: !0
    }, J = H.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (Q[n] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t;
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = _.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + "";
        }
    }, H.attrHooks.tabindex.set = J.set, H.each([ "width", "height" ], function(e, t) {
        H.attrHooks[t] = H.extend(H.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n;
            }
        
});
    }), H.attrHooks.contenteditable = {
        get: J.get,
        set: function(e, t, n) {
            t === "" && (t = "false"), J.set(e, t, n);
        }
    }), H.support.hrefNormalized || H.each([ "href", "src", "width", "height" ], function(e, n) {
        H.attrHooks[n] = H.extend(H.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r;
            }
        });
    }), H.support.style || (H.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t;
        },
        set: function(e, t) {
            return e.style.cssText = "" + t;
        }
    }), H.support.optSelected || (H.propHooks.selected = H.extend(H.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    })), H.support.enctype || (H.propFix.enctype = "encoding"
), H.support.checkOn || H.each([ "radio", "checkbox" ], function() {
        H.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value;
            }
        };
    }), H.each([ "radio", "checkbox" ], function() {
        H.valHooks[this] = H.extend(H.valHooks[this], {
            set: function(e, t) {
                if (H.isArray(t)) return e.checked = H.inArray(H(e).val(), t) >= 0;
            }
        });
    });
    var G = /^(?:textarea|input|select)$/i, Y = /^([^\.]*)?(?:\.(.+))?$/, Z = /(?:^|\s)hover(\.\S+)?\b/, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, it = function(e) {
        var t = rt.exec(e);
        return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t;
    }, st = function(e, t) {
        var n = e.attributes || {};
        return (!t[1] || e.nodeName.toLowerCase
() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value));
    }, ot = function(e) {
        return H.event.special.hover ? e : e.replace(Z, "mouseenter$1 mouseleave$1");
    };
    H.event = {
        add: function(e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m, g;
            if (!(e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = H._data(e)))) {
                r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = H.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
                    return typeof H == "undefined" || !!e && H.event.triggered === e.type ? t : H.event.dispatch.apply(u.elem, arguments);
                }, u.elem = e), n = H.trim(ot(n)).split(" ");
                for (f = 0; f < n.length; f++) {
                    l = Y.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = H.event.special[c] || {}, c = (s ? g.delegateType 
: g.bindType) || c, g = H.event.special[c] || {}, p = H.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        quick: s && it(s),
                        namespace: h.join(".")
                    }, d), m = a[c];
                    if (!m) {
                        m = a[c] = [], m.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u);
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), H.event.global[c] = !0;
                }
                e = null;
            }
        },
        global: {},
        remove: function(e, t, n, r, i) {
            
var s = H.hasData(e) && H._data(e), o, u, a, f, l, c, h, p, d, v, m, g;
            if (!!s && !!(p = s.events)) {
                t = H.trim(ot(t || "")).split(" ");
                for (o = 0; o < t.length; o++) {
                    u = Y.exec(t[o]) || [], a = f = u[1], l = u[2];
                    if (!a) {
                        for (a in p) H.event.remove(e, a + t[o], n, r, !0);
                        continue;
                    }
                    d = H.event.special[a] || {}, a = (r ? d.delegateType : d.bindType) || a, m = p[a] || [], c = m.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (h = 0; h < m.length; h++) g = m[h], (i || f === g.origType) && (!n || n.guid === g.guid) && (!l || l.test(g.namespace)) && (!r || r === g.selector || r === "**" && g.selector) && (m.splice(h--, 1), g.selector && m.delegateCount--, d.remove && d.remove.call(e, g));
                    m.length === 0 && c !== m.length && 
((!d.teardown || d.teardown.call(e, l) === !1) && H.removeEvent(e, a, s.handle), delete p[a]);
                }
                H.isEmptyObject(p) && (v = s.handle, v && (v.elem = null), H.removeData(e, [ "events", "handle" ], !0));
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, r, i, s) {
            if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
                var o = n.type || n, u = [], a, f, l, c, h, p, d, v, m, g;
                if (nt.test(o + H.event.triggered)) return;
                o.indexOf("!") >= 0 && (o = o.slice(0, -1), f = !0), o.indexOf(".") >= 0 && (u = o.split("."), o = u.shift(), u.sort());
                if ((!i || H.event.customEvent[o]) && !H.event.global[o]) return;
                n = typeof n == "object" ? n[H.expando] ? n : new H.Event(o, n) : new H.Event(o), n.type = o, n.isTrigger = !0, n.exclusive = f, n.namespace = u.join("."), n.namespace_re = 
n.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, p = o.indexOf(":") < 0 ? "on" + o : "";
                if (!i) {
                    a = H.cache;
                    for (l in a) a[l].events && a[l].events[o] && H.event.trigger(n, r, a[l].handle.elem, !0);
                    return;
                }
                n.result = t, n.target || (n.target = i), r = r != null ? H.makeArray(r) : [], r.unshift(n), d = H.event.special[o] || {};
                if (d.trigger && d.trigger.apply(i, r) === !1) return;
                m = [ [ i, d.bindType || o ] ];
                if (!s && !d.noBubble && !H.isWindow(i)) {
                    g = d.delegateType || o, c = nt.test(g + o) ? i : i.parentNode, h = null;
                    for (; c; c = c.parentNode) m.push([ c, g ]), h = c;
                    h && h === i.ownerDocument && m.push([ h.defaultView || h.parentWindow || e, g ]);
                }
                for (l = 0; l < m.length && !n.isPropagationStopped
(); l++) c = m[l][0], n.type = m[l][1], v = (H._data(c, "events") || {})[n.type] && H._data(c, "handle"), v && v.apply(c, r), v = p && c[p], v && H.acceptData(c) && v.apply(c, r) === !1 && n.preventDefault();
                return n.type = o, !s && !n.isDefaultPrevented() && (!d._default || d._default.apply(i.ownerDocument, r) === !1) && (o !== "click" || !H.nodeName(i, "a")) && H.acceptData(i) && p && i[o] && (o !== "focus" && o !== "blur" || n.target.offsetWidth !== 0) && !H.isWindow(i) && (h = i[p], h && (i[p] = null), H.event.triggered = o, i[o](), H.event.triggered = t, h && (i[p] = h)), n.result;
            }
        },
        dispatch: function(n) {
            n = H.event.fix(n || e.event);
            var r = (H._data(this, "events") || {})[n.type] || [], i = r.delegateCount, s = [].slice.call(arguments, 0), o = !n.exclusive && !n.namespace, u = H.event.special[n.type] || {}, a = [], f, l, c, h, p, d, v, m, g, y, b;
            s[0] = n, n.delegateTarget = this;
            
if (!u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                if (i && (!n.button || n.type !== "click")) {
                    h = H(this), h.context = this.ownerDocument || this;
                    for (c = n.target; c != this; c = c.parentNode || this) if (c.disabled !== !0) {
                        d = {}, m = [], h[0] = c;
                        for (f = 0; f < i; f++) g = r[f], y = g.selector, d[y] === t && (d[y] = g.quick ? st(c, g.quick) : h.is(y)), d[y] && m.push(g);
                        m.length && a.push({
                            elem: c,
                            matches: m
                        });
                    }
                }
                r.length > i && a.push({
                    elem: this,
                    matches: r.slice(i)
                });
                for (f = 0; f < a.length && !n.isPropagationStopped(); f++) {
                    v = a[f], n.currentTarget = v.elem;
                    for (l = 0; l < v.matches.length && !
n.isImmediatePropagationStopped(); l++) {
                        g = v.matches[l];
                        if (o || !n.namespace && !g.namespace || n.namespace_re && n.namespace_re.test(g.namespace)) n.data = g.data, n.handleObj = g, p = ((H.event.special[g.origType] || {}).handle || g.handler).apply(v.elem, s), p !== t && (n.result = p, p === !1 && (n.preventDefault(), n.stopPropagation()));
                    }
                }
                return u.postDispatch && u.postDispatch.call(this, n), n.result;
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
            }
        },
        
mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, s, o = n.button, u = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || _, i = r.documentElement, s = r.body, e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e;
            }
        },
        fix: function(e) {
            if (e[H.expando]) return e;
            var n, r, i = e, s = H.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = H.Event(i);
            
for (n = o.length; n; ) r = o[--n], e[r] = i[r];
            return e.target || (e.target = i.srcElement || _), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), s.filter ? s.filter(e, i) : e;
        },
        special: {
            ready: {
                setup: H.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    H.isWindow(this) && (this.onbeforeunload = n);
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = H.extend(new H.Event, n, {
                type: e,
                
isSimulated: !0,
                originalEvent: {}
            });
            r ? H.event.trigger(i, null, t) : H.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, H.event.handle = H.event.dispatch, H.removeEvent = _.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n);
    }, H.Event = function(e, t) {
        if (!(this instanceof H.Event)) return new H.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? C : k) : this.type = e, t && H.extend(this, t), this.timeStamp = e && e.timeStamp || H.now(), this[H.expando] = !0;
    }, H.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = C;
            var e = this.originalEvent;
            !
e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            this.isPropagationStopped = C;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = C, this.stopPropagation();
        },
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k
    }, H.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        H.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n = this, r = e.relatedTarget, i = e.handleObj, s = i.selector, o;
                if (!r || r !== n && !H.contains(n, r)) e.type = i.origType, o = i.handler.apply(this, arguments), e.type = t;
                return o;
            
}
        };
    }), H.support.submitBubbles || (H.event.special.submit = {
        setup: function() {
            if (H.nodeName(this, "form")) return !1;
            H.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = H.nodeName(n, "input") || H.nodeName(n, "button") ? n.form : t;
                r && !r._submit_attached && (H.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), r._submit_attached = !0);
            });
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && H.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            if (H.nodeName(this, "form")) return !1;
            H.event.remove(this, "._submit");
        }
    }), H.support.changeBubbles || (H.event.special.change = {
        setup: function() {
            if (G.test(this.nodeName
)) {
                if (this.type === "checkbox" || this.type === "radio") H.event.add(this, "propertychange._change", function(e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0);
                }), H.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1, H.event.simulate("change", this, e, !0));
                });
                return !1;
            }
            H.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                G.test(t.nodeName) && !t._change_attached && (H.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && H.event.simulate("change", this.parentNode, e, !0);
                }), t._change_attached = !0);
            });
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || 
e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function() {
            return H.event.remove(this, "._change"), G.test(this.nodeName);
        }
    }), H.support.focusinBubbles || H.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            H.event.simulate(t, e.target, H.event.fix(e), !0);
        };
        H.event.special[t] = {
            setup: function() {
                n++ === 0 && _.addEventListener(e, r, !0);
            },
            teardown: function() {
                --n === 0 && _.removeEventListener(e, r, !0);
            }
        };
    }), H.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], s);
                return this;
            
}
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = k; else if (!i) return this;
            return s === 1 && (o = i, i = function(e) {
                return H().off(e), o.apply(this, arguments);
            }, i.guid = o.guid || (o.guid = H.guid++)), this.each(function() {
                H.event.add(this, e, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            if (e && e.preventDefault && e.handleObj) {
                var i = e.handleObj;
                return H(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            }
            if (typeof e == "object") {
                for (var s in e) this.off(s, n, e[s]);
                return this;
            }
            if (n === !1 || typeof 
n == "function") r = n, n = t;
            return r === !1 && (r = k), this.each(function() {
                H.event.remove(this, e, r, n);
            });
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        live: function(e, t, n) {
            return H(this.context).on(e, this.selector, t, n), this;
        },
        die: function(e, t) {
            return H(this.context).off(e, this.selector || "**", t), this;
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n);
        },
        trigger: function(e, t) {
            return this.each(function() {
                H.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            if (
this[0]) return H.event.trigger(e, t, this[0], !0);
        },
        toggle: function(e) {
            var t = arguments, n = e.guid || H.guid++, r = 0, i = function(n) {
                var i = (H._data(this, "lastToggle" + e.guid) || 0) % r;
                return H._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1;
            };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i);
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), H.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        H.fn[t] = function(e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        
}, H.attrFn && (H.attrFn[t] = !0), et.test(t) && (H.event.fixHooks[t] = H.event.keyHooks), tt.test(t) && (H.event.fixHooks[t] = H.event.mouseHooks);
    }), function() {
        function e(e, t, n, r, s, o) {
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            l = r[f.sizset];
                            break;
                        }
                        if (f.nodeType === 1) {
                            o || (f[i] = n, f.sizset = u);
                            if (typeof t != "string") {
                                if (f === t) {
                                    l = !0;
                                    break;
                                }
                            } else if (h.filter(t, [ f ]).length > 0) {
                                l = 
f;
                                break;
                            }
                        }
                        f = f[e];
                    }
                    r[u] = l;
                }
            }
        }
        function n(e, t, n, r, s, o) {
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            l = r[f.sizset];
                            break;
                        }
                        f.nodeType === 1 && !o && (f[i] = n, f.sizset = u);
                        if (f.nodeName.toLowerCase() === t) {
                            l = f;
                            break;
                        }
                        f = f[e];
                    }
                    r[u] = l;
                }
            }
        }
        var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
, i = "sizcache" + (Math.random() + "").replace(".", ""), s = 0, o = Object.prototype.toString, u = !1, a = !0, f = /\\/g, l = /\r\n/g, c = /\W/;
        [ 0, 0 ].sort(function() {
            return a = !1, 0;
        });
        var h = function(e, t, n, i) {
            n = n || [], t = t || _;
            var s = t;
            if (t.nodeType !== 1 && t.nodeType !== 9) return [];
            if (!e || typeof e != "string") return n;
            var u, a, f, l, c, p, m, g, b = !0, w = h.isXML(t), E = [], x = e;
            do {
                r.exec(""), u = r.exec(x);
                if (u) {
                    x = u[3], E.push(u[1]);
                    if (u[2]) {
                        l = u[3];
                        break;
                    }
                }
            } while (u);
            if (E.length > 1 && v.exec(e)) if (E.length === 2 && d.relative[E[0]]) a = S(E[0] + E[1], t, i); else {
                a = d.relative[E[0]] ? [ t ] : h(E.shift(), t);
                
while (E.length) e = E.shift(), d.relative[e] && (e += E.shift()), a = S(e, a, i);
            } else {
                !i && E.length > 1 && t.nodeType === 9 && !w && d.match.ID.test(E[0]) && !d.match.ID.test(E[E.length - 1]) && (c = h.find(E.shift(), t, w), t = c.expr ? h.filter(c.expr, c.set)[0] : c.set[0]);
                if (t) {
                    c = i ? {
                        expr: E.pop(),
                        set: y(i)
                    } : h.find(E.pop(), E.length !== 1 || E[0] !== "~" && E[0] !== "+" || !t.parentNode ? t : t.parentNode, w), a = c.expr ? h.filter(c.expr, c.set) : c.set, E.length > 0 ? f = y(a) : b = !1;
                    while (E.length) p = E.pop(), m = p, d.relative[p] ? m = E.pop() : p = "", m == null && (m = t), d.relative[p](f, m, w);
                } else f = E = [];
            }
            f || (f = a), f || h.error(p || e);
            if (o.call(f) === "[object Array]") if (!b) n.push.apply(n, f); else if (t && t.nodeType === 1) for (g = 0
; f[g] != null; g++) f[g] && (f[g] === !0 || f[g].nodeType === 1 && h.contains(t, f[g])) && n.push(a[g]); else for (g = 0; f[g] != null; g++) f[g] && f[g].nodeType === 1 && n.push(a[g]); else y(f, n);
            return l && (h(l, s, n, i), h.uniqueSort(n)), n;
        };
        h.uniqueSort = function(e) {
            if (w) {
                u = a, e.sort(w);
                if (u) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
            }
            return e;
        }, h.matches = function(e, t) {
            return h(e, null, null, t);
        }, h.matchesSelector = function(e, t) {
            return h(t, null, null, [ e ]).length > 0;
        }, h.find = function(e, t, n) {
            var r, i, s, o, u, a;
            if (!e) return [];
            for (i = 0, s = d.order.length; i < s; i++) {
                u = d.order[i];
                if (o = d.leftMatch[u].exec(e)) {
                    a = o[1], o.splice(1, 1);
                    if (a.substr
(a.length - 1) !== "\\") {
                        o[1] = (o[1] || "").replace(f, ""), r = d.find[u](o, t, n);
                        if (r != null) {
                            e = e.replace(d.match[u], "");
                            break;
                        }
                    }
                }
            }
            return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                set: r,
                expr: e
            };
        }, h.filter = function(e, n, r, i) {
            var s, o, u, a, f, l, c, p, v, m = e, g = [], y = n, b = n && n[0] && h.isXML(n[0]);
            while (e && n.length) {
                for (u in d.filter) if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
                    l = d.filter[u], c = s[1], o = !1, s.splice(1, 1);
                    if (c.substr(c.length - 1) === "\\") continue;
                    y === g && (g = []);
                    if (d.preFilter[u]) {
                        
s = d.preFilter[u](s, y, r, g, i, b);
                        if (!s) o = a = !0; else if (s === !0) continue;
                    }
                    if (s) for (p = 0; (f = y[p]) != null; p++) f && (a = l(f, s, p, y), v = i ^ a, r && a != null ? v ? o = !0 : y[p] = !1 : v && (g.push(f), o = !0));
                    if (a !== t) {
                        r || (y = g), e = e.replace(d.match[u], "");
                        if (!o) return [];
                        break;
                    }
                }
                if (e === m) {
                    if (o != null) break;
                    h.error(e);
                }
                m = e;
            }
            return y;
        }, h.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        };
        var p = h.getText = function(e) {
            var t, n, r = e.nodeType, i = "";
            if (r) {
                if (r === 1 || r === 9 || r === 11) {
                    
if (typeof e.textContent == "string") return e.textContent;
                    if (typeof e.innerText == "string") return e.innerText.replace(l, "");
                    for (e = e.firstChild; e; e = e.nextSibling) i += p(e);
                } else if (r === 3 || r === 4) return e.nodeValue;
            } else for (t = 0; n = e[t]; t++) n.nodeType !== 8 && (i += p(n));
            return i;
        }, d = h.selectors = {
            order: [ "ID", "NAME", "TAG" ],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                
POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(e) {
                    return e.getAttribute("href");
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            },
            relative: {
                "+": function(e, t) {
                    var n = typeof t == "string", r = n && !c.test(t), i = n && !r;
                    r && (t = t.toLowerCase());
                    for (var s = 0, o = e.length, u; s < o; s++) if (u = e[s]) {
                        while ((u = u.previousSibling) && u.nodeType !== 1) ;
                        e[s] = i || u && u.nodeName.toLowerCase() === t ? 
u || !1 : u === t;
                    }
                    i && h.filter(t, e, !0);
                },
                ">": function(e, t) {
                    var n, r = typeof t == "string", i = 0, s = e.length;
                    if (r && !c.test(t)) {
                        t = t.toLowerCase();
                        for (; i < s; i++) {
                            n = e[i];
                            if (n) {
                                var o = n.parentNode;
                                e[i] = o.nodeName.toLowerCase() === t ? o : !1;
                            }
                        }
                    } else {
                        for (; i < s; i++) n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                        r && h.filter(t, e, !0);
                    }
                },
                "": function(t, r, i) {
                    var o, u = s++, a = e;
                    typeof r == "string" && !c.test(r) && (r = r.toLowerCase()
, o = r, a = n), a("parentNode", r, u, t, o, i);
                },
                "~": function(t, r, i) {
                    var o, u = s++, a = e;
                    typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("previousSibling", r, u, t, o, i);
                }
            },
            find: {
                ID: function(e, t, n) {
                    if (typeof t.getElementById != "undefined" && !n) {
                        var r = t.getElementById(e[1]);
                        return r && r.parentNode ? [ r ] : [];
                    }
                },
                NAME: function(e, t) {
                    if (typeof t.getElementsByName != "undefined") {
                        var n = [], r = t.getElementsByName(e[1]);
                        for (var i = 0, s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                        return n.length === 0 ? null : n;
                    }
                },
                
TAG: function(e, t) {
                    if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1]);
                }
            },
            preFilter: {
                CLASS: function(e, t, n, r, i, s) {
                    e = " " + e[1].replace(f, "") + " ";
                    if (s) return e;
                    for (var o = 0, u; (u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
                    return !1;
                },
                ID: function(e) {
                    return e[1].replace(f, "");
                },
                TAG: function(e, t) {
                    return e[1].replace(f, "").toLowerCase();
                },
                CHILD: function(e) {
                    if (e[1] === "nth") {
                        e[2] || h.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/
.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0;
                    } else e[2] && h.error(e[0]);
                    return e[0] = s++, e;
                },
                ATTR: function(e, t, n, r, i, s) {
                    var o = e[1] = e[1].replace(f, "");
                    return !s && d.attrMap[o] && (e[1] = d.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(f, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e;
                },
                PSEUDO: function(e, t, n, i, s) {
                    if (e[1] === "not") {
                        if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                            var o = h.filter(e[3], t, n, !0 ^ s);
                            return n || i.push.apply(i, o), !1;
                        }
                        e[3] = h(e[3], null, null, t);
                    } else if (d.match
.POS.test(e[0]) || d.match.CHILD.test(e[0])) return !0;
                    return e;
                },
                POS: function(e) {
                    return e.unshift(!0), e;
                }
            },
            filters: {
                enabled: function(e) {
                    return e.disabled === !1 && e.type !== "hidden";
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    return e.checked === !0;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                parent: function(e) {
                    return !!e.firstChild;
                },
                empty: function(e) {
                    return !e.firstChild;
                },
                has: function(e, t, n) {
                    return !!h(n[3], 
e).length;
                },
                header: function(e) {
                    return /h\d/i.test(e.nodeName);
                },
                text: function(e) {
                    var t = e.getAttribute("type"), n = e.type;
                    return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null);
                },
                radio: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type;
                },
                checkbox: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type;
                },
                file: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type;
                },
                password: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type;
                },
                submit: function(e) {
                    
var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "submit" === e.type;
                },
                image: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type;
                },
                reset: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "reset" === e.type;
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && "button" === e.type || t === "button";
                },
                input: function(e) {
                    return /input|select|textarea|button/i.test(e.nodeName);
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement;
                }
            },
            setFilters: {
                first: function(e, t) {
                    
return t === 0;
                },
                last: function(e, t, n, r) {
                    return t === r.length - 1;
                },
                even: function(e, t) {
                    return t % 2 === 0;
                },
                odd: function(e, t) {
                    return t % 2 === 1;
                },
                lt: function(e, t, n) {
                    return t < n[3] - 0;
                },
                gt: function(e, t, n) {
                    return t > n[3] - 0;
                },
                nth: function(e, t, n) {
                    return n[3] - 0 === t;
                },
                eq: function(e, t, n) {
                    return n[3] - 0 === t;
                }
            },
            filter: {
                PSEUDO: function(e, t, n, r) {
                    var i = t[1], s = d.filters[i];
                    if (s) return s(e, n, t, r);
                    if (i === "contains") return (e.textContent || e.innerText || 
p([ e ]) || "").indexOf(t[3]) >= 0;
                    if (i === "not") {
                        var o = t[3];
                        for (var u = 0, a = o.length; u < a; u++) if (o[u] === e) return !1;
                        return !0;
                    }
                    h.error(i);
                },
                CHILD: function(e, t) {
                    var n, r, s, o, u, a, f, l = t[1], c = e;
                    switch (l) {
                      case "only":
                      case "first":
                        while (c = c.previousSibling) if (c.nodeType === 1) return !1;
                        if (l === "first") return !0;
                        c = e;
                      case "last":
                        while (c = c.nextSibling) if (c.nodeType === 1) return !1;
                        return !0;
                      case "nth":
                        n = t[2], r = t[3];
                        if (n === 1 && r === 0) return !0;
                        
s = t[0], o = e.parentNode;
                        if (o && (o[i] !== s || !e.nodeIndex)) {
                            a = 0;
                            for (c = o.firstChild; c; c = c.nextSibling) c.nodeType === 1 && (c.nodeIndex = ++a);
                            o[i] = s;
                        }
                        return f = e.nodeIndex - r, n === 0 ? f === 0 : f % n === 0 && f / n >= 0;
                    }
                },
                ID: function(e, t) {
                    return e.nodeType === 1 && e.getAttribute("id") === t;
                },
                TAG: function(e, t) {
                    return t === "*" && e.nodeType === 1 || !!e.nodeName && e.nodeName.toLowerCase() === t;
                },
                CLASS: function(e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1;
                },
                ATTR: function(e, t) {
                    var n = t[1], r = h.attr ? h.attr(e, n) : 
d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n), i = r + "", s = t[2], o = t[4];
                    return r == null ? s === "!=" : !s && h.attr ? r != null : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1;
                },
                POS: function(e, t, n, r) {
                    var i = t[2], s = d.setFilters[i];
                    if (s) return s(e, n, t, r);
                }
            }
        }, v = d.match.POS, m = function(e, t) {
            return "\\" + (t - 0 + 1);
        };
        for (var g in d.match) d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m));
        
d.match.globalPOS = v;
        var y = function(e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e;
        };
        try {
            Array.prototype.slice.call(_.documentElement.childNodes, 0)[0].nodeType;
        } catch (b) {
            y = function(e, t) {
                var n = 0, r = t || [];
                if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e); else if (typeof e.length == "number") for (var i = e.length; n < i; n++) r.push(e[n]); else for (; e[n]; n++) r.push(e[n]);
                return r;
            };
        }
        var w, E;
        _.documentElement.compareDocumentPosition ? w = function(e, t) {
            return e === t ? (u = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1;
        } : (w = function(e, t) {
            if (e === t) return u = !0, 0;
            if (e.sourceIndex && t.sourceIndex
) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], s = [], o = e.parentNode, a = t.parentNode, f = o;
            if (o === a) return E(e, t);
            if (!o) return -1;
            if (!a) return 1;
            while (f) i.unshift(f), f = f.parentNode;
            f = a;
            while (f) s.unshift(f), f = f.parentNode;
            n = i.length, r = s.length;
            for (var l = 0; l < n && l < r; l++) if (i[l] !== s[l]) return E(i[l], s[l]);
            return l === n ? E(e, s[l], -1) : E(i[l], t, 1);
        }, E = function(e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling;
            }
            return 1;
        }), function() {
            var e = _.createElement("div"), n = "script" + (new Date).getTime(), r = _.documentElement;
            e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), _.getElementById
(n) && (d.find.ID = function(e, n, r) {
                if (typeof n.getElementById != "undefined" && !r) {
                    var i = n.getElementById(e[1]);
                    return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [ i ] : t : [];
                }
            }, d.filter.ID = function(e, t) {
                var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                return e.nodeType === 1 && n && n.nodeValue === t;
            }), r.removeChild(e), r = e = null;
        }(), function() {
            var e = _.createElement("div");
            e.appendChild(_.createComment("")), e.getElementsByTagName("*").length > 0 && (d.find.TAG = function(e, t) {
                var n = t.getElementsByTagName(e[1]);
                if (e[1] === "*") {
                    var r = [];
                    for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
                    
n = r;
                }
                return n;
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function(e) {
                return e.getAttribute("href", 2);
            }), e = null;
        }(), _.querySelectorAll && function() {
            var e = h, t = _.createElement("div"), n = "__sizzle__";
            t.innerHTML = "<p class='TEST'></p>";
            if (!t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                h = function(t, r, i, s) {
                    r = r || _;
                    if (!s && !h.isXML(r)) {
                        var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (o && (r.nodeType === 1 || r.nodeType === 9)) {
                            if (o[1]) return y(r.getElementsByTagName(t), i);
                            if (o[2] && d.find.CLASS && r.getElementsByClassName
) return y(r.getElementsByClassName(o[2]), i);
                        }
                        if (r.nodeType === 9) {
                            if (t === "body" && r.body) return y([ r.body ], i);
                            if (o && o[3]) {
                                var u = r.getElementById(o[3]);
                                if (!u || !u.parentNode) return y([], i);
                                if (u.id === o[3]) return y([ u ], i);
                            }
                            try {
                                return y(r.querySelectorAll(t), i);
                            } catch (a) {}
                        } else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            var f = r, l = r.getAttribute("id"), c = l || n, p = r.parentNode, v = /^\s*[+~]/.test(t);
                            l ? c = c.replace(/'/g, "\\$&") : r.setAttribute("id", c), v && p && (r = r.parentNode);
                            try {
                                
if (!v || p) return y(r.querySelectorAll("[id='" + c + "'] " + t), i);
                            } catch (m) {} finally {
                                l || f.removeAttribute("id");
                            }
                        }
                    }
                    return e(t, r, i, s);
                };
                for (var r in e) h[r] = e[r];
                t = null;
            }
        }(), function() {
            var e = _.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n = !t.call(_.createElement("div"), "div"), r = !1;
                try {
                    t.call(_.documentElement, "[test!='']:sizzle");
                } catch (i) {
                    r = !0;
                }
                h.matchesSelector = function(e, i) {
                    i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!h.isXML(e)) try {
                        
if (r || !d.match.PSEUDO.test(i) && !/!=/.test(i)) {
                            var s = t.call(e, i);
                            if (s || !n || e.document && e.document.nodeType !== 11) return s;
                        }
                    } catch (o) {}
                    return h(i, null, null, [ e ]).length > 0;
                };
            }
        }(), function() {
            var e = _.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
                e.lastChild.className = "e";
                if (e.getElementsByClassName("e").length === 1) return;
                d.order.splice(1, 0, "CLASS"), d.find.CLASS = function(e, t, n) {
                    if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1]);
                }, e = null;
            }
        }(), _.documentElement.contains ? h.contains = 
function(e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0);
        } : _.documentElement.compareDocumentPosition ? h.contains = function(e, t) {
            return !!(e.compareDocumentPosition(t) & 16);
        } : h.contains = function() {
            return !1;
        }, h.isXML = function(e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1;
        };
        var S = function(e, t, n) {
            var r, i = [], s = "", o = t.nodeType ? [ t ] : t;
            while (r = d.match.PSEUDO.exec(e)) s += r[0], e = e.replace(d.match.PSEUDO, "");
            e = d.relative[e] ? e + "*" : e;
            for (var u = 0, a = o.length; u < a; u++) h(e, o[u], i, n);
            return h.filter(s, i);
        };
        h.attr = H.attr, h.selectors.attrMap = {}, H.find = h, H.expr = h.selectors, H.expr[":"] = H.expr.filters, H.unique = h.uniqueSort, H.text = h.getText, H.isXMLDoc = h.isXML, H.contains = 
h.contains;
    }();
    var ut = /Until$/, at = /^(?:parents|prevUntil|prevAll)/, ft = /,/, lt = /^.[^:#\[\.,]*$/, ct = Array.prototype.slice, ht = H.expr.match.globalPOS, pt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    H.fn.extend({
        find: function(e) {
            var t = this, n, r;
            if (typeof e != "string") return H(e).filter(function() {
                for (n = 0, r = t.length; n < r; n++) if (H.contains(t[n], this)) return !0;
            });
            var i = this.pushStack("", "find", e), s, o, u;
            for (n = 0, r = this.length; n < r; n++) {
                s = i.length, H.find(e, this[n], i);
                if (n > 0) for (o = s; o < i.length; o++) for (u = 0; u < s; u++) if (i[u] === i[o]) {
                    i.splice(o--, 1);
                    break;
                }
            }
            return i;
        },
        has: function(e) {
            var t = H(e);
            return this.
filter(function() {
                for (var e = 0, n = t.length; e < n; e++) if (H.contains(this, t[e])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(T(this, e, !1), "not", e);
        },
        filter: function(e) {
            return this.pushStack(T(this, e, !0), "filter", e);
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? ht.test(e) ? H(e, this.context).index(this[0]) >= 0 : H.filter(e, this).length > 0 : this.filter(e).length > 0);
        },
        closest: function(e, t) {
            var n = [], r, i, s = this[0];
            if (H.isArray(e)) {
                var o = 1;
                while (s && s.ownerDocument && s !== t) {
                    for (r = 0; r < e.length; r++) H(s).is(e[r]) && n.push({
                        selector: e[r],
                        elem: s,
                        level: o
                    });
                    s = s.parentNode, o++;
                
}
                return n;
            }
            var u = ht.test(e) || typeof e != "string" ? H(e, t || this.context) : 0;
            for (r = 0, i = this.length; r < i; r++) {
                s = this[r];
                while (s) {
                    if (u ? u.index(s) > -1 : H.find.matchesSelector(s, e)) {
                        n.push(s);
                        break;
                    }
                    s = s.parentNode;
                    if (!s || !s.ownerDocument || s === t || s.nodeType === 11) break;
                }
            }
            return n = n.length > 1 ? H.unique(n) : n, this.pushStack(n, "closest", e);
        },
        index: function(e) {
            return e ? typeof e == "string" ? H.inArray(this[0], H(e)) : H.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
        },
        add: function(e, t) {
            var n = typeof e == "string" ? H(e, t) : H.makeArray(e && e.nodeType ? [ e ] : e), r = 
H.merge(this.get(), n);
            return this.pushStack(N(n[0]) || N(r[0]) ? r : H.unique(r));
        },
        andSelf: function() {
            return this.add(this.prevObject);
        }
    }), H.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
        },
        parents: function(e) {
            return H.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return H.dir(e, "parentNode", n);
        },
        next: function(e) {
            return H.nth(e, 2, "nextSibling");
        },
        prev: function(e) {
            return H.nth(e, 2, "previousSibling");
        },
        nextAll: function(e) {
            return H.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return H.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return H.dir(e, "nextSibling", n);
        },
        prevUntil: function(
e, t, n) {
            return H.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return H.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return H.sibling(e.firstChild);
        },
        contents: function(e) {
            return H.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : H.makeArray(e.childNodes);
        }
    }, function(e, t) {
        H.fn[e] = function(n, r) {
            var i = H.map(this, t, n);
            return ut.test(e) || (r = n), r && typeof r == "string" && (i = H.filter(r, i)), i = this.length > 1 && !pt[e] ? H.unique(i) : i, (this.length > 1 || ft.test(r)) && at.test(e) && (i = i.reverse()), this.pushStack(i, e, ct.call(arguments).join(","));
        };
    }), H.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? H.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : H.find.matches(e, t);
        
},
        dir: function(e, n, r) {
            var i = [], s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !H(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i;
        },
        nth: function(e, t, n, r) {
            t = t || 1;
            var i = 0;
            for (; e; e = e[n]) if (e.nodeType === 1 && ++i === t) break;
            return e;
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n;
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", vt = / jQuery\d+="(?:\d+|null)"/g, mt = /^\s+/, gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, yt = /<([\w:]+)/, bt = /<tbody/i, wt = /<|&#?\w+;/, Et = /<(?:script|style)/i, St = /<(?:script|object|embed|option|style)/i
, xt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"), Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /\/(java|ecma)script/i, Ct = /^\s*<!(?:\[CDATA\[|\-\-)/, kt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        area: [ 1, "<map>", "</map>" ],
        _default: [ 0, "", "" ]
    }, Lt = x(_);
    kt.optgroup = kt.option, kt.tbody = kt.tfoot = kt.colgroup = kt.caption = kt.thead, kt.th = kt.td, H.support.htmlSerialize || (kt._default = [ 1, "div<div>", "</div>" ]), H.fn.extend({
        text: function(e) {
            return H.access(this, function(e) {
                return e === t ? H.text(this) : this.empty().append((this[0] && this[0].ownerDocument || _).createTextNode
(e));
            }, null, e, arguments.length);
        },
        wrapAll: function(e) {
            if (H.isFunction(e)) return this.each(function(t) {
                H(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = H(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return H.isFunction(e) ? this.each(function(t) {
                H(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = H(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = 
H.isFunction(e);
            return this.each(function(n) {
                H(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                H.nodeName(this, "body") || H(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                this.nodeType === 1 && this.appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                this.nodeType === 1 && this.insertBefore(e, this.firstChild);
            });
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this);
            });
            if (arguments.length) {
                var e = H.clean(arguments);
                
return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments);
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling);
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, H.clean(arguments)), e;
            }
        },
        remove: function(e, t) {
            for (var n = 0, r; (r = this[n]) != null; n++) if (!e || H.filter(e, [ r ]).length) !t && r.nodeType === 1 && (H.cleanData(r.getElementsByTagName("*")), H.cleanData([ r ])), r.parentNode && r.parentNode.removeChild(r);
            return this;
        },
        empty: function() {
            for (var e = 0, t; (t = this[e]) != null; e++) {
                t.nodeType === 1 && H.cleanData(t.getElementsByTagName("*"));
                while (t.firstChild
) t.removeChild(t.firstChild);
            }
            return this;
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                return H.clone(this, e, t);
            });
        },
        html: function(e) {
            return H.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : null;
                if (typeof e == "string" && !Et.test(e) && (H.support.leadingWhitespace || !mt.test(e)) && !kt[(yt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(gt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (H.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0;
                    } catch (s) {}
                }
                n && this.empty().append
(e);
            }, null, e, arguments.length);
        },
        replaceWith: function(e) {
            return this[0] && this[0].parentNode ? H.isFunction(e) ? this.each(function(t) {
                var n = H(this), r = n.html();
                n.replaceWith(e.call(this, t, r));
            }) : (typeof e != "string" && (e = H(e).detach()), this.each(function() {
                var t = this.nextSibling, n = this.parentNode;
                H(this).remove(), t ? H(t).before(e) : H(n).append(e);
            })) : this.length ? this.pushStack(H(H.isFunction(e) ? e() : e), "replaceWith", e) : this;
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, n, r) {
            var i, s, o, u, a = e[0], f = [];
            if (!H.support.checkClone && arguments.length === 3 && typeof a == "string" && Tt.test(a)) return this.each(function() {
                H(this).domManip(e, n, r, !0);
            });
            if (H.isFunction
(a)) return this.each(function(i) {
                var s = H(this);
                e[0] = a.call(this, i, n ? s.html() : t), s.domManip(e, n, r);
            });
            if (this[0]) {
                u = a && a.parentNode, H.support.parentNode && u && u.nodeType === 11 && u.childNodes.length === this.length ? i = {
                    fragment: u
                } : i = H.buildFragment(e, this, f), o = i.fragment, o.childNodes.length === 1 ? s = o = o.firstChild : s = o.firstChild;
                if (s) {
                    n = n && H.nodeName(s, "tr");
                    for (var l = 0, c = this.length, h = c - 1; l < c; l++) r.call(n ? S(this[l], s) : this[l], i.cacheable || c > 1 && l < h ? H.clone(o, !0, !0) : o);
                }
                f.length && H.each(f, function(e, t) {
                    t.src ? H.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        
dataType: "script"
                    }) : H.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ct, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t);
                });
            }
            return this;
        }
    }), H.buildFragment = function(e, t, n) {
        var r, i, s, o, u = e[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = _), e.length === 1 && typeof u == "string" && u.length < 512 && o === _ && u.charAt(0) === "<" && !St.test(u) && (H.support.checkClone || !Tt.test(u)) && (H.support.html5Clone || !xt.test(u)) && (i = !0, s = H.fragments[u], s && s !== 1 && (r = s)), r || (r = o.createDocumentFragment(), H.clean(e, o, r, n)), i && (H.fragments[u] = s ? r : 1), {
            fragment: r,
            cacheable: i
        };
    }, H.fragments = {}, H.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    
}, function(e, t) {
        H.fn[e] = function(n) {
            var r = [], i = H(n), s = this.length === 1 && this[0].parentNode;
            if (s && s.nodeType === 11 && s.childNodes.length === 1 && i.length === 1) return i[t](this[0]), this;
            for (var o = 0, u = i.length; o < u; o++) {
                var a = (o > 0 ? this.clone(!0) : this).get();
                H(i[o])[t](a), r = r.concat(a);
            }
            return this.pushStack(r, e, i.selector);
        };
    }), H.extend({
        clone: function(e, t, n) {
            var r, i, s, o = H.support.html5Clone || H.isXMLDoc(e) || !xt.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : m(e);
            if ((!H.support.noCloneEvent || !H.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !H.isXMLDoc(e)) {
                w(e, o), r = b(e), i = b(o);
                for (s = 0; r[s]; ++s) i[s] && w(r[s], i[s]);
            }
            if (t) {
                E(e, o);
                if (n) {
                    
r = b(e), i = b(o);
                    for (s = 0; r[s]; ++s) E(r[s], i[s]);
                }
            }
            return r = i = null, o;
        },
        clean: function(e, t, n, r) {
            var i, s, o, u = [];
            t = t || _, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || _);
            for (var a = 0, f; (f = e[a]) != null; a++) {
                typeof f == "number" && (f += "");
                if (!f) continue;
                if (typeof f == "string") if (!wt.test(f)) f = t.createTextNode(f); else {
                    f = f.replace(gt, "<$1></$2>");
                    var l = (yt.exec(f) || [ "", "" ])[1].toLowerCase(), c = kt[l] || kt._default, h = c[0], p = t.createElement("div"), d = Lt.childNodes, v;
                    t === _ ? Lt.appendChild(p) : x(t).appendChild(p), p.innerHTML = c[1] + f + c[2];
                    while (h--) p = p.lastChild;
                    if (!H.support.tbody) {
                        
var m = bt.test(f), y = l === "table" && !m ? p.firstChild && p.firstChild.childNodes : c[1] === "<table>" && !m ? p.childNodes : [];
                        for (o = y.length - 1; o >= 0; --o) H.nodeName(y[o], "tbody") && !y[o].childNodes.length && y[o].parentNode.removeChild(y[o]);
                    }
                    !H.support.leadingWhitespace && mt.test(f) && p.insertBefore(t.createTextNode(mt.exec(f)[0]), p.firstChild), f = p.childNodes, p && (p.parentNode.removeChild(p), d.length > 0 && (v = d[d.length - 1], v && v.parentNode && v.parentNode.removeChild(v)));
                }
                var b;
                if (!H.support.appendChecked) if (f[0] && typeof (b = f.length) == "number") for (o = 0; o < b; o++) g(f[o]); else g(f);
                f.nodeType ? u.push(f) : u = H.merge(u, f);
            }
            if (n) {
                i = function(e) {
                    return !e.type || Nt.test(e.type);
                };
                for (a = 0; u[a]; a++) {
                    
s = u[a];
                    if (r && H.nodeName(s, "script") && (!s.type || Nt.test(s.type))) r.push(s.parentNode ? s.parentNode.removeChild(s) : s); else {
                        if (s.nodeType === 1) {
                            var w = H.grep(s.getElementsByTagName("script"), i);
                            u.splice.apply(u, [ a + 1, 0 ].concat(w));
                        }
                        n.appendChild(s);
                    }
                }
            }
            return u;
        },
        cleanData: function(e) {
            var t, n, r = H.cache, i = H.event.special, s = H.support.deleteExpando;
            for (var o = 0, u; (u = e[o]) != null; o++) {
                if (u.nodeName && H.noData[u.nodeName.toLowerCase()]) continue;
                n = u[H.expando];
                if (n) {
                    t = r[n];
                    if (t && t.events) {
                        for (var a in t.events) i[a] ? H.event.remove(u, a) : H.removeEvent(u, a, t.handle
);
                        t.handle && (t.handle.elem = null);
                    }
                    s ? delete u[H.expando] : u.removeAttribute && u.removeAttribute(H.expando), delete r[n];
                }
            }
        }
    });
    var At = /alpha\([^)]*\)/i, Ot = /opacity=([^)]*)/, Mt = /([A-Z]|^ms)/g, _t = /^[\-+]?(?:\d*\.)?\d+$/i, Dt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Pt = /^([\-+])=([\-+.\de]+)/, Ht = /^margin/, Bt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, jt = [ "Top", "Right", "Bottom", "Left" ], Ft, It, qt;
    H.fn.css = function(e, n) {
        return H.access(this, function(e, n, r) {
            return r !== t ? H.style(e, n, r) : H.css(e, n);
        }, e, n, arguments.length > 1);
    }, H.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ft(e, "opacity");
                        return n === "" ? "1" 
: n;
                    }
                    return e.style.opacity;
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": H.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!!e && e.nodeType !== 3 && e.nodeType !== 8 && !!e.style) {
                var s, o, u = H.camelCase(n), a = e.style, f = H.cssHooks[u];
                n = H.cssProps[u] || u;
                if (r === t) return f && "get" in f && (s = f.get(e, !1, i)) !== t ? s : a[n];
                o = typeof r, o === "string" && (s = Pt.exec(r)) && (r = +(s[1] + 1) * +s[2] + parseFloat(H.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r)) return;
                o === "number" && !
H.cssNumber[u] && (r += "px");
                if (!f || !("set" in f) || (r = f.set(e, r)) !== t) try {
                    a[n] = r;
                } catch (l) {}
            }
        },
        css: function(e, n, r) {
            var i, s;
            n = H.camelCase(n), s = H.cssHooks[n], n = H.cssProps[n] || n, n === "cssFloat" && (n = "float");
            if (s && "get" in s && (i = s.get(e, !0, r)) !== t) return i;
            if (Ft) return Ft(e, n);
        },
        swap: function(e, t, n) {
            var r = {}, i, s;
            for (s in t) r[s] = e.style[s], e.style[s] = t[s];
            i = n.call(e);
            for (s in t) e.style[s] = r[s];
            return i;
        }
    }), H.curCSS = H.css, _.defaultView && _.defaultView.getComputedStyle && (It = function(e, t) {
        var n, r, i, s, o = e.style;
        return t = t.replace(Mt, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), 
n === "" && !H.contains(e.ownerDocument.documentElement, e) && (n = H.style(e, t))), !H.support.pixelMargin && i && Ht.test(t) && Dt.test(n) && (s = o.width, o.width = n, n = i.width, o.width = s), n;
    }), _.documentElement.currentStyle && (qt = function(e, t) {
        var n, r, i, s = e.currentStyle && e.currentStyle[t], o = e.style;
        return s == null && o && (i = o[t]) && (s = i), Dt.test(s) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em" : s, s = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), s === "" ? "auto" : s;
    }), Ft = It || qt, H.each([ "height", "width" ], function(e, t) {
        H.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth !== 0 ? v(e, t, r) : H.swap(e, Bt, function() {
                    return v(e, t, r);
                });
            },
            set: function(e, t) {
                return _t
.test(t) ? t + "px" : t;
            }
        };
    }), H.support.opacity || (H.cssHooks.opacity = {
        get: function(e, t) {
            return Ot.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = H.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && H.trim(s.replace(At, "")) === "") {
                n.removeAttribute("filter");
                if (r && !r.filter) return;
            }
            n.filter = At.test(s) ? s.replace(At, i) : s + " " + i;
        }
    }), H(function() {
        H.support.reliableMarginRight || (H.cssHooks.marginRight = {
            get: function(e, t) {
                return H.swap(e, {
                    display: "inline-block"
                }, function() {
                    return t ? 
Ft(e, "margin-right") : e.style.marginRight;
                });
            }
        });
    }), H.expr && H.expr.filters && (H.expr.filters.hidden = function(e) {
        var t = e.offsetWidth, n = e.offsetHeight;
        return t === 0 && n === 0 || !H.support.reliableHiddenOffsets && (e.style && e.style.display || H.css(e, "display")) === "none";
    }, H.expr.filters.visible = function(e) {
        return !H.expr.filters.hidden(e);
    }), H.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        H.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [ n ], s = {};
                for (r = 0; r < 4; r++) s[e + jt[r] + t] = i[r] || i[r - 2] || i[0];
                return s;
            }
        };
    });
    var Rt = /%20/g, Ut = /\[\]$/, zt = /\r?\n/g, Wt = /#.*$/, Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Vt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
, $t = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Jt = /^(?:GET|HEAD)$/, Kt = /^\/\//, Qt = /\?/, Gt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Yt = /^(?:select|textarea)/i, Zt = /\s+/, en = /([?&])_=[^&]*/, tn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, nn = H.fn.load, rn = {}, sn = {}, on, un, an = [ "*/" ] + [ "*" ];
    try {
        on = P.href;
    } catch (fn) {
        on = _.createElement("a"), on.href = "", on = on.href;
    }
    un = tn.exec(on.toLowerCase()) || [], H.fn.extend({
        load: function(e, n, r) {
            if (typeof e != "string" && nn) return nn.apply(this, arguments);
            if (!this.length) return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var s = e.slice(i, e.length);
                e = e.slice(0, i);
            }
            var o = "GET";
            n && (H.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = H.param(n, H.ajaxSettings.traditional), o = "POST"
));
            var u = this;
            return H.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function(e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function(e) {
                        n = e;
                    }), u.html(s ? H("<div>").append(n.replace(Gt, "")).find(s) : n)), r && u.each(r, [ n, t, e ]);
                }
            }), this;
        },
        serialize: function() {
            return H.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? H.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Yt.test(this.nodeName) || Vt.test(this.type));
            }).map(function(e, t) {
                var n = H(this).val();
                return n == null ? null 
: H.isArray(n) ? H.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(zt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(zt, "\r\n")
                };
            }).get();
        }
    }), H.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        H.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), H.each([ "get", "post" ], function(e, n) {
        H[n] = function(e, r, i, s) {
            return H.isFunction(r) && (s = s || i, i = r, r = t), H.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            });
        };
    }), H.extend({
        getScript: function(e, n) {
            return H.get(e, t, n, "script");
        },
        getJSON: function(e, t, n) {
            
return H.get(e, t, n, "json");
        },
        ajaxSetup: function(e, t) {
            return t ? h(e, H.ajaxSettings) : (t = e, e = H.ajaxSettings), h(e, t), e;
        },
        ajaxSettings: {
            url: on,
            isLocal: $t.test(un[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": an
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html"
: !0,
                "text json": H.parseJSON,
                "text xml": H.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: d(rn),
        ajaxTransport: d(sn),
        ajax: function(e, n) {
            function r(e, n, r, p) {
                if (E !== 2) {
                    E = 2, b && clearTimeout(b), y = t, m = p || "", T.readyState = e > 0 ? 4 : 0;
                    var d, v, g, w = n, x = r ? l(i, T, r) : t, N, C;
                    if (e >= 200 && e < 300 || e === 304) {
                        if (i.ifModified) {
                            if (N = T.getResponseHeader("Last-Modified")) H.lastModified[h] = N;
                            if (C = T.getResponseHeader("Etag")) H.etag[h] = C;
                        }
                        if (e === 304) w = "notmodified", d = !0; else try {
                            v = f(i, x), w = "success", d = !0;
                        
} catch (k) {
                            w = "parsererror", g = k;
                        }
                    } else {
                        g = w;
                        if (!w || e) w = "error", e < 0 && (e = 0);
                    }
                    T.status = e, T.statusText = "" + (n || w), d ? u.resolveWith(s, [ v, w, T ]) : u.rejectWith(s, [ T, w, g ]), T.statusCode(c), c = t, S && o.trigger("ajax" + (d ? "Success" : "Error"), [ T, i, d ? v : g ]), a.fireWith(s, [ T, w ]), S && (o.trigger("ajaxComplete", [ T, i ]), --H.active || H.event.trigger("ajaxStop"));
                }
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var i = H.ajaxSetup({}, n), s = i.context || i, o = s !== i && (s.nodeType || s instanceof H) ? H(s) : H.event, u = H.Deferred(), a = H.Callbacks("once memory"), c = i.statusCode || {}, h, d = {}, v = {}, m, g, y, b, w, E = 0, S, x, T = {
                readyState: 0,
                setRequestHeader: function(
e, t) {
                    if (!E) {
                        var n = e.toLowerCase();
                        e = v[n] = v[n] || e, d[e] = t;
                    }
                    return this;
                },
                getAllResponseHeaders: function() {
                    return E === 2 ? m : null;
                },
                getResponseHeader: function(e) {
                    var n;
                    if (E === 2) {
                        if (!g) {
                            g = {};
                            while (n = Xt.exec(m)) g[n[1].toLowerCase()] = n[2];
                        }
                        n = g[e.toLowerCase()];
                    }
                    return n === t ? null : n;
                },
                overrideMimeType: function(e) {
                    return E || (i.mimeType = e), this;
                },
                abort: function(e) {
                    return e = e || "abort", y && y.abort(e), r(0, e), this;
                
}
            };
            u.promise(T), T.success = T.done, T.error = T.fail, T.complete = a.add, T.statusCode = function(e) {
                if (e) {
                    var t;
                    if (E < 2) for (t in e) c[t] = [ c[t], e[t] ]; else t = e[T.status], T.then(t, t);
                }
                return this;
            }, i.url = ((e || i.url) + "").replace(Wt, "").replace(Kt, un[1] + "//"), i.dataTypes = H.trim(i.dataType || "*").toLowerCase().split(Zt), i.crossDomain == null && (w = tn.exec(i.url.toLowerCase()), i.crossDomain = !(!w || w[1] == un[1] && w[2] == un[2] && (w[3] || (w[1] === "http:" ? 80 : 443)) == (un[3] || (un[1] === "http:" ? 80 : 443)))), i.data && i.processData && typeof i.data != "string" && (i.data = H.param(i.data, i.traditional)), p(rn, i, n, T);
            if (E === 2) return !1;
            S = i.global, i.type = i.type.toUpperCase(), i.hasContent = !Jt.test(i.type), S && H.active++ === 0 && H.event.trigger("ajaxStart");
            if (!
i.hasContent) {
                i.data && (i.url += (Qt.test(i.url) ? "&" : "?") + i.data, delete i.data), h = i.url;
                if (i.cache === !1) {
                    var N = H.now(), C = i.url.replace(en, "$1_=" + N);
                    i.url = C + (C === i.url ? (Qt.test(i.url) ? "&" : "?") + "_=" + N : "");
                }
            }
            (i.data && i.hasContent && i.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", i.contentType), i.ifModified && (h = h || i.url, H.lastModified[h] && T.setRequestHeader("If-Modified-Since", H.lastModified[h]), H.etag[h] && T.setRequestHeader("If-None-Match", H.etag[h])), T.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", " + an + "; q=0.01" : "") : i.accepts["*"]);
            for (x in i.headers) T.setRequestHeader(x, i.headers[x]);
            if (!i.beforeSend || i.beforeSend.call(s, T, i) !== !1 && E !== 2) {
                
for (x in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[x](i[x]);
                y = p(sn, i, n, T);
                if (!y) r(-1, "No Transport"); else {
                    T.readyState = 1, S && o.trigger("ajaxSend", [ T, i ]), i.async && i.timeout > 0 && (b = setTimeout(function() {
                        T.abort("timeout");
                    }, i.timeout));
                    try {
                        E = 1, y.send(d, r);
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        r(-1, k);
                    }
                }
                return T;
            }
            return T.abort(), !1;
        },
        param: function(e, n) {
            var r = [], i = function(e, t) {
                t = H.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
            };
            n === t && (n = H.ajaxSettings.traditional
);
            if (H.isArray(e) || e.jquery && !H.isPlainObject(e)) H.each(e, function() {
                i(this.name, this.value);
            }); else for (var s in e) c(s, e[s], n, i);
            return r.join("&").replace(Rt, "+");
        }
    }), H.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var ln = H.now(), cn = /(\=)\?(&|$)|\?\?/i;
    H.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return H.expando + "_" + ln++;
        }
    }), H.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i = typeof t.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (cn.test(t.url) || i && cn.test(t.data))) {
            var s, o = t.jsonpCallback = H.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u = e[o], a = t.url, f = t.data, l = "$1" + o + "$2";
            return t.jsonp !== !1 && (a = a.replace
(cn, l), t.url === a && (i && (f = f.replace(cn, l)), t.data === f && (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + o))), t.url = a, t.data = f, e[o] = function(e) {
                s = [ e ];
            }, r.always(function() {
                e[o] = u, s && H.isFunction(u) && e[o](s[0]);
            }), t.converters["script json"] = function() {
                return s || H.error(o + " was not called"), s[0];
            }, t.dataTypes[0] = "json", "script";
        }
    }), H.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return H.globalEval(e), e;
            }
        }
    }), H.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), H.ajaxTransport
("script", function(e) {
        if (e.crossDomain) {
            var n, r = _.head || _.getElementsByTagName("head")[0] || _.documentElement;
            return {
                send: function(i, s) {
                    n = _.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || s(200, "success");
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(0, 1);
                }
            };
        }
    });
    var hn = e.ActiveXObject ? function() {
        for (var e in dn) dn[e](0, 1);
    } : !1, pn = 0, dn;
    H.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && a() || u();
    
} : a, function(e) {
        H.extend(H.support, {
            ajax: !!e,
            cors: !!e && "withCredentials" in e
        });
    }(H.ajaxSettings.xhr()), H.support.ajax && H.ajaxTransport(function(n) {
        if (!n.crossDomain || H.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o = n.xhr(), u, a;
                    n.username ? o.open(n.type, n.url, n.async, n.username, n.password) : o.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (a in n.xhrFields) o[a] = n.xhrFields[a];
                    n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in i) o.setRequestHeader(a, i[a]);
                    } catch (f) {}
                    o.send(n.hasContent && n.data || null), r = function(e, i) {
                        var a, 
f, l, c, h;
                        try {
                            if (r && (i || o.readyState === 4)) {
                                r = t, u && (o.onreadystatechange = H.noop, hn && delete dn[u]);
                                if (i) o.readyState !== 4 && o.abort(); else {
                                    a = o.status, l = o.getAllResponseHeaders(), c = {}, h = o.responseXML, h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = o.responseText;
                                    } catch (e) {}
                                    try {
                                        f = o.statusText;
                                    } catch (p) {
                                        f = "";
                                    }
                                    !a && n.isLocal && !n.crossDomain ? a = c.text ? 200 : 404 : a === 1223 && (a = 204);
                                }
                            
}
                        } catch (d) {
                            i || s(-1, d);
                        }
                        c && s(a, f, c, l);
                    }, !n.async || o.readyState === 4 ? r() : (u = ++pn, hn && (dn || (dn = {}, H(e).unload(hn)), dn[u] = r), o.onreadystatechange = r);
                },
                abort: function() {
                    r && r(0, 1);
                }
            };
        }
    });
    var vn = {}, mn, gn, yn = /^(?:toggle|show|hide)$/, bn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, wn, En = [ [ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ], [ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ], [ "opacity" ] ], Sn;
    H.fn.extend({
        show: function(e, t, n) {
            var s, o;
            if (e || e === 0) return this.animate(i("show", 3), e, t, n);
            for (var u = 0, a = this.length; u < a; u++) s = this[u], s.style && (o = s.style.display, !H._data(s, "olddisplay") && 
o === "none" && (o = s.style.display = ""), (o === "" && H.css(s, "display") === "none" || !H.contains(s.ownerDocument.documentElement, s)) && H._data(s, "olddisplay", r(s.nodeName)));
            for (u = 0; u < a; u++) {
                s = this[u];
                if (s.style) {
                    o = s.style.display;
                    if (o === "" || o === "none") s.style.display = H._data(s, "olddisplay") || "";
                }
            }
            return this;
        },
        hide: function(e, t, n) {
            if (e || e === 0) return this.animate(i("hide", 3), e, t, n);
            var r, s, o = 0, u = this.length;
            for (; o < u; o++) r = this[o], r.style && (s = H.css(r, "display"), s !== "none" && !H._data(r, "olddisplay") && H._data(r, "olddisplay", s));
            for (o = 0; o < u; o++) this[o].style && (this[o].style.display = "none");
            return this;
        },
        _toggle: H.fn.toggle,
        toggle: function(e, t, n) {
            
var r = typeof e == "boolean";
            return H.isFunction(e) && H.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function() {
                var t = r ? e : H(this).is(":hidden");
                H(this)[t ? "show" : "hide"]();
            }) : this.animate(i("toggle", 3), e, t, n), this;
        },
        fadeTo: function(e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, i) {
            function s() {
                o.queue === !1 && H._mark(this);
                var t = H.extend({}, o), n = this.nodeType === 1, i = n && H(this).is(":hidden"), s, u, a, f, l, c, h, p, d, v, m;
                t.animatedProperties = {};
                for (a in e) {
                    s = H.camelCase(a), a !== s && (e[s] = e[a], delete e[a]);
                    if ((l = H.cssHooks[s]) && "expand" in l) {
                        
c = l.expand(e[s]), delete e[s];
                        for (a in c) a in e || (e[a] = c[a]);
                    }
                }
                for (s in e) {
                    u = e[s], H.isArray(u) ? (t.animatedProperties[s] = u[1], u = e[s] = u[0]) : t.animatedProperties[s] = t.specialEasing && t.specialEasing[s] || t.easing || "swing";
                    if (u === "hide" && i || u === "show" && !i) return t.complete.call(this);
                    n && (s === "height" || s === "width") && (t.overflow = [ this.style.overflow, this.style.overflowX, this.style.overflowY ], H.css(this, "display") === "inline" && H.css(this, "float") === "none" && (!H.support.inlineBlockNeedsLayout || r(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1));
                }
                t.overflow != null && (this.style.overflow = "hidden");
                for (a in e) f = new H.fx(this, t, a), u = e[a], yn.test(u) ? (m = H._data(this, "toggle" + a) || (
u === "toggle" ? i ? "show" : "hide" : 0), m ? (H._data(this, "toggle" + a, m === "show" ? "hide" : "show"), f[m]()) : f[u]()) : (h = bn.exec(u), p = f.cur(), h ? (d = parseFloat(h[2]), v = h[3] || (H.cssNumber[a] ? "" : "px"), v !== "px" && (H.style(this, a, (d || 1) + v), p = (d || 1) / f.cur() * p, H.style(this, a, p + v)), h[1] && (d = (h[1] === "-=" ? -1 : 1) * d + p), f.custom(p, d, v)) : f.custom(p, u, ""));
                return !0;
            }
            var o = H.speed(t, n, i);
            return H.isEmptyObject(e) ? this.each(o.complete, [ !1 ]) : (e = H.extend({}, e), o.queue === !1 ? this.each(s) : this.queue(o.queue, s));
        },
        stop: function(e, n, r) {
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                function t(e, t, n) {
                    var i = t[n];
                    H.removeData(e, n, !0), i.stop(r);
                }
                var n, i = !1
, s = H.timers, o = H._data(this);
                r || H._unmark(!0, this);
                if (e == null) for (n in o) o[n] && o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n); else o[n = e + ".run"] && o[n].stop && t(this, o, n);
                for (n = s.length; n--; ) s[n].elem === this && (e == null || s[n].queue === e) && (r ? s[n](!0) : s[n].saveState(), i = !0, s.splice(n, 1));
                (!r || !i) && H.dequeue(this, e);
            });
        }
    }), H.each({
        slideDown: i("show", 1),
        slideUp: i("hide", 1),
        slideToggle: i("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        H.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), H.extend({
        speed: function(e, t, n) {
            var r = e && typeof e == "object" ? H.extend
({}, e) : {
                complete: n || !n && t || H.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !H.isFunction(t) && t
            };
            r.duration = H.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in H.fx.speeds ? H.fx.speeds[r.duration] : H.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function(e) {
                H.isFunction(r.old) && r.old.call(this), r.queue ? H.dequeue(this, r.queue) : e !== !1 && H._unmark(this);
            }, r;
        },
        easing: {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return -Math.cos(e * Math.PI) / 2 + .5;
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {};
        }
    }), H.fx.prototype = 
{
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (H.fx.step[this.prop] || H.fx.step._default)(this);
        },
        cur: function() {
            if (this.elem[this.prop] == null || !!this.elem.style && this.elem.style[this.prop] != null) {
                var e, t = H.css(this.elem, this.prop);
                return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e;
            }
            return this.elem[this.prop];
        },
        custom: function(e, n, r) {
            function i(e) {
                return s.step(e);
            }
            var s = this, u = H.fx;
            this.startTime = Sn || o(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (H.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function() {
                H._data(s.elem, "fxshow" + s.prop) === t && (s.options.hide ? H._data
(s.elem, "fxshow" + s.prop, s.start) : s.options.show && H._data(s.elem, "fxshow" + s.prop, s.end));
            }, i() && H.timers.push(i) && !wn && (wn = setInterval(u.tick, u.interval));
        },
        show: function() {
            var e = H._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || H.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), H(this.elem).show();
        },
        hide: function() {
            this.options.orig[this.prop] = H._data(this.elem, "fxshow" + this.prop) || H.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0);
        },
        step: function(e) {
            var t, n, r, i = Sn || o(), s = !0, u = this.elem, a = this.options;
            if (e || i >= a.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), a.
animatedProperties[this.prop] = !0;
                for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (s = !1);
                if (s) {
                    a.overflow != null && !H.support.shrinkWrapBlocks && H.each([ "", "X", "Y" ], function(e, t) {
                        u.style["overflow" + t] = a.overflow[e];
                    }), a.hide && H(u).hide();
                    if (a.hide || a.show) for (t in a.animatedProperties) H.style(u, t, a.orig[t]), H.removeData(u, "fxshow" + t, !0), H.removeData(u, "toggle" + t, !0);
                    r = a.complete, r && (a.complete = !1, r.call(u));
                }
                return !1;
            }
            return a.duration == Infinity ? this.now = i : (n = i - this.startTime, this.state = n / a.duration, this.pos = H.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0;
        }
    }, H.extend(H.fx, {
        
tick: function() {
            var e, t = H.timers, n = 0;
            for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || H.fx.stop();
        },
        interval: 13,
        stop: function() {
            clearInterval(wn), wn = null;
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                H.style(e.elem, "opacity", e.now);
            },
            _default: function(e) {
                e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now;
            }
        }
    }), H.each(En.concat.apply([], En), function(e, t) {
        t.indexOf("margin") && (H.fx.step[t] = function(e) {
            H.style(e.elem, t, Math.max(0, e.now) + e.unit);
        });
    }), H.expr && H.expr.filters && (H.expr.filters.animated = function(e) {
        return H.grep(H.timers, 
function(t) {
            return e === t.elem;
        }).length;
    });
    var xn, Tn = /^t(?:able|d|h)$/i, Nn = /^(?:body|html)$/i;
    "getBoundingClientRect" in _.documentElement ? xn = function(e, t, r, i) {
        try {
            i = e.getBoundingClientRect();
        } catch (s) {}
        if (!i || !H.contains(r, e)) return i ? {
            top: i.top,
            left: i.left
        } : {
            top: 0,
            left: 0
        };
        var o = t.body, u = n(t), a = r.clientTop || o.clientTop || 0, f = r.clientLeft || o.clientLeft || 0, l = u.pageYOffset || H.support.boxModel && r.scrollTop || o.scrollTop, c = u.pageXOffset || H.support.boxModel && r.scrollLeft || o.scrollLeft, h = i.top + l - a, p = i.left + c - f;
        return {
            top: h,
            left: p
        };
    } : xn = function(e, t, n) {
        var r, i = e.offsetParent, s = e, o = t.body, u = t.defaultView, a = u ? u.getComputedStyle(e, null) : e.currentStyle, f = e.offsetTop, l = 
e.offsetLeft;
        while ((e = e.parentNode) && e !== o && e !== n) {
            if (H.support.fixedPosition && a.position === "fixed") break;
            r = u ? u.getComputedStyle(e, null) : e.currentStyle, f -= e.scrollTop, l -= e.scrollLeft, e === i && (f += e.offsetTop, l += e.offsetLeft, H.support.doesNotAddBorder && (!H.support.doesAddBorderForTableAndCells || !Tn.test(e.nodeName)) && (f += parseFloat(r.borderTopWidth) || 0, l += parseFloat(r.borderLeftWidth) || 0), s = i, i = e.offsetParent), H.support.subtractsBorderForOverflowNotVisible && r.overflow !== "visible" && (f += parseFloat(r.borderTopWidth) || 0, l += parseFloat(r.borderLeftWidth) || 0), a = r;
        }
        if (a.position === "relative" || a.position === "static") f += o.offsetTop, l += o.offsetLeft;
        return H.support.fixedPosition && a.position === "fixed" && (f += Math.max(n.scrollTop, o.scrollTop), l += Math.max(n.scrollLeft, o.scrollLeft)), {
            top: f,
            left: l
        };
    
}, H.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            H.offset.setOffset(this, e, t);
        });
        var n = this[0], r = n && n.ownerDocument;
        return r ? n === r.body ? H.offset.bodyOffset(n) : xn(n, r, r.documentElement) : null;
    }, H.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop, n = e.offsetLeft;
            return H.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(H.css(e, "marginTop")) || 0, n += parseFloat(H.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            };
        },
        setOffset: function(e, t, n) {
            var r = H.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = H(e), s = i.offset(), o = H.css(e, "top"), u = H.css(e, "left"), a = (r === "absolute" || r === "fixed") && H.inArray("auto", [ o, u ]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.
position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), H.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f);
        }
    }, H.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var e = this[0], t = this.offsetParent(), n = this.offset(), r = Nn.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(H.css(e, "marginTop")) || 0, n.left -= parseFloat(H.css(e, "marginLeft")) || 0, r.top += parseFloat(H.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(H.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || 
_.body;
                while (e && !Nn.test(e.nodeName) && H.css(e, "position") === "static") e = e.offsetParent;
                return e;
            });
        }
    }), H.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, r) {
        var i = /Y/.test(r);
        H.fn[e] = function(s) {
            return H.access(this, function(e, s, o) {
                var u = n(e);
                if (o === t) return u ? r in u ? u[r] : H.support.boxModel && u.document.documentElement[s] || u.document.body[s] : e[s];
                u ? u.scrollTo(i ? H(u).scrollLeft() : o, i ? o : H(u).scrollTop()) : e[s] = o;
            }, e, s, arguments.length, null);
        };
    }), H.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        var r = "client" + e, i = "scroll" + e, s = "offset" + e;
        H.fn["inner" + e] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(H.css(e, n, "padding"
)) : this[n]() : null;
        }, H.fn["outer" + e] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(H.css(t, n, e ? "margin" : "border")) : this[n]() : null;
        }, H.fn[n] = function(e) {
            return H.access(this, function(e, n, o) {
                var u, a, f, l;
                if (H.isWindow(e)) return u = e.document, a = u.documentElement[r], H.support.boxModel && a || u.body && u.body[r] || a;
                if (e.nodeType === 9) return u = e.documentElement, u[r] >= u[i] ? u[r] : Math.max(e.body[i], u[i], e.body[s], u[s]);
                if (o === t) return f = H.css(e, n), l = parseFloat(f), H.isNumeric(l) ? l : f;
                H(e).css(n, o);
            }, n, e, arguments.length, null);
        };
    }), e.jQuery = e.$ = H, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return H;
    });
})(window), function() {
    function C(e, t, n) {
        if (e === t) 
return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e._chain && (e = e._wrapped), t._chain && (t = t._wrapped);
        if (e.isEqual && S.isFunction(e.isEqual)) return e.isEqual(t);
        if (t.isEqual && S.isFunction(t.isEqual)) return t.isEqual(e);
        var r = a.call(e);
        if (r != a.call(t)) return !1;
        switch (r) {
          case "[object String]":
            return e == String(t);
          case "[object Number]":
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;
          case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var i = n.length;
        while (i--) if (n[i] == e) return !0;
        n.push(e);
        var s = 0
, o = !0;
        if (r == "[object Array]") {
            s = e.length, o = s == t.length;
            if (o) while (s--) if (!(o = s in e == s in t && C(e[s], t[s], n))) break;
        } else {
            if ("constructor" in e != "constructor" in t || e.constructor != t.constructor) return !1;
            for (var u in e) if (S.has(e, u)) {
                s++;
                if (!(o = S.has(t, u) && C(e[u], t[u], n))) break;
            }
            if (o) {
                for (u in t) if (S.has(t, u) && !(s--)) break;
                o = !s;
            }
        }
        return n.pop(), o;
    }
    var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, s = Function.prototype, o = r.slice, u = r.unshift, a = i.toString, f = i.hasOwnProperty, l = r.forEach, c = r.map, h = r.reduce, p = r.reduceRight, d = r.filter, v = r.every, m = r.some, g = r.indexOf, y = r.lastIndexOf, b = Array.isArray, w = Object.keys, E = s.bind, S = function(e) {
        return new P(
e);
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = S), exports._ = S) : e._ = S, S.VERSION = "1.3.3";
    var x = S.each = S.forEach = function(e, t, r) {
        if (e == null) return;
        if (l && e.forEach === l) e.forEach(t, r); else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++) if (i in e && t.call(r, e[i], i, e) === n) return;
        } else for (var o in e) if (S.has(e, o) && t.call(r, e[o], o, e) === n) return;
    };
    S.map = S.collect = function(e, t, n) {
        var r = [];
        return e == null ? r : c && e.map === c ? e.map(t, n) : (x(e, function(e, i, s) {
            r[r.length] = t.call(n, e, i, s);
        }), e.length === +e.length && (r.length = e.length), r);
    }, S.reduce = S.foldl = S.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (h && e.reduce === h) return r && (t = S.bind(t
, r)), i ? e.reduce(t, n) : e.reduce(t);
        x(e, function(e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0);
        });
        if (!i) throw new TypeError("Reduce of empty array with no initial value");
        return n;
    }, S.reduceRight = S.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduceRight === p) return r && (t = S.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = S.toArray(e).reverse();
        return r && !i && (t = S.bind(t, r)), i ? S.reduce(s, t, n, r) : S.reduce(s, t);
    }, S.find = S.detect = function(e, t, n) {
        var r;
        return T(e, function(e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0;
        }), r;
    }, S.filter = S.select = function(e, t, n) {
        var r = [];
        return e == null ? r : d && e.filter === d ? e.filter(t, n) : (x(e, function(e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = 
e);
        }), r);
    }, S.reject = function(e, t, n) {
        var r = [];
        return e == null ? r : (x(e, function(e, i, s) {
            t.call(n, e, i, s) || (r[r.length] = e);
        }), r);
    }, S.every = S.all = function(e, t, r) {
        var i = !0;
        return e == null ? i : v && e.every === v ? e.every(t, r) : (x(e, function(e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n;
        }), !!i);
    };
    var T = S.some = S.any = function(e, t, r) {
        t || (t = S.identity);
        var i = !1;
        return e == null ? i : m && e.some === m ? e.some(t, r) : (x(e, function(e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n;
        }), !!i);
    };
    S.include = S.contains = function(e, t) {
        var n = !1;
        return e == null ? n : g && e.indexOf === g ? e.indexOf(t) != -1 : (n = T(e, function(e) {
            return e === t;
        }), n);
    }, S.invoke = function(e, t) {
        var n = o.call(arguments, 2);
        
return S.map(e, function(e) {
            return (S.isFunction(t) ? t || e : e[t]).apply(e, n);
        });
    }, S.pluck = function(e, t) {
        return S.map(e, function(e) {
            return e[t];
        });
    }, S.max = function(e, t, n) {
        if (!t && S.isArray(e) && e[0] === +e[0]) return Math.max.apply(Math, e);
        if (!t && S.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity
        };
        return x(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            });
        }), r.value;
    }, S.min = function(e, t, n) {
        if (!t && S.isArray(e) && e[0] === +e[0]) return Math.min.apply(Math, e);
        if (!t && S.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity
        };
        return x(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && 
(r = {
                value: e,
                computed: o
            });
        }), r.value;
    }, S.shuffle = function(e) {
        var t = [], n;
        return x(e, function(e, r, i) {
            n = Math.floor(Math.random() * (r + 1)), t[r] = t[n], t[n] = e;
        }), t;
    }, S.sortBy = function(e, t, n) {
        var r = S.isFunction(t) ? t : function(e) {
            return e[t];
        };
        return S.pluck(S.map(e, function(e, t, i) {
            return {
                value: e,
                criteria: r.call(n, e, t, i)
            };
        }).sort(function(e, t) {
            var n = e.criteria, r = t.criteria;
            return n === void 0 ? 1 : r === void 0 ? -1 : n < r ? -1 : n > r ? 1 : 0;
        }), "value");
    }, S.groupBy = function(e, t) {
        var n = {}, r = S.isFunction(t) ? t : function(e) {
            return e[t];
        };
        return x(e, function(e, t) {
            var i = r(e, t);
            (n[i] || (n[i] = [])).push(e);
        
}), n;
    }, S.sortedIndex = function(e, t, n) {
        n || (n = S.identity);
        var r = 0, i = e.length;
        while (r < i) {
            var s = r + i >> 1;
            n(e[s]) < n(t) ? r = s + 1 : i = s;
        }
        return r;
    }, S.toArray = function(e) {
        return e ? S.isArray(e) ? o.call(e) : S.isArguments(e) ? o.call(e) : e.toArray && S.isFunction(e.toArray) ? e.toArray() : S.values(e) : [];
    }, S.size = function(e) {
        return S.isArray(e) ? e.length : S.keys(e).length;
    }, S.first = S.head = S.take = function(e, t, n) {
        return t != null && !n ? o.call(e, 0, t) : e[0];
    }, S.initial = function(e, t, n) {
        return o.call(e, 0, e.length - (t == null || n ? 1 : t));
    }, S.last = function(e, t, n) {
        return t != null && !n ? o.call(e, Math.max(e.length - t, 0)) : e[e.length - 1];
    }, S.rest = S.tail = function(e, t, n) {
        return o.call(e, t == null || n ? 1 : t);
    }, S.compact = function(e) {
        return S
.filter(e, function(e) {
            return !!e;
        });
    }, S.flatten = function(e, t) {
        return S.reduce(e, function(e, n) {
            return S.isArray(n) ? e.concat(t ? n : S.flatten(n)) : (e[e.length] = n, e);
        }, []);
    }, S.without = function(e) {
        return S.difference(e, o.call(arguments, 1));
    }, S.uniq = S.unique = function(e, t, n) {
        var r = n ? S.map(e, n) : e, i = [];
        return e.length < 3 && (t = !0), S.reduce(r, function(n, r, s) {
            if (t ? S.last(n) !== r || !n.length : !S.include(n, r)) n.push(r), i.push(e[s]);
            return n;
        }, []), i;
    }, S.union = function() {
        return S.uniq(S.flatten(arguments, !0));
    }, S.intersection = S.intersect = function(e) {
        var t = o.call(arguments, 1);
        return S.filter(S.uniq(e), function(e) {
            return S.every(t, function(t) {
                return S.indexOf(t, e) >= 0;
            });
        });
    }, S.difference = function(e) 
{
        var t = S.flatten(o.call(arguments, 1), !0);
        return S.filter(e, function(e) {
            return !S.include(t, e);
        });
    }, S.zip = function() {
        var e = o.call(arguments), t = S.max(S.pluck(e, "length")), n = new Array(t);
        for (var r = 0; r < t; r++) n[r] = S.pluck(e, "" + r);
        return n;
    }, S.indexOf = function(e, t, n) {
        if (e == null) return -1;
        var r, i;
        if (n) return r = S.sortedIndex(e, t), e[r] === t ? r : -1;
        if (g && e.indexOf === g) return e.indexOf(t);
        for (r = 0, i = e.length; r < i; r++) if (r in e && e[r] === t) return r;
        return -1;
    }, S.lastIndexOf = function(e, t) {
        if (e == null) return -1;
        if (y && e.lastIndexOf === y) return e.lastIndexOf(t);
        var n = e.length;
        while (n--) if (n in e && e[n] === t) return n;
        return -1;
    }, S.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1
;
        var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s;
    };
    var N = function() {};
    S.bind = function(t, n) {
        var r, i;
        if (t.bind === E && E) return E.apply(t, o.call(arguments, 1));
        if (!S.isFunction(t)) throw new TypeError;
        return i = o.call(arguments, 2), r = function() {
            if (this instanceof r) {
                N.prototype = t.prototype;
                var e = new N, s = t.apply(e, i.concat(o.call(arguments)));
                return Object(s) === s ? s : e;
            }
            return t.apply(n, i.concat(o.call(arguments)));
        };
    }, S.bindAll = function(e) {
        var t = o.call(arguments, 1);
        return t.length == 0 && (t = S.functions(e)), x(t, function(t) {
            e[t] = S.bind(e[t], e);
        }), e;
    }, S.memoize = function(e, t) {
        var n = {};
        return t || (t = S.identity), function() {
            
var r = t.apply(this, arguments);
            return S.has(n, r) ? n[r] : n[r] = e.apply(this, arguments);
        };
    }, S.delay = function(e, t) {
        var n = o.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n);
        }, t);
    }, S.defer = function(e) {
        return S.delay.apply(S, [ e, 1 ].concat(o.call(arguments, 1)));
    }, S.throttle = function(e, t) {
        var n, r, i, s, o, u, a = S.debounce(function() {
            o = s = !1;
        }, t);
        return function() {
            n = this, r = arguments;
            var f = function() {
                i = null, o && e.apply(n, r), a();
            };
            return i || (i = setTimeout(f, t)), s ? o = !0 : u = e.apply(n, r), a(), s = !0, u;
        };
    }, S.debounce = function(e, t, n) {
        var r;
        return function() {
            var i = this, s = arguments, o = function() {
                r = null, n || e.apply(i, s);
            };
            
n && !r && e.apply(i, s), clearTimeout(r), r = setTimeout(o, t);
        };
    }, S.once = function(e) {
        var t = !1, n;
        return function() {
            return t ? n : (t = !0, n = e.apply(this, arguments));
        };
    }, S.wrap = function(e, t) {
        return function() {
            var n = [ e ].concat(o.call(arguments, 0));
            return t.apply(this, n);
        };
    }, S.compose = function() {
        var e = arguments;
        return function() {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [ e[n].apply(this, t) ];
            return t[0];
        };
    }, S.after = function(e, t) {
        return e <= 0 ? t() : function() {
            if (--e < 1) return t.apply(this, arguments);
        };
    }, S.keys = w || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) S.has(e, n) && (t[t.length] = n);
        return t;
    }, S.values = function(
e) {
        return S.map(e, S.identity);
    }, S.functions = S.methods = function(e) {
        var t = [];
        for (var n in e) S.isFunction(e[n]) && t.push(n);
        return t.sort();
    }, S.extend = function(e) {
        return x(o.call(arguments, 1), function(t) {
            for (var n in t) e[n] = t[n];
        }), e;
    }, S.pick = function(e) {
        var t = {};
        return x(S.flatten(o.call(arguments, 1)), function(n) {
            n in e && (t[n] = e[n]);
        }), t;
    }, S.defaults = function(e) {
        return x(o.call(arguments, 1), function(t) {
            for (var n in t) e[n] == null && (e[n] = t[n]);
        }), e;
    }, S.clone = function(e) {
        return S.isObject(e) ? S.isArray(e) ? e.slice() : S.extend({}, e) : e;
    }, S.tap = function(e, t) {
        return t(e), e;
    }, S.isEqual = function(e, t) {
        return C(e, t, []);
    }, S.isEmpty = function(e) {
        if (e == null) return !0;
        if (S.isArray(e) || S.isString(e)) 
return e.length === 0;
        for (var t in e) if (S.has(e, t)) return !1;
        return !0;
    }, S.isElement = function(e) {
        return !!e && e.nodeType == 1;
    }, S.isArray = b || function(e) {
        return a.call(e) == "[object Array]";
    }, S.isObject = function(e) {
        return e === Object(e);
    }, S.isArguments = function(e) {
        return a.call(e) == "[object Arguments]";
    }, S.isArguments(arguments) || (S.isArguments = function(e) {
        return !!e && !!S.has(e, "callee");
    }), S.isFunction = function(e) {
        return a.call(e) == "[object Function]";
    }, S.isString = function(e) {
        return a.call(e) == "[object String]";
    }, S.isNumber = function(e) {
        return a.call(e) == "[object Number]";
    }, S.isFinite = function(e) {
        return S.isNumber(e) && isFinite(e);
    }, S.isNaN = function(e) {
        return e !== e;
    }, S.isBoolean = function(e) {
        return e === !0 || e === !1 || a.call(e) == "[object Boolean]"
;
    }, S.isDate = function(e) {
        return a.call(e) == "[object Date]";
    }, S.isRegExp = function(e) {
        return a.call(e) == "[object RegExp]";
    }, S.isNull = function(e) {
        return e === null;
    }, S.isUndefined = function(e) {
        return e === void 0;
    }, S.has = function(e, t) {
        return f.call(e, t);
    }, S.noConflict = function() {
        return e._ = t, this;
    }, S.identity = function(e) {
        return e;
    }, S.times = function(e, t, n) {
        for (var r = 0; r < e; r++) t.call(n, r);
    }, S.escape = function(e) {
        return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
    }, S.result = function(e, t) {
        if (e == null) return null;
        var n = e[t];
        return S.isFunction(n) ? n.call(e) : n;
    }, S.mixin = function(e) {
        x(S.functions(e), function(t) {
            B(t, S[t] = e[t]);
        });
    
};
    var k = 0;
    S.uniqueId = function(e) {
        var t = k++;
        return e ? e + t : t;
    }, S.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /.^/, A = {
        "\\": "\\",
        "'": "'",
        r: "\r",
        n: "\n",
        t: "	",
        u2028: "\u2028",
        u2029: "\u2029"
    };
    for (var O in A) A[A[O]] = O;
    var M = /\\|'|\r|\n|\t|\u2028|\u2029/g, _ = /\\(\\|'|r|n|t|u2028|u2029)/g, D = function(e) {
        return e.replace(_, function(e, t) {
            return A[t];
        });
    };
    S.template = function(e, t, n) {
        n = S.defaults(n || {}, S.templateSettings);
        var r = "__p+='" + e.replace(M, function(e) {
            return "\\" + A[e];
        }).replace(n.escape || L, function(e, t) {
            return "'+\n_.escape(" + D(t) + ")+\n'";
        }).replace(n.interpolate || L, function(e, t) {
            return "'+\n(" + 
D(t) + ")+\n'";
        }).replace(n.evaluate || L, function(e, t) {
            return "';\n" + D(t) + "\n;__p+='";
        }) + "';\n";
        n.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + r + "return __p;\n";
        var i = new Function(n.variable || "obj", "_", r);
        if (t) return i(t, S);
        var s = function(e) {
            return i.call(this, e, S);
        };
        return s.source = "function(" + (n.variable || "obj") + "){\n" + r + "}", s;
    }, S.chain = function(e) {
        return S(e).chain();
    };
    var P = function(e) {
        this._wrapped = e;
    };
    S.prototype = P.prototype;
    var H = function(e, t) {
        return t ? S(e).chain() : e;
    }, B = function(e, t) {
        P.prototype[e] = function() {
            var e = o.call(arguments);
            return u.call(e, this._wrapped), H(t.apply(S, e), this._chain);
        };
    };
    S.mixin(S)
, x([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = r[e];
        P.prototype[e] = function() {
            var n = this._wrapped;
            t.apply(n, arguments);
            var r = n.length;
            return (e == "shift" || e == "splice") && r === 0 && delete n[0], H(n, this._chain);
        };
    }), x([ "concat", "join", "slice" ], function(e) {
        var t = r[e];
        P.prototype[e] = function() {
            return H(t.apply(this._wrapped, arguments), this._chain);
        };
    }), P.prototype.chain = function() {
        return this._chain = !0, this;
    }, P.prototype.value = function() {
        return this._wrapped;
    };
}.call(this), define("underscore", function(e) {
    return function() {
        return e._;
    };
}(this)), function() {
    var e = this, t = e.Backbone, n = Array.prototype.slice, r = Array.prototype.splice, i;
    typeof exports != "undefined" ? i = exports : i = e.Backbone = {}, i.VERSION = "0.9.2"
;
    var s = e._;
    !s && typeof require != "undefined" && (s = require("underscore"));
    var o = e.jQuery || e.Zepto || e.ender;
    i.setDomLibrary = function(e) {
        o = e;
    }, i.noConflict = function() {
        return e.Backbone = t, this;
    }, i.emulateHTTP = !1, i.emulateJSON = !1;
    var u = /\s+/, a = i.Events = {
        on: function(e, t, n) {
            var r, i, s, o, a;
            if (!t) return this;
            e = e.split(u), r = this._callbacks || (this._callbacks = {});
            while (i = e.shift()) a = r[i], s = a ? a.tail : {}, s.next = o = {}, s.context = n, s.callback = t, r[i] = {
                tail: o,
                next: a ? a.next : s
            };
            return this;
        },
        off: function(e, t, n) {
            var r, i, o, a, f, l;
            if (!(i = this._callbacks)) return;
            if (!(e || t || n)) return delete this._callbacks, this;
            e = e ? e.split(u) : s.keys(i);
            while (r = e.shift
()) {
                o = i[r], delete i[r];
                if (!o || !t && !n) continue;
                a = o.tail;
                while ((o = o.next) !== a) f = o.callback, l = o.context, (t && f !== t || n && l !== n) && this.on(r, f, l);
            }
            return this;
        },
        trigger: function(e) {
            var t, r, i, s, o, a, f;
            if (!(i = this._callbacks)) return this;
            a = i.all, e = e.split(u), f = n.call(arguments, 1);
            while (t = e.shift()) {
                if (r = i[t]) {
                    s = r.tail;
                    while ((r = r.next) !== s) r.callback.apply(r.context || this, f);
                }
                if (r = a) {
                    s = r.tail, o = [ t ].concat(f);
                    while ((r = r.next) !== s) r.callback.apply(r.context || this, o);
                }
            }
            return this;
        }
    };
    a.bind = a.on, a.unbind = a.off;
    var f = i.Model = function(e, t
) {
        var n;
        e || (e = {}), t && t.parse && (e = this.parse(e));
        if (n = C(this, "defaults")) e = s.extend({}, n, e);
        t && t.collection && (this.collection = t.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = s.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {
            silent: !0
        }), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = s.clone(this.attributes), this.initialize.apply(this, arguments);
    };
    s.extend(f.prototype, a, {
        changed: null,
        _silent: null,
        _pending: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(e) {
            return s.clone(this.attributes);
        },
        get: function(e) {
            return this.attributes[e];
        },
        escape: function(e) {
            var t;
            if (t = this._escapedAttributes[e]) return t;
            var n = 
this.get(e);
            return this._escapedAttributes[e] = s.escape(n == null ? "" : "" + n);
        },
        has: function(e) {
            return this.get(e) != null;
        },
        set: function(e, t, n) {
            var r, i, o;
            s.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n || (n = {});
            if (!r) return this;
            r instanceof f && (r = r.attributes);
            if (n.unset) for (i in r) r[i] = void 0;
            if (!this._validate(r, n)) return !1;
            this.idAttribute in r && (this.id = r[this.idAttribute]);
            var u = n.changes = {}, a = this.attributes, l = this._escapedAttributes, c = this._previousAttributes || {};
            for (i in r) {
                o = r[i];
                if (!s.isEqual(a[i], o) || n.unset && s.has(a, i)) delete l[i], (n.silent ? this._silent : u)[i] = !0;
                n.unset ? delete a[i] : a[i] = o, !s.isEqual(c[i], o) || s.has(a, i) != s.has(c, i) ? (this.changed
[i] = o, n.silent || (this._pending[i] = !0)) : (delete this.changed[i], delete this._pending[i]);
            }
            return n.silent || this.change(n), this;
        },
        unset: function(e, t) {
            return (t || (t = {})).unset = !0, this.set(e, null, t);
        },
        clear: function(e) {
            return (e || (e = {})).unset = !0, this.set(s.clone(this.attributes), e);
        },
        fetch: function(e) {
            e = e ? s.clone(e) : {};
            var t = this, n = e.success;
            return e.success = function(r, i, s) {
                if (!t.set(t.parse(r, s), e)) return !1;
                n && n(t, r);
            }, e.error = i.wrapError(e.error, t, e), (this.sync || i.sync).call(this, "read", this, e);
        },
        save: function(e, t, n) {
            var r, o;
            s.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n = n ? s.clone(n) : {};
            if (n.wait) {
                if (!this._validate(r, n)
) return !1;
                o = s.clone(this.attributes);
            }
            var u = s.extend({}, n, {
                silent: !0
            });
            if (r && !this.set(r, n.wait ? u : n)) return !1;
            var a = this, f = n.success;
            n.success = function(e, t, i) {
                var o = a.parse(e, i);
                n.wait && (delete n.wait, o = s.extend(r || {}, o));
                if (!a.set(o, n)) return !1;
                f ? f(a, e) : a.trigger("sync", a, e, n);
            }, n.error = i.wrapError(n.error, a, n);
            var l = this.isNew() ? "create" : "update", c = (this.sync || i.sync).call(this, l, this, n);
            return n.wait && this.set(o, u), c;
        },
        destroy: function(e) {
            e = e ? s.clone(e) : {};
            var t = this, n = e.success, r = function() {
                t.trigger("destroy", t, t.collection, e);
            };
            if (this.isNew()) return r(), !1;
            e.success = function(
i) {
                e.wait && r(), n ? n(t, i) : t.trigger("sync", t, i, e);
            }, e.error = i.wrapError(e.error, t, e);
            var o = (this.sync || i.sync).call(this, "delete", this, e);
            return e.wait || r(), o;
        },
        url: function() {
            var e = C(this, "urlRoot") || C(this.collection, "url") || k();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) == "/" ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function(e, t) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return this.id == null;
        },
        change: function(e) {
            e || (e = {});
            var t = this._changing;
            this._changing = !0;
            for (var n in this._silent) this._pending[n] = !0;
            var r = s.extend({}, e.changes, this._silent);
            this._silent = {};
            
for (var n in r) this.trigger("change:" + n, this, this.get(n), e);
            if (t) return this;
            while (!s.isEmpty(this._pending)) {
                this._pending = {}, this.trigger("change", this, e);
                for (var n in this.changed) {
                    if (this._pending[n] || this._silent[n]) continue;
                    delete this.changed[n];
                }
                this._previousAttributes = s.clone(this.attributes);
            }
            return this._changing = !1, this;
        },
        hasChanged: function(e) {
            return arguments.length ? s.has(this.changed, e) : !s.isEmpty(this.changed);
        },
        changedAttributes: function(e) {
            if (!e) return this.hasChanged() ? s.clone(this.changed) : !1;
            var t, n = !1, r = this._previousAttributes;
            for (var i in e) {
                if (s.isEqual(r[i], t = e[i])) continue;
                (n || (n = {}))[i] = t;
            }
            return n
;
        },
        previous: function(e) {
            return !arguments.length || !this._previousAttributes ? null : this._previousAttributes[e];
        },
        previousAttributes: function() {
            return s.clone(this._previousAttributes);
        },
        isValid: function() {
            return !this.validate(this.attributes);
        },
        _validate: function(e, t) {
            if (t.silent || !this.validate) return !0;
            e = s.extend({}, this.attributes, e);
            var n = this.validate(e, t);
            return n ? (t && t.error ? t.error(this, n, t) : this.trigger("error", this, n, t), !1) : !0;
        }
    });
    var l = i.Collection = function(e, t) {
        t || (t = {}), t.model && (this.model = t.model), t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, {
            silent: !0,
            parse: t.parse
        });
    };
    s.extend(l.prototype, a, {
        
model: f,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e);
            });
        },
        add: function(e, t) {
            var n, i, o, u, a, f, l = {}, c = {}, h = [];
            t || (t = {}), e = s.isArray(e) ? e.slice() : [ e ];
            for (n = 0, o = e.length; n < o; n++) {
                if (!(u = e[n] = this._prepareModel(e[n], t))) throw new Error("Can't add an invalid model to a collection");
                a = u.cid, f = u.id;
                if (l[a] || this._byCid[a] || f != null && (c[f] || this._byId[f])) {
                    h.push(n);
                    continue;
                }
                l[a] = c[f] = u;
            }
            n = h.length;
            while (n--) e.splice(h[n], 1);
            for (n = 0, o = e.length; n < o; n++) (u = e[n]).on("all", this._onModelEvent, this), this._byCid[u.cid] = u, u.id != null && (this._byId[u.id] = u);
            
this.length += o, i = t.at != null ? t.at : this.models.length, r.apply(this.models, [ i, 0 ].concat(e)), this.comparator && this.sort({
                silent: !0
            });
            if (t.silent) return this;
            for (n = 0, o = this.models.length; n < o; n++) {
                if (!l[(u = this.models[n]).cid]) continue;
                t.index = n, u.trigger("add", u, this, t);
            }
            return this;
        },
        remove: function(e, t) {
            var n, r, i, o;
            t || (t = {}), e = s.isArray(e) ? e.slice() : [ e ];
            for (n = 0, r = e.length; n < r; n++) {
                o = this.getByCid(e[n]) || this.get(e[n]);
                if (!o) continue;
                delete this._byId[o.id], delete this._byCid[o.cid], i = this.indexOf(o), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, o.trigger("remove", o, this, t)), this._removeReference(o);
            }
            return this;
        },
        push: 
function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, t), e;
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t;
        },
        unshift: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, s.extend({
                at: 0
            }, t)), e;
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e), t;
        },
        get: function(e) {
            return e == null ? void 0 : this._byId[e.id != null ? e.id : e];
        },
        getByCid: function(e) {
            return e && this._byCid[e.cid || e];
        },
        at: function(e) {
            return this.models[e];
        },
        where: function(e) {
            return s.isEmpty(e) ? [] : this.filter(function(t) {
                for (var n in e) if (e[n] !== t.get(n)) return !1;
                return !0;
            });
        },
        sort
: function(e) {
            e || (e = {});
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            var t = s.bind(this.comparator, this);
            return this.comparator.length == 1 ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("reset", this, e), this;
        },
        pluck: function(e) {
            return s.map(this.models, function(t) {
                return t.get(e);
            });
        },
        reset: function(e, t) {
            e || (e = []), t || (t = {});
            for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
            return this._reset(), this.add(e, s.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this;
        },
        fetch: function(e) {
            e = e ? s.clone(e) : {}, e.parse === undefined && (e.parse = !0);
            var t = this, n = e.success;
            return e.
success = function(r, i, s) {
                t[e.add ? "add" : "reset"](t.parse(r, s), e), n && n(t, r);
            }, e.error = i.wrapError(e.error, t, e), (this.sync || i.sync).call(this, "read", this, e);
        },
        create: function(e, t) {
            var n = this;
            t = t ? s.clone(t) : {}, e = this._prepareModel(e, t);
            if (!e) return !1;
            t.wait || n.add(e, t);
            var r = t.success;
            return t.success = function(i, s, o) {
                t.wait && n.add(i, t), r ? r(i, s) : i.trigger("sync", e, s, t);
            }, e.save(null, t), e;
        },
        parse: function(e, t) {
            return e;
        },
        chain: function() {
            return s(this.models).chain();
        },
        _reset: function(e) {
            this.length = 0, this.models = [], this._byId = {}, this._byCid = {};
        },
        _prepareModel: function(e, t) {
            t || (t = {});
            if (e instanceof f) e.collection || 
(e.collection = this); else {
                var n = e;
                t.collection = this, e = new this.model(n, t), e._validate(e.attributes, t) || (e = !1);
            }
            return e;
        },
        _removeReference: function(e) {
            this == e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(e, t, n, r) {
            if ((e == "add" || e == "remove") && n != this) return;
            e == "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], this._byId[t.id] = t), this.trigger.apply(this, arguments);
        }
    });
    var c = [ "forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf"
, "isEmpty", "groupBy" ];
    s.each(c, function(e) {
        l.prototype[e] = function() {
            return s[e].apply(s, [ this.models ].concat(s.toArray(arguments)));
        };
    });
    var h = i.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, p = /:\w+/g, d = /\*\w+/g, v = /[-[\]{}()+?.,\\^$|#\s]/g;
    s.extend(h.prototype, a, {
        initialize: function() {},
        route: function(e, t, n) {
            return i.history || (i.history = new m), s.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), i.history.route(e, s.bind(function(r) {
                var s = this._extractParameters(e, r);
                n && n.apply(this, s), this.trigger.apply(this, [ "route:" + t ].concat(s)), i.history.trigger("route", this, t, s);
            }, this)), this;
        },
        navigate: function(e, t) {
            i.history.navigate(e, t);
        },
        _bindRoutes
: function() {
            if (!this.routes) return;
            var e = [];
            for (var t in this.routes) e.unshift([ t, this.routes[t] ]);
            for (var n = 0, r = e.length; n < r; n++) this.route(e[n][0], e[n][1], this[e[n][1]]);
        },
        _routeToRegExp: function(e) {
            return e = e.replace(v, "\\$&").replace(p, "([^/]+)").replace(d, "(.*?)"), new RegExp("^" + e + "$");
        },
        _extractParameters: function(e, t) {
            return e.exec(t).slice(1);
        }
    });
    var m = i.History = function() {
        this.handlers = [], s.bindAll(this, "checkUrl");
    }, g = /^[#\/]/, y = /msie [\w.]+/;
    m.started = !1, s.extend(m.prototype, a, {
        interval: 50,
        getHash: function(e) {
            var t = e ? e.location : window.location, n = t.href.match(/#(.*)$/);
            return n ? n[1] : "";
        },
        getFragment: function(e, t) {
            if (e == null) if (this._hasPushState || t) {
                e = 
window.location.pathname;
                var n = window.location.search;
                n && (e += n);
            } else e = this.getHash();
            return e.indexOf(this.options.root) || (e = e.substr(this.options.root.length)), e.replace(g, "");
        },
        start: function(e) {
            if (m.started) throw new Error("Backbone.history has already been started");
            m.started = !0, this.options = s.extend({}, {
                root: "/"
            }, this.options, e), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
            var t = this.getFragment(), n = document.documentMode, r = y.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            r && (this.iframe = o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o(window
).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var i = window.location, u = i.pathname == this.options.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !u) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && u && i.hash && (this.fragment = this.getHash().replace(g, ""), window.history.replaceState({}, document.title, i.protocol + "//" + i.host + this.options.root + this.fragment));
            if (!this.options.silent) return this.loadUrl();
        },
        stop: function() {
            o(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval
), m.started = !1;
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            });
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            t == this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t == this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash());
        },
        loadUrl: function(e) {
            var t = this.fragment = this.getFragment(e), n = s.any(this.handlers, function(e) {
                if (e.route.test(t)) return e.callback(t), !0;
            });
            return n;
        },
        navigate: function(e, t) {
            if (!m.started) return !1;
            if (!t || t === !0) t = {
                trigger: t
            };
            var n = (e || "").replace(g, "");
            if (this.fragment == n) return;
            this
._hasPushState ? (n.indexOf(this.options.root) != 0 && (n = this.options.root + n), this.fragment = n, window.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n)) : this._wantsHashChange ? (this.fragment = n, this._updateHash(window.location, n, t.replace), this.iframe && n != this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, n, t.replace))) : window.location.assign(this.options.root + e), t.trigger && this.loadUrl(e);
        },
        _updateHash: function(e, t, n) {
            n ? e.replace(e.toString().replace(/(javascript:|#).*$/, "") + "#" + t) : e.hash = t;
        }
    });
    var b = i.View = function(e) {
        this.cid = s.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents();
    }, w = /^(\S+)\s*(.*)$/, E = [ "model", "collection", "el", "id", "attributes", "className", "tagName" ];
    s.
extend(b.prototype, a, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this.$el.remove(), this;
        },
        make: function(e, t, n) {
            var r = document.createElement(e);
            return t && o(r).attr(t), n && o(r).html(n), r;
        },
        setElement: function(e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o ? e : o(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this;
        },
        delegateEvents: function(e) {
            if (!e && !(e = C(this, "events"))) return;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                s.isFunction(n) || (n = this[e[t]]);
                if (!n) throw new Error('Method "' + e[t] + '" does not exist');
                
var r = t.match(w), i = r[1], o = r[2];
                n = s.bind(n, this), i += ".delegateEvents" + this.cid, o === "" ? this.$el.bind(i, n) : this.$el.delegate(o, i, n);
            }
        },
        undelegateEvents: function() {
            this.$el.unbind(".delegateEvents" + this.cid);
        },
        _configure: function(e) {
            this.options && (e = s.extend({}, this.options, e));
            for (var t = 0, n = E.length; t < n; t++) {
                var r = E[t];
                e[r] && (this[r] = e[r]);
            }
            this.options = e;
        },
        _ensureElement: function() {
            if (!this.el) {
                var e = C(this, "attributes") || {};
                this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.setElement(this.make(this.tagName, e), !1);
            } else this.setElement(this.el, !1);
        }
    });
    var S = function(e, t) {
        var n = N(this, e, t);
        return n.extend = 
this.extend, n;
    };
    f.extend = l.extend = h.extend = b.extend = S;
    var x = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    i.sync = function(e, t, n) {
        var r = x[e];
        n || (n = {});
        var u = {
            type: r,
            dataType: "json"
        };
        return n.url || (u.url = C(t, "url") || k()), !n.data && t && (e == "create" || e == "update") && (u.contentType = "application/json", u.data = JSON.stringify(t.toJSON())), i.emulateJSON && (u.contentType = "application/x-www-form-urlencoded", u.data = u.data ? {
            model: u.data
        } : {}), i.emulateHTTP && (r === "PUT" || r === "DELETE") && (i.emulateJSON && (u.data._method = r), u.type = "POST", u.beforeSend = function(e) {
            e.setRequestHeader("X-HTTP-Method-Override", r);
        }), u.type !== "GET" && !i.emulateJSON && (u.processData = !1), o.ajax(s.extend(u, n));
    }, i.wrapError = function(e, t, n) {
        
return function(r, i) {
            i = r === t ? i : r, e ? e(t, i, n) : t.trigger("error", t, i, n);
        };
    };
    var T = function() {}, N = function(e, t, n) {
        var r;
        return t && t.hasOwnProperty("constructor") ? r = t.constructor : r = function() {
            e.apply(this, arguments);
        }, s.extend(r, e), T.prototype = e.prototype, r.prototype = new T, t && s.extend(r.prototype, t), n && s.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r;
    }, C = function(e, t) {
        return !e || !e[t] ? null : s.isFunction(e[t]) ? e[t]() : e[t];
    }, k = function() {
        throw new Error('A "url" property or function must be specified');
    };
}.call(this), define("backbone", [ "jquery", "underscore" ], function(e) {
    return function() {
        return e.Backbone;
    };
}(this)), Backbone.Marionette = function(e, t, n) {
    var r = {};
    r.EventBinder = function() {
        this._eventBindings = [];
    }, t.extend(r.EventBinder
.prototype, {
        bindTo: function(e, t, n, r) {
            r = r || this, e.on(t, n, r);
            var i = {
                obj: e,
                eventName: t,
                callback: n,
                context: r
            };
            return this._eventBindings.push(i), i;
        },
        unbindFrom: function(e) {
            e.obj.off(e.eventName, e.callback, e.context), this._eventBindings = t.reject(this._eventBindings, function(t) {
                return t === e;
            });
        },
        unbindAll: function() {
            var e = this, n = t.map(this._eventBindings, t.identity);
            t.each(n, function(t, n) {
                e.unbindFrom(t);
            });
        }
    }), r.EventBinder.extend = e.View.extend, r.View = e.View.extend({
        constructor: function() {
            var n = new r.EventBinder;
            t.extend(this, n), e.View.prototype.constructor.apply(this, arguments), this.bindTo(this, "show", this.onShowCalled, this);
        
},
        getTemplate: function() {
            var e;
            return this.options && this.options.template ? e = this.options.template : e = this.template, e;
        },
        serializeData: function() {
            var e;
            return this.model ? e = this.model.toJSON() : this.collection && (e = {
                items: this.collection.toJSON()
            }), e = this.mixinTemplateHelpers(e), e;
        },
        mixinTemplateHelpers: function(e) {
            e = e || {};
            var n = this.templateHelpers;
            return t.isFunction(n) && (n = n.call(this)), t.extend(e, n);
        },
        configureTriggers: function() {
            if (!this.triggers) return;
            var e = this.triggers, n = this, r = {};
            return t.isFunction(e) && (e = e.call(this)), t.each(e, function(e, t) {
                r[t] = function(t) {
                    t && t.preventDefault && t.preventDefault(), t && t.stopPropagation && t.stopPropagation(), n.trigger(e
);
                };
            }), r;
        },
        delegateEvents: function(n) {
            n = n || this.events, t.isFunction(n) && (n = n.call(this));
            var r = {}, i = this.configureTriggers();
            t.extend(r, n, i), e.View.prototype.delegateEvents.call(this, r);
        },
        onShowCalled: function() {},
        close: function() {
            this.beforeClose && this.beforeClose(), this.remove(), this.onClose && this.onClose(), this.trigger("close"), this.unbindAll(), this.unbind();
        },
        bindUIElements: function() {
            if (!this.ui) return;
            var e = this;
            this.uiBindings || (this.uiBindings = this.ui), this.ui = {}, t.each(t.keys(this.uiBindings), function(t) {
                var n = e.uiBindings[t];
                e.ui[t] = e.$(n);
            });
        }
    }), r.ItemView = r.View.extend({
        constructor: function() {
            r.View.prototype.constructor.apply(this, arguments), this.initialEvents && 
this.initialEvents();
        },
        render: function() {
            this.beforeRender && this.beforeRender(), this.trigger("before:render", this), this.trigger("item:before:render", this);
            var e = this.serializeData(), t = this.getTemplate(), n = r.Renderer.render(t, e);
            return this.$el.html(n), this.bindUIElements(), this.onRender && this.onRender(), this.trigger("render", this), this.trigger("item:rendered", this), this;
        },
        close: function() {
            this.trigger("item:before:close"), r.View.prototype.close.apply(this, arguments), this.trigger("item:closed");
        }
    }), r.CollectionView = r.View.extend({
        constructor: function() {
            r.View.prototype.constructor.apply(this, arguments), this.initChildViewStorage(), this.initialEvents(), this.onShowCallbacks = new r.Callbacks;
        },
        initialEvents: function() {
            this.collection && (this.bindTo(this.collection, "add", this.addChildView, this)
, this.bindTo(this.collection, "remove", this.removeItemView, this), this.bindTo(this.collection, "reset", this.render, this));
        },
        addChildView: function(e, t, n) {
            this.closeEmptyView();
            var r = this.getItemView();
            return this.addItemView(e, r, n.index);
        },
        onShowCalled: function() {
            this.onShowCallbacks.run();
        },
        triggerBeforeRender: function() {
            this.beforeRender && this.beforeRender(), this.trigger("before:render", this), this.trigger("collection:before:render", this);
        },
        triggerRendered: function() {
            this.onRender && this.onRender(), this.trigger("render", this), this.trigger("collection:rendered", this);
        },
        render: function() {
            return this.triggerBeforeRender(), this.closeEmptyView(), this.closeChildren(), this.collection && this.collection.length > 0 ? this.showCollection() : this.showEmptyView(), this.triggerRendered(
), this;
        },
        showCollection: function() {
            var e = this, t = this.getItemView();
            this.collection.each(function(n, r) {
                e.addItemView(n, t, r);
            });
        },
        showEmptyView: function() {
            var t = this.options.emptyView || this.emptyView;
            if (t && !this._showingEmptyView) {
                this._showingEmptyView = !0;
                var n = new e.Model;
                this.addItemView(n, t, 0);
            }
        },
        closeEmptyView: function() {
            this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView);
        },
        getItemView: function() {
            var e = this.options.itemView || this.itemView;
            if (!e) {
                var t = new Error("An `itemView` must be specified");
                throw t.name = "NoItemViewError", t;
            }
            return e;
        },
        addItemView: function(e, t, n) {
            var r = 
this, s = this.buildItemView(e, t);
            this.storeChild(s), this.onItemAdded && this.onItemAdded(s), this.trigger("item:added", s);
            var o = this.renderItemView(s, n);
            s.onShow && this.onShowCallbacks.add(s.onShow, s);
            var u = this.bindTo(s, "all", function() {
                var e = i.call(arguments);
                e[0] = "itemview:" + e[0], e.splice(1, 0, s), r.trigger.apply(r, e);
            });
            return this.childBindings = this.childBindings || {}, this.childBindings[s.cid] = u, o;
        },
        renderItemView: function(e, t) {
            e.render(), this.appendHtml(this, e, t);
        },
        buildItemView: function(e, n) {
            var r = t.result(this, "itemViewOptions"), i = t.extend({
                model: e
            }, r), s = new n(i);
            return s;
        },
        removeItemView: function(e) {
            var t = this.children[e.cid];
            if (t) {
                var n = this.childBindings
[t.cid];
                n && (this.unbindFrom(n), delete this.childBindings[t.cid]), t.close(), delete this.children[e.cid];
            }
            (!this.collection || this.collection.length === 0) && this.showEmptyView(), this.trigger("item:removed", t);
        },
        appendHtml: function(e, t, n) {
            e.$el.append(t.el);
        },
        storeChild: function(e) {
            this.children[e.model.cid] = e;
        },
        initChildViewStorage: function() {
            this.children = {};
        },
        close: function() {
            this.trigger("collection:before:close"), this.closeChildren(), r.View.prototype.close.apply(this, arguments), this.trigger("collection:closed");
        },
        closeChildren: function() {
            var e = this;
            this.children && t.each(t.clone(this.children), function(t) {
                e.removeItemView(t.model);
            });
        }
    }), r.CompositeView = r.CollectionView.extend({
        constructor
: function(e) {
            r.CollectionView.apply(this, arguments), this.itemView = this.getItemView();
        },
        initialEvents: function() {
            this.collection && (this.bindTo(this.collection, "add", this.addChildView, this), this.bindTo(this.collection, "remove", this.removeItemView, this), this.bindTo(this.collection, "reset", this.renderCollection, this));
        },
        getItemView: function() {
            return this.itemView || this.constructor;
        },
        render: function() {
            var e = this;
            this.resetItemViewContainer();
            var t = this.renderModel();
            return this.$el.html(t), this.bindUIElements(), this.trigger("composite:model:rendered"), this.trigger("render"), this.renderCollection(), this.trigger("composite:rendered"), this;
        },
        renderCollection: function() {
            r.CollectionView.prototype.render.apply(this, arguments), this.trigger("composite:collection:rendered");
        },
        
renderModel: function() {
            var e = {};
            e = this.serializeData();
            var t = this.getTemplate();
            return r.Renderer.render(t, e);
        },
        appendHtml: function(e, t) {
            var n = this.getItemViewContainer(e);
            n.append(t.el);
        },
        getItemViewContainer: function(e) {
            var n;
            if ("$itemViewContainer" in e) n = e.$itemViewContainer; else {
                if (e.itemViewContainer) {
                    n = e.$(t.result(e, "itemViewContainer"));
                    if (n.length <= 0) {
                        var r = new Error("Missing `itemViewContainer`");
                        throw r.name = "ItemViewContainerMissingError", r;
                    }
                } else n = e.$el;
                e.$itemViewContainer = n;
            }
            return n;
        },
        resetItemViewContainer: function() {
            this.$itemViewContainer && delete this.$itemViewContainer
;
        }
    }), r.Region = function(e) {
        this.options = e || {};
        var n = new r.EventBinder;
        t.extend(this, n, e);
        if (!this.el) {
            var i = new Error("An 'el' must be specified");
            throw i.name = "NoElError", i;
        }
        this.initialize && this.initialize.apply(this, arguments);
    }, t.extend(r.Region.prototype, e.Events, {
        show: function(e) {
            this.ensureEl(), this.close(), e.render(), this.open(e), e.onShow && e.onShow(), e.trigger("show"), this.onShow && this.onShow(e), this.trigger("view:show", e), this.currentView = e;
        },
        ensureEl: function() {
            if (!this.$el || this.$el.length === 0) this.$el = this.getEl(this.el);
        },
        getEl: function(e) {
            return n(e);
        },
        open: function(e) {
            this.$el.html(e.el);
        },
        close: function() {
            var e = this.currentView;
            if (!e) return;
            e.close && 
e.close(), this.trigger("view:closed", e), delete this.currentView;
        },
        attachView: function(e) {
            this.currentView = e;
        },
        reset: function() {
            this.close(), delete this.$el;
        }
    }), r.Region.extend = e.View.extend, r.Layout = r.ItemView.extend({
        regionType: r.Region,
        constructor: function() {
            e.Marionette.ItemView.apply(this, arguments), this.initializeRegions();
        },
        render: function() {
            var e = r.ItemView.prototype.render.apply(this, arguments);
            return this.render = function() {
                this.closeRegions(), this.reInitializeRegions();
                var e = r.ItemView.prototype.render.apply(this, arguments);
                return e;
            }, e;
        },
        close: function() {
            this.closeRegions(), this.destroyRegions(), e.Marionette.ItemView.prototype.close.call(this, arguments);
        },
        initializeRegions: function(
) {
            this.regionManagers || (this.regionManagers = {});
            var e = this;
            t.each(this.regions, function(t, n) {
                if (typeof t != "string" && typeof t.selector != "string") throw new Exception("Region must be specified as a selector string or an object with selector property");
                var r = typeof t == "string" ? t : t.selector, i = typeof t.regionType == "undefined" ? e.regionType : t.regionType, s = new i({
                    el: r,
                    getEl: function(t) {
                        return e.$(t);
                    }
                });
                e.regionManagers[n] = s, e[n] = s;
            });
        },
        reInitializeRegions: function() {
            this.regionManagers && t.size(this.regionManagers) === 0 ? this.initializeRegions() : t.each(this.regionManagers, function(e) {
                e.reset();
            });
        },
        closeRegions: function() {
            var e = this;
            
t.each(this.regionManagers, function(e, t) {
                e.close();
            });
        },
        destroyRegions: function() {
            var e = this;
            t.each(this.regionManagers, function(t, n) {
                delete e[n];
            }), this.regionManagers = {};
        }
    }), r.Application = function(e) {
        this.initCallbacks = new r.Callbacks, this.vent = new r.EventAggregator, this.submodules = {};
        var n = new r.EventBinder;
        t.extend(this, n, e);
    }, t.extend(r.Application.prototype, e.Events, {
        addInitializer: function(e) {
            this.initCallbacks.add(e);
        },
        start: function(e) {
            this.trigger("initialize:before", e), this.initCallbacks.run(e, this), this.trigger("initialize:after", e), this.trigger("start", e);
        },
        addRegions: function(e) {
            var t, n, i;
            for (i in e) e.hasOwnProperty(i) && (t = e[i], typeof t == "string" ? n = new r.Region({
                
el: t
            }) : n = new t, this[i] = n);
        },
        removeRegion: function(e) {
            this[e].close(), delete this[e];
        },
        module: function(e, t) {
            var n = i.call(arguments);
            return n.unshift(this), r.Module.create.apply(r.Module, n);
        }
    }), r.Application.extend = e.View.extend, r.AppRouter = e.Router.extend({
        constructor: function(t) {
            e.Router.prototype.constructor.call(this, t);
            if (this.appRoutes) {
                var n = this.controller;
                t && t.controller && (n = t.controller), this.processAppRoutes(n, this.appRoutes);
            }
        },
        processAppRoutes: function(e, n) {
            var r, i, s, o, u, a = [], f = this;
            for (s in n) n.hasOwnProperty(s) && a.unshift([ s, n[s] ]);
            o = a.length;
            for (u = 0; u < o; u++) {
                s = a[u][0], i = a[u][1], r = e[i];
                if (!r) {
                    
var l = "Method '" + i + "' was not found on the controller", c = new Error(l);
                    throw c.name = "NoMethodError", c;
                }
                r = t.bind(r, e), f.route(s, i, r);
            }
        }
    }), r.Module = function(e, n, i) {
        this.moduleName = e, this.submodules = {}, this._setupInitializersAndFinalizers(), this._config = {}, this._config.app = n, this._config.customArgs = i, this._config.definitions = [];
        var s = new r.EventBinder;
        t.extend(this, s);
    }, t.extend(r.Module.prototype, e.Events, {
        addInitializer: function(e) {
            this._initializerCallbacks.add(e);
        },
        addFinalizer: function(e) {
            this._finalizerCallbacks.add(e);
        },
        start: function(e) {
            if (this._isInitialized) return;
            this._runModuleDefinition(), this._initializerCallbacks.run(e, this), this._isInitialized = !0, this.submodules && t.each(this.submodules, function(t) {
                
t.start(e);
            });
        },
        stop: function() {
            if (!this._isInitialized) return;
            this._isInitialized = !1, this._finalizerCallbacks.run(), this._setupInitializersAndFinalizers(), t.each(this.submodules, function(e) {
                e.stop();
            });
        },
        addDefinition: function(e) {
            this._config.definitions.push(e);
        },
        _runModuleDefinition: function() {
            if (this._config.definitions.length === 0) return;
            var i = t.flatten([ this, this._config.app, e, r, n, t, this._config.customArgs ]), s = this._config.definitions.length - 1;
            for (var o = 0; o <= s; o++) {
                var u = this._config.definitions[o];
                u.apply(this, i);
            }
        },
        _setupInitializersAndFinalizers: function() {
            this._initializerCallbacks = new r.Callbacks, this._finalizerCallbacks = new r.Callbacks;
        }
    }), t.extend(r.Module, {
        
create: function(e, n, s) {
            var o = this, u = e;
            n = n.split(".");
            var a = i.apply(arguments);
            a.splice(0, 3);
            var f = n.length;
            return t.each(n, function(t, n) {
                var i = n === f - 1, l = u[t];
                l || (l = new r.Module(t, e, a), u[t] = l, u.submodules[t] = l), i && o._createModuleDefinition(l, s, e), u = l;
            }), u;
        },
        _createModuleDefinition: function(e, t, n) {
            var r = this._getModuleDefinitionOptions(t);
            r.definition && e.addDefinition(r.definition), r.startWithApp && n.addInitializer(function(t) {
                e.start(t);
            });
        },
        _getModuleDefinitionOptions: function(e) {
            var n = {
                startWithApp: !0
            };
            return e ? (t.isFunction(e) ? n.definition = e : (n.definition = e.define, e.hasOwnProperty("startWithApp") && (n.startWithApp = e.startWithApp)), n) : n;
        
}
    }), r.TemplateCache = function(e) {
        this.templateId = e;
    }, t.extend(r.TemplateCache, {
        templateCaches: {},
        get: function(e) {
            var t = this, n = this.templateCaches[e];
            return n || (n = new r.TemplateCache(e), this.templateCaches[e] = n), n.load();
        },
        clear: function() {
            var e, t = arguments.length;
            if (t > 0) for (e = 0; e < t; e++) delete this.templateCaches[arguments[e]]; else this.templateCaches = {};
        }
    }), t.extend(r.TemplateCache.prototype, {
        load: function() {
            var e = this;
            if (this.compiledTemplate) return this.compiledTemplate;
            var t = this.loadTemplate(this.templateId);
            return this.compiledTemplate = this.compileTemplate(t), this.compiledTemplate;
        },
        loadTemplate: function(e) {
            var t = n(e).html();
            if (!t || t.length === 0) {
                var r = "Could not find template: '" + 
e + "'", i = new Error(r);
                throw i.name = "NoTemplateError", i;
            }
            return t;
        },
        compileTemplate: function(e) {
            return t.template(e);
        }
    }), r.Renderer = {
        render: function(e, t) {
            var n = typeof e == "function" ? e : r.TemplateCache.get(e), i = n(t);
            return i;
        }
    }, r.Callbacks = function() {
        this.deferred = n.Deferred(), this.promise = this.deferred.promise();
    }, t.extend(r.Callbacks.prototype, {
        add: function(e, t) {
            this.promise.done(function(n, r) {
                t && (n = t), e.call(n, r);
            });
        },
        run: function(e, t) {
            this.deferred.resolve(t, e);
        }
    }), r.EventAggregator = r.EventBinder.extend({
        constructor: function(e) {
            r.EventBinder.apply(this, arguments), t.extend(this, e);
        },
        bindTo: function(e, t, n) {
            return r.EventBinder.prototype
.bindTo.call(this, this, e, t, n);
        }
    }), t.extend(r.EventAggregator.prototype, e.Events), r.EventAggregator.extend = e.View.extend;
    var i = Array.prototype.slice;
    return r;
}(Backbone, _, window.jQuery || window.Zepto || window.ender), define("marionette", [ "backbone" ], function(e) {
    return function() {
        return e.Backbone.Marionette;
    };
}(this)), define("vent", [ "marionette" ], function(e) {
    return new e.EventAggregator;
}), function() {
    function n() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
    function r() {
        return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n();
    }
    var e = this._, t = this.Backbone;
    t.LocalStorage = window.Store = function(e) {
        this.name = e;
        var t = this.localStorage().getItem(this.name);
        this.records = t && t.split(",") || [];
    }, e.extend(t.LocalStorage.prototype, {
        save: function() {
            this.localStorage
().setItem(this.name, this.records.join(","));
        },
        create: function(e) {
            return e.id || (e.id = r(), e.set(e.idAttribute, e.id)), this.localStorage().setItem(this.name + "-" + e.id, JSON.stringify(e)), this.records.push(e.id.toString()), this.save(), e.toJSON();
        },
        update: function(t) {
            return this.localStorage().setItem(this.name + "-" + t.id, JSON.stringify(t)), e.include(this.records, t.id.toString()) || this.records.push(t.id.toString()), this.save(), t.toJSON();
        },
        find: function(e) {
            return JSON.parse(this.localStorage().getItem(this.name + "-" + e.id));
        },
        findAll: function() {
            return e(this.records).chain().map(function(e) {
                return JSON.parse(this.localStorage().getItem(this.name + "-" + e));
            }, this).compact().value();
        },
        destroy: function(t) {
            return this.localStorage().removeItem(this.name + "-" + t.id), this.records = 
e.reject(this.records, function(e) {
                return e == t.id.toString();
            }), this.save(), t;
        },
        localStorage: function() {
            return localStorage;
        }
    }), t.LocalStorage.sync = window.Store.sync = t.localSync = function(e, t, n, r) {
        var i = t.localStorage || t.collection.localStorage;
        typeof n == "function" && (n = {
            success: n,
            error: r
        });
        var s;
        switch (e) {
          case "read":
            s = t.id != undefined ? i.find(t) : i.findAll();
            break;
          case "create":
            s = i.create(t);
            break;
          case "update":
            s = i.update(t);
            break;
          case "delete":
            s = i.destroy(t);
        }
        s ? n.success(s) : n.error("Record not found");
    }, t.ajaxSync = t.sync, t.getSyncMethod = function(e) {
        return e.localStorage || e.collection && e.collection.localStorage ? t.localSync 
: t.ajaxSync;
    }, t.sync = function(e, n, r, i) {
        return t.getSyncMethod(n).apply(this, [ e, n, r, i ]);
    };
}(), define("lib/backbone-localStorage", function() {}), define("models/Todo", [ "backbone", "lib/backbone-localStorage" ], function(e) {
    var t = e.Model.extend({
        localStorage: new e.LocalStorage("todos-backbone"),
        defaults: {
            title: "",
            completed: !1,
            created: 0
        },
        initialize: function() {
            this.isNew() && this.set("created", Date.now());
        },
        toggle: function() {
            return this.set("completed", !this.get("completed"));
        }
    });
    return t;
}), define("collections/TodoList", [ "backbone", "models/Todo", "lib/backbone-localStorage" ], function(e, t) {
    function n(e) {
        return e.get("completed");
    }
    var r = e.Collection.extend({
        model: t,
        localStorage: new e.LocalStorage("todos-backbone"),
        getCompleted: function(
) {
            return this.filter(n);
        },
        getActive: function() {
            return this.reject(n);
        },
        comparator: function(e) {
            return e.get("created");
        }
    });
    return r;
}), function() {
    var e = [ "Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0" ], t = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, n = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, r = [], i = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g
    }, s = function(e, t) {
        var n = i, r = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(n.interpolate, function(e, t) {
            return "'," + t.replace(/\\'/g, "'") + ",'";
        }).replace(n.evaluate || null, function(e, t) {
            return "');" + t.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "; __p.push('";
        }).replace(/\r/g, "").replace(/\n/g, ""
).replace(/\t/g, "") + "');}return __p.join('');";
        return r;
    };
    define("tpl", [], function() {
        var i, o, u;
        return typeof window != "undefined" && window.navigator && window.document ? o = function(e, t) {
            var n = i.createXhr();
            n.open("GET", e, !0), n.onreadystatechange = function(e) {
                n.readyState === 4 && t(n.responseText);
            }, n.send(null);
        } : typeof process != "undefined" && process.versions && !!process.versions.node && (u = require.nodeRequire("fs"), o = function(e, t) {
            t(u.readFileSync(e, "utf8"));
        }), i = {
            version: "0.24.0",
            strip: function(e) {
                if (e) {
                    e = e.replace(t, "");
                    var r = e.match(n);
                    r && (e = r[1]);
                } else e = "";
                return e;
            },
            jsEscape: function(e) {
                return e.replace(/(['\\])/g, "\\$1"
).replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "").replace(/[\t]/g, "").replace(/[\r]/g, "");
            },
            createXhr: function() {
                var t, n, r;
                if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest;
                for (n = 0; n < 3; n++) {
                    r = e[n];
                    try {
                        t = new ActiveXObject(r);
                    } catch (i) {}
                    if (t) {
                        e = [ r ];
                        break;
                    }
                }
                if (!t) throw new Error("require.getXhr(): XMLHttpRequest not available");
                return t;
            },
            get: o,
            load: function(e, t, n, o) {
                var u = !1, a, f = e.indexOf("."), l = e.substring(0, f), c = e.substring(f + 1, e.length);
                f = c.indexOf("!"), f !== -1 && (u = c.substring(f + 1, c.length), u = u === "strip", c = 
c.substring(0, f)), a = "nameToUrl" in t ? t.nameToUrl(l, "." + c) : t.toUrl(l + "." + c), i.get(a, function(t) {
                    t = s(t), o.isBuild || (t = new Function("obj", t)), t = u ? i.strip(t) : t, o.isBuild && o.inlineText && (r[e] = t), n(t);
                });
            },
            write: function(e, t, n) {
                if (t in r) {
                    var s = i.jsEscape(r[t]);
                    n("define('" + e + "!" + t + "', function() {return function(obj) { " + s.replace(/(\\')/g, "'").replace(/(\\\\)/g, "\\") + "}});\n");
                }
            }
        };
    });
}(), define("tpl!templates/todoItemView.tmpl", function() {
    return function(obj) {
        var __p = [], print = function() {
            __p.push.apply(__p, arguments);
        };
        with (obj || {}) __p.push('<div class="view">  <input class="toggle" type="checkbox" '), completed && __p.push("checked"), __p.push(">    <label>", title, '</label>  <button class="destroy"></button></div><input class="edit" value="'
, title, '">');
        return __p.join("");
    };
}), define("tpl!templates/todoListCompositeView.tmpl", function() {
    return function(obj) {
        var __p = [], print = function() {
            __p.push.apply(__p, arguments);
        };
        with (obj || {}) __p.push('<input id="toggle-all" type="checkbox"><label for="toggle-all">Mark all as complete</label><ul id="todo-list"></ul>');
        return __p.join("");
    };
}), define("tpl!templates/footer.tmpl", function() {
    return function(obj) {
        var __p = [], print = function() {
            __p.push.apply(__p, arguments);
        };
        with (obj || {}) __p.push('<span id="todo-count"><strong></strong> items left</span><ul id="filters">  <li>    <a class="selected" href="#/">All</a>  </li>  <li>    <a href="#/active">Active</a>  </li>  <li>    <a href="#/completed">Completed</a>  </li></ul><button id="clear-completed">Clear completed</button>');
        return __p.join("");
    };
}), define("tpl!templates/header.tmpl"
, function() {
    return function(obj) {
        var __p = [], print = function() {
            __p.push.apply(__p, arguments);
        };
        with (obj || {}) __p.push('<h1>todos</h1><input id="new-todo" placeholder="What needs to be done?" autofocus>');
        return __p.join("");
    };
}), define("templates", [ "require", "tpl!templates/todoItemView.tmpl", "tpl!templates/todoListCompositeView.tmpl", "tpl!templates/footer.tmpl", "tpl!templates/header.tmpl" ], function(e) {
    return {
        todoItemView: e("tpl!templates/todoItemView.tmpl"),
        todosCompositeView: e("tpl!templates/todoListCompositeView.tmpl"),
        footer: e("tpl!templates/footer.tmpl"),
        header: e("tpl!templates/header.tmpl")
    };
}), define("views/Header", [ "marionette", "templates" ], function(e, t) {
    return e.ItemView.extend({
        template: t.header,
        ui: {
            input: "#new-todo"
        },
        events: {
            "keypress #new-todo": "onCreateKeypress"
        
},
        onCreateKeypress: function(e) {
            var t = 13, n = this.ui.input.val().trim();
            e.which === t && n && (this.collection.create({
                title: n
            }), this.ui.input.val(""));
        }
    });
}), define("views/TodoItemView", [ "marionette", "templates" ], function(e, t) {
    return e.CompositeView.extend({
        tagName: "li",
        template: t.todoItemView,
        ui: {
            edit: ".edit"
        },
        events: {
            "click .destroy": "destroy",
            "dblclick label": "editClick",
            "keypress .edit": "updateOnEnter",
            "click .toggle": "toggle"
        },
        initialize: function() {
            this.model.on("change", this.render, this);
        },
        onRender: function() {
            this.$el.removeClass("active completed"), this.model.get("completed") ? this.$el.addClass("completed") : this.$el.addClass("active");
        },
        destroy: function() {
            this.model
.destroy();
        },
        toggle: function() {
            this.model.toggle().save();
        },
        editClick: function() {
            this.$el.addClass("editing"), this.ui.edit.focus();
        },
        updateOnEnter: function(e) {
            var t = 13, n = this.ui.edit.val().trim();
            e.which === t && n && (this.model.set("title", n).save(), this.$el.removeClass("editing"));
        }
    });
}), define("views/TodoListCompositeView", [ "marionette", "templates", "vent", "views/TodoItemView" ], function(e, t, n, r) {
    return e.CompositeView.extend({
        template: t.todosCompositeView,
        itemView: r,
        ui: {
            list: "#todo-list",
            toggleAll: "#toggle-all"
        },
        events: {
            "click #toggle-all": "toggleAllClick"
        },
        initialize: function() {
            this.bindTo(n, "todoList:filter", this.setFilter, this), this.bindTo(this.collection, "all", this.updateToggleCheckbox, this);
        }
,
        onRender: function() {
            this.updateToggleCheckbox();
        },
        updateToggleCheckbox: function() {
            var e = this.collection.reduce(function(e, t) {
                return e && t.get("completed");
            }, !0);
            this.ui.toggleAll.prop("checked", e);
        },
        appendHtml: function(e, t) {
            this.ui.list.append(t.el);
        },
        setFilter: function(e) {
            this.ui.list.removeClass("filter-all filter-completed filter-active").addClass("filter-" + e);
        },
        toggleAllClick: function(e) {
            var t = e.currentTarget.checked;
            this.collection.each(function(e) {
                e.save({
                    completed: t
                });
            });
        }
    });
}), define("views/ActiveCount", [ "marionette" ], function(e) {
    return e.View.extend({
        tagName: "span",
        initialize: function() {
            this.collection.on("all", this.render, this
);
        },
        render: function() {
            this.$el.html(this.collection.getActive().length);
        }
    });
}), define("views/Footer", [ "marionette", "vent", "templates", "views/ActiveCount" ], function(e, t, n, r) {
    return e.Layout.extend({
        template: n.footer,
        regions: {
            count: "#todo-count strong"
        },
        events: {
            "click #clear-completed": "clearCompletedClick"
        },
        onRender: function() {
            this.count.show(new r({
                collection: this.collection
            }));
        },
        clearCompletedClick: function() {
            t.trigger("todoList:clear:completed");
        }
    });
}), define("app", [ "marionette", "vent", "collections/TodoList", "views/Header", "views/TodoListCompositeView", "views/Footer" ], function(e, t, n, r, i, s) {
    function a() {
        u.length === 0 ? (o.main.$el.hide(), o.footer.$el.hide()) : (o.main.$el.show(), o.footer.$el.show());
    }
    var o = new 
e.Application, u = new n;
    return u.fetch(), o.addRegions({
        header: "#header",
        main: "#main",
        footer: "#footer"
    }), o.addInitializer(function() {
        var e = {
            collection: u
        };
        o.header.show(new r(e)), o.main.show(new i(e)), o.footer.show(new s(e)), o.bindTo(e.collection, "all", a), a();
    }), t.on("todoList:clear:completed", function() {
        function e(e) {
            e.destroy();
        }
        u.getCompleted().forEach(e);
    }), o;
}), define("routers/index", [ "marionette" ], function(e) {
    return e.AppRouter.extend({
        appRoutes: {
            "*filter": "setFilter"
        }
    });
}), define("controllers/index", [ "vent" ], function(e) {
    return {
        setFilter: function(t) {
            e.trigger("todoList:filter", t.trim() || "");
        }
    };
}), require.config({
    paths: {
        underscore: "lib/underscore",
        backbone: "lib/backbone",
        marionette: "lib/backbone.marionette"
,
        jquery: "../../../../assets/jquery.min",
        tpl: "lib/tpl"
    },
    shim: {
        "lib/backbone-localStorage": [ "backbone" ],
        underscore: {
            exports: "_"
        },
        backbone: {
            exports: "Backbone",
            deps: [ "jquery", "underscore" ]
        },
        marionette: {
            exports: "Backbone.Marionette",
            deps: [ "backbone" ]
        }
    },
    deps: [ "jquery", "underscore" ]
}), require([ "app", "backbone", "routers/index", "controllers/index" ], function(e, t, n, r) {
    e.start(), new n({
        controller: r
    }), t.history.start();
}), define("main", function() {});