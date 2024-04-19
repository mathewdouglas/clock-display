!(function (t) {
    function e(o) {
        if (r[o]) return r[o].exports;
        var n = (r[o] = { i: o, l: !1, exports: {} });
        return t[o].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
    }
    var r = {};
    (e.m = t),
        (e.c = r),
        (e.d = function (t, r, o) {
            e.o(t, r) ||
                Object.defineProperty(t, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: o,
                });
        }),
        (e.n = function (t) {
            var r =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return e.d(r, "a", r), r;
        }),
        (e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (e.p = ""),
        e((e.s = 3));
})([
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                      },
            n = (e.setStyles = function (t, e) {
                var r = t.style;
                for (var o in e) r[o] = e[o];
                return t;
            }),
            i = ["className", "innerHTML"],
            u = (e.setAttributes = function (t, e) {
                for (var r in e) {
                    var u = e[r];
                    "ref" !== r
                        ? "style" !== r || "string" == typeof u
                            ? !(function (t, e) {
                                  var r = void 0 === e ? "undefined" : o(e);
                                  return (
                                      "object" === r ||
                                      "function" === r ||
                                      i.indexOf(t) > -1
                                  );
                              })(r, u)
                                ? null !== u
                                    ? t.setAttribute(r, u)
                                    : t.removeAttribute(r)
                                : (t[r] = u)
                            : n(t, u)
                        : u(t);
                }
                return t;
            });
        e.h = function (t, e) {
            for (
                var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), n = 2;
                n < r;
                n++
            )
                o[n - 2] = arguments[n];
            if ("function" == typeof t) return (e.children = o), t(e);
            var i = document.createElement(t);
            e && u(i, e);
            for (var a = 0, f = o.length; a < f; a++) {
                var s = o[a];
                "string" == typeof s && (s = document.createTextNode(s)),
                    i.appendChild(s);
            }
            return i;
        };
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.default = function (t) {
            return ((360 * t) % 360) / 360;
        };
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.default = function (t) {
            return "function" == typeof t ? t() : t;
        };
    },
    function (t, e, r) {
        "use strict";
        function o(t) {
            return t && t.__esModule ? t : { default: t };
        }
        var n = o(r(4)),
            i = o(r(10)),
            u = o(r(11)),
            a = o(r(12)),
            f = o(r(13)),
            s = o(r(14)),
            l = o(r(15)),
            c = o(r(16)),
            d = o(r(17)),
            p = o(r(24)),
            h = (0, i.default)(24, 12),
            v = (0, f.default)(24, 12),
            g = [
                (0, p.default)(2e3),
                (0, d.default)(24, 12),
                (0, l.default)((0, u.default)(24, 12)),
                (0, s.default)(24, 12),
                (0, l.default)(function () {
                    return (0, f.default)(24, 12);
                }),
                (0, p.default)(2e3),
                (0, c.default)((0, a.default)(24, 12, 1 / 8)),
                (0, p.default)(2e3),
                (0, c.default)((0, a.default)(24, 12, -1 / 8)),
            ],
            b = document.querySelector(".clock");
        (0, n.default)(b, {
            columns: 24,
            rows: 12,
            velocities: h,
            values: v,
            runners: g,
            debug: !1,
            debugTarget: "values",
        });
    },
    function (t, e, r) {
        "use strict";
        function o(t) {
            return t && t.__esModule ? t : { default: t };
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = o(r(5)),
            i = o(r(9));
        e.default = function (t) {
            var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                r = e.columns,
                o = void 0 === r ? 10 : r,
                u = e.rows,
                a = void 0 === u ? 10 : u,
                f = e.runners,
                s = void 0 === f ? [] : f,
                l = e.clockSize,
                c = void 0 === l ? 50 : l,
                d = e.pointerSize,
                p = void 0 === d ? 4 : d,
                h = e.velocities,
                v = void 0 === h ? [] : h,
                g = e.values,
                b = void 0 === g ? [] : g,
                y = e.debug,
                m = void 0 !== y && y,
                M = e.debugTarget,
                _ = void 0 === M ? "values" : M,
                w = e.backgroundColor,
                S = void 0 === w ? "#f7f7f7" : w,
                x = e.clockColorStopTop,
                C = void 0 === x ? "#eee" : x,
                j = e.clockColorStopBottom,
                A = void 0 === j ? "#fff" : j,
                k = e.pointerColor,
                P = void 0 === k ? "#000" : k,
                z = e.debugColor,
                O = void 0 === z ? "#000" : z,
                T = e.debugColor2,
                B = void 0 === T ? "#0289bd" : T,
                F = e.debugColorText,
                R = void 0 === F ? "#fff" : F,
                D = e.createRenderer,
                q = (void 0 === D ? n.default : D)(t, {
                    columns: o,
                    rows: a,
                    clockSize: c,
                    pointerSize: p,
                    debug: m,
                    debugTarget: _,
                    backgroundColor: S,
                    clockColorStopTop: C,
                    clockColorStopBottom: A,
                    pointerColor: P,
                    debugColor: O,
                    debugColor2: B,
                    debugColorText: R,
                });
            (window.getValues = function () {
                return b.toString();
            }),
                (window.getVelocities = function () {
                    return v.toString();
                }),
                (window.getState = function () {
                    return (
                        "const values = [" +
                        b.toString() +
                        "];\nconst velocities = [" +
                        v.toString() +
                        "]"
                    );
                });
            var I = 0,
                U = void 0,
                L = void 0,
                E = void 0,
                N = a * o * 2,
                V = function () {
                    I === s.length && (I = 0),
                        console.log("Initialized runner with idx " + I);
                    var t = s[I++];
                    (U = t()), (E = Date.now()), (L = 0);
                };
            V();
            requestAnimationFrame(function t() {
                var e = 0,
                    r = 0;
                L = Date.now() - E;
                for (var n = 0; n < a; n++)
                    for (var u = 0; u < o; u++) {
                        var f = b[e] || 0,
                            s = b[e + 1] || 0,
                            l = v[e] || 0,
                            c = v[e + 1] || 0,
                            d = U(u, n, e, 0, f, l, L);
                        (0, i.default)(d) ? r++ : (l = d);
                        var p = U(u, n, e + 1, 1, s, c, L);
                        (0, i.default)(p) ? r++ : (c = p),
                            (b[e] = f + l),
                            (b[e + 1] = s + c),
                            (v[e] = l),
                            (v[e + 1] = c),
                            (e += 2);
                    }
                r >= N && V(), q(b, v), requestAnimationFrame(t);
            });
        };
    },
    function (t, e, r) {
        "use strict";
        function o(t) {
            return t && t.__esModule ? t : { default: t };
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = o(r(6)),
            i = o(r(8));
        e.default = function (t) {
            var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                r = e.columns,
                o = e.rows,
                u = e.clockSize,
                a = e.pointerSize,
                f = e.debug,
                s = e.debugTarget,
                l = e.backgroundColor,
                c = e.clockColorStopTop,
                d = e.clockColorStopBottom,
                p = e.pointerColor,
                h = e.debugColor,
                v = e.debugColor2,
                g = e.debugColorText;
            t.style.backgroundColor = l;
            var b = (0, n.default)(r, o, {
                clockSize: u,
                pointerSize: a,
                clockColorStopTop: c,
                clockColorStopBottom: d,
                pointerColor: p,
                debug: f,
                debugColor: h,
                debugColor2: v,
            });
            t.appendChild(b.el());
            var y = void 0;
            return (
                f &&
                    ((y = (0, i.default)(r, o, {
                        clockSize: u,
                        pointerSize: a,
                        debugColor: h,
                        debugColor2: v,
                        debugColorText: g,
                    })),
                    t.appendChild(y.el())),
                function (t, e) {
                    if ((b.set(t), f)) {
                        var r = "values" === s ? t : e;
                        y.set(r);
                    }
                }
            );
        };
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = r(0),
            n = (function (t) {
                return t && t.__esModule ? t : { default: t };
            })(r(7)),
            i = 2 * Math.PI,
            u = function (t, e, r, o, n, i, u) {
                t.beginPath(),
                    (t.strokeStyle = u),
                    (t.lineWidth = i),
                    t.moveTo(e, r),
                    t.lineTo(o, n),
                    t.stroke();
            };
        e.default = function (t, e) {
            var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                a = r.clockSize,
                f = r.pointerSize,
                s = r.clockColorStopTop,
                l = r.clockColorStopBottom,
                c = r.pointerColor,
                d = r.debugColor,
                p = r.debugColor2,
                h = r.debug,
                v = t * a + (t - 1) * f,
                g = e * a + (e - 1) * f,
                b = (0, n.default)(v, g),
                y = b.getContext("2d"),
                m = (0, n.default)(v, g),
                M = m.getContext("2d"),
                _ = {
                    position: "relative",
                    width: v + "px",
                    height: g + "px",
                    margin: "0 auto",
                },
                w = (0, o.h)("div", { style: _ }, b, m);
            return (
                (function (t) {
                    for (
                        var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            r = e.columns,
                            o = e.rows,
                            n = e.clockSize,
                            u = e.pointerSize,
                            a = e.clockColorStopTop,
                            f = e.clockColorStopBottom,
                            s = e.pointerColor,
                            l = n / 2,
                            c = 0;
                        c < o;
                        c++
                    )
                        for (var d = 0; d < r; d++) {
                            var p = l + d * (n + u),
                                h = l + c * (n + u),
                                v = d * (n + u),
                                g = c * (n + u),
                                b = t.createLinearGradient(
                                    v + l,
                                    g,
                                    v + l,
                                    g + n
                                );
                            b.addColorStop(0, a),
                                b.addColorStop(1, f),
                                (t.fillStyle = b),
                                t.beginPath(),
                                t.arc(p, h, l, 0, i, !0),
                                t.closePath(),
                                t.fill(),
                                (t.fillStyle = s),
                                t.beginPath(),
                                t.arc(p, h, u / 2, 0, i, !0),
                                t.closePath(),
                                t.fill();
                        }
                })(y, {
                    columns: t,
                    rows: e,
                    clockSize: a,
                    pointerSize: f,
                    clockColorStopTop: s,
                    clockColorStopBottom: l,
                    pointerColor: c,
                }),
                {
                    el: function () {
                        return w;
                    },
                    set: function (r) {
                        M.clearRect(0, 0, v, g),
                            (function (t, e) {
                                for (
                                    var r =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2]
                                                ? arguments[2]
                                                : {},
                                        o = r.columns,
                                        n = r.rows,
                                        a = r.clockSize,
                                        f = r.pointerSize,
                                        s = r.pointerColor,
                                        l = r.debugColor,
                                        c = r.debugColor2,
                                        d = r.debug,
                                        p = 0,
                                        h = a / 2,
                                        v = 0;
                                    v < n;
                                    v++
                                )
                                    for (var g = 0; g < o; g++) {
                                        var b = g * (a + f) + h,
                                            y = v * (a + f) + h,
                                            m = e[p++] * i,
                                            M = b + h * Math.cos(m),
                                            _ = y + h * Math.sin(m),
                                            w = e[p++] * i,
                                            S = b + h * Math.cos(w),
                                            x = y + h * Math.sin(w),
                                            C = d ? c : s;
                                        u(t, b, y, M, _, f, d ? l : s),
                                            u(t, b, y, S, x, f, C);
                                    }
                            })(M, r, {
                                columns: t,
                                rows: e,
                                clockSize: a,
                                pointerSize: f,
                                pointerColor: c,
                                debugColor: d,
                                debugColor2: p,
                                debug: h,
                            });
                    },
                }
            );
        };
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
                var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0,
                    u =
                        arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 0,
                    a = (0, o.h)("canvas", {
                        width: t,
                        height: e,
                        style: {
                            position: "absolute",
                            left: r + "px",
                            top: u + "px",
                            width: t + "px",
                            height: e + "px",
                        },
                    }),
                    f = a.getContext("2d"),
                    s = i(f),
                    l = n / s;
                return (
                    1 !== l &&
                        ((0, o.setAttributes)(a, {
                            width: t * l,
                            height: e * l,
                        }),
                        f.scale(l, l)),
                    a
                );
            });
        var o = r(0),
            n = window.devicePixelRatio || 1,
            i = function (t) {
                return (
                    t.webkitBackingStorePixelRatio ||
                    t.mozBackingStorePixelRatio ||
                    t.msBackingStorePixelRatio ||
                    t.oBackingStorePixelRatio ||
                    t.backingStorePixelRatio ||
                    1
                );
            };
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = r(0);
        e.default = function (t, e) {
            for (
                var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                    n = r.clockSize,
                    i = r.pointerSize,
                    u = r.debugColor,
                    a = r.debugColor2,
                    f = r.debugColorText,
                    s = t * n + (t - 1) * i,
                    l = e * n + (e - 1) * i,
                    c = new Array(t * e * 2),
                    d = 0,
                    p = 0;
                p < e;
                p++
            )
                for (var h = 0; h < t; h++) {
                    var v = h * (n + i),
                        g = p * (n + i) + n - 10,
                        b = (0, o.h)("div", {
                            style: {
                                padding: "2px 2px",
                                boxSizing: "border-box",
                                background: u,
                                fontSize: "8px",
                                lineHeight: "8px",
                                fontWeight: "bold",
                                fontFamily: "sans-serif",
                                color: f,
                                overflow: "hidden",
                                position: "absolute",
                                left: v + "px",
                                top: g + "px",
                                width: n + "px",
                                height: "10px",
                            },
                        }),
                        y = (0, o.h)("div", {
                            style: {
                                padding: "2px 2px",
                                boxSizing: "border-box",
                                background: a,
                                fontSize: "8px",
                                lineHeight: "8px",
                                fontWeight: "bold",
                                fontFamily: "sans-serif",
                                color: f,
                                overflow: "hidden",
                                position: "absolute",
                                left: v + "px",
                                top: g + 10 + "px",
                                width: n + "px",
                                height: "10px",
                            },
                        });
                    (c[d++] = b), (c[d++] = y);
                }
            var m = o.h.apply(
                void 0,
                [
                    "div",
                    {
                        style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: s + "px",
                            height: l + "px",
                            transform: "translate(-50%, -50%)",
                        },
                    },
                ].concat(c)
            );
            return {
                el: function () {
                    return m;
                },
                set: function (r) {
                    return (function (r) {
                        for (var o = 0, n = 0; n < e; n++)
                            for (var i = 0; i < t; i++) {
                                var u = c[o],
                                    a = c[o + 1],
                                    f = r[o++],
                                    s = r[o++];
                                (u.textContent = f), (a.textContent = s);
                            }
                    })(r);
                },
            };
        };
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.default = function (t) {
            return !t && 0 !== t;
        };
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.default = function (t, e) {
            for (
                var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0,
                    o =
                        arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 0,
                    n = new Array(t * e * 2),
                    i = 0,
                    u = 0;
                u < e;
                u++
            )
                for (var a = 0; a < t; a++)
                    (n[i] = r), (n[i + 1] = o), (i += 2);
            return n;
        };
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
                for (
                    var r = Math.floor(t / 2),
                        o = Math.floor(e / 2),
                        n = new Array(t * e * 2),
                        i = 0,
                        u = 0;
                    u < e;
                    u++
                )
                    for (var a = 0; a < t; a++) {
                        var f = Math.atan2(o - u, r - a) / Math.PI / 2 + 0.25,
                            s = f + 0.5;
                        (n[i] = f), (n[i + 1] = s), (i += 2);
                    }
                return n;
            });
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
                for (
                    var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 0,
                        o = 0.5 + r,
                        n =
                            0 +
                            r +
                            (arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : 0),
                        i = new Array(t * e * 2),
                        u = 0,
                        a = 0;
                    a < e;
                    a++
                )
                    for (var f = 0; f < t; f++)
                        (i[u] = o), (i[u + 1] = n), (u += 2);
                return i;
            });
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = {
                0: ["┌---┐", "|┌-┐|", "||,||", "||,||", "|└-┘|", "└---┘"],
                1: [",,┌┐,", ",,||,", ",,||,", ",,||,", ",,||,", ",,└┘,"],
                2: ["┌---┐", "└--┐|", "┌--┘|", "|┌--┘", "|└--┐", "└---┘"],
                3: ["┌---┐", "└--┐|", "┌--┘|", "└--┐|", "┌--┘|", "└---┘"],
                4: ["┌┐,┌┐", "||,||", "|└-┘|", "└--┐|", ",,,||", ",,,└┘"],
                5: ["┌---┐", "|┌--┘", "|└--┐", "└--┐|", "┌--┘|", "└---┘"],
                6: ["┌┐,,,", "||,,,", "|└--┐", "|┌-┐|", "|└-┘|", "└---┘"],
                7: ["┌--┐,", "└-┐|,", ",,||,", ",,||,", ",,||,", ",,└┘,"],
                8: ["┌---┐", "|┌-┐|", "|└-┘|", "|┌-┐|", "|└-┘|", "└---┘"],
                9: ["┌---┐", "|┌-┐|", "|└-┘|", "└--┐|", ",,,||", ",,,└┘"],
                ":": [",,", "┌┐", "└┘", "┌┐", "└┘", ",,"],
            },
            n = {
                "┌": [0, 0.25],
                "┐": [0.25, 0.5],
                "└": [0, 0.75],
                "┘": [0.5, 0.75],
                "-": [0, 0.5],
                "|": [0.25, 0.75],
                ",": [0.375, 0.375],
            },
            i = n[","],
            u = {};
        for (var a in o) {
            u[a] = new Array(6);
            for (var f = o[a], s = 0; s < f.length; s++) {
                var l = f[s];
                u[a][s] = new Array(l.length);
                for (var c = 0; c < l.length; c++) {
                    var d = l[c];
                    u[a][s][c] = n[d];
                }
            }
        }
        var p = function (t) {
            return u[t][0].length;
        };
        e.default = function (t, e) {
            for (
                var r = new Array(e * t * 2),
                    o = (function (t, e, r) {
                        for (
                            var o = (function (t) {
                                    for (
                                        var e = 0, r = 0, o = t.length;
                                        r < o;
                                        r++
                                    ) {
                                        var n = t[r];
                                        e += p(n);
                                    }
                                    return e;
                                })(t),
                                n = Math.floor((e - o) / 2),
                                i = Math.floor((r - 6) / 2),
                                a = new Array(r),
                                f = 0;
                            f < r;
                            f++
                        )
                            a[f] = new Array(e);
                        for (var s = 0, l = t.length; s < l; s++) {
                            for (
                                var c = t[s], d = u[c], h = p(c), v = 0;
                                v < 6;
                                v++
                            )
                                for (var g = 0; g < h; g++)
                                    a[i + v][n + g] = d[v][g];
                            n += h;
                        }
                        return a;
                    })(new Date().toTimeString().slice(0, 5), t, e),
                    n = 0,
                    a = 0,
                    f = o.length;
                a < f;
                a++
            )
                for (var s = o[a], l = 0, c = s.length; l < c; l++) {
                    var d = s[l] || i;
                    (r[n++] = d[0]), (r[n++] = d[1]);
                }
            return r;
        };
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
                var r = Math.floor(t / 2),
                    u = Math.floor(e / 2),
                    a = o(0, 0, r, u);
                return function () {
                    return function (t, e, f, s, l, c, d) {
                        var p = n[s],
                            h = i[s];
                        return (
                            d > 1e3 * o(t, e, r, u) &&
                                (Math.abs(c) < Math.abs(p)
                                    ? (c += h)
                                    : (c = p)),
                            !(d > 1e3 * a * 1.5) && c
                        );
                    };
                };
            });
        var o = function () {
                var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                    e =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                    r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0,
                    o =
                        arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 0;
                return Math.sqrt((r - t) * (r - t) + (o - e) * (o - e));
            },
            n = [0.002, -0.002],
            i = [2e-5, -2e-5];
    },
    function (t, e, r) {
        "use strict";
        function o(t) {
            return t && t.__esModule ? t : { default: t };
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t) {
                return function () {
                    var e = (0, i.default)(t);
                    return function (t, r, o, n, i, a) {
                        if (0 === a) return !1;
                        var f = e[o];
                        return u(i, f, a);
                    };
                };
            });
        var n = o(r(1)),
            i = o(r(2)),
            u = function (t, e, r) {
                if (t === e) return 0;
                var o = (0, n.default)(t < e ? e - t : t - e);
                if (
                    (((t < e && r < 0) || (t > e && r > 0)) && (o = 1 - o),
                    o < 0.001)
                )
                    return e - t;
                if (o < 0.2) {
                    var i = (r / (o / r)) * 0.5;
                    return r > 0 ? r - i : r + i;
                }
                return r;
            };
    },
    function (t, e, r) {
        "use strict";
        function o(t) {
            return t && t.__esModule ? t : { default: t };
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t) {
                return function () {
                    var e = (0, i.default)(t);
                    return function (t, r, o, n, i, a, f) {
                        if (0 === a && f > 2e3) return !1;
                        var s = e[o];
                        return u(i, s, f);
                    };
                };
            });
        var n = o(r(1)),
            i = o(r(2)),
            u = function (t, e, r) {
                var o = (0, n.default)(e - t);
                return 0 === o
                    ? 0
                    : (o < 0 && (o = 1 + o),
                      Math.abs(o) > 0.001 ? (o / 100) * (r / 2e3) : o);
            };
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
                var r = (0, o.default)(t, e, 0.12);
                return function () {
                    return function (t, e, o, u, a, f, s) {
                        if (s > 1e4)
                            return (
                                Math.abs(f) !== i &&
                                (Math.abs(f) < i
                                    ? f > 0
                                        ? f + n
                                        : f - n
                                    : f > 0
                                    ? i
                                    : -i)
                            );
                        var l = r(s / 1e4, t, e);
                        return Math.min(1, s / 5e5) * (l - a + 0.5 * u);
                    };
                };
            });
        var o = (function (t) {
                return t && t.__esModule ? t : { default: t };
            })(r(18)),
            n = 2e-5,
            i = 0.002;
    },
    function (t, e, r) {
        "use strict";
        function o(t) {
            return t && t.__esModule ? t : { default: t };
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = o(r(19)),
            i = o(r(20)),
            u = o(r(23));
        e.default = function (t, e) {
            var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 1,
                o = Math.round(t * r),
                a = Math.round(e * r),
                f = new n.default(),
                s = void 0,
                l = void 0;
            return function (r, n, c) {
                r !== s &&
                    ((l = (function (t) {
                        for (
                            var e = (0, i.default)(new Float32Array(o * a), [
                                    o,
                                    a,
                                ]),
                                r = 0;
                            r < o;
                            r++
                        )
                            for (var n = 0; n < a; n++) {
                                var u = f.noise3D(r, n, t);
                                e.set(r, n, u);
                            }
                        return e;
                    })(r)),
                    (s = r));
                var d = ((o - 1) / t) * n,
                    p = ((a - 1) / e) * c;
                return (0, u.default)(l, d, p);
            };
        };
    },
    function (t, e, r) {
        var o;
        !(function () {
            "use strict";
            function n(t) {
                t || (t = Math.random),
                    (this.p = i(t)),
                    (this.perm = new Uint8Array(512)),
                    (this.permMod12 = new Uint8Array(512));
                for (var e = 0; e < 512; e++)
                    (this.perm[e] = this.p[255 & e]),
                        (this.permMod12[e] = this.perm[e] % 12);
            }
            function i(t) {
                var e,
                    r = new Uint8Array(256);
                for (e = 0; e < 256; e++) r[e] = e;
                for (e = 0; e < 255; e++) {
                    var o = e + 1 + ~~(t() * (255 - e)),
                        n = r[e];
                    (r[e] = r[o]), (r[o] = n);
                }
                return r;
            }
            var u = 0.5 * (Math.sqrt(3) - 1),
                a = (3 - Math.sqrt(3)) / 6,
                f = 1 / 6,
                s = (Math.sqrt(5) - 1) / 4,
                l = (5 - Math.sqrt(5)) / 20;
            (n.prototype = {
                grad3: new Float32Array([
                    1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1,
                    1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
                ]),
                grad4: new Float32Array([
                    0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1,
                    1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1,
                    1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0,
                    1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1,
                    1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1,
                    -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1,
                    0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0,
                    -1, -1, -1, 0,
                ]),
                noise2D: function (t, e) {
                    var r,
                        o,
                        n = this.permMod12,
                        i = this.perm,
                        f = this.grad3,
                        s = 0,
                        l = 0,
                        c = 0,
                        d = (t + e) * u,
                        p = Math.floor(t + d),
                        h = Math.floor(e + d),
                        v = (p + h) * a,
                        g = t - (p - v),
                        b = e - (h - v);
                    g > b ? ((r = 1), (o = 0)) : ((r = 0), (o = 1));
                    var y = g - r + a,
                        m = b - o + a,
                        M = g - 1 + 2 * a,
                        _ = b - 1 + 2 * a,
                        w = 255 & p,
                        S = 255 & h,
                        x = 0.5 - g * g - b * b;
                    if (x >= 0) {
                        var C = 3 * n[w + i[S]];
                        s = (x *= x) * x * (f[C] * g + f[C + 1] * b);
                    }
                    var j = 0.5 - y * y - m * m;
                    if (j >= 0) {
                        var A = 3 * n[w + r + i[S + o]];
                        l = (j *= j) * j * (f[A] * y + f[A + 1] * m);
                    }
                    var k = 0.5 - M * M - _ * _;
                    if (k >= 0) {
                        var P = 3 * n[w + 1 + i[S + 1]];
                        c = (k *= k) * k * (f[P] * M + f[P + 1] * _);
                    }
                    return 70 * (s + l + c);
                },
                noise3D: function (t, e, r) {
                    var o,
                        n,
                        i,
                        u,
                        a,
                        s,
                        l,
                        c,
                        d,
                        p,
                        h = this.permMod12,
                        v = this.perm,
                        g = this.grad3,
                        b = (t + e + r) * (1 / 3),
                        y = Math.floor(t + b),
                        m = Math.floor(e + b),
                        M = Math.floor(r + b),
                        _ = (y + m + M) * f,
                        w = t - (y - _),
                        S = e - (m - _),
                        x = r - (M - _);
                    w >= S
                        ? S >= x
                            ? ((a = 1),
                              (s = 0),
                              (l = 0),
                              (c = 1),
                              (d = 1),
                              (p = 0))
                            : w >= x
                            ? ((a = 1),
                              (s = 0),
                              (l = 0),
                              (c = 1),
                              (d = 0),
                              (p = 1))
                            : ((a = 0),
                              (s = 0),
                              (l = 1),
                              (c = 1),
                              (d = 0),
                              (p = 1))
                        : S < x
                        ? ((a = 0), (s = 0), (l = 1), (c = 0), (d = 1), (p = 1))
                        : w < x
                        ? ((a = 0), (s = 1), (l = 0), (c = 0), (d = 1), (p = 1))
                        : ((a = 0),
                          (s = 1),
                          (l = 0),
                          (c = 1),
                          (d = 1),
                          (p = 0));
                    var C = w - a + f,
                        j = S - s + f,
                        A = x - l + f,
                        k = w - c + 2 * f,
                        P = S - d + 2 * f,
                        z = x - p + 2 * f,
                        O = w - 1 + 0.5,
                        T = S - 1 + 0.5,
                        B = x - 1 + 0.5,
                        F = 255 & y,
                        R = 255 & m,
                        D = 255 & M,
                        q = 0.6 - w * w - S * S - x * x;
                    if (q < 0) o = 0;
                    else {
                        var I = 3 * h[F + v[R + v[D]]];
                        o =
                            (q *= q) *
                            q *
                            (g[I] * w + g[I + 1] * S + g[I + 2] * x);
                    }
                    var U = 0.6 - C * C - j * j - A * A;
                    if (U < 0) n = 0;
                    else {
                        var L = 3 * h[F + a + v[R + s + v[D + l]]];
                        n =
                            (U *= U) *
                            U *
                            (g[L] * C + g[L + 1] * j + g[L + 2] * A);
                    }
                    var E = 0.6 - k * k - P * P - z * z;
                    if (E < 0) i = 0;
                    else {
                        var N = 3 * h[F + c + v[R + d + v[D + p]]];
                        i =
                            (E *= E) *
                            E *
                            (g[N] * k + g[N + 1] * P + g[N + 2] * z);
                    }
                    var V = 0.6 - O * O - T * T - B * B;
                    if (V < 0) u = 0;
                    else {
                        var H = 3 * h[F + 1 + v[R + 1 + v[D + 1]]];
                        u =
                            (V *= V) *
                            V *
                            (g[H] * O + g[H + 1] * T + g[H + 2] * B);
                    }
                    return 32 * (o + n + i + u);
                },
                noise4D: function (t, e, r, o) {
                    this.permMod12;
                    var n,
                        i,
                        u,
                        a,
                        f,
                        c = this.perm,
                        d = this.grad4,
                        p = (t + e + r + o) * s,
                        h = Math.floor(t + p),
                        v = Math.floor(e + p),
                        g = Math.floor(r + p),
                        b = Math.floor(o + p),
                        y = (h + v + g + b) * l,
                        m = t - (h - y),
                        M = e - (v - y),
                        _ = r - (g - y),
                        w = o - (b - y),
                        S = 0,
                        x = 0,
                        C = 0,
                        j = 0;
                    m > M ? S++ : x++,
                        m > _ ? S++ : C++,
                        m > w ? S++ : j++,
                        M > _ ? x++ : C++,
                        M > w ? x++ : j++,
                        _ > w ? C++ : j++;
                    var A,
                        k,
                        P,
                        z,
                        O,
                        T,
                        B,
                        F,
                        R,
                        D,
                        q,
                        I,
                        U = m - (A = S >= 3 ? 1 : 0) + l,
                        L = M - (k = x >= 3 ? 1 : 0) + l,
                        E = _ - (P = C >= 3 ? 1 : 0) + l,
                        N = w - (z = j >= 3 ? 1 : 0) + l,
                        V = m - (O = S >= 2 ? 1 : 0) + 2 * l,
                        H = M - (T = x >= 2 ? 1 : 0) + 2 * l,
                        W = _ - (B = C >= 2 ? 1 : 0) + 2 * l,
                        G = w - (F = j >= 2 ? 1 : 0) + 2 * l,
                        J = m - (R = S >= 1 ? 1 : 0) + 3 * l,
                        K = M - (D = x >= 1 ? 1 : 0) + 3 * l,
                        Q = _ - (q = C >= 1 ? 1 : 0) + 3 * l,
                        X = w - (I = j >= 1 ? 1 : 0) + 3 * l,
                        Y = m - 1 + 4 * l,
                        Z = M - 1 + 4 * l,
                        $ = _ - 1 + 4 * l,
                        tt = w - 1 + 4 * l,
                        et = 255 & h,
                        rt = 255 & v,
                        ot = 255 & g,
                        nt = 255 & b,
                        it = 0.6 - m * m - M * M - _ * _ - w * w;
                    if (it < 0) n = 0;
                    else {
                        var ut = (c[et + c[rt + c[ot + c[nt]]]] % 32) * 4;
                        n =
                            (it *= it) *
                            it *
                            (d[ut] * m +
                                d[ut + 1] * M +
                                d[ut + 2] * _ +
                                d[ut + 3] * w);
                    }
                    var at = 0.6 - U * U - L * L - E * E - N * N;
                    if (at < 0) i = 0;
                    else {
                        var ft =
                            (c[et + A + c[rt + k + c[ot + P + c[nt + z]]]] %
                                32) *
                            4;
                        i =
                            (at *= at) *
                            at *
                            (d[ft] * U +
                                d[ft + 1] * L +
                                d[ft + 2] * E +
                                d[ft + 3] * N);
                    }
                    var st = 0.6 - V * V - H * H - W * W - G * G;
                    if (st < 0) u = 0;
                    else {
                        var lt =
                            (c[et + O + c[rt + T + c[ot + B + c[nt + F]]]] %
                                32) *
                            4;
                        u =
                            (st *= st) *
                            st *
                            (d[lt] * V +
                                d[lt + 1] * H +
                                d[lt + 2] * W +
                                d[lt + 3] * G);
                    }
                    var ct = 0.6 - J * J - K * K - Q * Q - X * X;
                    if (ct < 0) a = 0;
                    else {
                        var dt =
                            (c[et + R + c[rt + D + c[ot + q + c[nt + I]]]] %
                                32) *
                            4;
                        a =
                            (ct *= ct) *
                            ct *
                            (d[dt] * J +
                                d[dt + 1] * K +
                                d[dt + 2] * Q +
                                d[dt + 3] * X);
                    }
                    var pt = 0.6 - Y * Y - Z * Z - $ * $ - tt * tt;
                    if (pt < 0) f = 0;
                    else {
                        var ht =
                            (c[et + 1 + c[rt + 1 + c[ot + 1 + c[nt + 1]]]] %
                                32) *
                            4;
                        f =
                            (pt *= pt) *
                            pt *
                            (d[ht] * Y +
                                d[ht + 1] * Z +
                                d[ht + 2] * $ +
                                d[ht + 3] * tt);
                    }
                    return 27 * (n + i + u + a + f);
                },
            }),
                (n._buildPermutationTable = i),
                void 0 !==
                    (o = function () {
                        return n;
                    }.call(e, r, e, t)) && (t.exports = o),
                (e.SimplexNoise = n),
                (t.exports = n);
        })();
    },
    function (t, e, r) {
        function o(t, e) {
            var r = ["View", e, "d", t].join("");
            e < 0 && (r = "View_Nil" + t);
            var o = "generic" === t;
            if (-1 === e) {
                i =
                    "function " +
                    r +
                    "(a){this.data=a;};var proto=" +
                    r +
                    ".prototype;proto.dtype='" +
                    t +
                    "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " +
                    r +
                    "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" +
                    r +
                    "(a){return new " +
                    r +
                    "(a);}";
                return (b = new Function(i))();
            }
            if (0 === e) {
                i =
                    "function " +
                    r +
                    "(a,d) {this.data = a;this.offset = d};var proto=" +
                    r +
                    ".prototype;proto.dtype='" +
                    t +
                    "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " +
                    r +
                    "_copy() {return new " +
                    r +
                    "(this.data,this.offset)};proto.pick=function " +
                    r +
                    "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " +
                    r +
                    "_get(){return " +
                    (o
                        ? "this.data.get(this.offset)"
                        : "this.data[this.offset]") +
                    "};proto.set=function " +
                    r +
                    "_set(v){return " +
                    (o
                        ? "this.data.set(this.offset,v)"
                        : "this.data[this.offset]=v") +
                    "};return function construct_" +
                    r +
                    "(a,b,c,d){return new " +
                    r +
                    "(a,d)}";
                return (b = new Function("TrivialArray", i))(a[t][0]);
            }
            var i = ["'use strict'"],
                u = n(e),
                f = u.map(function (t) {
                    return "i" + t;
                }),
                s =
                    "this.offset+" +
                    u
                        .map(function (t) {
                            return "this.stride[" + t + "]*i" + t;
                        })
                        .join("+"),
                l = u
                    .map(function (t) {
                        return "b" + t;
                    })
                    .join(","),
                c = u
                    .map(function (t) {
                        return "c" + t;
                    })
                    .join(",");
            i.push(
                "function " + r + "(a," + l + "," + c + ",d){this.data=a",
                "this.shape=[" + l + "]",
                "this.stride=[" + c + "]",
                "this.offset=d|0}",
                "var proto=" + r + ".prototype",
                "proto.dtype='" + t + "'",
                "proto.dimension=" + e
            ),
                i.push(
                    "Object.defineProperty(proto,'size',{get:function " +
                        r +
                        "_size(){return " +
                        u
                            .map(function (t) {
                                return "this.shape[" + t + "]";
                            })
                            .join("*"),
                    "}})"
                ),
                1 === e
                    ? i.push("proto.order=[0]")
                    : (i.push("Object.defineProperty(proto,'order',{get:"),
                      e < 4
                          ? (i.push("function " + r + "_order(){"),
                            2 === e
                                ? i.push(
                                      "return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"
                                  )
                                : 3 === e &&
                                  i.push(
                                      "var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})"
                                  ))
                          : i.push("ORDER})")),
                i.push(
                    "proto.set=function " + r + "_set(" + f.join(",") + ",v){"
                ),
                o
                    ? i.push("return this.data.set(" + s + ",v)}")
                    : i.push("return this.data[" + s + "]=v}"),
                i.push(
                    "proto.get=function " + r + "_get(" + f.join(",") + "){"
                ),
                o
                    ? i.push("return this.data.get(" + s + ")}")
                    : i.push("return this.data[" + s + "]}"),
                i.push(
                    "proto.index=function " + r + "_index(",
                    f.join(),
                    "){return " + s + "}"
                ),
                i.push(
                    "proto.hi=function " +
                        r +
                        "_hi(" +
                        f.join(",") +
                        "){return new " +
                        r +
                        "(this.data," +
                        u
                            .map(function (t) {
                                return [
                                    "(typeof i",
                                    t,
                                    "!=='number'||i",
                                    t,
                                    "<0)?this.shape[",
                                    t,
                                    "]:i",
                                    t,
                                    "|0",
                                ].join("");
                            })
                            .join(",") +
                        "," +
                        u
                            .map(function (t) {
                                return "this.stride[" + t + "]";
                            })
                            .join(",") +
                        ",this.offset)}"
                );
            var d = u.map(function (t) {
                    return "a" + t + "=this.shape[" + t + "]";
                }),
                p = u.map(function (t) {
                    return "c" + t + "=this.stride[" + t + "]";
                });
            i.push(
                "proto.lo=function " +
                    r +
                    "_lo(" +
                    f.join(",") +
                    "){var b=this.offset,d=0," +
                    d.join(",") +
                    "," +
                    p.join(",")
            );
            for (g = 0; g < e; ++g)
                i.push(
                    "if(typeof i" +
                        g +
                        "==='number'&&i" +
                        g +
                        ">=0){d=i" +
                        g +
                        "|0;b+=c" +
                        g +
                        "*d;a" +
                        g +
                        "-=d}"
                );
            i.push(
                "return new " +
                    r +
                    "(this.data," +
                    u
                        .map(function (t) {
                            return "a" + t;
                        })
                        .join(",") +
                    "," +
                    u
                        .map(function (t) {
                            return "c" + t;
                        })
                        .join(",") +
                    ",b)}"
            ),
                i.push(
                    "proto.step=function " +
                        r +
                        "_step(" +
                        f.join(",") +
                        "){var " +
                        u
                            .map(function (t) {
                                return "a" + t + "=this.shape[" + t + "]";
                            })
                            .join(",") +
                        "," +
                        u
                            .map(function (t) {
                                return "b" + t + "=this.stride[" + t + "]";
                            })
                            .join(",") +
                        ",c=this.offset,d=0,ceil=Math.ceil"
                );
            for (g = 0; g < e; ++g)
                i.push(
                    "if(typeof i" +
                        g +
                        "==='number'){d=i" +
                        g +
                        "|0;if(d<0){c+=b" +
                        g +
                        "*(a" +
                        g +
                        "-1);a" +
                        g +
                        "=ceil(-a" +
                        g +
                        "/d)}else{a" +
                        g +
                        "=ceil(a" +
                        g +
                        "/d)}b" +
                        g +
                        "*=d}"
                );
            i.push(
                "return new " +
                    r +
                    "(this.data," +
                    u
                        .map(function (t) {
                            return "a" + t;
                        })
                        .join(",") +
                    "," +
                    u
                        .map(function (t) {
                            return "b" + t;
                        })
                        .join(",") +
                    ",c)}"
            );
            for (var h = new Array(e), v = new Array(e), g = 0; g < e; ++g)
                (h[g] = "a[i" + g + "]"), (v[g] = "b[i" + g + "]");
            i.push(
                "proto.transpose=function " +
                    r +
                    "_transpose(" +
                    f +
                    "){" +
                    f
                        .map(function (t, e) {
                            return (
                                t +
                                "=(" +
                                t +
                                "===undefined?" +
                                e +
                                ":" +
                                t +
                                "|0)"
                            );
                        })
                        .join(";"),
                "var a=this.shape,b=this.stride;return new " +
                    r +
                    "(this.data," +
                    h.join(",") +
                    "," +
                    v.join(",") +
                    ",this.offset)}"
            ),
                i.push(
                    "proto.pick=function " +
                        r +
                        "_pick(" +
                        f +
                        "){var a=[],b=[],c=this.offset"
                );
            for (g = 0; g < e; ++g)
                i.push(
                    "if(typeof i" +
                        g +
                        "==='number'&&i" +
                        g +
                        ">=0){c=(c+this.stride[" +
                        g +
                        "]*i" +
                        g +
                        ")|0}else{a.push(this.shape[" +
                        g +
                        "]);b.push(this.stride[" +
                        g +
                        "])}"
                );
            i.push(
                "var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"
            ),
                i.push(
                    "return function construct_" +
                        r +
                        "(data,shape,stride,offset){return new " +
                        r +
                        "(data," +
                        u
                            .map(function (t) {
                                return "shape[" + t + "]";
                            })
                            .join(",") +
                        "," +
                        u
                            .map(function (t) {
                                return "stride[" + t + "]";
                            })
                            .join(",") +
                        ",offset)}"
                );
            var b = new Function("CTOR_LIST", "ORDER", i.join("\n"));
            return b(a[t], function () {
                var t,
                    e = this.stride,
                    r = new Array(e.length);
                for (t = 0; t < r.length; ++t) r[t] = [Math.abs(e[t]), t];
                r.sort(function (t, e) {
                    return t[0] - e[0];
                });
                var o = new Array(r.length);
                for (t = 0; t < o.length; ++t) o[t] = r[t][1];
                return o;
            });
        }
        var n = r(21),
            i = r(22),
            u = "undefined" != typeof Float64Array,
            a = {
                float32: [],
                float64: [],
                int8: [],
                int16: [],
                int32: [],
                uint8: [],
                uint16: [],
                uint32: [],
                array: [],
                uint8_clamped: [],
                buffer: [],
                generic: [],
            };
        t.exports = function (t, e, r, n) {
            if (void 0 === t) return (p = a.array[0])([]);
            "number" == typeof t && (t = [t]), void 0 === e && (e = [t.length]);
            var f = e.length;
            if (void 0 === r) {
                r = new Array(f);
                for (var s = f - 1, l = 1; s >= 0; --s) (r[s] = l), (l *= e[s]);
            }
            if (void 0 === n)
                for (n = 0, s = 0; s < f; ++s)
                    r[s] < 0 && (n -= (e[s] - 1) * r[s]);
            for (
                var c = (function (t) {
                        if (i(t)) return "buffer";
                        if (u)
                            switch (Object.prototype.toString.call(t)) {
                                case "[object Float64Array]":
                                    return "float64";
                                case "[object Float32Array]":
                                    return "float32";
                                case "[object Int8Array]":
                                    return "int8";
                                case "[object Int16Array]":
                                    return "int16";
                                case "[object Int32Array]":
                                    return "int32";
                                case "[object Uint8Array]":
                                    return "uint8";
                                case "[object Uint16Array]":
                                    return "uint16";
                                case "[object Uint32Array]":
                                    return "uint32";
                                case "[object Uint8ClampedArray]":
                                    return "uint8_clamped";
                            }
                        return Array.isArray(t) ? "array" : "generic";
                    })(t),
                    d = a[c];
                d.length <= f + 1;

            )
                d.push(o(c, d.length - 1));
            var p = d[f + 1];
            return p(t, e, r, n);
        };
    },
    function (t, e, r) {
        "use strict";
        t.exports = function (t) {
            for (var e = new Array(t), r = 0; r < t; ++r) e[r] = r;
            return e;
        };
    },
    function (t, e) {
        function r(t) {
            return (
                !!t.constructor &&
                "function" == typeof t.constructor.isBuffer &&
                t.constructor.isBuffer(t)
            );
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        t.exports = function (t) {
            return (
                null != t &&
                (r(t) ||
                    (function (t) {
                        return (
                            "function" == typeof t.readFloatLE &&
                            "function" == typeof t.slice &&
                            r(t.slice(0, 0))
                        );
                    })(t) ||
                    !!t._isBuffer)
            );
        };
    },
    function (t, e, r) {
        "use strict";
        function o(t, e) {
            var r = Math.floor(e),
                o = e - r,
                n = 0 <= r && r < t.shape[0],
                i = 0 <= r + 1 && r + 1 < t.shape[0];
            return (1 - o) * (n ? +t.get(r) : 0) + o * (i ? +t.get(r + 1) : 0);
        }
        function n(t, e, r) {
            var o = Math.floor(e),
                n = e - o,
                i = 0 <= o && o < t.shape[0],
                u = 0 <= o + 1 && o + 1 < t.shape[0],
                a = Math.floor(r),
                f = r - a,
                s = 0 <= a && a < t.shape[1],
                l = 0 <= a + 1 && a + 1 < t.shape[1],
                c = i && s ? t.get(o, a) : 0,
                d = i && l ? t.get(o, a + 1) : 0;
            return (
                (1 - f) * ((1 - n) * c + n * (u && s ? t.get(o + 1, a) : 0)) +
                f * ((1 - n) * d + n * (u && l ? t.get(o + 1, a + 1) : 0))
            );
        }
        function i(t, e, r, o) {
            var n = Math.floor(e),
                i = e - n,
                u = 0 <= n && n < t.shape[0],
                a = 0 <= n + 1 && n + 1 < t.shape[0],
                f = Math.floor(r),
                s = r - f,
                l = 0 <= f && f < t.shape[1],
                c = 0 <= f + 1 && f + 1 < t.shape[1],
                d = Math.floor(o),
                p = o - d,
                h = 0 <= d && d < t.shape[2],
                v = 0 <= d + 1 && d + 1 < t.shape[2],
                g = u && l && h ? t.get(n, f, d) : 0,
                b = u && c && h ? t.get(n, f + 1, d) : 0,
                y = a && l && h ? t.get(n + 1, f, d) : 0,
                m = a && c && h ? t.get(n + 1, f + 1, d) : 0,
                M = u && l && v ? t.get(n, f, d + 1) : 0,
                _ = u && c && v ? t.get(n, f + 1, d + 1) : 0;
            return (
                (1 - p) *
                    ((1 - s) * ((1 - i) * g + i * y) +
                        s * ((1 - i) * b + i * m)) +
                p *
                    ((1 - s) *
                        ((1 - i) * M +
                            i * (a && l && v ? t.get(n + 1, f, d + 1) : 0)) +
                        s *
                            ((1 - i) * _ +
                                i *
                                    (a && c && v
                                        ? t.get(n + 1, f + 1, d + 1)
                                        : 0)))
            );
        }
        (t.exports = function (t, e, r, u) {
            switch (t.shape.length) {
                case 0:
                    return 0;
                case 1:
                    return o(t, e);
                case 2:
                    return n(t, e, r);
                case 3:
                    return i(t, e, r, u);
                default:
                    return function (t) {
                        var e,
                            r,
                            o = 0 | t.shape.length,
                            n = new Array(o),
                            i = new Array(o),
                            u = new Array(o),
                            a = new Array(o);
                        for (e = 0; e < o; ++e)
                            (r = +arguments[e + 1]),
                                (n[e] = Math.floor(r)),
                                (i[e] = r - n[e]),
                                (u[e] = 0 <= n[e] && n[e] < t.shape[e]),
                                (a[e] = 0 <= n[e] + 1 && n[e] + 1 < t.shape[e]);
                        var f,
                            s,
                            l,
                            c = 0;
                        t: for (e = 0; e < 1 << o; ++e) {
                            for (s = 1, l = t.offset, f = 0; f < o; ++f)
                                if (e & (1 << f)) {
                                    if (!a[f]) continue t;
                                    (s *= i[f]),
                                        (l += t.stride[f] * (n[f] + 1));
                                } else {
                                    if (!u[f]) continue t;
                                    (s *= 1 - i[f]), (l += t.stride[f] * n[f]);
                                }
                            c += s * t.data[l];
                        }
                        return c;
                    }.apply(void 0, arguments);
            }
        }),
            (t.exports.d1 = o),
            (t.exports.d2 = n),
            (t.exports.d3 = i);
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t) {
                return function () {
                    return function (e, r, o, n, i, u, a) {
                        if (!(a >= t)) return u;
                    };
                };
            });
    },
]);
