import{j as r,a as u,F as k}from"./emotion-react-jsx-runtime.browser.esm-ccbc8680.js";import{o as p,p as x,s as L,q as f}from"./TextArea-88294518.js";import"./index-b6937ee2.js";import{C as v,d as w}from"./Tooltip-92151083.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8c426718.js";import"./index-4d501b15.js";import"./_commonjsHelpers-725317a4.js";const C=["Default","Hover","Focus","Disabled"],g=L.find(o=>o.includes("checkbox")),q={title:"Components/Checkbox",component:p,parameters:{...x,variants:C,auxiliarySelectors:[g]}},b=({Checkbox:o,LabelComponent:h})=>r(k,{children:[!0,!1].map(t=>C.map(s=>u(h,{children:[r(o,{"data-pseudo":s.toLowerCase(),disabled:s.toLowerCase()==="disabled",defaultChecked:t}),s," ",t?"☑":"☐"]})))}),e=b.bind({});e.args={Checkbox:p,LabelComponent:f};e.parameters={useEmotion:!0};const a=b.bind({});a.args={Checkbox:v,LabelComponent:w};a.parameters={useEmotion:!1};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  Checkbox,
  LabelComponent
}) => <>
    {[true, false].map(isChecked => contentVariants.map(variant => <LabelComponent>
          <Checkbox data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} defaultChecked={isChecked} />
          {variant} {isChecked ? '☑' : '☐'}
        </LabelComponent>))}
  </>`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,m,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  Checkbox,
  LabelComponent
}) => <>
    {[true, false].map(isChecked => contentVariants.map(variant => <LabelComponent>
          <Checkbox data-pseudo={variant.toLowerCase()} disabled={variant.toLowerCase() === 'disabled'} defaultChecked={isChecked} />
          {variant} {isChecked ? '☑' : '☐'}
        </LabelComponent>))}
  </>`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const y=["Emotion","Class"];export{a as Class,e as Emotion,y as __namedExportsOrder,q as default};
//# sourceMappingURL=Checkbox.stories-674fb77a.js.map
