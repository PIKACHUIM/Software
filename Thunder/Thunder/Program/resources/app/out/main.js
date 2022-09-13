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
    }, n.p = "", n(n.s = 48)
}([function (e, t) {
    e.exports = require("electron")
}, function (e, t) {
    e.exports = require("path")
}, function (e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e[e.Critical = 1] = "Critical", e[e.Error = 2] = "Error", e[e.Warning = 3] = "Warning", e[e.Information = 4] = "Information", e[e.Verbose = 5] = "Verbose"
    }(i = t.LogLevel || (t.LogLevel = {})), t.outputLoggerConsole = ((o = {})[i.Critical] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.error.apply(console, e)
    }, o[i.Error] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.error.apply(console, e)
    }, o[i.Warning] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.warn.apply(console, e)
    }, o[i.Information] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.info.apply(console, e)
    }, o[i.Verbose] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.log.apply(console, e)
    }, o);
    var o, r = function () {
        function e(e) {
            this.enableLogger = "1" === process.env.TL_ENABLE, this.moduleFilter = process.env.TL_MODULE_FILTER || "all", this.level = process.env.TL_LEVEL ? parseInt(process.env.TL_LEVEL, 10) : i.Information, this.moduleName = "", this.moduleName = e
        }

        return e.getLogger = function (t) {
            return new e(t)
        }, e.hook = function (t, n) {
            t && n && "function" == typeof n && (e.hooks[t] = (e.hooks[t] || []).concat([n]))
        }, e.callHook = function (t, n, i) {
            for (var o = [], r = 3; r < arguments.length; r++) o[r - 3] = arguments[r];
            t in e.hooks && e.hooks[t].forEach(function (e) {
                return e.apply(void 0, [n, i].concat(o))
            })
        }, e.prototype.critical = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [i.Critical].concat(e))
        }, e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [i.Error].concat(e))
        }, e.prototype.warning = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [i.Warning].concat(e))
        }, e.prototype.information = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [i.Information].concat(e))
        }, e.prototype.verbose = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [i.Verbose].concat(e))
        }, e.prototype.log = function (t) {
            for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            e.callHook.apply(e, ["beforeLog", t, this.moduleName].concat(n)), this.checkShouldLog(t) && (this.writeLog.apply(this, [t, "[" + this.moduleName + "]"].concat(n)), e.callHook.apply(e, ["logged", t, this.moduleName].concat(n)))
        }, e.prototype.writeLog = function (t) {
            for (var n, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
            (n = e.outputLogger)[t].apply(n, i)
        }, e.prototype.checkShouldLog = function (e) {
            return this.enableLogger && e <= this.level && this.checkfilter()
        }, e.prototype.checkfilter = function () {
            return "all" === this.moduleFilter || this.moduleName.includes(this.moduleFilter)
        }, e.outputLogger = t.outputLoggerConsole, e.hooks = {}, e
    }();
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        return require(e)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(36), o = n(90), r = Object.prototype.toString;

    function s(e) {
        return "[object Array]" === r.call(e)
    }

    function a(e) {
        return null !== e && "object" == typeof e
    }

    function l(e) {
        return "[object Function]" === r.call(e)
    }

    function d(e, t) {
        if (null !== e && void 0 !== e) if ("object" != typeof e && (e = [e]), s(e)) for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }

    e.exports = {
        isArray: s, isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === r.call(e)
        }, isBuffer: o, isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }, isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }, isString: function (e) {
            return "string" == typeof e
        }, isNumber: function (e) {
            return "number" == typeof e
        }, isObject: a, isUndefined: function (e) {
            return void 0 === e
        }, isDate: function (e) {
            return "[object Date]" === r.call(e)
        }, isFile: function (e) {
            return "[object File]" === r.call(e)
        }, isBlob: function (e) {
            return "[object Blob]" === r.call(e)
        }, isFunction: l, isStream: function (e) {
            return a(e) && l(e.pipe)
        }, isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }, isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        }, forEach: d, merge: function e() {
            var t = {};

            function n(n, i) {
                "object" == typeof t[i] && "object" == typeof n ? t[i] = e(t[i], n) : t[i] = n
            }

            for (var i = 0, o = arguments.length; i < o; i++) d(arguments[i], n);
            return t
        }, extend: function (e, t, n) {
            return d(t, function (t, o) {
                e[o] = n && "function" == typeof t ? i(t, n) : t
            }), e
        }, trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (e, t) {
    e.exports = require("util")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(1), o = n(0), r = n(8), s = n(15), a = n(2), l = n(3), d = n(5),
        c = l.default(i.join(__rootDir, "../bin/ThunderHelper.node")), u = a.default.getLogger("RoundRectWindow");
    let h = new Map;

    function f(e) {
        let t = 1;
        return t = c.getDPIAwareSupport() ? c.getMonitorDPIFactor(e) : c.getSysDPIFactor()
    }

    class p {
        constructor() {
            this.win = null, this.winId = void 0, this.shadowHandle = 0, this.winHandle = 0, this.area = 16, this.closeHandler = null, this.resizeHandler = null, this.moveHandler = null, this.focusHandler = null, this.blurHandler = null, this.showHandler = null, this.hideHandler = null
        }

        getParentWindowRect() {
            let e = this.area / 2, t = c.getWindowRect(this.winHandle), n = f(this.winHandle),
                i = {x: 0, y: 0, width: 0, height: 0};
            return i.x = Math.floor(t.x - e * n), i.y = Math.floor(t.y - e * n), i.width = Math.floor(t.width + 2 * e * n), i.height = Math.floor(t.height + 2 * e * n), i
        }

        updateShadowWindowPos(e) {
            let t = this.getParentWindowRect(), n = c.getWindowRect(this.shadowHandle);
            if (n.x !== t.x || n.y !== t.y || n.width !== t.width || n.height !== t.height ? (c.setWindowPos(this.shadowHandle, this.winHandle, t.x, t.y, t.width, t.height, s.Uflag.SWP_NOACTIVATE), e = !0) : c.setWindowPos(this.shadowHandle, this.winHandle, 0, 0, 0, 0, s.Uflag.SWP_NOSIZE | s.Uflag.SWP_NOMOVE | s.Uflag.SWP_NOACTIVATE | s.Uflag.SWP_NOSENDCHANGING | s.Uflag.SWP_NOOWNERZORDER | s.Uflag.SWP_NOREDRAW), e) {
                let e = f(this.winHandle);
                u.information("drawShadowWindow dpi", e), c.drawShadowWindow(this.winHandle, 100 * e)
            }
        }

        onWindowClose() {
            u.information("onWindowClose"), w(this.winId), this.winId = void 0
        }

        onWindowResize() {
            this.updateShadowWindowPos(!0)
        }

        onWindowMove() {
            this.updateShadowWindowPos()
        }

        onWindowFocus() {
            this.updateShadowWindowPos()
        }

        onWindowBlur() {
            this.updateShadowWindowPos()
        }

        onWindowShow() {
            this.updateShadowWindowPos(), c.showWindow(this.shadowHandle, s.CmdShow.SW_SHOWNOACTIVATE)
        }

        onWindowHide() {
            c.showWindow(this.shadowHandle, s.CmdShow.SW_HIDE)
        }

        onWindowPosChanged() {
            if (this.shadowHandle && !this.win.isDestroyed() && this.win.isVisible()) {
                c.getNextWindow(this.shadowHandle, s.GWCmd.GW_HWNDPREV) !== this.winHandle && this.updateShadowWindowPos()
            }
        }

        attach(e, t, n, i, o, r, a) {
            do {
                this.win = e, this.winId = e.id;
                let l = e.getNativeWindowHandle();
                this.winHandle = l.readUIntLE(0, 4);
                let d = 0;
                t && (d = t.getNativeWindowHandle().readUIntLE(0, 4));
                let u = f(this.winHandle);
                if (this.shadowHandle = c.attachShadowWindow(this.winHandle, o, d, n, i, 100 * u, r, a), c.setShadowWindowResizable(this.winHandle, e.isResizable()), this.closeHandler = this.onWindowClose.bind(this), e.on("closed", this.closeHandler), n) break;
                this.updateShadowWindowPos(!0), e.isVisible() || c.showWindow(this.shadowHandle, s.CmdShow.SW_HIDE), this.resizeHandler = this.onWindowResize.bind(this), this.moveHandler = this.onWindowMove.bind(this), this.focusHandler = this.onWindowFocus.bind(this), this.blurHandler = this.onWindowBlur.bind(this), this.showHandler = this.onWindowShow.bind(this), this.hideHandler = this.onWindowHide.bind(this), e.on("resize", this.resizeHandler), e.on("move", this.moveHandler), e.on("focus", this.focusHandler), e.on("blur", this.blurHandler), e.on("show", this.showHandler), e.on("hide", this.hideHandler), e.hookWindowMessage(s.WindowMessage.WM_WINDOWPOSCHANGED, this.onWindowPosChanged.bind(this))
            } while (0);
            return this.shadowHandle
        }

        detach() {
            u.information("detach win.id:", this.winId), this.win.isDestroyed() || (this.closeHandler && (this.win.removeListener("close", this.closeHandler), this.closeHandler = null), this.resizeHandler && (this.win.removeListener("resize", this.resizeHandler), this.resizeHandler = null), this.moveHandler && (this.win.removeListener("move", this.moveHandler), this.moveHandler = null), this.focusHandler && (this.win.removeListener("focus", this.focusHandler), this.focusHandler = null), this.blurHandler && (this.win.removeListener("blur", this.blurHandler), this.blurHandler = null), this.showHandler && (this.win.removeListener("show", this.showHandler), this.showHandler = null), this.hideHandler && (this.win.removeListener("hide", this.hideHandler), this.hideHandler = null), this.win.unhookWindowMessage(s.WindowMessage.WM_WINDOWPOSCHANGED)), c.destroyShadowWindow(this.winHandle)
        }
    }

    function m(e, t, n = !0, i = !0, o = 16) {
        setTimeout(() => {
            let r = i ? `${__rootDir}/static/shadow-corner.png` : `${__rootDir}/static/shadow.png`;
            !function (e, t, n = !0, i = !0, o = 16, r = "", s = null) {
                let a = 0;
                do {
                    if (!e || e.isDestroyed()) {
                        u.warning("win is already destroyed! win id:", e.id);
                        break
                    }
                    let l = h.get(e.id);
                    if (l) {
                        u.warning("shadowWindow is already attached! win id:", e.id);
                        break
                    }
                    l = new p, h.set(e.id, l), a = l.attach(e, t, n, i, o, r, s)
                } while (0)
            }(e, t, n, i, o, r, {left: 17, top: 17, right: 17, bottom: 17})
        }, 50)
    }

    function w(e) {
        do {
            if (d.isUndefined(e)) break;
            let t = h.get(e);
            if (!t) {
                u.warning("shadowWindow is not attached! win id:", e);
                break
            }
            t.detach(), h.delete(e)
        } while (0)
    }

    t.roundRectWindow = m, t.detachRoundRectWindow = w, t.detachAllRoundRectWindow = function () {
        h.forEach(e => {
            e.detach()
        }), h.clear()
    };
    let g = !1;
    t.registerRoundRectClientFunction = function (e) {
        do {
            if (g) break;
            g = !0;
            let t = {
                RoundRectWindow: (t, ...n) => {
                    do {
                        let t = n[0];
                        if (void 0 === t || null === t) break;
                        let i = o.BrowserWindow.fromId(t);
                        if (!i) break;
                        let r = n[1];
                        u.information("RoundRectWindow ", r);
                        let s = e;
                        if (void 0 !== r && null !== r) s = o.BrowserWindow.fromId(r); else {
                            let e = i.getParentWindow();
                            e && (s = e)
                        }
                        m(i, s)
                    } while (0)
                }
            };
            r.client.registerFunctions(t)
        } while (0)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.channelRMNewTaskReadyForSetTaskData = "RM_NEWTASK_READYRORSETTASKDATA", e.channelRMNewTaskSetTaskData = "RM_NEWTASK_SETTASKDATA", e.channelRMPreNewTaskSetTaskData = "RM_PRENEWTASK_SETTASKDATA", e.channelRMNewTaskCreateNewTask = "RM_NEWTASK_CREATENEWTASK", e.channelRMNewTaskClose = "RM_NEWTASK_CLOSE", e.channelRMPreNewTaskClose = "RM_PRENEWTASK_CLOSE", e.channelRMNewTaskSetBTInfo = "RM_NEWTASK_SETBTINFO", e.channelRMNewTaskDownloadTorrent = "RM_NEW_TASK_DOWNLOAD_TORRENT", e.channelRMNewTaskCreateBtTask = "RM_NEWTASK_CRATEBTTASK", e.channelRMNewTaskCancleMagnet = "RM_NEWTASK_CANCLE_MAGNET", e.channelRMImportTorrent = "RM_NEWTASK_IMPORT_TORRENT", e.channelRMGetConfigValueResolve = "RM_GET_CONFIG_VALUE_RESOLVE", e.channelRMGetConfigValueReject = "RM_GET_CONFIG_VALUE_REJECT", e.channelRMSetConfigValueReject = "RM_SET_CONFIG_VALUE_REJECT", e.channelMRTrayMenuClick = "MR_TRAY_MENU_CLICK", e.channelMRNewTaskMagnetTaskCreated = "MR_NEW_TASK_MAGNET_TASK_CREATED", e.channelMRNewTaskDownloadTorrentResult = "MR_NEW_TASK_DOWNLOAD_TORRENT_RESULT", e.channelMRNewTaskCreateNewTaskResult = "MR_NEWTASK_CREATENEWTASK_RESULT", e.channelMRNewTaskCreateBtTaskResult = "RM_NEWTASK_CRATEBTTASK_RESULT", e.channelMRGetConfigValue = "MR_GET_CONFIG_VALUE", e.channelMRSetConfigValue = "MR_SET_CONFIG_VALUE", e.channelRMCommitPlanTask = "RM_PLANTASK_COMMIT", e.channelRMPerformePlanTask = "RM_PLANTASK_PERFORME", e.channelRMProcessSend = "RM_RENDER_PROCESS_INFO", e.channelRMGetPrivateSpaceInfo = "RM_RENDER_GET_PRIVATE_SPACE_INFO", e.channelMRGetPrivateSpaceInfoResult = "MR_RENDER_GET_PRIVATE_SPACE_INFO_RESULT", e.channelRMFileCopy = "RM_FILE_COPY", e.channelRMFileMove = "RM_FILE_MOVE", e.channelMRFileCopyResult = "MR_FILE_COPY_RESULT", e.channelMRFileMoveResult = "MR_FILE_MOVE_RESULT", e.channelRMGetSutitleByCid = "RM_RENDER_GET_SUBTITLE_BY_CID", e.channelMRGetSutitleByCidResult = "MR_RENDER_GET_SUBTITLE_BY_CID_RESULT", e.channelRMGetSutitleByName = "RM_RENDER_GET_SUBTITLE_BY_NAME", e.channelMRGetSutitleByNameResult = "MR_RENDER_GET_SUBTITLE_BY_NAME_RESULT", e.channelRMDownloadSutitle = "RM_RENDER_DOWNLOAD_SUBTITLE", e.channelMRDownloadSutitleSuc = "MR_RENDER_DOWNLOAD_SUBTITLE_SUCCESS", e.channelMRDownloadSutitleFail = "MR_RENDER_DOWNLOAD_SUBTITLE_FAIL", e.channelRMGetDisplayName = "RM_RENDER_GET_SUBTITLE_DISPLAYNAME", e.channelMRGetDisplayNameResult = "MR_RENDER_GET_SUBTITLE_DISPLAYNAME_RESULT", e.channelMRBringWindowToTop = "MR_RENDER_BRING_WINDOW_TO_TOP", e.channelRMDownloadXmp = "RM_RENDER_DOWNLOAD_XMP", e.channelRMXmpFixBoxCreated = "RM_RENDER_XMPFIXBOX_CREATED", e.channelMRFixXmpSuc = "MR_RENDER_FIX_XMP_SUC", e.channelMRFixXMPFail = "MR_RENDER_FIX_XMP_FAIL", e.channelRMDownloadXmpEx = "RM_RENDER_DOWNLOAD_XMP_EX", e.channelRMSetPosition = "RM_SET_POSITION", e.channelRMSetFoucs = "RM_SET_FOCUS", e.channelRMCreateAddressDropWnd = "RM_CREATE_ADDRESS_DROPWND", e.channelRMRefreshAddressDropWnd = "RM_REFRESH_ADDRESS_DROPWND", e.channelRMSelectAddressDropItem = "RM_SELECT_ADDRESS_DROPITEM", e.channelRMCreateSearchWindow = "RM_CREATE_SEARCH_WINDOW", e.channelRMShowSearchWindow = "RM_SHOW_SEARCH_WINDOW", e.channelRMAddressKeyDown = "RM_ADDRESS_BAR_KEYDOWN", e.channelMRFWAddressKeyDown = "MR_ADDRESS_FW_BAR_KEYDOWN", e.channelMRFWSelectAddressDropItem = "MR_FW_SELECT_ADDRESS_DROPITEM", e.channelRMAddressDropWndKeyDown = "RM_ADDRESS_DROPWND_KEYDOWN", e.channelRMClickMouse = "RM_CLICK_MOUSE", e.channelMRSearchBarFocusChange = "MR_SEARCHBAR_FOCUS_CHANGE", e.channelMRFWAddressDropWndKeyDown = "MR_FW_ADDRESS_DROPWND_KEYDOWN", e.channelMRClickAddressDropItem = "MR_CLICK_ADDRESS_DROPITEM", e.channelMRMainWndMax = "MR_MAINWINDOW_MAX", e.channelMRMainWndMin = "MR_MAINWINDOW_MIN", e.channelMRMainWndRestore = "MR_MAINWINDOW_RESTORE", e.channelRMGetBrowserStartType = "RM_GET_BROWSER_START_TYPE", e.channelMRGetBrowserStartTypeResult = "MR_GET_BROWSER_START_TYPE_RESULT", e.channelRMExecute = "RM_SHELL_EXECUTE", e.channelMRExecuteResult = "MR_SHELL_EXECUTE_RESULT", e.channelMRAdTipsClick = "MR_AD_TIPS_CLICK", e.channelMRNotificationMsg = "MR_NOTIFICATION_MSG", e.channelRMSetProgressBar = "RM_SET_PROGRESS_BAR", e.channelRMRoundWindow = "RM_ROUND_WINDOW", e.channelMRShowOrHideWindow = "MR_SHOW_OR_HIDE_WINDOW", e.channelMRSuspensionWindowShowOrHide = "MR_SUSPENSION_WINDOW_SHOW_OR_HIDE", e.channelRMConfigInitFinished = "RM_CONFIG_INIT_FINISHED", e.channelRMConfigValueChanged = "RM_CONFIG_VALUE_CHANGED", e.channelRMIndividuationBrowserMsg = "RM_INDIVIDUATION_BROWSER_MSG", e.channelMRIndividuationBrowserMsg = "MR_INDIVIDUATION_BROWSER_MSG", e.channelRMSetEnvironmentVariable = "RM_SET_ENVIRONMENT_VARIABLE", e.channelMREmbedPlayerPos = "MR_EMBED_PLAYER_POSITION", e.channelRMUpdateLogEnviroment = "RM_UPDATE_LOG_ENVIRONMENT", e.channelMRUpdateLogEnviroment = "MR_UPDATE_LOG_ENVIRONMENT"
    }(t.ThunderChannelList || (t.ThunderChannelList = {}))
}, function (e, t, n) {
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
    const o = n(11), r = n(54), s = n(27), a = n(26);

    function l(e) {
        a.information("on object freeer"), global.__xdasIPCClienInstance.notifyFreer(e.remoteId, e.callbackId)
    }

    let d = void 0;
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
    }), d = global.__xdasIPCClienInstance, t.client = d
}, function (e, t) {
    e.exports = require("os")
}, function (e, t, n) {
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
    const o = n(13), r = n(1), s = n(5).promisify, a = n(2).default.getLogger("Thunder.base.fs-utilities");
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

        function d(e) {
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

        function c(e) {
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

        function u(e) {
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
                    n = null !== o && o.isDirectory() ? yield p(i) : yield c(i)
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
                        let t = (yield u(e)) || [];
                        for (let i = 0; i < t.length; i++) n = (yield f(e, t[i])) && n;
                        (n || 0 === t.length) && (n = (yield d(e)) && n)
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

        function w(e, n) {
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
        }, e.mkdirAW = l, e.rmdirAW = d, e.unlinkAW = c, e.readdirAW = u, e.lstatAW = h, e.rmdirsAW = p, e.mkdirsAW = m, e.renameAW = function (e, t) {
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
        }, e.copyFileAW = w, e.copyDirsAW = function e(n, o) {
            return i(this, void 0, void 0, function* () {
                let i = !1, s = yield h(n);
                if (s.isDirectory()) {
                    i = yield m(o);
                    let a = (yield u(n)) || [];
                    for (let l = 0; l < a.length; l++) {
                        let d = r.join(n, a[l]), c = r.join(o, a[l]);
                        (i = yield t(d)) && (i = (s = yield h(d)).isDirectory() ? yield e(d, c) : yield w(d, c))
                    }
                }
                return i
            })
        }, e.mkdtempAW = function () {
            return i(this, void 0, void 0, function* () {
                let e = !1;
                const t = s(o.mkdtemp), i = (yield Promise.resolve().then(() => n(9))).tmpdir();
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
                        if ((yield t(o)) && !(yield d(o))) {
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
                        let t = yield u(n);
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
                    if ((yield u(e)).length > 0) {
                        i = !1;
                        break
                    }
                } while (0);
                return i
            })
        }
    }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
}, function (e, t) {
    e.exports = require("events")
}, function (e, t, n) {
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
    const o = n(1), r = n(3), s = n(2).default.getLogger("XLStat");
    let a = r.default(o.join(__rootDir, "../bin/ThunderHelper.node"));

    function l(e = "") {
        let t;
        if ("string" == typeof e) t = e; else if (d(e) && "object" == typeof e) {
            let n = [];
            for (let t in e) d(e[t]) && n.push(t + "=" + encodeURIComponent(e[t]));
            t = n.join(",")
        }
        return t
    }

    function d(e) {
        return void 0 !== e && null !== e
    }

    !function (e) {
        let t = null;

        function n() {
            return t || (t = a.xlstat4), t
        }

        function o(e, t = "", o = "", r = 0, a = 0, d = 0, c = 0, u = "", h = 0) {
            return i(this, void 0, void 0, function* () {
                let i = 0;
                do {
                    if (void 0 === e) {
                        i = 1;
                        break
                    }
                    let f = l(u);
                    i = "browser" === process.type ? yield new Promise(s => {
                        i = n().asyncTrackEvent(e, t, o, r, a, d, c, f, h, e => {
                            s(e)
                        })
                    }) : n().trackEvent(e, t, o, r, a, d, c, f, h), s.information(e, t, o, r, a, d, c, f, h)
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

        e.asyncTrackEvent = o, e.trackEvent = function (e, t = "", n = "", i = 0, r = 0, s = 0, a = 0, l = "", d = 0) {
            o(e, t, n, i, r, s, a, l, d).catch()
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
}, function (e, t) {
    e.exports = require("fs")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(1);
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
}, function (e, t, n) {
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
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t, n, i, o, r, s, a, l, d, c, u, h, f, p, m, w, g, _, v, b;
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
        }(d = e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo", e[e.ValidDownloadSize = 8388608] = "ValidDownloadSize", e[e.OriginName = 16777216] = "OriginName", e[e.HTTPContentType = 33554432] = "HTTPContentType", e[e.PlayPosition = 67108864] = "PlayPosition", e[e.Duration = 134217728] = "Duration", e[e.YunTaskId = 268435456] = "YunTaskId"
        }(c = e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(u = e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(h = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 4096] = "StringStart", e[e.FinalName = 4097] = "FinalName", e[e.RelativePath = 4098] = "RelativePath", e[e.FileName = 4099] = "FileName", e[e.FilePath = 4100] = "FilePath", e[e.Cid = 4101] = "Cid", e[e.Gcid = 4102] = "Gcid", e[e.UserRead = 4103] = "UserRead", e[e.PlayPosition = 4104] = "PlayPosition", e[e.Duration = 4105] = "Duration", e[e.StringEnd = 4106] = "StringEnd"
        }(f = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
            e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
        }(p = e.KeyType || (e.KeyType = {})), function (e) {
            e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
        }(m = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
            e[e.ExtEqual = 1] = "ExtEqual", e[e.NameLikeAndExtEqual = 2] = "NameLikeAndExtEqual", e[e.TaskTypeEqual = 4] = "TaskTypeEqual"
        }(w = e.FilterKeyType || (e.FilterKeyType = {})), function (e) {
            e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
        }(g = e.KeyFilter || (e.KeyFilter = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Recycle = 2] = "Recycle", e[e.Recover = 3] = "Recover", e[e.ReDownload = 4] = "ReDownload", e[e.MoveThoughCategory = 5] = "MoveThoughCategory"
        }(_ = e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.Manual = 0] = "Manual", e[e.PauseAll = 1] = "PauseAll", e[e.DeleteTask = 2] = "DeleteTask", e[e.TaskJammed = 3] = "TaskJammed", e[e.LowSpeed = 4] = "LowSpeed", e[e.MaxDownloadReduce = 5] = "MaxDownloadReduce", e[e.MoveTask = 6] = "MoveTask", e[e.SelectDownloadLists = 7] = "SelectDownloadLists", e[e.PrivateLoginOut = 8] = "PrivateLoginOut", e[e.FreeDownload = 9] = "FreeDownload", e[e.Exit = 10] = "Exit"
        }(v = e.TaskStopReason || (e.TaskStopReason = {})), function (e) {
            e[e.RESOURCE_FROM_MEMBER = 1] = "RESOURCE_FROM_MEMBER", e[e.RESOURCE_FROM_OFFLINE = 2] = "RESOURCE_FROM_OFFLINE", e[e.RESOURCE_FROM_CRYSTAL_LARGE = 4] = "RESOURCE_FROM_CRYSTAL_LARGE", e[e.RESOURCE_FROM_CRYSTAL_SMALL = 8] = "RESOURCE_FROM_CRYSTAL_SMALL", e[e.RESOURCE_FROM_DCDN = 16] = "RESOURCE_FROM_DCDN", e[e.RESOURCE_FROM_FREEDCDN = 32] = "RESOURCE_FROM_FREEDCDN"
        }(b = e.XLResourceFrom || (e.XLResourceFrom = {}))
    }(t.DownloadKernel || (t.DownloadKernel = {}))
}, function (e, t, n) {
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
    const o = n(32), r = n(13), s = n(10), a = n(2).default.getLogger("Thunder.base.tools-utilities"), l = n(1),
        d = n(3).default(l.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        function t(e) {
            return i(this, void 0, void 0, function* () {
                let t;
                return t = e && (yield s.FileSystemAWNS.existsAW(e)) ? new Promise(t => {
                    d.asyncCalcuteFileMD5(e, (e, n) => {
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
}, function (e, t, n) {
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
    const o = n(0), r = n(1), s = n(2), a = n(10), l = n(19), d = s.default.getLogger("Thunder.Util"),
        c = "Thunder Network\\Thunder7.9\\";

    function u(e) {
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
                d.warning(e)
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
                        "" !== n.trim() && o.push(u(n))
                    }
                } else {
                    let n = e.substring(t, s);
                    "" !== n.trim() && o.push(u(n)), t = s + 1
                }
            }
            return o
        }, e.getThunderTempPath = function (e, t) {
            return i(this, void 0, void 0, function* () {
                const i = yield Promise.resolve().then(() => n(9));
                let o = r.join(i.tmpdir(), c);
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
            let d = new RegExp(a, "gi");
            return r = e.replace(d, e => '<span style= "color:' + n + '">' + e + "</span>")
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
                    let l = Math.round((e + t) / 2), d = f(`${i.substr(0, l)}...${r}`, n);
                    if (s === d) {
                        a = l;
                        break
                    }
                    if (s > d) {
                        if (Math.round(s) === Math.round(d)) {
                            a = l;
                            break
                        }
                        a = o(l + 1, t, i, r, s)
                    } else if (d > s) {
                        if (Math.round(s) === Math.round(d)) {
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
                let d = e.substr(0, e.length - l.length - 1);
                if (!d) break;
                let c = o(0, d.length, d, l, a);
                if (-1 === c) break;
                s = `${d.substr(0, c - 2 * (i - 1))}...${l}`
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
}, function (e, t, n) {
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
    const o = n(1), r = n(25), s = n(9), a = n(16), l = n(3).default(o.join(__rootDir, "../bin/ThunderHelper.node"));
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
}, function (e, t, n) {
    "use strict";
    var i = n(4), o = n(92), r = {"Content-Type": "application/x-www-form-urlencoded"};

    function s(e, t) {
        !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }

    var a, l = {
        adapter: ("undefined" != typeof XMLHttpRequest ? a = n(93) : "undefined" != typeof process && (a = n(40)), a),
        transformRequest: [function (e, t) {
            return o(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
        }],
        transformResponse: [function (e) {
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {
            }
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function (e) {
            return e >= 200 && e < 300
        }
    };
    l.headers = {common: {Accept: "application/json, text/plain, */*"}}, i.forEach(["delete", "get", "head"], function (e) {
        l.headers[e] = {}
    }), i.forEach(["post", "put", "patch"], function (e) {
        l.headers[e] = i.merge(r)
    }), e.exports = l
}, function (e, t, n) {
    "use strict";
    var i = n(38);
    e.exports = function (e, t, n, o, r) {
        var s = new Error(e);
        return i(s, t, n, o, r)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(5), r = n(23), s = n(24);
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
}, function (e, t, n) {
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
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.msgIPCCommunicatorForward = "ipc_communicator_forward", e.msgIPCSendToMain = "ipc_send_to_main", e.msgIPCSendToRenderer = "ipc_send_to_renderer", e.msgIPCRendererConnect = "ipc_renderer_connect", e.msgIPCRendererDisconnect = "ipc_renderer_disconnect", e.msgNCCallNativeFunction = "nc_call_native_function", e.msgNCCheckNativeFunction = "nc_check_native_function", e.msgNCCallJsFunctionById = "nc_call_js_function_by_id", e.msgNCCallJsFunctionByName = "nc_call_js_function_by_name", e.msgNCNativeFireEvent = "nc_native_fire_event", e.msgNCNativeCallReady = "nc_native_call_ready"
    }(t.CommonIPCMessage || (t.CommonIPCMessage = {}))
}, function (e, t) {
    e.exports = require("net")
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
    const i = n(9), o = n(1);
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
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(57);
    "browser" === process.type ? global.xlDesktopApplicationSolution = i.xlDesktopApplicationSolution : (window.xlDesktopApplicationSolution = i.xlDesktopApplicationSolution, process.once("loaded", () => {
        window.xlDesktopApplicationSolution = i.xlDesktopApplicationSolution
    }))
}, function (e, t, n) {
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
    const o = n(2).default.getLogger("async-remote-call"), r = n(30), s = n(11), a = n(5);
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
}, function (e, t, n) {
    "use strict";
    const i = n(14);
    if ("renderer" === process.type) {
        if (i.info("client running"), !global.__xdasAsyncRemoteExports) {
            let e = {};
            global.__xdasAsyncRemoteExports = e;
            let t = n(61);
            e.require = t.require, e.getCurrentWebContents = t.getCurrentWebContents, e.getCurrentWindow = t.getCurrentWindow, e.Interest = t.Interest, e.global = new Proxy({}, {get: (e, n, i) => t.getGlobal(n)}), e.electron = new Proxy({}, {get: (e, n, i) => t.getBuiltin(n)}), Object.defineProperty(e, "currentWindow", {get: () => t.getCurrentWindow()}), Object.defineProperty(e, "currentWebContents", {get: () => t.getCurrentWebContents()}), Object.defineProperty(e, "process", {get: () => t.getGlobal("process")})
        }
    } else if ("browser" === process.type && (i.info("server running"), !global.__xdasAsyncRemoteExports)) {
        let e = {};
        global.__xdasAsyncRemoteExports = e;
        const t = n(66);
        t.startServer(), e.getObjectRegistry = t.getObjectRegistry
    }
    e.exports = global.__xdasAsyncRemoteExports
}, function (e, t, n) {
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
}, function (e, t) {
    e.exports = require("crypto")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t;
        !function (e) {
            e[e.OK = 0] = "OK", e[e.Cancel = 1] = "Cancel", e[e.Close = 2] = "Close", e[e.Unknow = 3] = "Unknow"
        }(t = e.Action || (e.Action = {}))
    }(t.MessageBoxNS || (t.MessageBoxNS = {}))
}, function (e, t, n) {
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
    const o = n(0), r = n(29), s = n(7);
    !function (e) {
        e.resizeToFitContent = function (e = 0, t = 0, n) {
            return i(this, void 0, void 0, function* () {
                let i = yield r.asyncRemoteCall.getCurrentWindow();
                if (e > 0 && t > 0) yield i.setSize(e, t); else {
                    let e = document.querySelector(".td-dialog");
                    yield i.setSize(e.offsetWidth, e.offsetHeight)
                }
                n && "function" == typeof n && n(), window.requestIdleCallback(() => {
                    i.show()
                })
            })
        }, e.autoAdaptScrollIntoView = function (e, t, n) {
            let i = t.scrollTop, o = t.getBoundingClientRect(), r = e.getBoundingClientRect(), s = o.bottom;
            void 0 !== n && "number" == typeof n && n > 0 && (s = o.top + n), r.top < o.top ? t.scrollTop = i - (o.top - r.top) : r.bottom > s && (t.scrollTop = i + (r.bottom - s))
        }, e.fitWindowPosInParent = function (e, t) {
            return i(this, void 0, void 0, function* () {
                e || (e = yield r.asyncRemoteCall.getCurrentWindow()), t || (t = yield e.getParentWindow()), o.ipcRenderer.sendSync(s.ThunderChannelList.channelRMSetPosition, yield e.getNativeWindowHandle(), yield t.getNativeWindowHandle())
            })
        }, e.getWindowsInParentCenterPos = function (e, t, n) {
            return i(this, void 0, void 0, function* () {
                n || (n = yield r.asyncRemoteCall.getCurrentWindow());
                let i = yield n.getPosition(), s = yield n.getSize(),
                    a = "browser" !== process.type ? yield r.asyncRemoteCall.getScreen() : o.screen,
                    l = yield a.getCursorScreenPoint(), d = yield a.getDisplayNearestPoint(l), c = d.size.width,
                    u = d.size.height, h = s[0], f = s[1];
                i[0] + h > c && (h = c - i[0]), i[1] + f > u && (f = u - i[1]);
                let p = i[0] + (h - e) / 2, m = i[1] + (f - t) / 2;
                return p < 0 ? p = 0 : p > c - e && (p = c - e), m < 0 ? m = 0 : m > u - t && (m = u - t), [Math.round(p), Math.round(m)]
            })
        }, e.centerWnd = function (e, t, n) {
            do {
                if ("browser" !== process.type) break;
                if (!e || !t) break;
                let i = e.getNativeWindowHandle().readUIntLE(0, 4);
                if (!i) break;
                let r = t.getPosition(), s = t.getSize(), a = e.getSize(), l = o.screen.getCursorScreenPoint(),
                    d = o.screen.getDisplayNearestPoint(l), c = d.scaleFactor, u = d.size.width, h = d.size.height,
                    f = s[0], p = s[1];
                r[0] + f > u && (f = u - r[0]), r[1] + p > h && (p = h - r[1]);
                let m = r[0] + (f - a[0]) / 2, w = r[1] + (p - a[1]) / 2;
                m < 0 ? m = 0 : m > u - a[0] && (m = u - a[0]), w < 0 ? w = 0 : w > h - a[1] && (w = h - a[1]), n.setWindowPos(i, 0, m * c, w * c, 0, 0, 5)
            } while (0)
        }, e.bringWindowToTop = function (e) {
            return i(this, void 0, void 0, function* () {
                if (!e) {
                    let t = yield(yield r.asyncRemoteCall.getCurrentWindow()).getNativeWindowHandle();
                    e = t.readUIntLE(0, 4)
                }
                o.ipcRenderer.send(s.ThunderChannelList.channelMRBringWindowToTop, e)
            })
        }
    }(t.ThunderWindowNS || (t.ThunderWindowNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.PRE_NEW_TASK = "pre-newtask-dlg", e.BT_NEW_TASK = "bt-newtask-dlg", e.NEW_TASK = "newtask-dlg", e.LOGIN = "login-dlg", e.BROWSER_GUIDE = "browser-guide-dlg", e.SIGN = "sign-dlg"
    }(t.PopView || (t.PopView = {}))
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
            return e.apply(t, n)
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(21);
    e.exports = function (e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, i, o) {
        return e.config = t, n && (e.code = n), e.request = i, e.response = o, e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(4);

    function o(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    e.exports = function (e, t, n) {
        if (!t) return e;
        var r;
        if (n) r = n(t); else if (i.isURLSearchParams(t)) r = t.toString(); else {
            var s = [];
            i.forEach(t, function (e, t) {
                null !== e && void 0 !== e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, function (e) {
                    i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e))
                }))
            }), r = s.join("&")
        }
        return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(4), o = n(37), r = n(39), s = n(41), a = n(42), l = n(43).http, d = n(43).https, c = n(44), u = n(107),
        h = n(108), f = n(21), p = n(38);
    e.exports = function (e) {
        return new Promise(function (t, n) {
            var m, w = e.data, g = e.headers;
            if (g["User-Agent"] || g["user-agent"] || (g["User-Agent"] = "axios/" + h.version), w && !i.isStream(w)) {
                if (Buffer.isBuffer(w)) ; else if (i.isArrayBuffer(w)) w = new Buffer(new Uint8Array(w)); else {
                    if (!i.isString(w)) return n(f("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", e));
                    w = new Buffer(w, "utf-8")
                }
                g["Content-Length"] = w.length
            }
            var _ = void 0;
            e.auth && (_ = (e.auth.username || "") + ":" + (e.auth.password || ""));
            var v = c.parse(e.url), b = v.protocol || "http:";
            if (!_ && v.auth) {
                var y = v.auth.split(":");
                _ = (y[0] || "") + ":" + (y[1] || "")
            }
            _ && delete g.Authorization;
            var S = "https:" === b, C = S ? e.httpsAgent : e.httpAgent, T = {
                path: r(v.path, e.params, e.paramsSerializer).replace(/^\?/, ""),
                method: e.method,
                headers: g,
                agent: C,
                auth: _
            };
            e.socketPath ? T.socketPath = e.socketPath : (T.hostname = v.hostname, T.port = v.port);
            var E, R = e.proxy;
            if (!R && !1 !== R) {
                var M = b.slice(0, -1) + "_proxy", W = process.env[M] || process.env[M.toUpperCase()];
                if (W) {
                    var O = c.parse(W);
                    if (R = {host: O.hostname, port: O.port}, O.auth) {
                        var N = O.auth.split(":");
                        R.auth = {username: N[0], password: N[1]}
                    }
                }
            }
            if (R && (T.hostname = R.host, T.host = R.host, T.headers.host = v.hostname + (v.port ? ":" + v.port : ""), T.port = R.port, T.path = b + "//" + v.hostname + (v.port ? ":" + v.port : "") + T.path, R.auth)) {
                var x = new Buffer(R.auth.username + ":" + R.auth.password, "utf8").toString("base64");
                T.headers["Proxy-Authorization"] = "Basic " + x
            }
            e.transport ? E = e.transport : 0 === e.maxRedirects ? E = S ? a : s : (e.maxRedirects && (T.maxRedirects = e.maxRedirects), E = S ? d : l), e.maxContentLength && e.maxContentLength > -1 && (T.maxBodyLength = e.maxContentLength);
            var k = E.request(T, function (i) {
                if (!k.aborted) {
                    clearTimeout(m), m = null;
                    var r = i;
                    switch (i.headers["content-encoding"]) {
                        case"gzip":
                        case"compress":
                        case"deflate":
                            r = r.pipe(u.createUnzip()), delete i.headers["content-encoding"]
                    }
                    var s = i.req || k, a = {
                        status: i.statusCode,
                        statusText: i.statusMessage,
                        headers: i.headers,
                        config: e,
                        request: s
                    };
                    if ("stream" === e.responseType) a.data = r, o(t, n, a); else {
                        var l = [];
                        r.on("data", function (t) {
                            l.push(t), e.maxContentLength > -1 && Buffer.concat(l).length > e.maxContentLength && n(f("maxContentLength size of " + e.maxContentLength + " exceeded", e, null, s))
                        }), r.on("error", function (t) {
                            k.aborted || n(p(t, e, null, s))
                        }), r.on("end", function () {
                            var i = Buffer.concat(l);
                            "arraybuffer" !== e.responseType && (i = i.toString("utf8")), a.data = i, o(t, n, a)
                        })
                    }
                }
            });
            k.on("error", function (t) {
                k.aborted || n(p(t, e, null, k))
            }), e.timeout && !m && (m = setTimeout(function () {
                k.abort(), n(f("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", k))
            }, e.timeout)), e.cancelToken && e.cancelToken.promise.then(function (e) {
                k.aborted || (k.abort(), n(e))
            }), i.isStream(w) ? w.pipe(k) : k.end(w)
        })
    }
}, function (e, t) {
    e.exports = require("http")
}, function (e, t) {
    e.exports = require("https")
}, function (e, t, n) {
    var i = n(44), o = n(41), r = n(42), s = n(98), a = n(99).Writable, l = n(100)("follow-redirects"),
        d = {GET: !0, HEAD: !0, OPTIONS: !0, TRACE: !0}, c = Object.create(null);

    function u(e, t) {
        a.call(this), e.headers = e.headers || {}, this._options = e, this._redirectCount = 0, this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
        var n = this;
        if (this._onNativeResponse = function (e) {
            n._processResponse(e)
        }, !e.pathname && e.path) {
            var i = e.path.indexOf("?");
            i < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, i), e.search = e.path.substring(i))
        }
        this._performRequest()
    }

    function h(e) {
        var t = {maxRedirects: 21, maxBodyLength: 10485760}, n = {};
        return Object.keys(e).forEach(function (o) {
            var r = o + ":", a = n[r] = e[o], d = t[o] = Object.create(a);
            d.request = function (e, o) {
                return "string" == typeof e ? (e = i.parse(e)).maxRedirects = t.maxRedirects : e = Object.assign({
                    protocol: r,
                    maxRedirects: t.maxRedirects,
                    maxBodyLength: t.maxBodyLength
                }, e), e.nativeProtocols = n, s.equal(e.protocol, r, "protocol mismatch"), l("options", e), new u(e, o)
            }, d.get = function (e, t) {
                var n = d.request(e, t);
                return n.end(), n
            }
        }), t
    }

    ["abort", "aborted", "error", "socket", "timeout"].forEach(function (e) {
        c[e] = function (t) {
            this._redirectable.emit(e, t)
        }
    }), u.prototype = Object.create(a.prototype), u.prototype.write = function (e, t, n) {
        this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({
            data: e,
            encoding: t
        }), this._currentRequest.write(e, t, n)) : (this.emit("error", new Error("Request body larger than maxBodyLength limit")), this.abort())
    }, u.prototype.end = function (e, t, n) {
        var i = this._currentRequest;
        e ? this.write(e, t, function () {
            i.end(null, null, n)
        }) : i.end(null, null, n)
    }, u.prototype.setHeader = function (e, t) {
        this._options.headers[e] = t, this._currentRequest.setHeader(e, t)
    }, u.prototype.removeHeader = function (e) {
        delete this._options.headers[e], this._currentRequest.removeHeader(e)
    }, ["abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive", "setTimeout"].forEach(function (e) {
        u.prototype[e] = function (t, n) {
            return this._currentRequest[e](t, n)
        }
    }), ["aborted", "connection", "socket"].forEach(function (e) {
        Object.defineProperty(u.prototype, e, {
            get: function () {
                return this._currentRequest[e]
            }
        })
    }), u.prototype._performRequest = function () {
        var e = this._options.protocol, t = this._options.nativeProtocols[e];
        if (this._options.agents) {
            var n = e.substr(0, e.length - 1);
            this._options.agent = this._options.agents[n]
        }
        var o = this._currentRequest = t.request(this._options, this._onNativeResponse);
        for (var r in this._currentUrl = i.format(this._options), o._redirectable = this, c) r && o.on(r, c[r]);
        if (this._isRedirect) {
            var s = this._requestBodyBuffers;
            !function e() {
                if (0 !== s.length) {
                    var t = s.pop();
                    o.write(t.data, t.encoding, e)
                } else o.end()
            }()
        }
    }, u.prototype._processResponse = function (e) {
        var t = e.headers.location;
        if (t && !1 !== this._options.followRedirects && e.statusCode >= 300 && e.statusCode < 400) {
            if (++this._redirectCount > this._options.maxRedirects) return void this.emit("error", new Error("Max redirects exceeded."));
            var n, o = this._options.headers;
            if (307 !== e.statusCode && !(this._options.method in d)) for (n in this._options.method = "GET", this._requestBodyBuffers = [], o) /^content-/i.test(n) && delete o[n];
            if (!this._isRedirect) for (n in o) /^host$/i.test(n) && delete o[n];
            var r = i.resolve(this._currentUrl, t);
            l("redirecting to", r), Object.assign(this._options, i.parse(r)), this._isRedirect = !0, this._performRequest()
        } else e.responseUrl = this._currentUrl, this.emit("response", e), this._requestBodyBuffers = []
    }, e.exports = h({http: o, https: r}), e.exports.wrap = h
}, function (e, t) {
    e.exports = require("url")
}, function (e, t, n) {
    function i(e) {
        var n;

        function i() {
            if (i.enabled) {
                var e = i, o = +new Date, r = o - (n || o);
                e.diff = r, e.prev = n, e.curr = o, n = o;
                for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                var l = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, i) {
                    if ("%%" === n) return n;
                    l++;
                    var o = t.formatters[i];
                    if ("function" == typeof o) {
                        var r = s[l];
                        n = o.call(e, r), s.splice(l, 1), l--
                    }
                    return n
                }), t.formatArgs.call(e, s), (i.log || t.log || console.log.bind(console)).apply(e, s)
            }
        }

        return i.namespace = e, i.enabled = t.enabled(e), i.useColors = t.useColors(), i.color = function (e) {
            var n, i = 0;
            for (n in e) i = (i << 5) - i + e.charCodeAt(n), i |= 0;
            return t.colors[Math.abs(i) % t.colors.length]
        }(e), i.destroy = o, "function" == typeof t.init && t.init(i), t.instances.push(i), i
    }

    function o() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0)
    }

    (t = e.exports = i.debug = i.default = i).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function () {
        t.enable("")
    }, t.enable = function (e) {
        var n;
        t.save(e), t.names = [], t.skips = [];
        var i = ("string" == typeof e ? e : "").split(/[\s,]+/), o = i.length;
        for (n = 0; n < o; n++) i[n] && ("-" === (e = i[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        for (n = 0; n < t.instances.length; n++) {
            var r = t.instances[n];
            r.enabled = t.enabled(r.namespace)
        }
    }, t.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        var n, i;
        for (n = 0, i = t.skips.length; n < i; n++) if (t.skips[n].test(e)) return !1;
        for (n = 0, i = t.names.length; n < i; n++) if (t.names[n].test(e)) return !0;
        return !1
    }, t.humanize = n(102), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        this.message = e
    }

    i.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, i.prototype.__CANCEL__ = !0, e.exports = i
}, function (e, t, n) {
    n(49), n(50), e.exports = n(52)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(1);
    global.__rootDir = i.app.getAppPath(), global.__profilesDir = o.join(__rootDir, "../../../profiles")
}, function (e, t, n) {
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
    const o = n(1), r = n(5), s = n(2), a = n(3), l = n(51), d = n(0), c = n(7),
        u = a.default(o.join(__rootDir, "../bin/ThunderHelper.node"));
    let h = "0";
    process.env.TL_ENABLE = h;
    let f = process.env.TL_OUTPUT;

    function p() {
        s.default.outputLogger = "console" === f ? s.outputLoggerConsole : function () {
            function e(e) {
                return function (...t) {
                    u.printEtwLog(e, function (...e) {
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

    p(), m().catch(), "browser" === process.type ? d.ipcMain.on(c.ThunderChannelList.channelRMUpdateLogEnviroment, () => {
        d.BrowserWindow.getAllWindows().forEach(e => {
            e.isDestroyed() || e.webContents.send(c.ThunderChannelList.channelMRUpdateLogEnviroment)
        })
    }) : "renderer" === process.type && d.ipcRenderer.on(c.ThunderChannelList.channelMRUpdateLogEnviroment, () => {
        m().catch()
    })
}, function (e, t, n) {
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
    const o = n(1), r = n(3), s = n(10), a = r.default(o.join(__rootDir, "../bin/ThunderHelper.node"));
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
}, function (e, t, n) {
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
    const o = n(22);
    n(53).CommonIPCMain.mainCommunicator.connect();
    const r = n(8);
    n(28);
    const s = n(60);
    s.PerformanceMonitorStatNS.init("browser"), s.PerformanceMonitorStatNS.trackColdStartUpEvent("entrance_in_main").catch(), n(69);
    const a = n(0), l = n(13);
    n(30);
    const d = n(2), c = n(7), u = n(12), h = n(70), f = n(1), p = n(3), m = n(71), w = n(17), g = n(72), _ = n(73),
        v = n(74), b = n(75), y = n(76), S = n(77), C = n(78), T = n(80), E = n(10), R = n(81), M = n(84), W = n(6),
        O = n(18), N = n(116), x = n(118), k = n(15);
    let {debounce: P} = O.ThunderUtil;
    a.app.disableHardwareAcceleration();
    let I = f.join(__rootDir, "..\\..\\Thunder.exe");
    a.app.setAppUserModelId(I);
    const D = p.default(f.join(__rootDir, "../bin/ThunderHelper.node")), L = d.default.getLogger("Thunder.Main");
    L.information("trackShow maininterfaceEffectivelyshow");
    let A = null, F = void 0, U = 0, B = !0, H = null, j = D.getTickCount(),
        V = h.HistoryDataNS.getMainWndSizeHistoryData(), z = !1, G = !0, K = 960, X = 960, $ = 640, q = global;
    q.mainRendererWindow = null, q.silentMainWnd = !1, q.silentSupsWnd = !1, q.appExit = !1;
    let Y = null;

    function Z() {
        if (null !== H) {
            let e = H.getBounds(), t = e.x + Math.round((e.width - X) / 2), n = e.y + Math.round((e.height - $) / 2);
            H.setBounds({x: t, y: n, width: X, height: $})
        }
    }

    function J() {
        if (null !== H) {
            let e = H.getNativeWindowHandle().readUIntLE(0, 4);
            D.showWindow(e, k.CmdShow.SW_SHOWMAXIMIZED)
        }
    }

    !function () {
        for (let e = 0; e < process.argv.length; e++) "--autotest:startup" === process.argv[e] ? z = !0 : "-StartType:Install" === process.argv[e] ? (V.exitState = "normal", V.width = K, V.height = 640) : "-silent" === process.argv[e] ? q.silentMainWnd = !0 : "-nofloatwnd" === process.argv[e] && (q.silentSupsWnd = !0)
    }(), a.ipcMain.on("closeMainWindow", (e, t) => i(this, void 0, void 0, function* () {
        if (null !== H) if ("BossKey" === t) if (H.isVisible() || A && !A.isDestroyed()) {
            yield r.client.callServerFunction("SetConfigValue", "BossKey", "BossKeyState", !0);
            let e = T.SuspensionWindowHelper.getSuspensionWindow();
            e && !e.isDestroyed() && e.hide(), H.minimize(), H.hide(), A.destroy()
        } else yield r.client.callServerFunction("SetConfigValue", "BossKey", "BossKeyState", !1), H.isMinimized() && H.restore(), H.show(), oe(); else if ("exit" === t) {
            q.appExit = !0;
            let e = T.SuspensionWindowHelper.getSuspensionWindow();
            e && !e.isDestroyed() && e.hide(), H.hide(), A && !A.isDestroyed() && A.destroy()
        } else H.minimize(), H.hide()
    })), a.ipcMain.on("maximizeMainWindow", () => {
        null !== H && (Y = H.getBounds()), J()
    }), a.ipcMain.on("restoreMainWindow", () => {
        null !== H && ("max" === V.exitState && !0 === G ? (G = !1, Z()) : (G = !1, H.restore(), Y && (H.setBounds(Y), Y = null)))
    }), a.ipcMain.on("minizeMainWindow", () => {
        null !== H && H.minimize()
    });
    let Q = [];
    a.ipcMain.on(c.ThunderChannelList.channelRMProcessSend, (e, t) => {
        Q.push(t), r.client.start({name: o.CommonIPCBase.mainProcessContext}), N.embedXmpWin.init(H), x.browserWindowCreator.init(H), W.registerRoundRectClientFunction(H), r.client.registerFunctions({
            SetTrayImage: (e, ...t) => i(this, void 0, void 0, function* () {
                let e = t[0];
                (yield E.FileSystemAWNS.existsAW(e)) && A.setImage(a.nativeImage.createFromPath(e))
            }), FlashTray: (e, ...t) => i(this, void 0, void 0, function* () {
                let e = t[0], n = t[1], i = t[2], o = `${__rootDir}/static/thunderx.ico`;
                n && (yield E.FileSystemAWNS.existsAW(n)) || (n = o);
                let r = `${__rootDir}/static/empty.ico`;
                void 0 !== F && (clearInterval(F), F = void 0, U = 0), i && A.setToolTip(i), F = setInterval(() => {
                    U % 2 == 0 ? A.setImage(a.nativeImage.createFromPath(r)) : A.setImage(a.nativeImage.createFromPath(n)), U++
                }, 450);
                let s = () => {
                    void 0 !== F && (clearInterval(F), F = void 0, U = 0, A.setImage(a.nativeImage.createFromPath(o)), i && A.setToolTip("迅雷"), e && e())
                };
                H.isVisible() && !H.isMinimized() ? A.once("click", () => {
                    s()
                }) : H.once("focus", s)
            }), IsSilentSupsWnd: (e, ...t) => q.silentSupsWnd, IsAppExit: (e, ...t) => q.appExit
        })
    }), setInterval(() => {
        for (let e = Q.length - 1; e >= 0; --e) try {
            process.kill(Q[e], 0)
        } catch (e) {
            h.HistoryDataNS.setExitType("normal"), a.app.quit()
        }
    }, 1e3);
    const ee = "development" === process.env.RUN_ENV ? "http://localhost:9080/main-renderer/" : `file:///${__dirname}/main-renderer/index.html`,
        te = `${__rootDir}/out/common-preload.js`;
    let ne = !1;

    function ie() {
        ne || (ne = !0, function (e) {
            do {
                if (j <= 0) break;
                let t = (D.getTickCount() - j) / 1e3;
                if (t < 0) break;
                void 0 === e && (e = "manual"), m.MainWindowCoreEventStatNS.onExit();
                let n = "exitType=" + e + ",online_time=" + t;
                L.information("client_all_online_time", n), u.XLStatNS.trackEvent("core_event", "client_all_online_time", "", 0, 0, 0, 0, n)
            } while (0)
        }(), global.xlDesktopApplicationSolution.GetPerformanceMonitorReport().uninitPerformanceMonitor(), u.XLStatNS.uninit(), W.detachAllRoundRectWindow(), a.globalShortcut.unregister("ctrl+f12"), a.globalShortcut.unregister("Alt+D"), a.globalShortcut.unregisterAll(), L.information("main will quit"), D.uninitGDIPlus(), A.destroy())
    }

    function oe() {
        L.information(`${__rootDir}/static/thunderx.ico`);
        let e = null;
        try {
            e = a.nativeImage.createFromPath(`${__rootDir}/static/thunderx.ico`)
        } catch (e) {
            L.warning("createFromPath failed!", e)
        }
        null !== (A = new a.Tray(e)) && (L.information("settooltip"), A.setToolTip("迅雷"), A.on("click", () => {
            if (null !== H) {
                let e = H.isMinimized();
                if (!e && H.isVisible()) {
                    let e = "status=hidemain";
                    u.XLStatNS.trackEvent("client_quick", "tuopan_click_main_status_get", "", 0, 0, 0, 0, e), H.minimize(), H.hide()
                } else {
                    let t = "status=showmain";
                    u.XLStatNS.trackEvent("client_quick", "tuopan_click_main_status_get", "", 0, 0, 0, 0, t), e ? (H.restore(), H.show()) : H.show()
                }
            }
        }), A.on("right-click", () => i(this, void 0, void 0, function* () {
            let e = yield r.client.callServerFunction("GetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "0"),
                t = !0;
            1 !== Number(e) && 2 !== Number(e) || (t = !1);
            let n = !1;
            1 === Number(e) && (n = !0);
            let o = !1;
            2 === Number(e) && (o = !0);
            let s = [{
                type: "normal", label: "新建任务", icon: `${__rootDir}/static/icon/newtask.png`, click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=create"), H.webContents.send(c.ThunderChannelList.channelMRTrayMenuClick, "-task:newtask", "tray_menu")
                }
            }, {
                type: "normal",
                label: "开始全部任务",
                icon: `${__rootDir}/static/icon/startalltask.png`,
                enabled: B,
                click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=start"), H.webContents.send(c.ThunderChannelList.channelMRTrayMenuClick, "-task:startall")
                }
            }, {
                type: "normal", label: "暂停全部任务", icon: `${__rootDir}/static/icon/stoptask.png`, click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=pause"), H.webContents.send(c.ThunderChannelList.channelMRTrayMenuClick, "-task:pauseall")
                }
            }, {
                type: "normal", label: "退出", icon: `${__rootDir}/static/icon/exit.png`, click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=exit"), H.webContents.send(c.ThunderChannelList.channelMRTrayMenuClick, "-task:quitprocess")
                }
            }];
            s.splice(3, 0, {
                type: "submenu",
                label: "悬浮窗显示设置",
                submenu: [{
                    type: "checkbox", label: "显示悬浮窗", checked: t, click() {
                        return i(this, void 0, void 0, function* () {
                            do {
                                if (t) break;
                                let e = "result=show";
                                u.XLStatNS.trackEvent("client_quick", "tuopan_rk_float_monitor_setting", "", 0, 0, 0, 0, e), yield r.client.callServerFunction("SetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "0")
                            } while (0)
                        })
                    }
                }, {
                    type: "checkbox", label: "下载时显示悬浮窗", checked: n, click() {
                        return i(this, void 0, void 0, function* () {
                            do {
                                if (n) break;
                                let e = "result=undl_hide";
                                u.XLStatNS.trackEvent("client_quick", "tuopan_rk_float_monitor_setting", "", 0, 0, 0, 0, e), yield r.client.callServerFunction("SetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "1")
                            } while (0)
                        })
                    }
                }, {
                    type: "checkbox", label: "隐藏悬浮窗", checked: o, click() {
                        return i(this, void 0, void 0, function* () {
                            u.XLStatNS.trackEvent("client_quick", "tuopan_rk_float_monitor_setting", "", 0, 0, 0, 0, "result=hide"), yield r.client.callServerFunction("SetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "2")
                        })
                    }
                }]
            }), H.isVisible() && !H.isMinimized() ? s.splice(0, 0, {
                label: "隐藏主界面", type: "normal", click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=hidemain"), H.minimize(), H.hide()
                }
            }) : s.splice(0, 0, {
                label: "显示主界面", type: "normal", click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=showmain"), H.isMinimized() && H.restore(), H.show()
                }
            });
            let l = a.Menu.buildFromTemplate(s);
            A.popUpContextMenu(l, R.WindowPreferenceNS.getWindowPreference(!0))
        })))
    }

    function re(e) {
        return i(this, void 0, void 0, function* () {
            let t = [];
            if (yield function e(t, n) {
                return i(this, void 0, void 0, function* () {
                    do {
                        if (!t || !n || n.length > 50) break;
                        if (!(yield E.FileSystemAWNS.existsAW(t))) break;
                        let i = yield E.FileSystemAWNS.lstatAW(t);
                        if (i && i.isDirectory()) {
                            let i = yield E.FileSystemAWNS.readdirAW(t);
                            for (let o = 0; o < i.length; o++) yield e(f.join(t, i[o]), n)
                        } else i.size < 5242880 && n.push(t)
                    } while (0)
                })
            }(e, t), t.length > 0) for (let e = 0; e < t.length; ++e) D.asynPreLoadFile(t[e])
        })
    }

    function se() {
        return i(this, void 0, void 0, function* () {
            let e = ["bt-task-renderer", "message-box-renderer", "modifier-userinfo-renderer", "new-task-renderer", "notification-renderer", "personal-info-renderer", "pre-new-task-renderer", "retry-login-renderer", "css/bt-task-renderer", "css/message-box-renderer", "css/modifier-userinfo-renderer", "css/new-task-renderer", "css/notification-renderer", "css/personal-info-renderer", "css/pre-new-task-renderer", "css/retry-login-renderer"];
            for (let t = 0; t < e.length; ++t) yield re(f.join(__dirname, e[t]))
        })
    }

    a.app.on("ready", () => {
        s.PerformanceMonitorStatNS.trackColdStartUpEvent("ready_of_app_in_main").catch(), function () {
            let e = V.width, t = V.height;
            (K = a.screen.getPrimaryDisplay().size.width) <= 1024 ? (K = 960, e = 960) : K = 960, H = new a.BrowserWindow({
                width: e,
                height: t,
                minWidth: K,
                minHeight: 640,
                frame: !1,
                show: !1,
                backgroundColor: "#FFF",
                webPreferences: {devTools: !0, preload: te, webSecurity: !1}
            }), C.loginUIObj.init(H, D), g.initMessageBox(H, D), M.NewTaskDlgsManagerNS.init(H, D), v.default(H, D), b.default(), _.default(D), y.default(H, D), S.default(H, D), q.mainRendererWindow = H, H.loadURL(ee), D.initGDIPlus(), H.on("ready-to-show", () => {
                let e = H.getNativeWindowHandle().readUIntLE(0, 4);
                D.disableWindowAnimation(e);
                let t = D.findChildWindow(e, "Intermediate D3D Window");
                t && D.setWindowLong(t, k.SetWindowType.GWL_STYLE, k.WindowStyle.WS_CLIPSIBLINGS), D.setWindowLong(e, k.SetWindowType.GWL_STYLE, k.WindowStyle.WS_CLIPCHILDREN), M.NewTaskDlgsManagerNS.setReady(!0), s.PerformanceMonitorStatNS.trackColdStartUpEvent("ready_to_show_of_mainwindow_in_main").catch(), z && l.writeFile("autoteststartup.txt", (new Date).getTime(), e => {
                    e && L.information(e)
                }), "max" === V.exitState && J();
                try {
                    let e = a.nativeImage.createFromPath(`${__rootDir}/static/thunderx.ico`);
                    H.setIcon(e)
                } catch (e) {
                    L.warning("createFromPath failed!", e)
                }
                oe(), L.information("endThunderStartProcess"), D.endThunderStartProcess(), h.HistoryDataNS.setExitType("");
                let n = "areo=0", o = !1;
                D.isDwmCompositionEnabled() && (o = !0, n = "areo=1"), D.isDropShadowEnabled() ? n += ",shadow=1" : n += ",shadow=0", u.XLStatNS.trackEvent("core_event", "system_setting", "", 0, 0, 0, 0, n), setTimeout(() => i(this, void 0, void 0, function* () {
                    yield se(), setInterval(() => i(this, void 0, void 0, function* () {
                        yield se()
                    }), 6e5)
                }), 5e3), q.silentMainWnd ? (H.minimize(), H.hide()) : (H.isMinimized() && H.restore(), H.show(), w.ToolsUtilitiesAWNS.setForegroundWindow(D, H).catch()), setTimeout(() => i(this, void 0, void 0, function* () {
                    let e = yield r.client.callServerFunction("GetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "0"),
                        t = null, n = P(() => i(this, void 0, void 0, function* () {
                            if (t && !t.isDestroyed()) {
                                let e = t.getBounds();
                                yield r.client.callServerFunction("SetConfigValue", "ConfigSuspensionXdas", "SuspensionX", e.x), yield r.client.callServerFunction("SetConfigValue", "ConfigSuspensionXdas", "SuspensionY", e.y)
                            }
                        }), 50);
                    2 !== Number(e) && (o ? (t = yield T.SuspensionWindowHelper.createXdasSuspensionWindow(D)) && t.on("move", n) : T.SuspensionWindowHelper.createSuspensionWindow(D)), a.ipcMain.on(c.ThunderChannelList.channelRMConfigValueChanged, (e, r, s, a, l) => i(this, void 0, void 0, function* () {
                        "ConfigFloatPanel" === r && "FloatPanelValue" === s && (2 === Number(a) && 2 !== Number(l) ? o ? (t = yield T.SuspensionWindowHelper.createXdasSuspensionWindow(D)) && t.on("move", n) : T.SuspensionWindowHelper.createSuspensionWindow(D) : 2 !== Number(a) && 2 === Number(l) && (t = T.SuspensionWindowHelper.getSuspensionWindow()) && !t.isDestroyed() && (t.close(), t = null))
                    })), D.initLiveUD()
                }), 2e3), setTimeout(() => i(this, void 0, void 0, function* () {
                    W.roundRectWindow(H, null, !1, !1)
                }), 500)
            }), H.prependListener("close", e => {
                let t = h.HistoryDataNS.getExitType();
                L.information("close:exitType = ", t), "normal" !== t && (null !== H && (H.minimize(), H.hide()), e.preventDefault())
            }), H.on("show", () => {
                q.silentMainWnd = !1, q.silentSupsWnd = !1
            }), H.on("unmaximize", () => {
                "max" === V.exitState && !0 === G && (G = !1, Z())
            }), m.MainWindowCoreEventStatNS.watch(D, H)
        }(), H.on("session-end", () => {
            ie(), H.webContents.send("OnQueryEndSession")
        })
    }), a.app.on("before-quit", () => {
        L.information("before-quit"), ie()
    }), a.app.on("window-all-closed", () => {
        "darwin" !== process.platform && a.app.quit()
    }), a.app.on("browser-window-created", (e, t) => {
        let n = t.webContents.getOSProcessId();
        t.once("closed", () => {
            D.removeProcessEnvironmentVariable(n.toString())
        }), t.webContents.on("dom-ready", () => {
            if (!t.isDestroyed()) {
                let e = t.webContents.getURL();
                D.setProcessEnvironmentVariable(n.toString(), e)
            }
        })
    }), process.on("SIGINT", () => {
        h.HistoryDataNS.setExitType("normal"), a.app.quit()
    }), a.ipcMain.on(c.ThunderChannelList.channelRMFileCopy, (e, t, n) => {
        L.information("asynCopyFile", t, n), D.asynCopyFile(t, n, (t, n) => {
            e.sender.isDestroyed() || e.sender.send(c.ThunderChannelList.channelMRFileCopyResult, t, n)
        })
    }), a.ipcMain.on(c.ThunderChannelList.channelRMFileMove, (e, t, n, i) => {
        L.information("asynMoveFile", t, n), D.asynMoveFile(t, n, (t, n, o) => {
            e.sender.isDestroyed() || e.sender.send(c.ThunderChannelList.channelMRFileMoveResult, t, n, i, o)
        })
    }), a.ipcMain.on(c.ThunderChannelList.channelRMSetEnvironmentVariable, function (e, t, n) {
        n ? D.setProcessEnvironmentVariable(t, n) : D.removeProcessEnvironmentVariable(t)
    }), a.ipcMain.on(c.ThunderChannelList.channelMRBringWindowToTop, (e, t) => {
        L.information("bringWindowToTop", t), D.bringWindowToTop(t)
    }), a.ipcMain.on(c.ThunderChannelList.channelRMSetProgressBar, (e, t) => {
        H && !H.isDestroyed() && H.setProgressBar(t)
    }), a.ipcMain.on(c.ThunderChannelList.channelRMSetFoucs, () => {
        L.information("setMainWindowFocus"), H && !H.isDestroyed() && H.focus()
    }), a.ipcMain.on("can-start-all-task", (e, t) => {
        B = t;
        let n = T.SuspensionWindowHelper.getSuspensionWindow();
        n && !n.isDestroyed() && n.webContents.send("can-start-all-task", t)
    }), a.ipcMain.on("onOpenExecute", (e, t, n, o) => i(this, void 0, void 0, function* () {
        if (null !== t && void 0 !== t && "" !== t) {
            null !== H && (H.isMinimized() && H.restore(), yield w.ToolsUtilitiesAWNS.setForegroundWindow(D, H), H.show());
            let e = f.dirname(t);
            null !== o && void 0 !== o && "" !== o && (e = o), D.asyncShellExecuteAndWait(t, e, n, (i, o) => {
                L.information("shellExecute:result = ", i, ";code = ", o, ";filePath = ", t, ";directory = ", e, ";params = ", n)
            })
        }
    })), a.ipcMain.on(c.ThunderChannelList.channelRMExecute, (e, t, n, i, o, r, s) => {
        let a = H.getNativeWindowHandle().readUIntLE(0, 4), l = D.shellExecute(a, n, i, o, r, s);
        e.sender.isDestroyed() || e.sender.send(c.ThunderChannelList.channelMRExecuteResult, t, l)
    }), a.ipcMain.on(c.ThunderChannelList.channelRMSetPosition, (e, t, n) => {
        let i = null, o = null;
        do {
            if (!t || !n) break;
            let e = t.readUIntLE(0, 4), r = n.readUIntLE(0, 4);
            if (!e || !r) break;
            let s = a.BrowserWindow.getAllWindows();
            for (let t = 0; t < s.length; ++t) {
                let n = s[t].getNativeWindowHandle().readUIntLE(0, 4);
                if (e === n) {
                    if (i = s[t], o) break
                } else if (r === n && (o = s[t], i)) break
            }
            if (!i || !o) break;
            let l = o.getPosition(), d = o.getSize(), c = i.getSize(), u = a.screen.getCursorScreenPoint(),
                h = a.screen.getDisplayNearestPoint(u), f = h.scaleFactor, p = h.size.width, m = h.size.height,
                w = d[0], g = d[1];
            l[0] + w > p && (w = p - l[0]), l[1] + g > m && (g = m - l[1]);
            let _ = l[0] + (w - c[0]) / 2, v = l[1] + (g - c[1]) / 2;
            _ < 0 ? _ = 0 : _ > p - c[0] && (_ = p - c[0]), v < 0 ? v = 0 : v > m - c[1] && (v = m - c[1]), D.setWindowPos(e, 0, _ * f, v * f, 0, 0, 5)
        } while (0);
        e.returnValue = !0
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(5), r = n(23), s = n(24), a = n(22);
    !function (e) {
        class t extends a.CommonIPCBase.Communicator {
            constructor() {
                super(), this.currInfo = {
                    id: void 0,
                    context: a.CommonIPCBase.mainProcessContext,
                    isMainCommunicator: !0
                }
            }

            connect() {
                this.isConnected ? r.warning("has been connected") : (this.isConnected = !0, this.startListenIPCMessage(!0))
            }

            disconnect() {
                this.isConnected ? this.isConnected = !1 : r.warning("hasnot been connected yet")
            }

            sendMessageToRenderer(e, t) {
                this.isConnected ? this.sendIPCMsgToRenderer(e, {
                    msg: t,
                    senderInfo: this.currInfo
                }) : r.warning("hasnot been connected yet")
            }

            sendMessageToAllRenderers(e) {
                if (this.isConnected) for (let t of this.rendererInfos) this.sendIPCMsgToRenderer(t.id, {
                    msg: e,
                    senderInfo: this.currInfo
                }); else r.warning("hasnot been connected yet")
            }

            handleRendererConnectMsg(e, t) {
                let n = void 0;
                do {
                    if (o.isNullOrUndefined(t)) {
                        r.error("msgInfo is null");
                        break
                    }
                    let a = t.senderInfo;
                    if (o.isNullOrUndefined(a)) {
                        r.error("connectRendererInfo is null");
                        break
                    }
                    let l = i.BrowserWindow.fromWebContents(e);
                    if (o.isNullOrUndefined(l)) {
                        r.error("rendererBrowserWindow is null");
                        break
                    }
                    if (a.id = l.id, o.isNullOrUndefined(a.id)) {
                        r.error("connectRendererInfo.id is null");
                        break
                    }
                    r.information(`Main: new renderer will connect, id = ${a.id}, context = ${a.context}`), this.sendMessageToAllRenderers({
                        name: s.CommonIPCMessage.msgIPCRendererConnect,
                        args: [a]
                    }), this.rendererInfos.push(a), n = [a.id, this.rendererInfos]
                } while (0);
                return n
            }

            handleRendererDisconnectMsg(e, t) {
                do {
                    if (o.isNullOrUndefined(t)) {
                        r.error("msgInfo is null");
                        break
                    }
                    let e = t.senderInfo;
                    if (o.isNullOrUndefined(e)) {
                        r.error("disconnectRendererInfo is null");
                        break
                    }
                    r.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
                    for (let t = 0; t < this.rendererInfos.length; ++t) if (this.rendererInfos[t] === e) {
                        this.rendererInfos.splice(t, 1);
                        break
                    }
                    this.sendMessageToAllRenderers({name: s.CommonIPCMessage.msgIPCRendererDisconnect, args: [e]})
                } while (0)
            }

            sendForwardRendererToRendererMsg(e) {
                let t = e.msg.args.shift();
                this.sendIPCMsgToRenderer(t, e)
            }

            sendIPCMsgToRenderer(e, t) {
                do {
                    let n = i.BrowserWindow.fromId(e);
                    if (o.isNullOrUndefined(n)) {
                        r.error("rendererBrowserWindow is null");
                        break
                    }
                    n.webContents.send(s.CommonIPCMessage.msgIPCSendToRenderer, t)
                } while (0)
            }
        }

        e.MainCommunicator = t, e.mainCommunicator = new t
    }(t.CommonIPCMain || (t.CommonIPCMain = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(25), o = n(11), r = n(26), s = n(55), a = n(27);
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
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(56), o = n(11);
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
}, function (e, t) {
    e.exports = require("string_decoder")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(58);
    var o;
    !function (e) {
        e.XDAS = class {
            constructor() {
                this.performanceMonitorReport = null
            }

            GetPerformanceMonitorReport() {
                return null === this.performanceMonitorReport && (this.performanceMonitorReport = new i.PerformanceMonitorReport), this.performanceMonitorReport
            }
        }
    }(o || (o = {})), t.xlDesktopApplicationSolution = new o.XDAS
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(1), o = n(9), r = n(59);
    let s = n(3).default(i.join(r.GlobalDataNS.getRootDir(), "../bin/ThunderHelper.node")).performanceMonitorReporter;
    t.PerformanceMonitorReport = class {
        initPerformanceMonitor(e, t) {
            s.init("browser" === process.type, process.pid, function (e) {
                let t = "";
                if (0 === e.length && "renderer" === process.type) {
                    let e = i.normalize(decodeURIComponent(window.location.href)), n = e.indexOf(process.resourcesPath);
                    n = n > -1 ? n + process.resourcesPath.length + 1 : n;
                    let o = e.length - 1, r = e.indexOf("?"), s = e.indexOf("#");
                    o = r > -1 ? Math.min(r - 1, o) : o, o = s > -1 ? Math.min(s - 1, o) : o, n > -1 && o >= n && (t = e.substr(n, o - n + 1))
                }
                return 0 === t.length && (t = 0 !== e.length ? e : process.type), t = t.replace(/\||,|;/g, "_")
            }(e), o.release(), t), s.start()
        }

        uninitPerformanceMonitor() {
            s.stop()
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(1);
    let o = i.normalize(i.join(process.execPath, "../resources/app")),
        r = i.resolve(o, "../../../profiles").replace(/\\/g, "/");
    !function (e) {
        e.getRootDir = function () {
            return o
        }, e.getProfilesDir = function () {
            return r
        }
    }(t.GlobalDataNS || (t.GlobalDataNS = {}))
}, function (e, t, n) {
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
    const o = n(9), r = (n(13), n(1)), s = n(5);
    let a = null;
    const l = n(12), d = n(0), c = n(2), u = n(3), h = n(7), f = n(29), p = "xdas_profile_stat";
    let m = "", w = void 0, g = null, _ = void 0, v = null,
        b = u.default(r.join(__rootDir, "../bin/ThunderHelper.node")), y = new Set;

    function S() {
        return i(this, void 0, void 0, function* () {
            return new Promise(e => i(this, void 0, void 0, function* () {
                void 0 === _ && (null === v && (v = new Promise(e => {
                    e(_ = function (e) {
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
                })), _ = yield v), e(_)
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
                    t = s.inspect(e) || "";
                    break;
                case"number":
                case"boolean":
                    t = e.toString() || ""
            }
        } while (0);
        return t
    }

    function T(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function E(e) {
        return i(this, void 0, void 0, function* () {
            return new Promise(t => i(this, void 0, void 0, function* () {
                let i = void 0;
                null === a && (a = yield Promise.resolve().then(() => n(32)));
                let o = a.createHash("md5");
                null !== o && (i = o.update(e).digest("hex")), t(i)
            }))
        })
    }

    function R() {
        return new Promise(e => i(this, void 0, void 0, function* () {
            let t = "";
            t = void 0 === w ? "browser" === process.type ? function () {
                if (void 0 === w) {
                    let e = process.argv.length, t = process.argv;
                    for (let n = 0; n < e; n++) {
                        let e = t[n];
                        if (e.startsWith("-StartType:")) {
                            w = e.substring("-StartType:".length);
                            break
                        }
                    }
                    void 0 === w && (w = "")
                }
                return w
            }() : yield function () {
                return i(this, void 0, void 0, function* () {
                    return null === g && (g = new Promise(e => {
                        d.ipcRenderer.send(h.ThunderChannelList.channelRMGetBrowserStartType), d.ipcRenderer.once(h.ThunderChannelList.channelMRGetBrowserStartTypeResult, (t, n) => {
                            w = n, e(n), g = null
                        })
                    })), g
                })
            }() : w, e(t)
        }))
    }

    function M(e, t, n, o) {
        return i(this, void 0, void 0, function* () {
            let r = C(t), s = C(n), a = yield E(s), d = function (e) {
                let t = new RegExp(T("file:///"), "g"), n = new RegExp(T(process.resourcesPath + "\\"), "g"),
                    i = new RegExp(T(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                return e.replace(t, "").replace(n, "").replace(i, "")
            }(C(o)), c = yield E(d), u = `${e}:${a}:${c}`;
            y.has(u) || (y.add(u), l.XLStatNS.trackEvent(p, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield S()},code=${r},message_hash=${a},message=${encodeURI(s)},stack_hash=${c},stack=${encodeURI(d)}`)), function (e, t, n, o) {
                return i(this, void 0, void 0, function* () {
                })
            }().catch()
        })
    }

    function W(e) {
        console.error(e);
        let t = e || {};
        M("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
    }

    !function (e) {
        e.init = function (e) {
            m = e
        }, e.trackColdStartUpEvent = function (e) {
            return i(this, void 0, void 0, function* () {
                let t = b.iSColdStartUp() ? 1 : 0, n = o.release(), i = b.performanceMonitorReporter.getProcessUptime(),
                    r = yield R(), s = `key=${e},start_type=${r},cold_start_up=${t},os_version=${n},cost_time=${i}`;
                l.XLStatNS.trackEvent(p, "cold_start_up", "", 0, 0, 0, 0, s)
            })
        }
    }(t.PerformanceMonitorStatNS || (t.PerformanceMonitorStatNS = {})), function () {
        return i(this, void 0, void 0, function* () {
            if (process.on("uncaughtException", e => {
                console.error(e);
                let t = e || {};
                M("uncaughtException", t.code, t.message, t.stack).catch()
            }), "browser" === process.type) process.on("unhandledRejection", (e, t) => {
                W(e)
            }), d.ipcMain.on(h.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
                return i(this, void 0, void 0, function* () {
                    let t = yield R();
                    e.sender.send(h.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
                })
            }); else if ("browser" !== process.type) {
                window.addEventListener("unhandledrejection", e => {
                    W(e && e.reason || {})
                });
                let e = yield f.asyncRemoteCall.getCurrentWebContents();
                null !== e && void 0 !== e && e.once("did-finish-load", () => {
                    (function () {
                        return i(this, void 0, void 0, function* () {
                            do {
                                if ("browser" === process.type) break;
                                if (null === window.performance.timing || void 0 === window.performance.timing) break;
                                let e = b.iSColdStartUp() ? 1 : 0, t = o.release(), n = window.performance.timing,
                                    i = n.loadEventEnd - n.navigationStart, r = n.fetchStart - n.navigationStart,
                                    s = n.domainLookupEnd - n.domainLookupStart, a = n.connectEnd - n.connectStart,
                                    d = n.responseStart - n.requestStart, c = n.responseEnd - n.responseStart,
                                    u = n.domComplete - n.domLoading, h = yield R();
                                l.XLStatNS.trackEvent(p, "page_load_time", "", 0, 0, 0, 0, `start_type=${h},cold_start_up=${e},os_version=${t},load_time=${i},before_fetch_time=${r},domin_lookup_time=${s},connect_time=${a},first_response_time=${d},responseTime=${c},domTime=${u},process=${m}`)
                            } while (0)
                        })
                    })().catch()
                })
            }
            c.default.hook("beforeLog", (e, t, ...n) => {
                e === c.LogLevel.Critical && l.XLStatNS.trackEvent(p, "critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${n}`)
            })
        })
    }().catch()
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(62), r = n(63), s = n(64), a = n(31), l = n(65), d = n(14), c = i.isPromise,
        u = i.ipcRenderer, h = process.atomBinding("v8_util"), f = new r.default, p = h.createIDWeakMap();

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

    function w(e, t = new Set) {
        const n = e => {
            if (t.has(e)) return {type: "value", value: null};
            let i = e;
            if (Array.isArray(e)) {
                t.add(e);
                let n = {type: "array", value: w(e, t)};
                return t.delete(e), n
            }
            if (ArrayBuffer.isView(i)) return {type: "buffer", value: o.Buffer.from(e)};
            if (e instanceof Date) return {type: "date", value: e.getTime()};
            if (null != e && "object" == typeof e) {
                if (c(e)) return {
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

    function g(e, t, n) {
        c(e) ? e.then(e => {
            t(e)
        }, e => {
            n(e)
        }) : t(e)
    }

    function _(e, t, n, i = !1) {
        const o = t => {
            if (e.hasOwnProperty(t.name) && !i) return;
            let n, o = {enumerable: t.enumerable, configurable: !0};
            if ("method" === t.type) {
                if (t.value.refId) {
                    if (p.has(t.value.refId) && (n = p.get(t.value.refId)), null == n) throw new Error("member refId pointer to null" + t.value.refId + "name: " + t.name)
                } else n = S(t.value, e, t.name);
                o.get = (() => n), o.set = (e => n = e)
            } else "get" === t.type && (o.get = (() => n), t.writable && (o.set = (e => {
                n = e
            })), n = S(t.value));
            Object.defineProperty(e, t.name, o)
        };
        if (Array.isArray(n)) {
            let e = n.length;
            for (let t = 0; t < e; t++) o(n[t])
        }
    }

    function v(e, t, n) {
        if (n) {
            let t = S(n);
            Object.setPrototypeOf(e, t)
        }
    }

    function b(e, t) {
        h.setHiddenValue(e, "__remote_id__", t)
    }

    function y(e) {
        return h.getHiddenValue(e, "__remote_id__")
    }

    function S(e, t, n) {
        const i = {
            value: () => e.value,
            array: () => e.members.map(e => S(e)),
            buffer: () => o.Buffer.from(e.value),
            promise: () => Promise.resolve({then: S(e.then)}),
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
        return e.type in i ? r = i[e.type]() : e.refId ? p.has(e.refId) ? r = p.get(e.refId) : (d.warn("[metaToValue] refId point to null" + e.refId), r = "function" === e.type ? () => {
        } : {}) : e.id ? p.has(e.id) ? (_(r = p.get(e.id), e.id, e.members, !0), v(r, e.id, e.proto)) : (r = "function" === e.type ? t ? function (e, t, n) {
            if (p.has(n.id)) return p.get(n.id);
            let i = y(e), o = function (...e) {
                throw Error("never should come to a proxied function")
            };
            Object.defineProperty(o, "name", {value: t, writable: !1, enumerable: !0});
            let r = new Proxy(o, {
                apply: (e, n, o) => new Promise((e, r) => {
                    let d = y(n);
                    if (d || (d = y(n.__remoteObj_)), !d) throw Error("is this function was a bound function?");
                    let c = a.default.browser.memberCall, h = l.default(c), f = w(o);
                    u.send(c, h, d, i, t, f), s.default.add(h, t => {
                        try {
                            g(S(t), e, r)
                        } catch (e) {
                            r(e)
                        }
                    })
                }), construct: (e, n, o) => new Promise((e, o) => {
                    let r = a.default.browser.memberConstruct, d = l.default(r);
                    u.send(r, d, i, t, w(n)), s.default.add(d, t => {
                        try {
                            let n = S(t);
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
            return b(n, t), new Proxy(n, {
                apply: (e, n, i) => new Promise((e, o) => {
                    let r = a.default.browser.functionCall, d = l.default(r), c = y(n);
                    u.send(r, d, c, t, w(i)), s.default.add(d, t => {
                        try {
                            g(S(t), e, o)
                        } catch (e) {
                            o(e)
                        }
                    })
                }), construct: (e, n, i) => new Promise((e, i) => {
                    let o = a.default.browser.construct, r = l.default(o);
                    u.send(o, r, t, w(n)), s.default.add(r, t => {
                        try {
                            let n = S(t);
                            e(n)
                        } catch (e) {
                            i(e)
                        }
                    })
                })
            })
        }(e) : {}, h.setRemoteObjectFreer(r, e.id), p.set(e.id, r), h.setHiddenValue(r, "__remote_id__", e.id), function (e) {
            let t = y(e);
            Object.defineProperties(e, {
                __set: {
                    enumerable: !1, writable: !1, value: function (n, i) {
                        if ("function" == typeof i) throw new Error("set a function to a remote member is dangerous");
                        return new Promise((o, r) => {
                            let d = a.default.browser.memberSet, c = l.default(d), h = w([i]);
                            u.send(d, c, t, n, h), s.default.add(c, t => {
                                try {
                                    let s = S(t);
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
                            let r = a.default.browser.memberGet, d = l.default(r);
                            u.send(r, d, t, n), s.default.add(d, t => {
                                try {
                                    const r = S(t);
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
                            u.send(i, o, t), s.default.add(o, i => {
                                try {
                                    if (i.id !== t) throw Error("SYNC_RETURN: remote id not match");
                                    let o = S(i);
                                    e(o)
                                } catch (e) {
                                    n(e)
                                }
                            })
                        })
                    }
                }
            })
        }(r), _(r, e.id, e.members), v(r, e.id, e.proto), Object.defineProperty(r.constructor, "name", {value: e.name}), e.extendedMemberNames && e.extendedMemberNames.forEach((e, t) => {
            let n = r[e], i = r.__proto__;
            for (; i;) {
                if (Object.prototype.hasOwnProperty.call(i, e)) {
                    delete i[e];
                    break
                }
                i = i.__proto__
            }
            Object.defineProperty(r, e, {value: n, enumerable: !1, writable: !1, configurable: !0})
        })) : d.error("no id of meta:", e), r
    }

    t.Interest = m;

    class C {
        constructor(...e) {
            if (this.__resolved_ = !1, this.__promise_ = null, this.__remoteObj_ = null, this.__what_ = "", this.__name_ = "", "string" === typeof arguments[0]) {
                let e = arguments[0], t = arguments[1];
                this.__what_ = e, this.__name_ = t || e, this.__resolved_ = !1, this.__remoteObj_ = null, this.__promise_ = new Promise((n, i) => {
                    let o = this.getChannel(e), r = l.default(o);
                    u.send(o, r, t), s.default.add(r, e => {
                        try {
                            let t = S(e);
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

    function T(e, t, n) {
        try {
            s.default.invoke(t, n).remove(t)
        } finally {
            s.default.remove(t)
        }
    }

    u.on(a.default.renderer.requireReturn, T), u.on(a.default.renderer.getBuiltInReturn, T), u.on(a.default.renderer.getGlobalReturn, T), u.on(a.default.renderer.currentWindowReturn, T), u.on(a.default.renderer.currentWebContentsReturn, T), u.on(a.default.renderer.functionCallReturn, T), u.on(a.default.renderer.constructReturn, T), u.on(a.default.renderer.memberCallReturn, T), u.on(a.default.renderer.memberSetReturn, T), u.on(a.default.renderer.memberGetReturn, T), u.on(a.default.renderer.memberConstructReturn, T), u.on(a.default.renderer.callback, (e, t, n) => {
        f.apply(t, S(n))
    }), u.on(a.default.renderer.syncReturn, T), u.on("ELECTRON_RENDERER_RELEASE_CALLBACK", (e, t) => {
        d.info("[RELEASE_CALLBACK]: callbackId:", t), f.remove(t)
    }), process.on("exit", () => {
        u.send(a.default.browser.contextRelease)
    });
    const E = ["__resolve", "__isResolved"], R = ["__promise_", "__resolved_", "__remoteObj_", "__name_", "__what_"],
        M = e => {
            if (!e.__isResolved()) throw Error("Can not access the property of a remote module which has not Resolved yet.")
        };

    function W(e) {
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
            defineProperty: (t, n, i) => (M(e), Reflect.defineProperty(e.__remoteObj_, n, i)),
            get: (t, n, i) => {
                if ("string" == typeof n) {
                    if (String.prototype.includes.call(R, n)) {
                        return e[n]
                    }
                    if (String.prototype.includes.call(E, n)) {
                        return e[n]
                    }
                }
                return M(e), Reflect.get(e.__remoteObj_, n)
            },
            set: (t, n, i, o) => (M(e), Reflect.set(e.__remoteObj_, n, i, o)),
            ownKeys: t => (M(e), Reflect.ownKeys(e.__remoteObj_)),
            apply: (t, n, i) => {
                M(e), Reflect.apply(e.__remoteObj_, n, i)
            },
            construct: (t, n, i) => {
                if (M(e), "function" != typeof e.__remoteObj_) throw Error("operator new ONLY used for function");
                return new Promise((t, i) => {
                    let o = a.default.browser.construct, r = l.default(o),
                        d = h.getHiddenValue(e.__remoteObj_, "__remote_id__");
                    u.send(o, r, d, w(n)), s.default.add(r, e => {
                        try {
                            t(S(e))
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
                let t = y(e);
                t && b(n, t)
            }
        }), n
    }

    t.remoteRequire = function (e) {
        return W(new C("module", e))
    }, t.getBuiltin = function (e) {
        return W(new C("builtin", e))
    }, t.getGlobal = function (e) {
        return W(new C("global", e))
    }, t.getCurrentWindow = function () {
        return W(new C("current_window"))
    }, t.getCurrentWebContents = function () {
        return W(new C("current_web_contents"))
    }
}, function (e, t) {
    e.exports = require("buffer")
}, function (e, t, n) {
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
}, function (e, t, n) {
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
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    let i = 0;
    t.default = function (e) {
        return e ? e.concat(".").concat(String(++i)) : String(++i)
    }
}, function (e, t, n) {
    "use strict";
    const i = n(0), o = n(67), r = n(31), s = n(68), a = n(14), l = i.isPromise, d = i.ipcMain,
        c = process.atomBinding("v8_util");
    let u = c.createDoubleIDWeakMap();
    const h = new o.default;

    function f(e, t, n, i, o, r) {
        let s, l = !1, d = null, c = !1;
        do {
            try {
                s = t[i]
            } catch (e) {
                l = !0
            }
            if (l) try {
                s = n.value[i], l = !1, n.meta.extendedMemberNames.push(i), c = !0
            } catch (e) {
                a.error(`property ${i} untouchable, even try root[name]`)
            }
            if (l) break;
            let o = Object.getOwnPropertyDescriptor(t, i);
            if (void 0 === o) {
                a.warn(`descriptor of property ${i} is undefined`);
                break
            }
            d = {
                name: i,
                enumerable: o.enumerable,
                writable: !1,
                type: "get"
            }, void 0 === o.get && "function" == typeof s ? d.type = "method" : ((o.set || o.writable) && (d.writable = !0), d.type = "get"), c ? (d.configurable = !0, d.value = w(e, s, r, !1, null)) : d.value = w(e, s, r, !1, n)
        } while (0);
        return d
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
        return o = null === r || r === Object.prototype || r === Function.prototype ? null : w(e, r, i, !1, n)
    }

    function w(e, t, n = null, i = !1, o = null) {
        n = null === n ? {} : n;
        const r = {type: typeof t};
        "object" === r.type && (r.type = function (e, t) {
            let n = typeof e;
            if ("object" !== n) throw new Error("incorrect arg at index 0. non-object");
            return null === e ? n = "value" : ArrayBuffer.isView(e) ? n = "buffer" : Array.isArray(e) ? n = "array" : e instanceof Error ? n = "error" : e instanceof Date ? n = "date" : l(e) ? n = "promise" : Object.prototype.hasOwnProperty.call(e, "callee") && null != e.length ? n = "array" : t && c.getHiddenValue(e, "simple") && (n = "value"), n
        }(t, i));
        do {
            if ("object" === r.type || "function" === r.type) {
                let i = h.getIdOfObject(t);
                if (i && n[i]) {
                    r.refId = i, h.add(e, t);
                    break
                }
            }
            "array" === r.type ? r.members = t.map(t => w(e, t, n)) : "object" === r.type || "function" === r.type ? (null == o && (r.extendedMemberNames = [], o = {
                value: t,
                meta: r
            }), r.name = t.constructor ? t.constructor.name : "", r.id = h.add(e, t), n[r.id] = !0, r.members = p(e, t, o, n), r.proto = m(e, t, o, n)) : "buffer" === r.type ? r.value = Buffer.from(t) : "promise" === r.type ? (t.then(function () {
            }, function () {
            }), r.then = w(e, function (e, n) {
                t.then(e, n)
            })) : "error" === r.type ? (r.members = g(t), r.members.push({
                name: "name",
                value: t.name
            })) : "date" === r.type ? r.value = t.getTime() : (r.type = "value", r.value = t)
        } while (0);
        return r
    }

    function g(e) {
        return Object.getOwnPropertyNames(e).map(t => ({name: t, value: e[t]}))
    }

    function _(e, t) {
        const n = function (t) {
            let o, s, l = 0, d = 0;
            switch (t.type) {
                case"value":
                    return t.value;
                case"remote-object":
                    return h.get(t.id);
                case"array":
                    return _(e, t.value);
                case"buffer":
                    return Buffer.from(t.value);
                case"date":
                    return new Date(t.value);
                case"promise":
                    return Promise.resolve({then: n(t.then)});
                case"object":
                case"interest": {
                    let e = {};
                    for (Object.defineProperty(e.constructor, "name", {value: t.name}), l = 0, d = (s = t.members).length; l < d; l++) e[(o = s[l]).name] = n(o.value);
                    return e
                }
                case"function": {
                    const n = e.id, o = [n, t.id];
                    if (a.info("renderer function id:" + o), u.has(o)) return u.get(o);
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
                        }(t, l, s) : e.send(r.default.renderer.callback, t.id, w(e, l))
                    };
                    return Object.defineProperty(s, "length", {value: t.length}), c.setRemoteCallbackFreer(s, t.id, e), u.set(o, s), s
                }
                default:
                    throw new TypeError(`Unknown type: ${t.type}`)
            }
        };
        return t.map(n)
    }

    function v(e, t, n, i) {
        let o, r;
        try {
            return t.apply(n, i)
        } catch (e) {
            return r = t.name, new Error(`Could not call remote function '${o = null != r ? r : "anonymous"}'. Check that the function signature is correct. Underlying error: ${e.message}`)
        }
    }

    function b(e) {
        return {type: "exception", message: e.message, stack: e.stack || e}
    }

    function y(e) {
        const t = new Error(e);
        throw Object.defineProperty(t, "code", {value: "EBADRPC"}), Object.defineProperty(t, "errno", {value: -72}), t
    }

    var S;
    !function (e) {
        const t = (e, t, ...n) => {
            const i = e.sender;
            i.isDestroyed() ? a.warn("webcontext is destroyed, id=", i.id) : i.send(t, ...n)
        };
        e.startServer = function () {
            d.on(r.default.browser.require, (e, n, i) => {
                a.info(`[REQUIRE] module=${i} `);
                let o = process.mainModule.require(i), s = w(e.sender, o);
                t(e, r.default.renderer.requireReturn, n, s)
            }), d.on(r.default.browser.builtIn, (e, n, o) => {
                a.info(`[BUILTIN]: property=${o} `);
                let s = i[o], l = w(e.sender, s);
                a.info(`[BUILTIN]: returns remoteId:${l.id}, type: ${typeof s}`), t(e, r.default.renderer.getBuiltInReturn, n, l)
            }), d.on(r.default.browser.global, (e, n, i) => {
                a.info(`[GLOBAL]: proerty:${i} `);
                let o, s = global[i];
                o = w(e.sender, s), a.info(`[GLOBAL]: returns remoteid=${o.id}, obj=` + typeof s), t(e, r.default.renderer.getGlobalReturn, n, o)
            }), d.on(r.default.browser.currentWindow, (e, n, i) => {
                a.info(`[CURRENT_WINDOW]: property=${i} `);
                let o = e.sender.getOwnerBrowserWindow.call(e.sender), s = w(e.sender, o);
                a.info(`[CURRENT_WINDOW]: returns remoteid=${s.id}, obj=` + o), t(e, r.default.renderer.currentWindowReturn, n, s)
            }), d.on(r.default.browser.currentWebContents, (e, n, i) => {
                t(e, r.default.renderer.currentWebContentsReturn, n, w(e.sender, e.sender))
            });
            const e = (e, t) => {
                const n = (t, n) => {
                    t && Object.getOwnPropertyNames(t).forEach(i => {
                        n ? e.once(i, t[i]) : e.on(i, t[i])
                    })
                };
                t.on && n(t.on, !1), t.once && n(t.once, !0)
            };
            d.on(r.default.browser.construct, (n, i, o, s) => {
                let l, d = null;
                try {
                    a.info(`[CONSTRUCTOR]: remoteId=${o} `);
                    let c = s.length > 0 ? s[s.length - 1] : null;
                    s = _(n.sender, s);
                    let u = h.get(o);
                    null == u && y(`Cannot call constructor on missing remote object ${o}`), c && "interest" === c.type && (d = s.pop());
                    let f = new (Function.prototype.bind.apply(u, [null].concat(s)));
                    f && d && e(f, d), l = w(n.sender, f, null, !1), a.info(`[CONSTRUCTOR]: returns remoteId =${l.id} name=${u.name} `)
                } catch (e) {
                    l = b(e)
                } finally {
                    t(n, r.default.renderer.constructReturn, i, l)
                }
            }), d.on(r.default.browser.functionCall, function (e, n, i, o, s) {
                let l;
                try {
                    a.info(`[FUNCTION_CALL]: remoteId=${o}`), s = _(e.sender, s);
                    let d = h.get(o);
                    if (null == d) a.error(`Cannot call function on missing remote object ${o}`), l = w(e.sender, void 0); else {
                        let t = i ? h.get(i) : global;
                        if (t) {
                            let n = v(0, d, t, s);
                            l = w(e.sender, n)
                        } else a.error(`Cannot call function(${o}) on missing context(${i})`), l = w(e.sender, void 0)
                    }
                    a.info(`[FUNCTION_CALL]: name=${d.name}`)
                } catch (e) {
                    l = b(e)
                } finally {
                    t(e, r.default.renderer.functionCallReturn, n, l)
                }
            }), d.on(r.default.browser.memberCall, function (e, n, i, o, s, l) {
                let d;
                a.info(`[MEMBER_CALL]: thisArg=${i}, remoteId=${o}, method=${s}, args count=${l.length}`);
                try {
                    l = _(e.sender, l);
                    let c = h.get(o);
                    null == c && y(`Cannot call function '${s}' on missing remote object ${o}`);
                    let u = i ? h.get(i) : c;
                    if (u) {
                        let t = v(0, c[s], u, l);
                        d = w(e.sender, t), a.info("[MEMBER_CALL]: return=" + t)
                    } else d = w(e.sender, void 0)
                } catch (e) {
                    d = b(e)
                } finally {
                    t(e, r.default.renderer.memberCallReturn, n, d)
                }
            }), d.on(r.default.browser.memberGet, function (e, n, i, o) {
                let s;
                try {
                    a.info(`[MEMBER_GET]: remoteId=${i}, property=`, o);
                    let l = h.get(i);
                    null == l && y(`Cannot get property '${Object.toString.call(o)}' on missing remote object ${i}`);
                    let d = l[o];
                    s = w(e.sender, d)
                } catch (e) {
                    s = b(e)
                } finally {
                    t(e, r.default.renderer.memberGetReturn, n, s)
                }
            }), d.on(r.default.browser.memberSet, function (e, n, i, o, s) {
                try {
                    a.info(`[MEMBER_SET]: remoteId=${i}, property=` + o), s = _(e.sender, s);
                    let l = h.get(i);
                    null == l && y(`Cannot set property '${Object.toString.call(o)}' on missing remote object ${i}`), l[o] = s[0], t(e, r.default.renderer.memberSetReturn, n, {
                        type: "value",
                        value: !0
                    })
                } catch (i) {
                    t(e, r.default.renderer.memberSetReturn, n, b(i))
                }
            }), d.on(r.default.browser.memberConstruct, function (n, i, o, s, l) {
                let d, c = null;
                try {
                    a.info(`[MEMBER_CONSTRUCTOR]: regId=${o}, method=${s}`);
                    let u = l.length > 0 ? l[l.length - 1] : null;
                    l = _(n.sender, l);
                    let f = h.get(o);
                    null == f && y(`Cannot call constructor '${s}' on missing remote object ${o}`), u && "interest" === u.type && (c = l.pop());
                    let p = f[s], m = new (Function.prototype.bind.apply(p, [null].concat(l)));
                    m && c && e(m, c), d = w(n.sender, m)
                } catch (e) {
                    d = b(e)
                } finally {
                    t(n, r.default.renderer.memberConstructReturn, i, d)
                }
            }), d.on(r.default.browser.sync, function (e, n, i) {
                let o = h.get(i);
                t(e, r.default.renderer.syncReturn, n, w(e.sender, o))
            }), d.on("ELECTRON_BROWSER_DEREFERENCE", function (e, t) {
                let n = h.get(t);
                if (n) {
                    let i = n.name;
                    i || (i = n.constructor ? n.constructor.name : ""), h.remove(e.sender.id, t)
                } else t < 0 && a.warn("remote id reference to nothing:", t)
            }), d.on(r.default.browser.contextRelease, e => {
                h.clear(e.sender.id)
            })
        }, e.getObjectRegistry = function () {
            return h
        }
    }(S || (S = {})), e.exports = S
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(14), o = -1 * Math.pow(2, 31), r = process.atomBinding("v8_util");
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
}, function (e, t, n) {
    "use strict";
    var i;
    !function (e) {
        e.propertiesOfFunction = ["length", "name", "arguments", "caller", "prototype", "apply", "bind", "call", "toString"]
    }(i || (i = {})), e.exports = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), n(28), ("browser" === process.type ? global.xlDesktopApplicationSolution : window.xlDesktopApplicationSolution).GetPerformanceMonitorReport().initPerformanceMonitor("", {
        mainLoopHangCheckEnabled: !0,
        cpuUsageCheckEnabled: !0,
        memoryUsageCheckEnabled: !0
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(2), o = n(1), r = n(3).default(o.join(__rootDir, "../bin/ThunderHelper.node")),
        s = i.default.getLogger("HistoryDataNS");
    let a = o.resolve(__profilesDir, "mainWndData.ini"), l = 960, d = 640;
    !function (e) {
        e.getMainWndSizeHistoryData = function () {
            let e = null;
            s.information(a);
            let t = r.readINI(a, "MainBody", "ExitState"), n = r.readINI(a, "MainBody", "MainWndLastWidth"),
                i = r.readINI(a, "MainBody", "MainWndLastHeight");
            if (s.information(t, n, i), "" !== n && "" !== i) {
                let o = Number(n), r = Number(i);
                (o < l || r < d) && (o = l, r = d), (e = {}).width = o, e.height = r, e.exitState = t
            }
            return null === e && ((e = {}).exitState = "normal", e.width = l, e.height = d), e
        }, e.setExitType = function (e) {
            r.writeINI(a, "MainBody", "ExitType", e)
        }, e.getExitType = function () {
            return r.readINI(a, "MainBody", "ExitType")
        }
    }(t.HistoryDataNS || (t.HistoryDataNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(2), o = n(12), r = n(7), s = i.default.getLogger("Thunder.Main");
    let a = null, l = 0, d = void 0;

    function c(e, t) {
        let n = "status=smallwindow";
        e && (n = "status=bigwindow"), o.XLStatNS.trackEvent("core_event", "main_effective_show", "", 0, 0, 0, 0, n), l = a.getTickCount(), t && t.webContents.send("main-window-state-active-show")
    }

    function u() {
        do {
            if (0 === l) {
                s.information("window online stat not yet shown");
                break
            }
            let e = a.getTickCount();
            if (e < l) break;
            let t = (e - l) / 1e3, n = "online_time=" + t;
            l = 0, s.information("window online stat ", t), o.XLStatNS.trackEvent("core_event", "main_effective_online_time", "", 0, 0, 0, 0, n)
        } while (0)
    }

    function h(e) {
        let t = new Date;
        e.webContents.send(r.ThunderChannelList.channelMRShowOrHideWindow, "show", t.getTime())
    }

    function f(e) {
        let t = new Date;
        e.webContents.send(r.ThunderChannelList.channelMRShowOrHideWindow, "hide", t.getTime())
    }

    !function (e) {
        e.watch = function (e, t) {
            a = e, t.on("show", () => {
                t.webContents.send(r.ThunderChannelList.channelMRMainWndRestore), "" !== d && (c(t.isMaximized(), t), h(t)), d = ""
            }), t.on("restore", () => {
                t.webContents.send(r.ThunderChannelList.channelMRMainWndRestore), "minimize" !== d && "hide" !== d || (s.information("窗口展示上报resotre window show stat"), c(t.isMaximized(), t), h(t)), d = ""
            }), t.on("maximize", () => {
                t.webContents.send(r.ThunderChannelList.channelMRMainWndMax), "minimize" !== d && "hide" !== d || (s.information("窗口展示上报maximize window show stat"), c(t.isMaximized(), t), h(t)), d = ""
            }), t.on("hide", () => {
                t.webContents.send(r.ThunderChannelList.channelMRMainWndMin), d = "hide", u(), f(t)
            }), t.on("minimize", () => {
                t.webContents.send(r.ThunderChannelList.channelMRMainWndMin), d = "minimize", u(), f(t)
            })
        }, e.onExit = function () {
            u()
        }
    }(t.MainWindowCoreEventStatNS || (t.MainWindowCoreEventStatNS = {}))
}, function (e, t, n) {
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
    const o = n(0), r = n(6), s = n(33), a = n(5);
    let l = {};

    function d(e, t = {}, n, i) {
        let s = Object.assign({
            width: 400,
            height: 174,
            frame: !1,
            resizable: !1,
            maximizable: !1,
            minimizable: !1,
            parent: n,
            show: !1,
            modal: !0,
            alwaysOnTop: !0,
            webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
        }, t);
        if (s.modal && l.confirm) return;
        s.modal && (l.confirm = !0);
        let a = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
        a += `?boxId=${e}`;
        let d = new o.BrowserWindow(s);
        d.loadURL(a), d.on("ready-to-show", () => {
            d.setAlwaysOnTop(!1), r.roundRectWindow(d, n)
        }), d.on("close", () => {
            l.confirm = !1, n.focus()
        })
    }

    t.initMessageBox = function (e, t) {
        const n = {};
        let i = new Map;
        o.ipcMain.on("message-box-confirm-create", (t, n) => {
            let i = e;
            if (n.options.parentId) {
                let e = o.BrowserWindow.fromId(n.options.parentId);
                e && (i = e)
            }
            d(n.boxId, Object.assign({}, n.dialogConf, {
                width: n.options.windowWidth,
                height: n.options.windowHeight
            }), i)
        }), o.ipcMain.on("message-box-pop-create", (t, n) => {
            let i = s.MessageBoxNS.Action.Unknow, a = e;
            if (n.parentId) {
                let e = o.BrowserWindow.fromId(n.parentId);
                e && (a = e)
            }
            let d = Object.assign({
                frame: !1,
                resizable: !1,
                maximizable: !1,
                minimizable: !1,
                parent: a,
                show: !1,
                modal: !0,
                alwaysOnTop: !0,
                webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
            }, n.dialogConf);
            if (d.modal && l.pop) return;
            d.modal && (l.pop = !0);
            let c = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
            c += `?boxId=${n.boxId}`;
            let u = new o.BrowserWindow(d);
            u.loadURL(c), u.on("ready-to-show", () => {
                u.setAlwaysOnTop(!1), r.roundRectWindow(u, a)
            }), u.on("close", () => {
                l.pop = !1, a.focus(), i === s.MessageBoxNS.Action.Unknow && u.webContents.send("message-box-resolve-systemmenu")
            }), o.ipcMain.once(`message-box-resolve-${n.boxId}`, (e, t, n) => {
                i = t
            })
        }), o.ipcMain.on("message-box-custom-create", (t, d) => {
            let c = s.MessageBoxNS.Action.Unknow, u = e;
            if (a.isNumber(d.options.parentId)) {
                let e = o.BrowserWindow.fromId(d.options.parentId);
                e && (u = e)
            }
            let h = Object.assign({
                width: 300,
                height: 100,
                frame: !1,
                resizable: !1,
                maximizable: !1,
                minimizable: !1,
                parent: u,
                show: !1,
                modal: !0,
                alwaysOnTop: !1,
                webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
            }, d.dialogConf);
            if (h.modal && l[d.popType]) return;
            if (h.modal && (l[d.popType] = !0), d.options.singleton) {
                if (i.get(d.popType)) return;
                i.set(d.popType, !0)
            }
            let f = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
            f += `?boxId=${d.boxId}`;
            let p = new o.BrowserWindow(h);
            p.loadURL(f), p.on("ready-to-show", () => {
                p.setAlwaysOnTop(!1), r.roundRectWindow(p, e)
            }), p.on("close", () => {
                l[d.popType] = !1, d.options.singleton && i.set(d.popType, !1), e.focus(), c === s.MessageBoxNS.Action.Unknow && p.webContents.send("message-box-resolve-systemmenu")
            }), n[d.popType] = p, o.ipcMain.once(`message-box-resolve-${d.boxId}`, (e, t, n) => {
                c = t
            })
        }), o.ipcMain.on("message-box-individuation-create", (t, a) => {
            let d = s.MessageBoxNS.Action.Unknow, c = void 0, u = Object.assign({
                width: 300,
                height: 100,
                frame: !1,
                resizable: !1,
                maximizable: !1,
                minimizable: !1,
                parent: e,
                show: !1,
                modal: !0,
                alwaysOnTop: !1,
                webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
            }, a.dialogConf);
            if (u.modal && l[a.popType]) return;
            if (u.modal && (l[a.popType] = !0), a.options.singleton) {
                if (i.get(a.popType)) return;
                i.set(a.popType, !0)
            }
            let h = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
            h += `?boxId=${a.boxId}`;
            let f = new o.BrowserWindow(u);
            f.loadURL(h), f.on("ready-to-show", () => {
                f.setAlwaysOnTop(!1), r.roundRectWindow(f, e)
            }), f.on("close", () => {
                l[a.popType] = !1, a.options.singleton && i.set(a.popType, !1), e.focus(), d === s.MessageBoxNS.Action.Unknow && f.webContents.send("message-box-resolve-systemmenu"), e.webContents.send(`message-box-resolve-${a.boxId}`, d, c)
            }), n[a.popType] = f, o.ipcMain.once(`message-box-resolve-${a.boxId}`, (e, t, n) => {
                d = t, c = n
            })
        }), o.ipcMain.on("message-box-open", (e, t) => {
            const i = t.name, o = t.position;
            n[i] && (o && n[i].setPosition(o.x, o.y), n[i].show())
        })
    }, t.confirm = function (e, t, n, r) {
        return i(this, void 0, void 0, function* () {
            let i = String(Math.random()).replace(/\D/, "");
            return o.ipcMain.once(`message-box-init-${i}`, t => {
                t.sender.send("message-box-init-reply", {popType: "confirm", options: e})
            }), d(i, Object.assign({}, t, {width: e.windowWidth, height: e.windowHeight}), n), new Promise(e => {
                o.ipcMain.once(`message-box-resolve-${i}`, (t, n, i) => {
                    e({action: n, checkboxChecked: i})
                })
            })
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(6);
    t.default = function (e) {
        i.ipcMain.on("create-notify-window", (e, t) => {
            {
                let n = i.screen.getPrimaryDisplay().workArea, r = new i.BrowserWindow({
                    width: t.width || 440,
                    height: t.height || 245,
                    x: n.width - (t.width || 440),
                    y: n.height - (t.height || 245),
                    frame: !1,
                    resizable: !1,
                    show: !1,
                    alwaysOnTop: !0,
                    skipTaskbar: !0
                });
                r.once("ready-to-show", () => {
                    o.roundRectWindow(r, null, !1, !1)
                }), e.sender.send("notify-window-created", r.id)
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(2), r = n(7), s = n(6), a = n(15), l = o.default.getLogger("SearchWindows");
    let d = null, c = null;
    t.default = function (e, t) {
        (c = e).on("hide", () => {
            d && d.close()
        }), c.on("resize", () => {
            d && d.close()
        }), i.ipcMain.on(r.ThunderChannelList.channelRMCreateSearchWindow, (n, o, r, u, h) => {
            do {
                if (null !== d) break;
                const n = "development" === process.env.RUN_ENV ? "http://localhost:9080/search-renderer/" : `file:///${__dirname}/search-renderer/index.html`;
                let f = c.getBounds(), p = (d = new i.BrowserWindow({
                    x: f.x + o,
                    y: f.y + r,
                    width: u,
                    height: 246,
                    parent: e,
                    frame: !1,
                    resizable: !1,
                    minimizable: !1,
                    alwaysOnTop: !1,
                    show: !1,
                    backgroundColor: "#FFF",
                    webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
                })).getNativeWindowHandle().readUIntLE(0, 4);
                t.modifyStyle(p, a.WindowStyle.WS_THICKFRAME, 0), t.modifyStyleEx(p, 0, a.WindowStyleEx.WS_EX_TOOLWINDOW), d.loadURL(n), d.once("show", () => {
                    l.information("search show......"), s.roundRectWindow(d, e)
                }), d.on("blur", () => {
                    d.close()
                }), d.on("closed", () => {
                    d = null
                }), d.on("ready-to-show", () => {
                    h && d.showInactive()
                })
            } while (0)
        }), i.ipcMain.on(r.ThunderChannelList.channelRMShowSearchWindow, (e, t) => {
            do {
                if (!d) break;
                t ? d.showInactive() : d.hide()
            } while (0)
        }), i.ipcMain.on(r.ThunderChannelList.channelRMClickMouse, (t, n, o, s, a, l, u) => {
            if (null !== d) {
                let t = i.screen.getCursorScreenPoint(), h = i.screen.getDisplayNearestPoint(t).scaleFactor;
                n = Math.round(n / h), o = Math.round(o / h);
                let f = c.getBounds();
                (n < f.x + s || n > f.x + l || o < f.y + a || o > f.y + u) && (e.webContents.send(r.ThunderChannelList.channelMRSearchBarFocusChange, !1), d.close())
            }
        }), i.ipcMain.on(r.ThunderChannelList.channelRMSelectAddressDropItem, (t, n) => {
            e && e.webContents.send(r.ThunderChannelList.channelMRFWSelectAddressDropItem, n)
        }), i.ipcMain.on(r.ThunderChannelList.channelRMAddressDropWndKeyDown, (t, n) => {
            e && e.webContents.send(r.ThunderChannelList.channelMRFWAddressDropWndKeyDown, n)
        }), i.ipcMain.on(r.ThunderChannelList.channelRMAddressKeyDown, (e, t) => {
            d && d.isVisible() && d.webContents.send(r.ThunderChannelList.channelMRFWAddressKeyDown, t)
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(2).default.getLogger("path-selector");
    let r = {};
    const s = 229;
    t.default = function () {
        i.ipcMain.on("dropdown-file-window-create", (e, t, n) => {
            do {
                let e = i.BrowserWindow.fromId(t);
                if (!e) break;
                if (r.hasOwnProperty(String(t))) {
                    o.information("create window but exist");
                    break
                }
                let a = new i.BrowserWindow({
                    frame: !1,
                    resizable: !1,
                    minimizable: !1,
                    parent: e,
                    show: !1,
                    width: 400,
                    height: s
                });
                r[t] = a, a.on("ready-to-show", () => {
                    a.webContents.send("dropdown-file-window-created", n)
                }), e.on("close", () => {
                    o.information("parent close"), a.close()
                }), a.on("close", () => {
                }), a.on("closed", () => {
                    delete r[t]
                }), a.on("blur", () => {
                    a.hide()
                });
                const l = "development" === process.env.RUN_ENV ? "http://localhost:9080/dropdown-file-renderer/" : `file:///${__dirname}/dropdown-file-renderer/index.html`;
                a.loadURL(l)
            } while (0)
        }), i.ipcMain.on("dropdown-file-window-show", (e, t, n, s, a, l) => {
            do {
                let e = i.BrowserWindow.fromId(t);
                if (r.hasOwnProperty(String(t))) {
                    let d = r[t];
                    if (!n) {
                        d.hide();
                        break
                    }
                    a && d.webContents.send("dropdown-file-window-update-options", a, l);
                    let c = null;
                    try {
                        c = JSON.parse(s)
                    } catch (e) {
                        o.error(e)
                    }
                    if (!c) break;
                    let u = i.screen.getCursorScreenPoint(), h = i.screen.getDisplayNearestPoint(u).workAreaSize.height,
                        f = e.getBounds(), p = d.getSize(), m = f.y + c.bottom;
                    o.information("show dropdown", m, p[1], h), m + p[1] > h && (m = f.y + c.top - p[1]), d.setBounds({
                        x: Math.floor(f.x + c.left),
                        y: Math.floor(m),
                        width: Math.floor(c.width),
                        height: Math.floor(p[1])
                    }), o.information("show dropdown setBounds", p[1]), d.show(), d.focus()
                } else o.error("show dropdown window but doesnot created")
            } while (0)
        }), i.ipcMain.on("dropdown-file-window-select", (e, t, n, o, s, a) => {
            let l = i.BrowserWindow.fromId(t);
            for (let e in r) if (r[e] === l) {
                let t = i.BrowserWindow.fromId(Number(e));
                t.webContents.send("dropdown-file-window-select", n, o, s, a), t.focus();
                break
            }
        }), i.ipcMain.on("dropdown-file-window-click-hide", (e, t) => {
            let n = i.BrowserWindow.fromId(t);
            n.hide();
            for (let e in r) if (r[e] === n) {
                i.BrowserWindow.fromId(Number(e)).focus();
                break
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(6);
    t.default = function (e, t) {
        i.ipcMain.on("embedded-browser-create", (t, n, r) => {
            let s = e, a = i.BrowserWindow.fromId(n);
            null === a || void 0 === a || a.isDestroyed() || (a.on("ready-to-show", () => {
                r && (s = null);
                try {
                    let e = i.nativeImage.createFromPath(`${__rootDir}/static/thunderx.ico`);
                    a.setIcon(e)
                } catch (e) {
                }
                o.roundRectWindow(a, s)
            }), a.on("close", () => {
                s && s.focus()
            }))
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(5), r = n(6);
    t.default = function (e, t) {
        i.ipcMain.on("create-shadow-window", (t, n, s, a, l, d) => {
            let c = null, u = i.BrowserWindow.fromId(n);
            c = o.isNumber(s) ? i.BrowserWindow.fromId(s) : e, o.isBoolean(a) || (a = !0), o.isBoolean(l) || (l = !0), o.isNumber(d) || (d = 16), null === u || void 0 === u || u.isDestroyed() || u.once("ready-to-show", () => {
                r.roundRectWindow(u, c, a, l, d)
            })
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(5), r = n(2), s = n(8), a = n(17), l = n(34), d = n(35), c = n(79), u = n(6), h = n(12),
        f = r.default.getLogger("LoginUI");
    t.loginUIObj = new class {
        constructor() {
            this.retryLoginWnd = null, this.loginWnd = null, this.thunderHelperObj = null, this.parentWnd = null, this.loginWndDefaultWidth = 300, this.loginWndDefaultHeight = 440, this.isShowLoginWnd = !1
        }

        init(e, t) {
            this.parentWnd = e, this.thunderHelperObj = t, i.ipcMain.on(c.NodeEventMesssageNS.eventLoginWndCreate, (e, t, n, i, o, r) => {
                this.createLoginWnd(t, n, i, o, r)
            }), i.ipcMain.on(c.NodeEventMesssageNS.eventLoginWndShow, (e, t, n, i, o, r) => {
                let s = this.updateLoginWnd(t, n, i, o, r);
                e.sender.send(c.NodeEventMesssageNS.eventLoginWndShowResult, s)
            }), i.ipcMain.on(c.NodeEventMesssageNS.eventLoginWndClose, (e, t) => {
                this.closeLoginWnd(t)
            }), i.ipcMain.on(c.NodeEventMesssageNS.eventRetryLoginWndCreate, (e, t, n) => {
                this.createRetryLoginWnd(t, n)
            }), i.ipcMain.on(c.NodeEventMesssageNS.eventModifierUserinfoWndCreate, (e, t) => {
                this.createModifierUserInfoWnd(t)
            }), i.ipcMain.on("create-personal-info-window", (e, t, n, i) => {
                let o = this.createPersonalInfoWnd(t, n, i);
                o.on("ready-to-show", () => {
                    e.sender.isDestroyed() || e.sender.send("personal-info-window-ready-to-show", o.id)
                }), e.sender.isDestroyed() || e.sender.send("personal-info-window-created", o.id)
            })
        }

        createLoginWnd(e, t, n, r, c) {
            if (f.information("create loginwnd:", e, t, n, r, c, this.loginWnd), null !== this.loginWnd && void 0 !== this.loginWnd && !this.loginWnd.isDestroyed()) return f.information("createLoginWnd: 登陆框已经存在"), void (!0 === this.isShowLoginWnd && (this.loginWnd.show(), a.ToolsUtilitiesAWNS.setForegroundWindow(this.thunderHelperObj, this.loginWnd).catch()));
            if (o.isNullOrUndefined(e) || o.isNullOrUndefined(t)) f.information("createLoginWnd: 参数有问题"); else if (t = "file:///" + t, o.isNullOrUndefined(r) && (r = 300), o.isNullOrUndefined(c) && (c = 440), this.loginWndDefaultWidth = r, this.loginWndDefaultHeight = c, this.loginWnd = new i.BrowserWindow({
                width: this.loginWndDefaultWidth,
                height: this.loginWndDefaultHeight,
                modal: !1,
                resizable: !1,
                minimizable: !1,
                frame: !1,
                parent: this.parentWnd,
                show: !1,
                alwaysOnTop: !0,
                webPreferences: {webSecurity: !1, preload: `${__rootDir}/out/common-preload.js`}
            }), null !== this.loginWnd) {
                if (this.isShowLoginWnd = !1, this.loginWnd.loadURL(t), l.ThunderWindowNS.centerWnd(this.loginWnd, this.parentWnd, this.thunderHelperObj), null !== n && void 0 !== n && "" !== n) {
                    let e = `logfrom=${n}`;
                    h.XLStatNS.trackEvent("user_info", "loginpanel_show", "", 0, 0, 0, 0, e)
                }
                this.loginWnd.on("close", () => {
                    s.client.callServerFunction("ClosePopMutual", d.PopView.LOGIN).catch()
                }), this.loginWnd.once("show", () => {
                    u.roundRectWindow(this.loginWnd, this.parentWnd)
                }), this.loginWnd.once("closed", () => {
                    f.information("loginWnd closed");
                    do {
                        if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                        this.parentWnd.focus()
                    } while (0);
                    this.loginWnd = null, this.isShowLoginWnd = !1
                })
            }
        }

        closeLoginWnd(e) {
            f.information("closeLoginWnd:", e), null === this.loginWnd || void 0 === this.loginWnd || this.loginWnd.isDestroyed() || this.loginWnd.close()
        }

        updateLoginWnd(e, t, n, i, o) {
            let r = !1;
            do {
                if (f.information("updateLoginWnd:", e, t, n, i, this.loginWnd), null === this.loginWnd || void 0 === this.loginWnd || this.loginWnd.isDestroyed()) {
                    f.information("updateLoginWnd:不显示登陆框 this.loginWnd 存在问题");
                    break
                }
                if (!0 === this.isShowLoginWnd) {
                    f.information("updateLoginWnd:登陆框已经处于显示状态");
                    break
                }
                e ? (f.information("updateLoginWnd:显示登陆框"), this.isShowLoginWnd = !0, (this.parentWnd.isMinimized() || !1 === this.parentWnd.isVisible()) && (this.parentWnd.isMinimized() && this.parentWnd.restore(), this.parentWnd.show()), this.loginWnd.show(), r = !0, a.ToolsUtilitiesAWNS.setForegroundWindow(this.thunderHelperObj, this.loginWnd).catch()) : this.loginWnd.hide()
            } while (0);
            return r
        }

        createRetryLoginWnd(e, t) {
            let n = 0, o = 0;
            if ("userAvatar" === e) {
                let e = null;
                e = this.parentWnd.getBounds();
                let t = this.parentWnd.getContentSize();
                e.x < 0 || e.y < 0 ? e.width > t[0] && e.height > t[1] ? (n = e.x + Math.round((e.width - t[0]) / 2), o = e.y + Math.round((e.height - t[1]) / 2) - 1) : (n = -1, o = -1) : (n = e.x, o = e.y), f.information("createRetryLoginWnd:", e, t)
            }
            if (null === this.retryLoginWnd) {
                const e = "development" === process.env.RUN_ENV ? "http://localhost:9080/retry-login-renderer/" : `file:///${__dirname}/retry-login-renderer/index.html`;
                this.retryLoginWnd = new i.BrowserWindow({
                    x: n + 15,
                    y: o + 49,
                    width: 246,
                    height: 112,
                    frame: !1,
                    resizable: !1,
                    minimizable: !1,
                    parent: this.parentWnd,
                    show: !1,
                    modal: !1,
                    alwaysOnTop: !0,
                    webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
                }), this.retryLoginWnd.loadURL(e), this.retryLoginWnd.on("ready-to-show", () => {
                    this.retryLoginWnd.webContents.send("onSendData", t)
                }), this.retryLoginWnd.on("close", () => {
                    do {
                        if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                        this.parentWnd.focus()
                    } while (0)
                }), this.retryLoginWnd.on("hide", () => {
                    do {
                        if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                        this.parentWnd.focus()
                    } while (0)
                }), this.retryLoginWnd.on("closed", () => {
                    this.retryLoginWnd = null
                })
            } else this.retryLoginWnd.setBounds({
                x: n + 15,
                y: o + 49,
                width: 246,
                height: 112
            }, !1), this.retryLoginWnd.webContents.send("onSendData", t)
        }

        createModifierUserInfoWnd(e) {
            const t = "development" === process.env.RUN_ENV ? "http://localhost:9080/modifier-userinfo-renderer/" : `file:///${__dirname}/modifier-userinfo-renderer/index.html`;
            let n = new i.BrowserWindow(Object.assign({
                width: 400,
                height: 474,
                frame: !1,
                resizable: !1,
                minimizable: !1,
                parent: this.parentWnd,
                show: !1,
                modal: !0,
                center: !0,
                webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
            }));
            n.loadURL(t), n.on("ready-to-show", () => {
                u.roundRectWindow(n, this.parentWnd), n.show()
            }), n.on("closed", () => {
                do {
                    if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                    this.parentWnd.focus()
                } while (0)
            })
        }

        createPersonalInfoWnd(e, t, n) {
            let o = "development" === process.env.RUN_ENV ? "http://localhost:9080/personal-info-renderer/" : `file:///${__dirname}/personal-info-renderer/index.html`;
            o = `${o}?logined=${n ? 1 : 0}`;
            let r = this.parentWnd, s = r.getBounds(), a = r.getContentSize();
            (s.x < 0 || s.y < 0) && (s.width >= a[0] && s.height >= a[1] ? (s.x = s.x + Math.round((s.width - a[0]) / 2), s.y = s.y + Math.round((s.height - a[1]) / 2) - 1) : (s.x = -1, s.y = -1)), f.information("updatePersonalInfoWnd:", s, a, e);
            let l = new i.BrowserWindow({
                x: s.x + 100,
                y: s.y + 48,
                width: 270,
                height: 370,
                frame: !1,
                resizable: !1,
                minimizable: !1,
                parent: r,
                show: !1,
                modal: !1,
                webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
            });
            return i.ipcMain.once("personal-info-init", n => {
                f.information("personal-info-init");
                try {
                    n.sender.send("personal-info-init-reply", e, t)
                } catch (e) {
                    f.warning("err", e)
                }
            }), l.on("ready-to-show", () => {
            }), l.once("show", () => {
                u.roundRectWindow(l, this.parentWnd)
            }), l.on("closed", () => {
                this.parentWnd.isMinimized() && this.parentWnd.restore(), this.parentWnd.focus()
            }), l.loadURL(o), l
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.eventPluginLoderPluginReady = "event_plugin_loader_plugin_ready", e.eventDownloadItemActive = "event_download_item_active", e.eventDownloadItemChosen = "event_download_item_chosen", e.eventDetailSwitch2Index = "event_detail_switch_to_index", e.eventDownloadSwitchCategory = "event_download_switch_category", e.evetDownloadMove2Tail = "event_download_move_to_tail", e.eventBringMainWindowToTop = "event_bring_main_window_to_top", e.eventDownloadContextMenuClick = "event_download_context_menu_click", e.eventOnCommand = "event_on_command", e.eventOnCommandline = "event_on_command_line", e.eventDownloadKernelInitEnd = "event_dk_init_end", e.eventDownloadSDKRecover = "event_sdk_crash_recover", e.eventTaskDataBaseLoadEnd = "event_dk_task_data_base_load_end", e.eventGlobalDownloadSpeedChanged = "event_dk_global_download_speed_changed", e.eventGlobalUploadSpeedChanged = "event_dk_global_upload_speed_changed", e.eventConfigInitFinished = "event_config_init_finished", e.eventConfigValueChanged = "event_config_value_changed", e.eventBHOConfigInitFinished = "event_bho_config_init_finished", e.eventBHOConfigValueChanged = "event_bho_config_value_changed", e.eventMemoryConfigValueChanged = "event_memory_config_value_changed", e.eventShowHomePage = "event_show_home_page", e.eventShowSearchTaskPage = "event_show_searchtask_page", e.eventConfigBrowserInitFinished = "event_config_browser_init_finished", e.eventDownloadContextMenuPopup = "event_download_context_menu_popup", e.eventDownloadContextMenuEnd = "event_download_context_menu_end", e.eventEmbeddedBrowserWndClick = "event_embedded_browser_wnd_click", e.eventLoginWndCreate = "event_login_wnd_create", e.eventLoginWndShow = "event_login_wnd_show", e.eventLoginWndShowResult = "event_login_wnd_show_result", e.eventLoginWndClose = "event_login_wnd_close", e.eventRetryLoginWndCreate = "event_retry_login_wnd_create", e.eventModifierUserinfoWndCreate = "event_modifier-userinfo-wnd-create", e.eventBrowserNumberChange = "event_browser_number_change", e.eventUploadConfigInitFinished = "event_upload_config_init_finished", e.eventUploadConfigValueChanged = "event_upload_config_value_changed"
    }(t.NodeEventMesssageNS || (t.NodeEventMesssageNS = {}))
}, function (e, t, n) {
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
    const o = n(0), r = n(7), s = n(6), a = n(8);
    let l = null;
    const d = `${__rootDir}/out/common-preload.js`;
    !function (e) {
        e.createSuspensionWindow = function (e) {
            if (null !== l) return;
            l = new o.BrowserWindow({
                frame: !1,
                height: 260,
                width: 394,
                skipTaskbar: !0,
                show: !1,
                resizable: !1,
                minimizable: !1,
                alwaysOnTop: !0,
                x: -999,
                y: -999,
                webPreferences: {webSecurity: "development" !== process.env.RUN_ENV, preload: d}
            });
            const t = "development" === process.env.RUN_ENV ? "http://localhost:9080/suspension-renderer/" : `file:///${__dirname}/suspension-renderer/index.html`;
            l.loadURL(t), l.on("ready-to-show", () => {
                s.roundRectWindow(l)
            }), l.on("show", () => {
                l.webContents.send(r.ThunderChannelList.channelMRSuspensionWindowShowOrHide, !0)
            }), l.on("hide", () => {
                l.webContents.send(r.ThunderChannelList.channelMRSuspensionWindowShowOrHide, !1)
            }), l.on("closed", () => {
                l = null
            })
        }, e.createXdasSuspensionWindow = function (e) {
            return i(this, void 0, void 0, function* () {
                let e = o.screen.getPrimaryDisplay().workAreaSize,
                    t = yield a.client.callServerFunction("GetConfigValue", "ConfigSuspensionXdas", "SuspensionX"),
                    n = yield a.client.callServerFunction("GetConfigValue", "ConfigSuspensionXdas", "SuspensionY"),
                    i = e.width - 500;
                l = new o.BrowserWindow({
                    transparent: !0,
                    frame: !1,
                    height: 540,
                    resizable: !0,
                    minimizable: !1,
                    width: 808,
                    skipTaskbar: !0,
                    alwaysOnTop: !0,
                    show: !1,
                    x: t || i,
                    y: n || -160,
                    webPreferences: {webSecurity: "development" !== process.env.RUN_ENV, preload: d}
                });
                const r = "development" === process.env.RUN_ENV ? "http://localhost:9080/suspension-xdas-renderer/" : `file:///${__dirname}/suspension-xdas-renderer/index.html`;
                return l.loadURL(r), l.on("ready-to-show", () => {
                }), l
            })
        }, e.getSuspensionWindow = function () {
            return l
        }
    }(t.SuspensionWindowHelper || (t.SuspensionWindowHelper = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(82), o = n(83);
    !function (e) {
        e.getWindowPreference = function (e = !1) {
            let t = o.default(), n = {};
            return t && t.colors && "string" == typeof t.colors.colorPrimaryControl1 && (n.hoverBackgroundColor = e ? parseInt(i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1), 16) : i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1)), n
        }
    }(t.WindowPreferenceNS || (t.WindowPreferenceNS = {}))
}, function (e, t, n) {
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
}, function (e, t, n) {
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
    const o = n(0), r = n(2), s = n(8), a = r.default.getLogger("GetSkinInfo");
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
}, function (e, t, n) {
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
    const o = n(0), r = n(8), s = n(12), a = n(2), l = n(34), d = n(7), c = n(6), u = n(18), h = n(35), f = n(17),
        p = n(85), m = n(33), w = a.default.getLogger("ThunderNewTask"), g = 860;
    const _ = new class {
        constructor() {
            this.parent = null, this.helperObj = null, this.isReady = !1, this.preNewTaskWindow = null, this.newTaskWindow = null, this.btTaskWindows = []
        }

        setReady(e) {
            this.isReady = e
        }

        init(e, t) {
            this.parent = e, this.helperObj = t, o.ipcMain.on(d.ThunderChannelList.channelRMRoundWindow, (e, t, n, i) => {
                this.helperObj.attachShadowWindow(t, n, i)
            }), o.ipcMain.on("create-pre-new-task-window", (e, ...t) => i(this, void 0, void 0, function* () {
                let e = void 0, n = void 0;
                if (t[0]) try {
                    e = JSON.parse(t[0])
                } catch (e) {
                }
                if (t[4]) try {
                    n = JSON.parse(t[4])
                } catch (e) {
                }
                let i = t[1], o = t[2], r = t[3];
                this.createPreNewTaskWindow(e, i, o, r, n).catch()
            })), o.ipcMain.on("create-bt-task-window", (e, ...t) => {
                let n = void 0;
                if (t[0]) try {
                    n = JSON.parse(t[0])
                } catch (e) {
                }
                let i = {};
                if (t[1]) try {
                    i = JSON.parse(t[1])
                } catch (e) {
                    i = {}
                }
                n && this.createBtTaskWindow(n, i).catch()
            }), o.ipcMain.on("create-new-task-window", (e, ...t) => {
                let n = [];
                if (t[0]) try {
                    n = JSON.parse(t[0])
                } catch (e) {
                }
                n.length > 0 && this.createNewTaskWindow(n).catch()
            })
        }

        ipcMainGetConfigValueAW(e, t, n) {
            return i(this, void 0, void 0, function* () {
                return yield r.client.callServerFunction("GetConfigValue", e, t, n)
            })
        }

        bringMainWindowToTop(e) {
            return i(this, void 0, void 0, function* () {
                e = void 0 === e || e;
                do {
                    if (e && !(yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0))) break;
                    this.isReady && (null === this.parent || this.parent.isDestroyed() || (this.parent.isMinimized() && this.parent.restore(), this.parent.isVisible() ? this.parent.focus() : this.parent.show(), yield f.ToolsUtilitiesAWNS.setForegroundWindow(this.helperObj, this.parent)))
                } while (0)
            })
        }

        changeUrllistToNewTaskData(e, t) {
            return i(this, void 0, void 0, function* () {
                if (void 0 !== e && null !== e && void 0 !== e[0] && "string" == typeof e[0]) {
                    1 === e.length && (e = e[0].split(/[\n\r\n]/));
                    let n = [];
                    for (let i of e) {
                        let e = p.ThunderNewtaskHelperNS.getNewTaskDataByUrl(i, t);
                        void 0 !== e && n.push(e)
                    }
                    n.length > 0 && (e = n)
                }
                return e
            })
        }

        sendTaskDataToPreNewTaskRenderer(e, t, n, i, o) {
            this.preNewTaskWindow && this.preNewTaskWindow.webContents.send(d.ThunderChannelList.channelRMPreNewTaskSetTaskData, e, t, n, i, o)
        }

        createPreNewTaskWindow(e, t, n, a, f) {
            return i(this, void 0, void 0, function* () {
                do {
                    if (null === this.preNewTaskWindow) {
                        let p = 320, _ = p, v = 500, b = [void 0, void 0];
                        e && e.length > 0 ? _ = 525 : b = yield l.ThunderWindowNS.getWindowsInParentCenterPos(v, _, this.parent);
                        let y = (yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0)) && "clipboard" !== t,
                            S = y ? this.parent : null;
                        this.preNewTaskWindow = new o.BrowserWindow({
                            x: b[0],
                            y: b[1],
                            width: v,
                            height: _,
                            frame: !1,
                            resizable: !0,
                            parent: S,
                            alwaysOnTop: !0,
                            show: !1,
                            modal: !1,
                            minimizable: !1,
                            maximizable: !1,
                            minWidth: v,
                            minHeight: p,
                            maxWidth: g,
                            backgroundColor: "#FFF",
                            webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
                        });
                        let C = "development" === process.env.RUN_ENV ? "http://localhost:9080/pre-new-task-renderer/" : `file:///${__dirname}/pre-new-task-renderer/index.html`;
                        C = e ? u.ThunderUtil.setQueryString(C, {hasTask: "1"}) : u.ThunderUtil.setQueryString(C, {from: t}), this.preNewTaskWindow.loadURL(C), this.preNewTaskWindow.once("show", () => {
                            c.roundRectWindow(this.preNewTaskWindow, S), y && this.bringMainWindowToTop(!1).catch()
                        }), this.preNewTaskWindow.on("ready-to-show", () => i(this, void 0, void 0, function* () {
                            if (e) if (e = yield this.changeUrllistToNewTaskData(e, t)) if (e.length <= 5) this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), n, a, f); else {
                                let t = JSON.stringify(e.slice(0, 5));
                                if (this.sendTaskDataToPreNewTaskRenderer(t, n, a, f, !0), void 0 !== (e = e.splice(5)) && e.length > 0) {
                                    let t = 100, i = Math.ceil(e.length / 100);
                                    i > 1 && (t = 100 * (i > 10 ? 10 : i)), setTimeout(() => {
                                        this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), n, a, f)
                                    }, t)
                                }
                            } else this.preNewTaskWindow.show(); else this.sendTaskDataToPreNewTaskRenderer(void 0, n, a, f);
                            let i = "source=Thunder,panel=PreNewTaskDlg";
                            s.XLStatNS.trackEvent("core_event", "create_task_panel_show", "", 0, 0, 0, 0, i), w.information("trackEvent", "core_event", "create_task_panel_show", i)
                        })), this.preNewTaskWindow.on("close", () => {
                            do {
                                if (r.client.callServerFunction("ClosePopMutual", h.PopView.PRE_NEW_TASK).catch(), null === this.parent || this.parent.isDestroyed()) break;
                                S && this.parent.focus()
                            } while (0)
                        }), this.preNewTaskWindow.on("hide", () => {
                            this.parent && !this.parent.isDestroyed() && this.parent.focus()
                        }), this.preNewTaskWindow.on("closed", () => {
                            this.preNewTaskWindow = null
                        }), o.ipcMain.once(d.ThunderChannelList.channelRMPreNewTaskClose, (e, t) => i(this, void 0, void 0, function* () {
                            do {
                                if (this.preNewTaskWindow = null, null === this.parent || this.parent.isDestroyed()) break;
                                t === m.MessageBoxNS.Action.OK && (yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0)) && this.bringMainWindowToTop(!1).catch()
                            } while (0)
                        }))
                    } else {
                        if (a && "" !== a) break;
                        "clipboard" !== t && (yield this.bringMainWindowToTop()), (e = yield this.changeUrllistToNewTaskData(e, t)) && (this.preNewTaskWindow.isVisible() ? (this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), n, a, f), this.preNewTaskWindow.show()) : this.preNewTaskWindow.once("show", () => {
                            this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), n, a, f)
                        }))
                    }
                } while (0)
            })
        }

        createBtTaskWindow(e, t = {}) {
            return i(this, void 0, void 0, function* () {
                let n = "development" === process.env.RUN_ENV ? "http://localhost:9080/bt-task-renderer/" : `file:///${__dirname}/bt-task-renderer/index.html`;
                t && t.source && (n = u.ThunderUtil.setQueryString(n, {from: t.source}));
                let s = 614;
                "url" !== e.type && void 0 !== e.data || (s = 150);
                let a = yield l.ThunderWindowNS.getWindowsInParentCenterPos(500, s, this.parent),
                    f = ["newwindow_bt"].includes(t.source), p = "clipboard" !== t.source ? this.parent : null,
                    m = new o.BrowserWindow({
                        x: f ? a[0] : null,
                        y: f ? a[1] : null,
                        width: 500,
                        height: s,
                        frame: !1,
                        resizable: !1,
                        parent: p,
                        alwaysOnTop: !0,
                        minimizable: !1,
                        maximizable: !1,
                        show: !1,
                        modal: !1,
                        minWidth: 500,
                        minHeight: 150,
                        maxWidth: g,
                        backgroundColor: "#FFF",
                        webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
                    });
                this.btTaskWindows.push(m), m.loadURL(n), m.once("show", () => {
                    c.roundRectWindow(m, p)
                }), m.on("ready-to-show", () => {
                    m.webContents.send(d.ThunderChannelList.channelRMNewTaskSetBTInfo, m.id, e, t)
                }), m.on("close", () => {
                    r.client.callServerFunction("ClosePopMutual", h.PopView.BT_NEW_TASK).catch();
                    do {
                        if (null === this.parent || this.parent.isDestroyed()) break;
                        this.parent.focus()
                    } while (0)
                }), m.on("closed", () => i(this, void 0, void 0, function* () {
                }))
            })
        }

        createNewTaskWindow(e) {
            return i(this, void 0, void 0, function* () {
                do {
                    if (0 === e.length) break;
                    let t = yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "OrignHostThreads", "5"),
                        n = Number(t);
                    if (e = e.map(e => (e.thread && "number" == typeof e.thread || (e.thread = n), e)), null !== this.newTaskWindow) {
                        this.bringMainWindowToTop().catch(), this.newTaskWindow.isVisible() ? this.newTaskWindow.webContents.send(d.ThunderChannelList.channelRMNewTaskSetTaskData, JSON.stringify(e)) : this.newTaskWindow.once("show", () => {
                            this.newTaskWindow.webContents.send(d.ThunderChannelList.channelRMNewTaskSetTaskData, JSON.stringify(e))
                        });
                        break
                    }
                    let a = "development" === process.env.RUN_ENV ? "http://localhost:9080/new-task-renderer/" : `file:///${__dirname}/new-task-renderer/index.html`;
                    a = 1 === e.length ? u.ThunderUtil.setQueryString(a, {type: "single"}) : u.ThunderUtil.setQueryString(a, {type: "multi"});
                    let l = 340, f = 500,
                        p = (yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0)) ? this.parent : null;
                    this.newTaskWindow = new o.BrowserWindow({
                        width: f,
                        height: l,
                        frame: !1,
                        resizable: !1,
                        parent: p,
                        show: !1,
                        minimizable: !1,
                        maximizable: !1,
                        alwaysOnTop: !0,
                        minWidth: f,
                        minHeight: l,
                        maxWidth: g,
                        backgroundColor: "#FFF",
                        webPreferences: {webSecurity: "development" !== process.env.RUN_ENV}
                    }), w.information("create new task browser window created");
                    let _ = 5, v = (() => i(this, void 0, void 0, function* () {
                        let t = {info: "", isPartial: !1};
                        if (e.length > 100) {
                            let n = e.slice(0, _);
                            t.info = JSON.stringify(n), t.isPartial = !0
                        } else t.info = JSON.stringify(e), t.isPartial = !1;
                        return t
                    }))();
                    o.ipcMain.once(d.ThunderChannelList.channelRMNewTaskReadyForSetTaskData, t => {
                        v.then(n => {
                            if (null !== n && t.sender.send(d.ThunderChannelList.channelRMNewTaskSetTaskData, n.info, n.isPartial), n.isPartial) {
                                let t = 100, n = Math.ceil(e.length / 100);
                                n > 1 && (t = 100 * (n > 10 ? 10 : n));
                                let i = e.splice(_);
                                setTimeout(() => {
                                    null !== this.newTaskWindow && this.newTaskWindow.webContents.send(d.ThunderChannelList.channelRMNewTaskSetTaskData, JSON.stringify(i), !1)
                                }, t)
                            }
                        }).catch()
                    }), this.newTaskWindow.once("show", () => {
                        c.roundRectWindow(this.newTaskWindow, p), this.bringMainWindowToTop().catch(), s.XLStatNS.trackEvent("core_event", "create_task_panel_show", "", 0, 0, 0, 0, "source=Thunder,panel=NewTaskDlg"), w.information("trackEvent", "core_event", "create_task_panel_show", "source=Thunder,panel=NewTaskDlg"), w.information("create new task browser window ready to show")
                    }), this.newTaskWindow.on("ready-to-show", () => i(this, void 0, void 0, function* () {
                    })), this.newTaskWindow.on("close", () => {
                        r.client.callServerFunction("ClosePopMutual", h.PopView.NEW_TASK).catch();
                        do {
                            if (null === this.parent || this.parent.isDestroyed()) break
                        } while (0)
                    }), o.ipcMain.once(d.ThunderChannelList.channelRMNewTaskClose, (e, t) => i(this, void 0, void 0, function* () {
                        this.newTaskWindow = null;
                        do {
                            if (null === this.parent || this.parent.isDestroyed()) break;
                            t !== m.MessageBoxNS.Action.OK || (yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0)) && (p && this.parent.focus(), this.bringMainWindowToTop(!1).catch())
                        } while (0)
                    })), this.newTaskWindow.loadURL(a)
                } while (0)
            })
        }
    };
    !function (e) {
        e.init = function (e, t) {
            _.init(e, t)
        }, e.setReady = function (e) {
            _.setReady(e)
        }
    }(t.NewTaskDlgsManagerNS || (t.NewTaskDlgsManagerNS = {}))
}, function (e, t, n) {
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
    const o = n(1), r = n(3), s = n(2), a = n(0), l = n(7), d = n(10), c = n(16), u = n(19), h = n(86), f = n(18),
        p = s.default.getLogger("ThunderNewTask"), m = r.default(o.join(__rootDir, "../bin/ThunderHelper.node"));
    let w = 5;
    !function (e) {
        let t;

        function r(e, t, n, i) {
            void 0 === n && (n = u.ThunderHelper.getTaskTypeFromUrl(e));
            let r = void 0, s = -1, a = "", l = "";
            do {
                if (n !== c.DownloadKernel.TaskType.Emule && n !== c.DownloadKernel.TaskType.P2sp) break;
                let d = h.ParseUrlFileNameNS.getNameFromUrl(e), u = o.extname(d);
                if ("" !== u && (a = u.substring(1)), n === c.DownloadKernel.TaskType.Emule) {
                    let t = h.ParseUrlFileNameNS.parseEd2kUrl(e);
                    s = t.fileSize, l = t.fileHash
                }
                r = {
                    url: e,
                    cookie: "",
                    referer: "",
                    fileName: d,
                    browser: "",
                    statClick: t = void 0 === t ? "" : t,
                    fileSize: s,
                    fileHash: l,
                    fileType: a,
                    birdkeyChars: i
                };
                break
            } while (0);
            return r
        }

        e.taskOptFileNameFixed = 2, function (e) {
            e.PreNewTask = "PreNewTaskCtrl", e.NewTask = "NewTaskCtrl", e.UrlFilter = "UrlFilterCtrl", e.Magnet = "BtCtrl"
        }(t = e.TaskCtrlType || (e.TaskCtrlType = {})), e.updateThreadCount = function (e) {
            do {
                if (isNaN(e)) break;
                if (e <= 0 || e > 10) break;
                w = e
            } while (0)
        }, e.contructTaskByUrl = function (e, t, n, i) {
            let o = r(e, t, n, i);
            p.verbose(e);
            let s = 5;
            return {
                taskType: n,
                data: o,
                setting: {
                    loginFtp: !1,
                    ftpInfo: {userName: "", password: ""},
                    onlyOrigin: !1,
                    thread: s = null !== o.thread && void 0 !== o.thread ? o.thread : w,
                    note: "",
                    openAfterDownload: !1
                },
                selected: !0
            }
        }, e.contructTaskByUrlData = function (e, t) {
            let n = void 0, i = u.ThunderHelper.getTaskTypeFromUrl(e.url);
            if (i === c.DownloadKernel.TaskType.Emule && (void 0 === e.fileHash || "" === e.fileHash)) {
                let t = h.ParseUrlFileNameNS.parseEd2kUrl(e.url);
                e.fileSize = t.fileSize, e.fileHash = t.fileHash
            }
            if (void 0 !== e.fileSize && null !== e.fileSize && 0 !== e.fileSize || (e.fileSize = -1), e.fileName || (e.fileName = h.ParseUrlFileNameNS.getNameFromUrl(e.url)), e.fileName = e.fileName.replace(/[*?/\\:|<>\"]/g, "_"), !e.fileType) {
                let t = o.extname(e.fileName);
                "" !== t && (e.fileType = t.substring(1))
            }
            if (void 0 === t || null === t) {
                let n = 5;
                t = {
                    loginFtp: !1,
                    ftpInfo: {userName: "", password: ""},
                    onlyOrigin: !1,
                    thread: n = null !== e.thread && void 0 !== e.thread ? e.thread : w,
                    note: "",
                    openAfterDownload: !1
                }
            }
            return n = {taskType: i, data: e, setting: t, selected: !0}
        }, e.getDesktopPath = function () {
            return m.getDesktopPath()
        }, e.getDocumentPath = function () {
            return m.getDocumentPath()
        }, e.queryFileExists = function (e) {
            return m.queryFileExists(e)
        }, e.isFilePathValid = function (e) {
            return m.isFilePathValid(e)
        }, e.getNewTaskDataByUrl = r, e.getDownloadResult = function (e, ...t) {
            return i(this, void 0, void 0, function* () {
                let n = {result: !1};
                do {
                    if (e.length < 3) {
                        n.message = "不合法的存储路径", n.pathError = !0;
                        break
                    }
                    if (!f.ThunderUtil.isValidPath(e)) {
                        n.message = "不合法的存储路径", n.pathError = !0;
                        break
                    }
                    if (!(yield d.FileSystemAWNS.dirExistsAW(e)) && !(yield d.FileSystemAWNS.mkdirsAW(e))) {
                        n.message = "不合法的存储路径", n.pathError = !0;
                        break
                    }
                    a.ipcRenderer.send(l.ThunderChannelList.channelRMNewTaskCreateNewTask, e, ...t), n = yield new Promise(e => {
                        a.ipcRenderer.once(l.ThunderChannelList.channelMRNewTaskCreateNewTaskResult, (t, n, i) => {
                            e({result: n, message: i})
                        })
                    })
                } while (0);
                return n
            })
        }, e.readThunderUnionConfig = function (e) {
            return i(this, void 0, void 0, function* () {
                let t = null, i = null;
                try {
                    const i = yield n(88);
                    i.defaults.adapter = n(40), t = yield i.get(e)
                } catch (e) {
                    p.information(e)
                }
                return null !== t && void 0 !== t.status && 200 === t.status && void 0 !== t.data && null !== t.data && (i = t.data), i
            })
        }
    }(t.ThunderNewtaskHelperNS || (t.ThunderNewtaskHelperNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(1), o = n(2), r = n(16), s = n(87), a = n(19), l = n(3), d = o.default.getLogger("ThunderNewTask"),
        c = l.default(i.join(__rootDir, "../bin/ThunderHelper.node")),
        u = ".asf;.avi;.exe;.iso;.mp3;.mpeg;.mpg;.mpga;.ra;.rar;.rm;.rmvb;.tar;.wma;.wmp;.wmv;\n  .mov;.zip;.3gp;.chm;.mdf;.torrent;.jar;.msi;.arj;.bin;.dll;.psd;.hqx;.sit;.lzh;.gz;.tgz;.xlsx;.xls;.doc;.docx;.ppt;\n  .pptx;.flv;.swf;.mkv;.tp;.ts;.flac;.ape;.wav;.aac;.txt;.dat;.7z;.ttf;.bat;.xv;.xvx;.pdf;.mp4;.apk;.ipa;.epub;.mobi;\n  .deb;.sisx;.cab;.pxl;.dmg;.msu;",
        h = ".a;.a3m;.a3w;.a4m;.a4p;.a4w;.a5w;.aam;.aas;.abf;.abk;.abs;.ace;.acm;.acp;.act;.ad;\n  .ada;.adb;.adf;.adi;.adm;.adp;.adr;.ads;.af2;.af3;.afm;.ai;.aif;.aifc;.aiff;.aim;.ais;.akw;.alb;.all;.ams;.anc;.ani;\n  .ans;.ant;.api;.aps;.ari;.arj;.art;.asa;.asc;.asd;.ase;.asf;.asm;.aso;.asp;.asv;.asx;.atw;.au;.avb;.avi;.avr;.avs;\n  .awd;.awr;.axx;.bak;.bas;.bat;.bdf;.bgl;.bi;.bif;.biff;.bin;.bk;.bk$;.bks;.bmk;.bmp;.book;.brx;.bsp;.btm;.bud;.bun;\n  .bw;.bwv;.c;.cab;.cad;.cal;.cap;.cas;.cb;.cc;.ccb;.cch;.cco;.cct;.cda;.cdf;.cdi;.cdm;.cdr;.cdt;.cdx;.cfg;.cgi;.cgm;\n  .chk;.chm;.chr;.cif;.cil;.class;.cll;.clp;.cls;.cmf;.cmv;.cmx;.cnf;.cnm;.cnt;.cod;.com;.cpl;.cpo;.cpp;.cpr;.cpt;.cpx;\n  .crd;.crp;.crt;.csc;.csp;.cst;.csv;.ctl;.cur;.cv;.cxx;.dat;.db;.dbc;.dbf;.dbx;.dcm;.dcs;.dct;.dcu;.dcx;.dem;.der;.dewf;\n  .dib;.dic;.dif;.dig;.dir;.diz;.dlg;.dll;.dls;.dmd;.dmf;.doc;.dot;.draw;.drv;.drw;.dsf;.dsg;.dsm;.dsp;.dsq;.dsw;.dtd;\n  .dun;.dv;.dxf;.dxr;.eda;.edd;.emd;.emf;.eml;.ephtml;.eps;.exe;.fav;.fax;.fcd;.fdf;.ffa;.ffk;.ffl;.ffo;.fif;.fla;.flc;\n  .fm;.fml;.fng;.fnk;.fon;.fot;.frt;.frx;.ftg;.fts;.gal;.gdb;.gdm;.gem;.gen;.getright;.gfi;.gfx;.gho;.gif;.gim;.gix;.gkh;\n  .gks;.gl;.gna;.gnt;.gnx;.gra;.grf;.grp;.hcom;.hgl;.hlp;.hpj;.hpp;.hst;.ht;.htm;.html;.htt;.htx;.icb;.icc;.icl;.icm;.ico;\n  .idd;.idf;.idq;.idx;.iff;.iges;.igf;.ilbm;.ima;.inf;.ini;.inrs;.ins;.int;.iqy;.iso;.ist;.isu;.iwc;.j62;.jar;.java;.jbf;\n  .jff;.jfif;.jif;.jmp;.jpe;.jpeg;.jpg;.js;.jsp;.jtf;.k25;.kar;.kdc;.key;.kfx;.kiz;.kkw;.kmp;.kqp;.lab;.lbm;.lbt;.lbx;.ldb;\n  .ldl;.leg;.lft;.lgo;.lha;.lib;.lin;.lis;.llx;.lnk;.log;.lst;.lu;.lyr;.lzh;.lzs;.m1v;.m3u;.mad;.maf;.mam;.map;.maq;.mar;.mat;\n  .mb1;.mbx;.mcr;.mdb;.mde;.mdl;.mdn;.mdw;.mdz;.mic;.mid;.mim;.mime;.mli;.mme;.mng;.mnu;.mod;.mov;.mp2;.mp3;.mpa;.mpe;.mpeg;\n  .mpg;.mpp;.mpr;.msg;.msi;.msn;.msp;.mst;.mtm;.nan;.nap;.ncb;.ncd;.ncf;.nff;.nft;.nil;.nist;.nls;.nlu;.ntx;.nwc;.nws;.obj;\n  .ocx;.ods;.ofn;.oft;.olb;.ole;.oogl;.opo;.p65;.pab;.part;.pas;.pbd;.pbl;.pbm;.pbr;.pcd;.pcl;.pcm;.pdd;.pdf;.pfm;.pgl;.pgm;\n  .ph;.php;.php3;.phtml;.pic;.pjt;.pjx;.pkg;.pli;.png;.pot;.ppa;.ppf;.ppm;.pps;.ppt;.prf;.prg;.prj;.prn;.prt;.psd;.psp;.pst;\n  .pwz;.qic;.qif;.qlb;.qry;.qtp;.qtx;.qw;.ra;.ram;.rar;.rdf;.reg;.rep;.res;.rft;.rgb;.rm;.rmd;.rpt;.rtf;.rul;.rvp;.s;.sav;.sbl;\n  .scc;.scf;.scp;.scr;.sct;.scx;.sdt;.sdv;.sdx;.sep;.sfd;.sfi;.sfr;.sfx;.sgi;.sgml;.shg;.shtml;.shw;.sig;.ska;.skl;.sl;.spl;\n  .sqc;.sqr;.str;.swa;.swf;.sys;.syw;.taz;.tga;.theme;.thn;.tif;.tiff;.tig;.tlb;.tmp;.tol;.tpl;.trm;.trn;.ttf;.txt;.txw;.udf;\n  .ult;.url;.use;.uwf;.vbp;.vbp;.vbw;.vbw;.vbx;.vbx;.vct;.vcx;.vda;.vda;.vir;.vir;.viv;.vqf;.vsd;.vsd;.vsl;.vsl;.vss;.vss;.vst;\n  .vst;.vsw;.vsw;.vxd;.vxd;.w3l;.wab;.wad;.wav;.wbk;.wcm;.wdb;.wfm;.wfn;.wil;.wiz;.wll;.wmf;.wow;.wp;.wpd;.wpf;.wpg;.wps;.wpt;.wr1;\n  .wrk;.wrl;.wrz;.x;.x16;.x32;.xar;.xbm;.xi;.xla;.xlb;.xlc;.xld;.xlk;.xll;.xlm;.xls;.xlt;.xlv;.xlw;.xnk;.xpm;.xwd;.xwf;.yal;.z;.zap;.zip;";
    !function (e) {
        function t(e) {
            let t = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e || "." === e) break;
                if (u.indexOf(e) > -1) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        }

        function n(e) {
            let t = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e) break;
                if (e.match(/[\/\\"<>\?\*|]/)) break;
                t = !0
            } while (0);
            return t
        }

        function o(e) {
            let n = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e || "." === e) break;
                let i = s.TaskUtilHelper.getTaskFileType(void 0, e);
                if (i === s.TaskUtilHelper.FileExtType.Video || i === s.TaskUtilHelper.FileExtType.Music || i === s.TaskUtilHelper.FileExtType.Pic) {
                    n = !0;
                    break
                }
                n = t(e)
            } while (0);
            return n
        }

        function l(e) {
            let t = !1, r = i.parse(e);
            return t = n(r.name) && o(r.ext)
        }

        function f(e) {
            let t = {};
            do {
                if (void 0 === e || null === e) break;
                d.information("parseDynamicUrlArgs");
                let n = /([^&=?]+)=([^&]*)/g;
                for (; n.exec(e);) t[RegExp.$1] = RegExp.$2;
                d.information("parseDynamicUrlArgs ret ", t)
            } while (0);
            return t
        }

        function p(e) {
            let t = {pageFileName: void 0, args: void 0};
            do {
                if (void 0 === e || null === e) break;
                d.information("parseDynamicUrlPath"), e.match(/[\/]?([^?]*)\?([^\s]*)/) && (t.pageFileName = RegExp.$1, t.args = RegExp.$2), d.information("parseDynamicUrlPath ret", t)
            } while (0);
            return t
        }

        function m(e) {
            let t = "";
            do {
                if (void 0 === e || null === e) break;
                let n = p(e);
                if (void 0 !== n.args) {
                    let e = f(n.args);
                    for (let n in e) {
                        let i = e[n];
                        if (l(i)) {
                            t = i;
                            break
                        }
                    }
                }
                void 0 !== n.pageFileName && l(n.pageFileName) && (t = n.pageFileName)
            } while (0);
            return t
        }

        function w(e) {
            let t = [];
            do {
                if (void 0 === e || null === e) break;
                let n = m(e);
                if ("" !== n && !t.includes(n)) {
                    let e = g(n);
                    t.push(e)
                }
                let i = g(e);
                t.includes(i) || t.push(i)
            } while (0);
            return t
        }

        function g(e) {
            return c.parseFileNameFromP2spUrlPath(e)
        }

        function _(e) {
            return c.isThunderPrivateUrl(e)
        }

        function v(e) {
            return c.parseEd2kUrl(e)
        }

        function b(e) {
            return c.parseUrl(e)
        }

        e.isDownloadFileExtName = t, e.isIllegalFileName = n, e.isGoodFileExtName = o, e.isUsualFileExtName = function (e) {
            let t = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e || "." === e) break;
                if (o(e)) {
                    t = !0;
                    break
                }
                if (h.indexOf(e) > -1) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        }, e.isGoodFileName = l, e.parseDynamicUrlArgs = f, e.parseDynamicUrlPath = p, e.parseFileNameFromDynamicUrlPath = m, e.getFileNameListFromUrlPath = w, e.getNameFromUrl = function (e) {
            let t = "index.html", n = a.ThunderHelper.getTaskTypeFromUrl(e);
            if (n === r.DownloadKernel.TaskType.P2sp) {
                let n = b(e);
                if (n) {
                    let e = w(n.fullPath);
                    e.length > 0 && (t = e[0])
                } else {
                    let n = /:\/\/.*?\[.+?\].*(\/.+)/.exec(e);
                    if (n && n[1]) {
                        let e = w(n[1]);
                        e.length > 0 && (t = e[0])
                    }
                }
            } else n === r.DownloadKernel.TaskType.Emule && (t = v(e).fileName);
            return t.replace(/[*?/\\:|<>\"]/g, "_")
        }, e.parseFileNameFromP2spUrlPath = g, e.isThunderPrivateUrl = _, e.parseThunderPrivateUrl = function (e) {
            let t = {url: e, codePage: -1};
            return _(e) && (t = c.parseThunderPrivateUrl(e)), t
        }, e.parseEd2kUrl = v, e.parseUrl = b, e.parseMagnetUrl = function (e) {
            return c.parseMagnetUrl(e)
        }, e.makeUrl = function (e) {
            return c.makeUrl(e)
        }
    }(t.ParseUrlFileNameNS || (t.ParseUrlFileNameNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(1), o = n(16);
    let r = ["apk", "pic", "video", "mp4", "rmvb", "wmv", "mpg", "mkv", "mov", "rm", "avi", "flv", "doc", "link", "ppt", "word", "magnetic", "music", "pdf", "rar", "xls", "txt", "unknow", "gif", "ipa", "ipsw", "dll", "chm", "text", "install", "iso"];
    const s = ".xv;.xlmv;.3gp;.3gp2;.3gpp;.3gpp2;.3mm;.3p2;.60d;.787;.aaf;.aep;.aepx;.aet;.aetx;.ajp;.ale;.amv;.amx;.arf;\n  .asf;.asx;.avb;.avd;.avi;.avp;.avs;.avs;.axm;.bdm;.bdmv;.bik;.bix;.bmk;.bnp;.box;.bs4;.bsf;.byu;.camproj;.camrec;.clpi;.cmmp;\n  .cmmtpl;.cmproj;.cmrec;.cpi;.cst;.cvc;.d2v;.d3v;.dat;.dav;.dce;.dck;.ddat;.dif;.dir;.divx;.dlx; .dmb;.dmsm;.dmsm3d;.dmss;.dnc;.dpg;\n  .dream;.dsy;.dv;.dv-avi;.dv4;.dvdmedia;.dvr-ms;.dvx;.dxr;.dzm;.dzp;.dzt;.edl;.evo;.eye;.f4p;.f4v;.fbr;.fbr;.fbz;.fcp;.flc;.flh;\n  .fli;.flv;.flx;.gfp;.gl;.grasp;.gts;.gvi;.gvp;.hdmov;.hkm;.ifo;.imovieproj;.imovieproject;.iva;.ivf;.ivr;.ivs;.izz;.izzy;.jts;.jtv;\n  .k3g;.lrec;.lsf;.lsx;.m15;.m1pg;.m1v;.m21;.m21;.m2a;.m2p;.m2t;.m2ts;.m2v;.m4e;.m4u;.m4v;.m75;.meta;.mgv;.mj2;.mjp;.mjpg;.mkv;.mmv;\n  .mnv;.mod;.modd;.moff;.moi;.moov;.mov;.movie;.mp21;.mp2v;.mp4;.mp4v;.mpe;.mpeg;.mpeg4;.mpf;.mpg;.mpg2;.mpgindex;.mpl;.mpls;\n  .mpsub;.mpv;.mpv2;.mqv;.msdvd;.msh;.mswmm;.mts;.mtv;.mvb;.mvc;.mvd;.mve;.mvp;.mvy;.mxf;.mys;.ncor;.nsv;.nuv;.nvc;.ogm;.ogv;.ogx;.osp;\n  .par;.pds;.pgi;.piv;.pjs;.pmf;.pns;.ppj;.prel;.pro;.prproj;.prtl;.psh;.pssd;.pva;.pvr;.pxv;.qt;.qtch;.qtl;.qtm;.qtz;\n  .r3d;.rcproject;.rdb;.rec;.rm;.rmd;.rmp;.rms;.rmvb;.roq;.rp;.rts;.rts;.rum;.rv;.sbk;.sbt;.scc;.scm;.scn;.screenflow;.sec;.seq;.sfd;\n  .sfvidcap;.smk;.sml;.smv;.spl;.ssm;.stl;.str;.stx;.svi;.swf;.swi;.swt;.tda3mt;.tivo;.tix;.tod;.tp;.tp0;.tpd;\n  .tpr;.trp;.ts;.tts;.tvs;.vc1;.vcpf;.vcr;.vcv;.vdo;.vdr;.veg;.vem;.vf;.vfw;.vfz;.vgz;.vid;.viewlet;.viv;.vivo;.vlab;.vob;.vp3;.vp6;.vp7;\n  .vro;.vs4;.vse;.vsp;.w32;.wcp;.webm;.wlmp;.wm;.wmd;.wmmp;.wmv;.wmx;.wp3;.wpl;.wtv;.wvx;.xfl;.xvid;.yuv;.zm1;.zm2;.zm3;.zmv;",
        a = ".exe;.com;.bat;.msi;.apk;.ipa;.iso;.mds;.bin;.img;.ipsw;",
        l = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.\n  dot;.dotm;.dotx;.email;.rp;.pps;.et;.ett;.xlt;.dbf;.prn;.csv;.mht;.mhtml;.xml;.wpt;.dps;.dpt;.pot;.ppsx;.epub;.mobi;.lit;.wdl;.ceb;.abm;\n  .pdg;.umb;.ibooks;",
        d = ".aiff;.cue;.m3u;.au;.cdda;.raw;.wav;.flac;.tak;.mp3;.aac;.wma;.m4a;.mid;.mka;.mp2;.mpa;.mpc;.ape;.ofr;\n  .ogg;.ra;.wv;.tta;.ac3;.dts;.nsf;.mod;.s3m;.xm;.it;.vst;",
        c = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;.mef;\n  .mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico;",
        u = ".zip;.zipx;.rar;.7z;.isz;.cab;.arj;.ace;.alz;.uue;.tar;.gz; .gzip;.tgz;.tpz;.bzip2;.bz2;.bz;.tbz;.tbz2;.xz;.txz;\n  .lzh;.lha;.zt;.az; .xpi;.jar;.wim;.swm;.rpm;.xar;.deb;.dmg;.hfs;.cpio;.lzma;.lzma86;.split;",
        h = ".torrent;", f = ".idx;.smi;.sub;.psb;.ssa;.ass;.usf;.ssf;.srt;.sup",
        p = ".3gp;.asf;.avi;.divx;.f4v;.flv;.mkv;.mov;.movie;.mp4;.mpeg;.mpeg4;.mpg;.mpg2;.rm;.rmvb;.rp;.swf;.tp;.tp0;.ts;.wmv",
        m = ".exe;.com;.bat;.msi", w = ".wav;.flac;.mp3;.aac;.wma;.m4a;.mid;.ape;.ogg;.ra;.mod",
        g = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.pdf;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;\n  .mef;.mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico",
        _ = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.dot;.dotm;.dotx;.email;.rp;.pps",
        v = ".rar;.tar;.zip;.gzip;.cab;.uue;.arj;.bz2;.lzh;.jar;.ace;.iso;.7-zip;.7z",
        b = ".asf;.mpg;.rmvb;.rm;.wmv;.avi;.mp4;.mpeg;.mkv;.mov;.ts;.flv;.3gp;",
        y = ".exe;.com;.bat;.scr;.lnk;.pif;.wsh;", S = ".iso;";
    !function (e) {
        let t;

        function n(e) {
            let n = t.Unkown, o = i.extname(e);
            return null !== o && void 0 !== o && o.length >= 2 && (o = o.toLowerCase()), void 0 === o || "" === o || o.length < 2 ? n = t.Unkown : p.indexOf(o) > -1 ? n = t.Video : m.indexOf(o) > -1 ? n = t.Software : _.indexOf(o) > -1 ? n = t.Doc : w.indexOf(o) > -1 ? n = t.Music : g.indexOf(o) > -1 ? n = t.Pic : v.indexOf(o) > -1 && (n = t.Zip), o.length > 1 && ".z" === o.slice(0, 2) && /[0-9]+/.test(o.substring(2)) && (n = t.Zip), n
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
                if (d.indexOf(n) > -1) {
                    p = "music";
                    break
                }
                if (c.indexOf(n) > -1) {
                    p = "pic";
                    break
                }
                if (u.indexOf(n) > -1) {
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
            return void 0 === n && void 0 !== e && (n = i.extname(e)), null !== n && void 0 !== n && n.length >= 2 && (n = n.toLowerCase(), n += ";"), void 0 === n || "" === n || n.length < 3 ? o = t.Unkown : s.indexOf(n) > -1 ? o = t.Video : a.indexOf(n) > -1 ? o = t.Software : l.indexOf(n) > -1 ? o = t.Doc : d.indexOf(n) > -1 ? o = t.Music : c.indexOf(n) > -1 ? o = t.Pic : u.indexOf(n) > -1 ? o = t.Zip : h.indexOf(n) > -1 && (o = t.Bt), n.length > 1 && ".z" === n.slice(0, 2) && /[0-9]+/.test(n.substring(2)) && (o = t.Zip), o
        }, e.isVideoFileExt = function (e) {
            let t = !1;
            do {
                if (null === e || void 0 === e || "" === e) break;
                let n = i.extname(e);
                if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                n = n.toLowerCase(), n += ";", b.indexOf(n) > -1 && (t = !0)
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
                n = n.toLowerCase(), n += ";", y.indexOf(n) > -1 && (t = !0)
            } while (0);
            return t
        }, e.isIsoExt = function (e) {
            let t = !1;
            do {
                if (null === e || void 0 === e || "" === e) break;
                let n = i.extname(e);
                if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                n = n.toLowerCase(), n += ";", S.indexOf(n) > -1 && (t = !0)
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
                let i = 0, o = 0, r = 0, s = 0, a = 0, l = 0, d = 0, c = 0, u = e.split(/\./);
                if (null === u || void 0 === u || u.length < 3) break;
                if (i = Number(u[0]), o = Number(u[1]), r = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (s = Number(u[3])), null === (u = t.split(/\./)) || void 0 === u || u.length < 3) break;
                if (a = Number(u[0]), l = Number(u[1]), d = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (c = Number(u[3])), a > i) {
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
                if (d > r) {
                    n = 1;
                    break
                }
                if (d < r) {
                    n = -1;
                    break
                }
                if (0 !== s) {
                    if (c > s) {
                        n = 1;
                        break
                    }
                    if (c < s) {
                        n = -1;
                        break
                    }
                }
                n = 0
            } while (0);
            return n
        }
    }(t.TaskUtilHelper || (t.TaskUtilHelper = {}))
}, function (e, t, n) {
    e.exports = n(89)
}, function (e, t, n) {
    "use strict";
    var i = n(4), o = n(36), r = n(91), s = n(20);

    function a(e) {
        var t = new r(e), n = o(r.prototype.request, t);
        return i.extend(n, r.prototype, t), i.extend(n, t), n
    }

    var l = a(s);
    l.Axios = r, l.create = function (e) {
        return a(i.merge(s, e))
    }, l.Cancel = n(47), l.CancelToken = n(114), l.isCancel = n(46), l.all = function (e) {
        return Promise.all(e)
    }, l.spread = n(115), e.exports = l, e.exports.default = l
}, function (e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function (e) {
        return null != e && (n(e) || function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(20), o = n(4), r = n(109), s = n(110);

    function a(e) {
        this.defaults = e, this.interceptors = {request: new r, response: new r}
    }

    a.prototype.request = function (e) {
        "string" == typeof e && (e = o.merge({url: arguments[0]}, arguments[1])), (e = o.merge(i, {method: "get"}, this.defaults, e)).method = e.method.toLowerCase();
        var t = [s, void 0], n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, o.forEach(["delete", "get", "head", "options"], function (e) {
        a.prototype[e] = function (t, n) {
            return this.request(o.merge(n || {}, {method: e, url: t}))
        }
    }), o.forEach(["post", "put", "patch"], function (e) {
        a.prototype[e] = function (t, n, i) {
            return this.request(o.merge(i || {}, {method: e, url: t, data: n}))
        }
    }), e.exports = a
}, function (e, t, n) {
    "use strict";
    var i = n(4);
    e.exports = function (e, t) {
        i.forEach(e, function (n, i) {
            i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[i])
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(4), o = n(37), r = n(39), s = n(94), a = n(95), l = n(21),
        d = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(96);
    e.exports = function (e) {
        return new Promise(function (t, c) {
            var u = e.data, h = e.headers;
            i.isFormData(u) && delete h["Content-Type"];
            var f = new XMLHttpRequest, p = "onreadystatechange", m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || a(e.url) || (f = new window.XDomainRequest, p = "onload", m = !0, f.onprogress = function () {
            }, f.ontimeout = function () {
            }), e.auth) {
                var w = e.auth.username || "", g = e.auth.password || "";
                h.Authorization = "Basic " + d(w + ":" + g)
            }
            if (f.open(e.method.toUpperCase(), r(e.url, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f[p] = function () {
                if (f && (4 === f.readyState || m) && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null, i = {
                        data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                        status: 1223 === f.status ? 204 : f.status,
                        statusText: 1223 === f.status ? "No Content" : f.statusText,
                        headers: n,
                        config: e,
                        request: f
                    };
                    o(t, c, i), f = null
                }
            }, f.onerror = function () {
                c(l("Network Error", e, null, f)), f = null
            }, f.ontimeout = function () {
                c(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", f)), f = null
            }, i.isStandardBrowserEnv()) {
                var _ = n(97),
                    v = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? _.read(e.xsrfCookieName) : void 0;
                v && (h[e.xsrfHeaderName] = v)
            }
            if ("setRequestHeader" in f && i.forEach(h, function (e, t) {
                void 0 === u && "content-type" === t.toLowerCase() ? delete h[t] : f.setRequestHeader(t, e)
            }), e.withCredentials && (f.withCredentials = !0), e.responseType) try {
                f.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                f && (f.abort(), c(e), f = null)
            }), void 0 === u && (u = null), f.send(u)
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(4),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, n, r, s = {};
        return e ? (i.forEach(e.split("\n"), function (e) {
            if (r = e.indexOf(":"), t = i.trim(e.substr(0, r)).toLowerCase(), n = i.trim(e.substr(r + 1)), t) {
                if (s[t] && o.indexOf(t) >= 0) return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
            }
        }), s) : s
    }
}, function (e, t, n) {
    "use strict";
    var i = n(4);
    e.exports = i.isStandardBrowserEnv() ? function () {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");

        function o(e) {
            var i = e;
            return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }

        return e = o(window.location.href), function (t) {
            var n = i.isString(t) ? o(t) : t;
            return n.protocol === e.protocol && n.host === e.host
        }
    }() : function () {
        return !0
    }
}, function (e, t, n) {
    "use strict";
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function o() {
        this.message = "String contains an invalid character"
    }

    o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function (e) {
        for (var t, n, r = String(e), s = "", a = 0, l = i; r.charAt(0 | a) || (l = "=", a % 1); s += l.charAt(63 & t >> 8 - a % 1 * 8)) {
            if ((n = r.charCodeAt(a += .75)) > 255) throw new o;
            t = t << 8 | n
        }
        return s
    }
}, function (e, t, n) {
    "use strict";
    var i = n(4);
    e.exports = i.isStandardBrowserEnv() ? {
        write: function (e, t, n, o, r, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)), i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), i.isString(o) && a.push("path=" + o), i.isString(r) && a.push("domain=" + r), !0 === s && a.push("secure"), document.cookie = a.join("; ")
        }, read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        }, remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }
}, function (e, t) {
    e.exports = require("assert")
}, function (e, t) {
    e.exports = require("stream")
}, function (e, t, n) {
    "undefined" == typeof process || "renderer" === process.type ? e.exports = n(101) : e.exports = n(103)
}, function (e, t, n) {
    function i() {
        var e;
        try {
            e = t.storage.debug
        } catch (e) {
        }
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
    }

    (t = e.exports = n(45)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
        var i = "color: " + this.color;
        e.splice(1, 0, i, "color: inherit");
        var o = 0, r = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && "%c" === e && (r = ++o)
        }), e.splice(r, 0, i)
    }, t.save = function (e) {
        try {
            null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch (e) {
        }
    }, t.load = i, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
            return window.localStorage
        } catch (e) {
        }
    }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message
        }
    }, t.enable(i())
}, function (e, t) {
    var n = 1e3, i = 60 * n, o = 60 * i, r = 24 * o, s = 365.25 * r;

    function a(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }

    e.exports = function (e, t) {
        t = t || {};
        var l, d = typeof e;
        if ("string" === d && e.length > 0) return function (e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var a = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                    return a * s;
                case"days":
                case"day":
                case"d":
                    return a * r;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                    return a * o;
                case"minutes":
                case"minute":
                case"mins":
                case"min":
                case"m":
                    return a * i;
                case"seconds":
                case"second":
                case"secs":
                case"sec":
                case"s":
                    return a * n;
                case"milliseconds":
                case"millisecond":
                case"msecs":
                case"msec":
                case"ms":
                    return a;
                default:
                    return
            }
        }(e);
        if ("number" === d && !1 === isNaN(e)) return t.long ? a(l = e, r, "day") || a(l, o, "hour") || a(l, i, "minute") || a(l, n, "second") || l + " ms" : function (e) {
            if (e >= r) return Math.round(e / r) + "d";
            if (e >= o) return Math.round(e / o) + "h";
            if (e >= i) return Math.round(e / i) + "m";
            if (e >= n) return Math.round(e / n) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function (e, t, n) {
    var i = n(104), o = n(5);
    (t = e.exports = n(45)).init = function (e) {
        e.inspectOpts = {};
        for (var n = Object.keys(t.inspectOpts), i = 0; i < n.length; i++) e.inspectOpts[n[i]] = t.inspectOpts[n[i]]
    }, t.log = function () {
        return process.stderr.write(o.format.apply(o, arguments) + "\n")
    }, t.formatArgs = function (e) {
        var n = this.namespace;
        if (this.useColors) {
            var i = this.color, o = "[3" + (i < 8 ? i : "8;5;" + i), r = "  " + o + ";1m" + n + " [0m";
            e[0] = r + e[0].split("\n").join("\n" + r), e.push(o + "m+" + t.humanize(this.diff) + "[0m")
        } else e[0] = (t.inspectOpts.hideDate ? "" : (new Date).toISOString() + " ") + n + " " + e[0]
    }, t.save = function (e) {
        null == e ? delete process.env.DEBUG : process.env.DEBUG = e
    }, t.load = s, t.useColors = function () {
        return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : i.isatty(process.stderr.fd)
    }, t.colors = [6, 2, 3, 4, 5, 1];
    try {
        var r = n(105);
        r && r.level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
    } catch (e) {
    }

    function s() {
        return process.env.DEBUG
    }

    t.inspectOpts = Object.keys(process.env).filter(function (e) {
        return /^debug_/i.test(e)
    }).reduce(function (e, t) {
        var n = t.substring(6).toLowerCase().replace(/_([a-z])/g, function (e, t) {
            return t.toUpperCase()
        }), i = process.env[t];
        return i = !!/^(yes|on|true|enabled)$/i.test(i) || !/^(no|off|false|disabled)$/i.test(i) && ("null" === i ? null : Number(i)), e[n] = i, e
    }, {}), t.formatters.o = function (e) {
        return this.inspectOpts.colors = this.useColors, o.inspect(e, this.inspectOpts).split("\n").map(function (e) {
            return e.trim()
        }).join(" ")
    }, t.formatters.O = function (e) {
        return this.inspectOpts.colors = this.useColors, o.inspect(e, this.inspectOpts)
    }, t.enable(s())
}, function (e, t) {
    e.exports = require("tty")
}, function (e, t, n) {
    "use strict";
    const i = n(9), o = n(106), r = process.env;
    let s;

    function a(e) {
        return function (e) {
            return 0 !== e && {level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3}
        }(function (e) {
            if (!1 === s) return 0;
            if (o("color=16m") || o("color=full") || o("color=truecolor")) return 3;
            if (o("color=256")) return 2;
            if (e && !e.isTTY && !0 !== s) return r.VSCODE_PID ? 1 : 0;
            const t = s ? 1 : 0;
            if ("win32" === process.platform) {
                const e = i.release().split(".");
                return Number(process.versions.node.split(".")[0]) >= 8 && Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1
            }
            if ("CI" in r) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(e => e in r) || "codeship" === r.CI_NAME ? 1 : t;
            if ("TEAMCITY_VERSION" in r) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(r.TEAMCITY_VERSION) ? 1 : 0;
            if ("truecolor" === r.COLORTERM) return 3;
            if ("TERM_PROGRAM" in r) {
                const e = parseInt((r.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
                switch (r.TERM_PROGRAM) {
                    case"iTerm.app":
                        return e >= 3 ? 3 : 2;
                    case"Apple_Terminal":
                        return 2
                }
            }
            return /-256(color)?$/i.test(r.TERM) ? 2 : /^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(r.TERM) ? 1 : "COLORTERM" in r ? 1 : (r.TERM, t)
        }(e))
    }

    o("no-color") || o("no-colors") || o("color=false") ? s = !1 : (o("color") || o("colors") || o("color=true") || o("color=always")) && (s = !0), "FORCE_COLOR" in r && (s = 0 === r.FORCE_COLOR.length || 0 !== parseInt(r.FORCE_COLOR, 10)), e.exports = {
        supportsColor: a,
        stdout: a(process.stdout),
        stderr: a(process.stderr)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = ((e, t) => {
        t = t || process.argv;
        const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--", i = t.indexOf(n + e), o = t.indexOf("--");
        return -1 !== i && (-1 === o || i < o)
    })
}, function (e, t) {
    e.exports = require("zlib")
}, function (e) {
    e.exports = {
        _args: [["axios@0.18.0", "D:\\thunder11\\trunk\\build\\app"]],
        _from: "axios@0.18.0",
        _id: "axios@0.18.0",
        _inBundle: !1,
        _integrity: "sha1-MtU+SFHv3AoRmTts0AB4nXDAUQI=",
        _location: "/axios",
        _phantomChildren: {},
        _requested: {
            type: "version",
            registry: !0,
            raw: "axios@0.18.0",
            name: "axios",
            escapedName: "axios",
            rawSpec: "0.18.0",
            saveSpec: null,
            fetchSpec: "0.18.0"
        },
        _requiredBy: ["/", "/@types/axios", "/@xunlei/thunderx-login-main"],
        _resolved: "http://xnpm.repo.xunlei.cn/axios/-/axios-0.18.0.tgz",
        _spec: "0.18.0",
        _where: "D:\\thunder11\\trunk\\build\\app",
        author: {name: "Matt Zabriskie"},
        browser: {"./lib/adapters/http.js": "./lib/adapters/xhr.js"},
        bugs: {url: "https://github.com/axios/axios/issues"},
        bundlesize: [{path: "./dist/axios.min.js", threshold: "5kB"}],
        dependencies: {"follow-redirects": "^1.3.0", "is-buffer": "^1.1.5"},
        description: "Promise based HTTP client for the browser and node.js",
        devDependencies: {
            bundlesize: "^0.5.7",
            coveralls: "^2.11.9",
            "es6-promise": "^4.0.5",
            grunt: "^1.0.1",
            "grunt-banner": "^0.6.0",
            "grunt-cli": "^1.2.0",
            "grunt-contrib-clean": "^1.0.0",
            "grunt-contrib-nodeunit": "^1.0.0",
            "grunt-contrib-watch": "^1.0.0",
            "grunt-eslint": "^19.0.0",
            "grunt-karma": "^2.0.0",
            "grunt-ts": "^6.0.0-beta.3",
            "grunt-webpack": "^1.0.18",
            "istanbul-instrumenter-loader": "^1.0.0",
            "jasmine-core": "^2.4.1",
            karma: "^1.3.0",
            "karma-chrome-launcher": "^2.0.0",
            "karma-coverage": "^1.0.0",
            "karma-firefox-launcher": "^1.0.0",
            "karma-jasmine": "^1.0.2",
            "karma-jasmine-ajax": "^0.1.13",
            "karma-opera-launcher": "^1.0.0",
            "karma-safari-launcher": "^1.0.0",
            "karma-sauce-launcher": "^1.1.0",
            "karma-sinon": "^1.0.5",
            "karma-sourcemap-loader": "^0.3.7",
            "karma-webpack": "^1.7.0",
            "load-grunt-tasks": "^3.5.2",
            minimist: "^1.2.0",
            sinon: "^1.17.4",
            typescript: "^2.0.3",
            "url-search-params": "^0.6.1",
            webpack: "^1.13.1",
            "webpack-dev-server": "^1.14.1"
        },
        homepage: "https://github.com/axios/axios",
        keywords: ["xhr", "http", "ajax", "promise", "node"],
        license: "MIT",
        main: "index.js",
        name: "axios",
        repository: {type: "git", url: "git+https://github.com/axios/axios.git"},
        scripts: {
            build: "NODE_ENV=production grunt build",
            coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
            examples: "node ./examples/server.js",
            postversion: "git push && git push --tags",
            preversion: "npm test",
            start: "node ./sandbox/server.js",
            test: "grunt test && bundlesize",
            version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
        },
        typings: "./index.d.ts",
        version: "0.18.0"
    }
}, function (e, t, n) {
    "use strict";
    var i = n(4);

    function o() {
        this.handlers = []
    }

    o.prototype.use = function (e, t) {
        return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, o.prototype.forEach = function (e) {
        i.forEach(this.handlers, function (t) {
            null !== t && e(t)
        })
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    var i = n(4), o = n(111), r = n(46), s = n(20), a = n(112), l = n(113);

    function d(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }

    e.exports = function (e) {
        return d(e), e.baseURL && !a(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t]
        }), (e.adapter || s.adapter)(e).then(function (t) {
            return d(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }, function (t) {
            return r(t) || (d(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(4);
    e.exports = function (e, t, n) {
        return i.forEach(n, function (n) {
            e = n(e, t)
        }), e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(47);

    function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e
        });
        var n = this;
        e(function (e) {
            n.reason || (n.reason = new i(e), t(n.reason))
        })
    }

    o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, o.source = function () {
        var e;
        return {
            token: new o(function (t) {
                e = t
            }), cancel: e
        }
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, function (e, t, n) {
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
    const o = n(1), r = n(0), s = n(3), a = n(8), l = n(15), d = n(2), c = n(117),
        u = d.default.getLogger("Thunder-Window-[CrossProduct]"),
        h = s.default(o.join(__rootDir, "../bin/ThunderHelper.node"));
    t.embedXmpWin = new class {
        constructor() {
            this.xmpMode = l.XMPShowMode.UNKNOWN_MODE, this.hwndFloat = 0, this.hwndxmp = 0, this.hwndTop = 0, this.hwndShadow = 0, this.hwndCtrl = 0, this.widthPercent = 0, this.heightPercent = 0, this.xmpVisable = !0, this.panel = "download-panel", this.playSoure = l.XmpPlaySoure.PLAY_UNKNOWN
        }

        init(e) {
            let t = e.getNativeWindowHandle();
            this.thunderHwnd = t.readUInt32LE(0), a.client.registerFunctions({
                GetCurrentMediaAttribute: this.getCurrentMediaAttribute.bind(this), setBindChildHwnd: (e, ...t) => {
                    this.hwndxmp = t[0]
                }, setFloatChildHwnd: (e, ...t) => {
                    this.hwndFloat = t[0]
                }, setCtrlChildHwnd: (e, ...t) => {
                    this.hwndCtrl = t[0]
                }, setTopChildHwnd: (e, ...t) => {
                    this.hwndTop = t[0]
                }, setShadowHwnd: (e, ...t) => {
                    this.hwndShadow = t[0]
                }, onXmpPositionChange: (e, ...t) => {
                    u.information("onXmpPositionChange"), this.getXmpPosPercent()
                }, setXmpShowMode: (e, ...t) => {
                    u.information("cqm setXmpShowMode mode", t[0]), this.xmpMode = t[0], this.getXmpPosPercent()
                }, getXmpShowMode: e => i(this, void 0, void 0, function* () {
                    return this.xmpMode
                }), showPlayerWindow: (e, t) => {
                    u.information("showPlayerWindow cmdShow", t, "hwndxmp", this.hwndxmp, "hwndFloat", this.hwndFloat), this.updateXmpShowState(t)
                }, hideVideoTipWindow: e => {
                    this.tipPosMap && this.tipPosMap.forEach((e, t) => i(this, void 0, void 0, function* () {
                        h.showWindow(t, l.CmdShow.SW_HIDE)
                    }))
                }, addXmpVideoTipPos: (e, t, n) => {
                    u.information("addXmpVideoTipPos hwnd=", t, " rect=", n), this.addXmpVideoTipPos(t, n)
                }, removeXmpVideoTipPos: (e, t) => {
                    u.information("removeXmpVideoTipPos hwnd=", t), this.removeXmpVideoTipPos(t)
                }, setZorder: e => {
                    this.updateFloatZorder(), this.updateZorder()
                }, updateXmpPostion: (e, t) => {
                    this.updateXmpPos()
                }, updateDownloadEmbedRect: (e, t) => {
                    this.downloadEmbedRect = t, u.information("cqm download rect", t)
                }, updateMiniRect: (e, t) => {
                    this.miniRect = t
                }, updatePanEmbedRect: (e, t) => {
                    this.panEmbedRect = t, u.information("cqm pan rect", t)
                }
            }), e.on("enter-full-screen", () => {
                this.isEnable() && this.updateFloatZorder()
            }), e.on("leave-full-screen", () => {
                this.isEnable() && this.updateWindowPos(!0)
            }), e.on("move", () => {
                (this.isEnable() || this.xmpMode === l.XMPShowMode.MINI_MODE) && (this.updateFloatPanelPos(), this.xmpMode === l.XMPShowMode.EMBED_CHILD_MODE && this.updateFloatZorder(), this.updateXmpVideoTipPos(), this.updateZorder())
            }), e.on("maximize", () => {
                this.isEnable() && (this.updateZorder(), this.delayUpdateWindowPos(), c.crossClient.crossProductCall("windowMaximized").catch())
            }), e.on("unmaximize", () => {
                this.isEnable() && (this.updateZorder(), this.delayUpdateWindowPos(), c.crossClient.crossProductCall("windowUnmaxiMized").catch())
            }), e.on("restore", () => {
                this.isEnable() && (this.updateFloatZorder(), this.showXmpVideoTipWindow(!0), this.updateZorder(), c.crossClient.crossProductCall("windowRestore").catch(), this.delayUpdateWindowPos())
            }), e.on("show", () => {
                this.isEnable() && this.updateZorder()
            }), e.on("hide", () => {
                this.isEnable()
            }), e.on("focus", () => {
                this.isEnable() && this.updateZorder()
            }), e.on("minimize", () => {
                this.isEnable() && (this.showXmpVideoTipWindow(!1), h.showWindow(this.hwndFloat, 0), this.xmpMode === l.XMPShowMode.MINI_MODE && (h.showWindow(this.hwndTop, 0), h.showWindow(this.hwndCtrl, 0), h.showWindow(this.hwndShadow, 0)), c.crossClient.crossProductCall("windowMinimized").catch())
            }), e.on("resize", (e, t) => {
                this.xmpMode < l.XMPShowMode.MINI_MODE || (this.xmpMode === l.XMPShowMode.MINI_MODE && this.resizieXmp(), this.updateXmpPos(), this.updateFloatPanelPos(), this.updateZorder())
            }), this.mainWindow = e, this.tipPosMap = new Map, c.crossClient.connect("xmplite"), c.crossClient.on("OnClientDisconnected", e => {
                "xmplite" === e && (a.client.broadcastEvent("OnXmpDisConnected"), this.xmpMode = l.XMPShowMode.UNKNOWN_MODE, this.hwndxmp = 0, this.hwndFloat = 0, this.hwndCtrl = 0, this.hwndTop = 0, this.hwndShadow = 0, this.panEmbedRect = void 0, this.downloadEmbedRect = void 0, this.miniRect = void 0)
            }), a.client.attachServerEvent("OnHomeTabChange", (e, t, n) => {
                do {
                    if (u.information("cqm OnHomeTabChange", t, "playTaskId", this.playTaskId, "curTask", n, "playSoure", this.playSoure, "xmpMode", this.xmpMode), this.activeKey = t, this.playSoure === l.XmpPlaySoure.PLAY_BY_PAN || this.xmpMode !== l.XMPShowMode.EMBED_CHILD_MODE) break;
                    u.information("cqm curTaskId", n, this.playTaskId, n === this.playTaskId), n === this.playTaskId && ("Preview" === t ? (h.showWindow(this.hwndxmp, l.CmdShow.SW_SHOW), h.showWindow(this.hwndFloat, l.CmdShow.SW_SHOW), this.showXmpVideoTipWindow(!0)) : (h.showWindow(this.hwndxmp, l.CmdShow.SW_HIDE), h.showWindow(this.hwndFloat, l.CmdShow.SW_HIDE), this.showXmpVideoTipWindow(!1)))
                } while (0)
            }), a.client.attachServerEvent("OnSetPlayTaskId", (e, t, n, i) => {
                this.playSoure = i, this.curTaskId = n, this.playTaskId = t
            }), a.client.attachServerEvent("OnNavSelectChange", (e, t, n, i, o) => {
                this.panel = t, u.information("cqm OnNavSelectChange panel", t, "curTaskId", n, "playTaskId", i, "playSoure", o), this.xmpMode !== l.XMPShowMode.MINI_MODE && this.xmpMode !== l.XMPShowMode.EMBED_CHILD_MODE || (o === l.XmpPlaySoure.PLAY_BY_DOWNLOAD ? "download-panel" !== t ? (this.xmpVisable = h.isWindowVisible(this.hwndxmp), this.updateXmpShowState(l.CmdShow.SW_HIDE)) : this.xmpVisable && this.updateXmpShowState(l.CmdShow.SW_SHOW) : o === l.XmpPlaySoure.PLAY_BY_PAN && (u.information("cqm xmpVisable", this.xmpVisable, "panel", t), "pan-plugin-view" !== t ? (this.xmpVisable = h.isWindowVisible(this.hwndxmp), this.updateXmpShowState(l.CmdShow.SW_HIDE)) : this.xmpVisable && this.updateXmpShowState(l.CmdShow.SW_SHOW)))
            })
        }

        updateXmpShowState(e) {
            h.showWindow(this.hwndxmp, e), this.xmpMode === l.XMPShowMode.EMBED_CHILD_MODE && h.showWindow(this.hwndFloat, e), this.xmpMode === l.XMPShowMode.MINI_MODE && (h.showWindow(this.hwndTop, e), h.showWindow(this.hwndCtrl, e), h.showWindow(this.hwndShadow, e)), this.tipPosMap.forEach((t, n) => i(this, void 0, void 0, function* () {
                let t = h.isWindowVisible(n);
                e === l.CmdShow.SW_SHOW ? t && h.showWindow(n, e) : h.showWindow(n, e)
            }))
        }

        getCurrentMediaAttribute(e, ...t) {
            return i(this, void 0, void 0, function* () {
                if (!t || t.length < 1) return;
                let e = t[0];
                return yield c.crossClient.crossProductCall("XmpPlayerGetCurrentMediaAttribute", e)
            })
        }

        getXmpPosPercent() {
            if (u.information("getXmpPosPercent xmpMode", this.xmpMode), this.xmpMode === l.XMPShowMode.MINI_MODE) {
                this.thunderRect = h.getWindowRect(this.thunderHwnd), u.information("getXmpPosPercent thunder rect x", this.thunderRect.x, "y", this.thunderRect.y, "width", this.thunderRect.width, "height", this.thunderRect.height);
                let e = h.getWindowRect(this.hwndxmp), t = 0, n = 0;
                t = e.x + e.width - this.thunderRect.x, n = e.y + e.height - this.thunderRect.y, this.widthPercent = t / this.thunderRect.width, this.heightPercent = n / this.thunderRect.height, u.information("getXmpPosPercent thunder xmp rect x", e.x, "y", e.y, "width", e.width, "height", e.height)
            }
        }

        resizieXmp() {
            let e = h.getWindowRect(this.thunderHwnd), t = h.getWindowRect(this.hwndxmp);
            u.information(" resizieXmp widthPercent", this.widthPercent, "heightPercent", this.heightPercent), u.information(" resizieXmp xmp x", t.x, "y", t.y, "width", t.width, "height", t.height), u.information("resizieXmp thunderCurrentRect x", e.x, "y", e.y, "width", e.width, "height", e.height), t.x = Math.floor(e.width * this.widthPercent) - t.width, t.y = Math.floor(e.height * this.heightPercent) - t.height, u.information("current  x", t.x, "thunderCurrentRect x", e.x, "y", t.y, "thunderCurrentRect y", e.y), t.x = t.x < 0 ? 50 : t.x, t.y = t.y < 0 ? 40 : t.y, t.x = t.x > e.width ? e.width - 50 : t.x, t.y = t.y > e.height ? e.height - 40 : t.y, t.x = t.x + t.width >= e.x + e.width ? e.width - t.width - 50 : t.x, t.y = t.y + t.height >= e.y + e.height ? e.height - t.height - 40 : t.y, h.moveWindow(this.hwndxmp, t.x, t.y, t.width, t.height, !0), u.information("cqm resizeXmp move x", t.x, "y", t.y, "width", t.width, "height", t.height)
        }

        updateZorder() {
            h.setWindowPos(this.hwndxmp, 0, 0, 0, 0, 0, l.Uflag.SWP_NOSIZE | l.Uflag.SWP_NOMOVE | l.Uflag.SWP_ASYNCWINDOWPOS)
        }

        hasParentWindow() {
            let e = h.getParentWnd(this.hwndxmp);
            return void 0 !== e && 0 !== e && null !== e
        }

        updateFloatZorder() {
            h.setWindowPos(this.hwndFloat, 0, 0, 0, 0, 0, l.Uflag.SWP_NOSIZE | l.Uflag.SWP_NOMOVE)
        }

        getDpi() {
            let e = this.mainWindow.getBounds();
            return r.screen.getDisplayMatching(e).scaleFactor
        }

        isEnable() {
            return this.xmpMode === l.XMPShowMode.EMBED_CHILD_MODE
        }

        addXmpVideoTipPos(e, t) {
            this.tipPosMap.set(e, t)
        }

        removeXmpVideoTipPos(e) {
            this.tipPosMap.delete(e)
        }

        updateXmpVideoTipPos() {
            if (this.hasParentWindow() && this.tipPosMap && this.tipPosMap.size > 0) {
                let e = h.getWindowRect(this.hwndxmp), t = 0;
                h.isWindowVisible(this.hwndxmp) || (t = this.mainWindow.getBounds().y), this.tipPosMap.forEach((n, o) => i(this, void 0, void 0, function* () {
                    let i = Math.floor(e.x + n.x), r = Math.floor(t || e.y + n.y),
                        s = Math.floor(n.width > 0 ? n.width : e.width + n.width), a = Math.floor(n.height),
                        d = h.getWindowRect(o);
                    d.x === i && d.y === r && d.width === s && d.height === a || h.setWindowPos(o, 0, i, r, s, a, l.Uflag.SWP_NOZORDER | l.Uflag.SWP_NOACTIVATE)
                }))
            }
        }

        showXmpVideoTipWindow(e) {
            if (h.isWindowVisible(this.thunderHwnd) && !h.isIconic(this.thunderHwnd) && this.tipPosMap && this.tipPosMap.size > 0) {
                let t = h.getWindowRect(this.hwndxmp), n = l.Uflag.SWP_NOACTIVATE;
                n |= e ? l.Uflag.SWP_SHOWWINDOW : l.Uflag.SWP_HIDEWINDOW, this.tipPosMap.forEach((e, o) => i(this, void 0, void 0, function* () {
                    let i = Math.floor(t.x + e.x), r = Math.floor(t.y + e.y),
                        s = Math.floor(e.width > 0 ? e.width : t.width + e.width), a = Math.floor(e.height),
                        d = h.isWindowVisible(o);
                    n === (l.Uflag.SWP_NOACTIVATE | l.CmdShow.SW_SHOW) ? d && h.setWindowPos(o, 0, i, r, s, a, n) : h.setWindowPos(o, 0, i, r, s, a, n)
                }))
            }
        }

        delayUpdateWindowPos() {
            this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = void 0), this.delayTimer = setTimeout(() => {
                this.delayTimer = void 0, this.updateWindowPos(!0)
            }, 40)
        }

        updateXmpControlPosByMiniMode(e) {
            if (this.xmpMode !== l.XMPShowMode.MINI_MODE) return;
            let t = r.screen.getCursorScreenPoint(), n = r.screen.getDisplayNearestPoint(t).scaleFactor;
            this.hwndTop && h.moveWindow(this.hwndTop, e.x, e.y, e.width, Math.round(68 * n), !0), this.hwndCtrl && h.moveWindow(this.hwndCtrl, e.x, e.y + e.height - 82, e.width, 82, !0), this.hwndShadow && h.moveWindow(this.hwndShadow, e.x - 8, e.y - 8, e.width + 16, e.height + 16, !0)
        }

        updateXmpPos() {
            do {
                if (u.information("cqm updateXmpPos xmpMode", this.xmpMode), this.xmpMode < l.XMPShowMode.MINI_MODE) break;
                let e;
                if (u.information("cqm updateXmpPos playTaskId", this.playTaskId, "curTaskId", this.curTaskId, "playSoure", this.playSoure, "activeKey", this.activeKey), this.xmpMode === l.XMPShowMode.EMBED_CHILD_MODE && (e = "download-panel" === this.panel ? this.downloadEmbedRect : this.panEmbedRect), this.xmpMode === l.XMPShowMode.MINI_MODE && (e = this.miniRect), u.information("rect", e, "xmpMode", this.xmpMode), !e) break;
                let t = this.getDpi();
                if (e = {x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t}, this.hwndxmp) {
                    h.moveWindow(this.hwndxmp, e.x, e.y, e.width, e.height, !0);
                    let t = h.getWindowRect(this.hwndxmp);
                    this.hwndFloat && (u.information("cqm hwndFloat currentRect", t), h.moveWindow(this.hwndFloat, t.x, t.y, t.width, t.height, !0)), this.updateXmpControlPosByMiniMode(t)
                }
            } while (0)
        }

        updateWindowPos(e = !1) {
            if (!this.rectChild) return;
            if (u.information("cqm updateWindowPos rectChild", this.rectChild, this.xmpMode, this.keepPosition), this.xmpMode !== l.XMPShowMode.EMBED_CHILD_MODE && this.xmpMode !== l.XMPShowMode.MINI_MODE) return;
            if (h.isIconic(this.thunderHwnd)) return;
            let t = this.getDpi(), n = !1, i = {
                x: this.rectChild.x * t,
                y: this.rectChild.y * t,
                width: this.rectChild.width * t,
                height: this.rectChild.height * t
            }, o = h.getWindowRect(this.thunderHwnd), s = h.getWindowRect(this.hwndxmp);
            u.information("cqm updateWindowPos rect x", o.x, "y", o.y, "width", o.width, "height", o.height), u.information("cqm updateWindowPos rectReal x", i.x, "y", i.y, "width", i.width, "height", i.height), u.information("cqm rectxmp x", s.x, "y", s.y, "width", s.width, "height", s.height), i.x + i.width > o.width && (n = !0, i.width = o.width - i.x);
            let a = Math.floor(350 * t), d = Math.floor(200 * t);
            if (s.width < a && (s.width = a), s.height < d && (s.height = d), s.x + s.width > o.x + o.width && (n = !0, i.x = o.width - i.width), s.y + s.height > o.y + o.height && (n = !0, i.y = o.height - i.height), s.x < 0 && (n = !0), s.y < 0 && (n = !0), i.y + i.height > o.height && (n = !0, i.height = o.height - i.y), i.x < 0 && (i.x = 0, n = !0), i.y < 0 && (i.y = 0, n = !0), i.width < a && (i.width = a, i.x = o.width - a), i.height < d && (i.height = d, i.y = o.height - d), this.hwndxmp) {
                this.keepPosition && !n || (u.information("cqm updateWindowPos hwndxmp ", this.hwndxmp, "rectReal x", i.x, "y", i.y, "width", i.width, "height", i.height), h.moveWindow(this.hwndxmp, i.x, i.y, i.width, i.height, e));
                let t = h.getWindowRect(this.hwndxmp);
                if (this.hwndFloat && h.moveWindow(this.hwndFloat, t.x, t.y, t.width, t.height, !0), this.xmpMode === l.XMPShowMode.MINI_MODE) {
                    let e = r.screen.getCursorScreenPoint(), n = r.screen.getDisplayNearestPoint(e).scaleFactor;
                    this.hwndTop && h.moveWindow(this.hwndTop, t.x, t.y, t.width, Math.round(68 * n), !0), this.hwndCtrl && h.moveWindow(this.hwndCtrl, t.x, t.y + t.height - 82, t.width, 82, !0), this.hwndShadow && h.moveWindow(this.hwndShadow, t.x - 8, t.y - 8, t.width + 16, t.height + 16, !0)
                }
            }
        }

        updateFloatPanelPos() {
            if (this.xmpMode !== l.XMPShowMode.EMBED_CHILD_MODE && this.xmpMode !== l.XMPShowMode.MINI_MODE) return;
            if (h.isIconic(this.thunderHwnd)) return;
            if (!this.hwndxmp) return;
            let e = h.getWindowRect(this.hwndxmp);
            if (this.hwndFloat && h.moveWindow(this.hwndFloat, e.x, e.y, e.width, e.height, !1), this.xmpMode === l.XMPShowMode.MINI_MODE) {
                let t = r.screen.getCursorScreenPoint(), n = r.screen.getDisplayNearestPoint(t).scaleFactor;
                this.hwndTop && h.moveWindow(this.hwndTop, e.x, e.y, e.width, Math.round(68 * n), !1), this.hwndCtrl && h.moveWindow(this.hwndCtrl, e.x, e.y + e.height - 82, e.width, 82, !1), this.hwndShadow && h.moveWindow(this.hwndShadow, e.x - 8, e.y - 8, e.width + 16, e.height + 16, !0)
            }
        }
    }
}, function (e, t, n) {
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
    const o = n(8), r = n(2), s = n(11), a = r.default.getLogger("[Thunder][CrossProduct]");
    t.crossClient = new class extends s.EventEmitter {
        constructor() {
            super(), this.connected = !1, this.contectState = -1
        }

        connect(e, t) {
            a.information(`连接:${e} 中...`), 0 !== this.contectState && (this.connected || (this.contectState = 0, this.productName = e, o.client.start(void 0, e, "" !== e, (e, ...n) => {
                let i = this.connected;
                "connect" === e ? (this.connected = !0, a.information("连接成功..."), this.startRetry(!1)) : (this.connected = !1, this.startRetry(!0)), this.contectState = 1, t && t(this.connected), this.connected !== i && this.emit(this.connected ? "OnClientConencted" : "OnClientDisconnected", this.productName)
            })))
        }

        crossProductCall(e, ...t) {
            return i(this, void 0, void 0, function* () {
                if (this.connected) return o.client.crossCallServerFunction(this.productName, e, ...t)
            })
        }

        corssAttachProductEvent(e, t) {
            return i(this, void 0, void 0, function* () {
                if (this.connected) return o.client.crossAttachServerEvent(this.productName, e, t)
            })
        }

        isConnected() {
            return this.connected
        }

        startRetry(e) {
            e ? this.timer || (this.timer = setInterval(() => {
                this.connect(this.productName)
            }, 2e3)) : this.timer && (clearInterval(this.timer), this.timer = void 0)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(8), r = n(6);
    t.browserWindowCreator = new class {
        constructor() {
            this.inited = !1
        }

        init(e) {
            do {
                if (this.inited) break;
                this.inited = !0, this.parent = e, o.client.registerFunctions({CreateBrowserWindow: this.createBrowserWindow.bind(this)})
            } while (0)
        }

        createBrowserWindow(e, ...t) {
            let n = -1, o = t[0], s = t[1], a = this.parent, l = t[2];
            {
                -1 === s ? a = null : void 0 !== s && null !== s && (a = i.BrowserWindow.fromId(s)), o = o || {}, a && (o.parent = a);
                let e = Object.assign({}, o, {
                    show: !1,
                    webPreferences: {
                        webSecurity: "development" !== process.env.RUN_ENV,
                        preload: `file:///${__rootDir}/out/plugin-boot.js`
                    }
                }), t = new i.BrowserWindow(e);
                t.on("ready-to-show", () => {
                    r.roundRectWindow(t, a), !1 !== o.show && t.show()
                }), n = t.id, l && t.loadURL(l)
            }
            return n
        }
    }
}]);
//# sourceMappingURL=main.js.map