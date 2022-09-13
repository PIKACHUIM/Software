/*! Thunder 11 BY LUOCHENZHIMU */
/*! Last updated on 2020/08/22 */
/*! https://www.luochenzhimu.com */
module.exports = function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {i, l: !1, exports: {}};
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
            return e[t]
        }.bind(null, o));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 868)
}({
    0: function (e, t, n) {
        "use strict";

        function i(e, t, n, i, o, r, s, a) {
            var l, c = "function" == typeof e ? e.options : e;
            if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), i && (c.functional = !0), r && (c._scopeId = "data-v-" + r), s ? (l = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
            }, c._ssrRegister = l) : o && (l = a ? function () {
                o.call(this, this.$root.$options.shadowRoot)
            } : o), l) if (c.functional) {
                c._injectStyles = l;
                var u = c.render;
                c.render = function (e, t) {
                    return l.call(t), u(e, t)
                }
            } else {
                var d = c.beforeCreate;
                c.beforeCreate = d ? [].concat(d, l) : [l]
            }
            return {exports: e, options: c}
        }

        n.d(t, "a", function () {
            return i
        })
    }, 1: function (e, t, n) {
        e.exports = n(8)(131)
    }, 100: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(36), r = n(19), s = n(13), a = n(1).default.getLogger("Thunder.base.tools-utilities"), l = n(2),
            c = n(9).default(l.join(__rootDir, "../bin/ThunderHelper.node"));
        !function (e) {
            function t(e) {
                return i(this, void 0, void 0, function* () {
                    let t;
                    return t = e && (yield s.FileSystemAWNS.existsAW(e)) ? new Promise(t => {
                        c.asyncCalcuteFileMD5(e, (e, n) => {
                            e ? (n = n.toUpperCase(), t(n)) : t(void 0)
                        })
                    }) : new Promise(e => {
                        e(void 0)
                    })
                })
            }

            e.genarateMd5 = function (e) {
                let t = void 0, n = o.createHash("md5");
                return null !== n && (t = n.update(e).digest("hex")), t
            }, e.matchFileMd5 = function (e, n) {
                return i(this, void 0, void 0, function* () {
                    let i = !1, o = yield t(e);
                    return void 0 !== o && o === n.toUpperCase() && (a.information("check full md5 sucessful"), i = !0), i
                })
            }, e.calculateFileMd5Ex = function (e) {
                return i(this, void 0, void 0, function* () {
                    let t;
                    if (e && (yield s.FileSystemAWNS.existsAW(e))) {
                        let n = r.createReadStream(e), i = o.createHash("md5");
                        n.on("data", e => {
                            i.update(e)
                        }), t = new Promise(e => {
                            n.on("end", () => {
                                let t = i.digest("hex");
                                t = t.toUpperCase(), e(t)
                            })
                        })
                    } else t = new Promise(e => {
                        e(void 0)
                    });
                    return t
                })
            }, e.calculateFileMd5 = t, e.encryptBuffer = function (e, t) {
                let n = null;
                try {
                    let i = o.createCipheriv("aes-128-ecb", t, ""), r = i.update(e), s = i.final();
                    n = Buffer.concat([r, s])
                } catch (e) {
                    a.error("encryptBuffer", e)
                }
                return n
            }, e.decryptBuffer = function (e, t) {
                let n = null;
                try {
                    let i = o.createDecipheriv("aes-128-ecb", t, ""), r = i.update(e), s = i.final();
                    n = Buffer.concat([r, s])
                } catch (e) {
                    a.error("decryptBuffer", e)
                }
                return n
            }, e.encryptSha1Buffer = function (e) {
                let t = null;
                try {
                    t = o.createHash("sha1").update(e).digest("hex")
                } catch (e) {
                    a.error("encryptSha1Buffer", e)
                }
                return t
            }, e.encryptHmacBuffer = function (e, t, n, i = "hex") {
                let r = null;
                try {
                    r = o.createHmac(e, t).update(n, "utf8").digest(i)
                } catch (e) {
                    a.error("encryptSha1Buffer", e)
                }
                return r
            }, e.setForegroundWindow = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    if (null !== e && null !== t) {
                        let n = void 0, o = [];
                        "renderer" === process.type ? (n = yield t.getNativeWindowHandle(), o = yield t.getChildWindows()) : (n = t.getNativeWindowHandle(), o = t.getChildWindows());
                        let r = [];
                        for (let e = 0; e < o.length; ++e) {
                            let t = o[e], n = !1;
                            "renderer" === process.type ? (yield t.isDestroyed()) || (n = yield t.isAlwaysOnTop()) : t.isDestroyed() || (n = t.isAlwaysOnTop()), n && r.push(t)
                        }
                        let s = n.readUIntLE(0, 4);
                        e.setForegroundWindow(s) ? a.information("setForegroundWindow sucessful") : a.information("setForegroundWindow failed"), r.forEach(e => i(this, void 0, void 0, function* () {
                            "renderer" === process.type ? (yield e.isDestroyed()) || e.setAlwaysOnTop(!0).catch() : e.isDestroyed() || e.setAlwaysOnTop(!0)
                        }))
                    }
                })
            }
        }(t.ToolsUtilitiesAWNS || (t.ToolsUtilitiesAWNS = {}))
    }, 11: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(3), r = n(2), s = n(1), a = n(13), l = n(22), c = s.default.getLogger("Thunder.Util"),
            u = "Thunder Network\\Thunder7.9\\";

        function d(e) {
            let t = e;
            return 0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 ? t = e.substring(1, e.length - 1) : 0 === e.indexOf("'") && e.lastIndexOf("'") === e.length - 1 && (t = e.substring(1, e.length - 1)), t
        }

        !function (e) {
            function t() {
                let e = l.ThunderHelper.getSystemTempPath(), t = l.ThunderHelper.getLogicalDriveStrings(), n = 0;
                for (let i = 0; i < t.length; i++) {
                    if (l.ThunderHelper.getDriveType(t[i]) === l.ThunderHelper.DriverType.DRIVE_FIXED) {
                        let o = l.ThunderHelper.getDriveInfo(t[i]);
                        n < o.freeBytes && t[i] !== e && (n = o.freeBytes, e = t[i])
                    }
                }
                return e.substring(0, 1) + ":\\迅雷下载"
            }

            function s(e) {
                let t = (e.style.webkitTransform || getComputedStyle(e, "").getPropertyValue("-webkit-transform") || e.style.transform || getComputedStyle(e, "").getPropertyValue("transform")).match(/\-?[0-9]+\.?[0-9]*/g);
                return {x: parseInt(t && (t[12] || t[4]) || "0", 10), y: parseInt(t && (t[13] || t[5]) || "0", 10)}
            }

            e.formatSize = function (e, t) {
                0 === t || (t = t || 2);
                let n = "0B";
                if ("number" == typeof e && e > 0) {
                    let i = ["B", "KB", "MB", "GB", "TB"], o = 0, r = e;
                    for (; r >= 1e3 && !(o >= 4);) r /= 1024, o += 1;
                    n = -1 === String(r).indexOf(".") ? r + i[o] : r.toFixed(t) + i[o]
                }
                return n
            }, e.formatSizeCustom = function (e, t = 2, n = 5) {
                let i = "0B";
                if ("number" == typeof e && e > 0) {
                    let o = ["B", "KB", "MB", "GB", "TB"], r = 0, s = e;
                    for (; s >= 1e3 && !(r >= 4);) s /= 1024, r += 1;
                    if (-1 === String(s).indexOf(".")) i = s + o[r]; else {
                        let e = s.toFixed(t);
                        e.length <= n ? i = "KB" !== o[r] && "MB" !== o[r] || 1 === t ? e + o[r] : s.toFixed(1) + o[r] : ("." === (e = e.substr(0, n))[n - 1] && (e = e.substr(0, n - 1)), i = e + o[r])
                    }
                }
                return i
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
                let t = 0, n = "", i = !1, o = [], r = e.length;
                for (let s = 0; s < r; s++) {
                    let a = e[s];
                    if ('"' !== a && "'" !== a || ("" === n ? (i = !0, n = a) : n === a && (i = !1, n = "")), " " !== a || i || s === r - 1) {
                        if (s === r - 1) {
                            let n = e.substring(t);
                            "" !== n.trim() && o.push(d(n))
                        }
                    } else {
                        let n = e.substring(t, s);
                        "" !== n.trim() && o.push(d(n)), t = s + 1
                    }
                }
                return o
            }, e.getThunderTempPath = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    const i = yield Promise.resolve().then(() => n(12));
                    let o = r.join(i.tmpdir(), u);
                    return t && (o = r.join(o, t)), void 0 !== e && e && (yield a.FileSystemAWNS.mkdirsAW(o)), o
                })
            }, e.setQueryString = function (e, t) {
                return Object.keys(t).forEach((n, i) => {
                    e += 0 === i ? "?" : "&", e += `${n}=${t[n]}`
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
                let i = /\\/, o = t.split(" ");
                if (0 === (o = o.filter(e => e.trim().length > 0)).length) return e;
                for (let t = 0; t < o.length; t++) if (o[t].search(i) > 0) return e;
                n = void 0 === n || null === n ? "#FF0000" : n;
                let r = "", s = ["\\[", "\\^", "\\*", "\\(", "\\)", "\\|", "\\?", "\\$", "\\.", "\\+"], a = "", l = "|";
                for (let e = 0; e < o.length; e++) {
                    for (let t = 0; t < s.length; t++) {
                        let n = new RegExp(s[t], "g");
                        o[e] = o[e].replace(n, s[t])
                    }
                    e === o.length - 1 && (l = ""), a = a.concat(o[e], l)
                }
                let c = new RegExp(a, "gi");
                return r = e.replace(c, e => '<span style= "color:' + n + '">' + e + "</span>")
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
                let n = e.split("."), i = t.split("."), o = 0;
                for (let e = 0; e < n.length; e++) {
                    if (Number(n[e]) - Number(i[e]) > 0) {
                        o = 1;
                        break
                    }
                    if (Number(n[e]) - Number(i[e]) < 0) {
                        o = -1;
                        break
                    }
                }
                return o
            }, e.throttle = function (e, t) {
                let n, i = 0;
                return (...o) => {
                    const r = Date.now();
                    clearTimeout(n), r - i > t ? (e(...o), i = r) : n = setTimeout(() => {
                        e(...o), i = r
                    }, t)
                }
            }, e.debounce = function (e, t) {
                let n = null;
                return (...i) => {
                    n && clearTimeout(n), n = setTimeout(() => {
                        e(...i)
                    }, t)
                }
            }, e.getElementFixed = function (e) {
                let t = e.offsetLeft, n = e.offsetTop, i = e.offsetParent;
                for (; null !== i;) {
                    let e = s(i);
                    t += i.offsetLeft + e.x, n += i.offsetTop + e.y, i = i.offsetParent
                }
                return {x: t, y: n}
            }, e.escapeHTML = function (e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
            }, e.unescapeHTML = function (e) {
                return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'")
            }, e.isValidPath = function (e) {
                let t = !1;
                do {
                    let n = "", i = "";
                    if (/^[a-zA-Z]:\\/.test(e)) n = e.slice(3); else {
                        if (0 !== e.indexOf("\\\\")) break;
                        {
                            let t = e.indexOf("\\", 2);
                            if (-1 === t || t === e.length - 1) break;
                            if ("" === (i = (n = e.slice(2)).substr(0, t - 2))) break
                        }
                    }
                    if (/[\*\"<>\?:\|]/i.test(n)) break;
                    if (e.length > 256) break;
                    if ("" === i) {
                        t = !0;
                        break
                    }
                    let o = i.indexOf(".ipv6-literal.net");
                    -1 !== o ? (-1 !== (o = (i = i.substr(0, o)).indexOf("%")) && (i = i.substr(0, o)), i = i.replace(/\-/g, ":"), /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(i) && (t = !0)) : /(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/.test(i) && (t = !0)
                } while (0);
                return t
            };
            let h = void 0;

            function f(e, t = "normal 12px sans-serif") {
                h || (h = document.createElement("canvas"));
                let n = h.getContext("2d");
                return n.font = t, n.measureText(e).width
            }

            function p(e, t, n = "normal 12px sans-serif", i = 1) {
                function o(e, t, i, r, s) {
                    let a = -1;
                    do {
                        if (e > t) {
                            a = t;
                            break
                        }
                        let l = Math.round((e + t) / 2), c = f(`${i.substr(0, l)}...${r}`, n);
                        if (s === c) {
                            a = l;
                            break
                        }
                        if (s > c) {
                            if (Math.round(s) === Math.round(c)) {
                                a = l;
                                break
                            }
                            a = o(l + 1, t, i, r, s)
                        } else if (c > s) {
                            if (Math.round(s) === Math.round(c)) {
                                a = l - 1;
                                break
                            }
                            a = o(e, l - 1, i, r, s)
                        }
                    } while (0);
                    return a
                }

                let s = e;
                do {
                    let a = t.offsetWidth * i;
                    if (a > f(e, n)) break;
                    let l = r.extname(e);
                    "" !== l && (l = l.substring(1));
                    let c = e.substr(0, e.length - l.length - 1);
                    if (!c) break;
                    let u = o(0, c.length, c, l, a);
                    if (-1 === u) break;
                    s = `${c.substr(0, u - 2 * (i - 1))}...${l}`
                } while (0);
                return s
            }

            e.getTextWidth = f, e.getOmitName = p, e.getOmitNameMultiLine = function (e, t, n) {
                return p(e, t, "normal 12px microsoft yahei", 2)
            }, e.setTimeoutAw = function (e, t) {
                return new Promise((n, i) => {
                    setTimeout(() => {
                        t && t(), n()
                    }, e)
                })
            }
        }(t.ThunderUtil || (t.ThunderUtil = {}))
    }, 12: function (e, t) {
        e.exports = require("os")
    }, 127: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(4);
        !function (e) {
            e.getValue = function (e, t, n) {
                return i(this, void 0, void 0, function* () {
                    return yield o.client.callServerFunction("GetConfigValue", e, t, n)
                })
            }, e.setValue = function (e, t, n) {
                return i(this, void 0, void 0, function* () {
                    yield o.client.callServerFunction("SetConfigValue", e, t, n)
                })
            }
        }(t.ConfigHelperNS || (t.ConfigHelperNS = {}))
    }, 13: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(19), r = n(2), s = n(6).promisify, a = n(1).default.getLogger("Thunder.base.fs-utilities");
        !function (e) {
            function t(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = s(o.access);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            a.information(e)
                        }
                    }
                    return t
                })
            }

            function l(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = s(o.mkdir);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function c(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = s(o.rmdir);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function u(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = s(o.unlink);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function d(e) {
                return i(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = s(o.readdir);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function h(e) {
                return i(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = s(o.lstat);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function f(e, t) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e && void 0 !== t) {
                        let i = r.join(e, t), o = yield h(i);
                        n = null !== o && o.isDirectory() ? yield p(i) : yield u(i)
                    }
                    return n
                })
            }

            function p(e) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e) {
                        if (yield t(e)) {
                            n = !0;
                            let t = (yield d(e)) || [];
                            for (let i = 0; i < t.length; i++) n = (yield f(e, t[i])) && n;
                            (n || 0 === t.length) && (n = (yield c(e)) && n)
                        }
                    }
                    return n
                })
            }

            function m(e) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    return a.information("mkdirsAW", e), void 0 !== e && ((yield t(e)) ? n = !0 : r.dirname(e) === e ? n = !1 : (yield m(r.dirname(e))) && (n = yield l(e))), n
                })
            }

            function g(e, n) {
                return i(this, void 0, void 0, function* () {
                    let i;
                    if (e.toLowerCase() !== n.toLowerCase() && (yield t(e))) {
                        let t = o.createReadStream(e), r = o.createWriteStream(n);
                        i = new Promise(e => {
                            t.pipe(r).on("finish", () => {
                                e(!0)
                            })
                        })
                    } else i = new Promise(e => {
                        e(!1)
                    });
                    return i
                })
            }

            e.readFileAW = function (e) {
                return i(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = s(o.readFile);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }, e.writeFileAW = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e && null !== t) {
                        const i = s(o.writeFile);
                        try {
                            yield i(e, t), n = !0
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return n
                })
            }, e.existsAW = t, e.dirExistsAW = function (e) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    do {
                        if (!(n = yield t(e))) break;
                        let i = yield h(e);
                        if (!i) break;
                        n = i.isDirectory()
                    } while (0);
                    return n
                })
            }, e.mkdirAW = l, e.rmdirAW = c, e.unlinkAW = u, e.readdirAW = d, e.lstatAW = h, e.rmdirsAW = p, e.mkdirsAW = m, e.renameAW = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    if (void 0 !== e && void 0 !== t) {
                        const n = s(o.rename);
                        try {
                            yield n(e, t)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                })
            }, e.copyFileAW = g, e.copyDirsAW = function e(n, o) {
                return i(this, void 0, void 0, function* () {
                    let i = !1, s = yield h(n);
                    if (s.isDirectory()) {
                        i = yield m(o);
                        let a = (yield d(n)) || [];
                        for (let l = 0; l < a.length; l++) {
                            let c = r.join(n, a[l]), u = r.join(o, a[l]);
                            (i = yield t(c)) && (i = (s = yield h(c)).isDirectory() ? yield e(c, u) : yield g(c, u))
                        }
                    }
                    return i
                })
            }, e.mkdtempAW = function () {
                return i(this, void 0, void 0, function* () {
                    let e = !1;
                    const t = s(o.mkdtemp), i = (yield Promise.resolve().then(() => n(12))).tmpdir();
                    try {
                        e = yield t(`${i}${r.sep}`)
                    } catch (e) {
                        a.warning(e)
                    }
                    return e
                })
            }, e.deleteEmptySubDirs = function (e, n) {
                return i(this, void 0, void 0, function* () {
                    let i = !0;
                    e = r.normalize(e), n = r.normalize(n), e.length > 3 && "\\" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), n.length > 3 && "\\" === n[n.length - 1] && (n = n.slice(0, n.length - 1));
                    do {
                        if (0 !== e.indexOf(n)) {
                            i = !1;
                            break
                        }
                        let o = e;
                        for (; o !== n;) {
                            if ((yield t(o)) && !(yield c(o))) {
                                i = !1;
                                break
                            }
                            o = r.dirname(o)
                        }
                    } while (0);
                    return i
                })
            }, e.getFileSize = function e(n) {
                return i(this, void 0, void 0, function* () {
                    let i = 0;
                    do {
                        if (!n) break;
                        if (!(yield t(n))) break;
                        let o = yield h(n);
                        if (o) if (o.isDirectory()) {
                            let t = yield d(n);
                            for (let o = 0; o < t.length; o++) i += (yield e(r.join(n, t[o])))
                        } else i = o.size
                    } while (0);
                    return i
                })
            }, e.isDirectoryEmptyAW = function (e, n = !0) {
                return i(this, void 0, void 0, function* () {
                    let i = !0;
                    do {
                        if (!e) {
                            i = !1;
                            break
                        }
                        if (!(yield t(e))) {
                            i = n;
                            break
                        }
                        let o = yield h(e);
                        if (!o) {
                            i = !1;
                            break
                        }
                        if (!o.isDirectory()) {
                            i = !1;
                            break
                        }
                        if ((yield d(e)).length > 0) {
                            i = !1;
                            break
                        }
                    } while (0);
                    return i
                })
            }
        }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
    }, 14: function (e, t) {
        e.exports = require("events")
    }, 15: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(2), r = n(9), s = n(1).default.getLogger("XLStat");
        let a = r.default(o.join(__rootDir, "../bin/ThunderHelper.node"));

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
                return t || (t = a.xlstat4), t
            }

            function o(e, t = "", o = "", r = 0, a = 0, c = 0, u = 0, d = "", h = 0) {
                return i(this, void 0, void 0, function* () {
                    let i = 0;
                    do {
                        if (void 0 === e) {
                            i = 1;
                            break
                        }
                        let f = l(d);
                        i = "browser" === process.type ? yield new Promise(s => {
                            i = n().asyncTrackEvent(e, t, o, r, a, c, u, f, h, e => {
                                s(e)
                            })
                        }) : n().trackEvent(e, t, o, r, a, c, u, f, h), s.information(e, t, o, r, a, c, u, f, h)
                    } while (0);
                    return i
                })
            }

            function r(e, t = 0) {
                do {
                    if (void 0 === e) break;
                    "browser" !== process.type && n().trackClick(e, t)
                } while (0)
            }

            e.asyncTrackEvent = o, e.trackEvent = function (e, t = "", n = "", i = 0, r = 0, s = 0, a = 0, l = "", c = 0) {
                o(e, t, n, i, r, s, a, l, c).catch()
            }, e.trackClick = r, e.trackShow = function (e, t = 0) {
                r(e, t)
            }, e.setUserID = function (e = 0, t = 0) {
                "browser" !== process.type && n().setUserID(e, t)
            }, e.initParam = function (e) {
                return i(this, void 0, void 0, function* () {
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
                return i(this, void 0, void 0, function* () {
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
    }, 150: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(34), o = n(54), r = n(1).default.getLogger("Thunder.shub-http.http-session"), s = n(63),
            a = n(11), {isDef: l} = a.ThunderUtil;
        var c;
        !function (e) {
            e.HTTP = "HTTP", e.HTTPS = "HTTPS"
        }(c = t.Protocol || (t.Protocol = {}));
        t.HttpSession = class {
            constructor() {
                this.mRetries = 0, this.mHost = void 0, this.mPort = void 0, this.mPath = void 0, this.mAuth = void 0, this.mAccept = void 0, this.mBody = null, this.mUrl = void 0, this.mCookie = void 0, this.mProtocol = c.HTTP, this.mTimeout = void 0, this.mCurRetries = 0
            }

            set host(e) {
                this.mHost = e
            }

            get host() {
                return this.mHost
            }

            set port(e) {
                this.mPort = e
            }

            get port() {
                let e = void 0;
                return e = l(this.mPort) ? this.mPort : this.protocol === c.HTTPS ? 443 : 80
            }

            set path(e) {
                this.mPath = e
            }

            get path() {
                return this.mPath
            }

            set url(e) {
                this.mUrl = e
            }

            get protocol() {
                return this.mProtocol
            }

            set protocol(e) {
                this.mProtocol = e
            }

            get url() {
                return this.mUrl
            }

            get cookie() {
                return this.mCookie
            }

            set cookie(e) {
                this.mCookie = e
            }

            set auth(e) {
                this.mAuth = e
            }

            get auth() {
                return this.mAuth
            }

            set accept(e) {
                this.mAccept = e
            }

            get accept() {
                return this.mAccept
            }

            set body(e) {
                this.mBody = e
            }

            get body() {
                return this.mBody
            }

            set retries(e) {
                this.mRetries = e
            }

            get retries() {
                return this.mRetries
            }

            set timeout(e) {
                this.mTimeout = e
            }

            get timeout() {
                return this.mTimeout
            }

            post(e, t) {
                do {
                    let n = this.body;
                    if (!n) {
                        r.information("body is empty"), t(null);
                        break
                    }
                    let i = this.auth, o = this.accept, s = {
                        hostname: this.host,
                        port: this.port,
                        path: this.path || "/",
                        method: "POST",
                        auth: i || void 0,
                        headers: {"Content-Length": n ? n.length : 0, Cookie: this.cookie || "", Accept: o || "*/*"}
                    };
                    r.verbose("option", s);
                    try {
                        this.postImpl(n, s, e, n => {
                            this.mCurRetries < this.retries ? (this.mCurRetries++, r.information("mCurRetries", this.mCurRetries), this.post(e, t)) : t(n)
                        })
                    } catch (e) {
                        r.warning("error ", e), t(null)
                    }
                } while (0)
            }

            get(e, t) {
                let n = null;
                if (this.url) {
                    let e = i.parse(this.url, !0);
                    e && "https:" === e.protocol ? this.protocol = c.HTTPS : this.protocol = c.HTTP, n = this.url
                } else {
                    let e = this.auth, t = this.accept;
                    n = {
                        hostname: this.host,
                        port: this.port,
                        path: this.path || "/",
                        method: "GET",
                        auth: e || void 0,
                        headers: {Cookie: this.cookie || "", Accept: t || "*/*"}
                    }
                }
                r.verbose("option", n);
                try {
                    this.getImpl(n, e, n => {
                        this.mCurRetries < this.retries ? (this.mCurRetries++, r.information("mCurRetries", this.mCurRetries), this.get(e, t)) : t(n)
                    })
                } catch (e) {
                    r.warning("error ", e), t(null)
                }
            }

            postImpl(e, t, n, i) {
                let a = (this.protocol === c.HTTPS ? s : o).request(t, e => {
                    let t = null;
                    e.on("data", e => {
                        t = t ? Buffer.concat([t, e]) : e
                    }), e.on("end", () => {
                        r.information("statusCode", e.statusCode), r.information("headers", e.headers), n({
                            statusCode: e.statusCode,
                            headers: e.headers,
                            body: t
                        })
                    })
                });
                a.on("error", e => {
                    i(e)
                }), a.on("timeout", () => {
                    a.abort()
                }), this.timeout && a.setTimeout(this.timeout), a.write(e), a.end()
            }

            getImpl(e, t, n) {
                (this.protocol === c.HTTPS ? s : o).get(e, e => {
                    let n = null;
                    e.on("data", e => {
                        n = n ? Buffer.concat([n, e]) : e
                    }), e.on("end", () => {
                        r.information("statusCode", e.statusCode), r.information("headers", e.headers), t({
                            statusCode: e.statusCode,
                            headers: e.headers,
                            body: n
                        })
                    })
                }).on("error", e => {
                    n(e)
                })
            }
        }
    }, 157: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t;
            !function (e) {
                e[e.Default = 0] = "Default", e[e.Vip = 1] = "Vip"
            }(t = e.SkinType || (e.SkinType = {})), e.defaultSkinInfo = {
                type: t.Default,
                id: 1,
                name: "默认皮肤"
            }, e.vipSkinInfo = {type: t.Vip, id: 2, name: "会员皮肤"}, e.cacheDir = `${__profilesDir}/suspension-skin`
        }(t.SuspensionSkinHelperNS || (t.SuspensionSkinHelperNS = {}))
    }, 158: function (e, t, n) {
        "use strict";
        var i = n(940);
        n.n(i).a
    }, 16: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t, n, i, o, r, s, a, l, c, u, d, h, f, p, m, g, _, v, b, T;
            !function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.FileOccupied = 211] = "FileOccupied", e[e.FileAccessDenied = 212] = "FileAccessDenied", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn", e[e.DownloadSDKCrash = 10001] = "DownloadSDKCrash", e[e.torrentFileNotExist = 10002] = "torrentFileNotExist"
            }(t = e.TaskError || (e.TaskError = {})), function (e) {
                e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
            }(n = e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
            }(i = e.TaskStatus || (e.TaskStatus = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
            }(o = e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
                e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
            }(r = e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.P2sp = 1] = "P2sp", e[e.Bt = 2] = "Bt", e[e.Emule = 3] = "Emule", e[e.Group = 4] = "Group", e[e.Magnet = 5] = "Magnet"
            }(s = e.TaskType || (e.TaskType = {})), function (e) {
                e.Unkown = "Unkown", e.Downloading = "Downloading", e.Completed = "Completed", e.Recycle = "Recycle"
            }(a = e.CategroyViewID || (e.CategroyViewID = {})), function (e) {
                e[e.Unknow = 0] = "Unknow", e[e.TaskCreated = 1] = "TaskCreated", e[e.InsertToCategoryView = 2] = "InsertToCategoryView", e[e.RemoveFromCategoryView = 3] = "RemoveFromCategoryView", e[e.StatusChanged = 4] = "StatusChanged", e[e.DetailChanged = 5] = "DetailChanged", e[e.ChannelInfoChanged = 6] = "ChannelInfoChanged", e[e.DcdnStatusChanged = 7] = "DcdnStatusChanged", e[e.TaskDescriptionChanged = 8] = "TaskDescriptionChanged", e[e.TaskUserRead = 9] = "TaskUserRead", e[e.TaskRenamed = 10] = "TaskRenamed", e[e.TaskMovedEnd = 11] = "TaskMovedEnd", e[e.TaskMovingStateChange = 12] = "TaskMovingStateChange", e[e.BtSubFileDetailChanged = 13] = "BtSubFileDetailChanged", e[e.BtSubFileLoaded = 14] = "BtSubFileLoaded", e[e.BtSubFileForbidden = 15] = "BtSubFileForbidden", e[e.BtSubFileDcdnStatusChanged = 16] = "BtSubFileDcdnStatusChanged", e[e.TaskCategoryMovedEnd = 17] = "TaskCategoryMovedEnd", e[e.GroupTaskSubFileDetailChanged = 18] = "GroupTaskSubFileDetailChanged", e[e.TaskDestroying = 19] = "TaskDestroying", e[e.TaskDestroyed = 20] = "TaskDestroyed"
            }(l = e.TaskEventType || (e.TaskEventType = {})), function (e) {
                e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.VirtualId = 2] = "VirtualId", e[e.SrcTotal = 3] = "SrcTotal", e[e.SrcUsing = 4] = "SrcUsing", e[e.FileSize = 5] = "FileSize", e[e.ReceivedSize = 6] = "ReceivedSize", e[e.DownloadSize = 7] = "DownloadSize", e[e.TotalDownloadSize = 8] = "TotalDownloadSize", e[e.CreateTime = 9] = "CreateTime", e[e.CompletionTime = 10] = "CompletionTime", e[e.DownloadingPeriod = 11] = "DownloadingPeriod", e[e.Progress = 12] = "Progress", e[e.RecycleTime = 13] = "RecycleTime", e[e.FileCreated = 14] = "FileCreated", e[e.Forbidden = 15] = "Forbidden", e[e.CategoryId = 16] = "CategoryId", e[e.UserRead = 17] = "UserRead", e[e.OpenOnComplete = 18] = "OpenOnComplete", e[e.GroupTaskId = 19] = "GroupTaskId", e[e.DownloadSubTask = 20] = "DownloadSubTask", e[e.NameType = 21] = "NameType", e[e.OwnerProduct = 22] = "OwnerProduct", e[e.FileIndex = 23] = "FileIndex", e[e.NameFixed = 24] = "NameFixed", e[e.ValidDownloadSize = 25] = "ValidDownloadSize", e[e.RealDownloadSize = 26] = "RealDownloadSize", e[e.ResourceLegal = 27] = "ResourceLegal", e[e.TaskType = 28] = "TaskType", e[e.ErrorCode = 29] = "ErrorCode", e[e.PlayPosition = 30] = "PlayPosition", e[e.Duration = 31] = "Duration", e[e.NumberEnd = 32] = "NumberEnd", e[e.BooleanStart = 4096] = "BooleanStart", e[e.Destroyed = 4097] = "Destroyed", e[e.Background = 4098] = "Background", e[e.Moving = 4099] = "Moving", e[e.BooleanEnd = 4100] = "BooleanEnd", e[e.StringStart = 8192] = "StringStart", e[e.TaskName = 8193] = "TaskName", e[e.SavePath = 8194] = "SavePath", e[e.RelativePath = 8195] = "RelativePath", e[e.TaskUrl = 8196] = "TaskUrl", e[e.RefUrl = 8197] = "RefUrl", e[e.Cid = 8198] = "Cid", e[e.Gcid = 8199] = "Gcid", e[e.Cookie = 8200] = "Cookie", e[e.ProductInfo = 8201] = "ProductInfo", e[e.Origin = 8202] = "Origin", e[e.Description = 8203] = "Description", e[e.UserData = 8204] = "UserData", e[e.OriginName = 8205] = "OriginName", e[e.HTTPContentType = 8206] = "HTTPContentType", e[e.CategoryViewId = 8207] = "CategoryViewId", e[e.YunTaskId = 8208] = "YunTaskId", e[e.StringEnd = 8209] = "StringEnd", e[e.ObjectStart = 12288] = "ObjectStart", e[e.ObjectEnd = 12289] = "ObjectEnd"
            }(c = e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo", e[e.ValidDownloadSize = 8388608] = "ValidDownloadSize", e[e.OriginName = 16777216] = "OriginName", e[e.HTTPContentType = 33554432] = "HTTPContentType", e[e.PlayPosition = 67108864] = "PlayPosition", e[e.Duration = 134217728] = "Duration", e[e.YunTaskId = 268435456] = "YunTaskId"
            }(u = e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown"
            }(d = e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown"
            }(h = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
                e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 4096] = "StringStart", e[e.FinalName = 4097] = "FinalName", e[e.RelativePath = 4098] = "RelativePath", e[e.FileName = 4099] = "FileName", e[e.FilePath = 4100] = "FilePath", e[e.Cid = 4101] = "Cid", e[e.Gcid = 4102] = "Gcid", e[e.UserRead = 4103] = "UserRead", e[e.PlayPosition = 4104] = "PlayPosition", e[e.Duration = 4105] = "Duration", e[e.StringEnd = 4106] = "StringEnd"
            }(f = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
                e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
            }(p = e.KeyType || (e.KeyType = {})), function (e) {
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
            }(T = e.XLResourceFrom || (e.XLResourceFrom = {}))
        }(t.DownloadKernel || (t.DownloadKernel = {}))
    }, 17: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2);
        let o, r = console;

        function s(e = 5) {
            let t = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i, n = /at\s+()(.*):(\d*):(\d*)/i,
                o = (new Error).stack.split("\n").slice(e + 1);
            o.shift();
            let r = [];
            return o.forEach((e, o) => {
                let s = t.exec(e) || n.exec(e), a = {};
                s && 5 === s.length && (a.method = s[1], a.path = s[2], a.line = s[3], a.pos = s[4], a.file = i.basename(a.path), r.push(a))
            }), r
        }

        if (o = "renderer" === process.type ? "[Renderer] [async-remote]:" : "browser" === process.type ? "[Browser] [async-remote]:" : `[${process.type}] [async-remote]`, t.traceback = function (e = 5) {
            return s(e).map(e => e.method + "@(" + e.file + ")").join(" <= ")
        }, t.time = function (...e) {
            r.time(...e)
        }, t.timeEnd = function (...e) {
            r.timeEnd(...e)
        }, t.trace = function (...e) {
            let t = s(), n = "";
            t[0] && t[0].method && (n = n), r.trace(o, ...e)
        }, t.info = function (...e) {
            let t = s(), n = "anonymous";
            t[0] && t[0].method && (n = n), r.info(o, "[" + n + "]", e.join(","))
        }, t.warn = function (...e) {
            let t = s(), n = "";
            t[0] && t[0].method && (n = n), r.warn("<WARN>" + o, "[" + n + "]", e.join(","))
        }, t.error = function (...e) {
            let t = s(), n = "";
            t[0] && t[0].method && (n = n), r.error("<ERROR>" + o, "[" + n + "]", e.join(","))
        }, t.log = function (...e) {
            r.log(o, ...e)
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
    }, 195: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(4);

        class r {
            constructor() {
                this.mPeerId = void 0, this.mUserId = "0", this.mSessionId = void 0, this.mIsLogin = !1, this.mIsVip = !1, this.mVipLevel = 0, this.mVasType = 0, this.mExpireDate = "", this.mThunderVersionStr = void 0, this.mThunderVersionNumber = void 0
            }

            get expireDate() {
                return this.mExpireDate
            }

            get thunderVersionNumber() {
                return this.mThunderVersionNumber
            }

            get thunderVersionString() {
                return this.mThunderVersionStr
            }

            get vasType() {
                return this.mVasType
            }

            get vipLevel() {
                return this.mVipLevel
            }

            get userId() {
                return this.mUserId
            }

            get isLogin() {
                return this.mIsLogin
            }

            get isVip() {
                return this.mIsVip
            }

            get isPlatinumVip() {
                return this.isVip && this.mVasType > 2
            }

            get isSuperVip() {
                return this.isVip && 5 === this.mVasType
            }

            getSessionId() {
                return i(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        this.mSessionId ? e(this.mSessionId) : o.client.callServerFunction("GetSessionID").then(t => {
                            this.mSessionId = t, e(this.mSessionId || "0")
                        }).catch()
                    })
                })
            }

            getPeerId() {
                return i(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        this.mPeerId ? e(this.mPeerId) : o.client.callServerFunction("GetPeerID").then(t => {
                            this.mPeerId = t, e(this.mPeerId || "")
                        }).catch()
                    })
                })
            }

            getUserinfo() {
                return i(this, void 0, void 0, function* () {
                    return yield o.client.callServerFunction("GetAllUserInfo")
                })
            }

            parseUserInfo() {
                return i(this, void 0, void 0, function* () {
                    let e = yield this.getUserinfo();
                    if (e) if (this.mIsLogin = !0, this.mUserId = e.userID || "0", e.vipList && e.vipList[0]) {
                        if (e.vipList[0].isVip) {
                            let t = Number(e.vipList[0].isVip).valueOf();
                            this.mIsVip = t > 0
                        } else this.mIsVip = !1;
                        e.vipList[0].vipLevel && (this.mVipLevel = Number(e.vipList[0].vipLevel).valueOf()), e.vipList[0].vasType && (this.mVasType = Number(e.vipList[0].vasType).valueOf()), e.vipList[0].expireDate && (this.mExpireDate = e.vipList[0].expireDate)
                    } else this.mIsVip = !1
                })
            }

            loadThunderVersion() {
                o.client.callServerFunction("GetThunderVersion").then(e => {
                    this.mThunderVersionStr = e, this.mThunderVersionNumber = 0;
                    let t = this.mThunderVersionStr.split(".");
                    if (t && 4 === t.length) {
                        let e = Number(t[0]).valueOf(), n = Number(t[1]).valueOf(), i = Number(t[2]).valueOf(), o = 128;
                        this.mThunderVersionNumber = o * Math.pow(2, 24) + e * Math.pow(2, 16) + n * Math.pow(2, 8) + i
                    }
                }).catch()
            }

            onLogin() {
                return i(this, void 0, void 0, function* () {
                    this.clear(), yield this.parseUserInfo()
                })
            }

            onLogout() {
                this.clear()
            }

            clear() {
                this.mUserId = "0", this.mSessionId = void 0, this.mIsVip = !1, this.mIsLogin = !1, this.mVasType = 0, this.mVipLevel = 0
            }
        }

        t.UserHelper = r, function (e) {
            const t = new r;
            e.getUserHelper = function () {
                return t
            }
        }(t.UserHelperNS || (t.UserHelperNS = {}))
    }, 196: function (e, t, n) {
        "use strict";
        var i = n(923);
        n.n(i).a
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
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(2), r = n(23), s = n(12), a = n(16),
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
                if (t === a.DownloadKernel.TaskType.Unkown && function (e) {
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
                    n || (n = /^ftp:\/\/.*?\[(.+?)\].*/.exec(e)), n && n[1] && r.isIPv6(n[1]) && (t = a.DownloadKernel.TaskType.P2sp)
                }
                return t
            }, e.extractIcon = function (e, t) {
                return l.extractIcon(e, t)
            }, e.isWindow7 = function () {
                return 1 === l.isWin7()
            }, e.isWindow8OrLater = function () {
                let e = !1;
                do {
                    let t = s.release();
                    if (!t) break;
                    let n = t.indexOf(".", 0);
                    if (n < 0) break;
                    let i = t.substring(0, n);
                    if (!i) break;
                    let o = parseInt(i, 10);
                    o && o >= 8 && (e = !0)
                } while (0);
                return e
            }, e.isWindows10 = function () {
                let e = !1;
                do {
                    let t = s.release();
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
                return i(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        l.getAppList(t => {
                            e(t)
                        })
                    })
                })
            }, e.isSSD = function () {
                return i(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        l.isSSD((t, n) => {
                            e(n)
                        })
                    })
                })
            }, e.getMemoryInfo = function () {
                return i(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        l.getMemoryInfo((t, n) => {
                            e({totalPhy: t, totalVir: n})
                        })
                    })
                })
            }, e.getHardDiskSpaceList = function () {
                return i(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        l.getHardDiskSpaceList(t => {
                            e(t)
                        })
                    })
                })
            }, e.getCpuList = function () {
                return i(this, void 0, void 0, function* () {
                    return new Promise(e => {
                        l.getCpuList(t => {
                            e(t)
                        })
                    })
                })
            }, e.getFixedDriveMediaType = function (e) {
                return i(this, void 0, void 0, function* () {
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
        const i = n(12), o = n(2);
        t.getDefaultPrex = function () {
            return o.basename(process.execPath, ".exe")
        }, t.getSockPath = function (e) {
            const t = i.tmpdir();
            let n = e;
            e || (n = o.basename(process.execPath, ".exe"));
            let r = o.join(t, `${n}-xunlei-node-net-ipc-{FD196984-2591-4588-AA6F-5C8AC1266290}.sock`);
            return "win32" === process.platform && (r = "\\\\.\\pipe\\" + (r = (r = r.replace(/^\//, "")).replace(/\//g, "-"))), r
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
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(2), r = n(9), s = n(13), a = r.default(o.join(__rootDir, "../bin/ThunderHelper.node"));
        !function (e) {
            function t() {
                return i(this, void 0, void 0, function* () {
                    let e = !0;
                    do {
                        0;
                        let t = o.resolve(__rootDir, "../../log.ini");
                        if (!(yield s.FileSystemAWNS.existsAW(t))) {
                            e = !1;
                            break
                        }
                        e = "1" === a.readINI(t, "Log", "enable")
                    } while (0);
                    return e
                })
            }

            e.isDevToolsEnable = function () {
                return i(this, void 0, void 0, function* () {
                    return t()
                })
            }, e.isLogEnable = t, e.getLogOutput = function () {
                return i(this, void 0, void 0, function* () {
                    let e = process.env.TL_OUTPUT;
                    do {
                        if (e && "" !== e) break;
                        let t = o.resolve(__rootDir, "../../log.ini");
                        if (!(yield s.FileSystemAWNS.existsAW(t))) break;
                        e = a.readINI(t, "Log", "output")
                    } while (0);
                    return e
                })
            }
        }(t.DevEnvHelperNS || (t.DevEnvHelperNS = {}))
    }, 28: function (e, t, n) {
        "use strict";
        var i;
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t, n;
            !function (e) {
                e.require = "AR_BROWSER_REQUIRE", e.builtIn = "AR_BROWSER_GET_BUILTIN", e.global = "AR_BROWSER_GET_GLOBAL", e.functionCall = "AR_BROWSER_FUNCTION_CALL", e.construct = "AR_BROWSER_CONSTRUCTOR", e.memberConstruct = "AR_BROWSER_MEMBER_CONSTRUCTOR", e.memberCall = "AR_BROWSER_MEMBER_CALL", e.memberSet = "AR_BROWSER_MEMBER_SET", e.memberGet = "AR_BROWSER_MEMBER_GET", e.currentWindow = "AR_BROWSER_CURRENT_WINDOW", e.currentWebContents = "AR_BROWSER_CURRENT_WEB_CONTENTS", e.clientWebContents = "AR_BROWSER_CLIENT_WEB_CONTENTS", e.sync = "AR_BROWSER_SYNC", e.contextRelease = "AR_BROWSER_CONTEXT_RELEASE"
            }(t = e.browser || (e.browser = {})), function (e) {
                e.requireReturn = "AR_RENDERER_REQUIRE_RETURN", e.getBuiltInReturn = "AR_RENDERER_BUILTIN_RETURN", e.getGlobalReturn = "AR_RENDERER_GLOBAL_RETURN", e.functionCallReturn = "AR_RENDERER_FUNCTION_CALL_RETURN", e.memberConstructReturn = "AR_RENDERER_MEMBER_CONSTRUCTOR_RETURN", e.constructReturn = "AR_RENDERER_CONSTRUCTOR_RETURN", e.memberCallReturn = "AR_RENDERER_MEMBER_CALL_RETURN", e.memberSetReturn = "AR_RENDERER_MEMBER_SET_RETURN", e.memberGetReturn = "AR_RENDERER_MEMBER_GET_RETURN", e.currentWindowReturn = "AR_BROWSER_CURRENT_WINDOW_RETURN", e.currentWebContentsReturn = "AR_RENDERER_CURRENT_WEB_CONTENTS_RETURN", e.clientWebContentsReturn = "AR_RENDERER_CLIENT_WEB_CONTENTS_RETURN", e.syncReturn = "AR_RENDERER_SYNC_RETURN", e.callback = "AR_RENDERER_CALLBACK"
            }(n = e.renderer || (e.renderer = {}))
        }(i || (i = {})), t.default = i
    }, 29: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(6), r = n(20), s = n(21);
        !function (e) {
            e.mainProcessContext = "main-process", e.mainRendererContext = "main-renderer", e.mainPageWebviewRendererContext = "main-page-webview-renderer", e.newTaskRendererContext = "new-task-renderer", e.preNewTaskRendererContext = "pre-new-task-renderer", e.loginRendererContext = "login-renderer";

            class t {
                constructor() {
                    this.isConnected = !1, this.isOnIPCEvent = !1, this.rendererInfos = [], this.listeners = new Map, t.intervalIPCModuleMsgs = [s.CommonIPCMessage.msgIPCRendererConnect, s.CommonIPCMessage.msgIPCRendererDisconnect]
                }

                onMessage(e, t) {
                    do {
                        if (!o.isString(e) || 0 === e.length) {
                            r.error("msgName is null");
                            break
                        }
                        if (o.isNullOrUndefined(t)) {
                            r.error("listener is null");
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
                    i.ipcMain.on(s.CommonIPCMessage.msgIPCSendToMain, (e, t) => {
                        let n = void 0;
                        do {
                            if (o.isNullOrUndefined(t)) {
                                r.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                r.warning("hasnot been connected yet");
                                break
                            }
                            let i = t.msg.name;
                            if (this.isIPCModuleIntervalMsg(i)) {
                                r.information(`IPC module interval msg : ${i}`);
                                let o = this.handleIPCModuleIntervalMsg(e.sender, t);
                                if (n = o[1], !o[0]) break;
                                r.information("need to dispatch msg:" + i)
                            }
                            o.isNullOrUndefined(n) ? n = this.NotifyListener(t) : this.NotifyListener(t)
                        } while (0);
                        o.isNullOrUndefined(n) || (e.returnValue = n), t = null
                    })
                }

                ListenSendToRendererMsg(e) {
                    (e ? i.ipcMain : i.ipcRenderer).on(s.CommonIPCMessage.msgIPCSendToRenderer, (t, n) => {
                        let i = void 0;
                        do {
                            if (o.isNullOrUndefined(n)) {
                                r.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                r.warning("hasnot been connected yet");
                                break
                            }
                            let s = n.msg.name;
                            if (this.isIPCModuleIntervalMsg(s)) {
                                r.information(`IPC module interval msg : ${s}`);
                                let e = this.handleIPCModuleIntervalMsg(t.sender, n);
                                if (i = e[1], !e[0]) break;
                                r.information("need to dispatch msg:" + s)
                            }
                            e ? (r.information("is main, handle forward msg"), this.handleForwardRendererToRendererMsg(n)) : (r.information("is renderer, handle business msg"), o.isNullOrUndefined(i) ? i = this.NotifyListener(n) : this.NotifyListener(n))
                        } while (0);
                        o.isNullOrUndefined(i) || (t.returnValue = i), n = null
                    })
                }

                isIPCModuleIntervalMsg(e) {
                    for (let n of t.intervalIPCModuleMsgs) if (e === n) return !0;
                    return !1
                }

                handleIPCModuleIntervalMsg(e, t) {
                    let n = [!1, void 0];
                    do {
                        let i = t.msg.name;
                        if (i === s.CommonIPCMessage.msgIPCRendererConnect) {
                            n = [!0, this.handleRendererConnectMsg(e, t)];
                            break
                        }
                        if (i === s.CommonIPCMessage.msgIPCRendererDisconnect) {
                            n = [!0, this.handleRendererDisconnectMsg(e, t)];
                            break
                        }
                    } while (0);
                    return n
                }

                handleRendererConnectMsg(e, t) {
                    r.verbose(e), r.verbose(t)
                }

                handleRendererDisconnectMsg(e, t) {
                    r.verbose(e), r.verbose(t)
                }

                handleForwardRendererToRendererMsg(e) {
                    this.sendForwardRendererToRendererMsg(e)
                }

                sendForwardRendererToRendererMsg(e) {
                    r.verbose(e)
                }

                NotifyListener(e) {
                    let t = void 0, n = e.msg.name;
                    if (this.listeners.has(n)) {
                        let i = this.listeners.get(n), o = !0;
                        for (let n of i) o ? (o = !1, t = n(e)) : n(e)
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
        const i = n(3), o = n(6), r = n(20), s = n(21), a = n(29);
        !function (e) {
            class t extends a.CommonIPCBase.Communicator {
                constructor() {
                    super()
                }

                initialize(e) {
                    this.currInfo = {id: void 0, context: e, isMainCommunicator: !1}
                }

                connect() {
                    this.isConnected ? r.warning("has been connected") : (this.sendConnectMsgToMain(), this.isConnected = !0, this.startListenIPCMessage(!1))
                }

                disconnect() {
                    this.isConnected ? (this.isConnected = !1, this.sendDisconnectMsgToMain()) : r.warning("hasnot been connected yet")
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
                            r.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (o.isNullOrUndefined(e)) {
                            r.error("connectRendererInfo is null");
                            break
                        }
                        r.information(`Renderer: new renderer will connect, id = ${e.id}, context = ${e.context}`), this.rendererInfos.push(e)
                    } while (0)
                }

                handleRendererDisconnectMsg(e, t) {
                    do {
                        if (o.isNullOrUndefined(t)) {
                            r.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (o.isNullOrUndefined(e)) {
                            r.error("disconnectRendererInfo is null");
                            break
                        }
                        r.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
                        for (let t = 0; t < this.rendererInfos.length; ++t) if (this.rendererInfos[t] === e) {
                            this.rendererInfos.splice(t, 1);
                            break
                        }
                    } while (0)
                }

                sendConnectMsgToMain() {
                    let e = this.sendMessageToMainSync({name: s.CommonIPCMessage.msgIPCRendererConnect, args: []});
                    this.currInfo.id = e[0], this.rendererInfos = e[1]
                }

                sendDisconnectMsgToMain() {
                    this.sendMessageToMain({name: s.CommonIPCMessage.msgIPCRendererDisconnect, args: []})
                }

                sendIPCMsgToMain(e, t = !1) {
                    let n = void 0;
                    do {
                        if (o.isNullOrUndefined(e)) {
                            r.error("msg is null");
                            break
                        }
                        n = (t ? i.ipcRenderer.sendSync : i.ipcRenderer.send)(s.CommonIPCMessage.msgIPCSendToMain, {
                            msg: e,
                            senderInfo: this.currInfo
                        })
                    } while (0);
                    return n
                }

                sendIPCMsgToRenderer(e, t) {
                    do {
                        if (o.isNullOrUndefined(e)) {
                            r.error("rendererId is null");
                            break
                        }
                        if (o.isNullOrUndefined(t)) {
                            r.error("msg is null");
                            break
                        }
                        let n = [e].concat(t.args);
                        t.args = n, i.ipcRenderer.send(s.CommonIPCMessage.msgIPCSendToRenderer, {
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
        const i = n(17);
        if ("renderer" === process.type) {
            if (i.info("client running"), !global.__xdasAsyncRemoteExports) {
                let e = {};
                global.__xdasAsyncRemoteExports = e;
                let t = n(47);
                e.require = t.require, e.getCurrentWebContents = t.getCurrentWebContents, e.getCurrentWindow = t.getCurrentWindow, e.Interest = t.Interest, e.global = new Proxy({}, {get: (e, n, i) => t.getGlobal(n)}), e.electron = new Proxy({}, {get: (e, n, i) => t.getBuiltin(n)}), Object.defineProperty(e, "currentWindow", {get: () => t.getCurrentWindow()}), Object.defineProperty(e, "currentWebContents", {get: () => t.getCurrentWebContents()}), Object.defineProperty(e, "process", {get: () => t.getGlobal("process")})
            }
        } else if ("browser" === process.type && (i.info("server running"), !global.__xdasAsyncRemoteExports)) {
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
    }, 38: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(6), o = n(20), r = n(21), s = n(29), a = n(33);
        !function (e) {
            let t;
            !function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.Success = 0] = "Success", e[e.FunctionNotExist = 1] = "FunctionNotExist", e[e.ParamaterError = 2] = "ParamaterError", e[e.CallFailed = 3] = "CallFailed"
            }(t = e.NativeCallErrorCode || (e.NativeCallErrorCode = {}));

            class n {
                constructor(e, t, n) {
                    this.maxId = e, this.minId = t, this.invalidId = n
                }

                generateId() {
                    return this.minId === this.maxId ? this.invalidId : this.minId++
                }

                isInvalidId(e) {
                    return e === this.invalidId
                }
            }

            e.IdGenerator = n;
            const l = 0;
            e.idGenerator = new n(1e7, 1, l);

            class c {
                constructor() {
                    this.jsCallbacks = new Map, this.jsReturnCallbacks = new Map, this.eventJsCallbakcs = new Map, this.jsRegisterFunctions = new Map, this.targetCommunitorInfo = a.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfoByContext(s.CommonIPCBase.mainRendererContext), this.bindMsgListeners(), this.notifyNativeCallReady()
                }

                CallNativeFunction(t, ...n) {
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            o.error("funcName is empty");
                            break
                        }
                        o.information("funcName = ", t), this.printArgs(n);
                        let s = l;
                        for (let t = 0; t < n.length; ++t) if (i.isFunction(n[t])) {
                            let i = e.idGenerator.generateId(), o = n[t];
                            t === n.length - 1 ? (this.jsReturnCallbacks.set(i, o), s = i, n.pop()) : (this.jsCallbacks.set(i, o), n[t] = i)
                        }
                        a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                            name: r.CommonIPCMessage.msgNCCallNativeFunction,
                            args: [t, s].concat(n)
                        })
                    } while (0)
                }

                AttachNativeEvent(t, n) {
                    let r = void 0;
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            o.error("eventName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            o.error("callback is empty");
                            break
                        }
                        let s = e.idGenerator.generateId();
                        if (e.idGenerator.isInvalidId(s)) {
                            o.error("id error");
                            break
                        }
                        if (this.eventJsCallbakcs.has(t)) this.eventJsCallbakcs.get(t).set(s, n); else {
                            let e = new Map;
                            e.set(s, n), this.eventJsCallbakcs.set(t, e)
                        }
                        r = s
                    } while (0);
                    return r
                }

                DetachNativeEvent(e, t) {
                    do {
                        if (i.isNullOrUndefined(e) || 0 === e.length) {
                            o.error("eventName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(t)) {
                            o.error("callback is empty");
                            break
                        }
                        if (!this.eventJsCallbakcs.has(e)) {
                            o.error(`event: ${e} doesnot have listener`);
                            break
                        }
                        if (!this.eventJsCallbakcs.get(e).has(t)) {
                            o.error(`event: ${e} doesnot have the listener of id=${t}`);
                            break
                        }
                        this.eventJsCallbakcs.get(e).delete(t)
                    } while (0)
                }

                CheckNativeFunction(t, n) {
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            o.error("funcName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            o.error("callback is empty");
                            break
                        }
                        o.information("funcName = ", t);
                        let s = e.idGenerator.generateId();
                        this.jsReturnCallbacks.set(s, n), a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                            name: r.CommonIPCMessage.msgNCCheckNativeFunction,
                            args: [t, s]
                        })
                    } while (0)
                }

                RegisterJSFunction(e, n) {
                    let r = t.ParamaterError;
                    do {
                        if (i.isNullOrUndefined(e) || 0 === e.length) {
                            o.error("funcName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            o.error("jsFunc is empty");
                            break
                        }
                        this.jsRegisterFunctions.set(e, n), r = t.Success
                    } while (0);
                    return r
                }

                bindMsgListeners() {
                    a.CommonIPCRenderer.rendererCommunicator.onMessage(r.CommonIPCMessage.msgNCCallJsFunctionById, e => {
                        this.handleCallJsFunctionById(e.msg.args)
                    }), a.CommonIPCRenderer.rendererCommunicator.onMessage(r.CommonIPCMessage.msgNCCallJsFunctionByName, e => {
                        this.handleCallJsFunctionByName(e.msg.args)
                    }), a.CommonIPCRenderer.rendererCommunicator.onMessage(r.CommonIPCMessage.msgNCNativeFireEvent, e => {
                        this.handleNativeFireEvent(e.msg.args)
                    })
                }

                handleCallJsFunctionById(t) {
                    do {
                        let n = t[0];
                        if (!i.isNumber(n)) {
                            o.error(`id error id = ${n}`);
                            break
                        }
                        if (e.idGenerator.isInvalidId(n)) {
                            o.error(`id = ${n} invalid`);
                            break
                        }
                        let r = null, s = 0;
                        if (this.jsCallbacks.has(n) && (s = 1, r = this.jsCallbacks.get(n)), this.jsReturnCallbacks.has(n) && (s = 2, r = this.jsReturnCallbacks.get(n)), 0 === s) {
                            o.error(`callbacks[${n}] is null`);
                            break
                        }
                        t.splice(0, 1), r.apply(null, t), 2 === s && this.jsReturnCallbacks.delete(n)
                    } while (0)
                }

                handleCallJsFunctionByName(e) {
                    do {
                        let t = e[0];
                        if (!i.isString(t)) {
                            o.error(`funcName error funcName = ${t}`);
                            break
                        }
                        if (!this.jsRegisterFunctions.has(t)) {
                            o.error(`jsRegisterFunctions[${t}] is null`);
                            break
                        }
                        e.splice(0, 1), this.jsRegisterFunctions.get(t).apply(null, e)
                    } while (0)
                }

                handleNativeFireEvent(e) {
                    do {
                        let t = e[0];
                        if (!i.isString(t)) {
                            o.warning(`eventName error eventName = ${t}`);
                            break
                        }
                        if (!this.eventJsCallbakcs.has(t)) {
                            o.warning(`eventJsCallbakcs[${t}] is null`);
                            break
                        }
                        e.shift(), this.eventJsCallbakcs.get(t).forEach((t, n, r) => {
                            o.information(`value = ${t}, key = ${n}, map = ${r}`), i.isNullOrUndefined(t) || t.apply(null, e)
                        })
                    } while (0)
                }

                notifyNativeCallReady() {
                    a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                        name: r.CommonIPCMessage.msgNCNativeCallReady,
                        args: [a.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfo()]
                    })
                }

                printArgs(e) {
                    for (let t in e) o.information(`index ${t} = `, e[t])
                }
            }

            e.NativeCallImpl = c, e.nativeCall = new c
        }(t.NativeCallModule || (t.NativeCallModule = {}))
    }, 4: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(14), r = n(44), s = n(24), a = n(26);

        function l(e) {
            a.information("on object freeer"), global.__xdasIPCClienInstance.notifyFreer(e.remoteId, e.callbackId)
        }

        let c = void 0;
        global.__xdasIPCClienInstance || (global.__xdasIPCClienInstance = new class extends o.EventEmitter {
            constructor() {
                super(), this.rid = 0, this.apis = {}, this.singletonMap = {}, this.retCallbackMap = {}, this.eventCallbackMaps = {}, this.contextCallbackMap = {}
            }

            start(e, t, n, i) {
                do {
                    if (!n && this.client) break;
                    if (t || (t = s.getDefaultPrex()), this.singletonMap.hasOwnProperty(t.toLowerCase())) break;
                    if (global.__xdasPluginConfig && global.__xdasPluginConfig.name ? e = {
                        name: global.__xdasPluginConfig.name,
                        version: global.__xdasPluginConfig.version
                    } : void 0 !== e && null !== e || (e = this.parseContext()), !e) {
                        if (!this.client || !this.client.getContext()) throw new Error("no suitable context for client, please specify context with start function");
                        e = {name: this.client.getContext().name, version: this.client.getContext().version}
                    }
                    if (e.name === s.serverContextName) throw new Error("client context must difference from server");
                    if (n && !this.client) throw new Error("connect to other product must start self firstly");
                    let o = new r.Client({context: e, socketPrex: t});
                    this.singletonMap[t.toLowerCase()] = o, n || (this.client = o), o.on("message", e => {
                        if ("fire_event" === e.action) this.fireServerEvent(o, e.name, [e.__context].concat(e.args)); else if ("client_context_freer" === e.action) {
                            a.information("client on object freer", e);
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
                        i && i("error", e), this.emit("socket-error", e, o.getContext(), n, o.isInprocess()), delete this.singletonMap[t.toLowerCase()]
                    }), o.isInprocess() ? (i && i("connect"), this.emit("connect", o.getContext(), n, !0)) : o.on("connect", () => {
                        i && i("connect"), this.emit("connect", o.getContext(), n, !1)
                    }), o.on("end", () => {
                        let e = o.isInprocess();
                        a.information("server is ended, and this client emit end", t, n, e), i && i("end", o.getContext(), n, e), this.emit("end", o.getContext(), n, e), delete this.singletonMap[t.toLowerCase()]
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
                return i(this, void 0, void 0, function* () {
                    return this.internalCheckServerFunction(this.client, e)
                })
            }

            callServerFunction(e, ...t) {
                return i(this, void 0, void 0, function* () {
                    let n = null, i = yield this.callServerFunctionEx(e, ...t);
                    return i && (n = i[0]), n
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
                return i(this, void 0, void 0, function* () {
                    {
                        if (!e) throw new Error("An argument for 'productId' was not provided");
                        let n = this.singletonMap[e.toLowerCase()];
                        if (!n) throw new Error("Please call the 'start' interface first");
                        return this.internalCheckServerFunction(n, t)
                    }
                })
            }

            crossCallServerFunction(e, t, ...n) {
                return i(this, void 0, void 0, function* () {
                    let i = null, o = yield this.crossCallServerFunctionEx(e, t, ...n);
                    return o && (i = o[0]), i
                })
            }

            crossCallServerFunctionEx(e, t, ...n) {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let i = this.singletonMap[e.toLowerCase()];
                    if (!i) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'funcName' was not provided");
                    return this.internalCallServerFunctionEx(i, t, ...n)
                }
            }

            crossIsRemoteClientExist(e, t) {
                return i(this, void 0, void 0, function* () {
                    {
                        if (!e) throw new Error("An argument for 'productId' was not provided");
                        let n = this.singletonMap[e.toLowerCase()];
                        if (!n) throw new Error("Please call the 'start' interface first");
                        return this.internalIsRemoteClientExist(n, t)
                    }
                })
            }

            crossCheckRemoteFunction(e, t, n) {
                return i(this, void 0, void 0, function* () {
                    {
                        if (!e) throw new Error("An argument for 'productId' was not provided");
                        let i = this.singletonMap[e.toLowerCase()];
                        if (!i) throw new Error("Please call the 'start' interface first");
                        if (!t) throw new Error("An argument for 'remoteId' was not provided");
                        if (!n) throw new Error("An argument for 'funcName' was not provided");
                        return this.internalCheckRemoteFunction(i, t, n)
                    }
                })
            }

            crossCallRemoteClientFunction(e, t, n, ...i) {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let o = this.singletonMap[e.toLowerCase()];
                    if (!o) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'remoteId' was not provided");
                    if (!n) throw new Error("An argument for 'funcName' was not provided");
                    return this.internalCallRemoteClientFunction(o, t, n, ...i)
                }
            }

            crossAttachServerEvent(e, t, n) {
                let i = void 0;
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let o = this.singletonMap[e.toLowerCase()];
                    if (!o) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'eventName' was not provided");
                    i = this.internalAttachServerEvent(o, t, n)
                }
                return i
            }

            crossDetachServerEvent(e, t, n) {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let i = this.singletonMap[e.toLowerCase()];
                    if (!i) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'eventName' was not provided");
                    this.internalDetachServerEvent(i, t, n)
                }
            }

            crossBroadcastEvent(e, t, ...n) {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let i = this.singletonMap[e.toLowerCase()];
                    if (!i) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'eventName' was not provided");
                    this.sendAdapter(i, {
                        action: "broadcast",
                        name: t,
                        args: n,
                        __context: Object.assign({}, this.client.getContext())
                    })
                }
            }

            registry(e) {
                let t = this.getFullContextName(this.client);
                return new Promise((n, i) => {
                    do {
                        if (!t) {
                            n(!1);
                            break
                        }
                        let i = this.generateId();
                        const o = {alias: t, action: "register", rid: i};
                        let r = (e, i) => {
                            e ? (a.error("register error", e.message), n(i)) : n(t)
                        };
                        this.retCallbackMap[i] = Object.assign({callback: r}, o), this.sendAdapter(e, o)
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
                    e.isInprocess() ? (a.information("send to server in process"), global.__xdasIPCServer.emit("message", t, e)) : e.send(t)
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
                    if (t === s.serverContextName) {
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
                return new Promise((n, i) => {
                    do {
                        if (!e) {
                            n(!1);
                            break
                        }
                        if (!t) {
                            n(!1);
                            break
                        }
                        let i = this.generateId();
                        const o = {action: "check_server_function_exist", method: t, rid: i};
                        let r = (e, t) => {
                            n(!e && t)
                        };
                        this.retCallbackMap[i] = Object.assign({callback: r}, o), this.sendAdapter(e, o)
                    } while (0)
                })
            }

            internalCallServerFunctionEx(e, t, ...n) {
                return new Promise((i, o) => {
                    do {
                        if (!e) {
                            i([null, "client doesn't ready"]);
                            break
                        }
                        if (!t) {
                            i([null, "funcName is not specifed"]);
                            break
                        }
                        e === this.client && this.emit("stat_call_function", this.client.getContext(), t);
                        let o = this.generateId();
                        if (n) for (let e = 0; e < n.length; e++) n[e] = this.convertFunction2IdEx(n[e]);
                        const r = {rid: o, method: t, args: n};
                        let s = (t, n) => {
                            t ? (a.error("callServerFunction error", t, e.getContext()), i([null, t])) : i([n, void 0])
                        };
                        this.retCallbackMap[o] = Object.assign({callback: s}, r), this.sendAdapter(e, r)
                    } while (0)
                })
            }

            internalIsRemoteClientExist(e, t) {
                return new Promise((n, i) => {
                    do {
                        if (!t) {
                            n([!1, "remote client alias is not specifed"]);
                            break
                        }
                        if (e === this.client && t.toLowerCase() === e.getContext().name.toLowerCase()) {
                            n([!0, "self is exist"]);
                            break
                        }
                        let i = this.generateId();
                        const o = {dst: this.getFullContextName(e, t), action: "check_client_exist", rid: i};
                        let r = (e, t) => {
                            n(e ? [!1, e] : [t, "success"])
                        };
                        this.retCallbackMap[i] = Object.assign({callback: r}, o), this.sendAdapter(e, o)
                    } while (0)
                })
            }

            internalCheckRemoteFunction(e, t, n) {
                return new Promise((i, o) => {
                    do {
                        if (!e) {
                            i(!1);
                            break
                        }
                        if (!t) {
                            i(!1);
                            break
                        }
                        if (!n) {
                            i(!1);
                            break
                        }
                        if (e === this.client && t.toLowerCase() === e.getContext().name.toLowerCase()) {
                            i(!(!this.apis || !this.apis[n]));
                            break
                        }
                        let o = this.generateId();
                        const r = {
                            action: "check_client_function_exist",
                            method: n,
                            rid: o,
                            src: this.getFullContextName(this.client),
                            dst: this.getFullContextName(e, t)
                        };
                        let s = (e, t) => {
                            i(!e && t)
                        };
                        this.retCallbackMap[o] = Object.assign({callback: s}, r), this.sendAdapter(e, r)
                    } while (0)
                })
            }

            internalCallRemoteClientFunction(e, t, n, ...i) {
                return new Promise((o, r) => {
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
                        let r = (e, t) => {
                            e ? (a.information("callRemoteClientFunction", e.message), o([null, e])) : o([t, void 0])
                        };
                        if (i) for (let e = 0; e < i.length; e++) i[e] = this.convertFunction2IdEx(i[e]);
                        let s = this.generateId();
                        const l = {
                            src: this.getFullContextName(this.client),
                            dst: this.getFullContextName(e, t),
                            action: "call_remote_client_api",
                            method: n,
                            args: i,
                            rid: s
                        };
                        this.retCallbackMap[s] = Object.assign({callback: r}, l), this.sendAdapter(e, l)
                    } while (0)
                })
            }

            internalAttachServerEvent(e, t, n) {
                let i = e.getContext().productId.toLowerCase();
                this.eventCallbackMaps.hasOwnProperty(i) || (this.eventCallbackMaps[i] = {}), this.eventCallbackMaps[i].hasOwnProperty(t) || (this.eventCallbackMaps[i][t] = {}), s.isObjectEmpty(this.eventCallbackMaps[i][t]) && this.sendAdapter(e, {
                    action: "attach_event",
                    name: t
                });
                let o = this.generateId();
                return this.eventCallbackMaps[i][t][o] = n, o
            }

            internalDetachServerEvent(e, t, n) {
                let i = e.getContext().productId.toLowerCase();
                do {
                    if (!this.eventCallbackMaps.hasOwnProperty(i)) break;
                    if (!this.eventCallbackMaps[i].hasOwnProperty(t)) break;
                    delete this.eventCallbackMaps[i][t][n], s.isObjectEmpty(this.eventCallbackMaps[i][t]) && this.sendAdapter(e, {
                        action: "detach_event",
                        name: t
                    })
                } while (0)
            }

            fireServerEvent(e, t, ...n) {
                let i = e.getContext().productId.toLowerCase();
                do {
                    if (!this.eventCallbackMaps.hasOwnProperty(i)) break;
                    if (!this.eventCallbackMaps[i].hasOwnProperty(t)) break;
                    let e = this.eventCallbackMaps[i][t];
                    for (let t in e) {
                        let i = e[t];
                        i && i.apply(null, ...n)
                    }
                } while (0)
            }

            callFunctionById(e, t, n, ...i) {
                let o = void 0, r = !1;
                do {
                    const s = this.contextCallbackMap[t];
                    if (!s) break;
                    let a = void 0, l = void 0;
                    try {
                        a = s.apply(null, ...i)
                    } catch (e) {
                        l = e.message;
                        break
                    }
                    if (void 0 === n || null === n) break;
                    if (o = {s_rid: n, action: "call_client_by_id_callback", success: !1}, void 0 !== l) {
                        o.error = l;
                        break
                    }
                    if (a && a.then) {
                        a.then(t => {
                            o.data = this.convertFunction2Id(t), o.success = !0, this.sendAdapter(e, o)
                        }).catch(t => {
                            o.error = t instanceof Error ? t.message : t, this.sendAdapter(e, o)
                        }), r = !0;
                        break
                    }
                    o.success = !0, o.data = this.convertFunction2Id(a)
                } while (0);
                !r && o && this.sendAdapter(e, o)
            }

            convertFunction2Id(e) {
                let t = e;
                if ("function" == typeof e) {
                    let n = this.generateId();
                    this.contextCallbackMap[n] = e, t = n
                } else if (e && "object" == typeof e) for (let t in e) {
                    let n = e[t];
                    if ("function" == typeof n) {
                        let i = this.generateId();
                        this.contextCallbackMap[i] = n, e[t] = i
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
                        let i = this.generateId();
                        this.contextCallbackMap[i] = n, e[t] = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": i}
                    } else n && "object" == typeof n && (e[t] = this.convertFunction2IdEx(n))
                }
                return t
            }

            decodeParameter(e, t) {
                let n = e;
                do {
                    if (!e) break;
                    if ("object" != typeof e) break;
                    let i = e["__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}"];
                    if (i) {
                        n = ((...e) => {
                            this.callRemoteContextById(t, i, ...e)
                        }), global.__xdasObjectLiftMonitor && global.__xdasObjectLiftMonitor.setObjectFreer(n, {
                            remoteId: t,
                            callbackId: i
                        }, l);
                        break
                    }
                    for (let n in e) {
                        let i = e[n];
                        e[n] = this.decodeParameter(i, t)
                    }
                } while (0);
                return n
            }

            callRegisterFunction(e, t) {
                let n = void 0, i = !1;
                do {
                    if (!t) break;
                    let o = t.method;
                    if (!o) break;
                    let r = this.getNow();
                    if (n = {
                        s_rid: t.s_rid,
                        action: "remote_client_callback",
                        success: !1,
                        rid: t.rid,
                        method: t.method,
                        src: t.src,
                        timestamp: t.timestamp ? t.timestamp.concat(r) : [].concat(r)
                    }, !this.apis || !this.apis[o]) {
                        n.error = `callRegisterFunction ${o} is undefined`;
                        break
                    }
                    let s = void 0, a = this.decodeParameter(t.args, t.src);
                    try {
                        s = this.apis[o].apply(null, [t.src].concat(a))
                    } catch (e) {
                        n.error = e.message;
                        break
                    }
                    if (s && s.then) {
                        s.then(t => {
                            n.data = this.convertFunction2IdEx(t), n.success = !0, this.sendAdapter(e, n)
                        }).catch(t => {
                            n.error = t instanceof Error ? t.message : t, this.sendAdapter(e, n)
                        }), i = !0;
                        break
                    }
                    n.success = !0, n.data = this.convertFunction2IdEx(s)
                } while (0);
                a.information("callRegisterFunction", n), !i && n && this.sendAdapter(e, n)
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
        const i = n(45), o = n(14);
        t.Parser = class extends o.EventEmitter {
            constructor() {
                super(), this.decoder = new i.StringDecoder("utf8"), this.jsonBuffer = ""
            }

            encode(e) {
                return JSON.stringify(e) + "\n"
            }

            feed(e) {
                let t = this.jsonBuffer, n = 0, i = (t += this.decoder.write(e)).indexOf("\n", n);
                for (; i >= 0;) {
                    const e = t.slice(n, i), o = JSON.parse(e);
                    this.emit("message", o), n = i + 1, i = t.indexOf("\n", n)
                }
                this.jsonBuffer = t.slice(n)
            }
        }
    }, 427: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(428), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 428: function (e, t, n) {
        "use strict";
        var i = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
            return r > 3 && s && Object.defineProperty(t, n, s), s
        }, o = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(6), s = n(35), a = n(29), l = n(7), c = n(5), u = n(871), d = n(1), h = n(38), f = n(4), p = n(18),
            m = n(500), g = n(873), _ = n(15), v = n(66), b = n(874), T = n(157), S = n(614), y = n(875), w = n(489),
            C = n(2), E = n(9), R = n(876), k = E.default(C.join(__rootDir, "../bin/ThunderHelper.node")),
            I = d.default.getLogger("Thunder.SuspensionRender"), O = S.HoverTextManagerNS.getHoverTextManager(),
            M = b.BubbleManagerNS.getBubbleManager();
        !function (e) {
            e.Comments = "comments", e.FileList = "files", e.Attribute = "detail"
        }(t.DetailIndex || (t.DetailIndex = {}));
        let N = class extends c.Vue {
            constructor() {
                super(...arguments), this.isLogined = !1, this.isVip = !1, this.vipType = 0, this.isInVipAcc = !1, this.isVipSkin = !1, this.isVipLogin = !1, this.isStopAnimation = !1, this.isDowning = !1, this.isLeftTop = !1, this.isLeftBottom = !0, this.isRightTop = !1, this.isRightBottom = !1, this.isLeftDown = !1, this.isClick = !1, this.clickCount = 0, this.isStatus = !1, this.isTryInit = !1, this.isTrying = !1, this.isPlaneIn = !1, this.isPlaneHold = !1, this.isPlaneOut = !1, this.statusText = "", this.floatPanelStyle = "display: none", this.mainWindow = null, this.suspensionWindows = null, this.isShowSpeedType = 0, this.showFloatPanelType = 0, this.totalSpeed = {
                    speed: "0.0",
                    unit: "B/S"
                }, this.vipSpeed = "", this.movewindowTimeIntervalId = -1, this.movewindowToBottomTimeIntervalId = -1, this.autoHideAtY = -233, this.width = 0, this.height = 0, this.left = 0, this.top = 0, this.hoverWindowWidth = 404, this.hoverWindowHeight = 270, this.ballSize = 37, this.isThunderForeground = !1, this.isDowningStatus = !1, this.downloadProgress = "0.0%", this.startShowTime = 0, this.showState = !1, this.isBubbleLeftVip = !1, this.isBubbleRightVip = !1, this.isBubbleLeftVipHide = !1, this.isBubbleRightVipHide = !1, this.bubbleInfo = null, this.skinInfo = void 0, this.selectedTaskId = 0, this.hoverPlaneTimer = null, this.leavePlaneTimer = null, this.isShowPlaneAni = !1, this.isFloatPanelShowed = !1, this.removeDraggable = null
            }

            onDownloadingChanged(e) {
                return o(this, void 0, void 0, function* () {
                    1 === this.showFloatPanelType && (e ? (yield this.canHideWindow()) || (yield this.getSuspensionWindows()).showInactive() : (yield this.getSuspensionWindows()).hide())
                })
            }

            get suspensionBallClass() {
                return {
                    "xlx-suspension": !0,
                    "is-stopped": this.isStopAnimation,
                    "is-downing": this.isDowning && !this.isShowPlaneAni,
                    "is-status": this.isStatus && !this.isShowPlaneAni,
                    "is-plane-in": this.isPlaneIn,
                    "is-plane-hold": this.isPlaneHold,
                    "is-plane-out": this.isPlaneOut,
                    "is-vip-login": this.isVipLogin,
                    "is-vip": this.isVipSkin || this.isTrying && !this.isVip,
                    "is-left-bottom": this.isLeftBottom,
                    "is-left-top": this.isLeftTop,
                    "is-right-bottom": this.isRightBottom,
                    "is-right-top": this.isRightTop,
                    "is-left-vip": this.isBubbleLeftVip,
                    "is-right-vip": this.isBubbleRightVip,
                    "is-left-vip-hide": this.isBubbleLeftVipHide,
                    "is-right-vip-hide": this.isBubbleRightVipHide
                }
            }

            get suspensionStatusText() {
                return this.statusText
            }

            get bubbleText() {
                let e = "";
                return this.bubbleInfo && (e = this.bubbleInfo.bubbleText || ""), e
            }

            get bubbleEndText() {
                let e = "";
                return this.bubbleInfo && (e = this.bubbleInfo.bubbleEndText || ""), e
            }

            get expireDate() {
                let e = "";
                return this.bubbleInfo && void 0 !== this.bubbleInfo.expireDate && (e = this.bubbleInfo.expireDate.toString() || ""), e
            }

            get bubbleBtnText() {
                let e = "";
                return this.bubbleInfo && (e = this.bubbleInfo.bubbleBtnText || ""), e
            }

            get isTry() {
                return !this.isVip && !this.isStatus && this.isTryInit && this.isDowning
            }

            doDownloadEvent(e, t, n, i, o) {
                this.isDowning = e, r.isNullOrUndefined(o) ? this.isStatus = !1 : (this.statusText = o, this.isStatus = i), this.isStatus && (this.isDowning = !1), this.isDowningStatus = this.isDowning || this.isStatus, O.isDonwloading = this.isDowningStatus, r.isNullOrUndefined(this.statusText) || (O.isDonwloading = !0)
            }

            showOrHideFloatPanel(e) {
                return o(this, void 0, void 0, function* () {
                    if (e) {
                        let e = yield(yield l.asyncRemoteCall.getCurrentWindow()).getBounds(),
                            t = yield this.getFloatPanelDirection(e.x, e.y);
                        this.setFloatPanelDirection(t), this.stat("float_monitor_hover_show"), this.floatPanelStyle = ""
                    } else this.floatPanelStyle = "display: none";
                    M.isFloatPanelShowed = e, this.isFloatPanelShowed = e
                })
            }

            setFloatPanelDirection(e) {
                switch (e) {
                    case m.FloatPanelDirection.LeftBottom:
                        this.isLeftBottom = !0, this.isLeftTop = !1, this.isRightTop = !1, this.isRightBottom = !1;
                        break;
                    case m.FloatPanelDirection.LeftTop:
                        this.isLeftBottom = !1, this.isLeftTop = !0, this.isRightTop = !1, this.isRightBottom = !1;
                        break;
                    case m.FloatPanelDirection.RightTop:
                        this.isLeftBottom = !1, this.isLeftTop = !1, this.isRightTop = !0, this.isRightBottom = !1;
                        break;
                    case m.FloatPanelDirection.RightBottom:
                        this.isLeftBottom = !1, this.isLeftTop = !1, this.isRightTop = !1, this.isRightBottom = !0
                }
            }

            showOrHideHoverPlane(e) {
                this.isShowPlaneAni = e, e ? this.hoverPlaneTimer || (this.isPlaneIn = !0, this.hoverPlaneTimer = setTimeout(() => {
                    this.isPlaneIn = !1, this.isPlaneHold = !0, this.hoverPlaneTimer = null
                }, 500)) : (this.hoverPlaneTimer && (clearTimeout(this.hoverPlaneTimer), this.hoverPlaneTimer = null), this.isPlaneIn = !1, this.isPlaneHold = !1)
            }

            showLeavePlane() {
                this.leavePlaneTimer || (this.isPlaneOut = !0, this.leavePlaneTimer = setTimeout(() => {
                    this.isPlaneOut = !1, this.leavePlaneTimer = null
                }, 500))
            }

            enter() {
                return o(this, void 0, void 0, function* () {
                    I.information("enter"), this.isLeftDown || M.isBubbleVisible || this.showOrHideFloatPanel(!0), setTimeout(() => {
                        this.isClick || (this.isThunderForeground = m.FloatPanelHelper.isThunderMainWndForeground())
                    }, 100), (yield(yield this.getSuspensionWindows()).getPosition())[1] <= this.autoHideAtY - 70 + this.top && (-1 === this.movewindowToBottomTimeIntervalId && (this.movewindowToBottomTimeIntervalId = setInterval(() => {
                        this.movewindowsToBottom()
                    }, 150)), -1 !== this.movewindowTimeIntervalId && (clearInterval(this.movewindowTimeIntervalId), this.movewindowTimeIntervalId = -1))
                })
            }

            leave() {
                return o(this, void 0, void 0, function* () {
                    I.information("leave"), this.isClick || (this.showOrHideFloatPanel(!1), M.showBubble());
                    let e = yield(yield this.getSuspensionWindows()).getPosition();
                    !this.isLeftDown && e[1] <= this.autoHideAtY + this.top && (-1 === this.movewindowTimeIntervalId && (this.movewindowTimeIntervalId = setInterval(() => {
                        this.movewindowsToTop()
                    }, 150)), -1 !== this.movewindowToBottomTimeIntervalId && (clearInterval(this.movewindowToBottomTimeIntervalId), this.movewindowToBottomTimeIntervalId = -1))
                })
            }

            click() {
                return o(this, void 0, void 0, function* () {
                    if (this.isClick || (this.isClick = !0, setTimeout(() => {
                        this.isClick = !1
                    }, 150)), this.clickCount++, 1 === this.clickCount && setTimeout(() => o(this, void 0, void 0, function* () {
                        if (this.clickCount > 1) this.showOrHideMainWindow().catch(), M.isBubbleVisible && M.clickBubble(4); else if (M.isBubbleVisible) {
                            let e = yield f.client.callServerFunction("GetMainWindowStates");
                            !e.minimized && e.visible && M.clickBubble(4)
                        }
                        this.clickCount = 0
                    }), 250), this.isTry && (yield this.isInInner())) {
                        this.showOrHideHoverPlane(!1), this.showLeavePlane(), this.isTryInit = !1;
                        let e = this.getCommonExtData();
                        e += ",float_type=wzl", this.stat("xfq_click", e), f.client.callServerFunction("BringMainWndToTop").catch(), w.VipPluginFunctionNS.clickTryAcclerateBtn(this.selectedTaskId, "xfq").catch()
                    }
                })
            }

            enterInner() {
                if (I.information("enterInner"), !this.isLeftDown && this.isTry) {
                    this.showOrHideHoverPlane(!0);
                    let e = this.getCommonExtData();
                    this.stat("xfq_hover_show", e)
                }
            }

            leaveInner() {
                I.information("leaveInner"), this.isClick || this.showOrHideHoverPlane(!1)
            }

            getCommonExtData() {
                let e = "";
                return e = (e = (e = e + ",is_login=" + (this.isLogined ? "1" : "0")) + ",is_vip=" + (this.isVip ? "1" : "0")) + ",vip_type=" + this.vipType
            }

            getFloatPanelDirection(e, t) {
                return o(this, void 0, void 0, function* () {
                    let n = yield l.asyncRemoteCall.getCurrentWindow(), i = yield n.getSize(),
                        o = m.FloatPanelDirection.RightBottom;
                    return e < this.left ? (e < this.left + this.ballSize - this.hoverWindowWidth && (e = this.left + this.ballSize - this.hoverWindowWidth), o = m.FloatPanelDirection.RightBottom, o = t + i[1] > this.height ? m.FloatPanelDirection.RightTop : m.FloatPanelDirection.RightBottom) : (e > this.width - this.hoverWindowWidth - this.ballSize && (e = this.width - this.hoverWindowWidth - this.ballSize), o = m.FloatPanelDirection.LeftBottom, o = t + i[1] > this.height ? m.FloatPanelDirection.LeftTop : m.FloatPanelDirection.LeftBottom), t > this.height - this.hoverWindowHeight - this.ballSize && (t = this.height - this.hoverWindowHeight - this.ballSize), yield n.setPosition(e, t), o
                })
            }

            down(e) {
                0 === e.button && (this.showOrHideFloatPanel(!1), this.isLeftDown = !0)
            }

            up(e) {
                0 === e.button && (this.isLeftDown = !1)
            }

            canHideWindow() {
                return o(this, void 0, void 0, function* () {
                    let e = !0;
                    do {
                        if (0 === this.showFloatPanelType) {
                            e = !1;
                            break
                        }
                        if (2 === this.showFloatPanelType) {
                            e = !0;
                            break
                        }
                        let t = yield f.client.callServerFunction("GetMainWindowStates");
                        if (t.maximized && m.FloatPanelHelper.isThunderMainWndForeground() && t.visible) {
                            e = !0;
                            break
                        }
                        (this.isDowning || this.isStatus) && (e = !1)
                    } while (0);
                    return e
                })
            }

            onSwitchTaskSpeed(e) {
            }

            onshowFloatPanel(e) {
                return o(this, void 0, void 0, function* () {
                    this.showFloatPanelType = e, yield f.client.callServerFunction("SetConfigValue", "ConfigFloatPanel", "FloatPanelValue", e.toString()), yield f.client.callServerFunction("SaveConfig")
                })
            }

            setSuspensionConfig(e) {
                f.client.callServerFunction("SetConfigValue", "ConfigSuspension", "SuspensionX", e.x).catch(), f.client.callServerFunction("SetConfigValue", "ConfigSuspension", "SuspensionY", e.y).catch()
            }

            handleBubbleClick() {
                I.information("handleBubbleClick"), M.isBubbleVisible && M.clickBubble(3)
            }

            handleBubbleBtnClick() {
                I.information("handleBubbleBtnClick"), M.isBubbleVisible && M.clickBubble(1)
            }

            handleBubbleCloseClick() {
                I.information("handleBubbleCloseClick"), M.isBubbleVisible && M.clickBubble(2)
            }

            handleRightClick() {
                return o(this, void 0, void 0, function* () {
                    this.showOrHideFloatPanel(!1);
                    let e, t = [{
                        type: "normal",
                        label: "全局显示",
                        icon: 0 === this.isShowSpeedType ? `${__rootDir}/static/icon/ok.png` : "",
                        click: () => {
                            this.stat("float_monitor_speed_setting", "result=fullspeed"), this.onSwitchTaskSpeed(0)
                        }
                    }];
                    !function (e) {
                        e[e.UnKnown = -1] = "UnKnown", e[e.ShutDown = 0] = "ShutDown", e[e.Sleep = 1] = "Sleep", e[e.Exit = 2] = "Exit"
                    }(e || (e = {}));
                    let n = yield f.client.callServerFunction("GetDownloadCompleteTaskType"), i = [{
                        type: "normal",
                        label: "新建任务(&N)",
                        icon: `${__rootDir}/static/icon/newtask.png`,
                        click: () => o(this, void 0, void 0, function* () {
                            this.stat("float_monitor_rk_click", "button=create"), (yield this.getMainWindows()).webContents.send(p.ThunderChannelList.channelMRTrayMenuClick, "-task:newtask", "floatmonitor")
                        })
                    }, {
                        type: "normal",
                        label: "开始全部任务",
                        icon: `${__rootDir}/static/icon/startalltask.png`,
                        click: () => o(this, void 0, void 0, function* () {
                            this.stat("float_monitor_rk_click", "button=start"), (yield this.getMainWindows()).webContents.send(p.ThunderChannelList.channelMRTrayMenuClick, "-task:startall")
                        })
                    }, {
                        type: "normal",
                        label: "暂停全部任务",
                        icon: `${__rootDir}/static/icon/stoptask.png`,
                        click: () => o(this, void 0, void 0, function* () {
                            this.stat("float_monitor_rk_click", "button=pause"), (yield this.getMainWindows()).webContents.send(p.ThunderChannelList.channelMRTrayMenuClick, "-task:pauseall")
                        })
                    }, {
                        type: "submenu",
                        label: "下载完成后",
                        submenu: [{
                            type: "normal",
                            label: "关机",
                            icon: n === e.ShutDown ? `${__rootDir}/static/icon/ok.png` : "",
                            click: () => {
                                n === e.ShutDown ? f.client.callServerFunction("CancelDownloadCompleteTask").catch() : (this.stat("float_monitor_download_complete", "result=shutdown"), f.client.callServerFunction("SetDownloadCompleteTaskType", e.ShutDown).catch())
                            }
                        }, {
                            type: "normal",
                            label: "睡眠",
                            icon: n === e.Sleep ? `${__rootDir}/static/icon/ok.png` : "",
                            click: () => {
                                n === e.Sleep ? f.client.callServerFunction("CancelDownloadCompleteTask").catch() : (this.stat("float_monitor_download_complete", "result=sleep"), f.client.callServerFunction("SetDownloadCompleteTaskType", e.Sleep).catch())
                            }
                        }, {
                            type: "normal",
                            label: "退出迅雷",
                            icon: n === e.Exit ? `${__rootDir}/static/icon/ok.png` : "",
                            click: () => {
                                n === e.Exit ? f.client.callServerFunction("CancelDownloadCompleteTask").catch() : (this.stat("float_monitor_download_complete", "result=exit"), f.client.callServerFunction("SetDownloadCompleteTaskType", e.Exit).catch())
                            }
                        }]
                    }, {type: "submenu", label: "悬浮窗速度展示", submenu: t}, {
                        type: "submenu",
                        label: "悬浮窗显示设置",
                        submenu: [{
                            type: "normal",
                            label: "显示悬浮窗",
                            icon: 0 === this.showFloatPanelType ? `${__rootDir}/static/icon/ok.png` : "",
                            click: () => {
                                this.stat("float_monitor_display_setting", "result=show"), this.onshowFloatPanel(0).catch()
                            }
                        }, {
                            type: "normal",
                            icon: 1 === this.showFloatPanelType ? `${__rootDir}/static/icon/ok.png` : "",
                            label: "下载时显示悬浮窗",
                            click: () => {
                                this.stat("float_monitor_display_setting", "result=undl_hide"), this.onshowFloatPanel(1).catch()
                            }
                        }, {
                            type: "normal",
                            label: "隐藏悬浮窗",
                            icon: 2 === this.showFloatPanelType ? `${__rootDir}/static/icon/ok.png` : "",
                            click: () => {
                                this.stat("float_monitor_display_setting", "result=hide"), this.onshowFloatPanel(2).catch()
                            }
                        }]
                    }, {
                        type: "normal",
                        icon: `${__rootDir}/static/icon/exit.png`,
                        label: "退出(&X)",
                        click: () => o(this, void 0, void 0, function* () {
                            this.stat("float_monitor_rk_click", "button=exit"), (yield this.getMainWindows()).webContents.send(p.ThunderChannelList.channelMRTrayMenuClick, "-task:quitprocess")
                        })
                    }], r = yield f.client.callServerFunction("GetMainWindowStates");
                    r.visible ? r.minimized ? i.splice(0, 0, {
                        label: "显示主界面", type: "normal", click: () => {
                            this.stat("float_monitor_rk_click", "button=showmain"), f.client.callServerFunction("BringMainWndToTop").catch()
                        }
                    }) : i.splice(0, 0, {
                        label: "隐藏主界面",
                        type: "normal",
                        click: () => o(this, void 0, void 0, function* () {
                            this.stat("float_monitor_rk_click", "button=hidemain");
                            let e = yield this.getMainWindows();
                            e.minimize(), e.hide()
                        })
                    }) : i.splice(0, 0, {
                        label: "显示主界面", type: "normal", click: () => {
                            this.stat("float_monitor_rk_click", "button=showmain"), f.client.callServerFunction("BringMainWndToTop").catch()
                        }
                    });
                    let s = yield(yield l.asyncRemoteCall.getMenu()).buildFromTemplate(i);
                    yield v.MenuSkinNS.setStyle(s, {}), yield s.popup({window: yield this.getSuspensionWindows()})
                })
            }

            isInInner() {
                return o(this, void 0, void 0, function* () {
                    let e = !1, t = yield(yield l.asyncRemoteCall.getScreen()).getCursorScreenPoint(),
                        n = yield(yield l.asyncRemoteCall.getCurrentWindow()).getBounds(),
                        i = n.x + this.hoverWindowWidth - this.ballSize,
                        o = n.x + this.hoverWindowWidth + this.ballSize,
                        r = n.y + this.hoverWindowHeight - this.ballSize,
                        s = n.y + this.hoverWindowHeight + this.ballSize;
                    return t.x > i && t.x < o && t.y > r && t.y < s && (e = !0), e
                })
            }

            showOrHideMainWindow() {
                return o(this, void 0, void 0, function* () {
                    if (yield this.isInInner()) {
                        let e = "", t = yield f.client.callServerFunction("GetMainWindowStates");
                        if (t.minimized) yield f.client.callServerFunction("BringMainWndToTop"), this.isThunderForeground = !0, e = "showmain"; else if (t.visible) if (this.isThunderForeground) {
                            let t = yield this.getMainWindows();
                            t.minimize(), t.hide(), this.isThunderForeground = !1, e = "hidemain"
                        } else yield f.client.callServerFunction("BringMainWndToTop"), this.isThunderForeground = !0, e = "showmain"; else yield f.client.callServerFunction("BringMainWndToTop"), this.isThunderForeground = !0, e = "showmain";
                        this.stat("float_monitor_dbclick_main_status_get", `status=${e}`)
                    }
                })
            }

            getMainWindows() {
                return o(this, void 0, void 0, function* () {
                    return null === this.mainWindow && (this.mainWindow = yield s.global.mainRendererWindow.__resolve()), this.mainWindow
                })
            }

            getSuspensionWindows() {
                return o(this, void 0, void 0, function* () {
                    return null === this.suspensionWindows && (this.suspensionWindows = yield l.asyncRemoteCall.getCurrentWindow()), this.suspensionWindows
                })
            }

            onGetUserInfo() {
                f.client.callServerFunction("GetAllUserInfo").then(e => {
                    do {
                        if (I.information("onGetUserInfo allUserinfo", e), !e) break;
                        let t = e.vipList[0], n = Number(t.isVip);
                        this.isLogined = !0, this.vipType = Number(t.vasType), I.information("onGetUserInfo vipInfo", t), this.isVip = 0 !== n
                    } while (0)
                }).catch()
            }

            onTotalVipAcclerateStatusChanged(e) {
                e && (this.isInVipAcc = e.acclerating)
            }

            listenLoginEvent() {
                h.NativeCallModule.nativeCall.AttachNativeEvent("onLoginSuc", () => {
                    this.isLogined = !0, this.isVip = !1, this.onGetUserInfo()
                }), h.NativeCallModule.nativeCall.AttachNativeEvent("onLoginFailed", () => {
                    this.isLogined = !1, this.isVip = !1, this.vipType = 0
                }), h.NativeCallModule.nativeCall.AttachNativeEvent("onUserInfoChange", (e, t) => {
                    "vipinfo" === e && this.onGetUserInfo()
                }), h.NativeCallModule.nativeCall.AttachNativeEvent("onLogout", () => {
                    this.isLogined = !1, this.isVip = !1, this.vipType = 0
                })
            }

            getBooskeyState() {
                return o(this, void 0, void 0, function* () {
                    return yield f.client.callServerFunction("GetConfigValue", "BossKey", "BossKeyState", !1)
                })
            }

            setSuspensionPosition() {
                return o(this, void 0, void 0, function* () {
                    let e = yield f.client.callServerFunction("GetConfigValue", "ConfigSuspensionXdas", "SuspensionX"),
                        t = yield f.client.callServerFunction("GetConfigValue", "ConfigSuspensionXdas", "SuspensionY");
                    if (e || t) {
                        let n = yield l.asyncRemoteCall.getCurrentWindow(), i = yield n.getBounds();
                        yield n.setBounds({x: e || i.x, y: t || i.y, width: i.width, height: i.height})
                    }
                })
            }

            setVipSkin(e) {
                this.isVipSkin = e, this.isVipLogin = e
            }

            getConfigValue() {
                return o(this, void 0, void 0, function* () {
                    f.client.callServerFunction("GetConfigValue", "ConfigFloatPanel", "ConfigFloatPanelShowSpeedType", "0").then(e => {
                        null !== e && (this.isShowSpeedType = Number(e), this.isShowSpeedType > 1 && (this.isShowSpeedType = 0))
                    }), f.client.callServerFunction("GetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "0").then(e => o(this, void 0, void 0, function* () {
                        if (null !== e) {
                            this.showFloatPanelType = Number(e);
                            let t = yield(yield l.asyncRemoteCall.getCurrentWindow()).getBounds(),
                                n = yield this.getFloatPanelDirection(t.x, t.y);
                            this.setFloatPanelDirection(n);
                            let i = yield f.client.callServerFunction("GetMainWindowStates");
                            if (i.maximized && i.visible) (yield this.getSuspensionWindows()).hide(); else if (2 === this.showFloatPanelType) (yield this.getSuspensionWindows()).hide(); else if (0 === this.showFloatPanelType) {
                                (yield f.client.callRemoteClientFunction(a.CommonIPCBase.mainProcessContext, "IsSilentSupsWnd"))[0] || (yield this.getSuspensionWindows()).showInactive()
                            } else if (yield this.canHideWindow()) (yield this.getSuspensionWindows()).hide(); else {
                                (yield f.client.callRemoteClientFunction(a.CommonIPCBase.mainProcessContext, "IsSilentSupsWnd"))[0] || (yield this.getSuspensionWindows()).showInactive()
                            }
                        }
                    }))
                })
            }

            getAnimationLevel() {
                return o(this, void 0, void 0, function* () {
                    let e = yield f.client.callServerFunction("GetConfigValue", "GenericSettings", "AnimationLevel", "0");
                    this.isStopAnimation = "0" === e
                })
            }

            listenFullScreen() {
                let e = !1;
                setInterval(() => o(this, void 0, void 0, function* () {
                    k.IsInFullScreen() ? ((yield this.getSuspensionWindows()).hide(), e = !0) : e && ((yield this.canHideWindow()) || ((yield this.getSuspensionWindows()).showInactive(), e = !1))
                }), 1e3)
            }

            listenConfigEvent() {
                f.client.callServerFunction("IsConfigInitFinish").then(() => {
                    this.setSuspensionPosition().catch(), this.getConfigValue(), this.getAnimationLevel().catch()
                }).catch(), f.client.attachServerEvent("OnConfigValueChanged", (e, t, n, i, o) => {
                    "ConfigFloatPanel" === t ? i !== o && this.getConfigValue() : "GenericSettings" === t && "AnimationLevel" === n && i !== o && this.getAnimationLevel().catch()
                })
            }

            listenVipBubbleEvent() {
                M.addListener(b.BubbleEventNS.bubbleShowChanged, (e, t) => o(this, void 0, void 0, function* () {
                    if (I.information(b.BubbleEventNS.bubbleShowChanged, e, t), e) {
                        let e = yield(yield this.getSuspensionWindows()).getBounds(),
                            n = e.x + e.width - this.hoverWindowWidth + this.ballSize, i = this.left + this.width;
                        I.information("screenRight:", i, "windowRight:", n), this.bubbleInfo = t, i - n <= 170 ? (this.isBubbleLeftVip = !0, this.isBubbleRightVip = !1, this.isBubbleLeftVipHide = !1, this.isBubbleRightVipHide = !1, I.information("isBubbleLeftVip")) : (this.isBubbleLeftVip = !1, this.isBubbleRightVip = !0, this.isBubbleLeftVipHide = !1, this.isBubbleRightVipHide = !1, I.information("isBubbleRightVip"))
                    } else this.isBubbleLeftVip ? (this.isBubbleRightVip = !1, this.isBubbleLeftVipHide = !0, this.isBubbleRightVipHide = !1, I.information("isBubbleLeftVipHide")) : (this.isBubbleLeftVip = !1, this.isBubbleLeftVipHide = !1, this.isBubbleRightVipHide = !0, I.information("isBubbleRightVipHide"))
                }))
            }

            movewindowsToTop() {
                return o(this, void 0, void 0, function* () {
                    let e = yield this.getSuspensionWindows(), t = yield e.getPosition(), n = t[1];
                    n <= this.autoHideAtY - 70 + this.top ? (n = this.autoHideAtY - 70 + this.top, -1 !== this.movewindowTimeIntervalId && (clearInterval(this.movewindowTimeIntervalId), this.movewindowTimeIntervalId = -1)) : n -= 35, yield e.setPosition(t[0], n)
                })
            }

            movewindowsToBottom() {
                return o(this, void 0, void 0, function* () {
                    let e = yield this.getSuspensionWindows(), t = yield e.getPosition(), n = t[1];
                    n >= this.autoHideAtY + this.top ? (n = this.autoHideAtY + this.top, -1 !== this.movewindowToBottomTimeIntervalId && (clearInterval(this.movewindowToBottomTimeIntervalId), this.movewindowToBottomTimeIntervalId = -1)) : n += 35, yield e.setPosition(t[0], n)
                })
            }

            listenMainEvent() {
                return o(this, void 0, void 0, function* () {
                    let e = yield this.getMainWindows();
                    e.on("maximize", () => o(this, void 0, void 0, function* () {
                        (yield this.getSuspensionWindows()).hide()
                    })), e.on("blur", () => o(this, void 0, void 0, function* () {
                        (yield this.canHideWindow()) ? (yield this.getSuspensionWindows()).hide() : m.FloatPanelHelper.isThunderMainWndForeground() || (yield this.getSuspensionWindows()).showInactive()
                    })), e.on("focus", () => o(this, void 0, void 0, function* () {
                        (yield e.isMaximized()) ? (yield this.getSuspensionWindows()).hide() : (yield this.canHideWindow()) ? (yield this.getSuspensionWindows()).hide() : (yield this.getSuspensionWindows()).showInactive()
                    })), e.on("minimize", () => o(this, void 0, void 0, function* () {
                        (yield this.getBooskeyState()) ? (yield this.getSuspensionWindows()).hide() : (yield e.isVisible()) && ((yield this.canHideWindow()) ? (yield this.getSuspensionWindows()).hide() : (yield this.getSuspensionWindows()).showInactive())
                    })), e.on("unmaximize", () => o(this, void 0, void 0, function* () {
                        (yield this.canHideWindow()) ? (yield this.getSuspensionWindows()).hide() : (yield this.getSuspensionWindows()).showInactive()
                    })), e.on("hide", () => o(this, void 0, void 0, function* () {
                        let e = yield this.getBooskeyState(), t = yield this.getSuspensionWindows();
                        if (e) yield t.hide(); else if (yield this.canHideWindow()) yield t.hide(); else {
                            let e = (yield f.client.callRemoteClientFunction(a.CommonIPCBase.mainProcessContext, "IsSilentSupsWnd"))[0],
                                n = (yield f.client.callRemoteClientFunction(a.CommonIPCBase.mainProcessContext, "IsAppExit"))[0];
                            e || n || (yield t.showInactive())
                        }
                    }))
                })
            }

            listenGlobalSpeedChangeEvent() {
                f.client.attachServerEvent("OnTotalVipAcclerateStatusChanged", (e, t) => {
                    e && "vip-download-webview" === e.name && this.onTotalVipAcclerateStatusChanged(t)
                }), h.NativeCallModule.nativeCall.AttachNativeEvent("OnGlobalDownloadSpeedChanged", (e, t) => {
                    this.totalSpeed = m.FloatPanelHelper.formatSpeed(e), this.isVip || this.isInVipAcc || (t = 0);
                    let n = m.FloatPanelHelper.formatSpeed(t);
                    this.vipSpeed = "+" + n.speed + n.unit, f.client.callServerFunction("GetDownloadProgress").then(e => {
                        this.downloadProgress = e
                    }).catch()
                })
            }

            listenTrialEvent() {
                I.information("listenTrialEvent-----------------------------"), h.NativeCallModule.nativeCall.AttachNativeEvent("OnCurTaskChange", (e, t, n) => o(this, void 0, void 0, function* () {
                    this.selectedTaskId = e, I.information("OnCurTaskChange taskId:", e), this.updateTrialState(e).catch()
                })), f.client.attachServerEvent("OnVipTaskInfoChanged", (e, t, n) => {
                    e && "vip-download-webview" === e.name && this.updateTrialState(t, n).catch()
                })
            }

            updateTrialState(e, t) {
                return o(this, void 0, void 0, function* () {
                    if (t || (t = yield w.VipPluginFunctionNS.getVipTaskInfo(e)), t && (t.taskType !== y.VipDownloadDefineNS.VipTaskType.Try && t.taskType !== y.VipDownloadDefineNS.VipTaskType.Ad || (t.taskStatus === y.VipDownloadDefineNS.VipTaskStatus.Unkown || t.taskStatus === y.VipDownloadDefineNS.VipTaskStatus.Init || t.taskStatus === y.VipDownloadDefineNS.VipTaskStatus.CommitFailed || t.taskStatus === y.VipDownloadDefineNS.VipTaskStatus.AcclerateFailed || t.taskStatus === y.VipDownloadDefineNS.VipTaskStatus.Finished ? this.isTrying = !1 : this.isTrying = !0), e === this.selectedTaskId)) {
                        let e = t.taskType === y.VipDownloadDefineNS.VipTaskType.Try && t.taskStatus === y.VipDownloadDefineNS.VipTaskStatus.Init;
                        if (I.information("isTryInit", e), e !== this.isTryInit && (this.isTryInit = e, e)) {
                            this.isStatus = !1;
                            let e = this.getCommonExtData();
                            this.stat("xfq_wzl_show", e)
                        }
                    }
                })
            }

            stat(e, t) {
                let n = "";
                null !== t && void 0 !== t && "" !== t && (n = t), I.information(e, n), _.XLStatNS.trackEvent("client_quick", e, "", 0, 0, 0, 0, n)
            }

            onChangeSkin(e) {
                do {
                    if (this.skinInfo && e && this.skinInfo.type === e.type) break;
                    this.skinInfo = e, I.information("skinInfo", e), this.isVipSkin = e && e.type === T.SuspensionSkinHelperNS.SkinType.Vip, this.isVipLogin = this.isVipSkin
                } while (0)
			this.isVipSkin = 1;
			this.isVipLogin = 1;
            }

            mounted() {
                return o(this, void 0, void 0, function* () {
                    let e = yield g.MutiScreenHelper.getScreenRectangle();
                    this.width = e.width, this.height = e.height, this.left = e.x, this.top = e.y;
                    let t = yield this.getSuspensionWindows();
                    t.on("show", () => {
                        this.showState || (this.showState = !0, this.startShowTime = (new Date).getTime(), this.stat("float_monitor_show"))
                    }), t.on("hide", () => {
                        if (this.showState) {
                            this.showState = !1;
                            let e = (((new Date).getTime() - this.startShowTime) / 1e3).toFixed(2);
                            this.stat("float_monitor_online_time", `time=${e}`), this.startShowTime = 0
                        }
                    }), this.listenMainEvent().catch(), this.onGetUserInfo(), this.listenLoginEvent(), this.listenConfigEvent(), this.listenFullScreen(), this.listenVipBubbleEvent(), this.listenGlobalSpeedChangeEvent(), this.listenTrialEvent(), (yield this.getSuspensionWindows()).hookWindowMessage(736, () => o(this, void 0, void 0, function* () {
                        let e = yield g.MutiScreenHelper.getScreenRectangle();
                        this.width = e.width, this.height = e.height, this.left = e.x, this.top = e.y, this.suspensionWindows.setSize(2 * this.hoverWindowWidth, 2 * this.hoverWindowHeight)
                    })), f.client.attachServerEvent("OnChangeSuspensionSkin", (e, ...t) => {
                        this.onChangeSkin(t[0])
                    }), f.client.callServerFunction("GetSuspensionSkinInfo").then(e => {
                        e && this.onChangeSkin(e)
                    }).catch(), this.removeDraggable = yield R.default(".xlx-suspension__inner", this.suspensionWindows), M.init(), O.init()
                })
            }
        };
        i([c.Watch("isDowningStatus")], N.prototype, "onDownloadingChanged", null), N = i([c.Component({components: {FloatPanel: u.default}})], N), t.default = N
    }, 429: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(430), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 43: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(2), r = n(6), s = n(1), a = n(9), l = n(27), c = n(3), u = n(18),
            d = a.default(o.join(__rootDir, "../bin/ThunderHelper.node"));
        let h = "0";
        process.env.TL_ENABLE = h;
        let f = process.env.TL_OUTPUT;

        function p() {
            s.default.outputLogger = "console" === f ? s.outputLoggerConsole : function () {
                function e(e) {
                    return function (...t) {
                        d.printEtwLog(e, function (...e) {
                            return e.map(e => r.inspect(e)).join(" ").replace(/%/g, "%%")
                        }(...t))
                    }
                }

                return {
                    [s.LogLevel.Critical]: e(s.LogLevel.Critical),
                    [s.LogLevel.Error]: e(s.LogLevel.Error),
                    [s.LogLevel.Warning]: e(s.LogLevel.Warning),
                    [s.LogLevel.Information]: e(s.LogLevel.Information),
                    [s.LogLevel.Verbose]: e(s.LogLevel.Verbose)
                }
            }()
        }

        function m() {
            return i(this, void 0, void 0, function* () {
                l.DevEnvHelperNS.isLogEnable().then(e => {
                    e && "1" === h !== e && (h = e ? "1" : "0", process.env.TL_ENABLE = h)
                }).catch(), l.DevEnvHelperNS.getLogOutput().then(e => {
                    e && e !== f && (f = e, p())
                }).catch()
            })
        }

        p(), m().catch(), "browser" === process.type ? c.ipcMain.on(u.ThunderChannelList.channelRMUpdateLogEnviroment, () => {
            c.BrowserWindow.getAllWindows().forEach(e => {
                e.isDestroyed() || e.webContents.send(u.ThunderChannelList.channelMRUpdateLogEnviroment)
            })
        }) : "renderer" === process.type && c.ipcRenderer.on(u.ThunderChannelList.channelMRUpdateLogEnviroment, () => {
            m().catch()
        })
    }, 430: function (e, t, n) {
        "use strict";
        var i = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
            return r > 3 && s && Object.defineProperty(t, n, s), s
        }, o = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(5), s = n(872), a = n(16), l = n(4), c = n(500), u = n(614), d = n(15),
            h = n(1).default.getLogger("Thunder.SuspensionRender FloatPanelVue"),
            f = u.HoverTextManagerNS.getHoverTextManager();
        let p = class extends r.Vue {
            constructor() {
                super(...arguments), this.downloadTaskCount = 0, this.taskBaseInfos = {}, this.haveDownloadTask = !1, this.taskIdLists = [], this.yellowTextShow = !1, this.blueTextShow = !1, this.textShowTimer = null, this.timerPause = !1, this.vipNoTaskText = "", this.vipNoTaskUrl = "", this.vipNoTaskReferfrom = "", this.vipNoTaskAidfrom = "", this.vipNoTaskColor = ""
            }

            onIsVipChanged(e) {
                h.information("onIsVipChanged", e), this.updateVipText()
            }

            onIsLoginedChanged(e) {
                h.information("onIsLoginedChanged", e), this.resetVipTextData()
            }

            onIsVisibleChanged(e) {
                h.information("onIsVisibleChanged", e), this.updateVipText(), e && this.initVipNoTaskText().catch()
            }

            onShowVipNoTaskText(e) {
                if (h.information("onShowVipNoTaskText", e), e) {
                    let e = this.getCommonExtData();
                    this.statVipEvent("float_hover_vipsp_show", e)
                }
            }

            get haveDownloadTaskStyle() {
                let e = "display: none";
                return this.haveDownloadTask && (e = ""), e
            }

            get isHaveDownloadTaskStyle() {
                let e = "";
                return this.haveDownloadTask && (e = "display: none"), e
            }

            get showVipNoTaskText() {
                return this.isVisible && !this.haveDownloadTask && Boolean(this.vipNoTaskText) && Boolean(this.vipNoTaskUrl)
            }

            onClickShowFinishTask() {
                this.stat("float_monitor_hover_finished_click"), l.client.callServerFunction("SelectCategoryView", -1, a.DownloadKernel.CategroyViewID.Completed, void 0, !0).catch(), this.$emit("show-float-panel", !1)
            }

            onClickVipNoTaskText() {
                let e = this.vipNoTaskUrl;
                -1 !== e.indexOf("?") ? e += `&referfrom=${this.vipNoTaskReferfrom}&aidfrom=${this.vipNoTaskAidfrom}` : e += `?referfrom=${this.vipNoTaskReferfrom}&aidfrom=${this.vipNoTaskAidfrom}`, l.client.callServerFunction("OpenNewTab", e).catch();
                let t = this.getCommonExtData();
                this.statVipEvent("float_hover_vipsp_click", t)
            }

            dbclickItem(e) {
                this.stat("float_monitor_hover_downloading_click"), l.client.callServerFunction("SelectCategoryView", -1, a.DownloadKernel.CategroyViewID.Downloading, e, !0).catch(), this.$emit("show-float-panel", !1)
            }

            refresh() {
                return o(this, void 0, void 0, function* () {
                    let e = !1, t = 0, n = 0, i = !1, o = void 0;
                    this.downloadTaskCount = this.taskIdLists.length, this.haveDownloadTask = this.downloadTaskCount > 0;
                    let r = [], s = void 0;
                    for (let i = 0; i < this.taskIdLists.length; i++) s = this.taskIdLists[i], c.FloatPanelHelper.isDownloadStatus(this.taskBaseInfos[s].taskStatus) && (e = !0, t += this.taskBaseInfos[s].downloadSpeed, n += this.taskBaseInfos[s].vipSpeed, r.push(s));
                    (i = 1 === r.length) && (o = c.FloatPanelHelper.getTaskStartPrompt(this.taskBaseInfos[r[0]]), this.taskBaseInfos[r[0]].taskStatus === a.DownloadKernel.TaskStatus.StartPending && void 0 === o && (o = "连接资源")), this.$emit("download-event", e, t, n, i, o)
                })
            }

            onGetTaskListCallback(e) {
                e ? (e.sort((e, t) => t.createTime - e.createTime), this.taskIdLists = e.map(e => (r.Vue.set(this.taskBaseInfos, e.taskId, e), e.taskId))) : (this.downloadTaskCount = 0, this.haveDownloadTask = !1), this.refresh(), l.client.attachServerEvent("OnTaskInserted", this.onTaskInsertedCallback), l.client.attachServerEvent("OnTaskRemoved", this.onTaskRemovedCallback), l.client.attachServerEvent("OnTaskStatusChanged", this.onTaskStatusChangedCallback), l.client.attachServerEvent("OnTaskDetailChanged", this.onTaskDetailChangedCallback)
            }

            getTaskListAfterLoadTaskFinish() {
                l.client.callServerFunction("GetCategoryViewTaskListForSuspensionWnd", a.DownloadKernel.CategroyViewID.Downloading).then(e => {
                    this.onGetTaskListCallback(e)
                })
            }

            onGetTaskBaseInfoCallback(e) {
                let t = null;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    h.warning(e)
                }
                if (null !== t) {
                    let e = t.taskId;
                    void 0 !== this.taskBaseInfos[e] ? this.taskBaseInfos[e] = t : (r.Vue.set(this.taskBaseInfos, e, t), this.taskIdLists.splice(0, 0, e)), this.refresh()
                }
            }

            onTaskInsertedCallback(e, t, n, i) {
                if (-1 === t && n === a.DownloadKernel.CategroyViewID.Downloading) {
                    let e = null;
                    try {
                        e = JSON.parse(i)
                    } catch (e) {
                        h.warning(e)
                    }
                    if (null !== e) for (let t = 0; t < e.length; ++t) l.client.callServerFunction("GetTaskBaseInfo", e[t]).then(e => {
                        this.onGetTaskBaseInfoCallback(e)
                    })
                }
            }

            onTaskRemovedCallback(e, t, n, i) {
                if (-1 === t && n === a.DownloadKernel.CategroyViewID.Downloading) {
                    let e = [];
                    try {
                        e = JSON.parse(i)
                    } catch (e) {
                        h.warning(e)
                    }
                    for (let t = 0; t < e.length; ++t) for (let n = 0; n < this.taskIdLists.length; ++n) if (this.taskIdLists[n] === e[t]) {
                        this.taskIdLists.splice(n, 1), delete this.taskBaseInfos[e[t]];
                        break
                    }
                    this.taskIdLists.length > 0 ? this.haveDownloadTask = !0 : this.haveDownloadTask = !1, this.refresh()
                }
            }

            onTaskStatusChangedCallback(e, t) {
                {
                    let e = null;
                    try {
                        e = JSON.parse(t)
                    } catch (e) {
                        h.warning(e)
                    }
                    if (null !== e) {
                        for (let t in e) {
                            let n = e[t];
                            void 0 !== this.taskBaseInfos[t] && (this.taskBaseInfos[t].taskStatus = n)
                        }
                        this.refresh()
                    }
                }
            }

            onTaskDetailChangedCallback(e, t) {
                {
                    let e = null;
                    try {
                        e = JSON.parse(t)
                    } catch (e) {
                        h.warning(e)
                    }
                    if (null !== e) {
                        for (let t in e) {
                            let n = e[t];
                            void 0 !== this.taskBaseInfos[t] && (this.taskBaseInfos[t] = n)
                        }
                        this.refresh()
                    }
                }
            }

            listenTasksEvent() {
                l.client.callServerFunction("IsLoadStorageTaskFinish").then(e => {
                    e && this.getTaskListAfterLoadTaskFinish()
                })
            }

            stat(e, t) {
                let n = "";
                null !== t && void 0 !== t && "" !== t && (n = t), h.information(e, n), d.XLStatNS.trackEvent("client_quick", e, "", 0, 0, 0, 0, n)
            }

            statVipEvent(e, t) {
                let n = "";
                null !== t && void 0 !== t && "" !== t && (n = t), h.information(e, n), d.XLStatNS.trackEvent("xlx_vip_event", e, "", 0, 0, 0, 0, n)
            }

            escape2Html(e) {
                return e.replace("&gt;", ">")
            }

            checkUrlRefParam(e) {
                return -1 === e.indexOf("?") && (e += "?"), e += "referfrom=v_pc_xlx_ggong_pay_xfq"
            }

            getCommonExtData() {
                let e = "";
                return e = (e = (e = e + ",is_login=" + (this.isLogined ? "1" : "0")) + ",is_vip=" + (this.isVip ? "1" : "0")) + ",vip_type=" + this.vipType
            }

            onTextShow(e) {
                h.information("onTextShow", e);
                let t = this.getCommonExtData();
                t = t + ",type=" + e, this.statVipEvent("float_hover_wzl_show", t)
            }

            onTextClick(e) {
                h.information("onTextShow");
                let t = this.getCommonExtData();
                t = t + ",type=" + e, this.statVipEvent("float_open_vip_click", t);
                let n = this.yellowTextUrl + "&aidfrom=xds_golden";
                "blue" === e && (n = this.blueTextUrl + "&aidfrom=xds_common"), h.information("url", n), l.client.callServerFunction("BringMainWndToTop").catch(), l.client.callServerFunction("OpenNewTab", n).catch()
            }

            resetVipTextData() {
                let e = f.getText(this.isLogined);
                if (h.information("textData", e), e) for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    h.information("element", n), n && n.color && "yellow" === n.color && (n.text && "" !== n.text && (this.yellowhoverText = this.escape2Html(n.text)), n.url && "" !== n.url && (this.yellowTextUrl = this.checkUrlRefParam(n.url))), n && n.color && "blue" === n.color && (n.text && "" !== n.text && (this.bluehoverText = this.escape2Html(n.text)), n.url && "" !== n.url && (this.blueTextUrl = this.checkUrlRefParam(n.url)))
                }
            }

            showVipText() {
                this.yellowTextShow = !1, this.blueTextShow = !0;
                let e = this.getCommonExtData();
                this.statVipEvent("float_hover_show", e), this.onTextShow("1"), h.information("bluehoverText", this.bluehoverText), h.information("yellowhoverText", this.yellowhoverText), h.information("blueTextUrl", this.blueTextUrl), h.information("yellowTextUrl", this.yellowTextUrl), h.information("textShowTimer", this.textShowTimer), this.textShowTimer || (this.textShowTimer = setInterval(() => {
                    this.timerPause || (this.blueTextShow = !this.blueTextShow, this.yellowTextShow = !this.yellowTextShow, h.information("bluehoverText", this.bluehoverText), h.information("yellowhoverText", this.yellowhoverText), h.information("blueTextUrl", this.blueTextUrl), h.information("yellowTextUrl", this.yellowTextUrl), h.information("blueTextShow", this.blueTextShow), h.information("yellowTextShow", this.yellowTextShow), this.blueTextShow && this.onTextShow("1"), this.yellowTextShow && this.onTextShow("2"))
                }, 5e3))
            }

            hideVipText() {
                this.blueTextShow = !1, this.yellowTextShow = !1, this.textShowTimer && (clearInterval(this.textShowTimer), this.textShowTimer = null)
            }

            updateVipText() {
                !this.isVip && this.isVisible ? this.showVipText() : this.hideVipText()
            }

            onMouseOver(e) {
                h.information("onMouseOver", e), h.information("isDonwloading", f.isDonwloading), this.timerPause = !0, e && this.$emit("set-vip-skin", !0)
            }

            onMouseLeave(e) {
                h.information("onMouseLeave", e), this.timerPause = !1, e && this.$emit("set-vip-skin", !1)
            }

            clearVipNoTaskText() {
                this.vipNoTaskText = "", this.vipNoTaskUrl = "", this.vipNoTaskReferfrom = "", this.vipNoTaskAidfrom = "", this.vipNoTaskColor = ""
            }

            initVipNoTaskText() {
                return o(this, void 0, void 0, function* () {
                    this.clearVipNoTaskText();
                    let e = yield l.client.callServerFunction("GetVipLabelConfig", "xlx_xfq_notask_text");
                    h.information("initVipNoTaskText", e);
                    let t = e && e.xlx_xfq_notask_text ? e.xlx_xfq_notask_text : null;
                    if (t) {
                        let e = 0, n = t[e];
                        n && (n.text && (this.vipNoTaskText = n.text), n.url && (this.vipNoTaskUrl = n.url), this.vipNoTaskReferfrom = n.referfrom, this.vipNoTaskAidfrom = n.aidfrom), (n = t[e = 1]) && n.text && (this.vipNoTaskColor = n.text)
                    }
                })
            }

            mounted() {
                this.listenTasksEvent(), h.information("float-panel mounted"), this.resetVipTextData(), this.updateVipText()
            }

            destroyed() {
                null !== this.textShowTimer && (clearTimeout(this.textShowTimer), this.textShowTimer = null)
            }
        };
        i([r.Prop({})], p.prototype, "isLogined", void 0), i([r.Prop({})], p.prototype, "isVip", void 0), i([r.Prop({})], p.prototype, "vipType", void 0), i([r.Prop({})], p.prototype, "isVisible", void 0), i([r.Watch("isVip")], p.prototype, "onIsVipChanged", null), i([r.Watch("isLogined")], p.prototype, "onIsLoginedChanged", null), i([r.Watch("isVisible")], p.prototype, "onIsVisibleChanged", null), i([r.Watch("showVipNoTaskText")], p.prototype, "onShowVipNoTaskText", null), p = i([r.Component({components: {TaskItem: s.default}})], p), t.default = p
    }, 431: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(432), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 432: function (e, t, n) {
        "use strict";
        var i = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
            return r > 3 && s && Object.defineProperty(t, n, s), s
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(6), r = n(5), s = n(58), a = n(500);
        let l = class extends r.Vue {
            get taskName() {
                return this.taskBase.taskName
            }

            get getTaskProgress() {
                let e = "width: ", t = 0;
                0 !== this.taskBase.fileSize && (t = this.taskBase.downloadSize / this.taskBase.fileSize), t >= 1 && (t = .9999);
                let n = (100 * t).toFixed(2) + "%";
                return "100.00%" === n && (n = "99.99%"), e += n
            }

            get getTaskIcon() {
                if (0 === this.taskBase.taskType) return "xlx-icon-type-group";
                return "xlx-icon" + s.TaskUtilHelper.getTaskIcon(this.taskBase.taskName, this.taskBase.taskType).slice(3)
            }

            get stateName() {
                let e = "", t = a.FloatPanelHelper.getTaskStatusPrompt(this.taskBase),
                    n = a.FloatPanelHelper.getTaskStartPrompt(this.taskBase);
                return o.isNullOrUndefined(n) ? o.isNullOrUndefined(t) || (e = t) : e = n, e
            }
        };
        i([r.Prop({})], l.prototype, "taskBase", void 0), l = i([r.Component({})], l), t.default = l
    }, 44: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(23), o = n(14), r = n(26), s = n(42), a = n(24);
        t.Client = class extends o.EventEmitter {
            constructor(e) {
                if (e = e || {}, super(), this.inprocess = !1, this.context = void 0, e.context && (this.context = Object.assign({}, e.context), this.context.productId = e.socketPrex), e.socket) this.socket = e.socket, this.bind(); else if (global.__xdasIPCServer && global.__xdasIPCServer.getProductId().toLowerCase() === e.socketPrex.toLowerCase()) this.inprocess = !0; else {
                    let t = a.getSockPath(e.socketPrex);
                    this.socket = i.connect(t), this.bind()
                }
            }

            isInprocess() {
                return this.inprocess
            }

            getContext() {
                return this.context
            }

            bind() {
                const e = new s.Parser, t = this.socket;
                t.on("data", t => {
                    e.feed(t)
                }), t.on("connect", () => {
                    this.emit("connect")
                }), t.on("end", () => {
                    r.information("socket is ended"), this.socket = null, this.emit("end")
                }), t.on("error", e => {
                    r.error(e.message), this.socket = null, this.emit("error", e)
                }), e.on("message", e => {
                    this.emit("message", e)
                }), this.parser = e
            }

            send(e) {
                if (this.socket) try {
                    this.socket.write(this.parser.encode(e))
                } catch (e) {
                    r.error(e.message)
                } else r.information("This socket has been ended by the other party")
            }
        }
    }, 45: function (e, t) {
        e.exports = require("string_decoder")
    }, 46: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(12), r = (n(19), n(2)), s = n(6);
        let a = null;
        const l = n(15), c = n(3), u = n(1), d = n(9), h = n(18), f = n(7), p = "xdas_profile_stat";
        let m = "", g = void 0, _ = null, v = void 0, b = null,
            T = d.default(r.join(__rootDir, "../bin/ThunderHelper.node")), S = new Set;

        function y() {
            return i(this, void 0, void 0, function* () {
                return new Promise(e => i(this, void 0, void 0, function* () {
                    void 0 === v && (null === b && (b = new Promise(e => {
                        e(v = function (e) {
                            let t = "";
                            if (0 === e.length && "renderer" === process.type) {
                                let e = r.normalize(decodeURIComponent(window.location.href)),
                                    n = e.indexOf(process.resourcesPath);
                                n = n > -1 ? n + process.resourcesPath.length + 1 : n;
                                let i = e.length - 1, o = e.indexOf("?"), s = e.indexOf("#");
                                i = o > -1 ? Math.min(o - 1, i) : i, i = s > -1 ? Math.min(s - 1, i) : i, n > -1 && i >= n && (t = e.substr(n, i - n + 1))
                            }
                            return 0 === t.length && (t = 0 !== e.length ? e : process.type), t = t.replace(/\||,|;/g, "_")
                        }(""))
                    })), v = yield b), e(v)
                }))
            })
        }

        function w(e) {
            let t = "";
            do {
                if (null === e || void 0 === e) break;
                switch (typeof e) {
                    case"string":
                        t = e;
                        break;
                    case"object":
                        t = s.inspect(e) || "";
                        break;
                    case"number":
                    case"boolean":
                        t = e.toString() || ""
                }
            } while (0);
            return t
        }

        function C(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function E(e) {
            return i(this, void 0, void 0, function* () {
                return new Promise(t => i(this, void 0, void 0, function* () {
                    let i = void 0;
                    null === a && (a = yield Promise.resolve().then(() => n(36)));
                    let o = a.createHash("md5");
                    null !== o && (i = o.update(e).digest("hex")), t(i)
                }))
            })
        }

        function R() {
            return new Promise(e => i(this, void 0, void 0, function* () {
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
                    return i(this, void 0, void 0, function* () {
                        return null === _ && (_ = new Promise(e => {
                            c.ipcRenderer.send(h.ThunderChannelList.channelRMGetBrowserStartType), c.ipcRenderer.once(h.ThunderChannelList.channelMRGetBrowserStartTypeResult, (t, n) => {
                                g = n, e(n), _ = null
                            })
                        })), _
                    })
                }() : g, e(t)
            }))
        }

        function k(e, t, n, o) {
            return i(this, void 0, void 0, function* () {
                let r = w(t), s = w(n), a = yield E(s), c = function (e) {
                    let t = new RegExp(C("file:///"), "g"), n = new RegExp(C(process.resourcesPath + "\\"), "g"),
                        i = new RegExp(C(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                    return e.replace(t, "").replace(n, "").replace(i, "")
                }(w(o)), u = yield E(c), d = `${e}:${a}:${u}`;
                S.has(d) || (S.add(d), l.XLStatNS.trackEvent(p, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield y()},code=${r},message_hash=${a},message=${encodeURI(s)},stack_hash=${u},stack=${encodeURI(c)}`)), function (e, t, n, o) {
                    return i(this, void 0, void 0, function* () {
                    })
                }().catch()
            })
        }

        function I(e) {
            console.error(e);
            let t = e || {};
            k("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
        }

        !function (e) {
            e.init = function (e) {
                m = e
            }, e.trackColdStartUpEvent = function (e) {
                return i(this, void 0, void 0, function* () {
                    let t = T.iSColdStartUp() ? 1 : 0, n = o.release(),
                        i = T.performanceMonitorReporter.getProcessUptime(), r = yield R(),
                        s = `key=${e},start_type=${r},cold_start_up=${t},os_version=${n},cost_time=${i}`;
                    l.XLStatNS.trackEvent(p, "cold_start_up", "", 0, 0, 0, 0, s)
                })
            }
        }(t.PerformanceMonitorStatNS || (t.PerformanceMonitorStatNS = {})), function () {
            return i(this, void 0, void 0, function* () {
                if (process.on("uncaughtException", e => {
                    console.error(e);
                    let t = e || {};
                    k("uncaughtException", t.code, t.message, t.stack).catch()
                }), "browser" === process.type) process.on("unhandledRejection", (e, t) => {
                    I(e)
                }), c.ipcMain.on(h.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
                    return i(this, void 0, void 0, function* () {
                        let t = yield R();
                        e.sender.send(h.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
                    })
                }); else if ("browser" !== process.type) {
                    window.addEventListener("unhandledrejection", e => {
                        I(e && e.reason || {})
                    });
                    let e = yield f.asyncRemoteCall.getCurrentWebContents();
                    null !== e && void 0 !== e && e.once("did-finish-load", () => {
                        (function () {
                            return i(this, void 0, void 0, function* () {
                                do {
                                    if ("browser" === process.type) break;
                                    if (null === window.performance.timing || void 0 === window.performance.timing) break;
                                    let e = T.iSColdStartUp() ? 1 : 0, t = o.release(), n = window.performance.timing,
                                        i = n.loadEventEnd - n.navigationStart, r = n.fetchStart - n.navigationStart,
                                        s = n.domainLookupEnd - n.domainLookupStart, a = n.connectEnd - n.connectStart,
                                        c = n.responseStart - n.requestStart, u = n.responseEnd - n.responseStart,
                                        d = n.domComplete - n.domLoading, h = yield R();
                                    l.XLStatNS.trackEvent(p, "page_load_time", "", 0, 0, 0, 0, `start_type=${h},cold_start_up=${e},os_version=${t},load_time=${i},before_fetch_time=${r},domin_lookup_time=${s},connect_time=${a},first_response_time=${c},responseTime=${u},domTime=${d},process=${m}`)
                                } while (0)
                            })
                        })().catch()
                    })
                }
                u.default.hook("beforeLog", (e, t, ...n) => {
                    e === u.LogLevel.Critical && l.XLStatNS.trackEvent(p, "critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${n}`)
                })
            })
        }().catch()
    }, 47: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(40), r = n(48), s = n(49), a = n(28), l = n(50), c = n(17), u = i.isPromise,
            d = i.ipcRenderer, h = process.atomBinding("v8_util"), f = new r.default, p = h.createIDWeakMap();

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
                let i = e;
                if (Array.isArray(e)) {
                    t.add(e);
                    let n = {type: "array", value: g(e, t)};
                    return t.delete(e), n
                }
                if (ArrayBuffer.isView(i)) return {type: "buffer", value: o.Buffer.from(e)};
                if (e instanceof Date) return {type: "date", value: e.getTime()};
                if (null != e && "object" == typeof e) {
                    if (u(e)) return {
                        type: "promise", then: n(function (t, n) {
                            e.then(t, n)
                        })
                    };
                    if (h.getHiddenValue(e, "__remote_id__")) return {
                        type: "remote-object",
                        id: h.getHiddenValue(e, "__remote_id__")
                    };
                    let i = {
                        type: e instanceof m ? "interest" : "object",
                        name: e.constructor ? e.constructor.name : "",
                        members: []
                    };
                    t.add(e);
                    for (let t in e) i.members.push({name: t, value: n(e[t])});
                    return t.delete(e), i
                }
                if ("function" == typeof e) {
                    return {
                        type: "function",
                        id: f.add(e),
                        location: h.getHiddenValue(e, "__remote_call_location__"),
                        length: e.length
                    }
                }
                return {type: "value", value: e}
            };
            return e.map(n)
        }

        function _(e, t, n) {
            u(e) ? e.then(e => {
                t(e)
            }, e => {
                n(e)
            }) : t(e)
        }

        function v(e, t, n, i = !1) {
            const o = t => {
                if (e.hasOwnProperty(t.name) && !i) return;
                let n, o = {enumerable: t.enumerable, configurable: !0};
                if ("method" === t.type) {
                    if (t.value.refId) {
                        if (p.has(t.value.refId) && (n = p.get(t.value.refId)), null == n) throw new Error("member refId pointer to null" + t.value.refId + "name: " + t.name)
                    } else n = y(t.value, e, t.name);
                    o.get = (() => n), o.set = (e => n = e)
                } else "get" === t.type && (o.get = (() => n), t.writable && (o.set = (e => {
                    n = e
                })), n = y(t.value));
                Object.defineProperty(e, t.name, o)
            };
            if (Array.isArray(n)) {
                let e = n.length;
                for (let t = 0; t < e; t++) o(n[t])
            }
        }

        function b(e, t, n) {
            if (n) {
                let t = y(n);
                Object.setPrototypeOf(e, t)
            }
        }

        function T(e, t) {
            h.setHiddenValue(e, "__remote_id__", t)
        }

        function S(e) {
            return h.getHiddenValue(e, "__remote_id__")
        }

        function y(e, t, n) {
            const i = {
                value: () => e.value,
                array: () => e.members.map(e => y(e)),
                buffer: () => o.Buffer.from(e.value),
                promise: () => Promise.resolve({then: y(e.then)}),
                error: () => (function (e) {
                    const t = (() => "error" === e.type ? new Error : {})();
                    for (let n = 0; n < e.members.length; n++) {
                        let {name: i, value: o} = e.members[n];
                        t[i] = o
                    }
                    return t
                })(e),
                date: () => new Date(e.value),
                exception: () => {
                    throw new Error(`${e.message}\n${e.stack}`)
                }
            };
            let r;
            return e.type in i ? r = i[e.type]() : e.refId ? p.has(e.refId) ? r = p.get(e.refId) : (c.warn("[metaToValue] refId point to null" + e.refId), r = "function" === e.type ? () => {
            } : {}) : e.id ? p.has(e.id) ? (v(r = p.get(e.id), e.id, e.members, !0), b(r, e.id, e.proto)) : (r = "function" === e.type ? t ? function (e, t, n) {
                if (p.has(n.id)) return p.get(n.id);
                let i = S(e), o = function (...e) {
                    throw Error("never should come to a proxied function")
                };
                Object.defineProperty(o, "name", {value: t, writable: !1, enumerable: !0});
                let r = new Proxy(o, {
                    apply: (e, n, o) => new Promise((e, r) => {
                        let c = S(n);
                        if (c || (c = S(n.__remoteObj_)), !c) throw Error("is this function was a bound function?");
                        let u = a.default.browser.memberCall, h = l.default(u), f = g(o);
                        d.send(u, h, c, i, t, f), s.default.add(h, t => {
                            try {
                                _(y(t), e, r)
                            } catch (e) {
                                r(e)
                            }
                        })
                    }), construct: (e, n, o) => new Promise((e, o) => {
                        let r = a.default.browser.memberConstruct, c = l.default(r);
                        d.send(r, c, i, t, g(n)), s.default.add(c, t => {
                            try {
                                let n = y(t);
                                e(n)
                            } catch (e) {
                                o(e)
                            }
                        })
                    })
                });
                return h.setHiddenValue(o, "__remote_id__", n.id), r
            }(t, n, e) : function (e) {
                let t = e.id;
                const n = function (...e) {
                    throw new Error("Should Never com to a remoteFunction PlaceHolder")
                };
                return T(n, t), new Proxy(n, {
                    apply: (e, n, i) => new Promise((e, o) => {
                        let r = a.default.browser.functionCall, c = l.default(r), u = S(n);
                        d.send(r, c, u, t, g(i)), s.default.add(c, t => {
                            try {
                                _(y(t), e, o)
                            } catch (e) {
                                o(e)
                            }
                        })
                    }), construct: (e, n, i) => new Promise((e, i) => {
                        let o = a.default.browser.construct, r = l.default(o);
                        d.send(o, r, t, g(n)), s.default.add(r, t => {
                            try {
                                let n = y(t);
                                e(n)
                            } catch (e) {
                                i(e)
                            }
                        })
                    })
                })
            }(e) : {}, h.setRemoteObjectFreer(r, e.id), p.set(e.id, r), h.setHiddenValue(r, "__remote_id__", e.id), function (e) {
                let t = S(e);
                Object.defineProperties(e, {
                    __set: {
                        enumerable: !1, writable: !1, value: function (n, i) {
                            if ("function" == typeof i) throw new Error("set a function to a remote member is dangerous");
                            return new Promise((o, r) => {
                                let c = a.default.browser.memberSet, u = l.default(c), h = g([i]);
                                d.send(c, u, t, n, h), s.default.add(u, t => {
                                    try {
                                        let s = y(t);
                                        e[n] = i, o(s)
                                    } catch (e) {
                                        r(e)
                                    }
                                })
                            })
                        }
                    }, __get: {
                        enumerable: !1, writable: !1, value: function (n) {
                            return new Promise((i, o) => {
                                let r = a.default.browser.memberGet, c = l.default(r);
                                d.send(r, c, t, n), s.default.add(c, t => {
                                    try {
                                        const r = y(t);
                                        e[n] = r, i(r)
                                    } catch (e) {
                                        o(e)
                                    }
                                })
                            })
                        }
                    }, __sync: {
                        enumerable: !1, writable: !1, value: function () {
                            return new Promise((e, n) => {
                                let i = a.default.browser.sync, o = l.default(i);
                                d.send(i, o, t), s.default.add(o, i => {
                                    try {
                                        if (i.id !== t) throw Error("SYNC_RETURN: remote id not match");
                                        let o = y(i);
                                        e(o)
                                    } catch (e) {
                                        n(e)
                                    }
                                })
                            })
                        }
                    }
                })
            }(r), v(r, e.id, e.members), b(r, e.id, e.proto), Object.defineProperty(r.constructor, "name", {value: e.name}), e.extendedMemberNames && e.extendedMemberNames.forEach((e, t) => {
                let n = r[e], i = r.__proto__;
                for (; i;) {
                    if (Object.prototype.hasOwnProperty.call(i, e)) {
                        delete i[e];
                        break
                    }
                    i = i.__proto__
                }
                Object.defineProperty(r, e, {value: n, enumerable: !1, writable: !1, configurable: !0})
            })) : c.error("no id of meta:", e), r
        }

        t.Interest = m;

        class w {
            constructor(...e) {
                if (this.__resolved_ = !1, this.__promise_ = null, this.__remoteObj_ = null, this.__what_ = "", this.__name_ = "", "string" === typeof arguments[0]) {
                    let e = arguments[0], t = arguments[1];
                    this.__what_ = e, this.__name_ = t || e, this.__resolved_ = !1, this.__remoteObj_ = null, this.__promise_ = new Promise((n, i) => {
                        let o = this.getChannel(e), r = l.default(o);
                        d.send(o, r, t), s.default.add(r, e => {
                            try {
                                let t = y(e);
                                this.__remoteObj_ = t, this.__resolved_ = !0, n(t)
                            } catch (e) {
                                i(e)
                            }
                        })
                    })
                } else this.__remoteObj_ = arguments[0], this.__resolved_ = !0, this.__promise_ = null
            }

            getChannel(e) {
                let t = "";
                switch (e) {
                    case"module":
                        t = a.default.browser.require;
                        break;
                    case"builtin":
                        t = a.default.browser.builtIn;
                        break;
                    case"global":
                        t = a.default.browser.global;
                        break;
                    case"current_window":
                        t = a.default.browser.currentWindow;
                        break;
                    case"current_web_contents":
                        t = a.default.browser.currentWebContents;
                        break;
                    case"client_web_contents":
                        t = a.default.browser.clientWebContents
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

        function C(e, t, n) {
            try {
                s.default.invoke(t, n).remove(t)
            } finally {
                s.default.remove(t)
            }
        }

        d.on(a.default.renderer.requireReturn, C), d.on(a.default.renderer.getBuiltInReturn, C), d.on(a.default.renderer.getGlobalReturn, C), d.on(a.default.renderer.currentWindowReturn, C), d.on(a.default.renderer.currentWebContentsReturn, C), d.on(a.default.renderer.functionCallReturn, C), d.on(a.default.renderer.constructReturn, C), d.on(a.default.renderer.memberCallReturn, C), d.on(a.default.renderer.memberSetReturn, C), d.on(a.default.renderer.memberGetReturn, C), d.on(a.default.renderer.memberConstructReturn, C), d.on(a.default.renderer.callback, (e, t, n) => {
            f.apply(t, y(n))
        }), d.on(a.default.renderer.syncReturn, C), d.on("ELECTRON_RENDERER_RELEASE_CALLBACK", (e, t) => {
            c.info("[RELEASE_CALLBACK]: callbackId:", t), f.remove(t)
        }), process.on("exit", () => {
            d.send(a.default.browser.contextRelease)
        });
        const E = ["__resolve", "__isResolved"],
            R = ["__promise_", "__resolved_", "__remoteObj_", "__name_", "__what_"], k = e => {
                if (!e.__isResolved()) throw Error("Can not access the property of a remote module which has not Resolved yet.")
            };

        function I(e) {
            const t = function () {
            };
            Object.defineProperty(t, "name", {value: e.__name_}), Object.defineProperty(t, "what", {
                enumerable: !1,
                value: e.__what_
            });
            let n = new Proxy(t, {
                getPrototypeOf: t => (k(e), Reflect.getPrototypeOf(e.__remoteObj_)),
                setPrototypeOf: (e, t) => {
                    throw new Error("changing prototype of remote object is forbidden")
                },
                isExtensible: t => (k(e), Reflect.isExtensible(e.__remoteObj_)),
                preventExtensions: t => (k(e), Reflect.preventExtensions(e)),
                getOwnPropertyDescriptor: (t, n) => (k(e), Reflect.getOwnPropertyDescriptor(e.__remoteObj_, n)),
                has: (t, n) => (k(e), Reflect.has(e.__remoteObj_, n)),
                deleteProperty: (t, n) => (k(t), Reflect.deleteProperty(e.__remoteObj_, n)),
                defineProperty: (t, n, i) => (k(e), Reflect.defineProperty(e.__remoteObj_, n, i)),
                get: (t, n, i) => {
                    if ("string" == typeof n) {
                        if (String.prototype.includes.call(R, n)) {
                            return e[n]
                        }
                        if (String.prototype.includes.call(E, n)) {
                            return e[n]
                        }
                    }
                    return k(e), Reflect.get(e.__remoteObj_, n)
                },
                set: (t, n, i, o) => (k(e), Reflect.set(e.__remoteObj_, n, i, o)),
                ownKeys: t => (k(e), Reflect.ownKeys(e.__remoteObj_)),
                apply: (t, n, i) => {
                    k(e), Reflect.apply(e.__remoteObj_, n, i)
                },
                construct: (t, n, i) => {
                    if (k(e), "function" != typeof e.__remoteObj_) throw Error("operator new ONLY used for function");
                    return new Promise((t, i) => {
                        let o = a.default.browser.construct, r = l.default(o),
                            c = h.getHiddenValue(e.__remoteObj_, "__remote_id__");
                        d.send(o, r, c, g(n)), s.default.add(r, e => {
                            try {
                                t(y(e))
                            } catch (e) {
                                i(e)
                            }
                        })
                    })
                }
            });
            return e.__promise_.then(e => {
                let t = typeof e;
                if ("function" === t || "object" === t) {
                    let t = S(e);
                    t && T(n, t)
                }
            }), n
        }

        t.remoteRequire = function (e) {
            return I(new w("module", e))
        }, t.getBuiltin = function (e) {
            return I(new w("builtin", e))
        }, t.getGlobal = function (e) {
            return I(new w("global", e))
        }, t.getCurrentWindow = function () {
            return I(new w("current_window"))
        }, t.getCurrentWebContents = function () {
            return I(new w("current_web_contents"))
        }
    }, 48: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = process.atomBinding("v8_util");
        t.default = class {
            constructor() {
                this.nextId = 0, this.callbacks = {}
            }

            add(e) {
                let t = i.getHiddenValue(e, "__remote_callback_id__");
                if (null != t) return t;
                t = this.nextId -= 1;
                const n = /at (.*)/gi, o = (new Error).stack;
                let r, s = n.exec(o);
                for (; null !== s;) {
                    const e = s[1];
                    if (!e.includes("native") && !e.includes("electron.asar")) {
                        r = /([^/^)]*)\)?$/gi.exec(e)[1];
                        break
                    }
                    s = n.exec(o)
                }
                return this.callbacks[t] = e, i.setHiddenValue(e, "__remote_callback_id__", t), i.setHiddenValue(e, "__remote_call_location__", r), t
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
                t && (i.deleteHiddenValue(t, "__remote_callback_id__"), delete this.callbacks[e])
            }
        }
    }, 486: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(150), r = n(487), s = n(1).default.getLogger("Thunder.SuspensionRender.hovertext");
        t.SettingHttpSession = class extends o.HttpSession {
            querySetting() {
                return i(this, void 0, void 0, function* () {
                    return this.host = "images.client.vip.xunlei.com", this.retries = 2, this.timeout = 2e4, this.path = "/mini/xlx/tips_300x310/ssi_html/xds_common.js", s.information("uri:" + this.path), s.information("host:" + this.host), new Promise(e => {
                        this.get(t => {
                            let n = null;
                            s.information("response", n), 200 === t.statusCode && t.body && (n = r.SettingHttpPackageNS.praseQueryBuffer(t.body)), e(n)
                        }, t => {
                            s.information("error", t), e(null)
                        })
                    })
                })
            }
        }
    }, 487: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(1).default.getLogger("Thunder.SuspensionRender.hovertext");
        !function (e) {
            e.praseQueryBuffer = function (e) {
                if (!e) return null;
                let t = e.toString(), n = null;
                try {
                    n = JSON.parse(t)
                } catch (e) {
                }
                if (i.information("resObj", n), !n) return null;
                let o = n.hangball ? n.hangball : null;
                i.information("touches", o);
                let r = null;
                if (o && o.unlogin) {
                    let e = o.unlogin ? o.unlogin : null;
                    i.information("unlogin", e), r = {unlogin: e, notvip: null}
                }
                if (o && o.notvip) {
                    let e = o.notvip ? o.notvip : null;
                    i.information("notvip", e), r.notvip = e
                }
                return r
            }
        }(t.SettingHttpPackageNS || (t.SettingHttpPackageNS = {}))
    }, 489: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(4);
        !function (e) {
            const t = "vip-download-webview";
            let n = void 0;
            e.getVipTaskInfo = function (e) {
                return i(this, void 0, void 0, function* () {
                    let n = null;
                    try {
                        n = (yield o.client.callRemoteClientFunction(t, "GetVipTaskInfo", e))[0]
                    } catch (e) {
                    }
                    return n
                })
            }, e.getVipSubTaskInfo = function (e, n) {
                return i(this, void 0, void 0, function* () {
                    let i = null;
                    try {
                        i = (yield o.client.callRemoteClientFunction(t, "GetVipSubTaskInfo", e, n))[0]
                    } catch (e) {
                    }
                    return i
                })
            }, e.getVipSpeedColor = function (e) {
                return i(this, void 0, void 0, function* () {
                    let n = void 0;
                    try {
                        n = (yield o.client.callRemoteClientFunction(t, "GetVipSpeedColor", e))[0]
                    } catch (e) {
                    }
                    return n
                })
            }, e.clickTryAcclerateBtn = function (e, n) {
                return i(this, void 0, void 0, function* () {
                    try {
                        yield o.client.callRemoteClientFunction(t, "ClickTryAcclerateBtn", e, n)
                    } catch (e) {
                    }
                })
            }, e.getThunderVersionNumber = function () {
                return i(this, void 0, void 0, function* () {
                    if (void 0 === n) {
                        const e = yield o.client.callServerFunction("GetThunderVersion");
                        n = 0;
                        let t = e.split(".");
                        if (t && 4 === t.length) {
                            let e = Number(t[0]).valueOf(), i = Number(t[1]).valueOf(), o = Number(t[2]).valueOf();
                            n = 128 * Math.pow(2, 24) + e * Math.pow(2, 16) + i * Math.pow(2, 8) + o
                        }
                    }
                    return n
                })
            }
        }(t.VipPluginFunctionNS || (t.VipPluginFunctionNS = {}))
    }, 49: function (e, t, n) {
        "use strict";
        var i;
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t = {};
            e.add = function (e, n, i) {
                t[e] = {func: n, thisArg: i}
            }, e.invoke = function (n, ...i) {
                let o = t[n];
                return o.thisArg ? o.func.apply(o.thisArg, ...i) : o.func(...i), e
            }, e.remove = function (e) {
                delete t[e]
            }
        }(i || (i = {})), t.default = i
    }, 490: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(491), r = n(492), s = n(1).default.getLogger("Thunder.Suspension.bubble"),
            a = n(195).UserHelperNS.getUserHelper();
        t.BubbleHttpSession = class extends o.HttpSession {
            queryTip() {
                return i(this, void 0, void 0, function* () {
                    s.information("querytip");
                    let e = a.userId, t = yield a.getSessionId();
                    this.host = "touch.vip.xunlei.com", this.retries = 2, this.timeout = 2e4;
                    let n = a.thunderVersionString, i = a.thunderVersionNumber, o = yield a.getPeerId();
                    return this.path = "/xds/touch?iver=" + i + "&vfilter=" + n + "&deviceid=" + o + "&scene=suspendedball", this.cookie = "userid=" + e + ";sessionid=" + t + ";", s.information("uri:" + this.path), s.information("host:" + this.host), s.information("cookie:" + this.cookie), new Promise(t => {
                        this.get(n => {
                            let i = null;
                            200 === n.statusCode && n.body && (i = r.BubbleHttpPackageNS.praseQueryBuffer(e, n.body)), t(i)
                        }, e => {
                            s.information("error", e), t(null)
                        })
                    })
                })
            }

            reportTip(e, t) {
                return i(this, void 0, void 0, function* () {
                    s.information("reportTip");
                    let n = a.userId, i = yield a.getSessionId();
                    return this.host = "touch.vip.xunlei.com", this.retries = 2, this.timeout = 2e4, this.path = "/xds/setreaded?msgid=" + e + "&reachtype=" + t, this.cookie = "userid=" + n + ";sessionid=" + i + ";", s.information("uri:" + this.path), s.information("host:" + this.host), s.information("cookie:" + this.cookie), new Promise(e => {
                        this.get(t => {
                            let i = null;
                            200 === t.statusCode && t.body && (i = r.BubbleHttpPackageNS.praseReportBuffer(n, t.body)), e(i)
                        }, t => {
                            s.information("error", t), e(null)
                        })
                    })
                })
            }
        }
    }, 491: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(54);
        t.HttpSession = class {
            constructor() {
                this.mRetries = 0, this.mHost = void 0, this.mPort = 80, this.mPath = void 0, this.mAuth = void 0, this.mAccept = void 0, this.mBody = null, this.mUrl = void 0, this.mTimeout = void 0, this.mCurRetries = 0, this.mCookie = void 0
            }

            get cookie() {
                return this.mCookie
            }

            set cookie(e) {
                this.mCookie = e
            }

            set host(e) {
                this.mHost = e
            }

            get host() {
                return this.mHost
            }

            set port(e) {
                this.mPort = e
            }

            get port() {
                return this.mPort
            }

            set path(e) {
                this.mPath = e
            }

            get path() {
                return this.mPath
            }

            set url(e) {
                this.mUrl = e
            }

            get url() {
                return this.mUrl
            }

            set auth(e) {
                this.mAuth = e
            }

            get auth() {
                return this.mAuth
            }

            set accept(e) {
                this.mAccept = e
            }

            get accept() {
                return this.mAccept
            }

            set body(e) {
                this.mBody = e
            }

            get body() {
                return this.mBody
            }

            set retries(e) {
                this.mRetries = e
            }

            get retries() {
                return this.mRetries
            }

            set timeout(e) {
                this.mTimeout = e
            }

            get timeout() {
                return this.mTimeout
            }

            post(e, t) {
                let n = this.body;
                if (!n) return void t(null);
                let i = this.auth, o = this.accept, r = {
                    hostname: this.host,
                    port: this.port,
                    path: this.path || "/",
                    method: "POST",
                    auth: i || void 0,
                    headers: {"Content-Length": n ? n.length : 0, Accept: o || "*/*"}
                };
                this.postImpl(n, r, e, n => {
                    this.mCurRetries < this.retries ? (this.mCurRetries++, this.post(e, t)) : t(n)
                })
            }

            get(e, t) {
                let n = {
                    hostname: this.host,
                    port: this.port,
                    path: this.path || "/",
                    method: "GET",
                    headers: {Cookie: this.cookie}
                };
                this.getImpl(n, e, n => {
                    this.mCurRetries < this.retries ? (this.mCurRetries++, this.get(e, t)) : t(n)
                })
            }

            postImpl(e, t, n, o) {
                let r = i.request(t, e => {
                    let t = null;
                    e.on("data", e => {
                        t = t ? Buffer.concat([t, e]) : e
                    }), e.on("end", () => {
                        n({statusCode: e.statusCode, headers: e.headers, body: t})
                    })
                });
                r.on("error", e => {
                    o(e)
                }), r.on("timeout", () => {
                    r.abort()
                }), this.timeout && r.setTimeout(this.timeout), r.write(e), r.end()
            }

            getImpl(e, t, n) {
                i.get(e, e => {
                    let n = null;
                    e.on("data", e => {
                        n = n ? Buffer.concat([n, e]) : e
                    }), e.on("end", () => {
                        t({statusCode: e.statusCode, headers: e.headers, body: n})
                    })
                }).on("error", e => {
                    n(e)
                })
            }
        }
    }, 492: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(1).default.getLogger("Thunder.Suspension.bubble");
        !function (e) {
            e.praseQueryBuffer = function (e, t) {
                if (!t) return null;
                let n = t.toString(), o = null;
                try {
                    o = JSON.parse(n)
                } catch (e) {
                    return null
                }
                if (i.information("jsonstr", n), i.information("resObj", o), !o) return null;
                let r = o.data ? o.data.touches : null, s = null;
                if (r && r.length > 0) {
                    let e = r[0];
                    s = {result: o.result, msg: o.msg, data: e}
                }
                return s
            }, e.praseReportBuffer = function (e, t) {
                if (!t) return null;
                let n = t.toString();
                try {
                    let e = JSON.parse(n);
                    return {result: e.result, msg: e.msg}
                } catch (e) {
                    return null
                }
            }
        }(t.BubbleHttpPackageNS || (t.BubbleHttpPackageNS = {}))
    }, 493: function (e, t, n) {
        "use strict";
        var i = n(932);
        n.n(i).a
    }, 5: function (e, t, n) {
        e.exports = n(8)(201)
    }, 50: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        let i = 0;
        t.default = function (e) {
            return e ? e.concat(".").concat(String(++i)) : String(++i)
        }
    }, 500: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(9), r = n(1), s = n(16), a = n(11),
            l = o.default(i.join(__rootDir, "../bin/ThunderHelper.node")),
            c = r.default.getLogger("Thunder.FloatPanelHelper");
        !function (e) {
            e[e.LeftBottom = 0] = "LeftBottom", e[e.LeftTop = 1] = "LeftTop", e[e.RightTop = 2] = "RightTop", e[e.RightBottom = 3] = "RightBottom"
        }(t.FloatPanelDirection || (t.FloatPanelDirection = {})), function (e) {
            let t, n, i;

            function o(e) {
                let o = null, r = e.receiveSize, a = e.srcUsing;
                do {
                    if (e.taskType === s.DownloadKernel.TaskType.P2sp) {
                        if (r > 0) {
                            o = t.Stared;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.StartPending) {
                            o = t.Starting;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.Started && 0 === r) {
                            o = t.Connect;
                            break
                        }
                    } else if (e.taskType === s.DownloadKernel.TaskType.Bt) {
                        if (r > 0) {
                            o = n.Stared;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.StartPending) {
                            o = n.Analy;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.Started) {
                            o = a > 0 ? n.Connect : n.Search;
                            break
                        }
                    } else if (e.taskType === s.DownloadKernel.TaskType.Emule) {
                        if (r > 0) {
                            o = i.Stared;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.StartPending) {
                            o = i.Starting;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.Started) {
                            o = a > 0 ? i.Connect : i.Search;
                            break
                        }
                    }
                } while (0);
                return o
            }

            e.isDownloadStatus = function (e) {
                let t = !1;
                return e !== s.DownloadKernel.TaskStatus.StartPending && e !== s.DownloadKernel.TaskStatus.StartWaiting && e !== s.DownloadKernel.TaskStatus.Started || (t = !0), t
            }, e.formatSpeed = function (e) {
                let t = {speed: "0.0", unit: "B/s"};
                if ("number" == typeof e && e > 0) {
                    let n = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s"], i = 0, o = e;
                    for (; o >= 1e3 && !(i >= 4);) o /= 1024, i += 1;
                    t = -1 === String(o).indexOf(".") ? {speed: String(o), unit: n[i]} : {
                        speed: o.toFixed(1),
                        unit: n[i]
                    }
                }
                return t
            }, e.isThunderMainWndForeground = function () {
                let e = l.getForegroundProcessName();
                c.information("foreProcName:", e);
                let t = !1;
                return (e.toLowerCase().indexOf("thunder.exe") > -1 || e.toLowerCase().indexOf("xlbrowser.exe") > -1) && (t = !0), t
            }, function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Starting = 1] = "Starting", e[e.Connect = 2] = "Connect", e[e.Stared = 3] = "Stared"
            }(t || (t = {})), function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Analy = 1] = "Analy", e[e.Search = 2] = "Search", e[e.Connect = 3] = "Connect", e[e.Stared = 4] = "Stared"
            }(n || (n = {})), function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Starting = 1] = "Starting", e[e.Search = 2] = "Search", e[e.Connect = 3] = "Connect", e[e.Stared = 4] = "Stared"
            }(i || (i = {})), e.getTaskStartPrompt = function (e) {
                let r = void 0;
                do {
                    if (null === e) break;
                    if (e.taskStatus === s.DownloadKernel.TaskStatus.StartPending || e.taskStatus === s.DownloadKernel.TaskStatus.Started) {
                        if (e.taskType === s.DownloadKernel.TaskType.P2sp) {
                            let n = o(e);
                            if (null === n) break;
                            n === t.Connect && (r = "连接资源");
                            break
                        }
                        if (e.taskType === s.DownloadKernel.TaskType.Bt) {
                            let t = o(e);
                            if (null === t) break;
                            t === n.Analy ? r = "解析种子" : t === n.Search ? r = "寻找资源" : t === n.Connect && (r = "连接资源");
                            break
                        }
                        if (e.taskType === s.DownloadKernel.TaskType.Emule) {
                            let t = o(e);
                            if (null === t) break;
                            t === i.Search ? r = "寻找资源" : t === i.Connect && (r = "连接资源")
                        }
                    }
                } while (0);
                return r
            }, e.getTaskStatusPrompt = function (e) {
                let t = "";
                if (e) switch (e.taskStatus) {
                    case s.DownloadKernel.TaskStatus.Unkown:
                        t = "未知错误";
                        break;
                    case s.DownloadKernel.TaskStatus.StandBy:
                        t = "准备开始";
                        break;
                    case s.DownloadKernel.TaskStatus.PreDownloading:
                        t = "等待中";
                        break;
                    case s.DownloadKernel.TaskStatus.StartWaiting:
                        t = "排队等待";
                        break;
                    case s.DownloadKernel.TaskStatus.StartPending:
                        t = "正在开始";
                        break;
                    case s.DownloadKernel.TaskStatus.Started:
                        e.downloadSpeed >= 0 && (t = a.ThunderUtil.formatSize(e.downloadSpeed, 1), t += "/S");
                        break;
                    case s.DownloadKernel.TaskStatus.StopPending:
                        t = "正在停止";
                        break;
                    case s.DownloadKernel.TaskStatus.Stopped:
                        t = "暂停";
                        break;
                    case s.DownloadKernel.TaskStatus.Succeeded:
                        t = "完成";
                        break;
                    case s.DownloadKernel.TaskStatus.Failed:
                        t = "任务出错";
                        break;
                    case s.DownloadKernel.TaskStatus.Seeding:
                        t = "完成"
                }
                return t
            }, e.getProgress = function (e) {
                let t = 0;
                if (e) {
                    let n = e.downloadSize, i = e.taskStatus;
                    if (i === s.DownloadKernel.TaskStatus.Succeeded || i === s.DownloadKernel.TaskStatus.Seeding) t = 100; else {
                        let i = e.fileSize;
                        0 !== i && (t = n / i * 100, (t = parseInt(t.toString(), 10)) > 100 ? t = 100 : t < 0 && (t = 0))
                    }
                }
                return t
            }
        }(t.FloatPanelHelper || (t.FloatPanelHelper = {}))
    }, 51: function (e, t, n) {
        "use strict";
        const i = n(3), o = n(52), r = n(28), s = n(53), a = n(17), l = i.isPromise, c = i.ipcMain,
            u = process.atomBinding("v8_util");
        let d = u.createDoubleIDWeakMap();
        const h = new o.default;

        function f(e, t, n, i, o, r) {
            let s, l = !1, c = null, u = !1;
            do {
                try {
                    s = t[i]
                } catch (e) {
                    l = !0
                }
                if (l) try {
                    s = n.value[i], l = !1, n.meta.extendedMemberNames.push(i), u = !0
                } catch (e) {
                    a.error(`property ${i} untouchable, even try root[name]`)
                }
                if (l) break;
                let o = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === o) {
                    a.warn(`descriptor of property ${i} is undefined`);
                    break
                }
                c = {
                    name: i,
                    enumerable: o.enumerable,
                    writable: !1,
                    type: "get"
                }, void 0 === o.get && "function" == typeof s ? c.type = "method" : ((o.set || o.writable) && (c.writable = !0), c.type = "get"), u ? (c.configurable = !0, c.value = g(e, s, r, !1, null)) : c.value = g(e, s, r, !1, n)
            } while (0);
            return c
        }

        function p(e, t, n, i = null) {
            let o = Object.getOwnPropertyNames(t);
            "function" == typeof t && (o = o.filter(function (e) {
                return !String.prototype.includes.call(s.propertiesOfFunction, e)
            }));
            let r = [];
            do {
                if (0 === o.length) break;
                let s = o.length;
                for (let a = 0; a < s; a++) {
                    let s = f(e, t, n, o[a], 0, i);
                    s && r.push(s)
                }
            } while (0);
            return r
        }

        function m(e, t, n, i = null) {
            let o = null, r = Object.getPrototypeOf(t);
            return o = null === r || r === Object.prototype || r === Function.prototype ? null : g(e, r, i, !1, n)
        }

        function g(e, t, n = null, i = !1, o = null) {
            n = null === n ? {} : n;
            const r = {type: typeof t};
            "object" === r.type && (r.type = function (e, t) {
                let n = typeof e;
                if ("object" !== n) throw new Error("incorrect arg at index 0. non-object");
                return null === e ? n = "value" : ArrayBuffer.isView(e) ? n = "buffer" : Array.isArray(e) ? n = "array" : e instanceof Error ? n = "error" : e instanceof Date ? n = "date" : l(e) ? n = "promise" : Object.prototype.hasOwnProperty.call(e, "callee") && null != e.length ? n = "array" : t && u.getHiddenValue(e, "simple") && (n = "value"), n
            }(t, i));
            do {
                if ("object" === r.type || "function" === r.type) {
                    let i = h.getIdOfObject(t);
                    if (i && n[i]) {
                        r.refId = i, h.add(e, t);
                        break
                    }
                }
                "array" === r.type ? r.members = t.map(t => g(e, t, n)) : "object" === r.type || "function" === r.type ? (null == o && (r.extendedMemberNames = [], o = {
                    value: t,
                    meta: r
                }), r.name = t.constructor ? t.constructor.name : "", r.id = h.add(e, t), n[r.id] = !0, r.members = p(e, t, o, n), r.proto = m(e, t, o, n)) : "buffer" === r.type ? r.value = Buffer.from(t) : "promise" === r.type ? (t.then(function () {
                }, function () {
                }), r.then = g(e, function (e, n) {
                    t.then(e, n)
                })) : "error" === r.type ? (r.members = _(t), r.members.push({
                    name: "name",
                    value: t.name
                })) : "date" === r.type ? r.value = t.getTime() : (r.type = "value", r.value = t)
            } while (0);
            return r
        }

        function _(e) {
            return Object.getOwnPropertyNames(e).map(t => ({name: t, value: e[t]}))
        }

        function v(e, t) {
            const n = function (t) {
                let o, s, l = 0, c = 0;
                switch (t.type) {
                    case"value":
                        return t.value;
                    case"remote-object":
                        return h.get(t.id);
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
                        for (Object.defineProperty(e.constructor, "name", {value: t.name}), l = 0, c = (s = t.members).length; l < c; l++) e[(o = s[l]).name] = n(o.value);
                        return e
                    }
                    case"function": {
                        const n = e.id, o = [n, t.id];
                        if (a.info("renderer function id:" + o), d.has(o)) return d.get(o);
                        let s = function (...o) {
                            a.info("[CALLBACK] args", o);
                            let l = [...o];
                            e.isDestroyed() || n !== e.id ? function (e, t, n) {
                                let o = "Attempting to call a function in a renderer window that has been closed or released." + `\nFunction provided here: ${e.location}`;
                                if (t.length > 0 && t[0].sender && t[0].sender instanceof i.webContents.constructor) {
                                    const {sender: e} = t[0], i = e.eventNames().filter(t => {
                                        let i = e.listeners(t), o = !1;
                                        return i.forEach(e => {
                                            e === n && (o = !0)
                                        }), o
                                    });
                                    i.length > 0 && (o += `\nRemote event names: ${i.join(", ")}`, i.forEach(t => {
                                        Object.getPrototypeOf(e).removeListener.call(e, t, n)
                                    }))
                                }
                                a.warn(o)
                            }(t, l, s) : e.send(r.default.renderer.callback, t.id, g(e, l))
                        };
                        return Object.defineProperty(s, "length", {value: t.length}), u.setRemoteCallbackFreer(s, t.id, e), d.set(o, s), s
                    }
                    default:
                        throw new TypeError(`Unknown type: ${t.type}`)
                }
            };
            return t.map(n)
        }

        function b(e, t, n, i) {
            let o, r;
            try {
                return t.apply(n, i)
            } catch (e) {
                return r = t.name, new Error(`Could not call remote function '${o = null != r ? r : "anonymous"}'. Check that the function signature is correct. Underlying error: ${e.message}`)
            }
        }

        function T(e) {
            return {type: "exception", message: e.message, stack: e.stack || e}
        }

        function S(e) {
            const t = new Error(e);
            throw Object.defineProperty(t, "code", {value: "EBADRPC"}), Object.defineProperty(t, "errno", {value: -72}), t
        }

        var y;
        !function (e) {
            const t = (e, t, ...n) => {
                const i = e.sender;
                i.isDestroyed() ? a.warn("webcontext is destroyed, id=", i.id) : i.send(t, ...n)
            };
            e.startServer = function () {
                c.on(r.default.browser.require, (e, n, i) => {
                    a.info(`[REQUIRE] module=${i} `);
                    let o = process.mainModule.require(i), s = g(e.sender, o);
                    t(e, r.default.renderer.requireReturn, n, s)
                }), c.on(r.default.browser.builtIn, (e, n, o) => {
                    a.info(`[BUILTIN]: property=${o} `);
                    let s = i[o], l = g(e.sender, s);
                    a.info(`[BUILTIN]: returns remoteId:${l.id}, type: ${typeof s}`), t(e, r.default.renderer.getBuiltInReturn, n, l)
                }), c.on(r.default.browser.global, (e, n, i) => {
                    a.info(`[GLOBAL]: proerty:${i} `);
                    let o, s = global[i];
                    o = g(e.sender, s), a.info(`[GLOBAL]: returns remoteid=${o.id}, obj=` + typeof s), t(e, r.default.renderer.getGlobalReturn, n, o)
                }), c.on(r.default.browser.currentWindow, (e, n, i) => {
                    a.info(`[CURRENT_WINDOW]: property=${i} `);
                    let o = e.sender.getOwnerBrowserWindow.call(e.sender), s = g(e.sender, o);
                    a.info(`[CURRENT_WINDOW]: returns remoteid=${s.id}, obj=` + o), t(e, r.default.renderer.currentWindowReturn, n, s)
                }), c.on(r.default.browser.currentWebContents, (e, n, i) => {
                    t(e, r.default.renderer.currentWebContentsReturn, n, g(e.sender, e.sender))
                });
                const e = (e, t) => {
                    const n = (t, n) => {
                        t && Object.getOwnPropertyNames(t).forEach(i => {
                            n ? e.once(i, t[i]) : e.on(i, t[i])
                        })
                    };
                    t.on && n(t.on, !1), t.once && n(t.once, !0)
                };
                c.on(r.default.browser.construct, (n, i, o, s) => {
                    let l, c = null;
                    try {
                        a.info(`[CONSTRUCTOR]: remoteId=${o} `);
                        let u = s.length > 0 ? s[s.length - 1] : null;
                        s = v(n.sender, s);
                        let d = h.get(o);
                        null == d && S(`Cannot call constructor on missing remote object ${o}`), u && "interest" === u.type && (c = s.pop());
                        let f = new (Function.prototype.bind.apply(d, [null].concat(s)));
                        f && c && e(f, c), l = g(n.sender, f, null, !1), a.info(`[CONSTRUCTOR]: returns remoteId =${l.id} name=${d.name} `)
                    } catch (e) {
                        l = T(e)
                    } finally {
                        t(n, r.default.renderer.constructReturn, i, l)
                    }
                }), c.on(r.default.browser.functionCall, function (e, n, i, o, s) {
                    let l;
                    try {
                        a.info(`[FUNCTION_CALL]: remoteId=${o}`), s = v(e.sender, s);
                        let c = h.get(o);
                        if (null == c) a.error(`Cannot call function on missing remote object ${o}`), l = g(e.sender, void 0); else {
                            let t = i ? h.get(i) : global;
                            if (t) {
                                let n = b(0, c, t, s);
                                l = g(e.sender, n)
                            } else a.error(`Cannot call function(${o}) on missing context(${i})`), l = g(e.sender, void 0)
                        }
                        a.info(`[FUNCTION_CALL]: name=${c.name}`)
                    } catch (e) {
                        l = T(e)
                    } finally {
                        t(e, r.default.renderer.functionCallReturn, n, l)
                    }
                }), c.on(r.default.browser.memberCall, function (e, n, i, o, s, l) {
                    let c;
                    a.info(`[MEMBER_CALL]: thisArg=${i}, remoteId=${o}, method=${s}, args count=${l.length}`);
                    try {
                        l = v(e.sender, l);
                        let u = h.get(o);
                        null == u && S(`Cannot call function '${s}' on missing remote object ${o}`);
                        let d = i ? h.get(i) : u;
                        if (d) {
                            let t = b(0, u[s], d, l);
                            c = g(e.sender, t), a.info("[MEMBER_CALL]: return=" + t)
                        } else c = g(e.sender, void 0)
                    } catch (e) {
                        c = T(e)
                    } finally {
                        t(e, r.default.renderer.memberCallReturn, n, c)
                    }
                }), c.on(r.default.browser.memberGet, function (e, n, i, o) {
                    let s;
                    try {
                        a.info(`[MEMBER_GET]: remoteId=${i}, property=`, o);
                        let l = h.get(i);
                        null == l && S(`Cannot get property '${Object.toString.call(o)}' on missing remote object ${i}`);
                        let c = l[o];
                        s = g(e.sender, c)
                    } catch (e) {
                        s = T(e)
                    } finally {
                        t(e, r.default.renderer.memberGetReturn, n, s)
                    }
                }), c.on(r.default.browser.memberSet, function (e, n, i, o, s) {
                    try {
                        a.info(`[MEMBER_SET]: remoteId=${i}, property=` + o), s = v(e.sender, s);
                        let l = h.get(i);
                        null == l && S(`Cannot set property '${Object.toString.call(o)}' on missing remote object ${i}`), l[o] = s[0], t(e, r.default.renderer.memberSetReturn, n, {
                            type: "value",
                            value: !0
                        })
                    } catch (i) {
                        t(e, r.default.renderer.memberSetReturn, n, T(i))
                    }
                }), c.on(r.default.browser.memberConstruct, function (n, i, o, s, l) {
                    let c, u = null;
                    try {
                        a.info(`[MEMBER_CONSTRUCTOR]: regId=${o}, method=${s}`);
                        let d = l.length > 0 ? l[l.length - 1] : null;
                        l = v(n.sender, l);
                        let f = h.get(o);
                        null == f && S(`Cannot call constructor '${s}' on missing remote object ${o}`), d && "interest" === d.type && (u = l.pop());
                        let p = f[s], m = new (Function.prototype.bind.apply(p, [null].concat(l)));
                        m && u && e(m, u), c = g(n.sender, m)
                    } catch (e) {
                        c = T(e)
                    } finally {
                        t(n, r.default.renderer.memberConstructReturn, i, c)
                    }
                }), c.on(r.default.browser.sync, function (e, n, i) {
                    let o = h.get(i);
                    t(e, r.default.renderer.syncReturn, n, g(e.sender, o))
                }), c.on("ELECTRON_BROWSER_DEREFERENCE", function (e, t) {
                    let n = h.get(t);
                    if (n) {
                        let i = n.name;
                        i || (i = n.constructor ? n.constructor.name : ""), h.remove(e.sender.id, t)
                    } else t < 0 && a.warn("remote id reference to nothing:", t)
                }), c.on(r.default.browser.contextRelease, e => {
                    h.clear(e.sender.id)
                })
            }, e.getObjectRegistry = function () {
                return h
            }
        }(y || (y = {})), e.exports = y
    }, 510: function (e, t, n) {
        "use strict";
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                class: e.suspensionBallClass,
                staticStyle: {left: "367px", top: "233px"},
                on: {mouseenter: e.enter, mouseleave: e.leave, click: e.click}
            }, [n("div", {
                ref: "suspension",
                staticClass: "xlx-suspension__inner",
                on: {
                    mousedown: e.down,
                    mouseup: e.up,
                    mouseenter: e.enterInner,
                    mouseleave: e.leaveInner,
                    contextmenu: function (t) {
                        return e.handleRightClick(t)
                    }
                }
            }, [n("div", {staticClass: "xlx-suspension__vipinfo"}, [n("div", {
                staticClass: "xlx-suspension__vipinfo-box",
                on: {
                    click: function (t) {
                        return t.stopPropagation(), e.handleBubbleClick(t)
                    }
                }
            }, [n("p", {staticClass: "xlx-suspension__vipinfo-txt"}, [e._v("\n          " + e._s(e.bubbleText) + "\n          "), n("em", [e._v(e._s(e.expireDate))]), e._v("\n          " + e._s(e.bubbleEndText) + "\n        ")]), e._v(" "), n("p", {
                staticClass: "xlx-suspension__vipinfo-btn",
                on: {
                    click: function (t) {
                        return t.stopPropagation(), e.handleBubbleBtnClick(t)
                    }
                }
            }, [n("a", {attrs: {href: ""}}, [e._v(e._s(e.bubbleBtnText))])]), e._v(" "), n("i", {
                staticClass: "xlx-suspension__vipinfo-close",
                on: {
                    click: function (t) {
                        return t.stopPropagation(), e.handleBubbleCloseClick(t)
                    }
                }
            })])]), e._v(" "), n("div", {staticClass: "xlx-suspension__ball"}), e._v(" "), n("div", {staticClass: "xlx-suspension__wave"}, [n("div", {
                staticClass: "xlx-suspension__wave-inner",
                style: {height: e.downloadProgress}
            })]), e._v(" "), n("div", {staticClass: "xlx-suspension__bird"}), e._v(" "), n("div", {staticClass: "xlx-suspension__speed"}, [n("p", {staticClass: "xlx-suspension__speed-total"}, [n("span", [e._v(e._s(e.totalSpeed.speed))]), e._v("\n        " + e._s(e.totalSpeed.unit) + "\n      ")]), e._v(" "), e.isTry ? n("p", {staticClass: "xlx-suspension__try-msg"}, [e._v("加速试用>")]) : n("p", {staticClass: "xlx-suspension__speed-upgrade"}, [e._v(e._s(e.vipSpeed))])]), e._v(" "), n("div", {staticClass: "xlx-suspension__status"}, [n("p", [e._v(e._s(e.suspensionStatusText))])]), e._v(" "), n("div", {staticClass: "xlx-suspension__plane"})]), e._v(" "), n("float-panel", {
                style: e.floatPanelStyle,
                attrs: {isLogined: e.isLogined, isVip: e.isVip, vipType: e.vipType, isVisible: e.isFloatPanelShowed},
                on: {
                    "download-event": e.doDownloadEvent,
                    "show-float-panel": e.showOrHideFloatPanel,
                    "set-vip-skin": e.setVipSkin
                }
            })], 1)
        }, o = [];
        i._withStripped = !0, n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        })
    }, 52: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(17), o = -1 * Math.pow(2, 31), r = process.atomBinding("v8_util");
        t.default = class {
            constructor() {
                this.nextId = 0, this.storage = new Map, this.owners = new Map
            }

            add(e, t) {
                const n = this.saveToStorage(t), i = e.id;
                let o = this.owners.get(i);
                return o || (o = new Set, this.owners.set(i, o), this.registerDeleteListener(e, i)), o.has(n) || (o.add(n), this.storage.get(n).count++), n
            }

            getIdOfObject(e) {
                return r.getHiddenValue(e, "__remote_id__")
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
                let t = r.getHiddenValue(e, "__remote_id__");
                if (!t) {
                    if ((t = --this.nextId) <= o) throw new Error("object registry id overflow");
                    this.storage.set(t, {object: e, count: 0}), r.setHiddenValue(e, "__remote_id__", t)
                }
                return t
            }

            dereference(e) {
                let t = this.storage.get(e);
                null != t && (t.count -= 1, 0 === t.count && (r.deleteHiddenValue(t.object, "__remote_id__"), this.storage.delete(e)))
            }

            registerDeleteListener(e, t) {
                const n = e.getProcessId(), o = (r, s) => {
                    s === n && (i.info("render-view-deleted: processid=" + n), (() => {
                        i.info("before clear. objectsRegistry capacity=" + this.storage.size, "owners size:" + this.owners.size)
                    })(), e.removeListener("render-view-deleted", o), this.clear(t))
                };
                e.on("render-view-deleted", o)
            }
        }
    }, 53: function (e, t, n) {
        "use strict";
        var i;
        !function (e) {
            e.propertiesOfFunction = ["length", "name", "arguments", "caller", "prototype", "apply", "bind", "call", "toString"]
        }(i || (i = {})), e.exports = i
    }, 54: function (e, t) {
        e.exports = require("http")
    }, 55: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(4), o = n(41), r = n(1), s = n(11), a = r.default.getLogger("common/skin"), l = !1;

        function c(e) {
            if (l) if (e.type === o.SkinHelperNS.SkinType.Default) document.body.classList.remove("is-theme"), s.ThunderUtil.setCSSProperties(document.body, {
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
                let {colors: {colorPrimary: t, colorPrimaryControl1: n, colorPrimaryControl2: i, colorPrimaryControl3: o, colorPrimaryControl4: r, colorPrimaryGradient: a, colorPrimaryText: l, colorSearch: c, colorSecondary: u, colorGradientBackground: d, colorGradientForeground: h, colorAccordion: f}, opacity: p} = e;
                s.ThunderUtil.setCSSProperties(document.body, {
                    "--color-primary-theme": `${t}`,
                    "--color-primary-control-1": `${n}`,
                    "--color-primary-control-2": `${i}`,
                    "--color-primary-control-3": `${o}`,
                    "--color-primary-control-4": `${r}`,
                    "--color-primary-gradient-1": `${a[0]}`,
                    "--color-primary-gradient-2": `${a[1]}`,
                    "--color-primary-text": `${l}`,
                    "--color-search": `${c}`,
                    "--color-secondary": `${u}`,
                    "--color-gradient-background-1": `${d[0]}`,
                    "--color-gradient-background-2": `${d[1]}`,
                    "--color-gradient-foreground-1": `${h[0]}`,
                    "--color-gradient-foreground-2": `${h[1]}`,
                    "--color-accordion-1": `${f[0]}`,
                    "--color-accordion-2": `${f[1]}`,
                    "--default-opacity-1": `${p - .1}`,
                    "--default-opacity-2": `${p + .1}`
                })
            }
        }

        i.client.callServerFunction("GetSkinInfo").then(c).catch(e => {
            a.warning(e)
        }), i.client.attachServerEvent("OnChangeSkin", (e, ...t) => {
            c(t[0])
        })
    }, 56: function (e, t, n) {
        e.exports = n(8)(204)
    }, 564: function (e, t, n) {
        "use strict";
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "xlx-suspension-list"}, [n("div", {staticClass: "xlx-suspension-list__header"}, [n("h2", [e._v("正在下载（"), n("span", [e._v(e._s(e.downloadTaskCount))]), e._v("）")]), e._v(" "), n("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.blueTextShow,
                    expression: "this.blueTextShow"
                }],
                staticClass: "xlx-suspension-list__link",
                attrs: {href: "javascript:;"},
                on: {
                    mouseover: function (t) {
                        e.onMouseOver(!1)
                    }, mouseleave: function (t) {
                        e.onMouseLeave(!1)
                    }, click: function (t) {
                        e.onTextClick("blue")
                    }
                }
            }, [e._v(e._s(this.bluehoverText))]), e._v(" "), n("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.yellowTextShow,
                    expression: "this.yellowTextShow"
                }],
                staticClass: "xlx-suspension-list__link xlx-suspension-list__link--vip",
                staticStyle: {display: "none"},
                attrs: {href: "javascript:;"},
                on: {
                    mouseover: function (t) {
                        e.onMouseOver(!0)
                    }, mouseleave: function (t) {
                        e.onMouseLeave(!0)
                    }, click: function (t) {
                        e.onTextClick("yellow")
                    }
                }
            }, [e._v(e._s(this.yellowhoverText))])]), e._v(" "), n("div", {staticClass: "xlx-suspension-list__body"}, [n("ul", {style: e.haveDownloadTaskStyle}, e._l(e.taskIdLists, function (t) {
                return n("task-item", {
                    key: t,
                    attrs: {taskBase: e.taskBaseInfos[t]},
                    nativeOn: {
                        dblclick: function (n) {
                            e.dbclickItem(t)
                        }
                    }
                })
            })), e._v(" "), n("div", {
                staticClass: "xlx-suspension-list__empty",
                style: e.isHaveDownloadTaskStyle
            }, [n("p", [e._v("暂无下载任务")]), e._v(" "), n("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showVipNoTaskText,
                    expression: "showVipNoTaskText"
                }]
            }, [n("a", {
                staticClass: "xlx-suspension-list__viplink",
                style: {color: e.vipNoTaskColor},
                attrs: {href: "javascript:;"},
                on: {click: e.onClickVipNoTaskText}
            }, [e._v(e._s(e.vipNoTaskText))])])])]), e._v(" "), n("div", {staticClass: "xlx-suspension-list__footer"}, [n("a", {
                staticClass: "td-button td-button--secondary",
                attrs: {href: "javascript:;"},
                on: {click: e.onClickShowFinishTask}
            }, [e._v("查看已完成")])])])
        }, o = [];
        i._withStripped = !0, n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        })
    }, 57: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(7), r = n(13), s = n(4), a = n(27);
        !function (e) {
            function t(e, t) {
                return i(this, void 0, void 0, function* () {
                    if (null !== e) {
                        let n = e.webContents;
                        (yield n.isDevToolsOpened()) ? yield n.closeDevTools() : yield n.openDevTools(t)
                    }
                })
            }

            e.openDevTool = t, e.enableDevTools = function (e) {
                return i(this, void 0, void 0, function* () {
                    window.addEventListener("keyup", n => i(this, void 0, void 0, function* () {
                        "F12" === n.key && n.ctrlKey && (yield a.DevEnvHelperNS.isLogEnable()) && (yield t(yield o.asyncRemoteCall.getCurrentWindow(), e))
                    }), !0)
                })
            }, e.enableDragOpenFile = function (e) {
                void 0 === e && (e = !1), document.addEventListener("dragover", e => (e.preventDefault(), e.stopPropagation(), !1), !0), document.addEventListener("drop", e => i(this, void 0, void 0, function* () {
                    e.preventDefault(), e.stopPropagation();
                    let t = e.dataTransfer, n = t.files, i = t.items;
                    if (void 0 !== i && null !== i && i.length > 0) for (let e = 0; e < i.length; e++) {
                        let t = i[e];
                        "string" === t.kind && "text/uri-list" === t.type ? t.getAsString(e => {
                            s.client.callServerFunction("DropOpenUrl", e).catch()
                        }) : t.kind
                    }
                    if (void 0 !== n && null !== n && n.length > 0) for (let e = 0; e < n.length; e++) {
                        let t = n[e].path;
                        void 0 !== t && null !== t && "" !== t && (yield r.FileSystemAWNS.existsAW(t)) && s.client.callServerFunction("DropOpenFile", t).catch()
                    }
                    return !1
                }), !0)
            }
        }(t.ThunderToolsNS || (t.ThunderToolsNS = {}))
    }, 575: function (e, t, n) {
        "use strict";
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("li", {staticClass: "xlx-suspension-list__item"}, [n("span", {
                staticClass: "xlx-suspension-list__background",
                style: e.getTaskProgress
            }), e._v(" "), n("i", {
                staticClass: "xlx-icon-type",
                class: e.getTaskIcon
            }), e._v(" "), n("p", {staticClass: "xlx-suspension-list__name"}, [e._v(e._s(e.taskName))]), e._v(" "), n("p", {staticClass: "xlx-suspension-list__status"}, [e._v(e._s(e.stateName))])])
        }, o = [];
        i._withStripped = !0, n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        })
    }, 58: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(16);
        let r = ["apk", "pic", "video", "mp4", "rmvb", "wmv", "mpg", "mkv", "mov", "rm", "avi", "flv", "doc", "link", "ppt", "word", "magnetic", "music", "pdf", "rar", "xls", "txt", "unknow", "gif", "ipa", "ipsw", "dll", "chm", "text", "install", "iso"];
        const s = ".xv;.xlmv;.3gp;.3gp2;.3gpp;.3gpp2;.3mm;.3p2;.60d;.787;.aaf;.aep;.aepx;.aet;.aetx;.ajp;.ale;.amv;.amx;.arf;\n  .asf;.asx;.avb;.avd;.avi;.avp;.avs;.avs;.axm;.bdm;.bdmv;.bik;.bix;.bmk;.bnp;.box;.bs4;.bsf;.byu;.camproj;.camrec;.clpi;.cmmp;\n  .cmmtpl;.cmproj;.cmrec;.cpi;.cst;.cvc;.d2v;.d3v;.dat;.dav;.dce;.dck;.ddat;.dif;.dir;.divx;.dlx; .dmb;.dmsm;.dmsm3d;.dmss;.dnc;.dpg;\n  .dream;.dsy;.dv;.dv-avi;.dv4;.dvdmedia;.dvr-ms;.dvx;.dxr;.dzm;.dzp;.dzt;.edl;.evo;.eye;.f4p;.f4v;.fbr;.fbr;.fbz;.fcp;.flc;.flh;\n  .fli;.flv;.flx;.gfp;.gl;.grasp;.gts;.gvi;.gvp;.hdmov;.hkm;.ifo;.imovieproj;.imovieproject;.iva;.ivf;.ivr;.ivs;.izz;.izzy;.jts;.jtv;\n  .k3g;.lrec;.lsf;.lsx;.m15;.m1pg;.m1v;.m21;.m21;.m2a;.m2p;.m2t;.m2ts;.m2v;.m4e;.m4u;.m4v;.m75;.meta;.mgv;.mj2;.mjp;.mjpg;.mkv;.mmv;\n  .mnv;.mod;.modd;.moff;.moi;.moov;.mov;.movie;.mp21;.mp2v;.mp4;.mp4v;.mpe;.mpeg;.mpeg4;.mpf;.mpg;.mpg2;.mpgindex;.mpl;.mpls;\n  .mpsub;.mpv;.mpv2;.mqv;.msdvd;.msh;.mswmm;.mts;.mtv;.mvb;.mvc;.mvd;.mve;.mvp;.mvy;.mxf;.mys;.ncor;.nsv;.nuv;.nvc;.ogm;.ogv;.ogx;.osp;\n  .par;.pds;.pgi;.piv;.pjs;.pmf;.pns;.ppj;.prel;.pro;.prproj;.prtl;.psh;.pssd;.pva;.pvr;.pxv;.qt;.qtch;.qtl;.qtm;.qtz;\n  .r3d;.rcproject;.rdb;.rec;.rm;.rmd;.rmp;.rms;.rmvb;.roq;.rp;.rts;.rts;.rum;.rv;.sbk;.sbt;.scc;.scm;.scn;.screenflow;.sec;.seq;.sfd;\n  .sfvidcap;.smk;.sml;.smv;.spl;.ssm;.stl;.str;.stx;.svi;.swf;.swi;.swt;.tda3mt;.tivo;.tix;.tod;.tp;.tp0;.tpd;\n  .tpr;.trp;.ts;.tts;.tvs;.vc1;.vcpf;.vcr;.vcv;.vdo;.vdr;.veg;.vem;.vf;.vfw;.vfz;.vgz;.vid;.viewlet;.viv;.vivo;.vlab;.vob;.vp3;.vp6;.vp7;\n  .vro;.vs4;.vse;.vsp;.w32;.wcp;.webm;.wlmp;.wm;.wmd;.wmmp;.wmv;.wmx;.wp3;.wpl;.wtv;.wvx;.xfl;.xvid;.yuv;.zm1;.zm2;.zm3;.zmv;",
            a = ".exe;.com;.bat;.msi;.apk;.ipa;.iso;.mds;.bin;.img;.ipsw;",
            l = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.\n  dot;.dotm;.dotx;.email;.rp;.pps;.et;.ett;.xlt;.dbf;.prn;.csv;.mht;.mhtml;.xml;.wpt;.dps;.dpt;.pot;.ppsx;.epub;.mobi;.lit;.wdl;.ceb;.abm;\n  .pdg;.umb;.ibooks;",
            c = ".aiff;.cue;.m3u;.au;.cdda;.raw;.wav;.flac;.tak;.mp3;.aac;.wma;.m4a;.mid;.mka;.mp2;.mpa;.mpc;.ape;.ofr;\n  .ogg;.ra;.wv;.tta;.ac3;.dts;.nsf;.mod;.s3m;.xm;.it;.vst;",
            u = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;.mef;\n  .mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico;",
            d = ".zip;.zipx;.rar;.7z;.isz;.cab;.arj;.ace;.alz;.uue;.tar;.gz; .gzip;.tgz;.tpz;.bzip2;.bz2;.bz;.tbz;.tbz2;.xz;.txz;\n  .lzh;.lha;.zt;.az; .xpi;.jar;.wim;.swm;.rpm;.xar;.deb;.dmg;.hfs;.cpio;.lzma;.lzma86;.split;",
            h = ".torrent;", f = ".idx;.smi;.sub;.psb;.ssa;.ass;.usf;.ssf;.srt;.sup",
            p = ".3gp;.asf;.avi;.divx;.f4v;.flv;.mkv;.mov;.movie;.mp4;.mpeg;.mpeg4;.mpg;.mpg2;.rm;.rmvb;.rp;.swf;.tp;.tp0;.ts;.wmv",
            m = ".exe;.com;.bat;.msi", g = ".wav;.flac;.mp3;.aac;.wma;.m4a;.mid;.ape;.ogg;.ra;.mod",
            _ = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.pdf;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;\n  .mef;.mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico",
            v = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.dot;.dotm;.dotx;.email;.rp;.pps",
            b = ".rar;.tar;.zip;.gzip;.cab;.uue;.arj;.bz2;.lzh;.jar;.ace;.iso;.7-zip;.7z",
            T = ".asf;.mpg;.rmvb;.rm;.wmv;.avi;.mp4;.mpeg;.mkv;.mov;.ts;.flv;.3gp;",
            S = ".exe;.com;.bat;.scr;.lnk;.pif;.wsh;", y = ".iso;";
        !function (e) {
            let t;

            function n(e) {
                let n = t.Unkown, o = i.extname(e);
                return null !== o && void 0 !== o && o.length >= 2 && (o = o.toLowerCase()), void 0 === o || "" === o || o.length < 2 ? n = t.Unkown : p.indexOf(o) > -1 ? n = t.Video : m.indexOf(o) > -1 ? n = t.Software : v.indexOf(o) > -1 ? n = t.Doc : g.indexOf(o) > -1 ? n = t.Music : _.indexOf(o) > -1 ? n = t.Pic : b.indexOf(o) > -1 && (n = t.Zip), o.length > 1 && ".z" === o.slice(0, 2) && /[0-9]+/.test(o.substring(2)) && (n = t.Zip), n
            }

            e.getTaskIcon = function (e, t, n) {
                n = n || "xly-type-";
                let p = "";
                do {
                    if (t === o.DownloadKernel.TaskType.Bt) {
                        p = "bt-file";
                        break
                    }
                    if (t === o.DownloadKernel.TaskType.Group) {
                        p = "group";
                        break
                    }
                    p = "unknown";
                    let n = i.extname(e);
                    if ("" === n || n.length < 2) break;
                    let m = (n = n.toLowerCase()).substring(1);
                    if (r.indexOf(m) > -1) {
                        p = "doc" === n ? "word" : m;
                        break
                    }
                    if (n += ";", s.indexOf(n) > -1) {
                        p = "video";
                        break
                    }
                    if (a.indexOf(n) > -1) {
                        p = "install", [".mds", ".bin", ".img"].indexOf(n) > -1 && (p = "iso");
                        break
                    }
                    if (l.indexOf(n) > -1) {
                        if (p = "doc", [".htm", ".html", ".mht"].indexOf(n) > -1) {
                            p = "link";
                            break
                        }
                        if ("docx" === n) {
                            p = "word";
                            break
                        }
                        if ("xlsx" === n) {
                            p = "xls";
                            break
                        }
                        if ("pptx" === n) {
                            p = "ppt";
                            break
                        }
                        break
                    }
                    if (c.indexOf(n) > -1) {
                        p = "music";
                        break
                    }
                    if (u.indexOf(n) > -1) {
                        p = "pic";
                        break
                    }
                    if (d.indexOf(n) > -1) {
                        p = "rar";
                        break
                    }
                    if (h.indexOf(n) > -1) {
                        p = "bt-link";
                        break
                    }
                    if (f.indexOf(n) > -1) {
                        p = "text";
                        break
                    }
                } while (0);
                return `${n}${p}`
            }, function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Video = 1] = "Video", e[e.Software = 2] = "Software", e[e.Doc = 3] = "Doc", e[e.Music = 4] = "Music", e[e.Pic = 5] = "Pic", e[e.Zip = 6] = "Zip", e[e.Bt = 7] = "Bt"
            }(t = e.FileExtType || (e.FileExtType = {})), e.getTaskFileType = function (e, n) {
                let o = t.Unkown;
                return void 0 === n && void 0 !== e && (n = i.extname(e)), null !== n && void 0 !== n && n.length >= 2 && (n = n.toLowerCase(), n += ";"), void 0 === n || "" === n || n.length < 3 ? o = t.Unkown : s.indexOf(n) > -1 ? o = t.Video : a.indexOf(n) > -1 ? o = t.Software : l.indexOf(n) > -1 ? o = t.Doc : c.indexOf(n) > -1 ? o = t.Music : u.indexOf(n) > -1 ? o = t.Pic : d.indexOf(n) > -1 ? o = t.Zip : h.indexOf(n) > -1 && (o = t.Bt), n.length > 1 && ".z" === n.slice(0, 2) && /[0-9]+/.test(n.substring(2)) && (o = t.Zip), o
            }, e.isVideoFileExt = function (e) {
                let t = !1;
                do {
                    if (null === e || void 0 === e || "" === e) break;
                    let n = i.extname(e);
                    if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                    n = n.toLowerCase(), n += ";", T.indexOf(n) > -1 && (t = !0)
                } while (0);
                return t
            }, e.isSubtitleExt = function (e) {
                let t = !1;
                do {
                    if (null === e || void 0 === e || "" === e) break;
                    let n = i.extname(e);
                    if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                    n = n.toLowerCase(), n += ";", f.indexOf(n) > -1 && (t = !0)
                } while (0);
                return t
            }, e.isExecutableExt = function (e) {
                let t = !1;
                do {
                    if (null === e || void 0 === e || "" === e) break;
                    let n = i.extname(e);
                    if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                    n = n.toLowerCase(), n += ";", S.indexOf(n) > -1 && (t = !0)
                } while (0);
                return t
            }, e.isIsoExt = function (e) {
                let t = !1;
                do {
                    if (null === e || void 0 === e || "" === e) break;
                    let n = i.extname(e);
                    if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                    n = n.toLowerCase(), n += ";", y.indexOf(n) > -1 && (t = !0)
                } while (0);
                return t
            }, e.getGroupFileType = n, e.getDefaultGroupPrefix = function (e) {
                let i = "任务组";
                do {
                    if (void 0 === e || null === e || 0 === e.length) break;
                    let o = [];
                    for (let e = 0; e < 7; e++) o[e] = 0;
                    for (let t of e) {
                        let e = n(t);
                        o[e] = o[e] + 1
                    }
                    let r = t.Unkown;
                    for (let e = 1; e < o.length; e++) o[e] > o[r] && (r = e);
                    r === t.Video ? i = "视频任务组" : r === t.Software ? i = "程序任务组" : r === t.Music ? i = "音乐任务组" : r === t.Pic ? i = "图片任务组" : r === t.Doc ? i = "文档任务组" : r === t.Zip && (i = "压缩包任务组")
                } while (0);
                return i
            }, e.compareVersion = function (e, t) {
                let n = -2;
                do {
                    if (null === e || void 0 === e || "" === e || null === t || void 0 === t || "" === t) break;
                    let i = 0, o = 0, r = 0, s = 0, a = 0, l = 0, c = 0, u = 0, d = e.split(/\./);
                    if (null === d || void 0 === d || d.length < 3) break;
                    if (i = Number(d[0]), o = Number(d[1]), r = Number(d[2]), null !== d[3] && void 0 !== d[3] && "" !== d[3] && (s = Number(d[3])), null === (d = t.split(/\./)) || void 0 === d || d.length < 3) break;
                    if (a = Number(d[0]), l = Number(d[1]), c = Number(d[2]), null !== d[3] && void 0 !== d[3] && "" !== d[3] && (u = Number(d[3])), a > i) {
                        n = 1;
                        break
                    }
                    if (a < i) {
                        n = -1;
                        break
                    }
                    if (l > o) {
                        n = 1;
                        break
                    }
                    if (l < o) {
                        n = -1;
                        break
                    }
                    if (c > r) {
                        n = 1;
                        break
                    }
                    if (c < r) {
                        n = -1;
                        break
                    }
                    if (0 !== s) {
                        if (u > s) {
                            n = 1;
                            break
                        }
                        if (u < s) {
                            n = -1;
                            break
                        }
                    }
                    n = 0
                } while (0);
                return n
            }
        }(t.TaskUtilHelper || (t.TaskUtilHelper = {}))
    }, 59: function (e, t, n) {
        (function (e) {
            var n = 200, i = "__lodash_hash_undefined__", o = 800, r = 16, s = 9007199254740991,
                a = "[object Arguments]", l = "[object AsyncFunction]", c = "[object Function]",
                u = "[object GeneratorFunction]", d = "[object Null]", h = "[object Object]", f = "[object Proxy]",
                p = "[object Undefined]", m = /^\[object .+?Constructor\]$/, g = /^(?:0|[1-9]\d*)$/, _ = {};
            _["[object Float32Array]"] = _["[object Float64Array]"] = _["[object Int8Array]"] = _["[object Int16Array]"] = _["[object Int32Array]"] = _["[object Uint8Array]"] = _["[object Uint8ClampedArray]"] = _["[object Uint16Array]"] = _["[object Uint32Array]"] = !0, _[a] = _["[object Array]"] = _["[object ArrayBuffer]"] = _["[object Boolean]"] = _["[object DataView]"] = _["[object Date]"] = _["[object Error]"] = _[c] = _["[object Map]"] = _["[object Number]"] = _[h] = _["[object RegExp]"] = _["[object Set]"] = _["[object String]"] = _["[object WeakMap]"] = !1;
            var v = "object" == typeof global && global && global.Object === Object && global,
                b = "object" == typeof self && self && self.Object === Object && self,
                T = v || b || Function("return this")(), S = "object" == typeof t && t && !t.nodeType && t,
                y = S && "object" == typeof e && e && !e.nodeType && e, w = y && y.exports === S, C = w && v.process,
                E = function () {
                    try {
                        var e = y && y.require && y.require("util").types;
                        return e || C && C.binding && C.binding("util")
                    } catch (e) {
                    }
                }(), R = E && E.isTypedArray;
            var k, I, O, M = Array.prototype, N = Function.prototype, P = Object.prototype, x = T["__core-js_shared__"],
                D = N.toString, W = P.hasOwnProperty,
                F = (k = /[^.]+$/.exec(x && x.keys && x.keys.IE_PROTO || "")) ? "Symbol(src)_1." + k : "",
                A = P.toString, L = D.call(Object),
                B = RegExp("^" + D.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                V = w ? T.Buffer : void 0, H = T.Symbol, U = T.Uint8Array, j = V ? V.allocUnsafe : void 0,
                G = (I = Object.getPrototypeOf, O = Object, function (e) {
                    return I(O(e))
                }), K = Object.create, $ = P.propertyIsEnumerable, z = M.splice, Y = H ? H.toStringTag : void 0,
                X = function () {
                    try {
                        var e = Te(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (e) {
                    }
                }(), q = V ? V.isBuffer : void 0, Z = Math.max, J = Date.now, Q = Te(T, "Map"),
                ee = Te(Object, "create"), te = function () {
                    function e() {
                    }

                    return function (t) {
                        if (!Pe(t)) return {};
                        if (K) return K(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = void 0, n
                    }
                }();

            function ne(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ie(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function oe(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function re(e) {
                var t = this.__data__ = new ie(e);
                this.size = t.size
            }

            function se(e, t) {
                var n = ke(e), i = !n && Re(e), o = !n && !i && Oe(e), r = !n && !i && !o && De(e),
                    s = n || i || o || r, a = s ? function (e, t) {
                        for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                        return i
                    }(e.length, String) : [], l = a.length;
                for (var c in e) !t && !W.call(e, c) || s && ("length" == c || o && ("offset" == c || "parent" == c) || r && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Se(c, l)) || a.push(c);
                return a
            }

            function ae(e, t, n) {
                (void 0 === n || Ee(e[t], n)) && (void 0 !== n || t in e) || ue(e, t, n)
            }

            function le(e, t, n) {
                var i = e[t];
                W.call(e, t) && Ee(i, n) && (void 0 !== n || t in e) || ue(e, t, n)
            }

            function ce(e, t) {
                for (var n = e.length; n--;) if (Ee(e[n][0], t)) return n;
                return -1
            }

            function ue(e, t, n) {
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
                    return n === i ? void 0 : n
                }
                return W.call(t, e) ? t[e] : void 0
            }, ne.prototype.has = function (e) {
                var t = this.__data__;
                return ee ? void 0 !== t[e] : W.call(t, e)
            }, ne.prototype.set = function (e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = ee && void 0 === t ? i : t, this
            }, ie.prototype.clear = function () {
                this.__data__ = [], this.size = 0
            }, ie.prototype.delete = function (e) {
                var t = this.__data__, n = ce(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : z.call(t, n, 1), --this.size, 0))
            }, ie.prototype.get = function (e) {
                var t = this.__data__, n = ce(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, ie.prototype.has = function (e) {
                return ce(this.__data__, e) > -1
            }, ie.prototype.set = function (e, t) {
                var n = this.__data__, i = ce(n, e);
                return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
            }, oe.prototype.clear = function () {
                this.size = 0, this.__data__ = {hash: new ne, map: new (Q || ie), string: new ne}
            }, oe.prototype.delete = function (e) {
                var t = be(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, oe.prototype.get = function (e) {
                return be(this, e).get(e)
            }, oe.prototype.has = function (e) {
                return be(this, e).has(e)
            }, oe.prototype.set = function (e, t) {
                var n = be(this, e), i = n.size;
                return n.set(e, t), this.size += n.size == i ? 0 : 1, this
            }, re.prototype.clear = function () {
                this.__data__ = new ie, this.size = 0
            }, re.prototype.delete = function (e) {
                var t = this.__data__, n = t.delete(e);
                return this.size = t.size, n
            }, re.prototype.get = function (e) {
                return this.__data__.get(e)
            }, re.prototype.has = function (e) {
                return this.__data__.has(e)
            }, re.prototype.set = function (e, t) {
                var i = this.__data__;
                if (i instanceof ie) {
                    var o = i.__data__;
                    if (!Q || o.length < n - 1) return o.push([e, t]), this.size = ++i.size, this;
                    i = this.__data__ = new oe(o)
                }
                return i.set(e, t), this.size = i.size, this
            };
            var de, he = function (e, t, n) {
                for (var i = -1, o = Object(e), r = n(e), s = r.length; s--;) {
                    var a = r[de ? s : ++i];
                    if (!1 === t(o[a], a, o)) break
                }
                return e
            };

            function fe(e) {
                return null == e ? void 0 === e ? p : d : Y && Y in Object(e) ? function (e) {
                    var t = W.call(e, Y), n = e[Y];
                    try {
                        e[Y] = void 0;
                        var i = !0
                    } catch (e) {
                    }
                    var o = A.call(e);
                    i && (t ? e[Y] = n : delete e[Y]);
                    return o
                }(e) : function (e) {
                    return A.call(e)
                }(e)
            }

            function pe(e) {
                return xe(e) && fe(e) == a
            }

            function me(e) {
                return !(!Pe(e) || F && F in e) && (Me(e) ? B : m).test(function (e) {
                    if (null != e) {
                        try {
                            return D.call(e)
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
                if (!Pe(e)) return function (e) {
                    var t = [];
                    if (null != e) for (var n in Object(e)) t.push(n);
                    return t
                }(e);
                var t = ye(e), n = [];
                for (var i in e) ("constructor" != i || !t && W.call(e, i)) && n.push(i);
                return n
            }

            function _e(e, t, n, i, o) {
                e !== t && he(t, function (r, s) {
                    if (o || (o = new re), Pe(r)) !function (e, t, n, i, o, r, s) {
                        var a = we(e, n), l = we(t, n), c = s.get(l);
                        if (c) return void ae(e, n, c);
                        var u = r ? r(a, l, n + "", e, t, s) : void 0, d = void 0 === u;
                        if (d) {
                            var f = ke(l), p = !f && Oe(l), m = !f && !p && De(l);
                            u = l, f || p || m ? ke(a) ? u = a : xe(T = a) && Ie(T) ? u = function (e, t) {
                                var n = -1, i = e.length;
                                t || (t = Array(i));
                                for (; ++n < i;) t[n] = e[n];
                                return t
                            }(a) : p ? (d = !1, u = function (e, t) {
                                if (t) return e.slice();
                                var n = e.length, i = j ? j(n) : new e.constructor(n);
                                return e.copy(i), i
                            }(l, !0)) : m ? (d = !1, g = l, _ = !0 ? (v = g.buffer, b = new v.constructor(v.byteLength), new U(b).set(new U(v)), b) : g.buffer, u = new g.constructor(_, g.byteOffset, g.length)) : u = [] : function (e) {
                                if (!xe(e) || fe(e) != h) return !1;
                                var t = G(e);
                                if (null === t) return !0;
                                var n = W.call(t, "constructor") && t.constructor;
                                return "function" == typeof n && n instanceof n && D.call(n) == L
                            }(l) || Re(l) ? (u = a, Re(a) ? u = function (e) {
                                return function (e, t, n, i) {
                                    var o = !n;
                                    n || (n = {});
                                    var r = -1, s = t.length;
                                    for (; ++r < s;) {
                                        var a = t[r], l = i ? i(n[a], e[a], a, n, e) : void 0;
                                        void 0 === l && (l = e[a]), o ? ue(n, a, l) : le(n, a, l)
                                    }
                                    return n
                                }(e, We(e))
                            }(a) : Pe(a) && !Me(a) || (u = function (e) {
                                return "function" != typeof e.constructor || ye(e) ? {} : te(G(e))
                            }(l))) : d = !1
                        }
                        var g, _, v, b;
                        var T;
                        d && (s.set(l, u), o(u, l, i, r, s), s.delete(l));
                        ae(e, n, u)
                    }(e, t, s, n, _e, i, o); else {
                        var a = i ? i(we(e, s), r, s + "", e, t, o) : void 0;
                        void 0 === a && (a = r), ae(e, s, a)
                    }
                }, We)
            }

            function ve(e, t) {
                return Ce(function (e, t, n) {
                    return t = Z(void 0 === t ? e.length - 1 : t, 0), function () {
                        for (var i = arguments, o = -1, r = Z(i.length - t, 0), s = Array(r); ++o < r;) s[o] = i[t + o];
                        o = -1;
                        for (var a = Array(t + 1); ++o < t;) a[o] = i[o];
                        return a[t] = n(s), function (e, t, n) {
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
                        }(e, this, a)
                    }
                }(e, t, Le), e + "")
            }

            function be(e, t) {
                var n, i, o = e.__data__;
                return ("string" == (i = typeof(n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }

            function Te(e, t) {
                var n = function (e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return me(n) ? n : void 0
            }

            function Se(e, t) {
                var n = typeof e;
                return !!(t = null == t ? s : t) && ("number" == n || "symbol" != n && g.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function ye(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || P)
            }

            function we(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
            }

            var Ce = function (e) {
                var t = 0, n = 0;
                return function () {
                    var i = J(), s = r - (i - n);
                    if (n = i, s > 0) {
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
            } : Le);

            function Ee(e, t) {
                return e === t || e != e && t != t
            }

            var Re = pe(function () {
                return arguments
            }()) ? pe : function (e) {
                return xe(e) && W.call(e, "callee") && !$.call(e, "callee")
            }, ke = Array.isArray;

            function Ie(e) {
                return null != e && Ne(e.length) && !Me(e)
            }

            var Oe = q || function () {
                return !1
            };

            function Me(e) {
                if (!Pe(e)) return !1;
                var t = fe(e);
                return t == c || t == u || t == l || t == f
            }

            function Ne(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s
            }

            function Pe(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function xe(e) {
                return null != e && "object" == typeof e
            }

            var De = R ? function (e) {
                return function (t) {
                    return e(t)
                }
            }(R) : function (e) {
                return xe(e) && Ne(e.length) && !!_[fe(e)]
            };

            function We(e) {
                return Ie(e) ? se(e, !0) : ge(e)
            }

            var Fe, Ae = (Fe = function (e, t, n) {
                _e(e, t, n)
            }, ve(function (e, t) {
                var n = -1, i = t.length, o = i > 1 ? t[i - 1] : void 0, r = i > 2 ? t[2] : void 0;
                for (o = Fe.length > 3 && "function" == typeof o ? (i--, o) : void 0, r && function (e, t, n) {
                    if (!Pe(n)) return !1;
                    var i = typeof t;
                    return !!("number" == i ? Ie(n) && Se(t, n.length) : "string" == i && t in n) && Ee(n[t], e)
                }(t[0], t[1], r) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
                    var s = t[n];
                    s && Fe(e, s, n, o)
                }
                return e
            }));

            function Le(e) {
                return e
            }

            e.exports = Ae
        }).call(this, n(67)(e))
    }, 6: function (e, t) {
        e.exports = require("util")
    }, 60: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(68), o = n(65);
        !function (e) {
            e.getWindowPreference = function (e = !1) {
                let t = o.default(), n = {};
                return t && t.colors && "string" == typeof t.colors.colorPrimaryControl1 && (n.hoverBackgroundColor = e ? parseInt(i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1), 16) : i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1)), n
            }
        }(t.WindowPreferenceNS || (t.WindowPreferenceNS = {}))
    }, 614: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(1).default.getLogger("Thunder.SuspensionRender.hovertext.manager"), r = n(486);
        !function (e) {
            class t {
                constructor() {
                    this.mIsDonwloading = !1
                }

                get isDonwloading() {
                    return this.mIsDonwloading
                }

                set isDonwloading(e) {
                    this.mIsDonwloading = e
                }

                init() {
                    this.querySettingText().catch()
                }

                getText(e) {
                    let t = null;
                    return this.mResponse && (t = e ? this.mResponse.notvip : this.mResponse.unlogin), o.information("data", t), t
                }

                querySettingText() {
                    return i(this, void 0, void 0, function* () {
                        let e = new r.SettingHttpSession;
                        this.mResponse = yield e.querySetting(), o.information("mResponse", this.mResponse)
                    })
                }
            }

            e.HoverTextManager = t;
            let n = null;
            e.getHoverTextManager = function () {
                return n || (n = new t), n
            }
        }(t.HoverTextManagerNS || (t.HoverTextManagerNS = {}))
    }, 63: function (e, t) {
        e.exports = require("https")
    }, 65: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(3), r = n(1), s = n(4), a = r.default.getLogger("GetSkinInfo");
        let l;
        (function () {
            return i(this, void 0, void 0, function* () {
                "renderer" === process.type ? (a.information("renderer process"), s.client.callServerFunction("GetSkinInfo").then(e => {
                    l = e, a.information("send OnChangeSkin", e)
                }).catch(e => {
                    a.warning(e)
                }), s.client.attachServerEvent("OnChangeSkin", (e, t) => {
                    l = t, a.information("send OnChangeSkin", t)
                })) : "browser" === process.type && (a.information("main process"), o.ipcMain.on("OnChangeSkin", (e, t) => {
                    a.information("OnChangeSkin", t), l = t
                }))
            })
        })().catch(e => {
            a.information(e)
        }), t.default = function () {
            return l
        }
    }, 66: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(7), r = n(1), s = n(11), a = n(59), l = r.default.getLogger("MenuSkinNS");
        !function (e) {
            function t(e, t) {
                return i(this, void 0, void 0, function* () {
                    if (l.information("setStyle", e, t), null !== e) {
                        const {WindowPreferenceNS: i} = yield Promise.resolve().then(() => n(60));
                        let o = {windowPreference: i.getWindowPreference()};
                        l.information("skinOpts", o), yield e.setStyle(a(o, t))
                    }
                })
            }

            e.setStyle = t, e.popEditableDefaultContextMenu = function (e, n, r) {
                return i(this, void 0, void 0, function* () {
                    let r = yield o.asyncRemoteCall.getCurrentWebContents();
                    r.once("context-menu", (a, c) => i(this, void 0, void 0, function* () {
                        if (l.verbose(a), c.isEditable) {
                            let i = [{
                                label: "撤销", enabled: c.editFlags.canUndo, click: () => {
                                    r.undo()
                                }
                            }, {type: "separator"}, {
                                label: "剪切", enabled: c.editFlags.canCut, click: () => {
                                    r.cut()
                                }
                            }, {
                                label: "复制", enabled: c.editFlags.canCopy, click: () => {
                                    r.copy()
                                }
                            }, {
                                label: "粘贴",
                                enabled: c.editFlags.canPaste && s.ThunderUtil.isClipboardTextFormatAvailable(),
                                click: () => {
                                    r.paste()
                                }
                            }, {
                                label: "删除", enabled: c.editFlags.canDelete, click: () => {
                                    r.delete()
                                }
                            }, {type: "separator"}, {
                                label: "全选", enabled: c.editFlags.canSelectAll, click: () => {
                                    r.selectAll()
                                }
                            }];
                            if (void 0 !== e && "function" == typeof e) {
                                let t = e(c);
                                void 0 !== t && t.length > 0 && (void 0 === n ? n = i.length : (n < 0 && (n = i.length + 1 + n) < 0 && (n = 0), n > i.length && (n = i.length)), i.splice(n, 0, ...t))
                            }
                            let a = yield(yield o.asyncRemoteCall.getMenu()).buildFromTemplate(i);
                            yield t(a, {});
                            let l = yield o.asyncRemoteCall.getCurrentWindow();
                            yield a.popup({window: l})
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

            function n(e, n, i, o) {
                return "0x" + t(o) + t(e) + t(n) + t(i)
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
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(1).default.getLogger("async-remote-call"), r = n(35), s = n(14), a = n(6);
        t.asyncRemoteCall = new class extends s.EventEmitter {
            constructor() {
                super(), this.mapObj = new Map, this.mapObjIniting = new Map, "renderer" !== process.type && o.error('can not import "renderer-process-call" module in non-renderer process', process.type)
            }

            getAppName() {
                return i(this, void 0, void 0, function* () {
                    if (void 0 === this.appName) {
                        let e = yield this.getApp();
                        this.appName = yield e.getName()
                    }
                    return this.appName
                })
            }

            getAppVersion() {
                return i(this, void 0, void 0, function* () {
                    if (void 0 === this.appVersion) {
                        let e = yield this.getApp();
                        this.appVersion = yield e.getVersion()
                    }
                    return this.appVersion
                })
            }

            getProcess() {
                return i(this, void 0, void 0, function* () {
                    return r.global.process.__resolve()
                })
            }

            getIpcMain() {
                return i(this, void 0, void 0, function* () {
                    return this.getCurrentObject("ipcMain")
                })
            }

            getDialog() {
                return i(this, void 0, void 0, function* () {
                    return this.getCurrentObject("dialog")
                })
            }

            getApp() {
                return i(this, void 0, void 0, function* () {
                    return this.getCurrentObject("app")
                })
            }

            getShell() {
                return i(this, void 0, void 0, function* () {
                    return this.getCurrentObject("shell")
                })
            }

            getMenu() {
                return i(this, void 0, void 0, function* () {
                    return this.getCurrentObject("Menu")
                })
            }

            getScreen() {
                return i(this, void 0, void 0, function* () {
                    return this.getCurrentObject("screen")
                })
            }

            getBrowserWindow() {
                return i(this, void 0, void 0, function* () {
                    return this.getCurrentObject("BrowserWindow")
                })
            }

            getGlobalShortcut() {
                return i(this, void 0, void 0, function* () {
                    return this.getCurrentObject("globalShortcut")
                })
            }

            getCurrentWebContents() {
                return i(this, void 0, void 0, function* () {
                    let e = this.mapObj.get("currentWebContents");
                    return void 0 === e && (this.mapObjIniting.get("currentWebContents") ? e = yield new Promise(e => i(this, void 0, void 0, function* () {
                        this.on("OnInitCurrentWebContents", t => {
                            e(t)
                        })
                    })) : (this.mapObjIniting.set("currentWebContents", !0), e = yield r.getCurrentWebContents().__resolve(), this.mapObjIniting.set("currentWebContents", !1), this.emit("OnInitCurrentWebContents", e), this.listeners("OnInitCurrentWebContents").forEach(e => {
                        this.removeListener("OnInitCurrentWebContents", e)
                    })), this.mapObj.set("currentWebContents", e)), e
                })
            }

            getCurrentWindow() {
                return i(this, void 0, void 0, function* () {
                    let e = this.mapObj.get("currentWindow");
                    return void 0 === e && (this.mapObjIniting.get("currentWindow") ? e = yield new Promise(e => i(this, void 0, void 0, function* () {
                        this.on("OnInitCurrentWindow", t => {
                            e(t)
                        })
                    })) : (this.mapObjIniting.set("currentWindow", !0), e = yield r.getCurrentWindow().__resolve(), this.mapObjIniting.set("currentWindow", !1), this.emit("OnInitCurrentWindow", e), this.listeners("OnInitCurrentWindow").forEach(e => {
                        this.removeListener("OnInitCurrentWindow", e)
                    })), this.mapObj.set("currentWindow", e)), e
                })
            }

            getCurrentObject(e) {
                return i(this, void 0, void 0, function* () {
                    let t = this.mapObj.get(e);
                    return a.isNullOrUndefined(t) && (this.mapObjIniting.get(e) ? t = yield new Promise(t => i(this, void 0, void 0, function* () {
                        this.on(e, e => {
                            t(e)
                        })
                    })) : (this.mapObjIniting.set(e, !0), t = yield r.electron[e].__resolve(), this.mapObjIniting.set(e, !1), this.emit(e, t), this.listeners(e).forEach(t => {
                        this.removeListener(e, t)
                    })), this.mapObj.set(e, t)), t
                })
            }
        }
    }, 8: function (e, t) {
        e.exports = vendor_e17de3ecacc329e8b720
    }, 868: function (e, t, n) {
        n(43), e.exports = n(869)
    }, 869: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(33);
        n(4).client.start({name: "suspensionXdasRenderer"}), i.CommonIPCRenderer.rendererCommunicator.initialize("suspensionXdasRenderer"), i.CommonIPCRenderer.rendererCommunicator.connect();
        const o = n(46), r = n(37), s = n(870);
        n(56);
        const a = n(57);
        n(55);
        const l = n(1).default.getLogger("SuspensionXdasRenderer");
        o.PerformanceMonitorStatNS.init("suspension-xdas-renderer"), a.ThunderToolsNS.enableDevTools().catch(e => {
            l.warning(e)
        }), a.ThunderToolsNS.enableDragOpenFile(), new r.default({
            components: {App: s.default},
            render: e => e("app")
        }).$mount("#app")
    }, 870: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(510), o = n(427);
        for (var r in o) "default" !== r && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(r);
        n(196), n(493), n(158);
        var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
        a.options.__file = "src\\suspension-xdas-renderer\\app.vue", t.default = a.exports
    }, 871: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(564), o = n(429);
        for (var r in o) "default" !== r && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(r);
        var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
        a.options.__file = "src\\suspension-xdas-renderer\\views\\float-panel.vue", t.default = a.exports
    }, 872: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(575), o = n(431);
        for (var r in o) "default" !== r && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(r);
        var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
        a.options.__file = "src\\suspension-xdas-renderer\\views\\task-item.vue", t.default = a.exports
    }, 873: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(7);
        !function (e) {
            e.getScreenRectangle = function () {
                return i(this, void 0, void 0, function* () {
                    let e = {x: 0, y: 0, width: 0, height: 0}, t = yield o.asyncRemoteCall.getScreen(),
                        n = yield t.getPrimaryDisplay();
                    e.width = n.size.width, e.height = n.size.height;
                    let i = (yield t.getAllDisplays()).find(e => 0 !== e.bounds.x || 0 !== e.bounds.y);
                    return i && (i.bounds.x < 0 ? (e.x = i.bounds.x, e.width += i.bounds.width, e.y = 0) : i.bounds.x > 0 ? (e.x = 0, e.width += i.bounds.width, e.y = 0) : i.bounds.y < 0 ? (e.x = 0, e.y = i.bounds.y, e.height += i.bounds.height) : i.bounds.y > 0 && (e.x = 0, e.y = 0, e.height += i.bounds.height)), e
                })
            }
        }(t.MutiScreenHelper || (t.MutiScreenHelper = {}))
    }, 874: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(490), r = n(1).default.getLogger("Thunder.Suspension.bubble"), s = n(38), a = n(15), l = n(127),
            c = n(195), u = n(14), d = n(4), h = c.UserHelperNS.getUserHelper();
        var f;
        !function (e) {
            e.bubbleShowChanged = "OnBubbleShowChanged"
        }(f = t.BubbleEventNS || (t.BubbleEventNS = {}));

        class p extends u.EventEmitter {
            constructor() {
                super(...arguments), this.mIsBubbleVisible = !1, this.mIsFloatPanelShowed = !1, this.mIsClosed = !1, this.mCloseTimer = null, this.mQueryTimer = null
            }

            get isFloatPanelShowed() {
                return this.mIsFloatPanelShowed
            }

            set isFloatPanelShowed(e) {
                this.mIsFloatPanelShowed = e
            }

            get isBubbleVisible() {
                return r.information("mIsBubbleVisible", this.mIsBubbleVisible), this.mIsBubbleVisible
            }

            init() {
                return i(this, void 0, void 0, function* () {
                    {
                        this.attachUserEvents(), h.loadThunderVersion();
                        let e = yield this.isLogin().then();
                        r.information("islogin", e), e && this.onLogin().catch()
                    }
                })
            }

            closeBubble(e) {
                r.information("closeBubble", e), this.mIsBubbleVisible = !1, this.emit(f.bubbleShowChanged, !1)
            }

            showBubble() {
                return i(this, void 0, void 0, function* () {
                    do {
                        let e = yield this.isCanShowBubble();
                        if (r.information("isCanShow", e), this.calculateExpireDate(), !this.mResponse || 0 !== this.mResponse.result || !e || this.mIsClosed) break;
                        try {
                            this.mTipContent = JSON.parse(this.mResponse.data.content), r.information("mTipContent", this.mTipContent), this.mIsBubbleVisible = !0;
                            let e = this.mTipContent.text.split("{{day}}");
                            r.information("textArray", e);
                            let t = {};
                            if (e.length > 1) {
                                t.bubbleText = e[0], t.bubbleEndText = e[1];
                                let n = this.calculateExpireDate();
                                r.information("expireDate", n), t.expireDate = n
                            } else t.bubbleText = this.mTipContent.text;
                            t.bubbleBtnText = this.mTipContent.buttonText, this.emit(f.bubbleShowChanged, !0, t), yield this.reportTip();
                            let n = this.getCurrentDateStr();
                            yield l.ConfigHelperNS.setValue("SuspensionBubble", h.userId + "_ShowDate", n), r.information("SuspensionBubble", h.userId + "_ShowDate", n), this.killTimer(), this.mCloseTimer = setTimeout(() => i(this, void 0, void 0, function* () {
                                this.mIsClosed || this.closeBubble(1)
                            }), 6e4)
                        } catch (e) {
                        }
                    } while (0)
                })
            }

            queryTip() {
                return i(this, void 0, void 0, function* () {
                    {
                        let e = new o.BubbleHttpSession;
                        this.mResponse = yield e.queryTip(), r.information("mResponse :", this.mResponse), yield this.showBubble()
                    }
                })
            }

            traceEvent(e, t) {
                let n = "";
                null !== t && void 0 !== t && "" !== t && (n = t), r.information(e, n), a.XLStatNS.trackEvent("xlx_vip_event", e, "", 0, 0, 0, 0, n)
            }

            getCommonExtData() {
                let e = "";
                return e = (e = (e = e + ",is_login=" + (this.isLogin() ? "1" : "0")) + ",is_vip=" + (h.isVip ? "1" : "0")) + ",vip_type=" + h.vasType
            }

            showTip() {
                let e = this.getCommonExtData();
                this.traceEvent("xfq_xfmodel_show", e)
            }

            closeTip(e) {
                let t = this.getCommonExtData();
                t = t + ",button=" + e, this.traceEvent("xfq_xfmodel_click", t)
            }

            isCanShowBubble() {
                return i(this, void 0, void 0, function* () {
                    let e = !0;
                    do {
                        let t = yield l.ConfigHelperNS.getValue("SuspensionBubble", h.userId + "_ShowDate", "0");
                        r.information("bubbleShowDate", t);
                        let n = this.getCurrentDateStr();
                        if (r.information("curDate", n), t === n) {
                            e = !1;
                            break
                        }
                        let i = yield l.ConfigHelperNS.getValue("CenterTip", h.userId + "_ShowDate", "0");
                        if (r.information("centerTipShowDate", i), i === n) {
                            e = !1;
                            break
                        }
                        let o = yield this.isLogin();
                        if (r.information("islogin", o), !o) {
                            e = !1;
                            break
                        }
                        if (this.mIsFloatPanelShowed) {
                            e = !1;
                            break
                        }
                    } while (0);
                    return e
                })
            }

            killTimer() {
                null !== this.mCloseTimer && (clearTimeout(this.mCloseTimer), this.mCloseTimer = null), null !== this.mQueryTimer && (clearTimeout(this.mQueryTimer), this.mQueryTimer = null)
            }

            isLogin() {
                return i(this, void 0, void 0, function* () {
                    return yield d.client.callServerFunction("IsLogined")
                })
            }

            attachUserEvents() {
                s.NativeCallModule.nativeCall.AttachNativeEvent("onLoginSuc", () => i(this, void 0, void 0, function* () {
                    r.information("onLoginSuc"), this.onLogin().catch()
                })), s.NativeCallModule.nativeCall.AttachNativeEvent("onLogout", () => {
                    h.onLogout(), this.killTimer(), this.closeBubble(0), this.mIsBubbleVisible = !1, this.mIsClosed = !1, this.mResponse = null, this.mTipContent = null
                }), s.NativeCallModule.nativeCall.AttachNativeEvent("onUserInfoChange", (e, t) => i(this, void 0, void 0, function* () {
                    yield this.onUserInfoChange(e, t)
                })), s.NativeCallModule.nativeCall.AttachNativeEvent("onLoginStatusChange", (e, t) => {
                    this.onLoginStatusChange(t)
                })
            }

            calculateExpireDate() {
                let e, t, n;
                e = h.expireDate.substring(0, 4), t = h.expireDate.substring(4, 6), n = h.expireDate.substring(6, 8);
                let i = new Date(e + "-" + t + "-" + n + " 00:00:00").getTime() / 1e3, o = new Date,
                    r = o.getFullYear(), s = o.getMonth(), a = o.getDate(),
                    l = (o = new Date(r + "-" + (s < 10 ? "0" + (s + 1) : s + 1) + "-" + (a < 10 ? "0" + a : a) + " 00:00:00")).getTime() / 1e3;
                return Math.ceil(Math.abs(i - l) / 86400)
            }

            getCurrentDateStr() {
                let e = new Date, t = e.getFullYear(), n = e.getMonth(), i = e.getDate();
                return t.toString() + (n < 10 ? "0" + (n + 1) : n + 1) + (i < 10 ? "0" + i : i)
            }

            reportTip() {
                return i(this, void 0, void 0, function* () {
                    let e = yield(new o.BubbleHttpSession).reportTip(this.mResponse.data.msgid, this.mResponse.data.reach_type);
                    r.information("ret", e), this.showTip()
                })
            }

            clickBubble(e) {
                this.mIsBubbleVisible = !1, r.information("clickType", e), this.mIsClosed = !0;
                let t = null;
                if (1 === e ? t = "xf" : 2 === e ? t = "x" : 3 === e ? t = "other_area" : 4 === e && (t = "xfq"), this.closeBubble(1), this.closeTip(t), 2 !== e && this.mTipContent && this.mTipContent.url) {
                    let e = this.mTipContent.url;
                    this.mTipContent.aid && (e = e + "?aidfrom=" + this.mTipContent.aid), this.mTipContent.refer && (e = e + "&referfrom=" + this.mTipContent.refer), r.information("url", e), d.client.callServerFunction("BringMainWndToTop").catch(), d.client.callServerFunction("OpenNewTab", e).catch()
                }
            }

            onUserInfoChange(e, t) {
                return i(this, void 0, void 0, function* () {
                    "vipinfo" === e && (yield h.parseUserInfo())
                })
            }

            onLoginStatusChange(e) {
                "offline" === e && h.onLogout()
            }

            onLogin() {
                return i(this, void 0, void 0, function* () {
                    yield h.onLogin(), this.mQueryTimer || (r.information("start timer 30s"), this.mQueryTimer = setTimeout(() => i(this, void 0, void 0, function* () {
                        this.mQueryTimer = null, this.isCanShowBubble() && (yield this.queryTip())
                    }), 3e4))
                })
            }
        }

        t.BubbleManager = p, function (e) {
            let t = null;
            e.getBubbleManager = function () {
                return t || (t = new p), t
            }
        }(t.BubbleManagerNS || (t.BubbleManagerNS = {}))
    }, 875: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t, n, i;
            !function (e) {
                e[e.Vip = 0] = "Vip", e[e.Try = 1] = "Try", e[e.Ad = 2] = "Ad"
            }(t = e.VipTaskType || (e.VipTaskType = {})), function (e) {
                e[e.PlatinumVip = 0] = "PlatinumVip", e[e.SuperVip = 1] = "SuperVip", e[e.MixVip = 2] = "MixVip"
            }(n = e.TryType || (e.TryType = {})), function (e) {
                e[e.Unkown = -1] = "Unkown", e[e.Init = 0] = "Init", e[e.CommitWait = 1] = "CommitWait", e[e.Commiting = 2] = "Commiting", e[e.CommitFailed = 3] = "CommitFailed", e[e.CommitSuccess = 4] = "CommitSuccess", e[e.AcclerateWait = 5] = "AcclerateWait", e[e.SearchResource = 6] = "SearchResource", e[e.AcclerateFailed = 7] = "AcclerateFailed", e[e.AcclerateStoped = 8] = "AcclerateStoped", e[e.Acclerating = 9] = "Acclerating", e[e.Finished = 10] = "Finished"
            }(i = e.VipTaskStatus || (e.VipTaskStatus = {}))
        }(t.VipDownloadDefineNS || (t.VipDownloadDefineNS = {}))
    }, 876: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(7), r = n(877), s = n(9), a = n(2), l = n(100),
            c = s.default(a.join(__rootDir, "../bin/ThunderHelper.node"));
        t.default = function (e, t) {
            return i(this, void 0, void 0, function* () {
                let n = {x: 0, y: 0}, s = document.querySelector(e), a = !1, u = 0, d = void 0,
                    h = (yield t.getNativeWindowHandle()).readUIntLE(0, 4), f = function () {
                        d && a && (s.releasePointerCapture(d), a = !1, d = void 0)
                    }, p = yield o.asyncRemoteCall.getCurrentWindow();
                p.on("hide", f);
                let m = function (e) {
                    return i(this, void 0, void 0, function* () {
                        yield l.ToolsUtilitiesAWNS.setForegroundWindow(c, t);
                        let i = c.getWindowRect(h), o = c.getCursorPos();
                        n = {
                            x: i.x - o.x,
                            y: i.y - o.y
                        }, (yield t.isFullScreen()) ? (a = !1, d = void 0) : (a = !0, d = e.pointerId, u = 0, s.setPointerCapture(e.pointerId))
                    })
                }, g = function (e) {
                    a && (a = !1, d = void 0, s.releasePointerCapture(e.pointerId))
                }, _ = function (e) {
                    return i(this, void 0, void 0, function* () {
                        let i = !1;
                        do {
                            if (!a) break;
                            if (yield t.isMaximized()) break;
                            if (yield t.isFullScreen()) break;
                            if (c.getKeyState(r.VirtualKeyCode.VK_LBUTTON) >= 0) break;
                            if (++u % 3 != 0) {
                                i = !0;
                                break
                            }
                            let e = c.getCursorPos();
                            c.setWindowPos(h, 0, Math.floor(e.x + n.x), Math.floor(e.y + n.y), 0, 0, r.Uflag.SWP_NOSIZE | r.Uflag.SWP_NOZORDER), i = !0
                        } while (0);
                        !i && a ? (a = !1, d = void 0, s.releasePointerCapture(e.pointerId)) : i && (s.hasPointerCapture(e.pointerId) || (s.setPointerCapture(e.pointerId), d = e.pointerId))
                    })
                };
                return s.addEventListener("pointerdown", m), s.addEventListener("pointerup", g), s.addEventListener("pointermove", _), function () {
                    s.removeEventListener("pointerdown", m), s.removeEventListener("pointerup", g), s.removeEventListener("pointermove", _), p.removeListener("hide", f)
                }
            })
        }
    }, 877: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e[e.HWND_NOTOPMOST = -2] = "HWND_NOTOPMOST", e[e.HWND_TOPMOST = -1] = "HWND_TOPMOST", e[e.HWND_TOP = 0] = "HWND_TOP", e[e.HWND_BOTTOM = 1] = "HWND_BOTTOM"
        }(t.OptionOfHWNDInAfter || (t.OptionOfHWNDInAfter = {})), function (e) {
            e[e.SWP_ASYNCWINDOWPOS = 16384] = "SWP_ASYNCWINDOWPOS", e[e.SWP_DEFERERASE = 8192] = "SWP_DEFERERASE", e[e.SWP_DRAWFRAME = 32] = "SWP_DRAWFRAME", e[e.SWP_FRAMECHANGED = 32] = "SWP_FRAMECHANGED", e[e.SWP_HIDEWINDOW = 128] = "SWP_HIDEWINDOW", e[e.SWP_NOACTIVATE = 16] = "SWP_NOACTIVATE", e[e.SWP_NOCOPYBITS = 256] = "SWP_NOCOPYBITS", e[e.SWP_NOMOVE = 2] = "SWP_NOMOVE", e[e.SWP_NOOWNERZORDER = 512] = "SWP_NOOWNERZORDER", e[e.SWP_NOREDRAW = 8] = "SWP_NOREDRAW", e[e.SWP_NOREPOSITION = 512] = "SWP_NOREPOSITION", e[e.SWP_NOSENDCHANGING = 1024] = "SWP_NOSENDCHANGING", e[e.SWP_NOSIZE = 1] = "SWP_NOSIZE", e[e.SWP_NOZORDER = 4] = "SWP_NOZORDER", e[e.SWP_SHOWWINDOW = 64] = "SWP_SHOWWINDOW"
        }(t.Uflag || (t.Uflag = {})), function (e) {
            e[e.SW_FORCEMINIMIZE = 11] = "SW_FORCEMINIMIZE", e[e.SW_HIDE = 0] = "SW_HIDE", e[e.SW_MAXIMIZE = 3] = "SW_MAXIMIZE", e[e.SW_MINIMIZE = 6] = "SW_MINIMIZE", e[e.SW_RESTORE = 9] = "SW_RESTORE", e[e.SW_SHOW = 5] = "SW_SHOW", e[e.SW_SHOWDEFAULT = 10] = "SW_SHOWDEFAULT", e[e.SW_SHOWMAXIMIZED = 3] = "SW_SHOWMAXIMIZED", e[e.SW_SHOWMINIMIZED = 2] = "SW_SHOWMINIMIZED", e[e.SW_SHOWMINNOACTIVE = 7] = "SW_SHOWMINNOACTIVE", e[e.SW_SHOWNA = 8] = "SW_SHOWNA", e[e.SW_SHOWNOACTIVATE = 4] = "SW_SHOWNOACTIVATE", e[e.SW_SHOWNORMAL = 1] = "SW_SHOWNORMAL"
        }(t.CmdShow || (t.CmdShow = {})), function (e) {
            e[e.WS_BORDER = 8388608] = "WS_BORDER", e[e.WS_CAPTION = 12582912] = "WS_CAPTION", e[e.WS_CHILD = 1073741824] = "WS_CHILD", e[e.WS_CHILDWINDOW = 1073741824] = "WS_CHILDWINDOW", e[e.WS_CLIPCHILDREN = 33554432] = "WS_CLIPCHILDREN", e[e.WS_CLIPSIBLINGS = 67108864] = "WS_CLIPSIBLINGS", e[e.WS_POPUP = 2147483648] = "WS_POPUP", e[e.WS_THICKFRAME = 262144] = "WS_THICKFRAME"
        }(t.WindowStyle || (t.WindowStyle = {})), function (e) {
            e[e.WS_EX_TOOLWINDOW = 128] = "WS_EX_TOOLWINDOW", e[e.WS_EX_APPWINDOW = 262144] = "WS_EX_APPWINDOW", e[e.WS_EX_TOPMOST = 8] = "WS_EX_TOPMOST", e[e.WS_EX_WINDOWEDGE = 256] = "WS_EX_WINDOWEDGE", e[e.WS_EX_NOACTIVATE = 134217728] = "WS_EX_NOACTIVATE"
        }(t.WindowStyleEx || (t.WindowStyleEx = {})), function (e) {
            e[e.GWL_EXSTYLE = -20] = "GWL_EXSTYLE", e[e.GWL_HINSTANCE = -6] = "GWL_HINSTANCE", e[e.GWL_ID = -12] = "GWL_ID", e[e.GWL_STYLE = -16] = "GWL_STYLE", e[e.GWL_USERDATA = -21] = "GWL_USERDATA", e[e.GWL_WNDPROC = -4] = "GWL_WNDPROC"
        }(t.SetWindowType || (t.SetWindowType = {})), function (e) {
            e[e.WM_CREATE = 1] = "WM_CREATE", e[e.WM_DESTROY = 2] = "WM_DESTROY", e[e.WM_MOVE = 3] = "WM_MOVE", e[e.WM_SIZE = 5] = "WM_SIZE", e[e.WM_ACTIVATE = 6] = "WM_ACTIVATE", e[e.WM_SETFOCUS = 7] = "WM_SETFOCUS", e[e.WM_KILLFOCUS = 8] = "WM_KILLFOCUS", e[e.WM_ENABLE = 10] = "WM_ENABLE", e[e.WM_KEYDOWN = 256] = "WM_KEYDOWN", e[e.WM_KEYUP = 257] = "WM_KEYUP", e[e.WM_SYSKEYDOWN = 260] = "WM_SYSKEYDOWN", e[e.WM_MOUSEMOVE = 512] = "WM_MOUSEMOVE", e[e.WM_SETCURSOR = 32] = "WM_SETCURSOR", e[e.WM_LBUTTONDOWN = 513] = "WM_LBUTTONDOWN", e[e.WM_LBUTTONUP = 514] = "WM_LBUTTONUP", e[e.WM_LBUTTONDBLCLK = 515] = "WM_LBUTTONDBLCLK", e[e.WM_RBUTTONUP = 517] = "WM_RBUTTONUP", e[e.WM_MOUSEWHEEL = 522] = "WM_MOUSEWHEEL", e[e.WM_MOUSELEAVE = 675] = "WM_MOUSELEAVE", e[e.WM_DPICHANGED = 736] = "WM_DPICHANGED", e[e.WM_GETMINMAXINFO = 36] = "WM_GETMINMAXINFO", e[e.WM_NCHITTEST = 132] = "WM_NCHITTEST", e[e.WM_NCMOUSEMOVE = 160] = "WM_NCMOUSEMOVE", e[e.WM_NCLBUTTONDOWN = 161] = "WM_NCLBUTTONDOWN", e[e.WM_NCLBUTTONUP = 162] = "WM_NCLBUTTONUP", e[e.WM_NCLBUTTONDBLCLK = 163] = "WM_NCLBUTTONDBLCLK", e[e.WM_NCRBUTTONDOWN = 164] = "WM_NCRBUTTONDOWN", e[e.WM_NCRBUTTONUP = 165] = "WM_NCRBUTTONUP", e[e.WM_NCRBUTTONDBLCLK = 166] = "WM_NCRBUTTONDBLCLK", e[e.WM_NCMBUTTONDOWN = 167] = "WM_NCMBUTTONDOWN", e[e.WM_NCMBUTTONUP = 168] = "WM_NCMBUTTONUP", e[e.WM_NCMBUTTONDBLCLK = 169] = "WM_NCMBUTTONDBLCLK", e[e.WM_WINDOWPOSCHANGED = 71] = "WM_WINDOWPOSCHANGED", e[e.WM_WINDOWPOSCHANGING = 70] = "WM_WINDOWPOSCHANGING", e[e.WM_ACTIVATEAPP = 28] = "WM_ACTIVATEAPP", e[e.WM_DWMCOMPOSITIONCHANGED = 798] = "WM_DWMCOMPOSITIONCHANGED", e[e.WM_QUERYENDSESSION = 17] = "WM_QUERYENDSESSION"
        }(t.WindowMessage || (t.WindowMessage = {})), function (e) {
            e[e.GW_HWNDFIRST = 0] = "GW_HWNDFIRST", e[e.GW_HWNDLAST = 1] = "GW_HWNDLAST", e[e.GW_HWNDNEXT = 2] = "GW_HWNDNEXT", e[e.GW_HWNDPREV = 3] = "GW_HWNDPREV", e[e.GW_OWNER = 4] = "GW_OWNER", e[e.GW_CHILD = 5] = "GW_CHILD", e[e.GW_ENABLEDPOPUP = 6] = "GW_ENABLEDPOPUP"
        }(t.GWCmd || (t.GWCmd = {})), function (e) {
            e[e.HTERROR = -2] = "HTERROR", e[e.HTTRANSPARENT = -1] = "HTTRANSPARENT", e[e.HTNOWHERE = 0] = "HTNOWHERE", e[e.HTCLIENT = 1] = "HTCLIENT", e[e.HTCAPTION = 2] = "HTCAPTION", e[e.HTSYSMENU = 3] = "HTSYSMENU", e[e.HTGROWBOX = 4] = "HTGROWBOX", e[e.HTSIZE = 4] = "HTSIZE", e[e.HTMENU = 5] = "HTMENU", e[e.HTHSCROLL = 6] = "HTHSCROLL", e[e.HTVSCROLL = 7] = "HTVSCROLL", e[e.HTMINBUTTON = 8] = "HTMINBUTTON", e[e.HTMAXBUTTON = 9] = "HTMAXBUTTON", e[e.HTLEFT = 10] = "HTLEFT", e[e.HTRIGHT = 11] = "HTRIGHT", e[e.HTTOP = 12] = "HTTOP", e[e.HTTOPLEFT = 13] = "HTTOPLEFT", e[e.HTTOPRIGHT = 14] = "HTTOPRIGHT", e[e.HTBOTTOM = 15] = "HTBOTTOM", e[e.HTBOTTOMLEFT = 16] = "HTBOTTOMLEFT", e[e.HTBOTTOMRIGHT = 17] = "HTBOTTOMRIGHT", e[e.HTBORDER = 18] = "HTBORDER", e[e.HTREDUCE = 8] = "HTREDUCE", e[e.HTZOOM = 9] = "HTZOOM", e[e.HTSIZEFIRST = 10] = "HTSIZEFIRST", e[e.HTSIZELAST = 17] = "HTSIZELAST", e[e.HTOBJECT = 19] = "HTOBJECT", e[e.HTCLOSE = 20] = "HTCLOSE", e[e.HTHELP = 21] = "HTHELP"
        }(t.HitTestPositionCode || (t.HitTestPositionCode = {})), function (e) {
            e[e.VK_LBUTTON = 1] = "VK_LBUTTON", e[e.VK_RBUTTON = 2] = "VK_RBUTTON", e[e.VK_MBUTTON = 4] = "VK_MBUTTON", e[e.VK_BACK = 8] = "VK_BACK", e[e.VK_TAB = 9] = "VK_TAB", e[e.VK_RETURN = 13] = "VK_RETURN", e[e.VK_SHIFT = 16] = "VK_SHIFT", e[e.VK_CONTROL = 17] = "VK_CONTROL", e[e.VK_MENU = 18] = "VK_MENU", e[e.VK_ESCAPE = 27] = "VK_ESCAPE", e[e.VK_SPACE = 32] = "VK_SPACE", e[e.VK_PRIOR = 33] = "VK_PRIOR", e[e.VK_NEXT = 34] = "VK_NEXT", e[e.VK_END = 35] = "VK_END", e[e.VK_LEFT = 37] = "VK_LEFT", e[e.VK_UP = 38] = "VK_UP", e[e.VK_RIGHT = 39] = "VK_RIGHT", e[e.VK_DOWN = 40] = "VK_DOWN", e[e.VK_DELETE = 46] = "VK_DELETE", e[e.VK_F1 = 112] = "VK_F1", e[e.VK_F2 = 113] = "VK_F2", e[e.VK_F3 = 114] = "VK_F3", e[e.VK_F4 = 115] = "VK_F4", e[e.VK_F5 = 116] = "VK_F5", e[e.VK_F6 = 117] = "VK_F6", e[e.VK_F7 = 118] = "VK_F7", e[e.VK_F8 = 119] = "VK_F8", e[e.VK_F9 = 120] = "VK_F9", e[e.VK_F10 = 121] = "VK_F10", e[e.VK_F11 = 122] = "VK_F11", e[e.VK_F12 = 123] = "VK_F12", e[e.VK_OEM_1 = 186] = "VK_OEM_1", e[e.VK_OEM_PLUS = 187] = "VK_OEM_PLUS", e[e.VK_OEM_COMMA = 188] = "VK_OEM_COMMA", e[e.VK_OEM_MINUS = 189] = "VK_OEM_MINUS", e[e.VK_OEM_PERIOD = 190] = "VK_OEM_PERIOD", e[e.VK_OEM_2 = 191] = "VK_OEM_2", e[e.VK_OEM_3 = 192] = "VK_OEM_3", e[e.VK_OEM_4 = 219] = "VK_OEM_4", e[e.VK_OEM_5 = 220] = "VK_OEM_5", e[e.VK_OEM_6 = 221] = "VK_OEM_6", e[e.VK_OEM_7 = 222] = "VK_OEM_7", e[e.VK_PROCESSKEY = 229] = "VK_PROCESSKEY"
        }(t.VirtualKeyCode || (t.VirtualKeyCode = {})), function (e) {
            e[e.SW_HIDE = 0] = "SW_HIDE", e[e.SW_SHOWMAXIMIZED = 3] = "SW_SHOWMAXIMIZED", e[e.SW_SHOW = 5] = "SW_SHOW"
        }(t.ShowWindowCmd || (t.ShowWindowCmd = {})), function (e) {
            e[e.MIN_WINDOW_WIDTH = 520] = "MIN_WINDOW_WIDTH", e[e.MIN_WINDOW_HEIGHT = 335] = "MIN_WINDOW_HEIGHT", e[e.MIN_WINDOW_WIDTH_TAB = 910] = "MIN_WINDOW_WIDTH_TAB", e[e.MIN_WINDOW_HEIGHT_TAB = 600] = "MIN_WINDOW_HEIGHT_TAB", e[e.TOP_WINDOW_HEIGHT = 68] = "TOP_WINDOW_HEIGHT", e[e.TOP_WINDOW_HEIGHT_NORMAL = 68] = "TOP_WINDOW_HEIGHT_NORMAL", e[e.PLAYCTRL_HEIGHT = 82] = "PLAYCTRL_HEIGHT", e[e.PLAYLIST_WIDTH = 240] = "PLAYLIST_WIDTH", e[e.FRAME_BORDER = 0] = "FRAME_BORDER", e[e.FRAME_RESIZE_BORDER = 0] = "FRAME_RESIZE_BORDER", e[e.BROWSERWINDOW_SHADOW = 8] = "BROWSERWINDOW_SHADOW", e[e.SIDE_BAR_WIDTH = 25] = "SIDE_BAR_WIDTH", e[e.SIDE_BAR_HEIGHT = 100] = "SIDE_BAR_HEIGHT", e[e.SHOWHIDE_DELAY_TIME = 2e3] = "SHOWHIDE_DELAY_TIME", e[e.TIME_TIP_WINDOW_WIDTH = 111] = "TIME_TIP_WINDOW_WIDTH", e[e.TIME_TIP_WINDOW_HEIGHT = 30] = "TIME_TIP_WINDOW_HEIGHT", e[e.TIME_IMG_TIP_WINDOW_HEIGHT = 75] = "TIME_IMG_TIP_WINDOW_HEIGHT"
        }(t.WindowParams || (t.WindowParams = {})), function (e) {
            e[e.UNKNOWN_MODE = -1] = "UNKNOWN_MODE", e[e.TRANSPARENT_MODE = 0] = "TRANSPARENT_MODE", e[e.NORMAL_MODE = 1] = "NORMAL_MODE", e[e.MINI_MODE = 2] = "MINI_MODE", e[e.EMBED_CHILD_MODE = 3] = "EMBED_CHILD_MODE"
        }(t.XMPShowMode || (t.XMPShowMode = {})), function (e) {
            e[e.NO_TOPMOST_MODE = 0] = "NO_TOPMOST_MODE", e[e.PLAYING_TOPMOST_MODE = 1] = "PLAYING_TOPMOST_MODE", e[e.ALWAYLS_TOPMOST_MODE = 2] = "ALWAYLS_TOPMOST_MODE"
        }(t.WindowTopMode || (t.WindowTopMode = {})), function (e) {
            e[e.PLAY_UNKNOWN = 0] = "PLAY_UNKNOWN", e[e.PLAY_BY_DOWNLOAD = 1] = "PLAY_BY_DOWNLOAD", e[e.PLAY_BY_PAN = 2] = "PLAY_BY_PAN"
        }(t.XmpPlaySoure || (t.XmpPlaySoure = {})), function (e) {
            e.onOpenSucceeded = "OnOpenSucceeded", e.onOpenFailed = "OnOpenFailed", e.onPlayFailed = "OnPlayFailed", e.onPlaying = "OnPlaying", e.onPreOpen = "OnPreOpen", e.onPaused = "OnPaused", e.onPlayCompleted = "OnPlayCompleted", e.onPreStop = "OnPreStop", e.onStop = "OnStop", e.onXmpQuit = "OnXmpQuit", e.onXmpStartFailed = "OnXmpStartFailed"
        }(t.XmpEvent || (t.XmpEvent = {}))
    }, 9: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            return require(e)
        }
    }, 923: function (e, t) {
    }, 932: function (e, t) {
    }, 940: function (e, t) {
    }
});
//# sourceMappingURL=renderer.js.map
/*! Thunder 11 BY LUOCHENZHIMU */
/*! Last updated on 2020/08/22 */
/*! https://www.luochenzhimu.com */