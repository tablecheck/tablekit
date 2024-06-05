import{j as o,a as E,F as T}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{ao as g,ap as z}from"./TextArea-cae9bc42.js";import{r as k}from"./index-b6937ee2.js";import{o as x}from"./Tooltip-4bbad4fb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const u=["Default","Disabled","Focus"],N={title:"Components/Toggle",component:g,parameters:{...z,variants:u}},y=["small","medium","large"],F=[!1,!0,"indefinite"],f=({Toggle:b,isEmotion:h})=>o(T,{children:y.map(t=>E(k.Fragment,{children:[o("h4",{children:t}),F.map(r=>u.map(i=>o(b,{type:"checkbox",className:h?"custom":void 0,"data-pseudo":i.toLowerCase(),"data-size":t,disabled:i==="Disabled",ref:s=>{s&&(typeof r=="boolean"?s.checked=r:s.indeterminate=!0)}})))]},t))}),e=f.bind({});e.args={Toggle:g,isEmotion:!0};e.parameters={useEmotion:!0};const a=f.bind({});a.args={Toggle:x};a.parameters={useEmotion:!1};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  Toggle,
  isEmotion
}) => <>
    {sizes.map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {states.map(state => contentVariants.map(variant => <Toggle type="checkbox" className={isEmotion ? 'custom' : undefined} data-pseudo={variant.toLowerCase()} data-size={size} disabled={variant === 'Disabled'} ref={(ref: undefined | HTMLInputElement) => {
      if (!ref) return;
      if (typeof state === 'boolean') ref.checked = state;else ref.indeterminate = true;
    }} />))}
      </React.Fragment>)}
  </>`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  Toggle,
  isEmotion
}) => <>
    {sizes.map(size => <React.Fragment key={size}>
        <h4>{size}</h4>
        {states.map(state => contentVariants.map(variant => <Toggle type="checkbox" className={isEmotion ? 'custom' : undefined} data-pseudo={variant.toLowerCase()} data-size={size} disabled={variant === 'Disabled'} ref={(ref: undefined | HTMLInputElement) => {
      if (!ref) return;
      if (typeof state === 'boolean') ref.checked = state;else ref.indeterminate = true;
    }} />))}
      </React.Fragment>)}
  </>`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const V=["Emotion","Class"];export{a as Class,e as Emotion,V as __namedExportsOrder,N as default};
//# sourceMappingURL=Toggle.stories-1d90c4f0.js.map
