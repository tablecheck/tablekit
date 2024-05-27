import{a as e,F as A}from"./emotion-react-jsx-runtime.browser.esm-171f6fb8.js";import{L as c,b9 as I}from"./TextArea-8c932d0e.js";import"./index-d8ade8ea.js";import{o as g}from"./Tooltip-07c5a478.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-04c27282.js";import"./_commonjsHelpers-042e6b4d.js";const m=[{id:"1","data-variant":"info",children:"Info"},{id:"2","data-variant":"warning",children:"Warning"},{id:"3","data-variant":"error",children:"Error"},{id:"4","data-variant":"bare",children:"Bare"},{id:"5","data-variant":"disabled",children:"Disabled"}].map(r=>({...r,children:`${r.children} - This very, very long text should correctly show if the columns and wrapping are working correctly`})),w={title:"Components/InputAlert",component:c,parameters:{variants:m.map(r=>r["data-variant"]),...I}},l=({InputAlert:r})=>e(A,{children:m.map(({id:u,...h})=>e(r,{...h},u))}),t=l.bind({});t.args={InputAlert:c};t.parameters={useEmotion:!0};const a=l.bind({});a.args={InputAlert:g};a.parameters={useEmotion:!1};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  InputAlert
}) => <>
    {contentVariants.map(({
    id: key,
    ...props
  }) => <InputAlert key={key} {...props} />)}
  </>`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
  InputAlert
}) => <>
    {contentVariants.map(({
    id: key,
    ...props
  }) => <InputAlert key={key} {...props} />)}
  </>`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const x=["Emotion","Class"];export{a as Class,t as Emotion,x as __namedExportsOrder,w as default};
//# sourceMappingURL=InputAlert.stories-ecc9722a.js.map
