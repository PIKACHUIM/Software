module.exports = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 856)
}({
    0: function (e, t, n) {
        "use strict";

        function r(e, t, n, r, o, i, a, s) {
            var l, c = "function" == typeof e ? e.options : e;
            if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), i && (c._scopeId = "data-v-" + i), a ? (l = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
            }, c._ssrRegister = l) : o && (l = s ? function () {
                o.call(this, this.$root.$options.shadowRoot)
            } : o), l) if (c.functional) {
                c._injectStyles = l;
                var d = c.render;
                c.render = function (e, t) {
                    return l.call(t), d(e, t)
                }
            } else {
                var u = c.beforeCreate;
                c.beforeCreate = u ? [].concat(u, l) : [l]
            }
            return {exports: e, options: c}
        }

        n.d(t, "a", function () {
            return r
        })
    }, 1: function (e, t, n) {
        e.exports = n(8)(131)
    }, 1073: function (e, t) {
    }, 1075: function (e, t) {
    }, 1077: function (e, t) {
    }, 11: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(3), i = n(2), a = n(1), s = n(13), l = n(22), c = a.default.getLogger("Thunder.Util"),
            d = "Thunder Network\\Thunder7.9\\";

        function u(e) {
            let t = e;
            return 0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 ? t = e.substring(1, e.length - 1) : 0 === e.indexOf("'") && e.lastIndexOf("'") === e.length - 1 && (t = e.substring(1, e.length - 1)), t
        }

        !function (e) {
            function t() {
                let e = l.ThunderHelper.getSystemTempPath(), t = l.ThunderHelper.getLogicalDriveStrings(), n = 0;
                for (let r = 0; r < t.length; r++) {
                    if (l.ThunderHelper.getDriveType(t[r]) === l.ThunderHelper.DriverType.DRIVE_FIXED) {
                        let o = l.ThunderHelper.getDriveInfo(t[r]);
                        n < o.freeBytes && t[r] !== e && (n = o.freeBytes, e = t[r])
                    }
                }
                return e.substring(0, 1) + ":\\迅雷下载"
            }

            function a(e) {
                let t = (e.style.webkitTransform || getComputedStyle(e, "").getPropertyValue("-webkit-transform") || e.style.transform || getComputedStyle(e, "").getPropertyValue("transform")).match(/\-?[0-9]+\.?[0-9]*/g);
                return {x: parseInt(t && (t[12] || t[4]) || "0", 10), y: parseInt(t && (t[13] || t[5]) || "0", 10)}
            }

            e.formatSize = function (e, t) {
                0 === t || (t = t || 2);
                let n = "0B";
                if ("number" == typeof e && e > 0) {
                    let r = ["B", "KB", "MB", "GB", "TB"], o = 0, i = e;
                    for (; i >= 1e3 && !(o >= 4);) i /= 1024, o += 1;
                    n = -1 === String(i).indexOf(".") ? i + r[o] : i.toFixed(t) + r[o]
                }
                return n
            }, e.formatSizeCustom = function (e, t = 2, n = 5) {
                let r = "0B";
                if ("number" == typeof e && e > 0) {
                    let o = ["B", "KB", "MB", "GB", "TB"], i = 0, a = e;
                    for (; a >= 1e3 && !(i >= 4);) a /= 1024, i += 1;
                    if (-1 === String(a).indexOf(".")) r = a + o[i]; else {
                        let e = a.toFixed(t);
                        e.length <= n ? r = "KB" !== o[i] && "MB" !== o[i] || 1 === t ? e + o[i] : a.toFixed(1) + o[i] : ("." === (e = e.substr(0, n))[n - 1] && (e = e.substr(0, n - 1)), r = e + o[i])
                    }
                }
                return r
            }, e.isDigital = function (e) {
                let t = !1;
                return /^\d+$/.test(e) && (t = !0), t
            }, e.isAlpha = function (e) {
                let t = !1;
                return /[A-Za-z]/.test(e) && (t = !0), t
            }, e.isUpperCase = function (e) {
                let t = !1;
                return /[A-Z]/.test(e) && (t = !0), t
            }, e.isLowerCase = function (e) {
                let t = !1;
                return /[a-z]/.test(e) && (t = !0), t
            }, e.isChinese = function (e) {
                let t = !1;
                return /[\u4E00-\u9FA5]/.test(e) && (t = !0), t
            }, e.replaceNonDigital = function (e) {
                return e.replace(/[^\d]/g, "")
            }, e.replaceNonAlpha = function (e) {
                return e.replace(/[^A-Za-z]/g, "")
            }, e.replaceNonWord = function (e) {
                return e.replace(/[^\W]/g, "")
            }, e.getDefaultDownloadDir = t, e.getMaxFreeDriver = function () {
                return t().substring(0, 1)
            }, e.deepCopy = function (e) {
                let t = JSON.stringify(e), n = null;
                try {
                    n = JSON.parse(t)
                } catch (e) {
                    c.warning(e)
                }
                return n
            }, e.swap = function (e, t, n) {
                do {
                    if (t < 0 || t >= e.length) break;
                    if (n < 0 || n >= e.length) break;
                    if (t === n) break;
                    e[t] = e.splice(n, 1, e[t])[0]
                } while (0);
                return e
            }, e.compareNocase = function (e, t) {
                let n = !1;
                do {
                    if (void 0 === e && void 0 === t) {
                        n = !0;
                        break
                    }
                    if (void 0 === e || void 0 === t) break;
                    if ("string" != typeof e || "string" != typeof t) break;
                    n = e.toLowerCase() === t.toLowerCase()
                } while (0);
                return n
            }, e.parseCommandLine = function (e) {
                let t = 0, n = "", r = !1, o = [], i = e.length;
                for (let a = 0; a < i; a++) {
                    let s = e[a];
                    if ('"' !== s && "'" !== s || ("" === n ? (r = !0, n = s) : n === s && (r = !1, n = "")), " " !== s || r || a === i - 1) {
                        if (a === i - 1) {
                            let n = e.substring(t);
                            "" !== n.trim() && o.push(u(n))
                        }
                    } else {
                        let n = e.substring(t, a);
                        "" !== n.trim() && o.push(u(n)), t = a + 1
                    }
                }
                return o
            }, e.getThunderTempPath = function (e, t) {
                return r(this, void 0, void 0, function* () {
                    const r = yield Promise.resolve().then(() => n(12));
                    let o = i.join(r.tmpdir(), d);
                    return t && (o = i.join(o, t)), void 0 !== e && e && (yield s.FileSystemAWNS.mkdirsAW(o)), o
                })
            }, e.setQueryString = function (e, t) {
                return Object.keys(t).forEach((n, r) => {
                    e += 0 === r ? "?" : "&", e += `${n}=${t[n]}`
                }), e
            }, e.getQueryString = function (e, t) {
                return e && t && e.match(new RegExp(`(^${t}|[?|&]${t})=([^&#]+)`)) ? RegExp.$2 : ""
            }, e.isClipboardTextFormatAvailable = function () {
                let e = !1, t = o.clipboard.availableFormats();
                for (let n of t) if ("text/plain" === n) {
                    e = !0;
                    break
                }
                return e
            }, e.keywordsHighLight = function (e, t, n) {
                if (!e) return "";
                if (!t) return e;
                if (0 === e.length) return e;
                if (0 === t.length) return e;
                let r = /\\/, o = t.split(" ");
                if (0 === (o = o.filter(e => e.trim().length > 0)).length) return e;
                for (let t = 0; t < o.length; t++) if (o[t].search(r) > 0) return e;
                n = void 0 === n || null === n ? "#FF0000" : n;
                let i = "", a = ["\\[", "\\^", "\\*", "\\(", "\\)", "\\|", "\\?", "\\$", "\\.", "\\+"], s = "", l = "|";
                for (let e = 0; e < o.length; e++) {
                    for (let t = 0; t < a.length; t++) {
                        let n = new RegExp(a[t], "g");
                        o[e] = o[e].replace(n, a[t])
                    }
                    e === o.length - 1 && (l = ""), s = s.concat(o[e], l)
                }
                let c = new RegExp(s, "gi");
                return i = e.replace(c, e => '<span style= "color:' + n + '">' + e + "</span>")
            }, e.isDef = function (e) {
                return void 0 !== e && null !== e
            }, e.isUndef = function (e) {
                return void 0 === e || null === e
            }, e.setStyle = function (e, t) {
                Object.entries(t).forEach(([t, n]) => {
                    e.style[t] = n
                })
            }, e.setCSSProperties = function (e, t) {
                Object.entries(t).forEach(([t, n]) => {
                    e.style.setProperty(t, n)
                })
            }, e.versionCompare = function (e, t) {
                let n = e.split("."), r = t.split("."), o = 0;
                for (let e = 0; e < n.length; e++) {
                    if (Number(n[e]) - Number(r[e]) > 0) {
                        o = 1;
                        break
                    }
                    if (Number(n[e]) - Number(r[e]) < 0) {
                        o = -1;
                        break
                    }
                }
                return o
            }, e.throttle = function (e, t) {
                let n, r = 0;
                return (...o) => {
                    const i = Date.now();
                    clearTimeout(n), i - r > t ? (e(...o), r = i) : n = setTimeout(() => {
                        e(...o), r = i
                    }, t)
                }
            }, e.debounce = function (e, t) {
                let n = null;
                return (...r) => {
                    n && clearTimeout(n), n = setTimeout(() => {
                        e(...r)
                    }, t)
                }
            }, e.getElementFixed = function (e) {
                let t = e.offsetLeft, n = e.offsetTop, r = e.offsetParent;
                for (; null !== r;) {
                    let e = a(r);
                    t += r.offsetLeft + e.x, n += r.offsetTop + e.y, r = r.offsetParent
                }
                return {x: t, y: n}
            }, e.escapeHTML = function (e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
            }, e.unescapeHTML = function (e) {
                return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'")
            }, e.isValidPath = function (e) {
                let t = !1;
                do {
                    let n = "", r = "";
                    if (/^[a-zA-Z]:\\/.test(e)) n = e.slice(3); else {
                        if (0 !== e.indexOf("\\\\")) break;
                        {
                            let t = e.indexOf("\\", 2);
                            if (-1 === t || t === e.length - 1) break;
                            if ("" === (r = (n = e.slice(2)).substr(0, t - 2))) break
                        }
                    }
                    if (/[\*\"<>\?:\|]/i.test(n)) break;
                    if (e.length > 256) break;
                    if ("" === r) {
                        t = !0;
                        break
                    }
                    let o = r.indexOf(".ipv6-literal.net");
                    -1 !== o ? (-1 !== (o = (r = r.substr(0, o)).indexOf("%")) && (r = r.substr(0, o)), r = r.replace(/\-/g, ":"), /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(r) && (t = !0)) : /(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/.test(r) && (t = !0)
                } while (0);
                return t
            };
            let f = void 0;

            function h(e, t = "normal 12px sans-serif") {
                f || (f = document.createElement("canvas"));
                let n = f.getContext("2d");
                return n.font = t, n.measureText(e).width
            }

            function p(e, t, n = "normal 12px sans-serif", r = 1) {
                function o(e, t, r, i, a) {
                    let s = -1;
                    do {
                        if (e > t) {
                            s = t;
                            break
                        }
                        let l = Math.round((e + t) / 2), c = h(`${r.substr(0, l)}...${i}`, n);
                        if (a === c) {
                            s = l;
                            break
                        }
                        if (a > c) {
                            if (Math.round(a) === Math.round(c)) {
                                s = l;
                                break
                            }
                            s = o(l + 1, t, r, i, a)
                        } else if (c > a) {
                            if (Math.round(a) === Math.round(c)) {
                                s = l - 1;
                                break
                            }
                            s = o(e, l - 1, r, i, a)
                        }
                    } while (0);
                    return s
                }

                let a = e;
                do {
                    let s = t.offsetWidth * r;
                    if (s > h(e, n)) break;
                    let l = i.extname(e);
                    "" !== l && (l = l.substring(1));
                    let c = e.substr(0, e.length - l.length - 1);
                    if (!c) break;
                    let d = o(0, c.length, c, l, s);
                    if (-1 === d) break;
                    a = `${c.substr(0, d - 2 * (r - 1))}...${l}`
                } while (0);
                return a
            }

            e.getTextWidth = h, e.getOmitName = p, e.getOmitNameMultiLine = function (e, t, n) {
                return p(e, t, "normal 12px microsoft yahei", 2)
            }, e.setTimeoutAw = function (e, t) {
                return new Promise((n, r) => {
                    setTimeout(() => {
                        t && t(), n()
                    }, e)
                })
            }
        }(t.ThunderUtil || (t.ThunderUtil = {}))
    }, 12: function (e, t) {
        e.exports = require("os")
    }, 13: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(19), i = n(2), a = n(6).promisify, s = n(1).default.getLogger("Thunder.base.fs-utilities");
        !function (e) {
            function t(e) {
                return r(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = a(o.access);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            s.information(e)
                        }
                    }
                    return t
                })
            }

            function l(e) {
                return r(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = a(o.mkdir);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function c(e) {
                return r(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = a(o.rmdir);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function d(e) {
                return r(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = a(o.unlink);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function u(e) {
                return r(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = a(o.readdir);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function f(e) {
                return r(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = a(o.lstat);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function h(e, t) {
                return r(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e && void 0 !== t) {
                        let r = i.join(e, t), o = yield f(r);
                        n = null !== o && o.isDirectory() ? yield p(r) : yield d(r)
                    }
                    return n
                })
            }

            function p(e) {
                return r(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e) {
                        if (yield t(e)) {
                            n = !0;
                            let t = (yield u(e)) || [];
                            for (let r = 0; r < t.length; r++) n = (yield h(e, t[r])) && n;
                            (n || 0 === t.length) && (n = (yield c(e)) && n)
                        }
                    }
                    return n
                })
            }

            function _(e) {
                return r(this, void 0, void 0, function* () {
                    let n = !1;
                    return s.information("mkdirsAW", e), void 0 !== e && ((yield t(e)) ? n = !0 : i.dirname(e) === e ? n = !1 : (yield _(i.dirname(e))) && (n = yield l(e))), n
                })
            }

            function g(e, n) {
                return r(this, void 0, void 0, function* () {
                    let r;
                    if (e.toLowerCase() !== n.toLowerCase() && (yield t(e))) {
                        let t = o.createReadStream(e), i = o.createWriteStream(n);
                        r = new Promise(e => {
                            t.pipe(i).on("finish", () => {
                                e(!0)
                            })
                        })
                    } else r = new Promise(e => {
                        e(!1)
                    });
                    return r
                })
            }

            e.readFileAW = function (e) {
                return r(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = a(o.readFile);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }, e.writeFileAW = function (e, t) {
                return r(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e && null !== t) {
                        const r = a(o.writeFile);
                        try {
                            yield r(e, t), n = !0
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return n
                })
            }, e.existsAW = t, e.dirExistsAW = function (e) {
                return r(this, void 0, void 0, function* () {
                    let n = !1;
                    do {
                        if (!(n = yield t(e))) break;
                        let r = yield f(e);
                        if (!r) break;
                        n = r.isDirectory()
                    } while (0);
                    return n
                })
            }, e.mkdirAW = l, e.rmdirAW = c, e.unlinkAW = d, e.readdirAW = u, e.lstatAW = f, e.rmdirsAW = p, e.mkdirsAW = _, e.renameAW = function (e, t) {
                return r(this, void 0, void 0, function* () {
                    if (void 0 !== e && void 0 !== t) {
                        const n = a(o.rename);
                        try {
                            yield n(e, t)
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                })
            }, e.copyFileAW = g, e.copyDirsAW = function e(n, o) {
                return r(this, void 0, void 0, function* () {
                    let r = !1, a = yield f(n);
                    if (a.isDirectory()) {
                        r = yield _(o);
                        let s = (yield u(n)) || [];
                        for (let l = 0; l < s.length; l++) {
                            let c = i.join(n, s[l]), d = i.join(o, s[l]);
                            (r = yield t(c)) && (r = (a = yield f(c)).isDirectory() ? yield e(c, d) : yield g(c, d))
                        }
                    }
                    return r
                })
            }, e.mkdtempAW = function () {
                return r(this, void 0, void 0, function* () {
                    let e = !1;
                    const t = a(o.mkdtemp), r = (yield Promise.resolve().then(() => n(12))).tmpdir();
                    try {
                        e = yield t(`${r}${i.sep}`)
                    } catch (e) {
                        s.warning(e)
                    }
                    return e
                })
            }, e.deleteEmptySubDirs = function (e, n) {
                return r(this, void 0, void 0, function* () {
                    let r = !0;
                    e = i.normalize(e), n = i.normalize(n), e.length > 3 && "\\" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), n.length > 3 && "\\" === n[n.length - 1] && (n = n.slice(0, n.length - 1));
                    do {
                        if (0 !== e.indexOf(n)) {
                            r = !1;
                            break
                        }
                        let o = e;
                        for (; o !== n;) {
                            if ((yield t(o)) && !(yield c(o))) {
                                r = !1;
                                break
                            }
                            o = i.dirname(o)
                        }
                    } while (0);
                    return r
                })
            }, e.getFileSize = function e(n) {
                return r(this, void 0, void 0, function* () {
                    let r = 0;
                    do {
                        if (!n) break;
                        if (!(yield t(n))) break;
                        let o = yield f(n);
                        if (o) if (o.isDirectory()) {
                            let t = yield u(n);
                            for (let o = 0; o < t.length; o++) r += (yield e(i.join(n, t[o])))
                        } else r = o.size
                    } while (0);
                    return r
                })
            }, e.isDirectoryEmptyAW = function (e, n = !0) {
                return r(this, void 0, void 0, function* () {
                    let r = !0;
                    do {
                        if (!e) {
                            r = !1;
                            break
                        }
                        if (!(yield t(e))) {
                            r = n;
                            break
                        }
                        let o = yield f(e);
                        if (!o) {
                            r = !1;
                            break
                        }
                        if (!o.isDirectory()) {
                            r = !1;
                            break
                        }
                        if ((yield u(e)).length > 0) {
                            r = !1;
                            break
                        }
                    } while (0);
                    return r
                })
            }
        }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
    }, 14: function (e, t) {
        e.exports = require("events")
    }, 15: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(2), i = n(9), a = n(1).default.getLogger("XLStat");
        let s = i.default(o.join(__rootDir, "../bin/ThunderHelper.node"));

        function l(e = "") {
            let t;
            if ("string" == typeof e) t = e; else if (c(e) && "object" == typeof e) {
                let n = [];
                for (let t in e) c(e[t]) && n.push(t + "=" + encodeURIComponent(e[t]));
                t = n.join(",")
            }
            return t
        }

        function c(e) {
            return void 0 !== e && null !== e
        }

        !function (e) {
            let t = null;

            function n() {
                return t || (t = s.xlstat4), t
            }

            function o(e, t = "", o = "", i = 0, s = 0, c = 0, d = 0, u = "", f = 0) {
                return r(this, void 0, void 0, function* () {
                    let r = 0;
                    do {
                        if (void 0 === e) {
                            r = 1;
                            break
                        }
                        let h = l(u);
                        r = "browser" === process.type ? yield new Promise(a => {
                            r = n().asyncTrackEvent(e, t, o, i, s, c, d, h, f, e => {
                                a(e)
                            })
                        }) : n().trackEvent(e, t, o, i, s, c, d, h, f), a.information(e, t, o, i, s, c, d, h, f)
                    } while (0);
                    return r
                })
            }

            function i(e, t = 0) {
                do {
                    if (void 0 === e) break;
                    "browser" !== process.type && n().trackClick(e, t)
                } while (0)
            }

            e.asyncTrackEvent = o, e.trackEvent = function (e, t = "", n = "", r = 0, i = 0, a = 0, s = 0, l = "", c = 0) {
                o(e, t, n, r, i, a, s, l, c).catch()
            }, e.trackClick = i, e.trackShow = function (e, t = 0) {
                i(e, t)
            }, e.setUserID = function (e = 0, t = 0) {
                "browser" !== process.type && n().setUserID(e, t)
            }, e.initParam = function (e) {
                return r(this, void 0, void 0, function* () {
                    let t = -1;
                    return t = "browser" === process.type ? yield new Promise(t => {
                        n().asyncInitParam(e, (e, n) => {
                            t(e ? n : -1)
                        })
                    }) : yield new Promise(t => {
                        n().initParamRemote(e, e => {
                            t(e)
                        })
                    })
                })
            }, e.asyncUninit = function (e) {
                return r(this, void 0, void 0, function* () {
                    "browser" === process.type && (yield new Promise(t => {
                        n().asyncUninit(e, () => {
                            t()
                        })
                    }))
                })
            }, e.uninit = function () {
                "browser" === process.type && n().waitFinish()
            }
        }(t.XLStatNS || (t.XLStatNS = {}))
    }, 16: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t, n, r, o, i, a, s, l, c, d, u, f, h, p, _, g, m, v, b, y;
            !function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.FileOccupied = 211] = "FileOccupied", e[e.FileAccessDenied = 212] = "FileAccessDenied", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn", e[e.DownloadSDKCrash = 10001] = "DownloadSDKCrash", e[e.torrentFileNotExist = 10002] = "torrentFileNotExist"
            }(t = e.TaskError || (e.TaskError = {})), function (e) {
                e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
            }(n = e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
            }(r = e.TaskStatus || (e.TaskStatus = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
            }(o = e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
                e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
            }(i = e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.P2sp = 1] = "P2sp", e[e.Bt = 2] = "Bt", e[e.Emule = 3] = "Emule", e[e.Group = 4] = "Group", e[e.Magnet = 5] = "Magnet"
            }(a = e.TaskType || (e.TaskType = {})), function (e) {
                e.Unkown = "Unkown", e.Downloading = "Downloading", e.Completed = "Completed", e.Recycle = "Recycle"
            }(s = e.CategroyViewID || (e.CategroyViewID = {})), function (e) {
                e[e.Unknow = 0] = "Unknow", e[e.TaskCreated = 1] = "TaskCreated", e[e.InsertToCategoryView = 2] = "InsertToCategoryView", e[e.RemoveFromCategoryView = 3] = "RemoveFromCategoryView", e[e.StatusChanged = 4] = "StatusChanged", e[e.DetailChanged = 5] = "DetailChanged", e[e.ChannelInfoChanged = 6] = "ChannelInfoChanged", e[e.DcdnStatusChanged = 7] = "DcdnStatusChanged", e[e.TaskDescriptionChanged = 8] = "TaskDescriptionChanged", e[e.TaskUserRead = 9] = "TaskUserRead", e[e.TaskRenamed = 10] = "TaskRenamed", e[e.TaskMovedEnd = 11] = "TaskMovedEnd", e[e.TaskMovingStateChange = 12] = "TaskMovingStateChange", e[e.BtSubFileDetailChanged = 13] = "BtSubFileDetailChanged", e[e.BtSubFileLoaded = 14] = "BtSubFileLoaded", e[e.BtSubFileForbidden = 15] = "BtSubFileForbidden", e[e.BtSubFileDcdnStatusChanged = 16] = "BtSubFileDcdnStatusChanged", e[e.TaskCategoryMovedEnd = 17] = "TaskCategoryMovedEnd", e[e.GroupTaskSubFileDetailChanged = 18] = "GroupTaskSubFileDetailChanged", e[e.TaskDestroying = 19] = "TaskDestroying", e[e.TaskDestroyed = 20] = "TaskDestroyed"
            }(l = e.TaskEventType || (e.TaskEventType = {})), function (e) {
                e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.VirtualId = 2] = "VirtualId", e[e.SrcTotal = 3] = "SrcTotal", e[e.SrcUsing = 4] = "SrcUsing", e[e.FileSize = 5] = "FileSize", e[e.ReceivedSize = 6] = "ReceivedSize", e[e.DownloadSize = 7] = "DownloadSize", e[e.TotalDownloadSize = 8] = "TotalDownloadSize", e[e.CreateTime = 9] = "CreateTime", e[e.CompletionTime = 10] = "CompletionTime", e[e.DownloadingPeriod = 11] = "DownloadingPeriod", e[e.Progress = 12] = "Progress", e[e.RecycleTime = 13] = "RecycleTime", e[e.FileCreated = 14] = "FileCreated", e[e.Forbidden = 15] = "Forbidden", e[e.CategoryId = 16] = "CategoryId", e[e.UserRead = 17] = "UserRead", e[e.OpenOnComplete = 18] = "OpenOnComplete", e[e.GroupTaskId = 19] = "GroupTaskId", e[e.DownloadSubTask = 20] = "DownloadSubTask", e[e.NameType = 21] = "NameType", e[e.OwnerProduct = 22] = "OwnerProduct", e[e.FileIndex = 23] = "FileIndex", e[e.NameFixed = 24] = "NameFixed", e[e.ValidDownloadSize = 25] = "ValidDownloadSize", e[e.RealDownloadSize = 26] = "RealDownloadSize", e[e.ResourceLegal = 27] = "ResourceLegal", e[e.TaskType = 28] = "TaskType", e[e.ErrorCode = 29] = "ErrorCode", e[e.PlayPosition = 30] = "PlayPosition", e[e.Duration = 31] = "Duration", e[e.NumberEnd = 32] = "NumberEnd", e[e.BooleanStart = 4096] = "BooleanStart", e[e.Destroyed = 4097] = "Destroyed", e[e.Background = 4098] = "Background", e[e.Moving = 4099] = "Moving", e[e.BooleanEnd = 4100] = "BooleanEnd", e[e.StringStart = 8192] = "StringStart", e[e.TaskName = 8193] = "TaskName", e[e.SavePath = 8194] = "SavePath", e[e.RelativePath = 8195] = "RelativePath", e[e.TaskUrl = 8196] = "TaskUrl", e[e.RefUrl = 8197] = "RefUrl", e[e.Cid = 8198] = "Cid", e[e.Gcid = 8199] = "Gcid", e[e.Cookie = 8200] = "Cookie", e[e.ProductInfo = 8201] = "ProductInfo", e[e.Origin = 8202] = "Origin", e[e.Description = 8203] = "Description", e[e.UserData = 8204] = "UserData", e[e.OriginName = 8205] = "OriginName", e[e.HTTPContentType = 8206] = "HTTPContentType", e[e.CategoryViewId = 8207] = "CategoryViewId", e[e.YunTaskId = 8208] = "YunTaskId", e[e.StringEnd = 8209] = "StringEnd", e[e.ObjectStart = 12288] = "ObjectStart", e[e.ObjectEnd = 12289] = "ObjectEnd"
            }(c = e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo", e[e.ValidDownloadSize = 8388608] = "ValidDownloadSize", e[e.OriginName = 16777216] = "OriginName", e[e.HTTPContentType = 33554432] = "HTTPContentType", e[e.PlayPosition = 67108864] = "PlayPosition", e[e.Duration = 134217728] = "Duration", e[e.YunTaskId = 268435456] = "YunTaskId"
            }(d = e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown"
            }(u = e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown"
            }(f = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
                e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 4096] = "StringStart", e[e.FinalName = 4097] = "FinalName", e[e.RelativePath = 4098] = "RelativePath", e[e.FileName = 4099] = "FileName", e[e.FilePath = 4100] = "FilePath", e[e.Cid = 4101] = "Cid", e[e.Gcid = 4102] = "Gcid", e[e.UserRead = 4103] = "UserRead", e[e.PlayPosition = 4104] = "PlayPosition", e[e.Duration = 4105] = "Duration", e[e.StringEnd = 4106] = "StringEnd"
            }(h = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
                e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
            }(p = e.KeyType || (e.KeyType = {})), function (e) {
                e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
            }(_ = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
                e[e.ExtEqual = 1] = "ExtEqual", e[e.NameLikeAndExtEqual = 2] = "NameLikeAndExtEqual", e[e.TaskTypeEqual = 4] = "TaskTypeEqual"
            }(g = e.FilterKeyType || (e.FilterKeyType = {})), function (e) {
                e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
            }(m = e.KeyFilter || (e.KeyFilter = {})), function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Recycle = 2] = "Recycle", e[e.Recover = 3] = "Recover", e[e.ReDownload = 4] = "ReDownload", e[e.MoveThoughCategory = 5] = "MoveThoughCategory"
            }(v = e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.Manual = 0] = "Manual", e[e.PauseAll = 1] = "PauseAll", e[e.DeleteTask = 2] = "DeleteTask", e[e.TaskJammed = 3] = "TaskJammed", e[e.LowSpeed = 4] = "LowSpeed", e[e.MaxDownloadReduce = 5] = "MaxDownloadReduce", e[e.MoveTask = 6] = "MoveTask", e[e.SelectDownloadLists = 7] = "SelectDownloadLists", e[e.PrivateLoginOut = 8] = "PrivateLoginOut", e[e.FreeDownload = 9] = "FreeDownload", e[e.Exit = 10] = "Exit"
            }(b = e.TaskStopReason || (e.TaskStopReason = {})), function (e) {
                e[e.RESOURCE_FROM_MEMBER = 1] = "RESOURCE_FROM_MEMBER", e[e.RESOURCE_FROM_OFFLINE = 2] = "RESOURCE_FROM_OFFLINE", e[e.RESOURCE_FROM_CRYSTAL_LARGE = 4] = "RESOURCE_FROM_CRYSTAL_LARGE", e[e.RESOURCE_FROM_CRYSTAL_SMALL = 8] = "RESOURCE_FROM_CRYSTAL_SMALL", e[e.RESOURCE_FROM_DCDN = 16] = "RESOURCE_FROM_DCDN", e[e.RESOURCE_FROM_FREEDCDN = 32] = "RESOURCE_FROM_FREEDCDN"
            }(y = e.XLResourceFrom || (e.XLResourceFrom = {}))
        }(t.DownloadKernel || (t.DownloadKernel = {}))
    }, 17: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(2);
        let o, i = console;

        function a(e = 5) {
            let t = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i, n = /at\s+()(.*):(\d*):(\d*)/i,
                o = (new Error).stack.split("\n").slice(e + 1);
            o.shift();
            let i = [];
            return o.forEach((e, o) => {
                let a = t.exec(e) || n.exec(e), s = {};
                a && 5 === a.length && (s.method = a[1], s.path = a[2], s.line = a[3], s.pos = a[4], s.file = r.basename(s.path), i.push(s))
            }), i
        }

        if (o = "renderer" === process.type ? "[Renderer] [async-remote]:" : "browser" === process.type ? "[Browser] [async-remote]:" : `[${process.type}] [async-remote]`, t.traceback = function (e = 5) {
            return a(e).map(e => e.method + "@(" + e.file + ")").join(" <= ")
        }, t.time = function (...e) {
            i.time(...e)
        }, t.timeEnd = function (...e) {
            i.timeEnd(...e)
        }, t.trace = function (...e) {
            let t = a(), n = "";
            t[0] && t[0].method && (n = n), i.trace(o, ...e)
        }, t.info = function (...e) {
            let t = a(), n = "anonymous";
            t[0] && t[0].method && (n = n), i.info(o, "[" + n + "]", e.join(","))
        }, t.warn = function (...e) {
            let t = a(), n = "";
            t[0] && t[0].method && (n = n), i.warn("<WARN>" + o, "[" + n + "]", e.join(","))
        }, t.error = function (...e) {
            let t = a(), n = "";
            t[0] && t[0].method && (n = n), i.error("<ERROR>" + o, "[" + n + "]", e.join(","))
        }, t.log = function (...e) {
            i.log(o, ...e)
        }, !process.env.DEBUG_ASYNC_REMOTE) {
            let e = function () {
            };
            t.traceback = e, t.time = e, t.timeEnd = e, t.trace = e, t.info = e, t.warn = e, t.error = e, t.log = e
        }
    }, 171: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e.eventPluginLoderPluginReady = "event_plugin_loader_plugin_ready", e.eventDownloadItemActive = "event_download_item_active", e.eventDownloadItemChosen = "event_download_item_chosen", e.eventDetailSwitch2Index = "event_detail_switch_to_index", e.eventDownloadSwitchCategory = "event_download_switch_category", e.evetDownloadMove2Tail = "event_download_move_to_tail", e.eventBringMainWindowToTop = "event_bring_main_window_to_top", e.eventDownloadContextMenuClick = "event_download_context_menu_click", e.eventOnCommand = "event_on_command", e.eventOnCommandline = "event_on_command_line", e.eventDownloadKernelInitEnd = "event_dk_init_end", e.eventDownloadSDKRecover = "event_sdk_crash_recover", e.eventTaskDataBaseLoadEnd = "event_dk_task_data_base_load_end", e.eventGlobalDownloadSpeedChanged = "event_dk_global_download_speed_changed", e.eventGlobalUploadSpeedChanged = "event_dk_global_upload_speed_changed", e.eventConfigInitFinished = "event_config_init_finished", e.eventConfigValueChanged = "event_config_value_changed", e.eventBHOConfigInitFinished = "event_bho_config_init_finished", e.eventBHOConfigValueChanged = "event_bho_config_value_changed", e.eventMemoryConfigValueChanged = "event_memory_config_value_changed", e.eventShowHomePage = "event_show_home_page", e.eventShowSearchTaskPage = "event_show_searchtask_page", e.eventConfigBrowserInitFinished = "event_config_browser_init_finished", e.eventDownloadContextMenuPopup = "event_download_context_menu_popup", e.eventDownloadContextMenuEnd = "event_download_context_menu_end", e.eventEmbeddedBrowserWndClick = "event_embedded_browser_wnd_click", e.eventLoginWndCreate = "event_login_wnd_create", e.eventLoginWndShow = "event_login_wnd_show", e.eventLoginWndShowResult = "event_login_wnd_show_result", e.eventLoginWndClose = "event_login_wnd_close", e.eventRetryLoginWndCreate = "event_retry_login_wnd_create", e.eventModifierUserinfoWndCreate = "event_modifier-userinfo-wnd-create", e.eventBrowserNumberChange = "event_browser_number_change", e.eventUploadConfigInitFinished = "event_upload_config_init_finished", e.eventUploadConfigValueChanged = "event_upload_config_value_changed"
        }(t.NodeEventMesssageNS || (t.NodeEventMesssageNS = {}))
    }, 18: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e.channelRMNewTaskReadyForSetTaskData = "RM_NEWTASK_READYRORSETTASKDATA", e.channelRMNewTaskSetTaskData = "RM_NEWTASK_SETTASKDATA", e.channelRMPreNewTaskSetTaskData = "RM_PRENEWTASK_SETTASKDATA", e.channelRMNewTaskCreateNewTask = "RM_NEWTASK_CREATENEWTASK", e.channelRMNewTaskClose = "RM_NEWTASK_CLOSE", e.channelRMPreNewTaskClose = "RM_PRENEWTASK_CLOSE", e.channelRMNewTaskSetBTInfo = "RM_NEWTASK_SETBTINFO", e.channelRMNewTaskDownloadTorrent = "RM_NEW_TASK_DOWNLOAD_TORRENT", e.channelRMNewTaskCreateBtTask = "RM_NEWTASK_CRATEBTTASK", e.channelRMNewTaskCancleMagnet = "RM_NEWTASK_CANCLE_MAGNET", e.channelRMImportTorrent = "RM_NEWTASK_IMPORT_TORRENT", e.channelRMGetConfigValueResolve = "RM_GET_CONFIG_VALUE_RESOLVE", e.channelRMGetConfigValueReject = "RM_GET_CONFIG_VALUE_REJECT", e.channelRMSetConfigValueReject = "RM_SET_CONFIG_VALUE_REJECT", e.channelMRTrayMenuClick = "MR_TRAY_MENU_CLICK", e.channelMRNewTaskMagnetTaskCreated = "MR_NEW_TASK_MAGNET_TASK_CREATED", e.channelMRNewTaskDownloadTorrentResult = "MR_NEW_TASK_DOWNLOAD_TORRENT_RESULT", e.channelMRNewTaskCreateNewTaskResult = "MR_NEWTASK_CREATENEWTASK_RESULT", e.channelMRNewTaskCreateBtTaskResult = "RM_NEWTASK_CRATEBTTASK_RESULT", e.channelMRGetConfigValue = "MR_GET_CONFIG_VALUE", e.channelMRSetConfigValue = "MR_SET_CONFIG_VALUE", e.channelRMCommitPlanTask = "RM_PLANTASK_COMMIT", e.channelRMPerformePlanTask = "RM_PLANTASK_PERFORME", e.channelRMProcessSend = "RM_RENDER_PROCESS_INFO", e.channelRMGetPrivateSpaceInfo = "RM_RENDER_GET_PRIVATE_SPACE_INFO", e.channelMRGetPrivateSpaceInfoResult = "MR_RENDER_GET_PRIVATE_SPACE_INFO_RESULT", e.channelRMFileCopy = "RM_FILE_COPY", e.channelRMFileMove = "RM_FILE_MOVE", e.channelMRFileCopyResult = "MR_FILE_COPY_RESULT", e.channelMRFileMoveResult = "MR_FILE_MOVE_RESULT", e.channelRMGetSutitleByCid = "RM_RENDER_GET_SUBTITLE_BY_CID", e.channelMRGetSutitleByCidResult = "MR_RENDER_GET_SUBTITLE_BY_CID_RESULT", e.channelRMGetSutitleByName = "RM_RENDER_GET_SUBTITLE_BY_NAME", e.channelMRGetSutitleByNameResult = "MR_RENDER_GET_SUBTITLE_BY_NAME_RESULT", e.channelRMDownloadSutitle = "RM_RENDER_DOWNLOAD_SUBTITLE", e.channelMRDownloadSutitleSuc = "MR_RENDER_DOWNLOAD_SUBTITLE_SUCCESS", e.channelMRDownloadSutitleFail = "MR_RENDER_DOWNLOAD_SUBTITLE_FAIL", e.channelRMGetDisplayName = "RM_RENDER_GET_SUBTITLE_DISPLAYNAME", e.channelMRGetDisplayNameResult = "MR_RENDER_GET_SUBTITLE_DISPLAYNAME_RESULT", e.channelMRBringWindowToTop = "MR_RENDER_BRING_WINDOW_TO_TOP", e.channelRMDownloadXmp = "RM_RENDER_DOWNLOAD_XMP", e.channelRMXmpFixBoxCreated = "RM_RENDER_XMPFIXBOX_CREATED", e.channelMRFixXmpSuc = "MR_RENDER_FIX_XMP_SUC", e.channelMRFixXMPFail = "MR_RENDER_FIX_XMP_FAIL", e.channelRMDownloadXmpEx = "RM_RENDER_DOWNLOAD_XMP_EX", e.channelRMSetPosition = "RM_SET_POSITION", e.channelRMSetFoucs = "RM_SET_FOCUS", e.channelRMCreateAddressDropWnd = "RM_CREATE_ADDRESS_DROPWND", e.channelRMRefreshAddressDropWnd = "RM_REFRESH_ADDRESS_DROPWND", e.channelRMSelectAddressDropItem = "RM_SELECT_ADDRESS_DROPITEM", e.channelRMCreateSearchWindow = "RM_CREATE_SEARCH_WINDOW", e.channelRMShowSearchWindow = "RM_SHOW_SEARCH_WINDOW", e.channelRMAddressKeyDown = "RM_ADDRESS_BAR_KEYDOWN", e.channelMRFWAddressKeyDown = "MR_ADDRESS_FW_BAR_KEYDOWN", e.channelMRFWSelectAddressDropItem = "MR_FW_SELECT_ADDRESS_DROPITEM", e.channelRMAddressDropWndKeyDown = "RM_ADDRESS_DROPWND_KEYDOWN", e.channelRMClickMouse = "RM_CLICK_MOUSE", e.channelMRSearchBarFocusChange = "MR_SEARCHBAR_FOCUS_CHANGE", e.channelMRFWAddressDropWndKeyDown = "MR_FW_ADDRESS_DROPWND_KEYDOWN", e.channelMRClickAddressDropItem = "MR_CLICK_ADDRESS_DROPITEM", e.channelMRMainWndMax = "MR_MAINWINDOW_MAX", e.channelMRMainWndMin = "MR_MAINWINDOW_MIN", e.channelMRMainWndRestore = "MR_MAINWINDOW_RESTORE", e.channelRMGetBrowserStartType = "RM_GET_BROWSER_START_TYPE", e.channelMRGetBrowserStartTypeResult = "MR_GET_BROWSER_START_TYPE_RESULT", e.channelRMExecute = "RM_SHELL_EXECUTE", e.channelMRExecuteResult = "MR_SHELL_EXECUTE_RESULT", e.channelMRAdTipsClick = "MR_AD_TIPS_CLICK", e.channelMRNotificationMsg = "MR_NOTIFICATION_MSG", e.channelRMSetProgressBar = "RM_SET_PROGRESS_BAR", e.channelRMRoundWindow = "RM_ROUND_WINDOW", e.channelMRShowOrHideWindow = "MR_SHOW_OR_HIDE_WINDOW", e.channelMRSuspensionWindowShowOrHide = "MR_SUSPENSION_WINDOW_SHOW_OR_HIDE", e.channelRMConfigInitFinished = "RM_CONFIG_INIT_FINISHED", e.channelRMConfigValueChanged = "RM_CONFIG_VALUE_CHANGED", e.channelRMIndividuationBrowserMsg = "RM_INDIVIDUATION_BROWSER_MSG", e.channelMRIndividuationBrowserMsg = "MR_INDIVIDUATION_BROWSER_MSG", e.channelRMSetEnvironmentVariable = "RM_SET_ENVIRONMENT_VARIABLE", e.channelMREmbedPlayerPos = "MR_EMBED_PLAYER_POSITION", e.channelRMUpdateLogEnviroment = "RM_UPDATE_LOG_ENVIRONMENT", e.channelMRUpdateLogEnviroment = "MR_UPDATE_LOG_ENVIRONMENT"
        }(t.ThunderChannelList || (t.ThunderChannelList = {}))
    }, 19: function (e, t) {
        e.exports = require("fs")
    }, 2: function (e, t) {
        e.exports = require("path")
    }, 20: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.information = function (...e) {
        }, t.error = function (...e) {
        }, t.warning = function (...e) {
        }, t.critical = function (...e) {
        }, t.verbose = function (...e) {
        }, "development" === process.env.LOGGER_ENV && (t.information = function (...e) {
            console.log("information", e)
        }, t.error = function (...e) {
            console.log("error", e)
        }, t.warning = function (...e) {
            console.log("warning", e)
        }, t.critical = function (...e) {
            console.log("critical", e)
        }, t.verbose = function (...e) {
            console.log("verbose", e)
        })
    }, 21: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e.msgIPCCommunicatorForward = "ipc_communicator_forward", e.msgIPCSendToMain = "ipc_send_to_main", e.msgIPCSendToRenderer = "ipc_send_to_renderer", e.msgIPCRendererConnect = "ipc_renderer_connect", e.msgIPCRendererDisconnect = "ipc_renderer_disconnect", e.msgNCCallNativeFunction = "nc_call_native_function", e.msgNCCheckNativeFunction = "nc_check_native_function", e.msgNCCallJsFunctionById = "nc_call_js_function_by_id", e.msgNCCallJsFunctionByName = "nc_call_js_function_by_name", e.msgNCNativeFireEvent = "nc_native_fire_event", e.msgNCNativeCallReady = "nc_native_call_ready"
        }(t.CommonIPCMessage || (t.CommonIPCMessage = {}))
    }, 22: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(2), i = n(23), a = n(12), s = n(16),
            l = n(9).default(o.join(__rootDir, "../bin/ThunderHelper.node"));
        !function (e) {
            let t, n;

            function o(e) {
                let t = e;
                return /^[a-zA-Z]:\\/.test(e) ? t = e.slice(0, 3) : e && "\\" !== e[e.length - 1] && (t = e + "\\"), t
            }

            !function (e) {
                e[e.DRIVE_UNKNOWN = 0] = "DRIVE_UNKNOWN", e[e.DRIVE_NO_ROOT_DIR = 1] = "DRIVE_NO_ROOT_DIR", e[e.DRIVE_REMOVABLE = 2] = "DRIVE_REMOVABLE", e[e.DRIVE_FIXED = 3] = "DRIVE_FIXED", e[e.DRIVE_REMOTE = 4] = "DRIVE_REMOTE", e[e.DRIVE_CDROM = 5] = "DRIVE_CDROM", e[e.DRIVE_RAMDISK = 6] = "DRIVE_RAMDISK"
            }(t = e.DriverType || (e.DriverType = {})), function (e) {
                e[e.Unspecified = 0] = "Unspecified", e[e.HDD = 3] = "HDD", e[e.SSD = 4] = "SSD", e[e.SCM = 5] = "SCM"
            }(n = e.MediaType || (e.MediaType = {})), e.getDriveType = function (e) {
                return e = o(e), l.getDriveType(e)
            }, e.getDriveInfo = function (e) {
                return e = o(e), l.getDriveInfo(e)
            }, e.getFreePartitionSpace = function (e) {
                return e = o(e), l.getFreePartitionSpace(e)
            }, e.getLogicalDriveStrings = function () {
                return l.getLogicalDriveStrings()
            }, e.getPartitionSpace = function (e) {
                return e = o(e), l.getPartitionSpace(e)
            }, e.getSystemTempPath = function () {
                return l.getSystemTempPath()
            }, e.getTaskTypeFromUrl = function (e) {
                let t = l.getTaskTypeFromUrl(e);
                if (t === s.DownloadKernel.TaskType.Unkown && function (e) {
                    e = e.toLowerCase();
                    let t = !1;
                    do {
                        if ("http://" === e.substr(0, "http://".length)) {
                            t = !0;
                            break
                        }
                        if ("https://" === e.substr(0, "https://".length)) {
                            t = !0;
                            break
                        }
                        if ("ftp://" === e.substr(0, "ftp://".length)) {
                            t = !0;
                            break
                        }
                    } while (0);
                    return t
                }(e)) {
                    let n = /:\/\/\[(.+?)\].*/.exec(e);
                    n || (n = /^ftp:\/\/.*?\[(.+?)\].*/.exec(e)), n && n[1] && i.isIPv6(n[1]) && (t = s.DownloadKernel.TaskType.P2sp)
                }
                return t
            }, e.extractIcon = function (e, t) {
                return l.extractIcon(e, t)
            }, e.isWindow7 = function () {
                return 1 === l.isWin7()
            }, e.isWindow8OrLater = function () {
                let e = !1;
                do {
                    let t = a.release();
                    if (!t) break;
                    let n = t.indexOf(".", 0);
                    if (n < 0) break;
                    let r = t.substring(0, n);
                    if (!r) break;
                    let o = parseInt(r, 10);
                    o && o >= 8 && (e = !0)
                } while (0);
                return e
            }, e.isWindows10 = function () {
                let e = !1;
                do {
                    let t = a.release();
                    if (!t) break;
                    if (0 === t.indexOf("10.0.")) {
                        e = !0;
                        break
                    }
                } while (0);
                return e
            }, e.compareStr = function (e, t) {
                return l.compareStr(e, t)
            }, e.getTickCount = function () {
                return l.getTickCount()
            }, e.setScreenSaveActive = function (e) {
                return l.setScreenSaveActive(e)
            }, e.isSparseDriver = function (e) {
                return e = o(e), l.isSparseDriver(e)
            }, e.getAppList = function () {
                return r(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        l.getAppList(t => {
                            e(t)
                        })
                    })
                })
            }, e.isSSD = function () {
                return r(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        l.isSSD((t, n) => {
                            e(n)
                        })
                    })
                })
            }, e.getMemoryInfo = function () {
                return r(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        l.getMemoryInfo((t, n) => {
                            e({totalPhy: t, totalVir: n})
                        })
                    })
                })
            }, e.getHardDiskSpaceList = function () {
                return r(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        l.getHardDiskSpaceList(t => {
                            e(t)
                        })
                    })
                })
            }, e.getCpuList = function () {
                return r(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        l.getCpuList(t => {
                            e(t)
                        })
                    })
                })
            }, e.getFixedDriveMediaType = function (e) {
                return r(this, void 0, void 0, function* () {
                    return new Promise(t => {
                        e.length > 1 && (e = e.slice(0, 1)), l.getDriveMediaType(e.toUpperCase(), (e, n) => {
                            t(n)
                        })
                    })
                })
            }
        }(t.ThunderHelper || (t.ThunderHelper = {}))
    }, 23: function (e, t) {
        e.exports = require("net")
    }, 24: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(12), o = n(2);
        t.getDefaultPrex = function () {
            return o.basename(process.execPath, ".exe")
        }, t.getSockPath = function (e) {
            const t = r.tmpdir();
            let n = e;
            e || (n = o.basename(process.execPath, ".exe"));
            let i = o.join(t, `${n}-xunlei-node-net-ipc-{FD196984-2591-4588-AA6F-5C8AC1266290}.sock`);
            return "win32" === process.platform && (i = "\\\\.\\pipe\\" + (i = (i = i.replace(/^\//, "")).replace(/\//g, "-"))), i
        }, t.serverContextName = "xunlei-node-net-ipc-server-{46105371-DE78-4442-B59F-FDA1D6D7D430}", t.isObjectEmpty = function (e) {
            let t = !0;
            do {
                if (!e) break;
                if (0 === Object.keys(e).length) break;
                t = !1
            } while (0);
            return t
        }
    }, 26: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.information = ((...e) => {
        }), t.error = ((...e) => {
        }), t.warning = ((...e) => {
        }), t.critical = ((...e) => {
        }), t.verbose = ((...e) => {
        })
    }, 27: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(2), i = n(9), a = n(13), s = i.default(o.join(__rootDir, "../bin/ThunderHelper.node"));
        !function (e) {
            function t() {
                return r(this, void 0, void 0, function* () {
                    let e = !0;
                    do {
                        0;
                        let t = o.resolve(__rootDir, "../../log.ini");
                        if (!(yield a.FileSystemAWNS.existsAW(t))) {
                            e = !1;
                            break
                        }
                        e = "1" === s.readINI(t, "Log", "enable")
                    } while (0);
                    return e
                })
            }

            e.isDevToolsEnable = function () {
                return r(this, void 0, void 0, function* () {
                    return t()
                })
            }, e.isLogEnable = t, e.getLogOutput = function () {
                return r(this, void 0, void 0, function* () {
                    let e = process.env.TL_OUTPUT;
                    do {
                        if (e && "" !== e) break;
                        let t = o.resolve(__rootDir, "../../log.ini");
                        if (!(yield a.FileSystemAWNS.existsAW(t))) break;
                        e = s.readINI(t, "Log", "output")
                    } while (0);
                    return e
                })
            }
        }(t.DevEnvHelperNS || (t.DevEnvHelperNS = {}))
    }, 28: function (e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t, n;
            !function (e) {
                e.require = "AR_BROWSER_REQUIRE", e.builtIn = "AR_BROWSER_GET_BUILTIN", e.global = "AR_BROWSER_GET_GLOBAL", e.functionCall = "AR_BROWSER_FUNCTION_CALL", e.construct = "AR_BROWSER_CONSTRUCTOR", e.memberConstruct = "AR_BROWSER_MEMBER_CONSTRUCTOR", e.memberCall = "AR_BROWSER_MEMBER_CALL", e.memberSet = "AR_BROWSER_MEMBER_SET", e.memberGet = "AR_BROWSER_MEMBER_GET", e.currentWindow = "AR_BROWSER_CURRENT_WINDOW", e.currentWebContents = "AR_BROWSER_CURRENT_WEB_CONTENTS", e.clientWebContents = "AR_BROWSER_CLIENT_WEB_CONTENTS", e.sync = "AR_BROWSER_SYNC", e.contextRelease = "AR_BROWSER_CONTEXT_RELEASE"
            }(t = e.browser || (e.browser = {})), function (e) {
                e.requireReturn = "AR_RENDERER_REQUIRE_RETURN", e.getBuiltInReturn = "AR_RENDERER_BUILTIN_RETURN", e.getGlobalReturn = "AR_RENDERER_GLOBAL_RETURN", e.functionCallReturn = "AR_RENDERER_FUNCTION_CALL_RETURN", e.memberConstructReturn = "AR_RENDERER_MEMBER_CONSTRUCTOR_RETURN", e.constructReturn = "AR_RENDERER_CONSTRUCTOR_RETURN", e.memberCallReturn = "AR_RENDERER_MEMBER_CALL_RETURN", e.memberSetReturn = "AR_RENDERER_MEMBER_SET_RETURN", e.memberGetReturn = "AR_RENDERER_MEMBER_GET_RETURN", e.currentWindowReturn = "AR_BROWSER_CURRENT_WINDOW_RETURN", e.currentWebContentsReturn = "AR_RENDERER_CURRENT_WEB_CONTENTS_RETURN", e.clientWebContentsReturn = "AR_RENDERER_CLIENT_WEB_CONTENTS_RETURN", e.syncReturn = "AR_RENDERER_SYNC_RETURN", e.callback = "AR_RENDERER_CALLBACK"
            }(n = e.renderer || (e.renderer = {}))
        }(r || (r = {})), t.default = r
    }, 29: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(3), o = n(6), i = n(20), a = n(21);
        !function (e) {
            e.mainProcessContext = "main-process", e.mainRendererContext = "main-renderer", e.mainPageWebviewRendererContext = "main-page-webview-renderer", e.newTaskRendererContext = "new-task-renderer", e.preNewTaskRendererContext = "pre-new-task-renderer", e.loginRendererContext = "login-renderer";

            class t {
                constructor() {
                    this.isConnected = !1, this.isOnIPCEvent = !1, this.rendererInfos = [], this.listeners = new Map, t.intervalIPCModuleMsgs = [a.CommonIPCMessage.msgIPCRendererConnect, a.CommonIPCMessage.msgIPCRendererDisconnect]
                }

                onMessage(e, t) {
                    do {
                        if (!o.isString(e) || 0 === e.length) {
                            i.error("msgName is null");
                            break
                        }
                        if (o.isNullOrUndefined(t)) {
                            i.error("listener is null");
                            break
                        }
                        this.listeners.has(e) ? this.listeners.get(e).push(t) : this.listeners.set(e, [t])
                    } while (0)
                }

                getCommunicatorInfo() {
                    return this.currInfo
                }

                getAllRenderer() {
                    return this.rendererInfos
                }

                getCommunicatorInfoById(e) {
                    for (let t of this.rendererInfos) if (t.id === e) return t;
                    return null
                }

                getCommunicatorInfoByContext(e) {
                    for (let t of this.rendererInfos) if (t.context === e) return t;
                    return null
                }

                startListenIPCMessage(e) {
                    this.isOnIPCEvent || (this.isOnIPCEvent = !0, e && this.ListenSendToMainMsg(), this.ListenSendToRendererMsg(e))
                }

                ListenSendToMainMsg() {
                    r.ipcMain.on(a.CommonIPCMessage.msgIPCSendToMain, (e, t) => {
                        let n = void 0;
                        do {
                            if (o.isNullOrUndefined(t)) {
                                i.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                i.warning("hasnot been connected yet");
                                break
                            }
                            let r = t.msg.name;
                            if (this.isIPCModuleIntervalMsg(r)) {
                                i.information(`IPC module interval msg : ${r}`);
                                let o = this.handleIPCModuleIntervalMsg(e.sender, t);
                                if (n = o[1], !o[0]) break;
                                i.information("need to dispatch msg:" + r)
                            }
                            o.isNullOrUndefined(n) ? n = this.NotifyListener(t) : this.NotifyListener(t)
                        } while (0);
                        o.isNullOrUndefined(n) || (e.returnValue = n), t = null
                    })
                }

                ListenSendToRendererMsg(e) {
                    (e ? r.ipcMain : r.ipcRenderer).on(a.CommonIPCMessage.msgIPCSendToRenderer, (t, n) => {
                        let r = void 0;
                        do {
                            if (o.isNullOrUndefined(n)) {
                                i.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                i.warning("hasnot been connected yet");
                                break
                            }
                            let a = n.msg.name;
                            if (this.isIPCModuleIntervalMsg(a)) {
                                i.information(`IPC module interval msg : ${a}`);
                                let e = this.handleIPCModuleIntervalMsg(t.sender, n);
                                if (r = e[1], !e[0]) break;
                                i.information("need to dispatch msg:" + a)
                            }
                            e ? (i.information("is main, handle forward msg"), this.handleForwardRendererToRendererMsg(n)) : (i.information("is renderer, handle business msg"), o.isNullOrUndefined(r) ? r = this.NotifyListener(n) : this.NotifyListener(n))
                        } while (0);
                        o.isNullOrUndefined(r) || (t.returnValue = r), n = null
                    })
                }

                isIPCModuleIntervalMsg(e) {
                    for (let n of t.intervalIPCModuleMsgs) if (e === n) return !0;
                    return !1
                }

                handleIPCModuleIntervalMsg(e, t) {
                    let n = [!1, void 0];
                    do {
                        let r = t.msg.name;
                        if (r === a.CommonIPCMessage.msgIPCRendererConnect) {
                            n = [!0, this.handleRendererConnectMsg(e, t)];
                            break
                        }
                        if (r === a.CommonIPCMessage.msgIPCRendererDisconnect) {
                            n = [!0, this.handleRendererDisconnectMsg(e, t)];
                            break
                        }
                    } while (0);
                    return n
                }

                handleRendererConnectMsg(e, t) {
                    i.verbose(e), i.verbose(t)
                }

                handleRendererDisconnectMsg(e, t) {
                    i.verbose(e), i.verbose(t)
                }

                handleForwardRendererToRendererMsg(e) {
                    this.sendForwardRendererToRendererMsg(e)
                }

                sendForwardRendererToRendererMsg(e) {
                    i.verbose(e)
                }

                NotifyListener(e) {
                    let t = void 0, n = e.msg.name;
                    if (this.listeners.has(n)) {
                        let r = this.listeners.get(n), o = !0;
                        for (let n of r) o ? (o = !1, t = n(e)) : n(e)
                    }
                    return t
                }
            }

            e.Communicator = t
        }(t.CommonIPCBase || (t.CommonIPCBase = {}))
    }, 3: function (e, t) {
        e.exports = require("electron")
    }, 33: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(3), o = n(6), i = n(20), a = n(21), s = n(29);
        !function (e) {
            class t extends s.CommonIPCBase.Communicator {
                constructor() {
                    super()
                }

                initialize(e) {
                    this.currInfo = {id: void 0, context: e, isMainCommunicator: !1}
                }

                connect() {
                    this.isConnected ? i.warning("has been connected") : (this.sendConnectMsgToMain(), this.isConnected = !0, this.startListenIPCMessage(!1))
                }

                disconnect() {
                    this.isConnected ? (this.isConnected = !1, this.sendDisconnectMsgToMain()) : i.warning("hasnot been connected yet")
                }

                sendMessageToMain(e) {
                    this.sendIPCMsgToMain(e)
                }

                sendMessageToMainSync(e) {
                    return this.sendIPCMsgToMain(e, !0)
                }

                sendMessageToRenderer(e, t) {
                    this.sendIPCMsgToRenderer(e, t)
                }

                handleRendererConnectMsg(e, t) {
                    do {
                        if (o.isNullOrUndefined(t)) {
                            i.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (o.isNullOrUndefined(e)) {
                            i.error("connectRendererInfo is null");
                            break
                        }
                        i.information(`Renderer: new renderer will connect, id = ${e.id}, context = ${e.context}`), this.rendererInfos.push(e)
                    } while (0)
                }

                handleRendererDisconnectMsg(e, t) {
                    do {
                        if (o.isNullOrUndefined(t)) {
                            i.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (o.isNullOrUndefined(e)) {
                            i.error("disconnectRendererInfo is null");
                            break
                        }
                        i.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
                        for (let t = 0; t < this.rendererInfos.length; ++t) if (this.rendererInfos[t] === e) {
                            this.rendererInfos.splice(t, 1);
                            break
                        }
                    } while (0)
                }

                sendConnectMsgToMain() {
                    let e = this.sendMessageToMainSync({name: a.CommonIPCMessage.msgIPCRendererConnect, args: []});
                    this.currInfo.id = e[0], this.rendererInfos = e[1]
                }

                sendDisconnectMsgToMain() {
                    this.sendMessageToMain({name: a.CommonIPCMessage.msgIPCRendererDisconnect, args: []})
                }

                sendIPCMsgToMain(e, t = !1) {
                    let n = void 0;
                    do {
                        if (o.isNullOrUndefined(e)) {
                            i.error("msg is null");
                            break
                        }
                        n = (t ? r.ipcRenderer.sendSync : r.ipcRenderer.send)(a.CommonIPCMessage.msgIPCSendToMain, {
                            msg: e,
                            senderInfo: this.currInfo
                        })
                    } while (0);
                    return n
                }

                sendIPCMsgToRenderer(e, t) {
                    do {
                        if (o.isNullOrUndefined(e)) {
                            i.error("rendererId is null");
                            break
                        }
                        if (o.isNullOrUndefined(t)) {
                            i.error("msg is null");
                            break
                        }
                        let n = [e].concat(t.args);
                        t.args = n, r.ipcRenderer.send(a.CommonIPCMessage.msgIPCSendToRenderer, {
                            msg: t,
                            senderInfo: this.currInfo
                        })
                    } while (0)
                }
            }

            e.RendererCommunicator = t, e.rendererCommunicator = new t
        }(t.CommonIPCRenderer || (t.CommonIPCRenderer = {}))
    }, 34: function (e, t) {
        e.exports = require("url")
    }, 35: function (e, t, n) {
        "use strict";
        const r = n(17);
        if ("renderer" === process.type) {
            if (r.info("client running"), !global.__xdasAsyncRemoteExports) {
                let e = {};
                global.__xdasAsyncRemoteExports = e;
                let t = n(47);
                e.require = t.require, e.getCurrentWebContents = t.getCurrentWebContents, e.getCurrentWindow = t.getCurrentWindow, e.Interest = t.Interest, e.global = new Proxy({}, {get: (e, n, r) => t.getGlobal(n)}), e.electron = new Proxy({}, {get: (e, n, r) => t.getBuiltin(n)}), Object.defineProperty(e, "currentWindow", {get: () => t.getCurrentWindow()}), Object.defineProperty(e, "currentWebContents", {get: () => t.getCurrentWebContents()}), Object.defineProperty(e, "process", {get: () => t.getGlobal("process")})
            }
        } else if ("browser" === process.type && (r.info("server running"), !global.__xdasAsyncRemoteExports)) {
            let e = {};
            global.__xdasAsyncRemoteExports = e;
            const t = n(51);
            t.startServer(), e.getObjectRegistry = t.getObjectRegistry
        }
        e.exports = global.__xdasAsyncRemoteExports
    }, 36: function (e, t) {
        e.exports = require("crypto")
    }, 37: function (e, t, n) {
        e.exports = n(8)(41)
    }, 4: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(14), i = n(44), a = n(24), s = n(26);

        function l(e) {
            s.information("on object freeer"), global.__xdasIPCClienInstance.notifyFreer(e.remoteId, e.callbackId)
        }

        let c = void 0;
        global.__xdasIPCClienInstance || (global.__xdasIPCClienInstance = new class extends o.EventEmitter {
            constructor() {
                super(), this.rid = 0, this.apis = {}, this.singletonMap = {}, this.retCallbackMap = {}, this.eventCallbackMaps = {}, this.contextCallbackMap = {}
            }

            start(e, t, n, r) {
                do {
                    if (!n && this.client) break;
                    if (t || (t = a.getDefaultPrex()), this.singletonMap.hasOwnProperty(t.toLowerCase())) break;
                    if (global.__xdasPluginConfig && global.__xdasPluginConfig.name ? e = {
                        name: global.__xdasPluginConfig.name,
                        version: global.__xdasPluginConfig.version
                    } : void 0 !== e && null !== e || (e = this.parseContext()), !e) {
                        if (!this.client || !this.client.getContext()) throw new Error("no suitable context for client, please specify context with start function");
                        e = {name: this.client.getContext().name, version: this.client.getContext().version}
                    }
                    if (e.name === a.serverContextName) throw new Error("client context must difference from server");
                    if (n && !this.client) throw new Error("connect to other product must start self firstly");
                    let o = new i.Client({context: e, socketPrex: t});
                    this.singletonMap[t.toLowerCase()] = o, n || (this.client = o), o.on("message", e => {
                        if ("fire_event" === e.action) this.fireServerEvent(o, e.name, [e.__context].concat(e.args)); else if ("client_context_freer" === e.action) {
                            s.information("client on object freer", e);
                            do {
                                let t = e.rid;
                                if (t) {
                                    if (!this.contextCallbackMap[t]) break;
                                    delete this.contextCallbackMap[t]
                                }
                            } while (0)
                        } else if ("call_client_by_id" === e.action) this.callFunctionById(o, e.rid, e.s_rid, e.args); else if ("call_client_api" === e.action) this.callRegisterFunction(o, e); else if ("check_client_function" === e.action) {
                            let t = e.method, n = !0;
                            t && this.apis && this.apis[t] || (n = !1), this.sendAdapter(o, {
                                s_rid: e.s_rid,
                                action: "check_client_function_callback",
                                success: !0,
                                data: n
                            })
                        } else if (void 0 !== e.success && null !== e.success) {
                            let t = e;
                            this.client === o && this.emit("stat_call_function_back", o.getContext(), e);
                            const n = this.retCallbackMap[t.rid].callback;
                            n && (t.success ? n(null, t.data) : n(t.error, t.data)), delete this.retCallbackMap[t.rid]
                        }
                    }), o.on("error", e => {
                        r && r("error", e), this.emit("socket-error", e, o.getContext(), n, o.isInprocess()), delete this.singletonMap[t.toLowerCase()]
                    }), o.isInprocess() ? (r && r("connect"), this.emit("connect", o.getContext(), n, !0)) : o.on("connect", () => {
                        r && r("connect"), this.emit("connect", o.getContext(), n, !1)
                    }), o.on("end", () => {
                        let e = o.isInprocess();
                        s.information("server is ended, and this client emit end", t, n, e), r && r("end", o.getContext(), n, e), this.emit("end", o.getContext(), n, e), delete this.singletonMap[t.toLowerCase()]
                    }), this.registry(o)
                } while (0)
            }

            registerFunctions(e) {
                do {
                    if (!e) break;
                    let t = void 0;
                    for (let n in e) if (this.apis.hasOwnProperty(n)) {
                        t = n;
                        break
                    }
                    if (t) throw new Error(`try to coverd function ${t}`);
                    this.apis = Object.assign({}, this.apis, e)
                } while (0)
            }

            checkServerFunction(e) {
                return r(this, void 0, void 0, function* () {
                    return this.internalCheckServerFunction(this.client, e)
                })
            }

            callServerFunction(e, ...t) {
                return r(this, void 0, void 0, function* () {
                    let n = null, r = yield this.callServerFunctionEx(e, ...t);
                    return r && (n = r[0]), n
                })
            }

            callServerFunctionEx(e, ...t) {
                return this.internalCallServerFunctionEx(this.client, e, ...t)
            }

            isRemoteClientExist(e) {
                return this.internalIsRemoteClientExist(this.client, e)
            }

            checkRemoteFunction(e, t) {
                return this.internalCheckRemoteFunction(this.client, e, t)
            }

            callRemoteClientFunction(e, t, ...n) {
                return this.internalCallRemoteClientFunction(this.client, e, t, ...n)
            }

            notifyFreer(e, t) {
                this.sendAdapter(this.client, {action: "client_context_freer", dst: e, rid: t})
            }

            callRemoteContextById(e, t, ...n) {
                this.sendAdapter(this.client, {dst: e, action: "call_remote_context_by_id", rid: t, args: n})
            }

            attachServerEvent(e, t) {
                return this.internalAttachServerEvent(this.client, e, t)
            }

            detachServerEvent(e, t) {
                this.internalDetachServerEvent(this.client, e, t)
            }

            broadcastEvent(e, ...t) {
                this.sendAdapter(this.client, {action: "broadcast", name: e, args: t})
            }

            crossCheckServerFunction(e, t) {
                return r(this, void 0, void 0, function* () {
                    {
                        if (!e) throw new Error("An argument for 'productId' was not provided");
                        let n = this.singletonMap[e.toLowerCase()];
                        if (!n) throw new Error("Please call the 'start' interface first");
                        return this.internalCheckServerFunction(n, t)
                    }
                })
            }

            crossCallServerFunction(e, t, ...n) {
                return r(this, void 0, void 0, function* () {
                    let r = null, o = yield this.crossCallServerFunctionEx(e, t, ...n);
                    return o && (r = o[0]), r
                })
            }

            crossCallServerFunctionEx(e, t, ...n) {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let r = this.singletonMap[e.toLowerCase()];
                    if (!r) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'funcName' was not provided");
                    return this.internalCallServerFunctionEx(r, t, ...n)
                }
            }

            crossIsRemoteClientExist(e, t) {
                return r(this, void 0, void 0, function* () {
                    {
                        if (!e) throw new Error("An argument for 'productId' was not provided");
                        let n = this.singletonMap[e.toLowerCase()];
                        if (!n) throw new Error("Please call the 'start' interface first");
                        return this.internalIsRemoteClientExist(n, t)
                    }
                })
            }

            crossCheckRemoteFunction(e, t, n) {
                return r(this, void 0, void 0, function* () {
                    {
                        if (!e) throw new Error("An argument for 'productId' was not provided");
                        let r = this.singletonMap[e.toLowerCase()];
                        if (!r) throw new Error("Please call the 'start' interface first");
                        if (!t) throw new Error("An argument for 'remoteId' was not provided");
                        if (!n) throw new Error("An argument for 'funcName' was not provided");
                        return this.internalCheckRemoteFunction(r, t, n)
                    }
                })
            }

            crossCallRemoteClientFunction(e, t, n, ...r) {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let o = this.singletonMap[e.toLowerCase()];
                    if (!o) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'remoteId' was not provided");
                    if (!n) throw new Error("An argument for 'funcName' was not provided");
                    return this.internalCallRemoteClientFunction(o, t, n, ...r)
                }
            }

            crossAttachServerEvent(e, t, n) {
                let r = void 0;
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let o = this.singletonMap[e.toLowerCase()];
                    if (!o) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'eventName' was not provided");
                    r = this.internalAttachServerEvent(o, t, n)
                }
                return r
            }

            crossDetachServerEvent(e, t, n) {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let r = this.singletonMap[e.toLowerCase()];
                    if (!r) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'eventName' was not provided");
                    this.internalDetachServerEvent(r, t, n)
                }
            }

            crossBroadcastEvent(e, t, ...n) {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let r = this.singletonMap[e.toLowerCase()];
                    if (!r) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'eventName' was not provided");
                    this.sendAdapter(r, {
                        action: "broadcast",
                        name: t,
                        args: n,
                        __context: Object.assign({}, this.client.getContext())
                    })
                }
            }

            registry(e) {
                let t = this.getFullContextName(this.client);
                return new Promise((n, r) => {
                    do {
                        if (!t) {
                            n(!1);
                            break
                        }
                        let r = this.generateId();
                        const o = {alias: t, action: "register", rid: r};
                        let i = (e, r) => {
                            e ? (s.error("register error", e.message), n(r)) : n(t)
                        };
                        this.retCallbackMap[r] = Object.assign({callback: i}, o), this.sendAdapter(e, o)
                    } while (0)
                })
            }

            getNow() {
                return Date.now()
            }

            sendAdapter(e, t) {
                do {
                    if (!t) break;
                    let n = this.getNow();
                    if (t.timestamp ? t.timestamp = [...t.timestamp].concat(n) : t.timestamp = [].concat(n), !t.__context) {
                        let n = e.getContext();
                        n && (t = Object.assign({__context: n}, t))
                    }
                    e.isInprocess() ? (s.information("send to server in process"), global.__xdasIPCServer.emit("message", t, e)) : e.send(t)
                } while (0)
            }

            parseContext() {
                let e = void 0;
                do {
                    let t = "";
                    for (let e = 0; e < process.argv.length; e++) {
                        let n = process.argv[e];
                        if (0 === n.indexOf("--xdas-plugin-name=", 0)) {
                            t = n.substr("--xdas-plugin-name=".length);
                            break
                        }
                    }
                    if (!t) break;
                    e = {name: t}
                } while (0);
                return e
            }

            generateId() {
                return this.rid++
            }

            getFullContextName(e, t) {
                let n = "";
                do {
                    if (t === a.serverContextName) {
                        n = t;
                        break
                    }
                    if (void 0 === t) {
                        n = `${e.getContext().productId}-${e.getContext().name}`.toLowerCase();
                        break
                    }
                    n = `${e.getContext().productId}-${t}`.toLowerCase()
                } while (0);
                return n
            }

            internalCheckServerFunction(e, t) {
                return new Promise((n, r) => {
                    do {
                        if (!e) {
                            n(!1);
                            break
                        }
                        if (!t) {
                            n(!1);
                            break
                        }
                        let r = this.generateId();
                        const o = {action: "check_server_function_exist", method: t, rid: r};
                        let i = (e, t) => {
                            n(!e && t)
                        };
                        this.retCallbackMap[r] = Object.assign({callback: i}, o), this.sendAdapter(e, o)
                    } while (0)
                })
            }

            internalCallServerFunctionEx(e, t, ...n) {
                return new Promise((r, o) => {
                    do {
                        if (!e) {
                            r([null, "client doesn't ready"]);
                            break
                        }
                        if (!t) {
                            r([null, "funcName is not specifed"]);
                            break
                        }
                        e === this.client && this.emit("stat_call_function", this.client.getContext(), t);
                        let o = this.generateId();
                        if (n) for (let e = 0; e < n.length; e++) n[e] = this.convertFunction2IdEx(n[e]);
                        const i = {rid: o, method: t, args: n};
                        let a = (t, n) => {
                            t ? (s.error("callServerFunction error", t, e.getContext()), r([null, t])) : r([n, void 0])
                        };
                        this.retCallbackMap[o] = Object.assign({callback: a}, i), this.sendAdapter(e, i)
                    } while (0)
                })
            }

            internalIsRemoteClientExist(e, t) {
                return new Promise((n, r) => {
                    do {
                        if (!t) {
                            n([!1, "remote client alias is not specifed"]);
                            break
                        }
                        if (e === this.client && t.toLowerCase() === e.getContext().name.toLowerCase()) {
                            n([!0, "self is exist"]);
                            break
                        }
                        let r = this.generateId();
                        const o = {dst: this.getFullContextName(e, t), action: "check_client_exist", rid: r};
                        let i = (e, t) => {
                            n(e ? [!1, e] : [t, "success"])
                        };
                        this.retCallbackMap[r] = Object.assign({callback: i}, o), this.sendAdapter(e, o)
                    } while (0)
                })
            }

            internalCheckRemoteFunction(e, t, n) {
                return new Promise((r, o) => {
                    do {
                        if (!e) {
                            r(!1);
                            break
                        }
                        if (!t) {
                            r(!1);
                            break
                        }
                        if (!n) {
                            r(!1);
                            break
                        }
                        if (e === this.client && t.toLowerCase() === e.getContext().name.toLowerCase()) {
                            r(!(!this.apis || !this.apis[n]));
                            break
                        }
                        let o = this.generateId();
                        const i = {
                            action: "check_client_function_exist",
                            method: n,
                            rid: o,
                            src: this.getFullContextName(this.client),
                            dst: this.getFullContextName(e, t)
                        };
                        let a = (e, t) => {
                            r(!e && t)
                        };
                        this.retCallbackMap[o] = Object.assign({callback: a}, i), this.sendAdapter(e, i)
                    } while (0)
                })
            }

            internalCallRemoteClientFunction(e, t, n, ...r) {
                return new Promise((o, i) => {
                    do {
                        if (!e) {
                            o([null, "client doesn't ready"]);
                            break
                        }
                        if (!t) {
                            o([null, "remote client alias is not specifed"]);
                            break
                        }
                        if (!n) {
                            o([null, "funcName is not specifed"]);
                            break
                        }
                        let i = (e, t) => {
                            e ? (s.information("callRemoteClientFunction", e.message), o([null, e])) : o([t, void 0])
                        };
                        if (r) for (let e = 0; e < r.length; e++) r[e] = this.convertFunction2IdEx(r[e]);
                        let a = this.generateId();
                        const l = {
                            src: this.getFullContextName(this.client),
                            dst: this.getFullContextName(e, t),
                            action: "call_remote_client_api",
                            method: n,
                            args: r,
                            rid: a
                        };
                        this.retCallbackMap[a] = Object.assign({callback: i}, l), this.sendAdapter(e, l)
                    } while (0)
                })
            }

            internalAttachServerEvent(e, t, n) {
                let r = e.getContext().productId.toLowerCase();
                this.eventCallbackMaps.hasOwnProperty(r) || (this.eventCallbackMaps[r] = {}), this.eventCallbackMaps[r].hasOwnProperty(t) || (this.eventCallbackMaps[r][t] = {}), a.isObjectEmpty(this.eventCallbackMaps[r][t]) && this.sendAdapter(e, {
                    action: "attach_event",
                    name: t
                });
                let o = this.generateId();
                return this.eventCallbackMaps[r][t][o] = n, o
            }

            internalDetachServerEvent(e, t, n) {
                let r = e.getContext().productId.toLowerCase();
                do {
                    if (!this.eventCallbackMaps.hasOwnProperty(r)) break;
                    if (!this.eventCallbackMaps[r].hasOwnProperty(t)) break;
                    delete this.eventCallbackMaps[r][t][n], a.isObjectEmpty(this.eventCallbackMaps[r][t]) && this.sendAdapter(e, {
                        action: "detach_event",
                        name: t
                    })
                } while (0)
            }

            fireServerEvent(e, t, ...n) {
                let r = e.getContext().productId.toLowerCase();
                do {
                    if (!this.eventCallbackMaps.hasOwnProperty(r)) break;
                    if (!this.eventCallbackMaps[r].hasOwnProperty(t)) break;
                    let e = this.eventCallbackMaps[r][t];
                    for (let t in e) {
                        let r = e[t];
                        r && r.apply(null, ...n)
                    }
                } while (0)
            }

            callFunctionById(e, t, n, ...r) {
                let o = void 0, i = !1;
                do {
                    const a = this.contextCallbackMap[t];
                    if (!a) break;
                    let s = void 0, l = void 0;
                    try {
                        s = a.apply(null, ...r)
                    } catch (e) {
                        l = e.message;
                        break
                    }
                    if (void 0 === n || null === n) break;
                    if (o = {s_rid: n, action: "call_client_by_id_callback", success: !1}, void 0 !== l) {
                        o.error = l;
                        break
                    }
                    if (s && s.then) {
                        s.then(t => {
                            o.data = this.convertFunction2Id(t), o.success = !0, this.sendAdapter(e, o)
                        }).catch(t => {
                            o.error = t instanceof Error ? t.message : t, this.sendAdapter(e, o)
                        }), i = !0;
                        break
                    }
                    o.success = !0, o.data = this.convertFunction2Id(s)
                } while (0);
                !i && o && this.sendAdapter(e, o)
            }

            convertFunction2Id(e) {
                let t = e;
                if ("function" == typeof e) {
                    let n = this.generateId();
                    this.contextCallbackMap[n] = e, t = n
                } else if (e && "object" == typeof e) for (let t in e) {
                    let n = e[t];
                    if ("function" == typeof n) {
                        let r = this.generateId();
                        this.contextCallbackMap[r] = n, e[t] = r
                    } else n && "object" == typeof n && (e[t] = this.convertFunction2Id(n))
                }
                return t
            }

            convertFunction2IdEx(e) {
                let t = e;
                if ("function" == typeof e) {
                    let n = this.generateId();
                    this.contextCallbackMap[n] = e, t = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": n}
                } else if (e && "object" == typeof e) for (let t in e) {
                    let n = e[t];
                    if ("function" == typeof n) {
                        let r = this.generateId();
                        this.contextCallbackMap[r] = n, e[t] = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": r}
                    } else n && "object" == typeof n && (e[t] = this.convertFunction2IdEx(n))
                }
                return t
            }

            decodeParameter(e, t) {
                let n = e;
                do {
                    if (!e) break;
                    if ("object" != typeof e) break;
                    let r = e["__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}"];
                    if (r) {
                        n = ((...e) => {
                            this.callRemoteContextById(t, r, ...e)
                        }), global.__xdasObjectLiftMonitor && global.__xdasObjectLiftMonitor.setObjectFreer(n, {
                            remoteId: t,
                            callbackId: r
                        }, l);
                        break
                    }
                    for (let n in e) {
                        let r = e[n];
                        e[n] = this.decodeParameter(r, t)
                    }
                } while (0);
                return n
            }

            callRegisterFunction(e, t) {
                let n = void 0, r = !1;
                do {
                    if (!t) break;
                    let o = t.method;
                    if (!o) break;
                    let i = this.getNow();
                    if (n = {
                        s_rid: t.s_rid,
                        action: "remote_client_callback",
                        success: !1,
                        rid: t.rid,
                        method: t.method,
                        src: t.src,
                        timestamp: t.timestamp ? t.timestamp.concat(i) : [].concat(i)
                    }, !this.apis || !this.apis[o]) {
                        n.error = `callRegisterFunction ${o} is undefined`;
                        break
                    }
                    let a = void 0, s = this.decodeParameter(t.args, t.src);
                    try {
                        a = this.apis[o].apply(null, [t.src].concat(s))
                    } catch (e) {
                        n.error = e.message;
                        break
                    }
                    if (a && a.then) {
                        a.then(t => {
                            n.data = this.convertFunction2IdEx(t), n.success = !0, this.sendAdapter(e, n)
                        }).catch(t => {
                            n.error = t instanceof Error ? t.message : t, this.sendAdapter(e, n)
                        }), r = !0;
                        break
                    }
                    n.success = !0, n.data = this.convertFunction2IdEx(a)
                } while (0);
                s.information("callRegisterFunction", n), !r && n && this.sendAdapter(e, n)
            }
        }), c = global.__xdasIPCClienInstance, t.client = c
    }, 40: function (e, t) {
        e.exports = require("buffer")
    }, 41: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t;
            !function (e) {
                e[e.Default = 0] = "Default", e[e.Color = 1] = "Color", e[e.Wallpaper = 2] = "Wallpaper", e[e.Custom = 3] = "Custom", e[e.Cool = 4] = "Cool"
            }(t = e.SkinType || (e.SkinType = {})), e.defaultSkinInfo = {type: t.Default, colorID: 0}
        }(t.SkinHelperNS || (t.SkinHelperNS = {}))
    }, 42: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(45), o = n(14);
        t.Parser = class extends o.EventEmitter {
            constructor() {
                super(), this.decoder = new r.StringDecoder("utf8"), this.jsonBuffer = ""
            }

            encode(e) {
                return JSON.stringify(e) + "\n"
            }

            feed(e) {
                let t = this.jsonBuffer, n = 0, r = (t += this.decoder.write(e)).indexOf("\n", n);
                for (; r >= 0;) {
                    const e = t.slice(n, r), o = JSON.parse(e);
                    this.emit("message", o), n = r + 1, r = t.indexOf("\n", n)
                }
                this.jsonBuffer = t.slice(n)
            }
        }
    }, 423: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(424), o = n.n(r);
        for (var i in r) "default" !== i && function (e) {
            n.d(t, e, function () {
                return r[e]
            })
        }(i);
        t.default = o.a
    }, 424: function (e, t, n) {
        "use strict";
        var r = this && this.__decorate || function (e, t, n, r) {
            var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a), a
        }, o = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(5), a = n(3), s = n(7), l = n(171), c = n(66), d = n(859), u = n(4), f = n(15), h = n(34),
            p = n(613);
        let _ = class extends i.Vue {
            constructor() {
                super(...arguments), this.browserType = h.parse(location.href, !0).query.browserType, this.title = h.parse(location.href, !0).query.title, this.minimizable = h.parse(location.href, !0).query.minimizable, this.type = "", this.remoteMenuOptions = null
            }

            get canShowMenu() {
                let e = !1;
                do {
                    if ("news-popup" === this.browserType) {
                        e = !0;
                        break
                    }
                    if (!this.remoteMenuOptions) break;
                    if (this.remoteMenuOptions.length > 0) {
                        e = !0;
                        break
                    }
                } while (0);
                return e
            }

            showMenu(e) {
                return o(this, void 0, void 0, function* () {
                    if ("news-popup" === this.browserType) {
                        let t = [];
                        t.push({
                            type: "normal", label: "一周内不再弹出", click: () => {
                                this.menuItemClick("noshow")
                            }
                        });
                        let n = yield(yield s.asyncRemoteCall.getMenu()).buildFromTemplate(t),
                            r = yield s.asyncRemoteCall.getCurrentWindow();
                        yield c.MenuSkinNS.setStyle(n, {}), d.ContextMenuNS.popupAt(n, {window: r}, e.target)
                    } else if (this.remoteMenuOptions && this.remoteMenuOptions.length > 0) {
                        let t = yield(yield s.asyncRemoteCall.getMenu()).buildFromTemplate(this.remoteMenuOptions),
                            n = yield s.asyncRemoteCall.getCurrentWindow();
                        yield c.MenuSkinNS.setStyle(t, {}), d.ContextMenuNS.popupAt(t, {window: n}, e.target)
                    }
                })
            }

            menuItemClick(e) {
                return o(this, void 0, void 0, function* () {
                    if ("noshow" === e) {
                        f.XLStatNS.trackEvent("business", "popup_close_set", "", 0, 0, 0, 0, "op=week");
                        let e = Math.round((new Date).getTime() / 1e3);
                        yield u.client.callServerFunction("SetConfigValue", "ConfigNewsPopUp", "NewsShowTime", e), this.closeWnd("noshow")
                    }
                })
            }

            minimiseWnd() {
                return o(this, void 0, void 0, function* () {
                    yield(yield s.asyncRemoteCall.getCurrentWindow()).minimize(), f.XLStatNS.trackEvent("business", "popup_minimize")
                })
            }

            closeWnd(e) {
                a.ipcRenderer.send(l.NodeEventMesssageNS.eventEmbeddedBrowserWndClick, this.browserType, e), "ad-webpagetip" === this.browserType && a.ipcRenderer.send("ad-webpagetip", "click_close"), window.close()
            }

            noPopup(e, t) {
                return o(this, void 0, void 0, function* () {
                    if ("sign" === t) {
                        let t = [];
                        t.push({
                            type: "normal", label: "不再弹出", click: () => o(this, void 0, void 0, function* () {
                                let e = yield u.client.callServerFunction("GetConfigValue", "ConfigPopUpPanel", "StartCount", 0);
                                yield u.client.callServerFunction("SetConfigValue", "ConfigPopUpPanel", "StartCount", e + 1);
                                let t = Math.round((new Date).getTime() / 1e3);
                                yield u.client.callServerFunction("SetConfigValue", "ConfigPopUpPanel", "ShowTime", t), this.closeWnd("sign_nopop")
                            })
                        });
                        let n = yield(yield s.asyncRemoteCall.getMenu()).buildFromTemplate(t),
                            r = yield s.asyncRemoteCall.getCurrentWindow();
                        yield c.MenuSkinNS.setStyle(n, {}), d.ContextMenuNS.popupAt(n, {window: r}, e.target)
                    } else if ("news-popup" === t) {
                        let e = Math.round((new Date).getTime() / 1e3);
                        yield u.client.callServerFunction("SetConfigValue", "ConfigNewsPopUp", "NewsShowTime", e)
                    }
                })
            }

            mounted() {
                "ad-webpagetip" === this.browserType && (document.addEventListener("mouseenter", this.handleMouseEnter), document.addEventListener("mouseleave", this.handleMouseLeave)), p.EmbeddedBrowserClientFunctionNS.getInstance().on("add_menu_extra", e => {
                    this.remoteMenuOptions = e
                })
            }

            handleMouseEnter() {
                a.ipcRenderer.send("ad-webpagetip", "mouse_hover")
            }

            handleMouseLeave() {
                a.ipcRenderer.send("ad-webpagetip", "mouse_leave")
            }
        };
        _ = r([i.Component({components: {}})], _), t.default = _
    }, 43: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(2), i = n(6), a = n(1), s = n(9), l = n(27), c = n(3), d = n(18),
            u = s.default(o.join(__rootDir, "../bin/ThunderHelper.node"));
        let f = "0";
        process.env.TL_ENABLE = f;
        let h = process.env.TL_OUTPUT;

        function p() {
            a.default.outputLogger = "console" === h ? a.outputLoggerConsole : function () {
                function e(e) {
                    return function (...t) {
                        u.printEtwLog(e, function (...e) {
                            return e.map(e => i.inspect(e)).join(" ").replace(/%/g, "%%")
                        }(...t))
                    }
                }

                return {
                    [a.LogLevel.Critical]: e(a.LogLevel.Critical),
                    [a.LogLevel.Error]: e(a.LogLevel.Error),
                    [a.LogLevel.Warning]: e(a.LogLevel.Warning),
                    [a.LogLevel.Information]: e(a.LogLevel.Information),
                    [a.LogLevel.Verbose]: e(a.LogLevel.Verbose)
                }
            }()
        }

        function _() {
            return r(this, void 0, void 0, function* () {
                l.DevEnvHelperNS.isLogEnable().then(e => {
                    e && "1" === f !== e && (f = e ? "1" : "0", process.env.TL_ENABLE = f)
                }).catch(), l.DevEnvHelperNS.getLogOutput().then(e => {
                    e && e !== h && (h = e, p())
                }).catch()
            })
        }

        p(), _().catch(), "browser" === process.type ? c.ipcMain.on(d.ThunderChannelList.channelRMUpdateLogEnviroment, () => {
            c.BrowserWindow.getAllWindows().forEach(e => {
                e.isDestroyed() || e.webContents.send(d.ThunderChannelList.channelMRUpdateLogEnviroment)
            })
        }) : "renderer" === process.type && c.ipcRenderer.on(d.ThunderChannelList.channelMRUpdateLogEnviroment, () => {
            _().catch()
        })
    }, 44: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(23), o = n(14), i = n(26), a = n(42), s = n(24);
        t.Client = class extends o.EventEmitter {
            constructor(e) {
                if (e = e || {}, super(), this.inprocess = !1, this.context = void 0, e.context && (this.context = Object.assign({}, e.context), this.context.productId = e.socketPrex), e.socket) this.socket = e.socket, this.bind(); else if (global.__xdasIPCServer && global.__xdasIPCServer.getProductId().toLowerCase() === e.socketPrex.toLowerCase()) this.inprocess = !0; else {
                    let t = s.getSockPath(e.socketPrex);
                    this.socket = r.connect(t), this.bind()
                }
            }

            isInprocess() {
                return this.inprocess
            }

            getContext() {
                return this.context
            }

            bind() {
                const e = new a.Parser, t = this.socket;
                t.on("data", t => {
                    e.feed(t)
                }), t.on("connect", () => {
                    this.emit("connect")
                }), t.on("end", () => {
                    i.information("socket is ended"), this.socket = null, this.emit("end")
                }), t.on("error", e => {
                    i.error(e.message), this.socket = null, this.emit("error", e)
                }), e.on("message", e => {
                    this.emit("message", e)
                }), this.parser = e
            }

            send(e) {
                if (this.socket) try {
                    this.socket.write(this.parser.encode(e))
                } catch (e) {
                    i.error(e.message)
                } else i.information("This socket has been ended by the other party")
            }
        }
    }, 45: function (e, t) {
        e.exports = require("string_decoder")
    }, 46: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(12), i = (n(19), n(2)), a = n(6);
        let s = null;
        const l = n(15), c = n(3), d = n(1), u = n(9), f = n(18), h = n(7), p = "xdas_profile_stat";
        let _ = "", g = void 0, m = null, v = void 0, b = null,
            y = u.default(i.join(__rootDir, "../bin/ThunderHelper.node")), w = new Set;

        function R() {
            return r(this, void 0, void 0, function* () {
                return new Promise(e => r(this, void 0, void 0, function* () {
                    void 0 === v && (null === b && (b = new Promise(e => {
                        e(v = function (e) {
                            let t = "";
                            if (0 === e.length && "renderer" === process.type) {
                                let e = i.normalize(decodeURIComponent(window.location.href)),
                                    n = e.indexOf(process.resourcesPath);
                                n = n > -1 ? n + process.resourcesPath.length + 1 : n;
                                let r = e.length - 1, o = e.indexOf("?"), a = e.indexOf("#");
                                r = o > -1 ? Math.min(o - 1, r) : r, r = a > -1 ? Math.min(a - 1, r) : r, n > -1 && r >= n && (t = e.substr(n, r - n + 1))
                            }
                            return 0 === t.length && (t = 0 !== e.length ? e : process.type), t = t.replace(/\||,|;/g, "_")
                        }(""))
                    })), v = yield b), e(v)
                }))
            })
        }

        function C(e) {
            let t = "";
            do {
                if (null === e || void 0 === e) break;
                switch (typeof e) {
                    case"string":
                        t = e;
                        break;
                    case"object":
                        t = a.inspect(e) || "";
                        break;
                    case"number":
                    case"boolean":
                        t = e.toString() || ""
                }
            } while (0);
            return t
        }

        function E(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function S(e) {
            return r(this, void 0, void 0, function* () {
                return new Promise(t => r(this, void 0, void 0, function* () {
                    let r = void 0;
                    null === s && (s = yield Promise.resolve().then(() => n(36)));
                    let o = s.createHash("md5");
                    null !== o && (r = o.update(e).digest("hex")), t(r)
                }))
            })
        }

        function T() {
            return new Promise(e => r(this, void 0, void 0, function* () {
                let t = "";
                t = void 0 === g ? "browser" === process.type ? function () {
                    if (void 0 === g) {
                        let e = process.argv.length, t = process.argv;
                        for (let n = 0; n < e; n++) {
                            let e = t[n];
                            if (e.startsWith("-StartType:")) {
                                g = e.substring("-StartType:".length);
                                break
                            }
                        }
                        void 0 === g && (g = "")
                    }
                    return g
                }() : yield function () {
                    return r(this, void 0, void 0, function* () {
                        return null === m && (m = new Promise(e => {
                            c.ipcRenderer.send(f.ThunderChannelList.channelRMGetBrowserStartType), c.ipcRenderer.once(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, (t, n) => {
                                g = n, e(n), m = null
                            })
                        })), m
                    })
                }() : g, e(t)
            }))
        }

        function M(e, t, n, o) {
            return r(this, void 0, void 0, function* () {
                let i = C(t), a = C(n), s = yield S(a), c = function (e) {
                    let t = new RegExp(E("file:///"), "g"), n = new RegExp(E(process.resourcesPath + "\\"), "g"),
                        r = new RegExp(E(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                    return e.replace(t, "").replace(n, "").replace(r, "")
                }(C(o)), d = yield S(c), u = `${e}:${s}:${d}`;
                w.has(u) || (w.add(u), l.XLStatNS.trackEvent(p, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield R()},code=${i},message_hash=${s},message=${encodeURI(a)},stack_hash=${d},stack=${encodeURI(c)}`)), function (e, t, n, o) {
                    return r(this, void 0, void 0, function* () {
                    })
                }().catch()
            })
        }

        function k(e) {
            console.error(e);
            let t = e || {};
            M("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
        }

        !function (e) {
            e.init = function (e) {
                _ = e
            }, e.trackColdStartUpEvent = function (e) {
                return r(this, void 0, void 0, function* () {
                    let t = y.iSColdStartUp() ? 1 : 0, n = o.release(),
                        r = y.performanceMonitorReporter.getProcessUptime(), i = yield T(),
                        a = `key=${e},start_type=${i},cold_start_up=${t},os_version=${n},cost_time=${r}`;
                    l.XLStatNS.trackEvent(p, "cold_start_up", "", 0, 0, 0, 0, a)
                })
            }
        }(t.PerformanceMonitorStatNS || (t.PerformanceMonitorStatNS = {})), function () {
            return r(this, void 0, void 0, function* () {
                if (process.on("uncaughtException", e => {
                    console.error(e);
                    let t = e || {};
                    M("uncaughtException", t.code, t.message, t.stack).catch()
                }), "browser" === process.type) process.on("unhandledRejection", (e, t) => {
                    k(e)
                }), c.ipcMain.on(f.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
                    return r(this, void 0, void 0, function* () {
                        let t = yield T();
                        e.sender.send(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
                    })
                }); else if ("browser" !== process.type) {
                    window.addEventListener("unhandledrejection", e => {
                        k(e && e.reason || {})
                    });
                    let e = yield h.asyncRemoteCall.getCurrentWebContents();
                    null !== e && void 0 !== e && e.once("did-finish-load", () => {
                        (function () {
                            return r(this, void 0, void 0, function* () {
                                do {
                                    if ("browser" === process.type) break;
                                    if (null === window.performance.timing || void 0 === window.performance.timing) break;
                                    let e = y.iSColdStartUp() ? 1 : 0, t = o.release(), n = window.performance.timing,
                                        r = n.loadEventEnd - n.navigationStart, i = n.fetchStart - n.navigationStart,
                                        a = n.domainLookupEnd - n.domainLookupStart, s = n.connectEnd - n.connectStart,
                                        c = n.responseStart - n.requestStart, d = n.responseEnd - n.responseStart,
                                        u = n.domComplete - n.domLoading, f = yield T();
                                    l.XLStatNS.trackEvent(p, "page_load_time", "", 0, 0, 0, 0, `start_type=${f},cold_start_up=${e},os_version=${t},load_time=${r},before_fetch_time=${i},domin_lookup_time=${a},connect_time=${s},first_response_time=${c},responseTime=${d},domTime=${u},process=${_}`)
                                } while (0)
                            })
                        })().catch()
                    })
                }
                d.default.hook("beforeLog", (e, t, ...n) => {
                    e === d.LogLevel.Critical && l.XLStatNS.trackEvent(p, "critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${n}`)
                })
            })
        }().catch()
    }, 47: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(3), o = n(40), i = n(48), a = n(49), s = n(28), l = n(50), c = n(17), d = r.isPromise,
            u = r.ipcRenderer, f = process.atomBinding("v8_util"), h = new i.default, p = f.createIDWeakMap();

        class _ {
            constructor(e) {
                if ("object" == typeof e ? (this.on = "object" == typeof e.on ? e.on : {}, this.once = "object" == typeof e.once ? e.once : {}) : (this.on = {}, this.once = {}), !this.check()) throw new Error("unexpected param")
            }

            check() {
                let e = !0;
                do {
                    let t = Object.getOwnPropertyNames(this.on);
                    if (t.forEach(t => {
                        "function" != typeof this.on[t] && (e = !1)
                    }), !e) break;
                    (t = Object.getOwnPropertyNames(this.once)).forEach(t => {
                        "function" != typeof this.once[t] && (e = !1)
                    })
                } while (0);
                return e
            }
        }

        function g(e, t = new Set) {
            const n = e => {
                if (t.has(e)) return {type: "value", value: null};
                let r = e;
                if (Array.isArray(e)) {
                    t.add(e);
                    let n = {type: "array", value: g(e, t)};
                    return t.delete(e), n
                }
                if (ArrayBuffer.isView(r)) return {type: "buffer", value: o.Buffer.from(e)};
                if (e instanceof Date) return {type: "date", value: e.getTime()};
                if (null != e && "object" == typeof e) {
                    if (d(e)) return {
                        type: "promise", then: n(function (t, n) {
                            e.then(t, n)
                        })
                    };
                    if (f.getHiddenValue(e, "__remote_id__")) return {
                        type: "remote-object",
                        id: f.getHiddenValue(e, "__remote_id__")
                    };
                    let r = {
                        type: e instanceof _ ? "interest" : "object",
                        name: e.constructor ? e.constructor.name : "",
                        members: []
                    };
                    t.add(e);
                    for (let t in e) r.members.push({name: t, value: n(e[t])});
                    return t.delete(e), r
                }
                if ("function" == typeof e) {
                    return {
                        type: "function",
                        id: h.add(e),
                        location: f.getHiddenValue(e, "__remote_call_location__"),
                        length: e.length
                    }
                }
                return {type: "value", value: e}
            };
            return e.map(n)
        }

        function m(e, t, n) {
            d(e) ? e.then(e => {
                t(e)
            }, e => {
                n(e)
            }) : t(e)
        }

        function v(e, t, n, r = !1) {
            const o = t => {
                if (e.hasOwnProperty(t.name) && !r) return;
                let n, o = {enumerable: t.enumerable, configurable: !0};
                if ("method" === t.type) {
                    if (t.value.refId) {
                        if (p.has(t.value.refId) && (n = p.get(t.value.refId)), null == n) throw new Error("member refId pointer to null" + t.value.refId + "name: " + t.name)
                    } else n = R(t.value, e, t.name);
                    o.get = (() => n), o.set = (e => n = e)
                } else "get" === t.type && (o.get = (() => n), t.writable && (o.set = (e => {
                    n = e
                })), n = R(t.value));
                Object.defineProperty(e, t.name, o)
            };
            if (Array.isArray(n)) {
                let e = n.length;
                for (let t = 0; t < e; t++) o(n[t])
            }
        }

        function b(e, t, n) {
            if (n) {
                let t = R(n);
                Object.setPrototypeOf(e, t)
            }
        }

        function y(e, t) {
            f.setHiddenValue(e, "__remote_id__", t)
        }

        function w(e) {
            return f.getHiddenValue(e, "__remote_id__")
        }

        function R(e, t, n) {
            const r = {
                value: () => e.value,
                array: () => e.members.map(e => R(e)),
                buffer: () => o.Buffer.from(e.value),
                promise: () => Promise.resolve({then: R(e.then)}),
                error: () => (function (e) {
                    const t = (() => "error" === e.type ? new Error : {})();
                    for (let n = 0; n < e.members.length; n++) {
                        let {name: r, value: o} = e.members[n];
                        t[r] = o
                    }
                    return t
                })(e),
                date: () => new Date(e.value),
                exception: () => {
                    throw new Error(`${e.message}\n${e.stack}`)
                }
            };
            let i;
            return e.type in r ? i = r[e.type]() : e.refId ? p.has(e.refId) ? i = p.get(e.refId) : (c.warn("[metaToValue] refId point to null" + e.refId), i = "function" === e.type ? () => {
            } : {}) : e.id ? p.has(e.id) ? (v(i = p.get(e.id), e.id, e.members, !0), b(i, e.id, e.proto)) : (i = "function" === e.type ? t ? function (e, t, n) {
                if (p.has(n.id)) return p.get(n.id);
                let r = w(e), o = function (...e) {
                    throw Error("never should come to a proxied function")
                };
                Object.defineProperty(o, "name", {value: t, writable: !1, enumerable: !0});
                let i = new Proxy(o, {
                    apply: (e, n, o) => new Promise((e, i) => {
                        let c = w(n);
                        if (c || (c = w(n.__remoteObj_)), !c) throw Error("is this function was a bound function?");
                        let d = s.default.browser.memberCall, f = l.default(d), h = g(o);
                        u.send(d, f, c, r, t, h), a.default.add(f, t => {
                            try {
                                m(R(t), e, i)
                            } catch (e) {
                                i(e)
                            }
                        })
                    }), construct: (e, n, o) => new Promise((e, o) => {
                        let i = s.default.browser.memberConstruct, c = l.default(i);
                        u.send(i, c, r, t, g(n)), a.default.add(c, t => {
                            try {
                                let n = R(t);
                                e(n)
                            } catch (e) {
                                o(e)
                            }
                        })
                    })
                });
                return f.setHiddenValue(o, "__remote_id__", n.id), i
            }(t, n, e) : function (e) {
                let t = e.id;
                const n = function (...e) {
                    throw new Error("Should Never com to a remoteFunction PlaceHolder")
                };
                return y(n, t), new Proxy(n, {
                    apply: (e, n, r) => new Promise((e, o) => {
                        let i = s.default.browser.functionCall, c = l.default(i), d = w(n);
                        u.send(i, c, d, t, g(r)), a.default.add(c, t => {
                            try {
                                m(R(t), e, o)
                            } catch (e) {
                                o(e)
                            }
                        })
                    }), construct: (e, n, r) => new Promise((e, r) => {
                        let o = s.default.browser.construct, i = l.default(o);
                        u.send(o, i, t, g(n)), a.default.add(i, t => {
                            try {
                                let n = R(t);
                                e(n)
                            } catch (e) {
                                r(e)
                            }
                        })
                    })
                })
            }(e) : {}, f.setRemoteObjectFreer(i, e.id), p.set(e.id, i), f.setHiddenValue(i, "__remote_id__", e.id), function (e) {
                let t = w(e);
                Object.defineProperties(e, {
                    __set: {
                        enumerable: !1, writable: !1, value: function (n, r) {
                            if ("function" == typeof r) throw new Error("set a function to a remote member is dangerous");
                            return new Promise((o, i) => {
                                let c = s.default.browser.memberSet, d = l.default(c), f = g([r]);
                                u.send(c, d, t, n, f), a.default.add(d, t => {
                                    try {
                                        let a = R(t);
                                        e[n] = r, o(a)
                                    } catch (e) {
                                        i(e)
                                    }
                                })
                            })
                        }
                    }, __get: {
                        enumerable: !1, writable: !1, value: function (n) {
                            return new Promise((r, o) => {
                                let i = s.default.browser.memberGet, c = l.default(i);
                                u.send(i, c, t, n), a.default.add(c, t => {
                                    try {
                                        const i = R(t);
                                        e[n] = i, r(i)
                                    } catch (e) {
                                        o(e)
                                    }
                                })
                            })
                        }
                    }, __sync: {
                        enumerable: !1, writable: !1, value: function () {
                            return new Promise((e, n) => {
                                let r = s.default.browser.sync, o = l.default(r);
                                u.send(r, o, t), a.default.add(o, r => {
                                    try {
                                        if (r.id !== t) throw Error("SYNC_RETURN: remote id not match");
                                        let o = R(r);
                                        e(o)
                                    } catch (e) {
                                        n(e)
                                    }
                                })
                            })
                        }
                    }
                })
            }(i), v(i, e.id, e.members), b(i, e.id, e.proto), Object.defineProperty(i.constructor, "name", {value: e.name}), e.extendedMemberNames && e.extendedMemberNames.forEach((e, t) => {
                let n = i[e], r = i.__proto__;
                for (; r;) {
                    if (Object.prototype.hasOwnProperty.call(r, e)) {
                        delete r[e];
                        break
                    }
                    r = r.__proto__
                }
                Object.defineProperty(i, e, {value: n, enumerable: !1, writable: !1, configurable: !0})
            })) : c.error("no id of meta:", e), i
        }

        t.Interest = _;

        class C {
            constructor(...e) {
                if (this.__resolved_ = !1, this.__promise_ = null, this.__remoteObj_ = null, this.__what_ = "", this.__name_ = "", "string" === typeof arguments[0]) {
                    let e = arguments[0], t = arguments[1];
                    this.__what_ = e, this.__name_ = t || e, this.__resolved_ = !1, this.__remoteObj_ = null, this.__promise_ = new Promise((n, r) => {
                        let o = this.getChannel(e), i = l.default(o);
                        u.send(o, i, t), a.default.add(i, e => {
                            try {
                                let t = R(e);
                                this.__remoteObj_ = t, this.__resolved_ = !0, n(t)
                            } catch (e) {
                                r(e)
                            }
                        })
                    })
                } else this.__remoteObj_ = arguments[0], this.__resolved_ = !0, this.__promise_ = null
            }

            getChannel(e) {
                let t = "";
                switch (e) {
                    case"module":
                        t = s.default.browser.require;
                        break;
                    case"builtin":
                        t = s.default.browser.builtIn;
                        break;
                    case"global":
                        t = s.default.browser.global;
                        break;
                    case"current_window":
                        t = s.default.browser.currentWindow;
                        break;
                    case"current_web_contents":
                        t = s.default.browser.currentWebContents;
                        break;
                    case"client_web_contents":
                        t = s.default.browser.clientWebContents
                }
                return t
            }

            __resolve() {
                let e = this.__promise_;
                if (null !== e) ; else {
                    if (!this.__resolved_) throw Error("missing the promise for ayncnomously get remote object");
                    e = new Promise((e, t) => {
                        e(this.__remoteObj_)
                    }), this.__promise_ = e
                }
                return e
            }

            __isResolved() {
                return this.__resolved_
            }
        }

        function E(e, t, n) {
            try {
                a.default.invoke(t, n).remove(t)
            } finally {
                a.default.remove(t)
            }
        }

        u.on(s.default.renderer.requireReturn, E), u.on(s.default.renderer.getBuiltInReturn, E), u.on(s.default.renderer.getGlobalReturn, E), u.on(s.default.renderer.currentWindowReturn, E), u.on(s.default.renderer.currentWebContentsReturn, E), u.on(s.default.renderer.functionCallReturn, E), u.on(s.default.renderer.constructReturn, E), u.on(s.default.renderer.memberCallReturn, E), u.on(s.default.renderer.memberSetReturn, E), u.on(s.default.renderer.memberGetReturn, E), u.on(s.default.renderer.memberConstructReturn, E), u.on(s.default.renderer.callback, (e, t, n) => {
            h.apply(t, R(n))
        }), u.on(s.default.renderer.syncReturn, E), u.on("ELECTRON_RENDERER_RELEASE_CALLBACK", (e, t) => {
            c.info("[RELEASE_CALLBACK]: callbackId:", t), h.remove(t)
        }), process.on("exit", () => {
            u.send(s.default.browser.contextRelease)
        });
        const S = ["__resolve", "__isResolved"],
            T = ["__promise_", "__resolved_", "__remoteObj_", "__name_", "__what_"], M = e => {
                if (!e.__isResolved()) throw Error("Can not access the property of a remote module which has not Resolved yet.")
            };

        function k(e) {
            const t = function () {
            };
            Object.defineProperty(t, "name", {value: e.__name_}), Object.defineProperty(t, "what", {
                enumerable: !1,
                value: e.__what_
            });
            let n = new Proxy(t, {
                getPrototypeOf: t => (M(e), Reflect.getPrototypeOf(e.__remoteObj_)),
                setPrototypeOf: (e, t) => {
                    throw new Error("changing prototype of remote object is forbidden")
                },
                isExtensible: t => (M(e), Reflect.isExtensible(e.__remoteObj_)),
                preventExtensions: t => (M(e), Reflect.preventExtensions(e)),
                getOwnPropertyDescriptor: (t, n) => (M(e), Reflect.getOwnPropertyDescriptor(e.__remoteObj_, n)),
                has: (t, n) => (M(e), Reflect.has(e.__remoteObj_, n)),
                deleteProperty: (t, n) => (M(t), Reflect.deleteProperty(e.__remoteObj_, n)),
                defineProperty: (t, n, r) => (M(e), Reflect.defineProperty(e.__remoteObj_, n, r)),
                get: (t, n, r) => {
                    if ("string" == typeof n) {
                        if (String.prototype.includes.call(T, n)) {
                            return e[n]
                        }
                        if (String.prototype.includes.call(S, n)) {
                            return e[n]
                        }
                    }
                    return M(e), Reflect.get(e.__remoteObj_, n)
                },
                set: (t, n, r, o) => (M(e), Reflect.set(e.__remoteObj_, n, r, o)),
                ownKeys: t => (M(e), Reflect.ownKeys(e.__remoteObj_)),
                apply: (t, n, r) => {
                    M(e), Reflect.apply(e.__remoteObj_, n, r)
                },
                construct: (t, n, r) => {
                    if (M(e), "function" != typeof e.__remoteObj_) throw Error("operator new ONLY used for function");
                    return new Promise((t, r) => {
                        let o = s.default.browser.construct, i = l.default(o),
                            c = f.getHiddenValue(e.__remoteObj_, "__remote_id__");
                        u.send(o, i, c, g(n)), a.default.add(i, e => {
                            try {
                                t(R(e))
                            } catch (e) {
                                r(e)
                            }
                        })
                    })
                }
            });
            return e.__promise_.then(e => {
                let t = typeof e;
                if ("function" === t || "object" === t) {
                    let t = w(e);
                    t && y(n, t)
                }
            }), n
        }

        t.remoteRequire = function (e) {
            return k(new C("module", e))
        }, t.getBuiltin = function (e) {
            return k(new C("builtin", e))
        }, t.getGlobal = function (e) {
            return k(new C("global", e))
        }, t.getCurrentWindow = function () {
            return k(new C("current_window"))
        }, t.getCurrentWebContents = function () {
            return k(new C("current_web_contents"))
        }
    }, 48: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = process.atomBinding("v8_util");
        t.default = class {
            constructor() {
                this.nextId = 0, this.callbacks = {}
            }

            add(e) {
                let t = r.getHiddenValue(e, "__remote_callback_id__");
                if (null != t) return t;
                t = this.nextId -= 1;
                const n = /at (.*)/gi, o = (new Error).stack;
                let i, a = n.exec(o);
                for (; null !== a;) {
                    const e = a[1];
                    if (!e.includes("native") && !e.includes("electron.asar")) {
                        i = /([^/^)]*)\)?$/gi.exec(e)[1];
                        break
                    }
                    a = n.exec(o)
                }
                return this.callbacks[t] = e, r.setHiddenValue(e, "__remote_callback_id__", t), r.setHiddenValue(e, "__remote_call_location__", i), t
            }

            get(e) {
                return this.callbacks[e] || function () {
                }
            }

            apply(e, ...t) {
                return this.get(e).apply(global, ...t)
            }

            remove(e) {
                const t = this.callbacks[e];
                t && (r.deleteHiddenValue(t, "__remote_callback_id__"), delete this.callbacks[e])
            }
        }
    }, 49: function (e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t = {};
            e.add = function (e, n, r) {
                t[e] = {func: n, thisArg: r}
            }, e.invoke = function (n, ...r) {
                let o = t[n];
                return o.thisArg ? o.func.apply(o.thisArg, ...r) : o.func(...r), e
            }, e.remove = function (e) {
                delete t[e]
            }
        }(r || (r = {})), t.default = r
    }, 5: function (e, t, n) {
        e.exports = n(8)(201)
    }, 50: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        let r = 0;
        t.default = function (e) {
            return e ? e.concat(".").concat(String(++r)) : String(++r)
        }
    }, 508: function (e, t, n) {
        "use strict";
        var r = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "td-cover"}, [n("div", {
                staticClass: "td-dialog xlx-dialog-loading",
                class: {
                    "xlx-dialog-loading--tips": "ad-webpagetip" === e.browserType,
                    "xlx-dialog-loading--news": "ad-webpagetip" !== e.browserType
                }
            }, [n("div", {staticClass: "td-dialog__header"}, [n("h2", [e._v(e._s(e.title))]), e._v(" "), "sign" === e.browserType ? n("a", {
                staticClass: "td-dialog__min",
                attrs: {href: "javascript:;", title: "其他"},
                on: {
                    click: function (t) {
                        e.noPopup(t, "sign")
                    }
                }
            }, [n("i", {staticClass: "td-icon-arrow-down"})]) : e._e(), e._v(" "), e.canShowMenu ? n("a", {
                staticClass: "td-dialog__other",
                attrs: {href: "javascript:;", title: "其他"},
                on: {click: e.showMenu}
            }, [n("i", {staticClass: "td-icon-arrow-down"})]) : e._e(), e._v(" "), "news-popup" === e.browserType || "1" === e.minimizable ? n("a", {
                staticClass: "td-dialog__min",
                attrs: {href: "javascript:;", title: "最小化"},
                on: {click: e.minimiseWnd}
            }, [n("i", {staticClass: "td-icon-minimize"})]) : e._e(), e._v(" "), n("a", {
                staticClass: "td-dialog__close",
                attrs: {href: "javascript:;", title: "关闭"},
                on: {
                    click: function (t) {
                        e.closeWnd("btn_close")
                    }
                }
            }, [n("i", {staticClass: "td-icon-close"})])]), e._v(" "), n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "xlx-dialog-loading__load"}, [n("i", {staticClass: "td-icon-load"}), e._v(" "), "news-popup" === e.browserType ? n("p", [e._v("正在加载...")]) : e._e()])])])])
        }, o = [];
        r._withStripped = !0, n.d(t, "a", function () {
            return r
        }), n.d(t, "b", function () {
            return o
        })
    }, 51: function (e, t, n) {
        "use strict";
        const r = n(3), o = n(52), i = n(28), a = n(53), s = n(17), l = r.isPromise, c = r.ipcMain,
            d = process.atomBinding("v8_util");
        let u = d.createDoubleIDWeakMap();
        const f = new o.default;

        function h(e, t, n, r, o, i) {
            let a, l = !1, c = null, d = !1;
            do {
                try {
                    a = t[r]
                } catch (e) {
                    l = !0
                }
                if (l) try {
                    a = n.value[r], l = !1, n.meta.extendedMemberNames.push(r), d = !0
                } catch (e) {
                    s.error(`property ${r} untouchable, even try root[name]`)
                }
                if (l) break;
                let o = Object.getOwnPropertyDescriptor(t, r);
                if (void 0 === o) {
                    s.warn(`descriptor of property ${r} is undefined`);
                    break
                }
                c = {
                    name: r,
                    enumerable: o.enumerable,
                    writable: !1,
                    type: "get"
                }, void 0 === o.get && "function" == typeof a ? c.type = "method" : ((o.set || o.writable) && (c.writable = !0), c.type = "get"), d ? (c.configurable = !0, c.value = g(e, a, i, !1, null)) : c.value = g(e, a, i, !1, n)
            } while (0);
            return c
        }

        function p(e, t, n, r = null) {
            let o = Object.getOwnPropertyNames(t);
            "function" == typeof t && (o = o.filter(function (e) {
                return !String.prototype.includes.call(a.propertiesOfFunction, e)
            }));
            let i = [];
            do {
                if (0 === o.length) break;
                let a = o.length;
                for (let s = 0; s < a; s++) {
                    let a = h(e, t, n, o[s], 0, r);
                    a && i.push(a)
                }
            } while (0);
            return i
        }

        function _(e, t, n, r = null) {
            let o = null, i = Object.getPrototypeOf(t);
            return o = null === i || i === Object.prototype || i === Function.prototype ? null : g(e, i, r, !1, n)
        }

        function g(e, t, n = null, r = !1, o = null) {
            n = null === n ? {} : n;
            const i = {type: typeof t};
            "object" === i.type && (i.type = function (e, t) {
                let n = typeof e;
                if ("object" !== n) throw new Error("incorrect arg at index 0. non-object");
                return null === e ? n = "value" : ArrayBuffer.isView(e) ? n = "buffer" : Array.isArray(e) ? n = "array" : e instanceof Error ? n = "error" : e instanceof Date ? n = "date" : l(e) ? n = "promise" : Object.prototype.hasOwnProperty.call(e, "callee") && null != e.length ? n = "array" : t && d.getHiddenValue(e, "simple") && (n = "value"), n
            }(t, r));
            do {
                if ("object" === i.type || "function" === i.type) {
                    let r = f.getIdOfObject(t);
                    if (r && n[r]) {
                        i.refId = r, f.add(e, t);
                        break
                    }
                }
                "array" === i.type ? i.members = t.map(t => g(e, t, n)) : "object" === i.type || "function" === i.type ? (null == o && (i.extendedMemberNames = [], o = {
                    value: t,
                    meta: i
                }), i.name = t.constructor ? t.constructor.name : "", i.id = f.add(e, t), n[i.id] = !0, i.members = p(e, t, o, n), i.proto = _(e, t, o, n)) : "buffer" === i.type ? i.value = Buffer.from(t) : "promise" === i.type ? (t.then(function () {
                }, function () {
                }), i.then = g(e, function (e, n) {
                    t.then(e, n)
                })) : "error" === i.type ? (i.members = m(t), i.members.push({
                    name: "name",
                    value: t.name
                })) : "date" === i.type ? i.value = t.getTime() : (i.type = "value", i.value = t)
            } while (0);
            return i
        }

        function m(e) {
            return Object.getOwnPropertyNames(e).map(t => ({name: t, value: e[t]}))
        }

        function v(e, t) {
            const n = function (t) {
                let o, a, l = 0, c = 0;
                switch (t.type) {
                    case"value":
                        return t.value;
                    case"remote-object":
                        return f.get(t.id);
                    case"array":
                        return v(e, t.value);
                    case"buffer":
                        return Buffer.from(t.value);
                    case"date":
                        return new Date(t.value);
                    case"promise":
                        return Promise.resolve({then: n(t.then)});
                    case"object":
                    case"interest": {
                        let e = {};
                        for (Object.defineProperty(e.constructor, "name", {value: t.name}), l = 0, c = (a = t.members).length; l < c; l++) e[(o = a[l]).name] = n(o.value);
                        return e
                    }
                    case"function": {
                        const n = e.id, o = [n, t.id];
                        if (s.info("renderer function id:" + o), u.has(o)) return u.get(o);
                        let a = function (...o) {
                            s.info("[CALLBACK] args", o);
                            let l = [...o];
                            e.isDestroyed() || n !== e.id ? function (e, t, n) {
                                let o = "Attempting to call a function in a renderer window that has been closed or released." + `\nFunction provided here: ${e.location}`;
                                if (t.length > 0 && t[0].sender && t[0].sender instanceof r.webContents.constructor) {
                                    const {sender: e} = t[0], r = e.eventNames().filter(t => {
                                        let r = e.listeners(t), o = !1;
                                        return r.forEach(e => {
                                            e === n && (o = !0)
                                        }), o
                                    });
                                    r.length > 0 && (o += `\nRemote event names: ${r.join(", ")}`, r.forEach(t => {
                                        Object.getPrototypeOf(e).removeListener.call(e, t, n)
                                    }))
                                }
                                s.warn(o)
                            }(t, l, a) : e.send(i.default.renderer.callback, t.id, g(e, l))
                        };
                        return Object.defineProperty(a, "length", {value: t.length}), d.setRemoteCallbackFreer(a, t.id, e), u.set(o, a), a
                    }
                    default:
                        throw new TypeError(`Unknown type: ${t.type}`)
                }
            };
            return t.map(n)
        }

        function b(e, t, n, r) {
            let o, i;
            try {
                return t.apply(n, r)
            } catch (e) {
                return i = t.name, new Error(`Could not call remote function '${o = null != i ? i : "anonymous"}'. Check that the function signature is correct. Underlying error: ${e.message}`)
            }
        }

        function y(e) {
            return {type: "exception", message: e.message, stack: e.stack || e}
        }

        function w(e) {
            const t = new Error(e);
            throw Object.defineProperty(t, "code", {value: "EBADRPC"}), Object.defineProperty(t, "errno", {value: -72}), t
        }

        var R;
        !function (e) {
            const t = (e, t, ...n) => {
                const r = e.sender;
                r.isDestroyed() ? s.warn("webcontext is destroyed, id=", r.id) : r.send(t, ...n)
            };
            e.startServer = function () {
                c.on(i.default.browser.require, (e, n, r) => {
                    s.info(`[REQUIRE] module=${r} `);
                    let o = process.mainModule.require(r), a = g(e.sender, o);
                    t(e, i.default.renderer.requireReturn, n, a)
                }), c.on(i.default.browser.builtIn, (e, n, o) => {
                    s.info(`[BUILTIN]: property=${o} `);
                    let a = r[o], l = g(e.sender, a);
                    s.info(`[BUILTIN]: returns remoteId:${l.id}, type: ${typeof a}`), t(e, i.default.renderer.getBuiltInReturn, n, l)
                }), c.on(i.default.browser.global, (e, n, r) => {
                    s.info(`[GLOBAL]: proerty:${r} `);
                    let o, a = global[r];
                    o = g(e.sender, a), s.info(`[GLOBAL]: returns remoteid=${o.id}, obj=` + typeof a), t(e, i.default.renderer.getGlobalReturn, n, o)
                }), c.on(i.default.browser.currentWindow, (e, n, r) => {
                    s.info(`[CURRENT_WINDOW]: property=${r} `);
                    let o = e.sender.getOwnerBrowserWindow.call(e.sender), a = g(e.sender, o);
                    s.info(`[CURRENT_WINDOW]: returns remoteid=${a.id}, obj=` + o), t(e, i.default.renderer.currentWindowReturn, n, a)
                }), c.on(i.default.browser.currentWebContents, (e, n, r) => {
                    t(e, i.default.renderer.currentWebContentsReturn, n, g(e.sender, e.sender))
                });
                const e = (e, t) => {
                    const n = (t, n) => {
                        t && Object.getOwnPropertyNames(t).forEach(r => {
                            n ? e.once(r, t[r]) : e.on(r, t[r])
                        })
                    };
                    t.on && n(t.on, !1), t.once && n(t.once, !0)
                };
                c.on(i.default.browser.construct, (n, r, o, a) => {
                    let l, c = null;
                    try {
                        s.info(`[CONSTRUCTOR]: remoteId=${o} `);
                        let d = a.length > 0 ? a[a.length - 1] : null;
                        a = v(n.sender, a);
                        let u = f.get(o);
                        null == u && w(`Cannot call constructor on missing remote object ${o}`), d && "interest" === d.type && (c = a.pop());
                        let h = new (Function.prototype.bind.apply(u, [null].concat(a)));
                        h && c && e(h, c), l = g(n.sender, h, null, !1), s.info(`[CONSTRUCTOR]: returns remoteId =${l.id} name=${u.name} `)
                    } catch (e) {
                        l = y(e)
                    } finally {
                        t(n, i.default.renderer.constructReturn, r, l)
                    }
                }), c.on(i.default.browser.functionCall, function (e, n, r, o, a) {
                    let l;
                    try {
                        s.info(`[FUNCTION_CALL]: remoteId=${o}`), a = v(e.sender, a);
                        let c = f.get(o);
                        if (null == c) s.error(`Cannot call function on missing remote object ${o}`), l = g(e.sender, void 0); else {
                            let t = r ? f.get(r) : global;
                            if (t) {
                                let n = b(0, c, t, a);
                                l = g(e.sender, n)
                            } else s.error(`Cannot call function(${o}) on missing context(${r})`), l = g(e.sender, void 0)
                        }
                        s.info(`[FUNCTION_CALL]: name=${c.name}`)
                    } catch (e) {
                        l = y(e)
                    } finally {
                        t(e, i.default.renderer.functionCallReturn, n, l)
                    }
                }), c.on(i.default.browser.memberCall, function (e, n, r, o, a, l) {
                    let c;
                    s.info(`[MEMBER_CALL]: thisArg=${r}, remoteId=${o}, method=${a}, args count=${l.length}`);
                    try {
                        l = v(e.sender, l);
                        let d = f.get(o);
                        null == d && w(`Cannot call function '${a}' on missing remote object ${o}`);
                        let u = r ? f.get(r) : d;
                        if (u) {
                            let t = b(0, d[a], u, l);
                            c = g(e.sender, t), s.info("[MEMBER_CALL]: return=" + t)
                        } else c = g(e.sender, void 0)
                    } catch (e) {
                        c = y(e)
                    } finally {
                        t(e, i.default.renderer.memberCallReturn, n, c)
                    }
                }), c.on(i.default.browser.memberGet, function (e, n, r, o) {
                    let a;
                    try {
                        s.info(`[MEMBER_GET]: remoteId=${r}, property=`, o);
                        let l = f.get(r);
                        null == l && w(`Cannot get property '${Object.toString.call(o)}' on missing remote object ${r}`);
                        let c = l[o];
                        a = g(e.sender, c)
                    } catch (e) {
                        a = y(e)
                    } finally {
                        t(e, i.default.renderer.memberGetReturn, n, a)
                    }
                }), c.on(i.default.browser.memberSet, function (e, n, r, o, a) {
                    try {
                        s.info(`[MEMBER_SET]: remoteId=${r}, property=` + o), a = v(e.sender, a);
                        let l = f.get(r);
                        null == l && w(`Cannot set property '${Object.toString.call(o)}' on missing remote object ${r}`), l[o] = a[0], t(e, i.default.renderer.memberSetReturn, n, {
                            type: "value",
                            value: !0
                        })
                    } catch (r) {
                        t(e, i.default.renderer.memberSetReturn, n, y(r))
                    }
                }), c.on(i.default.browser.memberConstruct, function (n, r, o, a, l) {
                    let c, d = null;
                    try {
                        s.info(`[MEMBER_CONSTRUCTOR]: regId=${o}, method=${a}`);
                        let u = l.length > 0 ? l[l.length - 1] : null;
                        l = v(n.sender, l);
                        let h = f.get(o);
                        null == h && w(`Cannot call constructor '${a}' on missing remote object ${o}`), u && "interest" === u.type && (d = l.pop());
                        let p = h[a], _ = new (Function.prototype.bind.apply(p, [null].concat(l)));
                        _ && d && e(_, d), c = g(n.sender, _)
                    } catch (e) {
                        c = y(e)
                    } finally {
                        t(n, i.default.renderer.memberConstructReturn, r, c)
                    }
                }), c.on(i.default.browser.sync, function (e, n, r) {
                    let o = f.get(r);
                    t(e, i.default.renderer.syncReturn, n, g(e.sender, o))
                }), c.on("ELECTRON_BROWSER_DEREFERENCE", function (e, t) {
                    let n = f.get(t);
                    if (n) {
                        let r = n.name;
                        r || (r = n.constructor ? n.constructor.name : ""), f.remove(e.sender.id, t)
                    } else t < 0 && s.warn("remote id reference to nothing:", t)
                }), c.on(i.default.browser.contextRelease, e => {
                    f.clear(e.sender.id)
                })
            }, e.getObjectRegistry = function () {
                return f
            }
        }(R || (R = {})), e.exports = R
    }, 52: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(17), o = -1 * Math.pow(2, 31), i = process.atomBinding("v8_util");
        t.default = class {
            constructor() {
                this.nextId = 0, this.storage = new Map, this.owners = new Map
            }

            add(e, t) {
                const n = this.saveToStorage(t), r = e.id;
                let o = this.owners.get(r);
                return o || (o = new Set, this.owners.set(r, o), this.registerDeleteListener(e, r)), o.has(n) || (o.add(n), this.storage.get(n).count++), n
            }

            getIdOfObject(e) {
                return i.getHiddenValue(e, "__remote_id__")
            }

            get(e) {
                const t = this.storage.get(e);
                if (void 0 !== t) return t.object
            }

            remove(e, t) {
                this.dereference(t);
                let n = this.owners.get(e);
                n && n.delete(t)
            }

            clear(e) {
                let t = this.owners.get(e);
                if (t) {
                    for (let e of t) this.dereference(e);
                    this.owners.delete(e)
                }
            }

            getStorageSize() {
                return this.storage.size
            }

            saveToStorage(e) {
                let t = i.getHiddenValue(e, "__remote_id__");
                if (!t) {
                    if ((t = --this.nextId) <= o) throw new Error("object registry id overflow");
                    this.storage.set(t, {object: e, count: 0}), i.setHiddenValue(e, "__remote_id__", t)
                }
                return t
            }

            dereference(e) {
                let t = this.storage.get(e);
                null != t && (t.count -= 1, 0 === t.count && (i.deleteHiddenValue(t.object, "__remote_id__"), this.storage.delete(e)))
            }

            registerDeleteListener(e, t) {
                const n = e.getProcessId(), o = (i, a) => {
                    a === n && (r.info("render-view-deleted: processid=" + n), (() => {
                        r.info("before clear. objectsRegistry capacity=" + this.storage.size, "owners size:" + this.owners.size)
                    })(), e.removeListener("render-view-deleted", o), this.clear(t))
                };
                e.on("render-view-deleted", o)
            }
        }
    }, 53: function (e, t, n) {
        "use strict";
        var r;
        !function (e) {
            e.propertiesOfFunction = ["length", "name", "arguments", "caller", "prototype", "apply", "bind", "call", "toString"]
        }(r || (r = {})), e.exports = r
    }, 55: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(4), o = n(41), i = n(1), a = n(11), s = i.default.getLogger("common/skin"), l = !1;

        function c(e) {
            if (l) if (e.type === o.SkinHelperNS.SkinType.Default) document.body.classList.remove("is-theme"), a.ThunderUtil.setCSSProperties(document.body, {
                "--color-primary-theme": "",
                "--color-primary-control-1": "",
                "--color-primary-control-2": "",
                "--color-primary-control-3": "",
                "--color-primary-control-4": "",
                "--color-primary-gradient-1": "",
                "--color-primary-gradient-2": "",
                "--color-primary-text": "",
                "--color-search": "",
                "--color-secondary": "",
                "--color-gradient-background-1": "",
                "--color-gradient-background-2": "",
                "--color-gradient-foreground-1": "",
                "--color-gradient-foreground-2": "",
                "--color-accordion-1": "",
                "--color-accordion-2": "",
                "--default-opacity-1": "",
                "--default-opacity-2": ""
            }); else if (e.type === o.SkinHelperNS.SkinType.Color || e.type === o.SkinHelperNS.SkinType.Wallpaper || e.type === o.SkinHelperNS.SkinType.Cool) {
                document.body.classList.add("is-theme");
                let {colors: {colorPrimary: t, colorPrimaryControl1: n, colorPrimaryControl2: r, colorPrimaryControl3: o, colorPrimaryControl4: i, colorPrimaryGradient: s, colorPrimaryText: l, colorSearch: c, colorSecondary: d, colorGradientBackground: u, colorGradientForeground: f, colorAccordion: h}, opacity: p} = e;
                a.ThunderUtil.setCSSProperties(document.body, {
                    "--color-primary-theme": `${t}`,
                    "--color-primary-control-1": `${n}`,
                    "--color-primary-control-2": `${r}`,
                    "--color-primary-control-3": `${o}`,
                    "--color-primary-control-4": `${i}`,
                    "--color-primary-gradient-1": `${s[0]}`,
                    "--color-primary-gradient-2": `${s[1]}`,
                    "--color-primary-text": `${l}`,
                    "--color-search": `${c}`,
                    "--color-secondary": `${d}`,
                    "--color-gradient-background-1": `${u[0]}`,
                    "--color-gradient-background-2": `${u[1]}`,
                    "--color-gradient-foreground-1": `${f[0]}`,
                    "--color-gradient-foreground-2": `${f[1]}`,
                    "--color-accordion-1": `${h[0]}`,
                    "--color-accordion-2": `${h[1]}`,
                    "--default-opacity-1": `${p - .1}`,
                    "--default-opacity-2": `${p + .1}`
                })
            }
        }

        r.client.callServerFunction("GetSkinInfo").then(c).catch(e => {
            s.warning(e)
        }), r.client.attachServerEvent("OnChangeSkin", (e, ...t) => {
            c(t[0])
        })
    }, 56: function (e, t, n) {
        e.exports = n(8)(204)
    }, 57: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(7), i = n(13), a = n(4), s = n(27);
        !function (e) {
            function t(e, t) {
                return r(this, void 0, void 0, function* () {
                    if (null !== e) {
                        let n = e.webContents;
                        (yield n.isDevToolsOpened()) ? yield n.closeDevTools() : yield n.openDevTools(t)
                    }
                })
            }

            e.openDevTool = t, e.enableDevTools = function (e) {
                return r(this, void 0, void 0, function* () {
                    window.addEventListener("keyup", n => r(this, void 0, void 0, function* () {
                        "F12" === n.key && n.ctrlKey && (yield s.DevEnvHelperNS.isLogEnable()) && (yield t(yield o.asyncRemoteCall.getCurrentWindow(), e))
                    }), !0)
                })
            }, e.enableDragOpenFile = function (e) {
                void 0 === e && (e = !1), document.addEventListener("dragover", e => (e.preventDefault(), e.stopPropagation(), !1), !0), document.addEventListener("drop", e => r(this, void 0, void 0, function* () {
                    e.preventDefault(), e.stopPropagation();
                    let t = e.dataTransfer, n = t.files, r = t.items;
                    if (void 0 !== r && null !== r && r.length > 0) for (let e = 0; e < r.length; e++) {
                        let t = r[e];
                        "string" === t.kind && "text/uri-list" === t.type ? t.getAsString(e => {
                            a.client.callServerFunction("DropOpenUrl", e).catch()
                        }) : t.kind
                    }
                    if (void 0 !== n && null !== n && n.length > 0) for (let e = 0; e < n.length; e++) {
                        let t = n[e].path;
                        void 0 !== t && null !== t && "" !== t && (yield i.FileSystemAWNS.existsAW(t)) && a.client.callServerFunction("DropOpenFile", t).catch()
                    }
                    return !1
                }), !0)
            }
        }(t.ThunderToolsNS || (t.ThunderToolsNS = {}))
    }, 59: function (e, t, n) {
        (function (e) {
            var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991,
                s = "[object Arguments]", l = "[object AsyncFunction]", c = "[object Function]",
                d = "[object GeneratorFunction]", u = "[object Null]", f = "[object Object]", h = "[object Proxy]",
                p = "[object Undefined]", _ = /^\[object .+?Constructor\]$/, g = /^(?:0|[1-9]\d*)$/, m = {};
            m["[object Float32Array]"] = m["[object Float64Array]"] = m["[object Int8Array]"] = m["[object Int16Array]"] = m["[object Int32Array]"] = m["[object Uint8Array]"] = m["[object Uint8ClampedArray]"] = m["[object Uint16Array]"] = m["[object Uint32Array]"] = !0, m[s] = m["[object Array]"] = m["[object ArrayBuffer]"] = m["[object Boolean]"] = m["[object DataView]"] = m["[object Date]"] = m["[object Error]"] = m[c] = m["[object Map]"] = m["[object Number]"] = m[f] = m["[object RegExp]"] = m["[object Set]"] = m["[object String]"] = m["[object WeakMap]"] = !1;
            var v = "object" == typeof global && global && global.Object === Object && global,
                b = "object" == typeof self && self && self.Object === Object && self,
                y = v || b || Function("return this")(), w = "object" == typeof t && t && !t.nodeType && t,
                R = w && "object" == typeof e && e && !e.nodeType && e, C = R && R.exports === w, E = C && v.process,
                S = function () {
                    try {
                        var e = R && R.require && R.require("util").types;
                        return e || E && E.binding && E.binding("util")
                    } catch (e) {
                    }
                }(), T = S && S.isTypedArray;
            var M, k, O, I = Array.prototype, P = Function.prototype, D = Object.prototype, N = y["__core-js_shared__"],
                F = P.toString, A = D.hasOwnProperty,
                x = (M = /[^.]+$/.exec(N && N.keys && N.keys.IE_PROTO || "")) ? "Symbol(src)_1." + M : "",
                L = D.toString, j = F.call(Object),
                W = RegExp("^" + F.call(A).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                B = C ? y.Buffer : void 0, U = y.Symbol, $ = y.Uint8Array, V = B ? B.allocUnsafe : void 0,
                G = (k = Object.getPrototypeOf, O = Object, function (e) {
                    return k(O(e))
                }), H = Object.create, z = D.propertyIsEnumerable, K = I.splice, q = U ? U.toStringTag : void 0,
                X = function () {
                    try {
                        var e = ye(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (e) {
                    }
                }(), Y = B ? B.isBuffer : void 0, J = Math.max, Q = Date.now, Z = ye(y, "Map"),
                ee = ye(Object, "create"), te = function () {
                    function e() {
                    }

                    return function (t) {
                        if (!De(t)) return {};
                        if (H) return H(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = void 0, n
                    }
                }();

            function ne(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function re(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function oe(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function ie(e) {
                var t = this.__data__ = new re(e);
                this.size = t.size
            }

            function ae(e, t) {
                var n = Me(e), r = !n && Te(e), o = !n && !r && Oe(e), i = !n && !r && !o && Fe(e),
                    a = n || r || o || i, s = a ? function (e, t) {
                        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                        return r
                    }(e.length, String) : [], l = s.length;
                for (var c in e) !t && !A.call(e, c) || a && ("length" == c || o && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || we(c, l)) || s.push(c);
                return s
            }

            function se(e, t, n) {
                (void 0 === n || Se(e[t], n)) && (void 0 !== n || t in e) || de(e, t, n)
            }

            function le(e, t, n) {
                var r = e[t];
                A.call(e, t) && Se(r, n) && (void 0 !== n || t in e) || de(e, t, n)
            }

            function ce(e, t) {
                for (var n = e.length; n--;) if (Se(e[n][0], t)) return n;
                return -1
            }

            function de(e, t, n) {
                "__proto__" == t && X ? X(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
            }

            ne.prototype.clear = function () {
                this.__data__ = ee ? ee(null) : {}, this.size = 0
            }, ne.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ne.prototype.get = function (e) {
                var t = this.__data__;
                if (ee) {
                    var n = t[e];
                    return n === r ? void 0 : n
                }
                return A.call(t, e) ? t[e] : void 0
            }, ne.prototype.has = function (e) {
                var t = this.__data__;
                return ee ? void 0 !== t[e] : A.call(t, e)
            }, ne.prototype.set = function (e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = ee && void 0 === t ? r : t, this
            }, re.prototype.clear = function () {
                this.__data__ = [], this.size = 0
            }, re.prototype.delete = function (e) {
                var t = this.__data__, n = ce(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : K.call(t, n, 1), --this.size, 0))
            }, re.prototype.get = function (e) {
                var t = this.__data__, n = ce(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, re.prototype.has = function (e) {
                return ce(this.__data__, e) > -1
            }, re.prototype.set = function (e, t) {
                var n = this.__data__, r = ce(n, e);
                return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
            }, oe.prototype.clear = function () {
                this.size = 0, this.__data__ = {hash: new ne, map: new (Z || re), string: new ne}
            }, oe.prototype.delete = function (e) {
                var t = be(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, oe.prototype.get = function (e) {
                return be(this, e).get(e)
            }, oe.prototype.has = function (e) {
                return be(this, e).has(e)
            }, oe.prototype.set = function (e, t) {
                var n = be(this, e), r = n.size;
                return n.set(e, t), this.size += n.size == r ? 0 : 1, this
            }, ie.prototype.clear = function () {
                this.__data__ = new re, this.size = 0
            }, ie.prototype.delete = function (e) {
                var t = this.__data__, n = t.delete(e);
                return this.size = t.size, n
            }, ie.prototype.get = function (e) {
                return this.__data__.get(e)
            }, ie.prototype.has = function (e) {
                return this.__data__.has(e)
            }, ie.prototype.set = function (e, t) {
                var r = this.__data__;
                if (r instanceof re) {
                    var o = r.__data__;
                    if (!Z || o.length < n - 1) return o.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new oe(o)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var ue, fe = function (e, t, n) {
                for (var r = -1, o = Object(e), i = n(e), a = i.length; a--;) {
                    var s = i[ue ? a : ++r];
                    if (!1 === t(o[s], s, o)) break
                }
                return e
            };

            function he(e) {
                return null == e ? void 0 === e ? p : u : q && q in Object(e) ? function (e) {
                    var t = A.call(e, q), n = e[q];
                    try {
                        e[q] = void 0;
                        var r = !0
                    } catch (e) {
                    }
                    var o = L.call(e);
                    r && (t ? e[q] = n : delete e[q]);
                    return o
                }(e) : function (e) {
                    return L.call(e)
                }(e)
            }

            function pe(e) {
                return Ne(e) && he(e) == s
            }

            function _e(e) {
                return !(!De(e) || x && x in e) && (Ie(e) ? W : _).test(function (e) {
                    if (null != e) {
                        try {
                            return F.call(e)
                        } catch (e) {
                        }
                        try {
                            return e + ""
                        } catch (e) {
                        }
                    }
                    return ""
                }(e))
            }

            function ge(e) {
                if (!De(e)) return function (e) {
                    var t = [];
                    if (null != e) for (var n in Object(e)) t.push(n);
                    return t
                }(e);
                var t = Re(e), n = [];
                for (var r in e) ("constructor" != r || !t && A.call(e, r)) && n.push(r);
                return n
            }

            function me(e, t, n, r, o) {
                e !== t && fe(t, function (i, a) {
                    if (o || (o = new ie), De(i)) !function (e, t, n, r, o, i, a) {
                        var s = Ce(e, n), l = Ce(t, n), c = a.get(l);
                        if (c) return void se(e, n, c);
                        var d = i ? i(s, l, n + "", e, t, a) : void 0, u = void 0 === d;
                        if (u) {
                            var h = Me(l), p = !h && Oe(l), _ = !h && !p && Fe(l);
                            d = l, h || p || _ ? Me(s) ? d = s : Ne(y = s) && ke(y) ? d = function (e, t) {
                                var n = -1, r = e.length;
                                t || (t = Array(r));
                                for (; ++n < r;) t[n] = e[n];
                                return t
                            }(s) : p ? (u = !1, d = function (e, t) {
                                if (t) return e.slice();
                                var n = e.length, r = V ? V(n) : new e.constructor(n);
                                return e.copy(r), r
                            }(l, !0)) : _ ? (u = !1, g = l, m = !0 ? (v = g.buffer, b = new v.constructor(v.byteLength), new $(b).set(new $(v)), b) : g.buffer, d = new g.constructor(m, g.byteOffset, g.length)) : d = [] : function (e) {
                                if (!Ne(e) || he(e) != f) return !1;
                                var t = G(e);
                                if (null === t) return !0;
                                var n = A.call(t, "constructor") && t.constructor;
                                return "function" == typeof n && n instanceof n && F.call(n) == j
                            }(l) || Te(l) ? (d = s, Te(s) ? d = function (e) {
                                return function (e, t, n, r) {
                                    var o = !n;
                                    n || (n = {});
                                    var i = -1, a = t.length;
                                    for (; ++i < a;) {
                                        var s = t[i], l = r ? r(n[s], e[s], s, n, e) : void 0;
                                        void 0 === l && (l = e[s]), o ? de(n, s, l) : le(n, s, l)
                                    }
                                    return n
                                }(e, Ae(e))
                            }(s) : De(s) && !Ie(s) || (d = function (e) {
                                return "function" != typeof e.constructor || Re(e) ? {} : te(G(e))
                            }(l))) : u = !1
                        }
                        var g, m, v, b;
                        var y;
                        u && (a.set(l, d), o(d, l, r, i, a), a.delete(l));
                        se(e, n, d)
                    }(e, t, a, n, me, r, o); else {
                        var s = r ? r(Ce(e, a), i, a + "", e, t, o) : void 0;
                        void 0 === s && (s = i), se(e, a, s)
                    }
                }, Ae)
            }

            function ve(e, t) {
                return Ee(function (e, t, n) {
                    return t = J(void 0 === t ? e.length - 1 : t, 0), function () {
                        for (var r = arguments, o = -1, i = J(r.length - t, 0), a = Array(i); ++o < i;) a[o] = r[t + o];
                        o = -1;
                        for (var s = Array(t + 1); ++o < t;) s[o] = r[o];
                        return s[t] = n(a), function (e, t, n) {
                            switch (n.length) {
                                case 0:
                                    return e.call(t);
                                case 1:
                                    return e.call(t, n[0]);
                                case 2:
                                    return e.call(t, n[0], n[1]);
                                case 3:
                                    return e.call(t, n[0], n[1], n[2])
                            }
                            return e.apply(t, n)
                        }(e, this, s)
                    }
                }(e, t, je), e + "")
            }

            function be(e, t) {
                var n, r, o = e.__data__;
                return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }

            function ye(e, t) {
                var n = function (e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return _e(n) ? n : void 0
            }

            function we(e, t) {
                var n = typeof e;
                return !!(t = null == t ? a : t) && ("number" == n || "symbol" != n && g.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function Re(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || D)
            }

            function Ce(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
            }

            var Ee = function (e) {
                var t = 0, n = 0;
                return function () {
                    var r = Q(), a = i - (r - n);
                    if (n = r, a > 0) {
                        if (++t >= o) return arguments[0]
                    } else t = 0;
                    return e.apply(void 0, arguments)
                }
            }(X ? function (e, t) {
                return X(e, "toString", {
                    configurable: !0, enumerable: !1, value: (n = t, function () {
                        return n
                    }), writable: !0
                });
                var n
            } : je);

            function Se(e, t) {
                return e === t || e != e && t != t
            }

            var Te = pe(function () {
                return arguments
            }()) ? pe : function (e) {
                return Ne(e) && A.call(e, "callee") && !z.call(e, "callee")
            }, Me = Array.isArray;

            function ke(e) {
                return null != e && Pe(e.length) && !Ie(e)
            }

            var Oe = Y || function () {
                return !1
            };

            function Ie(e) {
                if (!De(e)) return !1;
                var t = he(e);
                return t == c || t == d || t == l || t == h
            }

            function Pe(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= a
            }

            function De(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function Ne(e) {
                return null != e && "object" == typeof e
            }

            var Fe = T ? function (e) {
                return function (t) {
                    return e(t)
                }
            }(T) : function (e) {
                return Ne(e) && Pe(e.length) && !!m[he(e)]
            };

            function Ae(e) {
                return ke(e) ? ae(e, !0) : ge(e)
            }

            var xe, Le = (xe = function (e, t, n) {
                me(e, t, n)
            }, ve(function (e, t) {
                var n = -1, r = t.length, o = r > 1 ? t[r - 1] : void 0, i = r > 2 ? t[2] : void 0;
                for (o = xe.length > 3 && "function" == typeof o ? (r--, o) : void 0, i && function (e, t, n) {
                    if (!De(n)) return !1;
                    var r = typeof t;
                    return !!("number" == r ? ke(n) && we(t, n.length) : "string" == r && t in n) && Se(n[t], e)
                }(t[0], t[1], i) && (o = r < 3 ? void 0 : o, r = 1), e = Object(e); ++n < r;) {
                    var a = t[n];
                    a && xe(e, a, n, o)
                }
                return e
            }));

            function je(e) {
                return e
            }

            e.exports = Le
        }).call(this, n(67)(e))
    }, 6: function (e, t) {
        e.exports = require("util")
    }, 60: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(68), o = n(65);
        !function (e) {
            e.getWindowPreference = function (e = !1) {
                let t = o.default(), n = {};
                return t && t.colors && "string" == typeof t.colors.colorPrimaryControl1 && (n.hoverBackgroundColor = e ? parseInt(r.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1), 16) : r.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1)), n
            }
        }(t.WindowPreferenceNS || (t.WindowPreferenceNS = {}))
    }, 613: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(14), o = n(1), i = n(4), a = o.default.getLogger("EmbeddedBrowser_PluginFunction");
        !function (e) {
            const t = new class extends r.EventEmitter {
                constructor() {
                    super(), this.isRegister = !1
                }

                registerClientFunction() {
                    if (!this.isRegister) {
                        this.isRegister = !0;
                        let e = {AddMenu: this.addMenu.bind(this)};
                        i.client.registerFunctions(e)
                    }
                }

                buildMenuTemplate(e, t) {
                    let n = [];
                    for (let r = 0; r < t.length; r++) {
                        let o = null, i = t[r];
                        if (!1 !== i.visible) {
                            if ("submenu" === i.type) {
                                let t = this.buildMenuTemplate(e, i.submenu);
                                o = {type: i.type, label: i.label, submenu: t}
                            } else o = "separator" === i.type ? {type: i.type} : {
                                type: i.type,
                                label: i.label,
                                enabled: i.enabled,
                                icon: i.icon,
                                id: i.id,
                                checked: i.checked,
                                click: () => {
                                    i.click()
                                }
                            };
                            null !== o && n.push(o)
                        }
                    }
                    return n
                }

                addMenu(e, ...t) {
                    do {
                        let n = t[0];
                        if (a.information("addMenu in", t[0]), !n || 0 === n.length) break;
                        let r = this.buildMenuTemplate(e, n);
                        if (!r || 0 === r.length) break;
                        a.information("addMenu", r), this.emit("add_menu_extra", r)
                    } while (0)
                }
            };
            e.registerClientFunction = function () {
                t.registerClientFunction()
            }, e.getInstance = function () {
                return t
            }
        }(t.EmbeddedBrowserClientFunctionNS || (t.EmbeddedBrowserClientFunctionNS = {}))
    }, 65: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(3), i = n(1), a = n(4), s = i.default.getLogger("GetSkinInfo");
        let l;
        (function () {
            return r(this, void 0, void 0, function* () {
                "renderer" === process.type ? (s.information("renderer process"), a.client.callServerFunction("GetSkinInfo").then(e => {
                    l = e, s.information("send OnChangeSkin", e)
                }).catch(e => {
                    s.warning(e)
                }), a.client.attachServerEvent("OnChangeSkin", (e, t) => {
                    l = t, s.information("send OnChangeSkin", t)
                })) : "browser" === process.type && (s.information("main process"), o.ipcMain.on("OnChangeSkin", (e, t) => {
                    s.information("OnChangeSkin", t), l = t
                }))
            })
        })().catch(e => {
            s.information(e)
        }), t.default = function () {
            return l
        }
    }, 66: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(7), i = n(1), a = n(11), s = n(59), l = i.default.getLogger("MenuSkinNS");
        !function (e) {
            function t(e, t) {
                return r(this, void 0, void 0, function* () {
                    if (l.information("setStyle", e, t), null !== e) {
                        const {WindowPreferenceNS: r} = yield Promise.resolve().then(() => n(60));
                        let o = {windowPreference: r.getWindowPreference()};
                        l.information("skinOpts", o), yield e.setStyle(s(o, t))
                    }
                })
            }

            e.setStyle = t, e.popEditableDefaultContextMenu = function (e, n, i) {
                return r(this, void 0, void 0, function* () {
                    let i = yield o.asyncRemoteCall.getCurrentWebContents();
                    i.once("context-menu", (s, c) => r(this, void 0, void 0, function* () {
                        if (l.verbose(s), c.isEditable) {
                            let r = [{
                                label: "撤销", enabled: c.editFlags.canUndo, click: () => {
                                    i.undo()
                                }
                            }, {type: "separator"}, {
                                label: "剪切", enabled: c.editFlags.canCut, click: () => {
                                    i.cut()
                                }
                            }, {
                                label: "复制", enabled: c.editFlags.canCopy, click: () => {
                                    i.copy()
                                }
                            }, {
                                label: "粘贴",
                                enabled: c.editFlags.canPaste && a.ThunderUtil.isClipboardTextFormatAvailable(),
                                click: () => {
                                    i.paste()
                                }
                            }, {
                                label: "删除", enabled: c.editFlags.canDelete, click: () => {
                                    i.delete()
                                }
                            }, {type: "separator"}, {
                                label: "全选", enabled: c.editFlags.canSelectAll, click: () => {
                                    i.selectAll()
                                }
                            }];
                            if (void 0 !== e && "function" == typeof e) {
                                let t = e(c);
                                void 0 !== t && t.length > 0 && (void 0 === n ? n = r.length : (n < 0 && (n = r.length + 1 + n) < 0 && (n = 0), n > r.length && (n = r.length)), r.splice(n, 0, ...t))
                            }
                            let s = yield(yield o.asyncRemoteCall.getMenu()).buildFromTemplate(r);
                            yield t(s, {});
                            let l = yield o.asyncRemoteCall.getCurrentWindow();
                            yield s.popup({window: l})
                        }
                    }))
                })
            }
        }(t.MenuSkinNS || (t.MenuSkinNS = {}))
    }, 67: function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0, get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, 68: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            function t(e) {
                let t = e.toString(16).toUpperCase();
                return t.length < 2 && (t = "0" + t), t
            }

            function n(e, n, r, o) {
                return "0x" + t(o) + t(e) + t(n) + t(r)
            }

            e.rgbaStringToHexWith0xBegin = function (e) {
                if (void 0 !== e) {
                    let t = e.split(",");
                    return n(parseInt(t[0] || "0", 10), parseInt(t[1] || "0", 10), parseInt(t[2] || "0", 10), parseInt(t[3] || "255", 10))
                }
            }, e.colorNumberToHex = t, e.rgbaToHexWith0xBegin = n
        }(t.ColorUtilNS || (t.ColorUtilNS = {}))
    }, 7: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(1).default.getLogger("async-remote-call"), i = n(35), a = n(14), s = n(6);
        t.asyncRemoteCall = new class extends a.EventEmitter {
            constructor() {
                super(), this.mapObj = new Map, this.mapObjIniting = new Map, "renderer" !== process.type && o.error('can not import "renderer-process-call" module in non-renderer process', process.type)
            }

            getAppName() {
                return r(this, void 0, void 0, function* () {
                    if (void 0 === this.appName) {
                        let e = yield this.getApp();
                        this.appName = yield e.getName()
                    }
                    return this.appName
                })
            }

            getAppVersion() {
                return r(this, void 0, void 0, function* () {
                    if (void 0 === this.appVersion) {
                        let e = yield this.getApp();
                        this.appVersion = yield e.getVersion()
                    }
                    return this.appVersion
                })
            }

            getProcess() {
                return r(this, void 0, void 0, function* () {
                    return i.global.process.__resolve()
                })
            }

            getIpcMain() {
                return r(this, void 0, void 0, function* () {
                    return this.getCurrentObject("ipcMain")
                })
            }

            getDialog() {
                return r(this, void 0, void 0, function* () {
                    return this.getCurrentObject("dialog")
                })
            }

            getApp() {
                return r(this, void 0, void 0, function* () {
                    return this.getCurrentObject("app")
                })
            }

            getShell() {
                return r(this, void 0, void 0, function* () {
                    return this.getCurrentObject("shell")
                })
            }

            getMenu() {
                return r(this, void 0, void 0, function* () {
                    return this.getCurrentObject("Menu")
                })
            }

            getScreen() {
                return r(this, void 0, void 0, function* () {
                    return this.getCurrentObject("screen")
                })
            }

            getBrowserWindow() {
                return r(this, void 0, void 0, function* () {
                    return this.getCurrentObject("BrowserWindow")
                })
            }

            getGlobalShortcut() {
                return r(this, void 0, void 0, function* () {
                    return this.getCurrentObject("globalShortcut")
                })
            }

            getCurrentWebContents() {
                return r(this, void 0, void 0, function* () {
                    let e = this.mapObj.get("currentWebContents");
                    return void 0 === e && (this.mapObjIniting.get("currentWebContents") ? e = yield new Promise(e => r(this, void 0, void 0, function* () {
                        this.on("OnInitCurrentWebContents", t => {
                            e(t)
                        })
                    })) : (this.mapObjIniting.set("currentWebContents", !0), e = yield i.getCurrentWebContents().__resolve(), this.mapObjIniting.set("currentWebContents", !1), this.emit("OnInitCurrentWebContents", e), this.listeners("OnInitCurrentWebContents").forEach(e => {
                        this.removeListener("OnInitCurrentWebContents", e)
                    })), this.mapObj.set("currentWebContents", e)), e
                })
            }

            getCurrentWindow() {
                return r(this, void 0, void 0, function* () {
                    let e = this.mapObj.get("currentWindow");
                    return void 0 === e && (this.mapObjIniting.get("currentWindow") ? e = yield new Promise(e => r(this, void 0, void 0, function* () {
                        this.on("OnInitCurrentWindow", t => {
                            e(t)
                        })
                    })) : (this.mapObjIniting.set("currentWindow", !0), e = yield i.getCurrentWindow().__resolve(), this.mapObjIniting.set("currentWindow", !1), this.emit("OnInitCurrentWindow", e), this.listeners("OnInitCurrentWindow").forEach(e => {
                        this.removeListener("OnInitCurrentWindow", e)
                    })), this.mapObj.set("currentWindow", e)), e
                })
            }

            getCurrentObject(e) {
                return r(this, void 0, void 0, function* () {
                    let t = this.mapObj.get(e);
                    return s.isNullOrUndefined(t) && (this.mapObjIniting.get(e) ? t = yield new Promise(t => r(this, void 0, void 0, function* () {
                        this.on(e, e => {
                            t(e)
                        })
                    })) : (this.mapObjIniting.set(e, !0), t = yield i.electron[e].__resolve(), this.mapObjIniting.set(e, !1), this.emit(e, t), this.listeners(e).forEach(t => {
                        this.removeListener(e, t)
                    })), this.mapObj.set(e, t)), t
                })
            }
        }
    }, 8: function (e, t) {
        e.exports = vendor_e17de3ecacc329e8b720
    }, 80: function (e, t) {
        !function (e) {
            var t,
                n = '<svg><symbol id="td-icon-svg-file" viewBox="0 0 1204 1024"><path d="M180.705882 1024c-102.4 0-180.705882-78.305882-180.705882-180.705882V180.705882c0-102.4 78.305882-180.705882 180.705882-180.705882h240.941177c102.4 0 180.705882 78.305882 180.705882 180.705882h421.647059c102.4 0 180.705882 78.305882 180.705882 180.705883v481.882353c0 102.4-78.305882 180.705882-180.705882 180.705882H180.705882z" fill="#FFC25A" ></path><path d="M301.176471 361.411765h602.352941c66.258824 0 120.470588 54.211765 120.470588 120.470588v361.411765c0 66.258824-54.211765 120.470588-120.470588 120.470588H301.176471c-66.258824 0-120.470588-54.211765-120.470589-120.470588V481.882353c0-66.258824 54.211765-120.470588 120.470589-120.470588z" fill="#FFFFFF" ></path><path d="M180.705882 542.117647h843.294118c102.4 0 180.705882 78.305882 180.705882 180.705882v120.470589c0 102.4-78.305882 180.705882-180.705882 180.705882H180.705882c-102.4 0-180.705882-78.305882-180.705882-180.705882v-120.470589c0-102.4 78.305882-180.705882 180.705882-180.705882z" fill="#FFD68F" ></path></symbol></svg>',
                r = function (e, t) {
                    t.firstChild ? function (e, t) {
                        t.parentNode.insertBefore(e, t)
                    }(e, t.firstChild) : t.appendChild(e)
                };
            if ((t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss") && !e.__iconfont__svg__cssinject__) {
                e.__iconfont__svg__cssinject__ = !0;
                try {
                    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
                } catch (e) {
                    console && console.log(e)
                }
            }
            !function (t) {
                if (document.addEventListener) if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0); else {
                    var n = function () {
                        document.removeEventListener("DOMContentLoaded", n, !1), t()
                    };
                    document.addEventListener("DOMContentLoaded", n, !1)
                } else document.attachEvent && function (e, t) {
                    var n = e.document, r = !1, o = function () {
                        r || (r = !0, t())
                    }, i = function () {
                        try {
                            n.documentElement.doScroll("left")
                        } catch (e) {
                            return void setTimeout(i, 50)
                        }
                        o()
                    };
                    i(), n.onreadystatechange = function () {
                        "complete" == n.readyState && (n.onreadystatechange = null, o())
                    }
                }(e, t)
            }(function () {
                var e, t;
                (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", r(t, document.body))
            })
        }(window)
    }, 856: function (e, t, n) {
        n(43), e.exports = n(857)
    }, 857: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(33), i = n(34), a = n(4), s = n(613);
        let l = i.parse(location.href, !0).query.browserType;
        l && (a.client.start({name: `EmbeddedBrowserRendererContext${l}`}), s.EmbeddedBrowserClientFunctionNS.registerClientFunction()), o.CommonIPCRenderer.rendererCommunicator.initialize("EmbeddedBrowserRendererContext"), o.CommonIPCRenderer.rendererCommunicator.connect();
        const c = n(46), d = n(3), u = n(37);
        n(56), n(80);
        const f = n(57), h = n(858);
        n(55);
        const p = n(27);
        c.PerformanceMonitorStatNS.init("embedded-browser-renderer"), f.ThunderToolsNS.enableDragOpenFile(), f.ThunderToolsNS.enableDevTools().catch(e => {
        }), u.default.config.ignoredElements = ["webview"], new u.default({
            components: {EmbeddedBrowserComponent: h.default},
            render: e => e("embedded-browser-component")
        }).$mount("#app"), window.addEventListener("keyup", e => r(this, void 0, void 0, function* () {
            (yield p.DevEnvHelperNS.isDevToolsEnable()) && ("F12" === e.key && e.ctrlKey ? d.ipcRenderer.send("eventShowDevTool", "wnd") : "F12" === e.key && d.ipcRenderer.send("eventShowDevTool", "browser"))
        }), !0)
    }, 858: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(508), o = n(423);
        for (var i in o) "default" !== i && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(i);
        n(860), n(861), n(862);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src\\embedded-browser-renderer\\app.vue", t.default = s.exports
    }, 859: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(7), i = n(66), a = n(1).default.getLogger("ConTextMenu");
        !function (e) {
            e.popContextMenu = function (e, t) {
                t && (a.information("params", t), t.isEditable ? function (e, t) {
                    return r(this, void 0, void 0, function* () {
                        let e = [{
                                label: "撤销",
                                role: "undo",
                                enabled: t.editFlags.canUndo
                            }, {type: "separator"}, {label: "剪切", role: "cut", enabled: t.editFlags.canCut}, {
                                label: "复制",
                                role: "copy",
                                enabled: t.editFlags.canCopy
                            }, {label: "粘贴", role: "paste", enabled: t.editFlags.canPaste}, {
                                label: "删除",
                                role: "delete",
                                enabled: t.editFlags.canDelete
                            }, {type: "separator"}, {label: "全选", role: "selectall", enabled: t.editFlags.canSelectAll}],
                            n = yield(yield o.asyncRemoteCall.getMenu()).buildFromTemplate(e);
                        yield i.MenuSkinNS.setStyle(n, {});
                        let r = yield o.asyncRemoteCall.getCurrentWindow();
                        yield n.popup({window: r})
                    })
                }(0, t).catch() : "" !== t.selectionText && function (e, t) {
                    return r(this, void 0, void 0, function* () {
                        let e = [{label: "复制", role: "copy", enabled: t.editFlags.canCopy}],
                            n = yield(yield o.asyncRemoteCall.getMenu()).buildFromTemplate(e);
                        yield i.MenuSkinNS.setStyle(n, {});
                        let r = yield o.asyncRemoteCall.getCurrentWindow();
                        yield n.popup({window: r})
                    })
                }(0, t).catch())
            }, e.popupAt = function (e, t, n) {
                {
                    let e = n.getBoundingClientRect();
                    t.x = void 0 !== t.x ? t.x : Math.round(e.left), t.y = void 0 !== t.y ? t.y : Math.round(e.bottom)
                }
                e.popup(t)
            }
        }(t.ContextMenuNS || (t.ContextMenuNS = {}))
    }, 860: function (e, t, n) {
        "use strict";
        var r = n(1073);
        n.n(r).a
    }, 861: function (e, t, n) {
        "use strict";
        var r = n(1075);
        n.n(r).a
    }, 862: function (e, t, n) {
        "use strict";
        var r = n(1077);
        n.n(r).a
    }, 9: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            return require(e)
        }
    }
});
//# sourceMappingURL=renderer.js.map