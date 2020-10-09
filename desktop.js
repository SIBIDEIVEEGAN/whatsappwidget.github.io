var Cookie = function() {
        function a() {}
        return a.set = function(a, b, c, d, e, f) {
            void 0 === c && (c = null), void 0 === d && (d = null), void 0 === e && (e = null), void 0 === f && (f = !1);
            var g = a + "=" + encodeURIComponent(b.toString()) + "; ";
            if (g += "path=" + (d || "/") + "; ", g += "samesite=lax; ", c)
                if ("string" == typeof c || c instanceof String) g += "expires=" + c + "; ";
                else {
                    var h = new Date;
                    h.setTime(h.getTime() + 1e3 * c), g += "expires=" + h.toUTCString() + "; "
                } e && (g += "domain=" + e + "; "), f && (g += "secure; "), document.cookie = g
        }, a.get = function(a) {
            for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                for (var e = c[d];
                    " " == e.charAt(0);) e = e.substring(1);
                if (0 == e.indexOf(b)) return decodeURIComponent(e.substring(b.length, e.length))
            }
            return null
        }, a.check = function(a) {
            return null !== this.get(a)
        }, a.remove = function(a) {
            this.set(a, "", "Thu, 01 Jan 1970 00:00:01 GMT")
        }, a
    }(),
    WidgetDetect = function() {
        function a() {}
        return a.isIOS = function() {
            return /ip(hone|od|ad)/i.test(a.getUserAgent())
        }, a.isAndroid = function() {
            return -1 !== a.getUserAgent().indexOf("android")
        }, a.isMobile = function() {
            var b = a.isIOS() || a.isAndroid();
            if (!1 === b) {
                var c = a.getUserAgent();
                b = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0, 4))
            }
            return b
        }, a.getUserAgent = function() {
            return navigator.userAgent || navigator.vendor || window.opera
        }, a.isChromeBasedBrowser = function() {
            return -1 !== navigator.userAgent.indexOf("Chrome")
        }, a.getBrowserName = function() {
            for (var b = a.getUserAgent().toLowerCase(), c = ["firefox", "trident", "edge", "edg", "opera", "chrome", "safari"], d = 0, e = c; d < e.length; d++) {
                var f = e[d];
                if (b.indexOf(f) > -1) return f
            }
        }, a
    }(),
    WidgetDOM = function() {
        function a() {}
        return a.addStyle = function(a) {
            var b = document.createElement("style");
            b.type = "text/css", b.textContent = a, document.body.insertBefore(b, document.body.getElementsByTagName("*")[0])
        }, a.addScript = function(a, b) {
            void 0 === b && (b = null);
            var c = document.createElement("script");
            c.setAttribute("src", a), c.setAttribute("type", "text/javascript"), c.setAttribute("async", "true"), b && (c.onload = b), document.body.appendChild(c)
        }, a.addInlineScript = function(a, b) {
            void 0 === b && (b = null);
            var c = document.createElement("script");
            c.innerHTML = a, c.setAttribute("type", "text/javascript"), b && (c.onload = b), document.body.appendChild(c)
        }, a.unsetClass = function(a, b) {
            a.className = (" " + a.className + " ").replace(" " + b + " ", " ").replace(/^ /, "").replace(/ $/, "")
        }, a.hasClass = function(a, b) {
            return a.className == b || -1 !== (" " + a.className + " ").indexOf(" " + b + " ")
        }, a.addMeta = function(a) {
            var b = document.createElement("meta");
            b.id = a, b.name = "viewport", b.content = "width=device-width, initial-scale=1.0", document.getElementsByTagName("head")[0].appendChild(b)
        }, a.isViewportExist = function() {
            for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; b++)
                if ("viewport" === a[b].name) return !0;
            return !1
        }, a.addLink = function(a) {
            var b = document.createElement("link");
            b.type = "text/css", b.href = a, b.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(b)
        }, a.addDiv = function(a, b, c) {
            void 0 === c && (c = !0);
            var d = document.createElement("div");
            return d.id = a, "string" == typeof b || b instanceof String ? d.innerHTML = b.toString() : d.appendChild(b), c ? document.body.insertBefore(d, document.body.getElementsByTagName("*")[0]) : document.body.appendChild(d), d
        }, a.addDivClear = function(b) {
            var c = document.createElement("div");
            return a.setClass(c, "clear"), b.appendChild(c), b
        }, a.addMetricsIframe = function(a, b) {
            var c = document.createElement("iframe");
            c.id = b, c.style.display = "none", c.setAttribute("src", a), document.body.appendChild(c)
        }, a
    }();
