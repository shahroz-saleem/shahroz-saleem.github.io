(function(t){function e(e){for(var a,o,c=e[0],r=e[1],l=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"0508":function(t,e,n){"use strict";var a=n("58c0"),i=n.n(a);i.a},"06b0":function(t,e,n){t.exports=n.p+"img/mongodb.8d22f010.png"},"0b55":function(t,e,n){t.exports=n.p+"img/sqlServer.ed320e1c.png"},"0d81":function(t,e,n){},1828:function(t,e,n){},"1a42":function(t,e,n){},"1bef":function(t,e,n){"use strict";var a=n("cba1"),i=n.n(a);i.a},"2c00":function(t,e,n){"use strict";var a=n("7a6e"),i=n.n(a);i.a},"2e1d":function(t,e,n){t.exports=n.p+"img/contact.2bb68deb.svg"},"36a1":function(t,e,n){},"3ad9":function(t,e,n){"use strict";var a=n("96ad"),i=n.n(a);i.a},"3b56":function(t,e,n){"use strict";var a=n("c8ea"),i=n.n(a);i.a},"3e19":function(t,e,n){"use strict";var a=n("0d81"),i=n.n(a);i.a},"42e1":function(t,e,n){t.exports=n.p+"img/photoshop.68109a34.png"},"42f7":function(t,e,n){"use strict";var a=n("6cef"),i=n.n(a);i.a},"4d01":function(t,e,n){},"4f9c":function(t,e,n){"use strict";var a=n("b0f9"),i=n.n(a);i.a},5183:function(t,e,n){"use strict";var a=n("1828"),i=n.n(a);i.a},5530:function(t,e,n){},5555:function(t,e,n){"use strict";var a=n("fd7f"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),n("home")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[t._m(0),n("div",{staticClass:"actions-cover"},[n("vs-button",{on:{click:t.contact}},[t._v("Contect")]),n("vs-button",{attrs:{href:"files/resume.pdf",target:"_blank"}},[t._v("Resume")])],1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-cover"},[a("img",{staticClass:"logo",attrs:{src:n("9d64"),alt:"logo"}}),a("h3",{staticClass:"brand"},[t._v("Shahroz Saleem")])])}],r={name:"Navbar",data:function(){return{active:"guide"}},methods:{contact:function(){document.querySelector(".contact").scrollIntoView({behavior:"smooth"})}}},l=r,u=(n("b78c"),n("2877")),d=Object(u["a"])(l,o,c,!1,null,"2a6e9840",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("hero"),n("about"),n("work"),n("skills"),n("contact"),n("app-footer")],1)},g=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero"},[n("div",{staticClass:"cover"},[n("div",{staticClass:"left"},[n("div",{staticClass:"about"},[n("h4",{staticClass:"start"},[t._v("I'm")]),n("h1",{staticClass:"name"},[t._v("Shahroz Saleem")]),n("h2",{staticClass:"profession"},[t._v("Software Engineer")]),t._m(0),n("vs-button",{attrs:{size:"large"},on:{click:t.contact}},[t._v(" Contact ")]),n("ul",{staticClass:"socials"},[n("li",{staticClass:"links"},[n("vs-button",{attrs:{icon:"",href:"mailto:"+t.email}},[n("i",{staticClass:"bx bx-envelope"})])],1),n("li",{staticClass:"links"},[n("vs-button",{attrs:{icon:"",href:t.linkedin}},[n("i",{staticClass:"bx bxl-linkedin"})])],1)])],1)]),t._m(1)])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"info"},[t._v(" Detail-oriented Software Engineer and full-stack developer with a passion for developing software application with thoughtful UI, collaboration, and research. "),n("br"),t._v(" Specializes in Modern frontend frameworks i.e. "),n("b",[t._v("Angular")]),t._v(", "),n("b",[t._v("VueJs")]),t._v(", "),n("b",[t._v("Material Designs")]),t._v(", and backend technologies i.e. "),n("b",[t._v("Spring Boot")]),t._v(", "),n("b",[t._v("Node.js")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:n("a692"),alt:"Avatar"}})])])}],b={name:"Hero",data:function(){return{linkedin:"http://linkedin.com/in/shahroz-saleem",email:"shahrozsaleem17@gmail.com"}},methods:{contact:function(){document.querySelector(".contact").scrollIntoView({behavior:"smooth"})}}},h=b,A=(n("94eb"),n("1bef"),n("ff53"),n("57ae"),n("3e19"),n("7090"),n("7ce2"),Object(u["a"])(h,v,m,!1,null,"523926a6",null)),C=A.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about"},[n("heading",{attrs:{ahead:t.title.ahead,behind:t.title.behind}}),t._m(0)],1)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover"},[a("div",{staticClass:"left"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:n("fcfe"),alt:"Avatar"}})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"about-me"},[a("p",[t._v(" As a Software Engineer and UX developer, I understand the complete software product life cycle. From requirements to design, development to maintenance, I uncover problems and provide the best possible stable solutions by applying SDLC principles and industry standards. ")]),a("p",[t._v(" I had a degree in Software Engineering and Experience in developing Enterprise applications along with knowledge of cutting edge technologies and UX/UI principles. ")])])])])}],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("div",{staticClass:"cover"},[n("div",{staticClass:"ahead"},[t._v(" "+t._s(t.ahead)+" ")]),n("div",{staticClass:"behind"},[t._v(" "+t._s(t.behind)+" ")])])])},j=[],E={name:"Heading",props:{ahead:{type:String,required:!0},behind:{type:String,required:!0}}},k=E,z=(n("0508"),n("3b56"),Object(u["a"])(k,w,j,!1,null,"e5d2b1de",null)),O=z.exports,N={name:"About",components:{Heading:O},data:function(){return{title:{ahead:"About",behind:"Me"}}}},y=N,Q=(n("3ad9"),n("6167"),Object(u["a"])(y,D,x,!1,null,"60b7b8db",null)),I=Q.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"work"},[n("heading",{attrs:{ahead:t.title.ahead,behind:t.title.behind}}),n("experience",{attrs:{info:t.info,detail:t.detail}})],1)},T=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"experience"},[a("div",{staticClass:"mode"},[a("div",{staticClass:"info"},[a("vs-card",{scopedSlots:t._u([{key:"title",fn:function(){return[a("h3",[t._v(t._s(t.info.duration))])]},proxy:!0},{key:"img",fn:function(){return[a("img",{attrs:{src:n("7584")("./"+t.info.image),alt:"Logo"}})]},proxy:!0},{key:"text",fn:function(){return[a("p",[t._v(" "+t._s(t.info.job)+" ")])]},proxy:!0}])})],1),a("div",{staticClass:"detail"},[a("div",{staticClass:"company"},[t._v(" "+t._s(t.detail.company)+" ")]),a("ul",{staticClass:"tasks"},t._l(t.detail.tasks,(function(e,n){return a("li",{key:n,staticClass:"task"},[a("p",[t._v(" "+t._s(e)+" ")])])})),0)])])])},H=[],X={props:{info:{type:Object,required:!0},detail:{type:Object,required:!0}}},B=X,M=(n("f5eb"),n("eeb2"),n("2c00"),n("c470"),Object(u["a"])(B,U,H,!1,null,"36f0ade1",null)),S=M.exports,K={name:"Work",components:{Heading:O,Experience:S},data:function(){return{title:{ahead:"Work",behind:"Experience"},info:{image:"logos/nakisa.jpg",duration:"June 2019 - Present",job:"Software Developer"},detail:{company:"Nakisa Inc",tasks:["Worked on multiple projects starting with requirements gathering, designing, developing, refactoring, and code implementation","Implemented the redesigned user dashboard with better UX and performance","Refactored existing code to improve performance and the removal of redundant code","Introduced State management i.e. VUEX in the existing project","Introduces team-level standards and best coding practices guidelines","Created documentation of the major features of application for testing and integration","Improved existing layout, applied UX/UI principles to improve overall application design","Implemented OAuth2 authentication in all resource projects","Developed Api endpoints to serve data to client applications"]}}}},W=K,Z=(n("d43e"),Object(u["a"])(W,P,T,!1,null,"6ccece42",null)),J=Z.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"skills"},[n("heading",{attrs:{ahead:t.ahead,behind:t.behind}}),n("div",{staticClass:"cover"},t._l(t.skills,(function(t,e){return n("item",{key:e,attrs:{image:t.image,about:t.about}})})),1)],1)},Y=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item"},[a("div",{staticClass:"cover"},[a("img",{attrs:{src:n("7584")("./"+t.image),alt:"Logo"}})]),a("div",{staticClass:"about"},[t._v(" "+t._s(t.about)+" ")])])},G=[],L={name:"Item",props:{image:{type:String,required:!0},about:{type:String,required:!0}}},V=L,F=(n("5183"),Object(u["a"])(V,_,G,!1,null,"181c087c",null)),q=F.exports,$={name:"Skills",components:{Heading:O,Item:q},data:function(){return{ahead:"Professional",behind:"Skills",skills:[{image:"logos/angular.png",about:"Angular"},{image:"logos/java.png",about:"Java"},{image:"logos/materialUi.png",about:"Material Design"},{image:"logos/vue.png",about:"VueJs"},{image:"logos/javascript.png",about:"JavaScript"},{image:"logos/mongodb.png",about:"MongoDB"},{image:"logos/photoshop.png",about:"Photoshop"},{image:"logos/nodejs.png",about:"Node.js"},{image:"logos/springBoot.png",about:"Spring Boot"},{image:"logos/sqlServer.png",about:"SQL"}]}}},tt=$,et=(n("e5a0"),Object(u["a"])(tt,R,Y,!1,null,"2aa0a134",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact"},[n("heading",{attrs:{ahead:t.ahead,behind:t.behind}}),n("div",{staticClass:"cover"},[t._m(0),n("div",{staticClass:"right"},[n("ul",{staticClass:"info"},[n("li",{staticClass:"item"},[n("vs-button",{attrs:{icon:"",href:"mailto:"+t.email}},[n("i",{staticClass:"bx bx-envelope"})]),n("div",{staticClass:"text"},[t._v(" "+t._s(t.email)+" ")])],1),n("li",{staticClass:"item"},[n("vs-button",{attrs:{icon:"",href:t.linkedinUrl}},[n("i",{staticClass:"bx bxl-linkedin"})]),n("div",{staticClass:"text"},[t._v(" "+t._s(t.linkedin)+" ")])],1)]),n("div",{staticClass:"form"},[n("div",{staticClass:"field"},[n("vs-input",{staticClass:"field-item",attrs:{type:"text",label:"Subject",placeholder:"Email Subject"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}})],1),n("div",{staticClass:"field"},[n("vs-input",{staticClass:"field-item",attrs:{type:"text",label:"Message",placeholder:"Email Body"},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1),n("vs-button",{attrs:{primary:"",flat:"",href:t.emailData},on:{click:function(e){t.subject="",t.body=""}}},[t._v(" Send Email ")])],1)])])],1)},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:n("2e1d"),alt:"Avatar"}})])])}],st={name:"Contact",components:{Heading:O},data:function(){return{ahead:"Let's",behind:"Talk",email:"shahrozsaleem17@gmail.com",linkedin:"linkedin.com/in/shahroz-saleem",linkedinUrl:"http://linkedin.com/in/shahroz-saleem",subject:"",body:""}},computed:{emailData:function(){var t="mailto:"+this.email+"?subject="+this.subject+"&body="+this.body;return t}}},ot=st,ct=(n("42f7"),n("5555"),n("4f9c"),Object(u["a"])(ot,at,it,!1,null,"7807d7ac",null)),rt=ct.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-footer"},[t._m(0),n("ul",{staticClass:"links"},[n("li",{staticClass:"link"},[n("vs-button",{attrs:{icon:"",href:"files/resume.pdf",target:"_blank"}},[n("i",{staticClass:"bx bx-file-blank"})]),n("div",{staticClass:"text"},[t._v(" Resume ")])],1),n("li",{staticClass:"link"},[n("vs-button",{attrs:{icon:"",href:t.getEmail}},[n("i",{staticClass:"bx bx-envelope"})]),n("div",{staticClass:"text"},[t._v(" "+t._s(t.email)+" ")])],1),n("li",{staticClass:"link"},[n("vs-button",{attrs:{icon:"",href:t.getLinkedIn}},[n("i",{staticClass:"bx bxl-linkedin"})]),n("div",{staticClass:"text"},[t._v(" "+t._s(t.linkedin)+" ")])],1)])])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("div",{staticClass:"logo-cover"},[a("img",{attrs:{src:n("9d64"),alt:"logo"}})])])}],dt={name:"AppFooter",data:function(){return{email:"shahrozsaleem17@gmail.com",linkedin:"linkedin.com/in/shahroz-saleem",linkedinUrl:"http://linkedin.com/in/shahroz-saleem"}},computed:{getEmail:function(){return"mailto:"+this.email},getLinkedIn:function(){return this.linkedinUrl}}},ft=dt,pt=(n("c75b"),Object(u["a"])(ft,lt,ut,!1,null,"33c0fbd6",null)),gt=pt.exports,vt={name:"Home",components:{Hero:C,About:I,Work:J,Skills:nt,Contact:rt,AppFooter:gt}},mt=vt,bt=(n("a7d6"),Object(u["a"])(mt,p,g,!1,null,"30ab594e",null)),ht=bt.exports,At={name:"App",components:{Navbar:f,Home:ht}},Ct=At,Dt=(n("034f"),Object(u["a"])(Ct,i,s,!1,null,null,null)),xt=Dt.exports,wt=n("574d"),jt=n.n(wt);n("04f2");a["default"].use(jt.a,{}),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(xt)}}).$mount("#app")},"57ae":function(t,e,n){"use strict";var a=n("f2e3"),i=n.n(a);i.a},"58c0":function(t,e,n){},"5a8f":function(t,e,n){t.exports=n.p+"img/javascript.c4ee45e4.png"},6167:function(t,e,n){"use strict";var a=n("a7ae"),i=n.n(a);i.a},"645f":function(t,e,n){},"6c61":function(t,e,n){},"6cef":function(t,e,n){},"6e25":function(t,e,n){},7090:function(t,e,n){"use strict";var a=n("e2b7"),i=n.n(a);i.a},7584:function(t,e,n){var a={"./about-me-1.svg":"92b2","./about-me.svg":"fcfe","./avatar.svg":"a692","./contact.svg":"2e1d","./logo.png":"9d64","./logo.svg":"e347","./logos/angular.png":"8ccd","./logos/java.png":"9601","./logos/javascript.png":"5a8f","./logos/materialUi.png":"bd38","./logos/mongodb.png":"06b0","./logos/nakisa.jpg":"ff55","./logos/nodejs.png":"bfa4","./logos/photoshop.png":"42e1","./logos/springBoot.png":"b884","./logos/sqlServer.png":"0b55","./logos/vue.png":"f742"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="7584"},"7a6e":function(t,e,n){},"7ce2":function(t,e,n){"use strict";var a=n("6c61"),i=n.n(a);i.a},"85ec":function(t,e,n){},"8ccd":function(t,e){t.exports="data:image/png;base64,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"},"92b2":function(t,e,n){t.exports=n.p+"img/about-me-1.db1220d2.svg"},"94eb":function(t,e,n){"use strict";var a=n("5530"),i=n.n(a);i.a},9601:function(t,e,n){t.exports=n.p+"img/java.74a4e20c.png"},"96ad":function(t,e,n){},"9d64":function(t,e,n){t.exports=n.p+"img/logo.cf201774.png"},a692:function(t,e,n){t.exports=n.p+"img/avatar.1ca413c8.svg"},a7ae:function(t,e,n){},a7d6:function(t,e,n){"use strict";var a=n("4d01"),i=n.n(a);i.a},b0f9:function(t,e,n){},b5a5:function(t,e,n){},b78c:function(t,e,n){"use strict";var a=n("dc81"),i=n.n(a);i.a},b884:function(t,e,n){t.exports=n.p+"img/springBoot.886e10b7.png"},bd38:function(t,e){t.exports="data:image/png;base64,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"},bfa4:function(t,e,n){t.exports=n.p+"img/nodejs.08ebf3d0.png"},c1ae:function(t,e,n){},c470:function(t,e,n){"use strict";var a=n("6e25"),i=n.n(a);i.a},c75b:function(t,e,n){"use strict";var a=n("1a42"),i=n.n(a);i.a},c8ea:function(t,e,n){},cba1:function(t,e,n){},d43e:function(t,e,n){"use strict";var a=n("f9f4"),i=n.n(a);i.a},dc81:function(t,e,n){},e2b7:function(t,e,n){},e347:function(t,e,n){t.exports=n.p+"img/logo.a0a9330b.svg"},e5a0:function(t,e,n){"use strict";var a=n("b5a5"),i=n.n(a);i.a},eeb2:function(t,e,n){"use strict";var a=n("36a1"),i=n.n(a);i.a},f2e3:function(t,e,n){},f5eb:function(t,e,n){"use strict";var a=n("645f"),i=n.n(a);i.a},f742:function(t,e,n){t.exports=n.p+"img/vue.82b9c7a5.png"},f9f4:function(t,e,n){},fcfe:function(t,e,n){t.exports=n.p+"img/about-me.920a0d08.svg"},fd7f:function(t,e,n){},ff53:function(t,e,n){"use strict";var a=n("c1ae"),i=n.n(a);i.a},ff55:function(t,e,n){t.exports=n.p+"img/nakisa.3f7e1449.jpg"}});
//# sourceMappingURL=app.8712107c.js.map