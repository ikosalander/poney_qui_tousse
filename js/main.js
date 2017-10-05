// This is just a sample script. Paste your real code (javascript or HTML) here.
if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}

function _custom_scroll() {
    device.desktop() && $("html").niceScroll({
        cursorcolor: "#555",
        mousescrollstep: 50,
        scrollspeed: 70,
        zindex: 4,
        cursorborderradius: 0,
        cursorborder: 0,
        horizrailenabled: !1,
        cursorfixedheight: 120,
        cursorwidth: "10px",
        disablemutationobserver: !0
    })
}

function _main_menu() {
    var t = document.getElementById("menu-toggler"),
        e = document.getElementById("header"),
        i = document.getElementById("navigation"),
        n = $(t),
        o = $(e),
        r = $(i),
        s = r.find(".submenu"),
        a = r.find("li a");
    if (s.length && s.parents("li").addClass("has-children"), r.hasClass("navigation-anchor")) {
        var l = r.parents(".inner"),
            c = r.offset().top;
        window.onscroll = function() {
            (window.pageYOffset || document.documentElement.scrollTop) > c ? l.addClass("fixed") : l.removeClass("fixed")
        }, a.on("touchend click", function(t) {
            t.preventDefault();
            var e = this.getAttribute("href");
            return n.is(":visible") && (n.removeClass("active"), o.removeClass("expanded")), $.scrollTo(e, 1e3, {
                easing: "swing",
                offset: -80,
                axis: "y"
            }), !1
        })
    }
    a.on("touchend click", function(t) {
        var e = $(this),
            i = e.parent();
        if (n.is(":visible") && e.next(s).length) return e.next().is(":visible") ? (i.removeClass("drop_active"), e.next().slideUp("fast")) : (e.closest("ul").find("li").removeClass("drop_active"), e.closest("ul").find(".submenu").slideUp("fast"), i.addClass("drop_active"), e.next().slideDown("fast")), !1
    }), n.on("touchend click", function(t) {
        t.preventDefault();
        var e = $(this);
        return e.toggleClass("active"), o.toggleClass("expanded"), e.hasClass("active") || (s.css({
            display: "none"
        }), $(".drop_active").removeClass("drop_active")), !1
    }), $window.smartresize(function() {
        $(this).width() > 767 && (n.removeClass("active"), o.removeClass("expanded"), r.find(".drop_active").removeClass("drop_active"), s.removeAttr("style"))
    })
}

function _bx_slider() {
    $(".bxslider").each(function() {
        var t = $(this);
        t.bxSlider({
            mode: "undefined" != t.data("mode") ? t.data("mode") : "horizontal",
            speed: "undefined" != t.data("speed") ? t.data("speed") : 4e3,
            slideWidth: "undefined" != t.data("slidewidth") ? t.data("slidewidth") : 0,
            minSlides: "undefined" != t.data("minslides") ? t.data("minslides") : 1,
            maxSlides: "undefined" != t.data("maxslides") ? t.data("maxslides") : 1,
            slideMargin: "undefined" != t.data("slidemargin") ? t.data("slidemargin") : 0,
            moveSlides: "undefined" != t.data("moveslides") ? t.data("moveslides") : 0,
            nextSelector: "undefined" != t.data("nextselector") ? t.data("nextselector") : "",
            prevSelector: "undefined" != t.data("prevselector") ? t.data("prevselector") : "",
            pager: "undefined" == t.data("pager") || t.data("pager"),
            pagerSelector: "undefined" != t.data("pagerselector") ? t.data("pagerselector") : "",
            pagerCustom: "undefined" != t.data("pagercustom") ? t.data("pagercustom") : "",
            auto: "undefined" != t.data("auto") && t.data("auto"),
            autoHover: "undefined" == t.data("autoHover") || t.data("autoHover"),
            adaptiveHeight: "undefined" == t.data("adaptiveheight") || t.data("adaptiveheight"),
            captions: "undefined" != t.data("caption") && t.data("captions"),
            preloadImages: "all",
            nextText: "",
            prevText: "",
            controls: !0,
            onSliderLoad: function(t) {
                var e = this,
                    i = e.parents(".bxslider-container"),
                    n = i.find(".control-btn");
                n.hover(function() {
                    e.trigger("mouseenter")
                }, function() {
                    e.trigger("mouseleave")
                })
            },
            onSlideAfter: function(t, e, i) {
                this.parents(".matchHeight-item").length && setTimeout(function() {
                    $.fn.matchHeight._update()
                }, 200)
            }
        })
    })
}

function _isotope_sorting() {
    var t = document.getElementById("option-set"),
        e = $(t);
    if (e.length > 0) {
        var i = $(".js-isotope"),
            n = e.find("a");
        n.on("click", function(t) {
            var n = $(this),
                o = n.data("cat");
            return e.find(".selected").removeClass("selected"), n.addClass("selected"), "*" !== o && (o = "." + o), i.isotope({
                filter: o
            }), !1
        })
    }
}

function _g_map() {
    var t = $(".g_map");
    t.length > 0 && t.each(function() {
        var t = $(this),
            e = new google.maps.LatLng(t.attr("data-longitude"), t.attr("data-latitude")),
            i = (t.attr("data-marker"), {
                zoom: 14,
                center: e,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: !1,
                scrollwheel: !1,
                draggable: !0,
                panControl: !1,
                zoomControl: !1,
                disableDefaultUI: !0
            }),
            n = [{
                featureType: "all",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }]
            }],
            o = new google.maps.Map(t[0], i),
            r = new google.maps.StyledMapType(n, {
                name: "Grayscale"
            });
        o.mapTypes.set("Grayscale", r), o.setMapTypeId("Grayscale");
        new google.maps.Marker({
            map: o,
            position: e
        });
        google.maps.event.addDomListener(window, "resize", function() {
            var t = o.getCenter();
            google.maps.event.trigger(o, "resize"), o.setCenter(t)
        })
    })
}

function _parallax() {
    device.desktop() && ($.stellar({
        scrollProperty: "scroll",
        verticalOffset: 0,
        horizontalOffset: 0,
        horizontalScrolling: !1
    }), $window.smartresize(function() {
        $.stellar("refresh")
    }))
}

function _scrollTop() {
    var t = document.getElementById("btn-to-top-wrap"),
        e = $(t);
    if (e.length > 0) {
        var i = document.getElementById("btn-to-top"),
            n = $(i);
        n.on("click", function(t) {
            return t.preventDefault(), $("body,html").stop().animate({
                scrollTop: 0
            }, 1500), !1
        }), $window.on("scroll", function(t) {
            $window.scrollTop() > n.data("visible-offset") ? e.is(":hidden") && e.fadeIn() : e.is(":visible") && e.fadeOut()
        })
    }
}

function _scrollBottom() {
    var t = document.getElementById("go-bottom"),
        e = $(t);
    e.length > 0 && e.on("click", function(t) {
        t.preventDefault(), $("body,html").stop().animate({
            scrollTop: document.documentElement.clientHeight - 80 + "px"
        }, 1e3)
    })

// // sobo & moula
//     var s = document.getElementById("go-bottom2"),
//         f = $(s);
//     f.length > 0 && f.on("click", function(s) {
//         s.preventDefault(), $("body,html").stop().animate({
//             scrollTop: document.documentElement.clientHeight + 1600 + "px"
//         }, 1e3)
//     })
}

function _accordion() {
    var t = $(".accordion-container");
    if (t.length > 0) {
        var e = t.find(".accordion-item"),
            i = t.find(".accordion-toggler");
        t.each(function() {
            $(this).find(".accordion-item:eq(0)").addClass("active")
        }), i.on("click", function(t) {
            t.preventDefault();
            var i = $(this),
                n = i.parent(),
                o = i.next("article");
            return n.toggleClass("active").siblings(e).removeClass("active").find("article").not(o).slideUp(), o.stop(!1, !0).slideToggle(), !1
        })
    }
}

function _tabs() {
    var t = $(".tab-container");
    if (t.length > 0) {
        var e = t.find("nav a");
        t.each(function() {
            $(this).find("nav a:eq(0)").addClass("active").end().find(".tab-item:eq(0)").addClass("visible")
        }), e.on("click", function(t) {
            t.preventDefault();
            var i = $(this),
                n = i.index(),
                o = i.closest(".tab-container");
            return i.addClass("active").siblings(e).removeClass("active"), o.find(".tab-item.visible").removeClass("visible").end().find(".tab-item:eq(" + n + ")").addClass("visible"), !1
        })
    }
}

function _skills(t) {
    $(".skill-percent[data-percent]", t).each(function() {
        var t = $(this),
            e = Math.ceil($(this).attr("data-percent"));
        $({
            countNum: 0
        }).animate({
            countNum: e
        }, {
            duration: 2e3,
            easing: "linear",
            step: function() {
                var i = "";
                i = 0 == e ? Math.floor(this.countNum) + "%" : Math.floor(this.countNum + 1) + "%", t.text(i) && t.siblings(".progress-bar").children().filter(":first").css("width", i)
            }
        })
    })
}

function _count(t) {
    $(".count", t).each(function() {
        $(this).hasClass("animate") || $(this).countTo({
            from: 0,
            speed: 2e3,
            refreshInterval: 100,
            onComplete: function() {
                $(this).addClass("animate")
            }
        })
    })
}

function _gall() {
    var t = $("a[data-gallery]");
    t.length > 0 && t.boxer({
        fixed: !0,
        videoWidth: 800
    })
}

