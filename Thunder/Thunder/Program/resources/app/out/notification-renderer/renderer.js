module.exports = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
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
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
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
    }, n.p = "", n(n.s = 809)
}({
    0: function (e, t, n) {
        "use strict";

        function r(e, t, n, r, i, o, a, s) {
            var l, c = "function" == typeof e ? e.options : e;
            if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = "data-v-" + o), a ? (l = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
            }, c._ssrRegister = l) : i && (l = s ? function () {
                i.call(this, this.$root.$options.shadowRoot)
            } : i), l) if (c.functional) {
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
    }, 1034: function (e, t) {
    }, 1036: function (e, t) {
    }, 1039: function (e, t) {
    }, 1041: function (e, t) {
    }, 1043: function (e, t) {
    }, 1045: function (e, t) {
    }, 1047: function (e, t) {
    }, 11: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(2), a = n(1), s = n(13), l = n(22), c = a.default.getLogger("Thunder.Util"),
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
                        let i = l.ThunderHelper.getDriveInfo(t[r]);
                        n < i.freeBytes && t[r] !== e && (n = i.freeBytes, e = t[r])
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
                    let r = ["B", "KB", "MB", "GB", "TB"], i = 0, o = e;
                    for (; o >= 1e3 && !(i >= 4);) o /= 1024, i += 1;
                    n = -1 === String(o).indexOf(".") ? o + r[i] : o.toFixed(t) + r[i]
                }
                return n
            }, e.formatSizeCustom = function (e, t = 2, n = 5) {
                let r = "0B";
                if ("number" == typeof e && e > 0) {
                    let i = ["B", "KB", "MB", "GB", "TB"], o = 0, a = e;
                    for (; a >= 1e3 && !(o >= 4);) a /= 1024, o += 1;
                    if (-1 === String(a).indexOf(".")) r = a + i[o]; else {
                        let e = a.toFixed(t);
                        e.length <= n ? r = "KB" !== i[o] && "MB" !== i[o] || 1 === t ? e + i[o] : a.toFixed(1) + i[o] : ("." === (e = e.substr(0, n))[n - 1] && (e = e.substr(0, n - 1)), r = e + i[o])
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
                let t = 0, n = "", r = !1, i = [], o = e.length;
                for (let a = 0; a < o; a++) {
                    let s = e[a];
                    if ('"' !== s && "'" !== s || ("" === n ? (r = !0, n = s) : n === s && (r = !1, n = "")), " " !== s || r || a === o - 1) {
                        if (a === o - 1) {
                            let n = e.substring(t);
                            "" !== n.trim() && i.push(u(n))
                        }
                    } else {
                        let n = e.substring(t, a);
                        "" !== n.trim() && i.push(u(n)), t = a + 1
                    }
                }
                return i
            }, e.getThunderTempPath = function (e, t) {
                return r(this, void 0, void 0, function* () {
                    const r = yield Promise.resolve().then(() => n(12));
                    let i = o.join(r.tmpdir(), d);
                    return t && (i = o.join(i, t)), void 0 !== e && e && (yield s.FileSystemAWNS.mkdirsAW(i)), i
                })
            }, e.setQueryString = function (e, t) {
                return Object.keys(t).forEach((n, r) => {
                    e += 0 === r ? "?" : "&", e += `${n}=${t[n]}`
                }), e
            }, e.getQueryString = function (e, t) {
                return e && t && e.match(new RegExp(`(^${t}|[?|&]${t})=([^&#]+)`)) ? RegExp.$2 : ""
            }, e.isClipboardTextFormatAvailable = function () {
                let e = !1, t = i.clipboard.availableFormats();
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
                let r = /\\/, i = t.split(" ");
                if (0 === (i = i.filter(e => e.trim().length > 0)).length) return e;
                for (let t = 0; t < i.length; t++) if (i[t].search(r) > 0) return e;
                n = void 0 === n || null === n ? "#FF0000" : n;
                let o = "", a = ["\\[", "\\^", "\\*", "\\(", "\\)", "\\|", "\\?", "\\$", "\\.", "\\+"], s = "", l = "|";
                for (let e = 0; e < i.length; e++) {
                    for (let t = 0; t < a.length; t++) {
                        let n = new RegExp(a[t], "g");
                        i[e] = i[e].replace(n, a[t])
                    }
                    e === i.length - 1 && (l = ""), s = s.concat(i[e], l)
                }
                let c = new RegExp(s, "gi");
                return o = e.replace(c, e => '<span style= "color:' + n + '">' + e + "</span>")
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
                let n = e.split("."), r = t.split("."), i = 0;
                for (let e = 0; e < n.length; e++) {
                    if (Number(n[e]) - Number(r[e]) > 0) {
                        i = 1;
                        break
                    }
                    if (Number(n[e]) - Number(r[e]) < 0) {
                        i = -1;
                        break
                    }
                }
                return i
            }, e.throttle = function (e, t) {
                let n, r = 0;
                return (...i) => {
                    const o = Date.now();
                    clearTimeout(n), o - r > t ? (e(...i), r = o) : n = setTimeout(() => {
                        e(...i), r = o
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
                    let i = r.indexOf(".ipv6-literal.net");
                    -1 !== i ? (-1 !== (i = (r = r.substr(0, i)).indexOf("%")) && (r = r.substr(0, i)), r = r.replace(/\-/g, ":"), /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(r) && (t = !0)) : /(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/.test(r) && (t = !0)
                } while (0);
                return t
            };
            let f = void 0;

            function p(e, t = "normal 12px sans-serif") {
                f || (f = document.createElement("canvas"));
                let n = f.getContext("2d");
                return n.font = t, n.measureText(e).width
            }

            function h(e, t, n = "normal 12px sans-serif", r = 1) {
                function i(e, t, r, o, a) {
                    let s = -1;
                    do {
                        if (e > t) {
                            s = t;
                            break
                        }
                        let l = Math.round((e + t) / 2), c = p(`${r.substr(0, l)}...${o}`, n);
                        if (a === c) {
                            s = l;
                            break
                        }
                        if (a > c) {
                            if (Math.round(a) === Math.round(c)) {
                                s = l;
                                break
                            }
                            s = i(l + 1, t, r, o, a)
                        } else if (c > a) {
                            if (Math.round(a) === Math.round(c)) {
                                s = l - 1;
                                break
                            }
                            s = i(e, l - 1, r, o, a)
                        }
                    } while (0);
                    return s
                }

                let a = e;
                do {
                    let s = t.offsetWidth * r;
                    if (s > p(e, n)) break;
                    let l = o.extname(e);
                    "" !== l && (l = l.substring(1));
                    let c = e.substr(0, e.length - l.length - 1);
                    if (!c) break;
                    let d = i(0, c.length, c, l, s);
                    if (-1 === d) break;
                    a = `${c.substr(0, d - 2 * (r - 1))}...${l}`
                } while (0);
                return a
            }

            e.getTextWidth = p, e.getOmitName = h, e.getOmitNameMultiLine = function (e, t, n) {
                return h(e, t, "normal 12px microsoft yahei", 2)
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
            return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(19), o = n(2), a = n(6).promisify, s = n(1).default.getLogger("Thunder.base.fs-utilities");
        !function (e) {
            function t(e) {
                return r(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = a(i.access);
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
                        const n = a(i.mkdir);
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
                        const n = a(i.rmdir);
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
                        const n = a(i.unlink);
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
                        const n = a(i.readdir);
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
                        const n = a(i.lstat);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function p(e, t) {
                return r(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e && void 0 !== t) {
                        let r = o.join(e, t), i = yield f(r);
                        n = null !== i && i.isDirectory() ? yield h(r) : yield d(r)
                    }
                    return n
                })
            }

            function h(e) {
                return r(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e) {
                        if (yield t(e)) {
                            n = !0;
                            let t = (yield u(e)) || [];
                            for (let r = 0; r < t.length; r++) n = (yield p(e, t[r])) && n;
                            (n || 0 === t.length) && (n = (yield c(e)) && n)
                        }
                    }
                    return n
                })
            }

            function m(e) {
                return r(this, void 0, void 0, function* () {
                    let n = !1;
                    return s.information("mkdirsAW", e), void 0 !== e && ((yield t(e)) ? n = !0 : o.dirname(e) === e ? n = !1 : (yield m(o.dirname(e))) && (n = yield l(e))), n
                })
            }

            function g(e, n) {
                return r(this, void 0, void 0, function* () {
                    let r;
                    if (e.toLowerCase() !== n.toLowerCase() && (yield t(e))) {
                        let t = i.createReadStream(e), o = i.createWriteStream(n);
                        r = new Promise(e => {
                            t.pipe(o).on("finish", () => {
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
                        const n = a(i.readFile);
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
                        const r = a(i.writeFile);
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
            }, e.mkdirAW = l, e.rmdirAW = c, e.unlinkAW = d, e.readdirAW = u, e.lstatAW = f, e.rmdirsAW = h, e.mkdirsAW = m, e.renameAW = function (e, t) {
                return r(this, void 0, void 0, function* () {
                    if (void 0 !== e && void 0 !== t) {
                        const n = a(i.rename);
                        try {
                            yield n(e, t)
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                })
            }, e.copyFileAW = g, e.copyDirsAW = function e(n, i) {
                return r(this, void 0, void 0, function* () {
                    let r = !1, a = yield f(n);
                    if (a.isDirectory()) {
                        r = yield m(i);
                        let s = (yield u(n)) || [];
                        for (let l = 0; l < s.length; l++) {
                            let c = o.join(n, s[l]), d = o.join(i, s[l]);
                            (r = yield t(c)) && (r = (a = yield f(c)).isDirectory() ? yield e(c, d) : yield g(c, d))
                        }
                    }
                    return r
                })
            }, e.mkdtempAW = function () {
                return r(this, void 0, void 0, function* () {
                    let e = !1;
                    const t = a(i.mkdtemp), r = (yield Promise.resolve().then(() => n(12))).tmpdir();
                    try {
                        e = yield t(`${r}${o.sep}`)
                    } catch (e) {
                        s.warning(e)
                    }
                    return e
                })
            }, e.deleteEmptySubDirs = function (e, n) {
                return r(this, void 0, void 0, function* () {
                    let r = !0;
                    e = o.normalize(e), n = o.normalize(n), e.length > 3 && "\\" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), n.length > 3 && "\\" === n[n.length - 1] && (n = n.slice(0, n.length - 1));
                    do {
                        if (0 !== e.indexOf(n)) {
                            r = !1;
                            break
                        }
                        let i = e;
                        for (; i !== n;) {
                            if ((yield t(i)) && !(yield c(i))) {
                                r = !1;
                                break
                            }
                            i = o.dirname(i)
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
                        let i = yield f(n);
                        if (i) if (i.isDirectory()) {
                            let t = yield u(n);
                            for (let i = 0; i < t.length; i++) r += (yield e(o.join(n, t[i])))
                        } else r = i.size
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
                        let i = yield f(e);
                        if (!i) {
                            r = !1;
                            break
                        }
                        if (!i.isDirectory()) {
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
            return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(9), a = n(1).default.getLogger("XLStat");
        let s = o.default(i.join(__rootDir, "../bin/ThunderHelper.node"));

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

            function i(e, t = "", i = "", o = 0, s = 0, c = 0, d = 0, u = "", f = 0) {
                return r(this, void 0, void 0, function* () {
                    let r = 0;
                    do {
                        if (void 0 === e) {
                            r = 1;
                            break
                        }
                        let p = l(u);
                        r = "browser" === process.type ? yield new Promise(a => {
                            r = n().asyncTrackEvent(e, t, i, o, s, c, d, p, f, e => {
                                a(e)
                            })
                        }) : n().trackEvent(e, t, i, o, s, c, d, p, f), a.information(e, t, i, o, s, c, d, p, f)
                    } while (0);
                    return r
                })
            }

            function o(e, t = 0) {
                do {
                    if (void 0 === e) break;
                    "browser" !== process.type && n().trackClick(e, t)
                } while (0)
            }

            e.asyncTrackEvent = i, e.trackEvent = function (e, t = "", n = "", r = 0, o = 0, a = 0, s = 0, l = "", c = 0) {
                i(e, t, n, r, o, a, s, l, c).catch()
            }, e.trackClick = o, e.trackShow = function (e, t = 0) {
                o(e, t)
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
            let t, n, r, i, o, a, s, l, c, d, u, f, p, h, m, g, _, v, b, y;
            !function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.FileOccupied = 211] = "FileOccupied", e[e.FileAccessDenied = 212] = "FileAccessDenied", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn", e[e.DownloadSDKCrash = 10001] = "DownloadSDKCrash", e[e.torrentFileNotExist = 10002] = "torrentFileNotExist"
            }(t = e.TaskError || (e.TaskError = {})), function (e) {
                e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
            }(n = e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
            }(r = e.TaskStatus || (e.TaskStatus = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
            }(i = e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
                e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
            }(o = e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
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
            }(p = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
                e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
            }(h = e.KeyType || (e.KeyType = {})), function (e) {
                e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
            }(m = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
                e[e.ExtEqual = 1] = "ExtEqual", e[e.NameLikeAndExtEqual = 2] = "NameLikeAndExtEqual", e[e.TaskTypeEqual = 4] = "TaskTypeEqual"
            }(g = e.FilterKeyType || (e.FilterKeyType = {})), function (e) {
                e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
            }(_ = e.KeyFilter || (e.KeyFilter = {})), function (e) {
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
        let i, o = console;

        function a(e = 5) {
            let t = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i, n = /at\s+()(.*):(\d*):(\d*)/i,
                i = (new Error).stack.split("\n").slice(e + 1);
            i.shift();
            let o = [];
            return i.forEach((e, i) => {
                let a = t.exec(e) || n.exec(e), s = {};
                a && 5 === a.length && (s.method = a[1], s.path = a[2], s.line = a[3], s.pos = a[4], s.file = r.basename(s.path), o.push(s))
            }), o
        }

        if (i = "renderer" === process.type ? "[Renderer] [async-remote]:" : "browser" === process.type ? "[Browser] [async-remote]:" : `[${process.type}] [async-remote]`, t.traceback = function (e = 5) {
            return a(e).map(e => e.method + "@(" + e.file + ")").join(" <= ")
        }, t.time = function (...e) {
            o.time(...e)
        }, t.timeEnd = function (...e) {
            o.timeEnd(...e)
        }, t.trace = function (...e) {
            let t = a(), n = "";
            t[0] && t[0].method && (n = n), o.trace(i, ...e)
        }, t.info = function (...e) {
            let t = a(), n = "anonymous";
            t[0] && t[0].method && (n = n), o.info(i, "[" + n + "]", e.join(","))
        }, t.warn = function (...e) {
            let t = a(), n = "";
            t[0] && t[0].method && (n = n), o.warn("<WARN>" + i, "[" + n + "]", e.join(","))
        }, t.error = function (...e) {
            let t = a(), n = "";
            t[0] && t[0].method && (n = n), o.error("<ERROR>" + i, "[" + n + "]", e.join(","))
        }, t.log = function (...e) {
            o.log(i, ...e)
        }, !process.env.DEBUG_ASYNC_REMOTE) {
            let e = function () {
            };
            t.traceback = e, t.time = e, t.timeEnd = e, t.trace = e, t.info = e, t.warn = e, t.error = e, t.log = e
        }
    }, 18: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e.channelRMNewTaskReadyForSetTaskData = "RM_NEWTASK_READYRORSETTASKDATA", e.channelRMNewTaskSetTaskData = "RM_NEWTASK_SETTASKDATA", e.channelRMPreNewTaskSetTaskData = "RM_PRENEWTASK_SETTASKDATA", e.channelRMNewTaskCreateNewTask = "RM_NEWTASK_CREATENEWTASK", e.channelRMNewTaskClose = "RM_NEWTASK_CLOSE", e.channelRMPreNewTaskClose = "RM_PRENEWTASK_CLOSE", e.channelRMNewTaskSetBTInfo = "RM_NEWTASK_SETBTINFO", e.channelRMNewTaskDownloadTorrent = "RM_NEW_TASK_DOWNLOAD_TORRENT", e.channelRMNewTaskCreateBtTask = "RM_NEWTASK_CRATEBTTASK", e.channelRMNewTaskCancleMagnet = "RM_NEWTASK_CANCLE_MAGNET", e.channelRMImportTorrent = "RM_NEWTASK_IMPORT_TORRENT", e.channelRMGetConfigValueResolve = "RM_GET_CONFIG_VALUE_RESOLVE", e.channelRMGetConfigValueReject = "RM_GET_CONFIG_VALUE_REJECT", e.channelRMSetConfigValueReject = "RM_SET_CONFIG_VALUE_REJECT", e.channelMRTrayMenuClick = "MR_TRAY_MENU_CLICK", e.channelMRNewTaskMagnetTaskCreated = "MR_NEW_TASK_MAGNET_TASK_CREATED", e.channelMRNewTaskDownloadTorrentResult = "MR_NEW_TASK_DOWNLOAD_TORRENT_RESULT", e.channelMRNewTaskCreateNewTaskResult = "MR_NEWTASK_CREATENEWTASK_RESULT", e.channelMRNewTaskCreateBtTaskResult = "RM_NEWTASK_CRATEBTTASK_RESULT", e.channelMRGetConfigValue = "MR_GET_CONFIG_VALUE", e.channelMRSetConfigValue = "MR_SET_CONFIG_VALUE", e.channelRMCommitPlanTask = "RM_PLANTASK_COMMIT", e.channelRMPerformePlanTask = "RM_PLANTASK_PERFORME", e.channelRMProcessSend = "RM_RENDER_PROCESS_INFO", e.channelRMGetPrivateSpaceInfo = "RM_RENDER_GET_PRIVATE_SPACE_INFO", e.channelMRGetPrivateSpaceInfoResult = "MR_RENDER_GET_PRIVATE_SPACE_INFO_RESULT", e.channelRMFileCopy = "RM_FILE_COPY", e.channelRMFileMove = "RM_FILE_MOVE", e.channelMRFileCopyResult = "MR_FILE_COPY_RESULT", e.channelMRFileMoveResult = "MR_FILE_MOVE_RESULT", e.channelRMGetSutitleByCid = "RM_RENDER_GET_SUBTITLE_BY_CID", e.channelMRGetSutitleByCidResult = "MR_RENDER_GET_SUBTITLE_BY_CID_RESULT", e.channelRMGetSutitleByName = "RM_RENDER_GET_SUBTITLE_BY_NAME", e.channelMRGetSutitleByNameResult = "MR_RENDER_GET_SUBTITLE_BY_NAME_RESULT", e.channelRMDownloadSutitle = "RM_RENDER_DOWNLOAD_SUBTITLE", e.channelMRDownloadSutitleSuc = "MR_RENDER_DOWNLOAD_SUBTITLE_SUCCESS", e.channelMRDownloadSutitleFail = "MR_RENDER_DOWNLOAD_SUBTITLE_FAIL", e.channelRMGetDisplayName = "RM_RENDER_GET_SUBTITLE_DISPLAYNAME", e.channelMRGetDisplayNameResult = "MR_RENDER_GET_SUBTITLE_DISPLAYNAME_RESULT", e.channelMRBringWindowToTop = "MR_RENDER_BRING_WINDOW_TO_TOP", e.channelRMDownloadXmp = "RM_RENDER_DOWNLOAD_XMP", e.channelRMXmpFixBoxCreated = "RM_RENDER_XMPFIXBOX_CREATED", e.channelMRFixXmpSuc = "MR_RENDER_FIX_XMP_SUC", e.channelMRFixXMPFail = "MR_RENDER_FIX_XMP_FAIL", e.channelRMDownloadXmpEx = "RM_RENDER_DOWNLOAD_XMP_EX", e.channelRMSetPosition = "RM_SET_POSITION", e.channelRMSetFoucs = "RM_SET_FOCUS", e.channelRMCreateAddressDropWnd = "RM_CREATE_ADDRESS_DROPWND", e.channelRMRefreshAddressDropWnd = "RM_REFRESH_ADDRESS_DROPWND", e.channelRMSelectAddressDropItem = "RM_SELECT_ADDRESS_DROPITEM", e.channelRMCreateSearchWindow = "RM_CREATE_SEARCH_WINDOW", e.channelRMShowSearchWindow = "RM_SHOW_SEARCH_WINDOW", e.channelRMAddressKeyDown = "RM_ADDRESS_BAR_KEYDOWN", e.channelMRFWAddressKeyDown = "MR_ADDRESS_FW_BAR_KEYDOWN", e.channelMRFWSelectAddressDropItem = "MR_FW_SELECT_ADDRESS_DROPITEM", e.channelRMAddressDropWndKeyDown = "RM_ADDRESS_DROPWND_KEYDOWN", e.channelRMClickMouse = "RM_CLICK_MOUSE", e.channelMRSearchBarFocusChange = "MR_SEARCHBAR_FOCUS_CHANGE", e.channelMRFWAddressDropWndKeyDown = "MR_FW_ADDRESS_DROPWND_KEYDOWN", e.channelMRClickAddressDropItem = "MR_CLICK_ADDRESS_DROPITEM", e.channelMRMainWndMax = "MR_MAINWINDOW_MAX", e.channelMRMainWndMin = "MR_MAINWINDOW_MIN", e.channelMRMainWndRestore = "MR_MAINWINDOW_RESTORE", e.channelRMGetBrowserStartType = "RM_GET_BROWSER_START_TYPE", e.channelMRGetBrowserStartTypeResult = "MR_GET_BROWSER_START_TYPE_RESULT", e.channelRMExecute = "RM_SHELL_EXECUTE", e.channelMRExecuteResult = "MR_SHELL_EXECUTE_RESULT", e.channelMRAdTipsClick = "MR_AD_TIPS_CLICK", e.channelMRNotificationMsg = "MR_NOTIFICATION_MSG", e.channelRMSetProgressBar = "RM_SET_PROGRESS_BAR", e.channelRMRoundWindow = "RM_ROUND_WINDOW", e.channelMRShowOrHideWindow = "MR_SHOW_OR_HIDE_WINDOW", e.channelMRSuspensionWindowShowOrHide = "MR_SUSPENSION_WINDOW_SHOW_OR_HIDE", e.channelRMConfigInitFinished = "RM_CONFIG_INIT_FINISHED", e.channelRMConfigValueChanged = "RM_CONFIG_VALUE_CHANGED", e.channelRMIndividuationBrowserMsg = "RM_INDIVIDUATION_BROWSER_MSG", e.channelMRIndividuationBrowserMsg = "MR_INDIVIDUATION_BROWSER_MSG", e.channelRMSetEnvironmentVariable = "RM_SET_ENVIRONMENT_VARIABLE", e.channelMREmbedPlayerPos = "MR_EMBED_PLAYER_POSITION", e.channelRMUpdateLogEnviroment = "RM_UPDATE_LOG_ENVIRONMENT", e.channelMRUpdateLogEnviroment = "MR_UPDATE_LOG_ENVIRONMENT"
        }(t.ThunderChannelList || (t.ThunderChannelList = {}))
    }, 19: function (e, t) {
        e.exports = require("fs")
    }, 199: function (e, t, n) {
        e.exports = n(8)(25)
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
            return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(23), a = n(12), s = n(16),
            l = n(9).default(i.join(__rootDir, "../bin/ThunderHelper.node"));
        !function (e) {
            let t, n;

            function i(e) {
                let t = e;
                return /^[a-zA-Z]:\\/.test(e) ? t = e.slice(0, 3) : e && "\\" !== e[e.length - 1] && (t = e + "\\"), t
            }

            !function (e) {
                e[e.DRIVE_UNKNOWN = 0] = "DRIVE_UNKNOWN", e[e.DRIVE_NO_ROOT_DIR = 1] = "DRIVE_NO_ROOT_DIR", e[e.DRIVE_REMOVABLE = 2] = "DRIVE_REMOVABLE", e[e.DRIVE_FIXED = 3] = "DRIVE_FIXED", e[e.DRIVE_REMOTE = 4] = "DRIVE_REMOTE", e[e.DRIVE_CDROM = 5] = "DRIVE_CDROM", e[e.DRIVE_RAMDISK = 6] = "DRIVE_RAMDISK"
            }(t = e.DriverType || (e.DriverType = {})), function (e) {
                e[e.Unspecified = 0] = "Unspecified", e[e.HDD = 3] = "HDD", e[e.SSD = 4] = "SSD", e[e.SCM = 5] = "SCM"
            }(n = e.MediaType || (e.MediaType = {})), e.getDriveType = function (e) {
                return e = i(e), l.getDriveType(e)
            }, e.getDriveInfo = function (e) {
                return e = i(e), l.getDriveInfo(e)
            }, e.getFreePartitionSpace = function (e) {
                return e = i(e), l.getFreePartitionSpace(e)
            }, e.getLogicalDriveStrings = function () {
                return l.getLogicalDriveStrings()
            }, e.getPartitionSpace = function (e) {
                return e = i(e), l.getPartitionSpace(e)
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
                    n || (n = /^ftp:\/\/.*?\[(.+?)\].*/.exec(e)), n && n[1] && o.isIPv6(n[1]) && (t = s.DownloadKernel.TaskType.P2sp)
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
                    let i = parseInt(r, 10);
                    i && i >= 8 && (e = !0)
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
                return e = i(e), l.isSparseDriver(e)
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
        const r = n(12), i = n(2);
        t.getDefaultPrex = function () {
            return i.basename(process.execPath, ".exe")
        }, t.getSockPath = function (e) {
            const t = r.tmpdir();
            let n = e;
            e || (n = i.basename(process.execPath, ".exe"));
            let o = i.join(t, `${n}-xunlei-node-net-ipc-{FD196984-2591-4588-AA6F-5C8AC1266290}.sock`);
            return "win32" === process.platform && (o = "\\\\.\\pipe\\" + (o = (o = o.replace(/^\//, "")).replace(/\//g, "-"))), o
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
            return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(9), a = n(13), s = o.default(i.join(__rootDir, "../bin/ThunderHelper.node"));
        !function (e) {
            function t() {
                return r(this, void 0, void 0, function* () {
                    let e = !0;
                    do {
                        0;
                        let t = i.resolve(__rootDir, "../../log.ini");
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
                        let t = i.resolve(__rootDir, "../../log.ini");
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
        const r = n(3), i = n(6), o = n(20), a = n(21);
        !function (e) {
            e.mainProcessContext = "main-process", e.mainRendererContext = "main-renderer", e.mainPageWebviewRendererContext = "main-page-webview-renderer", e.newTaskRendererContext = "new-task-renderer", e.preNewTaskRendererContext = "pre-new-task-renderer", e.loginRendererContext = "login-renderer";

            class t {
                constructor() {
                    this.isConnected = !1, this.isOnIPCEvent = !1, this.rendererInfos = [], this.listeners = new Map, t.intervalIPCModuleMsgs = [a.CommonIPCMessage.msgIPCRendererConnect, a.CommonIPCMessage.msgIPCRendererDisconnect]
                }

                onMessage(e, t) {
                    do {
                        if (!i.isString(e) || 0 === e.length) {
                            o.error("msgName is null");
                            break
                        }
                        if (i.isNullOrUndefined(t)) {
                            o.error("listener is null");
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
                            if (i.isNullOrUndefined(t)) {
                                o.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                o.warning("hasnot been connected yet");
                                break
                            }
                            let r = t.msg.name;
                            if (this.isIPCModuleIntervalMsg(r)) {
                                o.information(`IPC module interval msg : ${r}`);
                                let i = this.handleIPCModuleIntervalMsg(e.sender, t);
                                if (n = i[1], !i[0]) break;
                                o.information("need to dispatch msg:" + r)
                            }
                            i.isNullOrUndefined(n) ? n = this.NotifyListener(t) : this.NotifyListener(t)
                        } while (0);
                        i.isNullOrUndefined(n) || (e.returnValue = n), t = null
                    })
                }

                ListenSendToRendererMsg(e) {
                    (e ? r.ipcMain : r.ipcRenderer).on(a.CommonIPCMessage.msgIPCSendToRenderer, (t, n) => {
                        let r = void 0;
                        do {
                            if (i.isNullOrUndefined(n)) {
                                o.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                o.warning("hasnot been connected yet");
                                break
                            }
                            let a = n.msg.name;
                            if (this.isIPCModuleIntervalMsg(a)) {
                                o.information(`IPC module interval msg : ${a}`);
                                let e = this.handleIPCModuleIntervalMsg(t.sender, n);
                                if (r = e[1], !e[0]) break;
                                o.information("need to dispatch msg:" + a)
                            }
                            e ? (o.information("is main, handle forward msg"), this.handleForwardRendererToRendererMsg(n)) : (o.information("is renderer, handle business msg"), i.isNullOrUndefined(r) ? r = this.NotifyListener(n) : this.NotifyListener(n))
                        } while (0);
                        i.isNullOrUndefined(r) || (t.returnValue = r), n = null
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
                    o.verbose(e), o.verbose(t)
                }

                handleRendererDisconnectMsg(e, t) {
                    o.verbose(e), o.verbose(t)
                }

                handleForwardRendererToRendererMsg(e) {
                    this.sendForwardRendererToRendererMsg(e)
                }

                sendForwardRendererToRendererMsg(e) {
                    o.verbose(e)
                }

                NotifyListener(e) {
                    let t = void 0, n = e.msg.name;
                    if (this.listeners.has(n)) {
                        let r = this.listeners.get(n), i = !0;
                        for (let n of r) i ? (i = !1, t = n(e)) : n(e)
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
        const r = n(3), i = n(6), o = n(20), a = n(21), s = n(29);
        !function (e) {
            class t extends s.CommonIPCBase.Communicator {
                constructor() {
                    super()
                }

                initialize(e) {
                    this.currInfo = {id: void 0, context: e, isMainCommunicator: !1}
                }

                connect() {
                    this.isConnected ? o.warning("has been connected") : (this.sendConnectMsgToMain(), this.isConnected = !0, this.startListenIPCMessage(!1))
                }

                disconnect() {
                    this.isConnected ? (this.isConnected = !1, this.sendDisconnectMsgToMain()) : o.warning("hasnot been connected yet")
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
                        if (i.isNullOrUndefined(t)) {
                            o.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (i.isNullOrUndefined(e)) {
                            o.error("connectRendererInfo is null");
                            break
                        }
                        o.information(`Renderer: new renderer will connect, id = ${e.id}, context = ${e.context}`), this.rendererInfos.push(e)
                    } while (0)
                }

                handleRendererDisconnectMsg(e, t) {
                    do {
                        if (i.isNullOrUndefined(t)) {
                            o.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (i.isNullOrUndefined(e)) {
                            o.error("disconnectRendererInfo is null");
                            break
                        }
                        o.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
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
                        if (i.isNullOrUndefined(e)) {
                            o.error("msg is null");
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
                        if (i.isNullOrUndefined(e)) {
                            o.error("rendererId is null");
                            break
                        }
                        if (i.isNullOrUndefined(t)) {
                            o.error("msg is null");
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
    }, 397: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(398), i = n.n(r);
        for (var o in r) "default" !== o && function (e) {
            n.d(t, e, function () {
                return r[e]
            })
        }(o);
        t.default = i.a
    }, 398: function (e, t, n) {
        "use strict";
        var r = this && this.__decorate || function (e, t, n, r) {
            var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(5), a = n(812), s = n(813), l = n(814), c = n(816), d = n(817), u = n(18), f = n(4),
            p = n(818), h = n(1).default.getLogger("notification-render");
        let m = class extends o.Vue {
            constructor() {
                super(...arguments), this.options = {type: d.Notification.TipsType.DownloadComplete}
            }

            created() {
                i.ipcRenderer.once("notification-init-reply", (e, t) => {
                    h.information("notification-init-reply");
                    let n = "";
                    switch (t.type) {
                        case d.Notification.TipsType.DownloadFail:
                            n = t.data && t.data.exData && t.data.exData.isPanDownload ? "迅雷 - 取回出错" : "迅雷 - 下载出错";
                            break;
                        case d.Notification.TipsType.DownloadComplete:
                            n = t.data && t.data.exData && t.data.exData.isPanDownload ? "迅雷 - 取回完成" : "迅雷 - 下载完成";
                            break;
                        case d.Notification.TipsType.CommunityTips:
                            n = "迅雷消息"
                    }
                    this.options = Object.assign({title: n}, t)
                }), i.ipcRenderer.send("notification-init")
            }

            mounted() {
                h.information("notification mounted"), document.addEventListener("mouseenter", this.handleMouseEnter), document.addEventListener("mouseleave", this.handleMouseLeave)
            }

            destroyed() {
                h.information("notification destroyed"), document.removeEventListener("mouseenter", this.handleMouseEnter), document.removeEventListener("mouseleave", this.handleMouseLeave)
            }

            sendOpenCommunity(e) {
                let t = {type: "" === e ? "" : "chat", extra: {userId: e}};
                f.client.callServerFunction("OpenCommunityGroup", t).catch(e => {
                    h.warning("OpenCommunityGroup error", e)
                }), this.handleClose()
            }

            sendOpenSetting() {
                h.information("sendOpenSetting"), i.ipcRenderer.send("openSettingTab"), this.handleClose()
            }

            handleClose() {
                i.ipcRenderer.send(u.ThunderChannelList.channelMRNotificationMsg, "close")
            }

            handleMouseEnter() {
                i.ipcRenderer.send(u.ThunderChannelList.channelMRNotificationMsg, "hover", !0)
            }

            handleMouseLeave() {
                i.ipcRenderer.send(u.ThunderChannelList.channelMRNotificationMsg, "hover", !1)
            }
        };
        m = r([o.Component({
            components: {
                DownloadComplete: a.default,
                DownloadFail: s.default,
                CommunityTips: l.default,
                AdvertisementTips: c.default,
                ConsumptionTips: p.default
            }
        })], m), t.default = m
    }, 399: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(400), i = n.n(r);
        for (var o in r) "default" !== o && function (e) {
            n.d(t, e, function () {
                return r[e]
            })
        }(o);
        t.default = i.a
    }, 4: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(14), o = n(44), a = n(24), s = n(26);

        function l(e) {
            s.information("on object freeer"), global.__xdasIPCClienInstance.notifyFreer(e.remoteId, e.callbackId)
        }

        let c = void 0;
        global.__xdasIPCClienInstance || (global.__xdasIPCClienInstance = new class extends i.EventEmitter {
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
                    let i = new o.Client({context: e, socketPrex: t});
                    this.singletonMap[t.toLowerCase()] = i, n || (this.client = i), i.on("message", e => {
                        if ("fire_event" === e.action) this.fireServerEvent(i, e.name, [e.__context].concat(e.args)); else if ("client_context_freer" === e.action) {
                            s.information("client on object freer", e);
                            do {
                                let t = e.rid;
                                if (t) {
                                    if (!this.contextCallbackMap[t]) break;
                                    delete this.contextCallbackMap[t]
                                }
                            } while (0)
                        } else if ("call_client_by_id" === e.action) this.callFunctionById(i, e.rid, e.s_rid, e.args); else if ("call_client_api" === e.action) this.callRegisterFunction(i, e); else if ("check_client_function" === e.action) {
                            let t = e.method, n = !0;
                            t && this.apis && this.apis[t] || (n = !1), this.sendAdapter(i, {
                                s_rid: e.s_rid,
                                action: "check_client_function_callback",
                                success: !0,
                                data: n
                            })
                        } else if (void 0 !== e.success && null !== e.success) {
                            let t = e;
                            this.client === i && this.emit("stat_call_function_back", i.getContext(), e);
                            const n = this.retCallbackMap[t.rid].callback;
                            n && (t.success ? n(null, t.data) : n(t.error, t.data)), delete this.retCallbackMap[t.rid]
                        }
                    }), i.on("error", e => {
                        r && r("error", e), this.emit("socket-error", e, i.getContext(), n, i.isInprocess()), delete this.singletonMap[t.toLowerCase()]
                    }), i.isInprocess() ? (r && r("connect"), this.emit("connect", i.getContext(), n, !0)) : i.on("connect", () => {
                        r && r("connect"), this.emit("connect", i.getContext(), n, !1)
                    }), i.on("end", () => {
                        let e = i.isInprocess();
                        s.information("server is ended, and this client emit end", t, n, e), r && r("end", i.getContext(), n, e), this.emit("end", i.getContext(), n, e), delete this.singletonMap[t.toLowerCase()]
                    }), this.registry(i)
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
                    let r = null, i = yield this.crossCallServerFunctionEx(e, t, ...n);
                    return i && (r = i[0]), r
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
                    let i = this.singletonMap[e.toLowerCase()];
                    if (!i) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'remoteId' was not provided");
                    if (!n) throw new Error("An argument for 'funcName' was not provided");
                    return this.internalCallRemoteClientFunction(i, t, n, ...r)
                }
            }

            crossAttachServerEvent(e, t, n) {
                let r = void 0;
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let i = this.singletonMap[e.toLowerCase()];
                    if (!i) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'eventName' was not provided");
                    r = this.internalAttachServerEvent(i, t, n)
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
                        const i = {alias: t, action: "register", rid: r};
                        let o = (e, r) => {
                            e ? (s.error("register error", e.message), n(r)) : n(t)
                        };
                        this.retCallbackMap[r] = Object.assign({callback: o}, i), this.sendAdapter(e, i)
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
                        const i = {action: "check_server_function_exist", method: t, rid: r};
                        let o = (e, t) => {
                            n(!e && t)
                        };
                        this.retCallbackMap[r] = Object.assign({callback: o}, i), this.sendAdapter(e, i)
                    } while (0)
                })
            }

            internalCallServerFunctionEx(e, t, ...n) {
                return new Promise((r, i) => {
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
                        let i = this.generateId();
                        if (n) for (let e = 0; e < n.length; e++) n[e] = this.convertFunction2IdEx(n[e]);
                        const o = {rid: i, method: t, args: n};
                        let a = (t, n) => {
                            t ? (s.error("callServerFunction error", t, e.getContext()), r([null, t])) : r([n, void 0])
                        };
                        this.retCallbackMap[i] = Object.assign({callback: a}, o), this.sendAdapter(e, o)
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
                        const i = {dst: this.getFullContextName(e, t), action: "check_client_exist", rid: r};
                        let o = (e, t) => {
                            n(e ? [!1, e] : [t, "success"])
                        };
                        this.retCallbackMap[r] = Object.assign({callback: o}, i), this.sendAdapter(e, i)
                    } while (0)
                })
            }

            internalCheckRemoteFunction(e, t, n) {
                return new Promise((r, i) => {
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
                        let i = this.generateId();
                        const o = {
                            action: "check_client_function_exist",
                            method: n,
                            rid: i,
                            src: this.getFullContextName(this.client),
                            dst: this.getFullContextName(e, t)
                        };
                        let a = (e, t) => {
                            r(!e && t)
                        };
                        this.retCallbackMap[i] = Object.assign({callback: a}, o), this.sendAdapter(e, o)
                    } while (0)
                })
            }

            internalCallRemoteClientFunction(e, t, n, ...r) {
                return new Promise((i, o) => {
                    do {
                        if (!e) {
                            i([null, "client doesn't ready"]);
                            break
                        }
                        if (!t) {
                            i([null, "remote client alias is not specifed"]);
                            break
                        }
                        if (!n) {
                            i([null, "funcName is not specifed"]);
                            break
                        }
                        let o = (e, t) => {
                            e ? (s.information("callRemoteClientFunction", e.message), i([null, e])) : i([t, void 0])
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
                        this.retCallbackMap[a] = Object.assign({callback: o}, l), this.sendAdapter(e, l)
                    } while (0)
                })
            }

            internalAttachServerEvent(e, t, n) {
                let r = e.getContext().productId.toLowerCase();
                this.eventCallbackMaps.hasOwnProperty(r) || (this.eventCallbackMaps[r] = {}), this.eventCallbackMaps[r].hasOwnProperty(t) || (this.eventCallbackMaps[r][t] = {}), a.isObjectEmpty(this.eventCallbackMaps[r][t]) && this.sendAdapter(e, {
                    action: "attach_event",
                    name: t
                });
                let i = this.generateId();
                return this.eventCallbackMaps[r][t][i] = n, i
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
                let i = void 0, o = !1;
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
                    if (i = {s_rid: n, action: "call_client_by_id_callback", success: !1}, void 0 !== l) {
                        i.error = l;
                        break
                    }
                    if (s && s.then) {
                        s.then(t => {
                            i.data = this.convertFunction2Id(t), i.success = !0, this.sendAdapter(e, i)
                        }).catch(t => {
                            i.error = t instanceof Error ? t.message : t, this.sendAdapter(e, i)
                        }), o = !0;
                        break
                    }
                    i.success = !0, i.data = this.convertFunction2Id(s)
                } while (0);
                !o && i && this.sendAdapter(e, i)
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
                    let i = t.method;
                    if (!i) break;
                    let o = this.getNow();
                    if (n = {
                        s_rid: t.s_rid,
                        action: "remote_client_callback",
                        success: !1,
                        rid: t.rid,
                        method: t.method,
                        src: t.src,
                        timestamp: t.timestamp ? t.timestamp.concat(o) : [].concat(o)
                    }, !this.apis || !this.apis[i]) {
                        n.error = `callRegisterFunction ${i} is undefined`;
                        break
                    }
                    let a = void 0, s = this.decodeParameter(t.args, t.src);
                    try {
                        a = this.apis[i].apply(null, [t.src].concat(s))
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
    }, 400: function (e, t, n) {
        "use strict";
        var r = this && this.__decorate || function (e, t, n, r) {
            var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(5), o = n(16), a = n(58), s = n(4), l = n(15), c = n(1).default.getLogger("download-complete");
        let d = class extends i.Vue {
            constructor() {
                super(...arguments), this.canPlay = !1, this.canInstall = !1, this.installFileSavePath = "", this.installRunParams = ""
            }

            created() {
                s.client.callServerFunction("IsSupportPlay", this.data.taskBase.taskId).then(e => {
                    this.canPlay = e
                }).catch(), s.client.callServerFunction("IsSupportInstall", this.data.taskBase.taskId).then(e => {
                    e && (this.canInstall = e.support, e.support && (this.installFileSavePath = e.savePath, this.installRunParams = e.runParams))
                }).catch(), this.isPanDownload && l.XLStatNS.trackEvent("pc_yunpan", "getback_success_pop_show")
            }

            get finishOperateIcon() {
                let e = "xlx-icon-dialog-open";
                return this.canInstall ? e = "xlx-icon-dialog-install" : this.canPlay && (e = "xlx-icon-dialog-play"), e
            }

            get finishOperateText() {
                let e = "立即打开";
                return this.canInstall ? e = "立即安装" : this.canPlay && (e = "立即播放"), e
            }

            get fileTypeClass() {
                return "xlx-icon" + a.TaskUtilHelper.getTaskIcon(this.data.taskBase.taskName, this.data.taskBase.taskType).slice(3)
            }

            get isPanDownload() {
                return this.data && this.data.exData && this.data.exData.isPanDownload
            }

            get taskName() {
                return this.data.taskBase.taskName
            }

            handleClose() {
                return this.isPanDownload ? l.XLStatNS.trackEvent("pc_yunpan", "getback_success_pop_click", "", 0, 0, 0, 0, "button=close") : l.XLStatNS.trackEvent("download_leftpanel", "dl_finished_tips_click", "", 0, 0, 0, 0, "panel_type=mypc,button=close"), this.$emit("close"), Promise.resolve()
            }

            handleOpenFolder() {
                this.isPanDownload ? l.XLStatNS.trackEvent("pc_yunpan", "getback_success_pop_click", "", 0, 0, 0, 0, "button=openfolders") : l.XLStatNS.trackEvent("download_leftpanel", "dl_finished_tips_click", "", 0, 0, 0, 0, "panel_type=mypc,button=openfolders"), s.client.callServerFunction("OperateTask", this.data.taskBase.taskId, "openFolder").then(() => {
                    this.$emit("close")
                }).catch()
            }

            handleOpenFile() {
                const e = this.data.taskBase;
                if (this.canInstall && void 0 !== this.installFileSavePath && null !== this.installFileSavePath && "" !== this.installFileSavePath) {
                    this.isPanDownload ? l.XLStatNS.trackEvent("pc_yunpan", "getback_success_pop_click", "", 0, 0, 0, 0, "button=install") : l.XLStatNS.trackEvent("download_leftpanel", "dl_finished_tips_click", "", 0, 0, 0, 0, "panel_type=mypc,button=install");
                    let t = JSON.stringify({path: this.installFileSavePath, runParams: this.installRunParams});
                    s.client.callServerFunction("OperateTask", e.taskId, "install", t).then(() => {
                        this.$emit("close")
                    }).catch()
                } else if (this.canPlay) {
                    this.isPanDownload ? l.XLStatNS.trackEvent("pc_yunpan", "getback_success_pop_click", "", 0, 0, 0, 0, "button=play") : l.XLStatNS.trackEvent("download_leftpanel", "dl_finished_tips_click", "", 0, 0, 0, 0, "panel_type=mypc,button=play"), c.information("extdata", this.isPanDownload);
                    const t = e.taskType === o.DownloadKernel.TaskType.Group;
                    let n = -1;
                    this.isPanDownload && (n = 12);
                    let r = {panel: "finished", categoryId: n};
                    t ? s.client.callServerFunction("OperateTask", e.taskId, "downAndPlay", r).then(() => {
                        this.$emit("close")
                    }).catch() : s.client.callServerFunction("OperateTask", e.taskId, "play", r).then(() => {
                        this.$emit("close")
                    }).catch()
                } else {
                    this.isPanDownload ? l.XLStatNS.trackEvent("pc_yunpan", "getback_success_pop_click", "", 0, 0, 0, 0, "button=openfiles") : l.XLStatNS.trackEvent("download_leftpanel", "dl_finished_tips_click", "", 0, 0, 0, 0, "panel_type=mypc,button=openfiles"), e.taskType === o.DownloadKernel.TaskType.Group ? s.client.callServerFunction("OperateTask", this.data.taskBase.taskId, "openFolder").then(() => {
                        this.$emit("close")
                    }).catch() : s.client.callServerFunction("OperateTask", e.taskId, "open").then(() => {
                        this.$emit("close")
                    }).catch()
                }
            }
        };
        r([i.Prop()], d.prototype, "title", void 0), r([i.Prop()], d.prototype, "data", void 0), d = r([i.Component], d), t.default = d
    }, 401: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(402), i = n.n(r);
        for (var o in r) "default" !== o && function (e) {
            n.d(t, e, function () {
                return r[e]
            })
        }(o);
        t.default = i.a
    }, 402: function (e, t, n) {
        "use strict";
        var r = this && this.__decorate || function (e, t, n, r) {
            var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(5), o = n(16), a = n(4), s = n(15);
        let l = class extends i.Vue {
            get taskName() {
                return this.data.taskBase.taskName
            }

            handleClose() {
                return s.XLStatNS.trackEvent("download_leftpanel", "dl_fail_tips_click", "", 0, 0, 0, 0, "panel_type=mypc,button=close"), this.$emit("close"), Promise.resolve()
            }

            handleClick() {
                s.XLStatNS.trackEvent("download_leftpanel", "dl_fail_tips_click", "", 0, 0, 0, 0, "panel_type=mypc,button=view"), this.data && this.data.exData && this.data.exData.isPanDownload ? (a.client.callServerFunction("SelectNav", "pan-plugin-view").catch(), a.client.callRemoteClientFunction("ThunderPanPluginWebview", "IpcShowTransferWindow", "download").catch()) : a.client.callServerFunction("SelectCategoryView", -1, o.DownloadKernel.CategroyViewID.Downloading, this.data.taskBase.taskId, !0).catch(), this.$emit("close")
            }
        };
        r([i.Prop()], l.prototype, "title", void 0), r([i.Prop()], l.prototype, "data", void 0), l = r([i.Component], l), t.default = l
    }, 403: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(404), i = n.n(r);
        for (var o in r) "default" !== o && function (e) {
            n.d(t, e, function () {
                return r[e]
            })
        }(o);
        t.default = i.a
    }, 404: function (e, t, n) {
        "use strict";
        var r = this && this.__decorate || function (e, t, n, r) {
            var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(5), o = n(15), a = n(1).default.getLogger("notification-render"), s = n(199);
        let l = class extends i.Vue {
            constructor() {
                super(...arguments), this.msgReviewComment = 8, this.msgDownloadSourceReplay = 6, this.msgReviewReplay = 10, this.msgCircle = 12, this.starReview = 9, this.starResourceComment = 7, this.starReviewComment = 11, this.starCircle = 13, this.chatMsg = 100, this.msgType = 0
            }

            get userNames() {
                let e = "";
                if (1 === this.communityMsgs.length) e = this.communityMsgs[0].userName; else {
                    let t = [];
                    for (let e = 0; e < this.communityMsgs.length; e++) t.includes(this.communityMsgs[e].userName) || t.push(this.communityMsgs[e].userName || "");
                    e = t.join("、")
                }
                return e
            }

            get usersNum() {
                let e = [];
                for (let t = 0; t < this.communityMsgs.length; t++) e.includes(this.communityMsgs[t].userId) || e.push(this.communityMsgs[t].userId || 0);
                return e.length
            }

            get msgTips() {
                let e = "";
                if (1 === this.communityMsgs.length) switch (this.communityMsgs[0].msgType) {
                    case this.msgReviewComment:
                        e = "评论了你的影评";
                        break;
                    case this.msgDownloadSourceReplay:
                    case this.msgReviewReplay:
                        e = "回复了你";
                        break;
                    case this.starReview:
                        e = "点赞了你的影评";
                        break;
                    case this.starResourceComment:
                    case this.starReviewComment:
                        e = "点赞了你的评论";
                        break;
                    case this.chatMsg:
                        e = "对你说"
                }
                return e
            }

            get communityMsgs() {
                return this.data.communityMsgs || []
            }

            get msgContentHmtl() {
                let e = "";
                if (a.information("this.communityMsgs", this.communityMsgs), 1 === this.communityMsgs.length) switch (this.communityMsgs[0].msgType) {
                    case this.msgReviewComment:
                    case this.msgDownloadSourceReplay:
                    case this.msgReviewReplay:
                    case this.starResourceComment:
                    case this.starReviewComment:
                    case this.chatMsg:
                        e = this.communityMsgs[0].messageContent || "";
                        break;
                    case this.starReview:
                        e = s(this.communityMsgs[0], "res", "title");
                        break;
                    case this.msgCircle:
                        e = "回复了你";
                        break;
                    case this.starCircle:
                        e = "赞了你"
                } else e = this.data.msgType === this.msgType ? 1 === this.usersNum ? "给你发送了消息" : `等<span>${this.usersNum}</span>人 给你发送了消息` : 1 === this.usersNum ? "给你点赞了" : `等<span>${this.usersNum}</span>人 给你点赞了`;
                return e
            }

            handleMsgClick() {
                let e = "";
                this.communityMsgs.every(e => e.msgType === this.chatMsg) && (e = this.communityMsgs[0].userId), this.$emit("openCommunity", e)
            }

            handleClickSetting() {
                this.$emit("clickSetting")
            }

            mounted() {
                o.XLStatNS.trackEvent("community", "comtab_show", "", 0, 0, 0, 0, "type=xltips")
            }
        };
        r([i.Prop({})], l.prototype, "data", void 0), l = r([i.Component], l), t.default = l
    }, 405: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(406), i = n.n(r);
        for (var o in r) "default" !== o && function (e) {
            n.d(t, e, function () {
                return r[e]
            })
        }(o);
        t.default = i.a
    }, 406: function (e, t, n) {
        "use strict";
        var r = this && this.__decorate || function (e, t, n, r) {
            var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(4), a = n(5), s = n(18);
        var l;
        !function (e) {
            e[e.TextButton = 1] = "TextButton", e[e.SmallImageButton = 2] = "SmallImageButton", e[e.BigImageButton = 3] = "BigImageButton", e[e.Image = 4] = "Image", e[e.Flash = 5] = "Flash"
        }(l = t.StyleType || (t.StyleType = {}));
        let c = class extends a.Vue {
            get tipsType() {
                let e = void 0;
                return this.data && this.data.exData && (e = this.data.exData.style), e
            }

            get dialogClass() {
                let e = "";
                return this.tipsType === l.TextButton ? e = "xlx-dialog-activity--text" : this.tipsType === l.SmallImageButton ? e = "xlx-dialog-activity--mutitext" : this.tipsType !== l.Image && this.tipsType !== l.Flash || (e = "xlx-dialog-activity--picture"), e
            }

            get showPicture() {
                let e = !1;
                return this.tipsType >= l.SmallImageButton && this.tipsType <= l.Flash && (e = !0), e
            }

            get showFlash() {
                let e = !1;
                return this.tipsType === l.Flash && (e = !0), e
            }

            get showTitle() {
                let e = !1;
                return this.tipsType === l.TextButton && (e = !0), e
            }

            get showContent() {
                let e = !0;
                return this.tipsType !== l.Image && this.tipsType !== l.Flash || (e = !1), e
            }

            get caption() {
                let e = "";
                return this.data && this.data.exData && this.data.exData.caption && (e = this.data.exData.caption), e
            }

            get title() {
                let e = "";
                return this.data && this.data.exData && this.data.exData.title && (e = this.data.exData.title), e
            }

            get content() {
                let e = "";
                return this.data && this.data.exData && this.data.exData.content && (e = this.data.exData.content), e
            }

            get btnText() {
                let e = "";
                return this.data && this.data.exData && this.data.exData.btnText && (e = this.data.exData.btnText), e
            }

            get imagePath() {
                let e = "";
                return this.data && this.data.exData && this.data.exData.banner && this.data.exData.banner.savePath && (e = this.data.exData.banner.savePath), e
            }

            get captionColor() {
                let e = "";
                return this.data && this.data.exData && this.data.exData.captionColor && (e = this.data.exData.captionColor), e
            }

            handleButtonClick() {
                this.data && this.data.exData && (this.bringMainWindowToTop(), i.ipcRenderer.send(s.ThunderChannelList.channelMRAdTipsClick, "btn", this.data.exData)), this.$emit("close")
            }

            handleImageClick() {
                this.data && this.data.exData && (this.bringMainWindowToTop(), i.ipcRenderer.send(s.ThunderChannelList.channelMRAdTipsClick, "img", this.data.exData)), this.$emit("close")
            }

            handleCloseClick() {
                this.data && this.data.exData && i.ipcRenderer.send(s.ThunderChannelList.channelMRAdTipsClick, "close", this.data.exData), this.$emit("close")
            }

            bringMainWindowToTop() {
                o.client.callServerFunction("BringMainWndToTop").catch()
            }
        };
        r([a.Prop({})], c.prototype, "data", void 0), c = r([a.Component], c), t.default = c
    }, 407: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(408), i = n.n(r);
        for (var o in r) "default" !== o && function (e) {
            n.d(t, e, function () {
                return r[e]
            })
        }(o);
        t.default = i.a
    }, 408: function (e, t, n) {
        "use strict";
        var r = this && this.__decorate || function (e, t, n, r) {
            var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(5), o = n(16), a = n(58), s = n(15), l = n(4), c = n(1).default.getLogger("notification-render");
        let d = class extends i.Vue {
            get finishOperateIcon() {
                return "xlx-icon-dialog-open"
            }

            get fileTypeClass() {
                return a.TaskUtilHelper.getTaskIcon(this.data.taskBase.taskName, this.data.taskBase.taskType)
            }

            get taskName() {
                return this.data.taskBase.taskName
            }

            get showText() {
                let e = "未下载完";
                return 3 === this.data.msgType && (e = "未查看"), e
            }

            get isMore() {
                return this.data.fileCountNumber >= 3
            }

            handleClose() {
                let e = "not_downloaded_popup_click", t = "task_cnt=";
                return 3 === this.data.msgType && (e = "downloaded_notcheck_popup_click"), t += this.data.fileCountNumber + ",button=close", s.XLStatNS.trackEvent("business", e, "", 0, 0, 0, 0, t), c.information("trackEvent", "business", e, t), this.$emit("close"), Promise.resolve()
            }

            handleClick() {
                let e = o.DownloadKernel.CategroyViewID.Downloading, t = "not_downloaded_popup_click", n = "task_cnt=";
                n += this.data.fileCountNumber + ",button=check_now", 3 === this.data.msgType && (e = o.DownloadKernel.CategroyViewID.Completed, t = "downloaded_notcheck_popup_click"), s.XLStatNS.trackEvent("business", t, "", 0, 0, 0, 0, n), c.information("trackEvent", "business", t, n), l.client.callServerFunction("SelectCategoryView", -1, e, void 0, !0).catch(), l.client.callServerFunction("SetConfigValue", "Consumption", "ShowTipsTime", 0).then(() => {
                    l.client.callServerFunction("SaveConfig").catch()
                }), this.$emit("close")
            }
        };
        r([i.Prop()], d.prototype, "data", void 0), d = r([i.Component], d), t.default = d
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
        const r = n(45), i = n(14);
        t.Parser = class extends i.EventEmitter {
            constructor() {
                super(), this.decoder = new r.StringDecoder("utf8"), this.jsonBuffer = ""
            }

            encode(e) {
                return JSON.stringify(e) + "\n"
            }

            feed(e) {
                let t = this.jsonBuffer, n = 0, r = (t += this.decoder.write(e)).indexOf("\n", n);
                for (; r >= 0;) {
                    const e = t.slice(n, r), i = JSON.parse(e);
                    this.emit("message", i), n = r + 1, r = t.indexOf("\n", n)
                }
                this.jsonBuffer = t.slice(n)
            }
        }
    }, 43: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(6), a = n(1), s = n(9), l = n(27), c = n(3), d = n(18),
            u = s.default(i.join(__rootDir, "../bin/ThunderHelper.node"));
        let f = "0";
        process.env.TL_ENABLE = f;
        let p = process.env.TL_OUTPUT;

        function h() {
            a.default.outputLogger = "console" === p ? a.outputLoggerConsole : function () {
                function e(e) {
                    return function (...t) {
                        u.printEtwLog(e, function (...e) {
                            return e.map(e => o.inspect(e)).join(" ").replace(/%/g, "%%")
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

        function m() {
            return r(this, void 0, void 0, function* () {
                l.DevEnvHelperNS.isLogEnable().then(e => {
                    e && "1" === f !== e && (f = e ? "1" : "0", process.env.TL_ENABLE = f)
                }).catch(), l.DevEnvHelperNS.getLogOutput().then(e => {
                    e && e !== p && (p = e, h())
                }).catch()
            })
        }

        h(), m().catch(), "browser" === process.type ? c.ipcMain.on(d.ThunderChannelList.channelRMUpdateLogEnviroment, () => {
            c.BrowserWindow.getAllWindows().forEach(e => {
                e.isDestroyed() || e.webContents.send(d.ThunderChannelList.channelMRUpdateLogEnviroment)
            })
        }) : "renderer" === process.type && c.ipcRenderer.on(d.ThunderChannelList.channelMRUpdateLogEnviroment, () => {
            m().catch()
        })
    }, 44: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(23), i = n(14), o = n(26), a = n(42), s = n(24);
        t.Client = class extends i.EventEmitter {
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
                    o.information("socket is ended"), this.socket = null, this.emit("end")
                }), t.on("error", e => {
                    o.error(e.message), this.socket = null, this.emit("error", e)
                }), e.on("message", e => {
                    this.emit("message", e)
                }), this.parser = e
            }

            send(e) {
                if (this.socket) try {
                    this.socket.write(this.parser.encode(e))
                } catch (e) {
                    o.error(e.message)
                } else o.information("This socket has been ended by the other party")
            }
        }
    }, 45: function (e, t) {
        e.exports = require("string_decoder")
    }, 46: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(12), o = (n(19), n(2)), a = n(6);
        let s = null;
        const l = n(15), c = n(3), d = n(1), u = n(9), f = n(18), p = n(7), h = "xdas_profile_stat";
        let m = "", g = void 0, _ = null, v = void 0, b = null,
            y = u.default(o.join(__rootDir, "../bin/ThunderHelper.node")), R = new Set;

        function w() {
            return r(this, void 0, void 0, function* () {
                return new Promise(e => r(this, void 0, void 0, function* () {
                    void 0 === v && (null === b && (b = new Promise(e => {
                        e(v = function (e) {
                            let t = "";
                            if (0 === e.length && "renderer" === process.type) {
                                let e = o.normalize(decodeURIComponent(window.location.href)),
                                    n = e.indexOf(process.resourcesPath);
                                n = n > -1 ? n + process.resourcesPath.length + 1 : n;
                                let r = e.length - 1, i = e.indexOf("?"), a = e.indexOf("#");
                                r = i > -1 ? Math.min(i - 1, r) : r, r = a > -1 ? Math.min(a - 1, r) : r, n > -1 && r >= n && (t = e.substr(n, r - n + 1))
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
                    let i = s.createHash("md5");
                    null !== i && (r = i.update(e).digest("hex")), t(r)
                }))
            })
        }

        function k() {
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
                        return null === _ && (_ = new Promise(e => {
                            c.ipcRenderer.send(f.ThunderChannelList.channelRMGetBrowserStartType), c.ipcRenderer.once(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, (t, n) => {
                                g = n, e(n), _ = null
                            })
                        })), _
                    })
                }() : g, e(t)
            }))
        }

        function T(e, t, n, i) {
            return r(this, void 0, void 0, function* () {
                let o = C(t), a = C(n), s = yield S(a), c = function (e) {
                    let t = new RegExp(E("file:///"), "g"), n = new RegExp(E(process.resourcesPath + "\\"), "g"),
                        r = new RegExp(E(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                    return e.replace(t, "").replace(n, "").replace(r, "")
                }(C(i)), d = yield S(c), u = `${e}:${s}:${d}`;
                R.has(u) || (R.add(u), l.XLStatNS.trackEvent(h, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield w()},code=${o},message_hash=${s},message=${encodeURI(a)},stack_hash=${d},stack=${encodeURI(c)}`)), function (e, t, n, i) {
                    return r(this, void 0, void 0, function* () {
                    })
                }().catch()
            })
        }

        function x(e) {
            console.error(e);
            let t = e || {};
            T("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
        }

        !function (e) {
            e.init = function (e) {
                m = e
            }, e.trackColdStartUpEvent = function (e) {
                return r(this, void 0, void 0, function* () {
                    let t = y.iSColdStartUp() ? 1 : 0, n = i.release(),
                        r = y.performanceMonitorReporter.getProcessUptime(), o = yield k(),
                        a = `key=${e},start_type=${o},cold_start_up=${t},os_version=${n},cost_time=${r}`;
                    l.XLStatNS.trackEvent(h, "cold_start_up", "", 0, 0, 0, 0, a)
                })
            }
        }(t.PerformanceMonitorStatNS || (t.PerformanceMonitorStatNS = {})), function () {
            return r(this, void 0, void 0, function* () {
                if (process.on("uncaughtException", e => {
                    console.error(e);
                    let t = e || {};
                    T("uncaughtException", t.code, t.message, t.stack).catch()
                }), "browser" === process.type) process.on("unhandledRejection", (e, t) => {
                    x(e)
                }), c.ipcMain.on(f.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
                    return r(this, void 0, void 0, function* () {
                        let t = yield k();
                        e.sender.send(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
                    })
                }); else if ("browser" !== process.type) {
                    window.addEventListener("unhandledrejection", e => {
                        x(e && e.reason || {})
                    });
                    let e = yield p.asyncRemoteCall.getCurrentWebContents();
                    null !== e && void 0 !== e && e.once("did-finish-load", () => {
                        (function () {
                            return r(this, void 0, void 0, function* () {
                                do {
                                    if ("browser" === process.type) break;
                                    if (null === window.performance.timing || void 0 === window.performance.timing) break;
                                    let e = y.iSColdStartUp() ? 1 : 0, t = i.release(), n = window.performance.timing,
                                        r = n.loadEventEnd - n.navigationStart, o = n.fetchStart - n.navigationStart,
                                        a = n.domainLookupEnd - n.domainLookupStart, s = n.connectEnd - n.connectStart,
                                        c = n.responseStart - n.requestStart, d = n.responseEnd - n.responseStart,
                                        u = n.domComplete - n.domLoading, f = yield k();
                                    l.XLStatNS.trackEvent(h, "page_load_time", "", 0, 0, 0, 0, `start_type=${f},cold_start_up=${e},os_version=${t},load_time=${r},before_fetch_time=${o},domin_lookup_time=${a},connect_time=${s},first_response_time=${c},responseTime=${d},domTime=${u},process=${m}`)
                                } while (0)
                            })
                        })().catch()
                    })
                }
                d.default.hook("beforeLog", (e, t, ...n) => {
                    e === d.LogLevel.Critical && l.XLStatNS.trackEvent(h, "critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${n}`)
                })
            })
        }().catch()
    }, 47: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(3), i = n(40), o = n(48), a = n(49), s = n(28), l = n(50), c = n(17), d = r.isPromise,
            u = r.ipcRenderer, f = process.atomBinding("v8_util"), p = new o.default, h = f.createIDWeakMap();

        class m {
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
                if (ArrayBuffer.isView(r)) return {type: "buffer", value: i.Buffer.from(e)};
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
                        type: e instanceof m ? "interest" : "object",
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
                        id: p.add(e),
                        location: f.getHiddenValue(e, "__remote_call_location__"),
                        length: e.length
                    }
                }
                return {type: "value", value: e}
            };
            return e.map(n)
        }

        function _(e, t, n) {
            d(e) ? e.then(e => {
                t(e)
            }, e => {
                n(e)
            }) : t(e)
        }

        function v(e, t, n, r = !1) {
            const i = t => {
                if (e.hasOwnProperty(t.name) && !r) return;
                let n, i = {enumerable: t.enumerable, configurable: !0};
                if ("method" === t.type) {
                    if (t.value.refId) {
                        if (h.has(t.value.refId) && (n = h.get(t.value.refId)), null == n) throw new Error("member refId pointer to null" + t.value.refId + "name: " + t.name)
                    } else n = w(t.value, e, t.name);
                    i.get = (() => n), i.set = (e => n = e)
                } else "get" === t.type && (i.get = (() => n), t.writable && (i.set = (e => {
                    n = e
                })), n = w(t.value));
                Object.defineProperty(e, t.name, i)
            };
            if (Array.isArray(n)) {
                let e = n.length;
                for (let t = 0; t < e; t++) i(n[t])
            }
        }

        function b(e, t, n) {
            if (n) {
                let t = w(n);
                Object.setPrototypeOf(e, t)
            }
        }

        function y(e, t) {
            f.setHiddenValue(e, "__remote_id__", t)
        }

        function R(e) {
            return f.getHiddenValue(e, "__remote_id__")
        }

        function w(e, t, n) {
            const r = {
                value: () => e.value,
                array: () => e.members.map(e => w(e)),
                buffer: () => i.Buffer.from(e.value),
                promise: () => Promise.resolve({then: w(e.then)}),
                error: () => (function (e) {
                    const t = (() => "error" === e.type ? new Error : {})();
                    for (let n = 0; n < e.members.length; n++) {
                        let {name: r, value: i} = e.members[n];
                        t[r] = i
                    }
                    return t
                })(e),
                date: () => new Date(e.value),
                exception: () => {
                    throw new Error(`${e.message}\n${e.stack}`)
                }
            };
            let o;
            return e.type in r ? o = r[e.type]() : e.refId ? h.has(e.refId) ? o = h.get(e.refId) : (c.warn("[metaToValue] refId point to null" + e.refId), o = "function" === e.type ? () => {
            } : {}) : e.id ? h.has(e.id) ? (v(o = h.get(e.id), e.id, e.members, !0), b(o, e.id, e.proto)) : (o = "function" === e.type ? t ? function (e, t, n) {
                if (h.has(n.id)) return h.get(n.id);
                let r = R(e), i = function (...e) {
                    throw Error("never should come to a proxied function")
                };
                Object.defineProperty(i, "name", {value: t, writable: !1, enumerable: !0});
                let o = new Proxy(i, {
                    apply: (e, n, i) => new Promise((e, o) => {
                        let c = R(n);
                        if (c || (c = R(n.__remoteObj_)), !c) throw Error("is this function was a bound function?");
                        let d = s.default.browser.memberCall, f = l.default(d), p = g(i);
                        u.send(d, f, c, r, t, p), a.default.add(f, t => {
                            try {
                                _(w(t), e, o)
                            } catch (e) {
                                o(e)
                            }
                        })
                    }), construct: (e, n, i) => new Promise((e, i) => {
                        let o = s.default.browser.memberConstruct, c = l.default(o);
                        u.send(o, c, r, t, g(n)), a.default.add(c, t => {
                            try {
                                let n = w(t);
                                e(n)
                            } catch (e) {
                                i(e)
                            }
                        })
                    })
                });
                return f.setHiddenValue(i, "__remote_id__", n.id), o
            }(t, n, e) : function (e) {
                let t = e.id;
                const n = function (...e) {
                    throw new Error("Should Never com to a remoteFunction PlaceHolder")
                };
                return y(n, t), new Proxy(n, {
                    apply: (e, n, r) => new Promise((e, i) => {
                        let o = s.default.browser.functionCall, c = l.default(o), d = R(n);
                        u.send(o, c, d, t, g(r)), a.default.add(c, t => {
                            try {
                                _(w(t), e, i)
                            } catch (e) {
                                i(e)
                            }
                        })
                    }), construct: (e, n, r) => new Promise((e, r) => {
                        let i = s.default.browser.construct, o = l.default(i);
                        u.send(i, o, t, g(n)), a.default.add(o, t => {
                            try {
                                let n = w(t);
                                e(n)
                            } catch (e) {
                                r(e)
                            }
                        })
                    })
                })
            }(e) : {}, f.setRemoteObjectFreer(o, e.id), h.set(e.id, o), f.setHiddenValue(o, "__remote_id__", e.id), function (e) {
                let t = R(e);
                Object.defineProperties(e, {
                    __set: {
                        enumerable: !1, writable: !1, value: function (n, r) {
                            if ("function" == typeof r) throw new Error("set a function to a remote member is dangerous");
                            return new Promise((i, o) => {
                                let c = s.default.browser.memberSet, d = l.default(c), f = g([r]);
                                u.send(c, d, t, n, f), a.default.add(d, t => {
                                    try {
                                        let a = w(t);
                                        e[n] = r, i(a)
                                    } catch (e) {
                                        o(e)
                                    }
                                })
                            })
                        }
                    }, __get: {
                        enumerable: !1, writable: !1, value: function (n) {
                            return new Promise((r, i) => {
                                let o = s.default.browser.memberGet, c = l.default(o);
                                u.send(o, c, t, n), a.default.add(c, t => {
                                    try {
                                        const o = w(t);
                                        e[n] = o, r(o)
                                    } catch (e) {
                                        i(e)
                                    }
                                })
                            })
                        }
                    }, __sync: {
                        enumerable: !1, writable: !1, value: function () {
                            return new Promise((e, n) => {
                                let r = s.default.browser.sync, i = l.default(r);
                                u.send(r, i, t), a.default.add(i, r => {
                                    try {
                                        if (r.id !== t) throw Error("SYNC_RETURN: remote id not match");
                                        let i = w(r);
                                        e(i)
                                    } catch (e) {
                                        n(e)
                                    }
                                })
                            })
                        }
                    }
                })
            }(o), v(o, e.id, e.members), b(o, e.id, e.proto), Object.defineProperty(o.constructor, "name", {value: e.name}), e.extendedMemberNames && e.extendedMemberNames.forEach((e, t) => {
                let n = o[e], r = o.__proto__;
                for (; r;) {
                    if (Object.prototype.hasOwnProperty.call(r, e)) {
                        delete r[e];
                        break
                    }
                    r = r.__proto__
                }
                Object.defineProperty(o, e, {value: n, enumerable: !1, writable: !1, configurable: !0})
            })) : c.error("no id of meta:", e), o
        }

        t.Interest = m;

        class C {
            constructor(...e) {
                if (this.__resolved_ = !1, this.__promise_ = null, this.__remoteObj_ = null, this.__what_ = "", this.__name_ = "", "string" === typeof arguments[0]) {
                    let e = arguments[0], t = arguments[1];
                    this.__what_ = e, this.__name_ = t || e, this.__resolved_ = !1, this.__remoteObj_ = null, this.__promise_ = new Promise((n, r) => {
                        let i = this.getChannel(e), o = l.default(i);
                        u.send(i, o, t), a.default.add(o, e => {
                            try {
                                let t = w(e);
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
            p.apply(t, w(n))
        }), u.on(s.default.renderer.syncReturn, E), u.on("ELECTRON_RENDERER_RELEASE_CALLBACK", (e, t) => {
            c.info("[RELEASE_CALLBACK]: callbackId:", t), p.remove(t)
        }), process.on("exit", () => {
            u.send(s.default.browser.contextRelease)
        });
        const S = ["__resolve", "__isResolved"],
            k = ["__promise_", "__resolved_", "__remoteObj_", "__name_", "__what_"], T = e => {
                if (!e.__isResolved()) throw Error("Can not access the property of a remote module which has not Resolved yet.")
            };

        function x(e) {
            const t = function () {
            };
            Object.defineProperty(t, "name", {value: e.__name_}), Object.defineProperty(t, "what", {
                enumerable: !1,
                value: e.__what_
            });
            let n = new Proxy(t, {
                getPrototypeOf: t => (T(e), Reflect.getPrototypeOf(e.__remoteObj_)),
                setPrototypeOf: (e, t) => {
                    throw new Error("changing prototype of remote object is forbidden")
                },
                isExtensible: t => (T(e), Reflect.isExtensible(e.__remoteObj_)),
                preventExtensions: t => (T(e), Reflect.preventExtensions(e)),
                getOwnPropertyDescriptor: (t, n) => (T(e), Reflect.getOwnPropertyDescriptor(e.__remoteObj_, n)),
                has: (t, n) => (T(e), Reflect.has(e.__remoteObj_, n)),
                deleteProperty: (t, n) => (T(t), Reflect.deleteProperty(e.__remoteObj_, n)),
                defineProperty: (t, n, r) => (T(e), Reflect.defineProperty(e.__remoteObj_, n, r)),
                get: (t, n, r) => {
                    if ("string" == typeof n) {
                        if (String.prototype.includes.call(k, n)) {
                            return e[n]
                        }
                        if (String.prototype.includes.call(S, n)) {
                            return e[n]
                        }
                    }
                    return T(e), Reflect.get(e.__remoteObj_, n)
                },
                set: (t, n, r, i) => (T(e), Reflect.set(e.__remoteObj_, n, r, i)),
                ownKeys: t => (T(e), Reflect.ownKeys(e.__remoteObj_)),
                apply: (t, n, r) => {
                    T(e), Reflect.apply(e.__remoteObj_, n, r)
                },
                construct: (t, n, r) => {
                    if (T(e), "function" != typeof e.__remoteObj_) throw Error("operator new ONLY used for function");
                    return new Promise((t, r) => {
                        let i = s.default.browser.construct, o = l.default(i),
                            c = f.getHiddenValue(e.__remoteObj_, "__remote_id__");
                        u.send(i, o, c, g(n)), a.default.add(o, e => {
                            try {
                                t(w(e))
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
                    let t = R(e);
                    t && y(n, t)
                }
            }), n
        }

        t.remoteRequire = function (e) {
            return x(new C("module", e))
        }, t.getBuiltin = function (e) {
            return x(new C("builtin", e))
        }, t.getGlobal = function (e) {
            return x(new C("global", e))
        }, t.getCurrentWindow = function () {
            return x(new C("current_window"))
        }, t.getCurrentWebContents = function () {
            return x(new C("current_web_contents"))
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
                const n = /at (.*)/gi, i = (new Error).stack;
                let o, a = n.exec(i);
                for (; null !== a;) {
                    const e = a[1];
                    if (!e.includes("native") && !e.includes("electron.asar")) {
                        o = /([^/^)]*)\)?$/gi.exec(e)[1];
                        break
                    }
                    a = n.exec(i)
                }
                return this.callbacks[t] = e, r.setHiddenValue(e, "__remote_callback_id__", t), r.setHiddenValue(e, "__remote_call_location__", o), t
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
                let i = t[n];
                return i.thisArg ? i.func.apply(i.thisArg, ...r) : i.func(...r), e
            }, e.remove = function (e) {
                delete t[e]
            }
        }(r || (r = {})), t.default = r
    }, 498: function (e, t, n) {
        e.exports = n(8)(132)
    }, 499: function (e, t, n) {
        "use strict";
        var r = n(1036);
        n.n(r).a
    }, 5: function (e, t, n) {
        e.exports = n(8)(201)
    }, 50: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        let r = 0;
        t.default = function (e) {
            return e ? e.concat(".").concat(String(++r)) : String(++r)
        }
    }, 504: function (e, t, n) {
        "use strict";
        var r = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return "DownloadComplete" === e.options.type && e.options.data ? n("download-complete", e._b({on: {close: e.handleClose}}, "download-complete", e.options, !1)) : "DownloadFail" === e.options.type && e.options.data ? n("download-fail", e._b({on: {close: e.handleClose}}, "download-fail", e.options, !1)) : "CommunityTips" === e.options.type && e.options.data ? n("community-tips", e._b({
                on: {
                    openCommunity: e.sendOpenCommunity,
                    clickSetting: e.sendOpenSetting,
                    close: e.handleClose
                }
            }, "community-tips", e.options, !1)) : "AdvertisementTips" === e.options.type && e.options.data && e.options.data.exData ? n("advertisement-tips", e._b({on: {close: e.handleClose}}, "advertisement-tips", e.options, !1)) : "ConsumptionTips" === e.options.type && e.options.data ? n("consumption-tips", e._b({on: {close: e.handleClose}}, "consumption-tips", e.options, !1)) : e._e()
        }, i = [];
        r._withStripped = !0, n.d(t, "a", function () {
            return r
        }), n.d(t, "b", function () {
            return i
        })
    }, 51: function (e, t, n) {
        "use strict";
        const r = n(3), i = n(52), o = n(28), a = n(53), s = n(17), l = r.isPromise, c = r.ipcMain,
            d = process.atomBinding("v8_util");
        let u = d.createDoubleIDWeakMap();
        const f = new i.default;

        function p(e, t, n, r, i, o) {
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
                let i = Object.getOwnPropertyDescriptor(t, r);
                if (void 0 === i) {
                    s.warn(`descriptor of property ${r} is undefined`);
                    break
                }
                c = {
                    name: r,
                    enumerable: i.enumerable,
                    writable: !1,
                    type: "get"
                }, void 0 === i.get && "function" == typeof a ? c.type = "method" : ((i.set || i.writable) && (c.writable = !0), c.type = "get"), d ? (c.configurable = !0, c.value = g(e, a, o, !1, null)) : c.value = g(e, a, o, !1, n)
            } while (0);
            return c
        }

        function h(e, t, n, r = null) {
            let i = Object.getOwnPropertyNames(t);
            "function" == typeof t && (i = i.filter(function (e) {
                return !String.prototype.includes.call(a.propertiesOfFunction, e)
            }));
            let o = [];
            do {
                if (0 === i.length) break;
                let a = i.length;
                for (let s = 0; s < a; s++) {
                    let a = p(e, t, n, i[s], 0, r);
                    a && o.push(a)
                }
            } while (0);
            return o
        }

        function m(e, t, n, r = null) {
            let i = null, o = Object.getPrototypeOf(t);
            return i = null === o || o === Object.prototype || o === Function.prototype ? null : g(e, o, r, !1, n)
        }

        function g(e, t, n = null, r = !1, i = null) {
            n = null === n ? {} : n;
            const o = {type: typeof t};
            "object" === o.type && (o.type = function (e, t) {
                let n = typeof e;
                if ("object" !== n) throw new Error("incorrect arg at index 0. non-object");
                return null === e ? n = "value" : ArrayBuffer.isView(e) ? n = "buffer" : Array.isArray(e) ? n = "array" : e instanceof Error ? n = "error" : e instanceof Date ? n = "date" : l(e) ? n = "promise" : Object.prototype.hasOwnProperty.call(e, "callee") && null != e.length ? n = "array" : t && d.getHiddenValue(e, "simple") && (n = "value"), n
            }(t, r));
            do {
                if ("object" === o.type || "function" === o.type) {
                    let r = f.getIdOfObject(t);
                    if (r && n[r]) {
                        o.refId = r, f.add(e, t);
                        break
                    }
                }
                "array" === o.type ? o.members = t.map(t => g(e, t, n)) : "object" === o.type || "function" === o.type ? (null == i && (o.extendedMemberNames = [], i = {
                    value: t,
                    meta: o
                }), o.name = t.constructor ? t.constructor.name : "", o.id = f.add(e, t), n[o.id] = !0, o.members = h(e, t, i, n), o.proto = m(e, t, i, n)) : "buffer" === o.type ? o.value = Buffer.from(t) : "promise" === o.type ? (t.then(function () {
                }, function () {
                }), o.then = g(e, function (e, n) {
                    t.then(e, n)
                })) : "error" === o.type ? (o.members = _(t), o.members.push({
                    name: "name",
                    value: t.name
                })) : "date" === o.type ? o.value = t.getTime() : (o.type = "value", o.value = t)
            } while (0);
            return o
        }

        function _(e) {
            return Object.getOwnPropertyNames(e).map(t => ({name: t, value: e[t]}))
        }

        function v(e, t) {
            const n = function (t) {
                let i, a, l = 0, c = 0;
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
                        for (Object.defineProperty(e.constructor, "name", {value: t.name}), l = 0, c = (a = t.members).length; l < c; l++) e[(i = a[l]).name] = n(i.value);
                        return e
                    }
                    case"function": {
                        const n = e.id, i = [n, t.id];
                        if (s.info("renderer function id:" + i), u.has(i)) return u.get(i);
                        let a = function (...i) {
                            s.info("[CALLBACK] args", i);
                            let l = [...i];
                            e.isDestroyed() || n !== e.id ? function (e, t, n) {
                                let i = "Attempting to call a function in a renderer window that has been closed or released." + `\nFunction provided here: ${e.location}`;
                                if (t.length > 0 && t[0].sender && t[0].sender instanceof r.webContents.constructor) {
                                    const {sender: e} = t[0], r = e.eventNames().filter(t => {
                                        let r = e.listeners(t), i = !1;
                                        return r.forEach(e => {
                                            e === n && (i = !0)
                                        }), i
                                    });
                                    r.length > 0 && (i += `\nRemote event names: ${r.join(", ")}`, r.forEach(t => {
                                        Object.getPrototypeOf(e).removeListener.call(e, t, n)
                                    }))
                                }
                                s.warn(i)
                            }(t, l, a) : e.send(o.default.renderer.callback, t.id, g(e, l))
                        };
                        return Object.defineProperty(a, "length", {value: t.length}), d.setRemoteCallbackFreer(a, t.id, e), u.set(i, a), a
                    }
                    default:
                        throw new TypeError(`Unknown type: ${t.type}`)
                }
            };
            return t.map(n)
        }

        function b(e, t, n, r) {
            let i, o;
            try {
                return t.apply(n, r)
            } catch (e) {
                return o = t.name, new Error(`Could not call remote function '${i = null != o ? o : "anonymous"}'. Check that the function signature is correct. Underlying error: ${e.message}`)
            }
        }

        function y(e) {
            return {type: "exception", message: e.message, stack: e.stack || e}
        }

        function R(e) {
            const t = new Error(e);
            throw Object.defineProperty(t, "code", {value: "EBADRPC"}), Object.defineProperty(t, "errno", {value: -72}), t
        }

        var w;
        !function (e) {
            const t = (e, t, ...n) => {
                const r = e.sender;
                r.isDestroyed() ? s.warn("webcontext is destroyed, id=", r.id) : r.send(t, ...n)
            };
            e.startServer = function () {
                c.on(o.default.browser.require, (e, n, r) => {
                    s.info(`[REQUIRE] module=${r} `);
                    let i = process.mainModule.require(r), a = g(e.sender, i);
                    t(e, o.default.renderer.requireReturn, n, a)
                }), c.on(o.default.browser.builtIn, (e, n, i) => {
                    s.info(`[BUILTIN]: property=${i} `);
                    let a = r[i], l = g(e.sender, a);
                    s.info(`[BUILTIN]: returns remoteId:${l.id}, type: ${typeof a}`), t(e, o.default.renderer.getBuiltInReturn, n, l)
                }), c.on(o.default.browser.global, (e, n, r) => {
                    s.info(`[GLOBAL]: proerty:${r} `);
                    let i, a = global[r];
                    i = g(e.sender, a), s.info(`[GLOBAL]: returns remoteid=${i.id}, obj=` + typeof a), t(e, o.default.renderer.getGlobalReturn, n, i)
                }), c.on(o.default.browser.currentWindow, (e, n, r) => {
                    s.info(`[CURRENT_WINDOW]: property=${r} `);
                    let i = e.sender.getOwnerBrowserWindow.call(e.sender), a = g(e.sender, i);
                    s.info(`[CURRENT_WINDOW]: returns remoteid=${a.id}, obj=` + i), t(e, o.default.renderer.currentWindowReturn, n, a)
                }), c.on(o.default.browser.currentWebContents, (e, n, r) => {
                    t(e, o.default.renderer.currentWebContentsReturn, n, g(e.sender, e.sender))
                });
                const e = (e, t) => {
                    const n = (t, n) => {
                        t && Object.getOwnPropertyNames(t).forEach(r => {
                            n ? e.once(r, t[r]) : e.on(r, t[r])
                        })
                    };
                    t.on && n(t.on, !1), t.once && n(t.once, !0)
                };
                c.on(o.default.browser.construct, (n, r, i, a) => {
                    let l, c = null;
                    try {
                        s.info(`[CONSTRUCTOR]: remoteId=${i} `);
                        let d = a.length > 0 ? a[a.length - 1] : null;
                        a = v(n.sender, a);
                        let u = f.get(i);
                        null == u && R(`Cannot call constructor on missing remote object ${i}`), d && "interest" === d.type && (c = a.pop());
                        let p = new (Function.prototype.bind.apply(u, [null].concat(a)));
                        p && c && e(p, c), l = g(n.sender, p, null, !1), s.info(`[CONSTRUCTOR]: returns remoteId =${l.id} name=${u.name} `)
                    } catch (e) {
                        l = y(e)
                    } finally {
                        t(n, o.default.renderer.constructReturn, r, l)
                    }
                }), c.on(o.default.browser.functionCall, function (e, n, r, i, a) {
                    let l;
                    try {
                        s.info(`[FUNCTION_CALL]: remoteId=${i}`), a = v(e.sender, a);
                        let c = f.get(i);
                        if (null == c) s.error(`Cannot call function on missing remote object ${i}`), l = g(e.sender, void 0); else {
                            let t = r ? f.get(r) : global;
                            if (t) {
                                let n = b(0, c, t, a);
                                l = g(e.sender, n)
                            } else s.error(`Cannot call function(${i}) on missing context(${r})`), l = g(e.sender, void 0)
                        }
                        s.info(`[FUNCTION_CALL]: name=${c.name}`)
                    } catch (e) {
                        l = y(e)
                    } finally {
                        t(e, o.default.renderer.functionCallReturn, n, l)
                    }
                }), c.on(o.default.browser.memberCall, function (e, n, r, i, a, l) {
                    let c;
                    s.info(`[MEMBER_CALL]: thisArg=${r}, remoteId=${i}, method=${a}, args count=${l.length}`);
                    try {
                        l = v(e.sender, l);
                        let d = f.get(i);
                        null == d && R(`Cannot call function '${a}' on missing remote object ${i}`);
                        let u = r ? f.get(r) : d;
                        if (u) {
                            let t = b(0, d[a], u, l);
                            c = g(e.sender, t), s.info("[MEMBER_CALL]: return=" + t)
                        } else c = g(e.sender, void 0)
                    } catch (e) {
                        c = y(e)
                    } finally {
                        t(e, o.default.renderer.memberCallReturn, n, c)
                    }
                }), c.on(o.default.browser.memberGet, function (e, n, r, i) {
                    let a;
                    try {
                        s.info(`[MEMBER_GET]: remoteId=${r}, property=`, i);
                        let l = f.get(r);
                        null == l && R(`Cannot get property '${Object.toString.call(i)}' on missing remote object ${r}`);
                        let c = l[i];
                        a = g(e.sender, c)
                    } catch (e) {
                        a = y(e)
                    } finally {
                        t(e, o.default.renderer.memberGetReturn, n, a)
                    }
                }), c.on(o.default.browser.memberSet, function (e, n, r, i, a) {
                    try {
                        s.info(`[MEMBER_SET]: remoteId=${r}, property=` + i), a = v(e.sender, a);
                        let l = f.get(r);
                        null == l && R(`Cannot set property '${Object.toString.call(i)}' on missing remote object ${r}`), l[i] = a[0], t(e, o.default.renderer.memberSetReturn, n, {
                            type: "value",
                            value: !0
                        })
                    } catch (r) {
                        t(e, o.default.renderer.memberSetReturn, n, y(r))
                    }
                }), c.on(o.default.browser.memberConstruct, function (n, r, i, a, l) {
                    let c, d = null;
                    try {
                        s.info(`[MEMBER_CONSTRUCTOR]: regId=${i}, method=${a}`);
                        let u = l.length > 0 ? l[l.length - 1] : null;
                        l = v(n.sender, l);
                        let p = f.get(i);
                        null == p && R(`Cannot call constructor '${a}' on missing remote object ${i}`), u && "interest" === u.type && (d = l.pop());
                        let h = p[a], m = new (Function.prototype.bind.apply(h, [null].concat(l)));
                        m && d && e(m, d), c = g(n.sender, m)
                    } catch (e) {
                        c = y(e)
                    } finally {
                        t(n, o.default.renderer.memberConstructReturn, r, c)
                    }
                }), c.on(o.default.browser.sync, function (e, n, r) {
                    let i = f.get(r);
                    t(e, o.default.renderer.syncReturn, n, g(e.sender, i))
                }), c.on("ELECTRON_BROWSER_DEREFERENCE", function (e, t) {
                    let n = f.get(t);
                    if (n) {
                        let r = n.name;
                        r || (r = n.constructor ? n.constructor.name : ""), f.remove(e.sender.id, t)
                    } else t < 0 && s.warn("remote id reference to nothing:", t)
                }), c.on(o.default.browser.contextRelease, e => {
                    f.clear(e.sender.id)
                })
            }, e.getObjectRegistry = function () {
                return f
            }
        }(w || (w = {})), e.exports = w
    }, 52: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(17), i = -1 * Math.pow(2, 31), o = process.atomBinding("v8_util");
        t.default = class {
            constructor() {
                this.nextId = 0, this.storage = new Map, this.owners = new Map
            }

            add(e, t) {
                const n = this.saveToStorage(t), r = e.id;
                let i = this.owners.get(r);
                return i || (i = new Set, this.owners.set(r, i), this.registerDeleteListener(e, r)), i.has(n) || (i.add(n), this.storage.get(n).count++), n
            }

            getIdOfObject(e) {
                return o.getHiddenValue(e, "__remote_id__")
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
                let t = o.getHiddenValue(e, "__remote_id__");
                if (!t) {
                    if ((t = --this.nextId) <= i) throw new Error("object registry id overflow");
                    this.storage.set(t, {object: e, count: 0}), o.setHiddenValue(e, "__remote_id__", t)
                }
                return t
            }

            dereference(e) {
                let t = this.storage.get(e);
                null != t && (t.count -= 1, 0 === t.count && (o.deleteHiddenValue(t.object, "__remote_id__"), this.storage.delete(e)))
            }

            registerDeleteListener(e, t) {
                const n = e.getProcessId(), i = (o, a) => {
                    a === n && (r.info("render-view-deleted: processid=" + n), (() => {
                        r.info("before clear. objectsRegistry capacity=" + this.storage.size, "owners size:" + this.owners.size)
                    })(), e.removeListener("render-view-deleted", i), this.clear(t))
                };
                e.on("render-view-deleted", i)
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
        const r = n(4), i = n(41), o = n(1), a = n(11), s = o.default.getLogger("common/skin"), l = !1;

        function c(e) {
            if (l) if (e.type === i.SkinHelperNS.SkinType.Default) document.body.classList.remove("is-theme"), a.ThunderUtil.setCSSProperties(document.body, {
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
            }); else if (e.type === i.SkinHelperNS.SkinType.Color || e.type === i.SkinHelperNS.SkinType.Wallpaper || e.type === i.SkinHelperNS.SkinType.Cool) {
                document.body.classList.add("is-theme");
                let {colors: {colorPrimary: t, colorPrimaryControl1: n, colorPrimaryControl2: r, colorPrimaryControl3: i, colorPrimaryControl4: o, colorPrimaryGradient: s, colorPrimaryText: l, colorSearch: c, colorSecondary: d, colorGradientBackground: u, colorGradientForeground: f, colorAccordion: p}, opacity: h} = e;
                a.ThunderUtil.setCSSProperties(document.body, {
                    "--color-primary-theme": `${t}`,
                    "--color-primary-control-1": `${n}`,
                    "--color-primary-control-2": `${r}`,
                    "--color-primary-control-3": `${i}`,
                    "--color-primary-control-4": `${o}`,
                    "--color-primary-gradient-1": `${s[0]}`,
                    "--color-primary-gradient-2": `${s[1]}`,
                    "--color-primary-text": `${l}`,
                    "--color-search": `${c}`,
                    "--color-secondary": `${d}`,
                    "--color-gradient-background-1": `${u[0]}`,
                    "--color-gradient-background-2": `${u[1]}`,
                    "--color-gradient-foreground-1": `${f[0]}`,
                    "--color-gradient-foreground-2": `${f[1]}`,
                    "--color-accordion-1": `${p[0]}`,
                    "--color-accordion-2": `${p[1]}`,
                    "--default-opacity-1": `${h - .1}`,
                    "--default-opacity-2": `${h + .1}`
                })
            }
        }

        r.client.callServerFunction("GetSkinInfo").then(c).catch(e => {
            s.warning(e)
        }), r.client.attachServerEvent("OnChangeSkin", (e, ...t) => {
            c(t[0])
        })
    }, 555: function (e, t, n) {
        "use strict";
        var r = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("td-dialog", {
                attrs: {
                    "before-close": e.handleClose,
                    visible: ""
                }
            }, [n("h2", {
                staticClass: "xlx-dialog__title",
                attrs: {slot: "header"},
                slot: "header"
            }, [e._v(e._s(e.title))]), e._v(" "), n("a", {
                staticClass: "xlx-dialog-finish",
                attrs: {href: "javascript:;"},
                on: {click: e.handleOpenFile}
            }, [n("div", {staticClass: "xlx-dialog-finish__title"}, [n("i", {
                staticClass: "xlx-icon-type",
                class: e.fileTypeClass
            }), e._v(" "), n("p", {staticClass: "xlx-dialog-finish__file-name"}, [e._v(e._s(e.taskName))])]), e._v(" "), n("div", {
                staticClass: "xlx-dialog-finish__operate",
                attrs: {href: "javascript:;"}
            }, [n("i", {class: e.finishOperateIcon}), e._v(" "), n("span", [e._v(e._s(e.finishOperateText))])])]), e._v(" "), n("td-button", {
                attrs: {
                    slot: "footer",
                    secondary: ""
                }, on: {click: e.handleOpenFolder}, slot: "footer"
            }, [e._v("打开文件夹")])], 1)
        }, i = [];
        r._withStripped = !0, n.d(t, "a", function () {
            return r
        }), n.d(t, "b", function () {
            return i
        })
    }, 556: function (e, t, n) {
        "use strict";
        var r = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("td-dialog", {
                attrs: {
                    "before-close": e.handleClose,
                    visible: ""
                }
            }, [n("h2", {
                staticClass: "xlx-dialog__title",
                attrs: {slot: "header"},
                slot: "header"
            }, [e._v(e._s(e.title))]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("i", {staticClass: "td-icon-warning"})]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [n("p", {
                staticClass: "td-dialog-comfirm__title",
                attrs: {title: e.taskName}
            }, [e._v(e._s(e.taskName))]), e._v(" "), n("p", {staticClass: "td-dialog-comfirm__text"}, [e._v("无法继续为您完成任务，建议您更换其他资源进行下载")])])]), e._v(" "), n("td-button", {
                attrs: {
                    slot: "footer",
                    secondary: ""
                }, on: {click: e.handleClick}, slot: "footer"
            }, [e._v("立即查看")])], 1)
        }, i = [];
        r._withStripped = !0, n.d(t, "a", function () {
            return r
        }), n.d(t, "b", function () {
            return i
        })
    }, 557: function (e, t, n) {
        "use strict";
        var r = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "td-dialog xlx-dialog--small xlx-dialog-message"}, [n("div", {staticClass: "td-dialog__header"}, [n("h2", {staticClass: "xlx-dialog__title"}, [e._v("迅雷-消息")]), e._v(" "), n("a", {
                staticClass: "td-dialog__close",
                attrs: {href: "javascript:;", title: "关闭"},
                on: {
                    click: function (t) {
                        e.$emit("close")
                    }
                }
            }, [n("i", {staticClass: "td-icon-close"})]), e._v(" "), n("a", {
                staticClass: "xlx-dialog__setting",
                attrs: {href: "javascript:;", title: "设置"},
                on: {click: e.handleClickSetting}
            }, [n("i", {staticClass: "td-icon-setting"})])]), e._v(" "), n("div", {
                staticClass: "td-dialog__body",
                on: {click: e.handleMsgClick}
            }, [n("a", {
                staticClass: "xlx-dialog-message__body",
                class: {"is-more": e.usersNum > 1},
                attrs: {href: "javascript:;"}
            }, [n("div", {
                staticClass: "xlx-dialog-message__avatar",
                class: {"is-more": e.usersNum > 1}
            }, [n("img", {
                attrs: {
                    src: e.communityMsgs[0].userAvatar || "",
                    alt: "用户头像"
                }
            })]), e._v(" "), n("div", {staticClass: "xlx-dialog-message__content"}, [n("p", {staticClass: "xlx-dialog-message__title"}, [n("span", [e._v(e._s(e.userNames))]), e._v(e._s(e.msgTips) + "\n        ")]), e._v(" "), n("p", {
                staticClass: "xlx-dialog-message__text",
                domProps: {innerHTML: e._s(e.msgContentHmtl)}
            })])])])])
        }, i = [];
        r._withStripped = !0, n.d(t, "a", function () {
            return r
        }), n.d(t, "b", function () {
            return i
        })
    }, 558: function (e, t, n) {
        "use strict";
        var r = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "xlx-dialog-activity",
                class: e.dialogClass
            }, [n("div", {staticClass: "xlx-dialog-activity__header"}, [n("h4", {style: {color: e.captionColor}}, [e._v(e._s(e.caption))]), e._v(" "), n("a", {
                staticClass: "xlx-dialog-activity__close",
                attrs: {href: "javascript:;"},
                on: {click: e.handleCloseClick}
            }, [n("i", {staticClass: "td-icon-close"})])]), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showPicture,
                    expression: "showPicture"
                }], staticClass: "xlx-dialog-activity__picture"
            }, [e.showFlash ? n("a", {attrs: {href: "javascript:;"}}, [n("embed", {
                attrs: {src: e.imagePath},
                on: {click: e.handleImageClick}
            })]) : n("a", {attrs: {href: "javascript:;"}}, [n("img", {
                attrs: {src: e.imagePath, alt: "活动图片"},
                on: {click: e.handleImageClick}
            })])]), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showContent,
                    expression: "showContent"
                }], staticClass: "xlx-dialog-activity__content"
            }, [n("h5", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showTitle,
                    expression: "showTitle"
                }]
            }, [e._v(e._s(e.title))]), e._v(" "), n("p", [e._v(e._s(e.content))]), e._v(" "), n("a", {
                staticClass: "td-button",
                attrs: {href: "javascript:;"},
                on: {click: e.handleButtonClick}
            }, [e._v(e._s(e.btnText))])])])
        }, i = [];
        r._withStripped = !0, n.d(t, "a", function () {
            return r
        }), n.d(t, "b", function () {
            return i
        })
    }, 559: function (e, t, n) {
        "use strict";
        var r = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "td-dialog"}, [n("div", {staticClass: "td-dialog__header"}, [n("h2", {staticClass: "xlx-dialog__title"}, [e._v("迅雷-下载完成")]), e._v(" "), n("a", {
                staticClass: "td-dialog__close",
                attrs: {href: "javascript:;", title: "关闭"}
            }, [n("i", {
                staticClass: "td-icon-close", on: {
                    click: function (t) {
                        e.$emit("close")
                    }
                }
            })])]), e._v(" "), n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "xlx-dialog-task"}, [n("h3", [n("span", {staticClass: "user-name"}, [e._v(e._s(e.data.userName))]), e._v(" ，您还有\n        "), n("span", {staticClass: "number"}, [e._v(e._s(e.data.fileCountNumber) + "个文件")]), e._v("\n        " + e._s(e.showText) + "\n      ")]), e._v(" "), n("a", {
                staticClass: "xlx-dialog-task__view",
                attrs: {href: "javascript:;"}
            }, [n("ul", {
                staticClass: "xlx-dialog-task__list",
                class: {"is-more": e.isMore}
            }, e._l(e.data.exData, function (t) {
                return n("li", {
                    key: t.taskList,
                    staticClass: "xlx-dialog-task__item"
                }, [n("i", {staticClass: "xlx-icon-type xlx-icon-type-rmvb is-small"}), e._v(" "), n("p", {staticClass: "xlx-dialog-task__file-name"}, [e._v(e._s(t.taskName))]), e._v(" "), n("p", {staticClass: "xlx-dialog-task__percent"}, [e._v(e._s(t.percent))])])
            })), e._v(" "), n("div", {staticClass: "xlx-dialog-task__operate"}, [n("span", {on: {click: e.handleClick}}, [e._v("立即查看")])])])])])])
        }, i = [];
        r._withStripped = !0, n.d(t, "a", function () {
            return r
        }), n.d(t, "b", function () {
            return i
        })
    }, 56: function (e, t, n) {
        e.exports = n(8)(204)
    }, 57: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(7), o = n(13), a = n(4), s = n(27);
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
                        "F12" === n.key && n.ctrlKey && (yield s.DevEnvHelperNS.isLogEnable()) && (yield t(yield i.asyncRemoteCall.getCurrentWindow(), e))
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
                        void 0 !== t && null !== t && "" !== t && (yield o.FileSystemAWNS.existsAW(t)) && a.client.callServerFunction("DropOpenFile", t).catch()
                    }
                    return !1
                }), !0)
            }
        }(t.ThunderToolsNS || (t.ThunderToolsNS = {}))
    }, 58: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(2), i = n(16);
        let o = ["apk", "pic", "video", "mp4", "rmvb", "wmv", "mpg", "mkv", "mov", "rm", "avi", "flv", "doc", "link", "ppt", "word", "magnetic", "music", "pdf", "rar", "xls", "txt", "unknow", "gif", "ipa", "ipsw", "dll", "chm", "text", "install", "iso"];
        const a = ".xv;.xlmv;.3gp;.3gp2;.3gpp;.3gpp2;.3mm;.3p2;.60d;.787;.aaf;.aep;.aepx;.aet;.aetx;.ajp;.ale;.amv;.amx;.arf;\n  .asf;.asx;.avb;.avd;.avi;.avp;.avs;.avs;.axm;.bdm;.bdmv;.bik;.bix;.bmk;.bnp;.box;.bs4;.bsf;.byu;.camproj;.camrec;.clpi;.cmmp;\n  .cmmtpl;.cmproj;.cmrec;.cpi;.cst;.cvc;.d2v;.d3v;.dat;.dav;.dce;.dck;.ddat;.dif;.dir;.divx;.dlx; .dmb;.dmsm;.dmsm3d;.dmss;.dnc;.dpg;\n  .dream;.dsy;.dv;.dv-avi;.dv4;.dvdmedia;.dvr-ms;.dvx;.dxr;.dzm;.dzp;.dzt;.edl;.evo;.eye;.f4p;.f4v;.fbr;.fbr;.fbz;.fcp;.flc;.flh;\n  .fli;.flv;.flx;.gfp;.gl;.grasp;.gts;.gvi;.gvp;.hdmov;.hkm;.ifo;.imovieproj;.imovieproject;.iva;.ivf;.ivr;.ivs;.izz;.izzy;.jts;.jtv;\n  .k3g;.lrec;.lsf;.lsx;.m15;.m1pg;.m1v;.m21;.m21;.m2a;.m2p;.m2t;.m2ts;.m2v;.m4e;.m4u;.m4v;.m75;.meta;.mgv;.mj2;.mjp;.mjpg;.mkv;.mmv;\n  .mnv;.mod;.modd;.moff;.moi;.moov;.mov;.movie;.mp21;.mp2v;.mp4;.mp4v;.mpe;.mpeg;.mpeg4;.mpf;.mpg;.mpg2;.mpgindex;.mpl;.mpls;\n  .mpsub;.mpv;.mpv2;.mqv;.msdvd;.msh;.mswmm;.mts;.mtv;.mvb;.mvc;.mvd;.mve;.mvp;.mvy;.mxf;.mys;.ncor;.nsv;.nuv;.nvc;.ogm;.ogv;.ogx;.osp;\n  .par;.pds;.pgi;.piv;.pjs;.pmf;.pns;.ppj;.prel;.pro;.prproj;.prtl;.psh;.pssd;.pva;.pvr;.pxv;.qt;.qtch;.qtl;.qtm;.qtz;\n  .r3d;.rcproject;.rdb;.rec;.rm;.rmd;.rmp;.rms;.rmvb;.roq;.rp;.rts;.rts;.rum;.rv;.sbk;.sbt;.scc;.scm;.scn;.screenflow;.sec;.seq;.sfd;\n  .sfvidcap;.smk;.sml;.smv;.spl;.ssm;.stl;.str;.stx;.svi;.swf;.swi;.swt;.tda3mt;.tivo;.tix;.tod;.tp;.tp0;.tpd;\n  .tpr;.trp;.ts;.tts;.tvs;.vc1;.vcpf;.vcr;.vcv;.vdo;.vdr;.veg;.vem;.vf;.vfw;.vfz;.vgz;.vid;.viewlet;.viv;.vivo;.vlab;.vob;.vp3;.vp6;.vp7;\n  .vro;.vs4;.vse;.vsp;.w32;.wcp;.webm;.wlmp;.wm;.wmd;.wmmp;.wmv;.wmx;.wp3;.wpl;.wtv;.wvx;.xfl;.xvid;.yuv;.zm1;.zm2;.zm3;.zmv;",
            s = ".exe;.com;.bat;.msi;.apk;.ipa;.iso;.mds;.bin;.img;.ipsw;",
            l = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.\n  dot;.dotm;.dotx;.email;.rp;.pps;.et;.ett;.xlt;.dbf;.prn;.csv;.mht;.mhtml;.xml;.wpt;.dps;.dpt;.pot;.ppsx;.epub;.mobi;.lit;.wdl;.ceb;.abm;\n  .pdg;.umb;.ibooks;",
            c = ".aiff;.cue;.m3u;.au;.cdda;.raw;.wav;.flac;.tak;.mp3;.aac;.wma;.m4a;.mid;.mka;.mp2;.mpa;.mpc;.ape;.ofr;\n  .ogg;.ra;.wv;.tta;.ac3;.dts;.nsf;.mod;.s3m;.xm;.it;.vst;",
            d = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;.mef;\n  .mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico;",
            u = ".zip;.zipx;.rar;.7z;.isz;.cab;.arj;.ace;.alz;.uue;.tar;.gz; .gzip;.tgz;.tpz;.bzip2;.bz2;.bz;.tbz;.tbz2;.xz;.txz;\n  .lzh;.lha;.zt;.az; .xpi;.jar;.wim;.swm;.rpm;.xar;.deb;.dmg;.hfs;.cpio;.lzma;.lzma86;.split;",
            f = ".torrent;", p = ".idx;.smi;.sub;.psb;.ssa;.ass;.usf;.ssf;.srt;.sup",
            h = ".3gp;.asf;.avi;.divx;.f4v;.flv;.mkv;.mov;.movie;.mp4;.mpeg;.mpeg4;.mpg;.mpg2;.rm;.rmvb;.rp;.swf;.tp;.tp0;.ts;.wmv",
            m = ".exe;.com;.bat;.msi", g = ".wav;.flac;.mp3;.aac;.wma;.m4a;.mid;.ape;.ogg;.ra;.mod",
            _ = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.pdf;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;\n  .mef;.mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico",
            v = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.dot;.dotm;.dotx;.email;.rp;.pps",
            b = ".rar;.tar;.zip;.gzip;.cab;.uue;.arj;.bz2;.lzh;.jar;.ace;.iso;.7-zip;.7z",
            y = ".asf;.mpg;.rmvb;.rm;.wmv;.avi;.mp4;.mpeg;.mkv;.mov;.ts;.flv;.3gp;",
            R = ".exe;.com;.bat;.scr;.lnk;.pif;.wsh;", w = ".iso;";
        !function (e) {
            let t;

            function n(e) {
                let n = t.Unkown, i = r.extname(e);
                return null !== i && void 0 !== i && i.length >= 2 && (i = i.toLowerCase()), void 0 === i || "" === i || i.length < 2 ? n = t.Unkown : h.indexOf(i) > -1 ? n = t.Video : m.indexOf(i) > -1 ? n = t.Software : v.indexOf(i) > -1 ? n = t.Doc : g.indexOf(i) > -1 ? n = t.Music : _.indexOf(i) > -1 ? n = t.Pic : b.indexOf(i) > -1 && (n = t.Zip), i.length > 1 && ".z" === i.slice(0, 2) && /[0-9]+/.test(i.substring(2)) && (n = t.Zip), n
            }

            e.getTaskIcon = function (e, t, n) {
                n = n || "xly-type-";
                let h = "";
                do {
                    if (t === i.DownloadKernel.TaskType.Bt) {
                        h = "bt-file";
                        break
                    }
                    if (t === i.DownloadKernel.TaskType.Group) {
                        h = "group";
                        break
                    }
                    h = "unknown";
                    let n = r.extname(e);
                    if ("" === n || n.length < 2) break;
                    let m = (n = n.toLowerCase()).substring(1);
                    if (o.indexOf(m) > -1) {
                        h = "doc" === n ? "word" : m;
                        break
                    }
                    if (n += ";", a.indexOf(n) > -1) {
                        h = "video";
                        break
                    }
                    if (s.indexOf(n) > -1) {
                        h = "install", [".mds", ".bin", ".img"].indexOf(n) > -1 && (h = "iso");
                        break
                    }
                    if (l.indexOf(n) > -1) {
                        if (h = "doc", [".htm", ".html", ".mht"].indexOf(n) > -1) {
                            h = "link";
                            break
                        }
                        if ("docx" === n) {
                            h = "word";
                            break
                        }
                        if ("xlsx" === n) {
                            h = "xls";
                            break
                        }
                        if ("pptx" === n) {
                            h = "ppt";
                            break
                        }
                        break
                    }
                    if (c.indexOf(n) > -1) {
                        h = "music";
                        break
                    }
                    if (d.indexOf(n) > -1) {
                        h = "pic";
                        break
                    }
                    if (u.indexOf(n) > -1) {
                        h = "rar";
                        break
                    }
                    if (f.indexOf(n) > -1) {
                        h = "bt-link";
                        break
                    }
                    if (p.indexOf(n) > -1) {
                        h = "text";
                        break
                    }
                } while (0);
                return `${n}${h}`
            }, function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Video = 1] = "Video", e[e.Software = 2] = "Software", e[e.Doc = 3] = "Doc", e[e.Music = 4] = "Music", e[e.Pic = 5] = "Pic", e[e.Zip = 6] = "Zip", e[e.Bt = 7] = "Bt"
            }(t = e.FileExtType || (e.FileExtType = {})), e.getTaskFileType = function (e, n) {
                let i = t.Unkown;
                return void 0 === n && void 0 !== e && (n = r.extname(e)), null !== n && void 0 !== n && n.length >= 2 && (n = n.toLowerCase(), n += ";"), void 0 === n || "" === n || n.length < 3 ? i = t.Unkown : a.indexOf(n) > -1 ? i = t.Video : s.indexOf(n) > -1 ? i = t.Software : l.indexOf(n) > -1 ? i = t.Doc : c.indexOf(n) > -1 ? i = t.Music : d.indexOf(n) > -1 ? i = t.Pic : u.indexOf(n) > -1 ? i = t.Zip : f.indexOf(n) > -1 && (i = t.Bt), n.length > 1 && ".z" === n.slice(0, 2) && /[0-9]+/.test(n.substring(2)) && (i = t.Zip), i
            }, e.isVideoFileExt = function (e) {
                let t = !1;
                do {
                    if (null === e || void 0 === e || "" === e) break;
                    let n = r.extname(e);
                    if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                    n = n.toLowerCase(), n += ";", y.indexOf(n) > -1 && (t = !0)
                } while (0);
                return t
            }, e.isSubtitleExt = function (e) {
                let t = !1;
                do {
                    if (null === e || void 0 === e || "" === e) break;
                    let n = r.extname(e);
                    if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                    n = n.toLowerCase(), n += ";", p.indexOf(n) > -1 && (t = !0)
                } while (0);
                return t
            }, e.isExecutableExt = function (e) {
                let t = !1;
                do {
                    if (null === e || void 0 === e || "" === e) break;
                    let n = r.extname(e);
                    if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                    n = n.toLowerCase(), n += ";", R.indexOf(n) > -1 && (t = !0)
                } while (0);
                return t
            }, e.isIsoExt = function (e) {
                let t = !1;
                do {
                    if (null === e || void 0 === e || "" === e) break;
                    let n = r.extname(e);
                    if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                    n = n.toLowerCase(), n += ";", w.indexOf(n) > -1 && (t = !0)
                } while (0);
                return t
            }, e.getGroupFileType = n, e.getDefaultGroupPrefix = function (e) {
                let r = "任务组";
                do {
                    if (void 0 === e || null === e || 0 === e.length) break;
                    let i = [];
                    for (let e = 0; e < 7; e++) i[e] = 0;
                    for (let t of e) {
                        let e = n(t);
                        i[e] = i[e] + 1
                    }
                    let o = t.Unkown;
                    for (let e = 1; e < i.length; e++) i[e] > i[o] && (o = e);
                    o === t.Video ? r = "视频任务组" : o === t.Software ? r = "程序任务组" : o === t.Music ? r = "音乐任务组" : o === t.Pic ? r = "图片任务组" : o === t.Doc ? r = "文档任务组" : o === t.Zip && (r = "压缩包任务组")
                } while (0);
                return r
            }, e.compareVersion = function (e, t) {
                let n = -2;
                do {
                    if (null === e || void 0 === e || "" === e || null === t || void 0 === t || "" === t) break;
                    let r = 0, i = 0, o = 0, a = 0, s = 0, l = 0, c = 0, d = 0, u = e.split(/\./);
                    if (null === u || void 0 === u || u.length < 3) break;
                    if (r = Number(u[0]), i = Number(u[1]), o = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (a = Number(u[3])), null === (u = t.split(/\./)) || void 0 === u || u.length < 3) break;
                    if (s = Number(u[0]), l = Number(u[1]), c = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (d = Number(u[3])), s > r) {
                        n = 1;
                        break
                    }
                    if (s < r) {
                        n = -1;
                        break
                    }
                    if (l > i) {
                        n = 1;
                        break
                    }
                    if (l < i) {
                        n = -1;
                        break
                    }
                    if (c > o) {
                        n = 1;
                        break
                    }
                    if (c < o) {
                        n = -1;
                        break
                    }
                    if (0 !== a) {
                        if (d > a) {
                            n = 1;
                            break
                        }
                        if (d < a) {
                            n = -1;
                            break
                        }
                    }
                    n = 0
                } while (0);
                return n
            }
        }(t.TaskUtilHelper || (t.TaskUtilHelper = {}))
    }, 6: function (e, t) {
        e.exports = require("util")
    }, 7: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((r = r.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(1).default.getLogger("async-remote-call"), o = n(35), a = n(14), s = n(6);
        t.asyncRemoteCall = new class extends a.EventEmitter {
            constructor() {
                super(), this.mapObj = new Map, this.mapObjIniting = new Map, "renderer" !== process.type && i.error('can not import "renderer-process-call" module in non-renderer process', process.type)
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
                    return o.global.process.__resolve()
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
                    })) : (this.mapObjIniting.set("currentWebContents", !0), e = yield o.getCurrentWebContents().__resolve(), this.mapObjIniting.set("currentWebContents", !1), this.emit("OnInitCurrentWebContents", e), this.listeners("OnInitCurrentWebContents").forEach(e => {
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
                    })) : (this.mapObjIniting.set("currentWindow", !0), e = yield o.getCurrentWindow().__resolve(), this.mapObjIniting.set("currentWindow", !1), this.emit("OnInitCurrentWindow", e), this.listeners("OnInitCurrentWindow").forEach(e => {
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
                    })) : (this.mapObjIniting.set(e, !0), t = yield o.electron[e].__resolve(), this.mapObjIniting.set(e, !1), this.emit(e, t), this.listeners(e).forEach(t => {
                        this.removeListener(e, t)
                    })), this.mapObj.set(e, t)), t
                })
            }
        }
    }, 8: function (e, t) {
        e.exports = vendor_e17de3ecacc329e8b720
    }, 809: function (e, t, n) {
        n(43), e.exports = n(810)
    }, 810: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(33), i = n(4);
        let o = String(Math.random()).replace(/\D/, "");
        i.client.start({name: `notificationRendererContext${o}`}), r.CommonIPCRenderer.rendererCommunicator.initialize("notificationRendererContext"), r.CommonIPCRenderer.rendererCommunicator.connect();
        const a = n(46), s = n(37), l = n(498);
        n(56);
        const c = n(811), d = n(57);
        n(55);
        const u = n(1).default.getLogger("NotificationRenderer");
        a.PerformanceMonitorStatNS.init("notification-renderer"), s.default.use(l.default), new s.default({
            components: {App: c.default},
            render: e => e("app")
        }).$mount("#app"), d.ThunderToolsNS.enableDevTools().catch(e => {
            u.warning(e)
        })
    }, 811: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(504), i = n(397);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(o);
        n(499), n(819), n(820), n(821), n(822), n(823);
        var a = n(0), s = Object(a.a)(i.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src\\notification-renderer\\app.vue", t.default = s.exports
    }, 812: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(555), i = n(399);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(o);
        var a = n(0), s = Object(a.a)(i.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src\\notification-renderer\\views\\download-complete.vue", t.default = s.exports
    }, 813: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(556), i = n(401);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(o);
        var a = n(0), s = Object(a.a)(i.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src\\notification-renderer\\views\\download-fail.vue", t.default = s.exports
    }, 814: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(557), i = n(403);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(o);
        n(815);
        var a = n(0), s = Object(a.a)(i.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src\\notification-renderer\\views\\community-tips.vue", t.default = s.exports
    }, 815: function (e, t, n) {
        "use strict";
        var r = n(1034);
        n.n(r).a
    }, 816: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(558), i = n(405);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(o);
        var a = n(0), s = Object(a.a)(i.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src\\notification-renderer\\views\\advertisement-tips.vue", t.default = s.exports
    }, 817: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t;
            !function (e) {
                e.DownloadComplete = "DownloadComplete", e.DownloadFail = "DownloadFail", e.ConsumptionTips = "ConsumptionTips", e.CommunityTips = "CommunityTips", e.AdvertisementTips = "AdvertisementTips", e.AdvertisementWebPageTips = "AdvertisementWebPageTips"
            }(t = e.TipsType || (e.TipsType = {}))
        }(t.Notification || (t.Notification = {}))
    }, 818: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(559), i = n(407);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(o);
        var a = n(0), s = Object(a.a)(i.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src\\notification-renderer\\views\\consumption-tips.vue", t.default = s.exports
    }, 819: function (e, t, n) {
        "use strict";
        var r = n(1039);
        n.n(r).a
    }, 820: function (e, t, n) {
        "use strict";
        var r = n(1041);
        n.n(r).a
    }, 821: function (e, t, n) {
        "use strict";
        var r = n(1043);
        n.n(r).a
    }, 822: function (e, t, n) {
        "use strict";
        var r = n(1045);
        n.n(r).a
    }, 823: function (e, t, n) {
        "use strict";
        var r = n(1047);
        n.n(r).a
    }, 9: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            return require(e)
        }
    }
});
//# sourceMappingURL=renderer.js.map