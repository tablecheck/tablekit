import{j as e,F as g}from"./emotion-react-jsx-runtime.browser.esm-3699e87e.js";import{Q as m,R as y}from"./TextArea-7188b12b.js";import"./index-d8ade8ea.js";import{h as A}from"./Tooltip-a3537cc1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7e8b2c4e.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const c=[{id:"1","data-variant":"info",children:"Info"},{id:"2","data-variant":"warning",children:"Warning"},{id:"3","data-variant":"error",children:"Error"},{id:"4","data-variant":"bare",children:"Bare"},{id:"5","data-variant":"disabled",children:"Disabled"}].map(r=>({...r,children:`${r.children} - This very, very long text should correctly show if the columns and wrapping are working correctly`})),x={title:"Components/InputAlert",component:m,parameters:{variants:c.map(r=>r["data-variant"]),...y}},l=({InputAlert:r})=>e(g,{children:c.map(({id:u,...h})=>e(r,{...h},u))}),a=l.bind({});a.args={InputAlert:m};a.parameters={useEmotion:!0};const t=l.bind({});t.args={InputAlert:A};t.parameters={useEmotion:!1};var n,o,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`({
  InputAlert
}) => <>
    {contentVariants.map(({
    id: key,
    ...props
  }) => <InputAlert key={key} {...props} />)}
  </>`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
  InputAlert
}) => <>
    {contentVariants.map(({
    id: key,
    ...props
  }) => <InputAlert key={key} {...props} />)}
  </>`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const C=["Emotion","Class"];export{t as Class,a as Emotion,C as __namedExportsOrder,x as default};