WidgetDOM.setClass = function(a, b) {
    WidgetDOM.hasClass(a, b) || (a.className += " " + b)
}, WidgetDOM.toggleClass = function(a, b) {
    WidgetDOM.hasClass(a, b) ? WidgetDOM.unsetClass(a, b) : WidgetDOM.setClass(a, b)
};
var WidgetHelper = function() {
        function a() {}
        return a.encodeGetParams = function(a) {
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
            return 0 === b.length ? "" : b.join("&")
        }, a.extend = function() {
            for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
            if (0 === a.length) return null;
            if (1 === a.length) return a[0];
            for (var c = a[0], d = 1; d < a.length; d++) {
                var e = a[d];
                for (var f in e) e.hasOwnProperty(f) && (c[f] = e[f])
            }
            return c
        }, a.isArray = function(a) {
            return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
        }, a.isObject = function(a) {
            return null !== a && "object" == typeof a
        }, a.isString = function(a) {
            return "string" == typeof a
        }, a.debounce = function(a, b) {
            var c = !1;
            return function() {
                c || (a.apply(this, arguments), c = !0, setTimeout(function() {
                    return c = !1
                }, b))
            }
        }, a
    }(),
    WidgetElement = function() {
        function a() {}
        return a.getCssFromElement = function(a) {
            var b = window.getComputedStyle(a);
            return b || null
        }, a.getCssPropertyFromElement = function(b, c) {
            var d = a.getCssFromElement(b);
            return d && d[c] && "none" !== d[c] ? d[c] : null
        }, a.getCssMaxWIdthFromElement = function(b) {
            var c = a.getCssPropertyFromElement(b, "maxWidth");
            if (!c) return null;
            try {
                return parseInt(c.replace("px", ""))
            } catch (a) {
                return null
            }
        }, a.getCssWIdthFromElement = function(b) {
            var c = a.getCssPropertyFromElement(b, "width");
            if (!c) return null;
            try {
                return parseInt(c.replace("px", ""))
            } catch (a) {
                return null
            }
        }, a.getHTMLChildren = function(b) {
            try {
                var c = b.children;
                if (c) return c
            } catch (a) {}
            for (var d = [], e = 0; e < b.childNodes.length; e++) {
                var f = b.childNodes[e];
                a.isHTMLElement(f) && d.push(f)
            }
            return d
        }, a.isHTMLElement = function(a) {
            return !!a.getAttribute
        }, a
    }(),
    DesktopClickButtonBase = function() {
        function a(a, b) {
            this.data = a, this.options = b
        }
        return a.prototype.runButtonActionAfterAnimation = function() {
            this._runButtonActionAfterAnimation()
        }, a.prototype.getLinkOptions = function() {
            return ButtonBase.getDefaultLinkOptionsWithParent(this.data.parent)
        }, a.prototype.isExistActionState = function() {
            return !0
        }, a
    }(),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    DesktopClickButtonActivator = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype._runButtonActionAfterAnimation = function() {}, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    DesktopClickButtonCall = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype._runButtonActionAfterAnimation = function() {
            var a = this.data,
                b = {
                    name: a.name,
                    title: a.title,
                    pwdByHide: this.options.isPro && !this.options.isBranding,
                    content: {
                        callPhone: '<a href="tel://' + a.call + '">' + a.call + "</a>"
                    }
                };
            new WidgetMessengerPopup(b)
        }, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    __assign = this && this.__assign || Object.assign || function(a) {
        for (var b, c = 1, d = arguments.length; c < d; c++) {
            b = arguments[c];
            for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
        }
        return a
    },
    DesktopClickButtonEmail = function(a) {
        function b(b, c) {
            var d = a.call(this, b, c) || this;
            return d.email = null, d.email = b.email, d
        }
        return __extends(b, a), b.prototype.getLink = function() {
            return "mailto:" + this.email
        }, b.prototype._runButtonActionAfterAnimation = function() {}, b.prototype.getLinkOptions = function() {
            return __assign({}, ButtonBase.getDefaultLinkOptionsWithParent(this.data.parent), {
                href: this.getLink(),
                target: "_blank"
            })
        }, b.prototype.isExistActionState = function() {
            return !1
        }, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    __assign = this && this.__assign || Object.assign || function(a) {
        for (var b, c = 1, d = arguments.length; c < d; c++) {
            b = arguments[c];
            for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
        }
        return a
    },
    DesktopClickButtonFacebook = function(a) {
        function b() {
            var b = null !== a && a.apply(this, arguments) || this;
            return b.openLinkBrowsers = ["firefox", "edg", "safari"], b
        }
        return __extends(b, a), b.prototype._runButtonActionAfterAnimation = function() {
            if (this.showPopup()) {
                var a = this.data,
                    b = {
                        name: a.name,
                        title: a.title,
                        pwdByHide: !0,
                        content: {
                            fbIframeURL: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F" + a.fbPageId + "&tabs=messages&width=302&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                        }
                    };
                new WidgetMessengerPopup(b)
            }
        }, b.prototype.getLink = function() {
            var a = this.data;
            return "safari" === WidgetDetect.getBrowserName() ? "https://www.facebook.com/messages/t/" + a.fbPageId : "https://m.me/" + a.fbPageId
        }, b.prototype.getLinkOptions = function() {
            return this.showPopup() ? ButtonBase.getDefaultLinkOptionsWithParent(this.data.parent) : __assign({}, ButtonBase.getDefaultLinkOptionsWithParent(this.data.parent), {
                href: this.getLink(),
                target: "_blank"
            })
        }, b.prototype.showPopup = function() {
            var a = WidgetDetect.getBrowserName();
            return a && -1 === this.openLinkBrowsers.indexOf(a)
        }, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    __assign = this && this.__assign || Object.assign || function(a) {
        for (var b, c = 1, d = arguments.length; c < d; c++) {
            b = arguments[c];
            for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
        }
        return a
    },
    DesktopClickButtonInstagram = function(a) {
        function b(b, c) {
            var d = a.call(this, b, c) || this;
            return d.username = null, d.username = b.username, d
        }
        return __extends(b, a), b.prototype.getLink = function() {
            return "https://www.instagram.com/" + this.username
        }, b.prototype._runButtonActionAfterAnimation = function() {}, b.prototype.getLinkOptions = function() {
            return __assign({}, ButtonBase.getDefaultLinkOptionsWithParent(this.data.parent), {
                href: this.getLink(),
                target: "_blank"
            })
        }, b.prototype.isExistActionState = function() {
            return !1
        }, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    DesktopClickButtonLine = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype._runButtonActionAfterAnimation = function() {
            var a = this.data,
                b = {
                    name: a.name,
                    title: a.title,
                    pwdByHide: this.options.isPro && !this.options.isBranding,
                    content: {
                        lineIframeURL: a.url
                    }
                };
            new WidgetMessengerPopup(b)
        }, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    DesktopClickButtonMessenger = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype._runButtonActionAfterAnimation = function() {
            var a = this.data,
                b = {
                    name: a.name,
                    title: a.title,
                    pwdByHide: !0,
                    content: {
                        fbIframeURL: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F" + a.fbPageId + "&tabs=messages&width=302&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                    }
                };
            new WidgetMessengerPopup(b)
        }, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    DesktopClickButtonSnapchat = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype._runButtonActionAfterAnimation = function() {
            var a = this.data,
                b = {
                    name: a.name,
                    title: a.title,
                    pwdByHide: this.options.isPro && !this.options.isBranding,
                    content: {
                        snapchatQRCode: '<object data="https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username=' + a.snapUser + '&amp;type=PNG" type="image/png" height="200px" width="200px"></object>',
                        snapchatUser: a.snapUser
                    }
                };
            new WidgetMessengerPopup(b)
        }, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    __assign = this && this.__assign || Object.assign || function(a) {
        for (var b, c = 1, d = arguments.length; c < d; c++) {
            b = arguments[c];
            for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
        }
        return a
    },
    DesktopClickButtonTelegram = function(a) {
        function b(b, c) {
            var d = a.call(this, b, c) || this;
            return d.botName = null, d.botName = b.botName, d
        }
        return __extends(b, a), b.prototype.getLink = function() {
            return "https://telegram.me/" + this.botName
        }, b.prototype._runButtonActionAfterAnimation = function() {}, b.prototype.getLinkOptions = function() {
            return __assign({}, ButtonBase.getDefaultLinkOptionsWithParent(this.data.parent), {
                href: this.getLink(),
                target: "_blank"
            })
        }, b.prototype.isExistActionState = function() {
            return !1
        }, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    DesktopClickButtonViber = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype._runButtonActionAfterAnimation = function() {
            var a, b, c, d = this.data,
                e = "wh-viber-account";
            if (this.options.isPro && !this.options.isBranding && (e += " wh-viber-account--pwd-hidden"), /^[0-9 ()+-]+$/.test(d.publicAccount)) {
                var f = d.publicAccount.replace(/\D+/g, "").replace(/^[0]+/g, "");
                a = "viber://chat?number=+" + f, b = '<a href="' + a + '">' + d.publicAccount + "<br><span>(Open in Viber for Desktop)</span></a>", c = '<img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=viber://add?number=' + f + '&chld=H|1">'
            } else a = "viber://pa?chatURI=" + encodeURIComponent(d.publicAccount), b = '<a href="' + a + '">' + d.publicAccount + "<br><span>(Open in Viber for Desktop)</span></a>", c = '<img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + a + '&chld=H|1">';
            var g = {
                name: d.name,
                title: d.title,
                pwdByHide: this.options.isPro && !this.options.isBranding,
                content: {
                    viberQRCode: c + '<div class="' + e + '">' + b + "</div>"
                }
            };
            new WidgetMessengerPopup(g)
        }, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    __assign = this && this.__assign || Object.assign || function(a) {
        for (var b, c = 1, d = arguments.length; c < d; c++) {
            b = arguments[c];
            for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
        }
        return a
    },
    DesktopClickButtonVkontakte = function(a) {
        function b(b, c) {
            var d = a.call(this, b, c) || this;
            return d.page = null, d.page = b.page, d
        }
        return __extends(b, a), b.prototype.getLink = function() {
            return "https://vk.me/" + this.page
        }, b.prototype._runButtonActionAfterAnimation = function() {}, b.prototype.getLinkOptions = function() {
            return __assign({}, ButtonBase.getDefaultLinkOptionsWithParent(this.data.parent), {
                href: this.getLink(),
                target: "_blank"
            })
        }, b.prototype.isExistActionState = function() {
            return !1
        }, b
    }(DesktopClickButtonBase),
    __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    __assign = this && this.__assign || Object.assign || function(a) {
        for (var b, c = 1, d = arguments.length; c < d; c++) {
            b = arguments[c];
            for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
        }
        return a
    },
    DesktopClickButtonWhatsapp = function(a) {
        function b(b, c) {
            var d = a.call(this, b, c) || this;
            return d.phone = null, d.phone = b.phone, d
        }
        return __extends(b, a), b.prototype._runButtonActionAfterAnimation = function() {}, b.prototype.getLink = function() {
            return "https://api.whatsapp.com/send?text=Hi&phone=" + this.phone.replace(/\D+/g, "").replace(/^[0]+/g, "")
        }, b.prototype.getLinkOptions = function() {
            return __assign({}, ButtonBase.getDefaultLinkOptionsWithParent(this.data.parent), {
                href: this.getLink(),
                target: "_blank"
            })
        }, b.prototype.isExistActionState = function() {
            return !1
        }, b
    }(DesktopClickButtonBase),
    MessengerName = function() {
        function a() {}
        return a
    }();
MessengerName.MSG_FACEBOOK = "facebook", MessengerName.MSG_WHATSAPP = "whatsapp", MessengerName.MSG_SNAPCHAT = "snapchat", MessengerName.MSG_VIBER = "viber", MessengerName.MSG_LINE = "line", MessengerName.MSG_TELEGRAM = "telegram", MessengerName.MSG_VKONTAKTE = "vkontakte", MessengerName.MSG_EMAIL = "email", MessengerName.MSG_SMS = "sms", MessengerName.MSG_CALL = "call", MessengerName.MSG_INSTAGRAM = "instagram";
var SvgFactory = function() {
    function a() {}
    return a.create = function(b) {
        var c = a.getSvgParamsByType(b);
        return null === c ? null : a.createSVGByParams(b, c)
    }, a.getSvgPath = function(b) {
        var c = a.getSvgParamsByType(b);
        return null === c ? null : a.getSvgPathString(c)
    }, a.getSvgViewBox = function(b) {
        var c = a.getSvgParamsByType(b);
        return null !== c && c.viewBox ? c.viewBox : a.defaultViewBox
    }, a.getSvgParamsByType = function(b) {
        var c = null;
        switch (b) {
            case MessengerName.MSG_FACEBOOK:
                c = a.facebookData;
                break;
            case MessengerName.MSG_LINE:
                c = a.lineData;
                break;
            case MessengerName.MSG_SNAPCHAT:
                c = a.snapchatData;
                break;
            case MessengerName.MSG_VIBER:
                c = a.viberData;
                break;
            case MessengerName.MSG_WHATSAPP:
                c = a.whatsappData;
                break;
            case "close":
                c = a.closeData;
                break;
            case MessengerName.MSG_VKONTAKTE:
                c = a.vkontakteData;
                break;
            case MessengerName.MSG_TELEGRAM:
                c = a.telegramData;
                break;
            case MessengerName.MSG_EMAIL:
                c = a.emailData;
                break;
            case MessengerName.MSG_SMS:
                c = a.smsData;
                break;
            case MessengerName.MSG_CALL:
                c = a.callData;
                break;
            case MessengerName.MSG_INSTAGRAM:
                c = a.instagramData
        }
        return c
    }, a.getSvgPathString = function(a) {
        for (var b = "", c = 0; c < a.path.length; c++) {
            var d = "";
            a.path[c].opacity && (d = ' opacity="' + a.path[c].opacity + '"'), b = b + '<path d=" ' + a.path[c].d + '"' + d + ' fill-rule="evenodd"></path>'
        }
        return b
    }, a.getSvgClass = function(b) {
        return a.svgClassPrefix + b
    }, a.createSVGByParams = function(b, c) {
        var d = document.createElement("svg");
        return d.setAttribute("xmlns", "http://www.w3.org/2000/svg"), d.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), d.setAttribute("viewBox", c.viewBox ? c.viewBox : a.defaultViewBox), d.className = a.getSvgClass(b), d.innerHTML = a.getSvgPathString(c), d
    }, a
}();
SvgFactory.facebookData = {
    path: [{
        d: "M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z"
    }]
}, SvgFactory.lineData = {
    path: [{
        d: "M27 14.926C27 10.006 22.065 6 16 6S5 10.005 5 14.926c0 4.413 3.913 8.11 9.2 8.808.358.077.845.236.968.542.112.278.073.713.036.995l-.157.942c-.048.28-.22 1.088.953.593 1.174-.494 6.334-3.73 8.642-6.386C26.236 18.67 27 16.896 27 14.925zm-4.247-.41a.577.577 0 0 1 0 1.153h-1.61v1.03h1.61a.578.578 0 0 1 0 1.155h-2.186a.578.578 0 0 1-.577-.577v-4.37c0-.32.26-.578.577-.578h2.186a.578.578 0 0 1 0 1.153h-1.61v1.033h1.61zm-3.537 2.762a.575.575 0 0 1-.578.577.58.58 0 0 1-.46-.23l-2.24-3.05v2.703a.577.577 0 0 1-1.154 0v-4.37a.577.577 0 0 1 1.038-.347l2.24 3.05v-2.703a.578.578 0 0 1 1.154 0v4.37zm-5.26 0a.577.577 0 0 1-1.154 0v-4.37a.577.577 0 0 1 1.153 0v4.37zm-2.262.577H9.508a.577.577 0 0 1-.576-.577v-4.37a.577.577 0 0 1 1.153 0V16.7h1.61a.577.577 0 0 1 0 1.155z"
    }]
}, SvgFactory.snapchatData = {
    viewBox: "0 0 512 512",
    path: [{
        d: "m 254.23192,67.745656 c -24.1553,0.16536 -49.1333,6.57616 -68.7188,22.0625 -14.667,11.577654 -26.19916,26.921164 -33.46871,44.062504 -0.0109,0.0415 -0.0213,0.0832 -0.0312,0.125 -6.92358,17.66206 -6.28241,36.45908 -5.34375,53.875 4.9e-4,0.0106 -4.9e-4,0.0207 0,0.0312 0.57046,12.24111 1.9192,24.09182 0.78125,35.34375 -0.0919,0.43802 -0.096,0.54776 -0.15625,0.8125 -5.44516,0.98701 -11.372,0.62902 -17.25,-0.5 -0.0312,-2.9e-4 -0.0625,-2.9e-4 -0.0937,0 -4.02639,-0.69306 -8.32797,-2.35229 -13.1875,-3.71875 -0.0828,-0.023 -0.16615,-0.0438 -0.25,-0.0625 -4.71633,-1.07824 -9.35242,0.29501 -12.90625,2.9375 -0.0457,0.0296 -0.10985,0.0635 -0.15625,0.0937 -0.071,0.054 -0.14865,0.10124 -0.21875,0.15625 -2.89265,1.9156 -6.854978,5.13197 -7.062498,10.71875 -0.009,0.36655 0.0225,0.73407 0.0937,1.09375 0.62464,3.28299 2.64407,5.68343 4.437498,7.25 1.79342,1.56657 3.48778,2.60119 4.53125,3.40625 0.0814,0.0651 0.16474,0.12762 0.25,0.1875 8.79695,5.93514 18.53281,8.54299 27,11.84375 0.009,0.003 0.0225,-0.003 0.0312,0 5.86205,2.59731 10.95592,6.63609 12.125,11.71875 1.45977,6.42713 -1.2468,13.80558 -4.78125,20.96875 -0.004,0.009 0.004,0.0226 0,0.0312 -9.53334,18.98565 -23.69089,35.49609 -41.093748,47.59375 -9.12374,6.29511 -19.416525,10.9945 -30.156305,13.9064 -0.148149,0.0453 -0.294192,0.0974 -0.4375,0.15625 -2.20374,0.82986 -7.42924,1.37247 -10.71875,6.375 -0.233793,0.34937 -0.423282,0.72835 -0.5625,1.125 -1.10923,3.2168 0.1562,6.67058 1.71875,8.5625 1.4921,1.80662 3.15667,2.85786 4.59375,3.625 0.0735,0.043 0.1451,0.0824 0.21875,0.125 9.04276,5.22608 18.918595,7.49157 27.937505,9.8125 0.0415,0.0109 0.0832,0.0213 0.125,0.0312 6.4981,1.47977 12.488738,2.27029 17.374998,4.375 0.23923,0.40234 0.72852,2.05832 1.875,4.8125 1.60151,4.99968 2.32952,10.9037 4.1875,17.09375 0.50804,1.71342 2.00225,3.09556 3.75,3.46875 4.104,0.87193 6.36119,-0.53617 6.71875,-0.5625 0.16758,-0.0124 0.33452,-0.0333 0.5,-0.0625 15.10019,-2.6468 30.16835,-4.99383 43.99996,-1.5 0.01,0.003 0.021,-0.003 0.031,0 14.516,3.82363 27.1309,13.91446 41.3438,22.59375 0.025,0.0154 0.037,0.0471 0.062,0.0625 l 0,-0.0312 c 9.4342,5.98646 20.3393,11.8485 32.9375,12.28125 l 0,0.0312 c 0.042,10e-4 0.083,-10e-4 0.125,0 9.5155,0.53896 18.855,-0.0657 27.9687,-0.6875 0.0521,8.1e-4 0.1042,8.1e-4 0.1563,0 7.8038,-0.77302 15.3807,-3.37002 22,-7.625 0.094,-0.0535 0.1876,-0.10258 0.2812,-0.15625 14.9452,-8.56344 28.2258,-18.88234 42.7813,-25.34375 0.021,-0.008 0.042,-0.0237 0.062,-0.0312 4.7208,-1.71157 10.6189,-1.61506 17.1875,-2.0625 0.062,-0.002 0.125,0.002 0.1875,0 12.0527,-0.3721 24.1283,0.27414 36.0937,1.875 0.41448,0.0522 0.83552,0.0522 1.25,0 1.5714,-0.1864 3.2889,-1.24155 4.125,-2.3125 0.8361,-1.07095 1.077,-1.94318 1.25,-2.5625 0.3462,-1.23864 0.667,-1.83102 0.094,-0.8125 0.1817,-0.31606 0.3287,-0.65205 0.4375,-1 2.1971,-7.28002 3.3925,-13.86797 6.9375,-17.96875 1.5929,-1.55716 4.334,-2.33886 7.4375,-2.28125 0.22952,0.005 0.45941,-0.005 0.6875,-0.0312 10.4024,-1.23133 19.8052,-4.98696 28.7188,-8.1875 0.10556,-0.0382 0.20984,-0.0799 0.3126,-0.12505 3.3113,-1.44341 8.2453,-3.09963 11.625,-7.84375 0.018,-0.0254 0.044,-0.0369 0.062,-0.0625 l -0.031,-0.0312 c 2.8428,-3.9725 1.523,-9.42469 -2.5,-11.90625 l 0.062,-0.0625 c -0.1275,-0.0867 -0.2474,-0.13595 -0.375,-0.21875 -0.034,-0.0186 -0.059,-0.0444 -0.094,-0.0625 l 0,0.0312 c -4.8259,-3.10006 -9.6612,-3.53092 -12.7187,-4.65625 -0.0621,-0.0221 -0.1246,-0.0429 -0.1875,-0.0625 -20.6872,-6.63568 -38.5778,-20.92111 -51.9375,-38.3125 -7.4172,-9.69129 -13.6899,-20.22202 -17.8438,-31.46875 -0.014,-0.041 -0.018,-0.084 -0.031,-0.125 -1.6262,-4.88353 -1.7077,-10.20902 0.6875,-13.4375 0.0317,-0.0308 0.0631,-0.062 0.094,-0.0937 3.7366,-5.36839 10.5935,-8.81878 17.9063,-11.53125 0.03,-0.0104 0.064,-0.0208 0.094,-0.0312 8.0819,-2.81157 16.9263,-6.08686 24.2187,-12.5625 0.0318,-0.0308 0.0631,-0.062 0.094,-0.0937 1.1283,-1.06695 2.4852,-2.45602 3.5,-4.53125 1.0149,-2.07523 1.4961,-5.31032 0.1563,-8.125 3e-5,-0.0104 3e-5,-0.0208 0,-0.0312 -2.1044,-4.33549 -5.774,-6.5662 -8.5,-8.1875 -0.0103,-3e-5 -0.0207,-3e-5 -0.031,0 -4.5673,-2.66592 -9.8816,-2.83887 -14.5,-1.34375 -0.01,0.003 -0.021,-0.003 -0.031,0 -0.031,0.0101 -0.063,0.021 -0.094,0.0312 -4.9892,1.51835 -9.0624,3.33391 -12.8438,3.8125 -0.0839,0.0187 -0.16722,0.0395 -0.25,0.0625 -5.3737,0.95777 -10.5773,1.18779 -14.625,-0.3125 -0.038,-0.60649 -0.057,-1.79013 -0.2187,-3.25 l 0.031,0 c -0.2988,-8.9153 0.4565,-18.10604 0.5937,-27.625 3e-4,-0.0212 -3e-4,-0.0413 0,-0.0625 0.4112,-14.46318 0.9948,-29.35295 -1.125,-44.34375 -0.009,-0.0731 -0.0191,-0.14607 -0.031,-0.21875 -4.6154,-25.28753 -20.687,-47.06736 -41.0625,-61.562504 -14.8121,-10.50987 -32.3972,-16.37581 -50.25,-18.03125 -0.01,-0.001 -0.021,0.001 -0.031,0 -5.9912,-0.60487 -11.9741,-0.81945 -17.9375,-0.75 z"
    }]
}, SvgFactory.viberData = {
    path: [{
        d: "M21.176 27c-.208-.062-.618-.13-.987-.303-6.476-3.02-11.18-7.972-13.853-15.082-.897-2.383.04-4.396 2.298-5.22.405-.147.802-.157 1.2.002.964.383 3.404 4.022 3.458 5.11.042.835-.48 1.287-1 1.67-.983.722-.988 1.638-.568 2.66.948 2.308 2.567 3.895 4.663 4.925.76.374 1.488.337 2.007-.515.925-1.518 2.06-1.445 3.3-.502.62.473 1.253.936 1.844 1.45.8.702 1.816 1.285 1.336 2.754-.5 1.527-2.226 3.066-3.7 3.05zm-4.76-20.986c4.546.166 8.46 4.677 8.406 9.543-.005.478.153 1.185-.504 1.172-.628-.015-.464-.733-.52-1.21-.603-5.167-2.786-7.606-7.52-8.394-.392-.066-.99.026-.96-.535.044-.833.754-.523 1.097-.576zm6.072 8.672c-.045.356.147.968-.385 1.056-.72.118-.58-.595-.65-1.053-.48-3.144-1.5-4.297-4.423-5.005-.43-.105-1.1-.032-.99-.75.108-.685.71-.452 1.164-.393 2.92.38 5.307 3.126 5.284 6.144zm-2.222-.573c.013.398-.026.818-.46.874-.314.04-.52-.245-.553-.597-.12-1.296-.75-2.062-1.95-2.27-.36-.063-.712-.19-.544-.715.11-.352.408-.387.712-.396 1.297-.036 2.815 1.647 2.794 3.103z"
    }]
}, SvgFactory.whatsappData = {
    path: [{
        d: "M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
    }]
}, SvgFactory.closeData = {
    viewBox: "-9 -10 41 44",
    path: [{
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    }]
}, SvgFactory.vkontakteData = {
    viewBox: "0 0 32 32",
    path: [{
        d: "M26.712 10.96s-.167-.48-1.21-.348l-3.447.024a.785.785 0 0 0-.455.072s-.204.108-.3.37a22.1 22.1 0 0 1-1.28 2.695c-1.533 2.61-2.156 2.754-2.407 2.587-.587-.372-.43-1.51-.43-2.323 0-2.54.382-3.592-.756-3.868-.37-.084-.646-.144-1.616-.156-1.232-.012-2.274 0-2.86.287-.396.193-.695.624-.515.648.227.036.742.143 1.017.515 0 0 .3.49.347 1.568.13 2.982-.48 3.353-.48 3.353-.466.252-1.28-.167-2.478-2.634 0 0-.694-1.222-1.233-2.563-.097-.25-.288-.383-.288-.383s-.216-.168-.527-.216l-3.28.024c-.504 0-.683.228-.683.228s-.18.19-.012.587c2.562 6.022 5.483 9.04 5.483 9.04s2.67 2.79 5.7 2.597h1.376c.418-.035.634-.263.634-.263s.192-.214.18-.61c-.024-1.843.838-2.12.838-2.12.838-.262 1.915 1.785 3.065 2.575 0 0 .874.6 1.532.467l3.064-.048c1.617-.01.85-1.352.85-1.352-.06-.108-.442-.934-2.286-2.647-1.916-1.784-1.665-1.496.658-4.585 1.413-1.88 1.976-3.03 1.796-3.52z"
    }]
}, SvgFactory.telegramData = {
    viewBox: "0 0 32 32",
    path: [{
        d: "M15.02 20.814l9.31-12.48L9.554 17.24l1.92 6.42c.225.63.114.88.767.88l.344-5.22 2.436 1.494z",
        opacity: ".6"
    }, {
        d: "M12.24 24.54c.504 0 .727-.234 1.008-.51l2.687-2.655-3.35-2.054-.344 5.22z",
        opacity: ".3"
    }, {
        d: "M12.583 19.322l8.12 6.095c.926.52 1.595.25 1.826-.874l3.304-15.825c.338-1.378-.517-2.003-1.403-1.594L5.024 14.727c-1.325.54-1.317 1.29-.24 1.625l4.98 1.58 11.53-7.39c.543-.336 1.043-.156.633.214"
    }]
}, SvgFactory.smsData = {
    path: [{
        d: "M21 23h4.01c1.1 0 1.99-.893 1.99-1.994V8.994C27 7.894 26.11 7 25.01 7H6.99C5.89 7 5 7.893 5 8.994v12.012C5 22.106 5.89 23 6.99 23h9.566l3.114 3.504c.73.82 1.33.602 1.33-.5V23zM10.515 12.165c.36.11.682.26.962.446l-.413.88a3.882 3.882 0 0 0-.915-.416 2.9 2.9 0 0 0-.82-.136c-.3 0-.536.054-.707.16a.512.512 0 0 0-.256.46c0 .173.055.32.167.437.11.12.252.214.42.285.17.072.408.152.714.24.4.12.725.236.977.35.252.117.467.29.644.518.177.228.266.526.266.892 0 .344-.095.647-.285.907-.19.26-.453.46-.79.6-.338.14-.724.212-1.16.212-.45 0-.888-.086-1.31-.255a3.673 3.673 0 0 1-1.11-.684l.434-.863c.3.276.628.49.985.64.356.15.695.224 1.017.224.35 0 .622-.063.816-.19a.598.598 0 0 0 .292-.528.618.618 0 0 0-.174-.45 1.212 1.212 0 0 0-.43-.28 9.65 9.65 0 0 0-.713-.237 7.414 7.414 0 0 1-.977-.347 1.75 1.75 0 0 1-.637-.498c-.177-.22-.266-.51-.266-.877 0-.334.09-.625.27-.874.18-.25.434-.443.76-.578.324-.135.7-.202 1.127-.202.38 0 .75.055 1.11.165zm7.732 5.8l-.01-4.424-1.87 3.806h-.653l-1.867-3.805v4.426h-.942V12.04h1.186l1.955 3.938 1.945-3.937h1.178v5.926h-.92zm5.728-5.8c.36.11.68.26.962.446l-.413.88a3.882 3.882 0 0 0-.915-.416 2.9 2.9 0 0 0-.82-.136c-.3 0-.537.054-.707.16a.512.512 0 0 0-.257.46c0 .173.056.32.168.437.11.12.252.214.42.285.17.072.408.152.714.24.4.12.725.236.977.35.252.117.467.29.644.518.177.228.266.526.266.892 0 .344-.095.647-.285.907-.19.26-.453.46-.79.6-.338.14-.724.212-1.16.212-.45 0-.888-.086-1.31-.255a3.673 3.673 0 0 1-1.11-.684l.434-.863c.3.276.628.49.985.64.356.15.695.224 1.017.224.35 0 .622-.063.816-.19a.598.598 0 0 0 .29-.528.618.618 0 0 0-.172-.45 1.212 1.212 0 0 0-.43-.28 9.65 9.65 0 0 0-.713-.237 7.414 7.414 0 0 1-.977-.347 1.75 1.75 0 0 1-.637-.498c-.177-.22-.266-.51-.266-.877 0-.334.09-.625.27-.874.18-.25.434-.443.76-.578.324-.135.7-.202 1.126-.202.38 0 .75.055 1.112.165z"
    }]
}, SvgFactory.instagramData = {
    viewBox: "0 0 32 32",
    path: [{
        d: "m20.97355,5l-9.88537,0c-3.35702,0 -6.08818,2.73129 -6.08818,6.08831l0,9.88537c0,3.35715 2.73116,6.08831 6.08818,6.08831l9.88537,0c3.35728,0 6.08844,-2.73129 6.08844,-6.08831l0,-9.88537c0.00013,-3.35702 -2.73116,-6.08831 -6.08844,-6.08831zm4.13113,15.97368c0,2.27782 -1.85318,4.13087 -4.131,4.13087l-9.8855,0c-2.27769,0.00013 -4.13074,-1.85305 -4.13074,-4.13087l0,-9.88537c0,-2.27769 1.85305,-4.13087 4.13074,-4.13087l9.88537,0c2.27782,0 4.131,1.85318 4.131,4.13087l0,9.88537l0.00013,0z"
    }, {
        d: "m16.031,10.34644c-3.13466,0 -5.68482,2.55016 -5.68482,5.68482c0,3.13453 2.55016,5.68456 5.68482,5.68456c3.13466,0 5.68482,-2.55003 5.68482,-5.68456c0,-3.13466 -2.55016,-5.68482 -5.68482,-5.68482zm0,9.4118c-2.05519,0 -3.72737,-1.67192 -3.72737,-3.72711c0,-2.05532 1.67205,-3.72737 3.72737,-3.72737c2.05532,0 3.72737,1.67205 3.72737,3.72737c0,2.05519 -1.67218,3.72711 -3.72737,3.72711z"
    }, {
        d: "m21.95423,8.68666c-0.37713,0 -0.74761,0.15268 -1.01396,0.4202c-0.26765,0.26621 -0.4215,0.63682 -0.4215,1.01526c0,0.37727 0.15399,0.74774 0.4215,1.01526c0.26621,0.26621 0.63682,0.4202 1.01396,0.4202c0.37844,0 0.74774,-0.15399 1.01526,-0.4202c0.26752,-0.26752 0.4202,-0.63813 0.4202,-1.01526c0,-0.37844 -0.15268,-0.74905 -0.4202,-1.01526c-0.26621,-0.26752 -0.63682,-0.4202 -1.01526,-0.4202z"
    }]
}, SvgFactory.emailData = {
    path: [{
        d: "M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z"
    }, {
        d: "M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z"
    }]
}, SvgFactory.callData = {
    viewBox: "-72 -72 704 704",
    path: [{
        d: "M166.156,512h-41.531c-7.375-0.031-20.563-8.563-20.938-8.906C37.438,437.969,0,348.906,0,255.938 C0,162.719,37.656,73.375,104.281,8.219C104.313,8.188,117.25,0,124.625,0h41.531c15.219,0,33.25,11.125,40.063,24.781l2.906,5.844 c6.781,13.594,6.188,35.563-1.344,48.75l-27.906,48.813c-7.563,13.219-26.188,24.25-41.406,24.25H110.75 c-36.813,64-36.813,143.094-0.031,207.125h27.75c15.219,0,33.844,11.031,41.406,24.25l27.875,48.813 c7.531,13.188,8.156,35.094,1.375,48.781l-2.906,5.844C199.375,500.844,181.375,512,166.156,512z M512,128v256 c0,35.344-28.656,64-64,64H244.688c-1.25-11.219-3.969-22.156-9.156-31.25l-27.875-48.813 c-13.406-23.406-42.469-40.375-69.188-40.375h-8.156c-20.188-45.438-20.188-97.719,0-143.125h8.156 c26.719,0,55.781-16.969,69.188-40.375l27.906-48.813c5.188-9.094,7.906-20.063,9.156-31.25H448C483.344,64,512,92.656,512,128z M328,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S328,381.25,328,368z M328,304c0-13.25-10.75-24-24-24 s-24,10.75-24,24s10.75,24,24,24S328,317.25,328,304z M328,240c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24 S328,253.25,328,240z M392,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S392,381.25,392,368z M392,304 c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S392,317.25,392,304z M392,240c0-13.25-10.75-24-24-24s-24,10.75-24,24 s10.75,24,24,24S392,253.25,392,240z M456,368c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S456,381.25,456,368z M456,304 c0-13.25-10.75-24-24-24s-24,10.75-24,24s10.75,24,24,24S456,317.25,456,304z M456,240c0-13.25-10.75-24-24-24s-24,10.75-24,24 s10.75,24,24,24S456,253.25,456,240z M456,144c0-8.844-7.156-16-16-16H296c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h144 c8.844,0,16-7.156,16-16V144z"
    }]
}, SvgFactory.defaultViewBox = "0 0 32 32", SvgFactory.svgClassPrefix = "wh-messenger-svg-";
var ButtonView = function() {
        function a() {
            var a = this;
            this.color = null, this.linkOptions = {}, this.mouseenter = null, this.buttonElement = null, this.onClick = function(b) {
                a.linkOptions.click && a.linkOptions.click()
            }, this.onMouseover = function(a) {
                EventManager.publish(EventManager.EVENT_MOUSE_OVER_MSG_BUTTON)
            }, this.onMouseenter = function(b) {
                if (a.mouseenter) {
                    if (b && b.explicitOriginalTarget && b.explicitOriginalTarget.classList && b.explicitOriginalTarget.classList.contains("wh-svg-icon")) return;
                    a.mouseenter()
                }
            }, this.onMouseout = function(a) {
                EventManager.publish(EventManager.EVENT_MOUSE_OUT_MSG_BUTTON)
            }
        }
        return a.prototype.addParams = function(a, b, c, d, e, f) {
            this.type = a, this.name = c, this.className = b, this.color = e, this.linkOptions = d, this.mouseenter = f
        }, a.prototype.render = function() {
            this.buttonElement = document.createElement("a");
            for (var a = 0; a < this.className.length; a++) WidgetDOM.setClass(this.buttonElement, this.className[a]);
            this.buttonElement.setAttribute("href", this.linkOptions.href), this.linkOptions.target && this.buttonElement.setAttribute("target", this.linkOptions.target), this.buttonElement.addEventListener("click", this.onClick), this.buttonElement.addEventListener("mouseover", this.onMouseover), this.buttonElement.addEventListener("mouseenter", this.onMouseenter), this.buttonElement.addEventListener("mouseout", this.onMouseout);
            var b = document.createElement("div");
            b.innerHTML = this.name, WidgetDOM.setClass(b, "mes-us");
            var c = document.createElement("div");
            WidgetDOM.setClass(c, "wh-widget-button-icon"), WidgetDOM.setClass(c, "wh-messenger-bg-" + this.type), this.color && c.setAttribute("style", "background-color:" + this.color + ";");
            var d = "",
                e = SvgFactory.create("close");
            if (WidgetDOM.setClass(e, "wh-svg-close"), "activator" == this.type) d = e.outerHTML + '<i class="wh-icon-whatshelp wh-svg-icon"></i>';
            else {
                var f = SvgFactory.create(this.type);
                WidgetDOM.setClass(f, "wh-svg-icon"), d = e.outerHTML + f.outerHTML
            }
            return c.innerHTML = "<div>" + d + "</div>", this.buttonElement.appendChild(c), this.buttonElement.appendChild(b), WidgetDOM.addDivClear(this.buttonElement), this.buttonElement
        }, a.prototype.destroy = function() {
            this.buttonElement.removeEventListener("click", this.onClick), this.buttonElement.removeEventListener("mouseover", this.onMouseover), this.buttonElement.removeEventListener("mouseenter", this.onMouseenter), this.buttonElement.removeEventListener("mouseout", this.onMouseout), this.buttonElement.parentElement.removeChild(this.buttonElement)
        }, a
    }(),
    HelloButtonView = function() {
        function a() {
            this.linkOptions = {}, this.buttonElement = null
        }
        return a.prototype.addParams = function(a, b, c, d, e, f) {
            this.type = a, this.linkOptions = d
        }, a.prototype.render = function() {
            var a = document.createElement("a");
            a.setAttribute("href", this.linkOptions.href), this.linkOptions.target && a.setAttribute("target", this.linkOptions.target), this.linkOptions.click && a.addEventListener("click", this.linkOptions.click);
            var b = SvgFactory.create(this.type);
            return b && (a.innerHTML = b.outerHTML), this.buttonElement = document.createElement("li"), WidgetDOM.setClass(this.buttonElement, "wh-messenger-bg-" + this.type), this.buttonElement.appendChild(a), this.buttonElement
        }, a.prototype.destroy = function() {
            this.linkOptions.click && this.buttonElement.removeEventListener("click", this.linkOptions.click), this.buttonElement.parentElement.removeChild(this.buttonElement)
        }, a
    }(),
    ButtonBase = function() {
        function a(b) {
            var c = this;
            this.color = null, this.buttonView = null, this.helloButtonView = null, this.onClickObject = null, this.mouseenterCallback = function() {
                EventManager.publish(EventManager.EVENT_MOUSEENTER_MSG_BUTTON, c)
            }, this.role = a.BUTTON_ROLE_NONE, this.data = b, this.className = [], this.className = ["wh-widget-button", "button-slide"], this.getOnClickOptions.bind(this), this.initData()
        }
        return a.prototype.setActivator = function() {
            this.role = a.BUTTON_ROLE_ACTIVATOR, this.className = ["wh-widget-button", "wh-widget-button-activator"]
        }, a.prototype.setColor = function(a) {
            this.color = a
        }, a.prototype.isEqual = function(a) {
            return this.type === a.type && this.data === a.data
        }, a.prototype.render = function() {
            return this.buttonView = new ButtonView, this.buttonView.addParams(this.type, this.className, this.name, this.getLinkOptions(), this.color, this.mouseenterCallback), this.buttonView.render()
        }, a.prototype.renderForHelloPopup = function() {
            return this.helloButtonView = new HelloButtonView, this.helloButtonView.addParams(this.type, this.className, this.name, this.getLinkOptions(), this.color, null), this.helloButtonView.render()
        }, a.prototype.destroy = function() {
            this.buttonView && this.buttonView.destroy(), this.helloButtonView && this.helloButtonView.destroy()
        }, a.getDefaultLinkOptionsWithParent = function(a) {
            return {
                href: "javascript:void(0);",
                click: function() {
                    ParentWindowHelper.buttonClicked(a.type), EventManager.publish(EventManager.EVENT_CLICK_MSG_BUTTON, a)
                }
            }
        }, a.prototype.getLinkOptions = function() {
            return this.getOnClickObject().getLinkOptions()
        }, a.prototype.getOnClickObject = function() {
            return null === this.onClickObject && (this.onClickObject = ObjectFactory.getInstance().createButtonClickObject(this.type, this.getOnClickOptions())), this.onClickObject
        }, a.prototype.runButtonAction = function() {
            this.getOnClickObject().runButtonActionAfterAnimation()
        }, a.prototype.isExistActionState = function() {
            return this.getOnClickObject().isExistActionState()
        }, a
    }();
ButtonBase.BUTTON_ROLE_NONE = "buttonRoleNone", ButtonBase.BUTTON_ROLE_ACTIVATOR = "buttonRoleActivator";
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonActivator = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "More"
        }, b.prototype.getOnClickOptions = function() {
            return {
                name: this.type,
                title: this.name,
                parent: this
            }
        }, b
    }(ButtonBase);
ButtonActivator.type = "activator";
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonFacebook = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "Facebook Messenger"
        }, b.prototype.getOnClickOptions = function() {
            return {
                name: this.type,
                title: this.name,
                fbPageId: this.data,
                parent: this
            }
        }, b
    }(ButtonBase);
