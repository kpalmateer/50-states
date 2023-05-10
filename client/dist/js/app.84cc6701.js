(function(){"use strict";var t={811:function(t,e,a){var n=a(963),i=a(252);function r(t,e,a,n,r,s){const o=(0,i.up)("page-header"),u=(0,i.up)("router-view"),c=(0,i.up)("page-footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o),(0,i.Wm)(u),(0,i.Wm)(c)],64)}const s=t=>((0,i.dD)("data-v-39b62459"),t=t(),(0,i.Cn)(),t),o={id:"block-header"},u=s((()=>(0,i._)("h1",{id:"title"},"Have you visited every state?",-1))),c=[u];function d(t,e,a,n,r,s){return(0,i.wg)(),(0,i.iD)("div",o,c)}var l={name:"PageHeader"},p=a(744);const v=(0,p.Z)(l,[["render",d],["__scopeId","data-v-39b62459"]]);var h=v;const f=t=>((0,i.dD)("data-v-22e3cc1c"),t=t(),(0,i.Cn)(),t),m={id:"navigation-links"},y={class:"nav-link"},g={class:"nav-link"},b=f((()=>(0,i._)("p",null,[(0,i.Uk)("Header image by "),(0,i._)("a",{href:"https://unsplash.com/photos/KpBXAOs80YI"},"@chrislawton on Unsplash")],-1))),A=f((()=>(0,i._)("p",null,[(0,i._)("a",{target:"_blank",href:"https://icons8.com/icon/43632/map"},"Map"),(0,i.Uk)(" icon by "),(0,i._)("a",{target:"_blank",href:"https://icons8.com"},"Icons8")],-1)));function k(t,e,a,n,r,s){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",m,[(0,i._)("span",y,[(0,i.Wm)(o,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Home")])),_:1})]),(0,i._)("span",g,[(0,i.Wm)(o,{to:"/about"},{default:(0,i.w5)((()=>[(0,i.Uk)("About this site")])),_:1})])]),b,A])}var w={name:"PageFooter"};const S=(0,p.Z)(w,[["render",k],["__scopeId","data-v-22e3cc1c"]]);var O=S;const C={class:"state-list-container"};function j(t,e,a,n,r,s){const o=(0,i.up)("state-summary"),u=(0,i.up)("state-detail");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[(0,i.Wm)(o,{states:r.states},null,8,["states"])]),(0,i._)("div",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.states,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"state-container",key:t.name},[(0,i.Wm)(u,{state:t,onUpdateVisited:s.updateVisited},null,8,["state","onUpdateVisited"])])))),128))])],64)}var V=a(577),z="data:image/png;base64,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";const Z=t=>((0,i.dD)("data-v-3cb2dd50"),t=t(),(0,i.Cn)(),t),D={class:"state-info"},Y={class:"state-name"},I=Z((()=>(0,i._)("img",{class:"map-icon",src:z},null,-1)));function P(t,e,a,r,s,o){const u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",D,[(0,i._)("span",Y,(0,V.zw)(a.state.name),1),(0,i._)("div",null,[(0,i.wy)((0,i._)("input",{class:"visit-state",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=t=>s.visited=t),onChange:e[1]||(e[1]=(...t)=>o.visitedChanged&&o.visitedChanged(...t))},null,544),[[n.e8,s.visited]])]),(0,i._)("div",null,[(0,i.Wm)(u,{to:{name:"StateMap",params:{state:a.state.name}}},{default:(0,i.w5)((()=>[I])),_:1},8,["to"])])])}var N={name:"StateDetail",emits:["update-visited"],props:{state:Object},data(){return{visited:this.state.visited}},methods:{visitedChanged(){this.$emit("update-visited",this.state.name,this.visited)}}};const q=(0,p.Z)(N,[["render",P],["__scopeId","data-v-3cb2dd50"]]);var E=q;const U={key:0,id:"all-visited-message"};function L(t,e,a,n,r,s){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("p",null,"There are "+(0,V.zw)(a.states.length)+" states, including DC.",1),(0,i._)("p",null,"You have visited "+(0,V.zw)(s.totalVisited)+" "+(0,V.zw)(s.units)+".",1),s.areAllVisited?((0,i.wg)(),(0,i.iD)("p",U,"You have visited all states!")):(0,i.kq)("",!0)])}var T={name:"StateSummary",props:{states:Array},computed:{totalVisited(){let t=0;return this.states.forEach((e=>{e.visited&&t++})),t},units(){return 1===this.totalVisited?"state":"states"},areAllVisited(){return this.totalVisited===this.states.length}}};const H=(0,p.Z)(T,[["render",L],["__scopeId","data-v-eff98d12"]]);var x=H,Q={name:"StateList",components:{StateDetail:E,StateSummary:x},data(){return{states:[]}},mounted(){this.fetchAllStates()},methods:{fetchAllStates(){this.$stateService.getAllStates().then((t=>{this.states=t})).catch((t=>{alert("Sorry, can't fetch state list"),console.error(t)}))},updateVisited(t,e){this.$stateService.setVisited(t,e).then((()=>{this.fetchAllStates()})).catch((t=>{alert("Sorry, can't update state"),console.error(t)}))}}};const W=(0,p.Z)(Q,[["render",j],["__scopeId","data-v-1b3eebb9"]]);var G=W,X={name:"App",components:{StateList:G,PageFooter:O,PageHeader:h}};const _=(0,p.Z)(X,[["render",r]]);var R=_,J=a(154),K={getAllStates(){return J.Z.get("/api/states").then((t=>t.data))},setVisited(t,e){let a={visited:e};return J.Z.patch("api/states/"+t,a).then((t=>t.data))},getOneState(t){return J.Z.get("/api/state/"+t).then((t=>t.data))}},B=a(119);const F=(0,i._)("h2",null,"Where have you traveled to?",-1),M=(0,i._)("p",null,"Use this site to keep track of which states you've visited.",-1),$=(0,i._)("p",null,"A Vue.js site by Kyle P",-1),tt=[F,M,$];function et(t,e,a,n,r,s){return(0,i.wg)(),(0,i.iD)("div",null,tt)}var at={name:"AboutSite"};const nt=(0,p.Z)(at,[["render",et]]);var it=nt;const rt={class:"state-map"},st={key:0},ot={key:1},ut={key:2,id:"map-container"};function ct(t,e,a,n,r,s){const o=(0,i.up)("l-tile-layer"),u=(0,i.up)("l-map");return(0,i.wg)(),(0,i.iD)("div",rt,[(0,i._)("h2",null,"The state of "+(0,V.zw)(r.state.name),1),r.state.visited?((0,i.wg)(),(0,i.iD)("p",st,"You have visited this state.")):((0,i.wg)(),(0,i.iD)("p",ot,"You haven't visited this state.")),r.dataReady?((0,i.wg)(),(0,i.iD)("div",ut,[(0,i.Wm)(u,{ref:"map",onReady:s.onMapReady,center:s.mapCenter,zoom:r.state.zoom},{default:(0,i.w5)((()=>[(0,i.Wm)(o,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"© OpenStreetMap contributors"})])),_:1},8,["onReady","center","zoom"])])):(0,i.kq)("",!0)])}var dt=a(713),lt={name:"StateMap",components:{LMap:dt.iA,LTileLayer:dt.Hw},data(){return{state:{},dataReady:!1,mapReady:!1}},mounted(){this.state.name=this.$route.params.state,this.fetchStateData()},methods:{fetchStateData(){this.$stateService.getOneState(this.state.name).then((t=>{this.state=t,this.dataReady=!0})).catch((t=>{t.response&&404===t.response.status?this.state.name="???":(alert("Sorry - error fetching data about the state"),console.error(t))}))},onMapReady(){this.mapReady=!0},setMapView(){this.mapReady&&this.dataReady&&this.$refs.map.leafletObject.setView(this.mapCenter,this.zoom)}},computed:{mapCenter(){return[this.state.lat,this.state.lon]}}};const pt=(0,p.Z)(lt,[["render",ct],["__scopeId","data-v-da013244"]]);var vt=pt,ht=(0,B.p7)({history:(0,B.r5)(),routes:[{path:"/",name:"StateList",component:G},{path:"/about",name:"AboutSite",component:it},{path:"/map/:state",name:"StateMap",component:vt}]});let ft=(0,n.ri)(R);ft.config.globalProperties.$stateService=K,ft.use(ht),ft.mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,r){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],r=t[d][2];for(var o=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(o=!1,r<s&&(s=r));if(o){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[n,i,r]}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var r=Object.create(null);a.r(r);var s={};t=t||[null,e({}),e([]),e(e)];for(var o=2&i&&n;"object"==typeof o&&!~t.indexOf(o);o=e(o))Object.getOwnPropertyNames(o).forEach((function(t){s[t]=function(){return n[t]}}));return s["default"]=function(){return n},a.d(r,s),r}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{93:"59386b2c",243:"5ff6cf6f",431:"6c4b2b61",633:"d93c196c",858:"da99cb88"}[t]+".js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";a.l=function(n,i,r,s){if(t[n])t[n].push(i);else{var o,u;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==e+r){o=l;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+r),o.src=n),t[n]=[i];var p=function(e,a){o.onerror=o.onload=null,clearTimeout(v);var i=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(a)})),e)return e(a)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,n){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(a,n){i=t[e]=[a,n]}));n.push(i[2]=r);var s=a.p+a.u(e),o=new Error,u=function(n){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",o.name="ChunkLoadError",o.type=r,o.request=s,i[1](o)}};a.l(s,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,s=n[0],o=n[1],u=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(u)var d=u(a)}for(e&&e(n);c<s.length;c++)r=s[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(d)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(811)}));n=a.O(n)})();
//# sourceMappingURL=app.84cc6701.js.map