function _equal_height() {
    $(".matchHeight-container").each(function() {
        $(this).find(".matchHeight-item").matchHeight({
            byRow: !0,
            property: "height"
        })
    })
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length,
            i = rt.type(t);
        return "function" !== i && !rt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t, e, i) {
        if (rt.isFunction(e)) return rt.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return rt.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (gt.test(e)) return rt.filter(e, t, i);
            e = rt.filter(e, t)
        }
        return rt.grep(t, function(t) {
            return J.call(e, t) > -1 !== i
        })
    }

    function o(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function r(t) {
        var e = {};
        return rt.each(t.match(wt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function s() {
        Q.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), rt.ready()
    }

    function a() {
        this.expando = rt.expando + a.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(_t, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Et.test(i) ? rt.parseJSON(i) : i)
                } catch (t) {}
                zt.set(t, e, i)
            } else i = void 0;
        return i
    }

    function c(t, e, i, n) {
        var o, r = 1,
            s = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return rt.css(t, e, "")
            },
            l = a(),
            c = i && i[3] || (rt.cssNumber[e] ? "" : "px"),
            d = (rt.cssNumber[e] || "px" !== c && +l) && Ht.exec(rt.css(t, e));
        if (d && d[3] !== c) {
            c = c || d[3], i = i || [], d = +l || 1;
            do r = r || ".5", d /= r, rt.style(t, e, d + c); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
    }

    function d(t, e) {
        var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], i) : i
    }

    function u(t, e) {
        for (var i = 0, n = t.length; n > i; i++) Ct.set(t[i], "globalEval", !e || Ct.get(e[i], "globalEval"))
    }

    function h(t, e, i, n, o) {
        for (var r, s, a, l, c, h, p = e.createDocumentFragment(), f = [], g = 0, m = t.length; m > g; g++)
            if (r = t[g], r || 0 === r)
                if ("object" === rt.type(r)) rt.merge(f, r.nodeType ? [r] : r);
                else if (At.test(r)) {
            for (s = s || p.appendChild(e.createElement("div")), a = (Wt.exec(r) || ["", ""])[1].toLowerCase(), l = Dt[a] || Dt._default, s.innerHTML = l[1] + rt.htmlPrefilter(r) + l[2], h = l[0]; h--;) s = s.lastChild;
            rt.merge(f, s.childNodes), s = p.firstChild, s.textContent = ""
        } else f.push(e.createTextNode(r));
        for (p.textContent = "", g = 0; r = f[g++];)
            if (n && rt.inArray(r, n) > -1) o && o.push(r);
            else if (c = rt.contains(r.ownerDocument, r), s = d(p.appendChild(r), "script"), c && u(s), i)
            for (h = 0; r = s[h++];) Ot.test(r.type || "") && i.push(r);
        return p
    }

    function p() {
        return !0
    }

    function f() {
        return !1
    }

    function g() {
        try {
            return Q.activeElement
        } catch (t) {}
    }

    function m(t, e, i, n, o, r) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) m(t, a, i, n, e[a], r);
            return t
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = f;
        else if (!o) return t;
        return 1 === r && (s = o, o = function(t) {
            return rt().off(t), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = rt.guid++)), t.each(function() {
            rt.event.add(this, e, o, n, i)
        })
    }

    function v(t, e) {
        return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function b(t) {
        var e = Bt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        var i, n, o, r, s, a, l, c;
        if (1 === e.nodeType) {
            if (Ct.hasData(t) && (r = Ct.access(t), s = Ct.set(e, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (i = 0, n = c[o].length; n > i; i++) rt.event.add(e, o, c[o][i])
            }
            zt.hasData(t) && (a = zt.access(t), l = rt.extend({}, a), zt.set(e, l))
        }
    }

    function w(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && $t.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function S(t, e, i, n) {
        e = Z.apply([], e);
        var o, r, s, a, l, c, u = 0,
            p = t.length,
            f = p - 1,
            g = e[0],
            m = rt.isFunction(g);
        if (m || p > 1 && "string" == typeof g && !nt.checkClone && Ft.test(g)) return t.each(function(o) {
            var r = t.eq(o);
            m && (e[0] = g.call(this, o, r.html())), S(r, e, i, n)
        });
        if (p && (o = h(e, t[0].ownerDocument, !1, t, n), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
            for (s = rt.map(d(o, "script"), y), a = s.length; p > u; u++) l = o, u !== f && (l = rt.clone(l, !0, !0), a && rt.merge(s, d(l, "script"))), i.call(t[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, rt.map(s, b), u = 0; a > u; u++) l = s[u], Ot.test(l.type || "") && !Ct.access(l, "globalEval") && rt.contains(c, l) && (l.src ? rt._evalUrl && rt._evalUrl(l.src) : rt.globalEval(l.textContent.replace(Xt, "")))
        }
        return t
    }

    function T(t, e, i) {
        for (var n, o = e ? rt.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || rt.cleanData(d(n)), n.parentNode && (i && rt.contains(n.ownerDocument, n) && u(d(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function k(t, e) {
        var i = rt(e.createElement(t)).appendTo(e.body),
            n = rt.css(i[0], "display");
        return i.detach(), n
    }

    function C(t) {
        var e = Q,
            i = Vt[t];
        return i || (i = k(t, e), "none" !== i && i || (Yt = (Yt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Yt[0].contentDocument, e.write(), e.close(), i = k(t, e), Yt.detach()), Vt[t] = i), i
    }

    function z(t, e, i) {
        var n, o, r, s, a = t.style;
        return i = i || Gt(t), s = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== s && void 0 !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), i && !nt.pixelMarginRight() && Qt.test(s) && Ut.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
    }

    function E(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function _(t) {
        if (t in ne) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = ie.length; i--;)
            if (t = ie[i] + e, t in ne) return t
    }

    function L(t, e, i) {
        var n = Ht.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function H(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += rt.css(t, i + It[r], !0, o)), n ? ("content" === i && (s -= rt.css(t, "padding" + It[r], !0, o)), "margin" !== i && (s -= rt.css(t, "border" + It[r] + "Width", !0, o))) : (s += rt.css(t, "padding" + It[r], !0, o), "padding" !== i && (s += rt.css(t, "border" + It[r] + "Width", !0, o)));
        return s
    }

    function I(t, e, i) {
        var n = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = Gt(t),
            s = "border-box" === rt.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = z(t, e, r), (0 > o || null == o) && (o = t.style[e]), Qt.test(o)) return o;
            n = s && (nt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + H(t, e, i || (s ? "border" : "content"), n, r) + "px"
    }

    function M(t, e) {
        for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (r[s] = Ct.get(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Mt(n) && (r[s] = Ct.access(n, "olddisplay", C(n.nodeName)))) : (o = Mt(n), "none" === i && o || Ct.set(n, "olddisplay", o ? i : rt.css(n, "display"))));
        for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function $(t, e, i, n, o) {
        return new $.prototype.init(t, e, i, n, o)
    }

    function W() {
        return t.setTimeout(function() {
            oe = void 0
        }), oe = rt.now()
    }

    function O(t, e) {
        var i, n = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = It[n], o["margin" + i] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t), o
    }

    function D(t, e, i) {
        for (var n, o = (j.tweeners[e] || []).concat(j.tweeners["*"]), r = 0, s = o.length; s > r; r++)
            if (n = o[r].call(i, e, t)) return n
    }

    function A(t, e, i) {
        var n, o, r, s, a, l, c, d, u = this,
            h = {},
            p = t.style,
            f = t.nodeType && Mt(t),
            g = Ct.get(t, "fxshow");
        i.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, rt.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = rt.css(t, "display"), d = "none" === c ? Ct.get(t, "olddisplay") || C(t.nodeName) : c, "inline" === d && "none" === rt.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", u.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (o = e[n], se.exec(o)) {
                if (delete e[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[n]) continue;
                    f = !0
                }
                h[n] = g && g[n] || rt.style(t, n)
            } else c = void 0;
        if (rt.isEmptyObject(h)) "inline" === ("none" === c ? C(t.nodeName) : c) && (p.display = c);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = Ct.access(t, "fxshow", {}), r && (g.hidden = !f), f ? rt(t).show() : u.done(function() {
                rt(t).hide()
            }), u.done(function() {
                var e;
                Ct.remove(t, "fxshow");
                for (e in h) rt.style(t, e, h[e])
            });
            for (n in h) s = D(f ? g[n] : 0, n, u), n in g || (g[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function P(t, e) {
        var i, n, o, r, s;
        for (i in t)
            if (n = rt.camelCase(i), o = e[n], r = t[i], rt.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = rt.cssHooks[n], s && "expand" in s) {
                r = s.expand(r), delete t[n];
                for (i in r) i in t || (t[i] = r[i], e[i] = o)
            } else e[n] = o
    }

    function j(t, e, i) {
        var n, o, r = 0,
            s = j.prefilters.length,
            a = rt.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = oe || W(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, r = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(t, [c, r, i]), 1 > r && l ? i : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: rt.extend({}, e),
                opts: rt.extend(!0, {
                    specialEasing: {},
                    easing: rt.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: oe || W(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = rt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            d = c.props;
        for (P(d, c.opts.specialEasing); s > r; r++)
            if (n = j.prefilters[r].call(c, t, d, c.opts)) return rt.isFunction(n.stop) && (rt._queueHooks(c.elem, c.opts.queue).stop = rt.proxy(n.stop, n)), n;
        return rt.map(d, D, c), rt.isFunction(c.opts.start) && c.opts.start.call(t, c), rt.fx.timer(rt.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function N(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function q(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0,
                r = e.toLowerCase().match(wt) || [];
            if (rt.isFunction(i))
                for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function R(t, e, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, rt.each(t[a] || [], function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = t === ze;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function F(t, e) {
        var i, n, o = rt.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && rt.extend(!0, t, n), t
    }

    function B(t, e, i) {
        for (var n, o, r, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function X(t, e, i, n) {
        var o, r, s, a, l, c = {},
            d = t.dataTypes.slice();
        if (d[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (r = d.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = d.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], d.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t.throws) e = s(e);
                else try {
                    e = s(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: s ? t : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function Y(t, e, i, n) {
        var o;
        if (rt.isArray(e)) rt.each(e, function(e, o) {
            i || He.test(t) ? n(t, o) : Y(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
        });
        else if (i || "object" !== rt.type(e)) n(t, e);
        else
            for (o in e) Y(t + "[" + o + "]", e[o], i, n)
    }

    function V(t) {
        return rt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var U = [],
        Q = t.document,
        G = U.slice,
        Z = U.concat,
        K = U.push,
        J = U.indexOf,
        tt = {},
        et = tt.toString,
        it = tt.hasOwnProperty,
        nt = {},
        ot = "2.2.4",
        rt = function(t, e) {
            return new rt.fn.init(t, e)
        },
        st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        lt = /-([\da-z])/gi,
        ct = function(t, e) {
            return e.toUpperCase()
        };
    rt.fn = rt.prototype = {
        jquery: ot,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
        },
        pushStack: function(t) {
            var e = rt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return rt.each(this, t)
        },
        map: function(t) {
            return this.pushStack(rt.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: U.sort,
        splice: U.splice
    }, rt.extend = rt.fn.extend = function() {
        var t, e, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = s[e], n = t[e], s !== n && (c && n && (rt.isPlainObject(n) || (o = rt.isArray(n))) ? (o ? (o = !1, r = i && rt.isArray(i) ? i : []) : r = i && rt.isPlainObject(i) ? i : {}, s[e] = rt.extend(c, r, n)) : void 0 !== n && (s[e] = n));
        return s
    }, rt.extend({
        expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === rt.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !rt.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
            if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t);
            return void 0 === e || it.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = rt.trim(t), t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(at, "ms-").replace(lt, ct)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, o = 0;
            if (i(t))
                for (n = t.length; n > o && e.call(t[o], o, t[o]) !== !1; o++);
            else
                for (o in t)
                    if (e.call(t[o], o, t[o]) === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(st, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? rt.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : J.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
            return t.length = o, t
        },
        grep: function(t, e, i) {
            for (var n, o = [], r = 0, s = t.length, a = !i; s > r; r++) n = !e(t[r], r), n !== a && o.push(t[r]);
            return o
        },
        map: function(t, e, n) {
            var o, r, s = 0,
                a = [];
            if (i(t))
                for (o = t.length; o > s; s++) r = e(t[s], s, n), null != r && a.push(r);
            else
                for (s in t) r = e(t[s], s, n), null != r && a.push(r);
            return Z.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, o;
            return "string" == typeof e && (i = t[e], e = t, t = i), rt.isFunction(t) ? (n = G.call(arguments, 2), o = function() {
                return t.apply(e || this, n.concat(G.call(arguments)))
            }, o.guid = t.guid = t.guid || rt.guid++, o) : void 0
        },
        now: Date.now,
        support: nt
    }), "function" == typeof Symbol && (rt.fn[Symbol.iterator] = U[Symbol.iterator]), rt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var dt = function(t) {
        function e(t, e, i, n) {
            var o, r, s, a, l, c, u, p, f = e && e.ownerDocument,
                g = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i;
            if (!n && ((e ? e.ownerDocument || e : N) !== M && I(e), e = e || M, W)) {
                if (11 !== g && (c = vt.exec(t)))
                    if (o = c[1]) {
                        if (9 === g) {
                            if (!(s = e.getElementById(o))) return i;
                            if (s.id === o) return i.push(s), i
                        } else if (f && (s = f.getElementById(o)) && P(e, s) && s.id === o) return i.push(s), i
                    } else {
                        if (c[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = c[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(o)), i
                    }
                if (w.qsa && !X[t + " "] && (!O || !O.test(t))) {
                    if (1 !== g) f = e, p = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = j), u = C(t), r = u.length, l = ht.test(a) ? "#" + a : "[id='" + a + "']"; r--;) u[r] = l + " " + h(u[r]);
                        p = u.join(","), f = yt.test(t) && d(e.parentNode) || e
                    }
                    if (p) try {
                        return K.apply(i, f.querySelectorAll(p)), i
                    } catch (t) {} finally {
                        a === j && e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(at, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > S.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[j] = !0, t
        }

        function o(t) {
            var e = M.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) S.attrHandle[i[n]] = e
        }

        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function c(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function d(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function u() {}

        function h(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir,
                o = i && "parentNode" === n,
                r = R++;
            return e.first ? function(e, i, r) {
                for (; e = e[n];)
                    if (1 === e.nodeType || o) return t(e, i, r)
            } : function(e, i, s) {
                var a, l, c, d = [q, r];
                if (s) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || o) && t(e, i, s)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) {
                            if (c = e[j] || (e[j] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[n]) && a[0] === q && a[1] === r) return d[2] = a[2];
                            if (l[n] = d, d[2] = t(e, i, s)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var o = t.length; o--;)
                    if (!t[o](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) {
            for (var o = 0, r = i.length; r > o; o++) e(t, i[o], n);
            return n
        }

        function m(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), c && e.push(a)));
            return s
        }

        function v(t, e, i, o, r, s) {
            return o && !o[j] && (o = v(o)), r && !r[j] && (r = v(r, s)), n(function(n, s, a, l) {
                var c, d, u, h = [],
                    p = [],
                    f = s.length,
                    v = n || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? v : m(v, h, t, a, l),
                    b = i ? r || (n ? t : f || o) ? [] : s : y;
                if (i && i(y, b, a, l), o)
                    for (c = m(b, p), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (b[p[d]] = !(y[p[d]] = u));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
                            r(null, b = [], c, l)
                        }
                        for (d = b.length; d--;)(u = b[d]) && (c = r ? tt(n, u) : h[d]) > -1 && (n[c] = !(s[c] = u))
                    }
                } else b = m(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
            })
        }

        function y(t) {
            for (var e, i, n, o = t.length, r = S.relative[t[0].type], s = r || S.relative[" "], a = r ? 1 : 0, l = p(function(t) {
                    return t === e
                }, s, !0), c = p(function(t) {
                    return tt(e, t) > -1
                }, s, !0), d = [function(t, i, n) {
                    var o = !r && (n || i !== _) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                    return e = null, o
                }]; o > a; a++)
                if (i = S.relative[t[a].type]) d = [p(f(d), i)];
                else {
                    if (i = S.filter[t[a].type].apply(null, t[a].matches), i[j]) {
                        for (n = ++a; o > n && !S.relative[t[n].type]; n++);
                        return v(a > 1 && f(d), a > 1 && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), i, n > a && y(t.slice(a, n)), o > n && y(t = t.slice(n)), o > n && h(t))
                    }
                    d.push(i)
                }
            return f(d)
        }

        function b(t, i) {
            var o = i.length > 0,
                r = t.length > 0,
                s = function(n, s, a, l, c) {
                    var d, u, h, p = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        y = _,
                        b = n || r && S.find.TAG("*", c),
                        x = q += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (c && (_ = s === M || s || c); f !== w && null != (d = b[f]); f++) {
                        if (r && d) {
                            for (u = 0, s || d.ownerDocument === M || (I(d), a = !W); h = t[u++];)
                                if (h(d, s || M, a)) {
                                    l.push(d);
                                    break
                                }
                            c && (q = x)
                        }
                        o && ((d = !h && d) && p--, n && g.push(d))
                    }
                    if (p += f, o && f !== p) {
                        for (u = 0; h = i[u++];) h(g, v, s, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = G.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (q = x, _ = y), g
                };
            return o ? n(s) : s
        }
        var x, w, S, T, k, C, z, E, _, L, H, I, M, $, W, O, D, A, P, j = "sizzle" + 1 * new Date,
            N = t.document,
            q = 0,
            R = 0,
            F = i(),
            B = i(),
            X = i(),
            Y = function(t, e) {
                return t === e && (H = !0), 0
            },
            V = 1 << 31,
            U = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            Z = Q.push,
            K = Q.push,
            J = Q.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            rt = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            st = new RegExp(it + "+", "g"),
            at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"),
            ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            ut = new RegExp(rt),
            ht = new RegExp("^" + nt + "$"),
            pt = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            ft = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            wt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            St = function() {
                I()
            };
        try {
            K.apply(Q = J.call(N.childNodes), N.childNodes), Q[N.childNodes.length].nodeType
        } catch (t) {
            K = {
                apply: Q.length ? function(t, e) {
                    Z.apply(t, J.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {}, k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, I = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : N;
            return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, $ = M.documentElement, W = !k(M), (i = M.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", St, !1) : i.attachEvent && i.attachEvent("onunload", St)), w.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = o(function(t) {
                return t.appendChild(M.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = mt.test(M.getElementsByClassName), w.getById = o(function(t) {
                return $.appendChild(t).id = j, !M.getElementsByName || !M.getElementsByName(j).length
            }), w.getById ? (S.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && W) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }, S.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete S.find.ID, S.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), S.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, S.find.CLASS = w.getElementsByClassName && function(t, e) {
                return "undefined" != typeof e.getElementsByClassName && W ? e.getElementsByClassName(t) : void 0
            }, D = [], O = [], (w.qsa = mt.test(M.querySelectorAll)) && (o(function(t) {
                $.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + j + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || O.push(".#.+[+~]")
            }), o(function(t) {
                var e = M.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
            })), (w.matchesSelector = mt.test(A = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && o(function(t) {
                w.disconnectedMatch = A.call(t, "div"), A.call(t, "[s!='']:x"), D.push("!=", rt)
            }), O = O.length && new RegExp(O.join("|")), D = D.length && new RegExp(D.join("|")), e = mt.test($.compareDocumentPosition), P = e || mt.test($.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = e ? function(t, e) {
                if (t === e) return H = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === M || t.ownerDocument === N && P(N, t) ? -1 : e === M || e.ownerDocument === N && P(N, e) ? 1 : L ? tt(L, t) - tt(L, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return H = !0, 0;
                var i, n = 0,
                    o = t.parentNode,
                    r = e.parentNode,
                    a = [t],
                    l = [e];
                if (!o || !r) return t === M ? -1 : e === M ? 1 : o ? -1 : r ? 1 : L ? tt(L, t) - tt(L, e) : 0;
                if (o === r) return s(t, e);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? s(a[n], l[n]) : a[n] === N ? -1 : l[n] === N ? 1 : 0
            }, M) : M
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== M && I(t), i = i.replace(dt, "='$1']"), w.matchesSelector && W && !X[i + " "] && (!D || !D.test(i)) && (!O || !O.test(i))) try {
                var n = A.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {}
            return e(i, M, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== M && I(t), P(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== M && I(t);
            var i = S.attrHandle[e.toLowerCase()],
                n = i && U.call(S.attrHandle, e.toLowerCase()) ? i(t, e, !W) : void 0;
            return void 0 !== n ? n : w.attributes || !W ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                o = 0;
            if (H = !w.detectDuplicates, L = !w.sortStable && t.slice(0), t.sort(Y), H) {
                for (; e = t[o++];) e === t[o] && (n = i.push(o));
                for (; n--;) t.splice(i[n], 1)
            }
            return L = null, t
        }, T = e.getText = function(t) {
            var e, i = "",
                n = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[n++];) i += T(e);
            return i
        }, S = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = F[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && F(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, o) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var c, d, u, h, p, f, g = r !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (h = e; h = h[g];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                for (h = m, u = h[j] || (h[j] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), c = d[t] || [], p = c[0] === q && c[1], b = p && c[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (b = p = 0) || f.pop();)
                                    if (1 === h.nodeType && ++b && h === e) {
                                        d[t] = [q, p, b];
                                        break
                                    }
                            } else if (y && (h = e, u = h[j] || (h[j] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), c = d[t] || [], p = c[0] === q && c[1], b = p), b === !1)
                                for (;
                                    (h = ++p && h && h[g] || (b = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (u = h[j] || (h[j] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), d[t] = [q, b]), h !== e)););
                            return b -= o, b === n || b % n === 0 && b / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var o, r = S.pseudos[t] || S.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[j] ? r(i) : r.length > 1 ? (o = [t, t, "", i], S.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, o = r(t, i), s = o.length; s--;) n = tt(t, o[s]), t[n] = !(e[n] = o[s])
                    }) : function(t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        o = z(t.replace(at, "$1"));
                    return o[j] ? n(function(t, e, i, n) {
                        for (var r, s = o(t, null, n, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, n, r) {
                        return e[0] = t, o(e, null, r, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(xt, wt),
                        function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = W ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === $
                },
                focus: function(t) {
                    return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !S.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return ft.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: c(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, S.pseudos.nth = S.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) S.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) S.pseudos[x] = l(x);
        return u.prototype = S.filters = S.pseudos, S.setFilters = new u, C = e.tokenize = function(t, i) {
            var n, o, r, s, a, l, c, d = B[t + " "];
            if (d) return i ? 0 : d.slice(0);
            for (a = t, l = [], c = S.preFilter; a;) {
                n && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ct.exec(a)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace(at, " ")
                }), a = a.slice(n.length));
                for (s in S.filter) !(o = pt[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
        }, z = e.compile = function(t, e) {
            var i, n = [],
                o = [],
                r = X[t + " "];
            if (!r) {
                for (e || (e = C(t)), i = e.length; i--;) r = y(e[i]), r[j] ? n.push(r) : o.push(r);
                r = X(t, b(o, n)), r.selector = t
            }
            return r
        }, E = e.select = function(t, e, i, n) {
            var o, r, s, a, l, c = "function" == typeof t && t,
                u = !n && C(t = c.selector || t);
            if (i = i || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && W && S.relative[r[1].type]) {
                    if (e = (S.find.ID(s.matches[0].replace(xt, wt), e) || [])[0], !e) return i;
                    c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !S.relative[a = s.type]);)
                    if ((l = S.find[a]) && (n = l(s.matches[0].replace(xt, wt), yt.test(r[0].type) && d(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = n.length && h(r), !t) return K.apply(i, n), i;
                        break
                    }
            }
            return (c || z(t, u))(n, e, !W, i, !e || yt.test(t) && d(e.parentNode) || e), i
        }, w.sortStable = j.split("").sort(Y).join("") === j, w.detectDuplicates = !!H, I(), w.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(M.createElement("div"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    rt.find = dt, rt.expr = dt.selectors, rt.expr[":"] = rt.expr.pseudos, rt.uniqueSort = rt.unique = dt.uniqueSort, rt.text = dt.getText, rt.isXMLDoc = dt.isXML, rt.contains = dt.contains;
    var ut = function(t, e, i) {
            for (var n = [], o = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && rt(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        ht = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        pt = rt.expr.match.needsContext,
        ft = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        gt = /^.[^:#\[\.,]*$/;
    rt.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? rt.find.matchesSelector(n, t) ? [n] : [] : rt.find.matches(t, rt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, rt.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                o = this;
            if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (rt.contains(o[e], this)) return !0
            }));
            for (e = 0; i > e; e++) rt.find(t, o[e], n);
            return n = this.pushStack(i > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && pt.test(t) ? rt(t) : t || [], !1).length
        }
    });
    var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        yt = rt.fn.init = function(t, e, i) {
            var n, o;
            if (!t) return this;
            if (i = i || mt, "string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), ft.test(n[1]) && rt.isPlainObject(e))
                        for (n in e) rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return o = Q.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Q, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
        };
    yt.prototype = rt.fn, mt = rt(Q);
    var bt = /^(?:parents|prev(?:Until|All))/,
        xt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    rt.fn.extend({
        has: function(t) {
            var e = rt(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (rt.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, o = this.length, r = [], s = pt.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? rt.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? J.call(rt(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(rt.uniqueSort(rt.merge(this.get(), rt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), rt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return ut(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return ut(t, "parentNode", i)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return ut(t, "nextSibling")
        },
        prevAll: function(t) {
            return ut(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return ut(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return ut(t, "previousSibling", i)
        },
        siblings: function(t) {
            return ht((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ht(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || rt.merge([], t.childNodes)
        }
    }, function(t, e) {
        rt.fn[t] = function(i, n) {
            var o = rt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = rt.filter(n, o)), this.length > 1 && (xt[t] || rt.uniqueSort(o), bt.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var wt = /\S+/g;
    rt.Callbacks = function(t) {
        t = "string" == typeof t ? r(t) : rt.extend({}, t);
        var e, i, n, o, s = [],
            a = [],
            l = -1,
            c = function() {
                for (o = t.once, n = e = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < s.length;) s[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = s.length, i = !1);
                t.memory || (i = !1), e = !1, o && (s = i ? [] : "")
            },
            d = {
                add: function() {
                    return s && (i && !e && (l = s.length - 1, a.push(i)), function e(i) {
                        rt.each(i, function(i, n) {
                            rt.isFunction(n) ? t.unique && d.has(n) || s.push(n) : n && n.length && "string" !== rt.type(n) && e(n)
                        })
                    }(arguments), i && !e && c()), this
                },
                remove: function() {
                    return rt.each(arguments, function(t, e) {
                        for (var i;
                            (i = rt.inArray(e, s, i)) > -1;) s.splice(i, 1), l >= i && l--
                    }), this
                },
                has: function(t) {
                    return t ? rt.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = a = [], i || (s = i = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, i) {
                    return o || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || c()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, rt.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", rt.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return rt.Deferred(function(i) {
                            rt.each(e, function(e, r) {
                                var s = rt.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && rt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? rt.extend(t, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, rt.each(e, function(t, r) {
                var s = r[2],
                    a = r[3];
                n[r[1]] = s.add, a && s.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? n : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), n.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, i, n, o = 0,
                r = G.call(arguments),
                s = r.length,
                a = 1 !== s || t && rt.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : rt.Deferred(),
                c = function(t, i, n) {
                    return function(o) {
                        i[t] = this, n[t] = arguments.length > 1 ? G.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (s > 1)
                for (e = new Array(s), i = new Array(s), n = new Array(s); s > o; o++) r[o] && rt.isFunction(r[o].promise) ? r[o].promise().progress(c(o, i, e)).done(c(o, n, r)).fail(l.reject) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    });
    var St;
    rt.fn.ready = function(t) {
        return rt.ready.promise().done(t), this
    }, rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? rt.readyWait++ : rt.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --rt.readyWait : rt.isReady) || (rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (St.resolveWith(Q, [rt]), rt.fn.triggerHandler && (rt(Q).triggerHandler("ready"), rt(Q).off("ready"))))
        }
    }), rt.ready.promise = function(e) {
        return St || (St = rt.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? t.setTimeout(rt.ready) : (Q.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), St.promise(e)
    }, rt.ready.promise();
    var Tt = function(t, e, i, n, o, r, s) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === rt.type(i)) {
                o = !0;
                for (a in i) Tt(t, e, a, i[a], !0, r, s)
            } else if (void 0 !== n && (o = !0, rt.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                    return c.call(rt(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
        },
        kt = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(t, e) {
            var i = e || {};
            return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function(t) {
            if (!kt(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, kt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n, o = this.cache(t);
            if ("string" == typeof e) o[e] = i;
            else
                for (n in e) o[n] = e[n];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, rt.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, o, r = t[this.expando];
            if (void 0 !== r) {
                if (void 0 === e) this.register(t);
                else {
                    rt.isArray(e) ? n = e.concat(e.map(rt.camelCase)) : (o = rt.camelCase(e), e in r ? n = [e, o] : (n = o, n = n in r ? [n] : n.match(wt) || [])), i = n.length;
                    for (; i--;) delete r[n[i]]
                }(void 0 === e || rt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !rt.isEmptyObject(e)
        }
    };
    var Ct = new a,
        zt = new a,
        Et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _t = /[A-Z]/g;
    rt.extend({
        hasData: function(t) {
            return zt.hasData(t) || Ct.hasData(t)
        },
        data: function(t, e, i) {
            return zt.access(t, e, i)
        },
        removeData: function(t, e) {
            zt.remove(t, e)
        },
        _data: function(t, e, i) {
            return Ct.access(t, e, i)
        },
        _removeData: function(t, e) {
            Ct.remove(t, e)
        }
    }), rt.fn.extend({
        data: function(t, e) {
            var i, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = zt.get(r), 1 === r.nodeType && !Ct.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = rt.camelCase(n.slice(5)), l(r, n, o[n])));
                    Ct.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                zt.set(this, t)
            }) : Tt(this, function(e) {
                var i, n;
                if (r && void 0 === e) {
                    if (i = zt.get(r, t) || zt.get(r, t.replace(_t, "-$&").toLowerCase()), void 0 !== i) return i;
                    if (n = rt.camelCase(t), i = zt.get(r, n), void 0 !== i) return i;
                    if (i = l(r, n, void 0), void 0 !== i) return i
                } else n = rt.camelCase(t), this.each(function() {
                    var i = zt.get(this, n);
                    zt.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && zt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                zt.remove(this, t)
            })
        }
    }), rt.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = Ct.get(t, e), i && (!n || rt.isArray(i) ? n = Ct.access(t, e, rt.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = rt.queue(t, e),
                n = i.length,
                o = i.shift(),
                r = rt._queueHooks(t, e),
                s = function() {
                    rt.dequeue(t, e)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return Ct.get(t, i) || Ct.access(t, i, {
                empty: rt.Callbacks("once memory").add(function() {
                    Ct.remove(t, [e + "queue", i])
                })
            })
        }
    }), rt.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = rt.queue(this, t, e);
                rt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && rt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                rt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                o = rt.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = Ct.get(r[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ht = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"),
        It = ["Top", "Right", "Bottom", "Left"],
        Mt = function(t, e) {
            return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
        },
        $t = /^(?:checkbox|radio)$/i,
        Wt = /<([\w:-]+)/,
        Ot = /^$|\/(?:java|ecma)script/i,
        Dt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Dt.optgroup = Dt.option, Dt.tbody = Dt.tfoot = Dt.colgroup = Dt.caption = Dt.thead, Dt.th = Dt.td;
    var At = /<|&#?\w+;/;
    ! function() {
        var t = Q.createDocumentFragment(),
            e = t.appendChild(Q.createElement("div")),
            i = Q.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Pt = /^key/,
        jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Nt = /^([^.]*)(?:\.(.+)|)/;
    rt.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var r, s, a, l, c, d, u, h, p, f, g, m = Ct.get(t);
            if (m)
                for (i.handler && (r = i, i = r.handler, o = r.selector), i.guid || (i.guid = rt.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return "undefined" != typeof rt && rt.event.triggered !== e.type ? rt.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(wt) || [""], c = e.length; c--;) a = Nt.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (u = rt.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = rt.event.special[p] || {}, d = rt.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && rt.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, r), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, u.setup && u.setup.call(t, n, f, s) !== !1 || t.addEventListener && t.addEventListener(p, s)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), rt.event.global[p] = !0)
        },
        remove: function(t, e, i, n, o) {
            var r, s, a, l, c, d, u, h, p, f, g, m = Ct.hasData(t) && Ct.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(wt) || [""], c = e.length; c--;)
                    if (a = Nt.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (u = rt.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) d = h[r], !o && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(r, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(t, d));
                        s && !h.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || rt.removeEvent(t, p, m.handle), delete l[p])
                    } else
                        for (p in l) rt.event.remove(t, p + e[c], i, n, !0);
                rt.isEmptyObject(l) && Ct.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = rt.event.fix(t);
            var e, i, n, o, r, s = [],
                a = G.call(arguments),
                l = (Ct.get(this, "events") || {})[t.type] || [],
                c = rt.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = rt.event.handlers.call(this, t, l), e = 0;
                    (o = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, i = 0;
                        (r = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, n = ((rt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, o, r, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (n = [], i = 0; a > i; i++) r = e[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? rt(o, this).index(l) > -1 : rt.find(o, this, null, [l]).length), n[o] && n.push(r);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, o, r = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Q, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[rt.expando]) return t;
            var e, i, n, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = jt.test(o) ? this.mouseHooks : Pt.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
            return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && rt.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return rt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, rt.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, rt.Event = function(t, e) {
        return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : f) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
    }, rt.Event.prototype = {
        constructor: rt.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = p, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = p, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = p, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        rt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return o && (o === n || rt.contains(n, o)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), rt.fn.extend({
        on: function(t, e, i, n) {
            return m(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return m(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, rt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = f), this.each(function() {
                rt.event.remove(this, t, i, e)
            })
        }
    });
    var qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Rt = /<script|<style|<link/i,
        Ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Bt = /^true\/(.*)/,
        Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    rt.extend({
        htmlPrefilter: function(t) {
            return t.replace(qt, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, o, r, s, a = t.cloneNode(!0),
                l = rt.contains(t.ownerDocument, t);
            if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                for (s = d(a), r = d(t), n = 0, o = r.length; o > n; n++) w(r[n], s[n]);
            if (e)
                if (i)
                    for (r = r || d(t), s = s || d(a), n = 0, o = r.length; o > n; n++) x(r[n], s[n]);
                else x(t, a);
            return s = d(a, "script"), s.length > 0 && u(s, !l && d(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, i, n, o = rt.event.special, r = 0; void 0 !== (i = t[r]); r++)
                if (kt(i)) {
                    if (e = i[Ct.expando]) {
                        if (e.events)
                            for (n in e.events) o[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, e.handle);
                        i[Ct.expando] = void 0
                    }
                    i[zt.expando] && (i[zt.expando] = void 0)
                }
        }
    }), rt.fn.extend({
        domManip: S,
        detach: function(t) {
            return T(this, t, !0)
        },
        remove: function(t) {
            return T(this, t)
        },
        text: function(t) {
            return Tt(this, function(t) {
                return void 0 === t ? rt.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return S(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return S(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return S(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return S(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (rt.cleanData(d(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return rt.clone(this, t, e)
            })
        },
        html: function(t) {
            return Tt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Rt.test(t) && !Dt[(Wt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = rt.htmlPrefilter(t);
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (rt.cleanData(d(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return S(this, arguments, function(e) {
                var i = this.parentNode;
                rt.inArray(this, t) < 0 && (rt.cleanData(d(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        rt.fn[t] = function(t) {
            for (var i, n = [], o = rt(t), r = o.length - 1, s = 0; r >= s; s++) i = s === r ? this : this.clone(!0), rt(o[s])[e](i), K.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Yt, Vt = {
            HTML: "block",
            BODY: "block"
        },
        Ut = /^margin/,
        Qt = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"),
        Gt = function(e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        },
        Zt = function(t, e, i, n) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            o = i.apply(t, n || []);
            for (r in e) t.style[r] = s[r];
            return o
        },
        Kt = Q.documentElement;
    ! function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(s);
            var e = t.getComputedStyle(a);
            i = "1%" !== e.top, r = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Kt.removeChild(s)
        }
        var i, n, o, r, s = Q.createElement("div"),
            a = Q.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), rt.extend(nt, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            pixelMarginRight: function() {
                return null == n && e(), o
            },
            reliableMarginLeft: function() {
                return null == n && e(), r
            },
            reliableMarginRight: function() {
                var e, i = a.appendChild(Q.createElement("div"));
                return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Kt.appendChild(s), e = !parseFloat(t.getComputedStyle(i).marginRight), Kt.removeChild(s), a.removeChild(i), e
            }
        }))
    }();
    var Jt = /^(none|table(?!-c[ea]).+)/,
        te = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ee = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ie = ["Webkit", "O", "Moz", "ms"],
        ne = Q.createElement("div").style;
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = z(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = rt.camelCase(e),
                    l = t.style;
                return e = rt.cssProps[a] || (rt.cssProps[a] = _(a) || a), s = rt.cssHooks[e] || rt.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : (r = typeof i, "string" === r && (o = Ht.exec(i)) && o[1] && (i = c(t, e, o), r = "number"), void(null != i && i === i && ("number" === r && (i += o && o[3] || (rt.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, n) {
            var o, r, s, a = rt.camelCase(e);
            return e = rt.cssProps[a] || (rt.cssProps[a] = _(a) || a), s = rt.cssHooks[e] || rt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = z(t, e, n)), "normal" === o && e in ee && (o = ee[e]), "" === i || i ? (r = parseFloat(o), i === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), rt.each(["height", "width"], function(t, e) {
        rt.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Jt.test(rt.css(t, "display")) && 0 === t.offsetWidth ? Zt(t, te, function() {
                    return I(t, e, n)
                }) : I(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var o, r = n && Gt(t),
                    s = n && H(t, e, n, "border-box" === rt.css(t, "boxSizing", !1, r), r);
                return s && (o = Ht.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = rt.css(t, e)), L(t, i, s)
            }
        }
    }), rt.cssHooks.marginLeft = E(nt.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(z(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), rt.cssHooks.marginRight = E(nt.reliableMarginRight, function(t, e) {
        return e ? Zt(t, {
            display: "inline-block"
        }, z, [t, "marginRight"]) : void 0
    }), rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        rt.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + It[n] + e] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, Ut.test(t) || (rt.cssHooks[t + e].set = L)
    }), rt.fn.extend({
        css: function(t, e) {
            return Tt(this, function(t, e, i) {
                var n, o, r = {},
                    s = 0;
                if (rt.isArray(e)) {
                    for (n = Gt(t), o = e.length; o > s; s++) r[e[s]] = rt.css(t, e[s], !1, n);
                    return r
                }
                return void 0 !== i ? rt.style(t, e, i) : rt.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return M(this, !0)
        },
        hide: function() {
            return M(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Mt(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.Tween = $, $.prototype = {
        constructor: $,
        init: function(t, e, i, n, o, r) {
            this.elem = t, this.prop = i, this.easing = o || rt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (rt.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = $.propHooks[this.prop];
            return t && t.get ? t.get(this) : $.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = $.propHooks[this.prop];
            return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[rt.cssProps[t.prop]] && !rt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : rt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, rt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, rt.fx = $.prototype.init, rt.fx.step = {};
    var oe, re, se = /^(?:toggle|show|hide)$/,
        ae = /queueHooks$/;
    rt.Animation = rt.extend(j, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return c(i.elem, t, Ht.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(wt);
                for (var i, n = 0, o = t.length; o > n; n++) i = t[n], j.tweeners[i] = j.tweeners[i] || [], j.tweeners[i].unshift(e)
            },
            prefilters: [A],
            prefilter: function(t, e) {
                e ? j.prefilters.unshift(t) : j.prefilters.push(t)
            }
        }), rt.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? rt.extend({}, t) : {
                complete: i || !i && e || rt.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !rt.isFunction(e) && e
            };
            return n.duration = rt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue)
            }, n
        }, rt.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Mt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var o = rt.isEmptyObject(t),
                    r = rt.speed(e, i, n),
                    s = function() {
                        var e = j(this, rt.extend({}, t), r);
                        (o || Ct.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = rt.timers,
                        s = Ct.get(this);
                    if (o) s[o] && s[o].stop && n(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && ae.test(o) && n(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                    !e && i || rt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = Ct.get(this),
                        n = i[t + "queue"],
                        o = i[t + "queueHooks"],
                        r = rt.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, rt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), rt.each(["toggle", "show", "hide"], function(t, e) {
            var i = rt.fn[e];
            rt.fn[e] = function(t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(O(e, !0), t, n, o)
            }
        }), rt.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            rt.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), rt.timers = [], rt.fx.tick = function() {
            var t, e = 0,
                i = rt.timers;
            for (oe = rt.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || rt.fx.stop(), oe = void 0
        }, rt.fx.timer = function(t) {
            rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
        }, rt.fx.interval = 13, rt.fx.start = function() {
            re || (re = t.setInterval(rt.fx.tick, rt.fx.interval))
        }, rt.fx.stop = function() {
            t.clearInterval(re), re = null
        }, rt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, rt.fn.delay = function(e, i) {
            return e = rt.fx ? rt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                var o = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(o)
                }
            })
        },
        function() {
            var t = Q.createElement("input"),
                e = Q.createElement("select"),
                i = e.appendChild(Q.createElement("option"));
            t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", nt.radioValue = "t" === t.value
        }();
    var le, ce = rt.expr.attrHandle;
    rt.fn.extend({
        attr: function(t, e) {
            return Tt(this, rt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                rt.removeAttr(this, t)
            })
        }
    }), rt.extend({
        attr: function(t, e, i) {
            var n, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? rt.prop(t, e, i) : (1 === r && rt.isXMLDoc(t) || (e = e.toLowerCase(), o = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? le : void 0)), void 0 !== i ? null === i ? void rt.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = rt.find.attr(t, e), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n, o = 0,
                r = e && e.match(wt);
            if (r && 1 === t.nodeType)
                for (; i = r[o++];) n = rt.propFix[i] || i, rt.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        }
    }), le = {
        set: function(t, e, i) {
            return e === !1 ? rt.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ce[e] || rt.find.attr;
        ce[e] = function(t, e, n) {
            var o, r;
            return n || (r = ce[e], ce[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, ce[e] = r), o
        }
    });
    var de = /^(?:input|select|textarea|button)$/i,
        ue = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function(t, e) {
            return Tt(this, rt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[rt.propFix[t] || t]
            })
        }
    }), rt.extend({
        prop: function(t, e, i) {
            var n, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && rt.isXMLDoc(t) || (e = rt.propFix[e] || e, o = rt.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = rt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : de.test(t.nodeName) || ue.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), nt.optSelected || (rt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        rt.propFix[this.toLowerCase()] = this
    });
    var he = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function(t) {
            var e, i, n, o, r, s, a, l = 0;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).addClass(t.call(this, e, N(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(wt) || []; i = this[l++];)
                    if (o = N(i), n = 1 === i.nodeType && (" " + o + " ").replace(he, " ")) {
                        for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        a = rt.trim(n), o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, o, r, s, a, l = 0;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).removeClass(t.call(this, e, N(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(wt) || []; i = this[l++];)
                    if (o = N(i), n = 1 === i.nodeType && (" " + o + " ").replace(he, " ")) {
                        for (s = 0; r = e[s++];)
                            for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                        a = rt.trim(n), o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : rt.isFunction(t) ? this.each(function(i) {
                rt(this).toggleClass(t.call(this, i, N(this), e), e)
            }) : this.each(function() {
                var e, n, o, r;
                if ("string" === i)
                    for (n = 0, o = rt(this), r = t.match(wt) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== i || (e = N(this), e && Ct.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Ct.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + N(i) + " ").replace(he, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var pe = /\r/g,
        fe = /[\x20\t\r\n\f]+/g;
    rt.fn.extend({
        val: function(t) {
            var e, i, n, o = this[0];
            return arguments.length ? (n = rt.isFunction(t), this.each(function(i) {
                var o;
                1 === this.nodeType && (o = n ? t.call(this, i, rt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : rt.isArray(o) && (o = rt.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = rt.valHooks[o.type] || rt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(pe, "") : null == i ? "" : i)) : void 0
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = rt.find.attr(t, "value");
                    return null != e ? e : rt.trim(rt.text(t)).replace(fe, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (i = n[l], (i.selected || l === o) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !rt.nodeName(i.parentNode, "optgroup"))) {
                            if (e = rt(i).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var i, n, o = t.options, r = rt.makeArray(e), s = o.length; s--;) n = o[s], (n.selected = rt.inArray(rt.valHooks.option.get(n), r) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), rt.each(["radio", "checkbox"], function() {
        rt.valHooks[this] = {
            set: function(t, e) {
                return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) > -1 : void 0
            }
        }, nt.checkOn || (rt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var ge = /^(?:focusinfocus|focusoutblur)$/;
    rt.extend(rt.event, {
        trigger: function(e, i, n, o) {
            var r, s, a, l, c, d, u, h = [n || Q],
                p = it.call(e, "type") ? e.type : e,
                f = it.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !ge.test(p + rt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[rt.expando] ? e : new rt.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : rt.makeArray(i, [e]), u = rt.event.special[p] || {}, o || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!o && !u.noBubble && !rt.isWindow(n)) {
                    for (l = u.delegateType || p, ge.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (n.ownerDocument || Q) && h.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0;
                    (s = h[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : u.bindType || p, d = (Ct.get(s, "events") || {})[e.type] && Ct.get(s, "handle"), d && d.apply(s, i), d = c && s[c], d && d.apply && kt(s) && (e.result = d.apply(s, i), e.result === !1 && e.preventDefault());
                return e.type = p, o || e.isDefaultPrevented() || u._default && u._default.apply(h.pop(), i) !== !1 || !kt(n) || c && rt.isFunction(n[p]) && !rt.isWindow(n) && (a = n[c], a && (n[c] = null), rt.event.triggered = p, n[p](), rt.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        },
        simulate: function(t, e, i) {
            var n = rt.extend(new rt.Event, i, {
                type: t,
                isSimulated: !0
            });
            rt.event.trigger(n, null, e)
        }
    }), rt.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                rt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? rt.event.trigger(t, e, i, !0) : void 0
        }
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        rt.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), rt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), nt.focusin = "onfocusin" in t, nt.focusin || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            rt.event.simulate(e, t.target, rt.event.fix(t))
        };
        rt.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = Ct.access(n, e);
                o || n.addEventListener(t, i, !0), Ct.access(n, e, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = Ct.access(n, e) - 1;
                o ? Ct.access(n, e, o) : (n.removeEventListener(t, i, !0), Ct.remove(n, e))
            }
        }
    });
    var me = t.location,
        ve = rt.now(),
        ye = /\?/;
    rt.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, rt.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), i
    };
    var be = /#.*$/,
        xe = /([?&])_=[^&]*/,
        we = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Se = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Te = /^(?:GET|HEAD)$/,
        ke = /^\/\//,
        Ce = {},
        ze = {},
        Ee = "*/".concat("*"),
        _e = Q.createElement("a");
    _e.href = me.href, rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: me.href,
            type: "GET",
            isLocal: Se.test(me.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ee,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? F(F(t, rt.ajaxSettings), e) : F(rt.ajaxSettings, t)
        },
        ajaxPrefilter: q(Ce),
        ajaxTransport: q(ze),
        ajax: function(e, i) {
            function n(e, i, n, a) {
                var c, u, y, b, w, T = i;
                2 !== x && (x = 2, l && t.clearTimeout(l), o = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (b = B(h, S, n)), b = X(h, b, S, c), c ? (h.ifModified && (w = S.getResponseHeader("Last-Modified"), w && (rt.lastModified[r] = w), w = S.getResponseHeader("etag"), w && (rt.etag[r] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, u = b.data, y = b.error, c = !y)) : (y = T, !e && T || (T = "error", 0 > e && (e = 0))), S.status = e, S.statusText = (i || T) + "", c ? g.resolveWith(p, [u, T, S]) : g.rejectWith(p, [S, T, y]), S.statusCode(v), v = void 0, d && f.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? u : y]), m.fireWith(p, [S, T]), d && (f.trigger("ajaxComplete", [S, h]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var o, r, s, a, l, c, d, u, h = rt.ajaxSetup({}, i),
                p = h.context || h,
                f = h.context && (p.nodeType || p.jquery) ? rt(p) : rt.event,
                g = rt.Deferred(),
                m = rt.Callbacks("once memory"),
                v = h.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; e = we.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return x || (t = b[i] = b[i] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > x)
                                for (e in t) v[e] = [v[e], t[e]];
                            else S.always(t[S.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return o && o.abort(e), n(0, e), this
                    }
                };
            if (g.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, h.url = ((e || h.url || me.href) + "").replace(be, "").replace(ke, me.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = rt.trim(h.dataType || "*").toLowerCase().match(wt) || [""], null == h.crossDomain) {
                c = Q.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = _e.protocol + "//" + _e.host != c.protocol + "//" + c.host
                } catch (t) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = rt.param(h.data, h.traditional)), R(Ce, h, i, S), 2 === x) return S;
            d = rt.event && h.global, d && 0 === rt.active++ && rt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Te.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (ye.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = xe.test(r) ? r.replace(xe, "$1_=" + ve++) : r + (ye.test(r) ? "&" : "?") + "_=" + ve++)), h.ifModified && (rt.lastModified[r] && S.setRequestHeader("If-Modified-Since", rt.lastModified[r]), rt.etag[r] && S.setRequestHeader("If-None-Match", rt.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || i.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ee + "; q=0.01" : "") : h.accepts["*"]);
            for (u in h.headers) S.setRequestHeader(u, h.headers[u]);
            if (h.beforeSend && (h.beforeSend.call(p, S, h) === !1 || 2 === x)) return S.abort();
            w = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) S[u](h[u]);
            if (o = R(ze, h, i, S)) {
                if (S.readyState = 1, d && f.trigger("ajaxSend", [S, h]), 2 === x) return S;
                h.async && h.timeout > 0 && (l = t.setTimeout(function() {
                    S.abort("timeout")
                }, h.timeout));
                try {
                    x = 1, o.send(y, n)
                } catch (t) {
                    if (!(2 > x)) throw t;
                    n(-1, t)
                }
            } else n(-1, "No Transport");
            return S
        },
        getJSON: function(t, e, i) {
            return rt.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return rt.get(t, void 0, e, "script")
        }
    }), rt.each(["get", "post"], function(t, e) {
        rt[e] = function(t, i, n, o) {
            return rt.isFunction(i) && (o = o || n, n = i, i = void 0), rt.ajax(rt.extend({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            }, rt.isPlainObject(t) && t))
        }
    }), rt._evalUrl = function(t) {
        return rt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, rt.fn.extend({
        wrapAll: function(t) {
            var e;
            return rt.isFunction(t) ? this.each(function(e) {
                rt(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = rt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return rt.isFunction(t) ? this.each(function(e) {
                rt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = rt(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = rt.isFunction(t);
            return this.each(function(i) {
                rt(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), rt.expr.filters.hidden = function(t) {
        return !rt.expr.filters.visible(t)
    }, rt.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var Le = /%20/g,
        He = /\[\]$/,
        Ie = /\r?\n/g,
        Me = /^(?:submit|button|image|reset|file)$/i,
        $e = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(t, e) {
        var i, n = [],
            o = function(t, e) {
                e = rt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (i in t) Y(i, t[i], e, o);
        return n.join("&").replace(Le, "+")
    }, rt.fn.extend({
        serialize: function() {
            return rt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = rt.prop(this, "elements");
                return t ? rt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !rt(this).is(":disabled") && $e.test(this.nodeName) && !Me.test(t) && (this.checked || !$t.test(t))
            }).map(function(t, e) {
                var i = rt(this).val();
                return null == i ? null : rt.isArray(i) ? rt.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ie, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Ie, "\r\n")
                }
            }).get()
        }
    }), rt.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var We = {
            0: 200,
            1223: 204
        },
        Oe = rt.ajaxSettings.xhr();
    nt.cors = !!Oe && "withCredentials" in Oe, nt.ajax = Oe = !!Oe, rt.ajaxTransport(function(e) {
        var i, n;
        return nt.cors || Oe && !e.crossDomain ? {
            send: function(o, r) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                i = function(t) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(We[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            },
            abort: function() {
                i && i()
            }
        } : void 0
    }), rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return rt.globalEval(t), t
            }
        }
    }), rt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), rt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, o) {
                    e = rt("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), Q.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var De = [],
        Ae = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = De.pop() || rt.expando + "_" + ve++;
            return this[t] = !0, t
        }
    }), rt.ajaxPrefilter("json jsonp", function(e, i, n) {
        var o, r, s, a = e.jsonp !== !1 && (Ae.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ae.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ae, "$1" + o) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return s || rt.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            s = arguments
        }, n.always(function() {
            void 0 === r ? rt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, De.push(o)), s && rt.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), rt.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || Q;
        var n = ft.exec(t),
            o = !i && [];
        return n ? [e.createElement(n[1])] : (n = h([t], e, o), o && o.length && rt(o).remove(), rt.merge([], n.childNodes))
    };
    var Pe = rt.fn.load;
    rt.fn.load = function(t, e, i) {
        if ("string" != typeof t && Pe) return Pe.apply(this, arguments);
        var n, o, r, s = this,
            a = t.indexOf(" ");
        return a > -1 && (n = rt.trim(t.slice(a)), t = t.slice(0, a)), rt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && rt.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(n ? rt("<div>").append(rt.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            s.each(function() {
                i.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        rt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), rt.expr.filters.animated = function(t) {
        return rt.grep(rt.timers, function(e) {
            return t === e.elem
        }).length
    }, rt.offset = {
        setOffset: function(t, e, i) {
            var n, o, r, s, a, l, c, d = rt.css(t, "position"),
                u = rt(t),
                h = {};
            "static" === d && (t.style.position = "relative"), a = u.offset(), r = rt.css(t, "top"), l = rt.css(t, "left"), c = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1, c ? (n = u.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, i, rt.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : u.css(h)
        }
    }, rt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                rt.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = n && n.ownerDocument;
            return r ? (e = r.documentElement, rt.contains(e, n) ? (o = n.getBoundingClientRect(), i = V(r), {
                top: o.top + i.pageYOffset - e.clientTop,
                left: o.left + i.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (n = t.offset()), n.top += rt.css(t[0], "borderTopWidth", !0), n.left += rt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - rt.css(i, "marginTop", !0),
                    left: e.left - n.left - rt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === rt.css(t, "position");) t = t.offsetParent;
                return t || Kt
            })
        }
    }), rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        rt.fn[t] = function(n) {
            return Tt(this, function(t, n, o) {
                var r = V(t);
                return void 0 === o ? r ? r[e] : t[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o)
            }, t, n, arguments.length)
        }
    }), rt.each(["top", "left"], function(t, e) {
        rt.cssHooks[e] = E(nt.pixelPosition, function(t, i) {
            return i ? (i = z(t, e), Qt.test(i) ? rt(t).position()[e] + "px" : i) : void 0
        })
    }), rt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        rt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            rt.fn[n] = function(n, o) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    s = i || (n === !0 || o === !0 ? "margin" : "border");
                return Tt(this, function(e, i, n) {
                    var o;
                    return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? rt.css(e, i, s) : rt.style(e, i, n, s)
                }, e, r ? n : void 0, r, null)
            }
        })
    }), rt.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        },
        size: function() {
            return this.length
        }
    }), rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return rt
    });
    var je = t.jQuery,
        Ne = t.$;
    return rt.noConflict = function(e) {
        return t.$ === rt && (t.$ = Ne), e && t.jQuery === rt && (t.jQuery = je), rt
    }, e || (t.jQuery = t.$ = rt), rt
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    var e = !1,
        i = !1,
        n = 0,
        o = 2e3,
        r = 0,
        s = ["webkit", "ms", "moz", "o"],
        a = window.requestAnimationFrame || !1,
        l = window.cancelAnimationFrame || !1;
    if (!a)
        for (var c in s) {
            var d = s[c];
            if (a = window[d + "RequestAnimationFrame"]) {
                l = window[d + "CancelAnimationFrame"] || window[d + "CancelRequestAnimationFrame"];
                break
            }
        }
    var u = window.MutationObserver || window.WebKitMutationObserver || !1,
        h = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "6px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 60,
            mousescrollstep: 24,
            touchbehavior: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            railhoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: .3,
            rtlmode: "auto",
            cursordragontouch: !1,
            oneaxismousemode: "auto",
            scriptpath: function() {
                var t = document.getElementsByTagName("script"),
                    t = t.length ? t[t.length - 1].src.split("?")[0] : "";
                return 0 < t.split("/").length ? t.split("/").slice(0, -1).join("/") + "/" : ""
            }(),
            preventmultitouchscrolling: !0,
            disablemutationobserver: !1
        },
        p = !1,
        f = function() {
            if (p) return p;
            var t = document.createElement("DIV"),
                e = t.style,
                i = navigator.userAgent,
                n = navigator.platform,
                o = {
                    haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document
                };
            o.isopera = "opera" in window, o.isopera12 = o.isopera && "getUserMedia" in navigator, o.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), o.isie = "all" in document && "attachEvent" in t && !o.isopera, o.isieold = o.isie && !("msInterpolationMode" in e), o.isie7 = o.isie && !o.isieold && (!("documentMode" in document) || 7 == document.documentMode), o.isie8 = o.isie && "documentMode" in document && 8 == document.documentMode, o.isie9 = o.isie && "performance" in window && 9 == document.documentMode, o.isie10 = o.isie && "performance" in window && 10 == document.documentMode, o.isie11 = "msRequestFullscreen" in t && 11 <= document.documentMode, o.isieedge12 = navigator.userAgent.match(/Edge\/12\./), o.isieedge = "msOverflowStyle" in t, o.ismodernie = o.isie11 || o.isieedge, o.isie9mobile = /iemobile.9/i.test(i), o.isie9mobile && (o.isie9 = !1), o.isie7mobile = !o.isie9mobile && o.isie7 && /iemobile/i.test(i), o.ismozilla = "MozAppearance" in e, o.iswebkit = "WebkitAppearance" in e, o.ischrome = "chrome" in window, o.ischrome38 = o.ischrome && "touchAction" in e, o.ischrome22 = !o.ischrome38 && o.ischrome && o.haspointerlock, o.ischrome26 = !o.ischrome38 && o.ischrome && "transition" in e, o.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, o.hasw3ctouch = (window.PointerEvent || !1) && (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints), o.hasmstouch = !o.hasw3ctouch && (window.MSPointerEvent || !1), o.ismac = /^mac$/i.test(n), o.isios = o.cantouch && /iphone|ipad|ipod/i.test(n), o.isios4 = o.isios && !("seal" in Object),
                o.isios7 = o.isios && "webkitHidden" in document, o.isios8 = o.isios && "hidden" in document, o.isandroid = /android/i.test(i), o.haseventlistener = "addEventListener" in t, o.trstyle = !1, o.hastransform = !1, o.hastranslate3d = !1, o.transitionstyle = !1, o.hastransition = !1, o.transitionend = !1, n = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
            for (i = 0; i < n.length; i++)
                if (void 0 !== e[n[i]]) {
                    o.trstyle = n[i];
                    break
                }
            o.hastransform = !!o.trstyle, o.hastransform && (e[o.trstyle] = "translate3d(1px,2px,3px)", o.hastranslate3d = /translate3d/.test(e[o.trstyle])), o.transitionstyle = !1, o.prefixstyle = "", o.transitionend = !1;
            for (var n = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), r = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), s = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), i = 0; i < n.length; i++)
                if (n[i] in e) {
                    o.transitionstyle = n[i], o.prefixstyle = r[i], o.transitionend = s[i];
                    break
                }
            o.ischrome26 && (o.prefixstyle = r[1]), o.hastransition = o.transitionstyle;
            t: {
                for (i = ["grab", "-webkit-grab", "-moz-grab"], (o.ischrome && !o.ischrome38 || o.isie) && (i = []), n = 0; n < i.length; n++)
                    if (r = i[n], e.cursor = r, e.cursor == r) {
                        e = r;
                        break t
                    }
                e = "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize"
            }
            return o.cursorgrabvalue = e, o.hasmousecapture = "setCapture" in t, o.hasMutationObserver = !1 !== u, p = o
        },
        g = function(s, c) {
            function d() {
                var t = b.doc.css(S.trstyle);
                return !(!t || "matrix" != t.substr(0, 6)) && t.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
            }

            function p() {
                var t = b.win;
                if ("zIndex" in t) return t.zIndex();
                for (; 0 < t.length && 9 != t[0].nodeType;) {
                    var e = t.css("zIndex");
                    if (!isNaN(e) && 0 != e) return parseInt(e);
                    t = t.parent()
                }
                return !1
            }

            function g(t, e, i) {
                return e = t.css(e), t = parseFloat(e), isNaN(t) ? (t = z[e] || 0, i = 3 == t ? i ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1, b.isie8 && t && (t += 1), i ? t : 0) : t
            }

            function v(t, e, i, n) {
                b._bind(t, e, function(n) {
                    n = n ? n : window.event;
                    var o = {
                        original: n,
                        target: n.target || n.srcElement,
                        type: "wheel",
                        deltaMode: "MozMousePixelScroll" == n.type ? 0 : 1,
                        deltaX: 0,
                        deltaZ: 0,
                        preventDefault: function() {
                            return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
                        },
                        stopImmediatePropagation: function() {
                            n.stopImmediatePropagation ? n.stopImmediatePropagation() : n.cancelBubble = !0
                        }
                    };
                    return "mousewheel" == e ? (n.wheelDeltaX && (o.deltaX = -.025 * n.wheelDeltaX), n.wheelDeltaY && (o.deltaY = -.025 * n.wheelDeltaY), o.deltaY || o.deltaX || (o.deltaY = -.025 * n.wheelDelta)) : o.deltaY = n.detail, i.call(t, o)
                }, n)
            }

            function y(t, e, i) {
                var n, o;
                if (0 == t.deltaMode ? (n = -Math.floor(b.opt.mousescrollstep / 54 * t.deltaX), o = -Math.floor(b.opt.mousescrollstep / 54 * t.deltaY)) : 1 == t.deltaMode && (n = -Math.floor(t.deltaX * b.opt.mousescrollstep), o = -Math.floor(t.deltaY * b.opt.mousescrollstep)), e && b.opt.oneaxismousemode && 0 == n && o && (n = o, o = 0, i && (0 > n ? b.getScrollLeft() >= b.page.maxw : 0 >= b.getScrollLeft()) && (o = n, n = 0)), b.isrtlmode && (n = -n), n && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += n, b.debounced("mousewheelx", function() {
                        var t = b.lastdeltax;
                        b.lastdeltax = 0, b.rail.drag || b.doScrollLeftBy(t)
                    }, 15)), o) {
                    if (b.opt.nativeparentscrolling && i && !b.ispage && !b.zoomactive)
                        if (0 > o) {
                            if (b.getScrollTop() >= b.page.maxh) return !0
                        } else if (0 >= b.getScrollTop()) return !0;
                    b.scrollmom && b.scrollmom.stop(), b.lastdeltay += o, b.synched("mousewheely", function() {
                        var t = b.lastdeltay;
                        b.lastdeltay = 0, b.rail.drag || b.doScrollBy(t)
                    }, 15)
                }
                return t.stopImmediatePropagation(), t.preventDefault()
            }
            var b = this;
            if (this.version = "3.6.8", this.name = "nicescroll", this.me = c, this.opt = {
                    doc: t("body"),
                    win: !1
                }, t.extend(this.opt, h), this.opt.snapbackspeed = 80, s)
                for (var x in b.opt) void 0 !== s[x] && (b.opt[x] = s[x]);
            if (b.opt.disablemutationobserver && (u = !1), this.iddoc = (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(b.opt.win ? b.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== b.opt.win, this.win = b.opt.win || (this.ispage ? t(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? t(window) : this.win, this.body = t("body"), this.iframe = this.isfixed = this.viewport = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != b.opt.autohidemode, this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1, this.scroll = {
                    x: 0,
                    y: 0
                }, this.scrollratio = {
                    x: 0,
                    y: 0
                }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == this.opt.rtlmode) {
                x = this.win[0] == window ? this.body : this.win;
                var w = x.css("writing-mode") || x.css("-webkit-writing-mode") || x.css("-ms-writing-mode") || x.css("-moz-writing-mode");
                "horizontal-tb" == w || "lr-tb" == w || "" == w ? (this.isrtlmode = "rtl" == x.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == w || "tb" == w || "tb-rl" == w || "rl-tb" == w, this.isvertical = "vertical-rl" == w || "tb" == w || "tb-rl" == w)
            } else this.isrtlmode = !0 === this.opt.rtlmode, this.isvertical = !1;
            this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
            do this.id = "ascrail" + o++; while (document.getElementById(this.id));
            this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1, this.visibility = !0, this.hidden = this.locked = this.railslocked = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = b.opt.overflowx, this.overflowy = b.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltay = this.lastdeltax = 0, this.detected = f();
            var S = t.extend({}, this.detected);
            this.ishwscroll = (this.canhwscroll = S.hastransform && b.opt.hwacceleration) && b.haswrapper, this.hasreversehr = !!this.isrtlmode && (this.isvertical ? !(S.iswebkit || S.isie || S.isie11) : !(S.iswebkit || S.isie && !S.isie10 && !S.isie11)), this.istouchcapable = !1, S.cantouch || !S.hasw3ctouch && !S.hasmstouch ? !S.cantouch || S.isios || S.isandroid || !S.iswebkit && !S.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, b.opt.enablemouselockapi || (S.hasmousecapture = !1, S.haspointerlock = !1), this.debounced = function(t, e, i) {
                b && (b.delaylist[t] || (e.call(b), b.delaylist[t] = {
                    h: a(function() {
                        b.delaylist[t].fn.call(b), b.delaylist[t] = !1
                    }, i)
                }), b.delaylist[t].fn = e)
            };
            var T = !1;
            this.synched = function(t, e) {
                return b.synclist[t] = e,
                    function() {
                        T || (a(function() {
                            if (b) {
                                T = !1;
                                for (var t in b.synclist) {
                                    var e = b.synclist[t];
                                    e && e.call(b), b.synclist[t] = !1
                                }
                            }
                        }), T = !0)
                    }(), t
            }, this.unsynched = function(t) {
                b.synclist[t] && (b.synclist[t] = !1)
            }, this.css = function(t, e) {
                for (var i in e) b.saved.css.push([t, i, t.css(i)]), t.css(i, e[i])
            }, this.scrollTop = function(t) {
                return void 0 === t ? b.getScrollTop() : b.setScrollTop(t)
            }, this.scrollLeft = function(t) {
                return void 0 === t ? b.getScrollLeft() : b.setScrollLeft(t)
            };
            var k = function(t, e, i, n, o, r, s) {
                this.st = t, this.ed = e, this.spd = i, this.p1 = n || 0, this.p2 = o || 1, this.p3 = r || 0, this.p4 = s || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
            };
            if (k.prototype = {
                    B2: function(t) {
                        return 3 * t * t * (1 - t)
                    },
                    B3: function(t) {
                        return 3 * t * (1 - t) * (1 - t)
                    },
                    B4: function(t) {
                        return (1 - t) * (1 - t) * (1 - t)
                    },
                    getNow: function() {
                        var t = 1 - ((new Date).getTime() - this.ts) / this.spd,
                            e = this.B2(t) + this.B3(t) + this.B4(t);
                        return 0 > t ? this.ed : this.st + Math.round(this.df * e)
                    },
                    update: function(t, e) {
                        return this.st = this.getNow(), this.ed = t, this.spd = e, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
                    }
                }, this.ishwscroll) {
                this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                }, S.hastranslate3d && S.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function(t) {
                    if (!t) {
                        if (t = d()) return 16 == t.length ? -t[13] : -t[5];
                        if (b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow()
                    }
                    return b.doc.translate.y
                }, this.getScrollLeft = function(t) {
                    if (!t) {
                        if (t = d()) return 16 == t.length ? -t[12] : -t[4];
                        if (b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow()
                    }
                    return b.doc.translate.x
                }, this.notifyScrollEvent = function(t) {
                    var e = document.createEvent("UIEvents");
                    e.initUIEvent("scroll", !1, !0, window, 1), e.niceevent = !0, t.dispatchEvent(e)
                };
                var C = this.isrtlmode ? 1 : -1;
                S.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function(t, e) {
                    b.doc.translate.y = t, b.doc.translate.ty = -1 * t + "px", b.doc.css(S.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)"), e || b.notifyScrollEvent(b.win[0])
                }, this.setScrollLeft = function(t, e) {
                    b.doc.translate.x = t, b.doc.translate.tx = t * C + "px", b.doc.css(S.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)"), e || b.notifyScrollEvent(b.win[0])
                }) : (this.setScrollTop = function(t, e) {
                    b.doc.translate.y = t, b.doc.translate.ty = -1 * t + "px", b.doc.css(S.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")"), e || b.notifyScrollEvent(b.win[0])
                }, this.setScrollLeft = function(t, e) {
                    b.doc.translate.x = t, b.doc.translate.tx = t * C + "px", b.doc.css(S.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")"), e || b.notifyScrollEvent(b.win[0])
                })
            } else this.getScrollTop = function() {
                return b.docscroll.scrollTop()
            }, this.setScrollTop = function(t) {
                return setTimeout(function() {
                    b && b.docscroll.scrollTop(t)
                }, 1)
            }, this.getScrollLeft = function() {
                return b.hasreversehr ? b.detected.ismozilla ? b.page.maxw - Math.abs(b.docscroll.scrollLeft()) : b.page.maxw - b.docscroll.scrollLeft() : b.docscroll.scrollLeft()
            }, this.setScrollLeft = function(t) {
                return setTimeout(function() {
                    if (b) return b.hasreversehr && (t = b.detected.ismozilla ? -(b.page.maxw - t) : b.page.maxw - t), b.docscroll.scrollLeft(t)
                }, 1)
            };
            this.getTarget = function(t) {
                return !!t && (t.target ? t.target : !!t.srcElement && t.srcElement)
            }, this.hasParent = function(t, e) {
                if (!t) return !1;
                for (var i = t.target || t.srcElement || t || !1; i && i.id != e;) i = i.parentNode || !1;
                return !1 !== i
            };
            var z = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            this.getDocumentScrollOffset = function() {
                return {
                    top: window.pageYOffset || document.documentElement.scrollTop,
                    left: window.pageXOffset || document.documentElement.scrollLeft
                }
            }, this.getOffset = function() {
                if (b.isfixed) {
                    var t = b.win.offset(),
                        e = b.getDocumentScrollOffset();
                    return t.top -= e.top, t.left -= e.left, t
                }
                return t = b.win.offset(), b.viewport ? (e = b.viewport.offset(), {
                    top: t.top - e.top,
                    left: t.left - e.left
                }) : t
            }, this.updateScrollBar = function(t) {
                var e, i, n;
                if (b.ishwscroll) b.rail.css({
                    height: b.win.innerHeight() - (b.opt.railpadding.top + b.opt.railpadding.bottom)
                }), b.railh && b.railh.css({
                    width: b.win.innerWidth() - (b.opt.railpadding.left + b.opt.railpadding.right)
                });
                else {
                    var o = b.getOffset();
                    e = o.top, i = o.left - (b.opt.railpadding.left + b.opt.railpadding.right), e += g(b.win, "border-top-width", !0), i += b.rail.align ? b.win.outerWidth() - g(b.win, "border-right-width") - b.rail.width : g(b.win, "border-left-width"), (n = b.opt.railoffset) && (n.top && (e += n.top), n.left && (i += n.left)), b.railslocked || b.rail.css({
                        top: e,
                        left: i,
                        height: (t ? t.h : b.win.innerHeight()) - (b.opt.railpadding.top + b.opt.railpadding.bottom)
                    }), b.zoom && b.zoom.css({
                        top: e + 1,
                        left: 1 == b.rail.align ? i - 20 : i + b.rail.width + 4
                    }), b.railh && !b.railslocked && (e = o.top, i = o.left, (n = b.opt.railhoffset) && (n.top && (e += n.top), n.left && (i += n.left)), t = b.railh.align ? e + g(b.win, "border-top-width", !0) + b.win.innerHeight() - b.railh.height : e + g(b.win, "border-top-width", !0), i += g(b.win, "border-left-width"), b.railh.css({
                        top: t - (b.opt.railpadding.top + b.opt.railpadding.bottom),
                        left: i,
                        width: b.railh.width
                    }))
                }
            }, this.doRailClick = function(t, e, i) {
                var n;
                b.railslocked || (b.cancelEvent(t), e ? (e = i ? b.doScrollLeft : b.doScrollTop, n = i ? (t.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (t.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y, e(n)) : (e = i ? b.doScrollLeftBy : b.doScrollBy, n = i ? b.scroll.x : b.scroll.y, t = i ? t.pageX - b.railh.offset().left : t.pageY - b.rail.offset().top, i = i ? b.view.w : b.view.h, e(n >= t ? i : -i)))
            }, b.hasanimationframe = a, b.hascancelanimationframe = l, b.hasanimationframe ? b.hascancelanimationframe || (l = function() {
                b.cancelAnimationFrame = !0
            }) : (a = function(t) {
                return setTimeout(t, 15 - Math.floor(+new Date / 1e3) % 16)
            }, l = clearTimeout), this.init = function() {
                if (b.saved.css = [], S.isie7mobile || S.isoperamini) return !0;
                S.hasmstouch && b.css(b.ispage ? t("html") : b.win, {
                    _touchaction: "none"
                });
                var o = S.ismodernie || S.isie10 ? {
                    "-ms-overflow-style": "none"
                } : {
                    "overflow-y": "hidden"
                };
                if (b.zindex = "auto", b.zindex = b.ispage || "auto" != b.opt.zindex ? b.opt.zindex : p() || "auto", !b.ispage && "auto" != b.zindex && b.zindex > r && (r = b.zindex), b.isie && 0 == b.zindex && "auto" == b.opt.zindex && (b.zindex = "auto"), !b.ispage || !S.cantouch && !S.isieold && !S.isie9mobile) {
                    var s = b.docscroll;
                    b.ispage && (s = b.haswrapper ? b.win : b.doc), S.isie9mobile || b.css(s, o), b.ispage && S.isie7 && ("BODY" == b.doc[0].nodeName ? b.css(t("html"), {
                        "overflow-y": "hidden"
                    }) : "HTML" == b.doc[0].nodeName && b.css(t("body"), o)), !S.isios || b.ispage || b.haswrapper || b.css(t("body"), {
                        "-webkit-overflow-scrolling": "touch"
                    });
                    var a = t(document.createElement("div"));
                    a.css({
                        position: "relative",
                        top: 0,
                        float: "right",
                        width: b.opt.cursorwidth,
                        height: 0,
                        "background-color": b.opt.cursorcolor,
                        border: b.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": b.opt.cursorborderradius,
                        "-moz-border-radius": b.opt.cursorborderradius,
                        "border-radius": b.opt.cursorborderradius
                    }), a.hborder = parseFloat(a.outerHeight() - a.innerHeight()), a.addClass("nicescroll-cursors"), b.cursor = a;
                    var l = t(document.createElement("div"));
                    l.attr("id", b.id), l.addClass("nicescroll-rails nicescroll-rails-vr");
                    var c, d, h, f = ["left", "right", "top", "bottom"];
                    for (h in f) d = f[h], (c = b.opt.railpadding[d]) ? l.css("padding-" + d, c + "px") : b.opt.railpadding[d] = 0;
                    l.append(a), l.width = Math.max(parseFloat(b.opt.cursorwidth), a.outerWidth()), l.css({
                        width: l.width + "px",
                        zIndex: b.zindex,
                        background: b.opt.background,
                        cursor: "default"
                    }), l.visibility = !0, l.scrollable = !0, l.align = "left" == b.opt.railalign ? 0 : 1, b.rail = l, a = b.rail.drag = !1, !b.opt.boxzoom || b.ispage || S.isieold || (a = document.createElement("div"), b.bind(a, "click", b.doZoom), b.bind(a, "mouseenter", function() {
                        b.zoom.css("opacity", b.opt.cursoropacitymax)
                    }), b.bind(a, "mouseleave", function() {
                        b.zoom.css("opacity", b.opt.cursoropacitymin)
                    }), b.zoom = t(a), b.zoom.css({
                        cursor: "pointer",
                        zIndex: b.zindex,
                        backgroundImage: "url(" + b.opt.scriptpath + "zoomico.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0px 0px"
                    }), b.opt.dblclickzoom && b.bind(b.win, "dblclick", b.doZoom), S.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function(t) {
                        return 1.5 < t.scale && b.doZoomIn(t), .8 > t.scale && b.doZoomOut(t), b.cancelEvent(t)
                    }, b.bind(b.win, "gestureend", b.ongesturezoom))), b.railh = !1;
                    var g;
                    if (b.opt.horizrailenabled && (b.css(s, {
                            overflowX: "hidden"
                        }), a = t(document.createElement("div")), a.css({
                            position: "absolute",
                            top: 0,
                            height: b.opt.cursorwidth,
                            width: 0,
                            backgroundColor: b.opt.cursorcolor,
                            border: b.opt.cursorborder,
                            backgroundClip: "padding-box",
                            "-webkit-border-radius": b.opt.cursorborderradius,
                            "-moz-border-radius": b.opt.cursorborderradius,
                            "border-radius": b.opt.cursorborderradius
                        }), S.isieold && a.css("overflow", "hidden"), a.wborder = parseFloat(a.outerWidth() - a.innerWidth()), a.addClass("nicescroll-cursors"), b.cursorh = a, g = t(document.createElement("div")), g.attr("id", b.id + "-hr"), g.addClass("nicescroll-rails nicescroll-rails-hr"), g.height = Math.max(parseFloat(b.opt.cursorwidth), a.outerHeight()), g.css({
                            height: g.height + "px",
                            zIndex: b.zindex,
                            background: b.opt.background
                        }), g.append(a), g.visibility = !0, g.scrollable = !0, g.align = "top" == b.opt.railvalign ? 0 : 1, b.railh = g, b.railh.drag = !1), b.ispage ? (l.css({
                            position: "fixed",
                            top: 0,
                            height: "100%"
                        }), l.align ? l.css({
                            right: 0
                        }) : l.css({
                            left: 0
                        }), b.body.append(l), b.railh && (g.css({
                            position: "fixed",
                            left: 0,
                            width: "100%"
                        }), g.align ? g.css({
                            bottom: 0
                        }) : g.css({
                            top: 0
                        }), b.body.append(g))) : (b.ishwscroll ? ("static" == b.win.css("position") && b.css(b.win, {
                            position: "relative"
                        }), s = "HTML" == b.win[0].nodeName ? b.body : b.win, t(s).scrollTop(0).scrollLeft(0), b.zoom && (b.zoom.css({
                            position: "absolute",
                            top: 1,
                            right: 0,
                            "margin-right": l.width + 4
                        }), s.append(b.zoom)), l.css({
                            position: "absolute",
                            top: 0
                        }), l.align ? l.css({
                            right: 0
                        }) : l.css({
                            left: 0
                        }), s.append(l), g && (g.css({
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }), g.align ? g.css({
                            bottom: 0
                        }) : g.css({
                            top: 0
                        }), s.append(g))) : (b.isfixed = "fixed" == b.win.css("position"), s = b.isfixed ? "fixed" : "absolute", b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, 0 == /fixed|absolute/.test(b.viewport.css("position")) && b.css(b.viewport, {
                            position: "relative"
                        })), l.css({
                            position: s
                        }), b.zoom && b.zoom.css({
                            position: s
                        }), b.updateScrollBar(), b.body.append(l), b.zoom && b.body.append(b.zoom), b.railh && (g.css({
                            position: s
                        }), b.body.append(g))), S.isios && b.css(b.win, {
                            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                            "-webkit-touch-callout": "none"
                        }), S.isie && b.opt.disableoutline && b.win.attr("hideFocus", "true"), S.iswebkit && b.opt.disableoutline && b.win.css("outline", "none")), !1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({
                            opacity: b.opt.cursoropacitymax
                        }), b.railh && b.railh.css({
                            opacity: b.opt.cursoropacitymax
                        })) : !0 === b.opt.autohidemode || "leave" === b.opt.autohidemode ? (b.autohidedom = t().add(b.rail), S.isie8 && (b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && S.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "scroll" == b.opt.autohidemode ? (b.autohidedom = t().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : "cursor" == b.opt.autohidemode ? (b.autohidedom = t().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "hidden" == b.opt.autohidemode && (b.autohidedom = !1, b.hide(), b.railslocked = !1), S.isie9mobile) b.scrollmom = new m(b), b.onmangotouch = function() {
                        var t = b.getScrollTop(),
                            e = b.getScrollLeft();
                        if (t == b.scrollmom.lastscrolly && e == b.scrollmom.lastscrollx) return !0;
                        var i = t - b.mangotouch.sy,
                            n = e - b.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)))) {
                            var o = 0 > i ? -1 : 1,
                                r = 0 > n ? -1 : 1,
                                s = +new Date;
                            b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy), 80 < s - b.mangotouch.tm || b.mangotouch.dry != o || b.mangotouch.drx != r ? (b.scrollmom.stop(), b.scrollmom.reset(e, t), b.mangotouch.sy = t, b.mangotouch.ly = t, b.mangotouch.sx = e, b.mangotouch.lx = e, b.mangotouch.dry = o, b.mangotouch.drx = r, b.mangotouch.tm = s) : (b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - n, b.mangotouch.sy - i), b.mangotouch.tm = s, i = Math.max(Math.abs(b.mangotouch.ly - t), Math.abs(b.mangotouch.lx - e)), b.mangotouch.ly = t, b.mangotouch.lx = e, 2 < i && (b.mangotouch.lazy = setTimeout(function() {
                                b.mangotouch.lazy = !1, b.mangotouch.dry = 0, b.mangotouch.drx = 0, b.mangotouch.tm = 0, b.scrollmom.doMomentum(30)
                            }, 100)))
                        }
                    }, l = b.getScrollTop(), g = b.getScrollLeft(), b.mangotouch = {
                        sy: l,
                        ly: l,
                        dry: 0,
                        sx: g,
                        lx: g,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    }, b.bind(b.docscroll, "scroll", b.onmangotouch);
                    else {
                        if (S.cantouch || b.istouchcapable || b.opt.touchbehavior || S.hasmstouch) {
                            b.scrollmom = new m(b), b.ontouchstart = function(e) {
                                if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
                                if (b.hasmoving = !1, !b.railslocked) {
                                    var i;
                                    if (S.hasmstouch)
                                        for (i = !!e.target && e.target; i;) {
                                            var n = t(i).getNiceScroll();
                                            if (0 < n.length && n[0].me == b.me) break;
                                            if (0 < n.length) return !1;
                                            if ("DIV" == i.nodeName && i.id == b.id) break;
                                            i = !!i.parentNode && i.parentNode
                                        }
                                    if (b.cancelScroll(), (i = b.getTarget(e)) && /INPUT/i.test(i.nodeName) && /range/i.test(i.type)) return b.stopPropagation(e);
                                    if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), b.forcescreen && (n = e, e = {
                                            original: e.original ? e.original : e
                                        }, e.clientX = n.screenX, e.clientY = n.screenY), b.rail.drag = {
                                            x: e.clientX,
                                            y: e.clientY,
                                            sx: b.scroll.x,
                                            sy: b.scroll.y,
                                            st: b.getScrollTop(),
                                            sl: b.getScrollLeft(),
                                            pt: 2,
                                            dl: !1
                                        }, b.ispage || !b.opt.directionlockdeadzone) b.rail.drag.dl = "f";
                                    else {
                                        var n = t(window).width(),
                                            o = t(window).height(),
                                            o = Math.max(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - o),
                                            n = Math.max(0, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - n);
                                        b.rail.drag.ck = !b.rail.scrollable && b.railh.scrollable ? 0 < o && "v" : !(!b.rail.scrollable || b.railh.scrollable) && (0 < n && "h"), b.rail.drag.ck || (b.rail.drag.dl = "f")
                                    }
                                    if (b.opt.touchbehavior && b.isiframe && S.isie && (n = b.win.position(), b.rail.drag.x += n.left, b.rail.drag.y += n.top), b.hasmoving = !1, b.lastmouseup = !1, b.scrollmom.reset(e.clientX, e.clientY), !S.cantouch && !this.istouchcapable && !e.pointerType) {
                                        if (!i || !/INPUT|SELECT|TEXTAREA/i.test(i.nodeName)) return !b.ispage && S.hasmousecapture && i.setCapture(), b.opt.touchbehavior ? (i.onclick && !i._onclick && (i._onclick = i.onclick, i.onclick = function(t) {
                                            return !b.hasmoving && void i._onclick.call(this, t)
                                        }), b.cancelEvent(e)) : b.stopPropagation(e);
                                        /SUBMIT|CANCEL|BUTTON/i.test(t(i).attr("type")) && (pc = {
                                            tg: i,
                                            click: !1
                                        }, b.preventclick = pc)
                                    }
                                }
                            }, b.ontouchend = function(t) {
                                if (!b.rail.drag) return !0;
                                if (2 == b.rail.drag.pt) {
                                    if (t.pointerType && 2 != t.pointerType && "touch" != t.pointerType) return !1;
                                    if (b.scrollmom.doMomentum(), b.rail.drag = !1, b.hasmoving && (b.lastmouseup = !0, b.hideCursor(), S.hasmousecapture && document.releaseCapture(), !S.cantouch)) return b.cancelEvent(t)
                                } else if (1 == b.rail.drag.pt) return b.onmouseup(t)
                            };
                            var v = b.opt.touchbehavior && b.isiframe && !S.hasmousecapture;
                            b.ontouchmove = function(e, i) {
                                if (!b.rail.drag || e.targetTouches && b.opt.preventmultitouchscrolling && 1 < e.targetTouches.length || e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
                                if (2 == b.rail.drag.pt) {
                                    if (S.cantouch && S.isios && void 0 === e.original) return !0;
                                    if (b.hasmoving = !0, b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick), e = t.extend({
                                            original: e
                                        }, e), "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), b.forcescreen) {
                                        var n = e;
                                        e = {
                                            original: e.original ? e.original : e
                                        }, e.clientX = n.screenX, e.clientY = n.screenY
                                    }
                                    var o, n = o = 0;
                                    v && !i && (o = b.win.position(), n = -o.left, o = -o.top);
                                    var r = e.clientY + o;
                                    o = r - b.rail.drag.y;
                                    var s = e.clientX + n,
                                        a = s - b.rail.drag.x,
                                        l = b.rail.drag.st - o;
                                    b.ishwscroll && b.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > b.page.maxh && (l = b.page.maxh + Math.round((l - b.page.maxh) / 2)) : (0 > l && (r = l = 0), l > b.page.maxh && (l = b.page.maxh, r = 0));
                                    var c;
                                    if (b.railh && b.railh.scrollable && (c = b.isrtlmode ? a - b.rail.drag.sl : b.rail.drag.sl - a, b.ishwscroll && b.opt.bouncescroll ? 0 > c ? c = Math.round(c / 2) : c > b.page.maxw && (c = b.page.maxw + Math.round((c - b.page.maxw) / 2)) : (0 > c && (s = c = 0), c > b.page.maxw && (c = b.page.maxw, s = 0))), n = !1, b.rail.drag.dl) n = !0, "v" == b.rail.drag.dl ? c = b.rail.drag.sl : "h" == b.rail.drag.dl && (l = b.rail.drag.st);
                                    else {
                                        o = Math.abs(o);
                                        var a = Math.abs(a),
                                            d = b.opt.directionlockdeadzone;
                                        if ("v" == b.rail.drag.ck) {
                                            if (o > d && a <= .3 * o) return b.rail.drag = !1, !0;
                                            a > d && (b.rail.drag.dl = "f", t("body").scrollTop(t("body").scrollTop()))
                                        } else if ("h" == b.rail.drag.ck) {
                                            if (a > d && o <= .3 * a) return b.rail.drag = !1, !0;
                                            o > d && (b.rail.drag.dl = "f", t("body").scrollLeft(t("body").scrollLeft()))
                                        }
                                    }
                                    if (b.synched("touchmove", function() {
                                            b.rail.drag && 2 == b.rail.drag.pt && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(l), b.scrollmom.update(s, r), b.railh && b.railh.scrollable ? (b.setScrollLeft(c), b.showCursor(l, c)) : b.showCursor(l), S.isie10 && document.selection.clear())
                                        }), S.ischrome && b.istouchcapable && (n = !1), n) return b.cancelEvent(e)
                                } else if (1 == b.rail.drag.pt) return b.onmousemove(e)
                            }
                        }
                        if (b.onmousedown = function(t, e) {
                                if (!b.rail.drag || 1 == b.rail.drag.pt) {
                                    if (b.railslocked) return b.cancelEvent(t);
                                    b.cancelScroll(), b.rail.drag = {
                                        x: t.clientX,
                                        y: t.clientY,
                                        sx: b.scroll.x,
                                        sy: b.scroll.y,
                                        pt: 1,
                                        hr: !!e
                                    };
                                    var i = b.getTarget(t);
                                    return !b.ispage && S.hasmousecapture && i.setCapture(), b.isiframe && !S.hasmousecapture && (b.saved.csspointerevents = b.doc.css("pointer-events"), b.css(b.doc, {
                                        "pointer-events": "none"
                                    })), b.hasmoving = !1, b.cancelEvent(t)
                                }
                            }, b.onmouseup = function(t) {
                                if (b.rail.drag) return 1 != b.rail.drag.pt || (S.hasmousecapture && document.releaseCapture(), b.isiframe && !S.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), b.rail.drag = !1, b.hasmoving && b.triggerScrollEnd(), b.cancelEvent(t))
                            }, b.onmousemove = function(t) {
                                if (b.rail.drag) {
                                    if (1 == b.rail.drag.pt) {
                                        if (S.ischrome && 0 == t.which) return b.onmouseup(t);
                                        if (b.cursorfreezed = !0, b.hasmoving = !0, b.rail.drag.hr) {
                                            b.scroll.x = b.rail.drag.sx + (t.clientX - b.rail.drag.x), 0 > b.scroll.x && (b.scroll.x = 0);
                                            var e = b.scrollvaluemaxw;
                                            b.scroll.x > e && (b.scroll.x = e)
                                        } else b.scroll.y = b.rail.drag.sy + (t.clientY - b.rail.drag.y), 0 > b.scroll.y && (b.scroll.y = 0), e = b.scrollvaluemax, b.scroll.y > e && (b.scroll.y = e);
                                        return b.synched("mousemove", function() {
                                            b.rail.drag && 1 == b.rail.drag.pt && (b.showCursor(), b.rail.drag.hr ? b.hasreversehr ? b.doScrollLeft(b.scrollvaluemaxw - Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed))
                                        }), b.cancelEvent(t)
                                    }
                                } else b.checkarea = 0
                            }, S.cantouch || b.opt.touchbehavior) b.onpreventclick = function(t) {
                            if (b.preventclick) return b.preventclick.tg.onclick = b.preventclick.click, b.preventclick = !1, b.cancelEvent(t)
                        }, b.bind(b.win, "mousedown", b.ontouchstart), b.onclick = !S.isios && function(t) {
                            return !b.lastmouseup || (b.lastmouseup = !1, b.cancelEvent(t))
                        }, b.opt.grabcursorenabled && S.cursorgrabvalue && (b.css(b.ispage ? b.doc : b.win, {
                            cursor: S.cursorgrabvalue
                        }), b.css(b.rail, {
                            cursor: S.cursorgrabvalue
                        }));
                        else {
                            var y = function(t) {
                                if (b.selectiondrag) {
                                    if (t) {
                                        var e = b.win.outerHeight();
                                        t = t.pageY - b.selectiondrag.top, 0 < t && t < e && (t = 0), t >= e && (t -= e), b.selectiondrag.df = t
                                    }
                                    0 != b.selectiondrag.df && (b.doScrollBy(2 * -Math.floor(b.selectiondrag.df / 6)), b.debounced("doselectionscroll", function() {
                                        y()
                                    }, 50))
                                }
                            };
                            b.hasTextSelected = "getSelection" in document ? function() {
                                return 0 < document.getSelection().rangeCount
                            } : "selection" in document ? function() {
                                return "None" != document.selection.type
                            } : function() {
                                return !1
                            }, b.onselectionstart = function(t) {
                                b.ispage || (b.selectiondrag = b.win.offset())
                            }, b.onselectionend = function(t) {
                                b.selectiondrag = !1
                            }, b.onselectiondrag = function(t) {
                                b.selectiondrag && b.hasTextSelected() && b.debounced("selectionscroll", function() {
                                    y(t)
                                }, 250)
                            }
                        }
                        S.hasw3ctouch ? (b.css(b.rail, {
                            "touch-action": "none"
                        }), b.css(b.cursor, {
                            "touch-action": "none"
                        }), b.bind(b.win, "pointerdown", b.ontouchstart), b.bind(document, "pointerup", b.ontouchend), b.bind(document, "pointermove", b.ontouchmove)) : S.hasmstouch ? (b.css(b.rail, {
                            "-ms-touch-action": "none"
                        }), b.css(b.cursor, {
                            "-ms-touch-action": "none"
                        }), b.bind(b.win, "MSPointerDown", b.ontouchstart), b.bind(document, "MSPointerUp", b.ontouchend), b.bind(document, "MSPointerMove", b.ontouchmove), b.bind(b.cursor, "MSGestureHold", function(t) {
                            t.preventDefault()
                        }), b.bind(b.cursor, "contextmenu", function(t) {
                            t.preventDefault()
                        })) : this.istouchcapable && (b.bind(b.win, "touchstart", b.ontouchstart), b.bind(document, "touchend", b.ontouchend), b.bind(document, "touchcancel", b.ontouchend), b.bind(document, "touchmove", b.ontouchmove)), (b.opt.cursordragontouch || !S.cantouch && !b.opt.touchbehavior) && (b.rail.css({
                            cursor: "default"
                        }), b.railh && b.railh.css({
                            cursor: "default"
                        }), b.jqbind(b.rail, "mouseenter", function() {
                            return !(!b.ispage && !b.win.is(":visible")) && (b.canshowonmouseevent && b.showCursor(), void(b.rail.active = !0))
                        }), b.jqbind(b.rail, "mouseleave", function() {
                            b.rail.active = !1, b.rail.drag || b.hideCursor()
                        }), b.opt.sensitiverail && (b.bind(b.rail, "click", function(t) {
                            b.doRailClick(t, !1, !1)
                        }), b.bind(b.rail, "dblclick", function(t) {
                            b.doRailClick(t, !0, !1)
                        }), b.bind(b.cursor, "click", function(t) {
                            b.cancelEvent(t)
                        }), b.bind(b.cursor, "dblclick", function(t) {
                            b.cancelEvent(t)
                        })), b.railh && (b.jqbind(b.railh, "mouseenter", function() {
                            return !(!b.ispage && !b.win.is(":visible")) && (b.canshowonmouseevent && b.showCursor(), void(b.rail.active = !0))
                        }), b.jqbind(b.railh, "mouseleave", function() {
                            b.rail.active = !1, b.rail.drag || b.hideCursor()
                        }), b.opt.sensitiverail && (b.bind(b.railh, "click", function(t) {
                            b.doRailClick(t, !1, !0)
                        }), b.bind(b.railh, "dblclick", function(t) {
                            b.doRailClick(t, !0, !0)
                        }), b.bind(b.cursorh, "click", function(t) {
                            b.cancelEvent(t)
                        }), b.bind(b.cursorh, "dblclick", function(t) {
                            b.cancelEvent(t)
                        })))), S.cantouch || b.opt.touchbehavior ? (b.bind(S.hasmousecapture ? b.win : document, "mouseup", b.ontouchend), b.bind(document, "mousemove", b.ontouchmove), b.onclick && b.bind(document, "click", b.onclick), b.opt.cursordragontouch ? (b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mouseup", b.onmouseup), b.cursorh && b.bind(b.cursorh, "mousedown", function(t) {
                            b.onmousedown(t, !0)
                        }), b.cursorh && b.bind(b.cursorh, "mouseup", b.onmouseup)) : (b.bind(b.rail, "mousedown", function(t) {
                            t.preventDefault()
                        }), b.railh && b.bind(b.railh, "mousedown", function(t) {
                            t.preventDefault()
                        }))) : (b.bind(S.hasmousecapture ? b.win : document, "mouseup", b.onmouseup), b.bind(document, "mousemove", b.onmousemove), b.onclick && b.bind(document, "click", b.onclick), b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mouseup", b.onmouseup), b.railh && (b.bind(b.cursorh, "mousedown", function(t) {
                            b.onmousedown(t, !0)
                        }), b.bind(b.cursorh, "mouseup", b.onmouseup)), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], "mousedown", b.onselectionstart), b.bind(document, "mouseup", b.onselectionend), b.bind(b.cursor, "mouseup", b.onselectionend), b.cursorh && b.bind(b.cursorh, "mouseup", b.onselectionend), b.bind(document, "mousemove", b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, "mouseenter", function() {
                            b.canshowonmouseevent && b.showCursor(), b.rail.active = !0
                        }), b.jqbind(b.zoom, "mouseleave", function() {
                            b.rail.active = !1, b.rail.drag || b.hideCursor()
                        }))), b.opt.enablemousewheel && (b.isiframe || b.mousewheel(S.isie && b.ispage ? document : b.win, b.onmousewheel), b.mousewheel(b.rail, b.onmousewheel), b.railh && b.mousewheel(b.railh, b.onmousewheelhr)), b.ispage || S.cantouch || /HTML|^BODY/.test(b.win[0].nodeName) || (b.win.attr("tabindex") || b.win.attr({
                            tabindex: n++
                        }), b.jqbind(b.win, "focus", function(t) {
                            e = b.getTarget(t).id || !0, b.hasfocus = !0, b.canshowonmouseevent && b.noticeCursor()
                        }), b.jqbind(b.win, "blur", function(t) {
                            e = !1, b.hasfocus = !1
                        }), b.jqbind(b.win, "mouseenter", function(t) {
                            i = b.getTarget(t).id || !0, b.hasmousefocus = !0, b.canshowonmouseevent && b.noticeCursor()
                        }), b.jqbind(b.win, "mouseleave", function() {
                            i = !1, b.hasmousefocus = !1, b.rail.drag || b.hideCursor()
                        }))
                    }
                    if (b.onkeypress = function(n) {
                            if (b.railslocked && 0 == b.page.maxh) return !0;
                            n = n ? n : window.e;
                            var o = b.getTarget(n);
                            if (o && /INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName) && (!o.getAttribute("type") && !o.type || !/submit|button|cancel/i.tp) || t(o).attr("contenteditable")) return !0;
                            if (b.hasfocus || b.hasmousefocus && !e || b.ispage && !e && !i) {
                                if (o = n.keyCode, b.railslocked && 27 != o) return b.cancelEvent(n);
                                var r = n.ctrlKey || !1,
                                    s = n.shiftKey || !1,
                                    a = !1;
                                switch (o) {
                                    case 38:
                                    case 63233:
                                        b.doScrollBy(72), a = !0;
                                        break;
                                    case 40:
                                    case 63235:
                                        b.doScrollBy(-72), a = !0;
                                        break;
                                    case 37:
                                    case 63232:
                                        b.railh && (r ? b.doScrollLeft(0) : b.doScrollLeftBy(72), a = !0);
                                        break;
                                    case 39:
                                    case 63234:
                                        b.railh && (r ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), a = !0);
                                        break;
                                    case 33:
                                    case 63276:
                                        b.doScrollBy(b.view.h), a = !0;
                                        break;
                                    case 34:
                                    case 63277:
                                        b.doScrollBy(-b.view.h), a = !0;
                                        break;
                                    case 36:
                                    case 63273:
                                        b.railh && r ? b.doScrollPos(0, 0) : b.doScrollTo(0), a = !0;
                                        break;
                                    case 35:
                                    case 63275:
                                        b.railh && r ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh), a = !0;
                                        break;
                                    case 32:
                                        b.opt.spacebarenabled && (s ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), a = !0);
                                        break;
                                    case 27:
                                        b.zoomactive && (b.doZoom(), a = !0)
                                }
                                if (a) return b.cancelEvent(n)
                            }
                        }, b.opt.enablekeyboard && b.bind(document, S.isopera && !S.isopera12 ? "keypress" : "keydown", b.onkeypress), b.bind(document, "keydown", function(t) {
                            t.ctrlKey && (b.wheelprevented = !0)
                        }), b.bind(document, "keyup", function(t) {
                            t.ctrlKey || (b.wheelprevented = !1)
                        }), b.bind(window, "blur", function(t) {
                            b.wheelprevented = !1
                        }), b.bind(window, "resize", b.lazyResize), b.bind(window, "orientationchange", b.lazyResize), b.bind(window, "load", b.lazyResize), S.ischrome && !b.ispage && !b.haswrapper) {
                        var x = b.win.attr("style"),
                            l = parseFloat(b.win.css("width")) + 1;
                        b.win.css("width", l), b.synched("chromefix", function() {
                            b.win.attr("style", x)
                        })
                    }
                    b.onAttributeChange = function(t) {
                        b.lazyResize(b.isieold ? 250 : 30)
                    }, b.isie11 || !1 === u || (b.observerbody = new u(function(e) {
                        if (e.forEach(function(e) {
                                if ("attributes" == e.type) return t("body").hasClass("modal-open") && t("body").hasClass("modal-dialog") && !t.contains(t(".modal-dialog")[0], b.doc[0]) ? b.hide() : b.show()
                            }), document.body.scrollHeight != b.page.maxh) return b.lazyResize(30)
                    }), b.observerbody.observe(document.body, {
                        childList: !0,
                        subtree: !0,
                        characterData: !1,
                        attributes: !0,
                        attributeFilter: ["class"]
                    })), b.ispage || b.haswrapper || (!1 !== u ? (b.observer = new u(function(t) {
                        t.forEach(b.onAttributeChange)
                    }), b.observer.observe(b.win[0], {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }), b.observerremover = new u(function(t) {
                        t.forEach(function(t) {
                            if (0 < t.removedNodes.length)
                                for (var e in t.removedNodes)
                                    if (b && t.removedNodes[e] == b.win[0]) return b.remove()
                        })
                    }), b.observerremover.observe(b.win[0].parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (b.bind(b.win, S.isie && !S.isie9 ? "propertychange" : "DOMAttrModified", b.onAttributeChange),
                        S.isie9 && b.win[0].attachEvent("onpropertychange", b.onAttributeChange), b.bind(b.win, "DOMNodeRemoved", function(t) {
                            t.target == b.win[0] && b.remove()
                        }))), !b.ispage && b.opt.boxzoom && b.bind(window, "resize", b.resizeZoom), b.istextarea && (b.bind(b.win, "keydown", b.lazyResize), b.bind(b.win, "mouseup", b.lazyResize)), b.lazyResize(30)
                }
                if ("IFRAME" == this.doc[0].nodeName) {
                    var w = function() {
                        b.iframexd = !1;
                        var e;
                        try {
                            e = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                        } catch (t) {
                            b.iframexd = !0, e = !1
                        }
                        if (b.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                        if (b.forcescreen = !0, b.isiframe && (b.iframe = {
                                doc: t(e),
                                html: b.doc.contents().find("html")[0],
                                body: b.doc.contents().find("body")[0]
                            }, b.getContentSize = function() {
                                return {
                                    w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth),
                                    h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight)
                                }
                            }, b.docscroll = t(b.iframe.body)), !S.isios && b.opt.iframeautoresize && !b.isiframe) {
                            b.win.scrollTop(0), b.doc.height("");
                            var i = Math.max(e.getElementsByTagName("html")[0].scrollHeight, e.body.scrollHeight);
                            b.doc.height(i)
                        }
                        b.lazyResize(30), S.isie7 && b.css(t(b.iframe.html), o), b.css(t(b.iframe.body), o), S.isios && b.haswrapper && b.css(t(e.body), {
                            "-webkit-transform": "translate3d(0,0,0)"
                        }), "contentWindow" in this ? b.bind(this.contentWindow, "scroll", b.onscroll) : b.bind(e, "scroll", b.onscroll), b.opt.enablemousewheel && b.mousewheel(e, b.onmousewheel), b.opt.enablekeyboard && b.bind(e, S.isopera ? "keypress" : "keydown", b.onkeypress), (S.cantouch || b.opt.touchbehavior) && (b.bind(e, "mousedown", b.ontouchstart), b.bind(e, "mousemove", function(t) {
                            return b.ontouchmove(t, !0)
                        }), b.opt.grabcursorenabled && S.cursorgrabvalue && b.css(t(e.body), {
                            cursor: S.cursorgrabvalue
                        })), b.bind(e, "mouseup", b.ontouchend), b.zoom && (b.opt.dblclickzoom && b.bind(e, "dblclick", b.doZoom), b.ongesturezoom && b.bind(e, "gestureend", b.ongesturezoom))
                    };
                    this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                        w.call(b.doc[0], !1)
                    }, 500), b.bind(this.doc, "load", w)
                }
            }, this.showCursor = function(t, e) {
                if (b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0), b.rail) {
                    if (b.autohidedom && (b.autohidedom.stop().css({
                            opacity: b.opt.cursoropacitymax
                        }), b.cursoractive = !0), b.rail.drag && 1 == b.rail.drag.pt || (void 0 !== t && !1 !== t && (b.scroll.y = Math.round(1 * t / b.scrollratio.y)), void 0 !== e && (b.scroll.x = Math.round(1 * e / b.scrollratio.x))), b.cursor.css({
                            height: b.cursorheight,
                            top: b.scroll.y
                        }), b.cursorh) {
                        var i = b.hasreversehr ? b.scrollvaluemaxw - b.scroll.x : b.scroll.x;
                        !b.rail.align && b.rail.visibility ? b.cursorh.css({
                            width: b.cursorwidth,
                            left: i + b.rail.width
                        }) : b.cursorh.css({
                            width: b.cursorwidth,
                            left: i
                        }), b.cursoractive = !0
                    }
                    b.zoom && b.zoom.stop().css({
                        opacity: b.opt.cursoropacitymax
                    })
                }
            }, this.hideCursor = function(t) {
                b.cursortimeout || !b.rail || !b.autohidedom || b.hasmousefocus && "leave" == b.opt.autohidemode || (b.cursortimeout = setTimeout(function() {
                    b.rail.active && b.showonmouseevent || (b.autohidedom.stop().animate({
                        opacity: b.opt.cursoropacitymin
                    }), b.zoom && b.zoom.stop().animate({
                        opacity: b.opt.cursoropacitymin
                    }), b.cursoractive = !1), b.cursortimeout = 0
                }, t || b.opt.hidecursordelay))
            }, this.noticeCursor = function(t, e, i) {
                b.showCursor(e, i), b.rail.active || b.hideCursor(t)
            }, this.getContentSize = b.ispage ? function() {
                return {
                    w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                    h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            } : b.haswrapper ? function() {
                return {
                    w: b.doc.outerWidth() + parseInt(b.win.css("paddingLeft")) + parseInt(b.win.css("paddingRight")),
                    h: b.doc.outerHeight() + parseInt(b.win.css("paddingTop")) + parseInt(b.win.css("paddingBottom"))
                }
            } : function() {
                return {
                    w: b.docscroll[0].scrollWidth,
                    h: b.docscroll[0].scrollHeight
                }
            }, this.onResize = function(t, e) {
                if (!b || !b.win) return !1;
                if (!b.haswrapper && !b.ispage) {
                    if ("none" == b.win.css("display")) return b.visibility && b.hideRail().hideRailHr(), !1;
                    b.hidden || b.visibility || b.showRail().showRailHr()
                }
                var i = b.page.maxh,
                    n = b.page.maxw,
                    o = b.view.h,
                    r = b.view.w;
                if (b.view = {
                        w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth),
                        h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight)
                    }, b.page = e ? e : b.getContentSize(), b.page.maxh = Math.max(0, b.page.h - b.view.h), b.page.maxw = Math.max(0, b.page.w - b.view.w), b.page.maxh == i && b.page.maxw == n && b.view.w == r && b.view.h == o) {
                    if (b.ispage) return b;
                    if (i = b.win.offset(), b.lastposition && (n = b.lastposition, n.top == i.top && n.left == i.left)) return b;
                    b.lastposition = i
                }
                return 0 == b.page.maxh ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail && (b.rail.scrollable = !1)) : (b.page.maxh -= b.opt.railpadding.top + b.opt.railpadding.bottom, b.rail.scrollable = !0), 0 == b.page.maxw ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh && (b.railh.scrollable = !1)) : (b.page.maxw -= b.opt.railpadding.left + b.opt.railpadding.right, b.railh && (b.railh.scrollable = b.opt.horizrailenabled)), b.railslocked = b.locked || 0 == b.page.maxh && 0 == b.page.maxw, b.railslocked ? (b.ispage || b.updateScrollBar(b.view), !1) : (b.hidden || b.visibility ? !b.railh || b.hidden || b.railh.visibility || b.showRailHr() : b.showRail().showRailHr(), b.istextarea && b.win.css("resize") && "none" != b.win.css("resize") && (b.view.h -= 20), b.cursorheight = Math.min(b.view.h, Math.round(b.view.h / b.page.h * b.view.h)), b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight), b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w / b.page.w * b.view.w)), b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth), b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder - (b.opt.railpadding.top + b.opt.railpadding.bottom), b.railh && (b.railh.width = 0 < b.page.maxh ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder - (b.opt.railpadding.left + b.opt.railpadding.right)), b.ispage || b.updateScrollBar(b.view), b.scrollratio = {
                    x: b.page.maxw / b.scrollvaluemaxw,
                    y: b.page.maxh / b.scrollvaluemax
                }, b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor()), b.scroll.y && 0 == b.getScrollTop() && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y)), b)
            }, this.resize = b.onResize, this.hlazyresize = 0, this.lazyResize = function(t) {
                return b.haswrapper || b.hide(), b.hlazyresize && clearTimeout(b.hlazyresize), b.hlazyresize = setTimeout(function() {
                    b && b.show().resize()
                }, 240), b
            }, this.jqbind = function(e, i, n) {
                b.events.push({
                    e: e,
                    n: i,
                    f: n,
                    q: !0
                }), t(e).bind(i, n)
            }, this.mousewheel = function(t, e, i) {
                if (t = "jquery" in t ? t[0] : t, "onwheel" in document.createElement("div")) b._bind(t, "wheel", e, i || !1);
                else {
                    var n = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                    v(t, n, e, i || !1), "DOMMouseScroll" == n && v(t, "MozMousePixelScroll", e, i || !1)
                }
            }, S.haseventlistener ? (this.bind = function(t, e, i, n) {
                b._bind("jquery" in t ? t[0] : t, e, i, n || !1)
            }, this._bind = function(t, e, i, n) {
                b.events.push({
                    e: t,
                    n: e,
                    f: i,
                    b: n,
                    q: !1
                }), t.addEventListener(e, i, n || !1)
            }, this.cancelEvent = function(t) {
                return !!t && (t = t.original ? t.original : t, t.cancelable && t.preventDefault(), t.stopPropagation(), t.preventManipulation && t.preventManipulation(), !1)
            }, this.stopPropagation = function(t) {
                return !!t && (t = t.original ? t.original : t, t.stopPropagation(), !1)
            }, this._unbind = function(t, e, i, n) {
                t.removeEventListener(e, i, n)
            }) : (this.bind = function(t, e, i, n) {
                var o = "jquery" in t ? t[0] : t;
                b._bind(o, e, function(t) {
                    return (t = t || window.event || !1) && t.srcElement && (t.target = t.srcElement), "pageY" in t || (t.pageX = t.clientX + document.documentElement.scrollLeft, t.pageY = t.clientY + document.documentElement.scrollTop), !1 !== i.call(o, t) && !1 !== n || b.cancelEvent(t)
                })
            }, this._bind = function(t, e, i, n) {
                b.events.push({
                    e: t,
                    n: e,
                    f: i,
                    b: n,
                    q: !1
                }), t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
            }, this.cancelEvent = function(t) {
                return !!(t = window.event || !1) && (t.cancelBubble = !0, t.cancel = !0, t.returnValue = !1)
            }, this.stopPropagation = function(t) {
                return !!(t = window.event || !1) && (t.cancelBubble = !0, !1)
            }, this._unbind = function(t, e, i, n) {
                t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = !1
            }), this.unbindAll = function() {
                for (var t = 0; t < b.events.length; t++) {
                    var e = b.events[t];
                    e.q ? e.e.unbind(e.n, e.f) : b._unbind(e.e, e.n, e.f, e.b)
                }
            }, this.showRail = function() {
                return 0 == b.page.maxh || !b.ispage && "none" == b.win.css("display") || (b.visibility = !0, b.rail.visibility = !0, b.rail.css("display", "block")), b
            }, this.showRailHr = function() {
                return b.railh ? (0 == b.page.maxw || !b.ispage && "none" == b.win.css("display") || (b.railh.visibility = !0, b.railh.css("display", "block")), b) : b
            }, this.hideRail = function() {
                return b.visibility = !1, b.rail.visibility = !1, b.rail.css("display", "none"), b
            }, this.hideRailHr = function() {
                return b.railh ? (b.railh.visibility = !1, b.railh.css("display", "none"), b) : b
            }, this.show = function() {
                return b.hidden = !1, b.railslocked = !1, b.showRail().showRailHr()
            }, this.hide = function() {
                return b.hidden = !0, b.railslocked = !0, b.hideRail().hideRailHr()
            }, this.toggle = function() {
                return b.hidden ? b.show() : b.hide()
            }, this.remove = function() {
                b.stop(), b.cursortimeout && clearTimeout(b.cursortimeout);
                for (var e in b.delaylist) b.delaylist[e] && l(b.delaylist[e].h);
                for (b.doZoomOut(), b.unbindAll(), S.isie9 && b.win[0].detachEvent("onpropertychange", b.onAttributeChange), !1 !== b.observer && b.observer.disconnect(), !1 !== b.observerremover && b.observerremover.disconnect(), !1 !== b.observerbody && b.observerbody.disconnect(), b.events = null, b.cursor && b.cursor.remove(), b.cursorh && b.cursorh.remove(), b.rail && b.rail.remove(), b.railh && b.railh.remove(), b.zoom && b.zoom.remove(), e = 0; e < b.saved.css.length; e++) {
                    var i = b.saved.css[e];
                    i[0].css(i[1], void 0 === i[2] ? "" : i[2])
                }
                b.saved = !1, b.me.data("__nicescroll", "");
                var n = t.nicescroll;
                n.each(function(t) {
                    if (this && this.id === b.id) {
                        delete n[t];
                        for (var e = ++t; e < n.length; e++, t++) n[t] = n[e];
                        n.length--, n.length && delete n[n.length]
                    }
                });
                for (var o in b) b[o] = null, delete b[o];
                b = null
            }, this.scrollstart = function(t) {
                return this.onscrollstart = t, b
            }, this.scrollend = function(t) {
                return this.onscrollend = t, b
            }, this.scrollcancel = function(t) {
                return this.onscrollcancel = t, b
            }, this.zoomin = function(t) {
                return this.onzoomin = t, b
            }, this.zoomout = function(t) {
                return this.onzoomout = t, b
            }, this.isScrollable = function(e) {
                if (e = e.target ? e.target : e, "OPTION" == e.nodeName) return !0;
                for (; e && 1 == e.nodeType && !/^BODY|HTML/.test(e.nodeName);) {
                    var i = t(e),
                        i = i.css("overflowY") || i.css("overflowX") || i.css("overflow") || "";
                    if (/scroll|auto/.test(i)) return e.clientHeight != e.scrollHeight;
                    e = !!e.parentNode && e.parentNode
                }
                return !1
            }, this.getViewport = function(e) {
                for (e = !(!e || !e.parentNode) && e.parentNode; e && 1 == e.nodeType && !/^BODY|HTML/.test(e.nodeName);) {
                    var i = t(e);
                    if (/fixed|absolute/.test(i.css("position"))) return i;
                    var n = i.css("overflowY") || i.css("overflowX") || i.css("overflow") || "";
                    if (/scroll|auto/.test(n) && e.clientHeight != e.scrollHeight || 0 < i.getNiceScroll().length) return i;
                    e = !!e.parentNode && e.parentNode
                }
                return !1
            }, this.triggerScrollEnd = function() {
                if (b.onscrollend) {
                    var t = b.getScrollLeft(),
                        e = b.getScrollTop();
                    b.onscrollend.call(b, {
                        type: "scrollend",
                        current: {
                            x: t,
                            y: e
                        },
                        end: {
                            x: t,
                            y: e
                        }
                    })
                }
            }, this.onmousewheel = function(t) {
                if (!b.wheelprevented) {
                    if (b.railslocked) return b.debounced("checkunlock", b.resize, 250), !0;
                    if (b.rail.drag) return b.cancelEvent(t);
                    if ("auto" == b.opt.oneaxismousemode && 0 != t.deltaX && (b.opt.oneaxismousemode = !1), b.opt.oneaxismousemode && 0 == t.deltaX && !b.rail.scrollable) return !b.railh || !b.railh.scrollable || b.onmousewheelhr(t);
                    var e = +new Date,
                        i = !1;
                    return b.opt.preservenativescrolling && b.checkarea + 600 < e && (b.nativescrollingarea = b.isScrollable(t), i = !0), b.checkarea = e, !!b.nativescrollingarea || ((t = y(t, !1, i)) && (b.checkarea = 0), t)
                }
            }, this.onmousewheelhr = function(t) {
                if (!b.wheelprevented) {
                    if (b.railslocked || !b.railh.scrollable) return !0;
                    if (b.rail.drag) return b.cancelEvent(t);
                    var e = +new Date,
                        i = !1;
                    return b.opt.preservenativescrolling && b.checkarea + 600 < e && (b.nativescrollingarea = b.isScrollable(t), i = !0), b.checkarea = e, !!b.nativescrollingarea || (b.railslocked ? b.cancelEvent(t) : y(t, !0, i))
                }
            }, this.stop = function() {
                return b.cancelScroll(), b.scrollmon && b.scrollmon.stop(), b.cursorfreezed = !1, b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.noticeCursor(), b
            }, this.getTransitionSpeed = function(t) {
                return t = Math.min(Math.round(10 * b.opt.scrollspeed), Math.round(t / 20 * b.opt.scrollspeed)), 20 < t ? t : 0
            }, b.opt.smoothscroll ? b.ishwscroll && S.hastransition && b.opt.usetransition && b.opt.smoothscroll ? (this.prepareTransition = function(t, e) {
                var i = e ? 20 < t ? t : 0 : b.getTransitionSpeed(t),
                    n = i ? S.prefixstyle + "transform " + i + "ms ease-out" : "";
                return b.lasttransitionstyle && b.lasttransitionstyle == n || (b.lasttransitionstyle = n, b.doc.css(S.transitionstyle, n)), i
            }, this.doScrollLeft = function(t, e) {
                var i = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                b.doScrollPos(t, i, e)
            }, this.doScrollTop = function(t, e) {
                var i = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                b.doScrollPos(i, t, e)
            }, this.doScrollPos = function(t, e, i) {
                var n = b.getScrollTop(),
                    o = b.getScrollLeft();
                return (0 > (b.newscrolly - n) * (e - n) || 0 > (b.newscrollx - o) * (t - o)) && b.cancelScroll(), 0 == b.opt.bouncescroll && (0 > e ? e = 0 : e > b.page.maxh && (e = b.page.maxh), 0 > t ? t = 0 : t > b.page.maxw && (t = b.page.maxw)), (!b.scrollrunning || t != b.newscrollx || e != b.newscrolly) && (b.newscrolly = e, b.newscrollx = t, b.newscrollspeed = i || !1, !b.timer && void(b.timer = setTimeout(function() {
                    var i = b.getScrollTop(),
                        n = b.getScrollLeft(),
                        o = Math.round(Math.sqrt(Math.pow(t - n, 2) + Math.pow(e - i, 2))),
                        o = b.newscrollspeed && 1 < b.newscrollspeed ? b.newscrollspeed : b.getTransitionSpeed(o);
                    b.newscrollspeed && 1 >= b.newscrollspeed && (o *= b.newscrollspeed), b.prepareTransition(o, !0), b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm), 0 < o && (!b.scrollrunning && b.onscrollstart && b.onscrollstart.call(b, {
                        type: "scrollstart",
                        current: {
                            x: n,
                            y: i
                        },
                        request: {
                            x: t,
                            y: e
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        },
                        speed: o
                    }), S.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, S.transitionend, b.onScrollTransitionEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped), b.scrollendtrapped = setTimeout(b.onScrollTransitionEnd, o)), b.timerscroll = {
                        bz: new k(i, b.newscrolly, o, 0, 0, .58, 1),
                        bh: new k(n, b.newscrollx, o, 0, 0, .58, 1)
                    }, b.cursorfreezed || (b.timerscroll.tm = setInterval(function() {
                        b.showCursor(b.getScrollTop(), b.getScrollLeft())
                    }, 60))), b.synched("doScroll-set", function() {
                        b.timer = 0, b.scrollendtrapped && (b.scrollrunning = !0), b.setScrollTop(b.newscrolly), b.setScrollLeft(b.newscrollx), b.scrollendtrapped || b.onScrollTransitionEnd()
                    })
                }, 50)))
            }, this.cancelScroll = function() {
                if (!b.scrollendtrapped) return !0;
                var t = b.getScrollTop(),
                    e = b.getScrollLeft();
                return b.scrollrunning = !1, S.transitionend || clearTimeout(S.transitionend), b.scrollendtrapped = !1, b._unbind(b.doc[0], S.transitionend, b.onScrollTransitionEnd), b.prepareTransition(0), b.setScrollTop(t), b.railh && b.setScrollLeft(e), b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm), b.timerscroll = !1, b.cursorfreezed = !1, b.showCursor(t, e), b
            }, this.onScrollTransitionEnd = function() {
                b.scrollendtrapped && b._unbind(b.doc[0], S.transitionend, b.onScrollTransitionEnd), b.scrollendtrapped = !1, b.prepareTransition(0), b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm), b.timerscroll = !1;
                var t = b.getScrollTop(),
                    e = b.getScrollLeft();
                return b.setScrollTop(t), b.railh && b.setScrollLeft(e), b.noticeCursor(!1, t, e), b.cursorfreezed = !1, 0 > t ? t = 0 : t > b.page.maxh && (t = b.page.maxh), 0 > e ? e = 0 : e > b.page.maxw && (e = b.page.maxw), t != b.newscrolly || e != b.newscrollx ? b.doScrollPos(e, t, b.opt.snapbackspeed) : (b.onscrollend && b.scrollrunning && b.triggerScrollEnd(), void(b.scrollrunning = !1))
            }) : (this.doScrollLeft = function(t, e) {
                var i = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                b.doScrollPos(t, i, e)
            }, this.doScrollTop = function(t, e) {
                var i = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                b.doScrollPos(i, t, e)
            }, this.doScrollPos = function(t, e, i) {
                function n() {
                    if (b.cancelAnimationFrame) return !0;
                    if (b.scrollrunning = !0, u = 1 - u) return b.timer = a(n) || 1;
                    var t, e, i = 0,
                        o = e = b.getScrollTop();
                    b.dst.ay ? (o = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly, t = o - e, (0 > t && o < b.newscrolly || 0 < t && o > b.newscrolly) && (o = b.newscrolly), b.setScrollTop(o), o == b.newscrolly && (i = 1)) : i = 1, e = t = b.getScrollLeft(), b.dst.ax ? (e = b.bzscroll ? b.dst.px + b.bzscroll.getNow() * b.dst.ax : b.newscrollx, t = e - t, (0 > t && e < b.newscrollx || 0 < t && e > b.newscrollx) && (e = b.newscrollx), b.setScrollLeft(e), e == b.newscrollx && (i += 1)) : i += 1, 2 == i ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, 0 > o ? o = 0 : o > b.page.maxh && (o = Math.max(0, b.page.maxh)), 0 > e ? e = 0 : e > b.page.maxw && (e = b.page.maxw), e != b.newscrollx || o != b.newscrolly ? b.doScrollPos(e, o) : b.onscrollend && b.triggerScrollEnd()) : b.timer = a(n) || 1
                }
                if (e = void 0 === e || !1 === e ? b.getScrollTop(!0) : e, b.timer && b.newscrolly == e && b.newscrollx == t) return !0;
                b.timer && l(b.timer), b.timer = 0;
                var o = b.getScrollTop(),
                    r = b.getScrollLeft();
                (0 > (b.newscrolly - o) * (e - o) || 0 > (b.newscrollx - r) * (t - r)) && b.cancelScroll(), b.newscrolly = e, b.newscrollx = t, b.bouncescroll && b.rail.visibility || (0 > b.newscrolly ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh)), b.bouncescroll && b.railh.visibility || (0 > b.newscrollx ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw)), b.dst = {}, b.dst.x = t - r, b.dst.y = e - o, b.dst.px = r, b.dst.py = o;
                var s = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2)));
                b.dst.ax = b.dst.x / s, b.dst.ay = b.dst.y / s;
                var c = 0,
                    d = s;
                if (0 == b.dst.x ? (c = o, d = e, b.dst.ay = 1, b.dst.py = 0) : 0 == b.dst.y && (c = r, d = t, b.dst.ax = 1, b.dst.px = 0), s = b.getTransitionSpeed(s), i && 1 >= i && (s *= i), b.bzscroll = 0 < s && (b.bzscroll ? b.bzscroll.update(d, s) : new k(c, d, s, 0, 1, 0, 1)), !b.timer) {
                    (o == b.page.maxh && e >= b.page.maxh || r == b.page.maxw && t >= b.page.maxw) && b.checkContentSize();
                    var u = 1;
                    b.cancelAnimationFrame = !1, b.timer = 1, b.onscrollstart && !b.scrollrunning && b.onscrollstart.call(b, {
                        type: "scrollstart",
                        current: {
                            x: r,
                            y: o
                        },
                        request: {
                            x: t,
                            y: e
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        },
                        speed: s
                    }), n(), (o == b.page.maxh && e >= o || r == b.page.maxw && t >= r) && b.checkContentSize(), b.noticeCursor()
                }
            }, this.cancelScroll = function() {
                return b.timer && l(b.timer), b.timer = 0, b.bzscroll = !1, b.scrollrunning = !1, b
            }) : (this.doScrollLeft = function(t, e) {
                var i = b.getScrollTop();
                b.doScrollPos(t, i, e)
            }, this.doScrollTop = function(t, e) {
                var i = b.getScrollLeft();
                b.doScrollPos(i, t, e)
            }, this.doScrollPos = function(t, e, i) {
                var n = t > b.page.maxw ? b.page.maxw : t;
                0 > n && (n = 0);
                var o = e > b.page.maxh ? b.page.maxh : e;
                0 > o && (o = 0), b.synched("scroll", function() {
                    b.setScrollTop(o), b.setScrollLeft(n)
                })
            }, this.cancelScroll = function() {}), this.doScrollBy = function(t, e) {
                var i = 0,
                    i = e ? Math.floor((b.scroll.y - t) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - t;
                if (b.bouncescroll) {
                    var n = Math.round(b.view.h / 2);
                    i < -n ? i = -n : i > b.page.maxh + n && (i = b.page.maxh + n)
                }
                return b.cursorfreezed = !1, n = b.getScrollTop(!0), 0 > i && 0 >= n ? b.noticeCursor() : i > b.page.maxh && n >= b.page.maxh ? (b.checkContentSize(), b.noticeCursor()) : void b.doScrollTop(i)
            }, this.doScrollLeftBy = function(t, e) {
                var i = 0,
                    i = e ? Math.floor((b.scroll.x - t) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - t;
                if (b.bouncescroll) {
                    var n = Math.round(b.view.w / 2);
                    i < -n ? i = -n : i > b.page.maxw + n && (i = b.page.maxw + n)
                }
                return b.cursorfreezed = !1, n = b.getScrollLeft(!0), 0 > i && 0 >= n || i > b.page.maxw && n >= b.page.maxw ? b.noticeCursor() : void b.doScrollLeft(i)
            }, this.doScrollTo = function(t, e) {
                b.cursorfreezed = !1, b.doScrollTop(t)
            }, this.checkContentSize = function() {
                var t = b.getContentSize();
                t.h == b.page.h && t.w == b.page.w || b.resize(!1, t)
            }, b.onscroll = function(t) {
                b.rail.drag || b.cursorfreezed || b.synched("scroll", function() {
                    b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x))), b.noticeCursor()
                })
            }, b.bind(b.docscroll, "scroll", b.onscroll), this.doZoomIn = function(e) {
                if (!b.zoomactive) {
                    b.zoomactive = !0, b.zoomrestore = {
                        style: {}
                    };
                    var i, n = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
                        o = b.win[0].style;
                    for (i in n) {
                        var s = n[i];
                        b.zoomrestore.style[s] = void 0 !== o[s] ? o[s] : ""
                    }
                    return b.zoomrestore.style.width = b.win.css("width"), b.zoomrestore.style.height = b.win.css("height"), b.zoomrestore.padding = {
                        w: b.win.outerWidth() - b.win.width(),
                        h: b.win.outerHeight() - b.win.height()
                    }, S.isios4 && (b.zoomrestore.scrollTop = t(window).scrollTop(), t(window).scrollTop(0)), b.win.css({
                        position: S.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        zIndex: r + 100,
                        margin: 0
                    }), n = b.win.css("backgroundColor"), ("" == n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && b.win.css("backgroundColor", "#fff"), b.rail.css({
                        zIndex: r + 101
                    }), b.zoom.css({
                        zIndex: r + 102
                    }), b.zoom.css("backgroundPosition", "0px -18px"), b.resizeZoom(), b.onzoomin && b.onzoomin.call(b), b.cancelEvent(e)
                }
            }, this.doZoomOut = function(e) {
                if (b.zoomactive) return b.zoomactive = !1, b.win.css("margin", ""), b.win.css(b.zoomrestore.style), S.isios4 && t(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({
                    "z-index": b.zindex
                }), b.zoom.css({
                    "z-index": b.zindex
                }), b.zoomrestore = !1, b.zoom.css("backgroundPosition", "0px 0px"), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(e)
            }, this.doZoom = function(t) {
                return b.zoomactive ? b.doZoomOut(t) : b.doZoomIn(t)
            }, this.resizeZoom = function() {
                if (b.zoomactive) {
                    var e = b.getScrollTop();
                    b.win.css({
                        width: t(window).width() - b.zoomrestore.padding.w + "px",
                        height: t(window).height() - b.zoomrestore.padding.h + "px"
                    }), b.onResize(), b.setScrollTop(Math.min(b.page.maxh, e))
                }
            }, this.init(), t.nicescroll.push(this)
        },
        m = function(t) {
            var e = this;
            this.nc = t, this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0, this.snapy = this.snapx = !1, this.demuly = this.demulx = 0, this.lastscrolly = this.lastscrollx = -1, this.timer = this.chky = this.chkx = 0, this.time = function() {
                return +new Date
            }, this.reset = function(t, i) {
                e.stop();
                var n = e.time();
                e.steptime = 0, e.lasttime = n, e.speedx = 0, e.speedy = 0, e.lastx = t, e.lasty = i, e.lastscrollx = -1, e.lastscrolly = -1
            }, this.update = function(t, i) {
                var n = e.time();
                e.steptime = n - e.lasttime, e.lasttime = n;
                var n = i - e.lasty,
                    o = t - e.lastx,
                    r = e.nc.getScrollTop(),
                    s = e.nc.getScrollLeft(),
                    r = r + n,
                    s = s + o;
                e.snapx = 0 > s || s > e.nc.page.maxw, e.snapy = 0 > r || r > e.nc.page.maxh, e.speedx = o, e.speedy = n, e.lastx = t, e.lasty = i
            }, this.stop = function() {
                e.nc.unsynched("domomentum2d"), e.timer && clearTimeout(e.timer), e.timer = 0, e.lastscrollx = -1, e.lastscrolly = -1
            }, this.doSnapy = function(t, i) {
                var n = !1;
                0 > i ? (i = 0, n = !0) : i > e.nc.page.maxh && (i = e.nc.page.maxh, n = !0), 0 > t ? (t = 0, n = !0) : t > e.nc.page.maxw && (t = e.nc.page.maxw, n = !0), n ? e.nc.doScrollPos(t, i, e.nc.opt.snapbackspeed) : e.nc.triggerScrollEnd()
            }, this.doMomentum = function(t) {
                var i = e.time(),
                    n = t ? i + t : e.lasttime;
                t = e.nc.getScrollLeft();
                var o = e.nc.getScrollTop(),
                    r = e.nc.page.maxh,
                    s = e.nc.page.maxw;
                if (e.speedx = 0 < s ? Math.min(60, e.speedx) : 0, e.speedy = 0 < r ? Math.min(60, e.speedy) : 0, n = n && 60 >= i - n, (0 > o || o > r || 0 > t || t > s) && (n = !1), t = !(!e.speedx || !n) && e.speedx, e.speedy && n && e.speedy || t) {
                    var a = Math.max(16, e.steptime);
                    50 < a && (t = a / 50, e.speedx *= t, e.speedy *= t, a = 50), e.demulxy = 0, e.lastscrollx = e.nc.getScrollLeft(), e.chkx = e.lastscrollx, e.lastscrolly = e.nc.getScrollTop(), e.chky = e.lastscrolly;
                    var l = e.lastscrollx,
                        c = e.lastscrolly,
                        d = function() {
                            var t = 600 < e.time() - i ? .04 : .02;
                            e.speedx && (l = Math.floor(e.lastscrollx - e.speedx * (1 - e.demulxy)), e.lastscrollx = l, 0 > l || l > s) && (t = .1), e.speedy && (c = Math.floor(e.lastscrolly - e.speedy * (1 - e.demulxy)), e.lastscrolly = c, 0 > c || c > r) && (t = .1), e.demulxy = Math.min(1, e.demulxy + t), e.nc.synched("domomentum2d", function() {
                                e.speedx && (e.nc.getScrollLeft(), e.chkx = l, e.nc.setScrollLeft(l)), e.speedy && (e.nc.getScrollTop(), e.chky = c, e.nc.setScrollTop(c)), e.timer || (e.nc.hideCursor(), e.doSnapy(l, c))
                            }), 1 > e.demulxy ? e.timer = setTimeout(d, a) : (e.stop(), e.nc.hideCursor(), e.doSnapy(l, c))
                        };
                    d()
                } else e.doSnapy(e.nc.getScrollLeft(), e.nc.getScrollTop())
            }
        },
        v = t.fn.scrollTop;
    t.cssHooks.pageYOffset = {
        get: function(e, i, n) {
            return (i = t.data(e, "__nicescroll") || !1) && i.ishwscroll ? i.getScrollTop() : v.call(e)
        },
        set: function(e, i) {
            var n = t.data(e, "__nicescroll") || !1;
            return n && n.ishwscroll ? n.setScrollTop(parseInt(i)) : v.call(e, i), this
        }
    }, t.fn.scrollTop = function(e) {
        if (void 0 === e) {
            var i = !!this[0] && (t.data(this[0], "__nicescroll") || !1);
            return i && i.ishwscroll ? i.getScrollTop() : v.call(this)
        }
        return this.each(function() {
            var i = t.data(this, "__nicescroll") || !1;
            i && i.ishwscroll ? i.setScrollTop(parseInt(e)) : v.call(t(this), e)
        })
    };
    var y = t.fn.scrollLeft;
    t.cssHooks.pageXOffset = {
        get: function(e, i, n) {
            return (i = t.data(e, "__nicescroll") || !1) && i.ishwscroll ? i.getScrollLeft() : y.call(e)
        },
        set: function(e, i) {
            var n = t.data(e, "__nicescroll") || !1;
            return n && n.ishwscroll ? n.setScrollLeft(parseInt(i)) : y.call(e, i), this
        }
    }, t.fn.scrollLeft = function(e) {
        if (void 0 === e) {
            var i = !!this[0] && (t.data(this[0], "__nicescroll") || !1);
            return i && i.ishwscroll ? i.getScrollLeft() : y.call(this)
        }
        return this.each(function() {
            var i = t.data(this, "__nicescroll") || !1;
            i && i.ishwscroll ? i.setScrollLeft(parseInt(e)) : y.call(t(this), e)
        })
    };
    var b = function(e) {
        var i = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function(e) {
                return t.each(i, e), i
            }, this.push = function(t) {
                i[i.length] = t, i.length++
            }, this.eq = function(t) {
                return i[t]
            }, e)
            for (var n = 0; n < e.length; n++) {
                var o = t.data(e[n], "__nicescroll") || !1;
                o && (this[this.length] = o, this.length++)
            }
        return this
    };
    ! function(t, e, i) {
        for (var n = 0; n < e.length; n++) i(t, e[n])
    }(b.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function(t, e) {
        t[e] = function() {
            var t = arguments;
            return this.each(function() {
                this[e].apply(this, t)
            })
        }
    }), t.fn.getNiceScroll = function(e) {
        return void 0 === e ? new b(this) : this[e] && t.data(this[e], "__nicescroll") || !1
    }, t.expr[":"].nicescroll = function(e) {
        return void 0 !== t.data(e, "__nicescroll")
    }, t.fn.niceScroll = function(e, i) {
        void 0 !== i || "object" != typeof e || "jquery" in e || (i = e, e = !1), i = t.extend({}, i);
        var n = new b;
        void 0 === i && (i = {}), e && (i.doc = t(e), i.win = t(this));
        var o = !("doc" in i);
        return o || "win" in i || (i.win = t(this)), this.each(function() {
            var e = t(this).data("__nicescroll") || !1;
            e || (i.doc = o ? t(this) : i.doc, e = new g(i, t(this)), t(this).data("__nicescroll", e)), n.push(e)
        }), 1 == n.length ? n[0] : n
    }, window.NiceScroll = {
        getjQuery: function() {
            return t
        }
    }, t.nicescroll || (t.nicescroll = new b, t.nicescroll.options = h)
}), ! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, r, a) {
        function l(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, l) {
                var c = a.data(l, i);
                if (!c) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = c[e];
                if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var u = d.apply(c, n);
                o = void 0 === o ? u : o
            }), void 0 !== o ? o : t
        }

        function c(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return l(this, t, e)
            }
            return c(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        r = t.console,
        s = "undefined" == typeof r ? function() {} : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; c > e; e++) {
            var i = l[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
        }
    }

    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, u = 0; c > u; u++) {
                var h = l[u],
                    p = r[h],
                    f = parseFloat(p);
                a[h] = isNaN(f) ? 0 : f
            }
            var g = a.paddingLeft + a.paddingRight,
                m = a.paddingTop + a.paddingBottom,
                v = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                b = a.borderLeftWidth + a.borderRightWidth,
                x = a.borderTopWidth + a.borderBottomWidth,
                w = d && s,
                S = t(r.width);
            S !== !1 && (a.width = S + (w ? 0 : g + b));
            var T = t(r.height);
            return T !== !1 && (a.height = T + (w ? 0 : m + x)), a.innerWidth = a.width - (g + b), a.innerHeight = a.height - (m + x), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
        }
    }
    var s, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        c = l.length,
        d = !1;
    return r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o]
            }, i || 100)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var r = i.toDashed(o),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                l = document.querySelectorAll(".js-" + r),
                c = i.makeArray(a).concat(i.makeArray(l)),
                d = s + "-options",
                u = t.jQuery;
            c.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (e) {
                    return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + e))
                }
                var a = new e(t, i);
                u && u.data(t, o, a)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        l = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s],
        c = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() {
        this.size = e(this.element)
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = c[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = this.layout.size,
            s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
            a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
        s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            s = i ? "right" : "left",
            a = this.position.x + t[o];
        e[r] = this.getXValue(a), e[s] = "";
        var l = n ? "paddingTop" : "paddingBottom",
            c = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            u = this.position.y + t[l];
        e[c] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            r = parseInt(e, 10),
            s = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            l = e - n,
            c = {};
        c.transform = this.getTranslate(a, l), this.transition({
            to: c,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var u = "opacity," + o(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: u,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(l, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var h = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = h[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var p = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(p)
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";

    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, c && (this.$element = c(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++u;
        this.element.outlayerGUID = o, h[o] = this, this._create();
        var r = this._getOption("initLayout");
        r && this.layout()
    }

    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = f[n] || 1;
        return i * o
    }
    var l = t.console,
        c = t.jQuery,
        d = function() {},
        u = 0,
        h = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var p = r.prototype;
    n.extend(p, e.prototype), p.option = function(t) {
        n.extend(this.options, t)
    }, p._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, p._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, p.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, p._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o],
                s = new i(r, this);
            n.push(s)
        }
        return n
    }, p._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, p.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, p.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, p._init = p.layout, p._resetLayout = function() {
        this.getSize()
    }, p.getSize = function() {
        this.size = i(this.element)
    }, p._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, p.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, p._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, p._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, p._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, p._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, p.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, p._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, p._postLayout = function() {
        this.resizeContainer()
    }, p.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, p._getContainerSize = d, p._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, p._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            s++, s == r && i()
        }
        var o = this,
            r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }, p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), c)
            if (this.$element = this.$element || c(this.element), e) {
                var o = c.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else this.$element.trigger(t, i)
    }, p.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, p.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, p.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, p.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, p._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, p._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, p._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, p._manageStamp = d, p._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            r = {
                left: e.left - n.left - o.marginLeft,
                top: e.top - n.top - o.marginTop,
                right: n.right - e.right - o.marginRight,
                bottom: n.bottom - e.bottom - o.marginBottom
            };
        return r
    }, p.handleEvent = n.handleEvent, p.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, p.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, p.onresize = function() {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), p.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, p.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, p.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, p.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, p.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, p.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, p.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, p.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, p.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, p.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, p.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, p.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, p.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete h[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && h[e]
    }, r.create = function(t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
    };
    var f = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o, r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var o = i.destroy;
    return i.destroy = function() {
        o.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype,
        o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return o.forEach(function(t) {
        n[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(t, e) {
        var i = t + e,
            n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function o() {
            i.apply(this, arguments)
        }
        return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / n,
            s = n - o % n,
            a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, i.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
                x: this.columnWidth * s,
                y: r
            }, l = r + t.size.outerHeight, c = this.cols + 1 - o.length, d = 0; c > d; d++) this.colYs[s + d] = l;
        return a
    }, i.prototype._getColGroup = function(t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, i.prototype._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            r = o ? n.left : n.right,
            s = r + i.outerWidth,
            a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var l = Math.floor(s / this.columnWidth);
        l -= s % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
        for (var c = this._getOption("originTop"), d = (c ? n.top : n.bottom) + i.outerHeight, u = a; l >= u; u++) this.colYs[u] = Math.max(d, this.colYs[u])
    }, i.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        n = i.prototype,
        o = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var r in e.prototype) o[r] || (n[r] = e.prototype[r]);
    var s = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems, s.call(this)
    };
    var a = n._getOption;
    return n._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, r, s, a) {
        return e(t, i, n, o, r, s, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, r, s) {
    function a(t, e) {
        return function(i, n) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o],
                    s = i.sortData[r],
                    a = n.sortData[r];
                if (s > a || a > s) {
                    var l = void 0 !== e[r] ? e[r] : e,
                        c = l ? 1 : -1;
                    return (s > a ? 1 : -1) * c
                }
            }
            return 0
        }
    }
    var l = t.jQuery,
        c = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = r, d.LayoutMode = s;
    var u = d.prototype;
    u._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in s.modes) this._initLayoutMode(t)
    }, u.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, u._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var n = t[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, u._initLayoutMode = function(t) {
        var e = s.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, u.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, u._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, u.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, u._init = u.arrange, u._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, u._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, u._bindArrangeComplete = function() {
        function t() {
            e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var e, i, n, o = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            n = !0, t()
        })
    }, u._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], r = this._getFilterTest(e), s = 0; s < t.length; s++) {
            var a = t[s];
            if (!a.isIgnored) {
                var l = r(a);
                l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    }, u._getFilterTest = function(t) {
        return l && this.options.isJQueryFiltering ? function(e) {
            return l(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return n(e.element, t)
        }
    }, u.updateSortData = function(t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, u._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = h(i)
        }
    }, u._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var h = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = c(t).split(" "),
                n = i[0],
                o = n.match(/^\[(.+)\]$/),
                r = o && o[1],
                s = e(r, n),
                a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(s(t))
            } : function(t) {
                return t && s(t)
            }
        }

        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, u._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory),
                i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, u._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, u._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, u._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, u._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, u._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, u.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, u.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, u.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, u._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, u.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
            var r = this._filter(e).matches;
            for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    };
    var p = u.remove;
    return u.remove = function(t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        p.call(this, t);
        for (var i = e && e.length, n = 0; i && i > n; n++) {
            var r = e[n];
            o.removeFrom(this.filteredItems, r)
        }
    }, u.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, u._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i, n
    }, u.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, d
}), ! function(t) {
    t.fn.disappear = function(e, i) {
        var n = t.extend({
            data: void 0
        }, i);
        this.each(function() {
            var i = t(this);
            return i.bind("disappear", e, n.data), e ? void 0 : void i.trigger("disappear", n.data)
        })
    }, t.fn.appear = function(e, i) {
        var n = t.extend({
            data: void 0,
            one: !0
        }, i);
        return this.each(function() {
            var i = t(this);
            if (i.appeared = !1, !e) return void i.trigger("appear", n.data);
            var o = t(window),
                r = function() {
                    if (!i.is(":visible")) return void(i.appeared = !1);
                    var t = o.scrollLeft(),
                        e = o.scrollTop(),
                        r = i.offset(),
                        s = r.left,
                        a = r.top;
                    a + i.height() >= e && a <= e + o.height() && s + i.width() >= t && s <= t + o.width() ? i.appeared || i.trigger("appear", n.data) : (i.appeared && i.trigger("disappear", n.data), i.appeared = !1)
                },
                s = function() {
                    if (i.appeared = !0, n.one) {
                        o.unbind("scroll", r);
                        var s = t.inArray(r, t.fn.appear.checks);
                        s >= 0 && t.fn.appear.checks.splice(s, 1)
                    }
                    e.apply(this, arguments)
                };
            n.one ? i.one("appear", n.data, s) : i.bind("appear", n.data, s), o.scroll(r), t.fn.appear.checks.push(r), r()
        })
    }, t.extend(t.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var e = t.fn.appear.checks.length;
            if (e > 0)
                for (; e--;) t.fn.appear.checks[e]()
        },
        run: function() {
            t.fn.appear.timeout && clearTimeout(t.fn.appear.timeout), t.fn.appear.timeout = setTimeout(t.fn.appear.checkAll, 20)
        }
    }), t.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, i) {
        var n = t.fn[i];
        n && (t.fn[i] = function() {
            var e = n.apply(this, arguments);
            return t.fn.appear.run(), e
        })
    })
}(jQuery), ! function(t, e, i, n) {
    function o(e, i) {
        this.element = e, this.options = t.extend({}, s, i), this._defaults = s, this._name = r, this.init()
    }
    var r = "stellar",
        s = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(t) {
                t.hide()
            },
            showElement: function(t) {
                t.show()
            }
        },
        a = {
            scroll: {
                getLeft: function(t) {
                    return t.scrollLeft()
                },
                setLeft: function(t, e) {
                    t.scrollLeft(e)
                },
                getTop: function(t) {
                    return t.scrollTop()
                },
                setTop: function(t, e) {
                    t.scrollTop(e)
                }
            },
            position: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("margin-left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(t) {
                    var e = getComputedStyle(t[0])[d];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(t) {
                    var e = getComputedStyle(t[0])[d];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        l = {
            position: {
                setLeft: function(t, e) {
                    t.css("left", e)
                },
                setTop: function(t, e) {
                    t.css("top", e)
                }
            },
            transform: {
                setPosition: function(t, e, i, n, o) {
                    t[0].style[d] = "translate3d(" + (e - i) + "px, " + (n - o) + "px, 0)"
                }
            }
        },
        c = function() {
            var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                n = t("script")[0].style,
                o = "";
            for (e in n)
                if (i.test(e)) {
                    o = e.match(i)[0];
                    break
                }
            return "WebkitOpacity" in n && (o = "Webkit"), "KhtmlOpacity" in n && (o = "Khtml"),
                function(t) {
                    return o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                }
        }(),
        d = c("transform"),
        u = t("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== n,
        h = u ? function(t, e, i) {
            t.css({
                "background-position-x": e,
                "background-position-y": i
            })
        } : function(t, e, i) {
            t.css("background-position", e + " " + i)
        },
        p = u ? function(t) {
            return [t.css("background-position-x"), t.css("background-position-y")]
        } : function(t) {
            return t.css("background-position").split(" ")
        },
        f = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
            setTimeout(t, 1e3 / 60)
        };
    o.prototype = {
        init: function() {
            this.options.name = r + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement,
                this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var t = this,
                e = a[t.options.scrollProperty];
            this._getScrollLeft = function() {
                return e.getLeft(t.$scrollElement)
            }, this._getScrollTop = function() {
                return e.getTop(t.$scrollElement)
            }
        },
        _defineSetters: function() {
            var e = this,
                i = a[e.options.scrollProperty],
                n = l[e.options.positionProperty],
                o = i.setLeft,
                r = i.setTop;
            this._setScrollLeft = "function" == typeof o ? function(t) {
                o(e.$scrollElement, t)
            } : t.noop, this._setScrollTop = "function" == typeof r ? function(t) {
                r(e.$scrollElement, t)
            } : t.noop, this._setPosition = n.setPosition || function(t, i, o, r, s) {
                e.options.horizontalScrolling && n.setLeft(t, i, o), e.options.verticalScrolling && n.setTop(t, r, s)
            }
        },
        _handleWindowLoadAndResize: function() {
            var i = this,
                n = t(e);
            i.options.responsive && n.bind("load." + this.name, function() {
                i.refresh()
            }), n.bind("resize." + this.name, function() {
                i._detectViewport(), i.options.responsive && i.refresh()
            })
        },
        refresh: function(i) {
            var n = this,
                o = n._getScrollLeft(),
                r = n._getScrollTop();
            i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
                var t = n._getScrollLeft(),
                    e = n._getScrollTop();
                n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
            }), this._setScrollLeft(o), this._setScrollTop(r)
        },
        _detectViewport: function() {
            var t = this.$viewportElement.offset(),
                e = null !== t && t !== n;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
        },
        _findParticles: function() {
            var e = this;
            if (this._getScrollLeft(), this._getScrollTop(), this.particles !== n)
                for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var i, o, r, s, a, l, c, d, u, h = t(this),
                    p = 0,
                    f = 0,
                    g = 0,
                    m = 0;
                if (h.data("stellar-elementIsActive")) {
                    if (h.data("stellar-elementIsActive") !== this) return
                } else h.data("stellar-elementIsActive", this);
                e.options.showElement(h), h.data("stellar-startingLeft") ? (h.css("left", h.data("stellar-startingLeft")), h.css("top", h.data("stellar-startingTop"))) : (h.data("stellar-startingLeft", h.css("left")), h.data("stellar-startingTop", h.css("top"))), r = h.position().left, s = h.position().top, a = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10), l = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10), d = h.offset().left - a, u = h.offset().top - l, h.parents().each(function() {
                    var e = t(this);
                    return e.data("stellar-offset-parent") === !0 ? (p = g, f = m, c = e, !1) : (g += e.position().left, void(m += e.position().top))
                }), i = h.data("stellar-horizontal-offset") !== n ? h.data("stellar-horizontal-offset") : c !== n && c.data("stellar-horizontal-offset") !== n ? c.data("stellar-horizontal-offset") : e.horizontalOffset, o = h.data("stellar-vertical-offset") !== n ? h.data("stellar-vertical-offset") : c !== n && c.data("stellar-vertical-offset") !== n ? c.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                    $element: h,
                    $offsetParent: c,
                    isFixed: "fixed" === h.css("position"),
                    horizontalOffset: i,
                    verticalOffset: o,
                    startingPositionLeft: r,
                    startingPositionTop: s,
                    startingOffsetLeft: d,
                    startingOffsetTop: u,
                    parentOffsetLeft: p,
                    parentOffsetTop: f,
                    stellarRatio: h.data("stellar-ratio") !== n ? h.data("stellar-ratio") : 1,
                    width: h.outerWidth(!0),
                    height: h.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var e, i = this,
                o = this._getScrollLeft(),
                r = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
                var e, s, a, l, c, d, u, f = t(this),
                    g = p(f),
                    m = 0,
                    v = 0,
                    y = 0,
                    b = 0;
                if (f.data("stellar-backgroundIsActive")) {
                    if (f.data("stellar-backgroundIsActive") !== this) return
                } else f.data("stellar-backgroundIsActive", this);
                f.data("stellar-backgroundStartingLeft") ? h(f, f.data("stellar-backgroundStartingLeft"), f.data("stellar-backgroundStartingTop")) : (f.data("stellar-backgroundStartingLeft", g[0]), f.data("stellar-backgroundStartingTop", g[1])), a = "auto" === f.css("margin-left") ? 0 : parseInt(f.css("margin-left"), 10), l = "auto" === f.css("margin-top") ? 0 : parseInt(f.css("margin-top"), 10), c = f.offset().left - a - o, d = f.offset().top - l - r, f.parents().each(function() {
                    var e = t(this);
                    return e.data("stellar-offset-parent") === !0 ? (m = y, v = b, u = e, !1) : (y += e.position().left, void(b += e.position().top))
                }), e = f.data("stellar-horizontal-offset") !== n ? f.data("stellar-horizontal-offset") : u !== n && u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : i.horizontalOffset, s = f.data("stellar-vertical-offset") !== n ? f.data("stellar-vertical-offset") : u !== n && u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
                    $element: f,
                    $offsetParent: u,
                    isFixed: "fixed" === f.css("background-attachment"),
                    horizontalOffset: e,
                    verticalOffset: s,
                    startingValueLeft: g[0],
                    startingValueTop: g[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
                    startingPositionLeft: f.position().left,
                    startingPositionTop: f.position().top,
                    startingOffsetLeft: c,
                    startingOffsetTop: d,
                    parentOffsetLeft: m,
                    parentOffsetTop: v,
                    stellarRatio: f.data("stellar-background-ratio") === n ? 1 : f.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var t, e, i, n, o;
            for (o = this.particles.length - 1; o >= 0; o--) t = this.particles[o], e = t.$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (o = this.backgrounds.length - 1; o >= 0; o--) n = this.backgrounds[o], n.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), h(n.$element, n.startingValueLeft, n.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var i = this,
                n = t(e);
            n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function() {
                i.horizontalOffset = i.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function() {
                i.verticalOffset = i.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var t, e, i, n, o, r, s, a, l, c, d = this._getScrollLeft(),
                u = this._getScrollTop(),
                p = !0,
                f = !0;
            if (this.currentScrollLeft !== d || this.currentScrollTop !== u || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = d, this.currentScrollTop = u, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, c = this.particles.length - 1; c >= 0; c--) t = this.particles[c], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (r = (d + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = r - t.startingPositionLeft + t.startingOffsetLeft) : (r = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (s = (u + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = s - t.startingPositionTop + t.startingOffsetTop) : (s = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (f = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : d) && a < (t.isFixed ? 0 : d) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : u) && l < (t.isFixed ? 0 : u) + this.viewportHeight + this.viewportOffsetTop), f && p ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, r, t.startingPositionLeft, s, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                for (c = this.backgrounds.length - 1; c >= 0; c--) i = this.backgrounds[c], e = i.isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (d + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (u + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, h(i.$element, n, o)
            }
        },
        _handleScrollEvent: function() {
            var t = this,
                e = !1,
                i = function() {
                    t._repositionElements(), e = !1
                },
                n = function() {
                    e || (f(i), e = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, n), n()
        },
        _startAnimationLoop: function() {
            var t = this;
            this._animationLoop = function() {
                f(t._animationLoop), t._repositionElements()
            }, this._animationLoop()
        }
    }, t.fn[r] = function(e) {
        var i = arguments;
        return e === n || "object" == typeof e ? this.each(function() {
            t.data(this, "plugin_" + r) || t.data(this, "plugin_" + r, new o(this, e))
        }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
            var n = t.data(this, "plugin_" + r);
            n instanceof o && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + r, null)
        }) : void 0
    }, t[r] = function() {
        var i = t(e);
        return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
    }, t[r].scrollProperty = a, t[r].positionProperty = l, e.Stellar = o
}(jQuery, this, document), ! function(t) {
    var e = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        ariaLive: !0,
        ariaHidden: !0,
        keyboardEnabled: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        stopAutoOnClick: !1,
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: !1,
        onSliderLoad: function() {
            return !0
        },
        onSlideBefore: function() {
            return !0
        },
        onSlideAfter: function() {
            return !0
        },
        onSlideNext: function() {
            return !0
        },
        onSlidePrev: function() {
            return !0
        },
        onSliderResize: function() {
            return !0
        }
    };
    t.fn.bxSlider = function(n) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            t(this).bxSlider(n)
        }), this;
        var o = {},
            r = this,
            s = t(window).width(),
            a = t(window).height();
        if (!t(r).data("bxSlider")) {
            var l = function() {
                    t(r).data("bxSlider") || (o.settings = t.extend({}, e, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                        index: o.settings.startSlide
                    }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" === o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" !== o.settings.mode && function() {
                        for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++)
                            if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" === o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() {
                        t(this).data("origStyle", t(this).attr("style"))
                    }), c())
                },
                c = function() {
                    var e = o.children.eq(o.settings.startSlide);
                    r.wrap('<div class="' + o.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.settings.ariaLive && !o.settings.ticker && o.viewport.attr("aria-live", "polite"), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
                        width: "horizontal" === o.settings.mode ? 1e3 * o.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), o.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), o.viewport.parent().css({
                        maxWidth: p()
                    }), o.settings.pager || o.settings.controls || o.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), o.children.css({
                        float: "horizontal" === o.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), o.children.css("width", f()), "horizontal" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" === o.settings.mode && (o.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), o.children.eq(o.settings.startSlide).css({
                        zIndex: o.settings.slideZIndex,
                        display: "block"
                    })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && k(), o.active.last = o.settings.startSlide === m() - 1, o.settings.video && r.fitVids(), ("all" === o.settings.preloadImages || o.settings.ticker) && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.controls && S(), o.settings.auto && o.settings.autoControls && T(), o.settings.pager && w(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), d(e, u)
                },
                d = function(e, i) {
                    var n = e.find('img:not([src=""]), iframe').length,
                        o = 0;
                    return 0 === n ? void i() : void e.find('img:not([src=""]), iframe').each(function() {
                        t(this).one("load error", function() {
                            ++o === n && i()
                        }).each(function() {
                            this.complete && t(this).load()
                        })
                    })
                },
                u = function() {
                    if (o.settings.infiniteLoop && "fade" !== o.settings.mode && !o.settings.ticker) {
                        var e = "vertical" === o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                            i = o.children.slice(0, e).clone(!0).addClass("bx-clone"),
                            n = o.children.slice(-e).clone(!0).addClass("bx-clone");
                        o.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), r.append(i).prepend(n)
                    }
                    o.loader.remove(), y(), "vertical" === o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(h()), r.redrawSlider(), o.settings.onSliderLoad.call(r, o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", B), o.settings.auto && o.settings.autoStart && (m() > 1 || o.settings.autoSlideForOnePage) && W(), o.settings.ticker && O(), o.settings.pager && H(o.settings.startSlide), o.settings.controls && $(), o.settings.touchEnabled && !o.settings.ticker && j(), o.settings.keyboardEnabled && !o.settings.ticker && t(document).keydown(P)
                },
                h = function() {
                    var e = 0,
                        n = t();
                    if ("vertical" === o.settings.mode || o.settings.adaptiveHeight)
                        if (o.carousel) {
                            var r = 1 === o.settings.moveSlides ? o.active.index : o.active.index * v();
                            for (n = o.children.eq(r), i = 1; i <= o.settings.maxSlides - 1; i++) n = r + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(r + i))
                        } else n = o.children.eq(o.active.index);
                    else n = o.children;
                    return "vertical" === o.settings.mode ? (n.each(function(i) {
                        e += t(this).outerHeight()
                    }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                        return t(this).outerHeight(!1)
                    }).get()), "border-box" === o.viewport.css("box-sizing") ? e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom")) + parseFloat(o.viewport.css("border-top-width")) + parseFloat(o.viewport.css("border-bottom-width")) : "padding-box" === o.viewport.css("box-sizing") && (e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom"))), e
                },
                p = function() {
                    var t = "100%";
                    return o.settings.slideWidth > 0 && (t = "horizontal" === o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
                },
                f = function() {
                    var t = o.settings.slideWidth,
                        e = o.viewport.width();
                    if (0 === o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" === o.settings.mode) t = e;
                    else if (o.settings.maxSlides > 1 && "horizontal" === o.settings.mode) {
                        if (e > o.maxThreshold) return t;
                        e < o.minThreshold ? t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides : o.settings.shrinkItems && (t = Math.floor((e + o.settings.slideMargin) / Math.ceil((e + o.settings.slideMargin) / (t + o.settings.slideMargin)) - o.settings.slideMargin))
                    }
                    return t
                },
                g = function() {
                    var t = 1,
                        e = null;
                    return "horizontal" === o.settings.mode && o.settings.slideWidth > 0 ? o.viewport.width() < o.minThreshold ? t = o.settings.minSlides : o.viewport.width() > o.maxThreshold ? t = o.settings.maxSlides : (e = o.children.first().width() + o.settings.slideMargin, t = Math.floor((o.viewport.width() + o.settings.slideMargin) / e)) : "vertical" === o.settings.mode && (t = o.settings.minSlides), t
                },
                m = function() {
                    var t = 0,
                        e = 0,
                        i = 0;
                    if (o.settings.moveSlides > 0)
                        if (o.settings.infiniteLoop) t = Math.ceil(o.children.length / v());
                        else
                            for (; e < o.children.length;) ++t, e = i + g(), i += o.settings.moveSlides <= g() ? o.settings.moveSlides : g();
                    else t = Math.ceil(o.children.length / g());
                    return t
                },
                v = function() {
                    return o.settings.moveSlides > 0 && o.settings.moveSlides <= g() ? o.settings.moveSlides : g()
                },
                y = function() {
                    var t, e, i;
                    o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop ? "horizontal" === o.settings.mode ? (e = o.children.last(), t = e.position(), b(-(t.left - (o.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === o.settings.mode && (i = o.children.length - o.settings.minSlides, t = o.children.eq(i).position(), b(-t.top, "reset", 0)) : (t = o.children.eq(o.active.index * v()).position(), o.active.index === m() - 1 && (o.active.last = !0), void 0 !== t && ("horizontal" === o.settings.mode ? b(-t.left, "reset", 0) : "vertical" === o.settings.mode && b(-t.top, "reset", 0)))
                },
                b = function(e, i, n, s) {
                    var a, l;
                    o.usingCSS ? (l = "vertical" === o.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", r.css("-" + o.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (r.css(o.animProp, l), 0 !== n ? r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                        t(e.target).is(r) && (r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), I())
                    }) : I()) : "reset" === i ? r.css(o.animProp, l) : "ticker" === i && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, l), 0 !== n ? r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                        t(e.target).is(r) && (r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), D())
                    }) : (b(s.resetValue, "reset", 0), D()))) : (a = {}, a[o.animProp] = e, "slide" === i ? r.animate(a, n, o.settings.easing, function() {
                        I()
                    }) : "reset" === i ? r.css(o.animProp, e) : "ticker" === i && r.animate(a, n, "linear", function() {
                        b(s.resetValue, "reset", 0), D()
                    }))
                },
                x = function() {
                    for (var e = "", i = "", n = m(), r = 0; n > r; r++) i = "", o.settings.buildPager && t.isFunction(o.settings.buildPager) || o.settings.pagerCustom ? (i = o.settings.buildPager(r), o.pagerEl.addClass("bx-custom-pager")) : (i = r + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + r + '" class="bx-pager-link">' + i + "</a></div>";
                    o.pagerEl.html(e)
                },
                w = function() {
                    o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), x()), o.pagerEl.on("click touchend", "a", L)
                },
                S = function() {
                    o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click touchend", C), o.controls.prev.bind("click touchend", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
                },
                T = function() {
                    o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", E), o.controls.autoEl.on("click", ".bx-stop", _), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), M(o.settings.autoStart ? "stop" : "start")
                },
                k = function() {
                    o.children.each(function(e) {
                        var i = t(this).find("img:first").attr("title");
                        void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>")
                    })
                },
                C = function(t) {
                    t.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && r.stopAuto(), r.goToNextSlide())
                },
                z = function(t) {
                    t.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && r.stopAuto(), r.goToPrevSlide())
                },
                E = function(t) {
                    r.startAuto(), t.preventDefault()
                },
                _ = function(t) {
                    r.stopAuto(), t.preventDefault()
                },
                L = function(e) {
                    var i, n;
                    e.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && r.stopAuto(), i = t(e.currentTarget), void 0 !== i.attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index")), n !== o.active.index && r.goToSlide(n)))
                },
                H = function(e) {
                    var i = o.children.length;
                    return "short" === o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i)) : (o.pagerEl.find("a").removeClass("active"), void o.pagerEl.each(function(i, n) {
                        t(n).find("a").eq(e).addClass("active")
                    }))
                },
                I = function() {
                    if (o.settings.infiniteLoop) {
                        var t = "";
                        0 === o.active.index ? t = o.children.eq(0).position() : o.active.index === m() - 1 && o.carousel ? t = o.children.eq((m() - 1) * v()).position() : o.active.index === o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" === o.settings.mode ? b(-t.left, "reset", 0) : "vertical" === o.settings.mode && b(-t.top, "reset", 0))
                    }
                    o.working = !1, o.settings.onSlideAfter.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index)
                },
                M = function(t) {
                    o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                },
                $ = function() {
                    1 === m() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 === o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index === m() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
                },
                W = function() {
                    o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : (r.startAuto(), t(window).focus(function() {
                        r.startAuto()
                    }).blur(function() {
                        r.stopAuto()
                    })), o.settings.autoHover && r.hover(function() {
                        o.interval && (r.stopAuto(!0), o.autoPaused = !0)
                    }, function() {
                        o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
                    })
                },
                O = function() {
                    var e, i, n, s, a, l, c, d, u = 0;
                    "next" === o.settings.autoDirection ? r.append(o.children.clone().addClass("bx-clone")) : (r.prepend(o.children.clone().addClass("bx-clone")), e = o.children.first().position(), u = "horizontal" === o.settings.mode ? -e.left : -e.top), b(u, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && (o.usingCSS ? (s = "horizontal" === o.settings.mode ? 4 : 5, o.viewport.hover(function() {
                        i = r.css("-" + o.cssPrefix + "-transform"), n = parseFloat(i.split(",")[s]), b(n, "reset", 0)
                    }, function() {
                        d = 0, o.children.each(function(e) {
                            d += "horizontal" === o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        }), a = o.settings.speed / d, l = "horizontal" === o.settings.mode ? "left" : "top", c = a * (d - Math.abs(parseInt(n))), D(c)
                    })) : o.viewport.hover(function() {
                        r.stop()
                    }, function() {
                        d = 0, o.children.each(function(e) {
                            d += "horizontal" === o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        }), a = o.settings.speed / d, l = "horizontal" === o.settings.mode ? "left" : "top", c = a * (d - Math.abs(parseInt(r.css(l)))), D(c)
                    })), D()
                },
                D = function(t) {
                    var e, i, n, s = t ? t : o.settings.speed,
                        a = {
                            left: 0,
                            top: 0
                        },
                        l = {
                            left: 0,
                            top: 0
                        };
                    "next" === o.settings.autoDirection ? a = r.find(".bx-clone").first().position() : l = o.children.first().position(), e = "horizontal" === o.settings.mode ? -a.left : -a.top, i = "horizontal" === o.settings.mode ? -l.left : -l.top, n = {
                        resetValue: i
                    }, b(e, "ticker", s, n)
                },
                A = function(e) {
                    var i = t(window),
                        n = {
                            top: i.scrollTop(),
                            left: i.scrollLeft()
                        },
                        o = e.offset();
                    return n.right = n.left + i.width(), n.bottom = n.top + i.height(), o.right = o.left + e.outerWidth(), o.bottom = o.top + e.outerHeight(), !(n.right < o.left || n.left > o.right || n.bottom < o.top || n.top > o.bottom)
                },
                P = function(t) {
                    var e = document.activeElement.tagName.toLowerCase(),
                        i = "input|textarea",
                        n = new RegExp(e, ["i"]),
                        o = n.exec(i);
                    if (null == o && A(r)) {
                        if (39 === t.keyCode) return C(t), !1;
                        if (37 === t.keyCode) return z(t), !1
                    }
                },
                j = function() {
                    o.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, o.viewport.bind("touchstart MSPointerDown pointerdown", N), o.viewport.on("click", ".bxslider a", function(t) {
                        o.viewport.hasClass("click-disabled") && (t.preventDefault(), o.viewport.removeClass("click-disabled"))
                    })
                },
                N = function(t) {
                    if (o.controls.el.addClass("disabled"), o.working) t.preventDefault(), o.controls.el.removeClass("disabled");
                    else {
                        o.touch.originalPos = r.position();
                        var e = t.originalEvent,
                            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];
                        o.touch.start.x = i[0].pageX, o.touch.start.y = i[0].pageY, o.viewport.get(0).setPointerCapture && (o.pointerId = e.pointerId, o.viewport.get(0).setPointerCapture(o.pointerId)), o.viewport.bind("touchmove MSPointerMove pointermove", R), o.viewport.bind("touchend MSPointerUp pointerup", F), o.viewport.bind("MSPointerCancel pointercancel", q)
                    }
                },
                q = function(t) {
                    b(o.touch.originalPos.left, "reset", 0), o.controls.el.removeClass("disabled"), o.viewport.unbind("MSPointerCancel pointercancel", q), o.viewport.unbind("touchmove MSPointerMove pointermove", R), o.viewport.unbind("touchend MSPointerUp pointerup", F), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId)
                },
                R = function(t) {
                    var e = t.originalEvent,
                        i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
                        n = Math.abs(i[0].pageX - o.touch.start.x),
                        r = Math.abs(i[0].pageY - o.touch.start.y),
                        s = 0,
                        a = 0;
                    3 * n > r && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * r > n && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== o.settings.mode && o.settings.oneToOneTouch && ("horizontal" === o.settings.mode ? (a = i[0].pageX - o.touch.start.x, s = o.touch.originalPos.left + a) : (a = i[0].pageY - o.touch.start.y, s = o.touch.originalPos.top + a), b(s, "reset", 0))
                },
                F = function(t) {
                    o.viewport.unbind("touchmove MSPointerMove pointermove", R), o.controls.el.removeClass("disabled");
                    var e = t.originalEvent,
                        i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
                        n = 0,
                        s = 0;
                    o.touch.end.x = i[0].pageX, o.touch.end.y = i[0].pageY, "fade" === o.settings.mode ? (s = Math.abs(o.touch.start.x - o.touch.end.x), s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())) : ("horizontal" === o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, n = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, n = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 === o.active.index && s > 0 || o.active.last && 0 > s) ? b(n, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(n, "reset", 200)), o.viewport.unbind("touchend MSPointerUp pointerup", F), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId)
                },
                B = function(e) {
                    if (o.initialized)
                        if (o.working) window.setTimeout(B, 10);
                        else {
                            var i = t(window).width(),
                                n = t(window).height();
                            (s !== i || a !== n) && (s = i, a = n, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
                        }
                },
                X = function(t) {
                    var e = g();
                    o.settings.ariaHidden && !o.settings.ticker && (o.children.attr("aria-hidden", "true"), o.children.slice(t, t + e).attr("aria-hidden", "false"))
                },
                Y = function(t) {
                    return 0 > t ? o.settings.infiniteLoop ? m() - 1 : o.active.index : t >= m() ? o.settings.infiniteLoop ? 0 : o.active.index : t
                };
            return r.goToSlide = function(e, i) {
                var n, s, a, l, c = !0,
                    d = 0,
                    u = {
                        left: 0,
                        top: 0
                    },
                    p = null;
                if (o.oldIndex = o.active.index, o.active.index = Y(e), !o.working && o.active.index !== o.oldIndex) {
                    if (o.working = !0, c = o.settings.onSlideBefore.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index), "undefined" != typeof c && !c) return o.active.index = o.oldIndex, void(o.working = !1);
                    "next" === i ? o.settings.onSlideNext.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1) : "prev" === i && (o.settings.onSlidePrev.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1)), o.active.last = o.active.index >= m() - 1, (o.settings.pager || o.settings.pagerCustom) && H(o.active.index), o.settings.controls && $(), "fade" === o.settings.mode ? (o.settings.adaptiveHeight && o.viewport.height() !== h() && o.viewport.animate({
                        height: h()
                    }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                        zIndex: 0
                    }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
                        t(this).css("zIndex", o.settings.slideZIndex), I()
                    })) : (o.settings.adaptiveHeight && o.viewport.height() !== h() && o.viewport.animate({
                        height: h()
                    }, o.settings.adaptiveHeightSpeed), !o.settings.infiniteLoop && o.carousel && o.active.last ? "horizontal" === o.settings.mode ? (p = o.children.eq(o.children.length - 1), u = p.position(), d = o.viewport.width() - p.outerWidth()) : (n = o.children.length - o.settings.minSlides, u = o.children.eq(n).position()) : o.carousel && o.active.last && "prev" === i ? (s = 1 === o.settings.moveSlides ? o.settings.maxSlides - v() : (m() - 1) * v() - (o.children.length - o.settings.maxSlides), p = r.children(".bx-clone").eq(s), u = p.position()) : "next" === i && 0 === o.active.index ? (u = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1) : e >= 0 && (l = e * parseInt(v()), u = o.children.eq(l).position()), "undefined" != typeof u ? (a = "horizontal" === o.settings.mode ? -(u.left - d) : -u.top, b(a, "slide", o.settings.speed)) : o.working = !1), o.settings.ariaHidden && X(o.active.index * v())
                }
            }, r.goToNextSlide = function() {
                if (o.settings.infiniteLoop || !o.active.last) {
                    var t = parseInt(o.active.index) + 1;
                    r.goToSlide(t, "next")
                }
            }, r.goToPrevSlide = function() {
                if (o.settings.infiniteLoop || 0 !== o.active.index) {
                    var t = parseInt(o.active.index) - 1;
                    r.goToSlide(t, "prev")
                }
            }, r.startAuto = function(t) {
                o.interval || (o.interval = setInterval(function() {
                    "next" === o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
                }, o.settings.pause), o.settings.autoControls && t !== !0 && M("stop"))
            }, r.stopAuto = function(t) {
                o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && t !== !0 && M("start"))
            }, r.getCurrentSlide = function() {
                return o.active.index
            }, r.getCurrentSlideElement = function() {
                return o.children.eq(o.active.index)
            }, r.getSlideElement = function(t) {
                return o.children.eq(t)
            }, r.getSlideCount = function() {
                return o.children.length
            }, r.isWorking = function() {
                return o.working
            }, r.redrawSlider = function() {
                o.children.add(r.find(".bx-clone")).outerWidth(f()), o.viewport.css("height", h()), o.settings.ticker || y(), o.active.last && (o.active.index = m() - 1), o.active.index >= m() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (x(), H(o.active.index)), o.settings.ariaHidden && X(o.active.index * v())
            }, r.destroySlider = function() {
                o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
                    void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && !o.settings.pagerCustom && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", B), o.settings.keyboardEnabled && t(document).unbind("keydown", P), t(this).removeData("bxSlider"))
            }, r.reloadSlider = function(e) {
                void 0 !== e && (n = e), r.destroySlider(), l(), t(r).data("bxSlider", this)
            }, l(), t(r).data("bxSlider", this), this
        }
    }
}(jQuery), ! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    var e = -1,
        i = -1,
        n = function(t) {
            return parseFloat(t) || 0
        },
        o = function(e) {
            var i = 1,
                o = t(e),
                r = null,
                s = [];
            return o.each(function() {
                var e = t(this),
                    o = e.offset().top - n(e.css("margin-top")),
                    a = s.length > 0 ? s[s.length - 1] : null;
                null === a ? s.push(e) : Math.floor(Math.abs(r - o)) <= i ? s[s.length - 1] = a.add(e) : s.push(e), r = o
            }), s
        },
        r = function(e) {
            var i = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? t.extend(i, e) : ("boolean" == typeof e ? i.byRow = e : "remove" === e && (i.remove = !0), i)
        },
        s = t.fn.matchHeight = function(e) {
            var i = r(e);
            if (i.remove) {
                var n = this;
                return this.css(i.property, ""), t.each(s._groups, function(t, e) {
                    e.elements = e.elements.not(n)
                }), this
            }
            return this.length <= 1 && !i.target ? this : (s._groups.push({
                elements: this,
                options: i
            }), s._apply(this, i), this)
        };
    s.version = "0.7.0", s._groups = [], s._throttle = 80, s._maintainScroll = !1, s._beforeUpdate = null, s._afterUpdate = null, s._rows = o, s._parse = n, s._parseOptions = r, s._apply = function(e, i) {
        var a = r(i),
            l = t(e),
            c = [l],
            d = t(window).scrollTop(),
            u = t("html").outerHeight(!0),
            h = l.parents().filter(":hidden");
        return h.each(function() {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
        }), h.css("display", "block"), a.byRow && !a.target && (l.each(function() {
            var e = t(this),
                i = e.css("display");
            "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"), e.data("style-cache", e.attr("style")), e.css({
                display: i,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }), c = o(l), l.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
        })), t.each(c, function(e, i) {
            var o = t(i),
                r = 0;
            if (a.target) r = a.target.outerHeight(!1);
            else {
                if (a.byRow && o.length <= 1) return void o.css(a.property, "");
                o.each(function() {
                    var e = t(this),
                        i = e.attr("style"),
                        n = e.css("display");
                    "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                    var o = {
                        display: n
                    };
                    o[a.property] = "", e.css(o), e.outerHeight(!1) > r && (r = e.outerHeight(!1)), i ? e.attr("style", i) : e.css("display", "")
                })
            }
            o.each(function() {
                var e = t(this),
                    i = 0;
                a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (i += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), i += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(a.property, r - i + "px"))
            })
        }), h.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
        }), s._maintainScroll && t(window).scrollTop(d / u * t("html").outerHeight(!0)), this
    }, s._applyDataApi = function() {
        var e = {};
        t("[data-match-height], [data-mh]").each(function() {
            var i = t(this),
                n = i.attr("data-mh") || i.attr("data-match-height");
            n in e ? e[n] = e[n].add(i) : e[n] = i
        }), t.each(e, function() {
            this.matchHeight(!0)
        })
    };
    var a = function(e) {
        s._beforeUpdate && s._beforeUpdate(e, s._groups), t.each(s._groups, function() {
            s._apply(this.elements, this.options)
        }), s._afterUpdate && s._afterUpdate(e, s._groups)
    };
    s._update = function(n, o) {
        if (o && "resize" === o.type) {
            var r = t(window).width();
            if (r === e) return;
            e = r
        }
        n ? -1 === i && (i = setTimeout(function() {
            a(o), i = -1
        }, s._throttle)) : a(o)
    }, t(s._applyDataApi), t(window).bind("load", function(t) {
        s._update(!1, t)
    }), t(window).bind("resize orientationchange", function(t) {
        s._update(!0, t)
    })
}), ! function(t, e) {
    "use strict";

    function i(e) {
        return A.formatter = c, W = t("body"), M = I(), $ = M !== !1, $ || (M = "transitionend.boxer"), t(this).on("click.boxer", t.extend({}, A, e || {}), n)
    }

    function n(i) {
        if ("undefined" == typeof O.$boxer) {
            var n = t(this),
                r = i.data.$object,
                s = n[0].href ? n[0].href || "" : "",
                l = n[0].hash ? n[0].hash || "" : "",
                c = s.toLowerCase().split(".").pop().split(/\#|\?/),
                u = c[0],
                h = n.data("boxer-type") || "",
                f = "image" === h || t.inArray(u, i.data.extensions) > -1 || "data:image" === s.substr(0, 10),
                g = s.indexOf("youtube.com/embed") > -1 || s.indexOf("player.vimeo.com/video") > -1,
                S = "url" === h || !f && !g && "http" === s.substr(0, 4) && !l,
                T = "element" === h || !f && !g && !S && "#" === l.substr(0, 1),
                k = "undefined" != typeof r;
            if (T && (s = l), t("#boxer").length > 1 || !(f || g || S || T || k)) return;
            if (_(i), O = t.extend({}, {
                    $window: t(e),
                    $body: t("body"),
                    $target: n,
                    $object: r,
                    visible: !1,
                    resizeTimer: null,
                    touchTimer: null,
                    gallery: {
                        active: !1
                    },
                    isMobile: D || i.data.mobile,
                    isAnimating: !0,
                    oldContentHeight: 0,
                    oldContentWidth: 0
                }, i.data), O.margin *= 2, O.type = f ? "image" : g ? "video" : "element", f || g) {
                var C = O.$target.data("gallery") || O.$target.attr("rel");
                "undefined" != typeof C && C !== !1 && (O.gallery.active = !0, O.gallery.id = C, O.gallery.$items = t("a[data-gallery= " + O.gallery.id + "], a[rel= " + O.gallery.id + "]"), O.gallery.index = O.gallery.$items.index(O.$target), O.gallery.total = O.gallery.$items.length - 1)
            }
            var z = "";
            if (O.isMobile || (z += '<div id="boxer-overlay" class="' + O.customClass + '"></div>'), z += '<div id="boxer" class="loading animating ' + O.customClass, O.fixed && (z += " fixed"), O.isMobile && (z += " mobile"), S && (z += " iframe"), (T || k) && (z += " inline"), z += '">', z += '<span class="boxer-close">' + O.labels.close + "</span>", z += '<span class="boxer-loading"></span>', z += '<div class="boxer-container">', z += '<div class="boxer-content">', (f || g) && (z += '<div class="boxer-meta">', O.gallery.active ? (z += '<div class="boxer-control previous">' + O.labels.previous + "</div>", z += '<div class="boxer-control next">' + O.labels.next + "</div>", z += '<p class="boxer-position"', O.gallery.total < 1 && (z += ' style="display: none;"'), z += ">", z += '<span class="current">' + (O.gallery.index + 1) + "</span> " + O.labels.count + ' <span class="total">' + (O.gallery.total + 1) + "</span>", z += "</p>", z += '<div class="boxer-caption gallery">') : z += '<div class="boxer-caption">', z += O.formatter.apply(O.$body, [O.$target]), z += "</div></div>"), z += "</div></div></div>", O.$body.append(z), O.$overlay = t("#boxer-overlay"), O.$boxer = t("#boxer"), O.$container = O.$boxer.find(".boxer-container"), O.$content = O.$boxer.find(".boxer-content"), O.$meta = O.$boxer.find(".boxer-meta"), O.$position = O.$boxer.find(".boxer-position"), O.$caption = O.$boxer.find(".boxer-caption"), O.$controls = O.$boxer.find(".boxer-control"), O.paddingVertical = O.isMobile ? O.$boxer.find(".boxer-close").outerHeight() / 2 : parseInt(O.$boxer.css("paddingTop"), 10) + parseInt(O.$boxer.css("paddingBottom"), 10), O.paddingHorizontal = O.isMobile ? 0 : parseInt(O.$boxer.css("paddingLeft"), 10) + parseInt(O.$boxer.css("paddingRight"), 10), O.contentHeight = O.$boxer.outerHeight() - O.paddingVertical, O.contentWidth = O.$boxer.outerWidth() - O.paddingHorizontal, O.controlHeight = O.$controls.outerHeight(), a(), O.gallery.active && v(), O.$window.on("resize.boxer", P.resize).on("keydown.boxer", y), O.$body.on("touchstart.boxer click.boxer", "#boxer-overlay, #boxer .boxer-close", o).on("touchmove.boxer", _), O.gallery.active && O.$boxer.on("touchstart.boxer click.boxer", ".boxer-control", m), O.$boxer.on(M, function(e) {
                    _(e), t(e.target).is(O.$boxer) && (O.$boxer.off(M), f ? d(s) : g ? p(s) : S ? x(s) : T ? b(s) : k ? w(O.$object) : t.error("BOXER: '" + s + "' is not valid."))
                }), W.addClass("boxer-open"), $ || O.$boxer.trigger(M), k) return O.$boxer
        }
    }

    function o(e) {
        _(e), "undefined" != typeof O.$boxer && (O.$boxer.on(M, function(e) {
            _(e), t(e.target).is(O.$boxer) && (O.$boxer.off(M), O.$overlay.remove(), O.$boxer.remove(), O = {})
        }).addClass("animating"), W.removeClass("boxer-open"), $ || O.$boxer.trigger(M), H(O.resizeTimer), O.$window.off("resize.boxer").off("keydown.boxer"), O.$body.off(".boxer").removeClass("boxer-open"), O.gallery.active && O.$boxer.off(".boxer"), O.isMobile && "image" === O.type && O.gallery.active && O.$container.off(".boxer"), O.$window.trigger("close.boxer"))
    }

    function r() {
        var e = l();
        O.isMobile ? 0 : O.duration, O.isMobile || O.$controls.css({
            marginTop: (O.contentHeight - O.controlHeight - O.metaHeight) / 2
        }), !O.visible && O.isMobile && O.gallery.active && O.$content.on("touchstart.boxer", ".boxer-image", k), (O.isMobile || O.fixed) && O.$body.addClass("boxer-open"), O.$boxer.on(M, function(e) {
            _(e), t(e.target).is(O.$boxer) && (O.$boxer.off(M), O.$container.on(M, function(e) {
                _(e), t(e.target).is(O.$container) && (O.$container.off(M), O.$boxer.removeClass("animating"), O.isAnimating = !1)
            }), O.$boxer.removeClass("loading"), $ || O.$content.trigger(M), O.visible = !0, O.callback.apply(O.$boxer), O.$window.trigger("open.boxer"), O.gallery.active && g())
        }), O.isMobile || O.$boxer.css({
            height: O.contentHeight + O.paddingVertical,
            width: O.contentWidth + O.paddingHorizontal,
            top: O.fixed ? 0 : e.top
        });
        var i = O.oldContentHeight !== O.contentHeight || O.oldContentWidth !== O.contentWidth;
        !O.isMobile && $ && i || O.$boxer.trigger(M), O.oldContentHeight = O.contentHeight, O.oldContentWidth = O.contentWidth
    }

    function s() {
        if (O.visible && !O.isMobile) {
            var t = l();
            O.$controls.css({
                marginTop: (O.contentHeight - O.controlHeight - O.metaHeight) / 2
            }), O.$boxer.css({
                height: O.contentHeight + O.paddingVertical,
                width: O.contentWidth + O.paddingHorizontal,
                top: O.fixed ? 0 : t.top
            })
        }
    }

    function a() {
        var t = l();
        O.$boxer.css({
            top: O.fixed ? 0 : t.top
        })
    }

    function l() {
        if (O.isMobile) return {
            left: 0,
            top: 0
        };
        var t = {
            left: (O.$window.width() - O.contentWidth - O.paddingHorizontal) / 2,
            top: O.top <= 0 ? (O.$window.height() - O.contentHeight - O.paddingVertical) / 2 : O.top
        };
        return O.fixed !== !0 && (t.top += O.$window.scrollTop()), t
    }

    function c(t) {
        var e = t.attr("title");
        return void 0 !== e && "" !== e.trim() ? '<p class="caption">' + e.trim() + "</p>" : ""
    }

    function d(e) {
        O.$image = t("<img />"), O.$image.load(function() {
            O.$image.off("load, error");
            var t = E(O.$image);
            O.naturalHeight = t.naturalHeight, O.naturalWidth = t.naturalWidth, O.retina && (O.naturalHeight /= 2, O.naturalWidth /= 2), O.$content.prepend(O.$image), "" === O.$caption.html() ? O.$caption.hide() : O.$caption.show(), u(), r()
        }).error(T).attr("src", e).addClass("boxer-image"), (O.$image[0].complete || 4 === O.$image[0].readyState) && O.$image.trigger("load")
    }

    function u() {
        var t = 0;
        for (O.windowHeight = O.viewportHeight = O.$window.height() - O.paddingVertical, O.windowWidth = O.viewportWidth = O.$window.width() - O.paddingHorizontal, O.contentHeight = 1 / 0, O.contentWidth = 1 / 0, O.imageMarginTop = 0, O.imageMarginLeft = 0; O.contentHeight > O.viewportHeight && 2 > t;) O.imageHeight = 0 === t ? O.naturalHeight : O.$image.outerHeight(), O.imageWidth = 0 === t ? O.naturalWidth : O.$image.outerWidth(), O.metaHeight = 0 === t ? 0 : O.metaHeight, 0 === t && (O.ratioHorizontal = O.imageHeight / O.imageWidth, O.ratioVertical = O.imageWidth / O.imageHeight, O.isWide = O.imageWidth > O.imageHeight), O.imageHeight < O.minHeight && (O.minHeight = O.imageHeight), O.imageWidth < O.minWidth && (O.minWidth = O.imageWidth), O.isMobile ? (O.$meta.css({
            width: O.windowWidth
        }), O.metaHeight = O.$meta.outerHeight(!0), O.contentHeight = O.viewportHeight - O.paddingVertical, O.contentWidth = O.viewportWidth - O.paddingHorizontal, h(), O.imageMarginTop = (O.contentHeight - O.targetImageHeight - O.metaHeight) / 2, O.imageMarginLeft = (O.contentWidth - O.targetImageWidth) / 2) : (0 === t && (O.viewportHeight -= O.margin + O.paddingVertical, O.viewportWidth -= O.margin + O.paddingHorizontal), O.viewportHeight -= O.metaHeight, h(), O.contentHeight = O.targetImageHeight, O.contentWidth = O.targetImageWidth), O.$meta.css({
            width: O.contentWidth
        }), O.$image.css({
            height: O.targetImageHeight,
            width: O.targetImageWidth,
            marginTop: O.imageMarginTop,
            marginLeft: O.imageMarginLeft
        }), O.isMobile || (O.metaHeight = O.$meta.outerHeight(!0), O.contentHeight += O.metaHeight), t++
    }

    function h() {
        var t = O.isMobile ? O.contentHeight - O.metaHeight : O.viewportHeight,
            e = O.isMobile ? O.contentWidth : O.viewportWidth;
        O.isWide ? (O.targetImageWidth = e, O.targetImageHeight = O.targetImageWidth * O.ratioHorizontal, O.targetImageHeight > t && (O.targetImageHeight = t, O.targetImageWidth = O.targetImageHeight * O.ratioVertical)) : (O.targetImageHeight = t, O.targetImageWidth = O.targetImageHeight * O.ratioVertical, O.targetImageWidth > e && (O.targetImageWidth = e, O.targetImageHeight = O.targetImageWidth * O.ratioHorizontal)), (O.targetImageWidth > O.imageWidth || O.targetImageHeight > O.imageHeight) && (O.targetImageHeight = O.imageHeight, O.targetImageWidth = O.imageWidth), (O.targetImageWidth < O.minWidth || O.targetImageHeight < O.minHeight) && (O.targetImageWidth < O.minWidth ? (O.targetImageWidth = O.minWidth, O.targetImageHeight = O.targetImageWidth * O.ratioHorizontal) : (O.targetImageHeight = O.minHeight, O.targetImageWidth = O.targetImageHeight * O.ratioVertical))
    }

    function p(e) {
        O.$videoWrapper = t('<div class="boxer-video-wrapper" />'), O.$video = t('<iframe class="boxer-video" seamless="seamless" />'), O.$video.attr("src", e).addClass("boxer-video").prependTo(O.$videoWrapper), O.$content.prepend(O.$videoWrapper), f(), r()
    }

    function f() {
        O.windowHeight = O.viewportHeight = O.contentHeight = O.$window.height() - O.paddingVertical, O.windowWidth = O.viewportWidth = O.contentWidth = O.$window.width() - O.paddingHorizontal, O.videoMarginTop = 0, O.videoMarginLeft = 0, O.isMobile ? (O.$meta.css({
            width: O.windowWidth
        }), O.metaHeight = O.$meta.outerHeight(!0), O.viewportHeight -= O.metaHeight, O.targetVideoWidth = O.viewportWidth, O.targetVideoHeight = O.targetVideoWidth * O.videoRatio, O.targetVideoHeight > O.viewportHeight && (O.targetVideoHeight = O.viewportHeight, O.targetVideoWidth = O.targetVideoHeight / O.videoRatio), O.videoMarginTop = (O.viewportHeight - O.targetVideoHeight) / 2, O.videoMarginLeft = (O.viewportWidth - O.targetVideoWidth) / 2) : (O.viewportHeight = O.windowHeight - O.margin, O.viewportWidth = O.windowWidth - O.margin, O.targetVideoWidth = O.videoWidth > O.viewportWidth ? O.viewportWidth : O.videoWidth, O.targetVideoWidth < O.minWidth && (O.targetVideoWidth = O.minWidth), O.targetVideoHeight = O.targetVideoWidth * O.videoRatio, O.contentHeight = O.targetVideoHeight, O.contentWidth = O.targetVideoWidth), O.$meta.css({
            width: O.contentWidth
        }), O.$videoWrapper.css({
            height: O.targetVideoHeight,
            width: O.targetVideoWidth,
            marginTop: O.videoMarginTop,
            marginLeft: O.videoMarginLeft
        }), O.isMobile || (O.metaHeight = O.$meta.outerHeight(!0), O.contentHeight = O.targetVideoHeight + O.metaHeight)
    }

    function g(e) {
        var i = "";
        O.gallery.index > 0 && (i = O.gallery.$items.eq(O.gallery.index - 1).attr("href"), i.indexOf("youtube.com/embed") < 0 && i.indexOf("player.vimeo.com/video") < 0 && t('<img src="' + i + '">')), O.gallery.index < O.gallery.total && (i = O.gallery.$items.eq(O.gallery.index + 1).attr("href"), i.indexOf("youtube.com/embed") < 0 && i.indexOf("player.vimeo.com/video") < 0 && t('<img src="' + i + '">'))
    }

    function m(e) {
        _(e);
        var i = t(this);
        O.isAnimating || i.hasClass("disabled") || (O.isAnimating = !0, O.gallery.index += i.hasClass("next") ? 1 : -1, O.gallery.index > O.gallery.total && (O.gallery.index = O.gallery.total), O.gallery.index < 0 && (O.gallery.index = 0), O.$container.on(M, function(e) {
            if (_(e), t(e.target).is(O.$container)) {
                O.$container.off(M), "undefined" != typeof O.$image && O.$image.remove(), "undefined" != typeof O.$videoWrapper && O.$videoWrapper.remove(), O.$target = O.gallery.$items.eq(O.gallery.index), O.$caption.html(O.formatter.apply(O.$body, [O.$target])), O.$position.find(".current").html(O.gallery.index + 1);
                var i = O.$target.attr("href"),
                    n = i.indexOf("youtube.com/embed") > -1 || i.indexOf("player.vimeo.com/video") > -1;
                n ? p(i) : d(i), v()
            }
        }), O.$boxer.addClass("loading animating"), $ || O.$content.trigger(M))
    }

    function v() {
        O.$controls.removeClass("disabled"), 0 === O.gallery.index && O.$controls.filter(".previous").addClass("disabled"), O.gallery.index === O.gallery.total && O.$controls.filter(".next").addClass("disabled")
    }

    function y(t) {
        !O.gallery.active || 37 !== t.keyCode && 39 !== t.keyCode ? 27 === t.keyCode && O.$boxer.find(".boxer-close").trigger("click") : (_(t), O.$controls.filter(37 === t.keyCode ? ".previous" : ".next").trigger("click"))
    }

    function b(e) {
        var i = t(e).find(">:first-child").clone();
        w(i)
    }

    function x(e) {
        e += e.indexOf("?") > -1 ? "&" + A.requestKey + "=true" : "?" + A.requestKey + "=true";
        var i = t('<iframe class="boxer-iframe" src="' + e + '" />');
        w(i)
    }

    function w(t) {
        O.$content.append(t), S(t), r()
    }

    function S(t) {
        O.windowHeight = O.$window.height() - O.paddingVertical, O.windowWidth = O.$window.width() - O.paddingHorizontal, O.objectHeight = t.outerHeight(!0), O.objectWidth = t.outerWidth(!0), O.targetHeight = O.targetHeight || O.$target.data("boxer-height"), O.targetWidth = O.targetWidth || O.$target.data("boxer-width"), O.maxHeight = O.windowHeight < 0 ? A.minHeight : O.windowHeight, O.isIframe = t.is("iframe"), O.objectMarginTop = 0, O.objectMarginLeft = 0, O.isMobile || (O.windowHeight -= O.margin, O.windowWidth -= O.margin), O.contentHeight = void 0 !== O.targetHeight ? O.targetHeight : O.isIframe || O.isMobile ? O.windowHeight : O.objectHeight, O.contentWidth = void 0 !== O.targetWidth ? O.targetWidth : O.isIframe || O.isMobile ? O.windowWidth : O.objectWidth, (O.isIframe || O.isObject) && O.isMobile ? (O.contentHeight = O.windowHeight, O.contentWidth = O.windowWidth) : O.isObject && (O.contentHeight = O.contentHeight > O.windowHeight ? O.windowHeight : O.contentHeight, O.contentWidth = O.contentWidth > O.windowWidth ? O.windowWidth : O.contentWidth)
    }

    function T(e) {
        var i = t('<div class="boxer-error"><p>Error Loading Resource</p></div>');
        O.type = "element", O.$meta.remove(), O.$image.off("load, error"), w(i)
    }

    function k(t) {
        if (_(t), H(O.touchTimer), !O.isAnimating) {
            var e = "undefined" != typeof t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0] : null;
            O.xStart = e ? e.pageX : t.clientX, O.leftPosition = 0, O.touchMax = 1 / 0, O.touchMin = -(1 / 0), O.edge = .25 * O.contentWidth, 0 === O.gallery.index && (O.touchMax = 0), O.gallery.index === O.gallery.total && (O.touchMin = 0), O.$boxer.on("touchmove.boxer", C).one("touchend.boxer", z)
        }
    }

    function C(t) {
        var e = "undefined" != typeof t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0] : null;
        O.delta = O.xStart - (e ? e.pageX : t.clientX), O.delta > 20 && _(t), O.canSwipe = !0;
        var i = -O.delta;
        i < O.touchMin && (i = O.touchMin, O.canSwipe = !1), i > O.touchMax && (i = O.touchMax, O.canSwipe = !1), O.$image.css({
            transform: "translate3D(" + i + "px,0,0)"
        }), O.touchTimer = L(O.touchTimer, 300, function() {
            z(t)
        })
    }

    function z(t) {
        _(t), H(O.touchTimer), O.$boxer.off("touchmove.boxer touchend.boxer"), O.delta && (O.$boxer.addClass("animated"), O.swipe = !1, O.canSwipe && (O.delta > O.edge || O.delta < -O.edge) ? (O.swipe = !0, O.$image.css(O.delta <= O.leftPosition ? {
            transform: "translate3D(" + O.contentWidth + "px,0,0)"
        } : {
            transform: "translate3D(" + -O.contentWidth + "px,0,0)"
        })) : O.$image.css({
            transform: "translate3D(0,0,0)"
        }), O.swipe && O.$controls.filter(O.delta <= O.leftPosition ? ".previous" : ".next").trigger("click"), L(O.resetTimer, O.duration, function() {
            O.$boxer.removeClass("animated")
        }))
    }

    function E(t) {
        var e = t[0],
            i = new Image;
        return "undefined" != typeof e.naturalHeight ? {
            naturalHeight: e.naturalHeight,
            naturalWidth: e.naturalWidth
        } : "img" === e.tagName.toLowerCase() && (i.src = e.src, {
            naturalHeight: i.height,
            naturalWidth: i.width
        })
    }

    function _(t) {
        t.preventDefault && (t.stopPropagation(), t.preventDefault())
    }

    function L(t, e, i) {
        return H(t), setTimeout(i, e)
    }

    function H(t) {
        t && (clearTimeout(t), t = null)
    }

    function I() {
        var t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            },
            e = document.createElement("div");
        for (var i in t)
            if (t.hasOwnProperty(i) && i in e.style) return t[i];
        return !1
    }
    var M, $, W = null,
        O = {},
        D = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(e.navigator.userAgent || e.navigator.vendor || e.opera),
        A = {
            callback: t.noop,
            customClass: "",
            extensions: ["jpg", "sjpg", "jpeg", "png", "gif"],
            fixed: !1,
            formatter: t.noop,
            labels: {
                close: "Close",
                count: "of",
                next: "Next",
                previous: "Previous"
            },
            margin: 50,
            minHeight: 100,
            minWidth: 100,
            mobile: !1,
            opacity: .75,
            retina: !1,
            requestKey: "boxer",
            top: 0,
            videoRatio: .5625,
            videoWidth: 600
        },
        P = {
            close: function() {
                "undefined" != typeof O.$boxer && (O.$boxer.off(".boxer"), O.$overlay.trigger("click"))
            },
            defaults: function(e) {
                return A = t.extend(A, e || {}), "object" == typeof this && t(this)
            },
            destroy: function() {
                return t(this).off(".boxer")
            },
            resize: function(e) {
                return "undefined" != typeof O.$boxer && ("object" != typeof e && (O.targetHeight = arguments[0], O.targetWidth = arguments[1]), "element" === O.type ? S(O.$content.find(">:first-child")) : "image" === O.type ? u() : "video" === O.type && f(), s()), t(this)
            }
        };
    t.fn.boxer = function(t) {
        return P[t] ? P[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? this : i.apply(this, arguments)
    }, t.boxer = function(i, o) {
        return P[i] ? P[i].apply(e, Array.prototype.slice.call(arguments, 1)) : i instanceof t ? n.apply(e, [{
            data: t.extend({
                $object: i
            }, A, o || {})
        }]) : void 0
    }
}(jQuery, window),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    function e(t, e) {
        return t.toFixed(e.decimals)
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, this.dataOptions(), n), this.init()
    };
    i.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: e,
        onUpdate: null,
        onComplete: null
    }, i.prototype.init = function() {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, i.prototype.dataOptions = function() {
        var t = {
                from: this.$element.data("from"),
                to: this.$element.data("to"),
                speed: this.$element.data("speed"),
                refreshInterval: this.$element.data("refresh-interval"),
                decimals: this.$element.data("decimals")
            },
            e = Object.keys(t);
        for (var i in e) {
            var n = e[i];
            "undefined" == typeof t[n] && delete t[n]
        }
        return t
    }, i.prototype.update = function() {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, i.prototype.render = function() {
        var t = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(t)
    }, i.prototype.restart = function() {
        this.stop(), this.init(), this.start()
    }, i.prototype.start = function() {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, i.prototype.stop = function() {
        this.interval && clearInterval(this.interval)
    }, i.prototype.toggle = function() {
        this.interval ? this.stop() : this.start()
    }, t.fn.countTo = function(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("countTo"),
                r = !o || "object" == typeof e,
                s = "object" == typeof e ? e : {},
                a = "string" == typeof e ? e : "start";
            r && (o && o.stop(), n.data("countTo", o = new i(this, s))), o[a].call(o)
        })
    }
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";

    function e(e) {
        return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function i(e) {
        return t.isFunction(e) || t.isPlainObject(e) ? e : {
            top: e,
            left: e
        }
    }
    var n = t.scrollTo = function(e, i, n) {
        return t(window).scrollTo(e, i, n)
    };
    return n.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    }, t.fn.scrollTo = function(o, r, s) {
        "object" == typeof r && (s = r, r = 0), "function" == typeof s && (s = {
            onAfter: s
        }), "max" === o && (o = 9e9), s = t.extend({}, n.defaults, s), r = r || s.duration;
        var a = s.queue && 1 < s.axis.length;
        return a && (r /= 2), s.offset = i(s.offset), s.over = i(s.over), this.each(function() {
            function l(e) {
                var i = t.extend({}, s, {
                    queue: !0,
                    duration: r,
                    complete: e && function() {
                        e.call(u, p, s)
                    }
                });
                h.animate(f, i)
            }
            if (null !== o) {
                var c, d = e(this),
                    u = d ? this.contentWindow || window : this,
                    h = t(u),
                    p = o,
                    f = {};
                switch (typeof p) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                            p = i(p);
                            break
                        }
                        p = d ? t(p) : t(p, u);
                    case "object":
                        if (0 === p.length) return;
                        (p.is || p.style) && (c = (p = t(p)).offset())
                }
                var g = t.isFunction(s.offset) && s.offset(u, p) || s.offset;
                t.each(s.axis.split(""), function(t, e) {
                    var i = "x" === e ? "Left" : "Top",
                        o = i.toLowerCase(),
                        r = "scroll" + i,
                        m = h[r](),
                        v = n.max(u, e);
                    c ? (f[r] = c[o] + (d ? 0 : m - h.offset()[o]), s.margin && (f[r] -= parseInt(p.css("margin" + i), 10) || 0, f[r] -= parseInt(p.css("border" + i + "Width"), 10) || 0), f[r] += g[o] || 0, s.over[o] && (f[r] += p["x" === e ? "width" : "height"]() * s.over[o])) : (i = p[o], f[r] = i.slice && "%" === i.slice(-1) ? parseFloat(i) / 100 * v : i), s.limit && /^\d+$/.test(f[r]) && (f[r] = 0 >= f[r] ? 0 : Math.min(f[r], v)), !t && 1 < s.axis.length && (m === f[r] ? f = {} : a && (l(s.onAfterFirst), f = {}))
                }), l(s.onAfter)
            }
        })
    }, n.max = function(i, n) {
        var o = "x" === n ? "Width" : "Height",
            r = "scroll" + o;
        if (!e(i)) return i[r] - t(i)[o.toLowerCase()]();
        var o = "client" + o,
            s = i.ownerDocument || i.document,
            a = s.documentElement,
            s = s.body;
        return Math.max(a[r], s[r]) - Math.min(a[o], s[o])
    }, t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = {
        get: function(e) {
            return t(e.elem)[e.prop]()
        },
        set: function(e) {
            var i = this.get(e);
            if (e.options.interrupt && e._last && e._last !== i) return t(e.elem).stop();
            var n = Math.round(e.now);
            i !== n && (t(e.elem)[e.prop](n), e._last = this.get(e))
        }
    }, n
});
var $window = $(window);
! function(t, e) {
    var i = function(t, e, i) {
        var n;
        return function() {
            function o() {
                i || t.apply(r, s), n = null
            }
            var r = this,
                s = arguments;
            n ? clearTimeout(n) : i && t.apply(r, s), n = setTimeout(o, e || 100)
        }
    };
    jQuery.fn[e] = function(t) {
        return t ? this.bind("resize", i(t)) : this.trigger(e)
    }
}(jQuery, "smartresize"), $(document).ready(function() {
    _main_menu(), _bx_slider(), _isotope_sorting(), _g_map(), _parallax(), _scrollTop(), _scrollBottom(), _accordion(), _tabs(), $().appear && ($(".skill-item").appear(function() {
        var t = $(this);
        setTimeout(function() {
            _skills(t)
        }, 200)
    }), $(".counter-item").appear(function() {
        var t = $(this);
        setTimeout(function() {
            _count(t)
        }, 200)
    })), _gall(), _equal_height()
}), $window.load(function() {
    var t = $(".js-isotope");
    t.length && t.isotope("layout")
});
//# sourceMappingURL=main.min.js.map