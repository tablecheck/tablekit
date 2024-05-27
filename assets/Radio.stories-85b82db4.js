import{a as r,j as L,F as R}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{W as l,bh as h,s as f,t as k}from"./TextArea-8c932d0e.js";import"./index-d8ade8ea.js";import{R as v,w}from"./Tooltip-07c5a478.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";const C=["Default","Hover","Focus","Disabled"],x=f.find(o=>o.includes("radio")),_={title:"Components/Radio",component:l,parameters:{...h,variants:C,auxiliarySelectors:[x]}},b=({Radio:o,LabelComponent:u})=>r(R,{children:[!0,!1].map(t=>C.map(s=>L(u,{children:[r(o,{"data-pseudo":s.toLowerCase(),disabled:s.toLowerCase()==="disabled",checked:t}),s," ",t?"☑":"☐"]})))}),e=b.bind({});e.args={Radio:l,LabelComponent:k};e.parameters={useEmotion:!0};const a=b.bind({});a.args={Radio:v,LabelComponent:w};a.parameters={useEmotion:!1};var n,i,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  Radio,
  LabelComponent
}) => <>
    {[true, false].map(isChecked => contentVariants.map(variant => <LabelComponent>
          <Radio data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} checked={isChecked} />
          {variant} {isChecked ? '☑' : '☐'}
        </LabelComponent>))}
  </>`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  Radio,
  LabelComponent
}) => <>
    {[true, false].map(isChecked => contentVariants.map(variant => <LabelComponent>
          <Radio data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} checked={isChecked} />
          {variant} {isChecked ? '☑' : '☐'}
        </LabelComponent>))}
  </>`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const D=["Emotion","Class"];export{a as Class,e as Emotion,D as __namedExportsOrder,_ as default};
//# sourceMappingURL=Radio.stories-85b82db4.js.map
