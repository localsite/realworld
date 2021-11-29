"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[116],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9798:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},l="Expectations",c={unversionedId:"implementation-creation/expectations",id:"implementation-creation/expectations",isDocsHomePage:!1,title:"Expectations",description:"Remember: Keep your codebases simple, yet robust.",source:"@site/docs/implementation-creation/expectations.md",sourceDirName:"implementation-creation",slug:"/implementation-creation/expectations",permalink:"/realworld/docs/implementation-creation/expectations",editUrl:"https://github.com/gothinkster/realworld/tree/main/docs/docs/docs/implementation-creation/expectations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/realworld/docs/implementation-creation/introduction"},next:{title:"Features",permalink:"/realworld/docs/implementation-creation/features"}},u=[{value:"Remember: Keep your codebases <em>simple</em>, yet <em>robust</em>.",id:"remember-keep-your-codebases-simple-yet-robust",children:[]},{value:"To write tests, or to not write tests?",id:"to-write-tests-or-to-not-write-tests",children:[]},{value:"Project Overview",id:"project-overview",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"expectations"},"Expectations"),(0,i.kt)("h2",{id:"remember-keep-your-codebases-simple-yet-robust"},"Remember: Keep your codebases ",(0,i.kt)("em",{parentName:"h2"},"simple"),", yet ",(0,i.kt)("em",{parentName:"h2"},"robust"),"."),(0,i.kt)("p",null,"If a new developer to your framework comes along and takes longer than 10 minutes to grasp the high-level architecture, it's likely that you went a little overboard in the engineering department."),(0,i.kt)("p",null,"Alternatively, you should ",(0,i.kt)("em",{parentName:"p"},"never")," forgo following fundamental best practices for the sake of simplicity, lest we teach that same newbie dev the ",(0,i.kt)("em",{parentName:"p"},"wrong")," way of doing things."),(0,i.kt)("p",null,"The quality & architecture of Conduit implementations should reflect something similar to an early-stage startup's MVP: functionally complete & stable, but not unnecessarily over-engineered."),(0,i.kt)("h2",{id:"to-write-tests-or-to-not-write-tests"},"To write tests, or to not write tests?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TL;DR")," \u2014 we require a minimum of ",(0,i.kt)("strong",{parentName:"p"},"one")," unit test with every repo, but we'd definitely prefer all of them to include excellent testing coverage if the maintainers are willing to add it (or if someone in the community is kind enough to make a pull request :)"),(0,i.kt)("p",null,'We believe that tests are a good concept, and we are big supporters of TDD in general. Building Conduit implementations without complete testing coverage, on the other hand, is a significant time commitment in and of itself, therefore we didn\'t include it in the spec at first since we believed that if people wanted it, it would be a fantastic "extra credit" aim for the repo. For example, a request for unit tests was made in our Angular 2 repo, and several fantastic community members are presently working on a PR to address it.'),(0,i.kt)("p",null,'Another reason we didn\u2019t include them in the spec is from the "Golden Rule" above:'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The quality & architecture of Conduit implementations should reflect something similar to an early-stage startup's MVP: functionally complete & stable, but not unnecessarily over-engineered.")),(0,i.kt)("p",null,"Most startups we know that work in consumer-facing apps (like Conduit) don\u2019t apply TDD/testing until they have a solid product-market fit, which is smart because they then spend most of their time iterating on product & UI and thus are far more likely to find PMF."),(0,i.kt)("p",null,"This doesn\u2019t mean that TDD/testing === over-engineering, but in certain circumstances that statement does evaluate true (ex: consumer product finding PMF, side-projects, robust prototypes, etc)."),(0,i.kt)("p",null,"That said, we do ",(0,i.kt)("em",{parentName:"p"},"prefer")," that every repo includes excellent tests that are exemplary of TDD/testing with that framework \ud83d\udc4d"),(0,i.kt)("h2",{id:"project-overview"},"Project Overview"),(0,i.kt)("p",null,'"Conduit" is a social blogging site (i.e. a Medium.com clone). It uses a custom API for all requests, including authentication. You can view a live demo over at ',(0,i.kt)("a",{parentName:"p",href:"https://demo.realworld.io"},"https://demo.realworld.io")))}m.isMDXComponent=!0}}]);