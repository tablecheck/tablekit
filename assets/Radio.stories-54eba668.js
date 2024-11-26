import{j as r,a as L,F as R}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{s as h,a4 as l,a5 as f,q as k}from"./TextArea-01517573.js";import"./index-d8ade8ea.js";import{R as v,l as w}from"./Tooltip-53a04026.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const u=["Default","Hover","Focus","Disabled"],x=h.find(o=>o.includes("radio")),_={title:"Components/Radio",component:l,parameters:{...f,variants:u,auxiliarySelectors:[x]}},C=({Radio:o,LabelComponent:b})=>r(R,{children:[!0,!1].map(t=>u.map(s=>L(b,{children:[r(o,{"data-pseudo":s.toLowerCase(),disabled:s.toLowerCase()==="disabled",checked:t}),s," ",t?"☑":"☐"]})))}),a=C.bind({});a.args={Radio:l,LabelComponent:k};a.parameters={useEmotion:!0};const e=C.bind({});e.args={Radio:v,LabelComponent:w};e.parameters={useEmotion:!1};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`({
  Radio,
  LabelComponent
}) => <>
    {[true, false].map(isChecked => contentVariants.map(variant => <LabelComponent>
          <Radio data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} checked={isChecked} />
          {variant} {isChecked ? '☑' : '☐'}
        </LabelComponent>))}
  </>`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
  Radio,
  LabelComponent
}) => <>
    {[true, false].map(isChecked => contentVariants.map(variant => <LabelComponent>
          <Radio data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} checked={isChecked} />
          {variant} {isChecked ? '☑' : '☐'}
        </LabelComponent>))}
  </>`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const q=["Emotion","Class"];export{e as Class,a as Emotion,q as __namedExportsOrder,_ as default};