ButtonFacebook.type = MessengerName.MSG_FACEBOOK;
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonWhatsapp = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "WhatsApp"
        }, b.prototype.getOnClickOptions = function() {
            return {
                parent: this,
                name: this.type,
                title: this.name,
                phone: this.data
            }
        }, b
    }(ButtonBase);
ButtonWhatsapp.type = MessengerName.MSG_WHATSAPP;
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonViber = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "Viber"
        }, b.prototype.getOnClickOptions = function() {
            return {
                parent: this,
                name: this.type,
                title: this.name,
                publicAccount: this.data
            }
        }, b
    }(ButtonBase);
ButtonViber.type = MessengerName.MSG_VIBER;
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonSnapchat = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "Snapchat"
        }, b.prototype.getOnClickOptions = function() {
            return {
                name: this.type,
                title: this.name,
                snapUser: this.data,
                parent: this
            }
        }, b
    }(ButtonBase);
ButtonSnapchat.type = MessengerName.MSG_SNAPCHAT;
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonLine = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "Line"
        }, b.prototype.getOnClickOptions = function() {
            return {
                name: this.type,
                title: this.name,
                url: this.data,
                parent: this
            }
        }, b
    }(ButtonBase);
ButtonLine.type = MessengerName.MSG_LINE;
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonTelegram = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "Telegram"
        }, b.prototype.getOnClickOptions = function() {
            return {
                parent: this,
                name: this.type,
                title: this.name,
                botName: this.data
            }
        }, b
    }(ButtonBase);
