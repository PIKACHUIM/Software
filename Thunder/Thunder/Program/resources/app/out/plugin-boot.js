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
    }, n.p = "", n(n.s = 14)
}([function (e, t) {
    e.exports = require("path")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        return require(e)
    }
}, function (e, t) {
    e.exports = require("events")
}, function (e, t) {
    e.exports = require("os")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0);
    let o = r.normalize(r.join(process.execPath, "../resources")), i = r.normalize(r.join(o, "app"));
    !function (e) {
        e.getResourcesPath = function () {
            return o
        }, e.getAppPath = function () {
            return i
        }
    }(t.PluginGlobalDataNS || (t.PluginGlobalDataNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), o = n(1), i = n(4);
    let s = o.default(r.join(i.PluginGlobalDataNS.getResourcesPath(), "bin/ThunderHelper.node"));
    const a = "xdas_profile_stat";
    !function (e) {
        function t(e) {
            return null === e || void 0 === e
        }

        function n(e = "") {
            let n;
            if ("string" == typeof e) n = e; else if (!t(e) && "object" == typeof e) {
                let r = [];
                for (let n in e) t(e[n]) || r.push(n + "=" + encodeURIComponent(e[n]));
                n = r.join(",")
            }
            return n
        }

        function o(e, t = "", r = "", o = 0, i = 0, a = 0, l = 0, c = "", u = 0) {
            let d = 0;
            do {
                if (void 0 === e) {
                    d = 1;
                    break
                }
                let f = n(c);
                global.b = {
                    key: e,
                    attr1: t,
                    attr2: t,
                    cost1: o,
                    cost2: i,
                    cost3: a,
                    cost4: l,
                    extDataStr: f,
                    cookie: u
                }, d = s.trackEvent(e, t, r, o, i, a, l, f, u)
            } while (0);
            return d
        }

        e.formatBussinessName = function (e) {
            let n = "";
            if ((t(e) || 0 === e.length) && "renderer" === process.type) {
                let e = r.normalize(decodeURIComponent(window.location.href)),
                    t = e.indexOf(i.PluginGlobalDataNS.getResourcesPath());
                t = t > -1 ? t + i.PluginGlobalDataNS.getResourcesPath().length + 1 : t;
                let o = e.length - 1, s = e.indexOf("?"), a = e.indexOf("#");
                o = s > -1 ? Math.min(s - 1, o) : o, o = a > -1 ? Math.min(a - 1, o) : o, t > -1 && o >= t && (n = e.substr(t, o - t + 1))
            }
            return 0 === n.length && t(n = t(e) || 0 === e.length ? process.type : e) && (n = ""), n = n.replace(/\||,|;/g, "_")
        }, e.isNullOrUndefined = t, e.trackEvent = o, e.trackXdasProfileStatEvent = function (e = "", t = "", n = 0, r = 0, i = 0, s = 0, l = "", c = 0) {
            return o(a, e, t, n, r, i, s, l, c)
        }, e.setBugreportCustomInfo = function (e) {
            s.setBugreportCustomInfo(e || "thunder-xdas-renderer")
        }, e.setBugreportSilentMode = function () {
            s.setBugreportShowMode(1)
        }
    }(t.PerformanceMonitorUtilNS || (t.PerformanceMonitorUtilNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0);
    let o, i = console;

    function s(e = 5) {
        let t = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i, n = /at\s+()(.*):(\d*):(\d*)/i,
            o = (new Error).stack.split("\n").slice(e + 1);
        o.shift();
        let i = [];
        return o.forEach((e, o) => {
            let s = t.exec(e) || n.exec(e), a = {};
            s && 5 === s.length && (a.method = s[1], a.path = s[2], a.line = s[3], a.pos = s[4], a.file = r.basename(a.path), i.push(a))
        }), i
    }

    if (o = "renderer" === process.type ? "[Renderer] [async-remote]:" : "browser" === process.type ? "[Browser] [async-remote]:" : `[${process.type}] [async-remote]`, t.traceback = function (e = 5) {
        return s(e).map(e => e.method + "@(" + e.file + ")").join(" <= ")
    }, t.time = function (...e) {
        i.time(...e)
    }, t.timeEnd = function (...e) {
        i.timeEnd(...e)
    }, t.trace = function (...e) {
        let t = s(), n = "";
        t[0] && t[0].method && (n = n), i.trace(o, ...e)
    }, t.info = function (...e) {
        let t = s(), n = "anonymous";
        t[0] && t[0].method && (n = n), i.info(o, "[" + n + "]", e.join(","))
    }, t.warn = function (...e) {
        let t = s(), n = "";
        t[0] && t[0].method && (n = n), i.warn("<WARN>" + o, "[" + n + "]", e.join(","))
    }, t.error = function (...e) {
        let t = s(), n = "";
        t[0] && t[0].method && (n = n), i.error("<ERROR>" + o, "[" + n + "]", e.join(","))
    }, t.log = function (...e) {
        i.log(o, ...e)
    }, !process.env.DEBUG_ASYNC_REMOTE) {
        let e = function () {
        };
        t.traceback = e, t.time = e, t.timeEnd = e, t.trace = e, t.info = e, t.warn = e, t.error = e, t.log = e
    }
}, function (e, t) {
    e.exports = require("electron")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.information = ((...e) => {
    }), t.error = ((...e) => {
    }), t.warning = ((...e) => {
    }), t.critical = ((...e) => {
    }), t.verbose = ((...e) => {
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(3), o = n(0);
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
}, function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e[e.Critical = 1] = "Critical", e[e.Error = 2] = "Error", e[e.Warning = 3] = "Warning", e[e.Information = 4] = "Information", e[e.Verbose = 5] = "Verbose"
    }(r = t.LogLevel || (t.LogLevel = {})), t.outputLoggerConsole = ((o = {})[r.Critical] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.error.apply(console, e)
    }, o[r.Error] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.error.apply(console, e)
    }, o[r.Warning] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.warn.apply(console, e)
    }, o[r.Information] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.info.apply(console, e)
    }, o[r.Verbose] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.log.apply(console, e)
    }, o);
    var o, i = function () {
        function e(e) {
            this.enableLogger = "1" === process.env.TL_ENABLE, this.moduleFilter = process.env.TL_MODULE_FILTER || "all", this.level = process.env.TL_LEVEL ? parseInt(process.env.TL_LEVEL, 10) : r.Information, this.moduleName = "", this.moduleName = e
        }

        return e.getLogger = function (t) {
            return new e(t)
        }, e.hook = function (t, n) {
            t && n && "function" == typeof n && (e.hooks[t] = (e.hooks[t] || []).concat([n]))
        }, e.callHook = function (t, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
            t in e.hooks && e.hooks[t].forEach(function (e) {
                return e.apply(void 0, [n, r].concat(o))
            })
        }, e.prototype.critical = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [r.Critical].concat(e))
        }, e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [r.Error].concat(e))
        }, e.prototype.warning = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [r.Warning].concat(e))
        }, e.prototype.information = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [r.Information].concat(e))
        }, e.prototype.verbose = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [r.Verbose].concat(e))
        }, e.prototype.log = function (t) {
            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            e.callHook.apply(e, ["beforeLog", t, this.moduleName].concat(n)), this.checkShouldLog(t) && (this.writeLog.apply(this, [t, "[" + this.moduleName + "]"].concat(n)), e.callHook.apply(e, ["logged", t, this.moduleName].concat(n)))
        }, e.prototype.writeLog = function (t) {
            for (var n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
            (n = e.outputLogger)[t].apply(n, r)
        }, e.prototype.checkShouldLog = function (e) {
            return this.enableLogger && e <= this.level && this.checkfilter()
        }, e.prototype.checkfilter = function () {
            return "all" === this.moduleFilter || this.moduleName.includes(this.moduleFilter)
        }, e.outputLogger = t.outputLoggerConsole, e.hooks = {}, e
    }();
    t.default = i
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(3), i = n(0), s = n(12);
    let a = null;
    const l = n(1), c = n(4), u = n(5);
    let d = l.default(i.join(c.PluginGlobalDataNS.getResourcesPath(), "bin/ThunderHelper.node")), f = null;
    var h;
    !function (e) {
        let t = void 0, o = new Set, i = null;

        function l() {
            return r(this, void 0, void 0, function* () {
                return new Promise(e => r(this, void 0, void 0, function* () {
                    void 0 === t && (null === i && (i = new Promise(e => {
                        e(t = u.PerformanceMonitorUtilNS.formatBussinessName(""))
                    })), t = yield i), e(t)
                }))
            })
        }

        function d(e) {
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

        function h(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function _(e) {
            return r(this, void 0, void 0, function* () {
                return new Promise(t => r(this, void 0, void 0, function* () {
                    let r = void 0;
                    null === a && (a = yield Promise.resolve().then(() => n(25)));
                    let o = a.createHash("md5");
                    null !== o && (r = o.update(e).digest("hex")), t(r)
                }))
            })
        }

        function p(e, t, n, i) {
            return r(this, void 0, void 0, function* () {
                let r = d(t), s = d(n), a = yield _(s), p = function (e) {
                    let t = new RegExp(h("file:///"), "g"),
                        n = new RegExp(h(c.PluginGlobalDataNS.getResourcesPath() + "\\"), "g"),
                        r = new RegExp(h(encodeURI(c.PluginGlobalDataNS.getResourcesPath().replace(/\\/g, "/") + "/")), "g");
                    return e.replace(t, "").replace(n, "").replace(r, "")
                }(d(i)), m = yield _(p), R = `${e}:${a}:${m}`;
                o.has(R) || (o.add(R), u.PerformanceMonitorUtilNS.trackXdasProfileStatEvent("uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield l()},code=${r},message_hash=${a},message=${encodeURI(s)},stack_hash=${m},stack=${encodeURI(p)}`)), f && f.showExceptionHint(e, r, s, p).catch()
            })
        }

        function m(e) {
            console.error(e);
            let t = e || {};
            p("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
        }

        e.init = function (e) {
            t = e, process.on("uncaughtException", e => {
                console.error(e);
                let t = e || {};
                p("uncaughtException", t.code, t.message, t.stack).catch()
            }), "renderer" !== process.type ? process.on("unhandledRejection", (e, t) => {
                m(e)
            }) : window.addEventListener("unhandledrejection", e => {
                m(e && e.reason || {})
            })
        }, e.getBusinessName = l
    }(h || (h = {})), function (e) {
        e.init = function (e, t) {
            h.init(e), (f = t) && f.init().catch()
        }, e.getBusinessName = function () {
            return r(this, void 0, void 0, function* () {
                return h.getBusinessName()
            })
        }, e.trackColdStartUpEvent = function (e) {
            return r(this, void 0, void 0, function* () {
                let t = d.iSColdStartUp() ? 1 : 0, n = o.release(), r = d.performanceMonitorReporter.getProcessUptime(),
                    i = "";
                f && (i = yield f.getBrowserStartType());
                let s = `key=${e},start_type=${i},cold_start_up=${t},os_version=${n},cost_time=${r}`;
                u.PerformanceMonitorUtilNS.trackXdasProfileStatEvent("cold_start_up", "", 0, 0, 0, 0, s)
            })
        }
    }(t.BasePerformanceMonitorStatNS || (t.BasePerformanceMonitorStatNS = {}))
}, function (e, t) {
    e.exports = require("util")
}, function (e, t, n) {
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
}, function (e, t, n) {
    e.exports = n(15)
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(0), i = n(16), s = n(1);
    global.__rootDir = o.resolve(process.execPath, "../resources/app").replace(/\\/g, "/"), global.__profilesDir = o.resolve(global.__rootDir, "../../../profiles").replace(/\\/g, "/");
    const a = s.default(o.join(global.__rootDir, "../bin/WeakReferences.node"));
    global.__xdasObjectLiftMonitor = a;
    const l = new (n(21).PluginPerformanceMonitorReport), c = n(5);
    let u = !1;

    function d(...e) {
        do {
            if (!u) break;
            i.client.callServerFunction("Log", "plugin-boot", "information", ...e).catch()
        } while (0)
    }

    function f(e, t) {
        let n = !1;
        if (t.main) {
            (n = !!require(t.main)) && i.client.callServerFunction("SetPluginStatus", e, "loaded").catch()
        }
        return n
    }

    let h = void 0, _ = function () {
        let e = "";
        for (let t = 0; t < process.argv.length; t++) {
            let n = process.argv[t];
            if (0 === n.indexOf("--xdas-plugin-config=", 0)) {
                e = n.substr("--xdas-plugin-config=".length);
                break
            }
        }
        return e
    }();
    _ && (h = require(_));
    let p = h && h.name ? h.name : "", m = !0;
    if (h && void 0 !== h.monitor && null !== h.monitor && (m = h.monitor), m && l.initPerformanceMonitor(p, {
        mainLoopHangCheckEnabled: !0,
        cpuUsageCheckEnabled: !0,
        memoryUsageCheckEnabled: !0
    }), function (e) {
        return r(this, void 0, void 0, function* () {
            if (e || (e = void 0), process.versions && process.versions.electron) {
                const {XDASPerformanceMonitorStatLoaderNS: t} = yield Promise.resolve().then(() => n(22));
                t.init(e)
            } else {
                const {PluginPerformanceMonitorStatLoaderNS: t} = yield Promise.resolve().then(() => n(36));
                t.init(e)
            }
        })
    }(p).catch(), h && h.main) {
        c.PerformanceMonitorUtilNS.setBugreportCustomInfo(p), c.PerformanceMonitorUtilNS.setBugreportSilentMode();
        const e = "plugin_stat";
        let t = "success", n = 0;
        global.__xdasPluginConfig = h, i.client.start(void 0, void 0, !1, (e, ...t) => {
            if ("end" === e) {
                let e = t[1], n = t[2];
                e || n || process.versions && process.versions.electron || (d("server exit, plugin is try to exit", h.name), process.exit(0))
            }
        }), function (e) {
            i.client.attachServerEvent("OnPluginReady", (t, ...n) => r(this, void 0, void 0, function* () {
                d("plugin_ready", ...n, e.name);
                do {
                    let t = n[0], r = n[1], o = n[2];
                    if (!t || !r) {
                        d("plugin_ready name or owner is null", e.name);
                        break
                    }
                    if (r.toLowerCase() !== e.name.toLowerCase()) {
                        d("plugin_ready owner is not match", e.name, r);
                        break
                    }
                    if (!o || !o.main) {
                        d("plugin_ready but no plugin info");
                        break
                    }
                    d("plugin_ready load child", t, f(t, o), e.name)
                } while (0)
            })), function (e) {
                return r(this, void 0, void 0, function* () {
                    do {
                        const t = yield i.client.callServerFunction("PopPluginGroups", e.name);
                        if (!t || 0 === [...Object.keys(t)].length) {
                            d("no child plugins cache", e.name);
                            break
                        }
                        for (let n in t) d("load ready child", n, f(n, t[n]), e.name)
                    } while (0)
                })
            }(e).catch()
        }(h);
        let s = o.join(_, `../${h.main}`);
        require(s) || (t = "fail", n = 2), c.PerformanceMonitorUtilNS.trackEvent(e, "plugin_start", "", 0, 0, 0, 0, `name=${h.name},version=${h.version},value=${t},errorcode=${n}`)
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(2), i = n(17), s = n(9), a = n(8);

    function l(e) {
        a.information("on object freeer"), global.__xdasIPCClienInstance.notifyFreer(e.remoteId, e.callbackId)
    }

    let c = void 0;
    global.__xdasIPCClienInstance || (global.__xdasIPCClienInstance = new class extends o.EventEmitter {
        constructor() {
            super(), this.rid = 0, this.apis = {}, this.singletonMap = {}, this.retCallbackMap = {}, this.eventCallbackMaps = {}, this.contextCallbackMap = {}
        }

        start(e, t, n, r) {
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
                let o = new i.Client({context: e, socketPrex: t});
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
                    r && r("error", e), this.emit("socket-error", e, o.getContext(), n, o.isInprocess()), delete this.singletonMap[t.toLowerCase()]
                }), o.isInprocess() ? (r && r("connect"), this.emit("connect", o.getContext(), n, !0)) : o.on("connect", () => {
                    r && r("connect"), this.emit("connect", o.getContext(), n, !1)
                }), o.on("end", () => {
                    let e = o.isInprocess();
                    a.information("server is ended, and this client emit end", t, n, e), r && r("end", o.getContext(), n, e), this.emit("end", o.getContext(), n, e), delete this.singletonMap[t.toLowerCase()]
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
                        e ? (a.error("register error", e.message), n(r)) : n(t)
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
                    let s = (t, n) => {
                        t ? (a.error("callServerFunction error", t, e.getContext()), r([null, t])) : r([n, void 0])
                    };
                    this.retCallbackMap[o] = Object.assign({callback: s}, i), this.sendAdapter(e, i)
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
                    let s = (e, t) => {
                        r(!e && t)
                    };
                    this.retCallbackMap[o] = Object.assign({callback: s}, i), this.sendAdapter(e, i)
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
                        e ? (a.information("callRemoteClientFunction", e.message), o([null, e])) : o([t, void 0])
                    };
                    if (r) for (let e = 0; e < r.length; e++) r[e] = this.convertFunction2IdEx(r[e]);
                    let s = this.generateId();
                    const l = {
                        src: this.getFullContextName(this.client),
                        dst: this.getFullContextName(e, t),
                        action: "call_remote_client_api",
                        method: n,
                        args: r,
                        rid: s
                    };
                    this.retCallbackMap[s] = Object.assign({callback: i}, l), this.sendAdapter(e, l)
                } while (0)
            })
        }

        internalAttachServerEvent(e, t, n) {
            let r = e.getContext().productId.toLowerCase();
            this.eventCallbackMaps.hasOwnProperty(r) || (this.eventCallbackMaps[r] = {}), this.eventCallbackMaps[r].hasOwnProperty(t) || (this.eventCallbackMaps[r][t] = {}), s.isObjectEmpty(this.eventCallbackMaps[r][t]) && this.sendAdapter(e, {
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
                delete this.eventCallbackMaps[r][t][n], s.isObjectEmpty(this.eventCallbackMaps[r][t]) && this.sendAdapter(e, {
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
                const s = this.contextCallbackMap[t];
                if (!s) break;
                let a = void 0, l = void 0;
                try {
                    a = s.apply(null, ...r)
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
                    }), i = !0;
                    break
                }
                o.success = !0, o.data = this.convertFunction2Id(a)
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
                    }), r = !0;
                    break
                }
                n.success = !0, n.data = this.convertFunction2IdEx(s)
            } while (0);
            a.information("callRegisterFunction", n), !r && n && this.sendAdapter(e, n)
        }
    }), c = global.__xdasIPCClienInstance, t.client = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(18), o = n(2), i = n(8), s = n(19), a = n(9);
    t.Client = class extends o.EventEmitter {
        constructor(e) {
            if (e = e || {}, super(), this.inprocess = !1, this.context = void 0, e.context && (this.context = Object.assign({}, e.context), this.context.productId = e.socketPrex), e.socket) this.socket = e.socket, this.bind(); else if (global.__xdasIPCServer && global.__xdasIPCServer.getProductId().toLowerCase() === e.socketPrex.toLowerCase()) this.inprocess = !0; else {
                let t = a.getSockPath(e.socketPrex);
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
            const e = new s.Parser, t = this.socket;
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
}, function (e, t) {
    e.exports = require("net")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(20), o = n(2);
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
}, function (e, t) {
    e.exports = require("string_decoder")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), o = n(3), i = n(4), s = n(1), a = n(5);
    let l = s.default(r.join(i.PluginGlobalDataNS.getResourcesPath(), "bin/ThunderHelper.node")).performanceMonitorReporter;
    t.PluginPerformanceMonitorReport = class {
        initPerformanceMonitor(e, t) {
            l.init("browser" === process.type, process.pid, a.PerformanceMonitorUtilNS.formatBussinessName(e), o.release(), t), l.start()
        }

        uninitPerformanceMonitor() {
            l.stop()
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    n(23);
    const o = n(3), i = n(0), s = n(7), a = n(10), l = n(1), c = n(24), u = n(4), d = n(11), f = n(5), h = n(26);
    let _ = l.default(i.join(u.PluginGlobalDataNS.getResourcesPath(), "bin/ThunderHelper.node"));

    class p {
        constructor() {
            this.browserStartType = void 0, this.getBrowserStartTypeInRendererFuncPromise = null
        }

        init() {
            return r(this, void 0, void 0, function* () {
                this.initStartTypeBrowserEnv(), yield this.initPageLoadTimeStat(), this.initCriticalErrorLogStat()
            })
        }

        initPageLoadTimeStat() {
            return r(this, void 0, void 0, function* () {
                if ("renderer" === process.type) {
                    let e = yield h.asyncRemoteCall.getCurrentWebContents();
                    null !== e && void 0 !== e && e.once("did-finish-load", () => r(this, void 0, void 0, function* () {
                        this.pageLoadTimeStat().catch()
                    }))
                }
            })
        }

        pageLoadTimeStat() {
            return r(this, void 0, void 0, function* () {
                do {
                    if ("renderer" !== process.type) break;
                    if (null === window.performance.timing || void 0 === window.performance.timing) break;
                    let e = _.iSColdStartUp() ? 1 : 0, t = o.release(), n = window.performance.timing,
                        r = n.loadEventEnd - n.navigationStart, i = n.fetchStart - n.navigationStart,
                        s = n.domainLookupEnd - n.domainLookupStart, a = n.connectEnd - n.connectStart,
                        l = n.responseStart - n.requestStart, c = n.responseEnd - n.responseStart,
                        u = n.domComplete - n.domLoading, h = yield this.getBrowserStartType();
                    f.PerformanceMonitorUtilNS.trackXdasProfileStatEvent("page_load_time", "", 0, 0, 0, 0, `start_type=${h},cold_start_up=${e},os_version=${t},load_time=${r},before_fetch_time=${i},domin_lookup_time=${s},connect_time=${a},first_response_time=${l},responseTime=${c},domTime=${u},process=${yield d.BasePerformanceMonitorStatNS.getBusinessName()}`)
                } while (0)
            })
        }

        initStartTypeBrowserEnv() {
            "browser" === process.type && s.ipcMain.on(c.ThunderChannelList.channelRMGetBrowserStartType, e => r(this, void 0, void 0, function* () {
                let t = yield this.getBrowserStartType();
                e.sender.send(c.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
            }))
        }

        initCriticalErrorLogStat() {
            a.default.hook("beforeLog", (e, t, ...n) => {
                e === a.LogLevel.Critical && f.PerformanceMonitorUtilNS.trackXdasProfileStatEvent("critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${n}`)
            })
        }

        getBrowserStartTypeInMain() {
            if (void 0 === this.browserStartType) {
                let e = process.argv.length, t = process.argv;
                for (let n = 0; n < e; n++) {
                    let e = t[n];
                    if (e.startsWith("-StartType:")) {
                        this.browserStartType = e.substring("-StartType:".length);
                        break
                    }
                }
                void 0 === this.browserStartType && (this.browserStartType = "")
            }
            return this.browserStartType
        }

        getBrowserStartTypeInRenderer() {
            return r(this, void 0, void 0, function* () {
                return null === this.getBrowserStartTypeInRendererFuncPromise && (this.getBrowserStartTypeInRendererFuncPromise = new Promise(e => {
                    s.ipcRenderer.send(c.ThunderChannelList.channelRMGetBrowserStartType), s.ipcRenderer.once(c.ThunderChannelList.channelMRGetBrowserStartTypeResult, (t, n) => {
                        this.browserStartType = n, e(n), this.getBrowserStartTypeInRendererFuncPromise = null
                    })
                })), this.getBrowserStartTypeInRendererFuncPromise
            })
        }

        getBrowserStartType() {
            return r(this, void 0, void 0, function* () {
                return new Promise(e => r(this, void 0, void 0, function* () {
                    let t = "";
                    t = void 0 === this.browserStartType ? "browser" === process.type ? this.getBrowserStartTypeInMain() : yield this.getBrowserStartTypeInRenderer() : this.browserStartType, e(t)
                }))
            })
        }

        showExceptionHint(e, t, n, o) {
            return r(this, void 0, void 0, function* () {
                0
            })
        }
    }

    !function (e) {
        e.init = function (e) {
            d.BasePerformanceMonitorStatNS.init(e, new p)
        }
    }(t.XDASPerformanceMonitorStatLoaderNS || (t.XDASPerformanceMonitorStatLoaderNS = {}))
}, function (e, t) {
    e.exports = require("fs")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.channelRMNewTaskReadyForSetTaskData = "RM_NEWTASK_READYRORSETTASKDATA", e.channelRMNewTaskSetTaskData = "RM_NEWTASK_SETTASKDATA", e.channelRMPreNewTaskSetTaskData = "RM_PRENEWTASK_SETTASKDATA", e.channelRMNewTaskCreateNewTask = "RM_NEWTASK_CREATENEWTASK", e.channelRMNewTaskClose = "RM_NEWTASK_CLOSE", e.channelRMPreNewTaskClose = "RM_PRENEWTASK_CLOSE", e.channelRMNewTaskSetBTInfo = "RM_NEWTASK_SETBTINFO", e.channelRMNewTaskDownloadTorrent = "RM_NEW_TASK_DOWNLOAD_TORRENT", e.channelRMNewTaskCreateBtTask = "RM_NEWTASK_CRATEBTTASK", e.channelRMNewTaskCancleMagnet = "RM_NEWTASK_CANCLE_MAGNET", e.channelRMImportTorrent = "RM_NEWTASK_IMPORT_TORRENT", e.channelRMGetConfigValueResolve = "RM_GET_CONFIG_VALUE_RESOLVE", e.channelRMGetConfigValueReject = "RM_GET_CONFIG_VALUE_REJECT", e.channelRMSetConfigValueReject = "RM_SET_CONFIG_VALUE_REJECT", e.channelMRTrayMenuClick = "MR_TRAY_MENU_CLICK", e.channelMRNewTaskMagnetTaskCreated = "MR_NEW_TASK_MAGNET_TASK_CREATED", e.channelMRNewTaskDownloadTorrentResult = "MR_NEW_TASK_DOWNLOAD_TORRENT_RESULT", e.channelMRNewTaskCreateNewTaskResult = "MR_NEWTASK_CREATENEWTASK_RESULT", e.channelMRNewTaskCreateBtTaskResult = "RM_NEWTASK_CRATEBTTASK_RESULT", e.channelMRGetConfigValue = "MR_GET_CONFIG_VALUE", e.channelMRSetConfigValue = "MR_SET_CONFIG_VALUE", e.channelRMCommitPlanTask = "RM_PLANTASK_COMMIT", e.channelRMPerformePlanTask = "RM_PLANTASK_PERFORME", e.channelRMProcessSend = "RM_RENDER_PROCESS_INFO", e.channelRMGetPrivateSpaceInfo = "RM_RENDER_GET_PRIVATE_SPACE_INFO", e.channelMRGetPrivateSpaceInfoResult = "MR_RENDER_GET_PRIVATE_SPACE_INFO_RESULT", e.channelRMFileCopy = "RM_FILE_COPY", e.channelRMFileMove = "RM_FILE_MOVE", e.channelMRFileCopyResult = "MR_FILE_COPY_RESULT", e.channelMRFileMoveResult = "MR_FILE_MOVE_RESULT", e.channelRMGetSutitleByCid = "RM_RENDER_GET_SUBTITLE_BY_CID", e.channelMRGetSutitleByCidResult = "MR_RENDER_GET_SUBTITLE_BY_CID_RESULT", e.channelRMGetSutitleByName = "RM_RENDER_GET_SUBTITLE_BY_NAME", e.channelMRGetSutitleByNameResult = "MR_RENDER_GET_SUBTITLE_BY_NAME_RESULT", e.channelRMDownloadSutitle = "RM_RENDER_DOWNLOAD_SUBTITLE", e.channelMRDownloadSutitleSuc = "MR_RENDER_DOWNLOAD_SUBTITLE_SUCCESS", e.channelMRDownloadSutitleFail = "MR_RENDER_DOWNLOAD_SUBTITLE_FAIL", e.channelRMGetDisplayName = "RM_RENDER_GET_SUBTITLE_DISPLAYNAME", e.channelMRGetDisplayNameResult = "MR_RENDER_GET_SUBTITLE_DISPLAYNAME_RESULT", e.channelMRBringWindowToTop = "MR_RENDER_BRING_WINDOW_TO_TOP", e.channelRMDownloadXmp = "RM_RENDER_DOWNLOAD_XMP", e.channelRMXmpFixBoxCreated = "RM_RENDER_XMPFIXBOX_CREATED", e.channelMRFixXmpSuc = "MR_RENDER_FIX_XMP_SUC", e.channelMRFixXMPFail = "MR_RENDER_FIX_XMP_FAIL", e.channelRMDownloadXmpEx = "RM_RENDER_DOWNLOAD_XMP_EX", e.channelRMSetPosition = "RM_SET_POSITION", e.channelRMSetFoucs = "RM_SET_FOCUS", e.channelRMCreateAddressDropWnd = "RM_CREATE_ADDRESS_DROPWND", e.channelRMRefreshAddressDropWnd = "RM_REFRESH_ADDRESS_DROPWND", e.channelRMSelectAddressDropItem = "RM_SELECT_ADDRESS_DROPITEM", e.channelRMCreateSearchWindow = "RM_CREATE_SEARCH_WINDOW", e.channelRMShowSearchWindow = "RM_SHOW_SEARCH_WINDOW", e.channelRMAddressKeyDown = "RM_ADDRESS_BAR_KEYDOWN", e.channelMRFWAddressKeyDown = "MR_ADDRESS_FW_BAR_KEYDOWN", e.channelMRFWSelectAddressDropItem = "MR_FW_SELECT_ADDRESS_DROPITEM", e.channelRMAddressDropWndKeyDown = "RM_ADDRESS_DROPWND_KEYDOWN", e.channelRMClickMouse = "RM_CLICK_MOUSE", e.channelMRSearchBarFocusChange = "MR_SEARCHBAR_FOCUS_CHANGE", e.channelMRFWAddressDropWndKeyDown = "MR_FW_ADDRESS_DROPWND_KEYDOWN", e.channelMRClickAddressDropItem = "MR_CLICK_ADDRESS_DROPITEM", e.channelMRMainWndMax = "MR_MAINWINDOW_MAX", e.channelMRMainWndMin = "MR_MAINWINDOW_MIN", e.channelMRMainWndRestore = "MR_MAINWINDOW_RESTORE", e.channelRMGetBrowserStartType = "RM_GET_BROWSER_START_TYPE", e.channelMRGetBrowserStartTypeResult = "MR_GET_BROWSER_START_TYPE_RESULT", e.channelRMExecute = "RM_SHELL_EXECUTE", e.channelMRExecuteResult = "MR_SHELL_EXECUTE_RESULT", e.channelMRAdTipsClick = "MR_AD_TIPS_CLICK", e.channelMRNotificationMsg = "MR_NOTIFICATION_MSG", e.channelRMSetProgressBar = "RM_SET_PROGRESS_BAR", e.channelRMRoundWindow = "RM_ROUND_WINDOW", e.channelMRShowOrHideWindow = "MR_SHOW_OR_HIDE_WINDOW", e.channelMRSuspensionWindowShowOrHide = "MR_SUSPENSION_WINDOW_SHOW_OR_HIDE", e.channelRMConfigInitFinished = "RM_CONFIG_INIT_FINISHED", e.channelRMConfigValueChanged = "RM_CONFIG_VALUE_CHANGED", e.channelRMIndividuationBrowserMsg = "RM_INDIVIDUATION_BROWSER_MSG", e.channelMRIndividuationBrowserMsg = "MR_INDIVIDUATION_BROWSER_MSG", e.channelRMSetEnvironmentVariable = "RM_SET_ENVIRONMENT_VARIABLE", e.channelMREmbedPlayerPos = "MR_EMBED_PLAYER_POSITION", e.channelRMUpdateLogEnviroment = "RM_UPDATE_LOG_ENVIRONMENT", e.channelMRUpdateLogEnviroment = "MR_UPDATE_LOG_ENVIRONMENT"
    }(t.ThunderChannelList || (t.ThunderChannelList = {}))
}, function (e, t) {
    e.exports = require("crypto")
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(10).default.getLogger("async-remote-call"), i = n(27), s = n(2), a = n(12);
    t.asyncRemoteCall = new class extends s.EventEmitter {
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
                return a.isNullOrUndefined(t) && (this.mapObjIniting.get(e) ? t = yield new Promise(t => r(this, void 0, void 0, function* () {
                    this.on(e, e => {
                        t(e)
                    })
                })) : (this.mapObjIniting.set(e, !0), t = yield i.electron[e].__resolve(), this.mapObjIniting.set(e, !1), this.emit(e, t), this.listeners(e).forEach(t => {
                    this.removeListener(e, t)
                })), this.mapObj.set(e, t)), t
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6);
    if ("renderer" === process.type) {
        if (r.info("client running"), !global.__xdasAsyncRemoteExports) {
            let e = {};
            global.__xdasAsyncRemoteExports = e;
            let t = n(28);
            e.require = t.require, e.getCurrentWebContents = t.getCurrentWebContents, e.getCurrentWindow = t.getCurrentWindow, e.Interest = t.Interest, e.global = new Proxy({}, {get: (e, n, r) => t.getGlobal(n)}), e.electron = new Proxy({}, {get: (e, n, r) => t.getBuiltin(n)}), Object.defineProperty(e, "currentWindow", {get: () => t.getCurrentWindow()}), Object.defineProperty(e, "currentWebContents", {get: () => t.getCurrentWebContents()}), Object.defineProperty(e, "process", {get: () => t.getGlobal("process")})
        }
    } else if ("browser" === process.type && (r.info("server running"), !global.__xdasAsyncRemoteExports)) {
        let e = {};
        global.__xdasAsyncRemoteExports = e;
        const t = n(33);
        t.startServer(), e.getObjectRegistry = t.getObjectRegistry
    }
    e.exports = global.__xdasAsyncRemoteExports
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(7), o = n(29), i = n(30), s = n(31), a = n(13), l = n(32), c = n(6), u = r.isPromise, d = r.ipcRenderer,
        f = process.atomBinding("v8_util"), h = new i.default, _ = f.createIDWeakMap();

    class p {
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

    function m(e, t = new Set) {
        const n = e => {
            if (t.has(e)) return {type: "value", value: null};
            let r = e;
            if (Array.isArray(e)) {
                t.add(e);
                let n = {type: "array", value: m(e, t)};
                return t.delete(e), n
            }
            if (ArrayBuffer.isView(r)) return {type: "buffer", value: o.Buffer.from(e)};
            if (e instanceof Date) return {type: "date", value: e.getTime()};
            if (null != e && "object" == typeof e) {
                if (u(e)) return {
                    type: "promise", then: n(function (t, n) {
                        e.then(t, n)
                    })
                };
                if (f.getHiddenValue(e, "__remote_id__")) return {
                    type: "remote-object",
                    id: f.getHiddenValue(e, "__remote_id__")
                };
                let r = {
                    type: e instanceof p ? "interest" : "object",
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

    function R(e, t, n) {
        u(e) ? e.then(e => {
            t(e)
        }, e => {
            n(e)
        }) : t(e)
    }

    function g(e, t, n, r = !1) {
        const o = t => {
            if (e.hasOwnProperty(t.name) && !r) return;
            let n, o = {enumerable: t.enumerable, configurable: !0};
            if ("method" === t.type) {
                if (t.value.refId) {
                    if (_.has(t.value.refId) && (n = _.get(t.value.refId)), null == n) throw new Error("member refId pointer to null" + t.value.refId + "name: " + t.name)
                } else n = w(t.value, e, t.name);
                o.get = (() => n), o.set = (e => n = e)
            } else "get" === t.type && (o.get = (() => n), t.writable && (o.set = (e => {
                n = e
            })), n = w(t.value));
            Object.defineProperty(e, t.name, o)
        };
        if (Array.isArray(n)) {
            let e = n.length;
            for (let t = 0; t < e; t++) o(n[t])
        }
    }

    function b(e, t, n) {
        if (n) {
            let t = w(n);
            Object.setPrototypeOf(e, t)
        }
    }

    function E(e, t) {
        f.setHiddenValue(e, "__remote_id__", t)
    }

    function v(e) {
        return f.getHiddenValue(e, "__remote_id__")
    }

    function w(e, t, n) {
        const r = {
            value: () => e.value,
            array: () => e.members.map(e => w(e)),
            buffer: () => o.Buffer.from(e.value),
            promise: () => Promise.resolve({then: w(e.then)}),
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
        return e.type in r ? i = r[e.type]() : e.refId ? _.has(e.refId) ? i = _.get(e.refId) : (c.warn("[metaToValue] refId point to null" + e.refId), i = "function" === e.type ? () => {
        } : {}) : e.id ? _.has(e.id) ? (g(i = _.get(e.id), e.id, e.members, !0), b(i, e.id, e.proto)) : (i = "function" === e.type ? t ? function (e, t, n) {
            if (_.has(n.id)) return _.get(n.id);
            let r = v(e), o = function (...e) {
                throw Error("never should come to a proxied function")
            };
            Object.defineProperty(o, "name", {value: t, writable: !1, enumerable: !0});
            let i = new Proxy(o, {
                apply: (e, n, o) => new Promise((e, i) => {
                    let c = v(n);
                    if (c || (c = v(n.__remoteObj_)), !c) throw Error("is this function was a bound function?");
                    let u = a.default.browser.memberCall, f = l.default(u), h = m(o);
                    d.send(u, f, c, r, t, h), s.default.add(f, t => {
                        try {
                            R(w(t), e, i)
                        } catch (e) {
                            i(e)
                        }
                    })
                }), construct: (e, n, o) => new Promise((e, o) => {
                    let i = a.default.browser.memberConstruct, c = l.default(i);
                    d.send(i, c, r, t, m(n)), s.default.add(c, t => {
                        try {
                            let n = w(t);
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
            return E(n, t), new Proxy(n, {
                apply: (e, n, r) => new Promise((e, o) => {
                    let i = a.default.browser.functionCall, c = l.default(i), u = v(n);
                    d.send(i, c, u, t, m(r)), s.default.add(c, t => {
                        try {
                            R(w(t), e, o)
                        } catch (e) {
                            o(e)
                        }
                    })
                }), construct: (e, n, r) => new Promise((e, r) => {
                    let o = a.default.browser.construct, i = l.default(o);
                    d.send(o, i, t, m(n)), s.default.add(i, t => {
                        try {
                            let n = w(t);
                            e(n)
                        } catch (e) {
                            r(e)
                        }
                    })
                })
            })
        }(e) : {}, f.setRemoteObjectFreer(i, e.id), _.set(e.id, i), f.setHiddenValue(i, "__remote_id__", e.id), function (e) {
            let t = v(e);
            Object.defineProperties(e, {
                __set: {
                    enumerable: !1, writable: !1, value: function (n, r) {
                        if ("function" == typeof r) throw new Error("set a function to a remote member is dangerous");
                        return new Promise((o, i) => {
                            let c = a.default.browser.memberSet, u = l.default(c), f = m([r]);
                            d.send(c, u, t, n, f), s.default.add(u, t => {
                                try {
                                    let s = w(t);
                                    e[n] = r, o(s)
                                } catch (e) {
                                    i(e)
                                }
                            })
                        })
                    }
                }, __get: {
                    enumerable: !1, writable: !1, value: function (n) {
                        return new Promise((r, o) => {
                            let i = a.default.browser.memberGet, c = l.default(i);
                            d.send(i, c, t, n), s.default.add(c, t => {
                                try {
                                    const i = w(t);
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
                            let r = a.default.browser.sync, o = l.default(r);
                            d.send(r, o, t), s.default.add(o, r => {
                                try {
                                    if (r.id !== t) throw Error("SYNC_RETURN: remote id not match");
                                    let o = w(r);
                                    e(o)
                                } catch (e) {
                                    n(e)
                                }
                            })
                        })
                    }
                }
            })
        }(i), g(i, e.id, e.members), b(i, e.id, e.proto), Object.defineProperty(i.constructor, "name", {value: e.name}), e.extendedMemberNames && e.extendedMemberNames.forEach((e, t) => {
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

    t.Interest = p;

    class y {
        constructor(...e) {
            if (this.__resolved_ = !1, this.__promise_ = null, this.__remoteObj_ = null, this.__what_ = "", this.__name_ = "", "string" === typeof arguments[0]) {
                let e = arguments[0], t = arguments[1];
                this.__what_ = e, this.__name_ = t || e, this.__resolved_ = !1, this.__remoteObj_ = null, this.__promise_ = new Promise((n, r) => {
                    let o = this.getChannel(e), i = l.default(o);
                    d.send(o, i, t), s.default.add(i, e => {
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
        h.apply(t, w(n))
    }), d.on(a.default.renderer.syncReturn, C), d.on("ELECTRON_RENDERER_RELEASE_CALLBACK", (e, t) => {
        c.info("[RELEASE_CALLBACK]: callbackId:", t), h.remove(t)
    }), process.on("exit", () => {
        d.send(a.default.browser.contextRelease)
    });
    const M = ["__resolve", "__isResolved"], S = ["__promise_", "__resolved_", "__remoteObj_", "__name_", "__what_"],
        O = e => {
            if (!e.__isResolved()) throw Error("Can not access the property of a remote module which has not Resolved yet.")
        };

    function N(e) {
        const t = function () {
        };
        Object.defineProperty(t, "name", {value: e.__name_}), Object.defineProperty(t, "what", {
            enumerable: !1,
            value: e.__what_
        });
        let n = new Proxy(t, {
            getPrototypeOf: t => (O(e), Reflect.getPrototypeOf(e.__remoteObj_)),
            setPrototypeOf: (e, t) => {
                throw new Error("changing prototype of remote object is forbidden")
            },
            isExtensible: t => (O(e), Reflect.isExtensible(e.__remoteObj_)),
            preventExtensions: t => (O(e), Reflect.preventExtensions(e)),
            getOwnPropertyDescriptor: (t, n) => (O(e), Reflect.getOwnPropertyDescriptor(e.__remoteObj_, n)),
            has: (t, n) => (O(e), Reflect.has(e.__remoteObj_, n)),
            deleteProperty: (t, n) => (O(t), Reflect.deleteProperty(e.__remoteObj_, n)),
            defineProperty: (t, n, r) => (O(e), Reflect.defineProperty(e.__remoteObj_, n, r)),
            get: (t, n, r) => {
                if ("string" == typeof n) {
                    if (String.prototype.includes.call(S, n)) {
                        return e[n]
                    }
                    if (String.prototype.includes.call(M, n)) {
                        return e[n]
                    }
                }
                return O(e), Reflect.get(e.__remoteObj_, n)
            },
            set: (t, n, r, o) => (O(e), Reflect.set(e.__remoteObj_, n, r, o)),
            ownKeys: t => (O(e), Reflect.ownKeys(e.__remoteObj_)),
            apply: (t, n, r) => {
                O(e), Reflect.apply(e.__remoteObj_, n, r)
            },
            construct: (t, n, r) => {
                if (O(e), "function" != typeof e.__remoteObj_) throw Error("operator new ONLY used for function");
                return new Promise((t, r) => {
                    let o = a.default.browser.construct, i = l.default(o),
                        c = f.getHiddenValue(e.__remoteObj_, "__remote_id__");
                    d.send(o, i, c, m(n)), s.default.add(i, e => {
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
                let t = v(e);
                t && E(n, t)
            }
        }), n
    }

    t.remoteRequire = function (e) {
        return N(new y("module", e))
    }, t.getBuiltin = function (e) {
        return N(new y("builtin", e))
    }, t.getGlobal = function (e) {
        return N(new y("global", e))
    }, t.getCurrentWindow = function () {
        return N(new y("current_window"))
    }, t.getCurrentWebContents = function () {
        return N(new y("current_web_contents"))
    }
}, function (e, t) {
    e.exports = require("buffer")
}, function (e, t, n) {
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
            let i, s = n.exec(o);
            for (; null !== s;) {
                const e = s[1];
                if (!e.includes("native") && !e.includes("electron.asar")) {
                    i = /([^/^)]*)\)?$/gi.exec(e)[1];
                    break
                }
                s = n.exec(o)
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
}, function (e, t, n) {
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
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    let r = 0;
    t.default = function (e) {
        return e ? e.concat(".").concat(String(++r)) : String(++r)
    }
}, function (e, t, n) {
    "use strict";
    const r = n(7), o = n(34), i = n(13), s = n(35), a = n(6), l = r.isPromise, c = r.ipcMain,
        u = process.atomBinding("v8_util");
    let d = u.createDoubleIDWeakMap();
    const f = new o.default;

    function h(e, t, n, r, o, i) {
        let s, l = !1, c = null, u = !1;
        do {
            try {
                s = t[r]
            } catch (e) {
                l = !0
            }
            if (l) try {
                s = n.value[r], l = !1, n.meta.extendedMemberNames.push(r), u = !0
            } catch (e) {
                a.error(`property ${r} untouchable, even try root[name]`)
            }
            if (l) break;
            let o = Object.getOwnPropertyDescriptor(t, r);
            if (void 0 === o) {
                a.warn(`descriptor of property ${r} is undefined`);
                break
            }
            c = {
                name: r,
                enumerable: o.enumerable,
                writable: !1,
                type: "get"
            }, void 0 === o.get && "function" == typeof s ? c.type = "method" : ((o.set || o.writable) && (c.writable = !0), c.type = "get"), u ? (c.configurable = !0, c.value = m(e, s, i, !1, null)) : c.value = m(e, s, i, !1, n)
        } while (0);
        return c
    }

    function _(e, t, n, r = null) {
        let o = Object.getOwnPropertyNames(t);
        "function" == typeof t && (o = o.filter(function (e) {
            return !String.prototype.includes.call(s.propertiesOfFunction, e)
        }));
        let i = [];
        do {
            if (0 === o.length) break;
            let s = o.length;
            for (let a = 0; a < s; a++) {
                let s = h(e, t, n, o[a], 0, r);
                s && i.push(s)
            }
        } while (0);
        return i
    }

    function p(e, t, n, r = null) {
        let o = null, i = Object.getPrototypeOf(t);
        return o = null === i || i === Object.prototype || i === Function.prototype ? null : m(e, i, r, !1, n)
    }

    function m(e, t, n = null, r = !1, o = null) {
        n = null === n ? {} : n;
        const i = {type: typeof t};
        "object" === i.type && (i.type = function (e, t) {
            let n = typeof e;
            if ("object" !== n) throw new Error("incorrect arg at index 0. non-object");
            return null === e ? n = "value" : ArrayBuffer.isView(e) ? n = "buffer" : Array.isArray(e) ? n = "array" : e instanceof Error ? n = "error" : e instanceof Date ? n = "date" : l(e) ? n = "promise" : Object.prototype.hasOwnProperty.call(e, "callee") && null != e.length ? n = "array" : t && u.getHiddenValue(e, "simple") && (n = "value"), n
        }(t, r));
        do {
            if ("object" === i.type || "function" === i.type) {
                let r = f.getIdOfObject(t);
                if (r && n[r]) {
                    i.refId = r, f.add(e, t);
                    break
                }
            }
            "array" === i.type ? i.members = t.map(t => m(e, t, n)) : "object" === i.type || "function" === i.type ? (null == o && (i.extendedMemberNames = [], o = {
                value: t,
                meta: i
            }), i.name = t.constructor ? t.constructor.name : "", i.id = f.add(e, t), n[i.id] = !0, i.members = _(e, t, o, n), i.proto = p(e, t, o, n)) : "buffer" === i.type ? i.value = Buffer.from(t) : "promise" === i.type ? (t.then(function () {
            }, function () {
            }), i.then = m(e, function (e, n) {
                t.then(e, n)
            })) : "error" === i.type ? (i.members = R(t), i.members.push({
                name: "name",
                value: t.name
            })) : "date" === i.type ? i.value = t.getTime() : (i.type = "value", i.value = t)
        } while (0);
        return i
    }

    function R(e) {
        return Object.getOwnPropertyNames(e).map(t => ({name: t, value: e[t]}))
    }

    function g(e, t) {
        const n = function (t) {
            let o, s, l = 0, c = 0;
            switch (t.type) {
                case"value":
                    return t.value;
                case"remote-object":
                    return f.get(t.id);
                case"array":
                    return g(e, t.value);
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
                            a.warn(o)
                        }(t, l, s) : e.send(i.default.renderer.callback, t.id, m(e, l))
                    };
                    return Object.defineProperty(s, "length", {value: t.length}), u.setRemoteCallbackFreer(s, t.id, e), d.set(o, s), s
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

    function E(e) {
        return {type: "exception", message: e.message, stack: e.stack || e}
    }

    function v(e) {
        const t = new Error(e);
        throw Object.defineProperty(t, "code", {value: "EBADRPC"}), Object.defineProperty(t, "errno", {value: -72}), t
    }

    var w;
    !function (e) {
        const t = (e, t, ...n) => {
            const r = e.sender;
            r.isDestroyed() ? a.warn("webcontext is destroyed, id=", r.id) : r.send(t, ...n)
        };
        e.startServer = function () {
            c.on(i.default.browser.require, (e, n, r) => {
                a.info(`[REQUIRE] module=${r} `);
                let o = process.mainModule.require(r), s = m(e.sender, o);
                t(e, i.default.renderer.requireReturn, n, s)
            }), c.on(i.default.browser.builtIn, (e, n, o) => {
                a.info(`[BUILTIN]: property=${o} `);
                let s = r[o], l = m(e.sender, s);
                a.info(`[BUILTIN]: returns remoteId:${l.id}, type: ${typeof s}`), t(e, i.default.renderer.getBuiltInReturn, n, l)
            }), c.on(i.default.browser.global, (e, n, r) => {
                a.info(`[GLOBAL]: proerty:${r} `);
                let o, s = global[r];
                o = m(e.sender, s), a.info(`[GLOBAL]: returns remoteid=${o.id}, obj=` + typeof s), t(e, i.default.renderer.getGlobalReturn, n, o)
            }), c.on(i.default.browser.currentWindow, (e, n, r) => {
                a.info(`[CURRENT_WINDOW]: property=${r} `);
                let o = e.sender.getOwnerBrowserWindow.call(e.sender), s = m(e.sender, o);
                a.info(`[CURRENT_WINDOW]: returns remoteid=${s.id}, obj=` + o), t(e, i.default.renderer.currentWindowReturn, n, s)
            }), c.on(i.default.browser.currentWebContents, (e, n, r) => {
                t(e, i.default.renderer.currentWebContentsReturn, n, m(e.sender, e.sender))
            });
            const e = (e, t) => {
                const n = (t, n) => {
                    t && Object.getOwnPropertyNames(t).forEach(r => {
                        n ? e.once(r, t[r]) : e.on(r, t[r])
                    })
                };
                t.on && n(t.on, !1), t.once && n(t.once, !0)
            };
            c.on(i.default.browser.construct, (n, r, o, s) => {
                let l, c = null;
                try {
                    a.info(`[CONSTRUCTOR]: remoteId=${o} `);
                    let u = s.length > 0 ? s[s.length - 1] : null;
                    s = g(n.sender, s);
                    let d = f.get(o);
                    null == d && v(`Cannot call constructor on missing remote object ${o}`), u && "interest" === u.type && (c = s.pop());
                    let h = new (Function.prototype.bind.apply(d, [null].concat(s)));
                    h && c && e(h, c), l = m(n.sender, h, null, !1), a.info(`[CONSTRUCTOR]: returns remoteId =${l.id} name=${d.name} `)
                } catch (e) {
                    l = E(e)
                } finally {
                    t(n, i.default.renderer.constructReturn, r, l)
                }
            }), c.on(i.default.browser.functionCall, function (e, n, r, o, s) {
                let l;
                try {
                    a.info(`[FUNCTION_CALL]: remoteId=${o}`), s = g(e.sender, s);
                    let c = f.get(o);
                    if (null == c) a.error(`Cannot call function on missing remote object ${o}`), l = m(e.sender, void 0); else {
                        let t = r ? f.get(r) : global;
                        if (t) {
                            let n = b(0, c, t, s);
                            l = m(e.sender, n)
                        } else a.error(`Cannot call function(${o}) on missing context(${r})`), l = m(e.sender, void 0)
                    }
                    a.info(`[FUNCTION_CALL]: name=${c.name}`)
                } catch (e) {
                    l = E(e)
                } finally {
                    t(e, i.default.renderer.functionCallReturn, n, l)
                }
            }), c.on(i.default.browser.memberCall, function (e, n, r, o, s, l) {
                let c;
                a.info(`[MEMBER_CALL]: thisArg=${r}, remoteId=${o}, method=${s}, args count=${l.length}`);
                try {
                    l = g(e.sender, l);
                    let u = f.get(o);
                    null == u && v(`Cannot call function '${s}' on missing remote object ${o}`);
                    let d = r ? f.get(r) : u;
                    if (d) {
                        let t = b(0, u[s], d, l);
                        c = m(e.sender, t), a.info("[MEMBER_CALL]: return=" + t)
                    } else c = m(e.sender, void 0)
                } catch (e) {
                    c = E(e)
                } finally {
                    t(e, i.default.renderer.memberCallReturn, n, c)
                }
            }), c.on(i.default.browser.memberGet, function (e, n, r, o) {
                let s;
                try {
                    a.info(`[MEMBER_GET]: remoteId=${r}, property=`, o);
                    let l = f.get(r);
                    null == l && v(`Cannot get property '${Object.toString.call(o)}' on missing remote object ${r}`);
                    let c = l[o];
                    s = m(e.sender, c)
                } catch (e) {
                    s = E(e)
                } finally {
                    t(e, i.default.renderer.memberGetReturn, n, s)
                }
            }), c.on(i.default.browser.memberSet, function (e, n, r, o, s) {
                try {
                    a.info(`[MEMBER_SET]: remoteId=${r}, property=` + o), s = g(e.sender, s);
                    let l = f.get(r);
                    null == l && v(`Cannot set property '${Object.toString.call(o)}' on missing remote object ${r}`), l[o] = s[0], t(e, i.default.renderer.memberSetReturn, n, {
                        type: "value",
                        value: !0
                    })
                } catch (r) {
                    t(e, i.default.renderer.memberSetReturn, n, E(r))
                }
            }), c.on(i.default.browser.memberConstruct, function (n, r, o, s, l) {
                let c, u = null;
                try {
                    a.info(`[MEMBER_CONSTRUCTOR]: regId=${o}, method=${s}`);
                    let d = l.length > 0 ? l[l.length - 1] : null;
                    l = g(n.sender, l);
                    let h = f.get(o);
                    null == h && v(`Cannot call constructor '${s}' on missing remote object ${o}`), d && "interest" === d.type && (u = l.pop());
                    let _ = h[s], p = new (Function.prototype.bind.apply(_, [null].concat(l)));
                    p && u && e(p, u), c = m(n.sender, p)
                } catch (e) {
                    c = E(e)
                } finally {
                    t(n, i.default.renderer.memberConstructReturn, r, c)
                }
            }), c.on(i.default.browser.sync, function (e, n, r) {
                let o = f.get(r);
                t(e, i.default.renderer.syncReturn, n, m(e.sender, o))
            }), c.on("ELECTRON_BROWSER_DEREFERENCE", function (e, t) {
                let n = f.get(t);
                if (n) {
                    let r = n.name;
                    r || (r = n.constructor ? n.constructor.name : ""), f.remove(e.sender.id, t)
                } else t < 0 && a.warn("remote id reference to nothing:", t)
            }), c.on(i.default.browser.contextRelease, e => {
                f.clear(e.sender.id)
            })
        }, e.getObjectRegistry = function () {
            return f
        }
    }(w || (w = {})), e.exports = w
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(6), o = -1 * Math.pow(2, 31), i = process.atomBinding("v8_util");
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
            const n = e.getProcessId(), o = (i, s) => {
                s === n && (r.info("render-view-deleted: processid=" + n), (() => {
                    r.info("before clear. objectsRegistry capacity=" + this.storage.size, "owners size:" + this.owners.size)
                })(), e.removeListener("render-view-deleted", o), this.clear(t))
            };
            e.on("render-view-deleted", o)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r;
    !function (e) {
        e.propertiesOfFunction = ["length", "name", "arguments", "caller", "prototype", "apply", "bind", "call", "toString"]
    }(r || (r = {})), e.exports = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(11);
    !function (e) {
        e.init = function (e) {
            r.BasePerformanceMonitorStatNS.init(e, null)
        }
    }(t.PluginPerformanceMonitorStatLoaderNS || (t.PluginPerformanceMonitorStatLoaderNS = {}))
}]);
//# sourceMappingURL=plugin-boot.js.map