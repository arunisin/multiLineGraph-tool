import{r as u,a as b}from"./react-wpXbf5jk.js";import{L,C as _,a as S,X as w,Y as D,T as E,b as O}from"./recharts-C3CTgLPy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();var g={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=u,R=Symbol.for("react.element"),W=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,N=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function y(s,o,i){var r,t={},n=null,l=null;i!==void 0&&(n=""+i),o.key!==void 0&&(n=""+o.key),o.ref!==void 0&&(l=o.ref);for(r in o)A.call(o,r)&&!V.hasOwnProperty(r)&&(t[r]=o[r]);if(s&&s.defaultProps)for(r in o=s.defaultProps,o)t[r]===void 0&&(t[r]=o[r]);return{$$typeof:R,type:s,key:n,ref:l,props:t,_owner:N.current}}x.Fragment=W;x.jsx=y;x.jsxs=y;g.exports=x;var e=g.exports,v,m=b;v=m.createRoot,m.hydrateRoot;const C=u.createContext(void 0),T=({children:s})=>{const[o,i]=u.useState([{key:"x-axis",vals:[10,20,30,40,50,60],strokeColor:"#8884d8",strokeWidth:2}]);return e.jsx(C.Provider,{value:{data:o,setData:i},children:s})},f=()=>{const s=u.useContext(C);if(!s)throw new Error("useDataContext must be used within a DataContextProvider");return s},I=s=>{const o=Math.max(...s.map(r=>r.vals.length));return Array.from({length:o},(r,t)=>{const n={name:`Point ${t+1}`};return s.forEach(l=>{n[l.key]=l.vals[t]||0}),n})},F=({children:s,...o})=>{const[i,r]=u.useState(700),[t,n]=u.useState(700),[l,c]=u.useState("#ccc"),{data:a}=f();return e.jsxs("div",{...o,children:[e.jsxs("div",{style:{display:"flex"},children:[e.jsxs("div",{children:[e.jsx("label",{children:"Width of the graph "}),e.jsx("input",{type:"number",style:{maxWidth:"80px",height:"40px"},onChange:d=>r(+d.target.value),defaultValue:i})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Height of the graph "}),e.jsx("input",{type:"number",style:{maxWidth:"80px",height:"40px"},defaultValue:t,onChange:d=>n(+d.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Height of the graph "}),e.jsx("input",{type:"color",style:{maxWidth:"80px",height:"40px"},defaultValue:l,onChange:d=>c(d.target.value)})]})]}),e.jsxs(L,{width:i,height:t,data:I(a),children:[e.jsx(_,{stroke:l}),s]})]})},j=({lineKey:s})=>{console.log("Line props rendered");const{data:o,setData:i}=f(),r=o.find(a=>a.key===s),t=(a,d)=>{if(r){const h=[...r.vals];h[a]=d,i(k=>k.map(p=>p.key===s?{...p,vals:h}:p))}},n=a=>{r&&i(d=>d.map(h=>h.key===s?{...h,strokeColor:a}:h))},l=a=>{r&&i(d=>d.map(h=>h.key===s?{...h,strokeWidth:a}:h))},c=()=>{i(a=>[...a,{key:s,vals:[0]}])};return r?e.jsxs("div",{className:"",style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:["graph-",s]}),e.jsx("table",{children:e.jsxs("tbody",{children:[r.vals.map((a,d)=>e.jsx("tr",{children:e.jsx("td",{children:e.jsx("input",{type:"number",defaultValue:a,onChange:h=>t(d,Number(h.target.value))})})},d)),e.jsx("tr",{children:e.jsx("td",{children:e.jsx("button",{onClick:()=>t(r.vals.length,0),children:"Add Value"})})}),e.jsx("tr",{children:e.jsxs("td",{children:[e.jsx("label",{children:"Stroke Color: "}),e.jsx("input",{type:"color",defaultValue:r.strokeColor||"#000000",onChange:a=>n(a.target.value)})]})}),e.jsx("tr",{children:e.jsxs("td",{children:[e.jsx("label",{children:"Stroke Width: "}),e.jsx("input",{type:"number",min:1,defaultValue:r.strokeWidth||1,onChange:a=>l(Number(a.target.value))})]})})]})})]}):e.jsx("div",{children:e.jsxs("button",{onClick:c,children:["Start adding values for ",s]})})},$=()=>{const{data:s,setData:o}=f(),[i,r]=u.useState([]),[t,n]=u.useState(""),l=()=>{t&&!i.includes(t)&&(r([...i,t]),n(""),o(c=>[...c,{key:t,vals:[],strokeColor:"#000000",strokeWidth:2}]))};return e.jsxs("div",{children:[e.jsxs("div",{style:{border:"1px solid #333",padding:"30px",borderRadius:"20px"},children:[e.jsxs(F,{children:[i.map(c=>{const a=s.find(d=>d.key===c);return a&&e.jsx(S,{type:"monotone",dataKey:c,stroke:a.strokeColor||"#8884d8",strokeWidth:a.strokeWidth||2},c)}),e.jsx(w,{dataKey:"x-axis"}),e.jsx(D,{}),e.jsx(E,{}),e.jsx(O,{})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Change these values to change x-axis values"}),e.jsx(j,{lineKey:"x-axis"},"x-axis")]})]}),e.jsx("h2",{children:"Add a line"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"20px"},children:i.map(c=>e.jsxs("div",{style:{padding:"20px 0"},children:[e.jsxs("h3",{children:["Values for ",c]}),e.jsx(j,{lineKey:c})]},c))}),e.jsxs("div",{style:{marginTop:"20px",display:"flex",alignItems:"center"},children:[e.jsx("input",{type:"text",placeholder:"Enter new line key",value:t,onChange:c=>n(c.target.value),style:{padding:"10px",marginRight:"10px",flex:"1"}}),e.jsx("button",{onClick:l,disabled:!t.trim(),style:{padding:"10px 20px",backgroundColor:t.trim()?"#4CAF50":"#ccc",color:"#fff",border:"none",cursor:t.trim()?"pointer":"not-allowed"},children:"Add New Line"})]})]})};function H(){return e.jsx(e.Fragment,{children:e.jsx(T,{children:e.jsx($,{})})})}v(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(H,{})}));