ButtonTelegram.type = MessengerName.MSG_TELEGRAM;
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonVkontakte = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "Vkontakte"
        }, b.prototype.getOnClickOptions = function() {
            return {
                parent: this,
                name: this.type,
                title: this.name,
                page: this.data
            }
        }, b
    }(ButtonBase);
ButtonVkontakte.type = MessengerName.MSG_VKONTAKTE;
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonEmail = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "Email"
        }, b.prototype.getOnClickOptions = function() {
            return {
                parent: this,
                name: this.type,
                title: this.name,
                email: this.data
            }
        }, b
    }(ButtonBase);
ButtonEmail.type = MessengerName.MSG_EMAIL;
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonSms = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "Sms"
        }, b.prototype.getOnClickOptions = function() {
            return {
                parent: this,
                name: this.type,
                title: this.name,
                sms: this.data
            }
        }, b
    }(ButtonBase);
ButtonSms.type = MessengerName.MSG_SMS;
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonCall = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "Phone"
        }, b.prototype.getOnClickOptions = function() {
            return {
                parent: this,
                name: this.type,
                title: this.name,
                call: this.data
            }
        }, b
    }(ButtonBase);
ButtonCall.type = MessengerName.MSG_CALL;
var __extends = this && this.__extends || function() {
        var a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b
        } || function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
        }
    }(),
    ButtonInstagram = function(a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return __extends(b, a), b.prototype.initData = function() {
            this.type = b.type, this.name = "Instagram"
        }, b.prototype.getOnClickOptions = function() {
            return {
                parent: this,
                name: this.type,
                title: this.name,
                username: this.data
            }
        }, b
    }(ButtonBase);
