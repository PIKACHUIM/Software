!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
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
    }, n.p = "", n(n.s = 3)
}([function (e, t) {
    e.exports = require("events")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.information = (...e) => {
    }, t.error = (...e) => {
    }, t.warning = (...e) => {
    }, t.critical = (...e) => {
    }, t.verbose = (...e) => {
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(9), i = n(10);
    t.getDefaultPrex = function () {
        return i.basename(process.execPath, ".exe")
    }, t.getSockPath = function (e) {
        const t = r.tmpdir();
        let n = e;
        e || (n = i.basename(process.execPath, ".exe"));
        let o = i.join(t, n + "-xunlei-node-net-ipc-{FD196984-2591-4588-AA6F-5C8AC1266290}.sock");
        return "win32" === process.platform && (o = o.replace(/^\//, ""), o = o.replace(/\//g, "-"), o = "\\\\.\\pipe\\" + o), o
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
    const {client: r} = n(4), i = {name: "ThunderPanPlugin"};
    r.start(i, "thunder"), r.callServerFunction("CreateWebview", "ThunderPanPlugin", {
        nodeintegration: !0,
        id: "home-1EAC214F-7644-4163-9EB8-AF4BAA62D144",
        src: `file:///${__dirname}/index.html#/`
    }).then(() => {
        process.exit(0)
    })
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))((function (i, o) {
            function s(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? i(e.value) : new n((function (t) {
                    t(e.value)
                })).then(s, a)
            }

            c((r = r.apply(e, t || [])).next())
        }))
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(5), s = n(2), a = n(1);

    function c(e) {
        a.information("on object freeer"), global.__xdasIPCClienInstance.notifyFreer(e.remoteId, e.callbackId)
    }

    class l extends i.EventEmitter {
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
                } : null == e && (e = this.parseContext()), !e) {
                    if (!this.client || !this.client.getContext()) throw new Error("no suitable context for client, please specify context with start function");
                    e = {name: this.client.getContext().name, version: this.client.getContext().version}
                }
                if (e.name === s.serverContextName) throw new Error("client context must difference from server");
                if (n && !this.client) throw new Error("connect to other product must start self firstly");
                let i = new o.Client({context: e, socketPrex: t});
                this.singletonMap[t.toLowerCase()] = i, n || (this.client = i), i.on("message", e => {
                    if ("fire_event" === e.action) this.fireServerEvent(i, e.name, [e.__context].concat(e.args)); else if ("client_context_freer" === e.action) {
                        a.information("client on object freer", e);
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
                    a.information("server is ended, and this client emit end", t, n, e), r && r("end", i.getContext(), n, e), this.emit("end", i.getContext(), n, e), delete this.singletonMap[t.toLowerCase()]
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
                if (t) throw new Error("try to coverd function " + t);
                this.apis = Object.assign({}, this.apis, e)
            } while (0)
        }

        checkServerFunction(e) {
            return r(this, void 0, void 0, (function* () {
                return this.internalCheckServerFunction(this.client, e)
            }))
        }

        callServerFunction(e, ...t) {
            return r(this, void 0, void 0, (function* () {
                let n = null, r = yield this.callServerFunctionEx(e, ...t);
                return r && (n = r[0]), n
            }))
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
            return r(this, void 0, void 0, (function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let n = this.singletonMap[e.toLowerCase()];
                    if (!n) throw new Error("Please call the 'start' interface first");
                    return this.internalCheckServerFunction(n, t)
                }
            }))
        }

        crossCallServerFunction(e, t, ...n) {
            return r(this, void 0, void 0, (function* () {
                let r = null, i = yield this.crossCallServerFunctionEx(e, t, ...n);
                return i && (r = i[0]), r
            }))
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
            return r(this, void 0, void 0, (function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let n = this.singletonMap[e.toLowerCase()];
                    if (!n) throw new Error("Please call the 'start' interface first");
                    return this.internalIsRemoteClientExist(n, t)
                }
            }))
        }

        crossCheckRemoteFunction(e, t, n) {
            return r(this, void 0, void 0, (function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let r = this.singletonMap[e.toLowerCase()];
                    if (!r) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'remoteId' was not provided");
                    if (!n) throw new Error("An argument for 'funcName' was not provided");
                    return this.internalCheckRemoteFunction(r, t, n)
                }
            }))
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
                        e ? (a.error("register error", e.message), n(r)) : n(t)
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
                    let s = (t, n) => {
                        t ? (a.error("callServerFunction error", t, e.getContext()), r([null, t])) : r([n, void 0])
                    };
                    this.retCallbackMap[i] = Object.assign({callback: s}, o), this.sendAdapter(e, o)
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
                    let s = (e, t) => {
                        r(!e && t)
                    };
                    this.retCallbackMap[i] = Object.assign({callback: s}, o), this.sendAdapter(e, o)
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
                        e ? (a.information("callRemoteClientFunction", e.message), i([null, e])) : i([t, void 0])
                    };
                    if (r) for (let e = 0; e < r.length; e++) r[e] = this.convertFunction2IdEx(r[e]);
                    let s = this.generateId();
                    const c = {
                        src: this.getFullContextName(this.client),
                        dst: this.getFullContextName(e, t),
                        action: "call_remote_client_api",
                        method: n,
                        args: r,
                        rid: s
                    };
                    this.retCallbackMap[s] = Object.assign({callback: o}, c), this.sendAdapter(e, c)
                } while (0)
            })
        }

        internalAttachServerEvent(e, t, n) {
            let r = e.getContext().productId.toLowerCase();
            this.eventCallbackMaps.hasOwnProperty(r) || (this.eventCallbackMaps[r] = {}), this.eventCallbackMaps[r].hasOwnProperty(t) || (this.eventCallbackMaps[r][t] = {}), s.isObjectEmpty(this.eventCallbackMaps[r][t]) && this.sendAdapter(e, {
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
            let i = void 0, o = !1;
            do {
                const s = this.contextCallbackMap[t];
                if (!s) break;
                let a = void 0, c = void 0;
                try {
                    a = s.apply(null, ...r)
                } catch (e) {
                    c = e.message;
                    break
                }
                if (null == n) break;
                if (i = {s_rid: n, action: "call_client_by_id_callback", success: !1}, void 0 !== c) {
                    i.error = c;
                    break
                }
                if (a && a.then) {
                    a.then(t => {
                        i.data = this.convertFunction2Id(t), i.success = !0, this.sendAdapter(e, i)
                    }).catch(t => {
                        i.error = t instanceof Error ? t.message : t, this.sendAdapter(e, i)
                    }), o = !0;
                    break
                }
                i.success = !0, i.data = this.convertFunction2Id(a)
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
                    n = (...e) => {
                        this.callRemoteContextById(t, r, ...e)
                    }, global.__xdasObjectLiftMonitor && global.__xdasObjectLiftMonitor.setObjectFreer(n, {
                        remoteId: t,
                        callbackId: r
                    }, c);
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
                let s = void 0, a = this.decodeParameter(t.args, t.src);
                try {
                    s = this.apis[i].apply(null, [t.src].concat(a))
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
    }

    let d = void 0;
    global.__xdasIPCClienInstance || (global.__xdasIPCClienInstance = new l), d = global.__xdasIPCClienInstance, t.client = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(6), i = n(0), o = n(1), s = n(7), a = n(2);

    class c extends i.EventEmitter {
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

    t.Client = c
}, function (e, t) {
    e.exports = require("net")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(8), i = n(0);

    class o extends i.EventEmitter {
        constructor() {
            super(), this.decoder = new r.StringDecoder("utf8"), this.jsonBuffer = ""
        }

        encode(e) {
            return JSON.stringify(e) + "\n"
        }

        feed(e) {
            let t = this.jsonBuffer;
            t += this.decoder.write(e);
            let n = 0, r = t.indexOf("\n", n);
            for (; r >= 0;) {
                const e = t.slice(n, r), i = JSON.parse(e);
                this.emit("message", i), n = r + 1, r = t.indexOf("\n", n)
            }
            this.jsonBuffer = t.slice(n)
        }
    }

    t.Parser = o
}, function (e, t) {
    e.exports = require("string_decoder")
}, function (e, t) {
    e.exports = require("os")
}, function (e, t) {
    e.exports = require("path")
}]);