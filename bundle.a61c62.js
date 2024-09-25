/*! For license information please see bundle.a61c62.js.LICENSE.txt */
(() => {
  var e = {
      583: (e, t, n) => {
        "use strict";
        var r = n(294),
          a = n(418),
          i = n(840);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(o(227));
        var l = new Set(),
          s = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var d = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = Object.prototype.hasOwnProperty,
          p = {},
          g = {};
        function v(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 === a.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(g, e) ||
                    (!f.call(p, e) &&
                      (h.test(e) ? (g[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, b);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, b);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = 60103,
          S = 60106,
          C = 60107,
          x = 60108,
          E = 60114,
          P = 60109,
          T = 60110,
          L = 60112,
          R = 60113,
          D = 60120,
          O = 60115,
          A = 60116,
          N = 60121,
          I = 60128,
          M = 60129,
          z = 60130,
          F = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var G = Symbol.for;
          (k = G("react.element")),
            (S = G("react.portal")),
            (C = G("react.fragment")),
            (x = G("react.strict_mode")),
            (E = G("react.profiler")),
            (P = G("react.provider")),
            (T = G("react.context")),
            (L = G("react.forward_ref")),
            (R = G("react.suspense")),
            (D = G("react.suspense_list")),
            (O = G("react.memo")),
            (A = G("react.lazy")),
            (N = G("react.block")),
            G("react.scope"),
            (I = G("react.opaque.id")),
            (M = G("react.debug_trace_mode")),
            (z = G("react.offscreen")),
            (F = G("react.legacy_hidden"));
        }
        var B,
          j = "function" == typeof Symbol && Symbol.iterator;
        function U(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (j && e[j]) || e["@@iterator"])
            ? e
            : null;
        }
        function H(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              B = (t && t[1]) || "";
            }
          return "\n" + B + e;
        }
        var W = !1;
        function V(e, t) {
          if (!e || W) return "";
          W = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (e) {
            if (e && r && "string" == typeof e.stack) {
              for (
                var a = e.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  l = i.length - 1;
                1 <= o && 0 <= l && a[o] !== i[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (a[o] !== i[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || a[o] !== i[l]))
                        return "\n" + a[o].replace(" at new ", " at ");
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (W = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? H(e) : "";
        }
        function Y(e) {
          switch (e.tag) {
            case 5:
              return H(e.type);
            case 16:
              return H("Lazy");
            case 13:
              return H("Suspense");
            case 19:
              return H("SuspenseList");
            case 0:
            case 2:
            case 15:
              return V(e.type, !1);
            case 11:
              return V(e.type.render, !1);
            case 22:
              return V(e.type._render, !1);
            case 1:
              return V(e.type, !0);
            default:
              return "";
          }
        }
        function X(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case C:
              return "Fragment";
            case S:
              return "Portal";
            case E:
              return "Profiler";
            case x:
              return "StrictMode";
            case R:
              return "Suspense";
            case D:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case L:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case O:
                return X(e.type);
              case N:
                return X(e._render);
              case A:
                (t = e._payload), (e = e._init);
                try {
                  return X(e(t));
                } catch (e) {}
            }
          return null;
        }
        function q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Z(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return a({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ae(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ae(e, t.type, q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ae(e, t, n) {
          ("number" === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ie(e, t) {
          return (
            (e = a({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function oe(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return a({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function se(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: q(n) };
        }
        function ue(e, t) {
          var n = q(t.value),
            r = q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var de = "http://www.w3.org/1999/xhtml";
        function he(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function fe(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? he(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var pe,
          ge,
          ve =
            ((ge = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (pe = pe || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = pe.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ge(e, t);
                  });
                }
              : ge);
        function me(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var ye = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          be = ["Webkit", "ms", "Moz", "O"];
        function we(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (ye.hasOwnProperty(e) && ye[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function _e(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = we(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(ye).forEach(function (e) {
          be.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (ye[t] = ye[e]);
          });
        });
        var ke = a(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function Se(e, t) {
          if (t) {
            if (
              ke[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(o(62));
          }
        }
        function Ce(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ee = null,
          Pe = null,
          Te = null;
        function Le(e) {
          if ((e = ta(e))) {
            if ("function" != typeof Ee) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ra(t)), Ee(e.stateNode, e.type, t));
          }
        }
        function Re(e) {
          Pe ? (Te ? Te.push(e) : (Te = [e])) : (Pe = e);
        }
        function De() {
          if (Pe) {
            var e = Pe,
              t = Te;
            if (((Te = Pe = null), Le(e), t))
              for (e = 0; e < t.length; e++) Le(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Ae(e, t, n, r, a) {
          return e(t, n, r, a);
        }
        function Ne() {}
        var Ie = Oe,
          Me = !1,
          ze = !1;
        function Fe() {
          (null === Pe && null === Te) || (Ne(), De());
        }
        function Ge(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ra(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Be = !1;
        if (d)
          try {
            var je = {};
            Object.defineProperty(je, "passive", {
              get: function () {
                Be = !0;
              },
            }),
              window.addEventListener("test", je, je),
              window.removeEventListener("test", je, je);
          } catch (ge) {
            Be = !1;
          }
        function Ue(e, t, n, r, a, i, o, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (e) {
            this.onError(e);
          }
        }
        var He = !1,
          We = null,
          Ve = !1,
          Ye = null,
          Xe = {
            onError: function (e) {
              (He = !0), (We = e);
            },
          };
        function qe(e, t, n, r, a, i, o, l, s) {
          (He = !1), (We = null), Ue.apply(Xe, arguments);
        }
        function $e(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Qe(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ke(e) {
          if ($e(e) !== e) throw Error(o(188));
        }
        function Ze(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var Je,
          et,
          tt,
          nt,
          rt = !1,
          at = [],
          it = null,
          ot = null,
          lt = null,
          st = new Map(),
          ut = new Map(),
          ct = [],
          dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function ht(e, t, n, r, a) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: a,
            targetContainers: [r],
          };
        }
        function ft(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              it = null;
              break;
            case "dragenter":
            case "dragleave":
              ot = null;
              break;
            case "mouseover":
            case "mouseout":
              lt = null;
              break;
            case "pointerover":
            case "pointerout":
              st.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ut.delete(t.pointerId);
          }
        }
        function pt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = ht(t, n, r, a, i)),
              null !== t && null !== (t = ta(t)) && et(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function gt(e) {
          var t = ea(e.target);
          if (null !== t) {
            var n = $e(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Qe(n)))
                  return (
                    (e.blockedOn = t),
                    void nt(e.lanePriority, function () {
                      i.unstable_runWithPriority(e.priority, function () {
                        tt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function vt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ta(n)) && et(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function mt(e, t, n) {
          vt(e) && n.delete(t);
        }
        function yt() {
          for (rt = !1; 0 < at.length; ) {
            var e = at[0];
            if (null !== e.blockedOn) {
              null !== (e = ta(e.blockedOn)) && Je(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Kt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && at.shift();
          }
          null !== it && vt(it) && (it = null),
            null !== ot && vt(ot) && (ot = null),
            null !== lt && vt(lt) && (lt = null),
            st.forEach(mt),
            ut.forEach(mt);
        }
        function bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            rt ||
              ((rt = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, yt)));
        }
        function wt(e) {
          function t(t) {
            return bt(t, e);
          }
          if (0 < at.length) {
            bt(at[0], e);
            for (var n = 1; n < at.length; n++) {
              var r = at[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== it && bt(it, e),
              null !== ot && bt(ot, e),
              null !== lt && bt(lt, e),
              st.forEach(t),
              ut.forEach(t),
              n = 0;
            n < ct.length;
            n++
          )
            (r = ct[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < ct.length && null === (n = ct[0]).blockedOn; )
            gt(n), null === n.blockedOn && ct.shift();
        }
        function _t(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kt = {
            animationend: _t("Animation", "AnimationEnd"),
            animationiteration: _t("Animation", "AnimationIteration"),
            animationstart: _t("Animation", "AnimationStart"),
            transitionend: _t("Transition", "TransitionEnd"),
          },
          St = {},
          Ct = {};
        function xt(e) {
          if (St[e]) return St[e];
          if (!kt[e]) return e;
          var t,
            n = kt[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Ct) return (St[e] = n[t]);
          return e;
        }
        d &&
          ((Ct = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kt.animationend.animation,
            delete kt.animationiteration.animation,
            delete kt.animationstart.animation),
          "TransitionEvent" in window || delete kt.transitionend.transition);
        var Et = xt("animationend"),
          Pt = xt("animationiteration"),
          Tt = xt("animationstart"),
          Lt = xt("transitionend"),
          Rt = new Map(),
          Dt = new Map(),
          Ot = [
            "abort",
            "abort",
            Et,
            "animationEnd",
            Pt,
            "animationIteration",
            Tt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Lt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function At(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              a = e[n + 1];
            (a = "on" + (a[0].toUpperCase() + a.slice(1))),
              Dt.set(r, t),
              Rt.set(r, a),
              u(a, [r]);
          }
        }
        (0, i.unstable_now)();
        var Nt = 8;
        function It(e) {
          if (0 != (1 & e)) return (Nt = 15), 1;
          if (0 != (2 & e)) return (Nt = 14), 2;
          if (0 != (4 & e)) return (Nt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Nt = 12), t)
            : 0 != (32 & e)
            ? ((Nt = 11), 32)
            : 0 != (t = 192 & e)
            ? ((Nt = 10), t)
            : 0 != (256 & e)
            ? ((Nt = 9), 256)
            : 0 != (t = 3584 & e)
            ? ((Nt = 8), t)
            : 0 != (4096 & e)
            ? ((Nt = 7), 4096)
            : 0 != (t = 4186112 & e)
            ? ((Nt = 6), t)
            : 0 != (t = 62914560 & e)
            ? ((Nt = 5), t)
            : 67108864 & e
            ? ((Nt = 4), 67108864)
            : 0 != (134217728 & e)
            ? ((Nt = 3), 134217728)
            : 0 != (t = 805306368 & e)
            ? ((Nt = 2), t)
            : 0 != (1073741824 & e)
            ? ((Nt = 1), 1073741824)
            : ((Nt = 8), e);
        }
        function Mt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Nt = 0);
          var r = 0,
            a = 0,
            i = e.expiredLanes,
            o = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== i) (r = i), (a = Nt = 15);
          else if (0 != (i = 134217727 & n)) {
            var s = i & ~o;
            0 !== s
              ? ((r = It(s)), (a = Nt))
              : 0 != (l &= i) && ((r = It(l)), (a = Nt));
          } else
            0 != (i = n & ~o)
              ? ((r = It(i)), (a = Nt))
              : 0 !== l && ((r = It(l)), (a = Nt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Ut(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 == (t & o))
          ) {
            if ((It(t), a <= Nt)) return t;
            Nt = a;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - Ut(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function zt(e) {
          return 0 != (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Ft(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Gt(24 & ~t)) ? Ft(10, t) : e;
            case 10:
              return 0 === (e = Gt(192 & ~t)) ? Ft(8, t) : e;
            case 8:
              return (
                0 === (e = Gt(3584 & ~t)) &&
                  0 === (e = Gt(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Gt(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(o(358, e));
        }
        function Gt(e) {
          return e & -e;
        }
        function Bt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function jt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Ut(t))] = n);
        }
        var Ut = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Ht(e) / Wt) | 0)) | 0;
              },
          Ht = Math.log,
          Wt = Math.LN2,
          Vt = i.unstable_UserBlockingPriority,
          Yt = i.unstable_runWithPriority,
          Xt = !0;
        function qt(e, t, n, r) {
          Me || Ne();
          var a = Qt,
            i = Me;
          Me = !0;
          try {
            Ae(a, e, t, n, r);
          } finally {
            (Me = i) || Fe();
          }
        }
        function $t(e, t, n, r) {
          Yt(Vt, Qt.bind(null, e, t, n, r));
        }
        function Qt(e, t, n, r) {
          var a;
          if (Xt)
            if ((a = 0 == (4 & t)) && 0 < at.length && -1 < dt.indexOf(e))
              (e = ht(null, e, t, n, r)), at.push(e);
            else {
              var i = Kt(e, t, n, r);
              if (null === i) a && ft(e, r);
              else {
                if (a) {
                  if (-1 < dt.indexOf(e))
                    return (e = ht(i, e, t, n, r)), void at.push(e);
                  if (
                    (function (e, t, n, r, a) {
                      switch (t) {
                        case "focusin":
                          return (it = pt(it, e, t, n, r, a)), !0;
                        case "dragenter":
                          return (ot = pt(ot, e, t, n, r, a)), !0;
                        case "mouseover":
                          return (lt = pt(lt, e, t, n, r, a)), !0;
                        case "pointerover":
                          var i = a.pointerId;
                          return (
                            st.set(i, pt(st.get(i) || null, e, t, n, r, a)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (i = a.pointerId),
                            ut.set(i, pt(ut.get(i) || null, e, t, n, r, a)),
                            !0
                          );
                      }
                      return !1;
                    })(i, e, t, n, r)
                  )
                    return;
                  ft(e, r);
                }
                Ar(e, t, r, null, n);
              }
            }
        }
        function Kt(e, t, n, r) {
          var a = xe(r);
          if (null !== (a = ea(a))) {
            var i = $e(a);
            if (null === i) a = null;
            else {
              var o = i.tag;
              if (13 === o) {
                if (null !== (a = Qe(i))) return a;
                a = null;
              } else if (3 === o) {
                if (i.stateNode.hydrate)
                  return 3 === i.tag ? i.stateNode.containerInfo : null;
                a = null;
              } else i !== a && (a = null);
            }
          }
          return Ar(e, t, r, a, n), null;
        }
        var Zt = null,
          Jt = null,
          en = null;
        function tn() {
          if (en) return en;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Zt ? Zt.value : Zt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (en = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function nn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rn() {
          return !0;
        }
        function an() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? rn
                : an),
              (this.isPropagationStopped = an),
              this
            );
          }
          return (
            a(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = rn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = rn));
              },
              persist: function () {},
              isPersistent: rn,
            }),
            t
          );
        }
        var ln,
          sn,
          un,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          dn = on(cn),
          hn = a({}, cn, { view: 0, detail: 0 }),
          fn = on(hn),
          pn = a({}, hn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (sn = e.screenY - un.screenY))
                      : (sn = ln = 0),
                    (un = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          gn = on(pn),
          vn = on(a({}, pn, { dataTransfer: 0 })),
          mn = on(a({}, hn, { relatedTarget: 0 })),
          yn = on(
            a({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          bn = a({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          wn = on(bn),
          _n = on(a({}, cn, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Cn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Cn[e]) && !!t[e];
        }
        function En() {
          return xn;
        }
        var Pn = a({}, hn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = nn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? nn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? nn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = on(Pn),
          Ln = on(
            a({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Rn = on(
            a({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Dn = on(
            a({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = a({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          An = on(On),
          Nn = [9, 13, 27, 32],
          In = d && "CompositionEvent" in window,
          Mn = null;
        d && "documentMode" in document && (Mn = document.documentMode);
        var zn = d && "TextEvent" in window && !Mn,
          Fn = d && (!In || (Mn && 8 < Mn && 11 >= Mn)),
          Gn = String.fromCharCode(32),
          Bn = !1;
        function jn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Nn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1,
          Wn = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Yn(e, t, n, r) {
          Re(r),
            0 < (t = Ir(t, "onChange")).length &&
              ((n = new dn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Xn = null,
          qn = null;
        function $n(e) {
          Pr(e, 0);
        }
        function Qn(e) {
          if (K(na(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Zn = !1;
        if (d) {
          var Jn;
          if (d) {
            var er = "oninput" in document;
            if (!er) {
              var tr = document.createElement("div");
              tr.setAttribute("oninput", "return;"),
                (er = "function" == typeof tr.oninput);
            }
            Jn = er;
          } else Jn = !1;
          Zn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function nr() {
          Xn && (Xn.detachEvent("onpropertychange", rr), (qn = Xn = null));
        }
        function rr(e) {
          if ("value" === e.propertyName && Qn(qn)) {
            var t = [];
            if ((Yn(t, qn, e, xe(e)), (e = $n), Me)) e(t);
            else {
              Me = !0;
              try {
                Oe(e, t);
              } finally {
                (Me = !1), Fe();
              }
            }
          }
        }
        function ar(e, t, n) {
          "focusin" === e
            ? (nr(), (qn = n), (Xn = t).attachEvent("onpropertychange", rr))
            : "focusout" === e && nr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Qn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var sr =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          ur = Object.prototype.hasOwnProperty;
        function cr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!ur.call(t, n[r]) || !sr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function dr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function hr(e, t) {
          var n,
            r = dr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = dr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function pr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function gr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var vr = d && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          br = null,
          wr = !1;
        function _r(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          wr ||
            null == mr ||
            mr !== Z(r) ||
            ((r =
              "selectionStart" in (r = mr) && gr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (br && cr(br, r)) ||
              ((br = r),
              0 < (r = Ir(yr, "onSelect")).length &&
                ((t = new dn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        At(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          At(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          At(Ot, 2);
        for (
          var kr =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Sr = 0;
          Sr < kr.length;
          Sr++
        )
          Dt.set(kr[Sr], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Cr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          xr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Cr)
          );
        function Er(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, s, u) {
              if ((qe.apply(this, arguments), He)) {
                if (!He) throw Error(o(198));
                var c = We;
                (He = !1), (We = null), Ve || ((Ve = !0), (Ye = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Pr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== i && a.isPropagationStopped()))
                    break e;
                  Er(a, l, u), (i = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (l = r[o]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== i && a.isPropagationStopped())
                  )
                    break e;
                  Er(a, l, u), (i = s);
                }
            }
          }
          if (Ve) throw ((e = Ye), (Ve = !1), (Ye = null), e);
        }
        function Tr(e, t) {
          var n = aa(t),
            r = e + "__bubble";
          n.has(r) || (Or(t, e, 2, !1), n.add(r));
        }
        var Lr = "_reactListening" + Math.random().toString(36).slice(2);
        function Rr(e) {
          e[Lr] ||
            ((e[Lr] = !0),
            l.forEach(function (t) {
              xr.has(t) || Dr(t, !1, e, null), Dr(t, !0, e, null);
            }));
        }
        function Dr(e, t, n, r) {
          var a =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            i = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (i = n.ownerDocument),
            null !== r && !t && xr.has(e))
          ) {
            if ("scroll" !== e) return;
            (a |= 2), (i = r);
          }
          var o = aa(i),
            l = e + "__" + (t ? "capture" : "bubble");
          o.has(l) || (t && (a |= 4), Or(i, e, a, t), o.add(l));
        }
        function Or(e, t, n, r) {
          var a = Dt.get(t);
          switch (void 0 === a ? 2 : a) {
            case 0:
              a = qt;
              break;
            case 1:
              a = $t;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Be ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Ar(e, t, n, r, a) {
          var i = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = ea(l))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = i = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (ze) return e();
            ze = !0;
            try {
              Ie(e, t, n);
            } finally {
              (ze = !1), Fe();
            }
          })(function () {
            var r = i,
              a = xe(n),
              o = [];
            e: {
              var l = Rt.get(e);
              if (void 0 !== l) {
                var s = dn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === nn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Tn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = mn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = gn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Rn;
                    break;
                  case Et:
                  case Pt:
                  case Tt:
                    s = yn;
                    break;
                  case Lt:
                    s = Dn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = An;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = wn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Ln;
                }
                var c = 0 != (4 & t),
                  d = !c && "scroll" === e,
                  h = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var f, p = r; null !== p; ) {
                  var g = (f = p).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== g &&
                      ((f = g),
                      null !== h &&
                        null != (g = Ge(p, h)) &&
                        c.push(Nr(p, g, f))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 != (16 & t) ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ea(u) && !u[Zr])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ea(u)
                          : null) &&
                        (u !== (d = $e(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = gn),
                  (g = "onMouseLeave"),
                  (h = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Ln),
                    (g = "onPointerLeave"),
                    (h = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == s ? l : na(s)),
                  (f = null == u ? l : na(u)),
                  ((l = new c(g, p + "leave", s, n, a)).target = d),
                  (l.relatedTarget = f),
                  (g = null),
                  ea(a) === r &&
                    (((c = new c(h, p + "enter", u, n, a)).target = f),
                    (c.relatedTarget = d),
                    (g = c)),
                  (d = g),
                  s && u)
                )
                  e: {
                    for (h = u, p = 0, f = c = s; f; f = Mr(f)) p++;
                    for (f = 0, g = h; g; g = Mr(g)) f++;
                    for (; 0 < p - f; ) (c = Mr(c)), p--;
                    for (; 0 < f - p; ) (h = Mr(h)), f--;
                    for (; p--; ) {
                      if (c === h || (null !== h && c === h.alternate)) break e;
                      (c = Mr(c)), (h = Mr(h));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && zr(o, l, s, c, !1),
                  null !== u && null !== d && zr(o, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? na(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var v = Kn;
              else if (Vn(l))
                if (Zn) v = lr;
                else {
                  v = ir;
                  var m = ar;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (v = or);
              switch (
                (v && (v = v(e, r))
                  ? Yn(o, v, n, a)
                  : (m && m(e, l, r),
                    "focusout" === e &&
                      (m = l._wrapperState) &&
                      m.controlled &&
                      "number" === l.type &&
                      ae(l, "number", l.value)),
                (m = r ? na(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(m) || "true" === m.contentEditable) &&
                    ((mr = m), (yr = r), (br = null));
                  break;
                case "focusout":
                  br = yr = mr = null;
                  break;
                case "mousedown":
                  wr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (wr = !1), _r(o, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  _r(o, n, a);
              }
              var y;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? jn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = tn())
                    : ((Jt = "value" in (Zt = a) ? Zt.value : Zt.textContent),
                      (Hn = !0))),
                0 < (m = Ir(r, b)).length &&
                  ((b = new _n(b, e, null, n, a)),
                  o.push({ event: b, listeners: m }),
                  (y || null !== (y = Un(n))) && (b.data = y))),
                (y = zn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), Gn);
                        case "textInput":
                          return (e = t.data) === Gn && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!In && jn(e, t))
                          ? ((e = tn()), (en = Jt = Zt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Ir(r, "onBeforeInput")).length &&
                  ((a = new _n("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Pr(o, t);
          });
        }
        function Nr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Ir(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Ge(e, n)) && r.unshift(Nr(e, i, a)),
              null != (i = Ge(e, t)) && r.push(Nr(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Mr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function zr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = Ge(n, i)) && o.unshift(Nr(n, s, l))
                : a || (null != (s = Ge(n, i)) && o.push(Nr(n, s, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        function Fr() {}
        var Gr = null,
          Br = null;
        function jr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Ur(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Hr = "function" == typeof setTimeout ? setTimeout : void 0,
          Wr = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function Vr(e) {
          (1 === e.nodeType || (9 === e.nodeType && null != (e = e.body))) &&
            (e.textContent = "");
        }
        function Yr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Xr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var qr = 0,
          $r = Math.random().toString(36).slice(2),
          Qr = "__reactFiber$" + $r,
          Kr = "__reactProps$" + $r,
          Zr = "__reactContainer$" + $r,
          Jr = "__reactEvents$" + $r;
        function ea(e) {
          var t = e[Qr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Zr] || n[Qr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Xr(e); null !== e; ) {
                  if ((n = e[Qr])) return n;
                  e = Xr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ta(e) {
          return !(e = e[Qr] || e[Zr]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function na(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ra(e) {
          return e[Kr] || null;
        }
        function aa(e) {
          var t = e[Jr];
          return void 0 === t && (t = e[Jr] = new Set()), t;
        }
        var ia = [],
          oa = -1;
        function la(e) {
          return { current: e };
        }
        function sa(e) {
          0 > oa || ((e.current = ia[oa]), (ia[oa] = null), oa--);
        }
        function ua(e, t) {
          oa++, (ia[oa] = e.current), (e.current = t);
        }
        var ca = {},
          da = la(ca),
          ha = la(!1),
          fa = ca;
        function pa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function ga(e) {
          return null != e.childContextTypes;
        }
        function va() {
          sa(ha), sa(da);
        }
        function ma(e, t, n) {
          if (da.current !== ca) throw Error(o(168));
          ua(da, t), ua(ha, n);
        }
        function ya(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in e)) throw Error(o(108, X(t) || "Unknown", i));
          return a({}, n, r);
        }
        function ba(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              ca),
            (fa = da.current),
            ua(da, e),
            ua(ha, ha.current),
            !0
          );
        }
        function wa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = ya(e, t, fa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              sa(ha),
              sa(da),
              ua(da, e))
            : sa(ha),
            ua(ha, n);
        }
        var _a = null,
          ka = null,
          Sa = i.unstable_runWithPriority,
          Ca = i.unstable_scheduleCallback,
          xa = i.unstable_cancelCallback,
          Ea = i.unstable_shouldYield,
          Pa = i.unstable_requestPaint,
          Ta = i.unstable_now,
          La = i.unstable_getCurrentPriorityLevel,
          Ra = i.unstable_ImmediatePriority,
          Da = i.unstable_UserBlockingPriority,
          Oa = i.unstable_NormalPriority,
          Aa = i.unstable_LowPriority,
          Na = i.unstable_IdlePriority,
          Ia = {},
          Ma = void 0 !== Pa ? Pa : function () {},
          za = null,
          Fa = null,
          Ga = !1,
          Ba = Ta(),
          ja =
            1e4 > Ba
              ? Ta
              : function () {
                  return Ta() - Ba;
                };
        function Ua() {
          switch (La()) {
            case Ra:
              return 99;
            case Da:
              return 98;
            case Oa:
              return 97;
            case Aa:
              return 96;
            case Na:
              return 95;
            default:
              throw Error(o(332));
          }
        }
        function Ha(e) {
          switch (e) {
            case 99:
              return Ra;
            case 98:
              return Da;
            case 97:
              return Oa;
            case 96:
              return Aa;
            case 95:
              return Na;
            default:
              throw Error(o(332));
          }
        }
        function Wa(e, t) {
          return (e = Ha(e)), Sa(e, t);
        }
        function Va(e, t, n) {
          return (e = Ha(e)), Ca(e, t, n);
        }
        function Ya() {
          if (null !== Fa) {
            var e = Fa;
            (Fa = null), xa(e);
          }
          Xa();
        }
        function Xa() {
          if (!Ga && null !== za) {
            Ga = !0;
            var e = 0;
            try {
              var t = za;
              Wa(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (za = null);
            } catch (t) {
              throw (null !== za && (za = za.slice(e + 1)), Ca(Ra, Ya), t);
            } finally {
              Ga = !1;
            }
          }
        }
        var qa = _.ReactCurrentBatchConfig;
        function $a(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = a({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Qa = la(null),
          Ka = null,
          Za = null,
          Ja = null;
        function ei() {
          Ja = Za = Ka = null;
        }
        function ti(e) {
          var t = Qa.current;
          sa(Qa), (e.type._context._currentValue = t);
        }
        function ni(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ri(e, t) {
          (Ka = e),
            (Ja = Za = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (Io = !0), (e.firstContext = null));
        }
        function ai(e, t) {
          if (Ja !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) ||
                ((Ja = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === Za)
            ) {
              if (null === Ka) throw Error(o(308));
              (Za = t),
                (Ka.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else Za = Za.next = t;
          return e._currentValue;
        }
        var ii = !1;
        function oi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function li(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function si(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function ui(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function ci(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function di(e, t, n, r) {
          var i = e.updateQueue;
          ii = !1;
          var o = i.firstBaseUpdate,
            l = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var u = s,
              c = u.next;
            (u.next = null), null === l ? (o = c) : (l.next = c), (l = u);
            var d = e.alternate;
            if (null !== d) {
              var h = (d = d.updateQueue).lastBaseUpdate;
              h !== l &&
                (null === h ? (d.firstBaseUpdate = c) : (h.next = c),
                (d.lastBaseUpdate = u));
            }
          }
          if (null !== o) {
            for (h = i.baseState, l = 0, d = c = u = null; ; ) {
              s = o.lane;
              var f = o.eventTime;
              if ((r & s) === s) {
                null !== d &&
                  (d = d.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    g = o;
                  switch (((s = t), (f = n), g.tag)) {
                    case 1:
                      if ("function" == typeof (p = g.payload)) {
                        h = p.call(f, h, s);
                        break e;
                      }
                      h = p;
                      break e;
                    case 3:
                      p.flags = (-4097 & p.flags) | 64;
                    case 0:
                      if (
                        null ==
                        (s =
                          "function" == typeof (p = g.payload)
                            ? p.call(f, h, s)
                            : p)
                      )
                        break e;
                      h = a({}, h, s);
                      break e;
                    case 2:
                      ii = !0;
                  }
                }
                null !== o.callback &&
                  ((e.flags |= 32),
                  null === (s = i.effects) ? (i.effects = [o]) : s.push(o));
              } else
                (f = {
                  eventTime: f,
                  lane: s,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === d ? ((c = d = f), (u = h)) : (d = d.next = f),
                  (l |= s);
              if (null === (o = o.next)) {
                if (null === (s = i.shared.pending)) break;
                (o = s.next),
                  (s.next = null),
                  (i.lastBaseUpdate = s),
                  (i.shared.pending = null);
              }
            }
            null === d && (u = h),
              (i.baseState = u),
              (i.firstBaseUpdate = c),
              (i.lastBaseUpdate = d),
              (zl |= l),
              (e.lanes = l),
              (e.memoizedState = h);
          }
        }
        function hi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" != typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var fi = new r.Component().refs;
        function pi(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var gi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && $e(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ss(),
              a = us(e),
              i = si(r, a);
            (i.payload = t),
              null != n && (i.callback = n),
              ui(e, i),
              cs(e, a, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ss(),
              a = us(e),
              i = si(r, a);
            (i.tag = 1),
              (i.payload = t),
              null != n && (i.callback = n),
              ui(e, i),
              cs(e, a, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ss(),
              r = us(e),
              a = si(n, r);
            (a.tag = 2), null != t && (a.callback = t), ui(e, a), cs(e, r, n);
          },
        };
        function vi(e, t, n, r, a, i, o) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                cr(n, r) &&
                cr(a, i)
              );
        }
        function mi(e, t, n) {
          var r = !1,
            a = ca,
            i = t.contextType;
          return (
            "object" == typeof i && null !== i
              ? (i = ai(i))
              : ((a = ga(t) ? fa : da.current),
                (i = (r = null != (r = t.contextTypes)) ? pa(e, a) : ca)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = gi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function yi(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && gi.enqueueReplaceState(t, t.state, null);
        }
        function bi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = fi), oi(e);
          var i = t.contextType;
          "object" == typeof i && null !== i
            ? (a.context = ai(i))
            : ((i = ga(t) ? fa : da.current), (a.context = pa(e, i))),
            di(e, n, a, r),
            (a.state = e.memoizedState),
            "function" == typeof (i = t.getDerivedStateFromProps) &&
              (pi(e, t, i, n), (a.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof a.getSnapshotBeforeUpdate ||
              ("function" != typeof a.UNSAFE_componentWillMount &&
                "function" != typeof a.componentWillMount) ||
              ((t = a.state),
              "function" == typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && gi.enqueueReplaceState(a, a.state, null),
              di(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" == typeof a.componentDidMount && (e.flags |= 4);
        }
        var wi = Array.isArray;
        function _i(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === fi && (t = r.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" != typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function ki(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              o(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function Si(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Bs(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ws(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = a(t, n.props)).ref = _i(e, t, n)), (r.return = e), r)
              : (((r = js(n.type, n.key, n.props, null, e.mode, r)).ref = _i(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Vs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Us(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function h(e, t, n) {
            if ("string" == typeof t || "number" == typeof t)
              return ((t = Ws("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = js(t.type, t.key, t.props, null, e.mode, n)).ref = _i(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Vs(t, e.mode, n)).return = e), t;
              }
              if (wi(t) || U(t))
                return ((t = Us(t, e.mode, n, null)).return = e), t;
              ki(e, t);
            }
            return null;
          }
          function f(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a
                    ? n.type === C
                      ? d(e, t, n.props.children, r, a)
                      : u(e, t, n, r)
                    : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
              }
              if (wi(n) || U(n)) return null !== a ? null : d(e, t, n, r, null);
              ki(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if ("string" == typeof r || "number" == typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === C
                      ? d(t, e, r.props.children, a, r.key)
                      : u(t, e, r, a)
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
              }
              if (wi(r) || U(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              ki(t, r);
            }
            return null;
          }
          function g(a, o, l, s) {
            for (
              var u = null, c = null, d = o, g = (o = 0), v = null;
              null !== d && g < l.length;
              g++
            ) {
              d.index > g ? ((v = d), (d = null)) : (v = d.sibling);
              var m = f(a, d, l[g], s);
              if (null === m) {
                null === d && (d = v);
                break;
              }
              e && d && null === m.alternate && t(a, d),
                (o = i(m, o, g)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m),
                (d = v);
            }
            if (g === l.length) return n(a, d), u;
            if (null === d) {
              for (; g < l.length; g++)
                null !== (d = h(a, l[g], s)) &&
                  ((o = i(d, o, g)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return u;
            }
            for (d = r(a, d); g < l.length; g++)
              null !== (v = p(d, a, g, l[g], s)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? g : v.key),
                (o = i(v, o, g)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              u
            );
          }
          function v(a, l, s, u) {
            var c = U(s);
            if ("function" != typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var d = (c = null), g = l, v = (l = 0), m = null, y = s.next();
              null !== g && !y.done;
              v++, y = s.next()
            ) {
              g.index > v ? ((m = g), (g = null)) : (m = g.sibling);
              var b = f(a, g, y.value, u);
              if (null === b) {
                null === g && (g = m);
                break;
              }
              e && g && null === b.alternate && t(a, g),
                (l = i(b, l, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (g = m);
            }
            if (y.done) return n(a, g), c;
            if (null === g) {
              for (; !y.done; v++, y = s.next())
                null !== (y = h(a, y.value, u)) &&
                  ((l = i(y, l, v)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return c;
            }
            for (g = r(a, g); !y.done; v++, y = s.next())
              null !== (y = p(g, a, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  g.delete(null === y.key ? v : y.key),
                (l = i(y, l, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                g.forEach(function (e) {
                  return t(a, e);
                }),
              c
            );
          }
          return function (e, r, i, s) {
            var u =
              "object" == typeof i &&
              null !== i &&
              i.type === C &&
              null === i.key;
            u && (i = i.props.children);
            var c = "object" == typeof i && null !== i;
            if (c)
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (c = i.key, u = r; null !== u; ) {
                      if (u.key === c) {
                        if (7 === u.tag) {
                          if (i.type === C) {
                            n(e, u.sibling),
                              ((r = a(u, i.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (u.elementType === i.type) {
                          n(e, u.sibling),
                            ((r = a(u, i.props)).ref = _i(e, u, i)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, u);
                        break;
                      }
                      t(e, u), (u = u.sibling);
                    }
                    i.type === C
                      ? (((r = Us(i.props.children, e.mode, s, i.key)).return =
                          e),
                        (e = r))
                      : (((s = js(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          e.mode,
                          s
                        )).ref = _i(e, r, i)),
                        (s.return = e),
                        (e = s));
                  }
                  return l(e);
                case S:
                  e: {
                    for (u = i.key; null !== r; ) {
                      if (r.key === u) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === i.containerInfo &&
                          r.stateNode.implementation === i.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = a(r, i.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Vs(i, e.mode, s)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" == typeof i || "number" == typeof i)
              return (
                (i = "" + i),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = a(r, i)).return = e), (e = r))
                  : (n(e, r), ((r = Ws(i, e.mode, s)).return = e), (e = r)),
                l(e)
              );
            if (wi(i)) return g(e, r, i, s);
            if (U(i)) return v(e, r, i, s);
            if ((c && ki(e, i), void 0 === i && !u))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(o(152, X(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Ci = Si(!0),
          xi = Si(!1),
          Ei = {},
          Pi = la(Ei),
          Ti = la(Ei),
          Li = la(Ei);
        function Ri(e) {
          if (e === Ei) throw Error(o(174));
          return e;
        }
        function Di(e, t) {
          switch ((ua(Li, t), ua(Ti, e), ua(Pi, Ei), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : fe(null, "");
              break;
            default:
              t = fe(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          sa(Pi), ua(Pi, t);
        }
        function Oi() {
          sa(Pi), sa(Ti), sa(Li);
        }
        function Ai(e) {
          Ri(Li.current);
          var t = Ri(Pi.current),
            n = fe(t, e.type);
          t !== n && (ua(Ti, e), ua(Pi, n));
        }
        function Ni(e) {
          Ti.current === e && (sa(Pi), sa(Ti));
        }
        var Ii = la(0);
        function Mi(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var zi = null,
          Fi = null,
          Gi = !1;
        function Bi(e, t) {
          var n = Fs(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function ji(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Ui(e) {
          if (Gi) {
            var t = Fi;
            if (t) {
              var n = t;
              if (!ji(e, t)) {
                if (!(t = Yr(n.nextSibling)) || !ji(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Gi = !1), void (zi = e)
                  );
                Bi(zi, n);
              }
              (zi = e), (Fi = Yr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Gi = !1), (zi = e);
          }
        }
        function Hi(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          zi = e;
        }
        function Wi(e) {
          if (e !== zi) return !1;
          if (!Gi) return Hi(e), (Gi = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Ur(t, e.memoizedProps))
          )
            for (t = Fi; t; ) Bi(e, t), (t = Yr(t.nextSibling));
          if ((Hi(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Fi = Yr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Fi = null;
            }
          } else Fi = zi ? Yr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Vi() {
          (Fi = zi = null), (Gi = !1);
        }
        var Yi = [];
        function Xi() {
          for (var e = 0; e < Yi.length; e++)
            Yi[e]._workInProgressVersionPrimary = null;
          Yi.length = 0;
        }
        var qi = _.ReactCurrentDispatcher,
          $i = _.ReactCurrentBatchConfig,
          Qi = 0,
          Ki = null,
          Zi = null,
          Ji = null,
          eo = !1,
          to = !1;
        function no() {
          throw Error(o(321));
        }
        function ro(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function ao(e, t, n, r, a, i) {
          if (
            ((Qi = i),
            (Ki = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (qi.current = null === e || null === e.memoizedState ? Do : Oo),
            (e = n(r, a)),
            to)
          ) {
            i = 0;
            do {
              if (((to = !1), !(25 > i))) throw Error(o(301));
              (i += 1),
                (Ji = Zi = null),
                (t.updateQueue = null),
                (qi.current = Ao),
                (e = n(r, a));
            } while (to);
          }
          if (
            ((qi.current = Ro),
            (t = null !== Zi && null !== Zi.next),
            (Qi = 0),
            (Ji = Zi = Ki = null),
            (eo = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function io() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === Ji ? (Ki.memoizedState = Ji = e) : (Ji = Ji.next = e), Ji
          );
        }
        function oo() {
          if (null === Zi) {
            var e = Ki.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Zi.next;
          var t = null === Ji ? Ki.memoizedState : Ji.next;
          if (null !== t) (Ji = t), (Zi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (Zi = e).memoizedState,
              baseState: Zi.baseState,
              baseQueue: Zi.baseQueue,
              queue: Zi.queue,
              next: null,
            }),
              null === Ji ? (Ki.memoizedState = Ji = e) : (Ji = Ji.next = e);
          }
          return Ji;
        }
        function lo(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function so(e) {
          var t = oo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = Zi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (a = a.next), (r = r.baseState);
            var s = (l = i = null),
              u = a;
            do {
              var c = u.lane;
              if ((Qi & c) === c)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: u.action,
                      eagerReducer: u.eagerReducer,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
              else {
                var d = {
                  lane: c,
                  action: u.action,
                  eagerReducer: u.eagerReducer,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === s ? ((l = s = d), (i = r)) : (s = s.next = d),
                  (Ki.lanes |= c),
                  (zl |= c);
              }
              u = u.next;
            } while (null !== u && u !== a);
            null === s ? (i = r) : (s.next = l),
              sr(r, t.memoizedState) || (Io = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function uo(e) {
          var t = oo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            sr(i, t.memoizedState) || (Io = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function co(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var a = t._workInProgressVersionPrimary;
          if (
            (null !== a
              ? (e = a === r)
              : ((e = e.mutableReadLanes),
                (e = (Qi & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Yi.push(t))),
            e)
          )
            return n(t._source);
          throw (Yi.push(t), Error(o(350)));
        }
        function ho(e, t, n, r) {
          var a = Ll;
          if (null === a) throw Error(o(349));
          var i = t._getVersion,
            l = i(t._source),
            s = qi.current,
            u = s.useState(function () {
              return co(a, t, n);
            }),
            c = u[1],
            d = u[0];
          u = Ji;
          var h = e.memoizedState,
            f = h.refs,
            p = f.getSnapshot,
            g = h.source;
          h = h.subscribe;
          var v = Ki;
          return (
            (e.memoizedState = { refs: f, source: t, subscribe: r }),
            s.useEffect(
              function () {
                (f.getSnapshot = n), (f.setSnapshot = c);
                var e = i(t._source);
                if (!sr(l, e)) {
                  (e = n(t._source)),
                    sr(d, e) ||
                      (c(e),
                      (e = us(v)),
                      (a.mutableReadLanes |= e & a.pendingLanes)),
                    (e = a.mutableReadLanes),
                    (a.entangledLanes |= e);
                  for (var r = a.entanglements, o = e; 0 < o; ) {
                    var s = 31 - Ut(o),
                      u = 1 << s;
                    (r[s] |= e), (o &= ~u);
                  }
                }
              },
              [n, t, r]
            ),
            s.useEffect(
              function () {
                return r(t._source, function () {
                  var e = f.getSnapshot,
                    n = f.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = us(v);
                    a.mutableReadLanes |= r & a.pendingLanes;
                  } catch (e) {
                    n(function () {
                      throw e;
                    });
                  }
                });
              },
              [t, r]
            ),
            (sr(p, n) && sr(g, t) && sr(h, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: lo,
                lastRenderedState: d,
              }).dispatch = c =
                Lo.bind(null, Ki, e)),
              (u.queue = e),
              (u.baseQueue = null),
              (d = co(a, t, n)),
              (u.memoizedState = u.baseState = d)),
            d
          );
        }
        function fo(e, t, n) {
          return ho(oo(), e, t, n);
        }
        function po(e) {
          var t = io();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: lo,
                lastRenderedState: e,
              }).dispatch =
              Lo.bind(null, Ki, e)),
            [t.memoizedState, e]
          );
        }
        function go(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Ki.updateQueue)
              ? ((t = { lastEffect: null }),
                (Ki.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function vo(e) {
          return (e = { current: e }), (io().memoizedState = e);
        }
        function mo() {
          return oo().memoizedState;
        }
        function yo(e, t, n, r) {
          var a = io();
          (Ki.flags |= e),
            (a.memoizedState = go(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function bo(e, t, n, r) {
          var a = oo();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== Zi) {
            var o = Zi.memoizedState;
            if (((i = o.destroy), null !== r && ro(r, o.deps)))
              return void go(t, n, i, r);
          }
          (Ki.flags |= e), (a.memoizedState = go(1 | t, n, i, r));
        }
        function wo(e, t) {
          return yo(516, 4, e, t);
        }
        function _o(e, t) {
          return bo(516, 4, e, t);
        }
        function ko(e, t) {
          return bo(4, 2, e, t);
        }
        function So(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Co(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            bo(4, 2, So.bind(null, t, e), n)
          );
        }
        function xo() {}
        function Eo(e, t) {
          var n = oo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ro(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Po(e, t) {
          var n = oo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ro(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function To(e, t) {
          var n = Ua();
          Wa(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Wa(97 < n ? 97 : n, function () {
              var n = $i.transition;
              $i.transition = 1;
              try {
                e(!1), t();
              } finally {
                $i.transition = n;
              }
            });
        }
        function Lo(e, t, n) {
          var r = ss(),
            a = us(e),
            i = {
              lane: a,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            o = t.pending;
          if (
            (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (t.pending = i),
            (o = e.alternate),
            e === Ki || (null !== o && o === Ki))
          )
            to = eo = !0;
          else {
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  s = o(l, n);
                if (((i.eagerReducer = o), (i.eagerState = s), sr(s, l)))
                  return;
              } catch (e) {}
            cs(e, a, r);
          }
        }
        var Ro = {
            readContext: ai,
            useCallback: no,
            useContext: no,
            useEffect: no,
            useImperativeHandle: no,
            useLayoutEffect: no,
            useMemo: no,
            useReducer: no,
            useRef: no,
            useState: no,
            useDebugValue: no,
            useDeferredValue: no,
            useTransition: no,
            useMutableSource: no,
            useOpaqueIdentifier: no,
            unstable_isNewReconciler: !1,
          },
          Do = {
            readContext: ai,
            useCallback: function (e, t) {
              return (io().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: ai,
            useEffect: wo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                yo(4, 2, So.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return yo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = io();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = io();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Lo.bind(null, Ki, e)),
                [r.memoizedState, e]
              );
            },
            useRef: vo,
            useState: po,
            useDebugValue: xo,
            useDeferredValue: function (e) {
              var t = po(e),
                n = t[0],
                r = t[1];
              return (
                wo(
                  function () {
                    var t = $i.transition;
                    $i.transition = 1;
                    try {
                      r(e);
                    } finally {
                      $i.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = po(!1),
                t = e[0];
              return vo((e = To.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = io();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                ho(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Gi) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: I, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (qr++).toString(36))),
                      Error(o(355)))
                    );
                  }),
                  n = po(t)[1];
                return (
                  0 == (2 & Ki.mode) &&
                    ((Ki.flags |= 516),
                    go(
                      5,
                      function () {
                        n("r:" + (qr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return po((t = "r:" + (qr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Oo = {
            readContext: ai,
            useCallback: Eo,
            useContext: ai,
            useEffect: _o,
            useImperativeHandle: Co,
            useLayoutEffect: ko,
            useMemo: Po,
            useReducer: so,
            useRef: mo,
            useState: function () {
              return so(lo);
            },
            useDebugValue: xo,
            useDeferredValue: function (e) {
              var t = so(lo),
                n = t[0],
                r = t[1];
              return (
                _o(
                  function () {
                    var t = $i.transition;
                    $i.transition = 1;
                    try {
                      r(e);
                    } finally {
                      $i.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = so(lo)[0];
              return [mo().current, e];
            },
            useMutableSource: fo,
            useOpaqueIdentifier: function () {
              return so(lo)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ao = {
            readContext: ai,
            useCallback: Eo,
            useContext: ai,
            useEffect: _o,
            useImperativeHandle: Co,
            useLayoutEffect: ko,
            useMemo: Po,
            useReducer: uo,
            useRef: mo,
            useState: function () {
              return uo(lo);
            },
            useDebugValue: xo,
            useDeferredValue: function (e) {
              var t = uo(lo),
                n = t[0],
                r = t[1];
              return (
                _o(
                  function () {
                    var t = $i.transition;
                    $i.transition = 1;
                    try {
                      r(e);
                    } finally {
                      $i.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = uo(lo)[0];
              return [mo().current, e];
            },
            useMutableSource: fo,
            useOpaqueIdentifier: function () {
              return uo(lo)[0];
            },
            unstable_isNewReconciler: !1,
          },
          No = _.ReactCurrentOwner,
          Io = !1;
        function Mo(e, t, n, r) {
          t.child = null === e ? xi(t, null, n, r) : Ci(t, e.child, n, r);
        }
        function zo(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            ri(t, a),
            (r = ao(e, t, n, r, i, a)),
            null === e || Io
              ? ((t.flags |= 1), Mo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~a),
                tl(e, t, a))
          );
        }
        function Fo(e, t, n, r, a, i) {
          if (null === e) {
            var o = n.type;
            return "function" != typeof o ||
              Gs(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = js(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Go(e, t, o, r, a, i));
          }
          return (
            (o = e.child),
            0 == (a & i) &&
            ((a = o.memoizedProps),
            (n = null !== (n = n.compare) ? n : cr)(a, r) && e.ref === t.ref)
              ? tl(e, t, i)
              : ((t.flags |= 1),
                ((e = Bs(o, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Go(e, t, n, r, a, i) {
          if (null !== e && cr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Io = !1), 0 == (i & a)))
              return (t.lanes = e.lanes), tl(e, t, i);
            0 != (16384 & e.flags) && (Io = !0);
          }
          return Uo(e, t, n, r, i);
        }
        function Bo(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 == (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), vs(0, n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  vs(0, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                vs(0, null !== i ? i.baseLanes : n);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              vs(0, r);
          return Mo(e, t, a, n), t.child;
        }
        function jo(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Uo(e, t, n, r, a) {
          var i = ga(n) ? fa : da.current;
          return (
            (i = pa(t, i)),
            ri(t, a),
            (n = ao(e, t, n, r, i, a)),
            null === e || Io
              ? ((t.flags |= 1), Mo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~a),
                tl(e, t, a))
          );
        }
        function Ho(e, t, n, r, a) {
          if (ga(n)) {
            var i = !0;
            ba(t);
          } else i = !1;
          if ((ri(t, a), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              mi(t, n, r),
              bi(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var s = o.context,
              u = n.contextType;
            u =
              "object" == typeof u && null !== u
                ? ai(u)
                : pa(t, (u = ga(n) ? fa : da.current));
            var c = n.getDerivedStateFromProps,
              d =
                "function" == typeof c ||
                "function" == typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                "function" != typeof o.componentWillReceiveProps) ||
              ((l !== r || s !== u) && yi(t, o, r, u)),
              (ii = !1);
            var h = t.memoizedState;
            (o.state = h),
              di(t, r, o, a),
              (s = t.memoizedState),
              l !== r || h !== s || ha.current || ii
                ? ("function" == typeof c &&
                    (pi(t, n, c, r), (s = t.memoizedState)),
                  (l = ii || vi(t, n, l, r, h, s, u))
                    ? (d ||
                        ("function" != typeof o.UNSAFE_componentWillMount &&
                          "function" != typeof o.componentWillMount) ||
                        ("function" == typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" == typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" == typeof o.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" == typeof o.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = l))
                : ("function" == typeof o.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (o = t.stateNode),
              li(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : $a(t.type, l)),
              (o.props = u),
              (d = t.pendingProps),
              (h = o.context),
              (s =
                "object" == typeof (s = n.contextType) && null !== s
                  ? ai(s)
                  : pa(t, (s = ga(n) ? fa : da.current)));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" == typeof f ||
              "function" == typeof o.getSnapshotBeforeUpdate) ||
              ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                "function" != typeof o.componentWillReceiveProps) ||
              ((l !== d || h !== s) && yi(t, o, r, s)),
              (ii = !1),
              (h = t.memoizedState),
              (o.state = h),
              di(t, r, o, a);
            var p = t.memoizedState;
            l !== d || h !== p || ha.current || ii
              ? ("function" == typeof f &&
                  (pi(t, n, f, r), (p = t.memoizedState)),
                (u = ii || vi(t, n, u, r, h, p, s))
                  ? (c ||
                      ("function" != typeof o.UNSAFE_componentWillUpdate &&
                        "function" != typeof o.componentWillUpdate) ||
                      ("function" == typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, s),
                      "function" == typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" != typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = s),
                (r = u))
              : ("function" != typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Wo(e, t, n, r, i, a);
        }
        function Wo(e, t, n, r, a, i) {
          jo(e, t);
          var o = 0 != (64 & t.flags);
          if (!r && !o) return a && wa(t, n, !1), tl(e, t, i);
          (r = t.stateNode), (No.current = t);
          var l =
            o && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Ci(t, e.child, null, i)),
                (t.child = Ci(t, null, l, i)))
              : Mo(e, t, l, i),
            (t.memoizedState = r.state),
            a && wa(t, n, !0),
            t.child
          );
        }
        function Vo(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ma(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ma(0, t.context, !1),
            Di(e, t.containerInfo);
        }
        var Yo,
          Xo,
          qo,
          $o = { dehydrated: null, retryLane: 0 };
        function Qo(e, t, n) {
          var r,
            a = t.pendingProps,
            i = Ii.current,
            o = !1;
          return (
            (r = 0 != (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
            r
              ? ((o = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === a.fallback ||
                !0 === a.unstable_avoidThisFallback ||
                (i |= 1),
            ua(Ii, 1 & i),
            null === e
              ? (void 0 !== a.fallback && Ui(t),
                (e = a.children),
                (i = a.fallback),
                o
                  ? ((e = Ko(t, e, i, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = $o),
                    e)
                  : "number" == typeof a.unstable_expectedLoadTime
                  ? ((e = Ko(t, e, i, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = $o),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Hs(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                o
                  ? ((a = (function (e, t, n, r, a) {
                      var i = t.mode,
                        o = e.child;
                      e = o.sibling;
                      var l = { mode: "hidden", children: n };
                      return (
                        0 == (2 & i) && t.child !== o
                          ? (((n = t.child).childLanes = 0),
                            (n.pendingProps = l),
                            null !== (o = n.lastEffect)
                              ? ((t.firstEffect = n.firstEffect),
                                (t.lastEffect = o),
                                (o.nextEffect = null))
                              : (t.firstEffect = t.lastEffect = null))
                          : (n = Bs(o, l)),
                        null !== e
                          ? (r = Bs(e, r))
                          : ((r = Us(r, i, a, null)).flags |= 2),
                        (r.return = t),
                        (n.return = t),
                        (n.sibling = r),
                        (t.child = n),
                        r
                      );
                    })(e, t, a.children, a.fallback, n)),
                    (o = t.child),
                    (i = e.child.memoizedState),
                    (o.memoizedState =
                      null === i
                        ? { baseLanes: n }
                        : { baseLanes: i.baseLanes | n }),
                    (o.childLanes = e.childLanes & ~n),
                    (t.memoizedState = $o),
                    a)
                  : ((n = (function (e, t, n, r) {
                      var a = e.child;
                      return (
                        (e = a.sibling),
                        (n = Bs(a, { mode: "visible", children: n })),
                        0 == (2 & t.mode) && (n.lanes = r),
                        (n.return = t),
                        (n.sibling = null),
                        null !== e &&
                          ((e.nextEffect = null),
                          (e.flags = 8),
                          (t.firstEffect = t.lastEffect = e)),
                        (t.child = n)
                      );
                    })(e, t, a.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Ko(e, t, n, r) {
          var a = e.mode,
            i = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 == (2 & a) && null !== i
              ? ((i.childLanes = 0), (i.pendingProps = t))
              : (i = Hs(t, a, 0, null)),
            (n = Us(n, a, r, null)),
            (i.return = e),
            (n.return = e),
            (i.sibling = n),
            (e.child = i),
            n
          );
        }
        function Zo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ni(e.return, t);
        }
        function Jo(e, t, n, r, a, i) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
                lastEffect: i,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a),
              (o.lastEffect = i));
        }
        function el(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((Mo(e, t, r.children, n), 0 != (2 & (r = Ii.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 != (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Zo(e, n);
                else if (19 === e.tag) Zo(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((ua(Ii, r), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === Mi(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Jo(t, !1, a, n, i, t.lastEffect);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === Mi(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Jo(t, !0, n, null, i, t.lastEffect);
                break;
              case "together":
                Jo(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function tl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (zl |= t.lanes),
            0 != (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(o(153));
            if (null !== t.child) {
              for (
                n = Bs((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Bs(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function nl(e, t) {
          if (!Gi)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function rl(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return ga(t.type) && va(), null;
            case 3:
              return (
                Oi(),
                sa(ha),
                sa(da),
                Xi(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Wi(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Ni(t);
              var i = Ri(Li.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Xo(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return null;
                }
                if (((e = Ri(Pi.current)), Wi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Qr] = t), (r[Kr] = l), n)) {
                    case "dialog":
                      Tr("cancel", r), Tr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Cr.length; e++) Tr(Cr[e], r);
                      break;
                    case "source":
                      Tr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", r), Tr("load", r);
                      break;
                    case "details":
                      Tr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Tr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Tr("invalid", r);
                      break;
                    case "textarea":
                      se(r, l), Tr("invalid", r);
                  }
                  for (var u in (Se(n, l), (e = null), l))
                    l.hasOwnProperty(u) &&
                      ((i = l[u]),
                      "children" === u
                        ? "string" == typeof i
                          ? r.textContent !== i && (e = ["children", i])
                          : "number" == typeof i &&
                            r.textContent !== "" + i &&
                            (e = ["children", "" + i])
                        : s.hasOwnProperty(u) &&
                          null != i &&
                          "onScroll" === u &&
                          Tr("scroll", r));
                  switch (n) {
                    case "input":
                      Q(r), re(r, l, !0);
                      break;
                    case "textarea":
                      Q(r), ce(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof l.onClick && (r.onclick = Fr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((u = 9 === i.nodeType ? i : i.ownerDocument),
                    e === de && (e = he(n)),
                    e === de
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[Qr] = t),
                    (e[Kr] = r),
                    Yo(e, t),
                    (t.stateNode = e),
                    (u = Ce(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Tr("cancel", e), Tr("close", e), (i = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", e), (i = r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Cr.length; i++) Tr(Cr[i], e);
                      i = r;
                      break;
                    case "source":
                      Tr("error", e), (i = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", e), Tr("load", e), (i = r);
                      break;
                    case "details":
                      Tr("toggle", e), (i = r);
                      break;
                    case "input":
                      ee(e, r), (i = J(e, r)), Tr("invalid", e);
                      break;
                    case "option":
                      i = ie(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (i = a({}, r, { value: void 0 })),
                        Tr("invalid", e);
                      break;
                    case "textarea":
                      se(e, r), (i = le(e, r)), Tr("invalid", e);
                      break;
                    default:
                      i = r;
                  }
                  Se(n, i);
                  var c = i;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var d = c[l];
                      "style" === l
                        ? _e(e, d)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (d = d ? d.__html : void 0) && ve(e, d)
                        : "children" === l
                        ? "string" == typeof d
                          ? ("textarea" !== n || "" !== d) && me(e, d)
                          : "number" == typeof d && me(e, "" + d)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (s.hasOwnProperty(l)
                            ? null != d && "onScroll" === l && Tr("scroll", e)
                            : null != d && w(e, l, d, u));
                    }
                  switch (n) {
                    case "input":
                      Q(e), re(e, r, !1);
                      break;
                    case "textarea":
                      Q(e), ce(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + q(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? oe(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            oe(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof i.onClick && (e.onclick = Fr);
                  }
                  jr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) qo(0, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(o(166));
                (n = Ri(Li.current)),
                  Ri(Pi.current),
                  Wi(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Qr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Qr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                sa(Ii),
                (r = t.memoizedState),
                0 != (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Wi(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 != (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & Ii.current)
                        ? 0 === Nl && (Nl = 3)
                        : ((0 !== Nl && 3 !== Nl) || (Nl = 4),
                          null === Ll ||
                            (0 == (134217727 & zl) && 0 == (134217727 & Fl)) ||
                            ps(Ll, Dl))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Oi(), null === e && Rr(t.stateNode.containerInfo), null;
            case 10:
              return ti(t), null;
            case 19:
              if ((sa(Ii), null === (r = t.memoizedState))) return null;
              if (((l = 0 != (64 & t.flags)), null === (u = r.rendering)))
                if (l) nl(r, !1);
                else {
                  if (0 !== Nl || (null !== e && 0 != (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = Mi(e))) {
                        for (
                          t.flags |= 64,
                            nl(r, !1),
                            null !== (l = u.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return ua(Ii, (1 & Ii.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    ja() > Ul &&
                    ((t.flags |= 64),
                    (l = !0),
                    nl(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = Mi(u))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      nl(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !u.alternate &&
                        !Gi)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * ja() - r.renderingStartTime > Ul &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      nl(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                    (r.last = u));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = ja()),
                  (n.sibling = null),
                  (t = Ii.current),
                  ua(Ii, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                ms(),
                null !== e &&
                  (null !== e.memoizedState) != (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(o(156, t.tag));
        }
        function al(e) {
          switch (e.tag) {
            case 1:
              ga(e.type) && va();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Oi(), sa(ha), sa(da), Xi(), 0 != (64 & (t = e.flags))))
                throw Error(o(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Ni(e), null;
            case 13:
              return (
                sa(Ii),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return sa(Ii), null;
            case 4:
              return Oi(), null;
            case 10:
              return ti(e), null;
            case 23:
            case 24:
              return ms(), null;
            default:
              return null;
          }
        }
        function il(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += Y(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: a };
        }
        function ol(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        (Yo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Xo = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), Ri(Pi.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (i = J(e, i)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (i = ie(e, i)), (r = ie(e, r)), (l = []);
                  break;
                case "select":
                  (i = a({}, i, { value: void 0 })),
                    (r = a({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (i = le(e, i)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" != typeof i.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Fr);
              }
              for (d in (Se(n, r), (n = null), i))
                if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && null != i[d])
                  if ("style" === d) {
                    var u = i[d];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== d &&
                      "children" !== d &&
                      "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      "autoFocus" !== d &&
                      (s.hasOwnProperty(d)
                        ? l || (l = [])
                        : (l = l || []).push(d, null));
              for (d in r) {
                var c = r[d];
                if (
                  ((u = null != i ? i[d] : void 0),
                  r.hasOwnProperty(d) && c !== u && (null != c || null != u))
                )
                  if ("style" === d)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          u[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (l || (l = []), l.push(d, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === d
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (l = l || []).push(d, c))
                      : "children" === d
                      ? ("string" != typeof c && "number" != typeof c) ||
                        (l = l || []).push(d, "" + c)
                      : "suppressContentEditableWarning" !== d &&
                        "suppressHydrationWarning" !== d &&
                        (s.hasOwnProperty(d)
                          ? (null != c && "onScroll" === d && Tr("scroll", e),
                            l || u === c || (l = []))
                          : "object" == typeof c &&
                            null !== c &&
                            c.$$typeof === I
                          ? c.toString()
                          : (l = l || []).push(d, c));
              }
              n && (l = l || []).push("style", n);
              var d = l;
              (t.updateQueue = d) && (t.flags |= 4);
            }
          }),
          (qo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var ll = "function" == typeof WeakMap ? WeakMap : Map;
        function sl(e, t, n) {
          ((n = si(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Yl || ((Yl = !0), (Xl = r)), ol(0, t);
            }),
            n
          );
        }
        function ul(e, t, n) {
          (n = si(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () {
              return ol(0, t), r(a);
            };
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" == typeof i.componentDidCatch &&
              (n.callback = function () {
                "function" != typeof r &&
                  (null === ql ? (ql = new Set([this])) : ql.add(this),
                  ol(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var cl = "function" == typeof WeakSet ? WeakSet : Set;
        function dl(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                Ns(e, t);
              }
            else t.current = null;
        }
        function hl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : $a(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Vr(t.stateNode.containerInfo));
          }
          throw Error(o(163));
        }
        function fl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 == (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var a = e;
                  (r = a.next),
                    0 != (4 & (a = a.tag)) &&
                      0 != (1 & a) &&
                      (Ds(n, e), Rs(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : $a(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && hi(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                hi(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  jr(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && wt(n))))
              );
          }
          throw Error(o(163));
        }
        function pl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" == typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var a = n.memoizedProps.style;
                (a =
                  null != a && a.hasOwnProperty("display") ? a.display : null),
                  (r.style.display = we("display", a));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function gl(e, t) {
          if (ka && "function" == typeof ka.onCommitFiberUnmount)
            try {
              ka.onCommitFiberUnmount(_a, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    a = r.destroy;
                  if (((r = r.tag), void 0 !== a))
                    if (0 != (4 & r)) Ds(t, n);
                    else {
                      r = t;
                      try {
                        a();
                      } catch (e) {
                        Ns(r, e);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (dl(t),
                "function" == typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (e) {
                  Ns(t, e);
                }
              break;
            case 5:
              dl(t);
              break;
            case 4:
              _l(e, t);
          }
        }
        function vl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function ml(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function yl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (ml(t)) break e;
              t = t.return;
            }
            throw Error(o(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(o(161));
          }
          16 & n.flags && (me(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || ml(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? bl(e, n, t) : wl(e, n, t);
        }
        function bl(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Fr));
          else if (4 !== r && null !== (e = e.child))
            for (bl(e, t, n), e = e.sibling; null !== e; )
              bl(e, t, n), (e = e.sibling);
        }
        function wl(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (wl(e, t, n), e = e.sibling; null !== e; )
              wl(e, t, n), (e = e.sibling);
        }
        function _l(e, t) {
          for (var n, r, a = t, i = !1; ; ) {
            if (!i) {
              i = a.return;
              e: for (;;) {
                if (null === i) throw Error(o(160));
                switch (((n = i.stateNode), i.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                i = i.return;
              }
              i = !0;
            }
            if (5 === a.tag || 6 === a.tag) {
              e: for (var l = e, s = a, u = s; ; )
                if ((gl(l, u), null !== u.child && 4 !== u.tag))
                  (u.child.return = u), (u = u.child);
                else {
                  if (u === s) break e;
                  for (; null === u.sibling; ) {
                    if (null === u.return || u.return === s) break e;
                    u = u.return;
                  }
                  (u.sibling.return = u.return), (u = u.sibling);
                }
              r
                ? ((l = n),
                  (s = a.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(s)
                    : l.removeChild(s))
                : n.removeChild(a.stateNode);
            } else if (4 === a.tag) {
              if (null !== a.child) {
                (n = a.stateNode.containerInfo),
                  (r = !0),
                  (a.child.return = a),
                  (a = a.child);
                continue;
              }
            } else if ((gl(e, a), null !== a.child)) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === t) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === t) return;
              4 === (a = a.return).tag && (i = !1);
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
        }
        function kl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 == (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var a = null !== e ? e.memoizedProps : r;
                e = t.type;
                var i = t.updateQueue;
                if (((t.updateQueue = null), null !== i)) {
                  for (
                    n[Kr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Ce(e, a),
                      t = Ce(e, r),
                      a = 0;
                    a < i.length;
                    a += 2
                  ) {
                    var l = i[a],
                      s = i[a + 1];
                    "style" === l
                      ? _e(n, s)
                      : "dangerouslySetInnerHTML" === l
                      ? ve(n, s)
                      : "children" === l
                      ? me(n, s)
                      : w(n, l, s, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      ue(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (i = r.value)
                          ? oe(n, !!r.multiple, i, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? oe(n, !!r.multiple, r.defaultValue, !0)
                              : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(o(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), wt(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((jl = ja()), pl(t.child, !0)),
                void Sl(t)
              );
            case 19:
              return void Sl(t);
            case 23:
            case 24:
              return void pl(t, null !== t.memoizedState);
          }
          throw Error(o(163));
        }
        function Sl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new cl()),
              t.forEach(function (t) {
                var r = Ms.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Cl(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var xl = Math.ceil,
          El = _.ReactCurrentDispatcher,
          Pl = _.ReactCurrentOwner,
          Tl = 0,
          Ll = null,
          Rl = null,
          Dl = 0,
          Ol = 0,
          Al = la(0),
          Nl = 0,
          Il = null,
          Ml = 0,
          zl = 0,
          Fl = 0,
          Gl = 0,
          Bl = null,
          jl = 0,
          Ul = 1 / 0;
        function Hl() {
          Ul = ja() + 500;
        }
        var Wl,
          Vl = null,
          Yl = !1,
          Xl = null,
          ql = null,
          $l = !1,
          Ql = null,
          Kl = 90,
          Zl = [],
          Jl = [],
          es = null,
          ts = 0,
          ns = null,
          rs = -1,
          as = 0,
          is = 0,
          os = null,
          ls = !1;
        function ss() {
          return 0 != (48 & Tl) ? ja() : -1 !== rs ? rs : (rs = ja());
        }
        function us(e) {
          if (0 == (2 & (e = e.mode))) return 1;
          if (0 == (4 & e)) return 99 === Ua() ? 1 : 2;
          if ((0 === as && (as = Ml), 0 !== qa.transition)) {
            0 !== is && (is = null !== Bl ? Bl.pendingLanes : 0), (e = as);
            var t = 4186112 & ~is;
            return (
              0 == (t &= -t) &&
                0 == (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Ua()),
            (e = Ft(
              0 != (4 & Tl) && 98 === e
                ? 12
                : (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
              as
            ))
          );
        }
        function cs(e, t, n) {
          if (50 < ts) throw ((ts = 0), (ns = null), Error(o(185)));
          if (null === (e = ds(e, t))) return null;
          jt(e, t, n), e === Ll && ((Fl |= t), 4 === Nl && ps(e, Dl));
          var r = Ua();
          1 === t
            ? 0 != (8 & Tl) && 0 == (48 & Tl)
              ? gs(e)
              : (hs(e, n), 0 === Tl && (Hl(), Ya()))
            : (0 == (4 & Tl) ||
                (98 !== r && 99 !== r) ||
                (null === es ? (es = new Set([e])) : es.add(e)),
              hs(e, n)),
            (Bl = e);
        }
        function ds(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function hs(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              a = e.pingedLanes,
              i = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var s = 31 - Ut(l),
              u = 1 << s,
              c = i[s];
            if (-1 === c) {
              if (0 == (u & r) || 0 != (u & a)) {
                (c = t), It(u);
                var d = Nt;
                i[s] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= u);
            l &= ~u;
          }
          if (((r = Mt(e, e === Ll ? Dl : 0)), (t = Nt), 0 === r))
            null !== n &&
              (n !== Ia && xa(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Ia && xa(n);
            }
            15 === t
              ? ((n = gs.bind(null, e)),
                null === za ? ((za = [n]), (Fa = Ca(Ra, Xa))) : za.push(n),
                (n = Ia))
              : 14 === t
              ? (n = Va(99, gs.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(o(358, e));
                  }
                })(t)),
                (n = Va(n, fs.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function fs(e) {
          if (((rs = -1), (is = as = 0), 0 != (48 & Tl))) throw Error(o(327));
          var t = e.callbackNode;
          if (Ls() && e.callbackNode !== t) return null;
          var n = Mt(e, e === Ll ? Dl : 0);
          if (0 === n) return null;
          var r = n,
            a = Tl;
          Tl |= 16;
          var i = ws();
          for ((Ll === e && Dl === r) || (Hl(), ys(e, r)); ; )
            try {
              Ss();
              break;
            } catch (t) {
              bs(e, t);
            }
          if (
            (ei(),
            (El.current = i),
            (Tl = a),
            null !== Rl ? (r = 0) : ((Ll = null), (Dl = 0), (r = Nl)),
            0 != (Ml & Fl))
          )
            ys(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Tl |= 64),
                e.hydrate && ((e.hydrate = !1), Vr(e.containerInfo)),
                0 !== (n = zt(e)) && (r = _s(e, n))),
              1 === r)
            )
              throw ((t = Il), ys(e, 0), ps(e, n), hs(e, ja()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                Es(e);
                break;
              case 3:
                if (
                  (ps(e, n), (62914560 & n) === n && 10 < (r = jl + 500 - ja()))
                ) {
                  if (0 !== Mt(e, 0)) break;
                  if (((a = e.suspendedLanes) & n) !== n) {
                    ss(), (e.pingedLanes |= e.suspendedLanes & a);
                    break;
                  }
                  e.timeoutHandle = Hr(Es.bind(null, e), r);
                  break;
                }
                Es(e);
                break;
              case 4:
                if ((ps(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, a = -1; 0 < n; ) {
                  var l = 31 - Ut(n);
                  (i = 1 << l), (l = r[l]) > a && (a = l), (n &= ~i);
                }
                if (
                  ((n = a),
                  10 <
                    (n =
                      (120 > (n = ja() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * xl(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Hr(Es.bind(null, e), n);
                  break;
                }
                Es(e);
                break;
              default:
                throw Error(o(329));
            }
          }
          return hs(e, ja()), e.callbackNode === t ? fs.bind(null, e) : null;
        }
        function ps(e, t) {
          for (
            t &= ~Gl,
              t &= ~Fl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Ut(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function gs(e) {
          if (0 != (48 & Tl)) throw Error(o(327));
          if ((Ls(), e === Ll && 0 != (e.expiredLanes & Dl))) {
            var t = Dl,
              n = _s(e, t);
            0 != (Ml & Fl) && (n = _s(e, (t = Mt(e, t))));
          } else n = _s(e, (t = Mt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Tl |= 64),
              e.hydrate && ((e.hydrate = !1), Vr(e.containerInfo)),
              0 !== (t = zt(e)) && (n = _s(e, t))),
            1 === n)
          )
            throw ((n = Il), ys(e, 0), ps(e, t), hs(e, ja()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Es(e),
            hs(e, ja()),
            null
          );
        }
        function vs(e, t) {
          ua(Al, Ol), (Ol |= t), (Ml |= t);
        }
        function ms() {
          (Ol = Al.current), sa(Al);
        }
        function ys(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Wr(n)), null !== Rl))
            for (n = Rl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && va();
                  break;
                case 3:
                  Oi(), sa(ha), sa(da), Xi();
                  break;
                case 5:
                  Ni(r);
                  break;
                case 4:
                  Oi();
                  break;
                case 13:
                case 19:
                  sa(Ii);
                  break;
                case 10:
                  ti(r);
                  break;
                case 23:
                case 24:
                  ms();
              }
              n = n.return;
            }
          (Ll = e),
            (Rl = Bs(e.current, null)),
            (Dl = Ol = Ml = t),
            (Nl = 0),
            (Il = null),
            (Gl = Fl = zl = 0);
        }
        function bs(e, t) {
          for (;;) {
            var n = Rl;
            try {
              if ((ei(), (qi.current = Ro), eo)) {
                for (var r = Ki.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                eo = !1;
              }
              if (
                ((Qi = 0),
                (Ji = Zi = Ki = null),
                (to = !1),
                (Pl.current = null),
                null === n || null === n.return)
              ) {
                (Nl = 1), (Il = t), (Rl = null);
                break;
              }
              e: {
                var i = e,
                  o = n.return,
                  l = n,
                  s = t;
                if (
                  ((t = Dl),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== s &&
                    "object" == typeof s &&
                    "function" == typeof s.then)
                ) {
                  var u = s;
                  if (0 == (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var d = 0 != (1 & Ii.current),
                    h = o;
                  do {
                    var f;
                    if ((f = 13 === h.tag)) {
                      var p = h.memoizedState;
                      if (null !== p) f = null !== p.dehydrated;
                      else {
                        var g = h.memoizedProps;
                        f =
                          void 0 !== g.fallback &&
                          (!0 !== g.unstable_avoidThisFallback || !d);
                      }
                    }
                    if (f) {
                      var v = h.updateQueue;
                      if (null === v) {
                        var m = new Set();
                        m.add(u), (h.updateQueue = m);
                      } else v.add(u);
                      if (0 == (2 & h.mode)) {
                        if (
                          ((h.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var y = si(-1, 1);
                            (y.tag = 2), ui(l, y);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (s = void 0), (l = t);
                      var b = i.pingCache;
                      if (
                        (null === b
                          ? ((b = i.pingCache = new ll()),
                            (s = new Set()),
                            b.set(u, s))
                          : void 0 === (s = b.get(u)) &&
                            ((s = new Set()), b.set(u, s)),
                        !s.has(l))
                      ) {
                        s.add(l);
                        var w = Is.bind(null, i, u, l);
                        u.then(w, w);
                      }
                      (h.flags |= 4096), (h.lanes = t);
                      break e;
                    }
                    h = h.return;
                  } while (null !== h);
                  s = Error(
                    (X(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== Nl && (Nl = 2), (s = il(s, l)), (h = o);
                do {
                  switch (h.tag) {
                    case 3:
                      (i = s),
                        (h.flags |= 4096),
                        (t &= -t),
                        (h.lanes |= t),
                        ci(h, sl(0, i, t));
                      break e;
                    case 1:
                      i = s;
                      var _ = h.type,
                        k = h.stateNode;
                      if (
                        0 == (64 & h.flags) &&
                        ("function" == typeof _.getDerivedStateFromError ||
                          (null !== k &&
                            "function" == typeof k.componentDidCatch &&
                            (null === ql || !ql.has(k))))
                      ) {
                        (h.flags |= 4096),
                          (t &= -t),
                          (h.lanes |= t),
                          ci(h, ul(h, i, t));
                        break e;
                      }
                  }
                  h = h.return;
                } while (null !== h);
              }
              xs(n);
            } catch (e) {
              (t = e), Rl === n && null !== n && (Rl = n = n.return);
              continue;
            }
            break;
          }
        }
        function ws() {
          var e = El.current;
          return (El.current = Ro), null === e ? Ro : e;
        }
        function _s(e, t) {
          var n = Tl;
          Tl |= 16;
          var r = ws();
          for ((Ll === e && Dl === t) || ys(e, t); ; )
            try {
              ks();
              break;
            } catch (t) {
              bs(e, t);
            }
          if ((ei(), (Tl = n), (El.current = r), null !== Rl))
            throw Error(o(261));
          return (Ll = null), (Dl = 0), Nl;
        }
        function ks() {
          for (; null !== Rl; ) Cs(Rl);
        }
        function Ss() {
          for (; null !== Rl && !Ea(); ) Cs(Rl);
        }
        function Cs(e) {
          var t = Wl(e.alternate, e, Ol);
          (e.memoizedProps = e.pendingProps),
            null === t ? xs(e) : (Rl = t),
            (Pl.current = null);
        }
        function xs(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (2048 & t.flags))) {
              if (null !== (n = rl(n, t, Ol))) return void (Rl = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 != (1073741824 & Ol) ||
                0 == (4 & n.mode)
              ) {
                for (var r = 0, a = n.child; null !== a; )
                  (r |= a.lanes | a.childLanes), (a = a.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 == (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = al(t))) return (n.flags &= 2047), void (Rl = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Rl = t);
            Rl = t = e;
          } while (null !== t);
          0 === Nl && (Nl = 5);
        }
        function Es(e) {
          var t = Ua();
          return Wa(99, Ps.bind(null, e, t)), null;
        }
        function Ps(e, t) {
          do {
            Ls();
          } while (null !== Ql);
          if (0 != (48 & Tl)) throw Error(o(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(o(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            a = r,
            i = e.pendingLanes & ~a;
          (e.pendingLanes = a),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= a),
            (e.mutableReadLanes &= a),
            (e.entangledLanes &= a),
            (a = e.entanglements);
          for (var l = e.eventTimes, s = e.expirationTimes; 0 < i; ) {
            var u = 31 - Ut(i),
              c = 1 << u;
            (a[u] = 0), (l[u] = -1), (s[u] = -1), (i &= ~c);
          }
          if (
            (null !== es && 0 == (24 & r) && es.has(e) && es.delete(e),
            e === Ll && ((Rl = Ll = null), (Dl = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((a = Tl),
              (Tl |= 32),
              (Pl.current = null),
              (Gr = Xt),
              gr((l = pr())))
            ) {
              if ("selectionStart" in l)
                s = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((s = ((s = l.ownerDocument) && s.defaultView) || window),
                  (c = s.getSelection && s.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (s = c.anchorNode),
                    (i = c.anchorOffset),
                    (u = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    s.nodeType, u.nodeType;
                  } catch (e) {
                    s = null;
                    break e;
                  }
                  var d = 0,
                    h = -1,
                    f = -1,
                    p = 0,
                    g = 0,
                    v = l,
                    m = null;
                  t: for (;;) {
                    for (
                      var y;
                      v !== s || (0 !== i && 3 !== v.nodeType) || (h = d + i),
                        v !== u || (0 !== c && 3 !== v.nodeType) || (f = d + c),
                        3 === v.nodeType && (d += v.nodeValue.length),
                        null !== (y = v.firstChild);

                    )
                      (m = v), (v = y);
                    for (;;) {
                      if (v === l) break t;
                      if (
                        (m === s && ++p === i && (h = d),
                        m === u && ++g === c && (f = d),
                        null !== (y = v.nextSibling))
                      )
                        break;
                      m = (v = m).parentNode;
                    }
                    v = y;
                  }
                  s = -1 === h || -1 === f ? null : { start: h, end: f };
                } else s = null;
              s = s || { start: 0, end: 0 };
            } else s = null;
            (Br = { focusedElem: l, selectionRange: s }),
              (Xt = !1),
              (os = null),
              (ls = !1),
              (Vl = r);
            do {
              try {
                Ts();
              } catch (e) {
                if (null === Vl) throw Error(o(330));
                Ns(Vl, e), (Vl = Vl.nextEffect);
              }
            } while (null !== Vl);
            (os = null), (Vl = r);
            do {
              try {
                for (l = e; null !== Vl; ) {
                  var b = Vl.flags;
                  if ((16 & b && me(Vl.stateNode, ""), 128 & b)) {
                    var w = Vl.alternate;
                    if (null !== w) {
                      var _ = w.ref;
                      null !== _ &&
                        ("function" == typeof _ ? _(null) : (_.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      yl(Vl), (Vl.flags &= -3);
                      break;
                    case 6:
                      yl(Vl), (Vl.flags &= -3), kl(Vl.alternate, Vl);
                      break;
                    case 1024:
                      Vl.flags &= -1025;
                      break;
                    case 1028:
                      (Vl.flags &= -1025), kl(Vl.alternate, Vl);
                      break;
                    case 4:
                      kl(Vl.alternate, Vl);
                      break;
                    case 8:
                      _l(l, (s = Vl));
                      var k = s.alternate;
                      vl(s), null !== k && vl(k);
                  }
                  Vl = Vl.nextEffect;
                }
              } catch (e) {
                if (null === Vl) throw Error(o(330));
                Ns(Vl, e), (Vl = Vl.nextEffect);
              }
            } while (null !== Vl);
            if (
              ((_ = Br),
              (w = pr()),
              (b = _.focusedElem),
              (l = _.selectionRange),
              w !== b &&
                b &&
                b.ownerDocument &&
                fr(b.ownerDocument.documentElement, b))
            ) {
              null !== l &&
                gr(b) &&
                ((w = l.start),
                void 0 === (_ = l.end) && (_ = w),
                "selectionStart" in b
                  ? ((b.selectionStart = w),
                    (b.selectionEnd = Math.min(_, b.value.length)))
                  : (_ =
                      ((w = b.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((_ = _.getSelection()),
                    (s = b.textContent.length),
                    (k = Math.min(l.start, s)),
                    (l = void 0 === l.end ? k : Math.min(l.end, s)),
                    !_.extend && k > l && ((s = l), (l = k), (k = s)),
                    (s = hr(b, k)),
                    (i = hr(b, l)),
                    s &&
                      i &&
                      (1 !== _.rangeCount ||
                        _.anchorNode !== s.node ||
                        _.anchorOffset !== s.offset ||
                        _.focusNode !== i.node ||
                        _.focusOffset !== i.offset) &&
                      ((w = w.createRange()).setStart(s.node, s.offset),
                      _.removeAllRanges(),
                      k > l
                        ? (_.addRange(w), _.extend(i.node, i.offset))
                        : (w.setEnd(i.node, i.offset), _.addRange(w))))),
                (w = []);
              for (_ = b; (_ = _.parentNode); )
                1 === _.nodeType &&
                  w.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
              for (
                "function" == typeof b.focus && b.focus(), b = 0;
                b < w.length;
                b++
              )
                ((_ = w[b]).element.scrollLeft = _.left),
                  (_.element.scrollTop = _.top);
            }
            (Xt = !!Gr), (Br = Gr = null), (e.current = n), (Vl = r);
            do {
              try {
                for (b = e; null !== Vl; ) {
                  var S = Vl.flags;
                  if ((36 & S && fl(b, Vl.alternate, Vl), 128 & S)) {
                    w = void 0;
                    var C = Vl.ref;
                    if (null !== C) {
                      var x = Vl.stateNode;
                      Vl.tag,
                        (w = x),
                        "function" == typeof C ? C(w) : (C.current = w);
                    }
                  }
                  Vl = Vl.nextEffect;
                }
              } catch (e) {
                if (null === Vl) throw Error(o(330));
                Ns(Vl, e), (Vl = Vl.nextEffect);
              }
            } while (null !== Vl);
            (Vl = null), Ma(), (Tl = a);
          } else e.current = n;
          if ($l) ($l = !1), (Ql = e), (Kl = t);
          else
            for (Vl = r; null !== Vl; )
              (t = Vl.nextEffect),
                (Vl.nextEffect = null),
                8 & Vl.flags &&
                  (((S = Vl).sibling = null), (S.stateNode = null)),
                (Vl = t);
          if (
            (0 === (r = e.pendingLanes) && (ql = null),
            1 === r ? (e === ns ? ts++ : ((ts = 0), (ns = e))) : (ts = 0),
            (n = n.stateNode),
            ka && "function" == typeof ka.onCommitFiberRoot)
          )
            try {
              ka.onCommitFiberRoot(_a, n, void 0, 64 == (64 & n.current.flags));
            } catch (e) {}
          if ((hs(e, ja()), Yl)) throw ((Yl = !1), (e = Xl), (Xl = null), e);
          return 0 != (8 & Tl) || Ya(), null;
        }
        function Ts() {
          for (; null !== Vl; ) {
            var e = Vl.alternate;
            ls ||
              null === os ||
              (0 != (8 & Vl.flags)
                ? Ze(Vl, os) && (ls = !0)
                : 13 === Vl.tag && Cl(e, Vl) && Ze(Vl, os) && (ls = !0));
            var t = Vl.flags;
            0 != (256 & t) && hl(e, Vl),
              0 == (512 & t) ||
                $l ||
                (($l = !0),
                Va(97, function () {
                  return Ls(), null;
                })),
              (Vl = Vl.nextEffect);
          }
        }
        function Ls() {
          if (90 !== Kl) {
            var e = 97 < Kl ? 97 : Kl;
            return (Kl = 90), Wa(e, Os);
          }
          return !1;
        }
        function Rs(e, t) {
          Zl.push(t, e),
            $l ||
              (($l = !0),
              Va(97, function () {
                return Ls(), null;
              }));
        }
        function Ds(e, t) {
          Jl.push(t, e),
            $l ||
              (($l = !0),
              Va(97, function () {
                return Ls(), null;
              }));
        }
        function Os() {
          if (null === Ql) return !1;
          var e = Ql;
          if (((Ql = null), 0 != (48 & Tl))) throw Error(o(331));
          var t = Tl;
          Tl |= 32;
          var n = Jl;
          Jl = [];
          for (var r = 0; r < n.length; r += 2) {
            var a = n[r],
              i = n[r + 1],
              l = a.destroy;
            if (((a.destroy = void 0), "function" == typeof l))
              try {
                l();
              } catch (e) {
                if (null === i) throw Error(o(330));
                Ns(i, e);
              }
          }
          for (n = Zl, Zl = [], r = 0; r < n.length; r += 2) {
            (a = n[r]), (i = n[r + 1]);
            try {
              var s = a.create;
              a.destroy = s();
            } catch (e) {
              if (null === i) throw Error(o(330));
              Ns(i, e);
            }
          }
          for (s = e.current.firstEffect; null !== s; )
            (e = s.nextEffect),
              (s.nextEffect = null),
              8 & s.flags && ((s.sibling = null), (s.stateNode = null)),
              (s = e);
          return (Tl = t), Ya(), !0;
        }
        function As(e, t, n) {
          ui(e, (t = sl(0, (t = il(n, t)), 1))),
            (t = ss()),
            null !== (e = ds(e, 1)) && (jt(e, 1, t), hs(e, t));
        }
        function Ns(e, t) {
          if (3 === e.tag) As(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                As(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === ql || !ql.has(r)))
                ) {
                  var a = ul(n, (e = il(t, e)), 1);
                  if ((ui(n, a), (a = ss()), null !== (n = ds(n, 1))))
                    jt(n, 1, a), hs(n, a);
                  else if (
                    "function" == typeof r.componentDidCatch &&
                    (null === ql || !ql.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (e) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Is(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ss()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ll === e &&
              (Dl & n) === n &&
              (4 === Nl ||
              (3 === Nl && (62914560 & Dl) === Dl && 500 > ja() - jl)
                ? ys(e, 0)
                : (Gl |= n)),
            hs(e, t);
        }
        function Ms(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 == (t = 0) &&
              (0 == (2 & (t = e.mode))
                ? (t = 1)
                : 0 == (4 & t)
                ? (t = 99 === Ua() ? 1 : 2)
                : (0 === as && (as = Ml),
                  0 === (t = Gt(62914560 & ~as)) && (t = 4194304))),
            (n = ss()),
            null !== (e = ds(e, t)) && (jt(e, t, n), hs(e, n));
        }
        function zs(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Fs(e, t, n, r) {
          return new zs(e, t, n, r);
        }
        function Gs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Bs(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Fs(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function js(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" == typeof e)) Gs(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case C:
                return Us(n.children, a, i, t);
              case M:
                (l = 8), (a |= 16);
                break;
              case x:
                (l = 8), (a |= 1);
                break;
              case E:
                return (
                  ((e = Fs(12, n, t, 8 | a)).elementType = E),
                  (e.type = E),
                  (e.lanes = i),
                  e
                );
              case R:
                return (
                  ((e = Fs(13, n, t, a)).type = R),
                  (e.elementType = R),
                  (e.lanes = i),
                  e
                );
              case D:
                return (
                  ((e = Fs(19, n, t, a)).elementType = D), (e.lanes = i), e
                );
              case z:
                return Hs(n, a, i, t);
              case F:
                return (
                  ((e = Fs(24, n, t, a)).elementType = F), (e.lanes = i), e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      l = 10;
                      break e;
                    case T:
                      l = 9;
                      break e;
                    case L:
                      l = 11;
                      break e;
                    case O:
                      l = 14;
                      break e;
                    case A:
                      (l = 16), (r = null);
                      break e;
                    case N:
                      l = 22;
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Fs(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Us(e, t, n, r) {
          return ((e = Fs(7, e, r, t)).lanes = n), e;
        }
        function Hs(e, t, n, r) {
          return ((e = Fs(23, e, r, t)).elementType = z), (e.lanes = n), e;
        }
        function Ws(e, t, n) {
          return ((e = Fs(6, e, null, t)).lanes = n), e;
        }
        function Vs(e, t, n) {
          return (
            ((t = Fs(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ys(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Bt(0)),
            (this.expirationTimes = Bt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Bt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Xs(e, t, n, r) {
          var a = t.current,
            i = ss(),
            l = us(a);
          e: if (n) {
            t: {
              if ($e((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(o(170));
              var s = n;
              do {
                switch (s.tag) {
                  case 3:
                    s = s.stateNode.context;
                    break t;
                  case 1:
                    if (ga(s.type)) {
                      s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                s = s.return;
              } while (null !== s);
              throw Error(o(171));
            }
            if (1 === n.tag) {
              var u = n.type;
              if (ga(u)) {
                n = ya(n, u, s);
                break e;
              }
            }
            n = s;
          } else n = ca;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = si(i, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            ui(a, t),
            cs(a, l, i),
            l
          );
        }
        function qs(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function $s(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qs(e, t) {
          $s(e, t), (e = e.alternate) && $s(e, t);
        }
        function Ks(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Ys(e, t, null != n && !0 === n.hydrate)),
            (t = Fs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            oi(t),
            (e[Zr] = n.current),
            Rr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var a = (t = r[e])._getVersion;
              (a = a(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, a])
                  : n.mutableSourceEagerHydrationData.push(t, a);
            }
          this._internalRoot = n;
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Js(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i._internalRoot;
            if ("function" == typeof a) {
              var l = a;
              a = function () {
                var e = qs(o);
                l.call(e);
              };
            }
            Xs(t, o, e, a);
          } else {
            if (
              ((i = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new Ks(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (o = i._internalRoot),
              "function" == typeof a)
            ) {
              var s = a;
              a = function () {
                var e = qs(o);
                s.call(e);
              };
            }
            !(function (e, t) {
              var n = Tl;
              (Tl &= -2), (Tl |= 8);
              try {
                e(t);
              } finally {
                0 === (Tl = n) && (Hl(), Ya());
              }
            })(function () {
              Xs(t, o, e, a);
            });
          }
          return qs(o);
        }
        (Wl = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ha.current) Io = !0;
            else {
              if (0 == (n & r)) {
                switch (((Io = !1), t.tag)) {
                  case 3:
                    Vo(t), Vi();
                    break;
                  case 5:
                    Ai(t);
                    break;
                  case 1:
                    ga(t.type) && ba(t);
                    break;
                  case 4:
                    Di(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var a = t.type._context;
                    ua(Qa, a._currentValue), (a._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 != (n & t.child.childLanes)
                        ? Qo(e, t, n)
                        : (ua(Ii, 1 & Ii.current),
                          null !== (t = tl(e, t, n)) ? t.sibling : null);
                    ua(Ii, 1 & Ii.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                      if (r) return el(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (a = t.memoizedState) &&
                        ((a.rendering = null),
                        (a.tail = null),
                        (a.lastEffect = null)),
                      ua(Ii, Ii.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Bo(e, t, n);
                }
                return tl(e, t, n);
              }
              Io = 0 != (16384 & e.flags);
            }
          else Io = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = pa(t, da.current)),
                ri(t, n),
                (a = ao(null, t, r, e, a, n)),
                (t.flags |= 1),
                "object" == typeof a &&
                  null !== a &&
                  "function" == typeof a.render &&
                  void 0 === a.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  ga(r))
                ) {
                  var i = !0;
                  ba(t);
                } else i = !1;
                (t.memoizedState =
                  null !== a.state && void 0 !== a.state ? a.state : null),
                  oi(t);
                var l = r.getDerivedStateFromProps;
                "function" == typeof l && pi(t, r, l, e),
                  (a.updater = gi),
                  (t.stateNode = a),
                  (a._reactInternals = t),
                  bi(t, r, e, n),
                  (t = Wo(null, t, r, !0, i, n));
              } else (t.tag = 0), Mo(null, t, a, n), (t = t.child);
              return t;
            case 16:
              a = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (a = (i = a._init)(a._payload)),
                  (t.type = a),
                  (i = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Gs(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === L) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = $a(a, e)),
                  i)
                ) {
                  case 0:
                    t = Uo(null, t, a, e, n);
                    break e;
                  case 1:
                    t = Ho(null, t, a, e, n);
                    break e;
                  case 11:
                    t = zo(null, t, a, e, n);
                    break e;
                  case 14:
                    t = Fo(null, t, a, $a(a.type, e), r, n);
                    break e;
                }
                throw Error(o(306, a, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Uo(e, t, r, (a = t.elementType === r ? a : $a(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ho(e, t, r, (a = t.elementType === r ? a : $a(r, a)), n)
              );
            case 3:
              if ((Vo(t), (r = t.updateQueue), null === e || null === r))
                throw Error(o(282));
              if (
                ((r = t.pendingProps),
                (a = null !== (a = t.memoizedState) ? a.element : null),
                li(e, t),
                di(t, r, null, n),
                (r = t.memoizedState.element) === a)
              )
                Vi(), (t = tl(e, t, n));
              else {
                if (
                  ((i = (a = t.stateNode).hydrate) &&
                    ((Fi = Yr(t.stateNode.containerInfo.firstChild)),
                    (zi = t),
                    (i = Gi = !0)),
                  i)
                ) {
                  if (null != (e = a.mutableSourceEagerHydrationData))
                    for (a = 0; a < e.length; a += 2)
                      ((i = e[a])._workInProgressVersionPrimary = e[a + 1]),
                        Yi.push(i);
                  for (n = xi(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Mo(e, t, r, n), Vi();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ai(t),
                null === e && Ui(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                Ur(r, a)
                  ? (l = null)
                  : null !== i && Ur(r, i) && (t.flags |= 16),
                jo(e, t),
                Mo(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Ui(t), null;
            case 13:
              return Qo(e, t, n);
            case 4:
              return (
                Di(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ci(t, null, r, n)) : Mo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                zo(e, t, r, (a = t.elementType === r ? a : $a(r, a)), n)
              );
            case 7:
              return Mo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Mo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value);
                var s = t.type._context;
                if (
                  (ua(Qa, s._currentValue), (s._currentValue = i), null !== l)
                )
                  if (
                    ((s = l.value),
                    0 ==
                      (i = sr(s, i)
                        ? 0
                        : 0 |
                          ("function" == typeof r._calculateChangedBits
                            ? r._calculateChangedBits(s, i)
                            : 1073741823)))
                  ) {
                    if (l.children === a.children && !ha.current) {
                      t = tl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (s = t.child) && (s.return = t);
                      null !== s;

                    ) {
                      var u = s.dependencies;
                      if (null !== u) {
                        l = s.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r && 0 != (c.observedBits & i)) {
                            1 === s.tag &&
                              (((c = si(-1, n & -n)).tag = 2), ui(s, c)),
                              (s.lanes |= n),
                              null !== (c = s.alternate) && (c.lanes |= n),
                              ni(s.return, n),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === s.tag && s.type === t.type ? null : s.child;
                      if (null !== l) l.return = s;
                      else
                        for (l = s; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (s = l.sibling)) {
                            (s.return = l.return), (l = s);
                            break;
                          }
                          l = l.return;
                        }
                      s = l;
                    }
                Mo(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = (i = t.pendingProps).children),
                ri(t, n),
                (r = r((a = ai(a, i.unstable_observedBits)))),
                (t.flags |= 1),
                Mo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = $a((a = t.type), t.pendingProps)),
                Fo(e, t, a, (i = $a(a.type, i)), r, n)
              );
            case 15:
              return Go(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : $a(r, a)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                ga(r) ? ((e = !0), ba(t)) : (e = !1),
                ri(t, n),
                mi(t, r, a),
                bi(t, r, a, n),
                Wo(null, t, r, !0, e, n)
              );
            case 19:
              return el(e, t, n);
            case 23:
            case 24:
              return Bo(e, t, n);
          }
          throw Error(o(156, t.tag));
        }),
          (Ks.prototype.render = function (e) {
            Xs(e, this._internalRoot, null, null);
          }),
          (Ks.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Xs(null, e, null, function () {
              t[Zr] = null;
            });
          }),
          (Je = function (e) {
            13 === e.tag && (cs(e, 4, ss()), Qs(e, 4));
          }),
          (et = function (e) {
            13 === e.tag && (cs(e, 67108864, ss()), Qs(e, 67108864));
          }),
          (tt = function (e) {
            if (13 === e.tag) {
              var t = ss(),
                n = us(e);
              cs(e, n, t), Qs(e, n);
            }
          }),
          (nt = function (e, t) {
            return t();
          }),
          (Ee = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ra(r);
                      if (!a) throw Error(o(90));
                      K(r), ne(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ue(e, n);
                break;
              case "select":
                null != (t = n.value) && oe(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = function (e, t) {
            var n = Tl;
            Tl |= 1;
            try {
              return e(t);
            } finally {
              0 === (Tl = n) && (Hl(), Ya());
            }
          }),
          (Ae = function (e, t, n, r, a) {
            var i = Tl;
            Tl |= 4;
            try {
              return Wa(98, e.bind(null, t, n, r, a));
            } finally {
              0 === (Tl = i) && (Hl(), Ya());
            }
          }),
          (Ne = function () {
            0 == (49 & Tl) &&
              ((function () {
                if (null !== es) {
                  var e = es;
                  (es = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), hs(e, ja());
                    });
                }
                Ya();
              })(),
              Ls());
          }),
          (Ie = function (e, t) {
            var n = Tl;
            Tl |= 2;
            try {
              return e(t);
            } finally {
              0 === (Tl = n) && (Hl(), Ya());
            }
          });
        var eu = {
            findFiberByHostInstance: ea,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          tu = {
            bundleType: eu.bundleType,
            version: eu.version,
            rendererPackageName: eu.rendererPackageName,
            rendererConfig: eu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: _.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null ===
                (e = (function (e) {
                  if (
                    ((e = (function (e) {
                      var t = e.alternate;
                      if (!t) {
                        if (null === (t = $e(e))) throw Error(o(188));
                        return t !== e ? null : e;
                      }
                      for (var n = e, r = t; ; ) {
                        var a = n.return;
                        if (null === a) break;
                        var i = a.alternate;
                        if (null === i) {
                          if (null !== (r = a.return)) {
                            n = r;
                            continue;
                          }
                          break;
                        }
                        if (a.child === i.child) {
                          for (i = a.child; i; ) {
                            if (i === n) return Ke(a), e;
                            if (i === r) return Ke(a), t;
                            i = i.sibling;
                          }
                          throw Error(o(188));
                        }
                        if (n.return !== r.return) (n = a), (r = i);
                        else {
                          for (var l = !1, s = a.child; s; ) {
                            if (s === n) {
                              (l = !0), (n = a), (r = i);
                              break;
                            }
                            if (s === r) {
                              (l = !0), (r = a), (n = i);
                              break;
                            }
                            s = s.sibling;
                          }
                          if (!l) {
                            for (s = i.child; s; ) {
                              if (s === n) {
                                (l = !0), (n = i), (r = a);
                                break;
                              }
                              if (s === r) {
                                (l = !0), (r = i), (n = a);
                                break;
                              }
                              s = s.sibling;
                            }
                            if (!l) throw Error(o(189));
                          }
                        }
                        if (n.alternate !== r) throw Error(o(190));
                      }
                      if (3 !== n.tag) throw Error(o(188));
                      return n.stateNode.current === n ? e : t;
                    })(e)),
                    !e)
                  )
                    return null;
                  for (var t = e; ; ) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) (t.child.return = t), (t = t.child);
                    else {
                      if (t === e) break;
                      for (; !t.sibling; ) {
                        if (!t.return || t.return === e) return null;
                        t = t.return;
                      }
                      (t.sibling.return = t.return), (t = t.sibling);
                    }
                  }
                  return null;
                })(e))
                ? null
                : e.stateNode;
            },
            findFiberByHostInstance:
              eu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var nu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!nu.isDisabled && nu.supportsFiber)
            try {
              (_a = nu.inject(tu)), (ka = nu);
            } catch (ge) {}
        }
        t.render = function (e, t, n) {
          if (!Zs(t)) throw Error(o(200));
          return Js(null, e, t, !1, n);
        };
      },
      60: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(583));
      },
      28: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          i = n(645),
          o = n.n(i)()(a());
        o.push([
          e.id,
          'body {\n  margin: 0;\n  background-color: #000000;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n#canvas {\n  margin: auto;\n  width: 600px;\n}\n',
          "",
        ]);
        const l = o;
      },
      718: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          i = n(645),
          o = n.n(i)()(a());
        o.push([
          e.id,
          ".teC16td1lHMHG_rTVNeA {\n  width: 100vw;\n  text-align: center;\n}\n\n.BzQ5hfmYChX_stMwJT5k {\n  display: flex;\n  padding-top: 30px;\n  justify-content: center;\n}\n\n.Eq9un_yPOclJ02D8UMFe {\n  cursor: pointer;\n  user-select: none;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  border-radius: 50px;\n  color: rgb(196, 196, 196);\n  padding: 5px 10px 5px 10px;\n  border: 1px solid #b5b5b5;\n}\n",
          "",
        ]),
          (o.locals = {
            name: "teC16td1lHMHG_rTVNeA",
            header: "BzQ5hfmYChX_stMwJT5k",
            refreshButton: "Eq9un_yPOclJ02D8UMFe",
          });
        const l = o;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, a, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var o = {};
              if (r)
                for (var l = 0; l < this.length; l++) {
                  var s = this[l][0];
                  null != s && (o[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var c = [].concat(e[u]);
                (r && o[c[0]]) ||
                  (void 0 !== i &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = i)),
                  n &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = n))
                      : (c[2] = n)),
                  a &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = a))
                      : (c[4] = "".concat(a))),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      418: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function a(e) {
          if (null == e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, i) {
              for (var o, l, s = a(e), u = 1; u < arguments.length; u++) {
                for (var c in (o = Object(arguments[u])))
                  n.call(o, c) && (s[c] = o[c]);
                if (t) {
                  l = t(o);
                  for (var d = 0; d < l.length; d++)
                    r.call(o, l[d]) && (s[l[d]] = o[l[d]]);
                }
              }
              return s;
            };
      },
      209: (e, t, n) => {
        "use strict";
        var r,
          a =
            (r = n(294)) && "object" == typeof r && "default" in r
              ? r.default
              : r;
        function i(e) {
          return (
            i.warnAboutHMRDisabled &&
              ((i.warnAboutHMRDisabled = !0),
              console.error(
                "React-Hot-Loader: misconfiguration detected, using production version in non-production environment."
              ),
              console.error(
                "React-Hot-Loader: Hot Module Replacement is not enabled."
              )),
            a.Children.only(e.children)
          );
        }
        i.warnAboutHMRDisabled = !1;
      },
      658: (e, t, n) => {
        "use strict";
        n(209);
      },
      570: (e, t) => {
        t.w = function (e) {
          return e;
        };
      },
      408: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          f = Symbol.iterator,
          p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          v = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || p);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = m.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), g(w, m.prototype), (w.isPureReactComponent = !0);
        var _ = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, r) {
          var a,
            i = {},
            o = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, a) && !C.hasOwnProperty(a) && (i[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) i.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === i[a] && (i[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: l,
            props: i,
            _owner: S.current,
          };
        }
        function E(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function T(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function L(e, t, a, i, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === i ? "." + T(s, 0) : i),
              _(o)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  L(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (E(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (i = "" === i ? "." : i + ":"), _(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + T((l = e[u]), u);
              s += L(l, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += L((l = l.value), t, a, (c = i + T(l, u++)), o);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            L(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function D(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var O = { current: null },
          A = { transition: null },
          N = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = m),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = g({}, e.props),
              i = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = S.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !C.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: e },
              _init: D,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.0.0-fc46dba67-20220329");
      },
      294: (e, t, n) => {
        "use strict";
        e.exports = n(408);
      },
      53: (e, t) => {
        "use strict";
        var n, r, a, i;
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        if (
          "undefined" == typeof window ||
          "function" != typeof MessageChannel
        ) {
          var u = null,
            c = null,
            d = function () {
              if (null !== u)
                try {
                  var e = t.unstable_now();
                  u(!0, e), (u = null);
                } catch (e) {
                  throw (setTimeout(d, 0), e);
                }
            };
          (n = function (e) {
            null !== u ? setTimeout(n, 0, e) : ((u = e), setTimeout(d, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (a = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (i = t.unstable_forceFrameRate = function () {});
        } else {
          var h = window.setTimeout,
            f = window.clearTimeout;
          if ("undefined" != typeof console) {
            var p = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" != typeof p &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var g = !1,
            v = null,
            m = -1,
            y = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (i = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            _ = w.port2;
          (w.port1.onmessage = function () {
            if (null !== v) {
              var e = t.unstable_now();
              b = e + y;
              try {
                v(!0, e) ? _.postMessage(null) : ((g = !1), (v = null));
              } catch (e) {
                throw (_.postMessage(null), e);
              }
            } else g = !1;
          }),
            (n = function (e) {
              (v = e), g || ((g = !0), _.postMessage(null));
            }),
            (r = function (e, n) {
              m = h(function () {
                e(t.unstable_now());
              }, n);
            }),
            (a = function () {
              f(m), (m = -1);
            });
        }
        function k(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(void 0 !== a && 0 < x(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function S(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function C(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, a = e.length; r < a; ) {
                var i = 2 * (r + 1) - 1,
                  o = e[i],
                  l = i + 1,
                  s = e[l];
                if (void 0 !== o && 0 > x(o, n))
                  void 0 !== s && 0 > x(s, o)
                    ? ((e[r] = s), (e[l] = n), (r = l))
                    : ((e[r] = o), (e[i] = n), (r = i));
                else {
                  if (!(void 0 !== s && 0 > x(s, n))) break e;
                  (e[r] = s), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function x(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var E = [],
          P = [],
          T = 1,
          L = null,
          R = 3,
          D = !1,
          O = !1,
          A = !1;
        function N(e) {
          for (var t = S(P); null !== t; ) {
            if (null === t.callback) C(P);
            else {
              if (!(t.startTime <= e)) break;
              C(P), (t.sortIndex = t.expirationTime), k(E, t);
            }
            t = S(P);
          }
        }
        function I(e) {
          if (((A = !1), N(e), !O))
            if (null !== S(E)) (O = !0), n(M);
            else {
              var t = S(P);
              null !== t && r(I, t.startTime - e);
            }
        }
        function M(e, n) {
          (O = !1), A && ((A = !1), a()), (D = !0);
          var i = R;
          try {
            for (
              N(n), L = S(E);
              null !== L &&
              (!(L.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var o = L.callback;
              if ("function" == typeof o) {
                (L.callback = null), (R = L.priorityLevel);
                var l = o(L.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof l
                    ? (L.callback = l)
                    : L === S(E) && C(E),
                  N(n);
              } else C(E);
              L = S(E);
            }
            if (null !== L) var s = !0;
            else {
              var u = S(P);
              null !== u && r(I, u.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (L = null), (R = i), (D = !1);
          }
        }
        var z = i;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            O || D || ((O = !0), n(M));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return S(E);
          }),
          (t.unstable_next = function (e) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = R;
            }
            var n = R;
            R = t;
            try {
              return e();
            } finally {
              R = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = z),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = R;
            R = e;
            try {
              return t();
            } finally {
              R = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, o) {
            var l = t.unstable_now();
            switch (
              ((o =
                "object" == typeof o &&
                null !== o &&
                "number" == typeof (o = o.delay) &&
                0 < o
                  ? l + o
                  : l),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: T++,
                callback: i,
                priorityLevel: e,
                startTime: o,
                expirationTime: (s = o + s),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  k(P, e),
                  null === S(E) &&
                    e === S(P) &&
                    (A ? a() : (A = !0), r(I, o - l)))
                : ((e.sortIndex = s), k(E, e), O || D || ((O = !0), n(M))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = R;
            return function () {
              var n = R;
              R = t;
              try {
                return e.apply(this, arguments);
              } finally {
                R = n;
              }
            };
          });
      },
      840: (e, t, n) => {
        "use strict";
        e.exports = n(53);
      },
      379: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, o = [], l = 0; l < e.length; l++) {
            var s = e[l],
              u = r.base ? s[0] + r.base : s[0],
              c = i[u] || 0,
              d = "".concat(u, " ").concat(c);
            i[u] = c + 1;
            var h = n(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== h) t[h].references++, t[h].updater(f);
            else {
              var p = a(f, r);
              (r.byIndex = l),
                t.splice(l, 0, { identifier: d, updater: p, references: 1 });
            }
            o.push(d);
          }
          return o;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var i = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var o = 0; o < i.length; o++) {
              var l = n(i[o]);
              t[l].references--;
            }
            for (var s = r(e, a), u = 0; u < i.length; u++) {
              var c = n(i[u]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            i = s;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      399: (e, t, n) => {
        "use strict";
        var r = n(294),
          a = n(60),
          i = n(570),
          o = n(379),
          l = n.n(o),
          s = n(795),
          u = n.n(s),
          c = n(569),
          d = n.n(c),
          h = n(565),
          f = n.n(h),
          p = n(216),
          g = n.n(p),
          v = n(589),
          m = n.n(v),
          y = n(718),
          b = {};
        (b.styleTagTransform = m()),
          (b.setAttributes = f()),
          (b.insert = d().bind(null, "head")),
          (b.domAPI = u()),
          (b.insertStyleElement = g()),
          l()(y.Z, b);
        const w = y.Z && y.Z.locals ? y.Z.locals : void 0;
        var _ = Math.PI / 180;
        const k =
            "undefined" != typeof global
              ? global
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof WorkerGlobalScope
              ? self
              : {},
          S = {
            _global: k,
            version: "8.3.5",
            isBrowser:
              "undefined" != typeof window &&
              ("[object Window]" === {}.toString.call(window) ||
                "[object global]" === {}.toString.call(window)),
            isUnminified: /param/.test(function (e) {}.toString()),
            dblClickWindow: 400,
            getAngle: (e) => (S.angleDeg ? e * _ : e),
            enableTrace: !1,
            pointerEventsEnabled: !0,
            autoDrawEnabled: !0,
            hitOnDragEnabled: !1,
            capturePointerEventsEnabled: !1,
            _mouseListenClick: !1,
            _touchListenClick: !1,
            _pointerListenClick: !1,
            _mouseInDblClickWindow: !1,
            _touchInDblClickWindow: !1,
            _pointerInDblClickWindow: !1,
            _mouseDblClickPointerId: null,
            _touchDblClickPointerId: null,
            _pointerDblClickPointerId: null,
            pixelRatio:
              ("undefined" != typeof window && window.devicePixelRatio) || 1,
            dragDistance: 3,
            angleDeg: !0,
            showWarnings: !0,
            dragButtons: [0, 1],
            isDragging: () => S.DD.isDragging,
            isDragReady: () => !!S.DD.node,
            document: k.document,
            _injectGlobal(e) {
              k.Konva = e;
            },
          },
          C = (e) => {
            S[e.prototype.getClassName()] = e;
          };
        S._injectGlobal(S);
        class x {
          constructor(e = [1, 0, 0, 1, 0, 0]) {
            (this.dirty = !1),
              (this.m = (e && e.slice()) || [1, 0, 0, 1, 0, 0]);
          }
          reset() {
            (this.m[0] = 1),
              (this.m[1] = 0),
              (this.m[2] = 0),
              (this.m[3] = 1),
              (this.m[4] = 0),
              (this.m[5] = 0);
          }
          copy() {
            return new x(this.m);
          }
          copyInto(e) {
            (e.m[0] = this.m[0]),
              (e.m[1] = this.m[1]),
              (e.m[2] = this.m[2]),
              (e.m[3] = this.m[3]),
              (e.m[4] = this.m[4]),
              (e.m[5] = this.m[5]);
          }
          point(e) {
            var t = this.m;
            return {
              x: t[0] * e.x + t[2] * e.y + t[4],
              y: t[1] * e.x + t[3] * e.y + t[5],
            };
          }
          translate(e, t) {
            return (
              (this.m[4] += this.m[0] * e + this.m[2] * t),
              (this.m[5] += this.m[1] * e + this.m[3] * t),
              this
            );
          }
          scale(e, t) {
            return (
              (this.m[0] *= e),
              (this.m[1] *= e),
              (this.m[2] *= t),
              (this.m[3] *= t),
              this
            );
          }
          rotate(e) {
            var t = Math.cos(e),
              n = Math.sin(e),
              r = this.m[0] * t + this.m[2] * n,
              a = this.m[1] * t + this.m[3] * n,
              i = this.m[0] * -n + this.m[2] * t,
              o = this.m[1] * -n + this.m[3] * t;
            return (
              (this.m[0] = r),
              (this.m[1] = a),
              (this.m[2] = i),
              (this.m[3] = o),
              this
            );
          }
          getTranslation() {
            return { x: this.m[4], y: this.m[5] };
          }
          skew(e, t) {
            var n = this.m[0] + this.m[2] * t,
              r = this.m[1] + this.m[3] * t,
              a = this.m[2] + this.m[0] * e,
              i = this.m[3] + this.m[1] * e;
            return (
              (this.m[0] = n),
              (this.m[1] = r),
              (this.m[2] = a),
              (this.m[3] = i),
              this
            );
          }
          multiply(e) {
            var t = this.m[0] * e.m[0] + this.m[2] * e.m[1],
              n = this.m[1] * e.m[0] + this.m[3] * e.m[1],
              r = this.m[0] * e.m[2] + this.m[2] * e.m[3],
              a = this.m[1] * e.m[2] + this.m[3] * e.m[3],
              i = this.m[0] * e.m[4] + this.m[2] * e.m[5] + this.m[4],
              o = this.m[1] * e.m[4] + this.m[3] * e.m[5] + this.m[5];
            return (
              (this.m[0] = t),
              (this.m[1] = n),
              (this.m[2] = r),
              (this.m[3] = a),
              (this.m[4] = i),
              (this.m[5] = o),
              this
            );
          }
          invert() {
            var e = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
              t = this.m[3] * e,
              n = -this.m[1] * e,
              r = -this.m[2] * e,
              a = this.m[0] * e,
              i = e * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
              o = e * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
            return (
              (this.m[0] = t),
              (this.m[1] = n),
              (this.m[2] = r),
              (this.m[3] = a),
              (this.m[4] = i),
              (this.m[5] = o),
              this
            );
          }
          getMatrix() {
            return this.m;
          }
          setAbsolutePosition(e, t) {
            var n = this.m[0],
              r = this.m[1],
              a = this.m[2],
              i = this.m[3],
              o = this.m[4],
              l = (n * (t - this.m[5]) - r * (e - o)) / (n * i - r * a),
              s = (e - o - a * l) / n;
            return this.translate(s, l);
          }
          decompose() {
            var e = this.m[0],
              t = this.m[1],
              n = this.m[2],
              r = this.m[3],
              a = e * r - t * n;
            let i = {
              x: this.m[4],
              y: this.m[5],
              rotation: 0,
              scaleX: 0,
              scaleY: 0,
              skewX: 0,
              skewY: 0,
            };
            if (0 != e || 0 != t) {
              var o = Math.sqrt(e * e + t * t);
              (i.rotation = t > 0 ? Math.acos(e / o) : -Math.acos(e / o)),
                (i.scaleX = o),
                (i.scaleY = a / o),
                (i.skewX = (e * n + t * r) / a),
                (i.skewY = 0);
            } else if (0 != n || 0 != r) {
              var l = Math.sqrt(n * n + r * r);
              (i.rotation =
                Math.PI / 2 - (r > 0 ? Math.acos(-n / l) : -Math.acos(n / l))),
                (i.scaleX = a / l),
                (i.scaleY = l),
                (i.skewX = 0),
                (i.skewY = (e * n + t * r) / a);
            }
            return (i.rotation = A._getRotation(i.rotation)), i;
          }
        }
        var E = Math.PI / 180,
          P = 180 / Math.PI,
          T = "Konva error: ",
          L = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 132, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 255, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 203],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [119, 128, 144],
            slategrey: [119, 128, 144],
            snow: [255, 255, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            transparent: [255, 255, 255, 0],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 5],
          },
          R = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,
          D = [];
        const O =
            ("undefined" != typeof requestAnimationFrame &&
              requestAnimationFrame) ||
            function (e) {
              setTimeout(e, 60);
            },
          A = {
            _isElement: (e) => !(!e || 1 != e.nodeType),
            _isFunction: (e) => !!(e && e.constructor && e.call && e.apply),
            _isPlainObject: (e) => !!e && e.constructor === Object,
            _isArray: (e) =>
              "[object Array]" === Object.prototype.toString.call(e),
            _isNumber: (e) =>
              "[object Number]" === Object.prototype.toString.call(e) &&
              !isNaN(e) &&
              isFinite(e),
            _isString: (e) =>
              "[object String]" === Object.prototype.toString.call(e),
            _isBoolean: (e) =>
              "[object Boolean]" === Object.prototype.toString.call(e),
            isObject: (e) => e instanceof Object,
            isValidSelector(e) {
              if ("string" != typeof e) return !1;
              var t = e[0];
              return "#" === t || "." === t || t === t.toUpperCase();
            },
            _sign: (e) => (0 === e || e > 0 ? 1 : -1),
            requestAnimFrame(e) {
              D.push(e),
                1 === D.length &&
                  O(function () {
                    const e = D;
                    (D = []),
                      e.forEach(function (e) {
                        e();
                      });
                  });
            },
            createCanvasElement() {
              var e = document.createElement("canvas");
              try {
                e.style = e.style || {};
              } catch (e) {}
              return e;
            },
            createImageElement: () => document.createElement("img"),
            _isInDocument(e) {
              for (; (e = e.parentNode); ) if (e == document) return !0;
              return !1;
            },
            _urlToImage(e, t) {
              var n = A.createImageElement();
              (n.onload = function () {
                t(n);
              }),
                (n.src = e);
            },
            _rgbToHex: (e, t, n) =>
              ((1 << 24) + (e << 16) + (t << 8) + n).toString(16).slice(1),
            _hexToRgb(e) {
              e = e.replace("#", "");
              var t = parseInt(e, 16);
              return { r: (t >> 16) & 255, g: (t >> 8) & 255, b: 255 & t };
            },
            getRandomColor() {
              for (
                var e = ((16777215 * Math.random()) << 0).toString(16);
                e.length < 6;

              )
                e = "0" + e;
              return "#" + e;
            },
            getRGB(e) {
              var t;
              return e in L
                ? { r: (t = L[e])[0], g: t[1], b: t[2] }
                : "#" === e[0]
                ? this._hexToRgb(e.substring(1))
                : "rgb(" === e.substr(0, 4)
                ? ((t = R.exec(e.replace(/ /g, ""))),
                  {
                    r: parseInt(t[1], 10),
                    g: parseInt(t[2], 10),
                    b: parseInt(t[3], 10),
                  })
                : { r: 0, g: 0, b: 0 };
            },
            colorToRGBA: (e) => (
              (e = e || "black"),
              A._namedColorToRBA(e) ||
                A._hex3ColorToRGBA(e) ||
                A._hex6ColorToRGBA(e) ||
                A._rgbColorToRGBA(e) ||
                A._rgbaColorToRGBA(e) ||
                A._hslColorToRGBA(e)
            ),
            _namedColorToRBA(e) {
              var t = L[e.toLowerCase()];
              return t ? { r: t[0], g: t[1], b: t[2], a: 1 } : null;
            },
            _rgbColorToRGBA(e) {
              if (0 === e.indexOf("rgb(")) {
                var t = (e = e.match(/rgb\(([^)]+)\)/)[1])
                  .split(/ *, */)
                  .map(Number);
                return { r: t[0], g: t[1], b: t[2], a: 1 };
              }
            },
            _rgbaColorToRGBA(e) {
              if (0 === e.indexOf("rgba(")) {
                var t = (e = e.match(/rgba\(([^)]+)\)/)[1])
                  .split(/ *, */)
                  .map((e, t) =>
                    "%" === e.slice(-1)
                      ? 3 === t
                        ? parseInt(e) / 100
                        : (parseInt(e) / 100) * 255
                      : Number(e)
                  );
                return { r: t[0], g: t[1], b: t[2], a: t[3] };
              }
            },
            _hex6ColorToRGBA(e) {
              if ("#" === e[0] && 7 === e.length)
                return {
                  r: parseInt(e.slice(1, 3), 16),
                  g: parseInt(e.slice(3, 5), 16),
                  b: parseInt(e.slice(5, 7), 16),
                  a: 1,
                };
            },
            _hex3ColorToRGBA(e) {
              if ("#" === e[0] && 4 === e.length)
                return {
                  r: parseInt(e[1] + e[1], 16),
                  g: parseInt(e[2] + e[2], 16),
                  b: parseInt(e[3] + e[3], 16),
                  a: 1,
                };
            },
            _hslColorToRGBA(e) {
              if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(e)) {
                const [t, ...n] =
                    /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e),
                  r = Number(n[0]) / 360,
                  a = Number(n[1]) / 100,
                  i = Number(n[2]) / 100;
                let o, l, s;
                if (0 === a)
                  return (
                    (s = 255 * i),
                    {
                      r: Math.round(s),
                      g: Math.round(s),
                      b: Math.round(s),
                      a: 1,
                    }
                  );
                o = i < 0.5 ? i * (1 + a) : i + a - i * a;
                const u = 2 * i - o,
                  c = [0, 0, 0];
                for (let e = 0; e < 3; e++)
                  (l = r + (1 / 3) * -(e - 1)),
                    l < 0 && l++,
                    l > 1 && l--,
                    (s =
                      6 * l < 1
                        ? u + 6 * (o - u) * l
                        : 2 * l < 1
                        ? o
                        : 3 * l < 2
                        ? u + (o - u) * (2 / 3 - l) * 6
                        : u),
                    (c[e] = 255 * s);
                return {
                  r: Math.round(c[0]),
                  g: Math.round(c[1]),
                  b: Math.round(c[2]),
                  a: 1,
                };
              }
            },
            haveIntersection: (e, t) =>
              !(
                t.x > e.x + e.width ||
                t.x + t.width < e.x ||
                t.y > e.y + e.height ||
                t.y + t.height < e.y
              ),
            cloneObject(e) {
              var t = {};
              for (var n in e)
                this._isPlainObject(e[n])
                  ? (t[n] = this.cloneObject(e[n]))
                  : this._isArray(e[n])
                  ? (t[n] = this.cloneArray(e[n]))
                  : (t[n] = e[n]);
              return t;
            },
            cloneArray: (e) => e.slice(0),
            degToRad: (e) => e * E,
            radToDeg: (e) => e * P,
            _degToRad: (e) => (
              A.warn(
                "Util._degToRad is removed. Please use public Util.degToRad instead."
              ),
              A.degToRad(e)
            ),
            _radToDeg: (e) => (
              A.warn(
                "Util._radToDeg is removed. Please use public Util.radToDeg instead."
              ),
              A.radToDeg(e)
            ),
            _getRotation: (e) => (S.angleDeg ? A.radToDeg(e) : e),
            _capitalize: (e) => e.charAt(0).toUpperCase() + e.slice(1),
            throw(e) {
              throw new Error(T + e);
            },
            error(e) {
              console.error(T + e);
            },
            warn(e) {
              S.showWarnings && console.warn("Konva warning: " + e);
            },
            each(e, t) {
              for (var n in e) t(n, e[n]);
            },
            _inRange: (e, t, n) => t <= e && e < n,
            _getProjectionToSegment(e, t, n, r, a, i) {
              var o,
                l,
                s,
                u = (e - n) * (e - n) + (t - r) * (t - r);
              if (0 == u)
                (o = e), (l = t), (s = (a - n) * (a - n) + (i - r) * (i - r));
              else {
                var c = ((a - e) * (n - e) + (i - t) * (r - t)) / u;
                c < 0
                  ? ((o = e),
                    (l = t),
                    (s = (e - a) * (e - a) + (t - i) * (t - i)))
                  : c > 1
                  ? ((o = n),
                    (l = r),
                    (s = (n - a) * (n - a) + (r - i) * (r - i)))
                  : (s =
                      ((o = e + c * (n - e)) - a) * (o - a) +
                      ((l = t + c * (r - t)) - i) * (l - i));
              }
              return [o, l, s];
            },
            _getProjectionToLine(e, t, n) {
              var r = A.cloneObject(e),
                a = Number.MAX_VALUE;
              return (
                t.forEach(function (i, o) {
                  if (n || o !== t.length - 1) {
                    var l = t[(o + 1) % t.length],
                      s = A._getProjectionToSegment(
                        i.x,
                        i.y,
                        l.x,
                        l.y,
                        e.x,
                        e.y
                      ),
                      u = s[0],
                      c = s[1],
                      d = s[2];
                    d < a && ((r.x = u), (r.y = c), (a = d));
                  }
                }),
                r
              );
            },
            _prepareArrayForTween(e, t, n) {
              var r,
                a = [],
                i = [];
              if (e.length > t.length) {
                var o = t;
                (t = e), (e = o);
              }
              for (r = 0; r < e.length; r += 2)
                a.push({ x: e[r], y: e[r + 1] });
              for (r = 0; r < t.length; r += 2)
                i.push({ x: t[r], y: t[r + 1] });
              var l = [];
              return (
                i.forEach(function (e) {
                  var t = A._getProjectionToLine(e, a, n);
                  l.push(t.x), l.push(t.y);
                }),
                l
              );
            },
            _prepareToStringify(e) {
              var t;
              for (var n in ((e.visitedByCircularReferenceRemoval = !0), e))
                if (e.hasOwnProperty(n) && e[n] && "object" == typeof e[n])
                  if (
                    ((t = Object.getOwnPropertyDescriptor(e, n)),
                    e[n].visitedByCircularReferenceRemoval ||
                      A._isElement(e[n]))
                  ) {
                    if (!t.configurable) return null;
                    delete e[n];
                  } else if (null === A._prepareToStringify(e[n])) {
                    if (!t.configurable) return null;
                    delete e[n];
                  }
              return delete e.visitedByCircularReferenceRemoval, e;
            },
            _assign(e, t) {
              for (var n in t) e[n] = t[n];
              return e;
            },
            _getFirstPointerId: (e) =>
              e.touches ? e.changedTouches[0].identifier : e.pointerId || 999,
          };
        function N(e) {
          return A._isString(e)
            ? '"' + e + '"'
            : "[object Number]" === Object.prototype.toString.call(e) ||
              A._isBoolean(e)
            ? e
            : Object.prototype.toString.call(e);
        }
        function I() {
          if (S.isUnminified)
            return function (e, t) {
              return (
                A._isNumber(e) ||
                  A.warn(
                    N(e) +
                      ' is a not valid value for "' +
                      t +
                      '" attribute. The value should be a number.'
                  ),
                e
              );
            };
        }
        function M() {
          if (S.isUnminified)
            return function (e, t) {
              return (
                A._isString(e) ||
                  A.warn(
                    N(e) +
                      ' is a not valid value for "' +
                      t +
                      '" attribute. The value should be a string.'
                  ),
                e
              );
            };
        }
        function z() {
          if (S.isUnminified)
            return function (e, t) {
              const n = A._isString(e),
                r =
                  "[object CanvasGradient]" ===
                    Object.prototype.toString.call(e) ||
                  (e && e.addColorStop);
              return (
                n ||
                  r ||
                  A.warn(
                    N(e) +
                      ' is a not valid value for "' +
                      t +
                      '" attribute. The value should be a string or a native gradient.'
                  ),
                e
              );
            };
        }
        function F() {
          if (S.isUnminified)
            return function (e, t) {
              return (
                !0 === e ||
                  !1 === e ||
                  A.warn(
                    N(e) +
                      ' is a not valid value for "' +
                      t +
                      '" attribute. The value should be a boolean.'
                  ),
                e
              );
            };
        }
        var G = "get",
          B = "set";
        const j = {
          addGetterSetter(e, t, n, r, a) {
            j.addGetter(e, t, n),
              j.addSetter(e, t, r, a),
              j.addOverloadedGetterSetter(e, t);
          },
          addGetter(e, t, n) {
            var r = G + A._capitalize(t);
            e.prototype[r] =
              e.prototype[r] ||
              function () {
                var e = this.attrs[t];
                return void 0 === e ? n : e;
              };
          },
          addSetter(e, t, n, r) {
            var a = B + A._capitalize(t);
            e.prototype[a] || j.overWriteSetter(e, t, n, r);
          },
          overWriteSetter(e, t, n, r) {
            var a = B + A._capitalize(t);
            e.prototype[a] = function (e) {
              return (
                n && null != e && (e = n.call(this, e, t)),
                this._setAttr(t, e),
                r && r.call(this),
                this
              );
            };
          },
          addComponentsGetterSetter(e, t, n, r, a) {
            var i,
              o,
              l = n.length,
              s = A._capitalize,
              u = G + s(t),
              c = B + s(t);
            e.prototype[u] = function () {
              var e = {};
              for (i = 0; i < l; i++) e[(o = n[i])] = this.getAttr(t + s(o));
              return e;
            };
            var d = (function (e) {
              if (S.isUnminified)
                return function (t, n) {
                  return (
                    A.isObject(t) ||
                      A.warn(
                        N(t) +
                          ' is a not valid value for "' +
                          n +
                          '" attribute. The value should be an object with properties ' +
                          e
                      ),
                    t
                  );
                };
            })(n);
            (e.prototype[c] = function (e) {
              var n,
                i = this.attrs[t];
              for (n in (r && (e = r.call(this, e)),
              d && d.call(this, e, t),
              e))
                e.hasOwnProperty(n) && this._setAttr(t + s(n), e[n]);
              return this._fireChangeEvent(t, i, e), a && a.call(this), this;
            }),
              j.addOverloadedGetterSetter(e, t);
          },
          addOverloadedGetterSetter(e, t) {
            var n = A._capitalize(t),
              r = B + n,
              a = G + n;
            e.prototype[t] = function () {
              return arguments.length
                ? (this[r](arguments[0]), this)
                : this[a]();
            };
          },
          addDeprecatedGetterSetter(e, t, n, r) {
            A.error("Adding deprecated " + t);
            var a = G + A._capitalize(t),
              i =
                t +
                " property is deprecated and will be removed soon. Look at Konva change log for more information.";
            (e.prototype[a] = function () {
              A.error(i);
              var e = this.attrs[t];
              return void 0 === e ? n : e;
            }),
              j.addSetter(e, t, r, function () {
                A.error(i);
              }),
              j.addOverloadedGetterSetter(e, t);
          },
          backCompat(e, t) {
            A.each(t, function (t, n) {
              var r = e.prototype[n],
                a = G + A._capitalize(t),
                i = B + A._capitalize(t);
              function o() {
                r.apply(this, arguments),
                  A.error(
                    '"' +
                      t +
                      '" method is deprecated and will be removed soon. Use ""' +
                      n +
                      '" instead.'
                  );
              }
              (e.prototype[t] = o), (e.prototype[a] = o), (e.prototype[i] = o);
            });
          },
          afterSetFilter() {
            this._filterUpToDate = !1;
          },
        };
        function U(e) {
          var t,
            n,
            r = [],
            a = e.length,
            i = A;
          for (t = 0; t < a; t++)
            (n = e[t]),
              i._isNumber(n)
                ? (n = Math.round(1e3 * n) / 1e3)
                : i._isString(n) || (n += ""),
              r.push(n);
          return r;
        }
        var H,
          W = [
            "arc",
            "arcTo",
            "beginPath",
            "bezierCurveTo",
            "clearRect",
            "clip",
            "closePath",
            "createLinearGradient",
            "createPattern",
            "createRadialGradient",
            "drawImage",
            "ellipse",
            "fill",
            "fillText",
            "getImageData",
            "createImageData",
            "lineTo",
            "moveTo",
            "putImageData",
            "quadraticCurveTo",
            "rect",
            "restore",
            "rotate",
            "save",
            "scale",
            "setLineDash",
            "setTransform",
            "stroke",
            "strokeText",
            "transform",
            "translate",
          ];
        class V {
          constructor(e) {
            (this.canvas = e),
              (this._context = e._canvas.getContext("2d")),
              S.enableTrace && ((this.traceArr = []), this._enableTrace());
          }
          fillShape(e) {
            e.fillEnabled() && this._fill(e);
          }
          _fill(e) {}
          strokeShape(e) {
            e.hasStroke() && this._stroke(e);
          }
          _stroke(e) {}
          fillStrokeShape(e) {
            e.attrs.fillAfterStrokeEnabled
              ? (this.strokeShape(e), this.fillShape(e))
              : (this.fillShape(e), this.strokeShape(e));
          }
          getTrace(e, t) {
            var n,
              r,
              a,
              i,
              o = this.traceArr,
              l = o.length,
              s = "";
            for (n = 0; n < l; n++)
              (a = (r = o[n]).method)
                ? ((i = r.args),
                  (s += a),
                  e
                    ? (s += "()")
                    : A._isArray(i[0])
                    ? (s += "([" + i.join(",") + "])")
                    : (t &&
                        (i = i.map((e) =>
                          "number" == typeof e ? Math.floor(e) : e
                        )),
                      (s += "(" + i.join(",") + ")")))
                : ((s += r.property), e || (s += "=" + r.val)),
                (s += ";");
            return s;
          }
          clearTrace() {
            this.traceArr = [];
          }
          _trace(e) {
            var t = this.traceArr;
            t.push(e), t.length >= 100 && t.shift();
          }
          reset() {
            var e = this.getCanvas().getPixelRatio();
            this.setTransform(1 * e, 0, 0, 1 * e, 0, 0);
          }
          getCanvas() {
            return this.canvas;
          }
          clear(e) {
            var t = this.getCanvas();
            e
              ? this.clearRect(e.x || 0, e.y || 0, e.width || 0, e.height || 0)
              : this.clearRect(
                  0,
                  0,
                  t.getWidth() / t.pixelRatio,
                  t.getHeight() / t.pixelRatio
                );
          }
          _applyLineCap(e) {
            var t = e.getLineCap();
            t && this.setAttr("lineCap", t);
          }
          _applyOpacity(e) {
            var t = e.getAbsoluteOpacity();
            1 !== t && this.setAttr("globalAlpha", t);
          }
          _applyLineJoin(e) {
            var t = e.attrs.lineJoin;
            t && this.setAttr("lineJoin", t);
          }
          setAttr(e, t) {
            this._context[e] = t;
          }
          arc(e, t, n, r, a, i) {
            this._context.arc(e, t, n, r, a, i);
          }
          arcTo(e, t, n, r, a) {
            this._context.arcTo(e, t, n, r, a);
          }
          beginPath() {
            this._context.beginPath();
          }
          bezierCurveTo(e, t, n, r, a, i) {
            this._context.bezierCurveTo(e, t, n, r, a, i);
          }
          clearRect(e, t, n, r) {
            this._context.clearRect(e, t, n, r);
          }
          clip() {
            this._context.clip();
          }
          closePath() {
            this._context.closePath();
          }
          createImageData(e, t) {
            var n = arguments;
            return 2 === n.length
              ? this._context.createImageData(e, t)
              : 1 === n.length
              ? this._context.createImageData(e)
              : void 0;
          }
          createLinearGradient(e, t, n, r) {
            return this._context.createLinearGradient(e, t, n, r);
          }
          createPattern(e, t) {
            return this._context.createPattern(e, t);
          }
          createRadialGradient(e, t, n, r, a, i) {
            return this._context.createRadialGradient(e, t, n, r, a, i);
          }
          drawImage(e, t, n, r, a, i, o, l, s) {
            var u = arguments,
              c = this._context;
            3 === u.length
              ? c.drawImage(e, t, n)
              : 5 === u.length
              ? c.drawImage(e, t, n, r, a)
              : 9 === u.length && c.drawImage(e, t, n, r, a, i, o, l, s);
          }
          ellipse(e, t, n, r, a, i, o, l) {
            this._context.ellipse(e, t, n, r, a, i, o, l);
          }
          isPointInPath(e, t) {
            return this._context.isPointInPath(e, t);
          }
          fill(e) {
            e ? this._context.fill(e) : this._context.fill();
          }
          fillRect(e, t, n, r) {
            this._context.fillRect(e, t, n, r);
          }
          strokeRect(e, t, n, r) {
            this._context.strokeRect(e, t, n, r);
          }
          fillText(e, t, n, r) {
            r
              ? this._context.fillText(e, t, n, r)
              : this._context.fillText(e, t, n);
          }
          measureText(e) {
            return this._context.measureText(e);
          }
          getImageData(e, t, n, r) {
            return this._context.getImageData(e, t, n, r);
          }
          lineTo(e, t) {
            this._context.lineTo(e, t);
          }
          moveTo(e, t) {
            this._context.moveTo(e, t);
          }
          rect(e, t, n, r) {
            this._context.rect(e, t, n, r);
          }
          putImageData(e, t, n) {
            this._context.putImageData(e, t, n);
          }
          quadraticCurveTo(e, t, n, r) {
            this._context.quadraticCurveTo(e, t, n, r);
          }
          restore() {
            this._context.restore();
          }
          rotate(e) {
            this._context.rotate(e);
          }
          save() {
            this._context.save();
          }
          scale(e, t) {
            this._context.scale(e, t);
          }
          setLineDash(e) {
            this._context.setLineDash
              ? this._context.setLineDash(e)
              : "mozDash" in this._context
              ? (this._context.mozDash = e)
              : "webkitLineDash" in this._context &&
                (this._context.webkitLineDash = e);
          }
          getLineDash() {
            return this._context.getLineDash();
          }
          setTransform(e, t, n, r, a, i) {
            this._context.setTransform(e, t, n, r, a, i);
          }
          stroke(e) {
            e ? this._context.stroke(e) : this._context.stroke();
          }
          strokeText(e, t, n, r) {
            this._context.strokeText(e, t, n, r);
          }
          transform(e, t, n, r, a, i) {
            this._context.transform(e, t, n, r, a, i);
          }
          translate(e, t) {
            this._context.translate(e, t);
          }
          _enableTrace() {
            var e,
              t,
              n = this,
              r = W.length,
              a = this.setAttr,
              i = function (e) {
                var r,
                  a = n[e];
                n[e] = function () {
                  return (
                    (t = U(Array.prototype.slice.call(arguments, 0))),
                    (r = a.apply(n, arguments)),
                    n._trace({ method: e, args: t }),
                    r
                  );
                };
              };
            for (e = 0; e < r; e++) i(W[e]);
            n.setAttr = function () {
              a.apply(n, arguments);
              var e = arguments[0],
                t = arguments[1];
              ("shadowOffsetX" !== e &&
                "shadowOffsetY" !== e &&
                "shadowBlur" !== e) ||
                (t /= this.canvas.getPixelRatio()),
                n._trace({ property: e, val: t });
            };
          }
          _applyGlobalCompositeOperation(e) {
            const t = e.attrs.globalCompositeOperation;
            !t ||
              "source-over" === t ||
              this.setAttr("globalCompositeOperation", t);
          }
        }
        [
          "fillStyle",
          "strokeStyle",
          "shadowColor",
          "shadowBlur",
          "shadowOffsetX",
          "shadowOffsetY",
          "lineCap",
          "lineDashOffset",
          "lineJoin",
          "lineWidth",
          "miterLimit",
          "font",
          "textAlign",
          "textBaseline",
          "globalAlpha",
          "globalCompositeOperation",
          "imageSmoothingEnabled",
        ].forEach(function (e) {
          Object.defineProperty(V.prototype, e, {
            get() {
              return this._context[e];
            },
            set(t) {
              this._context[e] = t;
            },
          });
        });
        class Y extends V {
          _fillColor(e) {
            var t = e.fill();
            this.setAttr("fillStyle", t), e._fillFunc(this);
          }
          _fillPattern(e) {
            this.setAttr("fillStyle", e._getFillPattern()), e._fillFunc(this);
          }
          _fillLinearGradient(e) {
            var t = e._getLinearGradient();
            t && (this.setAttr("fillStyle", t), e._fillFunc(this));
          }
          _fillRadialGradient(e) {
            var t = e._getRadialGradient();
            t && (this.setAttr("fillStyle", t), e._fillFunc(this));
          }
          _fill(e) {
            var t = e.fill(),
              n = e.getFillPriority();
            if (t && "color" === n) this._fillColor(e);
            else {
              var r = e.getFillPatternImage();
              if (r && "pattern" === n) this._fillPattern(e);
              else {
                var a = e.getFillLinearGradientColorStops();
                if (a && "linear-gradient" === n) this._fillLinearGradient(e);
                else {
                  var i = e.getFillRadialGradientColorStops();
                  i && "radial-gradient" === n
                    ? this._fillRadialGradient(e)
                    : t
                    ? this._fillColor(e)
                    : r
                    ? this._fillPattern(e)
                    : a
                    ? this._fillLinearGradient(e)
                    : i && this._fillRadialGradient(e);
                }
              }
            }
          }
          _strokeLinearGradient(e) {
            var t = e.getStrokeLinearGradientStartPoint(),
              n = e.getStrokeLinearGradientEndPoint(),
              r = e.getStrokeLinearGradientColorStops(),
              a = this.createLinearGradient(t.x, t.y, n.x, n.y);
            if (r) {
              for (var i = 0; i < r.length; i += 2)
                a.addColorStop(r[i], r[i + 1]);
              this.setAttr("strokeStyle", a);
            }
          }
          _stroke(e) {
            var t = e.dash(),
              n = e.getStrokeScaleEnabled();
            if (e.hasStroke()) {
              if (!n) {
                this.save();
                var r = this.getCanvas().getPixelRatio();
                this.setTransform(r, 0, 0, r, 0, 0);
              }
              this._applyLineCap(e),
                t &&
                  e.dashEnabled() &&
                  (this.setLineDash(t),
                  this.setAttr("lineDashOffset", e.dashOffset())),
                this.setAttr("lineWidth", e.strokeWidth()),
                e.getShadowForStrokeEnabled() ||
                  this.setAttr("shadowColor", "rgba(0,0,0,0)"),
                e.getStrokeLinearGradientColorStops()
                  ? this._strokeLinearGradient(e)
                  : this.setAttr("strokeStyle", e.stroke()),
                e._strokeFunc(this),
                n || this.restore();
            }
          }
          _applyShadow(e) {
            var t,
              n,
              r,
              a =
                null !== (t = e.getShadowRGBA()) && void 0 !== t ? t : "black",
              i = null !== (n = e.getShadowBlur()) && void 0 !== n ? n : 5,
              o =
                null !== (r = e.getShadowOffset()) && void 0 !== r
                  ? r
                  : { x: 0, y: 0 },
              l = e.getAbsoluteScale(),
              s = this.canvas.getPixelRatio(),
              u = l.x * s,
              c = l.y * s;
            this.setAttr("shadowColor", a),
              this.setAttr(
                "shadowBlur",
                i * Math.min(Math.abs(u), Math.abs(c))
              ),
              this.setAttr("shadowOffsetX", o.x * u),
              this.setAttr("shadowOffsetY", o.y * c);
          }
        }
        class X extends V {
          _fill(e) {
            this.save(),
              this.setAttr("fillStyle", e.colorKey),
              e._fillFuncHit(this),
              this.restore();
          }
          strokeShape(e) {
            e.hasHitStroke() && this._stroke(e);
          }
          _stroke(e) {
            if (e.hasHitStroke()) {
              var t = e.getStrokeScaleEnabled();
              if (!t) {
                this.save();
                var n = this.getCanvas().getPixelRatio();
                this.setTransform(n, 0, 0, n, 0, 0);
              }
              this._applyLineCap(e);
              var r = e.hitStrokeWidth(),
                a = "auto" === r ? e.strokeWidth() : r;
              this.setAttr("lineWidth", a),
                this.setAttr("strokeStyle", e.colorKey),
                e._strokeFuncHit(this),
                t || this.restore();
            }
          }
        }
        class q {
          constructor(e) {
            (this.pixelRatio = 1),
              (this.width = 0),
              (this.height = 0),
              (this.isCache = !1);
            var t =
              (e || {}).pixelRatio ||
              S.pixelRatio ||
              (function () {
                if (H) return H;
                var e = A.createCanvasElement().getContext("2d");
                return (H =
                  (S._global.devicePixelRatio || 1) /
                  (e.webkitBackingStorePixelRatio ||
                    e.mozBackingStorePixelRatio ||
                    e.msBackingStorePixelRatio ||
                    e.oBackingStorePixelRatio ||
                    e.backingStorePixelRatio ||
                    1));
              })();
            (this.pixelRatio = t),
              (this._canvas = A.createCanvasElement()),
              (this._canvas.style.padding = "0"),
              (this._canvas.style.margin = "0"),
              (this._canvas.style.border = "0"),
              (this._canvas.style.background = "transparent"),
              (this._canvas.style.position = "absolute"),
              (this._canvas.style.top = "0"),
              (this._canvas.style.left = "0");
          }
          getContext() {
            return this.context;
          }
          getPixelRatio() {
            return this.pixelRatio;
          }
          setPixelRatio(e) {
            var t = this.pixelRatio;
            (this.pixelRatio = e),
              this.setSize(this.getWidth() / t, this.getHeight() / t);
          }
          setWidth(e) {
            (this.width = this._canvas.width = e * this.pixelRatio),
              (this._canvas.style.width = e + "px");
            var t = this.pixelRatio;
            this.getContext()._context.scale(t, t);
          }
          setHeight(e) {
            (this.height = this._canvas.height = e * this.pixelRatio),
              (this._canvas.style.height = e + "px");
            var t = this.pixelRatio;
            this.getContext()._context.scale(t, t);
          }
          getWidth() {
            return this.width;
          }
          getHeight() {
            return this.height;
          }
          setSize(e, t) {
            this.setWidth(e || 0), this.setHeight(t || 0);
          }
          toDataURL(e, t) {
            try {
              return this._canvas.toDataURL(e, t);
            } catch (e) {
              try {
                return this._canvas.toDataURL();
              } catch (e) {
                return (
                  A.error(
                    "Unable to get data URL. " +
                      e.message +
                      " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."
                  ),
                  ""
                );
              }
            }
          }
        }
        j.addGetterSetter(q, "pixelRatio", void 0, I());
        class $ extends q {
          constructor(e = { width: 0, height: 0 }) {
            super(e),
              (this.context = new Y(this)),
              this.setSize(e.width, e.height);
          }
        }
        class Q extends q {
          constructor(e = { width: 0, height: 0 }) {
            super(e),
              (this.hitCanvas = !0),
              (this.context = new X(this)),
              this.setSize(e.width, e.height);
          }
        }
        const K = {
          get isDragging() {
            var e = !1;
            return (
              K._dragElements.forEach((t) => {
                "dragging" === t.dragStatus && (e = !0);
              }),
              e
            );
          },
          justDragged: !1,
          get node() {
            var e;
            return (
              K._dragElements.forEach((t) => {
                e = t.node;
              }),
              e
            );
          },
          _dragElements: new Map(),
          _drag(e) {
            const t = [];
            K._dragElements.forEach((n, r) => {
              const { node: a } = n,
                i = a.getStage();
              i.setPointersPositions(e),
                void 0 === n.pointerId &&
                  (n.pointerId = A._getFirstPointerId(e));
              const o = i._changedPointerPositions.find(
                (e) => e.id === n.pointerId
              );
              if (o) {
                if ("dragging" !== n.dragStatus) {
                  var l = a.dragDistance();
                  if (
                    Math.max(
                      Math.abs(o.x - n.startPointerPos.x),
                      Math.abs(o.y - n.startPointerPos.y)
                    ) < l
                  )
                    return;
                  if ((a.startDrag({ evt: e }), !a.isDragging())) return;
                }
                a._setDragPosition(e, n), t.push(a);
              }
            }),
              t.forEach((t) => {
                t.fire("dragmove", { type: "dragmove", target: t, evt: e }, !0);
              });
          },
          _endDragBefore(e) {
            K._dragElements.forEach((t) => {
              const { node: n } = t,
                r = n.getStage();
              if (
                (e && r.setPointersPositions(e),
                !r._changedPointerPositions.find((e) => e.id === t.pointerId))
              )
                return;
              ("dragging" !== t.dragStatus && "stopped" !== t.dragStatus) ||
                ((K.justDragged = !0),
                (S._mouseListenClick = !1),
                (S._touchListenClick = !1),
                (S._pointerListenClick = !1),
                (t.dragStatus = "stopped"));
              const a =
                t.node.getLayer() || (t.node instanceof S.Stage && t.node);
              a && a.batchDraw();
            });
          },
          _endDragAfter(e) {
            K._dragElements.forEach((t, n) => {
              "stopped" === t.dragStatus &&
                t.node.fire(
                  "dragend",
                  { type: "dragend", target: t.node, evt: e },
                  !0
                ),
                "dragging" !== t.dragStatus && K._dragElements.delete(n);
            });
          },
        };
        S.isBrowser &&
          (window.addEventListener("mouseup", K._endDragBefore, !0),
          window.addEventListener("touchend", K._endDragBefore, !0),
          window.addEventListener("mousemove", K._drag),
          window.addEventListener("touchmove", K._drag),
          window.addEventListener("mouseup", K._endDragAfter, !1),
          window.addEventListener("touchend", K._endDragAfter, !1));
        var Z = "absoluteOpacity",
          J = "allEventListeners",
          ee = "absoluteTransform",
          te = "absoluteScale",
          ne = "canvas",
          re = "listening",
          ae = "mouseenter",
          ie = "mouseleave",
          oe = "Shape",
          le = " ",
          se = "stage",
          ue = "transform",
          ce = "visible",
          de = [
            "xChange.konva",
            "yChange.konva",
            "scaleXChange.konva",
            "scaleYChange.konva",
            "skewXChange.konva",
            "skewYChange.konva",
            "rotationChange.konva",
            "offsetXChange.konva",
            "offsetYChange.konva",
            "transformsEnabledChange.konva",
          ].join(le);
        let he = 1;
        class fe {
          constructor(e) {
            (this._id = he++),
              (this.eventListeners = {}),
              (this.attrs = {}),
              (this.index = 0),
              (this._allEventListeners = null),
              (this.parent = null),
              (this._cache = new Map()),
              (this._attachedDepsListeners = new Map()),
              (this._lastPos = null),
              (this._batchingTransformChange = !1),
              (this._needClearTransformCache = !1),
              (this._filterUpToDate = !1),
              (this._isUnderCache = !1),
              (this._dragEventId = null),
              (this._shouldFireChangeEvents = !1),
              this.setAttrs(e),
              (this._shouldFireChangeEvents = !0);
          }
          hasChildren() {
            return !1;
          }
          _clearCache(e) {
            (e !== ue && e !== ee) || !this._cache.get(e)
              ? e
                ? this._cache.delete(e)
                : this._cache.clear()
              : (this._cache.get(e).dirty = !0);
          }
          _getCache(e, t) {
            var n = this._cache.get(e);
            return (
              (void 0 === n || ((e === ue || e === ee) && !0 === n.dirty)) &&
                ((n = t.call(this)), this._cache.set(e, n)),
              n
            );
          }
          _calculate(e, t, n) {
            if (!this._attachedDepsListeners.get(e)) {
              const n = t.map((e) => e + "Change.konva").join(le);
              this.on(n, () => {
                this._clearCache(e);
              }),
                this._attachedDepsListeners.set(e, !0);
            }
            return this._getCache(e, n);
          }
          _getCanvasCache() {
            return this._cache.get(ne);
          }
          _clearSelfAndDescendantCache(e) {
            this._clearCache(e),
              e === ee && this.fire("absoluteTransformChange");
          }
          clearCache() {
            return (
              this._cache.delete(ne),
              this._clearSelfAndDescendantCache(),
              this._requestDraw(),
              this
            );
          }
          cache(e) {
            var t = e || {},
              n = {};
            (void 0 !== t.x &&
              void 0 !== t.y &&
              void 0 !== t.width &&
              void 0 !== t.height) ||
              (n = this.getClientRect({
                skipTransform: !0,
                relativeTo: this.getParent(),
              }));
            var r = Math.ceil(t.width || n.width),
              a = Math.ceil(t.height || n.height),
              i = t.pixelRatio,
              o = void 0 === t.x ? Math.floor(n.x) : t.x,
              l = void 0 === t.y ? Math.floor(n.y) : t.y,
              s = t.offset || 0,
              u = t.drawBorder || !1,
              c = t.hitCanvasPixelRatio || 1;
            if (r && a) {
              (o -= s), (l -= s);
              var d = new $({
                  pixelRatio: i,
                  width: (r += 2 * s + 1),
                  height: (a += 2 * s + 1),
                }),
                h = new $({ pixelRatio: i, width: 0, height: 0 }),
                f = new Q({ pixelRatio: c, width: r, height: a }),
                p = d.getContext(),
                g = f.getContext();
              return (
                (f.isCache = !0),
                (d.isCache = !0),
                this._cache.delete(ne),
                (this._filterUpToDate = !1),
                !1 === t.imageSmoothingEnabled &&
                  ((d.getContext()._context.imageSmoothingEnabled = !1),
                  (h.getContext()._context.imageSmoothingEnabled = !1)),
                p.save(),
                g.save(),
                p.translate(-o, -l),
                g.translate(-o, -l),
                (this._isUnderCache = !0),
                this._clearSelfAndDescendantCache(Z),
                this._clearSelfAndDescendantCache(te),
                this.drawScene(d, this),
                this.drawHit(f, this),
                (this._isUnderCache = !1),
                p.restore(),
                g.restore(),
                u &&
                  (p.save(),
                  p.beginPath(),
                  p.rect(0, 0, r, a),
                  p.closePath(),
                  p.setAttr("strokeStyle", "red"),
                  p.setAttr("lineWidth", 5),
                  p.stroke(),
                  p.restore()),
                this._cache.set(ne, {
                  scene: d,
                  filter: h,
                  hit: f,
                  x: o,
                  y: l,
                }),
                this._requestDraw(),
                this
              );
            }
            A.error(
              "Can not cache the node. Width or height of the node equals 0. Caching is skipped."
            );
          }
          isCached() {
            return this._cache.has(ne);
          }
          getClientRect(e) {
            throw new Error('abstract "getClientRect" method call');
          }
          _transformedRect(e, t) {
            var n,
              r,
              a,
              i,
              o = [
                { x: e.x, y: e.y },
                { x: e.x + e.width, y: e.y },
                { x: e.x + e.width, y: e.y + e.height },
                { x: e.x, y: e.y + e.height },
              ],
              l = this.getAbsoluteTransform(t);
            return (
              o.forEach(function (e) {
                var t = l.point(e);
                void 0 === n && ((n = a = t.x), (r = i = t.y)),
                  (n = Math.min(n, t.x)),
                  (r = Math.min(r, t.y)),
                  (a = Math.max(a, t.x)),
                  (i = Math.max(i, t.y));
              }),
              { x: n, y: r, width: a - n, height: i - r }
            );
          }
          _drawCachedSceneCanvas(e) {
            e.save(),
              e._applyOpacity(this),
              e._applyGlobalCompositeOperation(this);
            const t = this._getCanvasCache();
            e.translate(t.x, t.y);
            var n = this._getCachedSceneCanvas(),
              r = n.pixelRatio;
            e.drawImage(n._canvas, 0, 0, n.width / r, n.height / r),
              e.restore();
          }
          _drawCachedHitCanvas(e) {
            var t = this._getCanvasCache(),
              n = t.hit;
            e.save(),
              e.translate(t.x, t.y),
              e.drawImage(
                n._canvas,
                0,
                0,
                n.width / n.pixelRatio,
                n.height / n.pixelRatio
              ),
              e.restore();
          }
          _getCachedSceneCanvas() {
            var e,
              t,
              n,
              r,
              a = this.filters(),
              i = this._getCanvasCache(),
              o = i.scene,
              l = i.filter,
              s = l.getContext();
            if (a) {
              if (!this._filterUpToDate) {
                var u = o.pixelRatio;
                l.setSize(o.width / o.pixelRatio, o.height / o.pixelRatio);
                try {
                  for (
                    e = a.length,
                      s.clear(),
                      s.drawImage(
                        o._canvas,
                        0,
                        0,
                        o.getWidth() / u,
                        o.getHeight() / u
                      ),
                      t = s.getImageData(0, 0, l.getWidth(), l.getHeight()),
                      n = 0;
                    n < e;
                    n++
                  )
                    "function" == typeof (r = a[n])
                      ? (r.call(this, t), s.putImageData(t, 0, 0))
                      : A.error(
                          "Filter should be type of function, but got " +
                            typeof r +
                            " instead. Please check correct filters"
                        );
                } catch (e) {
                  A.error(
                    "Unable to apply filter. " +
                      e.message +
                      " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html."
                  );
                }
                this._filterUpToDate = !0;
              }
              return l;
            }
            return o;
          }
          on(e, t) {
            if ((this._cache && this._cache.delete(J), 3 === arguments.length))
              return this._delegate.apply(this, arguments);
            var n,
              r,
              a,
              i,
              o = e.split(le),
              l = o.length;
            for (n = 0; n < l; n++)
              (a = (r = o[n].split("."))[0]),
                (i = r[1] || ""),
                this.eventListeners[a] || (this.eventListeners[a] = []),
                this.eventListeners[a].push({ name: i, handler: t });
            return this;
          }
          off(e, t) {
            var n,
              r,
              a,
              i,
              o,
              l = (e || "").split(le),
              s = l.length;
            if ((this._cache && this._cache.delete(J), !e))
              for (r in this.eventListeners) this._off(r);
            for (n = 0; n < s; n++)
              if (((i = (a = l[n].split("."))[0]), (o = a[1]), i))
                this.eventListeners[i] && this._off(i, o, t);
              else for (r in this.eventListeners) this._off(r, o, t);
            return this;
          }
          dispatchEvent(e) {
            var t = { target: this, type: e.type, evt: e };
            return this.fire(e.type, t), this;
          }
          addEventListener(e, t) {
            return (
              this.on(e, function (e) {
                t.call(this, e.evt);
              }),
              this
            );
          }
          removeEventListener(e) {
            return this.off(e), this;
          }
          _delegate(e, t, n) {
            var r = this;
            this.on(e, function (e) {
              for (
                var a = e.target.findAncestors(t, !0, r), i = 0;
                i < a.length;
                i++
              )
                ((e = A.cloneObject(e)).currentTarget = a[i]), n.call(a[i], e);
            });
          }
          remove() {
            return (
              this.isDragging() && this.stopDrag(),
              K._dragElements.delete(this._id),
              this._remove(),
              this
            );
          }
          _clearCaches() {
            this._clearSelfAndDescendantCache(ee),
              this._clearSelfAndDescendantCache(Z),
              this._clearSelfAndDescendantCache(te),
              this._clearSelfAndDescendantCache(se),
              this._clearSelfAndDescendantCache(ce),
              this._clearSelfAndDescendantCache(re);
          }
          _remove() {
            this._clearCaches();
            var e = this.getParent();
            e &&
              e.children &&
              (e.children.splice(this.index, 1),
              e._setChildrenIndices(),
              (this.parent = null));
          }
          destroy() {
            return this.remove(), this;
          }
          getAttr(e) {
            var t = "get" + A._capitalize(e);
            return A._isFunction(this[t]) ? this[t]() : this.attrs[e];
          }
          getAncestors() {
            for (var e = this.getParent(), t = []; e; )
              t.push(e), (e = e.getParent());
            return t;
          }
          getAttrs() {
            return this.attrs || {};
          }
          setAttrs(e) {
            return (
              this._batchTransformChanges(() => {
                var t, n;
                if (!e) return this;
                for (t in e)
                  "children" !== t &&
                    ((n = "set" + A._capitalize(t)),
                    A._isFunction(this[n])
                      ? this[n](e[t])
                      : this._setAttr(t, e[t]));
              }),
              this
            );
          }
          isListening() {
            return this._getCache(re, this._isListening);
          }
          _isListening(e) {
            if (!this.listening()) return !1;
            const t = this.getParent();
            return !t || t === e || this === e || t._isListening(e);
          }
          isVisible() {
            return this._getCache(ce, this._isVisible);
          }
          _isVisible(e) {
            if (!this.visible()) return !1;
            const t = this.getParent();
            return !t || t === e || this === e || t._isVisible(e);
          }
          shouldDrawHit(e, t = !1) {
            if (e) return this._isVisible(e) && this._isListening(e);
            var n = this.getLayer(),
              r = !1;
            K._dragElements.forEach((e) => {
              "dragging" === e.dragStatus &&
                ("Stage" === e.node.nodeType || e.node.getLayer() === n) &&
                (r = !0);
            });
            var a = !t && !S.hitOnDragEnabled && r;
            return this.isListening() && this.isVisible() && !a;
          }
          show() {
            return this.visible(!0), this;
          }
          hide() {
            return this.visible(!1), this;
          }
          getZIndex() {
            return this.index || 0;
          }
          getAbsoluteZIndex() {
            var e,
              t,
              n,
              r,
              a = this.getDepth(),
              i = this,
              o = 0;
            return (
              "Stage" !== i.nodeType &&
                (function l(s) {
                  for (e = [], t = s.length, n = 0; n < t; n++)
                    (r = s[n]),
                      o++,
                      r.nodeType !== oe &&
                        (e = e.concat(r.getChildren().slice())),
                      r._id === i._id && (n = t);
                  e.length > 0 && e[0].getDepth() <= a && l(e);
                })(i.getStage().getChildren()),
              o
            );
          }
          getDepth() {
            for (var e = 0, t = this.parent; t; ) e++, (t = t.parent);
            return e;
          }
          _batchTransformChanges(e) {
            (this._batchingTransformChange = !0),
              e(),
              (this._batchingTransformChange = !1),
              this._needClearTransformCache &&
                (this._clearCache(ue), this._clearSelfAndDescendantCache(ee)),
              (this._needClearTransformCache = !1);
          }
          setPosition(e) {
            return (
              this._batchTransformChanges(() => {
                this.x(e.x), this.y(e.y);
              }),
              this
            );
          }
          getPosition() {
            return { x: this.x(), y: this.y() };
          }
          getRelativePointerPosition() {
            if (!this.getStage()) return null;
            var e = this.getStage().getPointerPosition();
            if (!e) return null;
            var t = this.getAbsoluteTransform().copy();
            return t.invert(), t.point(e);
          }
          getAbsolutePosition(e) {
            let t = !1,
              n = this.parent;
            for (; n; ) {
              if (n.isCached()) {
                t = !0;
                break;
              }
              n = n.parent;
            }
            t && !e && (e = !0);
            var r = this.getAbsoluteTransform(e).getMatrix(),
              a = new x(),
              i = this.offset();
            return (a.m = r.slice()), a.translate(i.x, i.y), a.getTranslation();
          }
          setAbsolutePosition(e) {
            var t = this._clearTransform();
            (this.attrs.x = t.x),
              (this.attrs.y = t.y),
              delete t.x,
              delete t.y,
              this._clearCache(ue);
            var n = this._getAbsoluteTransform().copy();
            return (
              n.invert(),
              n.translate(e.x, e.y),
              (e = {
                x: this.attrs.x + n.getTranslation().x,
                y: this.attrs.y + n.getTranslation().y,
              }),
              this._setTransform(t),
              this.setPosition({ x: e.x, y: e.y }),
              this._clearCache(ue),
              this._clearSelfAndDescendantCache(ee),
              this
            );
          }
          _setTransform(e) {
            var t;
            for (t in e) this.attrs[t] = e[t];
          }
          _clearTransform() {
            var e = {
              x: this.x(),
              y: this.y(),
              rotation: this.rotation(),
              scaleX: this.scaleX(),
              scaleY: this.scaleY(),
              offsetX: this.offsetX(),
              offsetY: this.offsetY(),
              skewX: this.skewX(),
              skewY: this.skewY(),
            };
            return (
              (this.attrs.x = 0),
              (this.attrs.y = 0),
              (this.attrs.rotation = 0),
              (this.attrs.scaleX = 1),
              (this.attrs.scaleY = 1),
              (this.attrs.offsetX = 0),
              (this.attrs.offsetY = 0),
              (this.attrs.skewX = 0),
              (this.attrs.skewY = 0),
              e
            );
          }
          move(e) {
            var t = e.x,
              n = e.y,
              r = this.x(),
              a = this.y();
            return (
              void 0 !== t && (r += t),
              void 0 !== n && (a += n),
              this.setPosition({ x: r, y: a }),
              this
            );
          }
          _eachAncestorReverse(e, t) {
            var n,
              r,
              a = [],
              i = this.getParent();
            if (!t || t._id !== this._id) {
              for (a.unshift(this); i && (!t || i._id !== t._id); )
                a.unshift(i), (i = i.parent);
              for (n = a.length, r = 0; r < n; r++) e(a[r]);
            }
          }
          rotate(e) {
            return this.rotation(this.rotation() + e), this;
          }
          moveToTop() {
            if (!this.parent)
              return (
                A.warn("Node has no parent. moveToTop function is ignored."), !1
              );
            var e = this.index;
            return (
              e < this.parent.getChildren().length - 1 &&
              (this.parent.children.splice(e, 1),
              this.parent.children.push(this),
              this.parent._setChildrenIndices(),
              !0)
            );
          }
          moveUp() {
            if (!this.parent)
              return (
                A.warn("Node has no parent. moveUp function is ignored."), !1
              );
            var e = this.index;
            return (
              e < this.parent.getChildren().length - 1 &&
              (this.parent.children.splice(e, 1),
              this.parent.children.splice(e + 1, 0, this),
              this.parent._setChildrenIndices(),
              !0)
            );
          }
          moveDown() {
            if (!this.parent)
              return (
                A.warn("Node has no parent. moveDown function is ignored."), !1
              );
            var e = this.index;
            return (
              e > 0 &&
              (this.parent.children.splice(e, 1),
              this.parent.children.splice(e - 1, 0, this),
              this.parent._setChildrenIndices(),
              !0)
            );
          }
          moveToBottom() {
            if (!this.parent)
              return (
                A.warn("Node has no parent. moveToBottom function is ignored."),
                !1
              );
            var e = this.index;
            return (
              e > 0 &&
              (this.parent.children.splice(e, 1),
              this.parent.children.unshift(this),
              this.parent._setChildrenIndices(),
              !0)
            );
          }
          setZIndex(e) {
            if (!this.parent)
              return (
                A.warn("Node has no parent. zIndex parameter is ignored."), this
              );
            (e < 0 || e >= this.parent.children.length) &&
              A.warn(
                "Unexpected value " +
                  e +
                  " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " +
                  (this.parent.children.length - 1) +
                  "."
              );
            var t = this.index;
            return (
              this.parent.children.splice(t, 1),
              this.parent.children.splice(e, 0, this),
              this.parent._setChildrenIndices(),
              this
            );
          }
          getAbsoluteOpacity() {
            return this._getCache(Z, this._getAbsoluteOpacity);
          }
          _getAbsoluteOpacity() {
            var e = this.opacity(),
              t = this.getParent();
            return t && !t._isUnderCache && (e *= t.getAbsoluteOpacity()), e;
          }
          moveTo(e) {
            return (
              this.getParent() !== e && (this._remove(), e.add(this)), this
            );
          }
          toObject() {
            var e,
              t,
              n,
              r,
              a = {},
              i = this.getAttrs();
            for (e in ((a.attrs = {}), i))
              (t = i[e]),
                (A.isObject(t) && !A._isPlainObject(t) && !A._isArray(t)) ||
                  ((n = "function" == typeof this[e] && this[e]),
                  delete i[e],
                  (r = n ? n.call(this) : null),
                  (i[e] = t),
                  r !== t && (a.attrs[e] = t));
            return (
              (a.className = this.getClassName()), A._prepareToStringify(a)
            );
          }
          toJSON() {
            return JSON.stringify(this.toObject());
          }
          getParent() {
            return this.parent;
          }
          findAncestors(e, t, n) {
            var r = [];
            t && this._isMatch(e) && r.push(this);
            for (var a = this.parent; a; ) {
              if (a === n) return r;
              a._isMatch(e) && r.push(a), (a = a.parent);
            }
            return r;
          }
          isAncestorOf(e) {
            return !1;
          }
          findAncestor(e, t, n) {
            return this.findAncestors(e, t, n)[0];
          }
          _isMatch(e) {
            if (!e) return !1;
            if ("function" == typeof e) return e(this);
            var t,
              n,
              r = e.replace(/ /g, "").split(","),
              a = r.length;
            for (t = 0; t < a; t++)
              if (
                ((n = r[t]),
                A.isValidSelector(n) ||
                  (A.warn(
                    'Selector "' +
                      n +
                      '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'
                  ),
                  A.warn(
                    'If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'
                  ),
                  A.warn("Konva is awesome, right?")),
                "#" === n.charAt(0))
              ) {
                if (this.id() === n.slice(1)) return !0;
              } else if ("." === n.charAt(0)) {
                if (this.hasName(n.slice(1))) return !0;
              } else if (this.className === n || this.nodeType === n) return !0;
            return !1;
          }
          getLayer() {
            var e = this.getParent();
            return e ? e.getLayer() : null;
          }
          getStage() {
            return this._getCache(se, this._getStage);
          }
          _getStage() {
            var e = this.getParent();
            return e ? e.getStage() : void 0;
          }
          fire(e, t = {}, n) {
            return (
              (t.target = t.target || this),
              n ? this._fireAndBubble(e, t) : this._fire(e, t),
              this
            );
          }
          getAbsoluteTransform(e) {
            return e
              ? this._getAbsoluteTransform(e)
              : this._getCache(ee, this._getAbsoluteTransform);
          }
          _getAbsoluteTransform(e) {
            var t;
            if (e)
              return (
                (t = new x()),
                this._eachAncestorReverse(function (e) {
                  var n = e.transformsEnabled();
                  "all" === n
                    ? t.multiply(e.getTransform())
                    : "position" === n &&
                      t.translate(e.x() - e.offsetX(), e.y() - e.offsetY());
                }, e),
                t
              );
            (t = this._cache.get(ee) || new x()),
              this.parent
                ? this.parent.getAbsoluteTransform().copyInto(t)
                : t.reset();
            var n = this.transformsEnabled();
            if ("all" === n) t.multiply(this.getTransform());
            else if ("position" === n) {
              const e = this.attrs.x || 0,
                n = this.attrs.y || 0,
                r = this.attrs.offsetX || 0,
                a = this.attrs.offsetY || 0;
              t.translate(e - r, n - a);
            }
            return (t.dirty = !1), t;
          }
          getAbsoluteScale(e) {
            for (var t = this; t; )
              t._isUnderCache && (e = t), (t = t.getParent());
            const n = this.getAbsoluteTransform(e).decompose();
            return { x: n.scaleX, y: n.scaleY };
          }
          getAbsoluteRotation() {
            return this.getAbsoluteTransform().decompose().rotation;
          }
          getTransform() {
            return this._getCache(ue, this._getTransform);
          }
          _getTransform() {
            var e,
              t,
              n = this._cache.get(ue) || new x();
            n.reset();
            var r = this.x(),
              a = this.y(),
              i = S.getAngle(this.rotation()),
              o = null !== (e = this.attrs.scaleX) && void 0 !== e ? e : 1,
              l = null !== (t = this.attrs.scaleY) && void 0 !== t ? t : 1,
              s = this.attrs.skewX || 0,
              u = this.attrs.skewY || 0,
              c = this.attrs.offsetX || 0,
              d = this.attrs.offsetY || 0;
            return (
              (0 === r && 0 === a) || n.translate(r, a),
              0 !== i && n.rotate(i),
              (0 === s && 0 === u) || n.skew(s, u),
              (1 === o && 1 === l) || n.scale(o, l),
              (0 === c && 0 === d) || n.translate(-1 * c, -1 * d),
              (n.dirty = !1),
              n
            );
          }
          clone(e) {
            var t,
              n,
              r,
              a,
              i,
              o = A.cloneObject(this.attrs);
            for (t in e) o[t] = e[t];
            var l = new this.constructor(o);
            for (t in this.eventListeners)
              for (r = (n = this.eventListeners[t]).length, a = 0; a < r; a++)
                (i = n[a]).name.indexOf("konva") < 0 &&
                  (l.eventListeners[t] || (l.eventListeners[t] = []),
                  l.eventListeners[t].push(i));
            return l;
          }
          _toKonvaCanvas(e) {
            e = e || {};
            var t = this.getClientRect(),
              n = this.getStage(),
              r = void 0 !== e.x ? e.x : Math.floor(t.x),
              a = void 0 !== e.y ? e.y : Math.floor(t.y),
              i = e.pixelRatio || 1,
              o = new $({
                width: e.width || Math.ceil(t.width) || (n ? n.width() : 0),
                height: e.height || Math.ceil(t.height) || (n ? n.height() : 0),
                pixelRatio: i,
              }),
              l = o.getContext();
            return (
              l.save(),
              (r || a) && l.translate(-1 * r, -1 * a),
              this.drawScene(o),
              l.restore(),
              o
            );
          }
          toCanvas(e) {
            return this._toKonvaCanvas(e)._canvas;
          }
          toDataURL(e) {
            var t = (e = e || {}).mimeType || null,
              n = e.quality || null,
              r = this._toKonvaCanvas(e).toDataURL(t, n);
            return e.callback && e.callback(r), r;
          }
          toImage(e) {
            if (!e || !e.callback)
              throw "callback required for toImage method config argument";
            var t = e.callback;
            delete e.callback,
              A._urlToImage(this.toDataURL(e), function (e) {
                t(e);
              });
          }
          setSize(e) {
            return this.width(e.width), this.height(e.height), this;
          }
          getSize() {
            return { width: this.width(), height: this.height() };
          }
          getClassName() {
            return this.className || this.nodeType;
          }
          getType() {
            return this.nodeType;
          }
          getDragDistance() {
            return void 0 !== this.attrs.dragDistance
              ? this.attrs.dragDistance
              : this.parent
              ? this.parent.getDragDistance()
              : S.dragDistance;
          }
          _off(e, t, n) {
            var r,
              a,
              i,
              o = this.eventListeners[e];
            for (r = 0; r < o.length; r++)
              if (
                ((a = o[r].name),
                (i = o[r].handler),
                !(
                  ("konva" === a && "konva" !== t) ||
                  (t && a !== t) ||
                  (n && n !== i)
                ))
              ) {
                if ((o.splice(r, 1), 0 === o.length)) {
                  delete this.eventListeners[e];
                  break;
                }
                r--;
              }
          }
          _fireChangeEvent(e, t, n) {
            this._fire(e + "Change", { oldVal: t, newVal: n });
          }
          addName(e) {
            if (!this.hasName(e)) {
              var t = this.name(),
                n = t ? t + " " + e : e;
              this.name(n);
            }
            return this;
          }
          hasName(e) {
            if (!e) return !1;
            const t = this.name();
            return !!t && -1 !== (t || "").split(/\s/g).indexOf(e);
          }
          removeName(e) {
            var t = (this.name() || "").split(/\s/g),
              n = t.indexOf(e);
            return -1 !== n && (t.splice(n, 1), this.name(t.join(" "))), this;
          }
          setAttr(e, t) {
            var n = this["set" + A._capitalize(e)];
            return (
              A._isFunction(n) ? n.call(this, t) : this._setAttr(e, t), this
            );
          }
          _requestDraw() {
            if (S.autoDrawEnabled) {
              const e = this.getLayer() || this.getStage();
              null == e || e.batchDraw();
            }
          }
          _setAttr(e, t) {
            var n = this.attrs[e];
            (n !== t || A.isObject(t)) &&
              (null == t ? delete this.attrs[e] : (this.attrs[e] = t),
              this._shouldFireChangeEvents && this._fireChangeEvent(e, n, t),
              this._requestDraw());
          }
          _setComponentAttr(e, t, n) {
            var r;
            void 0 !== n &&
              ((r = this.attrs[e]) || (this.attrs[e] = this.getAttr(e)),
              (this.attrs[e][t] = n),
              this._fireChangeEvent(e, r, n));
          }
          _fireAndBubble(e, t, n) {
            if (
              (t && this.nodeType === oe && (t.target = this),
              (e !== ae && e !== ie) ||
                !(
                  (n &&
                    (this === n ||
                      (this.isAncestorOf && this.isAncestorOf(n)))) ||
                  ("Stage" === this.nodeType && !n)
                ))
            ) {
              this._fire(e, t);
              var r =
                (e === ae || e === ie) &&
                n &&
                n.isAncestorOf &&
                n.isAncestorOf(this) &&
                !n.isAncestorOf(this.parent);
              ((t && !t.cancelBubble) || !t) &&
                this.parent &&
                this.parent.isListening() &&
                !r &&
                (n && n.parent
                  ? this._fireAndBubble.call(this.parent, e, t, n)
                  : this._fireAndBubble.call(this.parent, e, t));
            }
          }
          _getProtoListeners(e) {
            let t = this._cache.get(J);
            if (!t) {
              t = {};
              let e = Object.getPrototypeOf(this);
              for (; e; )
                if (e.eventListeners) {
                  for (var n in e.eventListeners) {
                    const r = e.eventListeners[n],
                      a = t[n] || [];
                    t[n] = r.concat(a);
                  }
                  e = Object.getPrototypeOf(e);
                } else e = Object.getPrototypeOf(e);
              this._cache.set(J, t);
            }
            return t[e];
          }
          _fire(e, t) {
            ((t = t || {}).currentTarget = this), (t.type = e);
            const n = this._getProtoListeners(e);
            if (n)
              for (var r = 0; r < n.length; r++) n[r].handler.call(this, t);
            const a = this.eventListeners[e];
            if (a) for (r = 0; r < a.length; r++) a[r].handler.call(this, t);
          }
          draw() {
            return this.drawScene(), this.drawHit(), this;
          }
          _createDragElement(e) {
            var t = e ? e.pointerId : void 0,
              n = this.getStage(),
              r = this.getAbsolutePosition(),
              a = n._getPointerById(t) || n._changedPointerPositions[0] || r;
            K._dragElements.set(this._id, {
              node: this,
              startPointerPos: a,
              offset: { x: a.x - r.x, y: a.y - r.y },
              dragStatus: "ready",
              pointerId: t,
            });
          }
          startDrag(e, t = !0) {
            K._dragElements.has(this._id) || this._createDragElement(e),
              (K._dragElements.get(this._id).dragStatus = "dragging"),
              this.fire(
                "dragstart",
                { type: "dragstart", target: this, evt: e && e.evt },
                t
              );
          }
          _setDragPosition(e, t) {
            const n = this.getStage()._getPointerById(t.pointerId);
            if (n) {
              var r = { x: n.x - t.offset.x, y: n.y - t.offset.y },
                a = this.dragBoundFunc();
              if (void 0 !== a) {
                const t = a.call(this, r, e);
                t
                  ? (r = t)
                  : A.warn(
                      "dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc."
                    );
              }
              (this._lastPos &&
                this._lastPos.x === r.x &&
                this._lastPos.y === r.y) ||
                (this.setAbsolutePosition(r), this._requestDraw()),
                (this._lastPos = r);
            }
          }
          stopDrag(e) {
            const t = K._dragElements.get(this._id);
            t && (t.dragStatus = "stopped"),
              K._endDragBefore(e),
              K._endDragAfter(e);
          }
          setDraggable(e) {
            this._setAttr("draggable", e), this._dragChange();
          }
          isDragging() {
            const e = K._dragElements.get(this._id);
            return !!e && "dragging" === e.dragStatus;
          }
          _listenDrag() {
            this._dragCleanup(),
              this.on("mousedown.konva touchstart.konva", function (e) {
                if (
                  (void 0 === e.evt.button ||
                    S.dragButtons.indexOf(e.evt.button) >= 0) &&
                  !this.isDragging()
                ) {
                  var t = !1;
                  K._dragElements.forEach((e) => {
                    this.isAncestorOf(e.node) && (t = !0);
                  }),
                    t || this._createDragElement(e);
                }
              });
          }
          _dragChange() {
            if (this.attrs.draggable) this._listenDrag();
            else {
              if ((this._dragCleanup(), !this.getStage())) return;
              const e = K._dragElements.get(this._id),
                t = e && "dragging" === e.dragStatus,
                n = e && "ready" === e.dragStatus;
              t ? this.stopDrag() : n && K._dragElements.delete(this._id);
            }
          }
          _dragCleanup() {
            this.off("mousedown.konva"), this.off("touchstart.konva");
          }
          isClientRectOnScreen(e = { x: 0, y: 0 }) {
            const t = this.getStage();
            if (!t) return !1;
            const n = {
              x: -e.x,
              y: -e.y,
              width: t.width() + 2 * e.x,
              height: t.height() + 2 * e.y,
            };
            return A.haveIntersection(n, this.getClientRect());
          }
          static create(e, t) {
            return (
              A._isString(e) && (e = JSON.parse(e)), this._createNode(e, t)
            );
          }
          static _createNode(e, t) {
            var n,
              r,
              a,
              i = fe.prototype.getClassName.call(e),
              o = e.children;
            if (
              (t && (e.attrs.container = t),
              S[i] ||
                (A.warn(
                  'Can not find a node with class name "' +
                    i +
                    '". Fallback to "Shape".'
                ),
                (i = "Shape")),
              (n = new (0, S[i])(e.attrs)),
              o)
            )
              for (r = o.length, a = 0; a < r; a++) n.add(fe._createNode(o[a]));
            return n;
          }
        }
        (fe.prototype.nodeType = "Node"),
          (fe.prototype._attrsAffectingSize = []),
          (fe.prototype.eventListeners = {}),
          fe.prototype.on.call(fe.prototype, de, function () {
            this._batchingTransformChange
              ? (this._needClearTransformCache = !0)
              : (this._clearCache(ue), this._clearSelfAndDescendantCache(ee));
          }),
          fe.prototype.on.call(
            fe.prototype,
            "visibleChange.konva",
            function () {
              this._clearSelfAndDescendantCache(ce);
            }
          ),
          fe.prototype.on.call(
            fe.prototype,
            "listeningChange.konva",
            function () {
              this._clearSelfAndDescendantCache(re);
            }
          ),
          fe.prototype.on.call(
            fe.prototype,
            "opacityChange.konva",
            function () {
              this._clearSelfAndDescendantCache(Z);
            }
          );
        const pe = j.addGetterSetter;
        pe(fe, "zIndex"),
          pe(fe, "absolutePosition"),
          pe(fe, "position"),
          pe(fe, "x", 0, I()),
          pe(fe, "y", 0, I()),
          pe(fe, "globalCompositeOperation", "source-over", M()),
          pe(fe, "opacity", 1, I()),
          pe(fe, "name", "", M()),
          pe(fe, "id", "", M()),
          pe(fe, "rotation", 0, I()),
          j.addComponentsGetterSetter(fe, "scale", ["x", "y"]),
          pe(fe, "scaleX", 1, I()),
          pe(fe, "scaleY", 1, I()),
          j.addComponentsGetterSetter(fe, "skew", ["x", "y"]),
          pe(fe, "skewX", 0, I()),
          pe(fe, "skewY", 0, I()),
          j.addComponentsGetterSetter(fe, "offset", ["x", "y"]),
          pe(fe, "offsetX", 0, I()),
          pe(fe, "offsetY", 0, I()),
          pe(fe, "dragDistance", null, I()),
          pe(fe, "width", 0, I()),
          pe(fe, "height", 0, I()),
          pe(fe, "listening", !0, F()),
          pe(fe, "preventDefault", !0, F()),
          pe(fe, "filters", null, function (e) {
            return (this._filterUpToDate = !1), e;
          }),
          pe(fe, "visible", !0, F()),
          pe(fe, "transformsEnabled", "all", M()),
          pe(fe, "size"),
          pe(fe, "dragBoundFunc"),
          pe(fe, "draggable", !1, F()),
          j.backCompat(fe, {
            rotateDeg: "rotate",
            setRotationDeg: "setRotation",
            getRotationDeg: "getRotation",
          });
        class ge extends fe {
          constructor() {
            super(...arguments), (this.children = []);
          }
          getChildren(e) {
            if (!e) return this.children || [];
            const t = this.children || [];
            var n = [];
            return (
              t.forEach(function (t) {
                e(t) && n.push(t);
              }),
              n
            );
          }
          hasChildren() {
            return this.getChildren().length > 0;
          }
          removeChildren() {
            return (
              this.getChildren().forEach((e) => {
                (e.parent = null), (e.index = 0), e.remove();
              }),
              (this.children = []),
              this._requestDraw(),
              this
            );
          }
          destroyChildren() {
            return (
              this.getChildren().forEach((e) => {
                (e.parent = null), (e.index = 0), e.destroy();
              }),
              (this.children = []),
              this._requestDraw(),
              this
            );
          }
          add(...e) {
            if (arguments.length > 1) {
              for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
              return this;
            }
            var n = e[0];
            return n.getParent()
              ? (n.moveTo(this), this)
              : (this._validateAdd(n),
                (n.index = this.getChildren().length),
                (n.parent = this),
                n._clearCaches(),
                this.getChildren().push(n),
                this._fire("add", { child: n }),
                this._requestDraw(),
                this);
          }
          destroy() {
            return (
              this.hasChildren() && this.destroyChildren(),
              super.destroy(),
              this
            );
          }
          find(e) {
            return this._generalFind(e, !1);
          }
          findOne(e) {
            var t = this._generalFind(e, !0);
            return t.length > 0 ? t[0] : void 0;
          }
          _generalFind(e, t) {
            var n = [];
            return (
              this._descendants((r) => {
                const a = r._isMatch(e);
                return a && n.push(r), !(!a || !t);
              }),
              n
            );
          }
          _descendants(e) {
            let t = !1;
            const n = this.getChildren();
            for (const r of n) {
              if (((t = e(r)), t)) return !0;
              if (r.hasChildren() && ((t = r._descendants(e)), t)) return !0;
            }
            return !1;
          }
          toObject() {
            var e = fe.prototype.toObject.call(this);
            return (
              (e.children = []),
              this.getChildren().forEach((t) => {
                e.children.push(t.toObject());
              }),
              e
            );
          }
          isAncestorOf(e) {
            for (var t = e.getParent(); t; ) {
              if (t._id === this._id) return !0;
              t = t.getParent();
            }
            return !1;
          }
          clone(e) {
            var t = fe.prototype.clone.call(this, e);
            return (
              this.getChildren().forEach(function (e) {
                t.add(e.clone());
              }),
              t
            );
          }
          getAllIntersections(e) {
            var t = [];
            return (
              this.find("Shape").forEach(function (n) {
                n.isVisible() && n.intersects(e) && t.push(n);
              }),
              t
            );
          }
          _clearSelfAndDescendantCache(e) {
            var t;
            super._clearSelfAndDescendantCache(e),
              this.isCached() ||
                null === (t = this.children) ||
                void 0 === t ||
                t.forEach(function (t) {
                  t._clearSelfAndDescendantCache(e);
                });
          }
          _setChildrenIndices() {
            var e;
            null === (e = this.children) ||
              void 0 === e ||
              e.forEach(function (e, t) {
                e.index = t;
              }),
              this._requestDraw();
          }
          drawScene(e, t) {
            var n = this.getLayer(),
              r = e || (n && n.getCanvas()),
              a = r && r.getContext(),
              i = this._getCanvasCache(),
              o = i && i.scene,
              l = r && r.isCache;
            if (!this.isVisible() && !l) return this;
            if (o) {
              a.save();
              var s = this.getAbsoluteTransform(t).getMatrix();
              a.transform(s[0], s[1], s[2], s[3], s[4], s[5]),
                this._drawCachedSceneCanvas(a),
                a.restore();
            } else this._drawChildren("drawScene", r, t);
            return this;
          }
          drawHit(e, t) {
            if (!this.shouldDrawHit(t)) return this;
            var n = this.getLayer(),
              r = e || (n && n.hitCanvas),
              a = r && r.getContext(),
              i = this._getCanvasCache();
            if (i && i.hit) {
              a.save();
              var o = this.getAbsoluteTransform(t).getMatrix();
              a.transform(o[0], o[1], o[2], o[3], o[4], o[5]),
                this._drawCachedHitCanvas(a),
                a.restore();
            } else this._drawChildren("drawHit", r, t);
            return this;
          }
          _drawChildren(e, t, n) {
            var r,
              a = t && t.getContext(),
              i = this.clipWidth(),
              o = this.clipHeight(),
              l = this.clipFunc(),
              s = (i && o) || l;
            const u = n === this;
            if (s) {
              a.save();
              var c = this.getAbsoluteTransform(n),
                d = c.getMatrix();
              if (
                (a.transform(d[0], d[1], d[2], d[3], d[4], d[5]),
                a.beginPath(),
                l)
              )
                l.call(this, a, this);
              else {
                var h = this.clipX(),
                  f = this.clipY();
                a.rect(h, f, i, o);
              }
              a.clip(),
                (d = c.copy().invert().getMatrix()),
                a.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
            }
            var p =
              !u &&
              "source-over" !== this.globalCompositeOperation() &&
              "drawScene" === e;
            p && (a.save(), a._applyGlobalCompositeOperation(this)),
              null === (r = this.children) ||
                void 0 === r ||
                r.forEach(function (r) {
                  r[e](t, n);
                }),
              p && a.restore(),
              s && a.restore();
          }
          getClientRect(e) {
            var t,
              n,
              r,
              a,
              i,
              o,
              l = (e = e || {}).skipTransform,
              s = e.relativeTo,
              u = this;
            null === (t = this.children) ||
              void 0 === t ||
              t.forEach(function (t) {
                if (t.visible()) {
                  var o = t.getClientRect({
                    relativeTo: u,
                    skipShadow: e.skipShadow,
                    skipStroke: e.skipStroke,
                  });
                  (0 === o.width && 0 === o.height) ||
                    (void 0 === n
                      ? ((n = o.x),
                        (r = o.y),
                        (a = o.x + o.width),
                        (i = o.y + o.height))
                      : ((n = Math.min(n, o.x)),
                        (r = Math.min(r, o.y)),
                        (a = Math.max(a, o.x + o.width)),
                        (i = Math.max(i, o.y + o.height))));
                }
              });
            for (var c = this.find("Shape"), d = !1, h = 0; h < c.length; h++)
              if (c[h]._isVisible(this)) {
                d = !0;
                break;
              }
            return (
              (o =
                d && void 0 !== n
                  ? { x: n, y: r, width: a - n, height: i - r }
                  : { x: 0, y: 0, width: 0, height: 0 }),
              l ? o : this._transformedRect(o, s)
            );
          }
        }
        j.addComponentsGetterSetter(ge, "clip", ["x", "y", "width", "height"]),
          j.addGetterSetter(ge, "clipX", void 0, I()),
          j.addGetterSetter(ge, "clipY", void 0, I()),
          j.addGetterSetter(ge, "clipWidth", void 0, I()),
          j.addGetterSetter(ge, "clipHeight", void 0, I()),
          j.addGetterSetter(ge, "clipFunc");
        const ve = new Map(),
          me = void 0 !== S._global.PointerEvent;
        function ye(e) {
          return ve.get(e);
        }
        function be(e) {
          return { evt: e, pointerId: e.pointerId };
        }
        function we(e, t) {
          return ve.get(e) === t;
        }
        function _e(e, t) {
          ke(e),
            t.getStage() &&
              (ve.set(e, t),
              me &&
                t._fire(
                  "gotpointercapture",
                  be(new PointerEvent("gotpointercapture"))
                ));
        }
        function ke(e, t) {
          const n = ve.get(e);
          if (!n) return;
          const r = n.getStage();
          r && r.content,
            ve.delete(e),
            me &&
              n._fire(
                "lostpointercapture",
                be(new PointerEvent("lostpointercapture"))
              );
        }
        var Se = "hasShadow",
          Ce = "shadowRGBA",
          xe = "patternImage",
          Ee = "linearGradient",
          Pe = "radialGradient";
        let Te;
        function Le() {
          return Te || ((Te = A.createCanvasElement().getContext("2d")), Te);
        }
        const Re = {};
        class De extends fe {
          constructor(e) {
            let t;
            for (super(e); (t = A.getRandomColor()), !t || t in Re; );
            (this.colorKey = t), (Re[t] = this);
          }
          getContext() {
            return (
              A.warn(
                "shape.getContext() method is deprecated. Please do not use it."
              ),
              this.getLayer().getContext()
            );
          }
          getCanvas() {
            return (
              A.warn(
                "shape.getCanvas() method is deprecated. Please do not use it."
              ),
              this.getLayer().getCanvas()
            );
          }
          getSceneFunc() {
            return this.attrs.sceneFunc || this._sceneFunc;
          }
          getHitFunc() {
            return this.attrs.hitFunc || this._hitFunc;
          }
          hasShadow() {
            return this._getCache(Se, this._hasShadow);
          }
          _hasShadow() {
            return (
              this.shadowEnabled() &&
              0 !== this.shadowOpacity() &&
              !!(
                this.shadowColor() ||
                this.shadowBlur() ||
                this.shadowOffsetX() ||
                this.shadowOffsetY()
              )
            );
          }
          _getFillPattern() {
            return this._getCache(xe, this.__getFillPattern);
          }
          __getFillPattern() {
            if (this.fillPatternImage()) {
              const e = Le().createPattern(
                this.fillPatternImage(),
                this.fillPatternRepeat() || "repeat"
              );
              if (e && e.setTransform) {
                const t = new x();
                t.translate(this.fillPatternX(), this.fillPatternY()),
                  t.rotate(S.getAngle(this.fillPatternRotation())),
                  t.scale(this.fillPatternScaleX(), this.fillPatternScaleY()),
                  t.translate(
                    -1 * this.fillPatternOffsetX(),
                    -1 * this.fillPatternOffsetY()
                  );
                const n = t.getMatrix(),
                  r =
                    "undefined" == typeof DOMMatrix
                      ? { a: n[0], b: n[1], c: n[2], d: n[3], e: n[4], f: n[5] }
                      : new DOMMatrix(n);
                e.setTransform(r);
              }
              return e;
            }
          }
          _getLinearGradient() {
            return this._getCache(Ee, this.__getLinearGradient);
          }
          __getLinearGradient() {
            var e = this.fillLinearGradientColorStops();
            if (e) {
              for (
                var t = Le(),
                  n = this.fillLinearGradientStartPoint(),
                  r = this.fillLinearGradientEndPoint(),
                  a = t.createLinearGradient(n.x, n.y, r.x, r.y),
                  i = 0;
                i < e.length;
                i += 2
              )
                a.addColorStop(e[i], e[i + 1]);
              return a;
            }
          }
          _getRadialGradient() {
            return this._getCache(Pe, this.__getRadialGradient);
          }
          __getRadialGradient() {
            var e = this.fillRadialGradientColorStops();
            if (e) {
              for (
                var t = Le(),
                  n = this.fillRadialGradientStartPoint(),
                  r = this.fillRadialGradientEndPoint(),
                  a = t.createRadialGradient(
                    n.x,
                    n.y,
                    this.fillRadialGradientStartRadius(),
                    r.x,
                    r.y,
                    this.fillRadialGradientEndRadius()
                  ),
                  i = 0;
                i < e.length;
                i += 2
              )
                a.addColorStop(e[i], e[i + 1]);
              return a;
            }
          }
          getShadowRGBA() {
            return this._getCache(Ce, this._getShadowRGBA);
          }
          _getShadowRGBA() {
            if (this.hasShadow()) {
              var e = A.colorToRGBA(this.shadowColor());
              return (
                "rgba(" +
                e.r +
                "," +
                e.g +
                "," +
                e.b +
                "," +
                e.a * (this.shadowOpacity() || 1) +
                ")"
              );
            }
          }
          hasFill() {
            return this._calculate(
              "hasFill",
              [
                "fillEnabled",
                "fill",
                "fillPatternImage",
                "fillLinearGradientColorStops",
                "fillRadialGradientColorStops",
              ],
              () =>
                this.fillEnabled() &&
                !!(
                  this.fill() ||
                  this.fillPatternImage() ||
                  this.fillLinearGradientColorStops() ||
                  this.fillRadialGradientColorStops()
                )
            );
          }
          hasStroke() {
            return this._calculate(
              "hasStroke",
              [
                "strokeEnabled",
                "strokeWidth",
                "stroke",
                "strokeLinearGradientColorStops",
              ],
              () =>
                this.strokeEnabled() &&
                this.strokeWidth() &&
                !(!this.stroke() && !this.strokeLinearGradientColorStops())
            );
          }
          hasHitStroke() {
            const e = this.hitStrokeWidth();
            return "auto" === e
              ? this.hasStroke()
              : this.strokeEnabled() && !!e;
          }
          intersects(e) {
            var t = this.getStage().bufferHitCanvas;
            return (
              t.getContext().clear(),
              this.drawHit(t, null, !0),
              t.context.getImageData(Math.round(e.x), Math.round(e.y), 1, 1)
                .data[3] > 0
            );
          }
          destroy() {
            return (
              fe.prototype.destroy.call(this),
              delete Re[this.colorKey],
              delete this.colorKey,
              this
            );
          }
          _useBufferCanvas(e) {
            var t;
            if (!this.getStage()) return !1;
            if (
              null !== (t = this.attrs.perfectDrawEnabled) &&
              void 0 !== t &&
              !t
            )
              return !1;
            const n = e || this.hasFill(),
              r = this.hasStroke(),
              a = 1 !== this.getAbsoluteOpacity();
            if (n && r && a) return !0;
            const i = this.hasShadow(),
              o = this.shadowForStrokeEnabled();
            return !!(n && r && i && o);
          }
          setStrokeHitEnabled(e) {
            A.warn(
              "strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."
            ),
              e ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
          }
          getStrokeHitEnabled() {
            return 0 !== this.hitStrokeWidth();
          }
          getSelfRect() {
            var e = this.size();
            return {
              x: this._centroid ? -e.width / 2 : 0,
              y: this._centroid ? -e.height / 2 : 0,
              width: e.width,
              height: e.height,
            };
          }
          getClientRect(e = {}) {
            const t = e.skipTransform,
              n = e.relativeTo,
              r = this.getSelfRect(),
              a =
                (!e.skipStroke && this.hasStroke() && this.strokeWidth()) || 0,
              i = r.width + a,
              o = r.height + a,
              l = !e.skipShadow && this.hasShadow(),
              s = l ? this.shadowOffsetX() : 0,
              u = l ? this.shadowOffsetY() : 0,
              c = i + Math.abs(s),
              d = o + Math.abs(u),
              h = (l && this.shadowBlur()) || 0,
              f = {
                width: c + 2 * h,
                height: d + 2 * h,
                x: -(a / 2 + h) + Math.min(s, 0) + r.x,
                y: -(a / 2 + h) + Math.min(u, 0) + r.y,
              };
            return t ? f : this._transformedRect(f, n);
          }
          drawScene(e, t) {
            var n,
              r,
              a = this.getLayer(),
              i = e || a.getCanvas(),
              o = i.getContext(),
              l = this._getCanvasCache(),
              s = this.getSceneFunc(),
              u = this.hasShadow(),
              c = i.isCache,
              d = t === this;
            if (!this.isVisible() && !d) return this;
            if (l) {
              o.save();
              var h = this.getAbsoluteTransform(t).getMatrix();
              return (
                o.transform(h[0], h[1], h[2], h[3], h[4], h[5]),
                this._drawCachedSceneCanvas(o),
                o.restore(),
                this
              );
            }
            if (!s) return this;
            if ((o.save(), this._useBufferCanvas() && !c)) {
              (r = (n = this.getStage().bufferCanvas).getContext()).clear(),
                r.save(),
                r._applyLineJoin(this);
              var f = this.getAbsoluteTransform(t).getMatrix();
              r.transform(f[0], f[1], f[2], f[3], f[4], f[5]),
                s.call(this, r, this),
                r.restore();
              var p = n.pixelRatio;
              u && o._applyShadow(this),
                o._applyOpacity(this),
                o._applyGlobalCompositeOperation(this),
                o.drawImage(n._canvas, 0, 0, n.width / p, n.height / p);
            } else
              o._applyLineJoin(this),
                d ||
                  ((f = this.getAbsoluteTransform(t).getMatrix()),
                  o.transform(f[0], f[1], f[2], f[3], f[4], f[5]),
                  o._applyOpacity(this),
                  o._applyGlobalCompositeOperation(this)),
                u && o._applyShadow(this),
                s.call(this, o, this);
            return o.restore(), this;
          }
          drawHit(e, t, n = !1) {
            if (!this.shouldDrawHit(t, n)) return this;
            var r = this.getLayer(),
              a = e || r.hitCanvas,
              i = a && a.getContext(),
              o = this.hitFunc() || this.sceneFunc(),
              l = this._getCanvasCache(),
              s = l && l.hit;
            if (
              (this.colorKey ||
                A.warn(
                  "Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"
                ),
              s)
            ) {
              i.save();
              var u = this.getAbsoluteTransform(t).getMatrix();
              return (
                i.transform(u[0], u[1], u[2], u[3], u[4], u[5]),
                this._drawCachedHitCanvas(i),
                i.restore(),
                this
              );
            }
            if (!o) return this;
            if ((i.save(), i._applyLineJoin(this), this !== t)) {
              var c = this.getAbsoluteTransform(t).getMatrix();
              i.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
            }
            return o.call(this, i, this), i.restore(), this;
          }
          drawHitFromCache(e = 0) {
            var t,
              n,
              r,
              a,
              i,
              o = this._getCanvasCache(),
              l = this._getCachedSceneCanvas(),
              s = o.hit,
              u = s.getContext(),
              c = s.getWidth(),
              d = s.getHeight();
            u.clear(), u.drawImage(l._canvas, 0, 0, c, d);
            try {
              for (
                r = (n = (t = u.getImageData(0, 0, c, d)).data).length,
                  a = A._hexToRgb(this.colorKey),
                  i = 0;
                i < r;
                i += 4
              )
                n[i + 3] > e
                  ? ((n[i] = a.r),
                    (n[i + 1] = a.g),
                    (n[i + 2] = a.b),
                    (n[i + 3] = 255))
                  : (n[i + 3] = 0);
              u.putImageData(t, 0, 0);
            } catch (e) {
              A.error(
                "Unable to draw hit graph from cached scene canvas. " +
                  e.message
              );
            }
            return this;
          }
          hasPointerCapture(e) {
            return we(e, this);
          }
          setPointerCapture(e) {
            _e(e, this);
          }
          releaseCapture(e) {
            ke(e);
          }
        }
        (De.prototype._fillFunc = function (e) {
          e.fill();
        }),
          (De.prototype._strokeFunc = function (e) {
            e.stroke();
          }),
          (De.prototype._fillFuncHit = function (e) {
            e.fill();
          }),
          (De.prototype._strokeFuncHit = function (e) {
            e.stroke();
          }),
          (De.prototype._centroid = !1),
          (De.prototype.nodeType = "Shape"),
          C(De),
          (De.prototype.eventListeners = {}),
          De.prototype.on.call(
            De.prototype,
            "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
            function () {
              this._clearCache(Se);
            }
          ),
          De.prototype.on.call(
            De.prototype,
            "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
            function () {
              this._clearCache(Ce);
            }
          ),
          De.prototype.on.call(
            De.prototype,
            "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva",
            function () {
              this._clearCache(xe);
            }
          ),
          De.prototype.on.call(
            De.prototype,
            "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva",
            function () {
              this._clearCache(Ee);
            }
          ),
          De.prototype.on.call(
            De.prototype,
            "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva",
            function () {
              this._clearCache(Pe);
            }
          ),
          j.addGetterSetter(De, "stroke", void 0, z()),
          j.addGetterSetter(De, "strokeWidth", 2, I()),
          j.addGetterSetter(De, "fillAfterStrokeEnabled", !1),
          j.addGetterSetter(
            De,
            "hitStrokeWidth",
            "auto",
            (function () {
              if (S.isUnminified)
                return function (e, t) {
                  return (
                    A._isNumber(e) ||
                      "auto" === e ||
                      A.warn(
                        N(e) +
                          ' is a not valid value for "' +
                          t +
                          '" attribute. The value should be a number or "auto".'
                      ),
                    e
                  );
                };
            })()
          ),
          j.addGetterSetter(De, "strokeHitEnabled", !0, F()),
          j.addGetterSetter(De, "perfectDrawEnabled", !0, F()),
          j.addGetterSetter(De, "shadowForStrokeEnabled", !0, F()),
          j.addGetterSetter(De, "lineJoin"),
          j.addGetterSetter(De, "lineCap"),
          j.addGetterSetter(De, "sceneFunc"),
          j.addGetterSetter(De, "hitFunc"),
          j.addGetterSetter(De, "dash"),
          j.addGetterSetter(De, "dashOffset", 0, I()),
          j.addGetterSetter(De, "shadowColor", void 0, M()),
          j.addGetterSetter(De, "shadowBlur", 0, I()),
          j.addGetterSetter(De, "shadowOpacity", 1, I()),
          j.addComponentsGetterSetter(De, "shadowOffset", ["x", "y"]),
          j.addGetterSetter(De, "shadowOffsetX", 0, I()),
          j.addGetterSetter(De, "shadowOffsetY", 0, I()),
          j.addGetterSetter(De, "fillPatternImage"),
          j.addGetterSetter(De, "fill", void 0, z()),
          j.addGetterSetter(De, "fillPatternX", 0, I()),
          j.addGetterSetter(De, "fillPatternY", 0, I()),
          j.addGetterSetter(De, "fillLinearGradientColorStops"),
          j.addGetterSetter(De, "strokeLinearGradientColorStops"),
          j.addGetterSetter(De, "fillRadialGradientStartRadius", 0),
          j.addGetterSetter(De, "fillRadialGradientEndRadius", 0),
          j.addGetterSetter(De, "fillRadialGradientColorStops"),
          j.addGetterSetter(De, "fillPatternRepeat", "repeat"),
          j.addGetterSetter(De, "fillEnabled", !0),
          j.addGetterSetter(De, "strokeEnabled", !0),
          j.addGetterSetter(De, "shadowEnabled", !0),
          j.addGetterSetter(De, "dashEnabled", !0),
          j.addGetterSetter(De, "strokeScaleEnabled", !0),
          j.addGetterSetter(De, "fillPriority", "color"),
          j.addComponentsGetterSetter(De, "fillPatternOffset", ["x", "y"]),
          j.addGetterSetter(De, "fillPatternOffsetX", 0, I()),
          j.addGetterSetter(De, "fillPatternOffsetY", 0, I()),
          j.addComponentsGetterSetter(De, "fillPatternScale", ["x", "y"]),
          j.addGetterSetter(De, "fillPatternScaleX", 1, I()),
          j.addGetterSetter(De, "fillPatternScaleY", 1, I()),
          j.addComponentsGetterSetter(De, "fillLinearGradientStartPoint", [
            "x",
            "y",
          ]),
          j.addComponentsGetterSetter(De, "strokeLinearGradientStartPoint", [
            "x",
            "y",
          ]),
          j.addGetterSetter(De, "fillLinearGradientStartPointX", 0),
          j.addGetterSetter(De, "strokeLinearGradientStartPointX", 0),
          j.addGetterSetter(De, "fillLinearGradientStartPointY", 0),
          j.addGetterSetter(De, "strokeLinearGradientStartPointY", 0),
          j.addComponentsGetterSetter(De, "fillLinearGradientEndPoint", [
            "x",
            "y",
          ]),
          j.addComponentsGetterSetter(De, "strokeLinearGradientEndPoint", [
            "x",
            "y",
          ]),
          j.addGetterSetter(De, "fillLinearGradientEndPointX", 0),
          j.addGetterSetter(De, "strokeLinearGradientEndPointX", 0),
          j.addGetterSetter(De, "fillLinearGradientEndPointY", 0),
          j.addGetterSetter(De, "strokeLinearGradientEndPointY", 0),
          j.addComponentsGetterSetter(De, "fillRadialGradientStartPoint", [
            "x",
            "y",
          ]),
          j.addGetterSetter(De, "fillRadialGradientStartPointX", 0),
          j.addGetterSetter(De, "fillRadialGradientStartPointY", 0),
          j.addComponentsGetterSetter(De, "fillRadialGradientEndPoint", [
            "x",
            "y",
          ]),
          j.addGetterSetter(De, "fillRadialGradientEndPointX", 0),
          j.addGetterSetter(De, "fillRadialGradientEndPointY", 0),
          j.addGetterSetter(De, "fillPatternRotation", 0),
          j.backCompat(De, {
            dashArray: "dash",
            getDashArray: "getDash",
            setDashArray: "getDash",
            drawFunc: "sceneFunc",
            getDrawFunc: "getSceneFunc",
            setDrawFunc: "setSceneFunc",
            drawHitFunc: "hitFunc",
            getDrawHitFunc: "getHitFunc",
            setDrawHitFunc: "setHitFunc",
          });
        var Oe = [
            { x: 0, y: 0 },
            { x: -1, y: -1 },
            { x: 1, y: -1 },
            { x: 1, y: 1 },
            { x: -1, y: 1 },
          ],
          Ae = Oe.length;
        class Ne extends ge {
          constructor(e) {
            super(e),
              (this.canvas = new $()),
              (this.hitCanvas = new Q({ pixelRatio: 1 })),
              (this._waitingForDraw = !1),
              this.on("visibleChange.konva", this._checkVisibility),
              this._checkVisibility(),
              this.on(
                "imageSmoothingEnabledChange.konva",
                this._setSmoothEnabled
              ),
              this._setSmoothEnabled();
          }
          createPNGStream() {
            return this.canvas._canvas.createPNGStream();
          }
          getCanvas() {
            return this.canvas;
          }
          getNativeCanvasElement() {
            return this.canvas._canvas;
          }
          getHitCanvas() {
            return this.hitCanvas;
          }
          getContext() {
            return this.getCanvas().getContext();
          }
          clear(e) {
            return (
              this.getContext().clear(e),
              this.getHitCanvas().getContext().clear(e),
              this
            );
          }
          setZIndex(e) {
            super.setZIndex(e);
            var t = this.getStage();
            return (
              t &&
                t.content &&
                (t.content.removeChild(this.getNativeCanvasElement()),
                e < t.children.length - 1
                  ? t.content.insertBefore(
                      this.getNativeCanvasElement(),
                      t.children[e + 1].getCanvas()._canvas
                    )
                  : t.content.appendChild(this.getNativeCanvasElement())),
              this
            );
          }
          moveToTop() {
            fe.prototype.moveToTop.call(this);
            var e = this.getStage();
            return (
              e &&
                e.content &&
                (e.content.removeChild(this.getNativeCanvasElement()),
                e.content.appendChild(this.getNativeCanvasElement())),
              !0
            );
          }
          moveUp() {
            if (!fe.prototype.moveUp.call(this)) return !1;
            var e = this.getStage();
            return !(
              !e ||
              !e.content ||
              (e.content.removeChild(this.getNativeCanvasElement()),
              this.index < e.children.length - 1
                ? e.content.insertBefore(
                    this.getNativeCanvasElement(),
                    e.children[this.index + 1].getCanvas()._canvas
                  )
                : e.content.appendChild(this.getNativeCanvasElement()),
              0)
            );
          }
          moveDown() {
            if (fe.prototype.moveDown.call(this)) {
              var e = this.getStage();
              if (e) {
                var t = e.children;
                e.content &&
                  (e.content.removeChild(this.getNativeCanvasElement()),
                  e.content.insertBefore(
                    this.getNativeCanvasElement(),
                    t[this.index + 1].getCanvas()._canvas
                  ));
              }
              return !0;
            }
            return !1;
          }
          moveToBottom() {
            if (fe.prototype.moveToBottom.call(this)) {
              var e = this.getStage();
              if (e) {
                var t = e.children;
                e.content &&
                  (e.content.removeChild(this.getNativeCanvasElement()),
                  e.content.insertBefore(
                    this.getNativeCanvasElement(),
                    t[1].getCanvas()._canvas
                  ));
              }
              return !0;
            }
            return !1;
          }
          getLayer() {
            return this;
          }
          remove() {
            var e = this.getNativeCanvasElement();
            return (
              fe.prototype.remove.call(this),
              e &&
                e.parentNode &&
                A._isInDocument(e) &&
                e.parentNode.removeChild(e),
              this
            );
          }
          getStage() {
            return this.parent;
          }
          setSize({ width: e, height: t }) {
            return (
              this.canvas.setSize(e, t),
              this.hitCanvas.setSize(e, t),
              this._setSmoothEnabled(),
              this
            );
          }
          _validateAdd(e) {
            var t = e.getType();
            "Group" !== t &&
              "Shape" !== t &&
              A.throw("You may only add groups and shapes to a layer.");
          }
          _toKonvaCanvas(e) {
            return (
              ((e = e || {}).width = e.width || this.getWidth()),
              (e.height = e.height || this.getHeight()),
              (e.x = void 0 !== e.x ? e.x : this.x()),
              (e.y = void 0 !== e.y ? e.y : this.y()),
              fe.prototype._toKonvaCanvas.call(this, e)
            );
          }
          _checkVisibility() {
            const e = this.visible();
            this.canvas._canvas.style.display = e ? "block" : "none";
          }
          _setSmoothEnabled() {
            this.getContext()._context.imageSmoothingEnabled =
              this.imageSmoothingEnabled();
          }
          getWidth() {
            if (this.parent) return this.parent.width();
          }
          setWidth() {
            A.warn(
              'Can not change width of layer. Use "stage.width(value)" function instead.'
            );
          }
          getHeight() {
            if (this.parent) return this.parent.height();
          }
          setHeight() {
            A.warn(
              'Can not change height of layer. Use "stage.height(value)" function instead.'
            );
          }
          batchDraw() {
            return (
              this._waitingForDraw ||
                ((this._waitingForDraw = !0),
                A.requestAnimFrame(() => {
                  this.draw(), (this._waitingForDraw = !1);
                })),
              this
            );
          }
          getIntersection(e) {
            if (!this.isListening() || !this.isVisible()) return null;
            for (var t = 1, n = !1; ; ) {
              for (let r = 0; r < Ae; r++) {
                const a = Oe[r],
                  i = this._getIntersection({
                    x: e.x + a.x * t,
                    y: e.y + a.y * t,
                  }),
                  o = i.shape;
                if (o) return o;
                if (((n = !!i.antialiased), !i.antialiased)) break;
              }
              if (!n) return null;
              t += 1;
            }
          }
          _getIntersection(e) {
            const t = this.hitCanvas.pixelRatio,
              n = this.hitCanvas.context.getImageData(
                Math.round(e.x * t),
                Math.round(e.y * t),
                1,
                1
              ).data,
              r = n[3];
            if (255 === r) {
              const e = A._rgbToHex(n[0], n[1], n[2]),
                t = Re["#" + e];
              return t ? { shape: t } : { antialiased: !0 };
            }
            return r > 0 ? { antialiased: !0 } : {};
          }
          drawScene(e, t) {
            var n = this.getLayer(),
              r = e || (n && n.getCanvas());
            return (
              this._fire("beforeDraw", { node: this }),
              this.clearBeforeDraw() && r.getContext().clear(),
              ge.prototype.drawScene.call(this, r, t),
              this._fire("draw", { node: this }),
              this
            );
          }
          drawHit(e, t) {
            var n = this.getLayer(),
              r = e || (n && n.hitCanvas);
            return (
              n && n.clearBeforeDraw() && n.getHitCanvas().getContext().clear(),
              ge.prototype.drawHit.call(this, r, t),
              this
            );
          }
          enableHitGraph() {
            return this.hitGraphEnabled(!0), this;
          }
          disableHitGraph() {
            return this.hitGraphEnabled(!1), this;
          }
          setHitGraphEnabled(e) {
            A.warn(
              "hitGraphEnabled method is deprecated. Please use layer.listening() instead."
            ),
              this.listening(e);
          }
          getHitGraphEnabled(e) {
            return (
              A.warn(
                "hitGraphEnabled method is deprecated. Please use layer.listening() instead."
              ),
              this.listening()
            );
          }
          toggleHitCanvas() {
            if (this.parent && this.parent.content) {
              var e = this.parent;
              this.hitCanvas._canvas.parentNode
                ? e.content.removeChild(this.hitCanvas._canvas)
                : e.content.appendChild(this.hitCanvas._canvas);
            }
          }
        }
        function Ie(e, t, n, r, a, i, o) {
          var l = Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2)),
            s = Math.sqrt(Math.pow(a - n, 2) + Math.pow(i - r, 2)),
            u = (o * l) / (l + s),
            c = (o * s) / (l + s);
          return [
            n - u * (a - e),
            r - u * (i - t),
            n + c * (a - e),
            r + c * (i - t),
          ];
        }
        function Me(e, t) {
          var n,
            r,
            a = e.length,
            i = [];
          for (n = 2; n < a - 2; n += 2)
            (r = Ie(e[n - 2], e[n - 1], e[n], e[n + 1], e[n + 2], e[n + 3], t)),
              isNaN(r[0]) ||
                (i.push(r[0]),
                i.push(r[1]),
                i.push(e[n]),
                i.push(e[n + 1]),
                i.push(r[2]),
                i.push(r[3]));
          return i;
        }
        (Ne.prototype.nodeType = "Layer"),
          C(Ne),
          j.addGetterSetter(Ne, "imageSmoothingEnabled", !0),
          j.addGetterSetter(Ne, "clearBeforeDraw", !0),
          j.addGetterSetter(Ne, "hitGraphEnabled", !0, F());
        class ze extends De {
          constructor(e) {
            super(e),
              this.on(
                "pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva",
                function () {
                  this._clearCache("tensionPoints");
                }
              );
          }
          _sceneFunc(e) {
            var t,
              n,
              r,
              a = this.points(),
              i = a.length,
              o = this.tension(),
              l = this.closed(),
              s = this.bezier();
            if (i) {
              if ((e.beginPath(), e.moveTo(a[0], a[1]), 0 !== o && i > 4)) {
                for (
                  n = (t = this.getTensionPoints()).length,
                    r = l ? 0 : 4,
                    l || e.quadraticCurveTo(t[0], t[1], t[2], t[3]);
                  r < n - 2;

                )
                  e.bezierCurveTo(
                    t[r++],
                    t[r++],
                    t[r++],
                    t[r++],
                    t[r++],
                    t[r++]
                  );
                l || e.quadraticCurveTo(t[n - 2], t[n - 1], a[i - 2], a[i - 1]);
              } else if (s)
                for (r = 2; r < i; )
                  e.bezierCurveTo(
                    a[r++],
                    a[r++],
                    a[r++],
                    a[r++],
                    a[r++],
                    a[r++]
                  );
              else for (r = 2; r < i; r += 2) e.lineTo(a[r], a[r + 1]);
              l
                ? (e.closePath(), e.fillStrokeShape(this))
                : e.strokeShape(this);
            }
          }
          getTensionPoints() {
            return this._getCache("tensionPoints", this._getTensionPoints);
          }
          _getTensionPoints() {
            return this.closed()
              ? this._getTensionPointsClosed()
              : Me(this.points(), this.tension());
          }
          _getTensionPointsClosed() {
            var e = this.points(),
              t = e.length,
              n = this.tension(),
              r = Ie(e[t - 2], e[t - 1], e[0], e[1], e[2], e[3], n),
              a = Ie(e[t - 4], e[t - 3], e[t - 2], e[t - 1], e[0], e[1], n),
              i = Me(e, n);
            return [r[2], r[3]]
              .concat(i)
              .concat([
                a[0],
                a[1],
                e[t - 2],
                e[t - 1],
                a[2],
                a[3],
                r[0],
                r[1],
                e[0],
                e[1],
              ]);
          }
          getWidth() {
            return this.getSelfRect().width;
          }
          getHeight() {
            return this.getSelfRect().height;
          }
          getSelfRect() {
            var e = this.points();
            if (e.length < 4)
              return { x: e[0] || 0, y: e[1] || 0, width: 0, height: 0 };
            for (
              var t,
                n,
                r = (e =
                  0 !== this.tension()
                    ? [
                        e[0],
                        e[1],
                        ...this._getTensionPoints(),
                        e[e.length - 2],
                        e[e.length - 1],
                      ]
                    : this.points())[0],
                a = e[0],
                i = e[1],
                o = e[1],
                l = 0;
              l < e.length / 2;
              l++
            )
              (t = e[2 * l]),
                (n = e[2 * l + 1]),
                (r = Math.min(r, t)),
                (a = Math.max(a, t)),
                (i = Math.min(i, n)),
                (o = Math.max(o, n));
            return { x: r, y: i, width: a - r, height: o - i };
          }
        }
        (ze.prototype.className = "Line"),
          (ze.prototype._attrsAffectingSize = ["points", "bezier", "tension"]),
          C(ze),
          j.addGetterSetter(ze, "closed", !1),
          j.addGetterSetter(ze, "bezier", !1),
          j.addGetterSetter(ze, "tension", 0, I()),
          j.addGetterSetter(
            ze,
            "points",
            [],
            (function () {
              if (S.isUnminified)
                return function (e, t) {
                  return (
                    A._isArray(e)
                      ? e.forEach(function (e) {
                          A._isNumber(e) ||
                            A.warn(
                              '"' +
                                t +
                                '" attribute has non numeric element ' +
                                e +
                                ". Make sure that all elements are numbers."
                            );
                        })
                      : A.warn(
                          N(e) +
                            ' is a not valid value for "' +
                            t +
                            '" attribute. The value should be a array of numbers.'
                        ),
                    e
                  );
                };
            })()
          );
        var Fe = "mouseleave",
          Ge = "mouseover",
          Be = "mouseenter",
          je = "mousemove",
          Ue = "mousedown",
          He = "mouseup",
          We = "pointermove",
          Ve = "pointerdown",
          Ye = "pointerup",
          Xe = "pointercancel",
          qe = "pointerout",
          $e = "pointerleave",
          Qe = "pointerover",
          Ke = "pointerenter",
          Ze = "contextmenu",
          Je = "touchstart",
          et = "touchend",
          tt = "touchmove",
          nt = "touchcancel",
          rt = "wheel",
          at = [
            [Be, "_pointerenter"],
            [Ue, "_pointerdown"],
            [je, "_pointermove"],
            [He, "_pointerup"],
            [Fe, "_pointerleave"],
            [Je, "_pointerdown"],
            [tt, "_pointermove"],
            [et, "_pointerup"],
            [nt, "_pointercancel"],
            [Ge, "_pointerover"],
            [rt, "_wheel"],
            [Ze, "_contextmenu"],
            [Ve, "_pointerdown"],
            [We, "_pointermove"],
            [Ye, "_pointerup"],
            [Xe, "_pointercancel"],
            ["lostpointercapture", "_lostpointercapture"],
          ];
        const it = {
            mouse: {
              [qe]: "mouseout",
              [$e]: Fe,
              [Qe]: Ge,
              [Ke]: Be,
              [We]: je,
              [Ve]: Ue,
              [Ye]: He,
              [Xe]: "mousecancel",
              pointerclick: "click",
              pointerdblclick: "dblclick",
            },
            touch: {
              [qe]: "touchout",
              [$e]: "touchleave",
              [Qe]: "touchover",
              [Ke]: "touchenter",
              [We]: tt,
              [Ve]: Je,
              [Ye]: et,
              [Xe]: nt,
              pointerclick: "tap",
              pointerdblclick: "dbltap",
            },
            pointer: {
              [qe]: qe,
              [$e]: $e,
              [Qe]: Qe,
              [Ke]: Ke,
              [We]: We,
              [Ve]: Ve,
              [Ye]: Ye,
              [Xe]: Xe,
              pointerclick: "pointerclick",
              pointerdblclick: "pointerdblclick",
            },
          },
          ot = (e) =>
            e.indexOf("pointer") >= 0
              ? "pointer"
              : e.indexOf("touch") >= 0
              ? "touch"
              : "mouse",
          lt = (e) => {
            const t = ot(e);
            return "pointer" === t
              ? S.pointerEventsEnabled && it.pointer
              : "touch" === t
              ? it.touch
              : "mouse" === t
              ? it.mouse
              : void 0;
          };
        function st(e = {}) {
          return (
            (e.clipFunc || e.clipWidth || e.clipHeight) &&
              A.warn(
                "Stage does not support clipping. Please use clip for Layers or Groups."
              ),
            e
          );
        }
        const ut = [];
        class ct extends ge {
          constructor(e) {
            super(st(e)),
              (this._pointerPositions = []),
              (this._changedPointerPositions = []),
              this._buildDOM(),
              this._bindContentEvents(),
              ut.push(this),
              this.on("widthChange.konva heightChange.konva", this._resizeDOM),
              this.on("visibleChange.konva", this._checkVisibility),
              this.on(
                "clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva",
                () => {
                  st(this.attrs);
                }
              ),
              this._checkVisibility();
          }
          _validateAdd(e) {
            const t = "Layer" === e.getType(),
              n = "FastLayer" === e.getType();
            t || n || A.throw("You may only add layers to the stage.");
          }
          _checkVisibility() {
            if (!this.content) return;
            const e = this.visible() ? "" : "none";
            this.content.style.display = e;
          }
          setContainer(e) {
            if ("string" == typeof e) {
              if ("." === e.charAt(0)) {
                var t = e.slice(1);
                e = document.getElementsByClassName(t)[0];
              } else {
                var n;
                (n = "#" !== e.charAt(0) ? e : e.slice(1)),
                  (e = document.getElementById(n));
              }
              if (!e) throw "Can not find container in document with id " + n;
            }
            return (
              this._setAttr("container", e),
              this.content &&
                (this.content.parentElement &&
                  this.content.parentElement.removeChild(this.content),
                e.appendChild(this.content)),
              this
            );
          }
          shouldDrawHit() {
            return !0;
          }
          clear() {
            var e,
              t = this.children,
              n = t.length;
            for (e = 0; e < n; e++) t[e].clear();
            return this;
          }
          clone(e) {
            return (
              e || (e = {}),
              (e.container =
                "undefined" != typeof document &&
                document.createElement("div")),
              ge.prototype.clone.call(this, e)
            );
          }
          destroy() {
            super.destroy();
            var e = this.content;
            e && A._isInDocument(e) && this.container().removeChild(e);
            var t = ut.indexOf(this);
            return t > -1 && ut.splice(t, 1), this;
          }
          getPointerPosition() {
            const e =
              this._pointerPositions[0] || this._changedPointerPositions[0];
            return e
              ? { x: e.x, y: e.y }
              : (A.warn(
                  "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);"
                ),
                null);
          }
          _getPointerById(e) {
            return this._pointerPositions.find((t) => t.id === e);
          }
          getPointersPositions() {
            return this._pointerPositions;
          }
          getStage() {
            return this;
          }
          getContent() {
            return this.content;
          }
          _toKonvaCanvas(e) {
            ((e = e || {}).x = e.x || 0),
              (e.y = e.y || 0),
              (e.width = e.width || this.width()),
              (e.height = e.height || this.height());
            var t = new $({
                width: e.width,
                height: e.height,
                pixelRatio: e.pixelRatio || 1,
              }),
              n = t.getContext()._context,
              r = this.children;
            return (
              (e.x || e.y) && n.translate(-1 * e.x, -1 * e.y),
              r.forEach(function (t) {
                if (t.isVisible()) {
                  var r = t._toKonvaCanvas(e);
                  n.drawImage(
                    r._canvas,
                    e.x,
                    e.y,
                    r.getWidth() / r.getPixelRatio(),
                    r.getHeight() / r.getPixelRatio()
                  );
                }
              }),
              t
            );
          }
          getIntersection(e) {
            if (!e) return null;
            var t,
              n = this.children;
            for (t = n.length - 1; t >= 0; t--) {
              const r = n[t].getIntersection(e);
              if (r) return r;
            }
            return null;
          }
          _resizeDOM() {
            var e = this.width(),
              t = this.height();
            this.content &&
              ((this.content.style.width = e + "px"),
              (this.content.style.height = t + "px")),
              this.bufferCanvas.setSize(e, t),
              this.bufferHitCanvas.setSize(e, t),
              this.children.forEach((n) => {
                n.setSize({ width: e, height: t }), n.draw();
              });
          }
          add(e, ...t) {
            if (arguments.length > 1) {
              for (var n = 0; n < arguments.length; n++) this.add(arguments[n]);
              return this;
            }
            super.add(e);
            var r = this.children.length;
            return (
              r > 5 &&
                A.warn(
                  "The stage has " +
                    r +
                    " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."
                ),
              e.setSize({ width: this.width(), height: this.height() }),
              e.draw(),
              S.isBrowser && this.content.appendChild(e.canvas._canvas),
              this
            );
          }
          getParent() {
            return null;
          }
          getLayer() {
            return null;
          }
          hasPointerCapture(e) {
            return we(e, this);
          }
          setPointerCapture(e) {
            _e(e, this);
          }
          releaseCapture(e) {
            ke(e);
          }
          getLayers() {
            return this.children;
          }
          _bindContentEvents() {
            S.isBrowser &&
              at.forEach(([e, t]) => {
                this.content.addEventListener(e, (e) => {
                  this[t](e);
                });
              });
          }
          _pointerenter(e) {
            this.setPointersPositions(e);
            const t = lt(e.type);
            this._fire(t.pointerenter, {
              evt: e,
              target: this,
              currentTarget: this,
            });
          }
          _pointerover(e) {
            this.setPointersPositions(e);
            const t = lt(e.type);
            this._fire(t.pointerover, {
              evt: e,
              target: this,
              currentTarget: this,
            });
          }
          _getTargetShape(e) {
            let t = this[e + "targetShape"];
            return t && !t.getStage() && (t = null), t;
          }
          _pointerleave(e) {
            const t = lt(e.type),
              n = ot(e.type);
            if (t) {
              this.setPointersPositions(e);
              var r = this._getTargetShape(n),
                a = !K.isDragging || S.hitOnDragEnabled;
              r && a
                ? (r._fireAndBubble(t.pointerout, { evt: e }),
                  r._fireAndBubble(t.pointerleave, { evt: e }),
                  this._fire(t.pointerleave, {
                    evt: e,
                    target: this,
                    currentTarget: this,
                  }),
                  (this[n + "targetShape"] = null))
                : a &&
                  (this._fire(t.pointerleave, {
                    evt: e,
                    target: this,
                    currentTarget: this,
                  }),
                  this._fire(t.pointerout, {
                    evt: e,
                    target: this,
                    currentTarget: this,
                  })),
                (this.pointerPos = void 0),
                (this._pointerPositions = []);
            }
          }
          _pointerdown(e) {
            const t = lt(e.type),
              n = ot(e.type);
            if (t) {
              this.setPointersPositions(e);
              var r = !1;
              this._changedPointerPositions.forEach((a) => {
                var i = this.getIntersection(a);
                if (
                  ((K.justDragged = !1),
                  (S["_" + n + "ListenClick"] = !0),
                  !i || !i.isListening())
                )
                  return;
                S.capturePointerEventsEnabled && i.setPointerCapture(a.id),
                  (this[n + "ClickStartShape"] = i),
                  i._fireAndBubble(t.pointerdown, { evt: e, pointerId: a.id }),
                  (r = !0);
                const o = e.type.indexOf("touch") >= 0;
                i.preventDefault() && e.cancelable && o && e.preventDefault();
              }),
                r ||
                  this._fire(t.pointerdown, {
                    evt: e,
                    target: this,
                    currentTarget: this,
                    pointerId: this._pointerPositions[0].id,
                  });
            }
          }
          _pointermove(e) {
            const t = lt(e.type),
              n = ot(e.type);
            if (!t) return;
            if (
              (K.isDragging &&
                K.node.preventDefault() &&
                e.cancelable &&
                e.preventDefault(),
              this.setPointersPositions(e),
              K.isDragging && !S.hitOnDragEnabled)
            )
              return;
            var r = {};
            let a = !1;
            var i = this._getTargetShape(n);
            this._changedPointerPositions.forEach((o) => {
              const l = ye(o.id) || this.getIntersection(o),
                s = o.id,
                u = { evt: e, pointerId: s };
              var c = i !== l;
              if (
                (c &&
                  i &&
                  (i._fireAndBubble(t.pointerout, Object.assign({}, u), l),
                  i._fireAndBubble(t.pointerleave, Object.assign({}, u), l)),
                l)
              ) {
                if (r[l._id]) return;
                r[l._id] = !0;
              }
              l && l.isListening()
                ? ((a = !0),
                  c &&
                    (l._fireAndBubble(t.pointerover, Object.assign({}, u), i),
                    l._fireAndBubble(t.pointerenter, Object.assign({}, u), i),
                    (this[n + "targetShape"] = l)),
                  l._fireAndBubble(t.pointermove, Object.assign({}, u)))
                : i &&
                  (this._fire(t.pointerover, {
                    evt: e,
                    target: this,
                    currentTarget: this,
                    pointerId: s,
                  }),
                  (this[n + "targetShape"] = null));
            }),
              a ||
                this._fire(t.pointermove, {
                  evt: e,
                  target: this,
                  currentTarget: this,
                  pointerId: this._changedPointerPositions[0].id,
                });
          }
          _pointerup(e) {
            const t = lt(e.type),
              n = ot(e.type);
            if (!t) return;
            this.setPointersPositions(e);
            const r = this[n + "ClickStartShape"],
              a = this[n + "ClickEndShape"];
            var i = {};
            let o = !1;
            this._changedPointerPositions.forEach((l) => {
              const s = ye(l.id) || this.getIntersection(l);
              if (s) {
                if ((s.releaseCapture(l.id), i[s._id])) return;
                i[s._id] = !0;
              }
              const u = l.id,
                c = { evt: e, pointerId: u };
              let d = !1;
              S["_" + n + "InDblClickWindow"]
                ? ((d = !0), clearTimeout(this[n + "DblTimeout"]))
                : K.justDragged ||
                  ((S["_" + n + "InDblClickWindow"] = !0),
                  clearTimeout(this[n + "DblTimeout"])),
                (this[n + "DblTimeout"] = setTimeout(function () {
                  S["_" + n + "InDblClickWindow"] = !1;
                }, S.dblClickWindow)),
                s && s.isListening()
                  ? ((o = !0),
                    (this[n + "ClickEndShape"] = s),
                    s._fireAndBubble(t.pointerup, Object.assign({}, c)),
                    S["_" + n + "ListenClick"] &&
                      r &&
                      r === s &&
                      (s._fireAndBubble(t.pointerclick, Object.assign({}, c)),
                      d &&
                        a &&
                        a === s &&
                        s._fireAndBubble(
                          t.pointerdblclick,
                          Object.assign({}, c)
                        )))
                  : ((this[n + "ClickEndShape"] = null),
                    S["_" + n + "ListenClick"] &&
                      this._fire(t.pointerclick, {
                        evt: e,
                        target: this,
                        currentTarget: this,
                        pointerId: u,
                      }),
                    d &&
                      this._fire(t.pointerdblclick, {
                        evt: e,
                        target: this,
                        currentTarget: this,
                        pointerId: u,
                      }));
            }),
              o ||
                this._fire(t.pointerup, {
                  evt: e,
                  target: this,
                  currentTarget: this,
                  pointerId: this._changedPointerPositions[0].id,
                }),
              (S["_" + n + "ListenClick"] = !1),
              e.cancelable && e.preventDefault();
          }
          _contextmenu(e) {
            this.setPointersPositions(e);
            var t = this.getIntersection(this.getPointerPosition());
            t && t.isListening()
              ? t._fireAndBubble(Ze, { evt: e })
              : this._fire(Ze, { evt: e, target: this, currentTarget: this });
          }
          _wheel(e) {
            this.setPointersPositions(e);
            var t = this.getIntersection(this.getPointerPosition());
            t && t.isListening()
              ? t._fireAndBubble(rt, { evt: e })
              : this._fire(rt, { evt: e, target: this, currentTarget: this });
          }
          _pointercancel(e) {
            this.setPointersPositions(e);
            const t =
              ye(e.pointerId) ||
              this.getIntersection(this.getPointerPosition());
            t && t._fireAndBubble(Ye, be(e)), ke(e.pointerId);
          }
          _lostpointercapture(e) {
            ke(e.pointerId);
          }
          setPointersPositions(e) {
            var t = this._getContentPosition(),
              n = null,
              r = null;
            void 0 !== (e = e || window.event).touches
              ? ((this._pointerPositions = []),
                (this._changedPointerPositions = []),
                Array.prototype.forEach.call(e.touches, (e) => {
                  this._pointerPositions.push({
                    id: e.identifier,
                    x: (e.clientX - t.left) / t.scaleX,
                    y: (e.clientY - t.top) / t.scaleY,
                  });
                }),
                Array.prototype.forEach.call(
                  e.changedTouches || e.touches,
                  (e) => {
                    this._changedPointerPositions.push({
                      id: e.identifier,
                      x: (e.clientX - t.left) / t.scaleX,
                      y: (e.clientY - t.top) / t.scaleY,
                    });
                  }
                ))
              : ((n = (e.clientX - t.left) / t.scaleX),
                (r = (e.clientY - t.top) / t.scaleY),
                (this.pointerPos = { x: n, y: r }),
                (this._pointerPositions = [
                  { x: n, y: r, id: A._getFirstPointerId(e) },
                ]),
                (this._changedPointerPositions = [
                  { x: n, y: r, id: A._getFirstPointerId(e) },
                ]));
          }
          _setPointerPosition(e) {
            A.warn(
              'Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'
            ),
              this.setPointersPositions(e);
          }
          _getContentPosition() {
            if (!this.content || !this.content.getBoundingClientRect)
              return { top: 0, left: 0, scaleX: 1, scaleY: 1 };
            var e = this.content.getBoundingClientRect();
            return {
              top: e.top,
              left: e.left,
              scaleX: e.width / this.content.clientWidth || 1,
              scaleY: e.height / this.content.clientHeight || 1,
            };
          }
          _buildDOM() {
            if (
              ((this.bufferCanvas = new $({
                width: this.width(),
                height: this.height(),
              })),
              (this.bufferHitCanvas = new Q({
                pixelRatio: 1,
                width: this.width(),
                height: this.height(),
              })),
              S.isBrowser)
            ) {
              var e = this.container();
              if (!e) throw "Stage has no container. A container is required.";
              (e.innerHTML = ""),
                (this.content = document.createElement("div")),
                (this.content.style.position = "relative"),
                (this.content.style.userSelect = "none"),
                (this.content.className = "konvajs-content"),
                this.content.setAttribute("role", "presentation"),
                e.appendChild(this.content),
                this._resizeDOM();
            }
          }
          cache() {
            return (
              A.warn(
                "Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."
              ),
              this
            );
          }
          clearCache() {
            return this;
          }
          batchDraw() {
            return (
              this.getChildren().forEach(function (e) {
                e.batchDraw();
              }),
              this
            );
          }
        }
        (ct.prototype.nodeType = "Stage"),
          C(ct),
          j.addGetterSetter(ct, "container");
        var dt = (function () {
          function e(e, t, n) {
            var r = this;
            (this.setupKonvaStage = function (e, t, n) {
              var r = new ct({ container: e, width: t, height: n }),
                a = new Ne();
              return r.add(a), r;
            }),
              (this.clear = function () {
                r.layer.destroyChildren();
              }),
              (this.stage = this.setupKonvaStage(e, t, n)),
              (this.layer = this.stage.getLayers()[0]);
          }
          return (
            (e.prototype.getWidth = function () {
              return console.log(this.layer.getWidth()), this.layer.getWidth();
            }),
            (e.prototype.getHeight = function () {
              return this.layer.getHeight();
            }),
            (e.prototype.drawLine = function (e, t, n, r, a, i, o) {
              var l = new ze({
                points: [e, t, n, r],
                stroke: a,
                strokeWidth: i,
                lineCap: o,
              });
              this.layer.add(l);
            }),
            e
          );
        })();
        const ht = dt;
        var ft = function (e, t) {
            return Math.random() * (t - e) + e;
          },
          pt = function (e) {
            return Math.random() >= 1 - e;
          },
          gt = function () {
            return (
              (gt =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, a) &&
                        (e[a] = t[a]);
                  return e;
                }),
              gt.apply(this, arguments)
            );
          };
        const vt = function (e) {
            var t = this;
            (this.canvas = e),
              (this.LEAF_COLORS = ["#f5d5f5", "#f5e6f5", "#fff5ff"]),
              (this.ROTATE_ANGLE = 20),
              (this.ANGLE_DERIVATION = 6),
              (this.INIT_STATE = {
                x: this.canvas.getWidth() / 2,
                y: this.canvas.getHeight(),
                angle: 0,
                stemLength: 5,
                stemWidth: 20,
              }),
              (this.currentState = this.INIT_STATE),
              (this.stateStack = []),
              (this.interpret = function (e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e.charAt(n);
                  t.execute(r);
                }
              }),
              (this.execute = function (e) {
                switch (e) {
                  case "G":
                  case "F":
                    if (!pt(0.7)) break;
                  case "T":
                    t.drawLine(
                      "#474a3d",
                      t.currentState.stemLength,
                      t.currentState.stemWidth,
                      "round"
                    );
                    break;
                  case "+":
                    t.rotate(
                      ft(
                        t.ROTATE_ANGLE - t.ANGLE_DERIVATION,
                        t.ROTATE_ANGLE + t.ANGLE_DERIVATION
                      )
                    );
                    break;
                  case "-":
                    t.rotate(
                      -ft(
                        t.ROTATE_ANGLE - t.ANGLE_DERIVATION,
                        t.ROTATE_ANGLE + t.ANGLE_DERIVATION
                      )
                    );
                    break;
                  case "[":
                    (t.currentState.stemWidth *= 0.75),
                      t.currentState.stemWidth < 1 &&
                        (t.currentState.stemWidth = 1),
                      pt(0.6) && (t.currentState.stemLength *= 0.9),
                      t.currentState.stemLength < 1 &&
                        (t.currentState.stemLength = 1),
                      t.pushState();
                    break;
                  case "]":
                    t.popState();
                    break;
                  case "L":
                    t.drawLine(t.getLeafColor(), 8, 8);
                }
              }),
              (this.getLeafColor = function () {
                return t.LEAF_COLORS[
                  ((e = t.LEAF_COLORS.length), Math.floor(Math.random() * e))
                ];
                var e;
              }),
              (this.drawLine = function (e, n, r, a) {
                void 0 === r && (r = 1), void 0 === a && (a = "butt");
                var i = t.currentState.x,
                  o = t.currentState.y,
                  l = t.currentState.angle,
                  s = i - n * Math.sin((Math.PI * l) / 180),
                  u = o - n * Math.cos((Math.PI * l) / 180);
                t.canvas.drawLine(i, o, s, u, e, r, a),
                  (t.currentState.x = s),
                  (t.currentState.y = u);
              }),
              (this.rotate = function (e) {
                t.currentState.angle += e;
              }),
              (this.pushState = function () {
                t.stateStack.push(gt({}, t.currentState));
              }),
              (this.popState = function () {
                var e = t.stateStack.pop();
                e && (t.currentState = e);
              });
          },
          mt = (function () {
            function e() {
              var e = this;
              this.applyRules = function (t, n) {
                for (var r = "", a = 0; a < t.length; a++) {
                  var i = t.charAt(a),
                    o = e.findApplicableRule(i, n);
                  r += o ? o.to : i;
                }
                return r;
              };
            }
            return (
              (e.prototype.findApplicableRule = function (e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  if (e === r.from) return r;
                }
                return null;
              }),
              e
            );
          })(),
          yt = (function () {
            function e() {}
            return (
              (e.FRACTAL_PLANT = {
                name: "Barnsley Fern",
                axiom: "X",
                rules: [
                  { from: "X", to: " F+[[X]-X]-F[-LX]+FL" },
                  { from: "F", to: "FF" },
                ],
                defaultIteration: 6,
              }),
              (e.SAKURA = {
                name: "Autumn",
                axiom: "TTTTTTTTTTTT[b][+a]-b",
                rules: [
                  { from: "F", to: "GF" },
                  { from: "a", to: "F[+xL]+b" },
                  { from: "b", to: "F[-yL]-a" },
                  { from: "x", to: "+a" },
                  { from: "y", to: "-b" },
                ],
                defaultIteration: 14,
              }),
              e
            );
          })();
        var bt,
          wt =
            ((bt = function (e, t) {
              return (
                (bt =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                bt(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              bt(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          _t = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              wt(t, e),
              (t.prototype.render = function () {
                var e = this,
                  t = new ht("canvas", 600, 500),
                  n = yt.SAKURA;
                return (
                  this.draw(t, n, n.defaultIteration),
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      "div",
                      { className: w.header },
                      r.createElement(
                        "div",
                        {
                          className: w.refreshButton,
                          onClick: function () {
                            e.draw(t, n, n.defaultIteration);
                          },
                        },
                        "Generate New"
                      )
                    )
                  )
                );
              }),
              (t.prototype.draw = function (e, t, n) {
                e.clear();
                var r = this.generateExpression(t.axiom, t.rules, n),
                  a = new vt(e);
                console.log(r), a.interpret(r);
              }),
              (t.prototype.generateExpression = function (e, t, n) {
                for (var r = new mt(), a = e, i = 0; i < n; i++)
                  a = r.applyRules(a, t);
                return a;
              }),
              t
            );
          })(r.Component);
        const kt = (0, i.w)(_t);
        var St = n(28),
          Ct = {};
        (Ct.styleTagTransform = m()),
          (Ct.setAttributes = f()),
          (Ct.insert = d().bind(null, "head")),
          (Ct.domAPI = u()),
          (Ct.insertStyleElement = g()),
          l()(St.Z, Ct),
          St.Z && St.Z.locals && St.Z.locals;
        var xt = document.getElementById("app");
        a.render(r.createElement(kt, null), xt);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    n(658),
    n(399);
})();
