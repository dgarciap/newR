!function(t){var e={};function s(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=5)}([function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);class i{static getElementPosition(t,e,s,o,n,a){const r=Math.floor((s+o)/2);return s>o?s:n(e,t[r])?r:a(e,t[r])?i.getElementPosition(t,e,s,r-1,n,a):i.getElementPosition(t,e,r+1,o,n,a)}static insertElement(t,e,s){return[...t.slice(0,s),e,...t.slice(s)]}static removeElement(t,e){return[...t.slice(0,e),...t.slice(e+1)]}}class o{constructor(t,e,s){this.name=t,this.version=e,this.apdex=s}getName(){return this.name}getVersion(){return this.version}getApdex(){return this.apdex}static isEqual(t,e){return t.name===e.name&&t.version===e.version&&t.apdex===e.apdex}static isLess(t,e){return t.apdex>e.apdex||t.apdex===e.apdex&&t.name<e.name||t.apdex===e.apdex&&t.name===e.name&&t.version>e.version}}const n=25;class a{constructor(t){this.name=t,this.appList=[]}static _createHostApp(t){return new o(t.name,t.version,t.apdex)}addApp(t){const e=a._createHostApp(t),s=i.getElementPosition(this.appList,e,0,this.appList.length-1,o.isEqual,o.isLess);if(this.appList[s]&&o.isEqual(this.appList[s],e))throw Error(`${e.toString()} is already on ${this.toString()} app list.`);this.appList=i.insertElement(this.appList,e,s)}removeApp(t){const e=a._createHostApp(t),s=i.getElementPosition(this.appList,e,0,this.appList.length-1,o.isEqual,o.isLess);if(!o.isEqual(this.appList[s],e))throw Error(`${e.toString()} is not on ${this.toString()} app list.`);this.appList=i.removeElement(this.appList,s)}getTopApps(){return this.appList.slice(0,n)}getTop5Apps(){return this.appList.slice(0,5)}getHostName(){return this.name}toString(){return`Host: ${this.name}`}static isEqual(t,e){return t.name===e.name}static isLess(t,e){return t.name<e.name}}s(0),s(1);class r{constructor(t,e,s=!1,i){this.onChangeCallback=i;const o=document.createElement("div");o.classList.add("title-bar-container");const n=document.createElement("p");n.classList.add("page-title"),n.textContent="Apps by Host";const a=document.createElement("p");a.classList.add("user-email"),a.textContent=`for user ${e}`,this.checkboxInput=document.createElement("input"),this.checkboxInput.classList.add("checkbox-input"),this.checkboxInput.setAttribute("type","checkbox"),this.checkboxInput.checked=s,this.checkboxInput.addEventListener("change",this._onChange.bind(this),!1);const r=document.createElement("p");r.classList.add("checkbox-p"),r.textContent="Show as list",o.appendChild(n),o.appendChild(a),o.appendChild(this.checkboxInput),o.appendChild(r),t.appendChild(o)}_onChange(){this.onChangeCallback&&this.onChangeCallback(this.checkboxInput.checked)}}s(2),s(3),s(4);class c{constructor(t,e){const s=document.createElement("div");s.classList.add("app-component"),s.addEventListener("click",()=>alert(`Version: ${e.getVersion()}`));const i=document.createElement("span");i.classList.add("app-apdex-field"),i.textContent=e.getApdex(),s.appendChild(i);const o=document.createElement("span");o.classList.add("app-name-field"),o.textContent=e.getName(),s.appendChild(o),t.appendChild(s)}}const h="narrow_mod",p="wide_mod";class d{constructor(t,e,s=h){this.parentNode=t,this.hostDiv=document.createElement("div"),this.hostDiv.classList.add("host-component");const i=document.createElement("div");i.classList.add("host-name"),i.textContent=e.getHostName(),this.hostDiv.appendChild(i);const o=document.createElement("div");o.classList.add("app-list"),e.getTop5Apps().forEach(t=>{new c(o,t)}),this.hostDiv.appendChild(o),this.parentNode.appendChild(this.hostDiv),this.changeMode(s)}changeMode(t){t===h?(this.hostDiv.classList.remove("wide-component"),this.hostDiv.classList.add("narrow-component")):(this.hostDiv.classList.remove("narrow-component"),this.hostDiv.classList.add("wide-component"))}}const l="grid_m",u="list_m";class m{constructor(t,e,s=l){this.parentNode=t,this.hostListContainer=document.createElement("div"),this.hostListContainer.classList.add("host-grid"),this.hostNodes=[],e.forEach(t=>{this.hostNodes.push(new d(this.hostListContainer,t))}),this.parentNode.appendChild(this.hostListContainer),this.changeMode(s)}changeMode(t){t===l?(this.hostListContainer.classList.remove("list-mode"),this.hostListContainer.classList.add("grid-mode"),this.hostNodes.forEach(t=>t.changeMode(h))):(this.hostListContainer.classList.remove("grid-mode"),this.hostListContainer.classList.add("list-mode"),this.hostNodes.forEach(t=>t.changeMode(p)))}}const g="pepito@gmail.com";class L{constructor(){this.parentNode=document.querySelector("#page-content")}attachPage(t){for(;this.parentNode.firstChild;)this.parentNode.removeChild(this.parentNode.firstChild);this.titleBar=new r(this.parentNode,g,!1,t=>this.hostGrid.changeMode(t?u:l)),this.hostGrid=new m(this.parentNode,t)}}const f=new class{loadApplications(t,e){this.appData&&t(this.appData),fetch("src/data/host-app-data.json").then(t=>t.json()).then(e=>{this.appData=e,t(this.appData)}).catch(t=>e(t))}},E=new class{constructor(){this.hostList=[]}_getHostPosition(t){return i.getElementPosition(this.hostList,t,0,this.hostList.length-1,a.isEqual,a.isLess)}_getHost(t){const e=new a(t),s=this._getHostPosition(e);if(!this.hostList[s]||!a.isEqual(this.hostList[s],e))throw Error(`${e.toString()} is not on host tree.`);return this.hostList[s]}_getOrCreateHost(t){const e=new a(t),s=this._getHostPosition(e);return this.hostList[s]&&a.isEqual(this.hostList[s],e)||(this.hostList=i.insertElement(this.hostList,e,s)),this.hostList[s]}getTopAppsByHost(t){return this._getHost(t).getTopApps()}addAppToHosts(t,e){e.forEach(e=>{this._getOrCreateHost(e).addApp(t)})}removeAppFromHosts(t,e){e.forEach(e=>{this._getHost(e).removeApp(t)})}getHostList(){return this.hostList}};f.loadApplications(t=>{t.apps.forEach(t=>{E.addAppToHosts(t,t.host)}),(new L).attachPage(E.getHostList())},t=>{console.error("Error",t.stack),console.error("Error",t.name),console.error("Error",t.message)})}]);
//# sourceMappingURL=app.e0cea64c.js.map