ButtonInstagram.type = MessengerName.MSG_INSTAGRAM;
var ButtonSlider = function() {
    function a(a, b) {
        var c = this;
        this.orderButtons = [], this.animationTime = 100, this.animationResizeCounts = 10, this.showButtonList = !1, this.activatorAsClose = !1, this.isSingleMode = function() {
            return 1 == c.messengerButtons.length
        }, this.goStateAsOpen = function() {
            c.showButtonList = !1, c.activatorAsClose = !1, c.updateShowed()
        }, this.goStateAsClose = function() {
            c.showButtonList = !1, c.activatorAsClose = !0, c.updateShowed()
        }, this.goStateAsSlide = function() {
            c.showButtonList = !0, c.activatorAsClose = !0, c.updateShowed()
        }, this.isActivator = function(a) {
            for (var b = 0; b < c.messengerButtons.length; b++)
                if (c.messengerButtons[b].isEqual(a) && c.messengerButtons[b].role === ButtonBase.BUTTON_ROLE_ACTIVATOR) return !0;
            return !1
        }, this.getSliderHeight = function() {
            return c.getOrderButtons().length < 1 ? 70 : 70 * c.getOrderButtons().length
        }, this.updateShowed = function() {
            var a = document.getElementById(c.getButtonListId());
            if (a)
                if (c.activatorAsClose ? WidgetDOM.setClass(a, "wh-widget-activator-as-close") : WidgetDOM.unsetClass(a, "wh-widget-activator-as-close"), c.showButtonList) {
                    var b = c.getSliderHeight();
                    EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("slider", "slide", "in")), c.buttonsClassUpdater("button-slide-out", !0), setTimeout(function() {
                        c.buttonsClassUpdater("button-slide"), WidgetDOM.setClass(a, "wh-widget-activate"), EventManager.publish(EventManager.EVENT_RESIZE_WIDGET, {
                            height: b
                        }), setTimeout(function() {
                            EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("slider", "slide", "in", Animates.ANIMATE_STATUS_CLOSE)), EventManager.publish(EventManager.EVENT_RESIZE_WIDGET, {
                                height: b
                            })
                        }, c.animationTime), EventManager.publish(EventManager.EVENT_RESIZE_WIDGET, {
                            height: b
                        })
                    })
                } else EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("slider", "slide", "out")), c.buttonsClassUpdater("button-slide", !0), setTimeout(function() {
                    c.buttonsClassUpdater("button-slide-out"), setTimeout(function() {
                        WidgetDOM.unsetClass(a, "wh-widget-activate"), EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("slider", "slide", "out", Animates.ANIMATE_STATUS_CLOSE))
                    }, c.animationTime)
                });
            EventManager.publish(EventManager.EVENT_RESIZE_WIDGET)
        }, this.buttonsClassUpdater = function(a, b) {
            void 0 === b && (b = !1);
            for (var d = document.getElementById(c.getButtonListId()), e = d.getElementsByClassName("wh-widget-button"), f = 0; f < e.length; f++) {
                var g = e[f];
                b ? WidgetDOM.unsetClass(g, a) : WidgetDOM.hasClass(g, "wh-widget-button-activator") || WidgetDOM.setClass(g, a)
            }
        }, this.params = a, this.options = b, this.initMessengerButtons()
    }
    return a.prototype.setOptions = function(a) {
        this.options = a, this.initMessengerButtons()
    }, a.prototype.initMessengerButtons = function() {
        var b = 0;
        if (this.messengerButtons && this.messengerButtons.length > 0)
            for (var c = 0; c < this.messengerButtons.length; c++) this.messengerButtons[c].destroy();
        if (this.messengerButtons = [], this.options.facebook) {
            var d = ObjectFactory.getInstance().createButton(ButtonFacebook.type, this.options.facebook);
            null !== d && (this.messengerButtons.push(d), b++)
        }
        if (this.options.whatsapp) {
            var e = ObjectFactory.getInstance().createButton(ButtonWhatsapp.type, this.options.whatsapp);
            null !== e && (this.messengerButtons.push(e), b++)
        }
        if (this.options.viber) {
            var f = ObjectFactory.getInstance().createButton(ButtonViber.type, this.options.viber);
            null !== f && (this.messengerButtons.push(f), b++)
        }
        if (this.options.snapchat) {
            var g = ObjectFactory.getInstance().createButton(ButtonSnapchat.type, this.options.snapchat);
            null !== g && (this.messengerButtons.push(g), b++)
        }
        if (this.options.line) {
            var h = ObjectFactory.getInstance().createButton(ButtonLine.type, this.options.line);
            null !== h && (this.messengerButtons.push(h), b++)
        }
        if (this.options.telegram) {
            var i = ObjectFactory.getInstance().createButton(ButtonTelegram.type, this.options.telegram);
            null !== i && (this.messengerButtons.push(i), b++)
        }
        if (this.options.vkontakte) {
            var j = ObjectFactory.getInstance().createButton(ButtonVkontakte.type, this.options.vkontakte);
            null !== j && (this.messengerButtons.push(j), b++)
        }
        if (this.options.email) {
            var k = ObjectFactory.getInstance().createButton(ButtonEmail.type, this.options.email);
            null !== k && (this.messengerButtons.push(k), b++)
        }
        if (this.options.sms) {
            var l = ObjectFactory.getInstance().createButton(ButtonSms.type, this.options.sms);
            null !== l && (this.messengerButtons.push(l), b++)
        }
        if (this.options.call) {
            var m = ObjectFactory.getInstance().createButton(ButtonCall.type, this.options.call);
            null !== m && (this.messengerButtons.push(m), b++)
        }
        if (this.options.instagram) {
            var n = ObjectFactory.getInstance().createButton(ButtonInstagram.type, this.options.instagram);
            null !== n && (this.messengerButtons.push(n), b++)
        }
        if (1 == b) {
            var o = this.messengerButtons[0];
            o.setActivator(), this.options.key && -1 !== a.BUTTON_WITH_CUSTOM_COLOR.indexOf(o.type) && (o.color = this.options.button_color)
        } else if (b > 1) {
            var o = ObjectFactory.getInstance().createButton(ButtonActivator.type, "");
            null !== o && (o.setActivator(), o.setColor(this.options.button_color), this.messengerButtons.push(o))
        }
    }, a.prototype.renderButtonList = function() {
        var a = document.getElementById(this.params.wrapperId),
            b = document.getElementById(this.getButtonListId());
        b ? b.innerHTML = "" : (b = document.createElement("div"), b.id = this.getButtonListId(), WidgetDOM.setClass(b, "wh-widget-send-button-wrapper-list"), a.appendChild(b), WidgetDOM.addDivClear(a)), this.orderButtons.length = 0;
        for (var c = [], d = [], e = this.options.order ? this.options.order.split(",") : [], f = 0; f < e.length; f++)
            for (var g = 0; g < this.messengerButtons.length; g++) this.messengerButtons[g].type == e[f] && (c.push(this.messengerButtons[g]), d.push(g));
        for (var f = 0; f < this.messengerButtons.length; f++) - 1 == d.indexOf(f) && c.push(this.messengerButtons[f]);
        this.orderButtons = c;
        for (var f = 0; f < c.length; f++) this.addButton(c[f]);
        this.options.branding && this.addGetButton()
    }, a.prototype.getOrderButtons = function() {
        return this.orderButtons
    }, a.prototype.getButtonListId = function() {
        return this.params.wrapperId + "-list"
    }, a.prototype.addButton = function(a) {
        var b = document.getElementById(this.getButtonListId()),
            c = a.render();
        b.appendChild(c)
    }, a.prototype.addGetButton = function() {
        var a = document.getElementById(this.getButtonListId()),
            b = document.createElement("a");
        WidgetDOM.setClass(b, "wh-widget-send-button-get-button"), b.setAttribute("href", this.params.proto + "//thankufoods.com/"), b.setAttribute("target", "_blank"), b.innerHTML = "";
        var c = document.createElement("div");
        WidgetDOM.setClass(c, "clear"), a.appendChild(b), a.appendChild(c)
    }, a
}();
ButtonSlider.BUTTON_WITH_CUSTOM_COLOR = [ButtonEmail.type, ButtonSms.type, ButtonCall.type];
var ButtonSliderDesktop = function() {
        function a(a, b) {
            var c = this;
            this.showGetButton = !1, this.goStateAsOpen = function() {
                c.showGetButton = !1, c.updateShowed(), c.slider.goStateAsOpen()
            }, this.goStateAsClose = function() {
                c.showGetButton = !0, c.updateShowed(), c.slider.goStateAsClose()
            }, this.goStateAsSlide = function() {
                c.showGetButton = !0, c.updateShowed(), c.slider.goStateAsSlide()
            }, this.updateShowed = function() {
                var a = document.getElementById(c.slider.getButtonListId());
                a && (c.showGetButton ? WidgetDOM.setClass(a, "wh-widget-show-get-button") : WidgetDOM.unsetClass(a, "wh-widget-show-get-button"))
            }, b = this.hideUnsupportMessager(b), this.slider = new ButtonSlider(a, b)
        }
        return a.prototype.setOptions = function(a) {
            a = this.hideUnsupportMessager(a), this.slider.setOptions(a)
        }, a.prototype.hideUnsupportMessager = function(a) {
            return a.sms = null, a
        }, a.prototype.isSingleMode = function() {
            return this.slider.isSingleMode()
        }, a.prototype.renderButtonList = function() {
            this.slider.renderButtonList()
        }, a.prototype.getOrderButtons = function() {
            return this.slider.getOrderButtons()
        }, a.prototype.getButtonListId = function() {
            return this.slider.getButtonListId()
        }, a.prototype.isActivator = function(a) {
            return this.slider.isActivator(a)
        }, a
    }(),
    EventManager = function() {
        function a() {}
        return a.checkAmplify = function() {
            return !!window.hasOwnProperty("amplify") || (a.debugMode, !1)
        }, a.subscribe = function(b, c, d) {
            void 0 === d && (d = null), a.checkAmplify() && (d ? amplify.subscribe(b, d, c) : amplify.subscribe(b, c))
        }, a.unsubscribe = function(b, c) {
            a.checkAmplify() && amplify.unsubscribe(b, c)
        }, a.publish = function(b) {
            for (var c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
            a.checkAmplify() && amplify.publish(b, c)
        }, a
    }();
EventManager.EVENT_CLOSE_POPUP = "evClosePopup", EventManager.EVENT_CLICK_CLOSE_POPUP = "evClickClosePopup", EventManager.EVENT_RESIZE_WIDGET = "evResizeWidget", EventManager.EVENT_CLICK_MSG_BUTTON = "evClickMsgButton", EventManager.EVENT_CLICK_HELLO_TEXT = "evClickHelloText", EventManager.EVENT_CLOSE_HELLO_POPUP = "evCloseHelloPopup", EventManager.EVENT_UPDATE_ANIMATES_STATUS = "evUpdateAnimatesStatus", EventManager.EVENT_MOUSEENTER_MSG_BUTTON = "evMouseenterMsgButton", EventManager.EVENT_MOUSE_OVER_MSG_BUTTON = "evMouseOverMsgButton", EventManager.EVENT_MOUSE_OUT_MSG_BUTTON = "evMouseOutMsgButton", EventManager.EVENT_SHOW_CALL_TO_ACTION = "evShowCallToAction", EventManager.EVENT_HIDE_CALL_TO_ACTION = "evHideCallToAction", EventManager.EVENT_CLICK_CALL_TO_ACTION = "evClickCallToAction", EventManager.debugMode = !1;
var WHHTMLAttribute = function() {
    function a(a) {
        this.params = null, this.params = a
    }
    return a.prototype.render = function(b) {
        if (!(b.childElementCount > 0)) {
            var c = b.getAttribute(a.attributeName);
            null !== c && c in this.params && (b.innerHTML = this.params[c])
        }
    }, a
}();
WHHTMLAttribute.attributeName = "wh-html";
var WHHTMLBRAttribute = function() {
    function a(a) {
        this.params = null, this.params = a
    }
    return a.prototype.render = function(b) {
        if (!(b.childElementCount > 0)) {
            var c = b.getAttribute(a.attributeName);
            if (null !== c && this.params[c]) {
                var d = this.params[c];
                b.innerHTML = d.replace(/\n/g, "<br />")
            }
        }
    }, a
}();
WHHTMLBRAttribute.attributeName = "wh-html-br";
var WHHREFAttribute = function() {
    function a(a) {
        this.params = null, this.params = a
    }
    return a.prototype.render = function(b) {
        var c = b.getAttribute(a.attributeName);
        null !== c && c in this.params && (b.href = this.params[c])
    }, a
}();
WHHREFAttribute.attributeName = "wh-href";
var WHTARGETAttribute = function() {
    function a(a) {
        this.params = null, this.params = a
    }
    return a.prototype.render = function(b) {
        var c = b.getAttribute(a.attributeName);
        null !== c && c in this.params && (b.target = this.params[c])
    }, a
}();
WHTARGETAttribute.attributeName = "wh-target";
var WHHTMLElementAttribute = function() {
    function a(a) {
        this.params = null, this.params = a
    }
    return a.prototype.render = function(b) {
        if (!(b.childElementCount > 0)) {
            var c = b.getAttribute(a.attributeName);
            if (null !== c && c in this.params) {
                for (; b.firstChild;) b.removeChild(b.firstChild);
                var d = this.params[c];
                if (WidgetHelper.isArray(d) || WidgetHelper.isObject(d))
                    for (var e in d) d.hasOwnProperty(e) && b.appendChild(d[e]);
                else b.appendChild(this.params[c])
            }
        }
    }, a
}();
WHHTMLElementAttribute.attributeName = "wh-html-element";
var WHHTMLUnsafeAttribute = function() {
    function a(a) {
        this.params = null, this.params = a
    }
    return a.mapText2Html = function(a) {
        var b = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };
        return a.replace(/[&<>"']/g, function(a) {
            return b[a]
        }).replace(/\n/gm, "<br/>")
    }, a.prototype.render = function(b) {
        if (!(b.childElementCount > 0)) {
            var c = b.getAttribute(a.attributeName);
            null !== c && c in this.params && (b.innerHTML = a.mapText2Html(this.params[c]))
        }
    }, a
}();
WHHTMLUnsafeAttribute.attributeName = "wh-html-unsafe";
var WHClickAttribute = function() {
    function a(a) {
        this.callbacks = null, this.callbacks = a
    }
    return a.prototype.render = function(b) {
        var c = b.getAttribute(a.attributeName);
        null !== c && this.callbacks[c] && (b.removeEventListener("click", this.callbacks[c]), b.addEventListener("click", this.callbacks[c]))
    }, a
}();
WHClickAttribute.attributeName = "wh-click";
var WHClassAttribute = function() {
    function a(a) {
        this.params = null, this.params = a
    }
    return a.prototype.render = function(b) {
        var c = b.getAttribute(a.attributeName);
        null !== c && c in this.params && WidgetDOM.setClass(b, this.params[c])
    }, a
}();
WHClassAttribute.attributeName = "wh-class";
var WHMultiClassAttribute = function() {
    function a(a) {
        this.params = null, this.params = a
    }
    return a.prototype.render = function(b) {
        var c = b.getAttribute(a.attributeName);
        if (null !== c) {
            var d = c;
            d = d.replace(/'/g, '"');
            try {
                var e = JSON.parse(d)
            } catch (a) {
                return
            }
            for (var f in e)
                if (e.hasOwnProperty(f)) {
                    var g = e[f],
                        h = !1;
                    if ("!" === g.charAt(0) && (h = !0, g = g.substring(1)), void 0 !== this.params[g] && null !== this.params[g]) {
                        var i = h ? !this.params[g] : this.params[g];
                        i ? WidgetDOM.setClass(b, f) : WidgetDOM.unsetClass(b, f)
                    }
                }
        }
    }, a
}();
WHMultiClassAttribute.attributeName = "wh-multi-class";
var WidgetView = function() {
        function a(a) {
            this.params = {}, this.callbacks = {}, this.specificAttributes = [], this.hideClass = "wh-hide", this.container = null, this.replacedAttributes = [{
                src: "wh-src",
                dst: "src"
            }], this.container = a
        }
        return a.prototype.addParams = function(a) {
            this.params = WidgetHelper.extend({}, this.params, a)
        }, a.prototype.addCallbacks = function(a, b) {
            this.callbacks[a] = b
        }, a.prototype.replaceAttributes = function(a) {
            for (var b = 0; b < this.replacedAttributes.length; b++) {
                var c = a.getAttribute(this.replacedAttributes[b].src);
                if (null !== c) {
                    if (!(c in this.params)) return;
                    a.setAttribute(this.replacedAttributes[b].dst, this.params[c])
                }
            }
            for (var d = 0; d < this.specificAttributes.length; d++) this.specificAttributes[d].render(a)
        }, a.prototype.recRender = function(a) {
            var b = WidgetElement.getHTMLChildren(a);
            if (b.length > 0)
                for (var c = 0; c < b.length; c++) this.recRender(b[c]);
            this.replaceAttributes(a)
        }, a.prototype.render = function() {
            this.specificAttributes.length = 0,
                this.specificAttributes.push(new WHHTMLAttribute(this.params)), this.specificAttributes.push(new WHHTMLBRAttribute(this.params)), this.specificAttributes.push(new WHHREFAttribute(this.params)), this.specificAttributes.push(new WHTARGETAttribute(this.params)), this.specificAttributes.push(new WHHTMLElementAttribute(this.params)), this.specificAttributes.push(new WHHTMLUnsafeAttribute(this.params)), this.specificAttributes.push(new WHClassAttribute(this.params)), this.specificAttributes.push(new WHMultiClassAttribute(this.params)), this.specificAttributes.push(new WHClickAttribute(this.callbacks)), this.recRender(this.container)
        }, a.prototype.show = function() {
            WidgetDOM.unsetClass(this.container, this.hideClass)
        }, a.prototype.hide = function() {
            WidgetDOM.setClass(this.container, this.hideClass)
        }, a.prototype.clearParams = function() {
            this.params = {}
        }, a.prototype.clearCallbacks = function() {
            this.callbacks = {}
        }, a
    }(),
    WidgetMessengerPopup = function() {
        function a(a) {
            var b = this;
            this.info = null, this.closing = !1, this.opening = !1, this.onClose = function() {
                null !== b.placement && (!1 === b.closing && !1 === b.opening ? (b.closing = !0, setTimeout(function() {
                    EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("popup", "slide", "out")), WidgetDOM.setClass(document.getElementById("popup-placement"), "popup-slide-out"), setTimeout(function() {
                        WidgetDOM.unsetClass(document.getElementById("popup-placement"), "popup-slide-out"), b.finishPopup()
                    }, 640)
                })) : b.finishPopup())
            }, this.info = a, this.template = this.getTemplate("popup-messenger"), this.allocateContentTemplate(this.template), this.view = new WidgetView(this.template), this.placement = null, this.show(), EventManager.subscribe(EventManager.EVENT_CLOSE_POPUP, this.onClose)
        }
        return a.prototype.finishPopup = function() {
            EventManager.unsubscribe(EventManager.EVENT_CLOSE_POPUP, this.onClose), this.opening = !1, this.placement.style.display = "none", this.placement.innerHTML = "", WidgetDOM.unsetClass(document.getElementById("popup-placement"), "popup-slide-in"), WidgetDOM.unsetClass(document.getElementById("popup-placement"), "popup-slide-out"), EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("popup", "slide", "out", Animates.ANIMATE_STATUS_CLOSE)), EventManager.publish(EventManager.EVENT_RESIZE_WIDGET)
        }, a.prototype.place = function() {
            var a = this;
            this.placement = document.getElementById("popup-placement"), null !== this.placement && (this.placement.style.display = "none", this.placement.innerHTML = "", this.opening = !0, this.placement.appendChild(this.template), setTimeout(function() {
                !0 === a.opening && (EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("popup", "slide", "in")), WidgetDOM.setClass(document.getElementById("popup-placement"), "popup-slide-in"), a.placement.style.display = "block", EventManager.publish(EventManager.EVENT_RESIZE_WIDGET), setTimeout(function() {
                    WidgetDOM.unsetClass(document.getElementById("popup-placement"), "popup-slide-in"), a.opening = !1, EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("popup", "slide", "in", Animates.ANIMATE_STATUS_CLOSE))
                }, 640))
            }))
        }, a.prototype.allocateContentTemplate = function(a) {
            var b = a.getElementsByClassName("wh-popup-content");
            if (null !== b && 0 != b.length) {
                var c = this.getTemplate("popup-content-" + this.info.name);
                null !== c && (b[0].innerHTML = "", WidgetDOM.setClass(b[0], "wh-popup-content-" + this.info.name), b[0].appendChild(c))
            }
        }, a.prototype.show = function() {
            var a = WidgetHelper.extend({
                    name: this.info.name,
                    title: this.info.title,
                    bgColorMessenger: "wh-messenger-bg-" + this.info.name,
                    pwdByClass: this.info.pwdByHide ? "wh-hide" : ""
                }, this.info.content),
                b = SvgFactory.create(this.info.name);
            null !== b && (a.icon = b.outerHTML), this.view.addParams(a), this.view.addCallbacks("closePopup", function() {
                EventManager.publish(EventManager.EVENT_CLICK_CLOSE_POPUP)
            }), this.view.render(), this.place()
        }, a.prototype.getTemplate = function(a) {
            var b = document.getElementById("template-" + a),
                c = b.cloneNode(!0);
            return c.removeAttribute("id"), c
        }, a
    }(),
    WidgetHelloPopup = function() {
        function a(a, b, c) {
            var d = this;
            this.showHelloPopup = !0, this.view = null, this.orderButtons = [], this.show = function() {
                d.showHelloPopup && (d.view.show(), EventManager.publish(EventManager.EVENT_RESIZE_WIDGET))
            }, this.hide = function() {
                EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("hello", "slide", "out")), WidgetDOM.unsetClass(document.getElementById("wh-popup-hello"), "popup-slide-in"), setTimeout(function() {
                    WidgetDOM.setClass(document.getElementById("wh-popup-hello"), "popup-slide-out"), setTimeout(function() {
                        d.view.hide(), EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("hello", "slide", "out", Animates.ANIMATE_STATUS_CLOSE)), EventManager.publish(EventManager.EVENT_RESIZE_WIDGET)
                    }, 640)
                })
            }, this.logoUrl = a, this.text = b, this.showHelloPopup = c;
            var e = window.document.getElementById("wh-popup-hello");
            if (null === e) throw new Error("Hello popup container wasn't found");
            this.view = new WidgetView(e), EventManager.subscribe(EventManager.EVENT_CLOSE_POPUP, this.hide)
        }
        return a.prototype.render = function() {
            var a = this;
            if (this.view.addParams({
                    logoUrl: this.logoUrl,
                    text: this.text,
                    showMessengersIcons: !1
                }), this.orderButtons.length > 1) {
                for (var b = [], c = 0; c < this.orderButtons.length && c < 5; c++) "activator" !== this.orderButtons[c].type && b.push(this.orderButtons[c].renderForHelloPopup());
                this.view.addParams({
                    buttons: b,
                    showMessengersIcons: !0
                })
            } else {
                var d = this.orderButtons[0].getLinkOptions();
                this.view.addParams({
                    href: d.href
                }), d.target && this.view.addParams({
                    target: d.target
                })
            }
            this.view.addCallbacks("closeHelloPopup", function() {
                EventManager.publish(EventManager.EVENT_CLOSE_HELLO_POPUP), a.hide()
            }), this.view.addCallbacks("showMessengers", function() {
                EventManager.publish(EventManager.EVENT_CLICK_HELLO_TEXT)
            }), this.view.render(), this.show()
        }, a.prototype.setOrderButtons = function(a) {
            this.orderButtons = a
        }, a
    }(),
    WidgetCallToActionPopup = function() {
        function a(b) {
            var c = this;
            if (this.text = "", this.view = null, this.node = null, this.isRendered = !1, this.cssWidth = null, this.orderButtons = [], this.show = function() {
                    var b = c.getWidth();
                    EventManager.publish(EventManager.EVENT_RESIZE_WIDGET, {
                        width: b
                    }), EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("callToAction", "popup", "in")), WidgetDOM.unsetClass(c.node, "wh-animation-out"), setTimeout(function() {
                        c.getIsRendered() || c.render(), c.view.show(), c.setTopByHeight(c.getHeight()), WidgetDOM.setClass(c.node, "wh-animation-in"), EventManager.publish(EventManager.EVENT_RESIZE_WIDGET, {
                            width: b
                        }), EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("callToAction", "popup", "in", Animates.ANIMATE_STATUS_CLOSE))
                    }, a.ANIMATION_IN_TIMEOUT)
                }, this.hide = function() {
                    EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("callToAction", "popup", "out")), WidgetDOM.unsetClass(c.node, "wh-animation-in"), setTimeout(function() {
                        WidgetDOM.setClass(c.node, "wh-animation-out"), setTimeout(function() {
                            c.view.hide(), EventManager.publish(EventManager.EVENT_RESIZE_WIDGET), EventManager.publish(EventManager.EVENT_UPDATE_ANIMATES_STATUS, new Animates("callToAction", "popup", "out", Animates.ANIMATE_STATUS_CLOSE))
                        }, a.ANIMATION_OUT_TIMEOUT)
                    })
                }, this.text = b, this.node = window.document.getElementById(a.CALL_TO_ACTION_DIV_ID), null === this.node) throw new Error("Call to action popup container wasn't found");
            this.view = new WidgetView(this.node), EventManager.subscribe(EventManager.EVENT_SHOW_CALL_TO_ACTION, this.show), EventManager.subscribe(EventManager.EVENT_HIDE_CALL_TO_ACTION, this.hide)
        }
        return a.prototype.getFilteredText = function() {
            return this.text.length <= a.MAX_TEXT_DISPLAYED_LENGTH ? this.text : this.text.substr(0, a.MAX_TEXT_DISPLAYED_LENGTH)
        }, a.prototype.render = function() {
            if (this.view.addParams({
                    text: this.getFilteredText()
                }), 1 === this.orderButtons.length) {
                var a = this.orderButtons[0].getLinkOptions();
                this.view.addParams({
                    href: a.href
                }), a.target && this.view.addParams({
                    target: a.target
                })
            } else this.view.addParams({
                href: "javascript:void(0)"
            }), this.view.addParams({
                target: ""
            });
            this.view.addCallbacks("clickOnCallToAction", function() {
                EventManager.publish(EventManager.EVENT_CLICK_CALL_TO_ACTION)
            }), this.view.render(), this.setWasRendered(), this.show()
        }, a.prototype.reInit = function(a, b) {
            this.setOrderButtons(b), this.text = a, this.view.clearCallbacks(), this.setWasRendered(!1), EventManager.publish(EventManager.EVENT_RESIZE_WIDGET, {
                width: this.getWidth()
            }), this.render()
        }, a.prototype.setWasRendered = function(a) {
            void 0 === a && (a = !0), this.isRendered = a
        }, a.prototype.getIsRendered = function() {
            return this.isRendered
        }, a.prototype.getCssMaxWidth = function() {
            if (null === this.cssWidth) {
                var b = WidgetElement.getCssMaxWIdthFromElement(this.node);
                if (null !== b) this.cssWidth = b;
                else {
                    for (var c = WidgetElement.getHTMLChildren(this.node), d = 0; d < c.length; d++) {
                        var e = WidgetElement.getCssMaxWIdthFromElement(c[d]);
                        if (null !== e) {
                            this.cssWidth = e;
                            break
                        }
                    }
                    null === this.cssWidth && (this.cssWidth = a.CSS_WIDTH_DEFAULT)
                }
            }
            return this.cssWidth
        }, a.prototype.getWidth = function() {
            return this.getCssMaxWidth() + 125
        }, a.prototype.getHeight = function() {
            this.node.style.width = this.getWidth() + "px";
            var a = this.node.clientHeight;
            return this.node.style.width = "", a
        }, a.prototype.setTopByHeight = function(a) {
            this.node.style.top = a > 30 ? "22px" : "29px"
        }, a.prototype.setOrderButtons = function(a) {
            this.orderButtons = a
        }, a
    }();
