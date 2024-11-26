import{j as n,a as E,F as z}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{am as u,an as T}from"./TextArea-01517573.js";import{r as k}from"./index-d8ade8ea.js";import{p as x}from"./Tooltip-53a04026.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const f=["Default","Disabled","Focus"],N={title:"Components/Toggle",component:u,parameters:{...T,variants:f}},y=["small","medium","large"],F=[!1,!0,"indefinite"],g=({Toggle:b,isEmotion:h})=>n(z,{children:y.map(t=>E(k.Fragment,{children:[n("h4",{children:t}),F.map(o=>f.map(r=>n(b,{type:"checkbox",className:h?"custom":void 0,"data-pseudo":r.toLowerCase(),"data-size":t,disabled:r==="Disabled",ref:s=>{s&&(typeof o=="boolean"?s.checked=o:s.indeterminate=!0)}})))]},t))}),e=g.bind({});e.args={Toggle:u,isEmotion:!0};e.parameters={useEmotion:!0};const a=g.bind({});a.args={Toggle:x};a.parameters={useEmotion:!1};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
  </>`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
  </>`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const V=["Emotion","Class"];export{a as Class,e as Emotion,V as __namedExportsOrder,N as default};
