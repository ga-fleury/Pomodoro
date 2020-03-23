(function(t) {
  function e(e) {
    for (
      var r, a, s = e[0], u = e[1], c = e[2], l = 0, f = [];
      l < s.length;
      l++
    )
      (a = s[l]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]),
        (o[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
    h && h(e);
    while (f.length) f.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], r = !0, a = 1; a < n.length; a++) {
        var s = n[a];
        0 !== o[s] && (r = !1);
      }
      r && (i.splice(e--, 1), (t = u((u.s = n[0]))));
    }
    return t;
  }
  var r = {},
    a = { app: 0 },
    o = { app: 0 },
    i = [];
  function s(t) {
    return (
      u.p +
      "js/" +
      ({ about: "about" }[t] || t) +
      "." +
      { about: "6832e14b" }[t] +
      ".js"
    );
  }
  function u(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.e = function(t) {
    var e = [],
      n = { about: 1 };
    a[t]
      ? e.push(a[t])
      : 0 !== a[t] &&
        n[t] &&
        e.push(
          (a[t] = new Promise(function(e, n) {
            for (
              var r =
                  "css/" +
                  ({ about: "about" }[t] || t) +
                  "." +
                  { about: "2c445f31" }[t] +
                  ".css",
                o = u.p + r,
                i = document.getElementsByTagName("link"),
                s = 0;
              s < i.length;
              s++
            ) {
              var c = i[s],
                l = c.getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (l === r || l === o)) return e();
            }
            var f = document.getElementsByTagName("style");
            for (s = 0; s < f.length; s++) {
              (c = f[s]), (l = c.getAttribute("data-href"));
              if (l === r || l === o) return e();
            }
            var h = document.createElement("link");
            (h.rel = "stylesheet"),
              (h.type = "text/css"),
              (h.onload = e),
              (h.onerror = function(e) {
                var r = (e && e.target && e.target.src) || o,
                  i = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + r + ")"
                  );
                (i.code = "CSS_CHUNK_LOAD_FAILED"),
                  (i.request = r),
                  delete a[t],
                  h.parentNode.removeChild(h),
                  n(i);
              }),
              (h.href = o);
            var d = document.getElementsByTagName("head")[0];
            d.appendChild(h);
          }).then(function() {
            a[t] = 0;
          }))
        );
    var r = o[t];
    if (0 !== r)
      if (r) e.push(r[2]);
      else {
        var i = new Promise(function(e, n) {
          r = o[t] = [e, n];
        });
        e.push((r[2] = i));
        var c,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          u.nc && l.setAttribute("nonce", u.nc),
          (l.src = s(t));
        var f = new Error();
        c = function(e) {
          (l.onerror = l.onload = null), clearTimeout(h);
          var n = o[t];
          if (0 !== n) {
            if (n) {
              var r = e && ("load" === e.type ? "missing" : e.type),
                a = e && e.target && e.target.src;
              (f.message =
                "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")"),
                (f.name = "ChunkLoadError"),
                (f.type = r),
                (f.request = a),
                n[1](f);
            }
            o[t] = void 0;
          }
        };
        var h = setTimeout(function() {
          c({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = c), document.head.appendChild(l);
      }
    return Promise.all(e);
  }),
    (u.m = t),
    (u.c = r),
    (u.d = function(t, e, n) {
      u.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (u.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (u.t = function(t, e) {
      if ((1 & e && (t = u(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          u.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (u.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return u.d(e, "a", e), e;
    }),
    (u.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (u.p = "/"),
    (u.oe = function(t) {
      throw (console.error(t), t);
    });
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var f = 0; f < c.length; f++) e(c[f]);
  var h = l;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r,
      a = n("2b0e"),
      o = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "app" } },
          [n("HeaderNav"), n("router-view")],
          1
        );
      },
      i = [],
      s = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "nav",
          { staticClass: "nav" },
          [
            n("router-link", { attrs: { to: "/" } }, [t._v("Home")]),
            t._v("| "),
            n("router-link", { attrs: { to: "/about" } }, [t._v("About")])
          ],
          1
        );
      },
      u = [],
      c = { name: "header-nav" },
      l = c,
      f = n("2877"),
      h = Object(f["a"])(l, s, u, !1, null, null, null),
      d = h.exports,
      m = { components: { HeaderNav: d } },
      p = m,
      v = (n("5c0b"), Object(f["a"])(p, o, i, !1, null, null, null)),
      b = v.exports,
      g = (n("d3b7"), n("8c4f")),
      _ = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "home" } },
          [
            n("h1", [t._v("VueJS Pomodoro Clock")]),
            n("BaseTimer", { attrs: { CurrentRunState: t.isRunning } }),
            n("TimerControls", {
              attrs: { CurrentRunState: t.isRunning },
              on: { startUpdate: t.startClicked }
            })
          ],
          1
        );
      },
      y = [],
      C = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "base-timer" }, [
          n(
            "svg",
            {
              staticClass: "base-timer__svg",
              attrs: {
                viewBox: "0 0 100 100",
                xmlns: "http://www.w3.org/2000/svg"
              }
            },
            [
              n("g", { staticClass: "base-timer__circle" }, [
                n("circle", {
                  staticClass: "base-timer__path-elapsed",
                  attrs: { cx: "50", cy: "50", r: "45" }
                }),
                n("path", {
                  staticClass: "base-timer__path-remaining",
                  class: t.remainingPathColor,
                  attrs: {
                    "stroke-dasharray": t.circleDasharray,
                    d:
                      "\n          M 50, 50\n          m -45, 0\n          a 45,45 0 1,0 90,0\n          a 45,45 0 1,0 -90,0\n        "
                  }
                })
              ])
            ]
          ),
          n("span", { staticClass: "base-timer__label" }, [
            t._v(t._s(t.formattedTimeLeft))
          ])
        ]);
      },
      w = [],
      T = (n("99af"), n("b680"), 283),
      R = 10,
      S = 5,
      P = {
        info: { color: "green" },
        warning: { color: "orange", threshold: R },
        alert: { color: "red", threshold: S }
      },
      L = 1500,
      O = {
        props: { CurrentRunState: Boolean },
        data: function() {
          return { timePassed: 0, timerInterval: null };
        },
        computed: {
          circleDasharray: function() {
            return "".concat((this.timeFraction * T).toFixed(0), " 283");
          },
          formattedTimeLeft: function() {
            var t = this.timeLeft,
              e = Math.floor(t / 60),
              n = t % 60;
            return n < 10 && (n = "0".concat(n)), "".concat(e, ":").concat(n);
          },
          timeLeft: function() {
            return L - this.timePassed;
          },
          timeFraction: function() {
            var t = this.timeLeft / L;
            return t - (1 / L) * (1 - t);
          },
          remainingPathColor: function() {
            var t = P.alert,
              e = P.warning,
              n = P.info;
            return this.timeLeft <= t.threshold
              ? t.color
              : this.timeLeft <= e.threshold
              ? e.color
              : n.color;
          }
        },
        mounted: function() {
          console.log(this.CurrentRunState);
        },
        watch: {
          timeLeft: function(t) {
            0 === t && ((r = !0), this.onTimesUp());
          },
          CurrentRunState: function(t) {
            0 == t ? this.stopTimer() : 1 == t && 1 != r && this.startTimer(),
              console.log(t);
          }
        },
        methods: {
          onTimesUp: function() {
            this.stopTimer();
          },
          startTimer: function() {
            var t = this;
            this.timerInterval = setInterval(function() {
              return (t.timePassed += 1);
            }, 1e3);
          },
          stopTimer: function() {
            clearInterval(this.timerInterval);
          }
        }
      },
      j = O,
      x = (n("7d09"), Object(f["a"])(j, C, w, !1, null, "5cfb7ffa", null)),
      k = x.exports,
      E = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "control" }, [
          n(
            "button",
            {
              staticClass: "control__button",
              attrs: { id: "start-btn" },
              on: {
                click: function(e) {
                  return t.playPause();
                }
              }
            },
            [t._v(" " + t._s(t.playLabel) + " ")]
          ),
          n(
            "button",
            { staticClass: "control__button", attrs: { id: "reset-btn" } },
            [t._v("Reset")]
          )
        ]);
      },
      A = [],
      B = {
        props: { CurrentRunState: Boolean },
        data: function() {
          return { isRunning: this.CurrentRunState, playLabel: "Start" };
        },
        mounted: function() {
          this.playLabel = "Start";
        },
        methods: {
          playPause: function() {
            (this.isRunning = !this.isRunning),
              1 == this.isRunning
                ? (this.playLabel = "Pause")
                : 0 == this.isRunning && (this.playLabel = "Start"),
              this.$emit("startUpdate", this.isRunning);
          }
        }
      },
      N = B,
      $ = (n("c393"), Object(f["a"])(N, E, A, !1, null, null, null)),
      I = $.exports,
      M = {
        name: "home",
        components: { BaseTimer: k, TimerControls: I },
        data: function() {
          return { isRunning: !1 };
        },
        methods: {
          startClicked: function(t) {
            (this.isRunning = t),
              console.log("isRunning agora é:" + this.isRunning);
          }
        }
      },
      H = M,
      U = (n("cccb"), Object(f["a"])(H, _, y, !1, null, null, null)),
      D = U.exports;
    a["a"].use(g["a"]);
    var F = [
        { path: "/", name: "Home", component: D },
        {
          path: "/about",
          name: "About",
          component: function() {
            return n.e("about").then(n.bind(null, "f820"));
          }
        }
      ],
      J = new g["a"]({ mode: "history", base: "/", routes: F }),
      q = J;
    (a["a"].config.productionTip = !1),
      new a["a"]({
        router: q,
        render: function(t) {
          return t(b);
        }
      }).$mount("#app");
  },
  "5c0b": function(t, e, n) {
    "use strict";
    var r = n("9c0c"),
      a = n.n(r);
    a.a;
  },
  "5ced": function(t, e, n) {},
  "7d09": function(t, e, n) {
    "use strict";
    var r = n("f668"),
      a = n.n(r);
    a.a;
  },
  8620: function(t, e, n) {},
  "9c0c": function(t, e, n) {},
  c393: function(t, e, n) {
    "use strict";
    var r = n("8620"),
      a = n.n(r);
    a.a;
  },
  cccb: function(t, e, n) {
    "use strict";
    var r = n("5ced"),
      a = n.n(r);
    a.a;
  },
  f668: function(t, e, n) {}
});
//# sourceMappingURL=app.55886450.js.map