WidgetCallToActionPopup.CALL_TO_ACTION_DIV_ID = "wh-call-to-action", WidgetCallToActionPopup.MAX_TEXT_DISPLAYED_LENGTH = 50, WidgetCallToActionPopup.CSS_WIDTH_DEFAULT = 135, WidgetCallToActionPopup.ANIMATION_IN_TIMEOUT = 340, WidgetCallToActionPopup.ANIMATION_OUT_TIMEOUT = 250;
var ObjectFactoryMobile = function() {
        function a() {}
        return a.prototype.createButtonClickObject = function(a, b, c) {
            var d = null;
            switch (a) {
                case ButtonActivator.type:
                    d = new MobileClickButtonActivator(b);
                    break;
                case ButtonFacebook.type:
                    d = new MobileClickButtonFacebook(b);
                    break;
                case ButtonSnapchat.type:
                    d = new MobileClickButtonSnapchat(b);
                    break;
                case ButtonLine.type:
                    d = new MobileClickButtonLine(b);
                    break;
                case ButtonViber.type:
                    d = new MobileClickButtonViber(b);
                    break;
                case ButtonWhatsapp.type:
                    d = new MobileClickButtonWhatsapp(b);
                    break;
                case ButtonVkontakte.type:
                    d = new MobileClickButtonVkontakte(b);
                    break;
                case ButtonTelegram.type:
                    d = new MobileClickButtonTelegram(b);
                    break;
                case ButtonEmail.type:
                    d = new MobileClickButtonEmail(b);
                    break;
                case ButtonSms.type:
                    d = new MobileClickButtonSms(b);
                    break;
                case ButtonCall.type:
                    d = new MobileClickButtonCall(b);
                    break;
                case ButtonInstagram.type:
                    d = new MobileClickButtonInstagram(b)
            }
            return d
        }, a
    }(),
    ObjectFactoryDesktop = function() {
        function a() {}
        return a.prototype.createButtonClickObject = function(a, b, c) {
            var d = null;
            switch (a) {
                case ButtonActivator.type:
                    d = new DesktopClickButtonActivator(b, c);
                    break;
                case ButtonFacebook.type:
                    d = new DesktopClickButtonFacebook(b, c);
                    break;
                case ButtonSnapchat.type:
                    d = new DesktopClickButtonSnapchat(b, c);
                    break;
                case ButtonLine.type:
                    d = new DesktopClickButtonLine(b, c);
                    break;
                case ButtonViber.type:
                    d = new DesktopClickButtonViber(b, c);
                    break;
                case ButtonWhatsapp.type:
                    d = new DesktopClickButtonWhatsapp(b, c);
                    break;
                case ButtonVkontakte.type:
                    d = new DesktopClickButtonVkontakte(b, c);
                    break;
                case ButtonTelegram.type:
                    d = new DesktopClickButtonTelegram(b, c);
                    break;
                case ButtonEmail.type:
                    d = new DesktopClickButtonEmail(b, c);
                    break;
                case ButtonCall.type:
                    d = new DesktopClickButtonCall(b, c);
                    break;
                case ButtonInstagram.type:
                    d = new DesktopClickButtonInstagram(b, c)
            }
            return d
        }, a
    }(),
    ObjectFactory = function() {
        function a(a) {
            this.innerObjectFactory = null, this.innerObjectFactory = a
        }
        return a.setOptions = function(b) {
            a.options = WidgetHelper.extend({}, a.options, b)
        }, a.getInstance = function() {
            if (null === a.instance) {
                var b = a.options.isMobile ? new ObjectFactoryMobile : new ObjectFactoryDesktop;
                a.instance = new a(b)
            }
            return a.instance
        }, a.prototype.createButton = function(a, b) {
            var c = null;
            switch (a) {
                case ButtonActivator.type:
                    c = new ButtonActivator(b);
                    break;
                case ButtonFacebook.type:
                    c = new ButtonFacebook(b);
                    break;
                case ButtonWhatsapp.type:
                    c = new ButtonWhatsapp(b);
                    break;
                case ButtonViber.type:
                    c = new ButtonViber(b);
                    break;
                case ButtonSnapchat.type:
                    c = new ButtonSnapchat(b);
                    break;
                case ButtonLine.type:
                    c = new ButtonLine(b);
                    break;
                case ButtonTelegram.type:
                    c = new ButtonTelegram(b);
                    break;
                case ButtonVkontakte.type:
                    c = new ButtonVkontakte(b);
                    break;
                case ButtonEmail.type:
                    c = new ButtonEmail(b);
                    break;
                case ButtonSms.type:
                    c = new ButtonSms(b);
                    break;
                case ButtonCall.type:
                    c = new ButtonCall(b);
                    break;
                case ButtonInstagram.type:
                    c = new ButtonInstagram(b)
            }
            return c
        }, a.prototype.createButtonClickObject = function(b, c) {
            return this.innerObjectFactory.createButtonClickObject(b, c, {
                isPro: a.options.isPro,
                isBranding: a.options.isBranding
            })
        }, a
    }();
