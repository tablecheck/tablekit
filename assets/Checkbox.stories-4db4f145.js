import{a as r,j as u,F as k}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{C as p,r as x,s as L,t as f}from"./TextArea-8c932d0e.js";import"./index-d8ade8ea.js";import{C as v,d as w}from"./Tooltip-07c5a478.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";const C=["Default","Hover","Focus","Disabled"],g=L.find(o=>o.includes("checkbox")),D={title:"Components/Checkbox",component:p,parameters:{...x,variants:C,auxiliarySelectors:[g]}},b=({Checkbox:o,LabelComponent:h})=>r(k,{children:[!0,!1].map(t=>C.map(s=>u(h,{children:[r(o,{"data-pseudo":s.toLowerCase(),disabled:s.toLowerCase()==="disabled",defaultChecked:t}),s," ",t?"☑":"☐"]})))}),e=b.bind({});e.args={Checkbox:p,LabelComponent:f};e.parameters={useEmotion:!0};const a=b.bind({});a.args={Checkbox:v,LabelComponent:w};a.parameters={useEmotion:!1};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  Checkbox,
  LabelComponent
}) => <>
    {[true, false].map(isChecked => contentVariants.map(variant => <LabelComponent>
          <Checkbox data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} defaultChecked={isChecked} />
          {variant} {isChecked ? '☑' : '☐'}
        </LabelComponent>))}
  </>`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,m,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
  Checkbox,
  LabelComponent
}) => <>
    {[true, false].map(isChecked => contentVariants.map(variant => <LabelComponent>
          <Checkbox data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} defaultChecked={isChecked} />
          {variant} {isChecked ? '☑' : '☐'}
        </LabelComponent>))}
  </>`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const y=["Emotion","Class"];export{a as Class,e as Emotion,y as __namedExportsOrder,D as default};
//# sourceMappingURL=Checkbox.stories-4db4f145.js.map
