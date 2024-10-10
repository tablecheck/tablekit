import{j as r,a as L,F as R}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{a3 as l,a4 as h,s as f,q as k}from"./TextArea-10b25f7a.js";import"./index-b6937ee2.js";import{R as v,l as w}from"./Tooltip-224024c2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const C=["Default","Hover","Focus","Disabled"],x=f.find(o=>o.includes("radio")),D={title:"Components/Radio",component:l,parameters:{...h,variants:C,auxiliarySelectors:[x]}},b=({Radio:o,LabelComponent:u})=>r(R,{children:[!0,!1].map(t=>C.map(s=>L(u,{children:[r(o,{"data-pseudo":s.toLowerCase(),disabled:s.toLowerCase()==="disabled",checked:t}),s," ",t?"☑":"☐"]})))}),a=b.bind({});a.args={Radio:l,LabelComponent:k};a.parameters={useEmotion:!0};const e=b.bind({});e.args={Radio:v,LabelComponent:w};e.parameters={useEmotion:!1};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
  </>`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const q=["Emotion","Class"];export{e as Class,a as Emotion,q as __namedExportsOrder,D as default};
//# sourceMappingURL=Radio.stories-ec393dd5.js.map