ObjectFactory.instance = null, ObjectFactory.options = null;
var WidgetInitializer = function() {
    function a() {}
    return a.widgetInitialize = function(b, c, d) {
        var e = a.initParams(c),
            f = a.initOptions(d, e);
        switch (b) {
            case "mobile":
                a.whWidgetObject = new WidgetSendButtonMobile(e, f);
                break;
            case "container":
                a.whWidgetObject = new WidgetSendButtonContainer(e, f);
                break;
            case "desktop":
                a.whWidgetObject = new WidgetSendButtonDesktop(e, f)
        }
        return a.whWidgetObject
    }, a.initParams = function(a) {
        var b = {
            wrapperId: a.wrapperId,
            clientHostname: a.clientHostname,
            proto: "",
            host: "",
            staticHost: "",
            showHelloPopup: !!a.showHelloPopup,
            parentWrapperId: a.parentWrapperId,
            isMobile: a.isMobile
        };
        return b.proto = "https:" === a.proto ? "https:" : "http:", b.host = a.host, b
    }, a.initOptions = function(b, c) {
        var d = b;
        return -1 === a.supportedPosition.indexOf(d.position) && (d.position = a.RIGHT_POSITION), d.button_color || (d.button_color = a.DEFAULT_BUTTON_COLOR), d.hasOwnProperty("branding") || (d.branding = !0), d.hasOwnProperty("shift_vertical") || (d.shift_vertical = 0), d.hasOwnProperty("shift_horizontal") || (d.shift_horizontal = 0), d = a.checkAndClearProOptions(d, c.clientHostname)
    }, a.checkAndClearProOptions = function(b, c) {
        var d = b.alias ? b.alias.filter(function() {
            return !0
        }) : [];
        return b.domain && d.push(b.domain), b.hasOwnProperty("domain") && b.hasOwnProperty("key") && b.domain && b.key && -1 !== a.getAvailableProOptionsDomains(d).indexOf(c.toLowerCase()) ? b.domain = a.prepareDomain(b.domain) : a.isAvailableSubdomain(d, c) ? b.domain = a.prepareDomain(b.domain) : (b.ga = !1, b.branding = !0, b.mobile = !0, b.desktop = !0, delete b.greeting, b.shift_vertical = 0, b.shift_horizontal = 0, b.domain = null, b.key = null), b
    }, a.prepareDomain = function(a) {
        var b = a.toLowerCase().replace(/^https?:\/\//, "").split(/[/?#]/)[0];
        return "www." === b.substr(0, 4) && (b = b.substr(4)), b
    }, a.getAvailableProOptionsDomains = function(b) {
        for (var c = [], d = 0, e = b; d < e.length; d++) {
            var f = e[d],
                g = a.prepareDomain(f);
            c.push(g), c.push("www." + g), c.push("m." + g)
        }
        return c
    }, a.isAvailableSubdomain = function(b, c) {
        c = c.toLowerCase();
        for (var d = 0, e = b; d < e.length; d++) {
            var f = e[d],
                g = a.prepareDomain(f).toLowerCase();
            if (-1 !== c.indexOf(g)) return !0
        }
        return !1
    }, a
}();
WidgetInitializer.DEFAULT_BUTTON_COLOR = "#ff6550", WidgetInitializer.LEFT_POSITION = "left", WidgetInitializer.RIGHT_POSITION = "right", WidgetInitializer.supportedPosition = [WidgetInitializer.LEFT_POSITION, WidgetInitializer.RIGHT_POSITION], WidgetInitializer.whWidgetObject = null;
var WidgetSendButtonBase = function() {
        function a(a, b, c) {
            var d = this;
            this.widgetState = null, this.animationControl = null, this.container = null, this.reInitWidget = function(a) {
                d.goState(d.widgetState.baseState), d.options = WidgetInitializer.initOptions(a, d.params), d.reBuildWidget()
            }, this.resize = function(a) {
                if (null !== d.params.parentWrapperId && void 0 !== d.params.parentWrapperId) {
                    var b = a && a.length > 0 ? a[0] : null;
                    if (null !== b && b.hasOwnProperty("width") && b.hasOwnProperty("height")) return void ParentWindowHelper.resize(d.params.parentWrapperId, b.width, b.height);
                    var c = WidgetSize.getSize(d);
                    null !== c && ParentWindowHelper.resize(d.params.parentWrapperId, b && b.width ? b.width + 1 : c.width + 1, b && b.height ? b.height : c.height)
                }
            }, this.onClickButton = function(a) {
                if (!d.animationControl.isRunAnimation()) {
                    var b = a[0];
                    d.slider.isActivator(b) ? StateMashine.WIDGET_STATE_ACTIVATOR === d.widgetState.getState() || StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION === d.widgetState.getState() || StateMashine.WIDGET_STATE_HELLO === d.widgetState.getState() ? d.slider.isSingleMode() ? d.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION, b) : d.goState(StateMashine.WIDGET_STATE_SLIDER) : d.goState(d.params.isMobile ? StateMashine.WIDGET_STATE_ACTIVATOR : StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION) : d.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION, b)
                }
            }, this.onMouseOver = function() {
                d.animationControl.isRunAnimation() || EventManager.publish(EventManager.EVENT_RESIZE_WIDGET)
            }, this.onMouseOut = function() {
                d.animationControl.isRunAnimation() || EventManager.publish(EventManager.EVENT_RESIZE_WIDGET)
            }, this.onMouseenterButton = function(a) {
                if (!d.animationControl.isRunAnimation()) {
                    var b = a[0];
                    if (!b) return void(d.slider.isSingleMode() ? d.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION, d.slider.getOrderButtons()[0]) : d.goState(StateMashine.WIDGET_STATE_SLIDER));
                    d.slider.isActivator(b) && (StateMashine.WIDGET_STATE_ACTIVATOR !== d.widgetState.getState() && StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION !== d.widgetState.getState() && StateMashine.WIDGET_STATE_HELLO !== d.widgetState.getState() || (d.slider.isSingleMode() ? d.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION, b) : d.goState(StateMashine.WIDGET_STATE_SLIDER)))
                }
            }, this.onClickClosePopup = function() {
                d.animationControl.isRunAnimation() || d.goState(d.params.isMobile ? StateMashine.WIDGET_STATE_ACTIVATOR : StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION)
            }, this.onCloseHelloPopup = function() {
                d.animationControl.isRunAnimation() || d.goState(d.params.isMobile ? StateMashine.WIDGET_STATE_ACTIVATOR : StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION)
            }, this.goState = function(a, b) {
                if (void 0 === b && (b = null), !d.animationControl.isRunAnimation()) {
                    var c = d.widgetState.getState();
                    if (d.widgetState.canGoState(c, a)) {
                        switch (d.params.showHelloPopup = !1, c) {
                            case StateMashine.WIDGET_STATE_HELLO:
                                EventManager.publish(EventManager.EVENT_CLOSE_POPUP);
                                break;
                            case StateMashine.WIDGET_STATE_ACTIVATOR:
                                break;
                            case StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION:
                                EventManager.publish(EventManager.EVENT_HIDE_CALL_TO_ACTION);
                                break;
                            case StateMashine.WIDGET_STATE_BUTTON_ACTION:
                                d.slider.goStateAsOpen(), EventManager.publish(EventManager.EVENT_CLOSE_POPUP);
                                break;
                            case StateMashine.WIDGET_STATE_SLIDER:
                                d.slider.goStateAsOpen()
                        }
                        setTimeout(function() {
                            d.callbackGoToState(d, a, b)
                        }, 100)
                    }
                }
            }, this.callbackGoToState = function(a, b, c, e) {
                if (void 0 === c && (c = null), void 0 === e && (e = 0), !(e > 100))
                    if (a.animationControl.isRunAnimation()) setTimeout(function() {
                        a.callbackGoToState(a, b, c, e + 1)
                    }, 100);
                    else switch (b) {
                        case StateMashine.WIDGET_STATE_ACTIVATOR:
                            d.slider.goStateAsOpen(), d.widgetState.goState(StateMashine.WIDGET_STATE_ACTIVATOR);
                            break;
                        case StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION:
                            d.widgetState.goState(StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION) && EventManager.publish(EventManager.EVENT_SHOW_CALL_TO_ACTION);
                            break;
                        case StateMashine.WIDGET_STATE_BUTTON_ACTION:
                            c.isExistActionState() ? d.slider.goStateAsClose() : d.slider.goStateAsOpen(), c.runButtonAction(), c.isExistActionState() ? d.widgetState.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION) : d.widgetState.goState(StateMashine.WIDGET_STATE_ACTIVATOR);
                            break;
                        case StateMashine.WIDGET_STATE_SLIDER:
                            d.slider.goStateAsSlide(), d.widgetState.goState(StateMashine.WIDGET_STATE_SLIDER)
                    }
            }, this.params = a, this.options = b, this.slider = c, this.widgetState = new StateMashine(StateMashine.WIDGET_STATE_ACTIVATOR, this.params.isMobile), this.animationControl = new AnimationControl, this.buildWidget(), this.container = document.getElementById(this.params.wrapperId), EventManager.subscribe(EventManager.EVENT_RESIZE_WIDGET, this.resize), EventManager.subscribe(EventManager.EVENT_MOUSEENTER_MSG_BUTTON, this.onMouseenterButton), EventManager.subscribe(EventManager.EVENT_MOUSE_OUT_MSG_BUTTON, this.onMouseOut), EventManager.subscribe(EventManager.EVENT_MOUSE_OVER_MSG_BUTTON, this.onMouseOver), EventManager.subscribe(EventManager.EVENT_CLICK_MSG_BUTTON, this.onClickButton), EventManager.subscribe(EventManager.EVENT_CLICK_CLOSE_POPUP, this.onClickClosePopup), EventManager.subscribe(EventManager.EVENT_CLOSE_HELLO_POPUP, this.onCloseHelloPopup), this.resize()
        }
        return a.prototype.getContainer = function() {
            return this.container
        }, a.prototype.buildWidget = function() {
            this.widgetState.initJumpRules(this.slider.isSingleMode()), this.slider.renderButtonList()
        }, a.prototype.reBuildWidget = function() {
            this.slider.setOptions(this.options), this.widgetState.initJumpRules(this.slider.isSingleMode()), this.slider.renderButtonList(), this.resize()
        }, a
    }(),
    ParentWindowHelper = function() {
        function a() {}
        return a.resize = function(a, b, c) {
            var d = {
                name: "wh-resize-widget",
                elemId: a,
                width: b,
                height: c
            };
            window.parent.postMessage(JSON.stringify(d), "*")
        }, a.changeURL = function(a, b) {
            var c = {
                name: "wh-change-url",
                url: a,
                type: b
            };
            window.parent.postMessage(JSON.stringify(c), "*")
        }, a.openTab = function(a, b) {
            var c = {
                name: "wh-open-tab",
                url: a,
                type: b
            };
            window.parent.postMessage(JSON.stringify(c), "*")
        }, a.buttonClicked = function(a) {
            var b = {
                name: "wh-click-button",
                type: a
            };
            parent.window.postMessage(JSON.stringify(b), "*")
        }, a
    }(),
    WidgetSize = function() {
        function a() {}
        return a.getSize = function(a) {
            var b = a.getContainer();
            return null === b ? null : {
                width: b.clientWidth,
                height: b.clientHeight
            }
        }, a
    }(),
    Animates = function() {
        function a(b, c, d, e) {
            void 0 === e && (e = ""), this.object = b, this.type = c, this.direction = d, this.status = e || a.ANIMATE_STATUS_RUNNING
        }
        return a.prototype.isEqual = function(a) {
            return this.object === a.object && this.type === a.type && this.direction === a.direction
        }, a
    }();
