import{a as c,j as n,F as x}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{c as p}from"./emotion-styled-base.browser.esm-6230d6a2.js";import{_ as k,I as w,z as C,bs as _,bt as j,bu as O,a2 as A}from"./TextArea-7563384f.js";import{R as l,r as B}from"./index-b6937ee2.js";import{_ as P,a as E,b as V}from"./_baseIteratee-39852961.js";import{i as $,a as z}from"./toString-7442456e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";var h,b,F=["children","size"],H=l.forwardRef(function(e,r){var a=e.children,o=e.size,s=o===void 0?16:o,i=k(e,F);return l.createElement(w,C({width:s,height:s,ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},i),h||(h=l.createElement("path",{d:"M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"})),b||(b=l.createElement("path",{d:"M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"})),a)});function T(t,e,r,a){for(var o=-1,s=t==null?0:t.length;++o<s;){var i=t[o];e(a,i,r(i),t)}return a}var K=T,S=$;function I(t,e){return function(r,a){if(r==null)return r;if(!S(r))return t(r,a);for(var o=r.length,s=e?o:-1,i=Object(r);(e?s--:++s<o)&&a(i[s],s,i)!==!1;);return r}}var R=I,W=P,L=R,D=L(W),M=D,U=M;function Z(t,e,r,a){return U(t,function(o,s,i){e(a,o,r(o),i)}),a}var q=Z,G=K,J=q,N=E,Q=z;function X(t,e){return function(r,a){var o=Q(r)?G:J,s=e?e():{};return o(r,t,N(a),s)}}var Y=X,ee=V,re=Y,te=Object.prototype,ae=te.hasOwnProperty,oe=re(function(t,e,r){ae.call(t,r)?t[r].push(e):ee(t,r,[e])}),ne=oe;const fe={title:"Theming/Colors",parameters:{variants:[1,2,3,4]}},se=p("button",{target:"exwnf2"})({name:"1rzcm0b",styles:"display:grid;grid-template-columns:auto 1fr auto;place-self:stretch;gap:var(--spacing-l3);align-items:center;padding-inline-end:var(--spacing-l4);border:1px solid var(--border);border-radius:var(--border-radius-small);cursor:pointer;&:hover{background-color:var(--surface-hover);box-shadow:var(--elevation-medium);}"}),ie=p("span",{target:"exwnf1"})({name:"199m1li",styles:"width:60px;height:60px;border-top-left-radius:var(--border-radius-small);border-bottom-left-radius:var(--border-radius-small);border-right:1px solid var(--border);display:inline-flex;align-items:center;justify-content:center"}),m=p("span",{target:"exwnf0"})({name:"qnya0",styles:"color:var(--info-text);font-weight:bold;display:inline-block;width:80px;text-align:end;padding-inline-end:var(--spacing-l2)"});function g({color:t,background:e}){const r=`var(--${e})`,a=`var(--${t})`;return c(se,{type:"button",onClick:o=>{o.preventDefault(),navigator.clipboard.writeText(a)},children:[n(ie,{style:{backgroundColor:r,color:a},children:"Text"}),c("span",{style:{textAlign:"start",whiteSpace:"nowrap"},children:[r===a?null:n("small",{children:n(m,{children:"Text:"})}),a,r===a?null:c(x,{children:[n("br",{}),c("small",{children:[n(m,{children:"Background:"})," ",r]})]})]}),n(H,{size:A("iconSize")})]})}function u(t,e){if(e==="text-secondary")return"surface-secondary";if(e==="primary-text")return"primary";if(e.startsWith("text"))return"surface";if(!e.endsWith("-text"))return e;const r=t.find(o=>o===e.replace("-text","-surface")),a=t.find(o=>o===e.replace("-text",""));return r||a||e}const d=()=>c(x,{children:[n("h2",{children:"Themed Colors"}),Object.entries(ne(Object.keys(_),t=>{const[,e]=t.match(/^(text|toggle)-?/)??[];return e||t.replace(/-(active|focus|text|transparent|hover|surface|disabled|visited)/gi,"")})).map(([t,e])=>c(B.Fragment,{children:[n("h4",{children:t.replace(/-/gi," ")}),e.map(r=>n(g,{color:r,background:u(e,r)},r))]},t)),n("h2",{children:"Brand Colors"}),Object.keys(j).map((t,e,r)=>n(g,{color:t,background:u(r,t)},t)),n("h2",{children:"Utility Colors"}),Object.keys(O).map((t,e,r)=>n(g,{color:t,background:u(r,t)},t))]});var f,y,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => <>
    <h2>Themed Colors</h2>
    {Object.entries(groupBy(Object.keys(lightColorsObject), key => {
    const [, rootKey] = key.match(/^(text|toggle)-?/) ?? [];
    if (rootKey) return rootKey;
    return key.replace(/-(active|focus|text|transparent|hover|surface|disabled|visited)/gi, '');
  })).map(([groupKey, keys]) => <React.Fragment key={groupKey}>
        <h4>{groupKey.replace(/-/gi, ' ')}</h4>
        {keys.map(key => <PaletteColor key={key} color={key} background={getBackground(keys, key)} />)}
      </React.Fragment>)}
    <h2>Brand Colors</h2>
    {Object.keys(brandColorsObject).map((key, _, keys) => <PaletteColor key={key} color={key} background={getBackground(keys, key)} />)}
    <h2>Utility Colors</h2>
    {Object.keys(utilityColorsObject).map((key, _, keys) => <PaletteColor key={key} color={key} background={getBackground(keys, key)} />)}
  </>`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const ye=["Palette"];export{d as Palette,ye as __namedExportsOrder,fe as default};
//# sourceMappingURL=Theming.stories-a179c6a8.js.map