Animates.ANIMATE_STATUS_RUNNING = "animateStatusRunnig", Animates.ANIMATE_STATUS_CLOSE = "animateStatusClose";
var AnimationControl = function() {
        function a() {
            var a = this;
            this.runningAnimates = [], this.onUpdateAnimates = function(b) {
                for (var c = b[0], d = 0; d < a.runningAnimates.length; d++)
                    if (a.runningAnimates[d].isEqual(c)) return void(c.status === Animates.ANIMATE_STATUS_CLOSE && a.runningAnimates.splice(d));
                c.status === Animates.ANIMATE_STATUS_RUNNING && a.runningAnimates.push(c)
            }, this.isRunAnimation = function() {
                return a.runningAnimates.length > 0
            }, EventManager.subscribe(EventManager.EVENT_UPDATE_ANIMATES_STATUS, this.onUpdateAnimates)
        }
        return a
    }(),
    StateMashine = function() {
        function a(b, c) {
            void 0 === b && (b = null), void 0 === c && (c = !1);
            var d = this;
            this.state = a.WIDGET_STATE_ACTIVATOR, this.isMobile = !1, this.stateJumps = {}, this.getState = function() {
                return d.state
            }, this.setState = function(a) {
                d.state = a
            }, this.goState = function(a) {
                return !!d.canGoState(d.state, a) && (d.setState(a), !0)
            }, this.initJumpRules = function(b) {
                d.stateJumps = a.stateJumpRules(b, d.isMobile)
            }, this.canGoState = function(a, b) {
                if (d.stateJumps[a])
                    for (var c = 0; c < d.stateJumps[a].length; c++)
                        if (d.stateJumps[a][c] === b) return !0;
                return !1
            }, this.isMobile = c, this.state = b || a.WIDGET_STATE_ACTIVATOR, this.isMobile ? this.baseState = a.WIDGET_STATE_ACTIVATOR : this.baseState = a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION
        }
        return a.stateJumpRules = function(b, c) {
            void 0 === c && (c = !1);
            var d = {};
            return d[a.WIDGET_STATE_ACTIVATOR] = [], d[a.WIDGET_STATE_SLIDER] = [c ? a.WIDGET_STATE_ACTIVATOR : a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION, a.WIDGET_STATE_BUTTON_ACTION], d[a.WIDGET_STATE_BUTTON_ACTION] = [c ? a.WIDGET_STATE_ACTIVATOR : a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION], c ? d[a.WIDGET_STATE_HELLO] = [a.WIDGET_STATE_BUTTON_ACTION] : (d[a.WIDGET_STATE_HELLO] = [a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION, a.WIDGET_STATE_BUTTON_ACTION], d[a.WIDGET_STATE_ACTIVATOR].push(a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION), d[a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION] = []), b ? (d[a.WIDGET_STATE_ACTIVATOR].push(a.WIDGET_STATE_BUTTON_ACTION), c || d[a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION].push(a.WIDGET_STATE_BUTTON_ACTION)) : (d[a.WIDGET_STATE_ACTIVATOR].push(a.WIDGET_STATE_SLIDER), d[a.WIDGET_STATE_HELLO].push(a.WIDGET_STATE_SLIDER), c || d[a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION].push(a.WIDGET_STATE_SLIDER)), d
        }, a
    }();
StateMashine.WIDGET_STATE_ACTIVATOR = "widgetStateActivator", StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION = "widgetStateActivatorWithCallToAction", StateMashine.WIDGET_STATE_HELLO = "widgetStateHello", StateMashine.WIDGET_STATE_SLIDER = "widgetStateSlider", StateMashine.WIDGET_STATE_BUTTON_ACTION = "widgetStateButtonAction";
var WidgetSendButtonDesktop = function() {
    function a(a, b) {
        var c = this;
        this.helloPopup = null, this.callToActionPopup = null, this.widget = null, this.onClickOuterActivator = function() {
            if (!c.widget.animationControl.isRunAnimation())
                if (c.widget.slider.isSingleMode()) {
                    var a = c.widget.slider.getOrderButtons();
                    c.widget.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION, a[0])
                } else c.widget.goState(StateMashine.WIDGET_STATE_SLIDER)
        }, ObjectFactory.setOptions({
            isMobile: a.isMobile,
            isPro: !!b.key,
            isBranding: b.branding
        });
        var d = new ButtonSliderDesktop(a, b);
        this.widget = new WidgetSendButtonBase(a, b, d), this.buildWidget(), EventManager.subscribe(EventManager.EVENT_CLICK_HELLO_TEXT, this.onClickOuterActivator), EventManager.subscribe(EventManager.EVENT_CLICK_CALL_TO_ACTION, this.onClickOuterActivator), void 0 !== window.addEventListener && window.addEventListener("message", function(a) {
            try {
                var b = JSON.parse(a.data);
                if (null === b || !b.hasOwnProperty("name")) return;
                "reInit" === b.name && c.reInitWidget(b.options)
            } catch (a) {}
        }, !1)
    }
    return a.prototype.reInitWidget = function(a) {
        this.widget.reInitWidget(a), this.widget.slider.getOrderButtons().length > 0 && this.reBuildCallToAction()
    }, a.prototype.getContainer = function() {
        return this.widget.getContainer()
    }, a.prototype.reBuildCallToAction = function() {
        this.widget.options.call_to_action && WidgetHelper.isString(this.widget.options.call_to_action) && this.widget.options.call_to_action.length > 0 ? null === this.callToActionPopup ? (this.callToActionPopup = new WidgetCallToActionPopup(this.widget.options.call_to_action), this.widget.goState(StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION)) : this.callToActionPopup.reInit(this.widget.options.call_to_action, this.widget.slider.getOrderButtons()) : null !== this.callToActionPopup && this.callToActionPopup.hide()
    }, a.prototype.buildWidget = function() {
        var a = this,
            b = this.widget.slider.getOrderButtons();
        if (b.length > 0) {
            this.widget.options.greeting_message && (!this.widget.options.hasOwnProperty("greeting") || this.widget.options.hasOwnProperty("greeting") && this.widget.options.greeting) && (this.helloPopup = new WidgetHelloPopup(this.widget.options.company_logo_url, this.widget.options.greeting_message, this.widget.params.showHelloPopup), this.helloPopup.setOrderButtons(b)), this.widget.options.call_to_action && WidgetHelper.isString(this.widget.options.call_to_action) && this.widget.options.call_to_action.length > 0 && (this.callToActionPopup = new WidgetCallToActionPopup(this.widget.options.call_to_action), this.callToActionPopup.setOrderButtons(b));
            var c = setTimeout(function() {
                    a.widget.params.showHelloPopup && a.helloPopup ? (a.widget.widgetState.setState(StateMashine.WIDGET_STATE_HELLO), a.helloPopup.render()) : a.callToActionPopup && a.widget.goState(StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION)
                }, 5e3),
                d = function() {
                    clearTimeout(c), EventManager.unsubscribe(EventManager.EVENT_MOUSEENTER_MSG_BUTTON, d)
                };
            EventManager.subscribe(EventManager.EVENT_MOUSEENTER_MSG_BUTTON, d)
        }
    }, a
}();
! function(a, b) {
    var c = [].slice,
        d = {};
    a.amplify = {
        publish: function(a) {
            if ("string" != typeof a) throw new Error("You must provide a valid topic to publish.");
            var b, e, f, g, h = c.call(arguments, 1),
                i = 0;
            if (!d[a]) return !0;
            for (b = d[a].slice(), f = b.length; i < f && (e = b[i], !1 !== (g = e.callback.apply(e.context, h))); i++);
            return !1 !== g
        },
        subscribe: function(a, b, c, e) {
            if ("string" != typeof a) throw new Error("You must provide a valid topic to create a subscription.");
            3 === arguments.length && "number" == typeof c && (e = c, c = b, b = null), 2 === arguments.length && (c = b, b = null), e = e || 10;
            for (var f, g = 0, h = a.split(/\s/), i = h.length; g < i; g++) {
                a = h[g], f = !1, d[a] || (d[a] = []);
                for (var j = d[a].length - 1, k = {
                        callback: c,
                        context: b,
                        priority: e
                    }; j >= 0; j--)
                    if (d[a][j].priority <= e) {
                        d[a].splice(j + 1, 0, k), f = !0;
                        break
                    } f || d[a].unshift(k)
            }
            return c
        },
        unsubscribe: function(a, b, c) {
            if ("string" != typeof a) throw new Error("You must provide a valid topic to remove a subscription.");
            if (2 === arguments.length && (c = b, b = null), d[a])
                for (var e = d[a].length, f = 0; f < e; f++) d[a][f].callback === c && (!b || d[a][f].context === b) && (d[a].splice(f, 1), f--, e--)
        }
    }
}(this);